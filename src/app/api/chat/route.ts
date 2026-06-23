import { google } from "@ai-sdk/google";
import {
  streamText,
  convertToModelMessages,
  stepCountIs,
  createUIMessageStream,
  createUIMessageStreamResponse,
  UIMessage,
} from "ai";
import { NextRequest } from "next/server";
import { buildSystemPrompt } from "@/lib/ai/prompt";
import { portfolioTools } from "@/lib/ai/tools";
import {
  detectInjection,
  sanitizeInput,
  isOutputSafe,
  REFUSAL_MESSAGE,
} from "@/lib/ai/guard";

// ── Limits ──
const RATE_LIMIT_MAX = 15;
const RATE_WINDOW_MS = 60 * 60 * 1000; // 1 hour
const MAX_INPUT_LENGTH = 500;
const MAX_MESSAGES = 30; // total messages in conversation history
const MAX_OUTPUT_TOKENS = 500;

// In-memory rate limiter (per-instance on Vercel, fine for a portfolio)
const rateLimit = new Map<string, number[]>();

function getClientIp(req: NextRequest): string {
  return (
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    req.headers.get("x-real-ip") ||
    "unknown"
  );
}

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const timestamps = (rateLimit.get(ip) ?? []).filter(
    (t) => now - t < RATE_WINDOW_MS
  );
  if (timestamps.length >= RATE_LIMIT_MAX) return true;
  rateLimit.set(ip, [...timestamps, now]);
  return false;
}

function jsonError(message: string, status: number) {
  return new Response(JSON.stringify({ error: message }), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}

// Stream a canned refusal in the UI-message format, without calling the model.
function refusalResponse() {
  const stream = createUIMessageStream({
    execute: ({ writer }) => {
      const id = "guard";
      writer.write({ type: "text-start", id });
      writer.write({ type: "text-delta", id, delta: REFUSAL_MESSAGE });
      writer.write({ type: "text-end", id });
    },
  });
  return createUIMessageStreamResponse({ stream });
}

export async function POST(req: NextRequest) {
  const ip = getClientIp(req);

  if (isRateLimited(ip)) {
    return jsonError("Too many messages. Please try again later.", 429);
  }

  let body: { messages?: UIMessage[] };
  try {
    body = await req.json();
  } catch {
    return jsonError("Invalid request.", 400);
  }

  const messages = body.messages;
  if (!Array.isArray(messages) || messages.length === 0) {
    return jsonError("No messages provided.", 400);
  }
  if (messages.length > MAX_MESSAGES) {
    return jsonError("Conversation too long. Please start a new chat.", 400);
  }

  // Latest user text → validate length, then sanitize.
  const lastUserMessage = [...messages].reverse().find((m) => m.role === "user");
  const lastText =
    lastUserMessage?.parts
      ?.filter((p) => p.type === "text")
      .map((p) => (p as { type: "text"; text: string }).text)
      .join("") ?? "";

  if (lastText.length > MAX_INPUT_LENGTH) {
    return jsonError("Message too long.", 400);
  }

  // Defense-in-depth: detect instruction-override / extraction attempts and
  // refuse without ever reaching the model.
  const sanitized = sanitizeInput(lastText, MAX_INPUT_LENGTH);
  if (detectInjection(sanitized)) {
    return refusalResponse();
  }

  const result = streamText({
    model: google("gemini-2.5-flash"),
    system: buildSystemPrompt(),
    messages: await convertToModelMessages(messages),
    tools: portfolioTools,
    stopWhen: stepCountIs(3), // allow: tool call → tool result → text answer
    maxOutputTokens: MAX_OUTPUT_TOKENS,
    onFinish: ({ text }) => {
      // Output monitoring: flag any canary / system-prompt leak for alerting.
      if (text && !isOutputSafe(text)) {
        console.warn("[ai-guard] potential prompt leak detected in output");
      }
    },
  });

  return result.toUIMessageStreamResponse();
}

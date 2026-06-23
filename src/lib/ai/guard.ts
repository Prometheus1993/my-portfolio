/**
 * Prompt-injection defense for the portfolio assistant. Defense-in-depth:
 * input sanitization + injection-pattern detection + output filtering + a
 * canary token. The canonical patterns/canary live in injection-patterns.json
 * so the CI gate (scripts/check-ai-guard.mjs) tests the exact same rules.
 */
import config from "./injection-patterns.json";

export const CANARY: string = config.canary;

const INJECTION = config.patterns.map((p) => new RegExp(p, "i"));
const LEAK = config.leakSignals.map((p) => new RegExp(p, "i"));

// Control chars to strip: everything below 0x20 except \t (09) and \n (0A), plus DEL (7F).
const CONTROL_CHARS = /[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/g;

/** True if the text looks like an instruction-override / extraction attempt. */
export function detectInjection(text: string): boolean {
  return INJECTION.some((re) => re.test(text));
}

/** Strip control chars (keep \n, \t), collapse runs of spaces, cap length. */
export function sanitizeInput(text: string, maxLen = 500): string {
  return text
    .replace(CONTROL_CHARS, "")
    .replace(/[ \t]{3,}/g, "  ")
    .trim()
    .slice(0, maxLen);
}

/** False if the model output leaks the canary or system-prompt fragments. */
export function isOutputSafe(text: string): boolean {
  if (text.includes(CANARY)) return false;
  return !LEAK.some((re) => re.test(text));
}

export const REFUSAL_MESSAGE =
  "I can only help with questions about Jesus O'Bulan and his portfolio, his projects, skills, experience, education, and how to reach him. What would you like to know?";

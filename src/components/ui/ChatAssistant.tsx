"use client";

import { useChat } from "@ai-sdk/react";
import { isToolUIPart, getToolName } from "ai";
import { useState, useRef, useEffect, FormEvent, ComponentProps } from "react";
import { useChatPanel } from "@/components/chat/ChatContext";
import ProjectCardChat from "@/components/ui/chat/ProjectCardChat";
import ContactCardChat from "@/components/ui/chat/ContactCardChat";
import ResumeCardChat from "@/components/ui/chat/ResumeCardChat";
import SkillsCardChat from "@/components/ui/chat/SkillsCardChat";
import CardSkeleton from "@/components/ui/chat/CardSkeleton";

type ProjectData = ComponentProps<typeof ProjectCardChat>["data"];
type ContactData = ComponentProps<typeof ContactCardChat>["data"];
type ResumeData = ComponentProps<typeof ResumeCardChat>["data"];
type SkillsData = ComponentProps<typeof SkillsCardChat>["data"];

export default function ChatAssistant() {
  const { open: isOpen, setOpen: setIsOpen, toggle, pendingPrompt, clearPending } =
    useChatPanel();
  const [input, setInput] = useState("");
  const bottomRef = useRef<HTMLDivElement>(null);

  const { messages, sendMessage, status, error } = useChat();
  const isLoading = status === "submitted" || status === "streaming";

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // A prompt queued from the Ask section: open the panel and send it so the
  // tool-rendered card appears inline instead of just opening an empty chat.
  useEffect(() => {
    if (isOpen && pendingPrompt && !isLoading) {
      sendMessage({ text: pendingPrompt });
      clearPending();
    }
  }, [isOpen, pendingPrompt, isLoading, sendMessage, clearPending]);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const text = input.trim();
    if (!text || isLoading) return;
    sendMessage({ text });
    setInput("");
  };

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3">
      {isOpen && (
        <div className="relative flex w-[330px] flex-col overflow-hidden border border-line bg-bone-raised shadow-[0_16px_50px_-12px_rgba(69,65,56,0.55)] sm:w-[380px]">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-line px-3 py-2">
            <div className="flex items-center gap-2">
              <span aria-hidden className="inline-block h-1.5 w-1.5 animate-pulse bg-red-ink" />
              <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-foreground">
                Pod 042
              </span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="font-mono text-[10px] uppercase tracking-wide text-foreground-muted transition-colors hover:text-foreground"
              aria-label="Close chat"
            >
              [ Esc ]
            </button>
          </div>

          {/* Messages */}
          <div className="max-h-[60vh] min-h-[140px] flex-1 space-y-2 overflow-y-auto bg-bone/40 px-3 py-3">
            {messages.length === 0 && (
              <div className="py-2 font-mono text-xs text-foreground-muted">
                <p className="text-foreground">
                  <span className="text-red-ink">&gt;</span> Pod 042 online. Ask about Jesus&apos;s work, stack, or background.
                </p>
                <p className="mt-1 text-[11px] leading-relaxed">
                  e.g. &quot;show me his projects&quot;, &quot;what are his skills?&quot;,
                  &quot;how do I contact him?&quot;
                </p>
              </div>
            )}

            {messages.map((m) => {
              const isUser = m.role === "user";
              return (
                <div key={m.id} className="space-y-1.5">
                  {m.parts.map((part, i) => {
                    if (part.type === "text") {
                      if (!part.text) return null;
                      return (
                        <div
                          key={i}
                          className={`flex ${isUser ? "justify-end" : "justify-start"}`}
                        >
                          <div
                            className={`max-w-[88%] whitespace-pre-wrap px-3 py-2 text-sm leading-relaxed ${
                              isUser
                                ? "bg-ink font-mono text-xs uppercase tracking-wide text-bone"
                                : "border-l-2 border-red-ink pl-3 text-foreground"
                            }`}
                          >
                            {part.text}
                          </div>
                        </div>
                      );
                    }

                    if (isToolUIPart(part)) {
                      if (part.state === "output-error") {
                        return (
                          <p key={i} className="font-mono text-[11px] text-foreground-muted">
                            [ tool error ]
                          </p>
                        );
                      }
                      if (part.state !== "output-available") {
                        return <CardSkeleton key={i} />;
                      }
                      switch (getToolName(part)) {
                        case "showProjects":
                          return <ProjectCardChat key={i} data={part.output as ProjectData} />;
                        case "showContact":
                          return <ContactCardChat key={i} data={part.output as ContactData} />;
                        case "showResume":
                          return <ResumeCardChat key={i} data={part.output as ResumeData} />;
                        case "showSkills":
                          return <SkillsCardChat key={i} data={part.output as SkillsData} />;
                        default:
                          return null;
                      }
                    }
                    return null;
                  })}
                </div>
              );
            })}

            {isLoading && (
              <div className="flex justify-start">
                <div className="border-l-2 border-red-ink py-1 pl-3">
                  <div className="flex h-4 items-center gap-1">
                    <span className="h-1 w-1 animate-bounce bg-foreground-muted [animation-delay:0ms]" />
                    <span className="h-1 w-1 animate-bounce bg-foreground-muted [animation-delay:150ms]" />
                    <span className="h-1 w-1 animate-bounce bg-foreground-muted [animation-delay:300ms]" />
                  </div>
                </div>
              </div>
            )}

            {error && (
              <p className="font-mono text-[11px] text-foreground-muted">
                [ error ] Something went wrong. Please try again.
              </p>
            )}

            <div ref={bottomRef} />
          </div>

          {/* Input */}
          <form
            onSubmit={onSubmit}
            className="flex items-center gap-2 border-t border-line bg-bone-raised px-3 py-2"
          >
            <span aria-hidden className="font-mono text-sm text-red-ink">
              &gt;
            </span>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="ASK A QUESTION…"
              maxLength={500}
              className="flex-1 bg-transparent px-1 font-mono text-xs uppercase tracking-wide text-foreground outline-none placeholder:text-foreground-muted/70"
            />
            <button
              type="submit"
              disabled={isLoading || !input.trim()}
              className="font-mono text-xs uppercase tracking-wide text-foreground-muted transition-colors hover:text-foreground disabled:cursor-not-allowed disabled:opacity-40"
              aria-label="Send message"
            >
              Send →
            </button>
          </form>
        </div>
      )}

      {/* Toggle button */}
      <button
        onClick={toggle}
        className="flex h-12 w-12 items-center justify-center border border-line bg-ink font-mono text-bone shadow-[0_4px_20px_rgba(69,65,56,0.3)] transition-all hover:scale-105 hover:bg-red-ink"
        aria-label={isOpen ? "Close chat assistant" : "Open chat assistant"}
      >
        {isOpen ? <span className="text-lg">×</span> : <span className="text-sm">&gt;_</span>}
      </button>
    </div>
  );
}

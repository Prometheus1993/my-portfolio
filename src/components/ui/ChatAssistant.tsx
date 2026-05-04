"use client";

import { useChat } from "@ai-sdk/react";
import { useState, useRef, useEffect, FormEvent } from "react";

export default function ChatAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const bottomRef = useRef<HTMLDivElement>(null);

  const { messages, sendMessage, status, error } = useChat();

  const isLoading = status === "submitted" || status === "streaming";

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const text = input.trim();
    if (!text || isLoading) return;
    sendMessage({ text });
    setInput("");
  };

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3">
      {/* Chat window */}
      {isOpen && (
        <div className="w-[320px] sm:w-[380px] bg-background border border-border flex flex-col overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.08)]">
          {/* Header */}
          <div className="px-4 py-3 flex items-baseline justify-between border-b border-border">
            <div>
              <p className="font-serif text-foreground text-base leading-tight">
                Ask about Jesus
              </p>
              <p className="text-[11px] uppercase tracking-wider text-foreground-muted mt-0.5">
                AI assistant
              </p>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-foreground-muted hover:text-foreground transition-colors text-sm"
              aria-label="Close chat"
            >
              Close
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3 max-h-80 bg-surface/30">
            {messages.length === 0 && (
              <div className="text-foreground-muted text-sm py-3">
                <p className="font-serif italic mb-1">
                  Hi — ask me anything about Jesus.
                </p>
                <p className="text-xs">
                  e.g. &quot;What projects has he worked on?&quot;
                </p>
              </div>
            )}

            {messages.map((m) => {
              const text = m.parts
                .filter((p) => p.type === "text")
                .map((p) => (p as { type: "text"; text: string }).text)
                .join("");
              const isUser = m.role === "user";
              return (
                <div
                  key={m.id}
                  className={`flex ${isUser ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[85%] px-3 py-2 text-sm leading-relaxed whitespace-pre-wrap ${
                      isUser
                        ? "bg-foreground text-background rounded-md"
                        : "text-foreground border-l-2 border-accent pl-3"
                    }`}
                  >
                    {text}
                  </div>
                </div>
              );
            })}

            {isLoading && (
              <div className="flex justify-start">
                <div className="border-l-2 border-accent pl-3 py-1">
                  <div className="flex gap-1 items-center h-4">
                    <span className="w-1 h-1 bg-foreground-muted rounded-full animate-bounce [animation-delay:0ms]" />
                    <span className="w-1 h-1 bg-foreground-muted rounded-full animate-bounce [animation-delay:150ms]" />
                    <span className="w-1 h-1 bg-foreground-muted rounded-full animate-bounce [animation-delay:300ms]" />
                  </div>
                </div>
              </div>
            )}

            {error && (
              <p className="text-foreground-muted text-xs italic">
                Something went wrong. Please try again.
              </p>
            )}

            <div ref={bottomRef} />
          </div>

          {/* Input */}
          <form
            onSubmit={onSubmit}
            className="border-t border-border p-3 flex gap-2 items-center bg-background"
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask a question..."
              maxLength={500}
              className="flex-1 text-sm bg-transparent text-foreground outline-none placeholder-foreground-muted px-1"
            />
            <button
              type="submit"
              disabled={isLoading || !input.trim()}
              className="text-sm text-foreground-muted hover:text-foreground transition-colors disabled:opacity-40 disabled:cursor-not-allowed inline-flex items-center gap-1"
              aria-label="Send message"
            >
              <span>Send</span>
              <span aria-hidden="true">→</span>
            </button>
          </form>
        </div>
      )}

      {/* Toggle button */}
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="bg-foreground text-background rounded-full w-12 h-12 flex items-center justify-center transition-all hover:scale-105 shadow-[0_4px_20px_rgba(0,0,0,0.12)]"
        aria-label={isOpen ? "Close chat assistant" : "Open chat assistant"}
      >
        {isOpen ? (
          <span className="text-lg">×</span>
        ) : (
          <span className="font-serif italic text-lg">a</span>
        )}
      </button>
    </div>
  );
}

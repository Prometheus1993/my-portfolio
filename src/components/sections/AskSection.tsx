"use client";

import React from "react";
import FadeIn from "@/components/animations/FadeIn";
import HudFrame from "@/components/yorha/HudFrame";
import { useChatPanel } from "@/components/chat/ChatContext";

const prompts = [
  "Show me his projects",
  "What is his strongest project?",
  "Which backend does he use?",
];

const AskSection = () => {
  const { setOpen, ask } = useChatPanel();

  return (
    <section
      id="ask"
      className="max-w-5xl mx-auto px-6 md:px-10 pt-10 md:pt-14 pb-6 scroll-mt-24"
    >
      <FadeIn direction="up">
        <h2 className="mb-6 border-b border-line pb-2 font-mono text-xs uppercase tracking-[0.2em] text-foreground-muted">
          <span className="text-red-ink">//</span> Ask
        </h2>
      </FadeIn>

      <FadeIn direction="up" delay={0.05}>
        <HudFrame label="Pod 042" labelMeta="EXPERT SYSTEM" bodyClassName="p-5 md:p-6">
          <p className="max-w-2xl text-sm md:text-base leading-relaxed text-foreground">
            An expert system about my work, not me. It answers from my real
            projects, stack, and background, and it is engineered like a project:
            grounded responses, tool-rendered cards, prompt-injection defenses,
            and rate limiting.
          </p>

          <div className="mt-5 flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="inline-flex items-center gap-2 border border-line bg-ink px-3 py-2 font-mono text-xs uppercase tracking-[0.12em] text-bone transition-colors hover:bg-red-ink"
            >
              <span aria-hidden className="text-bone">&gt;_</span>
              Ask the assistant
            </button>

            <div className="flex flex-wrap gap-2">
              {prompts.map((p) => (
                <button
                  key={p}
                  type="button"
                  onClick={() => ask(p)}
                  className="border border-line px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.1em] text-foreground-muted transition-colors hover:border-ink hover:text-foreground"
                >
                  {p}
                </button>
              ))}
            </div>
          </div>
        </HudFrame>
      </FadeIn>
    </section>
  );
};

export default AskSection;

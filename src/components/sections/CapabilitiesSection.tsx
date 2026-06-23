"use client";

import React from "react";
import Link from "next/link";
import FadeIn from "@/components/animations/FadeIn";

// Role-grouped, no bars or percentages. Each group points back to a case study
// that demonstrates it, so breadth reads as proven rather than as a word list.
const groups: {
  label: string;
  items: string[];
  provenIn: { label: string; slug: string };
}[] = [
  {
    label: "Frontend",
    items: ["Angular (signals, reactive forms)", "React", "TypeScript", "Tailwind"],
    provenIn: { label: "Ragnarök", slug: "road-to-ragnarok" },
  },
  {
    label: "Backend",
    items: ["NestJS", ".NET / C# (ASP.NET Core, EF Core)", "Java", "Node"],
    provenIn: { label: "Brightest", slug: "brightest" },
  },
  {
    label: "Data and infra",
    items: ["MongoDB", "PostgreSQL / SQLite", "MySQL", "Docker and Docker Swarm"],
    provenIn: { label: "Brightest", slug: "brightest" },
  },
  {
    label: "AI and automation",
    items: ["Building with Claude Code", "RAG", "Anthropic SDK", "MCP"],
    provenIn: { label: "Ragnarök", slug: "road-to-ragnarok" },
  },
  {
    label: "Software design",
    items: [
      "N-layered architecture",
      "Repository / unit-of-work",
      "Testable code",
      "Unit testing (Vitest, xUnit)",
    ],
    provenIn: { label: "Ragnarök", slug: "road-to-ragnarok" },
  },
];

const CapabilitiesSection = () => {
  return (
    <section
      id="capabilities"
      className="max-w-5xl mx-auto px-6 md:px-10 pt-10 md:pt-14 pb-6 scroll-mt-24"
    >
      <FadeIn direction="up">
        <h2 className="mb-6 border-b border-line pb-2 font-mono text-xs uppercase tracking-[0.2em] text-foreground-muted">
          <span className="text-red-ink">//</span> Capabilities
        </h2>
      </FadeIn>

      <FadeIn direction="up" delay={0.05}>
        <p className="mb-8 max-w-2xl text-sm md:text-base leading-relaxed text-foreground-muted">
          One main thing, fullstack web development, plus a few extra areas that
          each connect back to a real project below. Not a checklist.
        </p>
      </FadeIn>

      <dl className="grid grid-cols-1 gap-x-10 gap-y-7 md:grid-cols-2">
        {groups.map((g, idx) => (
          <FadeIn key={g.label} direction="up" delay={0.05 * (idx + 1)}>
            <div className="border-t border-line pt-3">
              <dt className="flex items-baseline justify-between gap-3">
                <span className="font-mono text-xs uppercase tracking-[0.18em] text-red-ink">
                  {g.label}
                </span>
                <Link
                  href={`/work/${g.provenIn.slug}`}
                  className="font-mono text-[10px] uppercase tracking-[0.12em] text-foreground-muted transition-colors hover:text-foreground"
                >
                  proven in {g.provenIn.label} ↗
                </Link>
              </dt>
              <dd className="mt-2 text-sm leading-relaxed text-foreground">
                {g.items.join(", ")}
              </dd>
            </div>
          </FadeIn>
        ))}
      </dl>
    </section>
  );
};

export default CapabilitiesSection;

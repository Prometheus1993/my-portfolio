"use client";

import React from "react";
import Link from "next/link";
import FadeIn from "@/components/animations/FadeIn";
import { getAllCaseStudies } from "@/work/case-studies";
import { statusLabel } from "@/work/types";

const studies = getAllCaseStudies();

const SelectedWorkSection = () => {
  return (
    <section id="work" className="max-w-5xl mx-auto px-6 md:px-10 pt-6 md:pt-10 pb-6 scroll-mt-24">
      <FadeIn direction="up">
        <h2 className="mb-1 border-b border-line pb-2 font-mono text-xs uppercase tracking-[0.2em] text-foreground-muted">
          <span className="text-red-ink">//</span> Selected work
        </h2>
      </FadeIn>

      <ul>
        {studies.map((s, idx) => (
          <FadeIn key={s.slug} direction="up" delay={0.05 * (idx + 1)}>
            <li className="border-b border-line">
              <Link
                href={`/work/${s.slug}`}
                className="group grid grid-cols-12 gap-3 py-5 md:py-6 items-start transition-colors hover:bg-surface/50 -mx-3 px-3"
              >
                <div className="col-span-12 md:col-span-8 flex items-baseline gap-3">
                  <span aria-hidden className="pt-1 font-mono text-xs tabular-nums text-red-ink">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                      <h3 className="font-display text-2xl md:text-3xl uppercase leading-none tracking-tight text-foreground transition-colors group-hover:text-red-ink">
                        {s.title}
                      </h3>
                      {s.status !== "shipped" && (
                        <span className="border border-line px-1.5 py-0.5 font-mono text-[9px] uppercase tracking-[0.15em] text-foreground-muted">
                          {statusLabel(s.status)}
                        </span>
                      )}
                    </div>
                    <p className="mt-2 max-w-prose text-sm leading-relaxed text-foreground-muted line-clamp-2">
                      {s.summary}
                    </p>
                    <p className="mt-2 flex flex-wrap gap-x-2 gap-y-0.5 font-mono text-[10px] uppercase tracking-[0.1em] text-foreground-muted">
                      {s.techStack.map((t) => (
                        <span key={t}>{t}</span>
                      ))}
                    </p>
                  </div>
                </div>

                <div className="col-span-12 md:col-span-4 md:text-right md:pt-1">
                  <span className="font-mono text-xs tabular-nums text-foreground-muted">
                    {s.year}
                  </span>
                  <span
                    aria-hidden
                    className="ml-2 hidden md:inline-block text-foreground-muted transition-transform group-hover:translate-x-1"
                  >
                    →
                  </span>
                </div>
              </Link>
            </li>
          </FadeIn>
        ))}
      </ul>
    </section>
  );
};

export default SelectedWorkSection;

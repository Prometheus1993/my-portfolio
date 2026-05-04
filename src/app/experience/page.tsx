"use client";

import React from "react";
import FadeIn from "@/components/animations/FadeIn";

const experiences = [
  {
    role: "Barman",
    company: "Zaowang — Sushirestaurant",
    period: "Aug 2025 — Heden",
    badge: "Studentenjob",
    description: null,
  },
  {
    role: "Software Development Stagiair",
    company: "Brightest",
    period: "Feb 2025 — Mei 2025",
    badge: null,
    description:
      "Ontwikkelde testautomatiseringstools in een professionele softwareomgeving. Werkte samen met projectmanagers en stakeholders. Praktische ervaring met moderne ontwikkelworkflows en code reviews.",
  },
  {
    role: "Winkelmanager",
    company: "Hans Anders Opticiens",
    period: "Mrt 2021 — Aug 2023",
    badge: null,
    description:
      "Leidde een team van 5 medewerkers. Beheerde inventarissystemen en paste zich flexibel aan aan snel veranderende prioriteiten.",
  },
];

export default function ExperiencePage() {
  return (
    <section className="max-w-5xl mx-auto px-6 md:px-10 pt-10 md:pt-14 pb-6">
      <FadeIn direction="up">
        <p className="text-xs uppercase tracking-[0.2em] text-foreground-muted mb-3">
          Experience
        </p>
        <h1 className="font-serif text-3xl md:text-5xl leading-tight tracking-tight text-foreground mb-6 md:mb-10">
          Where I&apos;ve worked.
        </h1>
      </FadeIn>

      <ul>
        {experiences.map((exp, idx) => (
          <FadeIn key={exp.company} direction="up" delay={0.05 * (idx + 1)}>
            <li className="border-b border-border py-5 md:py-6 grid grid-cols-12 gap-3 md:gap-4 items-baseline">
              <div className="col-span-12 md:col-span-7">
                <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
                  <h2 className="font-serif text-lg md:text-2xl text-foreground tracking-tight leading-tight">
                    {exp.role}
                  </h2>
                  {exp.badge && (
                    <span className="text-[10px] uppercase tracking-wider text-foreground-muted border border-border rounded-full px-2 py-0.5">
                      {exp.badge}
                    </span>
                  )}
                </div>
                <p className="text-sm text-foreground-muted italic mt-0.5">
                  {exp.company}
                </p>
                {exp.description && (
                  <p className="hidden md:block text-sm text-foreground-muted leading-relaxed mt-2 max-w-prose">
                    {exp.description}
                  </p>
                )}
              </div>

              <div className="col-span-12 md:col-span-5 md:text-right">
                <span className="font-serif text-sm text-foreground-muted tabular-nums">
                  {exp.period}
                </span>
              </div>
            </li>
          </FadeIn>
        ))}
      </ul>

      <FadeIn direction="up" delay={0.4}>
        <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm">
          <a
            href="https://www.linkedin.com/in/jesus-o-9964802a2"
            target="_blank"
            rel="noopener noreferrer"
            className="link-underline text-foreground inline-flex items-center gap-2"
          >
            <span>Full work history on LinkedIn</span>
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </FadeIn>
    </section>
  );
}

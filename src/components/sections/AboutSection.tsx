"use client";

import React from "react";
import FadeIn from "@/components/animations/FadeIn";

const skills = [
  { label: "Frontend", items: ["React", "Next.js", "Angular", "TypeScript", "JavaScript"] },
  { label: "Backend & Data", items: ["Node.js", "Java", "C#", "MongoDB", "PostgreSQL"] },
  { label: "Tools", items: ["GitHub", "Auth0", "Docker", "Autodesk Fusion"] },
  { label: "AI", items: ["AI Agents", "LLM-integratie"] },
];

const education = [
  {
    degree: "Bachelor IT & Software (Verkort traject)",
    school: "AP Hogeschool Antwerpen",
    period: "2025 — 2027",
    note: null,
  },
  {
    degree: "Graduaat Programmeren",
    school: "AP Hogeschool Antwerpen",
    period: "2023 — 2025",
    note: "Met onderscheiding",
  },
];

const interests = ["Homelabbing", "3D printen", "Technologietrends", "Fitness", "Gaming"];
const languages = ["Engels (moedertaal)", "Nederlands (moedertaal)", "Frans (gevorderd beginner)"];

const AboutSection = () => {
  return (
    <section className="max-w-5xl mx-auto px-6 md:px-10 pt-10 md:pt-14 pb-6">
      <FadeIn direction="up">
        <p className="text-xs uppercase tracking-[0.2em] text-foreground-muted mb-3">
          About
        </p>
        <h1 className="font-serif text-3xl md:text-5xl leading-tight tracking-tight text-foreground mb-6 md:mb-8">
          A few notes on me.
        </h1>
      </FadeIn>

      <FadeIn direction="up" delay={0.1}>
        <p className="text-sm md:text-base text-foreground-muted leading-relaxed max-w-2xl mb-8 md:mb-10">
          I&apos;m a full-stack developer based in Antwerp. I recently completed
          my Programming degree with distinction and now study IT &amp; Software
          (fast-track) at AP Hogeschool. I enjoy clean architecture, modern web
          frameworks, and the occasional 3D-printing project on the side.
        </p>
      </FadeIn>

      {/* Two-column dense layout */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10">
        {/* Left: Education + Languages */}
        <div className="md:col-span-5 space-y-6">
          <FadeIn direction="up" delay={0.15}>
            <div>
              <h2 className="font-serif text-base md:text-lg text-foreground border-b border-border pb-1 mb-2">
                Education
              </h2>
              <ul className="space-y-2">
                {education.map((edu) => (
                  <li key={edu.degree} className="text-sm">
                    <div className="flex items-baseline justify-between gap-2">
                      <span className="text-foreground">{edu.degree}</span>
                      <span className="text-xs text-foreground-muted tabular-nums whitespace-nowrap">
                        {edu.period}
                      </span>
                    </div>
                    <p className="text-xs text-foreground-muted">
                      {edu.school}
                      {edu.note && (
                        <span className="italic"> · {edu.note}</span>
                      )}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>

          <FadeIn direction="up" delay={0.2}>
            <div>
              <h2 className="font-serif text-base md:text-lg text-foreground border-b border-border pb-1 mb-2">
                Languages
              </h2>
              <ul className="text-sm text-foreground-muted space-y-1">
                {languages.map((l) => (
                  <li key={l}>{l}</li>
                ))}
              </ul>
            </div>
          </FadeIn>
        </div>

        {/* Right: Skills + Interests */}
        <div className="md:col-span-7 space-y-6">
          <FadeIn direction="up" delay={0.25}>
            <div>
              <h2 className="font-serif text-base md:text-lg text-foreground border-b border-border pb-1 mb-2">
                Skills
              </h2>
              <dl className="space-y-1.5">
                {skills.map((group) => (
                  <div
                    key={group.label}
                    className="grid grid-cols-12 gap-3 text-sm"
                  >
                    <dt className="col-span-4 md:col-span-3 text-foreground-muted text-xs uppercase tracking-wider pt-0.5">
                      {group.label}
                    </dt>
                    <dd className="col-span-8 md:col-span-9 text-foreground">
                      {group.items.join(", ")}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </FadeIn>

          <FadeIn direction="up" delay={0.3}>
            <div>
              <h2 className="font-serif text-base md:text-lg text-foreground border-b border-border pb-1 mb-2">
                Interests
              </h2>
              <p className="text-sm text-foreground-muted">
                {interests.join(" · ")}
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

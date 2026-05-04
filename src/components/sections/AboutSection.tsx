"use client";

import React from "react";
import Image from "next/image";
import profilePic from "../../../public/profilepic.png";
import FadeIn from "@/components/animations/FadeIn";

const skills = [
  { label: "Frontend", items: ["React", "Next.js", "Angular", "TypeScript", "JavaScript"] },
  { label: "Backend & Data", items: ["Node.js", "Java", "C#", "MongoDB", "PostgreSQL"] },
  { label: "Tools", items: ["GitHub", "Auth0", "Docker", "Autodesk Fusion"] },
  { label: "AI", items: ["AI Agents", "LLM integration"] },
];

const education = [
  {
    degree: "Bachelor IT & Software (Fast-track)",
    school: "AP University College of Antwerp",
    period: "2025 — 2027",
    note: null,
  },
  {
    degree: "Associate Degree in Programming",
    school: "AP University College of Antwerp",
    period: "2023 — 2025",
    note: "With distinction",
  },
];

const interests = ["Homelabbing", "3D printing", "Tech trends", "Fitness", "Gaming"];
const languages = ["English (native)", "Dutch (native)", "French (intermediate)"];

const AboutSection = () => {
  return (
    <section className="max-w-5xl mx-auto px-6 md:px-10 pt-10 md:pt-14 pb-6">
      <FadeIn direction="up">
        <p className="text-xs uppercase tracking-[0.2em] text-foreground-muted mb-3">
          About
        </p>
      </FadeIn>

      {/* Heading + portrait */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 items-start mb-8 md:mb-10">
        <div className="md:col-span-9 order-2 md:order-1">
          <FadeIn direction="up" delay={0.05}>
            <h1 className="font-serif text-3xl md:text-5xl leading-tight tracking-tight text-foreground mb-5">
              A few notes on me.
            </h1>
          </FadeIn>
          <FadeIn direction="up" delay={0.1}>
            <p className="text-sm md:text-base text-foreground-muted leading-relaxed max-w-2xl">
              I&apos;m a full-stack developer based in Antwerp. I recently
              completed my Programming degree with distinction and now study IT
              &amp; Software (fast-track) at AP University College of Antwerp.
              I enjoy clean architecture, modern web frameworks, and the
              occasional 3D-printing project on the side.
            </p>
          </FadeIn>
        </div>

        <div className="md:col-span-3 order-1 md:order-2">
          <FadeIn direction="up">
            <div className="relative w-24 h-32 md:w-full md:h-auto md:aspect-[4/5] overflow-hidden rounded-sm grayscale hover:grayscale-0 transition-all duration-700">
              <Image
                src={profilePic}
                alt="Portrait of Jesus O'Bulan"
                fill
                className="object-cover"
                priority
              />
            </div>
            <p className="hidden md:block mt-2 text-[11px] text-foreground-muted italic">
              — A portrait, 2025
            </p>
          </FadeIn>
        </div>
      </div>

      {/* Two-column dense layout */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10">
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

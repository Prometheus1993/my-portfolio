"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { gsap, useGSAP, prefersReducedMotion } from "@/lib/gsap";
import { getAllCaseStudies } from "@/work/case-studies";
import { portfolioData } from "@/data/portfolio-data";

const ext = (u: string) => (u.startsWith("http") ? u : `https://${u}`);
const studies = getAllCaseStudies();

const HeroSection = () => {
  const scope = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;
      gsap.from(".hero-line", {
        y: 22,
        opacity: 0,
        duration: 0.6,
        ease: "power2.out",
        stagger: 0.07,
      });
    },
    { scope }
  );

  return (
    <section className="max-w-5xl mx-auto px-6 md:px-10 pt-14 md:pt-24 pb-10 md:pb-16">
      <div ref={scope} className="max-w-3xl">
        <p className="hero-line mb-6 flex flex-wrap items-center gap-x-2 gap-y-1 font-mono text-[11px] uppercase tracking-[0.2em] text-foreground-muted">
          <span aria-hidden className="inline-block h-1.5 w-1.5 bg-red-ink" />
          Antwerp, BE
          <span aria-hidden className="text-ink-muted/60">//</span>
          Looking for a fullstack internship, spring 2027
        </p>

        <h1 className="hero-line font-display text-5xl md:text-7xl uppercase leading-[0.92] tracking-tight text-foreground">
          Fullstack developer
        </h1>

        <p className="hero-line mt-5 max-w-2xl text-lg md:text-2xl leading-snug text-foreground">
          I like building things that are put together well, and I use AI tools
          to build faster.
        </p>

        <p className="hero-line mt-5 font-mono text-xs uppercase tracking-[0.15em] text-foreground-muted">
          CS student, AP Hogeschool Antwerpen
        </p>

        {/* Immediate proof: jump straight to a case study */}
        <div className="hero-line mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 font-mono text-xs uppercase tracking-[0.12em]">
          <span className="text-foreground-muted">Selected work</span>
          {studies.map((s) => (
            <Link
              key={s.slug}
              href={`/work/${s.slug}`}
              className="group inline-flex items-center gap-1.5 text-foreground transition-colors hover:text-red-ink"
            >
              <span aria-hidden className="text-red-ink">&gt;</span>
              {s.shortTitle}
            </Link>
          ))}
        </div>

        <div className="hero-line mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 font-mono text-xs uppercase tracking-[0.12em] text-foreground-muted">
          <a
            href={ext(portfolioData.contact.github)}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-foreground"
          >
            GitHub ↗
          </a>
          <a
            href="/cv-jesus-obulan-en.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-foreground"
          >
            CV ↗
          </a>
          <a
            href={`mailto:${portfolioData.contact.email}`}
            className="transition-colors hover:text-foreground"
          >
            Email
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

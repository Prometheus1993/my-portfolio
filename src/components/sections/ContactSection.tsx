"use client";

import React from "react";
import FadeIn from "@/components/animations/FadeIn";
import { portfolioData } from "@/data/portfolio-data";

const ext = (u: string) => (u.startsWith("http") ? u : `https://${u}`);

const links = [
  { label: "Email", value: portfolioData.contact.email, href: `mailto:${portfolioData.contact.email}` },
  { label: "GitHub", value: "@Prometheus1993", href: ext(portfolioData.contact.github) },
  { label: "LinkedIn", value: "/in/jesus-o", href: ext(portfolioData.contact.linkedin) },
];

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="max-w-5xl mx-auto px-6 md:px-10 pt-10 md:pt-14 pb-12 scroll-mt-24"
    >
      <FadeIn direction="up">
        <h2 className="mb-6 border-b border-line pb-2 font-mono text-xs uppercase tracking-[0.2em] text-foreground-muted">
          <span className="text-red-ink">//</span> Contact
        </h2>
      </FadeIn>

      <FadeIn direction="up" delay={0.05}>
        <p className="mb-6 max-w-2xl text-sm md:text-base leading-relaxed text-foreground-muted">
          Open to a fullstack internship for spring 2027, and to interesting
          fullstack work in general. The fastest way to reach me is email.
        </p>
      </FadeIn>

      <FadeIn direction="up" delay={0.1}>
        <dl className="grid grid-cols-1 gap-4 border-y border-line py-5 sm:grid-cols-3">
          {links.map((l) => (
            <div key={l.label}>
              <dt className="mb-1 font-mono text-[10px] uppercase tracking-[0.15em] text-foreground-muted">
                {l.label}
              </dt>
              <dd>
                <a
                  href={l.href}
                  target={l.href.startsWith("http") ? "_blank" : undefined}
                  rel={l.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="link-underline break-all text-sm text-foreground transition-colors hover:text-red-ink"
                >
                  {l.value}
                </a>
              </dd>
            </div>
          ))}
        </dl>
      </FadeIn>
    </section>
  );
};

export default ContactSection;

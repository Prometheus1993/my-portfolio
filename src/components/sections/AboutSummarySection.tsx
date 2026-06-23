"use client";

import React from "react";
import Image from "next/image";
import profilePic from "../../../public/profilepic.png";
import FadeIn from "@/components/animations/FadeIn";
import CornerBrackets from "@/components/yorha/CornerBrackets";

const AboutSummarySection = () => {
  return (
    <section
      id="about"
      className="max-w-5xl mx-auto px-6 md:px-10 pt-10 md:pt-14 pb-6 scroll-mt-24"
    >
      <FadeIn direction="up">
        <h2 className="mb-6 border-b border-line pb-2 font-mono text-xs uppercase tracking-[0.2em] text-foreground-muted">
          <span className="text-red-ink">//</span> About
        </h2>
      </FadeIn>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-12 md:gap-10 items-start">
        <div className="order-2 md:order-1 md:col-span-9">
          <FadeIn direction="up" delay={0.05}>
            <div className="max-w-2xl space-y-4 text-sm md:text-base leading-relaxed text-foreground-muted">
              <p>
                I&apos;m a fullstack CS student at AP Hogeschool Antwerpen. I did
                my internship at Brightest building developer tooling, and what I
                like is building apps that are organized well, with the AI tools
                I use every day to build faster.
              </p>
              <p>
                Off the clock I print things in 3D, train, and lately I&apos;ve
                been reading up on self-hosting, things like adblocking and
                running my own services. Road to Ragnarök started as a way to
                turn that training into data I could actually trust.
              </p>
            </div>
          </FadeIn>
        </div>

        <div className="order-1 md:order-2 md:col-span-3">
          <FadeIn direction="up">
            <div className="relative border border-line p-1.5">
              <CornerBrackets size={12} colorClass="border-red-ink" />
              <div className="group relative h-32 w-24 overflow-hidden grayscale transition-all duration-700 hover:grayscale-0 md:h-auto md:w-full md:aspect-[4/5]">
                <Image
                  src={profilePic}
                  alt="Portrait of Jesus O'Bulan"
                  fill
                  sizes="(max-width: 768px) 96px, 25vw"
                  className="object-cover"
                />
                <span
                  aria-hidden
                  className="scanlines pointer-events-none absolute inset-0 opacity-30 mix-blend-multiply"
                />
              </div>
            </div>
            <p className="mt-2 hidden items-center justify-between font-mono text-[10px] uppercase tracking-[0.15em] text-foreground-muted md:flex">
              <span>[ VISUAL ]</span>
              <span>UNIT.JO</span>
            </p>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default AboutSummarySection;

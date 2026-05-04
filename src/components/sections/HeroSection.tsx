"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import profilePic from "../../../public/profilepic.png";
import FadeIn from "@/components/animations/FadeIn";

const HeroSection = () => {
  return (
    <section className="max-w-5xl mx-auto px-6 md:px-10 pt-10 md:pt-14 pb-6 md:pb-8">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-10 items-start">
        {/* Text */}
        <div className="md:col-span-8 order-2 md:order-1">
          <FadeIn direction="up">
            <p className="text-xs uppercase tracking-[0.2em] text-foreground-muted mb-4">
              Antwerp, Belgium
            </p>
          </FadeIn>

          <FadeIn direction="up" delay={0.1}>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight text-foreground">
              Jesus O&apos;Bulan
            </h1>
          </FadeIn>

          <FadeIn direction="up" delay={0.2}>
            <p className="font-serif text-xl md:text-2xl text-foreground-muted italic mt-2 leading-snug">
              Full-stack developer.
            </p>
          </FadeIn>

          <FadeIn direction="up" delay={0.3}>
            <p className="text-sm md:text-base text-foreground-muted leading-relaxed mt-5 max-w-xl">
              Currently studying IT &amp; Software at AP Hogeschool Antwerpen,
              after completing a Programming degree with distinction. I build
              modern web applications with React, Next.js and Angular.
            </p>
          </FadeIn>

          <FadeIn direction="up" delay={0.4}>
            <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm">
              <Link
                href="/projects"
                className="link-underline text-foreground inline-flex items-center gap-2"
              >
                <span>View projects</span>
                <span aria-hidden="true">→</span>
              </Link>
              <Link
                href="/experience"
                className="link-underline text-foreground-muted hover:text-foreground transition-colors"
              >
                Experience
              </Link>
              <Link
                href="/about"
                className="link-underline text-foreground-muted hover:text-foreground transition-colors"
              >
                About
              </Link>
            </div>
          </FadeIn>
        </div>

        {/* Portrait */}
        <div className="md:col-span-3 md:col-start-10 order-1 md:order-2 md:pt-2">
          <FadeIn direction="up" delay={0.05}>
            <div className="relative w-20 h-24 md:w-full md:h-auto md:aspect-[4/5] overflow-hidden rounded-sm grayscale hover:grayscale-0 transition-all duration-700">
              <Image
                src={profilePic}
                alt="Portrait of Jesus O'Bulan"
                fill
                className="object-cover"
                priority
              />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

"use client";

import React, { useRef, useState } from "react";
import { gsap, useGSAP, prefersReducedMotion } from "@/lib/gsap";

const SESSION_KEY = "yorha-booted";

const LINES = [
  "YoRHa OS // boot sequence initiated",
  "> loading interface modules ........... OK",
  "> mounting portfolio data ............. OK",
  "> establishing data uplink ............ OK",
  "> calibrating HUD ..................... OK",
];

/**
 * Post-LCP boot overlay. Real content is painted underneath; this panel sits on
 * top (it never hides the document via visibility), plays a <1.2s terminal
 * sequence once per session, then wipes up to reveal the page. Skipped entirely
 * under prefers-reduced-motion or when already booted this session, and it
 * starts invisible so those users never see a flash.
 */
export default function BootSequence() {
  const scope = useRef<HTMLDivElement>(null);
  const [done, setDone] = useState(false);

  useGSAP(
    () => {
      if (typeof window === "undefined") return;

      const alreadyBooted =
        typeof sessionStorage !== "undefined" && sessionStorage.getItem(SESSION_KEY);

      if (prefersReducedMotion() || alreadyBooted) {
        setDone(true);
        return;
      }

      gsap.set(scope.current, { opacity: 1 });
      const tl = gsap.timeline({
        onComplete: () => {
          try {
            sessionStorage.setItem(SESSION_KEY, "1");
          } catch {}
          setDone(true);
        },
      });

      tl.from(".boot-line", {
        opacity: 0,
        y: 6,
        duration: 0.14,
        ease: "none",
        stagger: 0.1,
      })
        .to(".boot-cursor", { opacity: 0, repeat: 3, yoyo: true, duration: 0.1 }, "<")
        .to(scope.current, {
          yPercent: -100,
          duration: 0.5,
          ease: "power3.inOut",
          delay: 0.15,
        });
    },
    { scope }
  );

  if (done) return null;

  return (
    <div
      ref={scope}
      aria-hidden
      className="fixed inset-0 z-[100] flex items-center justify-center bg-bone opacity-0"
    >
      <div className="w-full max-w-md px-6 font-mono text-xs leading-relaxed text-ink">
        {LINES.map((line, i) => (
          <p key={i} className="boot-line whitespace-pre">
            {line}
          </p>
        ))}
        <p className="boot-line mt-1">
          &gt; render <span className="boot-cursor">█</span>
        </p>
      </div>
    </div>
  );
}

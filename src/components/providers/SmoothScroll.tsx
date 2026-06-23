"use client";

import React, { useEffect, useState } from "react";
import { ReactLenis, useLenis } from "lenis/react";
import { ScrollTrigger, prefersReducedMotion } from "@/lib/gsap";

/**
 * Keeps GSAP ScrollTrigger in sync with Lenis. Must render inside ReactLenis so
 * it can read the Lenis context.
 */
function ScrollTriggerBridge() {
  useLenis(() => ScrollTrigger.update());
  return null;
}

/**
 * Lenis smooth scroll. Lenis runs its own rAF loop (autoRaf default), so the
 * page always scrolls; we only bridge ScrollTrigger off its scroll callback.
 * Children pass through untouched, so the tree below stays RSC. Under
 * prefers-reduced-motion, lerp is 1 (instant) and wheel smoothing is off.
 */
export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  const [reduce, setReduce] = useState(false);

  useEffect(() => {
    setReduce(prefersReducedMotion());
  }, []);

  return (
    <ReactLenis root options={{ lerp: reduce ? 1 : 0.1, smoothWheel: !reduce }}>
      <ScrollTriggerBridge />
      {children}
    </ReactLenis>
  );
}

"use client";

/**
 * Single GSAP registration module. Every client component that animates with
 * GSAP should import { gsap, useGSAP, ScrollTrigger } from here so plugins are
 * registered exactly once. `useGSAP` handles React 19 StrictMode double-invoke
 * and auto-reverts animations/ScrollTriggers on unmount.
 */
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

/** True when the visitor prefers reduced motion (call inside effects/handlers). */
export function prefersReducedMotion(): boolean {
  return (
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

export { gsap, ScrollTrigger, useGSAP };

import React from "react";

/**
 * Film-grain overlay. The noise is a tiny SVG fractalNoise rasterised ONCE by
 * the browser into a tiling background (not a live full-viewport filter), so it
 * stays cheap. Kept at low opacity and never blocks interaction. RSC-safe.
 *
 * To hand-tune the grain, replace the data URI below with a static WebP tile in
 * /public and point `backgroundImage` at it.
 */
const NOISE =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")";

export default function GrainLayer() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[44] opacity-[0.06] mix-blend-multiply"
      style={{ backgroundImage: NOISE, backgroundSize: "140px 140px" }}
    />
  );
}

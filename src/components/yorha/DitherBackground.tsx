import React from "react";

/**
 * Full-bleed "paper / old screen" texture: a 4px dithered grid plus an inner
 * vignette, sat behind all content. Static and near-free (no JS, no animation).
 * Mount once in the root layout. RSC-safe.
 */
export default function DitherBackground() {
  return <div aria-hidden className="dither-bg pointer-events-none fixed inset-0 -z-10" />;
}

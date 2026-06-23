"use client";

import React from "react";

/**
 * Single fixed, low-opacity CRT scanline layer. Never blocks interaction
 * (pointer-events:none) and sits below modals. The subtle flicker is disabled
 * under prefers-reduced-motion via the `.scanlines` rule in globals.css.
 */
export default function ScanlineOverlay() {
  return (
    <div
      aria-hidden
      className="scanlines pointer-events-none fixed inset-0 z-[45]"
      style={{ opacity: 0.5, animation: "hud-flicker 7s ease-in-out infinite" }}
    />
  );
}

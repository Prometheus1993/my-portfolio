import React from "react";

/**
 * Uppercase mono label, the YoRHa metadata voice. Renders bracketed by default
 * (e.g. "[ SYSTEM ]"). Pure CSS, RSC-safe.
 */
export default function HudLabel({
  children,
  bracket = false,
  className = "",
}: {
  children: React.ReactNode;
  bracket?: boolean;
  className?: string;
}) {
  return (
    <span className={`hud-label ${className}`}>
      {bracket ? <>[&nbsp;{children}&nbsp;]</> : children}
    </span>
  );
}

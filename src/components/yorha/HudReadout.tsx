import React from "react";

/**
 * Bracketed mono key/value readout: `[ LABEL ] value`. The dense HUD metadata
 * vocabulary used on case-study chrome and the chat panel. Pure CSS, RSC-safe.
 */
export default function HudReadout({
  label,
  value,
  className = "",
}: {
  label: React.ReactNode;
  value: React.ReactNode;
  className?: string;
}) {
  return (
    <span className={`inline-flex items-baseline gap-1.5 font-mono text-xs ${className}`}>
      <span className="uppercase tracking-[0.15em] text-ink-muted">[{label}]</span>
      <span className="tabular-nums text-ink">{value}</span>
    </span>
  );
}

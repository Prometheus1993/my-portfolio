import React from "react";
import CornerBrackets from "./CornerBrackets";

interface HudFrameProps {
  children: React.ReactNode;
  /** Optional uppercase label shown in a top "pattern strip" bar. */
  label?: React.ReactNode;
  /** Optional right-aligned content in the label bar (e.g. a status readout). */
  labelMeta?: React.ReactNode;
  /** Render L-shaped corner marks. Default true. */
  brackets?: boolean;
  className?: string;
  /** Extra classes for the inner content wrapper. */
  bodyClassName?: string;
}

/**
 * Hairline-bordered HUD container with optional corner brackets and a label
 * strip, the signature YoRHa "boxed metadata" chrome. Pure CSS, RSC-safe.
 */
export default function HudFrame({
  children,
  label,
  labelMeta,
  brackets = true,
  className = "",
  bodyClassName = "",
}: HudFrameProps) {
  return (
    <div className={`relative border border-line bg-bone-raised/30 ${className}`}>
      {brackets && <CornerBrackets />}
      {label !== undefined && (
        <div className="flex items-center justify-between gap-3 border-b border-line px-3 py-1.5">
          <span className="hud-label">{label}</span>
          {labelMeta !== undefined && (
            <span className="hud-label !tracking-normal">{labelMeta}</span>
          )}
        </div>
      )}
      <div className={bodyClassName}>{children}</div>
    </div>
  );
}

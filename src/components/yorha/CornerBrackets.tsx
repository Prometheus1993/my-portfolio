import React from "react";

interface CornerBracketsProps {
  /** Bracket arm length in pixels. */
  size?: number;
  /** Border thickness in pixels. */
  thickness?: number;
  /** Tailwind border-color class for the brackets. */
  colorClass?: string;
  className?: string;
}

/**
 * Four L-shaped HUD corner marks. Decorative only (aria-hidden). The parent
 * element must be `position: relative`. Pure CSS, safe in a Server Component.
 */
export default function CornerBrackets({
  size = 10,
  thickness = 1,
  colorClass = "border-line",
  className = "",
}: CornerBracketsProps) {
  const dim = { width: size, height: size, borderWidth: thickness };
  return (
    <span aria-hidden className={`pointer-events-none absolute inset-0 ${className}`}>
      <span className={`absolute left-0 top-0 border-l border-t ${colorClass}`} style={dim} />
      <span className={`absolute right-0 top-0 border-r border-t ${colorClass}`} style={dim} />
      <span className={`absolute bottom-0 left-0 border-b border-l ${colorClass}`} style={dim} />
      <span className={`absolute bottom-0 right-0 border-b border-r ${colorClass}`} style={dim} />
    </span>
  );
}

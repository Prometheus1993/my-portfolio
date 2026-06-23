/**
 * Contrast source of truth for the YoRHa palette.
 *
 * The canonical colour values live in `src/app/globals.css` (the `:root` block).
 * The CI gate `scripts/check-contrast.mjs` parses those hexes directly and
 * asserts every pair below clears its WCAG minimum, so a low-contrast pair can
 * never merge. This module mirrors the same data for in-app use (e.g. rendering
 * a "CONTRAST 5.73:1" HUD readout) and unit tests. Keep it in sync with globals.css.
 *
 * WCAG 2.1 thresholds: 4.5:1 normal text, 3:1 large text (≥18pt / ≥14pt bold)
 * and UI components / graphics.
 */

export const PALETTE = {
  bone: "#c7c3ae",
  "bone-raised": "#d0ccb8",
  khaki: "#b3ae97",
  ink: "#454138",
  "ink-muted": "#4f4b43",
  line: "#5a564c",
  red: "#bb5533",
  "red-ink": "#9c3b1c",
} as const;

export type Token = keyof typeof PALETTE;

export interface ApprovedPair {
  fg: Token;
  bg: Token;
  /** Minimum WCAG ratio this pairing must clear. */
  min: 4.5 | 3;
  usage: string;
}

/**
 * Every approved foreground/background pairing in the design.
 *
 * NOTE: `--red` (#bb5533) is intentionally absent as a text/border colour, it
 * only clears ~2.65:1 on bone, so it is reserved for large-decorative / fills /
 * non-text use ONLY. Anything that needs to read as text, a border, a focus ring
 * or an active marker uses `--red-ink` instead.
 */
export const APPROVED_PAIRS: ApprovedPair[] = [
  { fg: "ink", bg: "bone", min: 4.5, usage: "Body text" },
  { fg: "ink", bg: "bone-raised", min: 4.5, usage: "Body text on raised panel" },
  { fg: "ink-muted", bg: "bone", min: 4.5, usage: "Muted / metadata text" },
  { fg: "line", bg: "bone", min: 3, usage: "Hairline borders & rules" },
  { fg: "red-ink", bg: "bone", min: 3, usage: "Accent: focus ring / active / large heading / border" },
  { fg: "bone", bg: "ink", min: 4.5, usage: "Inverted: bone text on ink fill (buttons)" },
  { fg: "bone", bg: "red-ink", min: 3, usage: "Bone text on red-ink fill (active marker, large/UI only)" },
];

function srgbToLinear(channel: number): number {
  const c = channel / 255;
  return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
}

export function relativeLuminance(hex: string): number {
  const h = hex.replace("#", "");
  const r = parseInt(h.slice(0, 2), 16);
  const g = parseInt(h.slice(2, 4), 16);
  const b = parseInt(h.slice(4, 6), 16);
  return 0.2126 * srgbToLinear(r) + 0.7152 * srgbToLinear(g) + 0.0722 * srgbToLinear(b);
}

/** WCAG contrast ratio between two hex colours (1–21). */
export function contrastRatio(hexA: string, hexB: string): number {
  const la = relativeLuminance(hexA);
  const lb = relativeLuminance(hexB);
  const [hi, lo] = la >= lb ? [la, lb] : [lb, la];
  return (hi + 0.05) / (lo + 0.05);
}

/** Pre-computed ratio for a token pair, rounded to 2dp. */
export function ratioFor(fg: Token, bg: Token): number {
  return Math.round(contrastRatio(PALETTE[fg], PALETTE[bg]) * 100) / 100;
}

#!/usr/bin/env node
/**
 * WCAG contrast gate. Parses the canonical palette hexes out of
 * src/app/globals.css and asserts every approved pairing clears its minimum
 * (4.5:1 normal text, 3:1 large text / UI). Exits non-zero on any failure so a
 * low-contrast pair can never merge. No dependencies.
 *
 *   node scripts/check-contrast.mjs
 */
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const cssPath = join(__dirname, "..", "src", "app", "globals.css");

// ── Parse `--token: #hex;` declarations from the :root block ──
const css = readFileSync(cssPath, "utf8");
const PALETTE = {};
for (const m of css.matchAll(/--([a-z0-9-]+):\s*(#[0-9a-fA-F]{6})\s*;/g)) {
  PALETTE[m[1]] = m[2].toLowerCase();
}

// Pairs mirror src/lib/contrast.ts (APPROVED_PAIRS). `--red` is decorative-only
// and deliberately excluded from text/border use.
const APPROVED_PAIRS = [
  { fg: "ink", bg: "bone", min: 4.5, usage: "Body text" },
  { fg: "ink", bg: "bone-raised", min: 4.5, usage: "Body text on raised panel" },
  { fg: "ink-muted", bg: "bone", min: 4.5, usage: "Muted / metadata text" },
  { fg: "line", bg: "bone", min: 3, usage: "Hairline borders & rules" },
  { fg: "red-ink", bg: "bone", min: 4.5, usage: "Accent text: markers, labels, carets, active" },
  { fg: "bone", bg: "ink", min: 4.5, usage: "Inverted text on ink fill" },
  { fg: "bone", bg: "red-ink", min: 4.5, usage: "Bone text on red-ink fill" },
];

const srgbToLinear = (ch) => {
  const c = ch / 255;
  return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
};
const luminance = (hex) => {
  const h = hex.replace("#", "");
  const r = parseInt(h.slice(0, 2), 16);
  const g = parseInt(h.slice(2, 4), 16);
  const b = parseInt(h.slice(4, 6), 16);
  return 0.2126 * srgbToLinear(r) + 0.7152 * srgbToLinear(g) + 0.0722 * srgbToLinear(b);
};
const ratio = (a, b) => {
  const la = luminance(a);
  const lb = luminance(b);
  const [hi, lo] = la >= lb ? [la, lb] : [lb, la];
  return (hi + 0.05) / (lo + 0.05);
};

let failed = 0;
console.log("\n  WCAG contrast gate — YoRHa palette\n  " + "─".repeat(60));
for (const { fg, bg, min, usage } of APPROVED_PAIRS) {
  const fgHex = PALETTE[fg];
  const bgHex = PALETTE[bg];
  if (!fgHex || !bgHex) {
    console.error(`  ✗ MISSING token: ${!fgHex ? fg : bg} (not found in globals.css)`);
    failed++;
    continue;
  }
  const r = ratio(fgHex, bgHex);
  const ok = r >= min;
  if (!ok) failed++;
  const mark = ok ? "✓" : "✗";
  console.log(
    `  ${mark} ${r.toFixed(2).padStart(5)}:1  (min ${min})  ${fg} on ${bg}  — ${usage}`
  );
}
console.log("  " + "─".repeat(60));

if (failed > 0) {
  console.error(`\n  ✗ ${failed} pair(s) below their WCAG minimum.\n`);
  process.exit(1);
}
console.log(`\n  ✓ All ${APPROVED_PAIRS.length} pairs clear WCAG minimums.\n`);

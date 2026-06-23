#!/usr/bin/env node
/**
 * AI guard eval gate. Loads the SAME injection-patterns.json the runtime guard
 * uses and asserts: every adversarial fixture is flagged, and no benign fixture
 * is flagged (no false positives that would break normal portfolio questions).
 * Exits non-zero on any failure. No dependencies.
 *
 *   node scripts/check-ai-guard.mjs
 */
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const cfgPath = join(__dirname, "..", "src", "lib", "ai", "injection-patterns.json");
const cfg = JSON.parse(readFileSync(cfgPath, "utf8"));

const INJECTION = cfg.patterns.map((p) => new RegExp(p, "i"));
const detect = (text) => INJECTION.some((re) => re.test(text));

let failed = 0;
console.log("\n  AI guard eval — prompt-injection detection\n  " + "─".repeat(58));

console.log("  Adversarial inputs (must ALL be flagged):");
for (const input of cfg.testCases.adversarial) {
  const flagged = detect(input);
  if (!flagged) failed++;
  console.log(`    ${flagged ? "✓" : "✗ MISSED"}  ${input}`);
}

console.log("\n  Benign inputs (must NOT be flagged):");
for (const input of cfg.testCases.benign) {
  const flagged = detect(input);
  if (flagged) failed++;
  console.log(`    ${flagged ? "✗ FALSE-POS" : "✓"}  ${input}`);
}

console.log("  " + "─".repeat(58));
if (failed > 0) {
  console.error(`\n  ✗ ${failed} guard eval failure(s).\n`);
  process.exit(1);
}
console.log(
  `\n  ✓ All ${cfg.testCases.adversarial.length} adversarial + ${cfg.testCases.benign.length} benign cases passed.\n`
);

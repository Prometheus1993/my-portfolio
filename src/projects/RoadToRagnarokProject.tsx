import React from "react";
import { ProjectData } from "./types";

export const metadata: ProjectData = {
  slug: "road-to-ragnarok",
  title: "Road to Ragnarök — Training Coach",
  date: "2026-06-23",
  overview:
    "A local-first hybrid training + life-sim coach with an anime-RPG game layer — it turns my Garmin runs, strength, recovery and study/reading data into 0–100 stat levels, a daily readiness call and ~100 trophies, on a Final-Fantasy-style status screen.",
  imageUrl: "/images/projects/ragnarok.png",
  techStack: ["TypeScript", "React", "Vite", "SQLite", "Node.js", "Vitest"],
  liveUrl: null,
  repoUrl: null,
  featured: true,
};

const RoadToRagnarokProject: React.FC = () => {
  return (
    <div className="space-y-10 text-foreground">
      {/* Overview */}
      <section>
        <h2
          id="overview"
          className="font-serif text-xl md:text-2xl text-foreground border-b border-border pb-2 mb-4"
        >
          Overview
        </h2>
        <blockquote className="border-l-2 border-accent pl-4 mb-4 font-serif italic text-lg text-foreground-muted">
          A personal project that turns my real training and life data into an
          RPG status screen — and an excuse to build a properly engineered,
          fully-tested system end to end.
        </blockquote>
        <p className="text-sm md:text-base text-foreground-muted leading-relaxed">
          It ingests Garmin runs, strength sessions, weigh-ins and recovery
          vitals (HRV, sleep, resting HR), plus a life-sim side — books, manga,
          games, exams and study time — and turns all of it into three 0–100
          stat tracks, a daily &ldquo;train hard / easy / rest&rdquo; readiness
          call, quests and lifetime trophies. Everything runs on my machine over
          a single SQLite file: no cloud, no account, and deliberately no
          in-product AI coach.
        </p>
      </section>

      {/* Architecture */}
      <section>
        <h2
          id="architecture"
          className="font-serif text-xl md:text-2xl text-foreground border-b border-border pb-2 mb-4"
        >
          Architecture
        </h2>
        <p className="text-sm md:text-base text-foreground-muted leading-relaxed">
          A TypeScript npm-workspaces monorepo split by purity. A pure,
          UI-agnostic <span className="font-serif italic">core</span> engine
          holds the domain model, the unit/correction funnel, the coaching logic
          and the gamification — it&rsquo;s compiled without the DOM, so any
          accidental coupling is a compile error. Impure adapters (SQLite,
          importers, the weather client) sit in a separate package, with a thin
          CLI and a read-only server on top. The whole UI renders exactly one
          thing: a plain-JSON <span className="font-mono text-[13px]">DashboardDTO</span>{" "}
          assembled from the database — one contract, swappable backends.
        </p>
        <div className="mt-5 border border-border bg-surface/40">
          <div className="px-4 py-2 border-b border-border">
            <span className="font-mono text-[11px] text-foreground-muted">
              gamification/levels.ts
            </span>
          </div>
          <pre className="px-4 py-3 overflow-x-auto text-xs md:text-sm leading-relaxed">
            <code className="text-foreground">{`// A raw value -> a 0-100 level on a smooth power curve.
// Pure + deterministic: the level is a function of CURRENT data,
// so it can also go DOWN with detraining - an honest mirror,
// not an XP grind that only ratchets up.
export function levelForValue(value: number, curve: LevelCurve): number {
  const ratio = clamp(value / curve.vMax, 0, 1);
  return Math.floor(100 * ratio ** (1 / curve.exponent));
}`}</code>
          </pre>
        </div>
      </section>

      {/* Features */}
      <section>
        <h2
          id="features"
          className="font-serif text-xl md:text-2xl text-foreground border-b border-border pb-2 mb-4"
        >
          Features
        </h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 text-sm md:text-base text-foreground-muted">
          {[
            [
              "Three stat tracks",
              "STAMINA, STRENGTH and LEANNESS as multi-factor composites (volume, pace, key lifts, tonnage, fat-mass) on a 0–100 curve.",
            ],
            [
              "Readiness gate",
              "A rolling recovery window over HRV / sleep / resting HR recommends hard, easy or rest — one bad night never vetoes a session.",
            ],
            [
              "Life-sim modules",
              "Exams (Belgian /20 scale + an AP grade-of-merit average), a study planner, books, manga and games — one personal dashboard.",
            ],
            [
              "~100 trophies",
              "Lifetime achievements across running, strength, study and reading, derived as pure functions over the real history.",
            ],
            [
              "Coaching loop",
              "Export the data for an external coach, paste their schedule back; run sessions push to Garmin Connect as scheduled workouts.",
            ],
            [
              "Drag-and-drop import",
              "Drop a Garmin .fit or a CSV anywhere on the dashboard — it auto-detects the type, ingests, recomputes and refreshes.",
            ],
          ].map(([title, desc]) => (
            <li key={title}>
              <p className="font-serif italic text-foreground">{title}</p>
              <p className="mt-0.5">{desc}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* Engineering */}
      <section>
        <h2
          id="engineering"
          className="font-serif text-xl md:text-2xl text-foreground border-b border-border pb-2 mb-4"
        >
          Engineering
        </h2>
        <blockquote className="border-l-2 border-accent pl-4 mb-4 font-serif italic text-lg text-foreground-muted">
          The fun was the game layer; the point was building it to a standard I&rsquo;d
          ship at work.
        </blockquote>
        <ul className="space-y-1.5 text-sm md:text-base text-foreground-muted">
          {[
            "Fully deterministic engine — an injected clock instead of Date.now, no randomness — so every coaching number is reproducible and unit-testable.",
            "Branded units (kg, bpm, m/s) make a units mix-up a compile error, and a single correction funnel keeps every lossy conversion traceable.",
            "~198 Vitest tests cover the engine, with forward-only DB migrations guarded against schema drift.",
            "Ran a multi-agent audit + adversarial review over the codebase to find dead code, real bugs and duplication — then consolidated the lot.",
          ].map((item) => (
            <li key={item} className="flex gap-3">
              <span>·</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className="font-serif italic text-foreground mt-5 text-base md:text-lg">
          A deep dive into clean architecture, deterministic design and treating
          a hobby project like production software.
        </p>
      </section>
    </div>
  );
};

export default RoadToRagnarokProject;

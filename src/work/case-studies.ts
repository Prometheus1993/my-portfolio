import { CaseStudy } from "./types";

// Wedding Hub copy is from spec-2.md (section 4.2), used close to verbatim in a
// plain first-person voice. Brightest is restructured from the existing on-site
// copy. Road to Ragnarok was refreshed 2026-07-28 against the live repo (489
// tests / 55 files verified by running the suite; 112 achievements counted in
// the registry) — same plain first-person voice, no invented facts.

const roadToRagnarok: CaseStudy = {
  slug: "road-to-ragnarok",
  title: "Road to Ragnarök",
  shortTitle: "Ragnarök",
  order: 1,
  headline: true,
  status: "ongoing",
  year: "2026",
  summary:
    "A local-first app that turns my real life into an RPG status screen: Garmin runs, gym sessions, PlayStation trophies, books, manga and exams all feed one engine that computes stats, a daily \"train hard or rest\" call, quests and 112 trophies — styled like a NieR:Automata YoRHa terminal. Everything runs on my own machine: no cloud, no account, no subscription.",
  meta: [
    { label: "Role", value: "Solo — designed and built all of it" },
    { label: "Context", value: "Personal project, in daily use and still growing" },
    {
      label: "Stack",
      value:
        "TypeScript monorepo, React + Vite, SQLite, Vitest, the Anthropic SDK plus an optional Gemini layer, Garmin and PlayStation Network connectors, Open-Meteo for weather",
    },
    { label: "Tests", value: "489, all green" },
  ],
  techStack: ["TypeScript", "React", "SQLite", "Vitest"],
  problem:
    "I wanted one place that treats real-life progress like a game: training, studying, reading and gaming all shown as stats and quests. The fun part is the game layer, but the part I cared most about is that the numbers are honest. If a stat can drift or change randomly, the whole thing is pointless. So the hard requirement was determinism: every stat is calculated the same way every time from my real data, and every calculation is testable.",
  whatIBuilt:
    "All of it, solo. A TypeScript monorepo where a pure calculation core sits behind a repository interface, with adapters around it for the messy outside world: a Garmin connector that pulls new runs and recovery data with one button, a PlayStation Network sync that keeps my trophy list and playtime honest, importers for gym sessions, weigh-ins, books, manga and exams, and a weather backfill via Open-Meteo. Every sync is idempotent — re-running an import can never duplicate data. On top of that core: three training stats, a daily readiness call, a study planner for my exam resits, a Ragnarök quest log and 112 trophies. A React dashboard renders everything from one read-only JSON contract; a CLI covers it all headless.",
  decisions: [
    {
      title: "I split the app into a thinking part and a messy part",
      body: "One package only does calculations — pure functions, no database, no network, not even a system clock (time is injected). Everything messy lives in adapters around it: file parsing, SQLite, HTTP. It's a ports-and-adapters setup in plain terms, and it's why 489 tests run fast and never flake: I feed the core data and check the answer with nothing in the way.",
    },
    {
      title: "I made the app refuse to mix kilograms and pounds",
      body: "Early on I was worried about accidentally treating a weight in pounds as if it were kilograms, which would quietly wreck a stat. So units are branded types: the compiler refuses to mix the two instead of letting it slip through silently.",
    },
    {
      title: "I gave the screen one clear thing to show",
      body: "Instead of the dashboard reaching into all the calculations itself, the app builds one read-only summary object and the screen just renders that. When I change how a stat is calculated, the UI doesn't break — it only ever reads that one contract.",
    },
    {
      title: "I put all the unit conversions in one place",
      body: "Rounding and converting can introduce small errors, so I kept that logic in a single spot rather than scattered around. That way if a number looks off, I know where to look.",
    },
    {
      title: "I used the real max heart rate instead of the common shortcut",
      body: "A lot of apps use \"220 minus your age\" to set heart-rate zones, but that is just a rough rule of thumb and it was wrong for me. I used my actual tested max, so the zones are right.",
    },
    {
      title: "Derived, never stored",
      body: "A rule I kept re-applying: anything that can be computed from the data never gets its own column. Whether an exam is passed derives from the grade, whether a manga series is finished derives from the volumes I've read, whether a game counts as synced derives from the sync data itself. Stored flags drift out of sync with reality; derived values can't lie.",
    },
    {
      title: "AI is in there, but fenced in",
      body: "The stats never touch AI — they stay deterministic. AI does the narrow jobs it's genuinely good at: parsing a pasted coaching schedule into dated sessions, writing a short weekly coach's read. Every AI feature is opt-in behind an API key and silently skips without one, responses are cached so unchanged data costs zero tokens, and a budget guard rejects a truncated answer instead of caching half a sentence — a bug I actually shipped twice before building the guard.",
    },
  ],
  outcome:
    "In daily use — it's literally how I decide whether to train hard today. 489 tests across 55 files, all green; new Garmin and PlayStation data lands with one button each; dropping an export file anywhere on the dashboard imports it. The game layer is what makes it fun; the determinism is what makes it true.",
  whatIdChange:
    "Strength sessions still come in by hand — wiring them in from Garmin's strength tracking is next. The audit trail that makes every corrected number traceable covers strength today but not yet every conversion; I want to finish that. And it's tied to one machine by design — at some point I'll want it to sync between two.",
  links: {
    note: "It runs locally, so there is no hosted demo. A short screen-recording of the dashboard plus this writeup does the job.",
  },
  aiUsage:
    "AI parses pasted schedules and writes a short weekly summary — opt-in, cached and budget-guarded. Every stat and every coaching number is hand-written, deterministic code.",
};

const weddingHub: CaseStudy = {
  slug: "wedding-hub",
  title: "Wedding Hub",
  shortTitle: "Wedding Hub",
  order: 2,
  status: "in-progress",
  year: "2026",
  summary:
    "A custom multilingual website (French, Dutch, English) for a wedding in Ghana, with an invite-only RSVP system, a private guest hub, and an AI chatbot that answers guests' questions and only escalates to the organizers when it cannot help. Built around simple, low-cost, admin-friendly tools so a non-technical couple and their family can run it themselves.",
  meta: [
    { label: "Role", value: "Solo, I design and build it" },
    { label: "Context", value: "Project for a friend, in progress, summer 2026" },
    { label: "Languages", value: "French, Dutch, English" },
    {
      label: "Stack",
      value:
        "Next.js, Vercel, Google Sheets (Apps Script), JWT session cookies, Resend, the Anthropic Claude API (model still to be decided), next-intl",
    },
  ],
  techStack: ["Next.js", "Google Sheets", "next-intl", "Claude API"],
  problem:
    "A friend is putting together the website for a wedding in Ghana, with a guest list spread across French, Dutch and English speakers from different countries. The couple and their family are not technical, so it had to be something they could run themselves without learning new tools. Guest details live on the site, so it has to stay private and only reachable by invited guests. And because a lot of guests are traveling internationally to Ghana, they need clear info about the wedding and about the country in one place. Some guests are older or do not have their own email address.",
  whatIBuilt:
    "An invite-only flow where each guest gets a single-use code that unlocks a private guest hub with the wedding details plus practical info for guests traveling to Ghana. RSVPs are stored in a Google Sheet so the couple can manage them in a tool they already know, with the codes validated and used up server-side. The site is available in French, Dutch and English. An AI assistant answers common questions in the guest's own language and only emails the organizer for questions it cannot handle. Automated emails cover invites, confirmations and access recovery, built around real constraints like guests who do not have their own email address.",
  decisions: [
    {
      title: "Single-use codes and a signed cookie instead of a full login system",
      body: "Each guest gets a one-time invite code, and once they are in I keep them signed in with a lightweight signed cookie rather than building accounts and passwords. For a one-off wedding site that keeps it simple and cheap, and there is nothing for a non-technical guest to remember. The honest downside is the same as any code-based access: I can stop a stranger from signing themselves up, but I cannot fully stop an invited guest from passing their code on.",
    },
    {
      title: "Google Sheets as the backend",
      body: "The couple are not technical, so instead of a database and an admin panel they would have to learn, the RSVPs live in a Google Sheet they already know. The app validates and uses up the codes server-side through Apps Script, so the sheet stays the source of truth without being something guests can reach directly. The tradeoff is that a spreadsheet is not a real database, so I keep the logic that touches it careful and on the server.",
    },
    {
      title: "The site picks the guest's language for them",
      body: "Instead of asking each guest to choose a language, the site reads the language their browser already sends and shows French, Dutch or English to match, then remembers it with a cookie. next-intl does most of this, and the text lives in separate translation files so there is still just one site to build. For an older, less technical audience, one less thing to figure out matters.",
    },
    {
      title: "The chatbot asks for help instead of guessing",
      body: "The assistant answers common questions in the guest's own language, but when it is not sure it emails the organizer rather than making something up about someone's travel or the wedding. I would rather it hand off to a person than give a confident wrong answer. I am still deciding which AI model to use for it.",
    },
    {
      title: "I kept the guest data minimal and the backend locked down",
      body: "Real guest details are on the site, so I collect as little as possible and keep the backend closed off. That is both a privacy decision and a GDPR one.",
    },
  ],
  outcome:
    "In progress this summer. I'm treating this section as a build log: what I've decided, what's built, and what's still open.",
  whatIdChange:
    "Still open: which AI model to use for the assistant, and tightening the email and access-recovery edge cases as the guest list firms up.",
  links: {
    note: "Repo is private until the wedding. Screenshots or a short walkthrough once the main flow works.",
  },
  aiUsage:
    "The guest assistant uses the Anthropic Claude API, with the exact model still to be decided. It answers from a known set of wedding FAQs and hands off to the organizers by email when it is unsure.",
};

const brightest: CaseStudy = {
  slug: "brightest",
  title: "Test Automation Code Generator",
  shortTitle: "Brightest",
  order: 3,
  status: "shipped",
  year: "2025",
  summary:
    "An internship tool at Brightest that pulls test methods out of a team's existing code on GitHub and generates ready-to-use test code in their own framework, aimed at testers with less coding background.",
  meta: [
    { label: "Role", value: "Intern, built with a fellow student" },
    { label: "Context", value: "Internship at Brightest, Kontich" },
    { label: "Timeframe", value: "Feb to May 2025" },
    { label: "Stack", value: "Next.js, React, TypeScript, MongoDB, MSAL, C# parsing" },
  ],
  techStack: ["Next.js", "React", "TypeScript", "MongoDB"],
  problem:
    "Brightest does test automation, and writing test scripts was hard for people there with less of a coding background. Tools like Playwright and Selenium can generate code by recording, but nothing pulled the methods the team already kept in their Page Object Model files on GitHub to make code that fit Brightest's own test framework.",
  whatIBuilt:
    "After looking into how to read methods out of JavaScript, TypeScript and C# files and getting a proof of concept working (with a fellow student I knew from the Atlas Copco project), we built a Next.js app with MongoDB for storing the setup and Microsoft sign-in for login through the Brightest environment. The flow: sign in with a Microsoft account, point the tool at a GitHub repo with a personal access token, pick the code files, compose test cases from the methods it found, and generate test code you can paste straight into a test environment. State runs through the React Context API, with services and Next.js API routes on the backend.",
  decisions: [
    {
      title: "I pulled methods from their existing code instead of recording clicks",
      body: "Playwright and Selenium already make test code by recording what you do. Instead, the tool reads the methods the team already keeps in their Page Object Model files and builds code that fits Brightest's own framework, so testers reuse what they already have instead of throwaway scripts.",
    },
    {
      title: "I wrote a small parser for their code files",
      body: "Methods get pulled out of JavaScript, TypeScript and C# files with a parser I wrote, which kept the proof of concept small enough to finish inside the internship. The downside is that reading code this way is simpler than a real parser and needs care around edge cases.",
      code: {
        filename: "PomExtractor.ts",
        content: `export class PomExtractor {
  static extractMethodsFromTs(fileContent: string): PomMethod[] {
    const methods: PomMethod[] = [];
    const methodRegex = /(?:async\\s+)?(\\w+)\\s*\\(([^)]*)\\)\\s*{/g;
    let match;

    while ((match = methodRegex.exec(fileContent)) !== null) {
      const methodName = match[1];
      const paramsString = match[2].trim();

      if (methodName === 'constructor' || methodName.startsWith('_')) continue;

      const params = paramsString
        ? paramsString.split(',').map(param => {
            const [name, type] = param.trim().split(':').map(p => p.trim());
            return { name, type: type || 'any' };
          })
        : [];

      methods.push({ name: methodName, parameters: params, returnType: 'void' });
    }

    return methods;
  }
}`,
      },
    },
    {
      title: "I put the login behind their Microsoft accounts",
      body: "Sign-in goes through Microsoft Authentication so the tool sits inside Brightest's existing accounts, which was a requirement of working there and meant learning MSAL on the job.",
    },
  ],
  outcome:
    "Shipped at the end of the internship: testers sign in, point the tool at a repo, and generate framework-ready test code from the methods it found. It was my first time building in a professional setup, which meant getting used to new workflows, checking requirements with the project manager and stakeholders, and designing how the extraction and generation fit together.",
  whatIdChange:
    "With more time I would replace the pattern-based parser with a proper one per language, which would handle the edge cases the proof of concept does not.",
  links: {
    note: "Internal Brightest project, so there is no public repo or hosted demo.",
  },
};

export const caseStudies: CaseStudy[] = [roadToRagnarok, weddingHub, brightest].sort(
  (a, b) => a.order - b.order
);

export function getAllCaseStudies(): CaseStudy[] {
  return caseStudies;
}

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((c) => c.slug === slug);
}

export function getAllCaseStudySlugs(): string[] {
  return caseStudies.map((c) => c.slug);
}

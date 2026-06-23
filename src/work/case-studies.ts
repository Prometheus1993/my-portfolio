import { CaseStudy } from "./types";

// Copy for Road to Ragnarok and Wedding Hub is from spec-2.md (sections 4.1, 4.2),
// used close to verbatim in a plain first-person voice. Brightest is restructured
// from the existing on-site copy into the same template, with no invented facts.

const roadToRagnarok: CaseStudy = {
  slug: "road-to-ragnarok",
  title: "Road to Ragnarök",
  shortTitle: "Ragnarök",
  order: 1,
  headline: true,
  status: "ongoing",
  year: "2026",
  summary:
    "An app that takes my real data, Garmin runs, gym sessions, weigh-ins, recovery numbers, plus the books, manga, games and exams I track, and turns it into RPG-style stats, a daily \"should I train hard or rest\" call, quests and trophies. It looks like a NieR:Automata YoRHa status screen. Everything runs on my own machine with no cloud and no account.",
  meta: [
    { label: "Role", value: "Solo, I designed and built all of it" },
    { label: "Context", value: "Personal project, still working on it" },
    {
      label: "Stack",
      value:
        "TypeScript, React + Vite, SQLite, Vitest for tests, the Anthropic SDK, a Garmin data connector, Open-Meteo for weather",
    },
    { label: "Tests", value: "~198" },
  ],
  techStack: ["TypeScript", "React", "SQLite", "Vitest"],
  problem:
    "I wanted one place that treats real-life progress like a game: training, studying, reading and gaming all shown as stats and quests. The fun part is the game layer, but the part I cared most about is that the numbers are honest. If the stats are made up or change randomly, the whole thing is pointless. So my main goal was that every stat is calculated the same way every time from my real data, and that I could test it.",
  whatIBuilt:
    "All of it, on my own. The app pulls runs and recovery data in from Garmin, I log my gym sessions and weigh-ins as I go, and I add books, manga, games and exams by hand. From all of that it builds three training stats, a daily readiness recommendation, a Ragnarok-themed quest log, and around a hundred trophies. There is a command-line tool for importing and a React dashboard for viewing it.",
  decisions: [
    {
      title: "I split the app into a thinking part and a messy part",
      body: "One part only does the calculations and nothing else. The other part deals with the annoying outside stuff: reading files, talking to the database, fetching weather. Keeping them apart made the calculation part much easier to test, because I could feed it data and check the answer without any of the messy stuff in the way.",
    },
    {
      title: "I made the app refuse to mix kilograms and pounds",
      body: "Early on I was worried about accidentally treating a weight in pounds as if it were in kilograms, which would quietly wreck a stat. So I set it up so the code complains if I ever try to mix the two, instead of letting it slip through silently.",
    },
    {
      title: "I gave the screen one clear thing to show",
      body: "Instead of the dashboard reaching into all the calculations itself, the app builds one tidy summary object and the screen just shows that. So when I change how a stat is calculated, the screen doesn't break, because it only ever reads that one summary.",
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
      title: "I used AI for one small job only",
      body: "The Anthropic SDK is in there, but only to read a coaching schedule I paste in and turn it into a dated plan. The rest of the app is written by hand and stays predictable.",
    },
  ],
  outcome:
    "It works and I use it. Around 198 tests, and a live dashboard where I can drop a Garmin export onto it and watch it update. Still an ongoing personal project.",
  // TODO (Jesus): replace with your real two or three lines (what was hard, what you'd clean up, a feature you want next).
  whatIdChange:
    "Next up: I want to clean up how new data sources get added, and maybe let it sync between machines so it is not tied to one computer.",
  links: {
    note: "It runs locally, so there is no hosted demo. A short screen-recording of the dashboard plus this writeup does the job.",
  },
  aiUsage: "Only the schedule parser uses AI. The rest is hand-written.",
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

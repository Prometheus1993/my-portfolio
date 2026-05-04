import React from "react";
import { ProjectData } from "./types";

export const metadata: ProjectData = {
  slug: "brightest-pom-generator",
  title: "Test Automation Code Generator",
  date: "2025-05-28",
  overview:
    "Internship project at Brightest: A tool that extracts Page Object Models (POM) from GitHub repositories and generates test code.",
  imageUrl: "/images/projects/Brightest-logo.png",
  techStack: ["React", "Next.js", "MongoDB", "TypeScript"],
  liveUrl: null,
  repoUrl: null,
  featured: true,
};

const BrightestProject: React.FC = () => {
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
          During my internship at Brightest, a company specialising in test
          automation, I developed a tool to simplify writing test scripts —
          particularly for employees with less technical background.
        </blockquote>
        <p className="text-sm md:text-base text-foreground-muted leading-relaxed">
          While existing frameworks like Playwright and Selenium offer code
          generation, this tool specifically focuses on extracting methods from
          Page Object Models (POM) stored in GitHub repositories and generating
          reusable code compatible with Brightest&apos;s internal test
          framework.
        </p>
      </section>

      {/* Approach */}
      <section>
        <h2
          id="approach"
          className="font-serif text-xl md:text-2xl text-foreground border-b border-border pb-2 mb-4"
        >
          Approach
        </h2>
        <div className="space-y-4 text-sm md:text-base text-foreground-muted leading-relaxed">
          <p>
            The project began with a research phase into existing solutions and
            the technical feasibility of extracting POM data from JavaScript,
            TypeScript and C# code files. I collaborated with a fellow student
            (known from the Atlas Copco project).
          </p>
          <p>
            After a successful proof-of-concept, we built a Next.js web
            application with MongoDB for configuration storage and Microsoft
            Authentication (MSAL) for login via the Brightest environment.
          </p>
        </div>
        <div className="mt-5 border border-border bg-surface/40">
          <div className="px-4 py-2 border-b border-border">
            <span className="font-mono text-[11px] text-foreground-muted">
              PomExtractor.ts
            </span>
          </div>
          <pre className="px-4 py-3 overflow-x-auto text-xs md:text-sm leading-relaxed">
            <code className="text-foreground">{`export class PomExtractor {
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
        <p className="text-sm md:text-base text-foreground-muted leading-relaxed mb-4">
          The end-to-end flow:
        </p>
        <ol className="space-y-3 text-sm md:text-base text-foreground-muted">
          {[
            ["Login", "Users sign in with their Microsoft account (MSAL)."],
            [
              "Repository configuration",
              "Provide a GitHub URL and a personal access token.",
            ],
            [
              "File selection",
              "Pick relevant code files. A custom extractor parses JS, TS and C#.",
            ],
            [
              "Test case creation",
              "Compose tests by selecting extracted methods and adding parameters.",
            ],
            [
              "Code generation",
              "The app outputs test code, ready to paste into a test environment.",
            ],
          ].map(([title, desc], i) => (
            <li key={title} className="grid grid-cols-12 gap-3 items-baseline">
              <span className="col-span-1 font-serif text-foreground tabular-nums">
                {i + 1}.
              </span>
              <div className="col-span-11">
                <span className="font-serif text-foreground italic">
                  {title}.
                </span>{" "}
                <span>{desc}</span>
              </div>
            </li>
          ))}
        </ol>
        <p className="text-sm md:text-base text-foreground-muted leading-relaxed mt-5">
          Key technical aspects: React Context API for state management, custom
          services, and clean backend API endpoints inside Next.js.
        </p>
      </section>

      {/* Challenges */}
      <section>
        <h2
          id="challenges"
          className="font-serif text-xl md:text-2xl text-foreground border-b border-border pb-2 mb-4"
        >
          Challenges
        </h2>
        <blockquote className="border-l-2 border-accent pl-4 mb-4 font-serif italic text-lg text-foreground-muted">
          This was my first experience in a professional development
          environment, which required adapting to new workflows and
          expectations.
        </blockquote>
        <p className="text-sm md:text-base text-foreground-muted leading-relaxed mb-3">
          Specific challenges included:
        </p>
        <ul className="space-y-1.5 text-sm md:text-base text-foreground-muted">
          {[
            "Deeply understanding the Page Object Model concept itself",
            "Communicating clearly with the project manager and internal stakeholders to clarify requirements",
            "Working with MSAL authentication in a corporate context",
            "Designing a robust architecture for code extraction and generation",
          ].map((item) => (
            <li key={item} className="flex gap-3">
              <span className="text-foreground-muted">·</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className="font-serif italic text-foreground mt-5 text-base md:text-lg">
          Valuable experience with modern web development in a professional
          context — and a meaningful step up in designing complex system
          architectures.
        </p>
      </section>
    </div>
  );
};

export default BrightestProject;

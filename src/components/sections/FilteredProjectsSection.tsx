"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import FadeIn from "@/components/animations/FadeIn";

interface Project {
  slug: string;
  title: string;
  overview: string;
  techStack: string[];
  imageUrl: string;
  liveUrl?: string | null;
  repoUrl?: string | null;
  date?: string;
}

interface FilteredProjectsSectionProps {
  projects: Project[];
}

const FilteredProjectsSection: React.FC<FilteredProjectsSectionProps> = ({
  projects,
}) => {
  const allTechs = useMemo(
    () => ["All", ...Array.from(new Set(projects.flatMap((p) => p.techStack))).sort()],
    [projects]
  );

  const [activeTech, setActiveTech] = useState<string>("All");

  const filtered =
    activeTech === "All"
      ? projects
      : projects.filter((p) => p.techStack.includes(activeTech));

  const getYear = (date?: string) => {
    if (!date) return "";
    const match = date.match(/\d{4}/);
    return match ? match[0] : "";
  };

  return (
    <section className="max-w-5xl mx-auto px-6 md:px-10 pt-10 md:pt-14 pb-6">
      <FadeIn direction="up">
        <p className="text-xs uppercase tracking-[0.2em] text-foreground-muted mb-3">
          Projects
        </p>
        <h1 className="font-serif text-3xl md:text-5xl leading-tight tracking-tight text-foreground mb-6 md:mb-8">
          A list of things I&apos;ve built.
        </h1>
      </FadeIn>

      {/* Tech filter — text-only chips */}
      <FadeIn direction="up" delay={0.1}>
        <div className="flex flex-wrap gap-x-3 gap-y-1 text-xs mb-3 pb-3 border-b border-border">
          {allTechs.map((tech) => (
            <button
              key={tech}
              onClick={() => setActiveTech(tech)}
              className={`transition-colors ${
                activeTech === tech
                  ? "text-foreground"
                  : "text-foreground-muted hover:text-foreground"
              }`}
            >
              {tech}
            </button>
          ))}
        </div>
      </FadeIn>

      {filtered.length > 0 ? (
        <ul>
          {filtered.map((project, idx) => (
            <FadeIn key={project.slug} direction="up" delay={0.04 * (idx + 1)}>
              <li className="border-b border-border">
                <Link
                  href={`/projects/${project.slug}`}
                  className="group grid grid-cols-12 gap-3 py-3 md:py-4 items-baseline transition-colors hover:bg-surface/40 -mx-3 px-3 rounded-sm"
                >
                  <div className="col-span-12 md:col-span-7">
                    <h3 className="font-serif text-lg md:text-2xl text-foreground tracking-tight leading-tight group-hover:italic transition-all">
                      {project.title}
                    </h3>
                    <p className="hidden md:block text-foreground-muted mt-1 text-sm leading-snug max-w-prose line-clamp-1">
                      {project.overview}
                    </p>
                  </div>

                  <div className="col-span-12 md:col-span-3 md:pt-2">
                    <div className="flex flex-wrap gap-x-2 gap-y-0.5 text-[11px] text-foreground-muted">
                      {project.techStack.slice(0, 3).map((tech) => (
                        <span key={tech}>{tech}</span>
                      ))}
                    </div>
                  </div>

                  <div className="col-span-12 md:col-span-2 md:text-right md:pt-2">
                    <span className="font-serif text-xs text-foreground-muted tabular-nums">
                      {getYear(project.date)}
                    </span>
                    <span
                      aria-hidden="true"
                      className="hidden md:inline-block ml-2 text-foreground-muted group-hover:translate-x-1 transition-transform"
                    >
                      →
                    </span>
                  </div>
                </Link>
              </li>
            </FadeIn>
          ))}
        </ul>
      ) : (
        <p className="py-6 text-sm text-foreground-muted">
          No projects with{" "}
          <span className="text-foreground">&apos;{activeTech}&apos;</span>.{" "}
          <button
            onClick={() => setActiveTech("All")}
            className="link-underline text-foreground"
          >
            Reset
          </button>
        </p>
      )}
    </section>
  );
};

export default FilteredProjectsSection;

"use client";

import React from "react";
import Link from "next/link";
import FadeIn from "@/components/animations/FadeIn";

interface Project {
  slug: string;
  title: string;
  overview: string;
  excerpt?: string;
  techStack?: string[];
  tags?: string[];
  imageUrl?: string;
  coverImage?: string;
  liveUrl?: string | null;
  repoUrl?: string | null;
  date?: string;
}

interface FeaturedProjectsSectionProps {
  projects: Project[];
}

const FeaturedProjectsSection: React.FC<FeaturedProjectsSectionProps> = ({
  projects,
}) => {
  const getYear = (date?: string) => {
    if (!date) return "";
    const match = date.match(/\d{4}/);
    return match ? match[0] : "";
  };

  return (
    <section className="max-w-5xl mx-auto px-6 md:px-10 pt-6 md:pt-8 pb-6">
      <FadeIn direction="up">
        <div className="flex items-baseline justify-between border-b border-border pb-2 mb-1">
          <h2 className="font-serif text-lg md:text-xl text-foreground">
            Selected work
          </h2>
          <Link
            href="/projects"
            className="text-xs text-foreground-muted hover:text-foreground transition-colors link-underline"
          >
            All projects →
          </Link>
        </div>
      </FadeIn>

      {projects.length > 0 ? (
        <ul>
          {projects.map((project, idx) => (
            <FadeIn key={project.slug} direction="up" delay={0.05 * (idx + 1)}>
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
                      {project.overview || project.excerpt}
                    </p>
                  </div>

                  <div className="col-span-12 md:col-span-3 md:pt-2">
                    <div className="flex flex-wrap gap-x-2 gap-y-0.5 text-[11px] text-foreground-muted">
                      {(project.techStack || project.tags || [])
                        .slice(0, 3)
                        .map((tech) => (
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
        <p className="py-6 text-foreground-muted">No projects available yet.</p>
      )}
    </section>
  );
};

export default FeaturedProjectsSection;

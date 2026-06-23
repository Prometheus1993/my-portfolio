import React from "react";
import Link from "next/link";
import HudFrame from "@/components/yorha/HudFrame";

interface ProjectItem {
  slug: string;
  title: string;
  summary: string;
  techStack: string[];
  year: string;
  status: string;
}

export default function ProjectCardChat({
  data,
}: {
  data: { projects: ProjectItem[] };
}) {
  return (
    <HudFrame
      label="Projects"
      labelMeta={String(data.projects.length).padStart(2, "0")}
      className="my-1.5"
    >
      <ul className="divide-y divide-line">
        {data.projects.map((p) => (
          <li key={p.slug} className="px-3 py-2">
            <Link href={`/work/${p.slug}`} className="group block">
              <div className="flex items-baseline justify-between gap-2">
                <span className="font-display text-sm uppercase leading-tight text-foreground transition-colors group-hover:text-red-ink">
                  {p.title}
                </span>
                <span className="shrink-0 font-mono text-[10px] tabular-nums text-foreground-muted">
                  {p.year}
                </span>
              </div>
              <p className="mt-0.5 line-clamp-1 font-mono text-[10px] uppercase tracking-wide text-foreground-muted">
                {p.techStack.join(" · ")}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </HudFrame>
  );
}

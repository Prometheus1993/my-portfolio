import React from "react";
import HudFrame from "@/components/yorha/HudFrame";

const btnClass =
  "inline-flex items-center gap-1.5 border border-line px-2.5 py-1 font-mono text-[11px] uppercase tracking-wide text-foreground transition-colors hover:bg-ink hover:text-bone";

export default function ResumeCardChat({
  data,
}: {
  data: { name: string; title: string; urlEn: string; urlNl: string };
}) {
  return (
    <HudFrame label="Resume" className="my-1.5">
      <div className="px-3 py-3">
        <p className="font-display text-sm uppercase text-foreground">{data.name}</p>
        <p className="mt-0.5 font-mono text-[10px] uppercase tracking-wide text-foreground-muted">
          {data.title}
        </p>
        <div className="mt-2.5 flex flex-wrap gap-2">
          <a href={data.urlEn} target="_blank" rel="noopener noreferrer" className={btnClass}>
            CV English <span aria-hidden>↓</span>
          </a>
          <a href={data.urlNl} target="_blank" rel="noopener noreferrer" className={btnClass}>
            CV Nederlands <span aria-hidden>↓</span>
          </a>
        </div>
      </div>
    </HudFrame>
  );
}

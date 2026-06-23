import React from "react";
import HudFrame from "@/components/yorha/HudFrame";
import { CaseStudy as CaseStudyType, statusLabel } from "@/work/types";

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-foreground-muted">
      <span className="text-red-ink">//</span> {children}
    </h2>
  );
}

function CodeBlock({ filename, content }: { filename: string; content: string }) {
  return (
    <div className="mt-3 border border-line bg-ink">
      <div className="border-b border-line/40 px-4 py-2">
        <span className="font-mono text-[11px] text-bone/70">{filename}</span>
      </div>
      <pre className="overflow-x-auto px-4 py-3 text-xs leading-relaxed">
        <code className="font-mono text-bone">{content}</code>
      </pre>
    </div>
  );
}

/**
 * Renders one case study as the uniform 8-part skeleton. Body copy is in the
 * legible body font (not the condensed display face) so it stays scannable;
 * the display face is used only for headings. Pure markup, RSC-safe.
 */
export default function CaseStudy({ data }: { data: CaseStudyType }) {
  const hasLinks = data.links.live || data.links.repo || data.links.recording;

  return (
    <article className="mx-auto max-w-3xl px-6 md:px-10 pb-16">
      {/* Status + title + summary */}
      <header className="border-b border-line pb-6">
        <span className="inline-flex items-center gap-2 border border-line px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.18em] text-foreground-muted">
          <span aria-hidden className="h-1.5 w-1.5 bg-red-ink" />
          {statusLabel(data.status)}
        </span>
        <h1 className="mt-4 font-display text-4xl md:text-5xl uppercase leading-[0.95] tracking-tight text-foreground">
          {data.title}
        </h1>
        <p className="mt-4 text-base md:text-lg leading-relaxed text-foreground">
          {data.summary}
        </p>
      </header>

      {/* Metadata block */}
      <HudFrame label="Metadata" labelMeta={data.year} className="my-8">
        <dl className="divide-y divide-line">
          {data.meta.map((row) => (
            <div key={row.label} className="grid grid-cols-12 gap-3 px-3 py-2">
              <dt className="col-span-4 sm:col-span-3 font-mono text-[11px] uppercase tracking-wide text-foreground-muted">
                {row.label}
              </dt>
              <dd className="col-span-8 sm:col-span-9 text-sm leading-relaxed text-foreground">
                {row.value}
              </dd>
            </div>
          ))}
        </dl>
      </HudFrame>

      <div className="space-y-10">
        <section>
          <SectionLabel>Problem</SectionLabel>
          <p className="text-sm md:text-base leading-relaxed text-foreground-muted">
            {data.problem}
          </p>
        </section>

        <section>
          <SectionLabel>What I built</SectionLabel>
          <p className="text-sm md:text-base leading-relaxed text-foreground-muted">
            {data.whatIBuilt}
          </p>
        </section>

        <section>
          <SectionLabel>Some decisions I made and why</SectionLabel>
          <ol className="space-y-6">
            {data.decisions.map((d, i) => (
              <li key={d.title}>
                <h3 className="flex gap-2 text-base md:text-lg font-semibold leading-snug text-foreground">
                  <span className="shrink-0 pt-1 font-mono text-xs tabular-nums text-red-ink">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span>{d.title}</span>
                </h3>
                <p className="mt-1.5 pl-6 text-sm md:text-base leading-relaxed text-foreground-muted">
                  {d.body}
                </p>
                {d.code && <CodeBlock filename={d.code.filename} content={d.code.content} />}
              </li>
            ))}
          </ol>
        </section>

        <section>
          <SectionLabel>Outcome and status</SectionLabel>
          <p className="text-sm md:text-base leading-relaxed text-foreground-muted">
            {data.outcome}
          </p>
        </section>

        {data.whatIdChange && (
          <section>
            <SectionLabel>What I&apos;d change next</SectionLabel>
            <p className="text-sm md:text-base leading-relaxed text-foreground-muted">
              {data.whatIdChange}
            </p>
          </section>
        )}

        <section>
          <SectionLabel>Links</SectionLabel>
          {hasLinks && (
            <div className="flex flex-wrap gap-x-5 gap-y-2 font-mono text-xs uppercase tracking-wide">
              {data.links.live && (
                <a
                  href={data.links.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground transition-colors hover:text-red-ink"
                >
                  Live ↗
                </a>
              )}
              {data.links.repo && (
                <a
                  href={data.links.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground transition-colors hover:text-red-ink"
                >
                  Repo ↗
                </a>
              )}
              {data.links.recording && (
                <a
                  href={data.links.recording}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground transition-colors hover:text-red-ink"
                >
                  Recording ↗
                </a>
              )}
            </div>
          )}
          {data.links.note && (
            <p className="text-xs leading-relaxed text-foreground-muted">{data.links.note}</p>
          )}
          {data.aiUsage && (
            <p className="mt-4 border-l-2 border-red-ink pl-3 text-xs leading-relaxed text-foreground-muted">
              <span className="font-mono uppercase tracking-wide text-foreground">AI usage:</span>{" "}
              {data.aiUsage}
            </p>
          )}
        </section>
      </div>
    </article>
  );
}

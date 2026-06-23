import React from "react";
import HudFrame from "@/components/yorha/HudFrame";

const ext = (u: string) => (u.startsWith("http") ? u : `https://${u}`);

export default function ContactCardChat({
  data,
}: {
  data: { email: string; github: string; linkedin: string; location: string };
}) {
  const rows = [
    { label: "EMAIL", value: data.email, href: `mailto:${data.email}` },
    { label: "GITHUB", value: data.github, href: ext(data.github) },
    { label: "LINKEDIN", value: data.linkedin, href: ext(data.linkedin) },
    { label: "LOC", value: data.location, href: null },
  ];
  return (
    <HudFrame label="Contact" className="my-1.5">
      <dl className="space-y-1.5 px-3 py-2">
        {rows.map((r) => (
          <div key={r.label} className="flex items-baseline gap-2 text-sm">
            <dt className="w-16 shrink-0 font-mono text-[10px] uppercase tracking-wide text-foreground-muted">
              {r.label}
            </dt>
            <dd className="min-w-0 flex-1 truncate">
              {r.href ? (
                <a
                  href={r.href}
                  target={r.href.startsWith("http") ? "_blank" : undefined}
                  rel={r.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="break-all text-xs text-foreground transition-colors hover:text-red-ink"
                >
                  {r.value}
                </a>
              ) : (
                <span className="text-xs text-foreground">{r.value}</span>
              )}
            </dd>
          </div>
        ))}
      </dl>
    </HudFrame>
  );
}

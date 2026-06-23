import React from "react";
import HudFrame from "@/components/yorha/HudFrame";

export default function SkillsCardChat({
  data,
}: {
  data: { groups: { label: string; items: string[] }[] };
}) {
  return (
    <HudFrame label="Skills" className="my-1.5">
      <dl className="space-y-2 px-3 py-2.5">
        {data.groups.map((g) => (
          <div key={g.label}>
            <dt className="font-mono text-[10px] uppercase tracking-wide text-red-ink">
              {g.label}
            </dt>
            <dd className="mt-0.5 text-xs leading-relaxed text-foreground">
              {g.items.join(", ")}
            </dd>
          </div>
        ))}
      </dl>
    </HudFrame>
  );
}

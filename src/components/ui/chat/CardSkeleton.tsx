import React from "react";

/** Loading placeholder shown while a tool call runs (state: input-available). */
export default function CardSkeleton() {
  return (
    <div className="my-1.5 border border-line bg-bone-raised/30 px-3 py-3">
      <div className="mb-2 h-2 w-20 animate-pulse bg-line/40" />
      <div className="mb-1.5 h-2 w-full animate-pulse bg-line/30" />
      <div className="h-2 w-2/3 animate-pulse bg-line/30" />
    </div>
  );
}

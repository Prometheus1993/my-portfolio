"use client";

import React from "react";
import Link from "next/link";
import { getBlogCategories } from "@/lib/blog/utils";
import FadeIn from "@/components/animations/FadeIn";

export default function BlogPage() {
  const categories = getBlogCategories();

  return (
    <section className="max-w-4xl mx-auto px-6 md:px-10 pt-10 md:pt-14 pb-6">
      <FadeIn direction="up">
        <p className="text-xs uppercase tracking-[0.2em] text-foreground-muted mb-3">
          Writing
        </p>
        <h1 className="font-serif text-3xl md:text-5xl leading-tight tracking-tight text-foreground mb-6 md:mb-8">
          Notes &amp; reflections.
        </h1>
      </FadeIn>

      {categories.length > 0 ? (
        <ul>
          {categories.map((cat, idx) => (
            <FadeIn key={cat.slug} direction="up" delay={0.05 * (idx + 1)}>
              <li className="border-b border-border">
                <Link
                  href={`/blog/category/${cat.slug}`}
                  className="group grid grid-cols-12 gap-3 py-4 md:py-5 items-baseline transition-colors hover:bg-surface/40 -mx-3 px-3 rounded-sm"
                >
                  <div className="col-span-12 md:col-span-9">
                    <h2 className="font-serif text-lg md:text-2xl text-foreground tracking-tight leading-tight group-hover:italic transition-all">
                      {cat.name}
                    </h2>
                    <p className="hidden md:block text-foreground-muted mt-1 text-sm leading-snug max-w-prose line-clamp-1">
                      {cat.description}
                    </p>
                  </div>
                  <div className="col-span-12 md:col-span-3 md:text-right md:pt-2">
                    <span className="text-xs text-foreground-muted">
                      {cat.posts.length} {cat.posts.length === 1 ? "post" : "posts"}
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
          No posts yet. Check back soon.
        </p>
      )}
    </section>
  );
}

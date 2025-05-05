// src/app/blog/tag/[tag]/page.tsx
import React from "react";
import { getAllTags, getPostsByTag } from "@/lib/blog/utils"; // Updated import path
import type { Metadata } from "next";
import BlogListingSection from "@/components/sections/BlogListingSection";

// Use a simpler export without custom interfaces to match Next.js expectations
export async function generateMetadata({
  params,
}: {
  params: { tag: string };
}): Promise<Metadata> {
  return {
    title: `${params.tag} | Blog | Jesus O\'Bulan`,
    description: `Browse all blog posts about ${params.tag} by Jesus O\'Bulan`,
  };
}

// Generate static paths for all tags
export function generateStaticParams() {
  const tags = getAllTags();

  return tags.map((tag) => ({
    tag: tag.toLowerCase(),
  }));
}

// Use the simplest interface possible and let TypeScript inference work
export default function TagPage({ params }: { params: { tag: string } }) {
  const decodedTag = decodeURIComponent(params.tag);
  const allTags = getAllTags();

  // Find the tag with the correct case
  const matchedTag = allTags.find(
    (tag) => tag.toLowerCase() === decodedTag.toLowerCase()
  );

  if (!matchedTag) {
    // If tag doesn't exist, return empty array
    return <BlogListingSection posts={[]} tags={allTags} />;
  }

  const posts = getPostsByTag(matchedTag);

  return <BlogListingSection posts={posts} tags={allTags} />;
}

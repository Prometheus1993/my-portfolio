// src/app/blog/tag/[tag]/page.tsx
import React from "react";
import { getAllTags, getPostsByTag } from "@/lib/blog/utils"; // Updated import path
import type { Metadata } from "next";
import BlogListingSection from "@/components/sections/BlogListingSection";

interface TagPageProps {
  params: Promise<{ tag: string }>;
}

// Generate static metadata for the page
export async function generateMetadata({
  params,
}: TagPageProps): Promise<Metadata> {
  // Await the params as per Next.js 15 documentation
  const { tag } = await params;

  return {
    title: `${tag} | Blog | Jesus O\'Bulan`,
    description: `Browse all blog posts about ${tag} by Jesus O\'Bulan`,
  };
}

// Generate static paths for all tags
export function generateStaticParams() {
  const tags = getAllTags();

  return tags.map((tag) => ({
    tag: tag.toLowerCase(),
  }));
}

export default async function TagPage({ params }: TagPageProps) {
  // Await the params as per Next.js 15 documentation
  const { tag } = await params;

  const decodedTag = decodeURIComponent(tag);
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

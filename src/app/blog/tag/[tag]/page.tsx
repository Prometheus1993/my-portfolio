// src/app/blog/tag/[tag]/page.tsx
import React from "react";
import { getAllTags, getPostsByTag } from "@/lib/blog/utils"; // Updated import path
import type { Metadata } from "next";
import BlogListingSection from "@/components/sections/BlogListingSection";

// Define the params type for this dynamic route
type TagParams = {
  tag: string;
};

// Define the props type for the page component
type PageProps = {
  params: TagParams;
  searchParams: Record<string, string | string[] | undefined>;
};

// Generate static metadata for the page
export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  return {
    title: `${params.tag} | Blog | Jesus O\'Bulan`,
    description: `Browse all blog posts about ${params.tag} by Jesus O\'Bulan`,
  };
}

// Generate static paths for all tags
export function generateStaticParams(): TagParams[] {
  const tags = getAllTags();

  return tags.map((tag) => ({
    tag: tag.toLowerCase(),
  }));
}

// Page component with correct Next.js App Router typing
export default function TagPage({ params }: PageProps) {
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

// src/app/blog/tag/[tag]/page.tsx
import React from "react";
import { getAllPosts, getAllTags} from "@/lib/blog/utils";
import type { Metadata } from "next";
import BlogListingSection from "@/components/sections/BlogListingSection";
import { notFound } from "next/navigation";

interface TagPageProps {
  params: Promise<{ tag: string }>;
}

// Generate metadata for SEO
export async function generateMetadata({
  params,
}: TagPageProps): Promise<Metadata> {
  const { tag } = await params;
  const decodedTag = decodeURIComponent(tag);

  // Check if tag exists
  const allTags = getAllTags();
  const tagExists = allTags.some(
    (t) => t.toLowerCase() === decodedTag.toLowerCase()
  );

  if (!tagExists) {
    return {
      title: "Tag Not Found | Blog | Jesus O'Bulan",
      description: "The requested tag could not be found.",
    };
  }

  return {
    title: `${decodedTag} | Blog | Jesus O'Bulan`,
    description: `Browse articles tagged with ${decodedTag}`,
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
  const { tag } = await params;
  const decodedTag = decodeURIComponent(tag);

  // Check if tag exists
  const allTags = getAllTags();
  const tagExists = allTags.some(
    (t) => t.toLowerCase() === decodedTag.toLowerCase()
  );

  if (!tagExists) {
    notFound();
  }

  const posts = getAllPosts();
  const tags = getAllTags();

  // Pass down the active tag as selectedTag
  return (
    <BlogListingSection posts={posts} tags={tags} selectedTag={decodedTag} />
  );
}

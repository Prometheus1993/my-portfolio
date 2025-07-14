// src/app/blog/[slug]/page.tsx
import React from "react";
import { getAllPosts, getPostBySlug, getRelatedPosts } from "@/lib/blog/utils";
import type { Metadata } from "next";
import BlogPostDetail from "@/components/sections/BlogPostDetail";
import { notFound } from "next/navigation";

interface BlogPostPageProps {
  params: { slug: string };
}

// Generate static metadata for the page
export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = params;

  try {
    const post = await getPostBySlug(slug);

    return {
      title: `${post.title} | Blog | Jesus O\'Bulan`,
      description: post.excerpt,
      openGraph: {
        title: post.title,
        description: post.excerpt,
      },
    };
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return {
      title: "Blog Post Not Found | Jesus O'Bulan",
      description: "The requested blog post could not be found.",
    };
  }
}

// Generate static paths for all blog posts
export function generateStaticParams() {
  const posts = getAllPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = params;

  // Try to get the post, but handle the case where it's not found
  try {
    const post = await getPostBySlug(slug);
    const relatedPosts = getRelatedPosts(slug, 3);

    return <BlogPostDetail post={post} relatedPosts={relatedPosts} />;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    // If the post isn't found, return a 404 page
    notFound();
  }
}

// src/app/blog/[slug]/page.tsx
import React from "react";
import { getAllPosts, getPostBySlug, getRelatedPosts } from "@/lib/blog/utils";
import type { Metadata } from "next";
import BlogPostDetail from "@/components/sections/BlogPostDetail";
import { notFound } from "next/navigation";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

// Generate static metadata for the page
export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  // Await the params as per Next.js 15 documentation
  const { slug } = await params;

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
  // Await the params as per Next.js 15 documentation
  const { slug } = await params;

  // Try to get the post, but handle the case where it's not found
  try {
    const post = await getPostBySlug(slug);
    const relatedPosts = getRelatedPosts(slug, 3);

    return <BlogPostDetail post={post} relatedPosts={relatedPosts} />;
  } catch (error) {
    // If the post isn't found, return a 404 page
    notFound();
  }
}

// src/app/blog/[slug]/page.tsx
import React from 'react';
import { getAllPosts, getPostBySlug, getRelatedPosts } from '@/lib/blog';
import type { Metadata } from 'next';
import BlogPostDetail from '@/components/sections/BlogPostDetail';

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

// Generate static metadata for the page
export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const slug = params.slug;
  const post = await getPostBySlug(slug);
  
  return {
    title: `${post.title} | Blog | Jesus O\'Bulan`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.coverImage]
    },
  };
}

// Generate static paths for all blog posts
export async function generateStaticParams() {
  const posts = getAllPosts();
  
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const slug = params.slug;
  const post = await getPostBySlug(slug);
  const relatedPosts = getRelatedPosts(slug, 3);
  
  return (
    <BlogPostDetail post={post} relatedPosts={relatedPosts} />
  );
}
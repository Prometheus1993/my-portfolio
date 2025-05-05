// src/app/blog/page.tsx
import React from "react";
import { getAllPosts, getAllTags } from "@/lib/blog/utils"; // Updated import path
import type { Metadata } from "next";
import BlogListingSection from "@/components/sections/BlogListingSection";

export const metadata: Metadata = {
  title: "Blog | Jesus O'Bulan",
  description:
    "Read my latest thoughts, tutorials, and insights about development, technology, and my experiences.",
};

export default function BlogPage() {
  const posts = getAllPosts();
  const tags = getAllTags();

  return (
    <>
      <BlogListingSection posts={posts} tags={tags} />
    </>
  );
}
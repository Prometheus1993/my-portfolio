// src/app/page.tsx
import HeroSection from "@/components/sections/HeroSection";
import FeaturedProjectsSection from "@/components/sections/FeaturedProjectsSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import BlogSection from "@/components/sections/BlogSection";
import { getFeaturedProjectsData, getAllProjectsData } from "@/projects"; // Nieuwe import pad
import { getRecentPosts } from "@/lib/blog";

export default function Home() {
  // Get featured projects first
  let featuredProjects = getFeaturedProjectsData();

  // If no projects are marked as featured, fall back to the most recent projects
  if (featuredProjects.length === 0) {
    featuredProjects = getAllProjectsData().slice(0, 3);
  }

  // Get recent blog posts
  const recentPosts = getRecentPosts(3);

  return (
    <>
      <HeroSection />
      <FeaturedProjectsSection projects={featuredProjects} />
      <BlogSection posts={recentPosts} />
      <TestimonialsSection />
    </>
  );
}
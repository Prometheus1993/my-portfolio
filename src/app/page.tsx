// src/app/page.tsx
import HeroSection from "@/components/sections/HeroSection"; // Main hero section
import FeaturedProjectsSection from "@/components/sections/FeaturedProjectsSection";
import RecentBlogSection from "@/components/sections/RecentBlogSection";
import { getFeaturedProjectsData, getAllProjectsData } from "@/projects";
import { getRecentPosts } from "@/lib/blog/utils";

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
      <HeroSection /> {/* Main hero section */}
      <FeaturedProjectsSection projects={featuredProjects} />
      <RecentBlogSection posts={recentPosts} />
    </>
  );
}

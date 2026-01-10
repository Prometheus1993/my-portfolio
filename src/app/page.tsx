// src/app/page.tsx
import HeroSection from "@/components/sections/HeroSection"; // Main hero section
import FeaturedProjectsSection from "@/components/sections/FeaturedProjectsSection";
import { getFeaturedProjectsData, getAllProjectsData } from "@/projects";

export default function Home() {
  // Get featured projects first
  let featuredProjects = getFeaturedProjectsData();

  // If no projects are marked as featured, fall back to the most recent projects
  if (featuredProjects.length === 0) {
    featuredProjects = getAllProjectsData().slice(0, 3);
  }

  return (
    <>
      <HeroSection /> {/* Main hero section */}
      <FeaturedProjectsSection projects={featuredProjects} />
    </>
  );
}

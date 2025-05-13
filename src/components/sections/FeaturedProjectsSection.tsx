"use client";

// src/components/sections/FeaturedProjectsSection.tsx
import React from "react";
import Link from "next/link";
import ProjectCard from "@/components/ui/ProjectCard";
import Button from "@/components/ui/Button";
import { FaArrowRight } from "react-icons/fa";
import FadeIn from "@/components/animations/FadeIn";
import StaggerContainer from "@/components/animations/StaggerContainer";

// Define the project interface
interface Project {
  slug: string;
  title: string;
  overview: string;
  excerpt?: string; // For MDX files
  techStack?: string[];
  tags?: string[]; // For MDX files
  imageUrl?: string;
  coverImage?: string; // For MDX files
  liveUrl?: string | null;
  repoUrl?: string | null;
}

interface FeaturedProjectsSectionProps {
  projects: Project[];
}

const FeaturedProjectsSection: React.FC<FeaturedProjectsSectionProps> = ({
  projects,
}) => {
  return (
    <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <FadeIn direction="up">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
              Featured Projects
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              A selection of my best work. These projects showcase my skills and
              expertise.
            </p>
          </div>
        </FadeIn>

        {projects.length > 0 ? (
          <StaggerContainer staggerDelay={0.1} delay={0.2}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 mb-12 ">
              {projects.map((project) => (
                <div key={project.slug}>
                  <ProjectCard
                    slug={project.slug}
                    title={project.title}
                    overview={project.overview || project.excerpt || ""}
                    techStack={project.techStack}
                    tags={project.tags}
                    imageUrl={project.imageUrl || project.coverImage || ""}
                    liveUrl={project.liveUrl}
                    repoUrl={project.repoUrl}
                  />
                </div>
              ))}
            </div>
          </StaggerContainer>
        ) : (
          <div className="text-center py-10">
            <p className="text-gray-600 dark:text-gray-400">
              No projects available yet.
            </p>
          </div>
        )}

        <FadeIn direction="up" delay={0.4}>
          <div className="text-center">
            <Link href="/projects">
              <Button
                variant="secondary"
                className="inline-flex items-center hover:translate-x-1 transition-transform"
              >
                View all projects <FaArrowRight className="ml-2" />
              </Button>
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default FeaturedProjectsSection;

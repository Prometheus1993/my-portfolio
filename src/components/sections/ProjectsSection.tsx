// src/components/sections/ProjectsSection.tsx
import React from "react";
import ProjectCard from "@/components/ui/ProjectCard";

// Define the type for the project prop
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

interface ProjectsSectionProps {
  projects: Project[]; // Receive the projects as prop
}

const ProjectsSection: React.FC<ProjectsSectionProps> = ({ projects }) => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 md:mb-16 text-gray-900 dark:text-white">
          My Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {/* Use the 'projects' prop to map */}
          {projects.map((project) => (
            <ProjectCard
              key={project.slug}
              slug={project.slug}
              title={project.title}
              overview={project.overview || project.excerpt || ""} // Support both fields
              techStack={project.techStack}
              tags={project.tags}
              imageUrl={project.imageUrl || project.coverImage || ""} // Support both fields
              liveUrl={project.liveUrl}
              repoUrl={project.repoUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

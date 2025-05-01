"use client";

import React, { useState, useEffect } from "react";
import ProjectCard from "@/components/ui/ProjectCard";
import FilterButton from "@/components/ui/FilterButton";
import FadeIn from "@/components/animations/FadeIn";
import StaggerContainer from "@/components/animations/StaggerContainer";
import { motion, AnimatePresence } from "framer-motion";

// Define the type for the project prop
interface Project {
  slug: string;
  title: string;
  overview: string;
  techStack: string[];
  imageUrl: string;
  liveUrl?: string | null;
  repoUrl?: string | null;
}

interface FilteredProjectsSectionProps {
  projects: Project[];
}

const FilteredProjectsSection: React.FC<FilteredProjectsSectionProps> = ({
  projects,
}) => {
  // State for filtered projects
  const [filteredProjects, setFilteredProjects] = useState<Project[]>(projects);

  // State for active filter
  const [activeFilter, setActiveFilter] = useState<string>("All");

  // Extract all unique technologies from projects
  const allTechnologies = [
    "All",
    ...Array.from(new Set(projects.flatMap((project) => project.techStack))),
  ].sort();

  // Filter projects when activeFilter changes
  useEffect(() => {
    if (activeFilter === "All") {
      setFilteredProjects(projects);
    } else {
      const filtered = projects.filter((project) =>
        project.techStack.includes(activeFilter)
      );
      setFilteredProjects(filtered);
    }
  }, [activeFilter, projects]);

  // Handle filter button click
  const handleFilterClick = (tech: string) => {
    setActiveFilter(tech);
  };

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <FadeIn direction="up">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12 text-gray-900 dark:text-white">
            Projecten
          </h2>
        </FadeIn>

        {/* Filter buttons */}
        <FadeIn direction="up" delay={0.1}>
          <div className="flex flex-wrap justify-center gap-2 mb-10 md:mb-14">
            {allTechnologies.map((tech) => (
              <FilterButton
                key={tech}
                label={tech}
                isActive={activeFilter === tech}
                onClick={() => handleFilterClick(tech)}
              />
            ))}
          </div>
        </FadeIn>

        {/* Project grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {filteredProjects.length > 0 ? (
              <StaggerContainer staggerDelay={0.1} delay={0.1}>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
                  {filteredProjects.map((project) => (
                    <div key={project.slug}>
                      <ProjectCard
                        slug={project.slug}
                        title={project.title}
                        overview={project.overview}
                        techStack={project.techStack}
                        imageUrl={project.imageUrl}
                        liveUrl={project.liveUrl}
                        repoUrl={project.repoUrl}
                      />
                    </div>
                  ))}
                </div>
              </StaggerContainer>
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-600 dark:text-gray-400">
                  Geen projecten gevonden met de technologie '{activeFilter}'.
                </p>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default FilteredProjectsSection;

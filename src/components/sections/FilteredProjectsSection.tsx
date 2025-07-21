"use client";

import React, { useState, useEffect } from "react";
import ProjectCard from "@/components/ui/ProjectCard";
import FadeIn from "@/components/animations/FadeIn";
import TabContainer from "@/components/ui/TabContainer";
import { FaSearch } from "react-icons/fa";

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

  // State for search query
  const [searchQuery, setSearchQuery] = useState<string>("");

  // Extract all unique technologies from projects - fix de sortering
  const allTechnologies = [
    "All",
    ...Array.from(
      new Set(projects.flatMap((project) => project.techStack))
    ).sort(),
  ];

  // Filter projects by search query
  useEffect(() => {
    if (searchQuery.trim() === "") {
      setFilteredProjects(projects);
    } else {
      const query = searchQuery.toLowerCase();
      const filtered = projects.filter(
        (project) =>
          project.title.toLowerCase().includes(query) ||
          project.overview.toLowerCase().includes(query) ||
          project.techStack.some((tech) => tech.toLowerCase().includes(query))
      );
      setFilteredProjects(filtered);
    }
  }, [searchQuery, projects]);

  // Handle search input change
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  // Create tab content for each technology
  const techTabs = allTechnologies.map((tech) => {
    // Filter projects based on the selected technology
    const techProjects =
      tech === "All"
        ? filteredProjects
        : filteredProjects.filter((project) =>
            project.techStack.includes(tech)
          );

    return {
      id: tech.toLowerCase().replace(/\s+/g, "-"),
      label: tech,
      content: (
        <div className="mt-6">
          {techProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
              {techProjects.map((project) => (
                <ProjectCard
                  key={project.slug}
                  slug={project.slug}
                  title={project.title}
                  overview={project.overview}
                  techStack={project.techStack}
                  imageUrl={project.imageUrl}
                  liveUrl={project.liveUrl}
                  repoUrl={project.repoUrl}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-600 dark:text-gray-400">
                No projects found with the technology &apos;{tech}&apos;
                {searchQuery ? " and your search query" : ""}.
              </p>
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="text-blue-600 dark:text-blue-400 hover:underline mt-2"
                >
                  Clear search
                </button>
              )}
            </div>
          )}
        </div>
      ),
    };
  });

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <FadeIn direction="up">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12 text-gray-900 dark:text-white">
            My Projects
          </h2>
        </FadeIn>

        {/* Search bar */}
        <FadeIn direction="up" delay={0.1}>
          <div className="relative max-w-md mx-auto mb-10">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <FaSearch className="text-gray-500 dark:text-gray-400" />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearchChange}
              placeholder="    Search projects..."
              className="block w-full pl-10 pr-4 py-3 text-sm bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-blue-500 focus:border-blue-500 text-gray-900 dark:text-white"
            />
          </div>
        </FadeIn>

        {/* Projects tabs */}
        <FadeIn direction="up" delay={0.2}>
          <TabContainer
            tabs={techTabs}
            defaultTabId="all"
            transitionDirection="fade"
            transitionDuration={0.3}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6"
            tabsClassName="flex flex-wrap -mb-6"
          />
        </FadeIn>
      </div>
    </section>
  );
};

export default FilteredProjectsSection;

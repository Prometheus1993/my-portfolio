// src/components/ui/ProjectCard.tsx
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

// Define the structure of the project data this card expects
interface ProjectCardProps {
  slug: string;
  title: string;
  overview: string;
  techStack?: string[]; // Made optional
  tags?: string[]; // For MDX files that use tags instead of techStack
  imageUrl: string;
  liveUrl?: string | null;
  repoUrl?: string | null;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  slug,
  title,
  overview,
  techStack = [], // Default value
  tags = [], // Default value
  imageUrl,
  liveUrl,
  repoUrl,
}) => {
  // Use tags as alternative if techStack is not available
  const technologies = techStack.length > 0 ? techStack : tags;

  return (
    <div className="bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col border border-gray-200 dark:border-gray-700">
      {/* Project Image - always white background */}
      <div className="relative w-full h-48 md:h-48 bg-white">
        <Image
          src={imageUrl}
          alt={`Thumbnail for ${title}`}
          fill
          style={{ objectFit: "contain", objectPosition: "center" }}
          className="transition-all duration-300 p-2"
        />
      </div>

      {/* Project Information */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
          {title}
        </h3>
        <p className="text-gray-600 dark:text-gray-400 text-base md:text-sm mb-4 flex-grow">
          {overview}
        </p>
        {/* Tech Stack Badges */}
        <div className="mb-5 flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 text-sm md:text-xs font-medium px-3 py-1 min-h-[32px] flex items-center rounded touch-manipulation"
            >
              {tech}
            </span>
          ))}
        </div>
        {/* Buttons / Links - Mobile optimized */}
        <div className="mt-auto flex flex-col sm:flex-row gap-3 sm:gap-2">
          <Link href={`/projects/${slug}`} className="flex-1">
            <Button variant="secondary" className="w-full sm:w-auto text-sm px-4 py-2">
              Details
            </Button>
          </Link>
          {liveUrl && (
            <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="flex-1">
              <Button variant="primary" className="w-full sm:w-auto text-sm px-4 py-2">
                Live Demo
              </Button>
            </a>
          )}
          {repoUrl && (
            <a href={repoUrl} target="_blank" rel="noopener noreferrer" className="flex-1">
              <Button variant="secondary" className="w-full sm:w-auto text-sm px-4 py-2">
                Code
              </Button>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

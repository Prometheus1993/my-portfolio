// src/app/projects/[slug]/page.tsx
import {
  getAllProjectSlugs,
  getProjectBySlug,
  projectComponents,
} from "@/projects";
import type { Metadata } from "next";
import Image from "next/image";
import Button from "@/components/ui/Button";
import { notFound } from "next/navigation";
import TableOfContents from "@/components/ui/TableOfContents";

// Props type for the page component
type Props = {
  params: Promise<{ slug: string }>;
};

// Generate Metadata dynamically
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // Await the params as per Next.js 15 documentation
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project Not Found",
      description: "The requested project could not be found",
    };
  }

  return {
    title: `${project.title} | Project`,
    description: project.overview,
  };
}

// Generate static paths during build
export function generateStaticParams() {
  const paths = getAllProjectSlugs();
  return paths;
}

// The page component itself
export default async function ProjectDetailPage({ params }: Props) {
  // Await the params as per Next.js 15 documentation
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  // If project doesn't exist, return 404
  if (!project) {
    notFound();
  }

  // Get the corresponding component
  const ProjectComponent =
    projectComponents[slug as keyof typeof projectComponents];

  // If component doesn't exist, return 404
  if (!ProjectComponent) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      {/* Project Header */}
      <div className="mb-10 md:mb-12 text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
          {project.title}
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          {project.overview}
        </p>
        <p className="text-sm text-gray-500 dark:text-gray-500 mt-2">
          Published on: {project.date}
        </p>
      </div>

      {/* Main Image */}
      <div className="relative w-full h-48 md:h-64 mb-6 md:mb-8 rounded-lg overflow-hidden shadow-md">
        <Image
          src={project.imageUrl}
          alt={`Header image for ${project.title}`}
          fill
          style={{ objectFit: "contain", objectPosition: "center" }}
          className="bg-gray-100 dark:bg-gray-800"
          priority // Most important image on the page
        />
      </div>

      {/* Content Columns (Text left, Details right) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-12">
        {/* Left column: Project Content */}
        <div className="lg:col-span-2">
          {/* Render the project component */}
          <ProjectComponent />
        </div>

        {/* Right column: Table of Contents, Tech Stack & Links */}
        <aside className="lg:col-span-1 space-y-6">
          {/* Table of Contents - will be filled by the project component */}
          <TableOfContents />

          {/* Tech Stack & Links - Sticky below ToC */}
          <div className="lg:sticky lg:top-96">
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 border-b border-gray-300 dark:border-gray-600 pb-2 text-gray-800 dark:text-gray-200">
                Technologies Used
              </h3>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs font-medium px-2.5 py-0.5 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <h3 className="text-xl font-semibold mb-4 border-b border-gray-300 dark:border-gray-600 pb-2 text-gray-800 dark:text-gray-200">
                Links
              </h3>
              <div className="flex flex-col space-y-3">
                {project.liveUrl ? (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="primary" className="w-full text-sm">
                      View Live Demo
                    </Button>
                  </a>
                ) : (
                  <Button variant="primary" className="w-full text-sm" disabled>
                    Live Demo (N/A)
                  </Button>
                )}
                {project.repoUrl ? (
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="secondary" className="w-full text-sm">
                      View Code
                    </Button>
                  </a>
                ) : (
                  <Button
                    variant="secondary"
                    className="w-full text-sm"
                    disabled
                  >
                    Code (Private)
                  </Button>
                )}
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}

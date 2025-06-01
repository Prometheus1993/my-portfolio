// src/projects/ProjectTemplate.tsx
// This is a template for converting other project components to the new format
import React from "react";
import { ProjectData } from "./types";

// Export the project metadata
export const metadata: ProjectData = {
  slug: "project-slug",
  title: "Project Title",
  date: "2025-01-01",
  overview: "Brief overview of the project",
  imageUrl: "/images/projects/project-image.png",
  techStack: ["React", "TypeScript", "etc"],
  liveUrl: "https://example.com",
  repoUrl: "https://github.com/username/repo",
  featured: true,
};

const ProjectTemplate: React.FC = () => {
  return (
    <div className="prose prose-lg dark:prose-invert max-w-none">
      {/* Each section should have:
          - An id for the ToC to link to
          - A descriptive h2 title
          - mb-12 pb-12 for spacing
          - border-b (except last section)
      */}
      
      {/* Section 1 */}
      <section className="mb-12 pb-12 border-b border-gray-200 dark:border-gray-700">
        <h2 id="overview" className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
          Overview
        </h2>
        <div className="space-y-6">
          {/* Use colored boxes for important information */}
          <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-5 mb-6 border-l-4 border-blue-500">
            <p className="text-blue-800 dark:text-blue-300 text-sm md:text-base font-medium">
              Important highlight or summary
            </p>
          </div>
          <p className="text-gray-700 dark:text-gray-300">
            Main content paragraph...
          </p>
        </div>
      </section>

      {/* Section 2 */}
      <section className="mb-12 pb-12 border-b border-gray-200 dark:border-gray-700">
        <h2 id="features" className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
          Features
        </h2>
        <div className="space-y-6">
          <p className="text-gray-700 dark:text-gray-300">
            Introduction to features...
          </p>
          {/* Use ordered lists for step-by-step flows */}
          <ol className="list-decimal pl-6 space-y-4 mb-6">
            <li className="text-gray-700 dark:text-gray-300">
              <span className="font-semibold">Feature 1:</span> Description
            </li>
            <li className="text-gray-700 dark:text-gray-300">
              <span className="font-semibold">Feature 2:</span> Description
            </li>
          </ol>
          {/* Use unordered lists for general points */}
          <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2 mb-6">
            <li>Point 1</li>
            <li>Point 2</li>
          </ul>
        </div>
      </section>

      {/* Section 3 - Code Example */}
      <section className="mb-12 pb-12 border-b border-gray-200 dark:border-gray-700">
        <h2 id="implementation" className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
          Implementation Details
        </h2>
        <div className="space-y-6">
          <p className="text-gray-700 dark:text-gray-300">
            Explanation of implementation...
          </p>
          {/* Code blocks need not-prose class to avoid prose styling */}
          <div className="bg-gray-900 rounded-lg p-6 mb-6 not-prose">
            <div className="flex justify-between items-center mb-2">
              <span className="text-gray-400 text-xs">filename.tsx</span>
            </div>
            <pre className="text-gray-100 overflow-x-auto text-sm">
              <code>
                {`// Your code here
const example = "Hello World";`}
              </code>
            </pre>
          </div>
        </div>
      </section>

      {/* Section 4 - Last section (no border) */}
      <section className="mb-6">
        <h2 id="lessons-learned" className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
          Lessons Learned
        </h2>
        <div className="space-y-6">
          {/* Use different colored boxes for different types of information */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-5 mb-6 border-l-4 border-yellow-500">
            <p className="text-yellow-800 dark:text-yellow-300 text-sm md:text-base font-medium">
              Challenges or warnings
            </p>
          </div>
          <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-5 border-l-4 border-green-500">
            <p className="text-green-800 dark:text-green-300 text-sm md:text-base font-medium">
              Success or achievements
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectTemplate;
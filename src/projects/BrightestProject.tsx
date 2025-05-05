// src/projects/BrightestProject.tsx
import React from "react";
import { ProjectData } from "./types";
import TabContainer from "@/components/ui/TabContainer";

// Export the project metadata
export const metadata: ProjectData = {
  slug: "brightest-pom-generator",
  title: "Test Automation Code Generator",
  date: "2024-04-01",
  overview:
    "Internship project at Brightest: A tool that extracts Page Object Models (POM) from GitHub repositories and generates test code.",
  imageUrl: "/images/projects/brightest-logo.png",
  techStack: [
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "MongoDB",
    "MSAL",
    "Context API",
  ],
  liveUrl: null,
  repoUrl: null,
  featured: true,
};

const BrightestProject: React.FC = () => {
  // Define tab content
  const tabs = [
    {
      id: "overview",
      label: "Overview",
      content: (
        <div className="space-y-6">
          <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-5 mb-6 border-l-4 border-blue-500">
            <p className="text-blue-800 dark:text-blue-300 text-sm md:text-base font-medium">
              During my internship at Brightest, a company specializing in test
              automation, I developed a tool to simplify writing test scripts,
              particularly for employees with less technical background.
            </p>
          </div>
          <p className="text-gray-700 dark:text-gray-300">
            While existing frameworks like Playwright and Selenium offer code
            generation, this tool specifically focuses on extracting methods from
            Page Object Models (POM) stored in GitHub repositories and generating
            reusable code compatible with Brightest&apos;s internal test
            framework.
          </p>
        </div>
      ),
    },
    {
      id: "approach",
      label: "Approach",
      content: (
        <div className="space-y-6">
          <p className="text-gray-700 dark:text-gray-300">
            The project began with a research phase into existing solutions and
            the technical feasibility of extracting POM data from code files
            (JavaScript, TypeScript, C#). I collaborated with a fellow student
            (known from the Atlas Copco project).
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            After a successful proof-of-concept, we proceeded with developing a
            full-fledged Next.js web application with a MongoDB database for
            configurations and Microsoft Authentication Library (MSAL) for login
            via the Brightest environment.
          </p>
          <div className="bg-gray-900 rounded-lg p-6 mb-6">
            <div className="flex justify-between items-center mb-2">
              <span className="text-gray-400 text-xs">PomExtractor.ts</span>
            </div>
            <pre className="text-gray-100 overflow-x-auto text-sm">
              <code>
                {`// Example of our POM extraction logic
export class PomExtractor {
  // Extract methods from TypeScript/JavaScript files
  static extractMethodsFromTs(fileContent: string): PomMethod[] {
    const methods: PomMethod[] = [];
    
    // Regular expression to match class methods
    const methodRegex = /(?:async\\s+)?(\\w+)\\s*\\(([^)]*)\\)\\s*{/g;
    let match;
    
    while ((match = methodRegex.exec(fileContent)) !== null) {
      const methodName = match[1];
      const paramsString = match[2].trim();
      
      // Skip constructor and private methods
      if (methodName === 'constructor' || methodName.startsWith('_')) {
        continue;
      }
      
      // Parse parameters
      const params = paramsString ? 
        paramsString.split(',').map(param => {
          const [name, type] = param.trim().split(':').map(p => p.trim());
          return { name, type: type || 'any' };
        }) : [];
      
      methods.push({
        name: methodName,
        parameters: params,
        returnType: 'void' // Default, could be enhanced to detect return type
      });
    }
    
    return methods;
  }
}`}
              </code>
            </pre>
          </div>
        </div>
      ),
    },
    {
      id: "features",
      label: "Features",
      content: (
        <div className="space-y-6">
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            The &quot;Test Automation Code Generator&quot; offers the following
            end-to-end flow:
          </p>
          <ol className="list-decimal pl-6 space-y-4 mb-6">
            <li className="text-gray-700 dark:text-gray-300">
              <span className="font-semibold">Login:</span> Users log in via their
              Microsoft account (MSAL)
            </li>
            <li className="text-gray-700 dark:text-gray-300">
              <span className="font-semibold">Repository Configuration:</span>{" "}
              Users can enter a GitHub repository URL (account or specific repo)
              and a GitHub Access Token
            </li>
            <li className="text-gray-700 dark:text-gray-300">
              <span className="font-semibold">File Selection:</span> The tool
              displays available repositories, and the user selects relevant code
              files from which POM methods should be extracted. A custom extractor
              parses JS, TS, and C# code
            </li>
            <li className="text-gray-700 dark:text-gray-300">
              <span className="font-semibold">Test Case Creation:</span> On a
              separate tab, users can compose test cases by selecting extracted
              methods and adding parameters as needed
            </li>
            <li className="text-gray-700 dark:text-gray-300">
              <span className="font-semibold">Code Generation:</span> The
              application generates the corresponding test code that can be
              directly copied and pasted into a test environment
            </li>
          </ol>
          <p className="text-gray-700 dark:text-gray-300">
            Key technical aspects included using the React Context API for state
            management (single source of truth), setting up custom services, and
            writing clear backend API endpoints within Next.js.
          </p>
        </div>
      ),
    },
    {
      id: "challenges",
      label: "Challenges",
      content: (
        <div className="space-y-6">
          <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-5 mb-6 border-l-4 border-yellow-500">
            <p className="text-yellow-800 dark:text-yellow-300 text-sm md:text-base font-medium">
              This project was my first experience in a professional development
              environment, which required adaptation to new workflows and
              expectations.
            </p>
          </div>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Specific challenges included:
          </p>
          <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2 mb-6">
            <li>Deeply understanding the Page Object Model concept itself</li>
            <li>
              Effective communication with the project manager (PM) and the
              &quot;client&quot; (internal stakeholders at Brightest) to clarify
              requirements
            </li>
            <li>Working with MSAL authentication within a corporate context</li>
            <li>
              Designing a robust architecture for code extraction and generation
            </li>
          </ul>
          <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-5 border-l-4 border-green-500">
            <p className="text-green-800 dark:text-green-300 text-sm md:text-base font-medium">
              This internship project gave me valuable experience with modern web
              development in a professional context and improved my skills in
              designing complex system architectures.
            </p>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div>
      <TabContainer 
        tabs={tabs}
        defaultTabId="overview"
        transitionDirection="fade" 
        transitionDuration={0.3}
        className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6"
      />
    </div>
  );
};

export default BrightestProject;
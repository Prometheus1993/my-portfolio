// src/projects/AtlasCopcoProject.tsx
import React from "react";
import { ProjectData } from "./types";
import TabContainer from "@/components/ui/TabContainer";

// Export the project metadata
export const metadata: ProjectData = {
  slug: "atlas-copco-logger",
  title: "Atlas Copco Logger/Display App",
  date: "2024-12-20",
  overview:
    "Frontend development for a web application that logs and visualizes measurement data from industrial equipment.",
  imageUrl: "/images/projects/Atlas-Copco-Logo.png",
  techStack: [
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Auth0",
    "C#",
    "Node.js",
    "PostgreSQL",
  ],
  liveUrl: null,
  repoUrl: null,
  featured: true,
};

const AtlasCopcoProject: React.FC = () => {
  // Define tab content
  const tabs = [
    {
      id: "overview",
      label: "Overview",
      content: (
        <div className="space-y-6">
          <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-5 mb-6 border-l-4 border-blue-500">
            <p className="text-blue-800 dark:text-blue-300 text-sm md:text-base font-medium">
              This web application was developed for Atlas Copco to streamline the
              process of logging and sharing measurement data from their machines.
            </p>
          </div>
          <p className="text-gray-700 dark:text-gray-300">
            The tool needed to serve both technicians performing measurements
            (air, electricity) and representatives who need to share and input
            this data for clients. The goal was to provide a central,
            user-friendly interface for data management and configuration.
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
            As a Frontend Developer, I worked within a team of three (Frontend,
            Backend, Integration). We followed an Agile methodology with weekly
            sprints and meetings, both internally and with stakeholders at Atlas
            Copco.
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            Although my focus was on the frontend (React, TypeScript, Tailwind
            CSS), significant interaction with the backend team (C#, Node.js,
            PostgreSQL) was necessary due to limited documentation. This led to
            co-defining and implementing custom endpoints and TypeScript
            interfaces to ensure smooth communication between front and backend.
          </p>
          <div className="bg-gray-900 rounded-lg p-6 mb-6">
            <div className="flex justify-between items-center mb-2">
              <span className="text-gray-400 text-xs">MeasurementTypes.ts</span>
            </div>
            <pre className="text-gray-100 overflow-x-auto text-sm">
              <code>
                {`// Example of the TypeScript interfaces we created
export interface Measurement {
  id: string;
  clientId: string;
  machineId: string;
  timestamp: Date;
  readings: MeasurementReading[];
  createdBy: string;
  notes?: string;
}

export interface MeasurementReading {
  sensorId: string;
  value: number;
  unit: 'bar' | 'psi' | 'celsius' | 'fahrenheit' | 'kWh';
  status: 'normal' | 'warning' | 'critical';
}

export interface MeasurementFilter {
  clientId?: string;
  machineId?: string;
  startDate?: Date;
  endDate?: Date;
  sensorIds?: string[];
}`}
              </code>
            </pre>
          </div>
          <p className="text-gray-700 dark:text-gray-300">
            We used Auth0 for user authentication and authorization, which
            provided a secure way to manage user roles and permissions.
          </p>
        </div>
      ),
    },
    {
      id: "features",
      label: "Features",
      content: (
        <div className="space-y-6">
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            The application enables users to:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-5 shadow-md">
              <h3 className="font-semibold text-base mb-2 text-gray-900 dark:text-white">
                Data Entry
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Enter measurement data per client or machine via a structured form
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg p-5 shadow-md">
              <h3 className="font-semibold text-base mb-2 text-gray-900 dark:text-white">
                Data Visualization
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                View entered data in a clear tabular display with relevant units
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg p-5 shadow-md">
              <h3 className="font-semibold text-base mb-2 text-gray-900 dark:text-white">
                Configuration Management
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Create and manage specific configurations for different clients or
                installations
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg p-5 shadow-md">
              <h3 className="font-semibold text-base mb-2 text-gray-900 dark:text-white">
                Role-Based Access
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Manage user roles via Auth0, ensuring the right people have access
                to the right data
              </p>
            </div>
          </div>
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
              A significant challenge was correctly implementing authentication
              and authorization with Auth0, particularly passing and validating
              tokens for various user roles.
            </p>
          </div>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            This project emphasized the importance of:
          </p>
          <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2 mb-6">
            <li>
              Intensive use of debugging tools like Postman and browser inspect
              tools to quickly identify communication issues
            </li>
            <li>
              Clear communication and close collaboration within the team,
              especially with incomplete documentation
            </li>
            <li>
              Proactively creating documentation (such as TS interfaces) to
              facilitate integration
            </li>
          </ul>
          <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-5 border-l-4 border-green-500">
            <p className="text-green-800 dark:text-green-300 text-sm md:text-base font-medium">
              This project significantly improved my skills in front-end
              development, API integration, and working with authentication
              systems in a professional environment.
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

export default AtlasCopcoProject;
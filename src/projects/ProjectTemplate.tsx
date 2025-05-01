// src/projects/ProjectTemplate.tsx
import React from 'react';
import { ProjectData } from './types';
import Button from '@/components/ui/Button';

// Project-specifieke metadata die later gebruikt wordt voor lijsten en SEO
export const metadata: ProjectData = {
  slug: 'project-slug',
  title: 'Project Title',
  date: '2023-01-01',
  overview: 'A brief overview of the project',
  imageUrl: '/images/projects/project-image.jpg',
  techStack: ['React', 'TypeScript', 'Next.js'],
  liveUrl: 'https://example.com',
  repoUrl: 'https://github.com/username/repo',
  featured: true,
};

// Dit is een voorbeeld van hoe een projectcomponent eruit kan zien
const ProjectTemplate: React.FC = () => {

  // De daadwerkelijke projectpagina component
  return (
    <div className="project-content">
      {/* Je kunt hier direct JSX/TSX gebruiken met volledige styling controle */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">Problem/Motivation</h1>
        <p className="text-gray-700 dark:text-gray-300">
          Explain the problem this project solved or what motivated you to create it.
          This is much easier to style directly in TSX compared to markdown or MDX!
        </p>
      </div>

      {/* Code voorbeeld met betere controle */}
      <div className="bg-gray-900 rounded-lg p-6 mb-8">
        <div className="flex justify-between items-center mb-2">
          <span className="text-gray-400 text-sm">example.tsx</span>
          <Button 
            variant="secondary" 
            className="text-xs py-1"
            onClick={() => navigator.clipboard.writeText(`const example = () => {\n  console.log("Hello world");\n};`)}
          >
            Copy
          </Button>
        </div>
        <pre className="text-gray-100 overflow-x-auto">
          <code>
            {`const example = () => {\n  console.log("Hello world");\n};`}
          </code>
        </pre>
      </div>

      {/* Proces/Aanpak sectie */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">Process/Approach</h1>
        <p className="text-gray-700 dark:text-gray-300">
          Explain your approach to solving the problem. What technologies 
          did you choose and why? What was your development process like?
        </p>
      </div>

      {/* Andere secties kunnen direct worden toegevoegd met volledige React-kracht */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">Solution/Features</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4">
            <h3 className="font-bold text-blue-800 dark:text-blue-300">Feature 1</h3>
            <p className="text-blue-700 dark:text-blue-400">Description of feature 1</p>
          </div>
          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4">
            <h3 className="font-bold text-blue-800 dark:text-blue-300">Feature 2</h3>
            <p className="text-blue-700 dark:text-blue-400">Description of feature 2</p>
          </div>
        </div>
        <p className="text-gray-700 dark:text-gray-300">
          Further explanation of your solution and its key features.
        </p>
      </div>

      {/* Challenges & Learnings */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">Challenges & Learnings</h1>
        <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 mb-4">
          <h3 className="font-bold text-yellow-800 dark:text-yellow-300">Key Challenge</h3>
          <p className="text-yellow-700 dark:text-yellow-400">
            Description of a key challenge you faced during development.
          </p>
        </div>
        <p className="text-gray-700 dark:text-gray-300">
          Additional challenges you faced and what you learned from them.
        </p>
      </div>
    </div>
  );
};

export default ProjectTemplate;
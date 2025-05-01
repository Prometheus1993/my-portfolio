// src/app/projects/page.tsx
import React from 'react';
import ProjectsSection from '@/components/sections/ProjectsSection';
import type { Metadata } from 'next';
import { getAllProjectsData } from '@/projects';

export const metadata: Metadata = {
  title: 'Projects | Jesus O\'Bulan Portfolio',
  description: 'Explore the projects of Jesus O\'Bulan, including web applications built with React, Next.js, TypeScript and more.',
};

export default function ProjectsPage() {
  const projectsData = getAllProjectsData();

  return (
    <>
      <ProjectsSection projects={projectsData} />
    </>
  );
}
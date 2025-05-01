// src/projects/types.ts

// Interface for project metadata
export interface ProjectData {
    slug: string;
    title: string;
    date: string;
    overview: string;
    imageUrl: string;
    techStack: string[];
    liveUrl?: string | null;
    repoUrl?: string | null;
    featured?: boolean;
  }
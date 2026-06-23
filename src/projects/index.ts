// src/projects/index.ts
import { metadata as atlasCopcoMetadata } from "./AtlasCopcoProject";
import { metadata as brightestMetadata } from "./BrightestProject";
import { metadata as pokemonMetadata } from "./PokemonProject";
import { metadata as ragnarokMetadata } from "./RoadToRagnarokProject";
import { ProjectData } from "./types";

// Import all project components
import AtlasCopcoProject from "./AtlasCopcoProject";
import BrightestProject from "./BrightestProject";
import PokemonProject from "./PokemonProject";
import RoadToRagnarokProject from "./RoadToRagnarokProject";

// Export individual projects
export { AtlasCopcoProject, BrightestProject, PokemonProject, RoadToRagnarokProject };

// Create a map of slug to component for easy lookup
export const projectComponents = {
  "atlas-copco-logger": AtlasCopcoProject,
  "brightest-pom-generator": BrightestProject,
  "pokemon-catcher": PokemonProject,
  "road-to-ragnarok": RoadToRagnarokProject,
};

// Collection of all project metadata
export const allProjectsData: ProjectData[] = [
  atlasCopcoMetadata,
  brightestMetadata,
  pokemonMetadata,
  ragnarokMetadata,
];

// Get all project metadata (sorted by date)
export function getAllProjectsData(): ProjectData[] {
  return allProjectsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

// Get featured projects
export function getFeaturedProjectsData(): ProjectData[] {
  return getAllProjectsData().filter((project) => project.featured);
}

// Get a specific project by slug
export function getProjectBySlug(slug: string): ProjectData | undefined {
  return getAllProjectsData().find((project) => project.slug === slug);
}

// Get all project slugs for static paths
export function getAllProjectSlugs() {
  return getAllProjectsData().map((project) => ({
    params: { slug: project.slug },
  }));
}

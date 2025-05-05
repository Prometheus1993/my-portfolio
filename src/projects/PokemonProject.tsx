// Example for PokemonProject.tsx or any other project component
import React from "react";
import { ProjectData } from "./types";
import TabContainer from "@/components/ui/TabContainer";

// Export the project metadata
export const metadata: ProjectData = {
  slug: "pokemon-catcher",
  title: "Pokémon Catcher Game",
  date: "2022-12-01",
  overview:
    "A web app school project built with the PokeAPI, featuring catching, battling, a Pokedex, and a minigame.",
  imageUrl: "/images/projects/pokemon.png",
  techStack: [
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Express.js",
    "MongoDB",
    "Node.js",
  ],
  liveUrl: null,
  repoUrl: "...",
  featured: true,
};

const PokemonProject: React.FC = () => {
  // Define your tab content
  const tabs = [
    {
      id: "overview",
      label: "Overview",
      content: (
        <div className="space-y-6">
          <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-5 mb-6 border-l-4 border-blue-500">
            <p className="text-blue-800 dark:text-blue-300 text-sm md:text-base font-medium">
              This was a school assignment where we had to develop a web
              application using the public
              <a
                href="https://pokeapi.co/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                {" "}
                PokeAPI
              </a>
              .
            </p>
          </div>
          <p className="text-gray-700 dark:text-gray-300">
            The requirement was to implement at least 4-5 different pages or
            sections that fetched and presented data from the API. Together with
            a fellow student, I formed the core team that developed both the
            frontend and backend.
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
            We started by designing and building a static frontend to get a
            clear picture of the desired look-and-feel and functionality. Then,
            over several months, we made the backend (Express.js, MongoDB) and
            frontend (React, TypeScript, Tailwind) dynamic, integrating the
            PokeAPI for all Pokémon-related data.
          </p>
          <div className="bg-gray-900 rounded-lg p-6">
            <div className="flex justify-between items-center mb-2">
              <span className="text-gray-400 text-xs">pokemonService.ts</span>
            </div>
            <pre className="text-gray-100 overflow-x-auto text-sm">
              <code>
                {`// Example of how we fetched Pokémon data from the API
export async function getPokemonDetails(nameOrId: string | number): Promise<Pokemon> {
  try {
    const response = await fetch(\`https://pokeapi.co/api/v2/pokemon/\${nameOrId}\`);
    
    if (!response.ok) {
      throw new Error(\`Failed to fetch Pokémon: \${response.status}\`);
    }
    
    const data = await response.json();
    
    // Transform the API response to our own model
    return {
      id: data.id,
      name: data.name,
      sprites: {
        front: data.sprites.front_default,
        back: data.sprites.back_default
      },
      types: data.types.map(t => t.type.name),
      stats: data.stats.map(s => ({
        name: s.stat.name,
        value: s.base_stat
      }))
    };
  } catch (error) {
    console.error('Error fetching Pokémon:', error);
    throw error;
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
          <p className="text-gray-700 dark:text-gray-300">
            The &quot;PokéCatcher&quot; web app offers the following features:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-5 shadow-md">
              <h3 className="font-semibold text-base mb-2 text-gray-900 dark:text-white">
                User Registration & Login
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                With the option to choose a starter Pokémon at first login
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg p-5 shadow-md">
              <h3 className="font-semibold text-base mb-2 text-gray-900 dark:text-white">
                Pokémon Management
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Give nicknames to caught Pokémon and organize your collection
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg p-5 shadow-md">
              <h3 className="font-semibold text-base mb-2 text-gray-900 dark:text-white">
                Catching & Battling
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Walk around (simulation) and encounter wild Pokémon to battle.
                Upon winning, the Pokémon is automatically caught
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg p-5 shadow-md">
              <h3 className="font-semibold text-base mb-2 text-gray-900 dark:text-white">
                &quot;Who&apos;s That Pokémon?&quot; Minigame
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Guess the Pokémon to improve your active Pokémon&apos;s stats
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
              The biggest challenges were dynamically generating Pokémon
              encounters and managing user-specific data in MongoDB.
            </p>
          </div>
          <p className="text-gray-700 dark:text-gray-300">
            Key challenges included:
          </p>
          <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2">
            <li>
              Dynamically generating Pokémon encounters and managing
              user-specific data (such as nicknames and caught Pokémon) in the
              MongoDB database
            </li>
            <li>
              Effectively querying and processing data from the sometimes
              complex PokeAPI, including creating the appropriate backend
              endpoints
            </li>
            <li>Managing state in the React frontend</li>
          </ul>
          <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-5 border-l-4 border-green-500">
            <p className="text-green-800 dark:text-green-300 text-sm md:text-base font-medium">
              This project was an excellent learning experience in full-stack
              development with the MERN stack and working with external APIs.
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

export default PokemonProject;

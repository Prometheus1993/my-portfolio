// src/projects/PokemonProject.tsx
import React from "react";
import { ProjectData } from "./types";

// Export de project metadata
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
  return (
    <div className="space-y-12">
      {/* Problem/Motivation */}
      <section>
        <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
          Problem/Motivation
        </h2>
        <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-5 mb-6 border-l-4 border-blue-500">
          <p className="text-blue-800 dark:text-blue-300 font-medium">
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
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          The requirement was to implement at least 4-5 different pages or
          sections that fetched and presented data from the API. Together with a
          fellow student, I formed the core team that developed both the
          frontend and backend.
        </p>
      </section>

      {/* Process/Approach */}
      <section>
        <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
          Process/Approach
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          We started by designing and building a static frontend to get a clear
          picture of the desired look-and-feel and functionality. Then, over
          several months, we made the backend (Express.js, MongoDB) and frontend
          (React, TypeScript, Tailwind) dynamic, integrating the PokeAPI for all
          Pokémon-related data.
        </p>
        <div className="bg-gray-900 rounded-lg p-6 mb-6">
          <div className="flex justify-between items-center mb-2">
            <span className="text-gray-400 text-sm">pokemonService.ts</span>
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
      </section>

      {/* Solution/Features */}
      <section>
        <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
          Solution/Features
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mb-6">
          The &quot;PokéCatcher&quot; web app offers the following features:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-5 shadow-md">
            <h3 className="font-semibold text-lg mb-2 text-gray-900 dark:text-white">
              User Registration & Login
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              With the option to choose a starter Pokémon at first login
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg p-5 shadow-md">
            <h3 className="font-semibold text-lg mb-2 text-gray-900 dark:text-white">
              Pokémon Management
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              Give nicknames to caught Pokémon and organize your collection
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg p-5 shadow-md">
            <h3 className="font-semibold text-lg mb-2 text-gray-900 dark:text-white">
              Catching & Battling
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              Walk around (simulation) and encounter wild Pokémon to battle.
              Upon winning, the Pokémon is automatically caught
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg p-5 shadow-md">
            <h3 className="font-semibold text-lg mb-2 text-gray-900 dark:text-white">
              &quot;Who&apos;s That Pokémon?&quot; Minigame
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              Guess the Pokémon to improve your active Pokémon&apos;s stats
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg p-5 shadow-md md:col-span-2">
            <h3 className="font-semibold text-lg mb-2 text-gray-900 dark:text-white">
              Extensive Pokedex
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              A searchable and filterable list of all Pokémon, fetched from the
              PokeAPI
            </p>
          </div>
        </div>
      </section>

      {/* Game Screenshots */}
      <section>
        <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
          Game Screenshots
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-2 shadow-md">
            <div className="aspect-w-16 aspect-h-9 relative h-48 md:h-64 bg-gray-200 dark:bg-gray-700 rounded overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center text-gray-500 dark:text-gray-400 text-sm">
                [Pokémon Battle Screenshot]
              </div>
            </div>
            <p className="text-center text-sm mt-2 text-gray-600 dark:text-gray-400">
              Battling against wild Pokémon
            </p>
          </div>
          <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-2 shadow-md">
            <div className="aspect-w-16 aspect-h-9 relative h-48 md:h-64 bg-gray-200 dark:bg-gray-700 rounded overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center text-gray-500 dark:text-gray-400 text-sm">
                [Pokédex Screenshot]
              </div>
            </div>
            <p className="text-center text-sm mt-2 text-gray-600 dark:text-gray-400">
              Pokédex with filtering and search
            </p>
          </div>
        </div>
      </section>

      {/* Challenges & Learnings */}
      <section>
        <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
          Challenges & Learnings
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          The biggest challenges were:
        </p>
        <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2 mb-6">
          <li>
            Dynamically generating Pokémon encounters and managing user-specific
            data (such as nicknames and caught Pokémon) in the MongoDB database
          </li>
          <li>
            Effectively querying and processing data from the sometimes complex
            PokeAPI, including creating the appropriate backend endpoints
          </li>
          <li>Managing state in the React frontend</li>
        </ul>
        <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-5 border-l-4 border-green-500">
          <p className="text-green-800 dark:text-green-300 font-medium">
            This project was an excellent learning experience in full-stack
            development with the MERN stack (MongoDB, Express, React, Node) and
            working with external APIs.
          </p>
        </div>
      </section>
    </div>
  );
};

export default PokemonProject;

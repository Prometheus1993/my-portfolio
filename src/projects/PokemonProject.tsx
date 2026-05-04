import React from "react";
import { ProjectData } from "./types";

export const metadata: ProjectData = {
  slug: "pokemon-catcher",
  title: "Pokémon Catcher Game",
  date: "2024-05-28",
  overview:
    "A web app school project built with the PokeAPI — featuring catching, battling, a Pokédex and a minigame.",
  imageUrl: "/images/projects/pokemon.png",
  techStack: ["React", "Express.js", "MongoDB", "Node.js"],
  liveUrl: "https://mewtech.onrender.com",
  repoUrl: "https://github.com/DenGian/Mew.Tech",
  featured: true,
};

const PokemonProject: React.FC = () => {
  return (
    <div className="space-y-10 text-foreground">
      {/* Overview */}
      <section>
        <h2
          id="overview"
          className="font-serif text-xl md:text-2xl text-foreground border-b border-border pb-2 mb-4"
        >
          Overview
        </h2>
        <blockquote className="border-l-2 border-accent pl-4 mb-4 font-serif italic text-lg text-foreground-muted">
          A school assignment to develop a web application using the public{" "}
          <a
            href="https://pokeapi.co/"
            target="_blank"
            rel="noopener noreferrer"
            className="link-underline text-foreground"
          >
            PokeAPI
          </a>
          .
        </blockquote>
        <p className="text-sm md:text-base text-foreground-muted leading-relaxed">
          The requirement was to implement at least 4–5 different pages or
          sections that fetched and presented data from the API. Together with a
          fellow student, I formed the core team that built both the frontend
          and backend.
        </p>
      </section>

      {/* Approach */}
      <section>
        <h2
          id="approach"
          className="font-serif text-xl md:text-2xl text-foreground border-b border-border pb-2 mb-4"
        >
          Approach
        </h2>
        <p className="text-sm md:text-base text-foreground-muted leading-relaxed">
          We started by designing and building a static frontend to align on
          look-and-feel and functionality. Over several months, we made the
          backend (Express.js, MongoDB) and frontend (React, TypeScript)
          dynamic, integrating the PokeAPI for all Pokémon data.
        </p>
        <div className="mt-5 border border-border bg-surface/40">
          <div className="px-4 py-2 border-b border-border">
            <span className="font-mono text-[11px] text-foreground-muted">
              pokemonService.ts
            </span>
          </div>
          <pre className="px-4 py-3 overflow-x-auto text-xs md:text-sm leading-relaxed">
            <code className="text-foreground">{`export async function getPokemonDetails(
  nameOrId: string | number
): Promise<Pokemon> {
  const response = await fetch(
    \`https://pokeapi.co/api/v2/pokemon/\${nameOrId}\`
  );
  if (!response.ok) {
    throw new Error(\`Failed to fetch Pokémon: \${response.status}\`);
  }

  const data = await response.json();
  return {
    id: data.id,
    name: data.name,
    sprites: {
      front: data.sprites.front_default,
      back: data.sprites.back_default,
    },
    types: data.types.map((t) => t.type.name),
    stats: data.stats.map((s) => ({
      name: s.stat.name,
      value: s.base_stat,
    })),
  };
}`}</code>
          </pre>
        </div>
      </section>

      {/* Features */}
      <section>
        <h2
          id="features"
          className="font-serif text-xl md:text-2xl text-foreground border-b border-border pb-2 mb-4"
        >
          Features
        </h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 text-sm md:text-base text-foreground-muted">
          {[
            [
              "Registration & login",
              "Choose a starter Pokémon at first sign-in.",
            ],
            [
              "Pokémon management",
              "Nickname caught Pokémon and organise your collection.",
            ],
            [
              "Catching & battling",
              "Walk around to encounter wild Pokémon. Win the battle, catch them automatically.",
            ],
            [
              "Who's That Pokémon?",
              "A guessing minigame that buffs your active Pokémon's stats.",
            ],
          ].map(([title, desc]) => (
            <li key={title}>
              <p className="font-serif italic text-foreground">{title}</p>
              <p className="mt-0.5">{desc}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* Challenges */}
      <section>
        <h2
          id="challenges"
          className="font-serif text-xl md:text-2xl text-foreground border-b border-border pb-2 mb-4"
        >
          Challenges
        </h2>
        <blockquote className="border-l-2 border-accent pl-4 mb-4 font-serif italic text-lg text-foreground-muted">
          The biggest challenges were dynamically generating Pokémon encounters
          and managing user-specific data in MongoDB.
        </blockquote>
        <ul className="space-y-1.5 text-sm md:text-base text-foreground-muted">
          {[
            "Dynamically generating encounters and storing user-specific data (nicknames, caught Pokémon) in MongoDB",
            "Querying and processing data from the (sometimes complex) PokeAPI, including the right backend endpoints",
            "Managing state in the React frontend",
          ].map((item) => (
            <li key={item} className="flex gap-3">
              <span>·</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className="font-serif italic text-foreground mt-5 text-base md:text-lg">
          A great learning experience in full-stack development with the MERN
          stack and external APIs.
        </p>
      </section>
    </div>
  );
};

export default PokemonProject;

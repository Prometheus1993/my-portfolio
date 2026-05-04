import React from "react";
import { ProjectData } from "./types";

export const metadata: ProjectData = {
  slug: "atlas-copco-logger",
  title: "Atlas Copco Logger/Display App",
  date: "2024-12-20",
  overview:
    "Frontend development for a web application that logs and visualises measurement data from industrial equipment.",
  imageUrl: "/images/projects/Atlas-Copco-Logo.png",
  techStack: ["React", "TypeScript", "Auth0", "C#", "Node.js", "PostgreSQL"],
  liveUrl: null,
  repoUrl: null,
  featured: true,
};

const AtlasCopcoProject: React.FC = () => {
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
          A web application built for Atlas Copco to streamline the process of
          logging and sharing measurement data from their machines.
        </blockquote>
        <p className="text-sm md:text-base text-foreground-muted leading-relaxed">
          The tool needed to serve both technicians performing measurements
          (air, electricity) and representatives who need to share and input
          this data for clients. The goal: a central, user-friendly interface
          for data management and configuration.
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
        <div className="space-y-4 text-sm md:text-base text-foreground-muted leading-relaxed">
          <p>
            As a Frontend Developer, I worked within a team of three (Frontend,
            Backend, Integration). We followed an Agile methodology with weekly
            sprints and meetings — both internally and with stakeholders at
            Atlas Copco.
          </p>
          <p>
            Although my focus was the frontend (React, TypeScript), significant
            interaction with the backend team (C#, Node.js, PostgreSQL) was
            necessary due to limited documentation. We co-defined custom
            endpoints and TypeScript interfaces to ensure smooth communication
            between front and back.
          </p>
        </div>
        <div className="mt-5 border border-border bg-surface/40">
          <div className="px-4 py-2 border-b border-border">
            <span className="font-mono text-[11px] text-foreground-muted">
              MeasurementTypes.ts
            </span>
          </div>
          <pre className="px-4 py-3 overflow-x-auto text-xs md:text-sm leading-relaxed">
            <code className="text-foreground">{`export interface Measurement {
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
}`}</code>
          </pre>
        </div>
        <p className="text-sm md:text-base text-foreground-muted leading-relaxed mt-4">
          We used Auth0 for authentication and authorisation, providing a secure
          way to manage user roles and permissions.
        </p>
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
            ["Data entry", "Enter measurement data per client or machine via a structured form."],
            ["Data visualisation", "Tabular view with relevant units and clear readings."],
            ["Configuration management", "Per-client and per-installation configurations."],
            ["Role-based access", "Auth0 manages user roles so the right people see the right data."],
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
          Implementing authentication and authorisation with Auth0 — especially
          passing and validating tokens for various roles — was the trickiest
          part.
        </blockquote>
        <p className="text-sm md:text-base text-foreground-muted leading-relaxed mb-3">
          The project emphasised the importance of:
        </p>
        <ul className="space-y-1.5 text-sm md:text-base text-foreground-muted">
          {[
            "Intensive use of debugging tools (Postman, browser inspector) to identify communication issues quickly",
            "Clear communication and close collaboration in the team, especially with incomplete documentation",
            "Proactively creating documentation (TS interfaces) to make integration easier",
          ].map((item) => (
            <li key={item} className="flex gap-3">
              <span>·</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className="font-serif italic text-foreground mt-5 text-base md:text-lg">
          Strong improvement in front-end skills, API integration, and working
          with authentication systems in a professional environment.
        </p>
      </section>
    </div>
  );
};

export default AtlasCopcoProject;

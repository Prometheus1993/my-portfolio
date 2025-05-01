"use client";

// src/components/sections/AboutSection.tsx
import React from "react";
import Image from "next/image";
import { FaReact, FaNodeJs, FaDocker, FaGitAlt } from "react-icons/fa";
import {
  SiTypescript,
  SiTailwindcss,
  SiSharp,
  SiPostgresql,
  SiMongodb,
  SiExpress,
  SiSwift,
  SiRaspberrypi,
  SiNextdotjs,
} from "react-icons/si";
import profilePic from "../../../public/profilepic.png";
import SkillCard from "@/components/ui/SkillCard";
import FadeIn from "@/components/animations/FadeIn";
import StaggerContainer from "@/components/animations/StaggerContainer";

// Define the skills with corresponding icons and proficiency levels
const skillsByCategory = [
  {
    title: "Frontend",
    skills: [
      {
        name: "React",
        icon: <FaReact />,
        level: 90,
        description: "Libraries: Redux, React Query",
      },
      {
        name: "Next.js",
        icon: <SiNextdotjs />,
        level: 85,
        description: "SSR, ISR, API routes",
      },
      {
        name: "TypeScript",
        icon: <SiTypescript />,
        level: 85,
        description: "Strong typing, interfaces",
      },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss />,
        level: 90,
        description: "Custom configurations",
      },
    ],
  },
  {
    title: "Backend",
    skills: [
      {
        name: "Node.js",
        icon: <FaNodeJs />,
        level: 80,
        description: "RESTful APIs",
      },
      {
        name: "Express.js",
        icon: <SiExpress />,
        level: 80,
        description: "Middleware, routing",
      },
      {
        name: "MongoDB",
        icon: <SiMongodb />,
        level: 75,
        description: "Schema design, aggregation",
      },
      {
        name: "PostgreSQL",
        icon: <SiPostgresql />,
        level: 70,
        description: "Relational data modeling",
      },
    ],
  },
  {
    title: "Other",
    skills: [
      {
        name: "C#",
        icon: <SiSharp />,
        level: 65,
        description: ".NET framework",
      },
      {
        name: "Docker",
        icon: <FaDocker />,
        level: 60,
        description: "Containerization",
      },
      {
        name: "Git",
        icon: <FaGitAlt />,
        level: 85,
        description: "Version control",
      },
      {
        name: "Swift",
        icon: <SiSwift />,
        level: 40,
        description: "iOS development",
      },
      {
        name: "Raspberry Pi",
        icon: <SiRaspberrypi />,
        level: 50,
        description: "Home automation projects",
      },
    ],
  },
];

const AboutSection = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* --- About Me Text & Photo --- */}
        <FadeIn direction="up">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            About Me
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center mb-16 md:mb-24">
          {/* Text Column */}
          <FadeIn
            direction="right"
            className="md:col-span-2 space-y-6 text-lg text-gray-700 dark:text-gray-300"
          >
            <p>
              Hello! I&apos;m Jesus O&apos;Bulan, an enthusiastic Full-Stack Developer
              with a Programming Associate Degree from AP University College
              Antwerp. My passion lies in building applications from start to
              finish that are not only functional but also a pleasure to use.
            </p>
            <p>
              I enjoy diving deep into both frontend and backend development and
              am always curious about new technologies. In my free time, I&apos;m
              currently exploring iOS development with Swift and experimenting
              with Raspberry Pi for server and automation projects. I&apos;m
              constantly looking for ways to expand my skills and solve complex
              problems.
            </p>
            <p>
              My experience includes working with React, Next.js, TypeScript,
              Node.js, C#, databases like PostgreSQL and MongoDB, and tools such
              as Docker and Git. I thrive in Agile environments and believe
              strongly in clear communication and collaboration to achieve the
              best results.
            </p>
          </FadeIn>

          {/* Image Column */}
          <FadeIn
            direction="left"
            className="md:col-span-1 flex justify-center"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-lg">
              <Image
                src={profilePic}
                alt="Profile photo of Jesus O'Bulan"
                layout="fill"
                objectFit="cover"
                priority
              />
            </div>
          </FadeIn>
        </div>

        {/* --- Skills Section --- */}
        <FadeIn direction="up" className="mb-12">
          <h3 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white">
            Core Skills
          </h3>
        </FadeIn>

        {/* Categories */}
        <div className="space-y-16">
          {skillsByCategory.map((category, index) => (
            <div key={category.title}>
              <FadeIn direction="up" delay={index * 0.1}>
                <h4 className="text-xl font-semibold mb-6 text-gray-800 dark:text-gray-200 border-b border-gray-200 dark:border-gray-700 pb-2">
                  {category.title}
                </h4>
              </FadeIn>

              <StaggerContainer delay={0.1} staggerDelay={0.05}>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {category.skills.map((skill) => (
                    <SkillCard
                      key={skill.name}
                      name={skill.name}
                      icon={skill.icon}
                      level={skill.level}
                      description={skill.description}
                    />
                  ))}
                </div>
              </StaggerContainer>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

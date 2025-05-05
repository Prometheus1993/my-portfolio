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
import TabContainer from "@/components/ui/TabContainer";

// Define the skills with corresponding icons and proficiency levels
const skillsByCategory = [
  {
    title: "Frontend",
    skills: [
      {
        name: "React",
        icon: <FaReact />,
        level: 75,
        description: "Libraries: Redux, React Query",
      },
      {
        name: "Next.js",
        icon: <SiNextdotjs />,
        level: 70,
        description: "SSR, ISR, API routes",
      },
      {
        name: "TypeScript",
        icon: <SiTypescript />,
        level: 65,
        description: "Strong typing, interfaces",
      },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss />,
        level: 75,
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
        level: 65,
        description: "RESTful APIs",
      },
      {
        name: "Express.js",
        icon: <SiExpress />,
        level: 60,
        description: "Middleware, routing",
      },
      {
        name: "MongoDB",
        icon: <SiMongodb />,
        level: 55,
        description: "Schema design, aggregation",
      },
      {
        name: "PostgreSQL",
        icon: <SiPostgresql />,
        level: 50,
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
        level: 50,
        description: ".NET framework",
      },
      {
        name: "Docker",
        icon: <FaDocker />,
        level: 45,
        description: "Containerization",
      },
      {
        name: "Git",
        icon: <FaGitAlt />,
        level: 70,
        description: "Version control",
      },
      {
        name: "Swift",
        icon: <SiSwift />,
        level: 30,
        description: "iOS development",
      },
      {
        name: "Raspberry Pi",
        icon: <SiRaspberrypi />,
        level: 5,
        description: "Home automation projects",
      },
    ],
  },
];

const AboutSection = () => {
  // Create tab content from skillsByCategory
  const skillTabs = skillsByCategory.map(category => ({
    id: category.title.toLowerCase(),
    label: category.title,
    content: (
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
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
    )
  }));

  // Define about me content tab
  const aboutMeTabs = [
    {
      id: "profile",
      label: "Profile",
      content: (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center mt-6">
          {/* Text Column */}
          <div className="md:col-span-2 space-y-6 text-lg text-gray-700 dark:text-gray-300">
            <p>
              Hello! I&apos;m Jesus O&apos;Bulan, an enthusiastic Full-Stack
              Developer currently completing my Programming Associate Degree at
              AP University College Antwerp (final month of my last year). My
              passion lies in building applications from start to finish that
              are not only functional but also a pleasure to use.
            </p>
            <p>
              I enjoy diving deep into both frontend and backend development and
              am always curious about new technologies. In my free time,
              I&apos;m currently exploring iOS development with Swift and
              experimenting with Raspberry Pi for server and automation
              projects. I&apos;m constantly looking for ways to expand my skills
              and solve complex problems.
            </p>
            <p>
              My experience includes working with React, Next.js, TypeScript,
              Node.js, C#, databases like PostgreSQL and MongoDB, and tools such
              as Docker and Git. I thrive in Agile environments and believe
              strongly in clear communication and collaboration to achieve the
              best results.
            </p>
          </div>

          {/* Image Column */}
          <div className="md:col-span-1 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-lg">
              <Image
                src={profilePic}
                alt="Profile photo of Jesus O'Bulan"
                layout="fill"
                objectFit="cover"
                priority
              />
            </div>
          </div>
        </div>
      )
    },
    {
      id: "education",
      label: "Education",
      content: (
        <div className="space-y-6 text-lg text-gray-700 dark:text-gray-300 mt-6">
          <div className="border-l-4 border-blue-500 pl-4">
            <h4 className="font-bold">Programming Associate Degree</h4>
            <p>AP University College Antwerp, 2023-2025</p>
            <p>Final year - Expected graduation: June 2025</p>
          </div>
          {/* You can add more education details here */}
        </div>
      )
    },
    {
      id: "interests",
      label: "Interests",
      content: (
        <div className="space-y-6 text-lg text-gray-700 dark:text-gray-300 mt-6">
          <p>
            Beyond coding, I&apos;m passionate about technology exploration, including:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>iOS development with Swift</li>
            <li>Home automation with Raspberry Pi</li>
            <li>Learning new programming languages and frameworks</li>
            <li>Solving complex technical problems</li>
            <li>Keeping up with industry trends and best practices</li>
          </ul>
        </div>
      )
    }
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* --- About Me Section --- */}
        <FadeIn direction="up">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            About Me
          </h2>
        </FadeIn>

        {/* About Me Tab Container */}
        <FadeIn direction="up" className="mb-16 md:mb-24">
          <TabContainer 
            tabs={aboutMeTabs}
            defaultTabId="profile"
            transitionDirection="fade"
            transitionDuration={0.4}
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
            contentClassName="mt-6"
          />
        </FadeIn>

        {/* --- Skills Section --- */}
        <FadeIn direction="up" className="mb-12">
          <h3 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white">
            Core Skills
          </h3>
        </FadeIn>

        {/* Skills Tab Container */}
        <TabContainer 
          tabs={skillTabs}
          defaultTabId="frontend"
          transitionDirection="fade"
          transitionDuration={0.4}
          className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
          contentClassName="mt-6"
        />
      </div>
    </section>
  );
};

export default AboutSection;
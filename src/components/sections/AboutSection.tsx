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
  SiAngular,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import profilePic from "../../../public/profilepic.png";
import SkillCard from "@/components/ui/SkillCard";
import FadeIn from "@/components/animations/FadeIn";
import TabContainer from "@/components/ui/TabContainer";

// Technologies bekeken tijdens mijn graduaat IT & Software
const skillsByCategory = [
  {
    title: "Frontend",
    skills: [
      {
        name: "React",
        icon: <FaReact />,
      },
      {
        name: "Angular",
        icon: <SiAngular />,
      },
      {
        name: "Next.js",
        icon: <SiNextdotjs />,
      },
      {
        name: "TypeScript",
        icon: <SiTypescript />,
      },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss />,
      },
    ],
  },
  {
    title: "Backend",
    skills: [
      {
        name: "Java",
        icon: <FaJava />,
      },
      {
        name: "C#",
        icon: <SiSharp />,
      },
      {
        name: "Node.js",
        icon: <FaNodeJs />,
      },
      {
        name: "Express.js",
        icon: <SiExpress />,
      },
      {
        name: "MongoDB",
        icon: <SiMongodb />,
      },
      {
        name: "PostgreSQL",
        icon: <SiPostgresql />,
      },
    ],
  },
  {
    title: "Tools & Other",
    skills: [
      {
        name: "Docker",
        icon: <FaDocker />,
      },
      {
        name: "Git",
        icon: <FaGitAlt />,
      },
      {
        name: "Swift",
        icon: <SiSwift />,
      },
      {
        name: "Raspberry Pi",
        icon: <SiRaspberrypi />,
      },
    ],
  },
];

const AboutSection = () => {
  // Create tab content from skillsByCategory
  const skillTabs = skillsByCategory.map((category) => ({
    id: category.title.toLowerCase().replace(/\s+&\s+/g, '-'),
    label: category.title,
    content: (
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
        {category.skills.map((skill) => (
          <SkillCard
            key={skill.name}
            name={skill.name}
            icon={skill.icon}
          />
        ))}
      </div>
    ),
  }));

  // Define about me content tab
  const aboutMeTabs = [
    {
      id: "profile",
      label: "Profile",
      content: (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center mt-6">
          {/* Text Column - Order 2 on mobile, order 1 on desktop */}
          <div className="md:col-span-2 space-y-6 text-lg text-gray-700 dark:text-gray-300 order-2 md:order-1">
            <p>
              Hi! I&apos;m Jesus O&apos;Bulan, a passionate IT & Software student
              who enjoys working on both frontend and backend development. I recently graduated{" "}
              <span className="font-semibold text-primary-700 dark:text-primary-300">
                cum laude
              </span>{" "}
              with an Associate Degree in Programming from AP University College Antwerp
              and am currently pursuing my Bachelor&apos;s in IT & Software.
            </p>
            <p>
              I enjoy building applications that are both functional and user-friendly.
              During my studies, I&apos;ve gained experience with various technologies
              and frameworks, and I&apos;m always eager to learn new things. Recently,
              I&apos;ve been working extensively with Angular and Java, alongside my
              experience with React, TypeScript, and Node.js.
            </p>
            <p>
              Additionally, I like experimenting with iOS development (Swift) and
              home automation projects using Raspberry Pi. I believe in good
              communication and teamwork, and I&apos;m always looking for new
              challenges to further develop myself as a developer.
            </p>
          </div>

          {/* Image Column - Order 1 on mobile, order 2 on desktop */}
          <div className="md:col-span-1 flex justify-center order-1 md:order-2 mb-8 md:mb-0">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-lg">
              <Image
                src={profilePic}
                alt="Profile photo of Jesus O'Bulan"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "education",
      label: "Education",
      content: (
        <div className="space-y-6 text-lg text-gray-700 dark:text-gray-300 mt-6">
          <div className="border-l-4 border-green-500 pl-4">
            <h4 className="font-bold">
              Bachelor IT &amp; Software
            </h4>
            <p>AP University College Antwerp, 2025-2027</p>
          </div>
          <div className="border-l-4 border-primary-500 pl-4">
            <h4 className="font-bold">Associate Degree in Programming</h4>
            <p>
              AP University College Antwerp, 2023-2025
              <span className="ml-2 px-2 py-0.5 rounded bg-primary-100 text-primary-800 dark:bg-primary-900 dark:text-primary-200 text-sm font-medium align-middle">
                <span className="italic">cum laude</span>
              </span>
            </p>
          </div>
        </div>
      ),
    },
    {
      id: "interests",
      label: "Interests",
      content: (
        <div className="space-y-6 text-lg text-gray-700 dark:text-gray-300 mt-6">
          <p>
            Beyond coding, I&apos;m passionate about technology exploration,
            including:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>iOS development with Swift</li>
            <li>Home automation with Raspberry Pi</li>
            <li>Learning new programming languages and frameworks</li>
            <li>Solving complex technical problems</li>
            <li>Keeping up with industry trends and best practices</li>
          </ul>
        </div>
      ),
    },
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
            Technologies
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

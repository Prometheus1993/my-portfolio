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
  const skillTabs = skillsByCategory.map((category) => ({
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
              Hi! I&apos;m Jesus O&apos;Bulan, a passionate Full-Stack Developer
              who just graduated{" "}
              <span className="font-semibold text-blue-700 dark:text-blue-300">
                cum laude
              </span>{" "}
              with an Associate Degree in Programming from AP University College
              Antwerp. I&apos;m excited to be starting my Bachelor&apos;s in IT
              &amp; Software this fall, where I&apos;ll keep building on my
              skills and knowledge.
            </p>
            <p>
              I love creating applications from scratch and making sure
              they&apos;re both useful and enjoyable to use. I&apos;m really
              into both frontend and backend development, and I&apos;m always
              eager to learn about new tech. Lately, I&apos;ve been exploring
              iOS development with Swift and tinkering with Raspberry Pi for
              some fun automation projects.
            </p>
            <p>
              My experience so far includes working with React, Next.js,
              TypeScript, Node.js, C#, PostgreSQL, MongoDB, Docker, and Git. I
              enjoy working in Agile teams and believe that good communication
              and teamwork are key to building great software. I&apos;m always
              looking for new challenges and ways to grow as a developer!
            </p>
          </div>

          {/* Image Column - Order 1 on mobile, order 2 on desktop */}
          <div className="md:col-span-1 flex justify-center order-1 md:order-2 mb-8 md:mb-0">
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
      ),
    },
    {
      id: "education",
      label: "Education",
      content: (
        <div className="space-y-6 text-lg text-gray-700 dark:text-gray-300 mt-6">
          <div className="border-l-4 border-blue-500 pl-4">
            <h4 className="font-bold">Programming Associate Degree</h4>
            <p>
              AP University College Antwerp, 2023-2025
              <span className="ml-2 px-2 py-0.5 rounded bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 text-sm font-medium align-middle">
                Graduated <span className="italic">cum laude</span>
              </span>
            </p>
          </div>
          <div className="border-l-4 border-green-500 pl-4">
            <h4 className="font-bold">
              Upcoming: Bachelor&apos;s in IT &amp; Software
            </h4>
            <p>Starting September 2025 &ndash; Expected completion: 2027</p>
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

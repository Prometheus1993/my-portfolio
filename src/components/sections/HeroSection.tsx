// src/components/sections/HeroAboutSection.tsx
"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {  FaGithub, FaLinkedin } from "react-icons/fa";
import {
  FaReact,
  FaNodeJs,

  FaDatabase,
} from "react-icons/fa";
import {
  SiTypescript,
  SiNextdotjs,
  SiMongodb,
  SiSharp,
} from "react-icons/si";
import profilePic from "../../../public/profilepic.png";
import FadeIn from "@/components/animations/FadeIn";
import Button from "@/components/ui/Button";

const HeroSection = () => {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Image Column */}
          <div className="md:col-span-1 flex flex-col items-center mb-8 md:mb-0">
            <FadeIn direction="up">
              <div className="relative w-64 h-64 md:w-72 md:h-72 rounded-full overflow-hidden shadow-xl border-4 border-white dark:border-gray-700">
                <Image
                  src={profilePic}
                  alt="Profile photo of Jesus O'Bulan"
                  layout="fill"
                  objectFit="cover"
                  priority
                />
              </div>
              <div className="flex justify-center mt-6 space-x-6">
                <a
                  href="https://github.com/Prometheus1993"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors flex items-center justify-center min-w-[44px] min-h-[44px] touch-manipulation"
                  aria-label="Visit GitHub profile"
                >
                  <FaGithub size={28} />
                </a>
                <a
                  href="https://linkedin.com/in/jesus-o-bulan-9964802a2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 transition-colors flex items-center justify-center min-w-[44px] min-h-[44px] touch-manipulation"
                  aria-label="Visit LinkedIn profile"
                >
                  <FaLinkedin size={28} />
                </a>
              </div>
            </FadeIn>
          </div>

          {/* Text Column */}
          <div className="md:col-span-2 space-y-6">
            <FadeIn direction="up" delay={0.1}>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
                Jesus O&apos;Bulan
              </h1>
              <p className="text-xl md:text-2xl text-blue-600 dark:text-blue-400 mt-2 mb-2">
                Full-Stack Developer
              </p>
              {/* <div className="inline-block bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-3 py-1 rounded-full text-sm font-medium">
                Available for Junior Developer Roles
              </div> */}
            </FadeIn>

            <FadeIn direction="up" delay={0.2}>
              <p className="text-lg text-gray-700 dark:text-gray-300">
                I’m starting my Bachelor’s in IT & Software at AP Antwerp, after
                earning my Associate Degree in Programming. I love building
                modern applications, and my experience in retail management gave
                me real-world communication and problem-solving skills I use in
                every project.
              </p>
            </FadeIn>

            {/* Key Skills */}
            <FadeIn direction="up" delay={0.3}>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mt-6 mb-4">
                Technical Skills
              </h3>
              <div className="flex flex-wrap gap-3">
                <div className="flex items-center bg-white dark:bg-gray-700 px-4 py-2 rounded-lg shadow-sm">
                  <SiSharp className="text-purple-600 mr-2" size={18} />
                  <span>C#</span>
                </div>
                <div className="flex items-center bg-white dark:bg-gray-700 px-4 py-2 rounded-lg shadow-sm">
                  <SiTypescript className="text-blue-600 mr-2" size={18} />
                  <span>TypeScript</span>
                </div>
                <div className="flex items-center bg-white dark:bg-gray-700 px-4 py-2 rounded-lg shadow-sm">
                  <FaReact className="text-blue-500 mr-2" size={20} />
                  <span>React</span>
                </div>
                <div className="flex items-center bg-white dark:bg-gray-700 px-4 py-2 rounded-lg shadow-sm">
                  <SiNextdotjs
                    className="text-black dark:text-white mr-2"
                    size={18}
                  />
                  <span>Next.js</span>
                </div>

                <div className="flex items-center bg-white dark:bg-gray-700 px-4 py-2 rounded-lg shadow-sm">
                  <FaNodeJs className="text-green-600 mr-2" size={20} />
                  <span>Node.js</span>
                </div>
                <div className="flex items-center bg-white dark:bg-gray-700 px-4 py-2 rounded-lg shadow-sm">
                  <SiMongodb className="text-green-500 mr-2" size={18} />
                  <span>MongoDB</span>
                </div>
                <div className="flex items-center bg-white dark:bg-gray-700 px-4 py-2 rounded-lg shadow-sm">
                  <FaDatabase className="text-blue-500 mr-2" size={18} />
                  <span>MySQL</span>
                </div>
              </div>
            </FadeIn>

            {/* Call to Action Buttons */}
            <FadeIn direction="up" delay={0.4}>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="/projects">
                  <Button variant="primary">View Projects</Button>
                </Link>
                {/* <Link href="/contact">
                  <Button variant="secondary" className="flex items-center">
                    Get In Touch <FaArrowRight className="ml-2" />
                  </Button>
                </Link> */}
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

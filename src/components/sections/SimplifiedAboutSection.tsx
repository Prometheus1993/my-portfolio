// src/components/sections/SimplifiedAboutSection.tsx
"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import {
  FaReact,
  FaNodeJs,
} from "react-icons/fa";
import {
  SiTypescript,
  SiTailwindcss,
  SiNextdotjs,
} from "react-icons/si";
import profilePic from "../../../public/profilepic.png";
import FadeIn from "@/components/animations/FadeIn";
import Button from "@/components/ui/Button";

const SimplifiedAboutSection = () => {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-800/30">
      <div className="container mx-auto px-4">
        <FadeIn direction="up">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            About Me
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Image Column */}
          <div className="md:col-span-1 flex justify-center mb-8 md:mb-0">
            <div className="relative w-56 h-56 md:w-64 md:h-64 rounded-full overflow-hidden shadow-lg">
              <Image
                src={profilePic}
                alt="Profile photo of Jesus O'Bulan"
                layout="fill"
                objectFit="cover"
                priority
              />
            </div>
          </div>

          {/* Text Column */}
          <div className="md:col-span-2 space-y-6">
            <FadeIn direction="up" delay={0.1}>
              <p className="text-lg text-gray-700 dark:text-gray-300">
                Hello! I&apos;m Jesus O&apos;Bulan, a Full-Stack Developer completing my Programming Associate Degree at 
                AP University College Antwerp. I build applications from start to finish with a focus on user experience 
                and clean code.
              </p>
            </FadeIn>

            {/* Key Skills */}
            <FadeIn direction="up" delay={0.2}>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mt-6 mb-4">
                Core Skills
              </h3>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center bg-white dark:bg-gray-700 px-4 py-2 rounded-lg shadow-sm">
                  <FaReact className="text-blue-500 mr-2" size={24} />
                  <span>React</span>
                </div>
                <div className="flex items-center bg-white dark:bg-gray-700 px-4 py-2 rounded-lg shadow-sm">
                  <SiNextdotjs className="text-black dark:text-white mr-2" size={22} />
                  <span>Next.js</span>
                </div>
                <div className="flex items-center bg-white dark:bg-gray-700 px-4 py-2 rounded-lg shadow-sm">
                  <SiTypescript className="text-blue-600 mr-2" size={22} />
                  <span>TypeScript</span>
                </div>
                <div className="flex items-center bg-white dark:bg-gray-700 px-4 py-2 rounded-lg shadow-sm">
                  <SiTailwindcss className="text-blue-400 mr-2" size={22} />
                  <span>Tailwind</span>
                </div>
                <div className="flex items-center bg-white dark:bg-gray-700 px-4 py-2 rounded-lg shadow-sm">
                  <FaNodeJs className="text-green-600 mr-2" size={24} />
                  <span>Node.js</span>
                </div>
              </div>
            </FadeIn>

            {/* Learn More Button */}
            <FadeIn direction="up" delay={0.3}>
              <div className="mt-8">
                <Link href="/about">
                  <Button variant="secondary" className="flex items-center">
                    Learn More <FaArrowRight className="ml-2" />
                  </Button>
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SimplifiedAboutSection;
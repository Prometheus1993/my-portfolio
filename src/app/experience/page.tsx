// src/app/experience/page.tsx
'use client';

import React from "react";
import FadeIn from "@/components/animations/FadeIn";
import { motion } from "framer-motion";
import { FiCode, FiTool, FiUsers, FiTrendingUp } from "react-icons/fi";

export default function ExperiencePage() {
  const experiences = [
    {
      company: "Brightest",
      role: "Test Automation Developer Intern",
      period: "Feb 2025 - Jun 2025",
      description: "Developed a Test Automation UI Framework for Selenium and Playwright",
      icon: <FiCode className="w-6 h-6" />,
      technologies: ["Selenium", "Playwright", "TypeScript", "React", "Node.js"],
      highlights: [
        "Built comprehensive UI framework for test automation",
        "Implemented Page Object Model patterns",
        "Worked with wireframes and UI mockups",
        "Developed code generation tools"
      ]
    }
  ];

  const skills = [
    {
      category: "Test Automation",
      icon: <FiTool className="w-5 h-5" />,
      items: ["Selenium", "Playwright", "Page Object Model", "Test Frameworks"]
    },
    {
      category: "Development",
      icon: <FiCode className="w-5 h-5" />,
      items: ["TypeScript", "React", "Node.js", "UI Design"]
    },
    {
      category: "Collaboration",
      icon: <FiUsers className="w-5 h-5" />,
      items: ["Agile/Scrum", "Code Reviews", "Documentation", "Trello"]
    },
    {
      category: "Growth",
      icon: <FiTrendingUp className="w-5 h-5" />,
      items: ["Problem Solving", "Research Skills", "Independent Learning", "Adaptability"]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Experience
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              My professional experience as an IT & Software student
            </p>
          </div>
        </FadeIn>

        {/* Experience Cards */}
        <div className="space-y-8 mb-12">
          {experiences.map((exp, index) => (
            <FadeIn key={index} delay={index * 0.1}>
              <motion.div
                className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 border border-gray-200 dark:border-gray-700"
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-3 bg-primary-100 dark:bg-primary-900/30 rounded-lg">
                    {exp.icon}
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                      {exp.role}
                    </h2>
                    <p className="text-lg text-primary-600 dark:text-primary-400 font-semibold mb-1">
                      {exp.company}
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {exp.period}
                    </p>
                  </div>
                </div>

                <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                  {exp.description}
                </p>

                {/* Technologies */}
                <div className="mb-6">
                  <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">
                    Technologies Used
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-secondary-100 dark:bg-secondary-900/30 text-secondary-700 dark:text-secondary-300 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Highlights */}
                <div>
                  <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">
                    Key Achievements
                  </h3>
                  <ul className="space-y-2">
                    {exp.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start gap-2 text-gray-700 dark:text-gray-300">
                        <span className="text-primary-500 mt-1">•</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </FadeIn>
          ))}
        </div>

        {/* Skills Gained Section */}
        <FadeIn delay={0.2}>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 border border-gray-200 dark:border-gray-700">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Skills & Learnings
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {skills.map((skillGroup, index) => (
                <div key={index} className="space-y-3">
                  <div className="flex items-center gap-2">
                    <div className="text-primary-600 dark:text-primary-400">
                      {skillGroup.icon}
                    </div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">
                      {skillGroup.category}
                    </h3>
                  </div>
                  <ul className="space-y-1 ml-7">
                    {skillGroup.items.map((item, i) => (
                      <li key={i} className="text-gray-600 dark:text-gray-400 text-sm">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}

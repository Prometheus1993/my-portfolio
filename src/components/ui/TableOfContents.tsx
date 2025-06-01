"use client";

import React, { useEffect, useState } from "react";
import { FaListUl } from "react-icons/fa";

interface Section {
  id: string;
  title: string;
}

interface TableOfContentsProps {
  sections?: Section[];
  className?: string;
}

const TableOfContents: React.FC<TableOfContentsProps> = ({ sections: propSections, className = "" }) => {
  const [sections, setSections] = useState<Section[]>([]);
  const [activeSection, setActiveSection] = useState<string>("");

  // Extract sections from the DOM if not provided via props
  useEffect(() => {
    if (propSections) {
      setSections(propSections);
    } else {
      // Auto-detect sections from h2 elements in the main content
      const extractSections = () => {
        const headings = document.querySelectorAll("main h2[id], article h2[id], section h2[id]");
        const extractedSections: Section[] = [];
        
        headings.forEach((heading) => {
          const id = heading.getAttribute("id");
          const title = heading.textContent?.replace(/\p{Emoji}/gu, "").trim() || "";
          
          if (id && title) {
            extractedSections.push({ id, title });
          }
        });
        
        setSections(extractedSections);
        
        // Set initial active section
        if (extractedSections.length > 0) {
          setActiveSection(extractedSections[0].id);
        }
      };
      
      // Delay to ensure DOM is fully rendered
      setTimeout(extractSections, 100);
    }
  }, [propSections]);

  // Smooth scroll to section
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 100; // Adjust for sticky header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sectionIds = sections.map(s => s.id);
      
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const section = document.getElementById(sectionIds[i]);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 120) {
            setActiveSection(sectionIds[i]);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  // Don't render if no sections
  if (sections.length === 0) {
    return null;
  }

  return (
    <div className={`bg-gray-50 dark:bg-gray-800 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700 lg:sticky lg:top-24 ${className}`}>
      <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white flex items-center">
        <FaListUl className="mr-2" /> Table of Contents
      </h3>
      <nav className="space-y-2">
        {sections.map((section) => (
          <button
            key={section.id}
            onClick={() => scrollToSection(section.id)}
            className={`block w-full text-left px-3 py-2 rounded-md text-sm transition-all duration-200 ${
              activeSection === section.id
                ? "bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 font-medium"
                : "text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
            }`}
          >
            {section.title}
          </button>
        ))}
      </nav>
    </div>
  );
};

export default TableOfContents;
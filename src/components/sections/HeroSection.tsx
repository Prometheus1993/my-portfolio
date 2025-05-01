'use client';

// src/components/sections/HeroSection.tsx
import React from 'react';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import { FaDownload } from 'react-icons/fa';
import FadeIn from '@/components/animations/FadeIn';

const HeroSection = () => {
  return (
    <section className="text-center py-20 md:py-32">
      <div className="container mx-auto px-4">
        <FadeIn direction="down" duration={0.7}>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight text-gray-900 dark:text-white">
            Jesus O&apos;Bulan
          </h1>
        </FadeIn>
        
        <FadeIn direction="down" delay={0.1} duration={0.7}>
          <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8">
            Full-stack Developer
          </p>
        </FadeIn>
        
        <FadeIn direction="up" delay={0.2} duration={0.7}>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-xl mx-auto mb-10">
            Passionate about creating and developing modern applications, with a focus on both frontend and backend technologies.
          </p>
        </FadeIn>

        <FadeIn direction="up" delay={0.3} duration={0.7}>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/projects">
              <Button variant="primary">View Projects</Button>
            </Link>
            
            <a href="/cv-jesus-obulan.pdf" target="_blank" rel="noopener noreferrer">
              <Button variant="secondary" className="flex items-center">
                <FaDownload className="mr-2" /> Download CV
              </Button>
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default HeroSection;
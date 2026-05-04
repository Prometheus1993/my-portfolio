import React from 'react';
import AboutSection from '@/components/sections/AboutSection';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About | Jesus O\'Bulan',
  description: 'Learn more about Jesus O\'Bulan — a Full-Stack Developer based in Antwerp with a passion for technology.',
};

export default function AboutPage() {
  return (
    <>
      <AboutSection />
    </>
  );
}

// src/app/about/page.tsx
import React from 'react';
import AboutSection from '@/components/sections/AboutSection';
import type { Metadata } from 'next';

// Optioneel: Voeg specifieke metadata toe voor deze pagina
export const metadata: Metadata = {
  title: 'Over Mij | Jesus O\'Bulan Portfolio',
  description: 'Leer meer over Jesus O\'Bulan, een Full-Stack Developer uit Antwerpen met een passie voor technologie.',
};

export default function AboutPage() {
  return (
    <>
      <AboutSection />
    </>
  );
}
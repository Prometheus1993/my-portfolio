// src/app/contact/page.tsx
import React from 'react';
import ContactSection from '@/components/sections/ContactSection';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact | Jesus O\'Bulan Portfolio',
  description: 'Neem contact op met Jesus O\'Bulan, Full-Stack Developer. Beschikbaar voor freelance projecten en full-time posities.',
};

export default function ContactPage() {
  return (
    <>
      <ContactSection />
    </>
  );
}
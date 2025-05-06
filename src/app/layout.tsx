// src/app/layout.tsx
import type { Metadata } from "next";
import "./globals.css"; // Behoud deze import voor Tailwind stijlen

// Importeer hier straks je Navbar en Footer componenten
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollToTop from "@/components/ui/ScrollToTop";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from '@vercel/analytics/next';

export const metadata: Metadata = {
  title: "Jesus O'Bulan - Full-Stack Developer Portfolio",
  description:
    "Portfolio van Jesus O'Bulan, met projecten in React, Next.js, TypeScript en meer.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      {/*
        suppressHydrationWarning is added to prevent warnings when the theme changes during hydration.
        
        We don't add a default dark class here because our ThemeToggle component will 
        handle adding it based on user preferences.
      */}
      <body className="flex flex-col min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-200">
        <Navbar />

        <main className="flex-grow container mx-auto px-4 py-8">
          {children}
          <SpeedInsights />
          <Analytics />
        </main>

        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}

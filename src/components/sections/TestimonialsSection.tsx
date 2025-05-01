'use client';

import React from 'react';
import TestimonialsCarousel from '@/components/ui/TestimonialsCarousel';
import FadeIn from '@/components/animations/FadeIn';

// Sample testimonials data - without image URLs to avoid 404 errors
const testimonials = [
  {
    id: 1,
    quote: "Jesus is an exceptional full-stack developer who brings both technical expertise and creative problem-solving to every project. His ability to understand complex requirements and translate them into elegant solutions is remarkable.",
    name: "Sarah Johnson",
    role: "Project Manager",
    company: "Atlas Copco",
    // Removed imageUrl to use initials instead
  },
  {
    id: 2,
    quote: "Working with Jesus was a game-changer for our team. His deep knowledge of React and Node.js accelerated our development process, and his attention to detail ensured a high-quality end product that exceeded our expectations.",
    name: "Michael Chen",
    role: "Lead Developer",
    company: "Brightest",
    // Removed imageUrl to use initials instead
  },
  {
    id: 3,
    quote: "Jesus has a rare combination of technical skill and communication ability. He can explain complex concepts in simple terms and works collaboratively to find the best solutions. I'd highly recommend him for any development team.",
    name: "Emma Verbruggen",
    role: "Senior Engineer",
    company: "TechSolutions",
    // Removed imageUrl to use initials instead
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <FadeIn direction="up">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900 dark:text-white">
            Testimonials
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 text-center max-w-3xl mx-auto mb-12">
            What colleagues and clients say about working with me
          </p>
        </FadeIn>

        <FadeIn direction="up" delay={0.2}>
          <TestimonialsCarousel testimonials={testimonials} />
        </FadeIn>
      </div>
    </section>
  );
};

export default TestimonialsSection;
'use client';

import React, { useState, useEffect, useCallback } from 'react';
import TestimonialCard from '@/components/ui/TestimonialCard';
import { AnimatePresence } from 'framer-motion';
import { FaChevronLeft, FaChevronRight, FaCircle } from 'react-icons/fa';

// Define the testimonial interface
interface Testimonial {
  id: number;
  quote: string;
  name: string;
  role: string;
  company: string;
  imageUrl?: string;
}

interface TestimonialsCarouselProps {
  testimonials: Testimonial[];
  autoRotate?: boolean;
  rotationInterval?: number; // in milliseconds
}

const TestimonialsCarousel: React.FC<TestimonialsCarouselProps> = ({
  testimonials,
  autoRotate = true,
  rotationInterval = 5000, // Default to 5 seconds
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Go to the next testimonial
  const nextTestimonial = useCallback(() => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  }, [testimonials.length]);
  
  // Go to the previous testimonial
  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };
  
  // Go to a specific testimonial
  const goToTestimonial = (index: number) => {
    setCurrentIndex(index);
  };
  
  // Set up auto rotation
  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (autoRotate && testimonials.length > 1) {
      interval = setInterval(nextTestimonial, rotationInterval);
    }
    
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [autoRotate, nextTestimonial, rotationInterval, testimonials.length]);

  // If no testimonials, don't render anything
  if (testimonials.length === 0) {
    return null;
  }
  
  return (
    <div className="relative py-8">
      {/* Main carousel */}
      <div className="relative overflow-hidden">
        <AnimatePresence mode="wait">
          <TestimonialCard
            key={currentIndex}
            quote={testimonials[currentIndex].quote}
            name={testimonials[currentIndex].name}
            role={testimonials[currentIndex].role}
            company={testimonials[currentIndex].company}
            imageUrl={testimonials[currentIndex].imageUrl}
          />
        </AnimatePresence>
      </div>
      
      {/* Navigation arrows (only show if more than one testimonial) */}
      {testimonials.length > 1 && (
        <div className="flex justify-between absolute top-1/2 -translate-y-1/2 left-0 right-0 px-4 md:px-6">
          <button
            onClick={prevTestimonial}
            className="bg-white dark:bg-gray-700 p-2 rounded-full shadow-md hover:bg-gray-100 dark:hover:bg-gray-600 focus:outline-none"
            aria-label="Previous testimonial"
          >
            <FaChevronLeft className="text-gray-700 dark:text-gray-300" />
          </button>
          <button
            onClick={nextTestimonial}
            className="bg-white dark:bg-gray-700 p-2 rounded-full shadow-md hover:bg-gray-100 dark:hover:bg-gray-600 focus:outline-none"
            aria-label="Next testimonial"
          >
            <FaChevronRight className="text-gray-700 dark:text-gray-300" />
          </button>
        </div>
      )}
      
      {/* Dots navigation (only show if more than one testimonial) */}
      {testimonials.length > 1 && (
        <div className="flex justify-center mt-6 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToTestimonial(index)}
              className={`focus:outline-none ${
                index === currentIndex ? 'text-blue-500 dark:text-blue-400' : 'text-gray-300 dark:text-gray-600'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            >
              <FaCircle className="text-xs" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default TestimonialsCarousel;
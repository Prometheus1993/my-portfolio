'use client';

import React from 'react';
import Image from 'next/image';
import { FaQuoteLeft } from 'react-icons/fa';
import { motion } from 'framer-motion';

interface TestimonialCardProps {
  quote: string;
  name: string;
  role: string;
  company: string;
  imageUrl?: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  quote,
  name,
  role,
  company,
  imageUrl
}) => {
  return (
    <motion.div 
      className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 max-w-2xl mx-auto"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col items-center text-center">
        <FaQuoteLeft className="text-3xl text-blue-500 dark:text-blue-400 mb-4" />
        
        <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed italic">
          "{quote}"
        </p>
        
        <div className="flex items-center mt-4">
          {imageUrl ? (
            <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
              <Image
                src={imageUrl}
                alt={`Photo of ${name}`}
                layout="fill"
                objectFit="cover"
              />
            </div>
          ) : (
            <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mr-4">
              <span className="text-blue-700 dark:text-blue-300 font-semibold text-lg">
                {name.charAt(0)}
              </span>
            </div>
          )}
          
          <div className="text-left">
            <h4 className="font-semibold text-gray-900 dark:text-white">{name}</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {role}, {company}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;
'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaClock, FaCalendarAlt, FaTag } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { format } from 'date-fns';

interface BlogCardProps {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  coverImage: string;
  tags: string[];
  readingTime: string;
  isCompact?: boolean; // For more compact view in featured sections
}

const BlogCard: React.FC<BlogCardProps> = ({
  slug,
  title,
  excerpt,
  date,
  coverImage,
  tags,
  readingTime,
  isCompact = false
}) => {
  // Format the date
  const formattedDate = format(new Date(date), 'MMMM d, yyyy');
  
  return (
    <motion.div 
      className={`bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden 
                ${isCompact ? 'flex flex-col h-full' : ''}`}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
    >
      {/* Cover Image */}
      <Link href={`/blog/${slug}`}>
        <div className="relative w-full h-48 md:h-56 overflow-hidden">
          <Image
            src={coverImage}
            alt={`Cover image for ${title}`}
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-500 hover:scale-105"
          />
        </div>
      </Link>
      
      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-3">
          {tags.slice(0, isCompact ? 2 : 3).map((tag) => (
            <Link key={tag} href={`/blog/tag/${tag.toLowerCase()}`}>
              <span className="inline-flex items-center text-xs font-medium px-2.5 py-0.5 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200">
                <FaTag className="mr-1" size={10} />
                {tag}
              </span>
            </Link>
          ))}
          {tags.length > (isCompact ? 2 : 3) && (
            <span className="text-xs text-gray-500 dark:text-gray-400 self-center">
              +{tags.length - (isCompact ? 2 : 3)}
            </span>
          )}
        </div>
        
        {/* Title */}
        <Link href={`/blog/${slug}`}>
          <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
            {title}
          </h3>
        </Link>
        
        {/* Meta info */}
        <div className="flex flex-wrap items-center text-sm text-gray-500 dark:text-gray-400 mb-3 gap-x-4 gap-y-1">
          <div className="flex items-center">
            <FaCalendarAlt className="mr-1" size={12} />
            <span>{formattedDate}</span>
          </div>
          <div className="flex items-center">
            <FaClock className="mr-1" size={12} />
            <span>{readingTime}</span>
          </div>
        </div>
        
        {/* Excerpt */}
        <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 flex-grow">
          {excerpt}
        </p>
        
        {/* Read More Link */}
        <Link 
          href={`/blog/${slug}`}
          className="text-blue-600 dark:text-blue-400 text-sm font-medium hover:underline inline-flex items-center mt-auto"
        >
          Read more
          <svg className="ml-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
          </svg>
        </Link>
      </div>
    </motion.div>
  );
};

export default BlogCard;
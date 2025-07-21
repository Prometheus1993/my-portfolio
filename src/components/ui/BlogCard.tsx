// src/components/ui/BlogCard.tsx
import React from "react";
import Link from "next/link";
import { format } from "date-fns";
import { FaCalendarAlt, FaArrowRight } from "react-icons/fa";

interface BlogCardProps {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  tags: string[];
  isCompact?: boolean;
}

const BlogCard: React.FC<BlogCardProps> = ({
  slug,
  title,
  excerpt,
  date,
  tags,
  isCompact = false,
}) => {
  // Format the date
  const formattedDate = format(new Date(date), "MMMM d, yyyy");

  return (
    <div className="bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 h-full flex flex-col border border-gray-200 dark:border-gray-700">
      {/* Card Content */}
      <div className="p-6 flex flex-col flex-grow">
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-3">
          {!isCompact &&
            tags.slice(0, 2).map((tag) => (
              <Link key={tag} href={`/blog/tag/${tag.toLowerCase()}`}>
                <span className="inline-block text-xs font-medium px-2.5 py-0.5 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200">
                  {tag}
                </span>
              </Link>
            ))}
        </div>

        {/* Title */}
        <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
          <Link
            href={`/blog/${slug}`}
            className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            {title}
          </Link>
        </h3>

        {/* Excerpt */}
        <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 flex-grow">
          {isCompact ? excerpt.substring(0, 100) + "..." : excerpt}
        </p>

        {/* Meta Info */}
        <div className="flex items-center text-xs text-gray-500 dark:text-gray-400 mt-auto mb-3">
          <div className="flex items-center">
            <FaCalendarAlt className="mr-1" size={10} />
            <span>{formattedDate}</span>
          </div>
        </div>

        {/* Read More Link */}
        <Link
          href={`/blog/${slug}`}
          className="inline-flex items-center text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline"
        >
          Read more
          <FaArrowRight className="ml-1" size={12} />
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;

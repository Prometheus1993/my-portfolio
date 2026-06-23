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
    <div className="bg-surface rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 h-full flex flex-col border border-border">
      {/* Card Content */}
      <div className="p-6 flex flex-col flex-grow">
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-3">
          {!isCompact &&
            tags.slice(0, 2).map((tag) => (
              <Link key={tag} href={`/blog/tag/${tag.toLowerCase()}`}>
                <span className="inline-block text-sm md:text-xs font-medium px-3 py-1 min-h-[32px] flex items-center rounded-full bg-red-ink text-accent touch-manipulation">
                  {tag}
                </span>
              </Link>
            ))}
        </div>

        {/* Title */}
        <h3 className="text-xl font-semibold mb-3 text-foreground">
          <Link
            href={`/blog/${slug}`}
            className="hover:text-accent transition-colors"
          >
            {title}
          </Link>
        </h3>

        {/* Excerpt */}
        <p className="text-foreground-muted text-sm mb-4 flex-grow">
          {isCompact ? excerpt.substring(0, 100) + "..." : excerpt}
        </p>

        {/* Meta Info */}
        <div className="flex items-center text-sm md:text-xs text-foreground-muted mt-auto mb-3">
          <div className="flex items-center">
            <FaCalendarAlt className="mr-2" size={14} />
            <span>{formattedDate}</span>
          </div>
        </div>

        {/* Read More Link */}
        <Link
          href={`/blog/${slug}`}
          className="inline-flex items-center text-base md:text-sm font-medium text-accent hover:underline min-h-[44px] touch-manipulation"
        >
          Read more
          <FaArrowRight className="ml-2" size={16} />
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;

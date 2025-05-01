// src/components/sections/BlogSection.tsx
import React from 'react';
import Link from 'next/link';
import BlogCard from '@/components/ui/BlogCard';
import Button from '@/components/ui/Button';
import FadeIn from '@/components/animations/FadeIn';
import StaggerContainer from '@/components/animations/StaggerContainer';
import { FaArrowRight } from 'react-icons/fa';
import { BlogPost } from '@/lib/blog';

interface BlogSectionProps {
  posts: BlogPost[];
}

const BlogSection: React.FC<BlogSectionProps> = ({ posts }) => {
  return (
    <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <FadeIn direction="up">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
              Recent Blog Posts
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Insights, tutorials, and stories from my experiences as a developer.
            </p>
          </div>
        </FadeIn>

        {posts.length > 0 ? (
          <StaggerContainer staggerDelay={0.1} delay={0.2}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 mb-12">
              {posts.map((post) => (
                <div key={post.slug}>
                  <BlogCard
                    slug={post.slug}
                    title={post.title}
                    excerpt={post.excerpt}
                    date={post.date}
                    coverImage={post.coverImage}
                    tags={post.tags}
                    readingTime={post.readingTime || '5 min read'}
                    isCompact={true}
                  />
                </div>
              ))}
            </div>
          </StaggerContainer>
        ) : (
          <div className="text-center py-10">
            <p className="text-gray-600 dark:text-gray-400">
              No blog posts available yet.
            </p>
          </div>
        )}

        <FadeIn direction="up" delay={0.4}>
          <div className="text-center">
            <Link href="/blog">
              <Button 
                variant="secondary" 
                className="inline-flex items-center hover:translate-x-1 transition-transform"
              >
                View all posts <FaArrowRight className="ml-2" />
              </Button>
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default BlogSection;
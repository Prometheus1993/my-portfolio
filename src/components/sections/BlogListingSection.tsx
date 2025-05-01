'use client';

// src/components/sections/BlogListingSection.tsx
import React, { useState, useEffect } from 'react';
import BlogCard from '@/components/ui/BlogCard';
import FilterButton from '@/components/ui/FilterButton';
import { FaSearch } from 'react-icons/fa';
import FadeIn from '@/components/animations/FadeIn';
import StaggerContainer from '@/components/animations/StaggerContainer';
import { motion, AnimatePresence } from 'framer-motion';
import { BlogPost } from '@/lib/blog';

interface BlogListingSectionProps {
  posts: BlogPost[];
  tags: string[];
}

const BlogListingSection: React.FC<BlogListingSectionProps> = ({ 
  posts, 
  tags 
}) => {
  // State for filtered posts
  const [filteredPosts, setFilteredPosts] = useState<BlogPost[]>(posts);
  
  // State for active filter tag
  const [activeTag, setActiveTag] = useState<string>('All');
  
  // State for search query
  const [searchQuery, setSearchQuery] = useState<string>('');
  
  // Add "All" to the beginning of the tags array
  const allTags = ['All', ...tags];
  
  // Filter posts when activeTag or searchQuery changes
  useEffect(() => {
    // First filter by tag
    let result = posts;
    
    if (activeTag !== 'All') {
      result = posts.filter(post => post.tags.includes(activeTag));
    }
    
    // Then filter by search query
    if (searchQuery.trim() !== '') {
      const query = searchQuery.toLowerCase();
      result = result.filter(post => 
        post.title.toLowerCase().includes(query) || 
        post.excerpt.toLowerCase().includes(query) || 
        post.tags.some(tag => tag.toLowerCase().includes(query))
      );
    }
    
    setFilteredPosts(result);
  }, [activeTag, searchQuery, posts]);
  
  // Handle tag filter button click
  const handleTagClick = (tag: string) => {
    setActiveTag(tag);
  };
  
  // Handle search input change
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };
  
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <FadeIn direction="up">
          <h1 className="text-3xl md:text-5xl font-bold text-center mb-6 text-gray-900 dark:text-white">
            Blog
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 text-center max-w-2xl mx-auto mb-12">
            Thoughts, tutorials, and insights about development, technology, and my experiences.
          </p>
        </FadeIn>
        
        {/* Search and filter */}
        <div className="mb-12">
          <FadeIn direction="up" delay={0.1}>
            {/* Search */}
            <div className="relative max-w-md mx-auto mb-8">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <FaSearch className="text-gray-500 dark:text-gray-400" />
              </div>
              <input 
                type="text" 
                value={searchQuery}
                onChange={handleSearchChange}
                placeholder="Search posts..." 
                className="block w-full pl-10 pr-4 py-3 text-sm bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-blue-500 focus:border-blue-500 text-gray-900 dark:text-white"
              />
            </div>
            
            {/* Tags filter */}
            <div className="flex flex-wrap justify-center gap-2">
              {allTags.map((tag) => (
                <FilterButton
                  key={tag}
                  label={tag}
                  isActive={activeTag === tag}
                  onClick={() => handleTagClick(tag)}
                />
              ))}
            </div>
          </FadeIn>
        </div>
        
        {/* Blog posts grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`${activeTag}-${searchQuery}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {filteredPosts.length > 0 ? (
              <StaggerContainer staggerDelay={0.1} delay={0.1}>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
                  {filteredPosts.map((post) => (
                    <div key={post.slug}>
                      <BlogCard
                        slug={post.slug}
                        title={post.title}
                        excerpt={post.excerpt}
                        date={post.date}
                        coverImage={post.coverImage}
                        tags={post.tags}
                        readingTime={post.readingTime || '5 min read'}
                      />
                    </div>
                  ))}
                </div>
              </StaggerContainer>
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  No posts found matching your criteria.
                </p>
                <button 
                  onClick={() => { setActiveTag('All'); setSearchQuery(''); }}
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                  Clear filters
                </button>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default BlogListingSection;
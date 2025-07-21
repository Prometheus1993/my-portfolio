// src/app/blog/category/[category]/page.tsx
'use client';

import React, { useState } from 'react';
import { getPostsByCategorySlug, getBlogCategories } from '@/lib/blog/utils';
import FadeIn from '@/components/animations/FadeIn';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronDown, FiChevronUp, FiCalendar, FiTag } from 'react-icons/fi';
import { format } from 'date-fns';

interface CategoryPageProps {
  params: Promise<{ category: string }>;
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const [expandedPosts, setExpandedPosts] = useState<Set<string>>(new Set());
  const categorySlug = React.use(params).category;
  
  const posts = getPostsByCategorySlug(categorySlug);
  const categories = getBlogCategories();
  const currentCategory = categories.find(cat => cat.slug === categorySlug);

  const togglePost = (postSlug: string) => {
    const newExpanded = new Set(expandedPosts);
    if (newExpanded.has(postSlug)) {
      newExpanded.delete(postSlug);
    } else {
      newExpanded.add(postSlug);
    }
    setExpandedPosts(newExpanded);
  };

  if (!currentCategory) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Category Not Found
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            The category &quot;{categorySlug}&quot; doesn&apos;t exist.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {currentCategory.name}
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              {currentCategory.description}
            </p>
            <div className="mt-4 text-sm text-gray-500 dark:text-gray-500">
              {posts.length} {posts.length === 1 ? 'post' : 'posts'}
            </div>
          </div>
        </FadeIn>

        <div className="space-y-6">
          {posts.map((post, index) => (
            <FadeIn key={post.slug} delay={index * 0.1}>
              <motion.div
                className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden"
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
              >
                <button
                  onClick={() => togglePost(post.slug)}
                  className="w-full p-6 text-left hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                        {post.title}
                      </h2>
                      <p className="text-gray-600 dark:text-gray-400 mb-3">
                        {post.excerpt}
                      </p>
                      
                      <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-500">
                        <div className="flex items-center gap-1">
                          <FiCalendar className="w-4 h-4" />
                          {format(new Date(post.date), 'MMM dd, yyyy')}
                        </div>
                        <div className="flex items-center gap-1">
                          <FiTag className="w-4 h-4" />
                          {post.tags.join(', ')}
                        </div>
                      </div>
                    </div>
                    
                    <div className="ml-4">
                      {expandedPosts.has(post.slug) ? (
                        <FiChevronUp className="w-5 h-5 text-gray-400" />
                      ) : (
                        <FiChevronDown className="w-5 h-5 text-gray-400" />
                      )}
                    </div>
                  </div>
                </button>

                <AnimatePresence>
                  {expandedPosts.has(post.slug) && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-2 border-t border-gray-200 dark:border-gray-700">
                        <div className="space-y-6">
                          {post.sections.map((section) => (
                            <div key={section.id} className="space-y-3">
                              <div className="flex items-center gap-2">
                                {section.emoji && (
                                  <span className="text-lg">{section.emoji}</span>
                                )}
                                <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                                  {section.title}
                                </h3>
                              </div>
                              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                                {section.content}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </div>
  );
}
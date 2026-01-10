// src/app/blog/page.tsx
'use client';

import React from "react";
import { getBlogCategories } from "@/lib/blog/utils";
import Link from "next/link";
import FadeIn from "@/components/animations/FadeIn";
import { motion } from "framer-motion";
import { FiArrowRight, FiFolder, FiFileText } from "react-icons/fi";

export default function BlogPage() {
  const categories = getBlogCategories();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Blog
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Read my latest thoughts, tutorials, and insights about development, technology, and my experiences.
            </p>
          </div>
        </FadeIn>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-1">
          {categories.map((category, index) => (
            <FadeIn key={category.slug} delay={index * 0.1}>
              <Link href={`/blog/category/${category.slug}`}>
                <motion.div
                  className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-all duration-300 border border-gray-200 dark:border-gray-700"
                  whileHover={{ y: -2, scale: 1.01 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="p-2 bg-primary-100 dark:bg-primary-900/30 rounded-lg">
                          <FiFolder className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                        </div>
                        <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                          {category.name}
                        </h2>
                      </div>
                      
                      <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                        {category.description}
                      </p>
                      
                      <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-500">
                        <div className="flex items-center gap-1">
                          <FiFileText className="w-4 h-4" />
                          {category.posts.length} {category.posts.length === 1 ? 'post' : 'posts'}
                        </div>
                        {category.posts.length > 0 && (
                          <div className="text-xs">
                            Latest: {new Date(category.posts[0].date).toLocaleDateString()}
                          </div>
                        )}
                      </div>
                    </div>
                    
                    <div className="ml-4 flex items-center">
                      <FiArrowRight className="w-5 h-5 text-gray-400 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-200" />
                    </div>
                  </div>
                </motion.div>
              </Link>
            </FadeIn>
          ))}
        </div>

        {categories.length === 0 && (
          <FadeIn>
            <div className="text-center py-12">
              <div className="text-gray-400 dark:text-gray-600 mb-4">
                <FiFileText className="w-12 h-12 mx-auto" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                No blog posts yet
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Check back soon for new content!
              </p>
            </div>
          </FadeIn>
        )}
      </div>
    </div>
  );
}
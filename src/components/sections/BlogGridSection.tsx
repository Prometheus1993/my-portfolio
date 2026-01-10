"use client";

// src/components/sections/BlogListingSection.tsx
import React, { useState, useEffect } from "react";
import BlogCard from "@/components/ui/BlogCard";
import { FaSearch } from "react-icons/fa";
import FadeIn from "@/components/animations/FadeIn";
import TabContainer from "@/components/ui/TabContainer";
import { BlogPost } from "@/lib/blog/types";

interface BlogGridSectionProps {
  posts: BlogPost[];
  tags: string[];
  selectedTag?: string;
}

const BlogGridSection: React.FC<BlogGridSectionProps> = ({
  posts,
  tags,
  selectedTag,
}) => {
  // State for search query
  const [searchQuery, setSearchQuery] = useState<string>("");

  // State for filtered posts (used for search)
  const [filteredPosts, setFilteredPosts] = useState<BlogPost[]>(posts);

  // Add "All" to the beginning of the tags array
  const allTags = ["All", ...tags];

  // Find the selected tag index or default to 'All'
  const initialTagId = selectedTag
    ? allTags.findIndex(
        (tag) => tag.toLowerCase() === selectedTag.toLowerCase()
      )
    : 0;

  // Zorg ervoor dat we een geldige index hebben, zelfs als de tag niet wordt gevonden
  const safeInitialTagId = initialTagId >= 0 ? initialTagId : 0;

  // Filter posts when searchQuery changes
  useEffect(() => {
    if (searchQuery.trim() === "") {
      setFilteredPosts(posts);
    } else {
      const query = searchQuery.toLowerCase();
      const filtered = posts.filter(
        (post) =>
          post.title.toLowerCase().includes(query) ||
          post.excerpt.toLowerCase().includes(query) ||
          post.tags.some((tag) => tag.toLowerCase().includes(query)) ||
          post.sections.some(
            (section) =>
              section.title.toLowerCase().includes(query) ||
              section.content.toLowerCase().includes(query)
          )
      );
      setFilteredPosts(filtered);
    }
  }, [searchQuery, posts]);

  // Handle search input change
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  // Clear search
  const clearSearch = () => {
    setSearchQuery("");
  };

  // Create tab content for each tag
  const tagTabs = allTags.map((tag) => {
    // Filter posts based on tag
    const tagPosts =
      tag === "All"
        ? filteredPosts
        : filteredPosts.filter((post) => post.tags.includes(tag));

    return {
      id: tag.toLowerCase().replace(/\s+/g, "-"),
      label: tag,
      content: (
        <div className="mt-8">
          {tagPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
              {tagPosts.map((post) => (
                <BlogCard
                  key={post.slug}
                  slug={post.slug}
                  title={post.title}
                  excerpt={post.excerpt}
                  date={post.date}
                  tags={post.tags}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                No posts found matching your criteria.
              </p>
              {searchQuery && (
                <button
                  onClick={clearSearch}
                  className="text-primary-600 dark:text-primary-400 hover:underline"
                >
                  Clear search
                </button>
              )}
            </div>
          )}
        </div>
      ),
    };
  });

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <FadeIn direction="up">
          <h1 className="text-3xl md:text-5xl font-bold text-center mb-6 text-gray-900 dark:text-white">
            Blog
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 text-center max-w-2xl mx-auto mb-12">
            Thoughts, tutorials, and insights about development, technology, and
            my experiences.
          </p>
        </FadeIn>

        {/* Search - Verbeterde styling */}
        <FadeIn direction="up" delay={0.1}>
          <div className="relative max-w-md mx-auto mb-10">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <FaSearch className="text-gray-500 dark:text-gray-400" />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearchChange}
              placeholder="Search posts..."
              className="block w-full pl-10 pr-4 py-3 text-sm bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-primary-500 focus:border-primary-500 text-gray-900 dark:text-white shadow-sm"
            />
          </div>
        </FadeIn>

        {/* Blog posts tabs by category - Verbeterde styling */}
        <FadeIn direction="up" delay={0.2}>
          <TabContainer
            tabs={tagTabs}
            defaultTabId={allTags[safeInitialTagId]
              .toLowerCase()
              .replace(/\s+/g, "-")}
            transitionDirection="fade"
            transitionDuration={0.3}
            className="bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700"
            tabsClassName="flex flex-wrap -mb-6"
          />
        </FadeIn>
      </div>
    </section>
  );
};

export default BlogGridSection;

"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { format } from "date-fns";
import {
  FaCalendarAlt,
  FaTag,
  FaShare,
  FaTwitter,
  FaLinkedin,
  FaFacebook,
  FaArrowLeft,
  FaListUl,
} from "react-icons/fa";
import { BlogPost } from "@/lib/blog/types";
import BlogCard from "@/components/ui/BlogCard";
import FadeIn from "@/components/animations/FadeIn";

interface BlogPostDetailProps {
  post: BlogPost;
  relatedPosts: BlogPost[];
}

const BlogPostDetail: React.FC<BlogPostDetailProps> = ({
  post,
  relatedPosts,
}) => {
  const [activeSection, setActiveSection] = useState<string>("overview");

  // Format the date
  const formattedDate = format(new Date(post.date), "MMMM d, yyyy");

  // Function to handle social sharing
  const shareUrl = typeof window !== "undefined" ? window.location.href : "";
  const shareTitle = post.title;

  const shareOnTwitter = () => {
    window.open(
      `https://twitter.com/intent/tweet?text=${encodeURIComponent(
        shareTitle
      )}&url=${encodeURIComponent(shareUrl)}`,
      "_blank"
    );
  };

  const shareOnLinkedIn = () => {
    window.open(
      `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
        shareUrl
      )}`,
      "_blank"
    );
  };

  const shareOnFacebook = () => {
    window.open(
      `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
        shareUrl
      )}`,
      "_blank"
    );
  };

  // Smooth scroll to section
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 100; // Adjust for sticky header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["overview", ...post.sections.map((s) => s.id)];

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 120) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [post.sections]);

  return (
    <article className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        <FadeIn direction="up">
          {/* Header */}
          <header className="max-w-3xl mx-auto text-center mb-12">
            {/* Back to Blog link */}
            <div className="mb-6">
              <Link
                href="/blog"
                className="inline-flex items-center text-accent hover:underline"
              >
                <FaArrowLeft className="mr-2" size={12} />
                Back to all posts
              </Link>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap justify-center gap-2 mb-4">
              {post.tags.map((tag) => (
                <Link key={tag} href={`/blog/tag/${tag.toLowerCase()}`}>
                  <span className="inline-flex items-center text-xs font-medium px-2.5 py-0.5 rounded-full bg-red-ink text-accent">
                    <FaTag className="mr-1" size={10} />
                    {tag}
                  </span>
                </Link>
              ))}
            </div>

            {/* Title */}
            <h1 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">
              {post.title}
            </h1>

            {/* Meta info */}
            <div className="flex flex-wrap justify-center items-center text-sm text-foreground-muted mb-6 gap-x-4 gap-y-2">
              <div className="flex items-center">
                <FaCalendarAlt className="mr-1" size={12} />
                <span>{formattedDate}</span>
              </div>
            </div>
          </header>
        </FadeIn>

        {/* Content with sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 max-w-6xl mx-auto">
          {/* Main Content */}
          <FadeIn direction="up" delay={0.2} className="lg:col-span-3">
            <div className="prose prose-yorha max-w-none">
              {/* Overview Section */}
              <section
                id="overview"
                className="mb-12 pb-12 border-b border-border"
              >
                <h2 className="text-2xl font-bold mb-6 text-foreground">
                  Overview
                </h2>
                <p className="text-foreground-muted leading-relaxed">
                  {post.excerpt}
                </p>
              </section>

              {/* Content Sections */}
              {post.sections.map((section, index) => (
                <section
                  key={section.id}
                  id={section.id}
                  className={`mb-12 pb-12 ${
                    index < post.sections.length - 1
                      ? "border-b border-border"
                      : ""
                  }`}
                >
                  <h2 className="text-2xl font-bold mb-6 text-foreground flex items-center">
                    {section.title}
                    {section.emoji && (
                      <span className="ml-3 text-2xl">{section.emoji}</span>
                    )}
                  </h2>
                  <p className="text-foreground-muted leading-relaxed">
                    {section.content}
                  </p>
                </section>
              ))}
            </div>
          </FadeIn>

          {/* Sidebar */}
          <FadeIn direction="up" delay={0.3} className="lg:col-span-1">
            <aside className="sticky top-24 space-y-8">
              {/* Table of Contents */}
              <div className="bg-surface rounded-lg shadow-md p-6 border border-border">
                <h3 className="text-lg font-semibold mb-4 text-foreground flex items-center">
                  <FaListUl className="mr-2" /> Table of Contents
                </h3>
                <nav className="space-y-2">
                  <button
                    onClick={() => scrollToSection("overview")}
                    className={`block w-full text-left px-3 py-2 rounded-md text-sm transition-all duration-200 ${
                      activeSection === "overview"
                        ? "bg-red-ink text-accent font-medium"
                        : "text-foreground-muted hover:bg-bone-raised"
                    }`}
                  >
                    Overview
                  </button>
                  {post.sections.map((section) => (
                    <button
                      key={section.id}
                      onClick={() => scrollToSection(section.id)}
                      className={`block w-full text-left px-3 py-2 rounded-md text-sm transition-all duration-200 ${
                        activeSection === section.id
                          ? "bg-red-ink text-accent font-medium"
                          : "text-foreground-muted hover:bg-bone-raised"
                      }`}
                    >
                      {section.title.split(":")[0]}
                    </button>
                  ))}
                </nav>
              </div>

              {/* Share */}
              <div className="bg-surface rounded-lg shadow-md p-6 border border-border">
                <h3 className="text-lg font-semibold mb-4 text-foreground flex items-center">
                  <FaShare className="mr-2" /> Share this post
                </h3>
                <div className="flex space-x-4">
                  <button
                    onClick={shareOnTwitter}
                    className="p-2 bg-ink text-bone rounded-full hover:bg-ink transition-colors"
                    aria-label="Share on Twitter"
                  >
                    <FaTwitter size={18} />
                  </button>
                  <button
                    onClick={shareOnLinkedIn}
                    className="p-2 bg-ink text-bone rounded-full hover:bg-ink transition-colors"
                    aria-label="Share on LinkedIn"
                  >
                    <FaLinkedin size={18} />
                  </button>
                  <button
                    onClick={shareOnFacebook}
                    className="p-2 bg-ink text-bone rounded-full hover:bg-ink transition-colors"
                    aria-label="Share on Facebook"
                  >
                    <FaFacebook size={18} />
                  </button>
                </div>
              </div>

              {/* Tags */}
              <div className="bg-surface rounded-lg shadow-md p-6 border border-border">
                <h3 className="text-lg font-semibold mb-4 text-foreground">
                  Tags
                </h3>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <Link key={tag} href={`/blog/tag/${tag.toLowerCase()}`}>
                      <span className="inline-flex items-center text-xs font-medium px-2.5 py-0.5 rounded-full bg-red-ink text-accent">
                        {tag}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </aside>
          </FadeIn>
        </div>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <div className="mt-20">
            <FadeIn direction="up">
              <h2 className="text-2xl font-bold mb-8 text-foreground">
                You might also like
              </h2>
            </FadeIn>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedPosts.map((post) => (
                <FadeIn key={post.slug} direction="up" delay={0.1}>
                  <BlogCard
                    slug={post.slug}
                    title={post.title}
                    excerpt={post.excerpt}
                    date={post.date}
                    tags={post.tags}
                    isCompact={true}
                  />
                </FadeIn>
              ))}
            </div>
          </div>
        )}
      </div>
    </article>
  );
};

export default BlogPostDetail;

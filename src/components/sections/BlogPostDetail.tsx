"use client";

import React from "react";
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
} from "react-icons/fa";
import { BlogPost } from "@/lib/blog/types";
import BlogCard from "@/components/ui/BlogCard";
import FadeIn from "@/components/animations/FadeIn";
import TabContainer from "@/components/ui/TabContainer";

interface BlogPostDetailProps {
  post: BlogPost;
  relatedPosts: BlogPost[];
}

const BlogPostDetail: React.FC<BlogPostDetailProps> = ({
  post,
  relatedPosts,
}) => {
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

  // Create tabs based on post content sections
  // This is a simplified example - you'll need to structure your content accordingly
  const contentTabs = [
    {
      id: "overview",
      label: "Overview",
      content: (
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <p className="text-gray-700 dark:text-gray-300">{post.excerpt}</p>
        </div>
      ),
    },
    {
      id: "monday",
      label: "Monday",
      content: (
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            First Day at Brightest! ✨👨‍💻🚀
          </h3>
          <p className="text-gray-700 dark:text-gray-300">
            Today was my first internship day at Brightest! The morning was all
            about introductions and onboarding. The project - a Test Automation
            UI Framework - is still in the initial phase, so we needed to set up
            some practical matters first, like Trello boards and tools. I didn't
            get to dive into code yet, but to make good use of my time, I set up
            my blog website. This makes it easier for my internship supervisor
            to follow my progress. Additionally, I researched Page Object Models
            in Selenium, an important concept for my assignment. 🔍📑💡
          </p>
        </div>
      ),
    },
    {
      id: "tuesday",
      label: "Tuesday",
      content: (
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            Waiting, but Productive! ⏳📖💭
          </h3>
          <p className="text-gray-700 dark:text-gray-300">
            Today was primarily a day of research. We're still waiting for
            concrete tasks, so there wasn't much action, but we independently
            continued to search for relevant information and concepts that could
            come in handy. 🧠🔎📚
          </p>
        </div>
      ),
    },
    {
      id: "wednesday",
      label: "Wednesday",
      content: (
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            UI Design in Progress 🎨🖥️📝
          </h3>
          <p className="text-gray-700 dark:text-gray-300">
            Today I created wireframes and then a mockup in V0.dev to visualize
            the UI of our application. We presented these to our supervisors to
            get feedback and understand their vision. Next step: process
            feedback and refine! 🛠️💬✨
          </p>
        </div>
      ),
    },
    {
      id: "thursday-friday",
      label: "Thu & Fri",
      content: (
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            Remote Work and Research 🏡💻🔬
          </h3>
          <p className="text-gray-700 dark:text-gray-300">
            These days we worked remotely and delved into Playwright and code
            generation. We went through documentation, created a questionnaire,
            and made a flowchart for our application. We also implemented some
            design tweaks. Two productive days from home! 🚀📂✅
          </p>
        </div>
      ),
    },
  ];

  return (
    <article className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        <FadeIn direction="up">
          {/* Header */}
          <header className="max-w-3xl mx-auto text-center mb-8">
            {/* Back to Blog link */}
            <div className="mb-6">
              <Link
                href="/blog"
                className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline"
              >
                <FaArrowLeft className="mr-2" size={12} />
                Back to all posts
              </Link>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap justify-center gap-2 mb-4">
              {post.tags.map((tag) => (
                <Link key={tag} href={`/blog/tag/${tag.toLowerCase()}`}>
                  <span className="inline-flex items-center text-xs font-medium px-2.5 py-0.5 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200">
                    <FaTag className="mr-1" size={10} />
                    {tag}
                  </span>
                </Link>
              ))}
            </div>

            {/* Title */}
            <h1 className="text-3xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
              {post.title}
            </h1>

            {/* Meta info */}
            <div className="flex flex-wrap justify-center items-center text-sm text-gray-500 dark:text-gray-400 mb-6 gap-x-4 gap-y-2">
              <div className="flex items-center">
                <FaCalendarAlt className="mr-1" size={12} />
                <span>{formattedDate}</span>
              </div>
            </div>
          </header>
        </FadeIn>

        {/* Content with tabs */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 max-w-6xl mx-auto">
          {/* Main Content */}
          <FadeIn direction="up" delay={0.2} className="lg:col-span-3">
            <TabContainer
              tabs={contentTabs}
              defaultTabId="overview"
              transitionDirection="fade"
              transitionDuration={0.3}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6"
            />
          </FadeIn>

          {/* Sidebar */}
          <FadeIn direction="up" delay={0.3} className="lg:col-span-1">
            <aside className="sticky top-24 space-y-8">
              {/* Share */}
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white flex items-center">
                  <FaShare className="mr-2" /> Share this post
                </h3>
                <div className="flex space-x-4">
                  <button
                    onClick={shareOnTwitter}
                    className="p-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors"
                    aria-label="Share on Twitter"
                  >
                    <FaTwitter size={18} />
                  </button>
                  <button
                    onClick={shareOnLinkedIn}
                    className="p-2 bg-blue-700 text-white rounded-full hover:bg-blue-800 transition-colors"
                    aria-label="Share on LinkedIn"
                  >
                    <FaLinkedin size={18} />
                  </button>
                  <button
                    onClick={shareOnFacebook}
                    className="p-2 bg-blue-900 text-white rounded-full hover:bg-blue-950 transition-colors"
                    aria-label="Share on Facebook"
                  >
                    <FaFacebook size={18} />
                  </button>
                </div>
              </div>

              {/* Tags */}
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
                  Tags
                </h3>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <Link key={tag} href={`/blog/tag/${tag.toLowerCase()}`}>
                      <span className="inline-flex items-center text-xs font-medium px-2.5 py-0.5 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200">
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
              <h2 className="text-2xl font-bold mb-8 text-gray-900 dark:text-white">
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
                    readingTime={post.readingTime || "5 min read"}
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

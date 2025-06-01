// src/lib/blog/utils.ts
import { BlogPost, BlogPostList } from "./types";
import { firstWeekAtBrightest } from "./posts/first-week-at-brightest";
import { secondWeekAtBrightest } from "./posts/second-week-at-brightest";
import { thirdWeekAtBrightest } from "./posts/third-week-at-brightest";
import { fourthWeekAtBrightest } from "./posts/fourth-week-at-brightest";
import { fifthWeekAtBrightest } from "./posts/fifth-week-at-brightest";
import { sixthWeekAtBrightest } from "./posts/sixth-week-at-brightest";
import { seventhWeekAtBrightest } from "./posts/seventh-week-at-brightest";
import { eighthWeekAtBrightest } from "./posts/eighth-week-at-brightest";
import { ninthWeekAtBrightest } from "./posts/ninth-week-at-brightest";
import { tenthWeekAtBrightest } from "./posts/tenth-week-at-brightest";
import { eleventhWeekAtBrightest } from "./posts/eleventh-week-at-brightest";
import { twelfthWeekAtBrightest } from "./posts/twelfth-week-at-brightest";
import { finalDaysAtBrightest } from "./posts/final-days-at-brightest";

// Import all blog posts here
const allPosts: BlogPostList = [
  firstWeekAtBrightest,
  secondWeekAtBrightest,
  thirdWeekAtBrightest,
  fourthWeekAtBrightest,
  fifthWeekAtBrightest,
  sixthWeekAtBrightest,
  seventhWeekAtBrightest,
  eighthWeekAtBrightest,
  ninthWeekAtBrightest,
  tenthWeekAtBrightest,
  eleventhWeekAtBrightest,
  twelfthWeekAtBrightest,
  finalDaysAtBrightest
  // Add more posts as you create them
];

// Get all blog posts, sorted by date (newest first)
export function getAllPosts(): BlogPostList {
  return allPosts.sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return dateB.getTime() - dateA.getTime();
  });
}

// Get the most recent posts
export function getRecentPosts(count: number = 3): BlogPostList {
  return getAllPosts().slice(0, count);
}

// Get a specific post by slug
export async function getPostBySlug(slug: string): Promise<BlogPost> {
  const post = getAllPosts().find((post) => post.slug === slug);

  if (!post) {
    throw new Error(`Post with slug "${slug}" not found`);
  }

  return post;
}

// Get all unique tags from posts
export function getAllTags(): string[] {
  const tags = new Set<string>();

  getAllPosts().forEach((post) => {
    post.tags.forEach((tag) => tags.add(tag));
  });

  return Array.from(tags).sort();
}

// Get posts by tag
export function getPostsByTag(tag: string): BlogPostList {
  return getAllPosts().filter((post) =>
    post.tags.some((postTag) => postTag.toLowerCase() === tag.toLowerCase())
  );
}

// Get related posts by tags (excluding the given post)
export function getRelatedPosts(slug: string, count: number = 3): BlogPostList {
  const currentPost = getAllPosts().find((post) => post.slug === slug);

  if (!currentPost) {
    return [];
  }

  // Filter posts with similar tags, excluding the current post
  const related = getAllPosts()
    .filter((post) => post.slug !== slug)
    .filter((post) => post.tags.some((tag) => currentPost.tags.includes(tag)))
    .sort((a, b) => {
      // Count matching tags
      const aMatches = a.tags.filter((tag) =>
        currentPost.tags.includes(tag)
      ).length;
      const bMatches = b.tags.filter((tag) =>
        currentPost.tags.includes(tag)
      ).length;

      // Sort by most matching tags first
      return bMatches - aMatches;
    });

  return related.slice(0, count);
}

// src/lib/blog.ts
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
// Correct imports for TypeScript
import { serialize } from 'next-mdx-remote/serialize';
import type { MDXRemoteSerializeResult } from 'next-mdx-remote';
import rehypeHighlight from 'rehype-highlight';
import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';

// Path to the blog posts directory
const postsDirectory = path.join(process.cwd(), '_posts');

// Define the blog post interface with proper MDX types
export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content?: string;
  mdxSource?: MDXRemoteSerializeResult;
  coverImage: string;
  tags: string[];
  readingTime?: string;
}

// Function to calculate reading time
function calculateReadingTime(content: string): string {
  const wordsPerMinute = 200;
  const words = content.trim().split(/\s+/).length;
  const minutes = Math.ceil(words / wordsPerMinute);
  return `${minutes} min read`;
}

// Get all blog posts data (sorted by date)
export function getAllPosts(): BlogPost[] {
  // Check if the directory exists
  if (!fs.existsSync(postsDirectory)) {
    console.warn(`Directory not found: ${postsDirectory}. Creating it.`);
    try {
      fs.mkdirSync(postsDirectory, { recursive: true });
    } catch (error) {
      console.error('Failed to create directory:', error);
      return [];
    }
  }

  // Get all the .mdx and .md files from the posts directory
  const fileNames = fs.readdirSync(postsDirectory)
    .filter(fileName => /\.(md|mdx)$/.test(fileName));
  
  const allPostsData = fileNames.map((fileName) => {
    // Remove extension from file name to get slug
    const slug = fileName.replace(/\.(md|mdx)$/, '');
    
    // Read markdown/mdx file as string
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    
    // Parse markdown frontmatter
    const matterResult = matter(fileContents);
    
    // Calculate reading time
    const readingTime = calculateReadingTime(matterResult.content);
    
    // Combine data with slug
    return {
      slug,
      readingTime,
      ...(matterResult.data as { 
        title: string; 
        date: string; 
        excerpt: string; 
        coverImage: string; 
        tags: string[];
      }),
    };
  });
  
  // Sort posts by date (newest first)
  return allPostsData.sort((a, b) => (
    new Date(b.date).getTime() - new Date(a.date).getTime()
  ));
}

// Get data for a specific blog post by slug
export async function getPostBySlug(slug: string): Promise<BlogPost> {
  // Check if the file exists with either .md or .mdx extension
  let fileExtension = '.mdx';
  let fullPath = path.join(postsDirectory, `${slug}${fileExtension}`);
  
  if (!fs.existsSync(fullPath)) {
    fileExtension = '.md';
    fullPath = path.join(postsDirectory, `${slug}${fileExtension}`);
  }
  
  // If neither file exists, return a placeholder post
  if (!fs.existsSync(fullPath)) {
    return {
      slug,
      title: 'Post Not Found',
      date: new Date().toISOString(),
      excerpt: 'The requested blog post could not be found.',
      content: '<p>The requested blog post could not be found.</p>',
      coverImage: '/images/blog/placeholder.jpg',
      tags: ['error'],
      readingTime: '1 min read'
    };
  }
  
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  
  // Parse frontmatter
  const matterResult = matter(fileContents);
  
  // Calculate reading time
  const readingTime = calculateReadingTime(matterResult.content);
  
  // Process MDX content with plugins
  const mdxSource = await serialize(matterResult.content, {
    mdxOptions: {
      remarkPlugins: [remarkGfm],
      rehypePlugins: [rehypeSlug, rehypeHighlight],
    },
    scope: matterResult.data,
  });
  
  // Return data with slug and MDX source
  return {
    slug,
    mdxSource,
    readingTime,
    ...(matterResult.data as { 
      title: string; 
      date: string; 
      excerpt: string; 
      coverImage: string; 
      tags: string[];
    }),
  };
}

// Get all unique tags from blog posts
export function getAllTags(): string[] {
  const posts = getAllPosts();
  const tags = new Set<string>();
  
  posts.forEach(post => {
    if (post.tags) {
      post.tags.forEach(tag => tags.add(tag));
    }
  });
  
  return Array.from(tags).sort();
}

// Get posts by tag
export function getPostsByTag(tag: string): BlogPost[] {
  const posts = getAllPosts();
  return posts.filter(post => post.tags && post.tags.includes(tag));
}

// Get recent posts (for homepage)
export function getRecentPosts(count: number = 3): BlogPost[] {
  const posts = getAllPosts();
  return posts.slice(0, count);
}

// Get related posts (based on tags)
export function getRelatedPosts(slug: string, count: number = 3): BlogPost[] {
  const allPosts = getAllPosts();
  const currentPost = allPosts.find(post => post.slug === slug);
  
  if (!currentPost || !currentPost.tags) return [];
  
  const relatedPosts = allPosts
    .filter(post => post.slug !== slug && post.tags) // Exclude current post
    .map(post => {
      // Calculate how many tags match
      const matchingTags = post.tags.filter(tag => 
        currentPost.tags.includes(tag)
      );
      return { ...post, matchCount: matchingTags.length };
    })
    .filter(post => post.matchCount > 0) // Only include posts with at least one matching tag
    .sort((a, b) => b.matchCount - a.matchCount) // Sort by number of matching tags
    .slice(0, count);
    
  return relatedPosts;
}
// src/lib/blog/types.ts
export interface BlogSection {
  id: string;
  title: string;
  content: string;
  // Optional emoji or icon identifiers that can be rendered
  emoji?: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  tags: string[];
  category: string;
  // Instead of MDX content, we'll use structured sections
  sections: BlogSection[];
}

export type BlogPostList = Array<BlogPost>;

export interface BlogCategory {
  name: string;
  slug: string;
  description: string;
  posts: BlogPost[];
}
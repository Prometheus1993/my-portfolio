---
title: "Building a Portfolio Website with Next.js and Tailwind CSS"
date: "2024-04-30"
excerpt: "A detailed look at how I created my developer portfolio using Next.js, React, and Tailwind CSS, including the design choices and implementation decisions."
coverImage: "/images/blog/portfolio-cover.jpg"
tags: ["Next.js", "React", "Tailwind CSS", "Portfolio"]
---

# Building a Portfolio Website with Next.js and Tailwind CSS

Creating a professional portfolio website is an essential step for any developer looking to showcase their work and skills. In this post, I'll walk through the process of how I built my portfolio website using Next.js and Tailwind CSS.

## Why Next.js?

Next.js has become my go-to framework for React applications for several reasons:

1. **Server-Side Rendering (SSR)** - Next.js provides excellent SEO capabilities through SSR, which is crucial for a portfolio that you want potential employers to find.

2. **Static Site Generation (SSG)** - For a portfolio site that doesn't change frequently, Next.js's static generation creates lightning-fast load times.

3. **File-based Routing** - The intuitive file-based routing system makes creating different sections of the site straightforward.

4. **Image Optimization** - Next.js's Image component automatically optimizes images, ensuring the site loads quickly on all devices.

## Setting Up the Project Structure

I organized my project with the following structure:

```
src/
├── app/               # App router pages and layouts
├── components/        # Reusable components
│   ├── animations/    # Animation components
│   ├── layout/        # Layout components (Navbar, Footer)
│   ├── sections/      # Page sections
│   └── ui/            # UI components (buttons, cards, etc.)
├── lib/               # Utility functions
└── styles/            # Global styles
```

This structure keeps the codebase organized and makes it easy to find and update components as needed.

## Using Markdown for Content Management

For my projects and blog posts, I chose to use Markdown files with frontmatter. This approach offers several advantages:

- Content is version-controlled alongside the code
- No need for a database or CMS
- Easy to write and format content
- Simple to update and deploy changes

I implemented a simple data fetching system that reads Markdown files from the filesystem, parses them, and provides the data to the components.

## Styling with Tailwind CSS

Tailwind CSS has revolutionized the way I approach styling web applications. Its utility-first approach allowed me to:

- Build custom designs without writing custom CSS
- Maintain consistency with a design system
- Create responsive layouts with minimal effort
- Implement dark mode with just a few classes

### Example of a Component with Tailwind

Here's a simplified example of how I styled a card component:

```jsx
const ProjectCard = ({ title, description, image }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="relative h-48">
        <Image src={image} alt={title} layout="fill" objectFit="cover" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
          {title}
        </h3>
        <p className="text-gray-600 dark:text-gray-400 text-sm">
          {description}
        </p>
      </div>
    </div>
  );
};
```

## Adding Animations

To make the site more engaging, I added subtle animations using Framer Motion. These animations include:

- Fade-in effects when elements enter the viewport
- Hover effects on interactive elements
- Staggered animations for lists of items

The animations enhance the user experience without being distracting or overwhelming.

## Implementing Dark Mode

Dark mode is now an expected feature for many users. I implemented a toggle that:

1. Respects the user's system preference by default
2. Allows manual toggling between light and dark mode
3. Saves the preference in localStorage
4. Applies the appropriate Tailwind classes

## Performance Optimization

Creating a fast website was a priority. I optimized performance by:

- Using Next.js's static generation where possible
- Implementing image optimization
- Minimizing JavaScript with component code splitting
- Utilizing the `next/font` module for web fonts
- Reducing unnecessary re-renders with React's memoization

## Conclusion

Building my portfolio with Next.js and Tailwind CSS was an enjoyable and educational experience. The combination of these technologies allowed me to create a fast, responsive, and visually appealing site that effectively showcases my work.

The best part is that adding new projects or blog posts is as simple as creating a new Markdown file — no database updates or complex CMS required.

If you're considering building your own portfolio, I highly recommend this tech stack for its flexibility, performance, and developer experience.

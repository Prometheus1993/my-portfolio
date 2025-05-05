// @ts-check
import { type NextConfig } from 'next';
import createMDX from '@next/mdx';
import remarkGfm from 'remark-gfm';
import rehypeSlug from 'rehype-slug';
import rehypeHighlight from 'rehype-highlight';

// Definieer plugin types
const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypeSlug, rehypeHighlight],
    providerImportSource: "@mdx-js/react",
  },
});

// Definieer je Next.js configuratie
const nextConfig: NextConfig = {
  // Configureer pageExtensions om .md en .mdx te ondersteunen
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  
  // Reactjs strict mode
  reactStrictMode: true,
  
  // Configureer images
  images: {
    domains: ['placehold.co'],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  
  // Andere Next.js config opties indien nodig
};

// Pas MDX plugin toe op de Next.js configuratie
export default withMDX(nextConfig);
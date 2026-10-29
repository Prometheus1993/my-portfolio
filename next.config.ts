// @ts-check
import { type NextConfig } from 'next';
import createMDX from '@next/mdx';

// Definieer plugin types
const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: ['remark-gfm'],
    rehypePlugins: ['rehype-slug', 'rehype-highlight'],
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
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      { protocol: 'https', hostname: 'placehold.co' },
    ],
  },

  // Old routes folded into the one-page home + /work/[slug] case studies.
  async redirects() {
    return [
      { source: '/projects', destination: '/#work', permanent: true },
      { source: '/projects/road-to-ragnarok', destination: '/work/road-to-ragnarok', permanent: true },
      { source: '/projects/brightest-pom-generator', destination: '/work/brightest', permanent: true },
      { source: '/projects/:slug*', destination: '/#work', permanent: false },
      { source: '/about', destination: '/#about', permanent: true },
      { source: '/experience', destination: '/#work', permanent: true },
      { source: '/contact', destination: '/#contact', permanent: true },
    ];
  },
};

// Pas MDX plugin toe op de Next.js configuratie
export default withMDX(nextConfig);
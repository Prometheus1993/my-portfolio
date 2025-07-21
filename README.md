# Jesus Obulan's Portfolio

A modern, responsive portfolio website built with Next.js 15, TypeScript, and Tailwind CSS. Features a clean design with smooth animations, project showcases, blog functionality, and an interactive contact form.

## Features

- **Modern Tech Stack**: Next.js 15 with TypeScript and Tailwind CSS
- **Responsive Design**: Mobile-first approach with optimized layouts
- **Smooth Animations**: Framer Motion animations and custom components
- **Project Showcase**: Detailed project pages with live demos and repositories
- **Blog System**: Structured blog posts with tags and filtering
- **Contact Form**: Interactive contact section
- **Analytics**: Vercel Analytics and Speed Insights integration
- **SEO Optimized**: Meta tags and structured data

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Content**: MDX and structured data
- **Analytics**: Vercel Analytics & Speed Insights
- **Deployment**: Vercel

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── about/             # About page
│   ├── blog/              # Blog listing and individual posts
│   ├── contact/           # Contact page
│   ├── projects/          # Projects listing and individual projects
│   └── layout.tsx         # Root layout
├── components/            # Reusable components
│   ├── animations/        # Animation components
│   ├── layout/           # Layout components (Navbar, Footer)
│   ├── sections/         # Page sections
│   └── ui/               # UI components
├── lib/
│   └── blog/             # Blog utilities and types
└── projects/             # Project data and components
```

## Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/my-portfolio.git
   cd my-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Create production build
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Key Components

### Projects
- Individual project components in `src/projects/`
- Structured project data with metadata
- Live demo and repository links
- Technology stack highlighting

### Blog
- Structured blog posts with sections
- Tag-based filtering and organization
- Reading time estimation
- Responsive blog layout

### Animations
- Custom Framer Motion components
- Fade-in animations
- Hover effects and scale transitions
- Staggered container animations

## Deployment

This project is optimized for deployment on Vercel:

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically with each push

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/my-portfolio)

## License

This project is open source and available under the [MIT License](LICENSE).

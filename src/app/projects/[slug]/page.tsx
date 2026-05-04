import {
  getAllProjectSlugs,
  getProjectBySlug,
  projectComponents,
} from "@/projects";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project Not Found",
      description: "The requested project could not be found",
    };
  }

  return {
    title: `${project.title} — Jesus O'Bulan`,
    description: project.overview,
  };
}

export function generateStaticParams() {
  return getAllProjectSlugs();
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) notFound();

  const ProjectComponent =
    projectComponents[slug as keyof typeof projectComponents];

  if (!ProjectComponent) notFound();

  const year = project.date.match(/\d{4}/)?.[0] ?? "";

  return (
    <article className="max-w-4xl mx-auto px-6 md:px-10 pt-10 md:pt-14 pb-10">
      {/* Back link */}
      <Link
        href="/projects"
        className="inline-flex items-center gap-2 text-xs text-foreground-muted hover:text-foreground transition-colors mb-6"
      >
        <span aria-hidden="true">←</span>
        <span>All projects</span>
      </Link>

      {/* Header */}
      <header className="border-b border-border pb-6 mb-6">
        <div className="flex items-baseline justify-between gap-4 mb-2">
          <p className="text-xs uppercase tracking-[0.2em] text-foreground-muted">
            Project
          </p>
          <span className="font-serif text-sm text-foreground-muted tabular-nums">
            {year}
          </span>
        </div>
        <h1 className="font-serif text-3xl md:text-5xl leading-tight tracking-tight text-foreground mb-3">
          {project.title}
        </h1>
        <p className="text-sm md:text-base text-foreground-muted leading-relaxed max-w-2xl">
          {project.overview}
        </p>
        <div className="flex flex-wrap gap-x-3 gap-y-1 mt-4 text-xs text-foreground-muted">
          {project.techStack.map((tech) => (
            <span key={tech}>{tech}</span>
          ))}
        </div>
        {(project.liveUrl || project.repoUrl) && (
          <div className="flex flex-wrap gap-x-6 gap-y-2 mt-4 text-sm">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline text-foreground inline-flex items-center gap-2"
              >
                <span>Live demo</span>
                <span aria-hidden="true">↗</span>
              </a>
            )}
            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline text-foreground-muted hover:text-foreground transition-colors inline-flex items-center gap-2"
              >
                <span>Source</span>
                <span aria-hidden="true">↗</span>
              </a>
            )}
          </div>
        )}
      </header>

      {/* Content */}
      <div className="mt-2">
        <ProjectComponent />
      </div>
    </article>
  );
}

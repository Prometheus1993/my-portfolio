import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import CaseStudy from "@/components/work/CaseStudy";
import {
  getAllCaseStudySlugs,
  getCaseStudyBySlug,
} from "@/work/case-studies";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getAllCaseStudySlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);
  if (!study) return { title: "Work" };
  return {
    title: `${study.title}, Jesus O'Bulan`,
    description: study.summary,
  };
}

export default async function WorkDetailPage({ params }: Props) {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);
  if (!study) notFound();

  return (
    <div className="pt-10 md:pt-14">
      <div className="mx-auto max-w-3xl px-6 md:px-10">
        <Link
          href="/#work"
          className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.15em] text-foreground-muted transition-colors hover:text-foreground"
        >
          <span aria-hidden>←</span> Back to work
        </Link>
      </div>
      <div className="mt-6">
        <CaseStudy data={study} />
      </div>
    </div>
  );
}

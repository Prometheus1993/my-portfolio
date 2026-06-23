import { tool } from "ai";
import { z } from "zod";
import { portfolioData } from "@/data/portfolio-data";
import { getAllCaseStudies } from "@/work/case-studies";

/**
 * Least-privilege, read-only generative-UI tools. Each `execute` reads ONLY
 * from the static portfolio data / case-study index and returns serializable
 * card data: no fetch, no writes, no arbitrary access. The returned objects
 * become `part.output` on the client and render as YoRHa HUD cards.
 */
export const portfolioTools = {
  showProjects: tool({
    description:
      "Render project cards. Call this whenever the user asks about Jesus's projects, work, or case studies.",
    inputSchema: z.object({}),
    execute: async () => ({
      projects: getAllCaseStudies().map((c) => ({
        slug: c.slug,
        title: c.title,
        summary: c.summary,
        techStack: c.techStack,
        year: c.year,
        status: c.status,
      })),
    }),
  }),

  showContact: tool({
    description:
      "Render a contact card. Call this when the user asks how to reach, contact, hire, or email Jesus.",
    inputSchema: z.object({}),
    execute: async () => ({
      email: portfolioData.contact.email,
      github: portfolioData.contact.github,
      linkedin: portfolioData.contact.linkedin,
      location: portfolioData.location,
    }),
  }),

  showResume: tool({
    description:
      "Render a resume / CV download card. Call this when the user asks for his CV, resume, or to download it.",
    inputSchema: z.object({}),
    execute: async () => ({
      name: portfolioData.name,
      title: portfolioData.title,
      urlEn: "/cv-jesus-obulan-en.pdf",
      urlNl: "/cv-jesus-obulan-nl.pdf",
    }),
  }),

  showSkills: tool({
    description:
      "Render a skills card grouped by category. Call this when the user asks about Jesus's skills, tech stack, or which technologies he knows.",
    inputSchema: z.object({}),
    execute: async () => ({
      groups: [
        { label: "Frontend", items: portfolioData.skills.frontend },
        { label: "Backend", items: portfolioData.skills.backend },
        { label: "Data and infra", items: portfolioData.skills.data },
        { label: "AI and automation", items: portfolioData.skills.ai },
        { label: "Software design", items: portfolioData.skills.design },
      ],
    }),
  }),
};

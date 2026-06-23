// Case study data model. Every case study renders the same 8-part skeleton:
// Summary, metadata block, Problem and constraints, What I built, Key technical
// decisions and tradeoffs, Outcome/status, What I'd change/next, Links.

export interface CaseStudyMetaRow {
  label: string;
  value: string;
}

export interface CaseStudyCode {
  filename: string;
  content: string;
}

export interface CaseStudyDecision {
  title: string;
  body: string;
  // Optional code block that illustrates the decision.
  code?: CaseStudyCode;
}

export interface CaseStudyLinks {
  live?: string;
  repo?: string;
  recording?: string;
  // A plain note for cases where a hosted demo or public repo is not the point.
  note?: string;
}

export type CaseStudyStatus = "ongoing" | "in-progress" | "shipped";

export interface CaseStudy {
  slug: string;
  title: string;
  shortTitle: string; // compact label for hero quick-links and nav
  order: number; // page order: 1 = headline
  headline?: boolean;
  status: CaseStudyStatus;
  year: string;

  // One sentence. Doubles as the home-card blurb.
  summary: string;

  // The mono HUD metadata block (role, context, timeframe, stack, tests, ...).
  meta: CaseStudyMetaRow[];

  // Short tech chips for the home card.
  techStack: string[];

  problem: string;
  whatIBuilt: string;
  decisions: CaseStudyDecision[];
  outcome: string;

  // Optional. Marked clearly when it is a placeholder for Jesus to refine.
  whatIdChange?: string;

  links: CaseStudyLinks;

  // One factual line on what was delegated to AI vs decided by hand, where relevant.
  aiUsage?: string;
}

const STATUS_LABEL: Record<CaseStudyStatus, string> = {
  ongoing: "ONGOING",
  "in-progress": "IN PROGRESS",
  shipped: "SHIPPED",
};

export function statusLabel(status: CaseStudyStatus): string {
  return STATUS_LABEL[status];
}

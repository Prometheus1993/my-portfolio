import React from "react";
import HudReadout from "@/components/yorha/HudReadout";

const links = [
  { label: "GitHub", href: "https://github.com/Prometheus1993" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/jesus-o-9964802a2" },
  { label: "Email", href: "mailto:jesusobulan@hotmail.com" },
];

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-12 border-t border-line">
      {/* Pattern strip */}
      <div
        aria-hidden
        className="h-2 w-full border-b border-line"
        style={{
          backgroundImage:
            "repeating-linear-gradient(90deg, var(--line) 0 1px, transparent 1px 9px)",
          opacity: 0.5,
        }}
      />

      <div className="max-w-5xl mx-auto px-6 md:px-10 py-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-col gap-1">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-foreground-muted">
            © {year} Jesus O&apos;Bulan
          </p>
          <HudReadout label="STATUS" value="OPERATIONAL" />
        </div>

        <nav className="flex flex-wrap gap-x-6 gap-y-2 font-mono text-xs uppercase tracking-[0.15em]">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target={l.href.startsWith("http") ? "_blank" : undefined}
              rel={l.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="group inline-flex items-center gap-1.5 text-foreground-muted transition-colors hover:text-foreground"
            >
              {l.label}
              <span aria-hidden className="text-ink-muted transition-transform group-hover:translate-x-0.5">
                ↗
              </span>
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
};

export default Footer;

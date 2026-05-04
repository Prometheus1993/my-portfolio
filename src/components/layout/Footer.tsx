import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border mt-8">
      <div className="max-w-5xl mx-auto px-6 md:px-10 py-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
        <p className="text-sm text-foreground-muted">
          © {year} Jesus O&apos;Bulan
        </p>
        <div className="flex gap-6 text-sm">
          <a
            href="https://github.com/Prometheus1993"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground-muted hover:text-foreground transition-colors link-underline"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/jesus-o-9964802a2"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground-muted hover:text-foreground transition-colors link-underline"
          >
            LinkedIn
          </a>
          <a
            href="mailto:jesusobulan@hotmail.com"
            className="text-foreground-muted hover:text-foreground transition-colors link-underline"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

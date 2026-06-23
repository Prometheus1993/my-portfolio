"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCommandPalette } from "@/components/yorha/CommandPaletteContext";

const navLinks = [
  { href: "/#work", label: "Work" },
  { href: "/#capabilities", label: "Skills" },
  { href: "/#about", label: "About" },
  { href: "/#contact", label: "Contact" },
];

const Navbar = () => {
  const pathname = usePathname();
  const { setOpen } = useCommandPalette();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (path: string) =>
    path === "/" ? pathname === "/" : pathname.startsWith(path);

  return (
    <nav
      className={`sticky top-0 z-40 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-md bg-bone/85 border-b border-line"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 md:px-10 py-4 flex items-center justify-between">
        <Link
          href="/"
          className="group flex items-baseline gap-2 text-foreground transition-opacity hover:opacity-70"
        >
          <span className="font-display text-lg uppercase tracking-[0.2em]">
            Jesus O&apos;Bulan
          </span>
          <span className="hidden font-mono text-[10px] uppercase tracking-[0.2em] text-ink-muted sm:inline">
            [UNIT:DEV]
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-7 font-mono text-xs uppercase tracking-[0.18em]">
          {navLinks.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={`relative transition-colors ${
                  active
                    ? "text-foreground"
                    : "text-foreground-muted hover:text-foreground"
                }`}
              >
                <span
                  aria-hidden
                  className={`mr-1 text-red-ink transition-opacity ${
                    active ? "opacity-100" : "opacity-0"
                  }`}
                >
                  &gt;
                </span>
                {link.label}
              </Link>
            );
          })}

          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Open command menu"
            className="flex items-center gap-1.5 border border-line px-2 py-1 text-[10px] text-foreground-muted transition-colors hover:border-ink hover:text-foreground"
          >
            <span aria-hidden>⌘</span>K
          </button>
        </div>

        {/* Mobile controls */}
        <div className="flex items-center gap-1 md:hidden">
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Open command menu"
            className="p-2 font-mono text-xs text-foreground-muted"
          >
            ⌘K
          </button>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex flex-col gap-1.5 p-2 -mr-2"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            <span
              className={`block w-5 h-px bg-foreground transition-transform ${
                menuOpen ? "translate-y-[3px] rotate-45" : ""
              }`}
            />
            <span
              className={`block w-5 h-px bg-foreground transition-transform ${
                menuOpen ? "-translate-y-[3px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-line bg-bone">
          <div className="max-w-5xl mx-auto px-6 py-4 flex flex-col font-mono text-sm uppercase tracking-[0.15em]">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  aria-current={active ? "page" : undefined}
                  className={`py-3 ${active ? "text-foreground" : "text-foreground-muted"}`}
                >
                  <span aria-hidden className="mr-2 text-red-ink">
                    {active ? ">" : "·"}
                  </span>
                  {link.label}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

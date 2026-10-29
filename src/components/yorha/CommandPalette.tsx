"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { Command } from "cmdk";
import * as Dialog from "@radix-ui/react-dialog";
import { useCommandPalette } from "./CommandPaletteContext";
import { portfolioData } from "@/data/portfolio-data";
import { getAllCaseStudies } from "@/work/case-studies";

const ext = (url: string) => (url.startsWith("http") ? url : `https://${url}`);

const NAV = [
  { href: "/#work", label: "Work", hint: "Selected case studies" },
  { href: "/#capabilities", label: "Capabilities", hint: "Stack and skills" },
  { href: "/#about", label: "About", hint: "Background" },
  { href: "/#ask", label: "Ask", hint: "Chat with the assistant" },
  { href: "/#contact", label: "Contact", hint: "Get in touch" },
  { href: "/blog", label: "Blog", hint: "Writing and devlog" },
];

const WORK = getAllCaseStudies();

const EXTERNAL = [
  { label: "GitHub", href: ext(portfolioData.contact.github) },
  { label: "LinkedIn", href: ext(portfolioData.contact.linkedin) },
  { label: "Email", href: `mailto:${portfolioData.contact.email}` },
  { label: "Download CV (English)", href: "/cv-jesus-obulan-en.pdf" },
  { label: "Download CV (Dutch)", href: "/cv-jesus-obulan-nl.pdf" },
];

const itemClass =
  "flex cursor-pointer items-center justify-between gap-3 rounded-none px-3 py-2.5 text-sm text-ink " +
  "data-[selected=true]:bg-ink data-[selected=true]:text-bone outline-none transition-colors";

/**
 * ⌘K terminal command palette. cmdk (search/keyboard) inside a Radix Dialog
 * (focus trap, Esc-to-close, focus-return-to-trigger). Every command maps to a
 * real route or link, it is a power-user layer over the always-present <nav>.
 */
export default function CommandPalette() {
  const router = useRouter();
  const { open, setOpen } = useCommandPalette();

  const ALLOWED_HOSTS: string[] = []; // ACTION REQUIRED: Add your allowed hosts before merging
  const isSafeExternalUrl = (url: string, allowedHosts: string[]) => {
    if (!url) return false;
    try {
      const parsed = new URL(String(url).replace(/[\t\n\r]/g, ""));
      if (parsed.protocol !== "http:" && parsed.protocol !== "https:") return false;
      return allowedHosts.some(function (h) {
        return parsed.hostname === h || parsed.hostname.endsWith("." + h);
      });
    } catch (e) {
      return false;
    }
  };

  const go = (href: string, external = false) => {
    setOpen(false);
    if (external) {
      if (isSafeExternalUrl(href, ALLOWED_HOSTS)) window.open(href, "_blank", "noopener,noreferrer");
    }
    else router.push(href);
  };

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-ink/40 backdrop-blur-sm" />
        <Dialog.Content
          className="fixed left-1/2 top-[18%] z-50 w-[92vw] max-w-lg -translate-x-1/2 border border-line bg-bone-raised shadow-[0_24px_60px_-20px_rgba(69,65,56,0.5)]"
          aria-label="Command menu"
        >
          <Dialog.Title className="sr-only">Command menu</Dialog.Title>
          <Dialog.Description className="sr-only">
            Search and jump to any page, or open an external link.
          </Dialog.Description>

          <Command label="Command menu" loop className="font-mono">
            <div className="flex items-center gap-2 border-b border-line px-3">
              <span aria-hidden className="text-red-ink">&gt;</span>
              <Command.Input
                autoFocus
                placeholder="TYPE A COMMAND OR SEARCH…"
                className="h-12 w-full bg-transparent text-sm uppercase tracking-[0.1em] text-ink placeholder:text-ink-muted/70 outline-none"
              />
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close command menu"
                className="select-none border border-line px-1.5 py-0.5 text-[10px] uppercase tracking-widest text-ink-muted transition-colors hover:border-ink hover:text-ink"
              >
                Esc
              </button>
            </div>

            <Command.List className="max-h-[55vh] overflow-y-auto p-1.5">
              <Command.Empty className="px-3 py-6 text-center text-xs uppercase tracking-[0.15em] text-ink-muted">
                No results found.
              </Command.Empty>

              <Command.Group
                heading="Navigate"
                className="[&_[cmdk-group-heading]]:px-3 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-[10px] [&_[cmdk-group-heading]]:uppercase [&_[cmdk-group-heading]]:tracking-[0.2em] [&_[cmdk-group-heading]]:text-ink-muted"
              >
                {NAV.map((r) => (
                  <Command.Item
                    key={r.href}
                    value={`${r.label} ${r.hint}`}
                    onSelect={() => go(r.href)}
                    className={itemClass}
                  >
                    <span className="uppercase tracking-[0.08em]">{r.label}</span>
                    <span className="truncate text-[11px] normal-case tracking-normal text-ink-muted data-[selected=true]:text-bone/70">
                      {r.hint}
                    </span>
                  </Command.Item>
                ))}
              </Command.Group>

              <Command.Group
                heading="Case studies"
                className="mt-1 [&_[cmdk-group-heading]]:px-3 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-[10px] [&_[cmdk-group-heading]]:uppercase [&_[cmdk-group-heading]]:tracking-[0.2em] [&_[cmdk-group-heading]]:text-ink-muted"
              >
                {WORK.map((c) => (
                  <Command.Item
                    key={c.slug}
                    value={`${c.title} ${c.summary}`}
                    onSelect={() => go(`/work/${c.slug}`)}
                    className={itemClass}
                  >
                    <span className="uppercase tracking-[0.08em]">{c.shortTitle}</span>
                    <span className="text-[11px] tabular-nums text-ink-muted data-[selected=true]:text-bone/70">
                      {c.year}
                    </span>
                  </Command.Item>
                ))}
              </Command.Group>

              <Command.Group
                heading="External"
                className="mt-1 [&_[cmdk-group-heading]]:px-3 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-[10px] [&_[cmdk-group-heading]]:uppercase [&_[cmdk-group-heading]]:tracking-[0.2em] [&_[cmdk-group-heading]]:text-ink-muted"
              >
                {EXTERNAL.map((r) => (
                  <Command.Item
                    key={r.href}
                    value={r.label}
                    onSelect={() => go(r.href, true)}
                    className={itemClass}
                  >
                    <span className="uppercase tracking-[0.08em]">{r.label}</span>
                    <span aria-hidden className="text-[11px] text-ink-muted">↗</span>
                  </Command.Item>
                ))}
              </Command.Group>
            </Command.List>
          </Command>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

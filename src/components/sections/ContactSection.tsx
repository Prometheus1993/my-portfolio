"use client";

import React, { useState } from "react";
import FadeIn from "@/components/animations/FadeIn";

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus("error");
      setErrorMsg("Please fill in all fields.");
      return;
    }

    setStatus("sending");
    try {
      const fd = new FormData(e.currentTarget);
      const res = await fetch("https://formspree.io/f/mrbqejaa", {
        method: "POST",
        body: fd,
        headers: { Accept: "application/json" },
      });
      if (!res.ok) throw new Error("Network error");
      setStatus("sent");
      setFormData({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
      setErrorMsg("Something went wrong. Please try again.");
    }
  };

  return (
    <section className="max-w-3xl mx-auto px-6 md:px-10 pt-10 md:pt-14 pb-6">
      <FadeIn direction="up">
        <p className="text-xs uppercase tracking-[0.2em] text-foreground-muted mb-3">
          Contact
        </p>
        <h1 className="font-serif text-3xl md:text-5xl leading-tight tracking-tight text-foreground mb-6">
          Let&apos;s get in touch.
        </h1>
        <p className="text-sm md:text-base text-foreground-muted leading-relaxed mb-8 max-w-xl">
          Open to junior developer positions, freelance work, and collaborations.
          Drop a line below or reach me directly.
        </p>
      </FadeIn>

      {/* Direct links */}
      <FadeIn direction="up" delay={0.1}>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 border-y border-border py-4 mb-6 text-sm">
          <div>
            <p className="text-[11px] uppercase tracking-wider text-foreground-muted mb-1">
              Email
            </p>
            <a
              href="mailto:jesusobulan@hotmail.com"
              className="link-underline text-foreground"
            >
              jesusobulan@hotmail.com
            </a>
          </div>
          <div>
            <p className="text-[11px] uppercase tracking-wider text-foreground-muted mb-1">
              LinkedIn
            </p>
            <a
              href="https://www.linkedin.com/in/jesus-o-9964802a2"
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline text-foreground"
            >
              /in/jesus-o
            </a>
          </div>
          <div>
            <p className="text-[11px] uppercase tracking-wider text-foreground-muted mb-1">
              GitHub
            </p>
            <a
              href="https://github.com/Prometheus1993"
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline text-foreground"
            >
              @Prometheus1993
            </a>
          </div>
        </div>
      </FadeIn>

      {/* Form */}
      <FadeIn direction="up" delay={0.15}>
        {status === "sent" ? (
          <div className="border border-border p-5 text-sm">
            <p className="font-serif text-lg text-foreground mb-1">
              Message sent.
            </p>
            <p className="text-foreground-muted">
              Thanks — I&apos;ll get back to you soon.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 text-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-[11px] uppercase tracking-wider text-foreground-muted mb-1"
                >
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full bg-transparent border-b border-border py-2 text-foreground focus:outline-none focus:border-foreground transition-colors"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-[11px] uppercase tracking-wider text-foreground-muted mb-1"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full bg-transparent border-b border-border py-2 text-foreground focus:outline-none focus:border-foreground transition-colors"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-[11px] uppercase tracking-wider text-foreground-muted mb-1"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="w-full bg-transparent border-b border-border py-2 text-foreground focus:outline-none focus:border-foreground transition-colors resize-none"
              />
            </div>

            {status === "error" && (
              <p className="text-xs text-foreground-muted">{errorMsg}</p>
            )}

            <button
              type="submit"
              disabled={status === "sending"}
              className="link-underline text-foreground text-sm inline-flex items-center gap-2 disabled:opacity-50"
            >
              <span>{status === "sending" ? "Sending..." : "Send message"}</span>
              <span aria-hidden="true">→</span>
            </button>
          </form>
        )}
      </FadeIn>
    </section>
  );
};

export default ContactSection;

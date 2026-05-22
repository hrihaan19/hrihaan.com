"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
  { href: "#work",       label: "Work" },
  { href: "#leadership", label: "Leadership" },
  { href: "#now",        label: "Now" },
  { href: "#contact",    label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        borderBottom: scrolled ? `1px solid var(--border)` : "1px solid transparent",
        background: scrolled ? "color-mix(in srgb, var(--bg) 85%, transparent)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(12px)" : "none",
      }}
    >
      <div
        className="container-ed flex items-center justify-between"
        style={{ paddingBlock: "1.1rem" }}
      >
        {/* Wordmark */}
        <Link
          href="/"
          className="font-display text-sm tracking-tight transition-opacity duration-200 hover:opacity-60"
          style={{
            fontVariationSettings: '"opsz" 20, "wght" 300',
            color: "var(--fg)",
          }}
        >
          HB
        </Link>

        {/* Nav links */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-label transition-opacity duration-200 hover:opacity-100"
              style={{ color: "var(--fg-muted)", opacity: 0.7 }}
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-6">
          <ThemeToggle />
          <a
            href="mailto:hribhu19@gmail.com"
            className="text-label transition-opacity duration-200"
            style={{ color: "var(--fg-muted)", opacity: 0.7 }}
          >
            Email ↗
          </a>
        </div>
      </div>
    </header>
  );
}

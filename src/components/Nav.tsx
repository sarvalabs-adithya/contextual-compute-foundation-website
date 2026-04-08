"use client";

import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { Logo } from "@/components/Logo";

const links = [
  { href: "#context", label: "Context" },
  { href: "#papers", label: "Papers" },
] as const;

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  const onScroll = useCallback(() => {
    setScrolled(window.scrollY > 12);
  }, []);

  useEffect(() => {
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [onScroll]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ease-out ${
        scrolled
          ? "border-ccf-border/80 bg-ccf-bg/70 backdrop-blur-md"
          : "border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-5 py-4 md:px-8">
        <Link
          href="/"
          className="group flex items-center gap-3 text-ccf-fg outline-none transition-colors duration-300 hover:text-ccf-accent focus-visible:ring-2 focus-visible:ring-ccf-accent focus-visible:ring-offset-2 focus-visible:ring-offset-ccf-bg"
        >
          <Logo className="h-9 w-auto shrink-0 text-ccf-accent" aria-hidden />
          <span className="text-sm font-medium uppercase tracking-[0.18em] md:text-base">
            Contextual Compute
          </span>
        </Link>
        <ul className="flex items-center gap-6 md:gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="font-mono text-xs uppercase tracking-widest text-ccf-secondary outline-none transition-colors duration-300 ease-out hover:text-ccf-accent focus-visible:text-ccf-accent focus-visible:ring-2 focus-visible:ring-ccf-accent focus-visible:ring-offset-2 focus-visible:ring-offset-ccf-bg md:text-sm"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

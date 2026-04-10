"use client";

import { useState } from "react";
import { useTextScramble } from "@/lib/useTextScramble";

type PaperCardProps = {
  index: string;
  title: string;
  tag: string;
  description: string;
  href: string;
  external?: boolean;
};

export function PaperCard({ index, title, tag, description, href, external }: PaperCardProps) {
  const [titleHover, setTitleHover] = useState(false);
  const [linkFocus, setLinkFocus] = useState(false);
  const displayTitle = useTextScramble(title, titleHover || linkFocus);

  const isExternal = external ?? (href.startsWith("http") || href.startsWith("//"));

  const className =
    "paper-card group relative block overflow-hidden rounded-xl border border-ccf-border bg-ccf-surface p-6 outline-none transition-transform duration-300 ease-out active:scale-[0.985] md:p-8 focus-visible:ring-2 focus-visible:ring-ccf-accent focus-visible:ring-offset-2 focus-visible:ring-offset-ccf-bg";

  const inner = (
    <>
      <span
        className="pointer-events-none absolute left-0 right-0 top-0 z-10 block h-1 origin-top scale-y-0 bg-ccf-accent transition-transform duration-300 ease-out group-hover:scale-y-100 group-focus-visible:scale-y-100"
        aria-hidden
      />
      <span
        className="pointer-events-none absolute right-4 top-4 select-none font-mono text-5xl font-bold leading-none text-ccf-border/40 md:right-6 md:text-6xl"
        aria-hidden
      >
        {index}
      </span>
      <span className="font-mono text-xs uppercase tracking-widest text-ccf-muted">{tag}</span>
      <h3 className="relative z-[1] mt-4 pr-10 font-sans text-xl font-bold tracking-tight text-ccf-fg transition-colors duration-300 ease-out group-hover:text-ccf-accent group-focus-visible:text-ccf-accent md:text-2xl">
        <span
          onMouseEnter={() => setTitleHover(true)}
          onMouseLeave={() => setTitleHover(false)}
        >
          {displayTitle}
        </span>
      </h3>
      <p className="relative z-[1] mt-3 font-sans text-sm font-light leading-relaxed text-ccf-secondary md:text-[0.9375rem]">
        {description}
      </p>
      <p className="relative z-[1] mt-3 font-mono text-xs uppercase tracking-widest text-ccf-muted">Paper · 2024</p>
      <span
        className="mt-6 inline-flex translate-x-1 items-center gap-1 font-mono text-sm text-ccf-accent opacity-0 transition-all duration-300 ease-out group-hover:translate-x-0 group-hover:opacity-100 group-focus-visible:translate-x-0 group-focus-visible:opacity-100"
        aria-hidden
      >
        {isExternal ? "Open ↗" : "View →"}
      </span>
    </>
  );

  if (isExternal) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
        onFocus={() => setLinkFocus(true)}
        onBlur={() => setLinkFocus(false)}
      >
        {inner}
      </a>
    );
  }

  return (
    <a
      href={href}
      className={className}
      onFocus={() => setLinkFocus(true)}
      onBlur={() => setLinkFocus(false)}
    >
      {inner}
    </a>
  );
}

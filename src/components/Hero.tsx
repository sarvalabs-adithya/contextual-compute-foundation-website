"use client";

import Link from "next/link";
import { HeroCanvas } from "@/components/HeroCanvas";

export function Hero() {
  return (
    <section className="relative overflow-hidden px-6 pt-[100px] md:px-12 md:pt-[clamp(140px,18vh,200px)] pb-12 md:pb-8">
      <div className="hero relative z-10 mx-auto grid w-full max-w-[1200px] grid-cols-1 items-end gap-6 md:grid-cols-[1.3fr_0.7fr] md:gap-12">
        {/* Left — Wordmark */}
        <div className="hero-wordmark-clip">
          <h1 className="hero-name font-sans text-[clamp(2.6rem,12vw,5rem)] font-bold leading-[0.9] tracking-[-0.045em] md:text-[clamp(3rem,10.5vw,9rem)]">
            <span className="block">
              Contextual <span className="slash">/</span>
            </span>
            <span className="block">
              Compute <span className="slash">/</span>
            </span>
            <span className="block text-ccf-accent">Foundation</span>
          </h1>
        </div>

        {/* Right — Sub text + CTA */}
        <div className="hero-subtext mt-6 self-end md:mt-0">
          <span className="mb-5 block h-[2px] w-[30px] bg-ccf-accent" aria-hidden />
          <p className="max-w-[360px] font-sans text-[clamp(1.1rem,1.8vw,1.4rem)] font-medium leading-[1.35] tracking-[-0.01em] text-ccf-fg">
            Computing has always known what, where, and how. The missing dimension is WHO — the participant.
          </p>
          <p className="mt-5 max-w-[340px] font-sans text-[0.82rem] font-light leading-[1.7] text-ccf-secondary">
            Contextual Compute is the general theory that completes the computational space by establishing WHO as the
            fourth dimension. CCF stewards that standard — building the open foundation for a layer of the internet
            where systems compute over value with participant agency, not just information.
          </p>
          <div className="mt-7">
            <Link
              href="#papers"
              className="inline-block rounded-[4px] bg-ccf-accent px-5 py-2.5 font-mono text-[0.65rem] font-medium uppercase tracking-[0.04em] text-white shadow-sm transition-all duration-300 ease-out hover:-translate-y-px hover:bg-ccf-accent-hover hover:shadow-[0_4px_16px_rgba(212,120,47,0.2)] focus-visible:ring-2 focus-visible:ring-ccf-accent focus-visible:ring-offset-2 focus-visible:ring-offset-ccf-bg active:translate-y-0 active:scale-[0.98]"
            >
              Read the papers ↗
            </Link>
          </div>
        </div>
      </div>

      {/* Animation strip — flush below hero content */}
      <div className="relative z-10 mt-6 hidden pb-12 md:block">
        <HeroCanvas />
      </div>
    </section>
  );
}

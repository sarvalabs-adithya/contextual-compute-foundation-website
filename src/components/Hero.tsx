import Link from "next/link";
import { HeroCircuit } from "@/components/HeroCircuit";

export function Hero() {
  return (
    <section className="relative flex min-h-[100dvh] flex-col justify-end overflow-hidden px-5 pb-16 pt-28 md:px-10 md:pb-24 md:pt-32">
      <HeroCircuit />

      <div className="relative z-10 mx-auto w-full max-w-6xl">
        <div className="hero-wordmark-clip">
          <h1 className="font-sans text-[clamp(3rem,10.5vw,9rem)] font-bold leading-[0.92] tracking-[-0.02em]">
            <span className="block">
              Contextual <span className="text-ccf-muted">/</span>
            </span>
            <span className="block">
              Compute <span className="text-ccf-muted">/</span>
            </span>
            <span className="block text-ccf-accent">Foundation</span>
          </h1>
        </div>

        <div className="mt-10 max-w-2xl border-l-2 border-ccf-accent pl-6 md:mt-14">
          <p className="text-base leading-relaxed text-ccf-secondary md:text-lg">
            A participant-centric framework for the digitally interacting world. Humanising interactions for a happier
            digital society.
          </p>
        </div>

        <div className="mt-8 md:mt-10">
          <Link
            href="#papers"
            className="inline-flex items-center gap-1 text-sm font-semibold text-ccf-accent outline-none transition-colors duration-300 ease-out hover:text-ccf-accent-hover focus-visible:ring-2 focus-visible:ring-ccf-accent focus-visible:ring-offset-2 focus-visible:ring-offset-ccf-bg md:text-base"
          >
            Read the papers ↗
          </Link>
        </div>
      </div>
    </section>
  );
}

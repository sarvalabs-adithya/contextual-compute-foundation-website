"use client";

import { motion, useReducedMotion } from "framer-motion";
import { PaperCard } from "@/components/PaperCard";

const papers = [
  {
    index: "01",
    tag: "CC0",
    title: "On the Truth of Happiness",
    description:
      "Why the purpose of computation must be human happiness — the philosophical foundation of the series.",
    href: "/docs/CC0.pdf",
    external: true,
    year: "2018",
  },
  {
    index: "02",
    tag: "CC1",
    title: "On the Truth of Value",
    description: "Why value and information are categorically different, and why that difference changes everything.",
    year: "2018",
    locked: true,
  },
  {
    index: "03",
    tag: "CC2",
    title: "On the Structure of Value",
    description: "The mathematical proof that value cannot be computed on information machines without destruction.",
    href: "/docs/CC2.pdf",
    external: true,
    year: "2024",
  },
  {
    index: "04",
    tag: "CC3",
    title: "On the Truth of Computation",
    description: "Introducing the K-Machine — the general theory of computation with WHO as the fourth dimension.",
    year: "2021",
    locked: true,
  },
  {
    index: "05",
    tag: "CC4",
    title: "On the Truth of Interaction",
    description: "The operational semantics of participant-indexed computation — how WHO interacts, formally.",
    year: "2022",
    locked: true,
  },
  {
    index: "06",
    tag: "CC5",
    title: "On the Design of Value",
    description: "The normative specification — what any system must implement to compute over value correctly.",
    year: "2023",
    locked: true,
  },
] as const;

const fade = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export function Papers() {
  const reduce = useReducedMotion() === true;

  return (
    <section id="papers" className="scroll-mt-24 px-5 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-6xl">
        <motion.div
          className="mb-12 flex flex-col justify-between gap-4 sm:flex-row sm:items-end md:mb-16"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.35 }}
          variants={fade}
          transition={{ duration: reduce ? 0 : 0.7, ease: "easeOut" }}
        >
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-ccf-fg md:text-4xl">Published research</h2>
            <p className="mt-2 max-w-[480px] font-sans text-[0.78rem] font-light leading-[1.5] text-ccf-muted">
              Published by Sarva Labs. Hosted by CCF as part of the Contextual Compute Publication Program.
            </p>
          </div>
          <p className="font-mono text-sm text-ccf-secondary md:text-base">6 papers</p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: reduce ? 0 : 0.14,
              },
            },
          }}
        >
          {papers.map((p) => (
            <motion.div
              key={`${p.index}-${p.tag}`}
              variants={fade}
              transition={{ duration: reduce ? 0 : 0.7, ease: "easeOut" }}
            >
              <PaperCard
                index={p.index}
                title={p.title}
                tag={p.tag}
                description={p.description}
                href={"href" in p ? p.href : undefined}
                external={"external" in p ? p.external : undefined}
                year={"year" in p ? p.year : undefined}
                locked={"locked" in p ? p.locked : undefined}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

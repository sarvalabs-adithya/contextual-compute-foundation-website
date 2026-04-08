"use client";

import { motion, useReducedMotion } from "framer-motion";
import { PaperCard } from "@/components/PaperCard";

const papers = [
  {
    index: "CC0",
    title: "On the Truth of Happiness",
    tag: "Vision",
    href: "https://papers.moi.technology/docs/on-the-truth-of-happiness",
    external: true,
  },
  {
    index: "CC1",
    title: "On the Truth of Value",
    tag: "Concept",
    href: "#",
    external: false,
  },
  {
    index: "CC2",
    title: "On the Truth of Structure of Value",
    tag: "Math",
    href: "#",
    external: false,
  },
  {
    index: "CC3",
    title: "On the Truth of Compute",
    tag: "CC",
    href: "#",
    external: false,
  },
  {
    index: "CC4",
    title: "On the Truth of Interaction",
    tag: "PIC Semantics",
    href: "#",
    external: false,
  },
  {
    index: "CC5",
    title: "On the Design of Value",
    tag: "CC Protocol Spec",
    href: "#",
    external: false,
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
          <h2 className="text-3xl font-bold tracking-tight text-ccf-fg md:text-4xl">Published research</h2>
          <p className="font-mono text-sm text-ccf-secondary md:text-base">6 papers</p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 md:gap-6"
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
              key={p.index}
              variants={fade}
              transition={{ duration: reduce ? 0 : 0.7, ease: "easeOut" }}
              
            >
              <PaperCard index={p.index} title={p.title} tag={p.tag} href={p.href} external={p.external} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

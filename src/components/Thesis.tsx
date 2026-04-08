"use client";

import { motion, useReducedMotion } from "framer-motion";

const fade = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export function Thesis() {
  const reduce = useReducedMotion() === true;

  return (
    <section id="context" className="scroll-mt-24 px-5 py-24 md:px-10 md:py-32">
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2 md:gap-16 lg:gap-24">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          variants={fade}
          transition={{ duration: reduce ? 0 : 0.7, ease: "easeOut" }}
        >
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-ccf-muted md:text-sm">The Thesis</p>
          <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-ccf-fg md:text-4xl lg:text-[2.75rem] lg:leading-[1.1]">
            Context — the fundamental unit of participant-centric computation
          </h2>
        </motion.div>

        <motion.div
          className="space-y-6 text-base leading-relaxed text-ccf-secondary md:text-lg"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: reduce ? 0 : 0.12,
              },
            },
          }}
        >
          {[
            "Context dynamically evolves from the participant — shaped by their roles, behaviour, interactions, preferences, and values.",
            "Context is not just an identity or metadata. It's who you are, what you need, and why it matters — the digital representation of the participant.",
            "Traditional systems compute over data and logic. Contextual systems compute over participants and their context. It's a new way to design digital networks — where people drive technology, not the other way around.",
          ].map((p) => (
            <motion.p
              key={p.slice(0, 24)}
              variants={fade}
              transition={{ duration: reduce ? 0 : 0.7, ease: "easeOut" }}
            >
              {p}
            </motion.p>
          ))}
          <motion.blockquote
            variants={fade}
            transition={{ duration: reduce ? 0 : 0.7, ease: "easeOut" }}
            className="border-l-2 border-ccf-accent bg-ccf-accent-dim px-5 py-4 text-lg font-semibold text-ccf-fg md:text-xl"
          >
            Computation for value, not just information.
          </motion.blockquote>
        </motion.div>
      </div>
    </section>
  );
}

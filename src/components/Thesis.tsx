"use client";

import { motion, useReducedMotion } from "framer-motion";

const fade = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export function Thesis() {
  const reduce = useReducedMotion() === true;

  return (
    <section id="thesis" className="scroll-mt-24 px-5 py-24 md:px-10 md:py-32">
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
            <span className="text-ccf-accent">WHO</span>
            <span> — the missing dimension of computation</span>
          </h2>
          <blockquote className="mt-12 border-t border-ccf-border pt-6 font-sans text-[1.05rem] italic leading-relaxed text-ccf-secondary">
            30 degrees in New York is context, information. I am cold in New York is participant Context, value.
            Classical compute supports the former. Contextual Compute enables the latter.
          </blockquote>
          <blockquote className="mt-6 border-t border-ccf-border pt-6 font-sans text-[1.05rem] italic leading-relaxed text-ccf-secondary">
            It&apos;s all value. Absence of participant makes it information.
          </blockquote>
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
          <motion.p variants={fade} transition={{ duration: reduce ? 0 : 0.7, ease: "easeOut" }}>
            Every computing system built today operates on three dimensions —{" "}
            <strong className="font-semibold text-ccf-fg">
              what to compute, where to store it, and how to process it
            </strong>
            . These three dimensions are powerful enough to run today&apos;s internet — an internet of information, built
            as a tool. But we no longer just connect through technology, we exist through it. This demands a new dimension
            of computation — the human dimension, <strong className="font-semibold text-ccf-fg">the WHO</strong>.
          </motion.p>
          <motion.p variants={fade} transition={{ duration: reduce ? 0 : 0.7, ease: "easeOut" }}>
            WHO is not an identity, a wallet, or a profile. Those are names — labels assigned to you by systems that
            don&apos;t know you. <strong className="font-semibold text-ccf-fg">WHO is you</strong> — your existence in
            computation, represented by your{" "}
            <strong className="font-semibold text-ccf-fg">participant Context</strong>. Accumulated through every
            interaction, every application, every role. Controlled by you and your actions alone.
          </motion.p>
          <motion.p variants={fade} transition={{ duration: reduce ? 0 : 0.7, ease: "easeOut" }}>
            When WHO is a dimension of the machine, participant and value computation become native. Networks become
            stateful. Trust becomes infrastructure. Assets become safe. Agents become authorised. Models become ethical.
            With fundamental human agency,{" "}
            <strong className="font-semibold text-ccf-fg">
              computation becomes personal, compassionate, and valuable
            </strong>
            .
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}

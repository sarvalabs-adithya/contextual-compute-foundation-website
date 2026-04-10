"use client";

import { motion, useReducedMotion } from "framer-motion";

const fade = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export function InterstitialQuote() {
  const reduce = useReducedMotion() === true;

  return (
    <section className="px-5 py-16 md:px-10">
      <motion.div
        className="mx-auto max-w-[680px] text-center"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={fade}
        transition={{ duration: reduce ? 0 : 0.7, ease: "easeOut" }}
      >
        <span
          className="mx-auto mb-6 block h-1.5 w-1.5 rounded-full bg-ccf-accent"
          aria-hidden
        />
        <p className="font-sans text-[clamp(1.1rem,2vw,1.35rem)] italic leading-[1.6] text-[#2A2A2A]">
          &quot;You are no longer a row in a database, a wallet in a contract, or a profile in an app. You have
          independent existence. This is what the digitally interacting world requires.&quot;
        </p>
      </motion.div>
    </section>
  );
}

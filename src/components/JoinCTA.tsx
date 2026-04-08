"use client";

import { motion, useReducedMotion } from "framer-motion";
import { FormEvent, useState } from "react";
import { Logo } from "@/components/Logo";

const fade = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export function JoinCTA() {
  const reduce = useReducedMotion() === true;
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setMessage("");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = (await res.json()) as { ok?: boolean; error?: string };

      if (!res.ok) {
        setStatus("error");
        setMessage(data.error ?? "Something went wrong.");
        return;
      }

      setStatus("success");
      setMessage("You’re on the list. We’ll be in touch.");
      setEmail("");
    } catch {
      setStatus("error");
      setMessage("Something went wrong. Try again.");
    }
  }

  return (
    <section id="why" className="scroll-mt-24 px-5 py-28 md:px-10 md:py-40">
      <motion.div
        className="mx-auto flex max-w-3xl flex-col items-center text-center"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: reduce ? 0 : 0.1 } },
        }}
      >
        <motion.div
          variants={fade}
          transition={{ duration: reduce ? 0 : 0.7, ease: "easeOut" }}
        >
          <Logo className="mx-auto h-16 w-auto text-ccf-accent md:h-20" aria-hidden />
        </motion.div>

        <motion.h2
          className="mt-8 text-3xl font-bold tracking-tight text-ccf-fg md:text-5xl lg:text-6xl"
          variants={fade}
          transition={{ duration: reduce ? 0 : 0.7, ease: "easeOut" }}
        >
          Join the Foundation
        </motion.h2>

        <motion.p
          className="mt-5 max-w-xl text-base leading-relaxed text-ccf-secondary md:text-lg"
          variants={fade}
          transition={{ duration: reduce ? 0 : 0.7, ease: "easeOut" }}
        >
          Be part of a participant-centric network built by real people, for
          real people. No gatekeepers — just shared purpose.
        </motion.p>

        <motion.div
          className="mt-10 w-full max-w-lg"
          variants={fade}
          transition={{ duration: reduce ? 0 : 0.7, ease: "easeOut" }}
        >
          {status === "success" ? (
            <p className="rounded-xl border border-ccf-border bg-ccf-surface px-5 py-4 text-sm text-ccf-secondary md:text-base">
              {message}
            </p>
          ) : (
            <form
              onSubmit={onSubmit}
              className="flex flex-col gap-3 sm:flex-row sm:items-stretch sm:gap-2"
            >
              <label htmlFor="join-email" className="sr-only">
                Email address
              </label>
              <input
                id="join-email"
                name="email"
                type="email"
                autoComplete="email"
                required
                placeholder="you@example.com"
                value={email}
                onChange={(ev) => {
                  setEmail(ev.target.value);
                  if (status === "error") {
                    setStatus("idle");
                    setMessage("");
                  }
                }}
                disabled={status === "loading"}
                aria-invalid={status === "error"}
                aria-describedby={message ? "join-email-hint" : undefined}
                className="min-h-12 w-full flex-1 rounded-full border border-ccf-border bg-ccf-surface px-5 text-sm text-ccf-fg outline-none transition-colors duration-300 placeholder:text-ccf-muted focus:border-ccf-accent focus:ring-2 focus:ring-ccf-accent/25 disabled:opacity-60 md:text-base"
              />
              <button
                type="submit"
                disabled={status === "loading"}
                className="min-h-12 shrink-0 rounded-full bg-ccf-accent px-8 text-sm font-semibold text-white shadow-sm transition-all duration-300 ease-out hover:bg-ccf-accent-hover hover:shadow-md active:scale-[0.97] disabled:pointer-events-none disabled:opacity-60 md:text-base"
              >
                {status === "loading" ? "Joining…" : "Join"}
              </button>
            </form>
          )}
          {status === "error" && message ? (
            <p id="join-email-hint" className="mt-3 text-left text-sm text-red-600" role="alert">
              {message}
            </p>
          ) : null}
        </motion.div>
      </motion.div>
    </section>
  );
}

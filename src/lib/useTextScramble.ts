"use client";

import { useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

const POOL = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

function randomGlyph(char: string): string {
  if (!/[a-zA-Z0-9]/.test(char)) return char;
  return POOL[Math.floor(Math.random() * POOL.length)] ?? "X";
}

function buildDisplay(original: string, resolved: number): string {
  const chars = Array.from(original);
  return chars
    .map((c, i) => {
      if (i < resolved) return c;
      return randomGlyph(c);
    })
    .join("");
}

/**
 * Matrix-style decode: unresolved characters randomize; every 25ms, two more
 * characters resolve from the left.
 */
export function useTextScramble(original: string, active: boolean): string {
  const reduceMotion = useReducedMotion() === true;
  const [display, setDisplay] = useState(original);

  useEffect(() => {
    if (!active || reduceMotion) {
      setDisplay(original);
      return;
    }

    const len = original.length;
    let resolved = 0;

    setDisplay(buildDisplay(original, 0));

    const id = window.setInterval(() => {
      resolved = Math.min(resolved + 2, len);
      setDisplay(buildDisplay(original, resolved));
      if (resolved >= len) {
        window.clearInterval(id);
      }
    }, 25);

    return () => window.clearInterval(id);
  }, [active, original, reduceMotion]);

  return display;
}

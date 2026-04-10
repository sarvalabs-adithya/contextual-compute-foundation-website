"use client";

import { useCallback, useEffect, useRef } from "react";

const CSS_H = 140;

const FONT_SANS = '"Cabinet Grotesk", ui-sans-serif, system-ui, sans-serif';
const FONT_MONO =
  'var(--font-ibm-plex-mono), "IBM Plex Mono", ui-monospace, monospace';

function cubicInOut(t: number): number {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

function lerp(a: number, b: number, t: number): number {
  return a + (b - a) * t;
}

function clamp01(v: number): number {
  return Math.max(0, Math.min(1, v));
}

function phase(t: number, start: number, end: number): number {
  return clamp01((t - start) / (end - start));
}

export function HeroCanvas() {
  const ref = useRef<HTMLCanvasElement>(null);
  const raf = useRef(0);
  const frame = useRef(0);

  const resize = useCallback(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const dpr = window.devicePixelRatio || 1;
    const cssW = canvas.offsetWidth;
    canvas.width = Math.round(cssW * dpr);
    canvas.height = Math.round(CSS_H * dpr);
    const ctx = canvas.getContext("2d");
    if (ctx) ctx.scale(dpr, dpr);
  }, []);

  useEffect(() => {
    resize();
    window.addEventListener("resize", resize);

    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    function draw() {
      if (!ctx || !canvas) return;

      const W = canvas.offsetWidth;
      const H = CSS_H;

      const f = frame.current;
      frame.current++;

      ctx.clearRect(0, 0, W, H);

      const globalAlpha = Math.min(f / 30, 1);

      // Centered positions
      const words = [
        { text: "WHAT", sub: "Logic", x: W * 0.2 },
        { text: "WHERE", sub: "Storage", x: W * 0.37 },
        { text: "HOW", sub: "Process", x: W * 0.54 },
      ];
      const platX0 = W * 0.12;
      const platX1 = W * 0.62;
      const platX1Ext = W * 0.8;
      const whoEndX = W * 0.72;
      const whoStartY = H * 0.85;
      const platY = H * 0.5;

      // One-shot phases (frame-based, clamp at end)
      const whoFadeIn = phase(f, 180, 290);
      const whoRise = cubicInOut(phase(f, 290, 380));
      const whoSettle = cubicInOut(phase(f, 380, 490));
      const platformExtend = cubicInOut(phase(f, 380, 450));
      const whoAlpha = whoFadeIn;
      const pulseT = phase(f, 440, 490);

      // WHO position — rises vertically
      const riseY = lerp(whoStartY, whoStartY - (whoStartY - platY) * 0.6, whoRise);
      const whoX = whoEndX;
      const whoY = whoSettle > 0 ? lerp(riseY, platY, whoSettle) : riseY;

      // Platform line
      const platEnd = lerp(platX1, platX1Ext, platformExtend);
      ctx.save();
      ctx.strokeStyle = `rgba(17,17,17,${0.25 * globalAlpha})`;
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.moveTo(platX0, platY);
      ctx.lineTo(platEnd, platY);
      ctx.stroke();
      ctx.restore();

      // WHAT/WHERE/HOW dots
      for (let i = 0; i < words.length; i++) {
        ctx.beginPath();
        ctx.arc(words[i].x, platY, 2.5, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(17,17,17,${0.35 * globalAlpha})`;
        ctx.fill();
      }

      // WHAT/WHERE/HOW text + sub-labels
      ctx.textAlign = "center";
      for (let i = 0; i < words.length; i++) {
        const w = words[i];

        ctx.textBaseline = "bottom";
        ctx.font = `500 28px ${FONT_SANS}`;
        ctx.fillStyle = `rgba(17,17,17,${0.75 * globalAlpha})`;
        ctx.fillText(w.text, w.x, platY - 10);

        ctx.textBaseline = "top";
        ctx.font = `400 11px ${FONT_MONO}`;
        ctx.fillStyle = `rgba(153,153,153,${0.65 * globalAlpha})`;
        ctx.fillText(w.sub, w.x, platY + 8);
      }

      // WHO
      if (whoAlpha > 0) {
        const drawY = whoY;

        // Glow
        const grad = ctx.createRadialGradient(whoX, drawY - 8, 0, whoX, drawY - 8, 28);
        grad.addColorStop(0, `rgba(212,120,47,${0.06 * whoAlpha * globalAlpha})`);
        grad.addColorStop(1, `rgba(212,120,47,0)`);
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(whoX, drawY - 8, 28, 0, Math.PI * 2);
        ctx.fill();

        // WHO text
        ctx.textAlign = "center";
        ctx.textBaseline = "bottom";
        ctx.font = `700 34px ${FONT_SANS}`;
        ctx.fillStyle = `rgba(212,120,47,${whoAlpha * globalAlpha})`;
        ctx.fillText("WHO", whoX, drawY - 10);

        // Dot + sub-label when on platform
        if (whoSettle > 0.5) {
          const dotAlpha = (whoSettle - 0.5) * 2;

          ctx.beginPath();
          ctx.arc(whoEndX, platY, 2.5, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(212,120,47,${0.35 * dotAlpha * globalAlpha})`;
          ctx.fill();

          ctx.textBaseline = "top";
          ctx.font = `500 11px ${FONT_MONO}`;
          ctx.fillStyle = `rgba(212,120,47,${0.65 * dotAlpha * globalAlpha})`;
          ctx.fillText("Participant", whoEndX, platY + 8);
        }

        // Pulse ring (plays once then clamps to 1, so it disappears)
        if (pulseT > 0 && pulseT < 1) {
          const r = 12 + pulseT * 33;
          const alpha = (1 - pulseT) * 0.15 * globalAlpha;
          ctx.beginPath();
          ctx.arc(whoEndX, platY, r, 0, Math.PI * 2);
          ctx.strokeStyle = `rgba(212,120,47,${alpha})`;
          ctx.lineWidth = 1.2;
          ctx.stroke();
        }
      }

      raf.current = requestAnimationFrame(draw);
    }

    draw();

    return () => {
      cancelAnimationFrame(raf.current);
      window.removeEventListener("resize", resize);
    };
  }, [resize]);

  return (
    <div className="w-full" style={{ height: CSS_H }} aria-hidden>
      <canvas ref={ref} className="h-full w-full" style={{ width: "100%", height: CSS_H }} />
    </div>
  );
}

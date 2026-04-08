"use client";

const accent = "#D4782F";

type LineProps = {
  d: string;
  delay: string;
};

function Line({ d, delay }: LineProps) {
  return (
    <path
      pathLength={1}
      d={d}
      fill="none"
      stroke={accent}
      strokeWidth={0.35}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="circuit-line"
      style={{ animationDelay: delay }}
    />
  );
}

type NodeProps = { cx: number; cy: number; delay: string };

function Node({ cx, cy, delay }: NodeProps) {
  return (
    <circle
      cx={cx}
      cy={cy}
      r={0.55}
      fill={accent}
      className="circuit-node"
      style={{ animationDelay: delay }}
    />
  );
}

export function HeroCircuit() {
  return (
    <div
      className="pointer-events-none absolute right-[-8%] top-1/2 z-0 w-[min(92vw,560px)] -translate-y-1/2 opacity-[0.04] md:right-0"
      aria-hidden
    >
      <svg viewBox="0 0 100 100" className="h-auto w-full" fill="none" xmlns="http://www.w3.org/2000/svg">
        <Line d="M8 52 H32 V28 H58" delay="0s" />
        <Line d="M58 28 V48 H78" delay="0.12s" />
        <Line d="M22 68 H44 V52" delay="0.24s" />
        <Line d="M44 52 H62 V72 H88" delay="0.36s" />
        <Line d="M12 32 H28 V18 H70 V36" delay="0.48s" />
        <Line d="M70 36 H88 V58 H52" delay="0.6s" />
        <Line d="M32 82 H52 V64 H72" delay="0.72s" />
        <Line d="M6 72 H18 V88 H40" delay="0.84s" />
        <Node cx={8} cy={52} delay="0.95s" />
        <Node cx={58} cy={28} delay="1s" />
        <Node cx={78} cy={48} delay="1.05s" />
        <Node cx={44} cy={52} delay="1.1s" />
        <Node cx={88} cy={72} delay="1.15s" />
        <Node cx={70} cy={36} delay="1.2s" />
        <Node cx={52} cy={58} delay="1.25s" />
        <Node cx={32} cy={82} delay="1.3s" />
        <Node cx={40} cy={88} delay="1.35s" />
      </svg>
    </div>
  );
}

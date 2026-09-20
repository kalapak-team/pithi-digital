"use client";

import { useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type FlipCardProps = {
  front: ReactNode;
  back: ReactNode;
  className?: string;
};

/** Inspired by React Bits Flip Card: https://reactbits.dev/micro/flip-card */
export default function FlipCard({ front, back, className }: FlipCardProps) {
  const [flipped, setFlipped] = useState(false);

  return (
    <button
      type="button"
      className={cn("group relative block h-full w-full text-left", className)}
      style={{ perspective: "1200px" }}
      onClick={() => setFlipped((v) => !v)}
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
      aria-pressed={flipped}
    >
      <div
        className="relative h-full w-full transition-transform duration-700 [transform-style:preserve-3d]"
        style={{ transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)" }}
      >
        <div className="absolute inset-0 [backface-visibility:hidden]">
          {front}
        </div>
        <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)]">
          {back}
        </div>
      </div>
    </button>
  );
}

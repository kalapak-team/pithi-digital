"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

type ScrollExpandProps = {
  src: string;
  alt: string;
  className?: string;
};

/** Inspired by React Bits Scroll Expand: https://reactbits.dev/animations/scroll-expand */
export default function ScrollExpand({ src, alt, className }: ScrollExpandProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const onScroll = () => {
      const rect = el.getBoundingClientRect();
      const view = window.innerHeight;
      const start = view * 0.85;
      const end = view * 0.25;
      const raw = (start - rect.top) / (start - end);
      setProgress(Math.min(1, Math.max(0, raw)));
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const radius = 24 - progress * 16;
  const scale = 0.88 + progress * 0.12;

  return (
    <div ref={ref} className={cn("relative w-full", className)}>
      <div
        className="relative aspect-[16/10] overflow-hidden border border-line shadow-sm transition-[border-radius,transform] duration-150"
        style={{
          borderRadius: `${radius}px`,
          transform: `scale(${scale})`,
        }}
      >
        <Image src={src} alt={alt} fill className="object-cover object-top" sizes="100vw" />
      </div>
    </div>
  );
}

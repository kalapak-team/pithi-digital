"use client";

import Image from "next/image";
import { useEffect, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

export type DeviceSlide = {
  src: string;
  alt: string;
  label?: string;
};

type MacbookFrameProps = {
  slides: DeviceSlide[];
  className?: string;
  intervalMs?: number;
  footer?: ReactNode;
};

/** MacBook mock with auto-advancing screen slides */
export default function MacbookFrame({
  slides,
  className,
  intervalMs = 4000,
  footer,
}: MacbookFrameProps) {
  const [index, setIndex] = useState(0);
  const total = slides.length;

  useEffect(() => {
    if (total <= 1) return;
    const id = window.setInterval(() => {
      setIndex((current) => (current + 1) % total);
    }, intervalMs);
    return () => window.clearInterval(id);
  }, [total, intervalMs]);

  const active = slides[index] ?? slides[0];

  return (
    <div className={cn("relative mx-auto w-full max-w-4xl", className)}>
      {/* Lid — slightly inset so the base can flare out */}
      <div className="relative mx-[4%] overflow-hidden rounded-t-[0.85rem] border border-[#2a2a2a] bg-[#1a1a1a] shadow-2xl sm:mx-[5%] sm:rounded-t-[1.1rem]">
        <div className="relative flex h-5 items-center justify-center bg-[#1a1a1a] sm:h-6">
          <span className="size-1.5 rounded-full bg-[#0d0d0d] ring-1 ring-[#333] sm:size-2" />
        </div>

        <div className="relative mx-1.5 mb-1.5 aspect-16/10 overflow-hidden rounded-[0.2rem] bg-page sm:mx-2 sm:mb-2 sm:rounded-[0.35rem]">
          {slides.map((slide, i) => (
            <div
              key={slide.src + slide.alt}
              className={cn(
                "absolute inset-0 transition-opacity duration-700",
                i === index ? "opacity-100" : "opacity-0",
              )}
            >
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 70vw"
                priority={i === 0}
              />
            </div>
          ))}

          {active?.label ? (
            <div className="absolute bottom-3 left-3 rounded-full bg-ink/75 px-3 py-1 text-[0.65rem] uppercase tracking-[0.06rem] text-white backdrop-blur-sm">
              {active.label}
            </div>
          ) : null}
        </div>
      </div>

      {/* Hinge */}
      <div className="relative mx-[2%] h-2.5 rounded-b-[0.35rem] bg-gradient-to-b from-[#d0d0d0] via-[#b4b4b4] to-[#9a9a9a] sm:h-3">
        <div className="absolute inset-x-[16%] top-0 h-px bg-white/45" />
        <div className="absolute inset-x-[40%] bottom-0.5 h-1 rounded-full bg-[#6a6a6a]/45 sm:h-1.5" />
      </div>

      {/* Base — full width, rounded front lip */}
      <div className="relative h-3.5 rounded-b-[0.9rem] bg-gradient-to-b from-[#c8c8c8] via-[#a8a8a8] to-[#8c8c8c] shadow-[0_18px_40px_-12px_rgba(26,22,8,0.45)] sm:h-4.5 sm:rounded-b-[1.15rem]">
        <div className="absolute inset-x-[24%] top-0 h-px bg-white/35" />
        <div className="absolute inset-x-0 bottom-0 h-1.5 rounded-b-[0.9rem] bg-gradient-to-b from-transparent to-black/20 sm:rounded-b-[1.15rem]" />
      </div>

      {total > 1 ? (
        <div className="mt-4 flex items-center justify-center gap-2">
          {slides.map((slide, i) => (
            <button
              key={slide.src + slide.alt}
              type="button"
              aria-label={slide.label ?? `Slide ${i + 1}`}
              onClick={() => setIndex(i)}
              className={cn(
                "h-2 rounded-full transition-all",
                i === index ? "w-7 bg-brand-dark" : "w-2 bg-line",
              )}
            />
          ))}
        </div>
      ) : null}

      {footer}
    </div>
  );
}

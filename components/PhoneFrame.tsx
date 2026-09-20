"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import type { DeviceSlide } from "@/components/MacbookFrame";

type PhoneFrameProps = {
  slides: DeviceSlide[];
  className?: string;
  intervalMs?: number;
  showMeta?: boolean;
};

/** Phone mock with auto-advancing screen slides */
export default function PhoneFrame({
  slides,
  className,
  intervalMs = 3500,
  showMeta = true,
}: PhoneFrameProps) {
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
    <div className={cn("mx-auto w-full max-w-[18rem]", className)}>
      <div className="relative overflow-hidden rounded-[2rem] border-[6px] border-ink bg-ink shadow-xl">
        {/* Dynamic Island */}
        <div className="absolute left-1/2 top-2.5 z-20 h-5 w-20 -translate-x-1/2 rounded-full bg-black" />

        <div className="relative aspect-[9/16] overflow-hidden bg-page">
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
                sizes="288px"
                priority={i === 0}
              />
            </div>
          ))}
        </div>
      </div>

      {showMeta ? (
        <>
          <div className="mt-4 px-1 text-center">
            <p className="text-[0.7rem] uppercase tracking-[0.06rem] text-brand-dark">
              Mobile
            </p>
            <p className="mt-1 font-medium text-ink">
              {active?.label ?? "App-ready guest & planner view"}
            </p>
          </div>

          {total > 1 ? (
            <div className="mt-3 flex items-center justify-center gap-2">
              {slides.map((slide, i) => (
                <button
                  key={slide.src + slide.alt}
                  type="button"
                  aria-label={slide.label ?? `Slide ${i + 1}`}
                  onClick={() => setIndex(i)}
                  className={cn(
                    "h-2 rounded-full transition-all",
                    i === index ? "w-6 bg-brand-dark" : "w-2 bg-line",
                  )}
                />
              ))}
            </div>
          ) : null}
        </>
      ) : null}
    </div>
  );
}

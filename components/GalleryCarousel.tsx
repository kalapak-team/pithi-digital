"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { gallerySlides } from "@/lib/media";
import { cn } from "@/lib/utils";

/** Inspired by React Bits Depth Carousel: https://reactbits.dev/components/depth-carousel */
export default function GalleryCarousel() {
  const [index, setIndex] = useState(0);
  const total = gallerySlides.length;

  useEffect(() => {
    const id = window.setInterval(() => {
      setIndex((current) => (current + 1) % total);
    }, 3800);
    return () => window.clearInterval(id);
  }, [total]);

  return (
    <div className="relative mt-12 h-[26rem] w-full overflow-x-clip sm:h-[32rem]">
      <div className="absolute inset-0 flex items-center justify-center [perspective:1200px]">
        {gallerySlides.map((slide, i) => {
          const raw = (i - index + total) % total;
          const offset = raw > total / 2 ? raw - total : raw;
          const abs = Math.abs(offset);
          const isActive = offset === 0;

          return (
            <button
              key={slide.label}
              type="button"
              onClick={() => setIndex(i)}
              className={cn(
                "absolute overflow-hidden rounded-[1.5rem] border border-white/20 shadow-2xl transition-all duration-700 ease-out",
                abs > 2 && "pointer-events-none opacity-0",
              )}
              style={{
                width: "min(78vw, 34rem)",
                aspectRatio: "16 / 10",
                transform: `translateX(${offset * 42}%) translateZ(${-abs * 120}px) rotateY(${offset * -18}deg) scale(${1 - abs * 0.08})`,
                zIndex: 20 - abs,
                opacity: abs > 2 ? 0 : 1 - abs * 0.25,
                filter: abs ? `brightness(${1 - abs * 0.15})` : "none",
              }}
              aria-label={slide.label}
            >
              <Image
                src={slide.src}
                alt={slide.label}
                fill
                className="object-cover"
                sizes="560px"
                priority={isActive}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 p-6 text-left">
                <p className="text-[0.7rem] uppercase tracking-[0.06rem] text-brand">
                  Gallery
                </p>
                <p className="mt-1 font-serif text-3xl italic text-white">
                  {slide.label}
                </p>
              </div>
            </button>
          );
        })}
      </div>

      <div className="absolute bottom-0 left-1/2 z-30 flex -translate-x-1/2 gap-2">
        {gallerySlides.map((slide, i) => (
          <button
            key={slide.label}
            type="button"
            aria-label={`Show ${slide.label}`}
            onClick={() => setIndex(i)}
            className={cn(
              "h-2.5 rounded-full transition-all",
              i === index ? "w-8 bg-brand-dark" : "w-2.5 bg-line",
            )}
          />
        ))}
      </div>
    </div>
  );
}

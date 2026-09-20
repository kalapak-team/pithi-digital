"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export type StackCardItem = {
  title: string;
  text: string;
  image: string;
};

type StackCardsProps = {
  items: StackCardItem[];
  className?: string;
};

/** Stack / card-swap deck — inspired by React Bits Stack & Card Swap */
export default function StackCards({ items, className }: StackCardsProps) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setActive((current) => (current + 1) % items.length);
    }, 3800);
    return () => window.clearInterval(id);
  }, [items.length]);

  return (
    <div className={cn("relative mx-auto h-[26rem] w-full max-w-sm", className)}>
      {items.map((item, i) => {
        const offset = (i - active + items.length) % items.length;
        const isFront = offset === 0;
        return (
          <article
            key={item.title}
            className="absolute inset-x-0 top-0 overflow-hidden rounded-[1.5rem] border border-line bg-white shadow-lg transition-all duration-700"
            style={{
              transform: `translateY(${offset * 16}px) scale(${1 - offset * 0.045}) rotate(${offset * -1.5}deg)`,
              zIndex: items.length - offset,
              opacity: offset > 2 ? 0 : 1,
              pointerEvents: isFront ? "auto" : "none",
            }}
          >
            <div className="relative aspect-[16/11]">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover"
                sizes="380px"
              />
            </div>
            <div className="px-5 py-4">
              <p className="font-serif text-xl italic text-ink">{item.title}</p>
              <p className="mt-1.5 text-sm leading-relaxed text-body">{item.text}</p>
            </div>
          </article>
        );
      })}

      <div className="absolute -bottom-9 left-0 right-0 flex justify-center gap-2">
        {items.map((item, i) => (
          <button
            key={item.title}
            type="button"
            aria-label={`Show ${item.title}`}
            onClick={() => setActive(i)}
            className={cn(
              "h-2.5 rounded-full transition-all",
              i === active ? "w-8 bg-brand-dark" : "w-2.5 bg-line",
            )}
          />
        ))}
      </div>
    </div>
  );
}

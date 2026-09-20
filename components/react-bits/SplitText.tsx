"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export interface SplitTextProps {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
  ease?: string;
  splitType?: "chars" | "words";
  from?: gsap.TweenVars;
  to?: gsap.TweenVars;
  threshold?: number;
  tag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
  textAlign?: React.CSSProperties["textAlign"];
  onLetterAnimationComplete?: () => void;
}

export default function SplitText({
  text,
  className = "",
  delay = 50,
  duration = 0.7,
  ease = "power3.out",
  splitType = "words",
  from = { opacity: 0, y: 36 },
  to = { opacity: 1, y: 0 },
  threshold = 0.15,
  tag = "p",
  textAlign = "left",
  onLetterAnimationComplete,
}: SplitTextProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const parts =
      splitType === "chars" ? Array.from(text) : text.split(/(\s+)/);

    el.innerHTML = "";
    const spans: HTMLSpanElement[] = [];

    parts.forEach((part) => {
      if (part.match(/^\s+$/)) {
        el.appendChild(document.createTextNode(part));
        return;
      }
      if (!part) return;
      const span = document.createElement("span");
      span.textContent = part;
      span.style.display = "inline-block";
      span.style.willChange = "transform, opacity";
      el.appendChild(span);
      spans.push(span);
    });

    gsap.set(spans, from);

    const startPct = (1 - threshold) * 100;
    const tween = gsap.to(spans, {
      ...to,
      duration,
      ease,
      stagger: delay / 1000,
      paused: true,
      onComplete: () => onLetterAnimationComplete?.(),
    });

    const st = ScrollTrigger.create({
      trigger: el,
      start: `top ${startPct}%`,
      once: true,
      onEnter: () => tween.play(),
    });

    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight * (1 - threshold) && rect.bottom > 0) {
      tween.play();
    }

    return () => {
      st.kill();
      tween.kill();
      gsap.killTweensOf(spans);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text, delay, duration, ease, splitType, threshold]);

  const Tag = tag;
  return (
    <Tag
      ref={ref as never}
      className={className}
      style={{ textAlign, overflow: "hidden" }}
    >
      {text}
    </Tag>
  );
}

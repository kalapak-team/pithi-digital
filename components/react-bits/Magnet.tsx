"use client";

import React, { useState, useEffect, useRef, type ReactNode, type HTMLAttributes } from "react";

interface MagnetProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  padding?: number;
  disabled?: boolean;
  magnetStrength?: number;
  maxOffset?: number;
  activeTransition?: string;
  inactiveTransition?: string;
  wrapperClassName?: string;
  innerClassName?: string;
}

function clamp(value: number, max: number) {
  return Math.max(-max, Math.min(max, value));
}

const Magnet: React.FC<MagnetProps> = ({
  children,
  padding = 10,
  disabled = false,
  magnetStrength = 12,
  maxOffset = 5,
  activeTransition = "transform 0.25s ease-out",
  inactiveTransition = "transform 0.4s ease-out",
  wrapperClassName = "",
  innerClassName = "",
  ...props
}) => {
  const [isActive, setIsActive] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const magnetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (disabled) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (!magnetRef.current) return;

      const { left, top, width, height } = magnetRef.current.getBoundingClientRect();
      const centerX = left + width / 2;
      const centerY = top + height / 2;

      const distX = Math.abs(centerX - e.clientX);
      const distY = Math.abs(centerY - e.clientY);

      if (distX < width / 2 + padding && distY < height / 2 + padding) {
        setIsActive(true);
        setPosition({
          x: clamp((e.clientX - centerX) / magnetStrength, maxOffset),
          y: clamp((e.clientY - centerY) / magnetStrength, maxOffset),
        });
      } else {
        setIsActive(false);
        setPosition({ x: 0, y: 0 });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [padding, disabled, magnetStrength, maxOffset]);

  const x = disabled ? 0 : position.x;
  const y = disabled ? 0 : position.y;
  const transitionStyle = isActive && !disabled ? activeTransition : inactiveTransition;

  return (
    <div
      ref={magnetRef}
      className={wrapperClassName}
      style={{ position: "relative", display: "inline-block" }}
      {...props}
    >
      <div
        className={innerClassName}
        style={{
          transform: `translate3d(${x}px, ${y}px, 0)`,
          transition: transitionStyle,
          willChange: "transform",
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default Magnet;

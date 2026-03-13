"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const dot = dotRef.current;
    if (!dot) return;

    let mouseX = -100;
    let mouseY = -100;
    let currentX = -100;
    let currentY = -100;
    let rafId: number;

    const moveCursor = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const expandCursor = () => dot.classList.add("expanded");
    const shrinkCursor = () => dot.classList.remove("expanded");

    const animate = () => {
      currentX += (mouseX - currentX) * 0.15;
      currentY += (mouseY - currentY) * 0.15;
      dot.style.left = `${currentX}px`;
      dot.style.top = `${currentY}px`;
      rafId = requestAnimationFrame(animate);
    };

    const interactiveSelectors =
      'a, button, [role="button"], input, select, textarea, label, [data-cursor-expand]';

    const handleMouseOver = (e: MouseEvent) => {
      if ((e.target as Element).closest(interactiveSelectors)) {
        expandCursor();
      }
    };
    const handleMouseOut = (e: MouseEvent) => {
      if ((e.target as Element).closest(interactiveSelectors)) {
        shrinkCursor();
      }
    };

    window.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);
    rafId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return <div ref={dotRef} className="cursor-dot" aria-hidden="true" />;
}

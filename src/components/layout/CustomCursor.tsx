"use client";
import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const move = (e: MouseEvent) => {
      el.style.left = e.clientX + "px";
      el.style.top = e.clientY + "px";
    };

    const expand = () => el.classList.add("expanded");
    const shrink = () => el.classList.remove("expanded");

    document.addEventListener("mousemove", move);

    const targets = document.querySelectorAll("a, button, .product-card, .project-card");
    targets.forEach((t) => {
      t.addEventListener("mouseenter", expand);
      t.addEventListener("mouseleave", shrink);
    });

    // MutationObserver for dynamically added elements
    const observer = new MutationObserver(() => {
      document.querySelectorAll("a, button, .product-card, .project-card").forEach((t) => {
        t.removeEventListener("mouseenter", expand);
        t.removeEventListener("mouseleave", shrink);
        t.addEventListener("mouseenter", expand);
        t.addEventListener("mouseleave", shrink);
      });
    });
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      document.removeEventListener("mousemove", move);
      observer.disconnect();
    };
  }, []);

  return <div ref={ref} className="cursor" id="cursor" aria-hidden="true" />;
}

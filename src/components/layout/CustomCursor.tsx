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

    const hideOnSelect = (e: MouseEvent) => {
      if ((e.target as Element).closest("select")) {
        el.style.opacity = "0";
      } else {
        el.style.opacity = "1";
      }
    };

    const hideForSelect = () => { el.style.opacity = "0"; };
    const showAfterSelect = () => { el.style.opacity = "1"; };

    const expand = () => el.classList.add("expanded");
    const shrink = () => el.classList.remove("expanded");

    document.addEventListener("mousemove", move);
    document.addEventListener("mouseover", hideOnSelect);

    document.querySelectorAll("select").forEach((s) => {
      s.addEventListener("mouseenter", hideForSelect);
      s.addEventListener("mouseleave", showAfterSelect);
    });

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
      document.querySelectorAll("select").forEach((s) => {
        s.removeEventListener("mouseenter", hideForSelect);
        s.removeEventListener("mouseleave", showAfterSelect);
        s.addEventListener("mouseenter", hideForSelect);
        s.addEventListener("mouseleave", showAfterSelect);
      });
    });
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      document.removeEventListener("mousemove", move);
      document.removeEventListener("mouseover", hideOnSelect);
      observer.disconnect();
    };
  }, []);

  return <div ref={ref} className="cursor" id="cursor" aria-hidden="true" />;
}

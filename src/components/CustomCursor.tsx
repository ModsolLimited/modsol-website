"use client";
import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    const move = (e: MouseEvent) => {
      cursor.style.left = e.clientX + "px";
      cursor.style.top = e.clientY + "px";
    };

    const expand = () => cursor.classList.add("expanded");
    const contract = () => cursor.classList.remove("expanded");

    document.addEventListener("mousemove", move);

    const targets = document.querySelectorAll("a, button, [data-cursor]");
    targets.forEach((el) => {
      el.addEventListener("mouseenter", expand);
      el.addEventListener("mouseleave", contract);
    });

    return () => {
      document.removeEventListener("mousemove", move);
      targets.forEach((el) => {
        el.removeEventListener("mouseenter", expand);
        el.removeEventListener("mouseleave", contract);
      });
    };
  }, []);

  return <div className="cursor hidden md:block" ref={cursorRef} />;
}

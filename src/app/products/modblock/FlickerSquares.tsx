"use client";
import { useEffect, useRef } from "react";

const COLOURS = ["#C6FF02", "rgba(198,255,2,0.4)", "rgba(198,255,2,0.1)", "#1a1a1a"];
const BASE_INTERVALS = [700, 950, 1100, 800, 1300, 600];

export default function FlickerSquares() {
  const refs = useRef<(HTMLDivElement | null)[]>([]);
  const scrollSpeed = useRef(1);

  useEffect(() => {
    const timers: ReturnType<typeof setInterval>[] = [];

    refs.current.forEach((el, i) => {
      if (!el) return;
      const tick = () => {
        if (!el) return;
        el.style.background = COLOURS[Math.floor(Math.random() * COLOURS.length)];
      };
      const schedule = () => {
        timers[i] = setInterval(tick, BASE_INTERVALS[i] / scrollSpeed.current);
      };
      schedule();
    });

    const onScroll = () => {
      scrollSpeed.current = 2.5;
      timers.forEach((t) => clearInterval(t));
      refs.current.forEach((el, i) => {
        if (!el) return;
        timers[i] = setInterval(() => {
          if (el) el.style.background = COLOURS[Math.floor(Math.random() * COLOURS.length)];
        }, BASE_INTERVALS[i] / scrollSpeed.current);
      });
      clearTimeout((onScroll as any)._t);
      (onScroll as any)._t = setTimeout(() => {
        scrollSpeed.current = 1;
        timers.forEach((t) => clearInterval(t));
        refs.current.forEach((el, i) => {
          if (!el) return;
          timers[i] = setInterval(() => {
            if (el) el.style.background = COLOURS[Math.floor(Math.random() * COLOURS.length)];
          }, BASE_INTERVALS[i]);
        });
      }, 800);
    };

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      timers.forEach((t) => clearInterval(t));
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div style={{
      display: "flex",
      flexDirection: "row",
      gap: "16px",
      justifyContent: "center",
      margin: "48px auto",
    }}>
      {Array.from({ length: 6 }).map((_, i) => (
        <div
          key={i}
          ref={(el) => { refs.current[i] = el; }}
          style={{
            width: "80px",
            height: "80px",
            background: "#1a1a1a",
            transition: "background 0.4s ease",
            flexShrink: 0,
          }}
        />
      ))}
    </div>
  );
}

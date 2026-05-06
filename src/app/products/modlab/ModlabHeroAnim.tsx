"use client";
import { useRef, useEffect } from "react";

const W = 560;
const H = 220;
const LOGO = 48;
const MAX_X = W - LOGO;
const MAX_Y = H - LOGO;

const INITIAL = [
  { x: 50,  y: 40,  vx: 2.1,  vy: 1.7  },
  { x: 430, y: 150, vx: -1.8, vy: 2.3  },
  { x: 180, y: 80,  vx: 2.5,  vy: -1.5 },
  { x: 360, y: 50,  vx: -2.2, vy: -1.9 },
];

export default function ModlabHeroAnim() {
  const imgRefs = useRef<(HTMLImageElement | null)[]>([null, null, null, null]);
  const balls = useRef(INITIAL.map((b) => ({ ...b })));
  const raf = useRef<number>(0);

  useEffect(() => {
    const tick = () => {
      balls.current.forEach((b, i) => {
        b.x += b.vx;
        b.y += b.vy;
        if (b.x <= 0)     { b.x = 0;     b.vx =  Math.abs(b.vx); }
        if (b.x >= MAX_X) { b.x = MAX_X; b.vx = -Math.abs(b.vx); }
        if (b.y <= 0)     { b.y = 0;     b.vy =  Math.abs(b.vy); }
        if (b.y >= MAX_Y) { b.y = MAX_Y; b.vy = -Math.abs(b.vy); }
        const el = imgRefs.current[i];
        if (el) { el.style.left = `${b.x}px`; el.style.top = `${b.y}px`; }
      });
      raf.current = requestAnimationFrame(tick);
    };
    raf.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf.current);
  }, []);

  return (
    <div style={{
      position: "absolute",
      top: "50%", left: "50%",
      transform: "translate(-50%, -50%)",
      width: `${W}px`, height: `${H}px`,
      border: "1px solid rgba(198,255,2,0.35)",
      borderRadius: 0,
    }}>
      {INITIAL.map((b, i) => (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          key={i}
          ref={(el) => { imgRefs.current[i] = el; }}
          src="/hero-logo.png"
          alt=""
          style={{
            position: "absolute",
            width: `${LOGO}px`, height: `${LOGO}px`,
            objectFit: "contain",
            filter: "drop-shadow(0 0 8px rgba(198,255,2,0.6))",
            left: `${b.x}px`, top: `${b.y}px`,
          }}
        />
      ))}
    </div>
  );
}

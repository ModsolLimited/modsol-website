"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

const INIT_BLOCKS = [
  "rgba(198,255,2,0.6)", "#1a1a1a", "rgba(198,255,2,0.15)", "#111", "rgba(198,255,2,0.08)",
  "#1a1a1a", "rgba(198,255,2,0.4)", "#222", "rgba(198,255,2,0.6)", "#111",
  "#111", "#1c1c1c", "rgba(198,255,2,0.2)", "#1a1a1a", "rgba(198,255,2,0.5)",
  "rgba(198,255,2,0.1)", "#111", "#1a1a1a", "rgba(198,255,2,0.08)", "#222",
  "rgba(198,255,2,0.3)", "#151515", "rgba(198,255,2,0.7)", "#1a1a1a", "rgba(198,255,2,0.15)",
];

// Three flicker states per spec
const FLICKER = [
  "rgba(198,255,2,1.0)",
  "rgba(198,255,2,0.4)",
  "rgba(198,255,2,0.08)",
];

const DARK_STATES = ["#111", "#1a1a1a", "#222", "#151515", "#1c1c1c"];

const BASE_DEG_PER_FRAME = 0.15; // idle clockwise rotation speed

export default function HeroSection() {
  const logoRef     = useRef<HTMLDivElement>(null);
  const blockRefs   = useRef<(HTMLDivElement | null)[]>([]);
  const rotationRef = useRef(0);
  const boostRef    = useRef(0);
  const lastScrollY = useRef(0);
  const rafRef      = useRef<number>(0);

  useEffect(() => {
    // ── Animation loop ──────────────────────────────────────────
    const animate = () => {
      boostRef.current *= 0.91; // scroll boost decays each frame

      rotationRef.current += BASE_DEG_PER_FRAME + boostRef.current;

      if (logoRef.current) {
        logoRef.current.style.transform = `rotateY(${rotationRef.current}deg)`;
      }

      rafRef.current = requestAnimationFrame(animate);
    };

    // ── Scroll handler ───────────────────────────────────────────
    const handleScroll = () => {
      const y     = window.scrollY;
      const delta = y - lastScrollY.current;
      lastScrollY.current = y;

      // clockwise on scroll down (+), anti-clockwise on scroll up (-)
      boostRef.current += delta * 0.57;
      boostRef.current  = Math.max(-12, Math.min(12, boostRef.current));

      // Flicker: probability and intensity scale with scroll speed
      const speed       = Math.abs(delta);
      const flickerProb = Math.min(0.65, speed * 0.07);

      blockRefs.current.forEach((block) => {
        if (!block || Math.random() > flickerProb) return;
        // 40% chance of a yellow flicker state, 60% dark
        block.style.background = Math.random() < 0.40
          ? FLICKER[Math.floor(Math.random() * FLICKER.length)]
          : DARK_STATES[Math.floor(Math.random() * DARK_STATES.length)];
      });
    };

    rafRef.current = requestAnimationFrame(animate);
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="hero" id="home">
      <div className="hero-bg" />
      <div className="hero-grid" />
      <div className="hero-accent-v" />
      <div className="hero-accent-h" />

      {/* ── Right panel ─────────────────────────────────────── */}
      <div className="hero-image-block">
        <div className="hero-image-inner" />

        {/* Layer 1 (bottom): 3D spinning logo */}
        <div className="hero-logo-stage">
          <div className="hero-logo-glow" />
          <div className="hero-logo-3d" ref={logoRef}>

            {/* Depth extrusion: 10 layers from deepest (index 0) to shallowest (index 9).
                Each is offset diagonally down-right, darkest at the back stepping toward
                dark yellow at the front — simulating a ~10px thick solid badge. */}
            {Array.from({ length: 10 }, (_, i) => {
              const depth      = 10 - i;                          // 10 → 1 (px offset)
              const brightness = (0.05 + (i / 9) * 0.45).toFixed(2); // 0.05 → 0.50
              return (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  key={i}
                  src="/hero-logo.png"
                  alt=""
                  aria-hidden="true"
                  className="hero-logo-depth"
                  style={{
                    transform: `translate(${depth}px, ${depth}px)`,
                    filter:    `brightness(${brightness})`,
                  }}
                />
              );
            })}

            {/* Front face — full colour */}
            <Image
              src="/hero-logo.png"
              alt="Modsol"
              width={800}
              height={800}
              className="hero-logo-img"
              priority
            />
            <div className="hero-logo-shine" />
          </div>
        </div>

        {/* Layer 2 (top): flickering block grid */}
        <div className="hero-blocks">
          {INIT_BLOCKS.map((bg, i) => (
            <div
              key={i}
              ref={(el) => { blockRefs.current[i] = el; }}
              className="hero-block"
              style={{ background: bg }}
            />
          ))}
        </div>
      </div>

      {/* ── Left content ────────────────────────────────────── */}
      <div className="hero-content">
        <p className="hero-eyebrow">Modular Architecture Systems</p>
        <h1 className="hero-headline">
          BUILD.<br />
          <span className="line2">BOLD.</span>
        </h1>
        <p className="hero-sub">
          Modular systems engineered for the next generation of temporary architecture.
        </p>
        <div className="hero-buttons">
          <Link href="/products" className="btn-primary">Explore The Products</Link>
          <Link href="/solutions" className="btn-secondary">Explore The Solutions</Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hero-scroll-indicator">
        <div className="hero-scroll-line" />
        <span className="mono" style={{ fontSize: "8px", color: "rgba(255,255,255,0.2)" }}>Scroll</span>
      </div>
    </section>
  );
}

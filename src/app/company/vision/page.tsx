"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import InnovationGrid from "@/components/sections/InnovationGrid";

const PAD = "clamp(60px,8vh,120px) clamp(40px,4vw,120px)";
const SUBTLE_GRID = {
  backgroundImage: "linear-gradient(rgba(198,255,2,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(198,255,2,0.03) 1px,transparent 1px)",
  backgroundSize: "48px 48px",
};

/* ─── DOT NAVIGATION SIDEBAR ─────────────────────────────────── */
function ProgressPath() {
  const [activeIndex, setActiveIndex] = useState(0);
  useEffect(() => {
    const update = () => {
      const sections = Array.from(document.querySelectorAll<HTMLElement>("[data-section]"));
      const viewMid = window.scrollY + window.innerHeight / 2;
      let best = 0;
      let bestDist = Infinity;
      sections.forEach((s, i) => {
        const mid = s.offsetTop + s.offsetHeight / 2;
        const dist = Math.abs(mid - viewMid);
        if (dist < bestDist) { bestDist = dist; best = i; }
      });
      setActiveIndex(best);
    };
    window.addEventListener("scroll", update, { passive: true });
    update();
    return () => window.removeEventListener("scroll", update);
  }, []);
  return (
    <div aria-hidden="true" style={{ position: "fixed", left: "50px", top: "50%", transform: "translateY(-50%)", display: "flex", flexDirection: "column", gap: "12px", zIndex: 5, pointerEvents: "none" }}>
      {Array.from({ length: 7 }).map((_, i) => (
        <div key={i} style={{ width: "6px", height: "6px", borderRadius: "50%", background: i === activeIndex ? "#C6FF02" : "rgba(198,255,2,0.4)", transition: "background 0.3s ease" }} />
      ))}
    </div>
  );
}

/* ─── BG GRID ────────────────────────────────────────────────── */
function BgGrid({ rows, cols, maxOpacity = 0.08, style }: { rows: number; cols: number; maxOpacity?: number; style?: React.CSSProperties }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const cells = Array.from(el.querySelectorAll<HTMLElement>(".bgcell"));
    let fired = false;
    const trigger = () => {
      if (fired) return;
      fired = true;
      cells.forEach((c, i) => setTimeout(() => { c.style.opacity = String((0.4 + Math.random() * 0.6) * maxOpacity); }, i * 80));
      obs.disconnect();
    };
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) trigger();
    }, { threshold: 0, rootMargin: "0px 0px 0px 0px" });
    obs.observe(el);
    const timer = setTimeout(trigger, 300);
    return () => { obs.disconnect(); clearTimeout(timer); };
  }, [maxOpacity]);
  return (
    <div ref={ref} style={{ display: "grid", gridTemplateColumns: `repeat(${cols}, 1fr)`, gap: "3px", pointerEvents: "none", ...style }}>
      {Array.from({ length: rows * cols }).map((_, i) => (
        <div key={i} className="bgcell" style={{ aspectRatio: "1", background: "#C6FF02", opacity: 0, transition: "opacity 0.5s ease" }} />
      ))}
    </div>
  );
}

/* ─── S2: ECOSYSTEM DIAGRAM ──────────────────────────────────── */
function EcosystemDiagram() {
  const ref = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current; if (!el) return;
    let fired = false;
    const trigger = () => {
      if (fired) return;
      fired = true;
      el.style.opacity = "1";
      obs.disconnect();
    };
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) trigger();
    }, { threshold: 0, rootMargin: "0px 0px 0px 0px" });
    obs.observe(el);
    const timer = setTimeout(trigger, 300);
    return () => { obs.disconnect(); clearTimeout(timer); };
  }, []);

  useEffect(() => {
    if (scrollRef.current) {
      const el = scrollRef.current;
      el.scrollLeft = (el.scrollWidth - el.clientWidth) / 2;
    }
  }, []);

  const cardStyle: React.CSSProperties = {
    width: "220px", height: "110px",
    background: "transparent",
    border: "1px solid rgba(198,255,2,0.25)",
    display: "flex", alignItems: "center", justifyContent: "center",
    transition: "border-color 0.2s ease",
    flexShrink: 0,
  };

  const hoverOn  = (e: React.MouseEvent<HTMLDivElement>) => { e.currentTarget.style.borderColor = "#C6FF02"; };
  const hoverOff = (e: React.MouseEvent<HTMLDivElement>) => { e.currentTarget.style.borderColor = "rgba(198,255,2,0.25)"; };

  return (
    <div ref={scrollRef} style={{ width: "100%", overflowX: "auto", overflowY: "hidden", WebkitOverflowScrolling: "touch" }}>
    <div ref={ref} className="vision-diagram vision-diagram-inner" style={{ width: "800px", margin: "0 auto", display: "flex", flexDirection: "column", alignItems: "center", padding: "60px 0 24px", opacity: 0, transition: "opacity 0.8s ease", position: "relative", flexShrink: 0 }}>

      {/* SVG connection overlay — pixel coords based on fixed 800px container */}
      {/* Row: gap=80px → Modblock(0–220) | Modsol(300–500) | Modwall(580–800) */}
      {/* Row centre y: 60px top padding + 100px (half of Modsol 200px) = 160 */}
      {/* Modsol bottom: 60+200=260. Spacer 66px. Modframe top: 326. Centre x: (800-220)/2+110=400 */}
      <svg style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", pointerEvents: "none", overflow: "visible" }}>
        {/* Modsol left → Modblock right */}
        <line x1="300" y1="160" x2="220" y2="160" stroke="#C6FF02" strokeWidth="1" opacity="0.6" fill="none" />
        {/* Modsol right → Modwall left */}
        <line x1="500" y1="160" x2="580" y2="160" stroke="#C6FF02" strokeWidth="1" opacity="0.6" fill="none" />
        {/* Modsol bottom → Modframe top */}
        <line x1="400" y1="260" x2="400" y2="326" stroke="#C6FF02" strokeWidth="1" opacity="0.6" fill="none" />
      </svg>

      {/* Horizontal row: Modblock — Modsol hub — Modwall */}
      <div className="vision-diagram-row" style={{ display: "flex", alignItems: "center", gap: "80px" }}>
        {/* MODBLOCK */}
        <div className="vision-modblock-box" style={cardStyle} onMouseEnter={hoverOn} onMouseLeave={hoverOff}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/Modblock/MODBLOCK R yellow BB rectangle.jpg" alt="Modblock" onError={(e) => { (e.target as HTMLImageElement).style.display = 'none' }} style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain", display: "block", margin: "0 auto" }} />
        </div>
        {/* M logo hub */}
        <div className="vision-modsol-box" style={{ width: "200px", height: "200px", background: "#000", border: "2px solid #C6FF02", padding: "16px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/Modsol/MODSOL yellow BB.png" alt="Modsol" style={{ maxWidth: "140px", height: "auto", objectFit: "contain" }} />
        </div>
        {/* MODWALL */}
        <div className="vision-modwall-box" style={cardStyle} onMouseEnter={hoverOn} onMouseLeave={hoverOff}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/Modwall/MODWALL R yellow BB rectangle.png" alt="Modwall" style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain", display: "block", margin: "0 auto" }} />
        </div>
      </div>

      {/* Spacer for vertical connection gap */}
      <div className="vision-diagram-spacer" style={{ height: "66px" }} />

      {/* MODFRAME */}
      <div className="vision-modframe-box" style={{ ...cardStyle, overflow: "hidden" }} onMouseEnter={hoverOn} onMouseLeave={hoverOff}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/Modframe/Modframe Yellow On Black.png" alt="Modframe" className="vision-modframe-img" style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain", display: "block", margin: "0", padding: "0", position: "static", transform: "translateY(-12px) scale(2)", transformOrigin: "center center" }} />
      </div>
    </div>
    </div>
  );
}

/* ─── S3: SIMPLE PAVILION RECTANGLE ─────────────────────────── */
function TemporaryStructure() {
  return (
    <div aria-hidden="true" style={{ position: "absolute", right: "clamp(32px,5vw,100px)", top: "50%", transform: "translateY(-50%)", width: "min(180px,16vw)", height: "min(120px,11vw)", pointerEvents: "none", zIndex: 0 }}>
      <div style={{ width: "100%", height: "100%", border: "1px solid rgba(198,255,2,0.3)", position: "relative" }}>
        <div style={{ position: "absolute", top: 0, bottom: 0, left: "33.3%", width: "1px", background: "rgba(198,255,2,0.22)" }} />
        <div style={{ position: "absolute", top: 0, bottom: 0, left: "66.6%", width: "1px", background: "rgba(198,255,2,0.22)" }} />
        {/* Entrance cutout */}
        <div style={{ position: "absolute", bottom: "-1px", left: "50%", transform: "translateX(-50%)", width: "20%", height: "42%", borderLeft: "1px solid rgba(198,255,2,0.3)", borderRight: "1px solid rgba(198,255,2,0.3)", borderTop: "1px solid rgba(198,255,2,0.3)", background: "#050505" }} />
      </div>
    </div>
  );
}

/* ─── S4: WORLD MAP ──────────────────────────────────────────── */
// WorldMap is imported from @/components/sections/WorldMap

/* ─── S5: EQUALISER BARS ─────────────────────────────────────── */
function EqualiserBars() {
  const bars = [65, 38, 80, 52, 70, 35, 88, 48, 72, 42];
  return (
    <div className="eq-wrap" aria-hidden="true">
      {bars.map((w, i) => <div key={i} className="eq-bar" style={{ "--eq-w": `${w}%`, "--eq-d": `${i * 0.18}s` } as React.CSSProperties} />)}
    </div>
  );
}

/* ─── S7: ROTATING SQUARES ───────────────────────────────────── */
function RotatingSquares() {
  return (
    <div className="rot-wrap" aria-hidden="true">
      <div className="rot-sq sq1" /><div className="rot-sq sq2" /><div className="rot-sq sq3" />
    </div>
  );
}

/* ─── WORD-BY-WORD QUOTE ─────────────────────────────────────── */
const quoteWords = "TEMPORARY ENVIRONMENTS DESERVE PERMANENT AMBITION".split(" ");
function WordByWord() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const words = Array.from(el.querySelectorAll<HTMLElement>(".qw"));
    let fired = false;
    const trigger = () => {
      if (fired) return;
      fired = true;
      words.forEach((w, i) => setTimeout(() => w.classList.add("qw-visible"), i * 180));
      const dot = el.querySelector<HTMLElement>(".q-dot");
      if (dot) setTimeout(() => dot.classList.add("qw-visible"), words.length * 180 + 100);
      const sub = el.querySelector<HTMLElement>(".q-sub");
      if (sub) setTimeout(() => sub.classList.add("revealed"), words.length * 180 + 400);
      obs.disconnect();
    };
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) trigger();
    }, { threshold: 0, rootMargin: "0px 0px 0px 0px" });
    obs.observe(el);
    const timer = setTimeout(trigger, 300);
    return () => { obs.disconnect(); clearTimeout(timer); };
  }, []);
  return (
    <div ref={ref}>
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "0.25em", marginBottom: "32px" }}>
        {quoteWords.map((word, i) => (
          <span key={i} className="qw" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(36px,5.5vw,80px)", lineHeight: 1.1, letterSpacing: "0.03em", WebkitTextStroke: i % 2 === 0 ? "0" : "1px #fff", color: i % 2 === 0 ? "#fff" : "transparent", opacity: 0, transform: "translateY(30px)", transition: "opacity 0.5s ease, transform 0.5s ease", display: "inline-block" }}>
            {word}
          </span>
        ))}
        <span className="q-dot" style={{ display: "inline-block", width: "14px", height: "14px", background: "#C6FF02", alignSelf: "center", marginLeft: "0.15em", flexShrink: 0, opacity: 0, transition: "opacity 0.4s ease" }} />
      </div>
      <p className="q-sub" style={{ fontFamily: "var(--font-body)", fontSize: "15px", color: "#888", maxWidth: "560px", margin: "0 auto", lineHeight: "1.8", opacity: 0, transition: "opacity 1s ease" }}>
        This belief is embedded in every system we engineer, every component we specify, every project we deliver.
      </p>
    </div>
  );
}

/* ─── ROADMAP LINE ───────────────────────────────────────────── */
function RoadmapLine() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const trigger = () => { el.classList.add("rl-active"); obs.disconnect(); };
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) trigger();
    }, { threshold: 0, rootMargin: "0px 0px 0px 0px" });
    obs.observe(el);
    const timer = setTimeout(trigger, 300);
    return () => { obs.disconnect(); clearTimeout(timer); };
  }, []);
  return (
    <div ref={ref} className="roadmap-line-wrap" style={{ position: "relative", width: "2px", alignSelf: "stretch", minHeight: "220px" }}>
      <div className="roadmap-line" />
      {[0, 1, 2].map((i) => <div key={i} className="roadmap-dot" style={{ top: `calc(${i * 33.3 + 5}%)` }} />)}
    </div>
  );
}

/* ─── RADIAL GLOW ────────────────────────────────────────────── */
function RadialGlow() {
  return <div className="radial-glow" aria-hidden="true" />;
}

/* ─── useReveal hook ─────────────────────────────────────────── */
function useReveal(ref: React.RefObject<HTMLElement | null>, threshold = 0) {
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const trigger = () => {
      el.querySelectorAll<HTMLElement>("[data-reveal]").forEach((n) => n.classList.add("revealed"));
      obs.disconnect();
    };
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) trigger();
    }, { threshold, rootMargin: "0px 0px 0px 0px" });
    obs.observe(el);
    const timer = setTimeout(trigger, 300);
    return () => { obs.disconnect(); clearTimeout(timer); };
  }, [ref]);
}

/* ─── SECTION WRAPPER — no numbers ──────────────────────────── */
function Section({ id, children, style, threshold = 0 }: {
  id: string; children: React.ReactNode; style?: React.CSSProperties; threshold?: number;
}) {
  const ref = useRef<HTMLElement>(null);
  useReveal(ref as React.RefObject<HTMLElement>, threshold);
  return (
    <section id={id} ref={ref as React.RefObject<HTMLElement>} data-section
      style={{ minHeight: "100vh", position: "relative", overflow: "hidden", display: "flex", alignItems: "center", ...style }}>
      {children}
    </section>
  );
}

/* ═══════════════════ PAGE ═══════════════════════════════════════ */
export default function VisionPage() {
  const s1ref = useRef<HTMLElement>(null);
  useReveal(s1ref as React.RefObject<HTMLElement>, 0);

  return (
    <>
      <ProgressPath />

      {/* ── S1: OPENING ── */}
      <section id="s1" ref={s1ref as React.RefObject<HTMLElement>} data-section
        style={{ minHeight: "100vh", background: "#000", position: "relative", overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center", textAlign: "center", ...SUBTLE_GRID }}>
        <BgGrid rows={4} cols={4} maxOpacity={0.06} style={{ position: "absolute", bottom: "48px", left: "clamp(80px,8vw,180px)", width: "min(160px,13vw)", zIndex: 0 }} />
        <div style={{ position: "relative", zIndex: 1, padding: PAD }}>
          <p data-reveal className="reveal-fade stagger-1" style={{ fontFamily: "var(--font-mono)", fontSize: "11px", letterSpacing: "0.25em", textTransform: "uppercase", color: "#C6FF02", marginBottom: "28px" }}>
            Modsol — The Vision
          </p>
          <h1 data-reveal className="reveal-up stagger-2" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(56px,9vw,130px)", lineHeight: 0.95, color: "#fff", letterSpacing: "0.02em", marginBottom: "8px" }}>
            WE DON&apos;T BUILD STRUCTURES.
          </h1>
          <h1 data-reveal className="reveal-up stagger-4" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(56px,9vw,130px)", lineHeight: 0.95, color: "#C6FF02", letterSpacing: "0.02em", marginBottom: "48px" }}>
            WE BUILD POSSIBILITIES.
          </h1>
          <div data-reveal className="line-draw stagger-6" />
        </div>
        <div style={{ position: "absolute", bottom: "32px", left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
          <span style={{ fontFamily: "var(--font-mono)", fontSize: "9px", letterSpacing: "0.2em", color: "#C6FF02", opacity: 0.5, textTransform: "uppercase" }}>Scroll</span>
          <div className="scroll-arrow" />
        </div>
      </section>

      {/* ── S2: WHERE WE STAND ── */}
      <Section id="s2" style={{ background: "#0A0A0A", minHeight: "auto", backgroundImage: "linear-gradient(rgba(198,255,2,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(198,255,2,0.03) 1px, transparent 1px)", backgroundSize: "40px 40px" }}>
        <div className="container" style={{ position: "relative", zIndex: 1, width: "100%", display: "flex", flexDirection: "column", padding: PAD }}>
          <div style={{ borderLeft: "3px solid #C6FF02", paddingLeft: "32px" }}>
            <p data-reveal className="reveal-left stagger-1" style={{ fontFamily: "var(--font-mono)", fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#C6FF02", marginBottom: "20px" }}>The Present</p>
            <h2 data-reveal className="reveal-left stagger-2" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(32px,4vw,56px)", color: "#fff", lineHeight: 1.05, marginBottom: "24px" }}>
              A PLATFORM BUILT FOR THE WORLD&apos;S MOST DEMANDING ENVIRONMENTS.
            </h2>
            <p data-reveal className="reveal-left stagger-3" style={{ fontFamily: "var(--font-body)", fontSize: "15px", color: "#888", lineHeight: "1.8" }}>
              Three precision-engineered systems. One unified platform. Modsol is already deployed at motorsport circuits, major music tours, international sporting events and luxury brand activations. This is just the beginning.
            </p>
          </div>
          <EcosystemDiagram />
        </div>
      </Section>

      {/* ── S3: THE BELIEF ── */}
      <Section id="s3" style={{ background: "#050505", minHeight: "fit-content", justifyContent: "center", textAlign: "center", ...SUBTLE_GRID }}>
        <RadialGlow />
        <div className="container" style={{ position: "relative", zIndex: 1, padding: "clamp(20px,2.5vh,40px) clamp(40px,4vw,120px)" }}>
          <p style={{ fontFamily: "var(--font-mono)", fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#C6FF02", marginBottom: "40px", display: "flex", justifyContent: "center" }}>The Belief</p>
          <WordByWord />
        </div>
      </Section>

      {/* ── S4: THE ROADMAP ── */}
      <Section id="s4" style={{ background: "transparent", backgroundImage: "linear-gradient(rgba(198,255,2,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(198,255,2,0.03) 1px, transparent 1px)", backgroundSize: "40px 40px", minHeight: "50vh" }}>
        <div className="container vision-world-grid" style={{ position: "relative", zIndex: 1, width: "100%", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(24px,4vw,64px)", alignItems: "center", padding: "clamp(30px,4vh,60px) clamp(40px,4vw,120px)" }}>
          <div style={{ display: "flex", gap: "clamp(20px,2.5vw,40px)", alignItems: "flex-start" }}>
            <RoadmapLine />
            <div style={{ flex: 1 }}>
              <p data-reveal className="reveal-left stagger-1" style={{ fontFamily: "var(--font-mono)", fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#C6FF02", marginBottom: "20px" }}>Where We&apos;re Going</p>
              <h2 data-reveal className="reveal-left stagger-2" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(28px,3.5vw,52px)", color: "#fff", lineHeight: 1.05, marginBottom: "32px" }}>
                GLOBAL.<br />SCALABLE.<br />UNSTOPPABLE.
              </h2>
              {[
                { label: "UK MARKET DOMINANCE", body: "Establishing Modsol as the leading modular architecture platform across the United Kingdom." },
                { label: "EUROPEAN EXPANSION", body: "Deploying the Modblock, Modwall and Modframe across European events, exhibitions and brand environments." },
                { label: "GLOBAL PLATFORM", body: "Building the infrastructure to support international deployments at the world's biggest events and venues." },
              ].map((item, i) => (
                <div key={item.label} data-reveal className={`reveal-left stagger-${i + 3}`} style={{ display: "flex", gap: "14px", marginBottom: "24px", alignItems: "flex-start" }}>
                  <div style={{ width: "7px", height: "7px", background: "#C6FF02", flexShrink: 0, marginTop: "6px" }} />
                  <div>
                    <p style={{ fontFamily: "var(--font-display)", fontSize: "17px", color: "#fff", marginBottom: "3px" }}>{item.label}</p>
                    <p style={{ fontFamily: "var(--font-body)", fontSize: "13px", color: "#888", lineHeight: "1.7" }}>{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div data-reveal className="reveal-right stagger-2 vision-world-image" style={{ overflow: "hidden", width: "100%", height: "100%", background: "transparent" }}>
            <img
              src="/world-atlas.jpg"
              alt="Global reach"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center center",
                display: "block",
                mixBlendMode: "screen",
                opacity: 1,
                filter: "brightness(0.8) contrast(1.3) sepia(1) saturate(8) hue-rotate(25deg)",
              }}
            />
          </div>
        </div>
      </Section>

      {/* ── S5: INNOVATION ── */}
      <Section id="s5" style={{ background: "#0A0A0A", minHeight: "fit-content" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(255,255,255,0.018) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.018) 1px,transparent 1px)", backgroundSize: "60px 60px", pointerEvents: "none", zIndex: 0 }} />
        <EqualiserBars />
        <div className="container" style={{ position: "relative", zIndex: 1, width: "100%", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(32px,5vw,80px)", alignItems: "center", padding: "clamp(80px,10vh,160px) clamp(40px,4vw,120px)" }}>
          <div className="vision-text-section">
            <p data-reveal className="reveal-left stagger-1" style={{ fontFamily: "var(--font-mono)", fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#C6FF02", marginBottom: "20px" }}>Ongoing Innovation</p>
            <h2 data-reveal className="reveal-left stagger-2" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(32px,4vw,52px)", color: "#fff", lineHeight: 1.05, marginBottom: "20px" }}>
              THE PLATFORM NEVER STOPS EVOLVING.
            </h2>
            <p data-reveal className="reveal-left stagger-3" style={{ fontFamily: "var(--font-body)", fontSize: "15px", color: "#888", lineHeight: "1.8" }}>
              Every project teaches us something. Every installation reveals an opportunity. Modsol is committed to continuous product development — refining existing systems and engineering new ones. The next product is already in development.
            </p>
          </div>
          <div data-reveal className="reveal-right stagger-2 innovation-grid-container" style={{ display: "flex", justifyContent: "center" }}>
            <InnovationGrid />
          </div>
        </div>
      </Section>

      {/* ── S6: SUSTAINABILITY ── */}
      <Section id="s6" style={{ background: "#050505", minHeight: "fit-content", justifyContent: "center", textAlign: "center", ...SUBTLE_GRID }}>
        <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden", pointerEvents: "none", zIndex: 0 }}>
          <span style={{ fontFamily: "var(--font-display)", fontSize: "22vw", color: "rgba(198,255,2,0.03)", lineHeight: 1, whiteSpace: "nowrap", userSelect: "none" }}>SUSTAINABLE.</span>
        </div>
        <div className="container" style={{ position: "relative", zIndex: 1, padding: "clamp(80px,10vh,160px) clamp(40px,4vw,120px)" }}>
          <p data-reveal className="reveal-fade stagger-1" style={{ fontFamily: "var(--font-mono)", fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#C6FF02", marginBottom: "20px", display: "flex", justifyContent: "center" }}>The Responsibility</p>
          <h2 data-reveal className="reveal-up stagger-2" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(32px,4.5vw,60px)", color: "#fff", lineHeight: 1.05, maxWidth: "800px", margin: "0 auto 20px" }}>
            BUILT TO BE REUSED. DESIGNED TO LAST.
          </h2>
          <p data-reveal className="reveal-fade stagger-3" style={{ fontFamily: "var(--font-body)", fontSize: "15px", color: "#888", lineHeight: "1.8", maxWidth: "560px", margin: "0 auto 48px" }}>
            Single-use construction is no longer acceptable. Every Modsol system is engineered for repeated deployment — the same components, reused across hundreds of projects, reducing material waste and delivering better value with every installation.
          </p>
          <div style={{ display: "flex", gap: "clamp(24px,4vw,72px)", justifyContent: "center", flexWrap: "wrap" }}>
            {["100% REUSABLE COMPONENTS", "ZERO SINGLE-USE STRUCTURES", "DESIGNED FOR MULTIPLE DEPLOYMENTS"].map((stat, i) => (
              <div key={stat} data-reveal className={`reveal-up stagger-${i + 4}`} style={{ textAlign: "center" }}>
                <div style={{ width: "28px", height: "2px", background: "#C6FF02", margin: "0 auto 10px" }} />
                <p style={{ fontFamily: "var(--font-display)", fontSize: "clamp(16px,2vw,26px)", color: "#fff" }}>{stat}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── S7: CLOSING MANIFESTO ── */}
      <Section id="s7" style={{ background: "#000", justifyContent: "center", textAlign: "center", ...SUBTLE_GRID }}>
        <RotatingSquares />
        <div style={{ position: "relative", zIndex: 1, width: "100%", padding: PAD }}>
          {[
            { text: "BUILD.", color: "#C6FF02", stroke: false, dir: "reveal-left" },
            { text: "BOLD.", color: "transparent", stroke: true, dir: "reveal-right" },
            { text: "ALWAYS.", color: "#fff", stroke: false, dir: "reveal-left" },
          ].map((line, i) => (
            <div key={line.text} data-reveal className={`${line.dir} stagger-${(i + 1) * 2}`} style={{ fontFamily: "var(--font-display)", fontSize: "clamp(72px,16vw,220px)", lineHeight: 0.9, color: line.color, WebkitTextStroke: line.stroke ? "2px #fff" : "0", letterSpacing: "-0.01em" }}>
              {line.text}
            </div>
          ))}
          <div data-reveal className="reveal-fade stagger-7" style={{ marginTop: "48px" }}>
            <p style={{ fontFamily: "var(--font-mono)", fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", color: "#888", marginBottom: "28px" }}>
              Modsol Limited — Modular Architecture Systems
            </p>
            <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/products" className="btn-primary">View The Products</Link>
              <Link href="/contact" className="btn-primary">Get In Touch</Link>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}

import Link from "next/link";

const heroBlocks = [
  "rgba(198,255,2,0.6)", "#1a1a1a", "rgba(198,255,2,0.15)", "#111", "rgba(198,255,2,0.08)",
  "#1a1a1a", "rgba(198,255,2,0.4)", "#222", "rgba(198,255,2,0.6)", "#111",
  "#111", "#1c1c1c", "rgba(198,255,2,0.2)", "#1a1a1a", "rgba(198,255,2,0.5)",
  "rgba(198,255,2,0.1)", "#111", "#1a1a1a", "rgba(198,255,2,0.08)", "#222",
  "rgba(198,255,2,0.3)", "#151515", "rgba(198,255,2,0.7)", "#1a1a1a", "rgba(198,255,2,0.15)",
];

export default function HeroSection() {
  return (
    <section className="hero" id="home">
      <div className="hero-bg" />
      <div className="hero-grid" />
      <div className="hero-accent-v" />
      <div className="hero-accent-h" />

      {/* Right image block */}
      <div className="hero-image-block">
        <div className="hero-image-inner" />
        <div className="hero-image-label">replace with hero photography</div>
        {/* Modular blocks decorative grid */}
        <div className="hero-blocks">
          {heroBlocks.map((bg, i) => (
            <div key={i} style={{ background: bg, border: "1px solid rgba(255,255,255,0.04)" }} />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="hero-content">
        <p className="hero-eyebrow">01 — Modular Systems Architecture</p>
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

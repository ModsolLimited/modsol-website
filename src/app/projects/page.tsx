import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/layout/PageHero";

export const metadata: Metadata = { title: "Projects" };

const projects = [
  {
    id: "proj-am",
    label: "Aston Martin Aramco F1",
    sector: "Motorsport / Hospitality",
    year: "2023–2024",
    system: "Modblock + Modwall",
    desc: "Full-season paddock club hospitality for Aston Martin Aramco Formula 1 team. Built and struck at 23 race weekends across five continents — Bahrain to Las Vegas. Identical structural specification at every venue. Zero build failures across a two-season programme.",
    span: true,
  },
  {
    id: "proj-oa",
    label: "Oasis Live '25",
    sector: "Music / Events",
    year: "2025",
    system: "Modframe + Modwall",
    desc: "Canopy, perimeter and VIP structures for the Oasis reunion world tour. 17 stadium shows, 1.2M+ audience across the UK and Europe.",
    span: false,
  },
  {
    id: "proj-pp",
    label: "Politico EU Summit",
    sector: "Media / Conference",
    year: "2024",
    system: "Modwall + Modblock",
    desc: "Media conference environment for the Politico European Political Summit. 3,000 delegates, accreditation infrastructure and press facilities — 48hr build window.",
    span: false,
  },
  {
    id: "proj-nfl",
    label: "NFL London Games",
    sector: "Sport / Sponsorship",
    year: "2024",
    system: "Modblock + Modframe",
    desc: "NFL sponsor activation village and fan experience infrastructure at Wembley Stadium. Four games, four full build cycles, consistent quality across the entire series.",
    span: false,
  },
  {
    id: "proj-luxury",
    label: "Luxury Fashion Flagship",
    sector: "Retail / Brand",
    year: "2023–2024",
    system: "Modwall + Modblock",
    desc: "Six-month temporary flagship for a global luxury fashion house in central London. 400m² across three floors — engineered to permanent retail quality. Full structural planning consent obtained in under three weeks.",
    span: false,
  },
  {
    id: "proj-tech",
    label: "Global Technology Launch",
    sector: "Brand Activation",
    year: "2023",
    system: "Modframe + Modwall + Modblock",
    desc: "Immersive product launch environment across 2,800m² for a global technology brand. Full platform deployment — the largest combined system build in Modsol's history at the time.",
    span: false,
  },
];

const gradients: Record<string, string> = {
  "proj-am": "linear-gradient(135deg, #0a0a0a 0%, #1a1510 50%, #2a1f0a 100%)",
  "proj-oa": "linear-gradient(135deg, #0a0a0a 0%, #0f1520 50%, #0a1530 100%)",
  "proj-pp": "linear-gradient(135deg, #0a0a0a 0%, #0e0e14 50%, #14141e 100%)",
  "proj-nfl": "linear-gradient(135deg, #0a0a0a 0%, #0a0f14 50%, #0a1420 100%)",
  "proj-luxury": "linear-gradient(135deg, #0a0a0a 0%, #14100e 50%, #1e1410 100%)",
  "proj-tech": "linear-gradient(135deg, #0a0a0a 0%, #0f140a 50%, #141e0a 100%)",
};

const watermarks: Record<string, string> = {
  "proj-am": "AM",
  "proj-oa": "OASIS",
  "proj-pp": "PP",
  "proj-nfl": "NFL",
  "proj-luxury": "LUX",
  "proj-tech": "TECH",
};

const track = [
  { year: "2008–2010", label: "Premium Event Marquees", detail: "Building the UK's finest temporary event structures — frame marquees, tensile canopies, high-end event shelters. First 50 projects completed." },
  { year: "2011–2013", label: "Transitional Period", detail: "Development of first Modblock prototype. First hybrid marquee/modular builds for premium clients who wanted more than tent systems could deliver." },
  { year: "2014–2016", label: "Platform Launch", detail: "Modblock and Modwall systems commercially launched. First international projects. F1 paddock hospitality built for the first time." },
  { year: "2017–2019", label: "Global Expansion", detail: "Modframe launched. Operations in 30+ countries. First world expo pavilion. Revenue doubles in 18 months." },
  { year: "2020–2022", label: "Pandemic Pivot", detail: "Systems deployed for emergency healthcare, welfare and command infrastructure. Client base expands beyond events. First permanent-planning approvals." },
  { year: "2023–Present", label: "Architectural Era", detail: "500+ projects completed. Recognised as a temporary architecture company. Platform specified by architects, not just events producers." },
];

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        label="04 — Projects"
        title="500+<br/>Projects."
        subtitle="A track record built across five continents, the world's biggest events, and the most demanding clients in sport, brand, culture and commerce. Fifteen years. Zero missed deadlines."
      />

      {/* Featured projects grid */}
      <section className="section-pad" style={{ background: "var(--black)" }}>
        <div className="container">
          <p className="section-label">Featured Projects</p>
          <div className="projects-grid" style={{ marginTop: "48px" }}>
            {projects.map((p) => (
              <div
                key={p.id}
                className="project-card"
                style={{
                  gridColumn: p.span ? "span 2" : undefined,
                  aspectRatio: p.span ? "16/7" : "4/3",
                  background: gradients[p.id],
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <div style={{ position: "absolute", inset: 0, backgroundImage: "repeating-linear-gradient(0deg,transparent,transparent 39px,rgba(255,255,255,0.015) 39px,rgba(255,255,255,0.015) 40px),repeating-linear-gradient(90deg,transparent,transparent 39px,rgba(255,255,255,0.015) 39px,rgba(255,255,255,0.015) 40px)" }} />
                <div style={{ position: "absolute", bottom: "-20px", right: "-10px", fontFamily: "var(--font-display)", fontSize: "clamp(80px, 12vw, 200px)", color: "rgba(255,255,255,0.03)", lineHeight: 1, userSelect: "none", pointerEvents: "none" }}>{watermarks[p.id]}</div>
                <div style={{ position: "absolute", inset: 0, padding: "32px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                    <span style={{ fontFamily: "var(--font-mono)", fontSize: "9px", color: "rgba(255,255,255,0.4)", letterSpacing: "0.2em", textTransform: "uppercase" }}>{p.year}</span>
                    <span style={{ fontFamily: "var(--font-mono)", fontSize: "9px", color: "var(--yellow)", letterSpacing: "0.15em", textTransform: "uppercase", background: "rgba(198,255,2,0.08)", padding: "4px 10px", border: "1px solid rgba(198,255,2,0.2)" }}>{p.system}</span>
                  </div>
                  <div>
                    <div style={{ fontFamily: "var(--font-mono)", fontSize: "9px", color: "rgba(255,255,255,0.4)", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "8px" }}>{p.sector}</div>
                    <h3 style={{ fontFamily: "var(--font-display)", fontSize: p.span ? "clamp(32px, 4vw, 56px)" : "clamp(24px, 3vw, 40px)", color: "var(--white)", lineHeight: 1, marginBottom: "12px", letterSpacing: "0.02em" }}>{p.label}</h3>
                    <p style={{ fontSize: "13px", color: "var(--muted)", lineHeight: "1.6", maxWidth: "480px" }}>{p.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project track record timeline */}
      <section className="section-pad" style={{ background: "var(--dark)", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <div className="container">
          <p className="section-label">Track Record</p>
          <h2 className="section-title reveal" style={{ marginBottom: "48px" }}>15 Years<br /><span style={{ color: "var(--yellow)" }}>of Projects.</span></h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "1px", background: "rgba(255,255,255,0.06)" }}>
            {track.map((t) => (
              <div key={t.year} style={{ background: "var(--dark)", padding: "32px 40px", display: "grid", gridTemplateColumns: "160px 240px 1fr", gap: "40px", alignItems: "center" }}>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: "10px", color: "var(--yellow)", letterSpacing: "0.15em" }}>{t.year}</div>
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: "20px", color: "var(--white)", letterSpacing: "0.05em" }}>{t.label}</h3>
                <p style={{ fontSize: "13px", color: "var(--muted)", lineHeight: "1.7" }}>{t.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section-pad" style={{ background: "var(--black)", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <div className="container">
          <div className="stats-row">
            {[["500+","Projects Delivered"],["40+","Countries"],["5","Continents"],["0","Missed Deadlines"]].map(([n, l]) => (
              <div className="stat-item" key={l}>
                <div className="stat-num">{n}</div>
                <div className="stat-label">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Work with us */}
      <section className="section-pad" style={{ background: "var(--dark)", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "center" }}>
            <div className="reveal">
              <p className="section-label">Add your project</p>
              <h2 className="section-title" style={{ marginBottom: "24px" }}>Ready to Be<br /><span style={{ color: "var(--yellow)" }}>Project 501?</span></h2>
              <p style={{ fontSize: "15px", color: "var(--muted)", lineHeight: "1.9" }}>
                Every project in our portfolio started with a brief. The brief for number 501 might be yours. Tell us what you're building, where, and when — and we'll tell you exactly how we can deliver it.
              </p>
            </div>
            <div className="reveal" style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <Link href="/contact" className="btn-primary" style={{ textAlign: "center" }}>Start a Project</Link>
              <Link href="/solutions" className="btn-secondary" style={{ textAlign: "center" }}>View Our Solutions</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

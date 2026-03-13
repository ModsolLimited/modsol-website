import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/layout/PageHero";

export const metadata: Metadata = { title: "Projects" };

const projects = [
  {
    id: "proj-am",
    label: "Aston Martin Racing",
    sector: "Motorsport / Hospitality",
    year: "2024",
    system: "Modblock + Modwall",
    desc: "Full-season F1 paddock club hospitality for Aston Martin Aramco. Built and struck at 23 race weekends across five continents. Zero build failures.",
    span: true,
  },
  {
    id: "proj-oa",
    label: "Oasis Live '25",
    sector: "Music / Events",
    year: "2025",
    system: "Modframe + Modwall",
    desc: "Canopy and perimeter structures for the Oasis reunion world tour. 17 stadium shows, 1.2M+ audience.",
    span: false,
  },
  {
    id: "proj-pp",
    label: "Politico Pub Summit",
    sector: "Media / Events",
    year: "2024",
    system: "Modwall + Modblock",
    desc: "Conference and media environment for the Politico European Political Summit. 3,000 delegates, 48hr build window.",
    span: false,
  },
  {
    id: "proj-nfl",
    label: "NFL London Games",
    sector: "Sport / Events",
    year: "2024",
    system: "Modblock + Modframe",
    desc: "NFL sponsor activation village, Wembley Stadium. Four games, four full builds, consistent delivery across the series.",
    span: false,
  },
  {
    id: "proj-luxury",
    label: "Luxury Retail Pop-up",
    sector: "Retail / Brand",
    year: "2024",
    system: "Modwall + Modblock",
    desc: "Six-month temporary flagship for a luxury fashion house. 400m² over three floors — engineered to permanent quality.",
    span: false,
  },
  {
    id: "proj-tech",
    label: "Global Tech Brand Launch",
    sector: "Brand Activation",
    year: "2023",
    system: "Modframe + Modwall + Modblock",
    desc: "Immersive product launch environment for a global tech brand. Combined platform deployment across 2,800m².",
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

export default function ProjectsPage() {
  return (
    <>
      <PageHero label="04 — Projects" title="500+<br/>Projects." subtitle="A track record built across five continents, the world's biggest events, and the most demanding clients in sport, brand, and culture." />

      <section className="section-pad" style={{ background: "var(--black)" }}>
        <div className="container">
          <div className="projects-grid">
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

      <section className="section-pad" style={{ background: "var(--dark)", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <div className="container">
          <div className="stats-row">
            {[["500+","Projects Delivered"],["40+","Countries"],["5","Continents"],["12+","Years"]].map(([n, l]) => (
              <div className="stat-item" key={l}>
                <div className="stat-num">{n}</div>
                <div className="stat-label">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad" style={{ background: "var(--dark2)", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <p className="section-label" style={{ justifyContent: "center" }}>Add your project</p>
          <h2 className="section-title reveal" style={{ marginBottom: "32px" }}>Ready to Be<br /><span style={{ color: "var(--yellow)" }}>Project 501?</span></h2>
          <Link href="/contact" className="btn-primary">Start a Project</Link>
        </div>
      </section>
    </>
  );
}

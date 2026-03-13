import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/layout/PageHero";

export const metadata: Metadata = { title: "Solutions" };

const solutions = [
  { num: "01", slug: "events", label: "Events", desc: "From festival main stages to sporting GP paddocks. Structures that perform under pressure." },
  { num: "02", slug: "exhibitions", label: "Exhibitions", desc: "Exhibition stands and feature builds that command the hall. Defined by design, delivered on time." },
  { num: "03", slug: "hospitality", label: "Hospitality", desc: "Hospitality structures and brand environments for sport, culture, and corporate entertainment." },
  { num: "04", slug: "retail", label: "Retail & Pop-up", desc: "Temporary retail, pop-up flagships, and brand activation spaces that drive footfall and dwell time." },
  { num: "05", slug: "brand-activations", label: "Brand Activations", desc: "Experiential environments for product launches, press activations, and consumer campaigns." },
  { num: "06", slug: "temporary-offices", label: "Temporary Offices", desc: "Modular office, site cabin, and command centre environments that work as hard as your team." },
];

export default function SolutionsPage() {
  return (
    <>
      <PageHero label="03 — Solutions" title="Built for<br/>Every Brief." subtitle="Six industry verticals. One platform. Modsol's systems are deployed across the most demanding event, exhibition, and brand environments on Earth." />

      <section className="section-pad" style={{ background: "var(--black)" }}>
        <div className="container">
          <div style={{ display: "flex", flexDirection: "column", gap: "1px", background: "rgba(255,255,255,0.06)" }}>
            {solutions.map((s) => (
              <Link
                key={s.slug}
                href={`/solutions/${s.slug}`}
                style={{ textDecoration: "none", display: "block", background: "var(--black)", transition: "background 0.3s" }}
              >
                <div style={{ display: "grid", gridTemplateColumns: "120px 1fr 1fr auto", gap: "40px", alignItems: "center", padding: "40px", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
                  <div style={{ fontFamily: "var(--font-mono)", fontSize: "11px", color: "var(--muted)", letterSpacing: "0.2em" }}>{s.num}</div>
                  <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(28px, 3.5vw, 48px)", color: "var(--white)", letterSpacing: "0.02em", lineHeight: 1 }}>{s.label}</h2>
                  <p style={{ fontSize: "14px", color: "var(--muted)", lineHeight: "1.7" }}>{s.desc}</p>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: "9px", color: "var(--yellow)", letterSpacing: "0.2em", textTransform: "uppercase", whiteSpace: "nowrap" }}>Explore →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad" style={{ background: "var(--dark)", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "center" }}>
            <div className="reveal">
              <p className="section-label">Cross-Sector Capability</p>
              <h2 className="section-title" style={{ marginBottom: "24px" }}>One Platform.<br /><span style={{ color: "var(--yellow)" }}>Every Brief.</span></h2>
              <p style={{ fontSize: "15px", color: "var(--muted)", lineHeight: "1.8" }}>
                The Modblock, Modwall, and Modframe are specified across all six sectors — often in combination within a single project. Our cross-sector experience means that when a brief is complex, we've usually built something harder.
              </p>
            </div>
            <div className="reveal">
              <div className="stats-row" style={{ gridTemplateColumns: "repeat(2, 1fr)", gap: "40px" }}>
                {[["500+","Projects"],["40+","Countries"],["6","Sectors"],["12+","Years"]].map(([n, l]) => (
                  <div className="stat-item" key={l}>
                    <div className="stat-num">{n}</div>
                    <div className="stat-label">{l}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad" style={{ background: "var(--dark2)", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <p className="section-label" style={{ justifyContent: "center" }}>Tell us your brief</p>
          <h2 className="section-title reveal" style={{ marginBottom: "32px" }}>What Are<br /><span style={{ color: "var(--yellow)" }}>You Building?</span></h2>
          <Link href="/contact" className="btn-primary">Start a Project</Link>
        </div>
      </section>
    </>
  );
}

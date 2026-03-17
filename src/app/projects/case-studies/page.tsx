import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/layout/PageHero";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";

export const metadata: Metadata = { title: "Case Studies — Modsol Projects" };

const studies = [
  {
    client: "Aston Martin F1",
    title: "Full-Season Paddock Hospitality",
    sector: "Motorsport",
    detail: "23-race global circuit. Identical specification at every venue from Bahrain to Las Vegas. Assembled and struck at each circuit in under 48 hours.",
    stat: "23 Races",
  },
  {
    client: "Oasis Live '25",
    title: "Stadium Tour Production Village",
    sector: "Music & Events",
    detail: "Production village and VIP hospitality structures for the most anticipated stadium tour of the decade. Consistent builds across 17 UK and European venues.",
    stat: "17 Venues",
  },
  {
    client: "NFL London",
    title: "Sponsor Activation Village",
    sector: "Sport",
    detail: "Multi-brand sponsor activation village at Tottenham Hotspur Stadium. 14 individual brand environments within a single coordinated Modsol platform build.",
    stat: "14 Brands",
  },
  {
    client: "Glastonbury",
    title: "Festival VIP Infrastructure",
    sector: "Festival",
    detail: "Premium VIP and hospitality structures across the festival site. Built to withstand the full Glastonbury weather experience — and look good doing it.",
    stat: "5 Days",
  },
  {
    client: "Major Exhibition Client",
    title: "International Exhibition Stand",
    sector: "Exhibitions",
    detail: "2,400m² exhibition environment across two international trade shows. Same system, different configurations — demonstrating the true flexibility of the Modwall platform.",
    stat: "2,400m²",
  },
  {
    client: "Retail Brand",
    title: "Pop-Up Retail Flagship",
    sector: "Retail",
    detail: "Temporary flagship retail environment in a major city-centre location. Permanent-quality finishes, full climate control, brand-designed interior — open in 5 days.",
    stat: "5 Days",
  },
];

export default function CaseStudiesPage() {
  return (
    <>
      <PageHero
        label="The Projects — Case Studies"
        title="Built.<br/>Delivered."
        subtitle="A record of work across events, exhibitions, hospitality, retail and motorsport. Every project delivered on time. Every structure performing to spec."
      />

      <section className="section-pad" style={{ background: "var(--black)" }}>
        <div className="container">
          <div style={{ display: "flex", flexDirection: "column", gap: "1px", background: "rgba(255,255,255,0.06)" }}>
            {studies.map((s, i) => (
              <div key={s.title} className="reveal" style={{ background: i % 2 === 0 ? "var(--black)" : "var(--dark)", padding: "48px 40px", display: "grid", gridTemplateColumns: "80px 1fr 2fr 120px", gap: "48px", alignItems: "center" }}>
                <div style={{ fontFamily: "var(--font-display)", fontSize: "48px", color: "rgba(255,255,255,0.08)", letterSpacing: "0.02em", lineHeight: 1 }}>
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div>
                  <div style={{ fontFamily: "var(--font-mono)", fontSize: "9px", color: "var(--yellow)", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "8px" }}>{s.sector}</div>
                  <div style={{ fontFamily: "var(--font-display)", fontSize: "14px", color: "var(--muted)", letterSpacing: "0.1em", textTransform: "uppercase" }}>{s.client}</div>
                </div>
                <div>
                  <h3 style={{ fontFamily: "var(--font-display)", fontSize: "24px", color: "var(--white)", letterSpacing: "0.04em", marginBottom: "12px", lineHeight: 1.1 }}>{s.title}</h3>
                  <p style={{ fontSize: "13px", color: "var(--muted)", lineHeight: "1.7" }}>{s.detail}</p>
                </div>
                <div style={{ textAlign: "right" }}>
                  <div style={{ fontFamily: "var(--font-display)", fontSize: "28px", color: "var(--yellow)", letterSpacing: "0.02em" }}>{s.stat}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad" style={{ background: "var(--dark)", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <div className="container">
          <p className="section-label">Selected Images</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1px", background: "rgba(255,255,255,0.06)", marginTop: "48px" }}>
            <ImagePlaceholder label="Aston Martin F1 — Paddock Club" aspectRatio="4/3" />
            <ImagePlaceholder label="Oasis Live '25 — Stadium Production Village" aspectRatio="4/3" />
            <ImagePlaceholder label="NFL London — Sponsor Activation Village" aspectRatio="4/3" />
            <ImagePlaceholder label="Glastonbury — Festival VIP Structure" aspectRatio="4/3" />
            <ImagePlaceholder label="Exhibition — International Stand" aspectRatio="4/3" />
            <ImagePlaceholder label="Retail — Pop-Up Flagship" aspectRatio="4/3" />
          </div>
        </div>
      </section>

      <section className="section-pad" style={{ background: "var(--dark2)", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <p className="section-label" style={{ justifyContent: "center" }}>Add yours</p>
          <h2 className="section-title reveal" style={{ marginBottom: "32px" }}>
            Brief Us On<br /><span style={{ color: "var(--yellow)" }}>Your Project.</span>
          </h2>
          <div style={{ display: "flex", gap: "16px", justifyContent: "center" }}>
            <Link href="/contact" className="btn-primary">Start a Project</Link>
            <Link href="/projects" className="btn-secondary">All Projects</Link>
          </div>
        </div>
      </section>
    </>
  );
}

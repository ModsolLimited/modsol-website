import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/layout/PageHero";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";

export const metadata: Metadata = { title: "Gallery — Modsol Projects" };

export default function GalleryPage() {
  return (
    <>
      <PageHero
        label="The Projects — Gallery"
        title="The Work.<br/>In Full."
        subtitle="500+ projects across events, exhibitions, motorsport, hospitality, and retail. A selection of the work we are most proud of."
      />

      {/* Filter bar */}
      <section style={{ background: "var(--black)", borderBottom: "1px solid rgba(255,255,255,0.06)", padding: "0 40px" }}>
        <div className="container" style={{ display: "flex", gap: "0", overflowX: "auto" }}>
          {["All", "Motorsport", "Events", "Exhibitions", "Hospitality", "Retail", "Brand Activation"].map((cat, i) => (
            <button key={cat} style={{ fontFamily: "var(--font-mono)", fontSize: "9px", letterSpacing: "0.2em", textTransform: "uppercase", color: i === 0 ? "var(--yellow)" : "var(--muted)", background: "none", border: "none", borderBottom: i === 0 ? "2px solid var(--yellow)" : "2px solid transparent", padding: "20px 24px", cursor: "pointer", whiteSpace: "nowrap", transition: "color 0.2s" }}>
              {cat}
            </button>
          ))}
        </div>
      </section>

      <section className="section-pad" style={{ background: "var(--black)" }}>
        <div className="container">
          {/* Row 1 — 2-col asymmetric */}
          <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: "1px", background: "rgba(255,255,255,0.06)" }}>
            <ImagePlaceholder label="Aston Martin F1 — Paddock Club, British GP 2024" aspectRatio="16/9" />
            <div style={{ display: "flex", flexDirection: "column", gap: "1px" }}>
              <ImagePlaceholder label="Oasis Live '25 — Wembley Stadium Tour Build" aspectRatio="4/3" />
              <ImagePlaceholder label="NFL London — Sponsor Village, Tottenham" aspectRatio="4/3" />
            </div>
          </div>

          {/* Row 2 — 3-col even */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1px", background: "rgba(255,255,255,0.06)", marginTop: "1px" }}>
            <ImagePlaceholder label="Glastonbury — VIP Hospitality Structure" aspectRatio="4/3" />
            <ImagePlaceholder label="Automotive — Brand Activation, Silverstone" aspectRatio="4/3" />
            <ImagePlaceholder label="Wimbledon — Championship Hospitality Pavilion" aspectRatio="4/3" />
          </div>

          {/* Row 3 — 1-col full width */}
          <div style={{ marginTop: "1px", background: "rgba(255,255,255,0.06)", padding: "1px" }}>
            <ImagePlaceholder label="Exhibition — International Trade Show, Dubai" aspectRatio="21/9" />
          </div>

          {/* Row 4 — 3-col even */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1px", background: "rgba(255,255,255,0.06)", marginTop: "1px" }}>
            <ImagePlaceholder label="Retail — Pop-Up Flagship, Central London" aspectRatio="4/3" />
            <ImagePlaceholder label="Le Mans 24h — Team Hospitality Compound" aspectRatio="4/3" />
            <ImagePlaceholder label="Brand Activation — Festival Main Stage Area" aspectRatio="4/3" />
          </div>

          {/* Row 5 — 2-col asymmetric reversed */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: "1px", background: "rgba(255,255,255,0.06)", marginTop: "1px" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "1px" }}>
              <ImagePlaceholder label="Corporate — Awards Environment" aspectRatio="4/3" />
              <ImagePlaceholder label="Temporary Office — Construction Site HQ" aspectRatio="4/3" />
            </div>
            <ImagePlaceholder label="MotoGP — Paddock Hospitality Village" aspectRatio="16/9" />
          </div>

          {/* Row 6 — 4-col */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1px", background: "rgba(255,255,255,0.06)", marginTop: "1px" }}>
            <ImagePlaceholder label="Events — Backstage Media Centre" aspectRatio="1/1" />
            <ImagePlaceholder label="Exhibitions — Modwall Surface Detail" aspectRatio="1/1" />
            <ImagePlaceholder label="Motorsport — Garage Environment" aspectRatio="1/1" />
            <ImagePlaceholder label="Hospitality — Interior Detail" aspectRatio="1/1" />
          </div>
        </div>
      </section>

      <section className="section-pad" style={{ background: "var(--dark2)", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <p className="section-label" style={{ justifyContent: "center" }}>Your project next</p>
          <h2 className="section-title reveal" style={{ marginBottom: "32px" }}>
            Brief Us On<br /><span style={{ color: "var(--yellow)" }}>What You Need.</span>
          </h2>
          <div style={{ display: "flex", gap: "16px", justifyContent: "center" }}>
            <Link href="/contact" className="btn-primary">Start a Project</Link>
            <Link href="/projects/case-studies" className="btn-secondary">Case Studies</Link>
          </div>
        </div>
      </section>
    </>
  );
}

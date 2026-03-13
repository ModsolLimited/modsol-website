import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/layout/PageHero";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";

export const metadata: Metadata = { title: "Retail & Pop-up" };

const capabilities = [
  { title: "Pop-up Flagships", body: "Temporary flagship retail environments that carry the full weight of your brand. Freestanding, façade-attached, or site-specific." },
  { title: "Market & Fair Stalls", body: "Premium temporary retail units for markets, fairs, and outdoor shopping events that stand apart from the tent-and-table standard." },
  { title: "In-Store Brand Zones", body: "Modular in-store installations and brand zones that redefine a retailer's floor for product launches and seasonal campaigns." },
  { title: "Seasonal Retail", body: "Christmas, summer, and seasonal pop-up retail structures built fast, installed neat, and struck without trace." },
];

export default function RetailPage() {
  return (
    <>
      <PageHero label="Solution — Retail & Pop-up" title="Retail That<br/>Stops Traffic." subtitle="Temporary retail and pop-up environments that carry the full weight of your brand. Built fast, built bold, built right." />

      <section className="section-pad" style={{ background: "var(--black)" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "start" }}>
            <div className="reveal">
              <ImagePlaceholder label="Retail — Pop-up Flagship" aspectRatio="4/5" />
            </div>
            <div className="reveal">
              <p className="section-label">Retail Capability</p>
              <h2 className="section-title" style={{ marginBottom: "24px" }}>Temporary.<br /><span style={{ color: "var(--yellow)" }}>Never Cheap.</span></h2>
              <p style={{ fontSize: "15px", color: "var(--muted)", lineHeight: "1.8", marginBottom: "24px" }}>
                The pop-up retail market has a problem: most temporary structures look temporary. Modsol's platform changes that — delivering permanent-quality retail environments on a temporary timeline and budget.
              </p>
              <p style={{ fontSize: "15px", color: "var(--muted)", lineHeight: "1.8" }}>
                From weekend market activations to six-month brand flagships, we design and deliver retail environments that do justice to the brands inside them.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad" style={{ background: "var(--dark)", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <div className="container">
          <p className="section-label">Capabilities</p>
          <div className="platform-cards reveal" style={{ marginTop: "48px" }}>
            {capabilities.map((c) => (
              <div className="platform-card" key={c.title}>
                <h3>{c.title}</h3>
                <p>{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad" style={{ background: "var(--black)", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <div className="container">
          <p className="section-label">Retail Gallery</p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "1px", background: "rgba(255,255,255,0.06)", marginTop: "48px" }}>
            <ImagePlaceholder label="Retail — Pop-up Flagship" aspectRatio="4/3" />
            <ImagePlaceholder label="Retail — Seasonal Pop-up" aspectRatio="4/3" />
            <ImagePlaceholder label="Retail — In-Store Brand Zone" aspectRatio="4/3" />
          </div>
        </div>
      </section>

      <section className="section-pad" style={{ background: "var(--dark2)", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <p className="section-label" style={{ justifyContent: "center" }}>Brief us</p>
          <h2 className="section-title reveal" style={{ marginBottom: "32px" }}>Open Your<br /><span style={{ color: "var(--yellow)" }}>Pop-up.</span></h2>
          <div style={{ display: "flex", gap: "16px", justifyContent: "center" }}>
            <Link href="/contact" className="btn-primary">Start a Project</Link>
            <Link href="/solutions" className="btn-secondary">All Solutions</Link>
          </div>
        </div>
      </section>
    </>
  );
}

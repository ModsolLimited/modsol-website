import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/layout/PageHero";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";

export const metadata: Metadata = { title: "The Modframe" };

const specs = [
  { label: "Primary Section", value: "100 × 100mm extruded aluminium" },
  { label: "Max Span (unaided)", value: "6,000mm" },
  { label: "Max Span (with support)", value: "18,000mm" },
  { label: "Height Range", value: "2.4m – 12m" },
  { label: "Fabric Interface", value: "Integrated keder rail" },
  { label: "Load Rating", value: "75 kg/m² (fabric)" },
  { label: "Assembly Time", value: "4hr / standard bay (3 crew)" },
  { label: "Certification", value: "BS EN 1090-2 / EC3" },
];

const useCases = [
  { title: "Tension Canopies", body: "Overhead covered environments from 50m² to 5,000m². Integrated drainage, lighting track, and branded fabric from a single system." },
  { title: "Branded Superstructures", body: "Large-scale 3D brand structures for festival main stages, sponsor activations, and experiential installations visible at distance." },
  { title: "Walkway Systems", body: "Covered pedestrian routes, arrival corridors, and VIP pathways that brand the journey, not just the destination." },
  { title: "Exhibition Overheads", body: "Double-deck and overhead structures for exhibition stands that command the hall — fabric ceilings, lighting rigs, and hanging graphics." },
];

export default function ModframePage() {
  return (
    <>
      <PageHero
        label="Product 03"
        title="The<br/>Modframe"
        subtitle="Lightweight aluminium frame system for overhead structures, tension fabric canopies, and branded superstructures at scale."
      />

      <section className="section-pad" style={{ background: "var(--black)" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "start" }}>
            <div className="reveal">
              <ImagePlaceholder label="Modframe — System Overview" aspectRatio="4/5" />
            </div>
            <div className="reveal">
              <p className="section-label">System Overview</p>
              <h2 className="section-title" style={{ marginBottom: "24px" }}>Six Metres.<br /><span style={{ color: "var(--yellow)" }}>No Support.</span></h2>
              <p style={{ fontSize: "15px", color: "var(--muted)", lineHeight: "1.8", marginBottom: "24px" }}>
                The Modframe is Modsol's overhead system — engineered for spans that don't need a pole in the middle. The 100×100mm extruded aluminium primary section carries 6m clear span without an intermediate support, maintaining sightlines and floor space.
              </p>
              <p style={{ fontSize: "15px", color: "var(--muted)", lineHeight: "1.8", marginBottom: "40px" }}>
                Every frame bay features integrated keder rail for tension fabric connection, built-in lighting track channels, and a modular joint system that allows any configuration from a simple lean-to canopy to a full superstructure.
              </p>
              <div className="stats-row" style={{ gridTemplateColumns: "repeat(3, 1fr)", gap: "24px" }}>
                {[["6m","Clear Span"],["18m","Max with Support"],["4hr","/ Bay Build"]].map(([n, l]) => (
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

      <section className="section-pad" style={{ background: "var(--dark)", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <div className="container">
          <p className="section-label">Technical Specification</p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1px", background: "rgba(255,255,255,0.06)", marginTop: "48px" }}>
            {specs.map(({ label, value }) => (
              <div key={label} style={{ background: "var(--dark)", padding: "24px 32px", display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "10px", color: "var(--muted)", letterSpacing: "0.2em", textTransform: "uppercase" }}>{label}</span>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "13px", color: "var(--white)" }}>{value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad" style={{ background: "var(--black)", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <div className="container">
          <p className="section-label">Use Cases</p>
          <div className="platform-cards reveal" style={{ marginTop: "48px" }}>
            {useCases.map((u) => (
              <div className="platform-card" key={u.title}>
                <h3>{u.title}</h3>
                <p>{u.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad" style={{ background: "var(--dark)", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <div className="container">
          <p className="section-label">Project Gallery</p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1px", background: "rgba(255,255,255,0.06)", marginTop: "48px" }}>
            <ImagePlaceholder label="Modframe — Festival Canopy" aspectRatio="16/9" />
            <div style={{ display: "flex", flexDirection: "column", gap: "1px" }}>
              <ImagePlaceholder label="Modframe — Brand Superstructure" aspectRatio="4/3" />
              <ImagePlaceholder label="Modframe — Exhibition Overhead" aspectRatio="4/3" />
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad" style={{ background: "var(--dark2)", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <p className="section-label" style={{ justifyContent: "center" }}>Specify the Modframe</p>
          <h2 className="section-title reveal" style={{ marginBottom: "32px" }}>Cover More<br /><span style={{ color: "var(--yellow)" }}>Ground.</span></h2>
          <div style={{ display: "flex", gap: "16px", justifyContent: "center" }}>
            <Link href="/contact" className="btn-primary">Start a Project</Link>
            <Link href="/products" className="btn-secondary">All Products</Link>
          </div>
        </div>
      </section>
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/layout/PageHero";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";

export const metadata: Metadata = { title: "The Modblock" };

const specs = [
  { label: "Unit Weight", value: "320 kg" },
  { label: "Unit Dimensions", value: "1200 × 600 × 400mm" },
  { label: "Load Capacity", value: "800 kg / unit" },
  { label: "Stack Height", value: "Up to 6m" },
  { label: "Surface Options", value: "Raw / Painted / Wrapped" },
  { label: "Assembly Time", value: "48hrs (standard config)" },
  { label: "Crew Required", value: "4-person minimum" },
  { label: "Certification", value: "CE / TÜV Certified" },
];

const useCases = [
  { title: "Event Stages", body: "Elevated stage structures with integrated cable management and PA rigging points. Configured for amphitheatre, thrust, and in-the-round formats." },
  { title: "Brand Facades", body: "Stacked wall elevations that accept any surface treatment — vinyl, paint, timber, metal cladding, or illuminated panel systems." },
  { title: "Architectural Features", body: "Monolithic statement features, plinths, columns, and pavilion structures that command attention at any scale." },
  { title: "Retail Podiums", body: "Product display podiums and counter units built to the same system, consistent across your entire footprint." },
];

export default function ModblockPage() {
  return (
    <>
      <PageHero
        label="Product 01"
        title="The<br/>Modblock"
        subtitle="Heavyweight modular blocks engineered for load-bearing walls, branded facades, and architectural statement structures."
      />

      <section className="section-pad" style={{ background: "var(--black)" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "start" }}>
            <div className="reveal">
              <ImagePlaceholder label="Modblock — System Overview" aspectRatio="4/5" />
            </div>
            <div className="reveal">
              <p className="section-label">System Overview</p>
              <h2 className="section-title" style={{ marginBottom: "24px" }}>Precision-Cast.<br /><span style={{ color: "var(--yellow)" }}>Precision-Stacked.</span></h2>
              <p style={{ fontSize: "15px", color: "var(--muted)", lineHeight: "1.8", marginBottom: "24px" }}>
                The Modblock is Modsol's flagship structural platform. Engineered from high-density polymer composite with a steel-reinforced core, each unit is cast to tolerance and tested to load before it leaves our facility.
              </p>
              <p style={{ fontSize: "15px", color: "var(--muted)", lineHeight: "1.8", marginBottom: "40px" }}>
                The interlocking dovetail connection system means no tools, no pins, no guesswork. Stack vertically, arrange laterally, curve, or step — the geometry is yours.
              </p>
              <div className="stats-row" style={{ gridTemplateColumns: "repeat(3, 1fr)", gap: "24px" }}>
                {[["800kg","Load / Unit"],["6m","Max Stack"],["48h","Build Time"]].map(([n, l]) => (
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
          <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: "1px", background: "rgba(255,255,255,0.06)", marginTop: "48px" }}>
            <ImagePlaceholder label="Modblock — Aston Martin Stage" aspectRatio="16/9" />
            <div style={{ display: "flex", flexDirection: "column", gap: "1px" }}>
              <ImagePlaceholder label="Modblock — Brand Facade" aspectRatio="4/3" />
              <ImagePlaceholder label="Modblock — Retail Podium" aspectRatio="4/3" />
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad" style={{ background: "var(--dark2)", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <p className="section-label" style={{ justifyContent: "center" }}>Specify the Modblock</p>
          <h2 className="section-title reveal" style={{ marginBottom: "32px" }}>Build Something<br /><span style={{ color: "var(--yellow)" }}>Unmissable.</span></h2>
          <div style={{ display: "flex", gap: "16px", justifyContent: "center" }}>
            <Link href="/contact" className="btn-primary">Start a Project</Link>
            <Link href="/products" className="btn-secondary">All Products</Link>
          </div>
        </div>
      </section>
    </>
  );
}

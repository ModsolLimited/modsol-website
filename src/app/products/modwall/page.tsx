import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/layout/PageHero";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";

export const metadata: Metadata = { title: "The Modwall" };

const specs = [
  { label: "Panel Dimensions", value: "1200 × 2400mm" },
  { label: "Panel Weight", value: "28 kg" },
  { label: "Core Construction", value: "Honeycomb aluminium" },
  { label: "Surface Options", value: "Unlimited skin options" },
  { label: "Acoustic Rating", value: "Rw 32 dB" },
  { label: "Max Height", value: "4.8m (freestanding)" },
  { label: "Assembly Time", value: "2hr / 10m run (2 crew)" },
  { label: "Certification", value: "EN 13964 / BS 8000" },
];

const useCases = [
  { title: "Exhibition Perimeters", body: "Define your footprint with walls that carry your brand, not just your boundary. Full-face graphics, backlit panels, or raw industrial finishes." },
  { title: "Acoustic Divisions", body: "Conference and hospitality environments where noise separation matters. The Modwall's honeycomb core absorbs and isolates without bulk." },
  { title: "Brand Canvas", body: "The Modwall is the largest flat canvas in temporary architecture. Seamless graphic application across any run length." },
  { title: "Temporary Offices", body: "Private meeting rooms, green rooms, production suites, and sponsor hospitality built overnight and struck in hours." },
];

export default function ModwallPage() {
  return (
    <>
      <PageHero
        label="Product 02"
        title="The<br/>Modwall"
        subtitle="Configurable wall panels for perimeter definition, acoustic separation, and large-format brand canvas."
      />

      <section className="section-pad" style={{ background: "var(--black)" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "start" }}>
            <div className="reveal">
              <ImagePlaceholder label="Modwall — System Overview" aspectRatio="4/5" />
            </div>
            <div className="reveal">
              <p className="section-label">System Overview</p>
              <h2 className="section-title" style={{ marginBottom: "24px" }}>Skinnable to<br /><span style={{ color: "var(--yellow)" }}>Any Specification.</span></h2>
              <p style={{ fontSize: "15px", color: "var(--muted)", lineHeight: "1.8", marginBottom: "24px" }}>
                The Modwall panel system is built on a lightweight aluminium honeycomb chassis that accepts any surface treatment from raw paint to backlit LED arrays. The connection rail system means panels align and lock in seconds — no tools.
              </p>
              <p style={{ fontSize: "15px", color: "var(--muted)", lineHeight: "1.8", marginBottom: "40px" }}>
                Run lengths from one panel to one hundred. Configure as straight walls, L-shapes, U-shapes, or curved using our flexible connector range. Freestanding or fixed to floor and ceiling.
              </p>
              <div className="stats-row" style={{ gridTemplateColumns: "repeat(3, 1fr)", gap: "24px" }}>
                {[["Rw32","Acoustic Rating"],["4.8m","Max Height"],["2hr","/ 10m Run"]].map(([n, l]) => (
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
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "1px", background: "rgba(255,255,255,0.06)", marginTop: "48px" }}>
            <ImagePlaceholder label="Modwall — Exhibition Perimeter" aspectRatio="4/3" />
            <ImagePlaceholder label="Modwall — Brand Canvas" aspectRatio="4/3" />
            <ImagePlaceholder label="Modwall — Acoustic Division" aspectRatio="4/3" />
          </div>
        </div>
      </section>

      <section className="section-pad" style={{ background: "var(--dark2)", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <p className="section-label" style={{ justifyContent: "center" }}>Specify the Modwall</p>
          <h2 className="section-title reveal" style={{ marginBottom: "32px" }}>Define Your<br /><span style={{ color: "var(--yellow)" }}>Space.</span></h2>
          <div style={{ display: "flex", gap: "16px", justifyContent: "center" }}>
            <Link href="/contact" className="btn-primary">Start a Project</Link>
            <Link href="/products" className="btn-secondary">All Products</Link>
          </div>
        </div>
      </section>
    </>
  );
}

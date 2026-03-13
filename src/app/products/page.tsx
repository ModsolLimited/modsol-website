import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/layout/PageHero";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";

export const metadata: Metadata = { title: "Products" };

const products = [
  {
    num: "01",
    slug: "modblock",
    name: "The Modblock",
    tag: "Structure",
    desc: "Heavyweight modular blocks engineered for load-bearing walls, branded facades, and architectural statement structures. Precision-cast, precision-stacked.",
    specs: ["800kg load capacity", "Interlocking dovetail system", "48hr assembly"],
  },
  {
    num: "02",
    slug: "modwall",
    name: "The Modwall",
    tag: "Boundary",
    desc: "Configurable wall panels for perimeter definition, acoustic separation, and large-format brand canvas. Skinnable to any surface specification.",
    specs: ["Infinite skin options", "Sound-dampening core", "Freestanding or fixed"],
  },
  {
    num: "03",
    slug: "modframe",
    name: "The Modframe",
    tag: "Overhead",
    desc: "Lightweight aluminium frame system for overhead structures, tension fabric canopies, and branded superstructures at scale.",
    specs: ["6m span unaided", "Tension fabric ready", "Rapid strike"],
  },
];

export default function ProductsPage() {
  return (
    <>
      <PageHero label="02 — Products" title="Three Systems.<br/>Infinite Form." subtitle="Every Modsol structure is built from one of three engineered platforms. Combined or standalone, they define the state of the art in temporary architecture." />

      <section className="section-pad" style={{ background: "var(--black)" }}>
        <div className="container">
          <div style={{ display: "flex", flexDirection: "column", gap: "1px", background: "rgba(255,255,255,0.06)" }}>
            {products.map((p) => (
              <Link
                key={p.slug}
                href={`/products/${p.slug}`}
                style={{ textDecoration: "none", display: "block", background: "var(--black)", transition: "background 0.3s" }}
                className="product-row-link"
              >
                <div style={{ display: "grid", gridTemplateColumns: "120px 1fr 1fr auto", gap: "40px", alignItems: "center", padding: "48px 40px", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
                  <div style={{ fontFamily: "var(--font-mono)", fontSize: "11px", color: "var(--muted)", letterSpacing: "0.2em" }}>{p.num}</div>
                  <div>
                    <div style={{ fontFamily: "var(--font-mono)", fontSize: "9px", letterSpacing: "0.3em", color: "var(--yellow)", textTransform: "uppercase", marginBottom: "12px" }}>{p.tag}</div>
                    <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(32px, 4vw, 56px)", color: "var(--white)", letterSpacing: "0.02em", lineHeight: 1 }}>{p.name}</h2>
                  </div>
                  <p style={{ fontSize: "14px", color: "var(--muted)", lineHeight: "1.7", maxWidth: "360px" }}>{p.desc}</p>
                  <div style={{ display: "flex", flexDirection: "column", gap: "8px", alignItems: "flex-end" }}>
                    {p.specs.map((s) => (
                      <span key={s} style={{ fontFamily: "var(--font-mono)", fontSize: "9px", color: "rgba(255,255,255,0.4)", letterSpacing: "0.15em", textTransform: "uppercase", whiteSpace: "nowrap" }}>{s}</span>
                    ))}
                    <span style={{ marginTop: "12px", fontFamily: "var(--font-mono)", fontSize: "9px", color: "var(--yellow)", letterSpacing: "0.2em", textTransform: "uppercase" }}>View System →</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad" style={{ background: "var(--dark)" }}>
        <div className="container">
          <p className="section-label">Platform Gallery</p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "1px", background: "rgba(255,255,255,0.06)", marginTop: "48px" }}>
            <ImagePlaceholder label="Modblock — Event Structure" aspectRatio="4/3" />
            <ImagePlaceholder label="Modwall — Branded Perimeter" aspectRatio="4/3" />
            <ImagePlaceholder label="Modframe — Canopy Structure" aspectRatio="4/3" />
          </div>
        </div>
      </section>

      <section className="section-pad" style={{ background: "var(--dark2)", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "center" }}>
            <div className="reveal">
              <p className="section-label">System Compatibility</p>
              <h2 className="section-title" style={{ marginBottom: "24px" }}>Designed to Work<br /><span style={{ color: "var(--yellow)" }}>Together.</span></h2>
              <p style={{ fontSize: "15px", color: "var(--muted)", lineHeight: "1.8" }}>All three systems share the same dimensional language and connection methodology. Mix, match, stack, and span without compromise. One platform, infinite configurations.</p>
            </div>
            <div className="reveal">
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px" }}>
                {[["Shared Modular Grid","All systems align to a 400mm base grid"],["Universal Connectors","One hardware set across all three systems"],["Combined Load Tables","Pre-certified mixed-system configurations"],["Unified Strike Process","One crew strikes all three systems"]].map(([title, body]) => (
                  <div key={title} style={{ padding: "24px", background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}>
                    <div style={{ fontFamily: "var(--font-mono)", fontSize: "9px", color: "var(--yellow)", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "12px" }}>{title}</div>
                    <p style={{ fontSize: "13px", color: "var(--muted)", lineHeight: "1.6" }}>{body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad" style={{ background: "var(--black)", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <p className="section-label" style={{ justifyContent: "center" }}>Specify a system</p>
          <h2 className="section-title reveal" style={{ marginBottom: "32px" }}>Ready to<br /><span style={{ color: "var(--yellow)" }}>Spec Up?</span></h2>
          <Link href="/contact" className="btn-primary">Start a Project</Link>
        </div>
      </section>
    </>
  );
}

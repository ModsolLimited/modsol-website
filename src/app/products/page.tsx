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
    tag: "Structural",
    desc: "Heavy-duty modular block units precision-cast for load-bearing walls, statement facades, elevated platforms and architectural features. The system that gave Modsol its name — mass and permanence on a temporary timeline.",
    specs: ["800 kg load capacity per unit", "Interlocking dovetail connection", "6m max stack height", "48hr standard assembly"],
    highlight: "The flagship system. Where the mass of the architecture is the message.",
  },
  {
    num: "02",
    slug: "modwall",
    name: "The Modwall",
    tag: "Partition & Perimeter",
    desc: "Lightweight aluminium-core wall panels with a honeycomb structural chassis. Accepts any surface specification from raw paint to backlit LED arrays. The system for defining and enclosing space at permanent quality.",
    specs: ["Unlimited surface options", "Rw 32 dB acoustic rating", "4.8m max height (freestanding)", "2hr per 10m run (2 crew)"],
    highlight: "Every surface. Any finish. The wall system that makes space feel permanent.",
  },
  {
    num: "03",
    slug: "modframe",
    name: "The Modframe",
    tag: "Overhead & Span",
    desc: "Extruded aluminium primary frame system for canopies, overhead structures and large-format brand superstructures. 6m clear span without intermediate support — the system for covering ground at architectural scale.",
    specs: ["6m unaided clear span", "18m max with intermediate support", "Integrated keder rail (fabric ready)", "Height range: 2.4m – 12m"],
    highlight: "From Glastonbury canopies to F1 paddock overheads. Six metres without a pole.",
  },
];

export default function ProductsPage() {
  return (
    <>
      <PageHero
        label="02 — Products"
        title="Three Systems.<br/>Infinite Form."
        subtitle="Every Modsol structure is built from one of three engineered platforms — developed from 15 years of precision temporary construction. Combined or standalone, they define what temporary architecture can be."
      />

      {/* Product list */}
      <section className="section-pad" style={{ background: "var(--black)" }}>
        <div className="container">
          <div style={{ display: "flex", flexDirection: "column", gap: "1px", background: "rgba(255,255,255,0.06)" }}>
            {products.map((p) => (
              <Link key={p.slug} href={`/products/${p.slug}`} style={{ textDecoration: "none", display: "block", background: "var(--black)", transition: "background 0.3s" }}>
                <div style={{ padding: "48px 40px", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
                  <div style={{ display: "grid", gridTemplateColumns: "80px 240px 1fr auto", gap: "40px", alignItems: "start", marginBottom: "24px" }}>
                    <div style={{ fontFamily: "var(--font-mono)", fontSize: "11px", color: "var(--muted)", letterSpacing: "0.2em" }}>{p.num}</div>
                    <div>
                      <div style={{ fontFamily: "var(--font-mono)", fontSize: "9px", letterSpacing: "0.3em", color: "var(--yellow)", textTransform: "uppercase", marginBottom: "12px" }}>{p.tag}</div>
                      <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(32px, 4vw, 56px)", color: "var(--white)", letterSpacing: "0.02em", lineHeight: 1 }}>{p.name}</h2>
                    </div>
                    <p style={{ fontSize: "14px", color: "var(--muted)", lineHeight: "1.8", paddingTop: "4px" }}>{p.desc}</p>
                    <div style={{ display: "flex", flexDirection: "column", gap: "8px", alignItems: "flex-end" }}>
                      {p.specs.map((s) => (
                        <span key={s} style={{ fontFamily: "var(--font-mono)", fontSize: "9px", color: "rgba(255,255,255,0.4)", letterSpacing: "0.1em", textTransform: "uppercase", whiteSpace: "nowrap" }}>{s}</span>
                      ))}
                      <span style={{ marginTop: "16px", fontFamily: "var(--font-mono)", fontSize: "9px", color: "var(--yellow)", letterSpacing: "0.2em", textTransform: "uppercase" }}>View System →</span>
                    </div>
                  </div>
                  <div style={{ marginLeft: "120px", padding: "16px 20px", background: "rgba(198,255,2,0.04)", borderLeft: "2px solid rgba(198,255,2,0.3)" }}>
                    <p style={{ fontFamily: "var(--font-mono)", fontSize: "10px", color: "rgba(198,255,2,0.7)", letterSpacing: "0.1em", lineHeight: "1.5" }}>{p.highlight}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Platform origin */}
      <section className="section-pad" style={{ background: "var(--dark)", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "start" }}>
            <div className="reveal">
              <p className="section-label">Why We Built It</p>
              <h2 className="section-title" style={{ marginBottom: "24px" }}>Not Adapted.<br /><span style={{ color: "var(--yellow)" }}>Engineered.</span></h2>
              <p style={{ fontSize: "15px", color: "var(--muted)", lineHeight: "1.9", marginBottom: "24px" }}>
                Modsol started as a premium event marquee company. For three years, we built the finest tent-based temporary structures in the events industry. And in doing so, we understood precisely what was wrong with every product available to us.
              </p>
              <p style={{ fontSize: "15px", color: "var(--muted)", lineHeight: "1.9", marginBottom: "24px" }}>
                No marquee or modular system on the market was built for what our clients actually needed: permanent-quality architecture, on an event timeline, with the structural rigour to justify planning consent and the visual credibility to represent world-leading brands.
              </p>
              <p style={{ fontSize: "15px", color: "var(--muted)", lineHeight: "1.9" }}>
                So in 2011 we stopped adapting and started engineering. The Modblock, Modwall and Modframe are not adapted from existing products — they are original, proprietary systems engineered from the ground up for the demands of temporary architecture at the highest level.
              </p>
            </div>
            <div className="reveal">
              <ImagePlaceholder label="Platform — All Three Systems Combined" aspectRatio="4/3" />
              <div style={{ marginTop: "32px" }} className="stats-row">
                {[["3","Core Systems"],["400mm","Shared Base Grid"],["CE","Certified"],["∞","Configurations"]].map(([n, l]) => (
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

      {/* Gallery */}
      <section className="section-pad" style={{ background: "var(--black)", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <div className="container">
          <p className="section-label">Platform in Action</p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "1px", background: "rgba(255,255,255,0.06)", marginTop: "48px" }}>
            <ImagePlaceholder label="Modblock — Statement Event Facade" aspectRatio="4/3" />
            <ImagePlaceholder label="Modwall — Exhibition Perimeter" aspectRatio="4/3" />
            <ImagePlaceholder label="Modframe — Festival Canopy" aspectRatio="4/3" />
          </div>
        </div>
      </section>

      {/* Compatibility */}
      <section className="section-pad" style={{ background: "var(--dark)", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "center" }}>
            <div className="reveal">
              <p className="section-label">System Compatibility</p>
              <h2 className="section-title" style={{ marginBottom: "24px" }}>Designed to Work<br /><span style={{ color: "var(--yellow)" }}>Together.</span></h2>
              <p style={{ fontSize: "15px", color: "var(--muted)", lineHeight: "1.9" }}>
                All three systems share a 400mm base modular grid and a unified connection methodology. Mix, stack, span and combine across a single project without structural compromise — one platform, any configuration. Pre-certified mixed-system structural drawings are available for common combined applications.
              </p>
            </div>
            <div className="reveal">
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1px", background: "rgba(255,255,255,0.06)" }}>
                {[["400mm Grid","Shared base dimension across all three systems"],["Universal Hardware","One fixings set for all systems and combinations"],["Combined Load Data","Pre-certified mixed-system structural calculations"],["Unified Crew","One team, one briefing, three systems"]].map(([title, body]) => (
                  <div key={title} style={{ background: "var(--dark)", padding: "24px" }}>
                    <div style={{ fontFamily: "var(--font-mono)", fontSize: "9px", color: "var(--yellow)", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "12px" }}>{title}</div>
                    <p style={{ fontSize: "12px", color: "var(--muted)", lineHeight: "1.6" }}>{body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad" style={{ background: "var(--dark2)", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <p className="section-label" style={{ justifyContent: "center" }}>Specify a system</p>
          <h2 className="section-title reveal" style={{ marginBottom: "32px" }}>Ready to<br /><span style={{ color: "var(--yellow)" }}>Spec Up?</span></h2>
          <div style={{ display: "flex", gap: "16px", justifyContent: "center" }}>
            <Link href="/contact" className="btn-primary">Start a Project</Link>
            <Link href="/company" className="btn-secondary">About Modsol</Link>
          </div>
        </div>
      </section>
    </>
  );
}

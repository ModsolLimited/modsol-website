import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/layout/PageHero";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";

export const metadata: Metadata = { title: "Exhibition Solutions" };

const capabilities = [
  { title: "Custom Stand Builds", body: "Bespoke exhibition stands designed around your brief and built with the Modblock, Modwall and Modframe platform. Consistent structural quality from 9m² shell scheme upgrades to 900m² feature environments — no contractor handoffs, one accountable team." },
  { title: "Feature Installations", body: "Hero installations, centrepiece structures and interactive brand features that anchor your footprint and drive floor traffic. Our structural engineers work with exhibition designers to ensure the render becomes reality without compromise." },
  { title: "Gallery & Museum", body: "Temporary gallery environments and museum-quality display structures for touring exhibitions, cultural installations and seasonal programming. Precision detailing, clean finishes, zero visible fixings." },
  { title: "World Expos & Trade Shows", body: "National pavilion structures and large-scale trade show environments for the world's premier international exhibitions. Our global logistics capability means the same build quality whether you're in Dubai, Las Vegas, Shanghai or London." },
  { title: "Turnkey Show Management", body: "Full turnkey delivery from CAD design through to build, on-site show management and post-show strike. We handle logistics, crew, local authority liaison, and rigging approval. One team, total accountability." },
  { title: "Multi-Show Touring Stands", body: "The same stand, rebuilt to the same specification across a global trade show calendar. Our system approach means redeployable elements, consistent quality and significantly lower cost-per-show compared to bespoke contractor builds." },
];

export default function ExhibitionsPage() {
  return (
    <>
      <PageHero
        label="Solution — Exhibitions"
        title="Command<br/>the Hall."
        subtitle="Exhibition stands and feature builds designed to dominate the floor. Every stand is an architectural statement, built to the same precision as a permanent space."
      />

      <section className="section-pad" style={{ background: "var(--black)" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "start" }}>
            <div className="reveal">
              <ImagePlaceholder label="Exhibitions — Feature Stand Build" aspectRatio="4/5" />
            </div>
            <div className="reveal">
              <p className="section-label">Exhibitions Capability</p>
              <h2 className="section-title" style={{ marginBottom: "24px" }}>Stand Out.<br /><span style={{ color: "var(--yellow)" }}>Not Just Up.</span></h2>
              <p style={{ fontSize: "15px", color: "var(--muted)", lineHeight: "1.9", marginBottom: "24px" }}>
                The exhibition environment is one of the most competitive spaces a brand will ever occupy. You have seconds to pull people off the floor — and the quality of the structure around you tells a story before a word is spoken.
              </p>
              <p style={{ fontSize: "15px", color: "var(--muted)", lineHeight: "1.9", marginBottom: "24px" }}>
                Modsol's modular platform gives exhibition designers a structural language that keeps up with ambitious creative concepts. Raw block walls, full-height branded panels, tensile overhead canopies, curved faces, double-deck structures — the system accommodates all of it without the bespoke fabrication costs of a traditional contractor.
              </p>
              <p style={{ fontSize: "15px", color: "var(--muted)", lineHeight: "1.9", marginBottom: "40px" }}>
                We work as a direct structural partner to exhibition designers, brand agencies, and direct clients — removing the gap between what the render promises and what gets built.
              </p>
              <div style={{ padding: "24px", background: "rgba(198,255,2,0.04)", borderLeft: "2px solid var(--yellow)" }}>
                <p style={{ fontFamily: "var(--font-mono)", fontSize: "11px", color: "var(--yellow)", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "12px" }}>Designer Partnership</p>
                <p style={{ fontSize: "14px", color: "var(--off-white)", lineHeight: "1.7" }}>
                  We collaborate directly with exhibition designers at brief stage — providing structural feasibility input, load calculations and specification guidance before concept is locked. The earlier we're involved, the better the outcome.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad" style={{ background: "var(--dark)", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <div className="container">
          <p className="section-label">Capabilities</p>
          <h2 className="section-title reveal" style={{ marginBottom: "48px" }}>Every Format<br /><span style={{ color: "var(--yellow)" }}>of Exhibition.</span></h2>
          <div className="platform-cards reveal">
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
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "center" }}>
            <div className="reveal">
              <p className="section-label">The Touring Advantage</p>
              <h2 className="section-title" style={{ marginBottom: "24px" }}>Same Stand.<br /><span style={{ color: "var(--yellow)" }}>Every Show.</span></h2>
              <p style={{ fontSize: "15px", color: "var(--muted)", lineHeight: "1.9", marginBottom: "24px" }}>
                Most exhibition stands are built once, photographed once, and discarded. The Modsol system is built to travel. Our redeployable elements reduce cost-per-show significantly while maintaining the same quality standard at show number ten as show number one.
              </p>
              <p style={{ fontSize: "15px", color: "var(--muted)", lineHeight: "1.9" }}>
                We manage storage, transportation, pre-show refurbishment and multi-venue logistics — so your team focuses on the show, not the structure.
              </p>
            </div>
            <div className="reveal">
              <div style={{ display: "flex", flexDirection: "column", gap: "1px", background: "rgba(255,255,255,0.06)" }}>
                {[["Show 1 vs Show 10","Same structural quality guaranteed every build"],["Storage & Logistics","Managed system between show dates"],["Pre-Show Check","Full pre-build inspection before every deployment"],["Consistent Spec","Same drawings, same hardware, same finish"]].map(([title, body]) => (
                  <div key={title} style={{ background: "var(--dark)", padding: "24px 28px" }}>
                    <div style={{ fontFamily: "var(--font-mono)", fontSize: "9px", color: "var(--yellow)", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "8px" }}>{title}</div>
                    <p style={{ fontSize: "13px", color: "var(--muted)" }}>{body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad" style={{ background: "var(--dark)", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <div className="container">
          <p className="section-label">Exhibition Gallery</p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "1px", background: "rgba(255,255,255,0.06)", marginTop: "48px" }}>
            <ImagePlaceholder label="Exhibitions — Feature Stand" aspectRatio="4/3" />
            <ImagePlaceholder label="Exhibitions — Double-Deck Structure" aspectRatio="4/3" />
            <ImagePlaceholder label="Exhibitions — Gallery Environment" aspectRatio="4/3" />
            <ImagePlaceholder label="Exhibitions — World Expo Pavilion" aspectRatio="4/3" />
            <ImagePlaceholder label="Exhibitions — Touring Stand System" aspectRatio="4/3" />
            <ImagePlaceholder label="Exhibitions — Product Launch Feature" aspectRatio="4/3" />
          </div>
        </div>
      </section>

      <section className="section-pad" style={{ background: "var(--dark2)", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <p className="section-label" style={{ justifyContent: "center" }}>Brief us on your show</p>
          <h2 className="section-title reveal" style={{ marginBottom: "32px" }}>Your Next<br /><span style={{ color: "var(--yellow)" }}>Show?</span></h2>
          <div style={{ display: "flex", gap: "16px", justifyContent: "center" }}>
            <Link href="/contact" className="btn-primary">Start a Project</Link>
            <Link href="/solutions" className="btn-secondary">All Solutions</Link>
          </div>
        </div>
      </section>
    </>
  );
}

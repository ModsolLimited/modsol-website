import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/layout/PageHero";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";

export const metadata: Metadata = { title: "Exhibitions" };

const capabilities = [
  { title: "Exhibition Stand Builds", body: "Custom-built exhibition stands using the Modblock, Modwall, and Modframe platforms. Consistent quality from 9m² to 900m²." },
  { title: "Feature Installations", body: "Hero installations, product launch centrepieces, and interactive brand features that drive floor traffic and dwell time." },
  { title: "Show Management", body: "Turnkey delivery from CAD design through build, show management, and strike. One team, total accountability." },
  { title: "Multi-Show Touring", body: "The same stand, rebuilt to the same specification across a global trade show calendar. Consistent brand, lower cost per show." },
];

export default function ExhibitionsPage() {
  return (
    <>
      <PageHero label="Solution — Exhibitions" title="Command<br/>the Hall." subtitle="Exhibition stands and feature builds that stop the floor. Designed for brand impact, engineered for delivery confidence." />

      <section className="section-pad" style={{ background: "var(--black)" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "start" }}>
            <div className="reveal">
              <ImagePlaceholder label="Exhibitions — Feature Stand Build" aspectRatio="4/5" />
            </div>
            <div className="reveal">
              <p className="section-label">Exhibitions Capability</p>
              <h2 className="section-title" style={{ marginBottom: "24px" }}>Stand Out.<br /><span style={{ color: "var(--yellow)" }}>Not Just Up.</span></h2>
              <p style={{ fontSize: "15px", color: "var(--muted)", lineHeight: "1.8", marginBottom: "24px" }}>
                The Modsol platform gives exhibition designers a structural language that can keep up with ambitious design. No compromise between what the render promises and what gets built.
              </p>
              <p style={{ fontSize: "15px", color: "var(--muted)", lineHeight: "1.8" }}>
                We work with exhibition designers, brand agencies, and direct clients — bringing structural engineering, project management, and build capability under one roof.
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
          <p className="section-label">Exhibition Gallery</p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "1px", background: "rgba(255,255,255,0.06)", marginTop: "48px" }}>
            <ImagePlaceholder label="Exhibitions — Feature Stand" aspectRatio="4/3" />
            <ImagePlaceholder label="Exhibitions — Product Launch" aspectRatio="4/3" />
            <ImagePlaceholder label="Exhibitions — Multi-Show Tour" aspectRatio="4/3" />
          </div>
        </div>
      </section>

      <section className="section-pad" style={{ background: "var(--dark2)", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <p className="section-label" style={{ justifyContent: "center" }}>Brief us</p>
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

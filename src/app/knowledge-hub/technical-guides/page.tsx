import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/layout/PageHero";

export const metadata: Metadata = { title: "Technical Guides" };

const guides = [
  { date: "Jan 2025", tag: "Specification", title: "Specifying Modular Systems: A Structural Engineer's Guide", body: "Load tables, connection details, and certification requirements for the Modsol platform — everything a structural engineer needs to specify with confidence." },
  { date: "Dec 2024", tag: "Project Management", title: "48-Hour Builds: Project Management for Fast Turnarounds", body: "How Modsol manages complex builds in compressed windows — planning methodology, crew sequencing, and the checklist that keeps every build on track." },
  { date: "Nov 2024", tag: "Specification", title: "Modblock Load Tables: Complete Reference", body: "Full load capacity data for single-unit, stacked, and combined Modblock configurations. CE-certified, updated for 2024." },
  { date: "Oct 2024", tag: "Installation", title: "Modwall Surface Finish Options: Specification Guide", body: "Complete guide to surface treatment options for the Modwall system — from raw aluminium to full LED array, with specification requirements for each." },
  { date: "Sep 2024", tag: "Installation", title: "Modframe Fabric Tensioning: Installation Manual", body: "Step-by-step installation guide for keder-track fabric systems on the Modframe. Includes torque settings, failure modes, and inspection checklist." },
  { date: "Aug 2024", tag: "Certification", title: "CE Certification and the Modsol Platform", body: "What CE certification means for the Modsol platform, how to reference our certification in planning submissions, and how to request documentation." },
];

export default function TechnicalGuidesPage() {
  return (
    <>
      <PageHero label="Knowledge Hub — Technical Guides" title="Built on<br/>Engineering." subtitle="Specification documents, technical drawings, and installation guides for the Modsol platform. Everything you need to specify with confidence." />

      <section className="section-pad" style={{ background: "var(--black)" }}>
        <div className="container">
          <div className="articles-grid reveal">
            {guides.map((a) => (
              <div key={a.title} className="article-card">
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: "9px", color: "var(--yellow)", letterSpacing: "0.2em", textTransform: "uppercase" }}>{a.tag}</span>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: "9px", color: "var(--muted)", letterSpacing: "0.1em" }}>{a.date}</span>
                </div>
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: "22px", color: "var(--white)", marginBottom: "12px", lineHeight: "1.1", letterSpacing: "0.02em" }}>{a.title}</h3>
                <p style={{ fontSize: "13px", color: "var(--muted)", lineHeight: "1.6" }}>{a.body}</p>
                <div style={{ marginTop: "24px", fontFamily: "var(--font-mono)", fontSize: "9px", color: "var(--yellow)", letterSpacing: "0.2em", textTransform: "uppercase" }}>Download →</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad" style={{ background: "var(--dark)", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "center" }}>
            <div className="reveal">
              <p className="section-label">Need a specific document?</p>
              <h2 className="section-title" style={{ marginBottom: "24px" }}>Can&apos;t Find<br /><span style={{ color: "var(--yellow)" }}>What You Need?</span></h2>
              <p style={{ fontSize: "15px", color: "var(--muted)", lineHeight: "1.8" }}>Our technical team can provide custom load calculations, project-specific structural drawings, and certification documents on request. Contact us with your specific requirement.</p>
            </div>
            <div className="reveal" style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <Link href="/contact" className="btn-primary" style={{ textAlign: "center" }}>Request a Document</Link>
              <Link href="/knowledge-hub" className="btn-secondary" style={{ textAlign: "center" }}>Back to Knowledge Hub</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

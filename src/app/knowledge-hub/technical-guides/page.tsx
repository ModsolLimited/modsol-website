import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/layout/PageHero";

export const metadata: Metadata = { title: "Technical Guides" };

const guides = [
  { date: "Jan 2025", tag: "Specification", format: "PDF — 24 pages", title: "Specifying Modular Systems: A Structural Engineer's Guide", body: "Complete specification guide for the Modsol platform. Load tables, connection details, CE certification documentation, fixing requirements and planning submission templates." },
  { date: "Dec 2024", tag: "Project Management", format: "PDF — 18 pages", title: "48-Hour Build Management: The Complete Playbook", body: "Modsol's internal project management framework for compressed-window builds. Crew sequencing, material staging, quality checkpoints, site setup protocols and escalation procedures." },
  { date: "Nov 2024", tag: "Structural Data", format: "PDF — 32 pages", title: "Modblock Load Tables: Complete Reference 2024", body: "Full load capacity data for single-unit, stacked, combined and cantilevered Modblock configurations. CE-certified. Includes worked examples for common event and architectural applications." },
  { date: "Oct 2024", tag: "Specification", format: "PDF — 16 pages", title: "Modwall Surface Finish Specification Guide", body: "Complete guide to surface treatment options for the Modwall system. Vinyl wrap, paint, timber cladding, metal facing, backlit panel and LED array specifications — with fixing requirements and weight data for each." },
  { date: "Sep 2024", tag: "Installation", format: "PDF — 28 pages", title: "Modframe Fabric Tensioning: Installation Manual", body: "Step-by-step installation procedure for keder-track tension fabric on the Modframe. Torque specifications, fabric tension settings, common failure modes, inspection protocol and sign-off checklist." },
  { date: "Aug 2024", tag: "Certification", format: "PDF — 8 pages", title: "CE Certification Overview: Modsol Platform", body: "Summary of CE certification scope for all three Modsol systems. How to reference certification in planning applications, structural engineer sign-off procedures, and how to request project-specific documentation." },
  { date: "Jul 2024", tag: "Structural Data", format: "PDF — 20 pages", title: "Modframe Span and Load Reference", body: "Complete span data for the Modframe system — clear span, supported span, and canopy configurations. Includes wind load uplift calculations for the UK wind exposure zones and fabric area coefficients." },
  { date: "Jun 2024", tag: "Installation", format: "PDF — 14 pages", title: "Ground Anchor Systems: Selection and Installation Guide", body: "Selection criteria and installation procedures for Modsol ground anchor options across all three systems. Soil type requirements, load ratings, and guidance for hard standing, soft ground, and hybrid installations." },
];

export default function TechnicalGuidesPage() {
  return (
    <>
      <PageHero label="Knowledge Hub — Technical Guides" title="Built on<br/>Engineering." subtitle="Specification documents, structural data, installation manuals and certification guides for the Modsol platform. Everything needed to specify, design, or build with confidence." />

      <section className="section-pad" style={{ background: "var(--black)" }}>
        <div className="container">
          <div className="articles-grid reveal">
            {guides.map((a) => (
              <div key={a.title} className="article-card">
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "20px" }}>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: "9px", color: "var(--yellow)", letterSpacing: "0.2em", textTransform: "uppercase" }}>{a.tag}</span>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: "9px", color: "rgba(255,255,255,0.3)", letterSpacing: "0.1em" }}>{a.format}</span>
                </div>
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: "22px", color: "var(--white)", marginBottom: "12px", lineHeight: "1.1", letterSpacing: "0.02em" }}>{a.title}</h3>
                <p style={{ fontSize: "13px", color: "var(--muted)", lineHeight: "1.7" }}>{a.body}</p>
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
              <p style={{ fontSize: "15px", color: "var(--muted)", lineHeight: "1.9", marginBottom: "24px" }}>
                Our technical team can provide project-specific structural calculations, custom load tables, site-specific engineering reports, and full submission-ready documentation packages for planning applications.
              </p>
              <p style={{ fontSize: "15px", color: "var(--muted)", lineHeight: "1.9" }}>
                We also provide technical support to structural engineers and architects who are incorporating Modsol systems into a wider design — available at brief stage, not just at delivery.
              </p>
            </div>
            <div className="reveal" style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <Link href="/contact" className="btn-primary" style={{ textAlign: "center" }}>Request a Document</Link>
              <Link href="/knowledge-hub" className="btn-secondary" style={{ textAlign: "center" }}>Back to Knowledge Hub</Link>
              <div style={{ padding: "24px", background: "rgba(198,255,2,0.04)", border: "1px solid rgba(198,255,2,0.15)", marginTop: "8px" }}>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: "9px", color: "var(--yellow)", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "12px" }}>Structural Queries</div>
                <p style={{ fontSize: "13px", color: "var(--muted)", lineHeight: "1.7" }}>For urgent structural queries from engineers and architects, contact our technical team directly: <span style={{ color: "var(--white)" }}>technical@modsol.co.uk</span></p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

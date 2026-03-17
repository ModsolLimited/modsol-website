import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/layout/PageHero";

export const metadata: Metadata = { title: "The Team — Modsol Limited" };

export default function TeamPage() {
  return (
    <>
      <PageHero
        label="The Company — The Team"
        title="The People<br/>Behind the Platform."
        subtitle="A cross-disciplinary team of structural engineers, event production specialists, industrial designers, and project managers — every discipline that matters in temporary architecture, in-house."
      />

      <section className="section-pad" style={{ background: "var(--black)" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "start" }}>
            <div className="reveal">
              <p className="section-label">Our People</p>
              <h2 className="section-title" style={{ marginBottom: "32px" }}>
                Built by the best<br /><span style={{ color: "var(--yellow)" }}>in the business.</span>
              </h2>
              <p style={{ fontSize: "15px", color: "var(--muted)", lineHeight: "1.9", marginBottom: "24px" }}>
                Modsol is built by a cross-disciplinary team of structural engineers, event production specialists, industrial designers, and project managers. Every discipline that matters in temporary architecture is represented in-house — not outsourced, not contracted in at the last minute.
              </p>
              <p style={{ fontSize: "15px", color: "var(--muted)", lineHeight: "1.9", marginBottom: "24px" }}>
                Our structural engineers carry the same certifications demanded by permanent construction. Our production team has collective experience across hundreds of major events. Our project managers have never missed a build deadline in five years of tracking.
              </p>
              <p style={{ fontSize: "15px", color: "var(--muted)", lineHeight: "1.9" }}>
                That combination — architectural rigour with event-industry discipline — is what makes Modsol different from both a standard events supplier and a traditional construction company.
              </p>
            </div>
            <div className="reveal">
              <div className="stats-row" style={{ marginTop: "0", gridTemplateColumns: "repeat(2, 1fr)", gap: "24px" }}>
                {[["45+","Team Members"],["3","Core Disciplines"],["CE","Certified"],["ISO","9001 Compliant"]].map(([n, l]) => (
                  <div className="stat-item" key={l} style={{ padding: "32px", background: "var(--dark3)", borderTop: "2px solid var(--yellow)" }}>
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
        <div className="container" style={{ textAlign: "center" }}>
          <p className="section-label" style={{ justifyContent: "center" }}>Join Us</p>
          <h2 className="section-title reveal" style={{ marginBottom: "32px" }}>
            Work With<br /><span style={{ color: "var(--yellow)" }}>The Best.</span>
          </h2>
          <p style={{ fontSize: "15px", color: "var(--muted)", maxWidth: "560px", margin: "0 auto 40px", lineHeight: "1.9" }}>
            We are always looking for exceptional people. If you believe temporary architecture deserves the same rigour as permanent construction, we want to hear from you.
          </p>
          <div style={{ display: "flex", gap: "16px", justifyContent: "center" }}>
            <Link href="/contact" className="btn-primary">Get In Touch</Link>
            <Link href="/company" className="btn-secondary">The Company</Link>
          </div>
        </div>
      </section>
    </>
  );
}

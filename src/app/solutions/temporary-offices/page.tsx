import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/layout/PageHero";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";

export const metadata: Metadata = { title: "Temporary Offices" };

const capabilities = [
  { title: "Site Command Centres", body: "On-site project management facilities, construction command centres, and client-facing site offices built to a professional standard." },
  { title: "Event Production Offices", body: "Production offices, show control rooms, and technical management facilities that function as efficiently as your team." },
  { title: "Temporary Headquarters", body: "Interim headquarters and overflow office space during relocations, refurbishments, and rapid headcount growth." },
  { title: "Meeting & Conference Suites", body: "Temporary meeting rooms, conference facilities, and training suites deployed where and when they're needed." },
];

export default function TemporaryOfficesPage() {
  return (
    <>
      <PageHero label="Solution — Temporary Offices" title="Office Space.<br/>On Demand." subtitle="Modular office, site cabin, and command centre environments that work as hard as your team — without the permanent commitment." />

      <section className="section-pad" style={{ background: "var(--black)" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "start" }}>
            <div className="reveal">
              <ImagePlaceholder label="Temporary Offices — Site Command Centre" aspectRatio="4/5" />
            </div>
            <div className="reveal">
              <p className="section-label">Temporary Office Capability</p>
              <h2 className="section-title" style={{ marginBottom: "24px" }}>Professional.<br /><span style={{ color: "var(--yellow)" }}>Wherever You Need It.</span></h2>
              <p style={{ fontSize: "15px", color: "var(--muted)", lineHeight: "1.8", marginBottom: "24px" }}>
                The Modwall system creates partition walls, private offices, and meeting rooms that look and feel permanent — because they're engineered to the same standard. The difference is they go up in hours and come down without trace.
              </p>
              <p style={{ fontSize: "15px", color: "var(--muted)", lineHeight: "1.8" }}>
                Used by construction firms, event producers, and corporations managing rapid change, Modsol temporary office solutions bridge the gap between where you are and where you're going.
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
          <p className="section-label">Office Gallery</p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1px", background: "rgba(255,255,255,0.06)", marginTop: "48px" }}>
            <ImagePlaceholder label="Temporary Offices — Command Centre" aspectRatio="16/9" />
            <ImagePlaceholder label="Temporary Offices — Meeting Suite" aspectRatio="16/9" />
          </div>
        </div>
      </section>

      <section className="section-pad" style={{ background: "var(--dark2)", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <p className="section-label" style={{ justifyContent: "center" }}>Brief us</p>
          <h2 className="section-title reveal" style={{ marginBottom: "32px" }}>Need Space<br /><span style={{ color: "var(--yellow)" }}>Fast?</span></h2>
          <div style={{ display: "flex", gap: "16px", justifyContent: "center" }}>
            <Link href="/contact" className="btn-primary">Start a Project</Link>
            <Link href="/solutions" className="btn-secondary">All Solutions</Link>
          </div>
        </div>
      </section>
    </>
  );
}

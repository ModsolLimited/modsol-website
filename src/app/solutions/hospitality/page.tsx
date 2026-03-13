import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/layout/PageHero";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";

export const metadata: Metadata = { title: "Hospitality" };

const capabilities = [
  { title: "VIP Pavilions", body: "Private hospitality pavilions for sponsor entertaining at sport, culture, and music events. Designed to impress. Built to spec." },
  { title: "Brand Hospitality Villages", body: "Multi-unit brand villages with catering, service infrastructure, and front-of-house environments at scale." },
  { title: "Team & Crew Facilities", body: "Technical team facilities, broadcast compounds, and crew amenity villages that perform behind the scenes." },
  { title: "Corporate Entertainment", body: "Private and semi-private corporate entertaining environments designed around your guest experience brief." },
];

export default function HospitalityPage() {
  return (
    <>
      <PageHero label="Solution — Hospitality" title="Hospitality<br/>Built Bolder." subtitle="Temporary hospitality structures for sport, culture, and corporate entertainment that reflect the quality of your brand." />

      <section className="section-pad" style={{ background: "var(--black)" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "start" }}>
            <div className="reveal">
              <p className="section-label">Hospitality Capability</p>
              <h2 className="section-title" style={{ marginBottom: "24px" }}>The Guest<br /><span style={{ color: "var(--yellow)" }}>Experience Starts Here.</span></h2>
              <p style={{ fontSize: "15px", color: "var(--muted)", lineHeight: "1.8", marginBottom: "24px" }}>
                VIP hospitality environments are where your most important relationships are maintained. They should communicate the quality of your brand the moment a guest steps inside. Modsol's hospitality builds are designed and engineered to do exactly that.
              </p>
              <p style={{ fontSize: "15px", color: "var(--muted)", lineHeight: "1.8" }}>
                From 50-cover private pavilions to 2,000-cover brand villages, we design and deliver hospitality structures that work as hard as your hosting team.
              </p>
            </div>
            <div className="reveal">
              <ImagePlaceholder label="Hospitality — VIP Pavilion" aspectRatio="4/5" />
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
          <p className="section-label">Hospitality Gallery</p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1px", background: "rgba(255,255,255,0.06)", marginTop: "48px" }}>
            <ImagePlaceholder label="Hospitality — Sport Paddock" aspectRatio="16/9" />
            <ImagePlaceholder label="Hospitality — Brand Village" aspectRatio="16/9" />
          </div>
        </div>
      </section>

      <section className="section-pad" style={{ background: "var(--dark2)", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <p className="section-label" style={{ justifyContent: "center" }}>Brief us</p>
          <h2 className="section-title reveal" style={{ marginBottom: "32px" }}>Elevate Your<br /><span style={{ color: "var(--yellow)" }}>Hospitality.</span></h2>
          <div style={{ display: "flex", gap: "16px", justifyContent: "center" }}>
            <Link href="/contact" className="btn-primary">Start a Project</Link>
            <Link href="/solutions" className="btn-secondary">All Solutions</Link>
          </div>
        </div>
      </section>
    </>
  );
}

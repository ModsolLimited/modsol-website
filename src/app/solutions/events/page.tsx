import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/layout/PageHero";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";

export const metadata: Metadata = { title: "Events" };

const capabilities = [
  { title: "Festival Infrastructure", body: "Main stages, broadcast compounds, crew villages, and perimeter systems for music, culture, and sport festivals from 5,000 to 200,000 capacity." },
  { title: "Motorsport Paddocks", body: "Hospitality units, team garages, media centres, and VIP terraces engineered for the fastest environments in sport." },
  { title: "Sporting Stadia", body: "Temporary seating, sponsor activation zones, and overlay structures for major sporting championships and one-off events." },
  { title: "Concerts & Tours", body: "Tour-proof structures built for back-to-back builds. Rapid strike, consistent quality, zero tolerance for downtime." },
];

export default function EventsPage() {
  return (
    <>
      <PageHero label="Solution — Events" title="Built for<br/>the Big Stage." subtitle="From festival main stages to Formula 1 paddocks. Modsol's systems perform under the pressure of the world's most demanding live events." />

      <section className="section-pad" style={{ background: "var(--black)" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "start" }}>
            <div className="reveal">
              <p className="section-label">Events Capability</p>
              <h2 className="section-title" style={{ marginBottom: "24px" }}>When It Has to<br /><span style={{ color: "var(--yellow)" }}>Be Right.</span></h2>
              <p style={{ fontSize: "15px", color: "var(--muted)", lineHeight: "1.8", marginBottom: "24px" }}>
                Events don't have a rehearsal. When 80,000 people show up on Saturday morning, the structure has to be standing, safe, and right. Modsol's delivery record across 500+ events means our clients specify boldly — because they know we'll deliver.
              </p>
              <p style={{ fontSize: "15px", color: "var(--muted)", lineHeight: "1.8" }}>
                Our event-qualified crew, pre-certified structural drawings, and 48-hour emergency response capability mean that even when the unexpected happens, Modsol keeps the event moving.
              </p>
            </div>
            <div className="reveal">
              <ImagePlaceholder label="Events — Festival Main Stage" aspectRatio="4/5" />
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
          <p className="section-label">Events Gallery</p>
          <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: "1px", background: "rgba(255,255,255,0.06)", marginTop: "48px" }}>
            <ImagePlaceholder label="Events — Oasis Live '25" aspectRatio="16/9" />
            <div style={{ display: "flex", flexDirection: "column", gap: "1px" }}>
              <ImagePlaceholder label="Events — Motorsport Paddock" aspectRatio="4/3" />
              <ImagePlaceholder label="Events — Sporting Overlay" aspectRatio="4/3" />
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad" style={{ background: "var(--dark2)", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <p className="section-label" style={{ justifyContent: "center" }}>Brief us</p>
          <h2 className="section-title reveal" style={{ marginBottom: "32px" }}>Tell Us<br /><span style={{ color: "var(--yellow)" }}>Your Event.</span></h2>
          <div style={{ display: "flex", gap: "16px", justifyContent: "center" }}>
            <Link href="/contact" className="btn-primary">Start a Project</Link>
            <Link href="/solutions" className="btn-secondary">All Solutions</Link>
          </div>
        </div>
      </section>
    </>
  );
}

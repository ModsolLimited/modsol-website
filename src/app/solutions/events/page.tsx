import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/layout/PageHero";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";

export const metadata: Metadata = { title: "Event Solutions" };

const capabilities = [
  {
    title: "Festival Infrastructure",
    body: "Main stages, broadcast compounds, production villages, catering structures and perimeter systems for music, culture and sport festivals from 5,000 to 200,000 capacity. Our festival portfolio spans Glastonbury-scale events to boutique luxury festivals where every detail is scrutinised.",
  },
  {
    title: "Motorsport & Paddock",
    body: "Full-season hospitality structures, team garages, media centres and VIP terraces for Formula 1, Le Mans, MotoGP and touring car championships. Built to withstand 23-race global circuits — assembled, struck and shipped with zero build failures.",
  },
  {
    title: "Music Touring",
    body: "Tour-proof structures for artists and production companies that need consistent builds across a global run. Our touring systems are designed for back-to-back build cycles — same spec, same quality, different city every week.",
  },
  {
    title: "Sporting Stadia & Overlay",
    body: "Temporary seating, sponsor activation villages, media facilities and overlay structures for major sporting championships, one-off events and seasonal stadia upgrades. Pre-certified structural drawings for fast planning approval.",
  },
  {
    title: "Corporate Events",
    body: "Premium environments for product launches, annual conferences, awards ceremonies and brand days where the setting must reflect the quality of the occasion. Not an adapted marquee — a designed architectural space.",
  },
  {
    title: "Awards & Galas",
    body: "Black-tie environments with the structural confidence to carry theatrical lighting, complex rigging and the full production expectations of the most watched nights in any industry's calendar.",
  },
];

const process = [
  { step: "01", title: "Brief & Feasibility", body: "We review your event brief, site constraints, and timeline to establish what's possible. Within 48 hours, we provide an initial feasibility assessment and indicative costing." },
  { step: "02", title: "Structural Design", body: "Our in-house structural engineers produce certified drawings for your build. All designs meet CE / TÜV standards and are ready for submission to event licensing authorities." },
  { step: "03", title: "Fabrication & Logistics", body: "Systems are checked, prepped and loaded to our delivery schedule. For international events, we manage full export logistics and in-country customs clearance." },
  { step: "04", title: "Build & Strike", body: "Our SAFEPASS-certified crew executes the build to schedule. We manage full site coordination from first vehicle on site to final component off. Strike is as disciplined as the build." },
];

export default function EventsPage() {
  return (
    <>
      <PageHero
        label="Solution — Events"
        title="Built for<br/>the Big Stage."
        subtitle="From premium festival infrastructure to Formula 1 paddock clubs. Modsol's systems have been performing under the pressure of the world's most demanding live events since 2008."
      />

      {/* Intro */}
      <section className="section-pad" style={{ background: "var(--black)" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "start" }}>
            <div className="reveal">
              <p className="section-label">Events Capability</p>
              <h2 className="section-title" style={{ marginBottom: "24px" }}>When It Has to<br /><span style={{ color: "var(--yellow)" }}>Be Right.</span></h2>
              <p style={{ fontSize: "15px", color: "var(--muted)", lineHeight: "1.9", marginBottom: "24px" }}>
                Events don't have a rehearsal. When 80,000 people show up on Saturday morning, the structure has to be standing, safe, and exactly right. Our delivery record across 200+ events means clients specify boldly — because they know we deliver.
              </p>
              <p style={{ fontSize: "15px", color: "var(--muted)", lineHeight: "1.9", marginBottom: "24px" }}>
                We started building premium event structures in 2008 — frame marquees and tensile canopies for brands who refused the standard market offering. That grounding in event infrastructure is what makes our architectural systems different from every other modular product on the market. We understand what a structure has to endure on an event site, because we built our first thousand hours of them.
              </p>
              <p style={{ fontSize: "15px", color: "var(--muted)", lineHeight: "1.9", marginBottom: "40px" }}>
                Today, Modsol's platform extends far beyond the marquee: permanent-quality structures that build in hours, perform for the duration of any event, and strike without trace.
              </p>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                {[["200+","Events Delivered"],["23","Countries Worked"],["0","Missed Deadlines"],["48h","Emergency Response"]].map(([n, l]) => (
                  <div key={l} style={{ padding: "20px", background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}>
                    <div style={{ fontFamily: "var(--font-display)", fontSize: "32px", color: "var(--yellow)", letterSpacing: "0.02em" }}>{n}</div>
                    <div style={{ fontFamily: "var(--font-mono)", fontSize: "9px", color: "var(--muted)", letterSpacing: "0.15em", textTransform: "uppercase", marginTop: "4px" }}>{l}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="reveal" style={{ display: "flex", flexDirection: "column", gap: "1px" }}>
              <ImagePlaceholder label="Events — Festival Main Stage Structure" aspectRatio="4/3" />
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1px" }}>
                <ImagePlaceholder label="Events — F1 Paddock Hospitality" aspectRatio="1/1" />
                <ImagePlaceholder label="Events — Touring Concert Build" aspectRatio="1/1" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="section-pad" style={{ background: "var(--dark)", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <div className="container">
          <p className="section-label">Capabilities</p>
          <h2 className="section-title reveal" style={{ marginBottom: "48px" }}>Every Format.<br /><span style={{ color: "var(--yellow)" }}>Every Scale.</span></h2>
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

      {/* Process */}
      <section className="section-pad" style={{ background: "var(--black)", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <div className="container">
          <p className="section-label">How We Work</p>
          <h2 className="section-title reveal" style={{ marginBottom: "48px" }}>From Brief<br /><span style={{ color: "var(--yellow)" }}>to Build.</span></h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "1px", background: "rgba(255,255,255,0.06)" }}>
            {process.map((p) => (
              <div key={p.step} style={{ background: "var(--black)", padding: "40px", display: "grid", gridTemplateColumns: "80px 200px 1fr", gap: "40px", alignItems: "start" }}>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: "11px", color: "var(--yellow)", letterSpacing: "0.2em" }}>{p.step}</div>
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: "22px", color: "var(--white)", letterSpacing: "0.05em", lineHeight: 1.1 }}>{p.title}</h3>
                <p style={{ fontSize: "14px", color: "var(--muted)", lineHeight: "1.8" }}>{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="section-pad" style={{ background: "var(--dark)", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <div className="container">
          <p className="section-label">Project Gallery</p>
          <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: "1px", background: "rgba(255,255,255,0.06)", marginTop: "48px" }}>
            <ImagePlaceholder label="Events — Oasis Live '25 Stadium Tour" aspectRatio="16/9" />
            <div style={{ display: "flex", flexDirection: "column", gap: "1px" }}>
              <ImagePlaceholder label="Events — Aston Martin F1 Paddock Club" aspectRatio="4/3" />
              <ImagePlaceholder label="Events — NFL London Sponsor Village" aspectRatio="4/3" />
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "1px", background: "rgba(255,255,255,0.06)", marginTop: "1px" }}>
            <ImagePlaceholder label="Events — Festival VIP Structure" aspectRatio="4/3" />
            <ImagePlaceholder label="Events — Corporate Awards Environment" aspectRatio="4/3" />
            <ImagePlaceholder label="Events — Motorsport Media Centre" aspectRatio="4/3" />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-pad" style={{ background: "var(--dark2)", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <p className="section-label" style={{ justifyContent: "center" }}>Brief us on your event</p>
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

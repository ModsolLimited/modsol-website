import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/layout/PageHero";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";

export const metadata: Metadata = { title: "Shows & Festivals — Modsol Solutions" };

const capabilities = [
  { title: "Festival Main Infrastructure", body: "Stages, broadcast compounds, production villages, catering structures and perimeter systems for music, culture and sport festivals from 5,000 to 200,000 capacity. The Modblock and Modframe systems carry the structural loads demanded by full production rigs and headline-scale crowd forces." },
  { title: "VIP & Hospitality Compounds", body: "Premium festival hospitality environments that hold their own against the scale of the event around them. Modwall panel systems deliver the solid, branded aesthetic that separates a serious hospitality offer from a dressed tent." },
  { title: "Music Touring", body: "Tour-proof structures for artists and production companies running back-to-back city builds across a global run. Pre-numbered Modblock component packs build to identical specification every night — same quality, different city." },
  { title: "Sporting Overlay & Stadia", body: "Temporary seating, sponsor activation villages, media centres and structural overlay for major sporting championships. Pre-certified structural drawings for fast planning and licence submission. Modframe provides the large-span overhead coverage that stadium environments demand." },
  { title: "Corporate & Awards Events", body: "Premium environments for product launches, annual conferences and awards ceremonies where the setting must reflect the quality of the occasion. Modwall-clad interiors, Modblock structural systems, and Modframe canopies deliver architectural credibility on an event timeline." },
  { title: "Fan Zones & Public Activation", body: "Large-scale public-facing environments for sports, music and cultural events — ticketed zones, live screening areas, sponsor villages and catering infrastructure. Engineered for crowd density, rapid egress and all-weather operation." },
];

const process = [
  { step: "01", title: "Brief & Feasibility", body: "We review your event brief, site plan and timeline. Within 48 hours we provide an initial feasibility assessment and indicative system specification — so the design process runs forward, not backwards." },
  { step: "02", title: "Structural Design", body: "In-house structural engineers produce certified drawings to CE and TÜV standards, ready for submission to local authority, event licensing and safety bodies. Load calculations, wind studies and crowd-pressure modelling included." },
  { step: "03", title: "Fabrication & Logistics", body: "Systems are checked, packed and scheduled to arrive on site within your access window. For international events, we manage full export logistics, carnet documentation and in-country customs clearance." },
  { step: "04", title: "Build & Strike", body: "SAFEPASS-certified crew executes the build to schedule. We manage site coordination from first vehicle to final component off. Strike is as disciplined and damage-free as the build — because the system is going straight to the next event." },
];

export default function ShowsFestivalsPage() {
  return (
    <>
      <PageHero
        label="Solution — Shows & Festivals"
        title="Built for<br/>the Big Stage."
        subtitle="From boutique festival infrastructure to 200,000-capacity events. Modsol's Modblock, Modwall and Modframe systems have been delivering under the pressure of the world's most demanding live events since 2008."
      />

      <section className="section-pad" style={{ background: "var(--black)" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "start" }}>
            <div className="reveal">
              <p className="section-label">Shows & Festivals Capability</p>
              <h2 className="section-title" style={{ marginBottom: "24px" }}>When It Has to<br /><span style={{ color: "var(--yellow)" }}>Be Right.</span></h2>
              <p style={{ fontSize: "15px", color: "var(--muted)", lineHeight: "1.9", marginBottom: "24px" }}>
                Events don't have a rehearsal. When 80,000 people show up on Saturday morning, the structure has to be standing, safe and exactly right. Our delivery record across 200+ events means clients specify boldly — because they know we deliver.
              </p>
              <p style={{ fontSize: "15px", color: "var(--muted)", lineHeight: "1.9", marginBottom: "24px" }}>
                We started building premium temporary structures in 2008. That grounding in live event infrastructure is what makes the Modsol platform different from every other modular product on the market. We understand what a structure has to endure on an event site, because we built our first thousand hours of them.
              </p>
              <p style={{ fontSize: "15px", color: "var(--muted)", lineHeight: "1.9", marginBottom: "40px" }}>
                Today the platform extends far beyond the marquee: permanent-quality structures that build in hours, perform for the duration of any event, and strike without trace.
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
              <ImagePlaceholder label="Shows — Festival Main Stage Structure" aspectRatio="4/3" />
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1px" }}>
                <ImagePlaceholder label="Shows — VIP Hospitality Compound" aspectRatio="1/1" />
                <ImagePlaceholder label="Shows — Stadium Overlay Build" aspectRatio="1/1" />
              </div>
            </div>
          </div>
        </div>
      </section>

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

      <section className="section-pad" style={{ background: "var(--dark)", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <div className="container">
          <p className="section-label">Project Gallery</p>
          <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: "1px", background: "rgba(255,255,255,0.06)", marginTop: "48px" }}>
            <ImagePlaceholder label="Shows — Oasis Live '25 Stadium Tour" aspectRatio="16/9" />
            <div style={{ display: "flex", flexDirection: "column", gap: "1px" }}>
              <ImagePlaceholder label="Shows — Festival VIP Structure" aspectRatio="4/3" />
              <ImagePlaceholder label="Shows — NFL London Sponsor Village" aspectRatio="4/3" />
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "1px", background: "rgba(255,255,255,0.06)", marginTop: "1px" }}>
            <ImagePlaceholder label="Shows — Corporate Awards Environment" aspectRatio="4/3" />
            <ImagePlaceholder label="Shows — Touring Concert Build" aspectRatio="4/3" />
            <ImagePlaceholder label="Shows — Motorsport Media Centre" aspectRatio="4/3" />
          </div>
        </div>
      </section>

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

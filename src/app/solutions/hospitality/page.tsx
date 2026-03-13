import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/layout/PageHero";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";

export const metadata: Metadata = { title: "Hospitality Solutions" };

const capabilities = [
  { title: "VIP Pavilions", body: "Private hospitality pavilions from 50 to 2,000 covers — designed to impress from the moment a guest arrives. Full-height branded facades, premium interior finishes, integrated lighting and climate control. Built as a destination, not an afterthought." },
  { title: "F1 & Motorsport Paddock", body: "Full-season paddock hospitality structures for Formula 1, Le Mans, MotoGP and World Endurance Championship. Our motorsport systems are engineered for 23-race global circuits — assembled and struck at each venue, identical quality from Bahrain to Las Vegas." },
  { title: "Brand Hospitality Villages", body: "Multi-unit brand villages with catering infrastructure, service corridors, public-facing terraces and back-of-house welfare facilities. Managed as a single coordinated build across complex multi-structure footprints." },
  { title: "Sporting Championship Overlay", body: "Temporary hospitality overlay for major sporting championships — Wimbledon, The Open, Six Nations, the Olympics. Structures that understand the protocols of elite sport hospitality and deliver accordingly." },
  { title: "Corporate Entertainment Suites", body: "Bespoke corporate entertaining suites for brands that host clients, partners and prospects at premium events. Every detail from the structural envelope to the interior specification is designed around your guest experience brief." },
  { title: "Team & Crew Facilities", body: "Behind the scenes, the people who make events happen need facilities that match the professionalism of what the public sees. Technical team facilities, broadcast compounds, crew welfare and catering structures built to the same standard as the front-of-house." },
];

const sectors = [
  { name: "Motorsport", detail: "F1, MotoGP, WEC, BTCC", icon: "🏎" },
  { name: "Music & Festival", detail: "Artists, promoters, sponsors", icon: "🎵" },
  { name: "Sport", detail: "Tennis, golf, rugby, football", icon: "⚽" },
  { name: "Corporate", detail: "Product launches, partner days", icon: "🏢" },
];

export default function HospitalityPage() {
  return (
    <>
      <PageHero
        label="Solution — Hospitality"
        title="Hospitality<br/>Built Bolder."
        subtitle="Temporary hospitality structures where the quality of the environment is a direct reflection of your brand. From paddock clubs to championship villages — built to impress."
      />

      <section className="section-pad" style={{ background: "var(--black)" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "start" }}>
            <div className="reveal">
              <p className="section-label">Hospitality Capability</p>
              <h2 className="section-title" style={{ marginBottom: "24px" }}>The Guest Experience<br /><span style={{ color: "var(--yellow)" }}>Starts Here.</span></h2>
              <p style={{ fontSize: "15px", color: "var(--muted)", lineHeight: "1.9", marginBottom: "24px" }}>
                VIP hospitality is where your most important relationships are reinforced. The environment should communicate quality the moment a guest steps inside — not despite being temporary, but regardless of it.
              </p>
              <p style={{ fontSize: "15px", color: "var(--muted)", lineHeight: "1.9", marginBottom: "24px" }}>
                Modsol's hospitality structures are built to the same structural precision as our event infrastructure, but designed with the guest journey at the centre. Arrival façade, threshold experience, interior atmosphere — every element considered.
              </p>
              <p style={{ fontSize: "15px", color: "var(--muted)", lineHeight: "1.9", marginBottom: "40px" }}>
                We've built paddock hospitality for Formula 1 teams across multiple seasons, VIP structures for Wimbledon and The Open, and brand hospitality villages for some of the world's most recognised sponsors. The brief is always the same: make it feel permanent. We always do.
              </p>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1px", background: "rgba(255,255,255,0.06)" }}>
                {sectors.map((s) => (
                  <div key={s.name} style={{ background: "var(--dark)", padding: "24px" }}>
                    <div style={{ fontSize: "20px", marginBottom: "8px" }}>{s.icon}</div>
                    <div style={{ fontFamily: "var(--font-display)", fontSize: "18px", color: "var(--white)", marginBottom: "4px" }}>{s.name}</div>
                    <div style={{ fontFamily: "var(--font-mono)", fontSize: "9px", color: "var(--muted)", letterSpacing: "0.1em" }}>{s.detail}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="reveal" style={{ display: "flex", flexDirection: "column", gap: "1px" }}>
              <ImagePlaceholder label="Hospitality — F1 Paddock Club" aspectRatio="4/3" />
              <ImagePlaceholder label="Hospitality — VIP Championship Pavilion" aspectRatio="4/3" />
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad" style={{ background: "var(--dark)", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <div className="container">
          <p className="section-label">Capabilities</p>
          <h2 className="section-title reveal" style={{ marginBottom: "48px" }}>Every Format<br /><span style={{ color: "var(--yellow)" }}>of Hospitality.</span></h2>
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
              <p className="section-label">Season-Long Structures</p>
              <h2 className="section-title" style={{ marginBottom: "24px" }}>Rebuilt.<br /><span style={{ color: "var(--yellow)" }}>Race After Race.</span></h2>
              <p style={{ fontSize: "15px", color: "var(--muted)", lineHeight: "1.9", marginBottom: "24px" }}>
                Formula 1 hospitality is the most demanding temporary architecture brief in sport. The same structure must perform to the same standard at 23 venues across 5 continents — each with different site conditions, different access constraints, and different local regulations.
              </p>
              <p style={{ fontSize: "15px", color: "var(--muted)", lineHeight: "1.9" }}>
                Modsol's motorsport hospitality systems are built for exactly this. Pre-numbered, system-packed components that build identically every time. Our motorsport clients have never had a race weekend where the hospitality structure wasn't ready.
              </p>
            </div>
            <div className="reveal">
              <ImagePlaceholder label="Hospitality — Full-Season F1 Circuit Build" aspectRatio="16/9" />
              <div style={{ marginTop: "24px", display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "16px" }}>
                {[["23","Race Weekends"],["5","Continents"],["0","Build Failures"]].map(([n, l]) => (
                  <div key={l} style={{ textAlign: "center", padding: "20px", background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}>
                    <div style={{ fontFamily: "var(--font-display)", fontSize: "28px", color: "var(--yellow)" }}>{n}</div>
                    <div style={{ fontFamily: "var(--font-mono)", fontSize: "8px", color: "var(--muted)", letterSpacing: "0.15em", textTransform: "uppercase", marginTop: "4px" }}>{l}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad" style={{ background: "var(--dark)", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <div className="container">
          <p className="section-label">Hospitality Gallery</p>
          <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: "1px", background: "rgba(255,255,255,0.06)", marginTop: "48px" }}>
            <ImagePlaceholder label="Hospitality — Championship Village" aspectRatio="16/9" />
            <div style={{ display: "flex", flexDirection: "column", gap: "1px" }}>
              <ImagePlaceholder label="Hospitality — VIP Pavilion Interior" aspectRatio="4/3" />
              <ImagePlaceholder label="Hospitality — Brand Village Terrace" aspectRatio="4/3" />
            </div>
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

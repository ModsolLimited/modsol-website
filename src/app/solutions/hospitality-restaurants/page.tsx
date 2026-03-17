import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/layout/PageHero";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";

export const metadata: Metadata = { title: "Hospitality & Restaurants — Modsol Solutions" };

const capabilities = [
  { title: "VIP Pavilions & Paddock Clubs", body: "Private hospitality pavilions from 50 to 2,000 covers — designed to impress from the moment a guest arrives. Modwall-clad facades with premium interior finishes, integrated lighting and climate control. Built as a destination, not an afterthought." },
  { title: "Temporary Restaurants", body: "Full-service temporary restaurant environments with commercial kitchen infrastructure, front-of-house dining spaces, bar facilities and terrace extensions. The Modblock structural system supports the mechanical and electrical loads that professional catering demands." },
  { title: "Pop-Up Dining Destinations", body: "Short-run dining concepts, chef residencies and seasonal food and drink destinations that require a space with genuine architectural character. Modwall delivers the interior finish quality that a premium dining environment demands." },
  { title: "Brand Hospitality Villages", body: "Multi-unit brand villages combining catering infrastructure, service corridors, public-facing terraces and back-of-house welfare. Managed as a single coordinated Modblock-based build across complex multi-structure footprints." },
  { title: "Championship & Sporting Hospitality", body: "Temporary hospitality overlay for major sporting championships — from Wimbledon to The Open, Six Nations to the Olympics. Modframe canopies for terrace coverage; Modwall for interior partition and finish systems." },
  { title: "Motorsport Paddock Hospitality", body: "Full-season paddock structures for Formula 1, Le Mans, MotoGP and touring car championships. The same Modsol environment rebuilt identically at every circuit — assembled and struck within the permitted access window, race after race." },
];

export default function HospitalityRestaurantsPage() {
  return (
    <>
      <PageHero
        label="Solution — Hospitality & Restaurants"
        title="Hospitality<br/>Built Bolder."
        subtitle="VIP pavilions, temporary restaurants and championship hospitality structures. When the quality of the environment is a direct expression of your brand — Modsol builds it to match."
      />

      <section className="section-pad" style={{ background: "var(--black)" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "start" }}>
            <div className="reveal">
              <p className="section-label">Hospitality Capability</p>
              <h2 className="section-title" style={{ marginBottom: "24px" }}>The Guest Experience<br /><span style={{ color: "var(--yellow)" }}>Starts Here.</span></h2>
              <p style={{ fontSize: "15px", color: "var(--muted)", lineHeight: "1.9", marginBottom: "24px" }}>
                VIP hospitality is where your most important relationships are reinforced. The environment communicates quality the moment a guest steps inside — not despite being temporary, but regardless of it. Modsol's platform eliminates the quality gap between temporary and permanent.
              </p>
              <p style={{ fontSize: "15px", color: "var(--muted)", lineHeight: "1.9", marginBottom: "24px" }}>
                Our hospitality structures are built with the guest journey at the centre. Arrival facade, threshold experience, interior atmosphere — every element is considered. The Modwall panel system delivers the flush, architectural interior finish that serious hospitality requires. Modblock provides the structural confidence for multi-storey, double-height and open-span environments.
              </p>
              <p style={{ fontSize: "15px", color: "var(--muted)", lineHeight: "1.9", marginBottom: "40px" }}>
                We've built paddock hospitality for Formula 1 teams across multiple seasons, VIP structures for Wimbledon and The Open, and temporary restaurant destinations that have earned Michelin attention. The brief is always the same: make it feel permanent.
              </p>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                {[["80+","VIP Structures"],["23","Race Weekends p/a"],["0","Build Failures"],["50–2,000","Cover Range"]].map(([n, l]) => (
                  <div key={l} style={{ padding: "20px", background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}>
                    <div style={{ fontFamily: "var(--font-display)", fontSize: "32px", color: "var(--yellow)", letterSpacing: "0.02em" }}>{n}</div>
                    <div style={{ fontFamily: "var(--font-mono)", fontSize: "9px", color: "var(--muted)", letterSpacing: "0.15em", textTransform: "uppercase", marginTop: "4px" }}>{l}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="reveal" style={{ display: "flex", flexDirection: "column", gap: "1px" }}>
              <ImagePlaceholder label="Hospitality — F1 Paddock Club" aspectRatio="4/3" />
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1px" }}>
                <ImagePlaceholder label="Hospitality — Temporary Restaurant" aspectRatio="1/1" />
                <ImagePlaceholder label="Hospitality — VIP Championship Pavilion" aspectRatio="1/1" />
              </div>
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
                Formula 1 hospitality is the most demanding temporary architecture brief in sport. The same structure must perform to the same standard at 23 venues across 5 continents — each with different site conditions, access constraints and local regulations.
              </p>
              <p style={{ fontSize: "15px", color: "var(--muted)", lineHeight: "1.9" }}>
                Modsol's motorsport hospitality systems are built for exactly this brief. Pre-numbered, system-packed Modblock components that build identically every time. Our motorsport hospitality clients have never had a race weekend where the structure wasn't ready.
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
          <p className="section-label">Project Gallery</p>
          <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: "1px", background: "rgba(255,255,255,0.06)", marginTop: "48px" }}>
            <ImagePlaceholder label="Hospitality — Championship Village" aspectRatio="16/9" />
            <div style={{ display: "flex", flexDirection: "column", gap: "1px" }}>
              <ImagePlaceholder label="Hospitality — Pop-Up Restaurant Interior" aspectRatio="4/3" />
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

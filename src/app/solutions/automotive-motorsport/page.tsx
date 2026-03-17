import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/layout/PageHero";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";

export const metadata: Metadata = { title: "Automotive & Motorsport Solutions" };

const capabilities = [
  {
    title: "Race Circuit Hospitality Suites",
    body: "Purpose-built hospitality structures for race circuits worldwide — from permanent paddock clubs to seasonal VIP suites. Designed to perform under the scrutiny of the world's most demanding motorsport audiences. Full-height facades, premium finishes, integrated climate systems.",
  },
  {
    title: "Paddock Club Environments",
    body: "Full-season paddock hospitality for Formula 1, MotoGP, World Endurance Championship, and touring car series. Pre-numbered component systems that build identically at every circuit — same quality from Bahrain to Las Vegas, Melbourne to Monaco.",
  },
  {
    title: "Brand Activation at Motorsport Events",
    body: "Branded activation environments in and around race circuits — fan zones, sponsor experiences, retail activations, and interactive brand spaces. Structures designed to draw audiences in and hold them for the duration of a race weekend.",
  },
  {
    title: "Temporary Garages & Team Environments",
    body: "Modular garage structures, technical facilities, and team support environments for race series that require temporary or semi-permanent team infrastructure. Engineered to accommodate workshop equipment, vehicle preparation, and team operations.",
  },
  {
    title: "Fan Zones & Spectator Villages",
    body: "Large-scale fan engagement environments at major motorsport events — ticketed zones, broadcast viewing areas, sponsor activation villages, catering structures, and live spectator infrastructure for 5,000 to 50,000 people.",
  },
  {
    title: "Automotive Brand Launches",
    body: "Temporary architectural environments for vehicle launches, press reveals, and dealer events. Modsol structures give automotive brands complete control over the reveal environment — lighting, acoustics, sight lines, approach sequence — without the constraints of a fixed venue.",
  },
];

const process = [
  { step: "01", title: "Circuit Assessment", body: "We review your circuit or venue brief, site constraints, and seasonal schedule. Our motorsport team has experience across all major global circuits and understands access, assembly windows, and local regulations." },
  { step: "02", title: "Structural Design & Certification", body: "All structures are designed to circuit and event authority specifications. Certified structural drawings, load calculations, and H&S documentation produced in-house and ready for FIA or series submission where required." },
  { step: "03", title: "Season-Ready System Pack", body: "For full-season clients, components are numbered, packed and shipped to each circuit on schedule. The system builds identically every time — same components, same process, same result, regardless of continent." },
  { step: "04", title: "Build, Race, Strike", body: "Our SAFEPASS-certified crew executes the build within the permitted access window — typically 24–48 hours. We manage full site logistics, coordinate with circuit teams, and execute a clean, timely strike after every event." },
];

export default function AutomotiveMotorsportPage() {
  return (
    <>
      <PageHero
        label="Solution — Automotive & Motorsport"
        title="Built for<br/>the Circuit."
        subtitle="Race-proven modular structures for the world's most demanding motorsport environments. From Formula 1 paddock hospitality to fan zones, team facilities, and automotive brand experiences."
      />

      {/* Intro */}
      <section className="section-pad" style={{ background: "var(--black)" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "start" }}>
            <div className="reveal">
              <p className="section-label">Motorsport Capability</p>
              <h2 className="section-title" style={{ marginBottom: "24px" }}>23 Races.<br /><span style={{ color: "var(--yellow)" }}>Zero Build Failures.</span></h2>
              <p style={{ fontSize: "15px", color: "var(--muted)", lineHeight: "1.9", marginBottom: "24px" }}>
                Motorsport is the most demanding temporary architecture brief in the world. The structure must perform to the same standard at every venue — from the precision of Silverstone to the heat of Abu Dhabi, the grandeur of Monaco to the scale of Las Vegas. The access window is measured in hours. The standard is non-negotiable.
              </p>
              <p style={{ fontSize: "15px", color: "var(--muted)", lineHeight: "1.9", marginBottom: "24px" }}>
                Modsol's motorsport systems are built for this brief. Pre-numbered component packs. Certified structural drawings accepted by FIA and circuit authorities. A build crew that has executed the same system across every major racing circuit in the world.
              </p>
              <p style={{ fontSize: "15px", color: "var(--muted)", lineHeight: "1.9", marginBottom: "40px" }}>
                Our most visible motorsport work is the Aston Martin F1 team&apos;s full-season paddock hospitality — a Modsol structure rebuilt identically at all 23 Grand Prix circuits across the 2024 season. Same components. Same quality. Different continent every two weeks.
              </p>
              <div style={{ padding: "24px", background: "rgba(198,255,2,0.04)", borderLeft: "2px solid var(--yellow)" }}>
                <p style={{ fontFamily: "var(--font-mono)", fontSize: "11px", color: "var(--yellow)", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "12px" }}>Aston Martin F1</p>
                <p style={{ fontSize: "14px", color: "var(--off-white)", lineHeight: "1.7" }}>
                  &ldquo;The Modsol paddock club has become a defining part of the Aston Martin F1 race weekend experience. The quality is consistent, the build is reliable, and it looks exceptional at every circuit.&rdquo;
                </p>
              </div>
            </div>
            <div className="reveal" style={{ display: "flex", flexDirection: "column", gap: "1px" }}>
              <ImagePlaceholder label="Motorsport — Aston Martin F1 Paddock Club" aspectRatio="4/3" />
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1px" }}>
                <ImagePlaceholder label="Motorsport — Circuit Fan Zone" aspectRatio="1/1" />
                <ImagePlaceholder label="Motorsport — Brand Activation Area" aspectRatio="1/1" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section style={{ background: "var(--dark)", borderTop: "1px solid rgba(255,255,255,0.05)", padding: "48px 0" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1px", background: "rgba(255,255,255,0.06)" }}>
            {[["23","Race Weekends p/a"],["5","Continents Covered"],["48h","Max Build Window"],["0","Build Failures"]].map(([n, l]) => (
              <div key={l} style={{ background: "var(--dark)", padding: "32px 40px" }}>
                <div style={{ fontFamily: "var(--font-display)", fontSize: "48px", color: "var(--yellow)", letterSpacing: "0.02em", lineHeight: 1 }}>{n}</div>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: "9px", color: "var(--muted)", letterSpacing: "0.15em", textTransform: "uppercase", marginTop: "8px" }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="section-pad" style={{ background: "var(--black)", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <div className="container">
          <p className="section-label">Capabilities</p>
          <h2 className="section-title reveal" style={{ marginBottom: "48px" }}>Every Format.<br /><span style={{ color: "var(--yellow)" }}>Every Circuit.</span></h2>
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

      {/* Aston Martin Feature */}
      <section className="section-pad" style={{ background: "var(--dark)", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "center" }}>
            <div className="reveal">
              <p className="section-label">Featured Project</p>
              <h2 className="section-title" style={{ marginBottom: "24px" }}>Aston Martin F1<br /><span style={{ color: "var(--yellow)" }}>Paddock Club.</span></h2>
              <p style={{ fontSize: "15px", color: "var(--muted)", lineHeight: "1.9", marginBottom: "24px" }}>
                The Aston Martin F1 paddock club is one of the most recognised hospitality structures on the Formula 1 grid. Built by Modsol for the full 23-race 2024 season, the structure travels with the team to every circuit — assembled, dressed, operated, and struck at each venue.
              </p>
              <p style={{ fontSize: "15px", color: "var(--muted)", lineHeight: "1.9", marginBottom: "24px" }}>
                The brief: a hospitality environment that reflects the quality of the Aston Martin brand, performs identically regardless of circuit conditions or local infrastructure, and builds within the circuit&apos;s permitted access window. Every single race weekend.
              </p>
              <p style={{ fontSize: "15px", color: "var(--muted)", lineHeight: "1.9" }}>
                The result is a Modsol Modblock-based structure with Modwall panels, integrated lighting and climate control, branded exterior facade and premium interior specification — rebuilt 23 times across 5 continents without a single failure.
              </p>
            </div>
            <div className="reveal" style={{ display: "flex", flexDirection: "column", gap: "1px" }}>
              <ImagePlaceholder label="Aston Martin F1 — Paddock Club Facade" aspectRatio="16/9" />
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1px" }}>
                <ImagePlaceholder label="Aston Martin F1 — Interior" aspectRatio="4/3" />
                <ImagePlaceholder label="Aston Martin F1 — Circuit Build" aspectRatio="4/3" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-pad" style={{ background: "var(--black)", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <div className="container">
          <p className="section-label">How We Work</p>
          <h2 className="section-title reveal" style={{ marginBottom: "48px" }}>From Brief<br /><span style={{ color: "var(--yellow)" }}>to Circuit.</span></h2>
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
            <ImagePlaceholder label="Motorsport — Aston Martin F1 Paddock Club, Monaco" aspectRatio="16/9" />
            <div style={{ display: "flex", flexDirection: "column", gap: "1px" }}>
              <ImagePlaceholder label="Motorsport — Fan Zone, British GP" aspectRatio="4/3" />
              <ImagePlaceholder label="Motorsport — Le Mans 24h Hospitality" aspectRatio="4/3" />
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "1px", background: "rgba(255,255,255,0.06)", marginTop: "1px" }}>
            <ImagePlaceholder label="Motorsport — MotoGP Paddock Environment" aspectRatio="4/3" />
            <ImagePlaceholder label="Motorsport — Automotive Brand Launch" aspectRatio="4/3" />
            <ImagePlaceholder label="Motorsport — Temporary Garage Structure" aspectRatio="4/3" />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-pad" style={{ background: "var(--dark2)", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <p className="section-label" style={{ justifyContent: "center" }}>Brief us on your circuit</p>
          <h2 className="section-title reveal" style={{ marginBottom: "32px" }}>
            Let&apos;s Build at<br /><span style={{ color: "var(--yellow)" }}>Your Circuit.</span>
          </h2>
          <div style={{ display: "flex", gap: "16px", justifyContent: "center" }}>
            <Link href="/contact" className="btn-primary">Start a Project</Link>
            <Link href="/solutions" className="btn-secondary">All Solutions</Link>
          </div>
        </div>
      </section>
    </>
  );
}

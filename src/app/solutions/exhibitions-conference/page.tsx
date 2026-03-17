import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/layout/PageHero";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";

export const metadata: Metadata = { title: "Exhibitions & Conferences — Modsol Solutions" };

const capabilities = [
  { title: "Custom Exhibition Stands", body: "Bespoke exhibition environments built from the Modwall and Modblock platform — from 18m² shell-scheme upgrades to 900m² feature builds. Every stand is structurally engineered, not adapted from a catalogue system, which means it can be exactly what the brief demands." },
  { title: "Conference Environments", body: "Multi-room conference structures, temporary auditoriums, breakout pods and speaker-stage environments. Modblock provides the structural precision for large-span column-free spaces; Modwall delivers the acoustic and aesthetic interior finish." },
  { title: "World Expos & Trade Shows", body: "National pavilions, brand halls and feature installations at major international expos. Our platform meets the structural requirements of UKAS, UFI and major show organisers worldwide. Certified drawings accepted at every major exhibition venue globally." },
  { title: "Gallery & Museum Installations", body: "Temporary gallery structures, touring museum installations and curated brand environments where structural quality is part of the visitor experience. Precision tolerances, clean material finishes, and the kind of structural rigidity that fragile exhibits demand." },
  { title: "Multi-Show Touring Stands", body: "The same stand specification, redeployed across a global show calendar. Pre-numbered Modblock and Modwall components pack efficiently, arrive on schedule, and assemble identically at every venue — from ExCeL London to GITEX Dubai." },
  { title: "Feature Installations", body: "Structural support for centrepiece exhibition installations — LED walls, architectural canopies, suspended elements and complex geometric forms. Where other structural suppliers say it can't be done, Modsol's engineering team has already designed the solution." },
];

export default function ExhibitionsConferencePage() {
  return (
    <>
      <PageHero
        label="Solution — Exhibitions & Conferences"
        title="Command<br/>the Hall."
        subtitle="Custom exhibition stands, conference environments and world expo pavilions. Structural quality that communicates brand authority before a single visitor arrives."
      />

      <section className="section-pad" style={{ background: "var(--black)" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "start" }}>
            <div className="reveal">
              <p className="section-label">Exhibitions Capability</p>
              <h2 className="section-title" style={{ marginBottom: "24px" }}>The Stand Is<br /><span style={{ color: "var(--yellow)" }}>the Statement.</span></h2>
              <p style={{ fontSize: "15px", color: "var(--muted)", lineHeight: "1.9", marginBottom: "24px" }}>
                At an exhibition, every brand on the floor is competing for the same attention. The structure you occupy makes the first argument — before your team speaks, before your product is demonstrated, before any content is encountered. It either earns attention or loses it.
              </p>
              <p style={{ fontSize: "15px", color: "var(--muted)", lineHeight: "1.9", marginBottom: "24px" }}>
                Modsol's Modwall panel system delivers the solid, flush, architectural aesthetic that separates a purpose-built stand from an adapted shell scheme. Combined with Modblock's structural precision and Modframe's overhead capability, the result is an environment that competes with permanent architecture on the same floor.
              </p>
              <p style={{ fontSize: "15px", color: "var(--muted)", lineHeight: "1.9", marginBottom: "40px" }}>
                We've built exhibition environments on six continents, for brands from FTSE 100 corporations to national governments. Every brief receives the same structural rigour, the same certified engineering, and the same delivery confidence.
              </p>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                {[["150+","Stands Built"],["40+","Countries"],["6","Continents"],["48h","Turnaround"]].map(([n, l]) => (
                  <div key={l} style={{ padding: "20px", background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}>
                    <div style={{ fontFamily: "var(--font-display)", fontSize: "32px", color: "var(--yellow)", letterSpacing: "0.02em" }}>{n}</div>
                    <div style={{ fontFamily: "var(--font-mono)", fontSize: "9px", color: "var(--muted)", letterSpacing: "0.15em", textTransform: "uppercase", marginTop: "4px" }}>{l}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="reveal" style={{ display: "flex", flexDirection: "column", gap: "1px" }}>
              <ImagePlaceholder label="Exhibitions — Feature Stand Build" aspectRatio="4/3" />
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1px" }}>
                <ImagePlaceholder label="Exhibitions — Conference Environment" aspectRatio="1/1" />
                <ImagePlaceholder label="Exhibitions — World Expo Pavilion" aspectRatio="1/1" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad" style={{ background: "var(--dark)", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <div className="container">
          <p className="section-label">Capabilities</p>
          <h2 className="section-title reveal" style={{ marginBottom: "48px" }}>Every Format.<br /><span style={{ color: "var(--yellow)" }}>Every Show.</span></h2>
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
              <p className="section-label">The Touring Advantage</p>
              <h2 className="section-title" style={{ marginBottom: "24px" }}>Same Stand.<br /><span style={{ color: "var(--yellow)" }}>Every Show.</span></h2>
              <p style={{ fontSize: "15px", color: "var(--muted)", lineHeight: "1.9", marginBottom: "24px" }}>
                The Modsol platform is built to redeploy. Modwall panels, Modblock structural elements and Modframe canopy systems are all designed for repeated assembly and disassembly without degradation. The 50th build performs identically to the first.
              </p>
              <p style={{ fontSize: "15px", color: "var(--muted)", lineHeight: "1.9" }}>
                For brands with a global show calendar, this means amortising the investment across every event, not rebuilding from scratch each time. The structural, logistical and carbon efficiency is significant — and the brand consistency is absolute.
              </p>
            </div>
            <div className="reveal">
              <ImagePlaceholder label="Exhibitions — Touring Stand, International Calendar" aspectRatio="16/9" />
              <div style={{ marginTop: "24px", display: "flex", flexDirection: "column", gap: "12px" }}>
                {[["Modwall panels","Flat-pack, precision-finished, identical build every time"],["Modblock structure","Certified load-bearing system, no site welding required"],["Modframe canopy","Large-span overhead with integrated lighting provision"]].map(([title, body]) => (
                  <div key={title} style={{ display: "flex", gap: "16px", padding: "16px 20px", background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}>
                    <div style={{ width: "6px", height: "6px", background: "var(--yellow)", flexShrink: 0, marginTop: "5px" }} />
                    <div>
                      <span style={{ fontSize: "13px", color: "var(--white)", fontWeight: 500 }}>{title}</span>
                      <span style={{ fontSize: "12px", color: "var(--muted)", marginLeft: "8px" }}>{body}</span>
                    </div>
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
            <ImagePlaceholder label="Exhibitions — Feature Build, International Show" aspectRatio="16/9" />
            <div style={{ display: "flex", flexDirection: "column", gap: "1px" }}>
              <ImagePlaceholder label="Exhibitions — World Expo National Pavilion" aspectRatio="4/3" />
              <ImagePlaceholder label="Exhibitions — Conference Auditorium" aspectRatio="4/3" />
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad" style={{ background: "var(--dark2)", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <p className="section-label" style={{ justifyContent: "center" }}>Brief us on your stand</p>
          <h2 className="section-title reveal" style={{ marginBottom: "32px" }}>Command<br /><span style={{ color: "var(--yellow)" }}>Your Show.</span></h2>
          <div style={{ display: "flex", gap: "16px", justifyContent: "center" }}>
            <Link href="/contact" className="btn-primary">Start a Project</Link>
            <Link href="/solutions" className="btn-secondary">All Solutions</Link>
          </div>
        </div>
      </section>
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/layout/PageHero";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";

export const metadata: Metadata = { title: "Videos — Modsol Projects" };

const videos = [
  { title: "Aston Martin F1 — 2024 Paddock Club Build", duration: "4:12", category: "Motorsport", desc: "Time-lapse and behind-the-scenes footage of the full paddock club assembly at the 2024 British Grand Prix." },
  { title: "The Modblock System — Product Overview", duration: "6:40", category: "Product", desc: "A walkthrough of the Modblock system — components, connections, configurations and capabilities from our structural engineering team." },
  { title: "Oasis Live '25 — Tour Production Village", duration: "3:55", category: "Events", desc: "Building the production village for the most anticipated stadium tour in a generation. 17 venues. Zero build failures." },
  { title: "Glastonbury VIP — Build to Strike", duration: "5:18", category: "Festival", desc: "Complete documentation of a full Glastonbury VIP structure build — from first vehicle on site to last component off after the festival." },
  { title: "The Modwall — Surface & Finish Options", duration: "2:45", category: "Product", desc: "Exploring the full range of Modwall surface finish options — aluminium composite, timber effect, high-gloss lacquer, branded wrap." },
  { title: "International Exhibition Build — Dubai", duration: "3:30", category: "Exhibitions", desc: "Building a 2,400m² international exhibition environment in Dubai. Same system as London. Same quality. Different continent." },
];

export default function VideosPage() {
  return (
    <>
      <PageHero
        label="The Projects — Videos"
        title="See It<br/>Built."
        subtitle="Time-lapses, walkthroughs, and behind-the-scenes documentation of Modsol structures from brief to build to strike."
      />

      <section className="section-pad" style={{ background: "var(--black)" }}>
        <div className="container">
          {/* Featured video */}
          <div className="reveal" style={{ marginBottom: "1px", background: "rgba(255,255,255,0.06)", padding: "1px" }}>
            <div style={{ position: "relative" }}>
              <ImagePlaceholder label="Featured — Aston Martin F1 2024 Paddock Club Build" aspectRatio="16/9" />
              <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", pointerEvents: "none" }}>
                <div style={{ width: "72px", height: "72px", background: "rgba(198,255,2,0.9)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <span style={{ color: "var(--black)", fontSize: "24px", marginLeft: "4px" }}>▶</span>
                </div>
              </div>
            </div>
            <div style={{ padding: "32px 40px", background: "var(--dark)" }}>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: "9px", color: "var(--yellow)", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "8px" }}>Motorsport — 4:12</div>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "32px", color: "var(--white)", letterSpacing: "0.04em" }}>Aston Martin F1 — 2024 Paddock Club Build</h2>
            </div>
          </div>

          {/* Video grid */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1px", background: "rgba(255,255,255,0.06)", marginTop: "1px" }}>
            {videos.slice(1).map((v) => (
              <div key={v.title} className="reveal" style={{ background: "var(--dark3)" }}>
                <div style={{ position: "relative" }}>
                  <ImagePlaceholder label={v.title} aspectRatio="16/9" />
                  <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", pointerEvents: "none" }}>
                    <div style={{ width: "44px", height: "44px", background: "rgba(198,255,2,0.85)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <span style={{ color: "var(--black)", fontSize: "14px", marginLeft: "3px" }}>▶</span>
                    </div>
                  </div>
                </div>
                <div style={{ padding: "24px" }}>
                  <div style={{ fontFamily: "var(--font-mono)", fontSize: "9px", color: "var(--yellow)", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "8px" }}>{v.category} — {v.duration}</div>
                  <h3 style={{ fontFamily: "var(--font-display)", fontSize: "18px", color: "var(--white)", letterSpacing: "0.04em", lineHeight: 1.1, marginBottom: "12px" }}>{v.title}</h3>
                  <p style={{ fontSize: "12px", color: "var(--muted)", lineHeight: "1.7" }}>{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad" style={{ background: "var(--dark2)", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <p className="section-label" style={{ justifyContent: "center" }}>See more</p>
          <h2 className="section-title reveal" style={{ marginBottom: "32px" }}>
            Browse the<br /><span style={{ color: "var(--yellow)" }}>Full Gallery.</span>
          </h2>
          <div style={{ display: "flex", gap: "16px", justifyContent: "center" }}>
            <Link href="/projects/gallery" className="btn-primary">View Gallery</Link>
            <Link href="/projects" className="btn-secondary">All Projects</Link>
          </div>
        </div>
      </section>
    </>
  );
}

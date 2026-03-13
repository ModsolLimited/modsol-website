import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/layout/PageHero";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";

export const metadata: Metadata = { title: "Brand Activations" };

const capabilities = [
  { title: "Product Launches", body: "Physical environments that give product launches the setting they deserve. Press, trade, consumer — built to the brief." },
  { title: "Consumer Campaigns", body: "High-footfall consumer activations in retail, public, and festival settings. Engineered to engage, built to withstand." },
  { title: "Press & Media Events", body: "Controlled, branded environments for press days, media launches, and influencer events where every frame matters." },
  { title: "Experiential Installations", body: "Immersive experiential environments that put consumers inside your brand story. Complex geometry, delivered on time." },
];

export default function BrandActivationsPage() {
  return (
    <>
      <PageHero label="Solution — Brand Activations" title="Activate.<br/>Amplify." subtitle="Experiential environments for product launches, press activations, and consumer campaigns that put your brand in the room." />

      <section className="section-pad" style={{ background: "var(--black)" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "start" }}>
            <div className="reveal">
              <p className="section-label">Brand Activation Capability</p>
              <h2 className="section-title" style={{ marginBottom: "24px" }}>Your Brand.<br /><span style={{ color: "var(--yellow)" }}>In Three Dimensions.</span></h2>
              <p style={{ fontSize: "15px", color: "var(--muted)", lineHeight: "1.8", marginBottom: "24px" }}>
                Brand activations live or die on the quality of the physical environment. A brief that demands bold geometry, immersive space, and flawless execution needs a structural partner who can keep up.
              </p>
              <p style={{ fontSize: "15px", color: "var(--muted)", lineHeight: "1.8" }}>
                Modsol's platform has been deployed in some of the most ambitious brand activations in the world — and we've never had to tell a client that the design can't be built.
              </p>
            </div>
            <div className="reveal">
              <ImagePlaceholder label="Brand Activation — Experiential Install" aspectRatio="4/5" />
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
          <p className="section-label">Activation Gallery</p>
          <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: "1px", background: "rgba(255,255,255,0.06)", marginTop: "48px" }}>
            <ImagePlaceholder label="Brand Activation — Product Launch" aspectRatio="16/9" />
            <div style={{ display: "flex", flexDirection: "column", gap: "1px" }}>
              <ImagePlaceholder label="Brand Activation — Consumer Campaign" aspectRatio="4/3" />
              <ImagePlaceholder label="Brand Activation — Press Event" aspectRatio="4/3" />
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad" style={{ background: "var(--dark2)", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <p className="section-label" style={{ justifyContent: "center" }}>Brief us</p>
          <h2 className="section-title reveal" style={{ marginBottom: "32px" }}>Ready to<br /><span style={{ color: "var(--yellow)" }}>Activate?</span></h2>
          <div style={{ display: "flex", gap: "16px", justifyContent: "center" }}>
            <Link href="/contact" className="btn-primary">Start a Project</Link>
            <Link href="/solutions" className="btn-secondary">All Solutions</Link>
          </div>
        </div>
      </section>
    </>
  );
}

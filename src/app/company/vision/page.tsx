import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/layout/PageHero";

export const metadata: Metadata = { title: "The Vision — Modsol Limited" };

const pillars = [
  { num: "01", title: "Architecture Without Compromise", body: "We believe temporary structures should be architecturally indistinguishable from permanent ones at first glance. Our next platform generation will close that gap further — with surface systems, integrated services, and material finishes that compete directly with permanent construction." },
  { num: "02", title: "Global Deployment, Local Precision", body: "Modsol systems are already deployed across 40+ countries. Our vision is a platform that can be shipped, assembled, and certified anywhere in the world with the same quality and reliability as a UK build. Localised supply chains. Standardised engineering. Zero compromise." },
  { num: "03", title: "Circular by Design", body: "Every Modsol system is designed for redeployment. Our vision is a complete cradle-to-cradle model — where structures are not just reusable but tracked, maintained, and optimised across their entire lifecycle. Zero waste. Maximum value." },
  { num: "04", title: "Platform, Not Product", body: "The Modblock, Modwall, and Modframe are chapter one. Our vision is an open modular platform — interoperable with third-party systems, configurable for any brief, and continuously expanded by our engineering team in response to real project demands." },
];

export default function VisionPage() {
  return (
    <>
      <PageHero
        label="The Company — The Vision"
        title="Where We're<br/>Going."
        subtitle="Temporary architecture is not a compromise. It is a discipline. Our vision is a world where the best built environments are modular, redeployable, and architecturally exceptional."
      />

      <section className="section-pad" style={{ background: "var(--black)" }}>
        <div className="container">
          <p className="section-label">The Mission</p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "start" }}>
            <div className="reveal">
              <h2 className="section-title" style={{ marginBottom: "32px" }}>
                Temporary should be<br /><span style={{ color: "var(--yellow)" }}>anything but.</span>
              </h2>
              <p style={{ fontSize: "15px", color: "var(--muted)", lineHeight: "1.9", marginBottom: "24px" }}>
                The built environment is changing. Brands, events, and institutions increasingly need spaces that are fast, flexible, and redeployable — without sacrificing the quality, presence, and authority of permanent architecture.
              </p>
              <p style={{ fontSize: "15px", color: "var(--muted)", lineHeight: "1.9", marginBottom: "24px" }}>
                That&apos;s the gap Modsol exists to close. We are building the platform that makes truly architectural temporary environments accessible — not as a premium exception, but as a standard expectation.
              </p>
              <p style={{ fontSize: "15px", color: "var(--muted)", lineHeight: "1.9" }}>
                Our vision is not incremental. We are not trying to build a slightly better tent. We are building the future of temporary architecture from the ground up.
              </p>
            </div>
            <div className="reveal" style={{ padding: "40px", background: "var(--dark3)", borderLeft: "2px solid var(--yellow)" }}>
              <p style={{ fontFamily: "var(--font-mono)", fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--yellow)", marginBottom: "24px" }}>
                Our Belief
              </p>
              <blockquote style={{ fontFamily: "var(--font-display)", fontSize: "clamp(28px, 3vw, 48px)", color: "var(--white)", letterSpacing: "0.03em", lineHeight: 1.1, margin: 0 }}>
                &ldquo;TEMPORARY ENVIRONMENTS SHOULD ACHIEVE THE AMBITION OF PERMANENT ARCHITECTURE.&rdquo;
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad" style={{ background: "var(--dark)", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <div className="container">
          <p className="section-label">Strategic Pillars</p>
          <h2 className="section-title reveal" style={{ marginBottom: "48px" }}>
            Four Pillars of<br /><span style={{ color: "var(--yellow)" }}>Our Future.</span>
          </h2>
          <div className="platform-cards reveal">
            {pillars.map((p) => (
              <div className="platform-card" key={p.num}>
                <div className="platform-card-num">{p.num}</div>
                <h3>{p.title}</h3>
                <p>{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad" style={{ background: "var(--black)", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <p className="section-label" style={{ justifyContent: "center" }}>Build With Us</p>
          <h2 className="section-title reveal" style={{ marginBottom: "32px" }}>
            Be Part of<br /><span style={{ color: "var(--yellow)" }}>What&apos;s Next.</span>
          </h2>
          <p style={{ fontSize: "15px", color: "var(--muted)", maxWidth: "560px", margin: "0 auto 40px", lineHeight: "1.9" }}>
            The most ambitious temporary environments in the world are built on the Modsol platform. Let&apos;s build yours.
          </p>
          <div style={{ display: "flex", gap: "16px", justifyContent: "center" }}>
            <Link href="/contact" className="btn-primary">Start a Project</Link>
            <Link href="/products" className="btn-secondary">The Platform</Link>
          </div>
        </div>
      </section>
    </>
  );
}

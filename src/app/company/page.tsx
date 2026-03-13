import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/layout/PageHero";

export const metadata: Metadata = { title: "The Company" };

const values = [
  { num: "01", title: "Precision Engineering", body: "Every system we manufacture is engineered to tolerance. Not close to spec — to spec. That discipline runs from material selection through to the final bolt torque on site." },
  { num: "02", title: "Bold Design", body: "We believe temporary architecture should be as considered as permanent design. Every Modsol structure should stop someone in their tracks — even before the brand dresses it." },
  { num: "03", title: "Modular Intelligence", body: "A system isn't modular just because it can be moved. True modularity means infinite combination without compromise — every element designed for every configuration." },
  { num: "04", title: "Delivery Confidence", body: "Events don't slip. Builds have to happen on time, every time. Modsol's delivery record and project management capability give clients the confidence to specify boldly." },
];

export default function CompanyPage() {
  return (
    <>
      <PageHero label="01 — The Company" title="Modsol<br/>Limited" subtitle="Designing and manufacturing modular systems for temporary architecture, events, exhibitions, and branded environments." />

      <section className="section-pad" style={{ background: "var(--black)" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "start" }}>
            <div>
              <p className="section-label">Our Story</p>
              <h2 className="section-title reveal" style={{ marginBottom: "32px" }}>Built on the belief that temporary should be anything but.</h2>
            </div>
            <div className="reveal">
              <p style={{ fontSize: "15px", color: "var(--muted)", lineHeight: "1.8", marginBottom: "24px" }}>
                Modsol Limited was founded on a single observation: the standard of temporary architecture was not good enough. Structures that looked cheap, performed worse, and communicated entirely the wrong thing about the brands they were supposed to represent.
              </p>
              <p style={{ fontSize: "15px", color: "var(--muted)", lineHeight: "1.8", marginBottom: "24px" }}>
                We set out to change that. By engineering a modular platform from the ground up — not adapting existing systems, not approximating — we built the tools that the industry needed to build bolder.
              </p>
              <p style={{ fontSize: "15px", color: "var(--muted)", lineHeight: "1.8" }}>
                Today, Modsol's three-system platform — The Modblock, The Modwall, and The Modframe — has been deployed across five continents, at some of the world's most demanding events and brand environments.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad" style={{ background: "var(--dark)", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <div className="container">
          <p className="section-label">Our Values</p>
          <div className="platform-cards reveal">
            {values.map((v) => (
              <div className="platform-card" key={v.num}>
                <div className="platform-card-num">{v.num}</div>
                <h3>{v.title}</h3>
                <p>{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad" style={{ background: "var(--black)" }}>
        <div className="container">
          <div className="stats-row">
            {[["500+","Projects Delivered"],["12+","Years Experience"],["40+","Countries"],["3","Engineered Systems"]].map(([n,l]) => (
              <div className="stat-item" key={l}>
                <div className="stat-num">{n}</div>
                <div className="stat-label">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad" style={{ background: "var(--dark2)", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <p className="section-label" style={{ justifyContent: "center" }}>Ready to build?</p>
          <h2 className="section-title reveal" style={{ marginBottom: "32px" }}>Let&apos;s Build<br /><span style={{ color: "var(--yellow)" }}>Something Bold.</span></h2>
          <Link href="/contact" className="btn-primary">Start a Project</Link>
        </div>
      </section>
    </>
  );
}

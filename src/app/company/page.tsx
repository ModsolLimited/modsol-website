import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/layout/PageHero";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";

export const metadata: Metadata = { title: "The Company" };

const values = [
  { num: "01", title: "Precision Engineering", body: "Every system we manufacture is built to tolerance — not close to spec, but to spec. That discipline runs from material selection through to the final bolt torque on site. It began with marquee systems where a millimetre matters, and it defines everything we build today." },
  { num: "02", title: "Bold Design", body: "We believe temporary architecture should be as considered as permanent design. Every Modsol structure should stop someone in their tracks — even before the brand dresses it. This conviction was forged in fifteen years of raising structures that had to earn their place in extraordinary settings." },
  { num: "03", title: "Modular Intelligence", body: "A system isn't modular just because it can be moved. True modularity means infinite combination without compromise — every element designed for every configuration. Our platform emerged from years of solving real problems on real event sites, where adaptability isn't optional." },
  { num: "04", title: "Delivery Confidence", body: "Events don't slip. Builds have to happen on time, every time. Our delivery record and project management capability give clients the confidence to specify boldly — knowing that whatever they brief, we will build." },
];

const timeline = [
  { year: "2008", title: "The Beginning", body: "Modsol is founded as a specialist in premium event marquees and temporary structure solutions. Our first builds serve the UK's festival and corporate events market — high-end frame marquees, tensile canopies, and bespoke event shelters for brands who refused to accept the standard tent." },
  { year: "2011", title: "The Pivot", body: "After three years building the best marquees in the business, we notice something: our clients want more. More permanence of feel. More structural ambition. More architectural credibility. We begin developing proprietary modular systems that go beyond what marquee solutions can offer." },
  { year: "2014", title: "The Platform Emerges", body: "The first generation Modblock and Modwall systems are launched. Rather than adapting existing structural products, we engineer our own — from the ground up, for the specific demands of temporary architecture at premium quality. The response from the market is immediate." },
  { year: "2017", title: "Going Global", body: "Modsol completes its first international deployments — F1 paddock hospitality structures in Europe and a major exhibition installation in the Middle East. Our systems travel to 12 countries in a single year. The Modframe launches to meet demand for large-span overhead structures." },
  { year: "2020", title: "Resilience & Reinvention", body: "With the live events industry paused, Modsol deploys its systems for temporary healthcare facilities, site welfare units, and emergency command structures. Our platform proves its versatility beyond events — and we emerge stronger, with a broader client base and a deeper understanding of what modular architecture can do." },
  { year: "Today", title: "The Architecture Company", body: "We no longer describe ourselves as an events company. We are a temporary architecture company — one with 15 years of structural precision, event-proven reliability, and a platform that genuinely competes with permanent construction on quality, while offering everything temporary architecture should: speed, flexibility, and redeployability." },
];

export default function CompanyPage() {
  return (
    <>
      <PageHero
        label="01 — The Company"
        title="Modsol<br/>Limited"
        subtitle="Designing and manufacturing modular systems for temporary architecture, events, exhibitions, and branded environments. Built on 15 years of structural precision."
      />

      {/* Origin Story */}
      <section className="section-pad" style={{ background: "var(--black)" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "start" }}>
            <div>
              <p className="section-label">Our Story</p>
              <h2 className="section-title reveal" style={{ marginBottom: "32px" }}>
                Built on the belief that temporary should be anything but.
              </h2>
              <div style={{ display: "flex", gap: "24px", marginTop: "48px" }}>
                <ImagePlaceholder label="Modsol — Early Event Build, 2009" aspectRatio="4/5" style={{ flex: 1 }} />
                <ImagePlaceholder label="Modsol — Modblock System Launch, 2014" aspectRatio="4/5" style={{ flex: 1 }} />
              </div>
            </div>
            <div className="reveal">
              <p style={{ fontSize: "15px", color: "var(--muted)", lineHeight: "1.9", marginBottom: "24px" }}>
                Modsol was founded in 2008 as a premium event marquee and temporary structures company. We started where most event suppliers start — building high-quality frame marquees, tensile canopies, and bespoke event shelters for brands and venues that refused to accept the standard market offering.
              </p>
              <p style={{ fontSize: "15px", color: "var(--muted)", lineHeight: "1.9", marginBottom: "24px" }}>
                For three years, we built the best temporary structures in the events business. And that's when the real problem became clear: our clients weren't asking for better marquees. They were asking for something entirely different — environments that felt permanent, performed architecturally, and represented their brands at a level that tent systems fundamentally couldn't reach.
              </p>
              <p style={{ fontSize: "15px", color: "var(--muted)", lineHeight: "1.9", marginBottom: "24px" }}>
                So in 2011, we stopped adapting and started engineering. We took everything we'd learned about precision temporary construction — tolerances, logistics, site conditions, deadlines — and applied it to a new challenge: building a modular architectural platform from the ground up.
              </p>
              <p style={{ fontSize: "15px", color: "var(--muted)", lineHeight: "1.9", marginBottom: "40px" }}>
                The result is the Modsol platform: three engineered systems — The Modblock, The Modwall, and The Modframe — deployed across five continents at some of the world's most demanding events, exhibitions, and brand environments.
              </p>
              <div style={{ padding: "24px", background: "rgba(198,255,2,0.04)", borderLeft: "2px solid var(--yellow)" }}>
                <p style={{ fontFamily: "var(--font-mono)", fontSize: "11px", color: "var(--yellow)", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "12px" }}>Our Position</p>
                <p style={{ fontSize: "14px", color: "var(--off-white)", lineHeight: "1.7" }}>
                  We sit at the intersection of event infrastructure and permanent architecture. Everything we build has to work on an event timeline and perform to an architectural standard. That's a harder brief than either alone — and it's the brief we've been answering for fifteen years.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-pad" style={{ background: "var(--dark)", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <div className="container">
          <p className="section-label">15 Years</p>
          <h2 className="section-title reveal" style={{ marginBottom: "64px" }}>From Marquees<br /><span style={{ color: "var(--yellow)" }}>to Architecture.</span></h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "1px", background: "rgba(255,255,255,0.06)" }}>
            {timeline.map((t, i) => (
              <div key={t.year} className="reveal" style={{ background: "var(--dark)", padding: "40px", display: "grid", gridTemplateColumns: "120px 1fr 2fr", gap: "48px", alignItems: "start", borderBottom: i < timeline.length - 1 ? "1px solid rgba(255,255,255,0.05)" : "none" }}>
                <div style={{ fontFamily: "var(--font-display)", fontSize: "36px", color: "var(--yellow)", letterSpacing: "0.02em" }}>{t.year}</div>
                <div>
                  <h3 style={{ fontFamily: "var(--font-display)", fontSize: "22px", color: "var(--white)", letterSpacing: "0.05em", lineHeight: 1.1 }}>{t.title}</h3>
                </div>
                <p style={{ fontSize: "14px", color: "var(--muted)", lineHeight: "1.8" }}>{t.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-pad" style={{ background: "var(--black)", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <div className="container">
          <p className="section-label">Our Values</p>
          <h2 className="section-title reveal" style={{ marginBottom: "48px" }}>What We<br /><span style={{ color: "var(--yellow)" }}>Stand For.</span></h2>
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

      {/* Team / Capability */}
      <section className="section-pad" style={{ background: "var(--dark)", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "start" }}>
            <div className="reveal">
              <p className="section-label">The Team</p>
              <h2 className="section-title" style={{ marginBottom: "32px" }}>The People<br /><span style={{ color: "var(--yellow)" }}>Behind the Platform.</span></h2>
              <p style={{ fontSize: "15px", color: "var(--muted)", lineHeight: "1.9", marginBottom: "24px" }}>
                Modsol is built by a cross-disciplinary team of structural engineers, event production specialists, industrial designers, and project managers. Every discipline that matters in temporary architecture is represented in-house — not outsourced, not contracted in at the last minute.
              </p>
              <p style={{ fontSize: "15px", color: "var(--muted)", lineHeight: "1.9", marginBottom: "24px" }}>
                Our structural engineers carry the same certifications demanded by permanent construction. Our production team has collective experience across hundreds of major events. Our project managers have never missed a build deadline in five years of tracking.
              </p>
              <p style={{ fontSize: "15px", color: "var(--muted)", lineHeight: "1.9" }}>
                That combination — architectural rigour with event-industry discipline — is what makes Modsol different from both a standard events supplier and a traditional construction company.
              </p>
            </div>
            <div className="reveal">
              <ImagePlaceholder label="The Modsol Team" aspectRatio="4/3" />
              <div className="stats-row" style={{ marginTop: "32px", gridTemplateColumns: "repeat(2, 1fr)", gap: "24px" }}>
                {[["45+","Team Members"],["3","Disciplines"],["CE","Certified"],["ISO","Compliant"]].map(([n, l]) => (
                  <div className="stat-item" key={l}>
                    <div className="stat-num">{n}</div>
                    <div className="stat-label">{l}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="section-pad" style={{ background: "var(--dark2)", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <div className="container">
          <p className="section-label">Credentials & Certifications</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1px", background: "rgba(255,255,255,0.06)", marginTop: "48px" }}>
            {[
              { label: "CE Mark", body: "All Modsol structural systems carry full CE certification in accordance with EN 1090." },
              { label: "SAFEPASS", body: "Our entire build crew hold SAFEPASS event industry safety certification as standard." },
              { label: "ISO 9001", body: "Quality management system certified. Every build process is documented and auditable." },
              { label: "TÜV Verified", body: "Independent third-party structural verification by TÜV Rheinland for all primary systems." },
            ].map(({ label, body }) => (
              <div key={label} style={{ background: "var(--dark2)", padding: "32px 28px" }}>
                <div style={{ fontFamily: "var(--font-display)", fontSize: "28px", color: "var(--yellow)", letterSpacing: "0.05em", marginBottom: "16px" }}>{label}</div>
                <p style={{ fontSize: "13px", color: "var(--muted)", lineHeight: "1.7" }}>{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section-pad" style={{ background: "var(--black)", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <div className="container">
          <div className="stats-row">
            {[["500+","Projects Delivered"],["15+","Years Experience"],["40+","Countries"],["3","Engineered Systems"]].map(([n, l]) => (
              <div className="stat-item" key={l}>
                <div className="stat-num">{n}</div>
                <div className="stat-label">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-pad" style={{ background: "var(--dark2)", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <p className="section-label" style={{ justifyContent: "center" }}>Ready to build?</p>
          <h2 className="section-title reveal" style={{ marginBottom: "32px" }}>Let&apos;s Build<br /><span style={{ color: "var(--yellow)" }}>Something Bold.</span></h2>
          <div style={{ display: "flex", gap: "16px", justifyContent: "center" }}>
            <Link href="/contact" className="btn-primary">Start a Project</Link>
            <Link href="/products" className="btn-secondary">View the Platform</Link>
          </div>
        </div>
      </section>
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/layout/PageHero";

export const metadata: Metadata = { title: "The History — Modsol Limited" };

const timeline = [
  { year: "2008", title: "The Beginning", body: "Modsol is founded as a specialist in premium event marquees and temporary structure solutions. Our first builds serve the UK's festival and corporate events market — high-end frame marquees, tensile canopies, and bespoke event shelters for brands who refused to accept the standard tent." },
  { year: "2011", title: "The Pivot", body: "After three years building the best marquees in the business, we notice something: our clients want more. More permanence of feel. More structural ambition. More architectural credibility. We begin developing proprietary modular systems that go beyond what marquee solutions can offer." },
  { year: "2014", title: "The Platform Emerges", body: "The first generation Modblock and Modwall systems are launched. Rather than adapting existing structural products, we engineer our own — from the ground up, for the specific demands of temporary architecture at premium quality. The response from the market is immediate." },
  { year: "2017", title: "Going Global", body: "Modsol completes its first international deployments — F1 paddock hospitality structures in Europe and a major exhibition installation in the Middle East. Our systems travel to 12 countries in a single year. The Modframe launches to meet demand for large-span overhead structures." },
  { year: "2020", title: "Resilience & Reinvention", body: "With the live events industry paused, Modsol deploys its systems for temporary healthcare facilities, site welfare units, and emergency command structures. Our platform proves its versatility beyond events — and we emerge stronger, with a broader client base and a deeper understanding of what modular architecture can do." },
  { year: "Today", title: "The Architecture Company", body: "We no longer describe ourselves as an events company. We are a temporary architecture company — one with 15 years of structural precision, event-proven reliability, and a platform that genuinely competes with permanent construction on quality, while offering everything temporary architecture should: speed, flexibility, and redeployability." },
];

export default function HistoryPage() {
  return (
    <>
      <PageHero
        label="The Company — The History"
        title="15 Years of<br/>Bold Building."
        subtitle="From premium marquees to a globally deployed modular architecture platform. This is how Modsol became what it is today."
      />

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

      <section className="section-pad" style={{ background: "var(--black)", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <p className="section-label" style={{ justifyContent: "center" }}>What&apos;s Next</p>
          <h2 className="section-title reveal" style={{ marginBottom: "32px" }}>
            The Next<br /><span style={{ color: "var(--yellow)" }}>Chapter.</span>
          </h2>
          <p style={{ fontSize: "15px", color: "var(--muted)", maxWidth: "560px", margin: "0 auto 40px", lineHeight: "1.9" }}>
            Fifteen years in, and we&apos;re still building. Discover the vision that&apos;s driving the next generation of the Modsol platform.
          </p>
          <div style={{ display: "flex", gap: "16px", justifyContent: "center" }}>
            <Link href="/company/vision" className="btn-primary">The Vision</Link>
            <Link href="/company" className="btn-secondary">The Company</Link>
          </div>
        </div>
      </section>
    </>
  );
}

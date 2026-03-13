import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/layout/PageHero";

export const metadata: Metadata = { title: "Industry Insights" };

const insights = [
  { date: "Jan 2025", tag: "Sustainability", title: "The Event Industry's Sustainability Crisis", body: "Single-use temporary structures represent one of the most significant material waste streams in the events industry. How modular redeployable systems change the calculation — and why the industry is only beginning to confront the problem seriously." },
  { date: "Nov 2024", tag: "Motorsport", title: "F1 Paddock Hospitality: Raising the Standard", body: "Formula 1 hospitality is the most scrutinised temporary architecture brief in sport. What the leading teams specify, how standards have risen over the last decade, and why the gap between top-tier and mid-field hospitality is now primarily structural." },
  { date: "Oct 2024", tag: "Exhibitions", title: "The State of UK Exhibition Design in 2024", body: "UK brands continue to underinvest in exhibition environments relative to equivalent markets in Germany, the US and the Middle East. The commercial cost of standing on a shell scheme when your competitors are standing on statements." },
  { date: "Sep 2024", tag: "Retail", title: "Experiential Retail Beyond the Pop-up Moment", body: "The shift from temporary retail as a tactical channel to a strategic brand platform. What the leading luxury and lifestyle brands are doing differently — and why the structural quality of the environment is the primary differentiator." },
  { date: "Aug 2024", tag: "Events", title: "Post-Pandemic Live Events: The New Audience Expectation", body: "Audiences returned to live events with permanently elevated expectations for physical environments. The brands that invested in structural quality capitalised. The ones that didn't are still closing the gap." },
  { date: "Jul 2024", tag: "Technology", title: "AV Integration in Temporary Architecture", body: "The growing demand for integrated audio-visual systems in temporary structures — from LED wall superstructures to full immersive spatial audio installations. Structural implications, load requirements and the case for designing AV in from the beginning." },
  { date: "Jun 2024", tag: "Planning", title: "The Changing Landscape of Temporary Structure Planning", body: "Planning consent for temporary structures has become more complex as councils have become more sophisticated about what 'temporary' means. The regulatory environment in 2024 and how to navigate it efficiently." },
  { date: "May 2024", tag: "Sustainability", title: "Circular Economy Principles in Temporary Architecture", body: "How Modsol's platform approach delivers circular economy benefits that single-use temporary structures fundamentally cannot. Asset lifespan, reuse rates, embodied carbon and the commercial case for sustainable temporary architecture." },
  { date: "Apr 2024", tag: "Brand", title: "When the Structure Is the Brand", body: "In experiential environments, the physical space is the primary brand communication. Analysis of how the world's leading brands are using structural design — not just dressing — to communicate brand values in temporary environments." },
];

export default function IndustryInsightsPage() {
  return (
    <>
      <PageHero label="Knowledge Hub — Industry Insights" title="Industry<br/>Intelligence." subtitle="Data, trends and informed perspectives on the sectors Modsol operates in — events, exhibitions, hospitality, retail and brand activation. Written by people who build in them every day." />

      <section className="section-pad" style={{ background: "var(--black)" }}>
        <div className="container">
          <div className="articles-grid reveal">
            {insights.map((a) => (
              <div key={a.title} className="article-card">
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "20px" }}>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: "9px", color: "var(--yellow)", letterSpacing: "0.2em", textTransform: "uppercase" }}>{a.tag}</span>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: "9px", color: "var(--muted)", letterSpacing: "0.1em" }}>{a.date}</span>
                </div>
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: "22px", color: "var(--white)", marginBottom: "12px", lineHeight: "1.1", letterSpacing: "0.02em" }}>{a.title}</h3>
                <p style={{ fontSize: "13px", color: "var(--muted)", lineHeight: "1.7" }}>{a.body}</p>
                <div style={{ marginTop: "24px", fontFamily: "var(--font-mono)", fontSize: "9px", color: "var(--yellow)", letterSpacing: "0.2em", textTransform: "uppercase" }}>Read →</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad" style={{ background: "var(--dark2)", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <p className="section-label" style={{ justifyContent: "center" }}>More knowledge</p>
          <h2 className="section-title reveal" style={{ marginBottom: "32px" }}>Browse All<br /><span style={{ color: "var(--yellow)" }}>Categories.</span></h2>
          <div style={{ display: "flex", gap: "16px", justifyContent: "center" }}>
            <Link href="/knowledge-hub/articles" className="btn-secondary">Articles</Link>
            <Link href="/knowledge-hub/technical-guides" className="btn-secondary">Technical Guides</Link>
          </div>
        </div>
      </section>
    </>
  );
}

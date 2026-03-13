import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/layout/PageHero";

export const metadata: Metadata = { title: "Industry Insights" };

const insights = [
  { date: "Jan 2025", title: "The Event Industry's Sustainability Problem", body: "Single-use structures are the dirty secret of the events industry. Modular systems aren't just better design — they're the only credible sustainability answer." },
  { date: "Nov 2024", title: "Motorsport Paddock Club Design: Raising the Standard", body: "Formula 1 hospitality is the most demanding temporary architecture brief in sport. What it takes to deliver at this level, week after week." },
  { date: "Oct 2024", title: "The State of UK Exhibition Design", body: "Why UK brands are underinvesting in exhibition environments — and the commercial cost of standing on a shell scheme instead of a statement." },
  { date: "Sep 2024", title: "Experiential Retail: Beyond the Pop-up", body: "The shift from temporary retail as a tactical tool to a strategic brand channel. What the leading brands are doing differently." },
  { date: "Aug 2024", title: "Live Events Post-Pandemic: The New Expectations", body: "Audiences returned to live events with higher expectations for physical environments. The brands that understood this invested in structure. The ones that didn't are still catching up." },
  { date: "Jul 2024", title: "The Rise of the Hybrid Event Environment", body: "Event structures increasingly have to serve both live audiences and broadcast cameras simultaneously. How modular architecture is adapting to the hybrid era." },
];

export default function IndustryInsightsPage() {
  return (
    <>
      <PageHero label="Knowledge Hub — Industry Insights" title="Industry<br/>Intelligence." subtitle="Data, trends, and informed perspectives on the sectors Modsol operates in — from people who build in them every day." />

      <section className="section-pad" style={{ background: "var(--black)" }}>
        <div className="container">
          <div className="articles-grid reveal">
            {insights.map((a) => (
              <div key={a.title} className="article-card">
                <div style={{ fontFamily: "var(--font-mono)", fontSize: "9px", color: "var(--muted)", letterSpacing: "0.1em", marginBottom: "20px" }}>{a.date}</div>
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: "22px", color: "var(--white)", marginBottom: "12px", lineHeight: "1.1", letterSpacing: "0.02em" }}>{a.title}</h3>
                <p style={{ fontSize: "13px", color: "var(--muted)", lineHeight: "1.6" }}>{a.body}</p>
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

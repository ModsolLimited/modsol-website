import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/layout/PageHero";

export const metadata: Metadata = { title: "Articles" };

const articles = [
  { date: "Feb 2025", title: "Why Temporary Architecture Fails Brands", body: "The standard of temporary architecture in event and exhibition environments consistently underdelivers. Here's why — and how to fix it." },
  { date: "Jan 2025", title: "The Brief That Changes Everything", body: "How a single well-written brief determines whether a temporary structure is a cost or an investment. The questions your structural partner should be asking." },
  { date: "Dec 2024", title: "Designing for Strike: The Hidden Cost of Temporary Architecture", body: "Most temporary structures are designed to go up. The best ones are designed to come down just as efficiently. Why strike planning is where cost is really controlled." },
  { date: "Nov 2024", title: "When Permanent Isn't the Answer", body: "The case for modular over permanent in retail, hospitality, and brand environments. Flexibility isn't a compromise — it's a competitive advantage." },
  { date: "Oct 2024", title: "Material Honesty in Temporary Architecture", body: "Raw concrete block, exposed aluminium, honest structure. Why the authenticity of Modsol's aesthetic works harder than surface-level finishes." },
  { date: "Sep 2024", title: "Five Years of Formula 1 Paddock Builds", body: "What five years of building in the most demanding hospitality environment in sport has taught Modsol about precision, pressure, and delivery." },
];

export default function ArticlesPage() {
  return (
    <>
      <PageHero label="Knowledge Hub — Articles" title="Long-Form<br/>Thinking." subtitle="Editorial and analysis on temporary architecture, brand environments, and the events industry from the Modsol team." />

      <section className="section-pad" style={{ background: "var(--black)" }}>
        <div className="container">
          <div className="articles-grid reveal">
            {articles.map((a) => (
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
            <Link href="/knowledge-hub/industry-insights" className="btn-secondary">Industry Insights</Link>
            <Link href="/knowledge-hub/technical-guides" className="btn-secondary">Technical Guides</Link>
          </div>
        </div>
      </section>
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/layout/PageHero";

export const metadata: Metadata = { title: "Articles" };

const articles = [
  { date: "Feb 2025", readTime: "8 min", title: "Why Temporary Architecture Fails Brands", body: "The standard of temporary structures in event and exhibition environments consistently underdelivers on brand promise. The structural case for why the problem is systemic — and what it takes to fix it." },
  { date: "Jan 2025", readTime: "6 min", title: "The Brief That Changes Everything", body: "How a single well-written structural brief determines whether a temporary environment is a cost centre or a brand investment. The questions your structural partner should be asking — and what it means if they aren't." },
  { date: "Dec 2024", readTime: "7 min", title: "Designing for Strike: The Hidden Cost of Temporary Architecture", body: "Most temporary structures are designed to go up. The best ones are designed to come down with equal efficiency. Why strike planning is where real cost control happens in temporary architecture programmes." },
  { date: "Nov 2024", readTime: "5 min", title: "When Permanent Isn't the Answer", body: "The growing case for modular redeployable architecture over permanent construction in retail, hospitality and brand environments. Flexibility isn't a compromise — in a market that moves at this pace, it's a competitive advantage." },
  { date: "Oct 2024", readTime: "9 min", title: "Material Honesty in Temporary Architecture", body: "Raw block, exposed aluminium, honest structure. Why the material authenticity of Modsol's platform works harder than surface-applied finishes — and what it communicates about the brands that specify it." },
  { date: "Sep 2024", readTime: "11 min", title: "From Marquees to Architecture: The Modsol Story", body: "How a premium event marquee business became a temporary architecture company. The structural thinking, the commercial logic, and the 15-year journey from tensile canopies to full architectural modular systems." },
  { date: "Aug 2024", readTime: "6 min", title: "The Redeployment Argument", body: "A financial case study in temporary architecture redeployment. Why the second build of the same system costs significantly less, and how smart clients structure their temporary architecture programmes to capitalise on it." },
  { date: "Jul 2024", readTime: "5 min", title: "Temporary Architecture and Planning Permission", body: "The planning landscape for temporary structures has changed significantly. What constitutes 'temporary' in planning law, how long temporary consent typically runs, and where the grey areas are." },
  { date: "Jun 2024", readTime: "7 min", title: "Five Years of Formula 1 Paddock Builds", body: "What five consecutive seasons of building hospitality structures in the most demanding sport on earth teaches you about precision, logistics, pressure, and the non-negotiable nature of deadlines." },
];

export default function ArticlesPage() {
  return (
    <>
      <PageHero label="Knowledge Hub — Articles" title="Long-Form<br/>Thinking." subtitle="Editorial and analysis on temporary architecture, brand environments, modular systems design and the events industry — written by the people who build it." />

      <section className="section-pad" style={{ background: "var(--black)" }}>
        <div className="container">
          <div className="articles-grid reveal">
            {articles.map((a) => (
              <div key={a.title} className="article-card">
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "20px" }}>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: "9px", color: "var(--muted)", letterSpacing: "0.1em" }}>{a.date}</span>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: "9px", color: "rgba(255,255,255,0.3)", letterSpacing: "0.1em" }}>{a.readTime} read</span>
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
            <Link href="/knowledge-hub/industry-insights" className="btn-secondary">Industry Insights</Link>
            <Link href="/knowledge-hub/technical-guides" className="btn-secondary">Technical Guides</Link>
          </div>
        </div>
      </section>
    </>
  );
}

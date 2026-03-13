import Link from "next/link";

const articles = [
  {
    cat: "Architecture",
    title: "The Future of Modular Architecture",
    excerpt: "How modular systems are redefining what's possible in temporary and semi-permanent construction — and why the best is yet to come.",
    href: "/knowledge-hub/articles",
  },
  {
    cat: "Events",
    title: "Designing Modular Event Environments",
    excerpt: "The principles behind great modular event design — from spatial planning to rapid installation and branded finish.",
    href: "/knowledge-hub/articles",
  },
  {
    cat: "Exhibitions",
    title: "How Modular Systems Transform Exhibitions",
    excerpt: "Why the world's leading exhibition brands are choosing modular infrastructure over traditional stand construction.",
    href: "/knowledge-hub/articles",
  },
  {
    cat: "Branding",
    title: "Modular Branding Structures Explained",
    excerpt: "A technical introduction to modular aluminium frame systems for brand environments, facades and large-scale graphic installations.",
    href: "/knowledge-hub/technical-guides",
  },
  {
    cat: "Industry",
    title: "Temporary Architecture vs Permanent Construction",
    excerpt: "Breaking down the false divide between temporary and permanent — and how modular systems are closing the quality gap.",
    href: "/knowledge-hub/industry-insights",
  },
];

export default function KnowledgePreview() {
  return (
    <section className="section-pad" id="knowledge" style={{ background: "var(--dark2)", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
      <div className="container">
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between" }}>
          <div>
            <p className="section-label">06 — The Knowledge Hub</p>
            <h2 className="section-title reveal">Insights &amp;<br />Intelligence</h2>
          </div>
          <Link href="/knowledge-hub" className="link-arrow reveal" style={{ marginBottom: "12px" }}>View All Articles</Link>
        </div>

        <div className="articles-grid reveal">
          {articles.map((a, i) => (
            <Link key={i} href={a.href} style={{ textDecoration: "none" }}>
              <div className="article-card">
                <div className="article-cat">{a.cat}</div>
                <div className="article-title">{a.title}</div>
                <p className="article-excerpt">{a.excerpt}</p>
                <span className="link-arrow">Read Article</span>
              </div>
            </Link>
          ))}

          {/* Subscribe card */}
          <div className="article-card" style={{ background: "rgba(198,255,2,0.04)", borderColor: "rgba(198,255,2,0.2)" }}>
            <div style={{ height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
              <div>
                <p style={{ fontFamily: "var(--font-display)", fontSize: "40px", color: "var(--yellow)", letterSpacing: "0.05em", lineHeight: "1", marginBottom: "16px" }}>
                  Build Bold.<br />Think<br />Modular.
                </p>
                <p style={{ fontSize: "13px", color: "var(--muted)", lineHeight: "1.7" }}>
                  Stay ahead of the curve with Modsol intelligence on modular systems, architecture and brand environments.
                </p>
              </div>
              <Link href="/contact" className="btn-primary" style={{ marginTop: "28px", fontSize: "9px", padding: "12px 20px", alignSelf: "flex-start" }}>
                Subscribe
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import Link from "next/link";

const industries = [
  {
    href: "/solutions/events",
    title: "Events",
    tag: "Live & Corporate",
    desc: "Festival main stages, F1 paddock clubs, concert touring infrastructure, sporting overlays. Temporary structures that carry the full weight of the world's biggest live moments.",
    stat: "200+",
    statLabel: "Events Delivered",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="24" height="24">
        <path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/>
      </svg>
    ),
  },
  {
    href: "/solutions/exhibitions",
    title: "Exhibitions",
    tag: "Stands & Installs",
    desc: "Custom exhibition stands, gallery environments and feature installations for trade shows, world expos and branded display environments from 9m² to 900m².",
    stat: "150+",
    statLabel: "Stands Built",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="24" height="24">
        <rect x="2" y="7" width="20" height="14"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
      </svg>
    ),
  },
  {
    href: "/solutions/hospitality",
    title: "Hospitality",
    tag: "VIP & Corporate",
    desc: "VIP pavilions, paddock clubs, brand hospitality villages and corporate entertaining environments built to the quality your most important guests expect.",
    stat: "80+",
    statLabel: "VIP Structures",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="24" height="24">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
  },
  {
    href: "/solutions/retail",
    title: "Retail & Pop-up",
    tag: "Brand Retail",
    desc: "Temporary flagship stores, seasonal pop-ups and permanent-quality retail environments. From weekend market units to six-month brand destinations.",
    stat: "60+",
    statLabel: "Retail Builds",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="24" height="24">
        <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
        <line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/>
      </svg>
    ),
  },
  {
    href: "/solutions/brand-activations",
    title: "Activation",
    tag: "Experiential",
    desc: "Immersive brand environments for product launches, consumer campaigns and press events. Three-dimensional brand storytelling built to specification.",
    stat: "90+",
    statLabel: "Activations",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="24" height="24">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
      </svg>
    ),
  },
  {
    href: "/solutions/temporary-offices",
    title: "Workspace",
    tag: "Offices & Command",
    desc: "Site command centres, production offices, interim headquarters and deployable workspace solutions. Professional environments wherever the work is happening.",
    stat: "40+",
    statLabel: "Office Deploys",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="24" height="24">
        <rect x="2" y="3" width="20" height="14"/><line x1="8" y1="21" x2="16" y2="21"/>
        <line x1="12" y1="17" x2="12" y2="21"/>
      </svg>
    ),
  },
];

export default function IndustriesSection() {
  return (
    <section className="industries-section section-pad" id="solutions">
      <div className="container">
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: "64px" }}>
          <div>
            <p className="section-label">04 — The Solutions</p>
            <h2 className="section-title reveal">Built for<br />Every Brief.</h2>
          </div>
          <div style={{ maxWidth: "400px" }}>
            <p className="section-body reveal" style={{ paddingBottom: "8px" }}>
              From our roots in premium marquee and event structures, Modsol now deploys across six sectors — wherever temporary architecture is expected to perform at the level of permanent design.
            </p>
            <Link href="/solutions" className="link-arrow reveal">View all solutions</Link>
          </div>
        </div>

        <div className="industries-grid reveal">
          {industries.map((ind) => (
            <Link key={ind.title} href={ind.href} style={{ textDecoration: "none" }}>
              <div className="industry-item">
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "20px" }}>
                  <div className="industry-icon">{ind.icon}</div>
                  <div style={{ textAlign: "right" }}>
                    <div style={{ fontFamily: "var(--font-display)", fontSize: "22px", color: "var(--yellow)", lineHeight: 1 }}>{ind.stat}</div>
                    <div style={{ fontFamily: "var(--font-mono)", fontSize: "8px", color: "var(--muted)", letterSpacing: "0.15em", textTransform: "uppercase", marginTop: "2px" }}>{ind.statLabel}</div>
                  </div>
                </div>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: "8px", color: "var(--yellow)", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "8px" }}>{ind.tag}</div>
                <h4>{ind.title}</h4>
                <p style={{ marginTop: "10px" }}>{ind.desc}</p>
                <div style={{ marginTop: "20px", fontFamily: "var(--font-mono)", fontSize: "9px", color: "rgba(255,255,255,0.3)", letterSpacing: "0.15em", textTransform: "uppercase" }}>Explore →</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

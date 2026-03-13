import Link from "next/link";

const industries = [
  {
    href: "/solutions/events",
    title: "Events",
    desc: "Festival infrastructure, VIP suites, temporary pavilions and event villages at scale.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="24" height="24">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
        <polyline points="9 22 9 12 15 12 15 22"/>
      </svg>
    ),
  },
  {
    href: "/solutions/exhibitions",
    title: "Exhibitions",
    desc: "Stand construction, gallery environments and exhibition infrastructure worldwide.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="24" height="24">
        <rect x="2" y="7" width="20" height="14"/>
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
      </svg>
    ),
  },
  {
    href: "/solutions/hospitality",
    title: "Hospitality",
    desc: "Premium hospitality suites, VIP lounges and brand-led guest environments.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="24" height="24">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
        <circle cx="12" cy="7" r="4"/>
      </svg>
    ),
  },
  {
    href: "/solutions/retail",
    title: "Retail",
    desc: "Pop-up retail, flagship activations and branded sales environments.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="24" height="24">
        <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
        <line x1="3" y1="6" x2="21" y2="6"/>
        <path d="M16 10a4 4 0 0 1-8 0"/>
      </svg>
    ),
  },
  {
    href: "/solutions/temporary-offices",
    title: "Temp. Offices",
    desc: "Deployable workspace solutions, site offices and temporary commercial environments.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="24" height="24">
        <rect x="2" y="3" width="20" height="14"/>
        <line x1="8" y1="21" x2="16" y2="21"/>
        <line x1="12" y1="17" x2="12" y2="21"/>
      </svg>
    ),
  },
  {
    href: "/solutions/brand-activations",
    title: "Brand Activation",
    desc: "Large-scale brand environments, roadshows and high-impact marketing installations.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="24" height="24">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
      </svg>
    ),
  },
];

export default function IndustriesSection() {
  return (
    <section className="industries-section section-pad" id="solutions">
      <div className="container">
        <p className="section-label">04 — The Solutions</p>
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between" }}>
          <h2 className="section-title reveal">Industries<br />We Serve</h2>
          <p className="section-body reveal" style={{ maxWidth: "360px", paddingBottom: "8px" }}>
            Modsol systems deploy across the most demanding temporary environments in the world. Built for speed. Built for impact. Built to build bold.
          </p>
        </div>

        <div className="industries-grid reveal">
          {industries.map((ind) => (
            <Link key={ind.title} href={ind.href} style={{ textDecoration: "none" }}>
              <div className="industry-item">
                <div className="industry-icon">{ind.icon}</div>
                <h4>{ind.title}</h4>
                <p>{ind.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

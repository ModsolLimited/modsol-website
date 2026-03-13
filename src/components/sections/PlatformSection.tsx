import Link from "next/link";

const cards = [
  {
    num: "01",
    href: "/products/modblock",
    title: "The Modblock",
    desc: "A premium modular building system engineered for adaptable temporary architecture. Flat-packable. Rapidly deployable. Infinitely scalable.",
    linkLabel: "Explore Modblock",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="22" height="22">
        <rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/>
        <rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/>
      </svg>
    ),
  },
  {
    num: "02",
    href: "/products/modwall",
    title: "The Modwall",
    desc: "A modular interior wall system engineered for exhibitions, events and temporary environments. Clean finish. Rapid installation. Zero compromise.",
    linkLabel: "Explore Modwall",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="22" height="22">
        <line x1="3" y1="4" x2="21" y2="4"/><line x1="3" y1="9" x2="21" y2="9"/>
        <line x1="3" y1="14" x2="21" y2="14"/><line x1="3" y1="19" x2="21" y2="19"/>
        <rect x="6" y="2" width="2" height="20" fill="currentColor" opacity="0.3"/>
      </svg>
    ),
  },
  {
    num: "03",
    href: "/products/modframe",
    title: "The Modframe",
    desc: "A modular aluminium framework for branding, façades and large-scale visual environments. Engineered for brand impact at any scale.",
    linkLabel: "Explore Modframe",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="22" height="22">
        <polyline points="4 7 12 3 20 7"/><polyline points="4 12 12 8 20 12"/>
        <polyline points="4 17 12 13 20 17"/><polyline points="4 7 4 17"/><polyline points="20 7 20 17"/>
      </svg>
    ),
  },
];

export default function PlatformSection() {
  return (
    <section className="platform-section section-pad" id="company">
      <div className="container">
        <div className="platform-intro">
          <div>
            <p className="section-label">02 — The Platform</p>
            <h2 className="section-title reveal">The Modsol<br />Platform</h2>
          </div>
          <div>
            <p className="section-body reveal">
              Three precision-engineered modular systems. One unified platform. Modsol delivers the infrastructure behind the world's most ambitious temporary environments — from flagship event structures to international brand activations.
            </p>
            <div className="stats-row reveal" style={{ marginTop: "40px" }}>
              {[
                { num: "3", label: "Core Systems" },
                { num: "6+", label: "Industries" },
                { num: "48h", label: "Install Time" },
                { num: "∞", label: "Configurations" },
              ].map((s) => (
                <div className="stat-item" key={s.label}>
                  <div className="stat-num">{s.num}</div>
                  <div className="stat-label">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="platform-cards reveal">
          {cards.map((card) => (
            <div className="platform-card" key={card.num}>
              <div className="platform-card-num">{card.num}</div>
              <div className="platform-card-icon">{card.icon}</div>
              <h3>{card.title}</h3>
              <p>{card.desc}</p>
              <Link href={card.href} className="link-arrow">{card.linkLabel}</Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

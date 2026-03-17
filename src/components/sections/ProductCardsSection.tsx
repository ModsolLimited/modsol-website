import Link from "next/link";

const cards = [
  {
    num: "01",
    href: "/products/modblock",
    title: "The Modblock",
    image: "/Modblock Vodafone.png",
    desc: "A premium modular building system engineered for adaptable temporary architecture. Flat-packable. Rapidly deployable. Infinitely scalable.",
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
    image: "/Modwall 1.jpg",
    desc: "A modular interior wall system engineered for exhibitions, events and temporary environments. Clean finish. Rapid installation. Zero compromise.",
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
    image: "/Modframe 1.jpg",
    desc: "A modular aluminium framework for branding, façades and large-scale visual environments. Engineered for brand impact at any scale.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="22" height="22">
        <polyline points="4 7 12 3 20 7"/><polyline points="4 12 12 8 20 12"/>
        <polyline points="4 17 12 13 20 17"/><polyline points="4 7 4 17"/><polyline points="20 7 20 17"/>
      </svg>
    ),
  },
];

export default function ProductCardsSection() {
  return (
    <section className="platform-section section-pad">
      <div className="container">
        <p className="section-label">THE PRODUCTS</p>
        <div className="platform-cards reveal">
          {cards.map((card) => (
            <div className="platform-card" key={card.num}>
              <div className="platform-card-image">
                <div className="platform-card-image-bg" style={{ backgroundImage: `url('${card.image}')` }} />
                <div className="platform-card-image-overlay" />
              </div>
              <div className="platform-card-num">{card.num}</div>
              <div className="platform-card-icon">{card.icon}</div>
              <h3>{card.title}</h3>
              <p>{card.desc}</p>
              <Link href={card.href} className="btn-primary">Explore System</Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

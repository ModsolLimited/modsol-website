import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = { title: "Solutions — Modsol" };

const solutions = [
  {
    num: "01",
    tag: "LIVE & TOURING",
    label: "SHOWS & FESTIVALS",
    href: "/solutions/shows-festivals",
    image: "/Modblock/Modblock - Festival.png",
    body: "From main stages to artist hospitality — the Modblock structures the environment, the Modwall defines the interior, and the Modframe carries the brand overhead.",
  },
  {
    num: "02",
    tag: "STANDS & INSTALLS",
    label: "EXHIBITIONS & CONFERENCES",
    href: "/solutions/exhibitions-conference",
    image: "/Modwall/Modwall - Exhibition.png",
    body: "Exhibition stands from 9m² shell-scheme upgrades to 900m² feature builds. All three systems deploy together for a complete branded environment.",
  },
  {
    num: "03",
    tag: "VIP & DINING",
    label: "HOSPITALITY & RESTAURANTS",
    href: "/solutions/hospitality-restaurants",
    image: "/Modblock/Gaucho - Modblock.png",
    body: "VIP pavilions, pop-up restaurants and paddock clubs built to hotel standard. The Modblock provides the shell, the Modwall the interior finish, the Modframe the canopy.",
  },
  {
    num: "04",
    tag: "BRAND RETAIL",
    label: "RETAIL & MERCHANDISE",
    href: "/solutions/retail-merchandise",
    image: "/Modblock/MODBLOCK ACTIVATION NIKE 2.png",
    body: "Pop-up flagships and tour merchandise stores. Modwall slatwall and pegboard panels, Modblock architecture, Modframe fascia — retail built in days, not months.",
  },
  {
    num: "05",
    tag: "EXPERIENTIAL",
    label: "BRAND ACTIVATIONS",
    href: "/solutions/brand-activations",
    image: "/Modframe/Events-Nugget-Box-17.jpg",
    body: "Product launches, press environments and immersive brand installations. All three systems combine to make the physical environment the centrepiece of the campaign.",
  },
  {
    num: "06",
    tag: "ACTIVATIONS & TOURS",
    label: "EXPERIENTIAL MARKETING",
    href: "/solutions/experiential-marketing",
    image: "/Modblock/Modblock - VW.png",
    body: "National roadshows and public space activations. Modular architecture that installs overnight, carries full brand graphics, and redeploys across the entire tour.",
  },
  {
    num: "07",
    tag: "CIRCUIT & BRAND",
    label: "AUTOMOTIVE & MOTORSPORT",
    href: "/solutions/automotive-motorsport",
    image: "/Modframe/Aston Martin Internal.JPG",
    body: "Paddock hospitality suites, pit structures and brand pavilions engineered to F1 and GT specification. Zero build failures. Race weekend ready.",
  },
  {
    num: "08",
    tag: "OFFICE & WELFARE",
    label: "DOMESTIC & COMMERCIAL",
    href: "/solutions/domestic-commercial",
    image: "/Modblock/Modblock - Domestic.png",
    body: "Site command centres, welfare facilities and permanent-quality garden annexes. CE certified structures built for planning consent and long-term deployment.",
  },
];

export default function SolutionsPage() {
  return (
    <>
      <style>{`
        .sol-page {
          padding-top: 72px;
          padding-bottom: 72px;
          background: var(--black);
          min-height: 100vh;
        }
        .sol-hero {
          padding: 80px 0 64px;
          border-bottom: 1px solid rgba(255,255,255,0.06);
        }
        .sol-hero-label {
          font-family: var(--font-mono);
          font-size: 10px;
          color: var(--yellow);
          letter-spacing: 0.25em;
          text-transform: uppercase;
          margin-bottom: 24px;
        }
        .sol-hero-title {
          font-family: var(--font-display);
          font-size: clamp(48px, 7vw, 96px);
          color: var(--white);
          letter-spacing: 0.02em;
          line-height: 0.95;
          margin-bottom: 24px;
        }
        .sol-hero-sub {
          font-size: 15px;
          color: var(--muted);
          line-height: 1.8;
          max-width: 560px;
        }
        .sol-list {
          display: flex;
          flex-direction: column;
        }
        .sol-row {
          display: grid;
          grid-template-columns: 60px 320px 1fr 200px;
          align-items: center;
          min-height: 140px;
          border-bottom: 1px solid rgba(255,255,255,0.06);
          text-decoration: none;
          color: inherit;
          position: relative;
          transition: background 0.3s;
          overflow: hidden;
        }
        .sol-row::before {
          content: '';
          position: absolute;
          left: 0;
          bottom: 0;
          width: 3px;
          height: 0;
          background: var(--yellow);
          transition: height 0.35s ease;
        }
        .sol-row:hover::before {
          height: 100%;
        }
        .sol-row:hover .sol-img-inner {
          filter: brightness(0.8);
        }
        .sol-row:hover .sol-explore {
          color: var(--yellow);
        }
        .sol-num {
          font-family: var(--font-mono);
          font-size: 11px;
          color: var(--muted);
          letter-spacing: 0.2em;
          padding-left: 24px;
        }
        .sol-img-col {
          width: 320px;
          height: 140px;
          overflow: hidden;
          position: relative;
          flex-shrink: 0;
          background: #111;
        }
        .sol-img-inner {
          position: absolute;
          inset: 0;
          filter: brightness(0.55);
          transition: filter 0.4s ease;
        }
        .sol-content {
          padding: 24px 40px;
        }
        .sol-tag {
          font-family: var(--font-mono);
          font-size: 9px;
          color: var(--yellow);
          letter-spacing: 0.25em;
          text-transform: uppercase;
          margin-bottom: 8px;
        }
        .sol-title {
          font-family: var(--font-display);
          font-size: clamp(28px, 3vw, 42px);
          color: var(--white);
          letter-spacing: 0.02em;
          line-height: 1;
          margin-bottom: 10px;
        }
        .sol-body {
          font-size: 13px;
          color: var(--muted);
          line-height: 1.7;
          margin: 0;
        }
        .sol-explore {
          font-family: var(--font-mono);
          font-size: 10px;
          color: var(--yellow);
          letter-spacing: 0.2em;
          text-transform: uppercase;
          text-align: right;
          padding-right: 32px;
          white-space: nowrap;
          transition: color 0.3s;
        }
        @media (max-width: 768px) {
          .sol-row {
            display: flex;
            flex-direction: column;
            align-items: stretch;
            min-height: unset;
          }
          .sol-row::before {
            width: 100%;
            height: 3px;
            left: 0;
            bottom: unset;
            top: 0;
            transition: none;
          }
          .sol-row:hover::before {
            height: 3px;
          }
          .sol-num {
            padding: 16px 20px 0;
          }
          .sol-img-col {
            width: 100%;
            height: 200px;
          }
          .sol-content {
            padding: 16px 20px;
          }
          .sol-explore {
            text-align: left;
            padding: 0 20px 20px;
          }
        }
      `}</style>

      <div className="sol-page">
        <div className="sol-hero">
          <div className="container">
            <p className="sol-hero-label">03 — THE SOLUTIONS</p>
            <h1 className="sol-hero-title">EVERY SECTOR.<br />ONE PLATFORM.</h1>
            <p className="sol-hero-sub">The Modblock, Modwall and Modframe deploy across eight distinct market sectors — each with its own demands, each met with the same engineered precision.</p>
          </div>
        </div>

        <div className="sol-list">
          {solutions.map((s) => (
            <Link key={s.num} href={s.href} className="sol-row">
              <span className="sol-num">{s.num}</span>
              <div className="sol-img-col">
                <Image
                  src={s.image}
                  alt={s.label}
                  fill
                  className="sol-img-inner"
                  style={{ objectFit: "cover" }}

                />
              </div>
              <div className="sol-content">
                <p className="sol-tag">{s.tag}</p>
                <h2 className="sol-title">{s.label}</h2>
                <p className="sol-body">{s.body}</p>
              </div>
              <span className="sol-explore">EXPLORE →</span>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

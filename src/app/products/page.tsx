import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = { title: "Products" };

const products = [
  {
    num: "01",
    slug: "modblock",
    name: "Modblock",
    tag: "Structural",
    desc: "Modular Architecture - Redefined. Flat pack system, stackable, fully configurable wall panels for repeated solutions.",
    specs: [
      "15m² unit footprint",
      "5KN/M2 (Floor Capacity)",
      "3 Tier (Stack)",
    ],
    image: "/Modblock/CONFERENCE SPACE 2.png",
  },
  {
    num: "02",
    slug: "modwall",
    name: "Modwall",
    tag: "Partition & Perimeter",
    desc: "Creating Space In Any Environment. Solid modular wall panels, with integrated doors and different finishes for various applications.",
    specs: [
      "992mm panel width",
      "20KG (Panel Weight)",
      "Standard, Slat Wall, Pegboard (Panel Finishes)",
    ],
    image: "/Modwall/Modwall 1.jpg",
  },
  {
    num: "03",
    slug: "modframe",
    name: "Modframe",
    tag: "Fascias & Branding",
    desc: "TFS System - Built For Bold Brands.",
    specs: [
      "PVC, Fabric or Rigid Panelling",
      "Compatible with Any Modular Structure",
      "Standalone Branding",
    ],
    image: "/Modframe/Renault.jpg",
  },
  {
    num: "04",
    slug: "modlab",
    name: "Modlab",
    tag: "Bespoke & Custom",
    desc: "Full design-to-delivery engineering service — bespoke structures, container conversions and architecturally specified fabrication for briefs no standard platform can answer.",
    specs: [
      "Fully bespoke engineering",
      "Container conversions & modular car parks",
      "Architecturally designed brand installations",
    ],
    image: "/Modlab/modlab-hero.jpg",
  },
];

function gearPath(
  cx: number, cy: number, N: number,
  Rout: number, Rbod: number,
  twHalf: number, twHalfOuter: number
): string {
  const step = (2 * Math.PI) / N;
  const α = Math.asin(twHalf / Rbod);
  const β = Math.asin(twHalfOuter / Rout);
  const f = (n: number) => n.toFixed(2);
  let d = "";
  for (let i = 0; i < N; i++) {
    const θ = i * step - Math.PI / 2;
    const p1x = cx + Rbod * Math.cos(θ - α), p1y = cy + Rbod * Math.sin(θ - α);
    const p2x = cx + Rout * Math.cos(θ - β), p2y = cy + Rout * Math.sin(θ - β);
    const p3x = cx + Rout * Math.cos(θ + β), p3y = cy + Rout * Math.sin(θ + β);
    const p4x = cx + Rbod * Math.cos(θ + α), p4y = cy + Rbod * Math.sin(θ + α);
    const nθ = θ + step;
    const np1x = cx + Rbod * Math.cos(nθ - α), np1y = cy + Rbod * Math.sin(nθ - α);
    if (i === 0) d += `M ${f(p1x)} ${f(p1y)} `;
    d += `L ${f(p2x)} ${f(p2y)} L ${f(p3x)} ${f(p3y)} L ${f(p4x)} ${f(p4y)} A ${Rbod} ${Rbod} 0 0 1 ${f(np1x)} ${f(np1y)} `;
  }
  return d + "Z";
}

export default function ProductsPage() {
  return (
    <>
      <style>{`
        /* ── Product row hover ────────────────────────── */
        .product-row {
          position: relative;
          display: block;
          text-decoration: none;
          background: var(--black);
          border-bottom: 1px solid rgba(255,255,255,0.06);
          overflow: hidden;
        }
        /* Yellow bar slides up from bottom-left */
        .product-row::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 3px;
          height: 0;
          background: var(--yellow);
          transition: height 0.45s ease;
          z-index: 3;
        }
        .product-row:hover::after { height: 100%; }

        /* Product name → yellow */
        .product-name {
          font-family: var(--font-display);
          font-size: clamp(40px, 5vw, 72px);
          color: var(--white);
          letter-spacing: 0.02em;
          line-height: 1;
          transition: color 0.3s;
        }
        .product-row:hover .product-name { color: var(--yellow); }

        /* Image brightens + scales */
        .product-img {
          transition: transform 0.6s ease, filter 0.4s ease;
          filter: brightness(0.65);
          object-fit: cover;
        }
        .product-row:hover .product-img {
          transform: scale(1.05);
          filter: brightness(0.88);
        }

        /* Arrow box */
        .product-arrow {
          position: absolute;
          bottom: 16px;
          right: 16px;
          width: 42px;
          height: 42px;
          border: 1px solid var(--yellow);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background 0.3s, border-color 0.3s;
          z-index: 2;
          color: var(--yellow);
        }
        .product-arrow svg { transition: color 0.3s; }
        .product-row:hover .product-arrow {
          background: var(--yellow);
          border-color: var(--yellow);
          color: var(--black);
        }

        /* ── Responsive ──────────────────────────────── */
        .product-inner {
          display: flex;
          min-height: 320px;
        }
        .product-content {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 48px clamp(24px, 3vw, 64px) 48px clamp(40px, 4vw, 120px);
        }
        .product-desc-col {
          margin-top: 28px;
        }
        .product-image-col {
          width: 380px;
          flex-shrink: 0;
          position: relative;
        }
        /* Hide description text below 1024px */
        @media (max-width: 1024px) {
          .product-desc-col { display: none; }
          .product-image-col { width: 280px; }
        }
        /* Stack to single column on mobile */
        @media (max-width: 768px) {
          .product-inner { flex-direction: column; min-height: unset; }
          .product-image-col { width: 100%; height: 220px; flex-shrink: unset; }
          .product-content { padding: 32px 24px; }
        }
      `}</style>

      {/* ── Hero ──────────────────────────────────────────── */}
      <section
        style={{
          background: "var(--black)",
          paddingTop: "140px",
          paddingBottom: "80px",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        <div className="container">
          <p className="mono" style={{ color: "var(--muted)", marginBottom: "28px" }}>
            02 — THE SYSTEMS & THE LAB
          </p>
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(56px, 8vw, 120px)",
              lineHeight: 0.92,
              letterSpacing: "0.01em",
              color: "var(--white)",
              marginBottom: "40px",
            }}
          >
            THREE SYSTEMS.
            <br />
            <span style={{ color: "var(--yellow)" }}>INFINITE FORM.</span>
          </h1>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "15px",
              color: "var(--muted)",
              lineHeight: "1.9",
              maxWidth: "580px",
            }}
          >
            Every Modsol structure is built from one of three engineered platforms — developed
            from 15 years of precision temporary construction. The Modlab handles everything
            beyond. Combined or standalone, they define what modular architecture can be.
          </p>
        </div>
      </section>

      {/* ── Product rows ──────────────────────────────────── */}
      <section style={{ background: "var(--black)" }}>
        {products.map((p) => (
          <Link key={p.slug} href={`/products/${p.slug}`} className="product-row">
            <div className="product-inner">

              {/* Left: content */}
              <div className="product-content">
                <div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "20px",
                      marginBottom: "18px",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "11px",
                        letterSpacing: "0.2em",
                        color: "rgba(255,255,255,0.2)",
                      }}
                    >
                      {p.num}
                    </span>
                    <span
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "9px",
                        letterSpacing: "0.3em",
                        textTransform: "uppercase",
                        color: "var(--yellow)",
                      }}
                    >
                      {p.tag}
                    </span>
                  </div>

                  {p.slug === "modlab" ? (
                    <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                      <h2 className="product-name">{p.name}</h2>
                      <svg width="100%" viewBox="0 18 680 184" xmlns="http://www.w3.org/2000/svg" style={{ height: '48px', width: 'auto', display: 'block', transform: 'translateY(-5px)' }}>
                        <defs>
                          <clipPath id="tc5"><path d="M 186,70 L 186,172 Q 186,195 210,195 Q 234,195 234,172 L 234,70 Z"/></clipPath>
                          <clipPath id="rc6"><path d="M 348,38 L 392,38 L 392,54 L 384,54 L 384,100 Q 424,108 424,148 A 54,54 0 1,1 316,148 Q 316,108 356,100 L 356,54 L 348,54 Z"/></clipPath>
                          <clipPath id="cc6"><path d="M 502,100 L 538,100 Q 549,110 566,184 Q 568,192 558,192 L 482,192 Q 472,192 474,184 Q 491,110 502,100 Z"/></clipPath>
                        </defs>
                        <path d="M 182,38 Q 182,34 210,34 Q 238,34 238,38 L 238,54 L 234,54 L 234,172 Q 234,195 210,195 Q 186,195 186,172 L 186,54 L 182,54 Z" fill="none" stroke="#ffffff" strokeWidth="3.5"/>
                        <rect x="182" y="152" width="56" height="50" fill="#C6FF02" clipPath="url(#tc5)"/>
                        <line x1="224" y1="100" x2="234" y2="100" stroke="#ffffff" strokeWidth="2"/>
                        <line x1="226" y1="118" x2="234" y2="118" stroke="#ffffff" strokeWidth="2"/>
                        <line x1="224" y1="136" x2="234" y2="136" stroke="#ffffff" strokeWidth="2"/>
                        <path d="M 349,54 L 349,38 Q 349,33 370,33 Q 391,33 391,38 L 391,54 L 384,54 L 384,97" fill="none" stroke="#ffffff" strokeWidth="3.5"/>
                        <path d="M 356,97 L 356,54 L 349,54" fill="none" stroke="#ffffff" strokeWidth="3.5"/>
                        <path d="M 356,96 A 54,54 0 1,0 384,96" fill="none" stroke="#ffffff" strokeWidth="3.5"/>
                        <rect x="357" y="38" width="26" height="60" fill="#000000"/>
                        <path d="M 349,54 L 349,38 Q 349,33 370,33 Q 391,33 391,38 L 391,54 L 384,54 L 384,97" fill="none" stroke="#ffffff" strokeWidth="3.5"/>
                        <path d="M 356,97 L 356,54 L 349,54" fill="none" stroke="#ffffff" strokeWidth="3.5"/>
                        <rect x="316" y="136" width="108" height="70" fill="#C6FF02" clipPath="url(#rc6)"/>
                        <path d="M 494,38 Q 494,33 520,33 Q 546,33 546,38 L 546,54 L 538,54 L 538,100 Q 554,112 568,182 Q 570,192 560,192 L 480,192 Q 470,192 472,182 Q 486,112 502,100 L 502,54 L 494,54 Z" fill="none" stroke="#ffffff" strokeWidth="3.5"/>
                        <rect x="505" y="54" width="30" height="50" fill="#000000"/>
                        <path d="M 476,158 L 564,158 L 568,182 Q 570,192 560,192 L 480,192 Q 470,192 472,182 Z" fill="#C6FF02" clipPath="url(#cc6)"/>
                        <line x1="502" y1="54" x2="502" y2="100" stroke="#ffffff" strokeWidth="3.5"/>
                        <line x1="538" y1="54" x2="538" y2="100" stroke="#ffffff" strokeWidth="3.5"/>
                        <line x1="502" y1="132" x2="514" y2="132" stroke="#ffffff" strokeWidth="2"/>
                        <line x1="500" y1="148" x2="511" y2="148" stroke="#ffffff" strokeWidth="2"/>
                      </svg>
                    </div>
                  ) : (
                    <h2 className="product-name">{p.name}</h2>
                  )}
                </div>

                {/* Description + specs (hidden below 1024px) */}
                <div className="product-desc-col">
                  <p
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "14px",
                      color: "var(--muted)",
                      lineHeight: "1.85",
                      marginBottom: "20px",
                      maxWidth: "460px",
                    }}
                  >
                    {p.desc}
                  </p>
                  <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "7px" }}>
                    {p.specs.map((s) => (
                      <li
                        key={s}
                        style={{
                          fontFamily: "var(--font-mono)",
                          fontSize: "10px",
                          color: "rgba(255,255,255,0.45)",
                          letterSpacing: "0.1em",
                          textTransform: "uppercase",
                          display: "flex",
                          alignItems: "center",
                          gap: "10px",
                        }}
                      >
                        <span style={{ color: "var(--yellow)", flexShrink: 0, fontSize: "14px", lineHeight: 1 }}>
                          —
                        </span>
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Right: image */}
              <div className="product-image-col">
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "var(--dark4)",
                    overflow: "hidden",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {p.slug === "modlab" ? (
                    (() => {
                      const largePath = gearPath(160,200,16,120,96,7.5,7.0);
                      const medPath   = gearPath(295,87, 10,74, 60,7.0,6.5);
                      const smPath    = gearPath(286,305, 8,60, 48,6.5,6.2);
                      const D = Math.PI / 180;
                      return (
                        <svg
                          viewBox="0 0 400 400"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-label="Modlab emblem"
                          style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
                        >
                          {/* ── Background cogs (opacity 0.25, native 400×400 coords) ── */}
                          <g opacity="0.25">

                            {/* Large cog — 16 teeth, CW 18s */}
                            <g>
                              <animateTransform attributeName="transform" type="rotate"
                                from="0 160 200" to="360 160 200" dur="18s" repeatCount="indefinite" />
                              <path d={largePath} stroke="#C6FF02" strokeWidth="1.5" />
                              <circle cx="160" cy="200" r="88" stroke="#C6FF02" strokeWidth="0.75" opacity="0.45" />
                              <circle cx="160" cy="200" r="68" stroke="#C6FF02" strokeWidth="0.5"  opacity="0.3"  />
                              {[0,60,120,180,240,300].map(a => (
                                <line key={a} x1="160" y1="200"
                                  x2={+(160+80*Math.cos(a*D)).toFixed(2)} y2={+(200+80*Math.sin(a*D)).toFixed(2)}
                                  stroke="#C6FF02" strokeWidth="0.75" opacity="0.4" />
                              ))}
                              {[30,90,150,210,270,330].map(a => (
                                <circle key={a}
                                  cx={+(160+80*Math.cos(a*D)).toFixed(2)} cy={+(200+80*Math.sin(a*D)).toFixed(2)}
                                  r="5" stroke="#C6FF02" strokeWidth="0.75" opacity="0.5" />
                              ))}
                              <circle cx="160" cy="200" r="20" stroke="#C6FF02" strokeWidth="1" />
                              <circle cx="160" cy="200" r="6"  fill="#C6FF02" />
                            </g>

                            {/* Medium cog — 10 teeth, CCW 11.25s */}
                            <g>
                              <animateTransform attributeName="transform" type="rotate"
                                from="0 295 87" to="-360 295 87" dur="11.25s" repeatCount="indefinite" />
                              <path d={medPath} stroke="#C6FF02" strokeWidth="1.25" />
                              <circle cx="295" cy="87" r="52" stroke="#C6FF02" strokeWidth="0.75" opacity="0.45" />
                              <circle cx="295" cy="87" r="36" stroke="#C6FF02" strokeWidth="0.5"  opacity="0.3"  />
                              {[0,72,144,216,288].map(a => (
                                <line key={a} x1="295" y1="87"
                                  x2={+(295+46*Math.cos(a*D)).toFixed(2)} y2={+(87+46*Math.sin(a*D)).toFixed(2)}
                                  stroke="#C6FF02" strokeWidth="0.75" opacity="0.4" />
                              ))}
                              {[36,108,180,252,324].map(a => (
                                <circle key={a}
                                  cx={+(295+46*Math.cos(a*D)).toFixed(2)} cy={+(87+46*Math.sin(a*D)).toFixed(2)}
                                  r="3.5" stroke="#C6FF02" strokeWidth="0.75" opacity="0.5" />
                              ))}
                              <circle cx="295" cy="87" r="13" stroke="#C6FF02" strokeWidth="1" />
                              <circle cx="295" cy="87" r="4"  fill="#C6FF02" />
                            </g>

                            {/* Small cog — 8 teeth, CCW 9s */}
                            <g>
                              <animateTransform attributeName="transform" type="rotate"
                                from="0 286 305" to="-360 286 305" dur="9s" repeatCount="indefinite" />
                              <path d={smPath} stroke="#C6FF02" strokeWidth="1.25" />
                              <circle cx="286" cy="305" r="38" stroke="#C6FF02" strokeWidth="0.75" opacity="0.45" />
                              {[0,90,180,270].map(a => (
                                <line key={a} x1="286" y1="305"
                                  x2={+(286+34*Math.cos(a*D)).toFixed(2)} y2={+(305+34*Math.sin(a*D)).toFixed(2)}
                                  stroke="#C6FF02" strokeWidth="0.75" opacity="0.4" />
                              ))}
                              {[45,135,225,315].map(a => (
                                <circle key={a}
                                  cx={+(286+34*Math.cos(a*D)).toFixed(2)} cy={+(305+34*Math.sin(a*D)).toFixed(2)}
                                  r="3" stroke="#C6FF02" strokeWidth="0.75" opacity="0.5" />
                              ))}
                              <circle cx="286" cy="305" r="10"  stroke="#C6FF02" strokeWidth="1" />
                              <circle cx="286" cy="305" r="3"   fill="#C6FF02" />
                            </g>

                          </g>

                        </svg>
                      );
                    })()
                  ) : (
                  <Image
                    src={p.image}
                    alt={p.name}
                    fill
                    className="product-img"
                    sizes="(max-width: 768px) 100vw, 380px"
                  />
                  )}
                </div>
                <div className="product-arrow">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M3 13L13 3M13 3H6M13 3V10"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>

            </div>
          </Link>
        ))}
      </section>

      {/* ── Footer CTA ────────────────────────────────────── */}
      <section
        style={{
          background: "var(--dark)",
          borderTop: "1px solid rgba(255,255,255,0.06)",
          padding: "100px 0",
        }}
      >
        <div
          className="container"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "40px",
          }}
        >
          <div>
            <p
              className="mono"
              style={{ color: "var(--muted)", marginBottom: "16px" }}
            >
              Specify a system
            </p>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(36px, 4vw, 64px)",
                color: "var(--white)",
                lineHeight: 0.95,
                letterSpacing: "0.01em",
              }}
            >
              NOT SURE WHICH SYSTEM
              <br />
              <span style={{ color: "var(--yellow)" }}>IS RIGHT? LET&apos;S TALK.</span>
            </h2>
          </div>
          <Link
            href="/contact"
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "11px",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              background: "var(--yellow)",
              color: "var(--black)",
              padding: "20px 40px",
              textDecoration: "none",
              display: "inline-block",
              flexShrink: 0,
              fontWeight: 700,
            }}
          >
            Start a Conversation →
          </Link>
        </div>
      </section>
    </>
  );
}

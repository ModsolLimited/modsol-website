"use client";
import Link from "next/link";
import ModlabProcess from "./ModlabProcess";

const services = [
  {
    title: "MODULAR CAR PARKS",
    body: "Engineered modular parking structures designed for temporary or permanent deployment. Scalable, demountable and built to specification.",
  },
  {
    title: "CONTAINER CONVERSIONS",
    body: "Standard shipping containers transformed into premium functional environments — retail units, hospitality spaces, site offices and brand activations.",
  },
  {
    title: "BESPOKE STRUCTURES",
    body: "Architecturally designed one-off structures engineered to exact client specification. No standard system. No compromise.",
  },
  {
    title: "CUSTOM FABRICATION",
    body: "Purpose-built components, frameworks and architectural elements fabricated to precise tolerances — where off-the-shelf simply won't do.",
  },
  {
    title: "DESIGN & ENGINEERING",
    body: "Full design and engineering service from concept through to completed structure. CAD, structural calculation, material specification and project delivery.",
  },
  {
    title: "BRAND INSTALLATIONS",
    body: "Large-scale bespoke brand environments and experiential installations. Designed to stop people in their tracks and built to perform.",
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

export default function ModlabPage() {
  return (
    <>
      <style>{`
        .modlab-panel {
          position: relative;
          overflow: hidden;
          cursor: pointer;
        }
        .modlab-panel img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.4s ease, filter 0.4s ease;
          filter: brightness(0.75);
        }
        .modlab-panel:hover img {
          transform: scale(1.04);
          filter: brightness(1) sepia(0.3) saturate(2) hue-rotate(30deg);
        }
        .modlab-panel::after {
          content: '';
          position: absolute;
          inset: 0;
          border: 2px solid transparent;
          transition: border-color 0.4s ease, box-shadow 0.4s ease;
          pointer-events: none;
        }
        .modlab-panel:hover::after {
          border-color: #C6FF02;
          box-shadow: inset 0 0 30px rgba(198, 255, 2, 0.15);
        }
        .modlab-panel .label {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          padding: 16px;
          background: linear-gradient(transparent, rgba(0,0,0,0.85));
          transition: background 0.4s ease;
        }
        .modlab-panel:hover .label {
          background: linear-gradient(transparent, rgba(198, 255, 2, 0.25), rgba(0,0,0,0.9));
        }
        .modlab-panel .label p {
          font-family: var(--font-mono);
          font-size: 11px;
          color: #ffffff;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          margin: 0;
          transition: color 0.4s ease;
        }
        .modlab-panel:hover .label p {
          color: #C6FF02;
        }
      `}</style>
      {/* Hero */}
      <section className="page-hero" style={{ overflow: "hidden", padding: "70px 0 40px" }}>
        <div className="container modlab-hero-container" style={{ position: "relative", zIndex: 1, display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0", alignItems: "center", minHeight: "260px" }}>
          {/* Left — text */}
          <div>
            <p className="section-label">THE PRODUCTS</p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '32px', marginBottom: "24px" }}>
              <h1
                className="section-title"
                style={{ maxWidth: "800px", marginBottom: 0 }}
              >
                THE MODLAB
              </h1>
              <svg viewBox="0 0 680 240" xmlns="http://www.w3.org/2000/svg" style={{ height: '8em', width: 'auto', display: 'block', flexShrink: 0 }}>
                <defs>
                  <clipPath id="ml_tc"><path d="M 186,70 L 186,172 Q 186,195 210,195 Q 234,195 234,172 L 234,70 Z"/></clipPath>
                  <clipPath id="ml_rc"><path d="M 348,38 L 392,38 L 392,54 L 384,54 L 384,100 Q 424,108 424,148 A 54,54 0 1,1 316,148 Q 316,108 356,100 L 356,54 L 348,54 Z"/></clipPath>
                  <clipPath id="ml_cc"><path d="M 502,100 L 538,100 Q 549,110 566,184 Q 568,192 558,192 L 482,192 Q 472,192 474,184 Q 491,110 502,100 Z"/></clipPath>
                </defs>
                <path d="M 182,38 Q 182,34 210,34 Q 238,34 238,38 L 238,54 L 234,54 L 234,172 Q 234,195 210,195 Q 186,195 186,172 L 186,54 L 182,54 Z" fill="none" stroke="#ffffff" strokeWidth="3.5"/>
                <rect x="182" y="152" width="56" height="50" fill="#C6FF02" clipPath="url(#ml_tc)"/>
                <line x1="224" y1="100" x2="234" y2="100" stroke="#ffffff" strokeWidth="2"/>
                <line x1="226" y1="118" x2="234" y2="118" stroke="#ffffff" strokeWidth="2"/>
                <line x1="224" y1="136" x2="234" y2="136" stroke="#ffffff" strokeWidth="2"/>
                <path d="M 349,54 L 349,38 Q 349,33 370,33 Q 391,33 391,38 L 391,54 L 384,54 L 384,97" fill="none" stroke="#ffffff" strokeWidth="3.5"/>
                <path d="M 356,97 L 356,54 L 349,54" fill="none" stroke="#ffffff" strokeWidth="3.5"/>
                <path d="M 356,96 A 54,54 0 1,0 384,96" fill="none" stroke="#ffffff" strokeWidth="3.5"/>
                <rect x="357" y="38" width="26" height="60" fill="none"/>
                <path d="M 349,54 L 349,38 Q 349,33 370,33 Q 391,33 391,38 L 391,54 L 384,54 L 384,97" fill="none" stroke="#ffffff" strokeWidth="3.5"/>
                <path d="M 356,97 L 356,54 L 349,54" fill="none" stroke="#ffffff" strokeWidth="3.5"/>
                <rect x="316" y="136" width="108" height="70" fill="#C6FF02" clipPath="url(#ml_rc)"/>
                <path d="M 494,38 Q 494,33 520,33 Q 546,33 546,38 L 546,54 L 538,54 L 538,100 Q 554,112 568,182 Q 570,192 560,192 L 480,192 Q 470,192 472,182 Q 486,112 502,100 L 502,54 L 494,54 Z" fill="none" stroke="#ffffff" strokeWidth="3.5"/>
                <rect x="505" y="54" width="30" height="50" fill="none"/>
                <path d="M 476,158 L 564,158 L 568,182 Q 570,192 560,192 L 480,192 Q 470,192 472,182 Z" fill="#C6FF02" clipPath="url(#ml_cc)"/>
                <line x1="502" y1="54" x2="502" y2="100" stroke="#ffffff" strokeWidth="3.5"/>
                <line x1="538" y1="54" x2="538" y2="100" stroke="#ffffff" strokeWidth="3.5"/>
                <line x1="502" y1="132" x2="514" y2="132" stroke="#ffffff" strokeWidth="2"/>
                <line x1="500" y1="148" x2="511" y2="148" stroke="#ffffff" strokeWidth="2"/>
              </svg>
            </div>
            <p className="section-body" style={{ marginTop: "16px", maxWidth: "440px" }}>
              When the standard platform isn&apos;t enough — The Modlab is where imagination meets engineering.
            </p>
          </div>

          {/* Right — Modlab hero animation */}
          {(() => {
            const largePath = gearPath(170, 190, 16, 110, 88, 6.9, 6.5);
            const medPath   = gearPath(331, 114, 10,  68, 54, 6.8, 6.4);
            const smPath    = gearPath(310, 255,  8,  52, 41, 6.4, 6.1);
            const D = Math.PI / 180;
            return (
              <div style={{
                position: "relative", height: "340px", pointerEvents: "none",
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                <svg viewBox="0 0 520 340" width="100%" style={{ maxWidth: "580px" }} fill="none" xmlns="http://www.w3.org/2000/svg">

                  {/* Soft glows */}
                  <circle cx="170" cy="190" r="90" fill="#C6FF02" opacity="0.03" />
                  <circle cx="331" cy="114" r="60" fill="#C6FF02" opacity="0.03" />
                  <circle cx="310" cy="255" r="48" fill="#C6FF02" opacity="0.03" />

                  {/* Large cog — 16 teeth, CW 18s */}
                  <g>
                    <animateTransform attributeName="transform" type="rotate"
                      from="0 170 190" to="360 170 190" dur="18s" repeatCount="indefinite" />
                    <path d={largePath} stroke="#C6FF02" strokeWidth="1.5" />
                    <circle cx="170" cy="190" r="70" stroke="#C6FF02" strokeWidth="0.75" opacity="0.45" />
                    <circle cx="170" cy="190" r="50" stroke="#C6FF02" strokeWidth="0.5"  opacity="0.3"  />
                    {[0,60,120,180,240,300].map(a => (
                      <line key={a}
                        x1="170" y1="190"
                        x2={+(170 + 65 * Math.cos(a * D)).toFixed(2)}
                        y2={+(190 + 65 * Math.sin(a * D)).toFixed(2)}
                        stroke="#C6FF02" strokeWidth="0.75" opacity="0.4" />
                    ))}
                    {[30,90,150,210,270,330].map(a => (
                      <circle key={a}
                        cx={+(170 + 65 * Math.cos(a * D)).toFixed(2)}
                        cy={+(190 + 65 * Math.sin(a * D)).toFixed(2)}
                        r="4" stroke="#C6FF02" strokeWidth="0.75" opacity="0.5" />
                    ))}
                    <circle cx="170" cy="190" r="16" stroke="#C6FF02" strokeWidth="1" />
                    <circle cx="170" cy="190" r="4"  fill="#C6FF02" />
                  </g>

                  {/* Medium cog — 10 teeth, CCW 11.25s */}
                  <g>
                    <animateTransform attributeName="transform" type="rotate"
                      from="0 331 114" to="-360 331 114" dur="11.25s" repeatCount="indefinite" />
                    <path d={medPath} stroke="#C6FF02" strokeWidth="1.25" />
                    <circle cx="331" cy="114" r="42" stroke="#C6FF02" strokeWidth="0.75" opacity="0.45" />
                    <circle cx="331" cy="114" r="28" stroke="#C6FF02" strokeWidth="0.5"  opacity="0.3"  />
                    {[0,72,144,216,288].map(a => (
                      <line key={a}
                        x1="331" y1="114"
                        x2={+(331 + 38 * Math.cos(a * D)).toFixed(2)}
                        y2={+(114 + 38 * Math.sin(a * D)).toFixed(2)}
                        stroke="#C6FF02" strokeWidth="0.75" opacity="0.4" />
                    ))}
                    {[36,108,180,252,324].map(a => (
                      <circle key={a}
                        cx={+(331 + 38 * Math.cos(a * D)).toFixed(2)}
                        cy={+(114 + 38 * Math.sin(a * D)).toFixed(2)}
                        r="3" stroke="#C6FF02" strokeWidth="0.75" opacity="0.5" />
                    ))}
                    <circle cx="331" cy="114" r="10" stroke="#C6FF02" strokeWidth="1" />
                    <circle cx="331" cy="114" r="3"  fill="#C6FF02" />
                  </g>

                  {/* Small cog — 8 teeth, CCW 9s */}
                  <g>
                    <animateTransform attributeName="transform" type="rotate"
                      from="0 310 255" to="-360 310 255" dur="9s" repeatCount="indefinite" />
                    <path d={smPath} stroke="#C6FF02" strokeWidth="1.25" />
                    <circle cx="310" cy="255" r="30" stroke="#C6FF02" strokeWidth="0.75" opacity="0.45" />
                    {[0,90,180,270].map(a => (
                      <line key={a}
                        x1="310" y1="255"
                        x2={+(310 + 28 * Math.cos(a * D)).toFixed(2)}
                        y2={+(255 + 28 * Math.sin(a * D)).toFixed(2)}
                        stroke="#C6FF02" strokeWidth="0.75" opacity="0.4" />
                    ))}
                    {[45,135,225,315].map(a => (
                      <circle key={a}
                        cx={+(310 + 28 * Math.cos(a * D)).toFixed(2)}
                        cy={+(255 + 28 * Math.sin(a * D)).toFixed(2)}
                        r="2.5" stroke="#C6FF02" strokeWidth="0.75" opacity="0.5" />
                    ))}
                    <circle cx="310" cy="255" r="8"   stroke="#C6FF02" strokeWidth="1" />
                    <circle cx="310" cy="255" r="2.5" fill="#C6FF02" />
                  </g>

                </svg>
              </div>
            );
          })()}
        </div>
      </section>

      {/* Tagline bar */}
      <div style={{ background: "var(--yellow)", padding: "16px 0" }}>
        <div className="container">
          <p style={{ fontFamily: "var(--font-display)", fontSize: "clamp(20px, 3vw, 32px)", color: "var(--black)", letterSpacing: "0.08em", margin: 0 }}>
            BUILD BOLD. BUILD BESPOKE.
          </p>
        </div>
      </div>

      {/* Introduction */}
      <section className="modlab-intro-section section-pad" style={{ background: "var(--black)" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "start" }}>
            <div className="reveal">
              <p className="section-label">About The Modlab</p>
              <h2 className="section-title" style={{ marginBottom: "24px" }}>
                CUSTOM FABRICATION.<br />
                <span style={{ color: "var(--yellow)" }}>BESPOKE ENGINEERING.</span>
              </h2>
            </div>
            <div className="reveal" style={{ paddingTop: "8px" }}>
              <p style={{ fontSize: "15px", color: "var(--muted)", lineHeight: "1.9" }}>
                The Modlab is Modsol&apos;s bespoke design and fabrication division. For projects that demand something beyond the standard platform — we engineer it from scratch. From modular car parks to container conversions, from architecturally designed structures to one-off brand installations — The Modlab exists to turn ambition into reality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bespoke Services */}
      <section className="section-pad" style={{ background: "var(--dark)", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <div className="container">
          <p className="section-label">What We Build</p>
          <h2 className="section-title reveal" style={{ marginBottom: "48px" }}>
            BESPOKE <span style={{ color: "var(--yellow)" }}>SERVICES</span>
          </h2>
          <div className="modlab-services-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1px", background: "rgba(255,255,255,0.06)" }}>
            {services.map((s) => (
              <div
                key={s.title}
                className="modlab-service-card"
                style={{
                  background: "#111111",
                  border: "1px solid rgba(255,255,255,0.08)",
                  padding: "36px",
                }}
              >
                <h3 style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "22px",
                  color: "var(--white)",
                  letterSpacing: "0.05em",
                  marginBottom: "16px",
                  lineHeight: 1.1,
                  transition: "color 0.25s ease, text-shadow 0.25s ease",
                }}>
                  {s.title}
                </h3>
                <p style={{ fontSize: "13px", color: "var(--muted)", lineHeight: "1.8" }}>{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Showcase */}
      <div className="modlab-image-showcase" style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", height: "500px", width: "100%" }}>
        {[
          { src: "/Modlab/Canopies.jpg",       label: "STRUCTURAL CANOPIES & EXTENSIONS" },
          { src: "/Modlab/Car Parks.jpg",       label: "MODULAR CAR PARKS" },
          { src: "/Modlab/Custom.jpg",          label: "CUSTOM FABRICATION" },
          { src: "/Modlab/Stadiums.jpg",        label: "STADIUMS & STADIA" },
          { src: "/Modlab/Steel Structure.jpg", label: "STEEL STRUCTURES" },
        ].map((panel) => (
          <div key={panel.src} className="modlab-panel">
            <img src={panel.src} alt={panel.label} />
            <div className="label">
              <p>{panel.label}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Process */}
      <section className="section-pad" style={{ background: "var(--black)", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <div className="container">
          <p className="section-label">How It Works</p>
          <h2 className="section-title reveal" style={{ marginBottom: "64px" }}>
            THE MODLAB <span style={{ color: "var(--yellow)" }}>PROCESS</span>
          </h2>
          <ModlabProcess />
        </div>
      </section>

      {/* CTA */}
      <section className="section-pad" style={{ background: "var(--dark2)", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <p className="section-label" style={{ justifyContent: "center" }}>Start a conversation</p>
          <h2 className="section-title reveal" style={{ marginBottom: "24px" }}>
            HAVE A PROJECT<br />
            <span style={{ color: "var(--yellow)" }}>IN MIND?</span>
          </h2>
          <p style={{ fontSize: "15px", color: "var(--muted)", lineHeight: "1.9", maxWidth: "560px", margin: "0 auto 40px" }}>
            The Modlab exists for the briefs others won&apos;t take on. Tell us what you&apos;re building.
          </p>
          <Link href="/contact" className="btn-primary">GET IN TOUCH</Link>
        </div>
      </section>

    </>
  );
}

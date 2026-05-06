"use client";

import { useState } from "react";

const systems = [
  { id: "modblock", label: "THE MODBLOCK", num: "01" },
  { id: "modwall",  label: "THE MODWALL",  num: "02" },
  { id: "modframe", label: "THE MODFRAME", num: "03" },
] as const;

type SystemId = typeof systems[number]["id"];

const features: Record<SystemId, { title: string; desc: string }[]> = {
  modblock: [
    { title: "Flat Packable",          desc: "Fully demountable and flat-packable for efficient transport and storage between deployments." },
    { title: "Rapid Installation",     desc: "Engineered for fast assembly. A full Modblock structure can be installed in hours by a small team." },
    { title: "Stackable System",       desc: "Units stack vertically to create multi-level structures — expanding what's architecturally possible." },
    { title: "Modular Scalability",    desc: "Start with a single unit. Scale to a full building. The Modblock grows with your brief." },
    { title: "Interchangeable Panels", desc: "Wall panels are fully interchangeable — solid, glazed, branded or perforated — configured to exact specification." },
    { title: "Branded Environments",   desc: "Designed to carry full brand environments — external cladding, graphic wraps, signage integration and illuminated panels." },
    { title: "Customisable Panels",    desc: "Every Modblock can be configured with solid panels, full glazing, branded graphic panels or any combination." },
    { title: "Redeployable",           desc: "Every component is built for repeated use. The same system, redeployed across hundreds of projects." },
  ],
  modwall: [
    { title: "Tool-Free Assembly",       desc: "Panels clip together without tools. A full room can be built by two people in under an hour." },
    { title: "Interchangeable Finishes", desc: "Switch surface finishes between deployments. Same chassis, different look every time." },
    { title: "Integrated Door Options",  desc: "Hinged, sliding and bi-fold door configurations built into the panel system — no frame required." },
    { title: "Acoustic Performance",     desc: "Honeycomb aluminium core delivers meaningful sound reduction for private environments." },
    { title: "Retail Ready",             desc: "Slatwall and pegboard panel options for immediate merchandise display integration." },
    { title: "Freestanding",             desc: "No fixing to existing structure required. The Modwall stands independently on any level floor surface." },
    { title: "Fully Demountable",        desc: "Every panel packs flat. The same wall system that installs in an hour strikes in thirty minutes." },
    { title: "Any Surface Finish",       desc: "Raw paint, vinyl wrap, printed graphic, LED integration or fabric — any finish is possible." },
  ],
  modframe: [
    { title: "6M Clear Span",           desc: "The primary frame achieves 6 metres of uninterrupted span without intermediate support." },
    { title: "Fabric Ready",            desc: "Integrated keder rail accepts any fabric specification — PVC, mesh, printed or blockout." },
    { title: "Rapid Build",             desc: "Primary frame components connect without specialist tools. Structure is up in hours." },
    { title: "Any Configuration",       desc: "Straight runs, L-shapes, curves and bespoke geometry are all achievable within the same system." },
    { title: "Branded Fascia",          desc: "Large-format graphic panels clip directly to the primary frame for instant brand presence at scale." },
    { title: "Weatherproof",            desc: "Engineered for outdoor use in all UK weather conditions. No compromises on structural integrity." },
    { title: "Modular Extension",       desc: "Add bays, extend runs and reconfigure layouts between deployments with the same components." },
    { title: "Standalone or Integrated",desc: "Works as a freestanding canopy or integrates directly with Modblock and Modwall systems." },
  ],
};

export default function KeyFeatures() {
  const [active, setActive] = useState<SystemId>("modblock");

  return (
    <>
      <style>{`
        .kf-section {
          padding: clamp(80px, 10vh, 120px) 0;
          border-top: 1px solid rgba(255,255,255,0.06);
        }
        .kf-inner {
          width: 100%;
          padding: 0 40px;
          box-sizing: border-box;
        }
        .kf-label {
          font-family: var(--font-mono);
          font-size: 11px;
          letter-spacing: 0.25em;
          color: #C6FF02;
          text-transform: uppercase;
          margin-bottom: 24px;
        }
        .kf-tabs {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          background: #0D0D0D;
          border: 1px solid rgba(198,255,2,0.25);
          margin: 0 0 1px;
        }
        .kf-tab {
          padding: 18px 16px;
          font-family: var(--font-mono);
          font-size: 12px;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          text-align: center;
          cursor: pointer;
          border: none;
          background: transparent;
          color: rgba(255,255,255,0.5);
          transition: color 0.15s ease, background 0.15s ease;
          border-bottom: 3px solid transparent;
        }
        .kf-tab:hover {
          color: rgba(255,255,255,0.8);
        }
        .kf-tab.active {
          color: #C6FF02;
          background: rgba(198,255,2,0.08);
          border-bottom: 3px solid #C6FF02;
        }
        .kf-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1px;
          background: rgba(198,255,2,0.08);
          margin: 0;
        }
        .kf-cell {
          background: #0A0A0A;
          padding: 28px 24px;
          border: 1px solid rgba(255,255,255,0.04);
          transition: background 0.25s ease, border-color 0.25s ease;
        }
        .kf-cell:hover {
          background: rgba(198,255,2,0.04);
          border-color: rgba(198,255,2,0.15);
        }
        .kf-title {
          font-family: var(--font-display);
          font-size: 22px;
          color: #fff;
          letter-spacing: 0.03em;
          line-height: 1.1;
        }
        .kf-desc {
          font-family: var(--font-body);
          font-size: 13px;
          font-weight: 300;
          color: rgba(255,255,255,0.55);
          line-height: 1.65;
          margin-top: 8px;
        }
        @media (max-width: 768px) {
          .kf-grid { grid-template-columns: repeat(2, 1fr); }
          .kf-tab { font-size: 10px; letter-spacing: 0.14em; padding: 14px 8px; }
        }
        @media (max-width: 480px) {
          .kf-grid { grid-template-columns: 1fr; }
          .kf-tabs { grid-template-columns: 1fr; }
        }
      `}</style>

      <section className="kf-section">
        <div className="kf-inner">
        <div className="kf-label">— KEY FEATURES BY SYSTEM —</div>

        <div className="kf-tabs">
          {systems.map((sys) => (
            <button
              key={sys.id}
              className={`kf-tab${active === sys.id ? " active" : ""}`}
              onClick={() => setActive(sys.id)}
            >
              {sys.num} {sys.label}
            </button>
          ))}
        </div>

        <div className="kf-grid">
          {features[active].map((f) => (
            <div key={f.title} className="kf-cell">
              <div className="kf-title">{f.title}</div>
              <div className="kf-desc">{f.desc}</div>
            </div>
          ))}
        </div>
        </div>
      </section>
    </>
  );
}

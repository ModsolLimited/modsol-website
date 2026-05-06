"use client";

import Link from "next/link";
import { useState } from "react";

const milestones = [
  {
    year: "2018",
    title: "THE FOUNDATION",
    body: "Steven Hill joins Mahood Marquees Limited as Project Manager. A pivotal appointment that would, in time, bring together the expertise, relationships and ambition needed to build something entirely new.",
  },
  {
    year: "2020",
    title: "THE VISION FORMS",
    body: "Commercial success across corporate hospitality and major sporting environments reveals a clear gap in the market. Steve, Rich and Kieran recognise the demand for a single, trusted point of contact — one business capable of delivering across the full project lifecycle.",
  },
  {
    year: "2022",
    title: "MODSOL IS BORN",
    body: "Modsol Limited is founded. Initially operating as a specialist intermediary and site management business, the company is built on a foundation of industry relationships, operational excellence and an uncompromising approach to delivery.",
  },
  {
    year: "2023",
    title: "THE PIVOT TO PRODUCT",
    body: "The team identifies a critical gap in the market — premium modular architecture that delivers architectural quality without the costs and constraints of permanent construction. Modblock design commences. The engineering journey begins.",
  },
  {
    year: "2024",
    title: "FIRST PRODUCT. FIRST LANDMARK.",
    body: "The Modframe is designed, manufactured and brought to market — developed in close collaboration with trusted industry partners. In March 2024, the system is deployed for its first major client: Aston Martin. A statement of intent delivered at race pace.",
  },
  {
    year: "2025",
    title: "THE PLATFORM EXPANDS",
    body: "Demand grows for a precision modular walling system capable of performing inside temporary structures and marquee environments. The Modwall is designed, engineered and introduced to the market. Its debut installation? Coldplay. The platform is growing.",
  },
  {
    year: "2026",
    title: "THE FLAGSHIP ARRIVES",
    body: "The Modblock — Modsol's most ambitious product — is officially announced. After years of engineering development, the system is ready. Multiple contracts already agreed. Deployment commences across the UK, Europe and internationally. The platform is complete.",
  },
];

export default function HistoryPage() {
  const [selected, setSelected] = useState(0);
  const [hovered, setHovered] = useState<number | null>(null);

  const isLineGlowing = (lineIndex: number) => {
    if (lineIndex < selected) return true;
    if (hovered !== null) {
      const lo = Math.min(hovered, selected);
      const hi = Math.max(hovered, selected);
      if (lineIndex >= lo && lineIndex < hi) return true;
    }
    return false;
  };

  const current = milestones[selected];

  return (
    <>
      {/* Hero */}
      <section className="page-hero">
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <p className="section-label">The Company</p>
          <h1 className="section-title" style={{ marginBottom: "24px", maxWidth: "800px" }}>
            THE HISTORY
          </h1>
          <p className="section-body" style={{ marginTop: "16px" }}>
            From a single project manager to a globally deployable modular platform. This is how Modsol was built.
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section style={{ background: "#000", padding: "80px 0" }}>
        <div className="container">

          {/* Block row */}
          <div className="tl-row">
            {milestones.map((m, i) => {
              const isSelected = i === selected;
              const isHovered = i === hovered;

              return (
                <div key={m.year} className="tl-block-wrap">
                  {/* Connector line before this block (except first) */}
                  {i > 0 && (
                    <div
                      className="tl-line"
                      style={{
                        background: isLineGlowing(i - 1)
                          ? "#C6FF02"
                          : "rgba(255,255,255,0.1)",
                        boxShadow: isLineGlowing(i - 1)
                          ? "0 0 8px rgba(198,255,2,0.4)"
                          : "none",
                      }}
                    />
                  )}

                  {/* Block */}
                  <button
                    className={`tl-block${isSelected ? " tl-block-selected" : ""}${isHovered && !isSelected ? " tl-block-hovered" : ""}`}
                    onClick={() => setSelected(i)}
                    onMouseEnter={() => setHovered(i)}
                    onMouseLeave={() => setHovered(null)}
                    aria-pressed={isSelected}
                  >
                    <span className="tl-year">{m.year}</span>
                  </button>
                </div>
              );
            })}
          </div>

          {/* Content panel */}
          <div className="tl-panel" key={selected}>
            <div className="tl-panel-inner">
              <div className="tl-panel-year">{current.year}</div>
              <div className="tl-panel-content">
                <h2 className="tl-panel-title">{current.title}</h2>
                <div className="tl-panel-accent" />
                <p className="tl-panel-body">{current.body}</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Closing */}
      <section
        style={{
          background: "#000",
          borderTop: "1px solid rgba(255,255,255,0.06)",
          padding: "100px 0",
          textAlign: "center",
        }}
      >
        <div className="container">
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(48px, 8vw, 96px)",
              color: "#fff",
              lineHeight: 1,
              marginBottom: "24px",
            }}
          >
            THE STORY ISN&apos;T OVER.
          </h2>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "16px",
              color: "#888",
              maxWidth: "520px",
              margin: "0 auto 40px",
              lineHeight: "1.8",
            }}
          >
            Every year brings a new system, a new client, a new milestone. Modsol is built to keep building.
          </p>
          <Link href="/contact" className="btn-primary">
            Get In Touch
          </Link>
        </div>
      </section>
    </>
  );
}

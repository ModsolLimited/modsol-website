"use client";
import { useState } from "react";

export default function PlatformSection() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section className="platform-section section-pad" id="company" style={{ paddingTop: "clamp(40px, 5vh, 60px)" }}>
      <div className="container">
        <div className="platform-intro" style={{ marginBottom: 0, alignItems: "center" }}>
          <div style={{ alignSelf: "center" }}>
            <p className="section-label">THE PLATFORM</p>
            <h2 className="section-title reveal">Three Systems.<br />One Platform.</h2>
            <p className="section-body reveal" style={{ marginTop: "40px" }}>
              Three precision-engineered modular systems. One unified platform. Modsol delivers the infrastructure behind the world's most ambitious temporary environments — from flagship event structures to international brand activations.
            </p>
          </div>
          <div style={{ alignSelf: "center" }}>
            <div className="stats-row reveal platform-grid" style={{
              marginTop: "40px",
              border: "1px solid rgba(255,255,255,0.2)",
              background: "rgba(255,255,255,0.2)",
            }}>
              {[
                { num: "3",   label: "Core Systems"   },
                { num: "12+", label: "Industries"      },
                { num: "∞",   label: "Configurations" },
              ].map((s) => {
                const isHovered = hovered === s.label;
                const isInfinity = s.label === "Configurations";
                return (
                  <div
                    className="stat-item platform-stat"
                    key={s.label}
                    onMouseEnter={() => setHovered(s.label)}
                    onMouseLeave={() => setHovered(null)}
                    style={{
                      height: "280px",
                      padding: "48px",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "space-between",
                      textAlign: "center",
                      backgroundImage: "linear-gradient(rgba(198,255,2,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(198,255,2,0.03) 1px, transparent 1px)",
                      backgroundSize: "30px 30px",
                      backgroundColor: isHovered ? "rgba(198,255,2,0.03)" : undefined,
                      transition: "all 0.3s ease",
                    }}
                  >
                    <div className="stat-num stat-number-wrapper" style={{
                      fontSize: "clamp(80px, 10vw, 140px)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      height: "clamp(80px, 12vw, 180px)",
                      lineHeight: 1,
                      textShadow: isHovered ? "0 0 30px rgba(198,255,2,0.8), 0 0 60px rgba(198,255,2,0.4)" : "none",
                      transition: "all 0.3s ease",
                    }}>
                      {isInfinity ? (
                        <svg viewBox="0 0 120 48" xmlns="http://www.w3.org/2000/svg" style={{
                          display: 'block', width: 'clamp(80px, 10vw, 140px)', height: 'auto', filter: isHovered ? 'drop-shadow(0 0 15px rgba(198,255,2,0.8))' : 'none', transition: 'filter 0.3s ease'
                        }}>
                          <path d="M60,24 C60,17 70,7 83,7 C96,7 106,14 106,24 C106,34 96,41 83,41 C70,41 60,31 60,24 C60,17 50,7 37,7 C24,7 14,14 14,24 C14,34 24,41 37,41 C50,41 60,31 60,24 Z" fill="none" stroke="#C6FF02" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      ) : s.num}
                    </div>
                    <div className="stat-label" style={{
                      fontSize: "13px",
                      textAlign: "center",
                      marginTop: "16px",
                      color: isHovered ? "#C6FF02" : undefined,
                      transition: "all 0.3s ease",
                    }}>{s.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 768px) {
          .platform-grid {
            grid-template-columns: 1fr;
            width: 100%;
            overflow: hidden;
          }
          .platform-stat {
            width: 100%;
            box-sizing: border-box;
          }
        }
      `}</style>
    </section>
  );
}

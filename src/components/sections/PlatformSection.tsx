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
            <div className="stats-row reveal" style={{
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
                return (
                  <div
                    className="stat-item"
                    key={s.label}
                    onMouseEnter={() => setHovered(s.label)}
                    onMouseLeave={() => setHovered(null)}
                    style={{
                      height: "280px",
                      padding: "48px",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      textAlign: "center",
                      backgroundImage: "linear-gradient(rgba(198,255,2,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(198,255,2,0.03) 1px, transparent 1px)",
                      backgroundSize: "30px 30px",
                      backgroundColor: isHovered ? "rgba(198,255,2,0.03)" : undefined,
                      transition: "all 0.3s ease",
                    }}
                  >
                    <div className="stat-num" style={{
                      fontSize: "clamp(80px, 10vw, 140px)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      lineHeight: 1,
                      textShadow: isHovered ? "0 0 30px rgba(198,255,2,0.8), 0 0 60px rgba(198,255,2,0.4)" : "none",
                      transition: "all 0.3s ease",
                    }}>{s.num}</div>
                    <div className="stat-label" style={{
                      fontSize: "13px",
                      textAlign: "center",
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
    </section>
  );
}

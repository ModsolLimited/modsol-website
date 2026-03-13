"use client";
import Link from "next/link";

export default function BrandStatement() {
  return (
    <section className="brand-statement">
      <div style={{ padding: "0 40px" }}>
        <div className="statement-words">
          {/* Row 1 */}
          <div className="statement-row">
            <span className="big-word filled">BUILD.</span>
            <div className="dot-separator" />
            <span className="big-word">SUSTAINABLE.</span>
            <div className="dot-separator" />
            <span className="big-word">MODULAR.</span>
          </div>
          {/* Row 2 */}
          <div className="statement-row" style={{ marginTop: "-10px" }}>
            <span className="big-word">SCALABLE.</span>
            <div className="dot-separator" />
            <span className="big-word yellow-fill">DIFFERENT.</span>
            <div className="dot-separator" />
            <span className="big-word">BOLD.</span>
          </div>
          {/* Row 3 */}
          <div className="statement-row" style={{ marginTop: "-10px" }}>
            <span className="big-word">ADAPTABLE.</span>
            <div className="dot-separator" />
            <span className="big-word">IMAGINATION.</span>
            <div className="dot-separator" />
            <span className="big-word filled">PRECISE.</span>
          </div>
        </div>

        <div style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          marginTop: "64px",
          paddingTop: "48px",
          borderTop: "1px solid rgba(255,255,255,0.06)",
        }}>
          <div>
            <p style={{
              fontFamily: "var(--font-mono)",
              fontSize: "10px",
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              color: "var(--yellow)",
              marginBottom: "16px",
            }}>
              Modsol Limited — Modular Systems
            </p>
            <p style={{ fontSize: "15px", color: "var(--muted)", maxWidth: "480px", lineHeight: "1.7" }}>
              Temporary environments should achieve the ambition of permanent architecture. That belief is engineered into every Modsol system, every component, every deployment.
            </p>
          </div>
          <Link href="/contact" className="btn-primary">Start a Project</Link>
        </div>
      </div>
    </section>
  );
}

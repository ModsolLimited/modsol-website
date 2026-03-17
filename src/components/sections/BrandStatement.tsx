"use client";
import Link from "next/link";

export default function BrandStatement() {
  return (
    <section className="brand-statement">
      <div className="statement-words">
        {/* Row 1 — left aligned: yellow BUILD. + outline MODULAR. */}
        <div className="statement-row statement-left">
          <span className="big-word big-yellow">BUILD.</span>
          <div className="dot-sep" />
          <span className="big-word big-outline">MODULAR.</span>
        </div>
        {/* Row 2 — right aligned: outline SCALABLE. + outline ADAPTABLE. */}
        <div className="statement-row statement-right">
          <span className="big-word big-outline">SCALABLE.</span>
          <div className="dot-sep" />
          <span className="big-word big-outline">ADAPTABLE.</span>
        </div>
        {/* Row 3 — left aligned: outline PRECISE. + yellow BOLD. */}
        <div className="statement-row statement-left">
          <span className="big-word big-outline">PRECISE.</span>
          <div className="dot-sep" />
          <span className="big-word big-yellow">BOLD.</span>
        </div>
      </div>

      <div style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-end",
        marginTop: "64px",
        padding: "48px 40px 0",
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
    </section>
  );
}

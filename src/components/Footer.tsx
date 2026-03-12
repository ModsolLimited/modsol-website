import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{ background: "#111111", borderTop: "1px solid rgba(255,255,255,0.06)", padding: "80px 0 40px" }}>
      <div style={{ maxWidth: "1440px", margin: "0 auto", padding: "0 40px" }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "2fr 1fr 1fr 1fr",
          gap: "60px",
          marginBottom: "60px",
          paddingBottom: "60px",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
        }}
          className="footer-grid"
        >
          {/* Brand */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "8px" }}>
              <div style={{ width: "28px", height: "28px", background: "#C6FF02", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <span style={{ fontFamily: "var(--font-display)", fontSize: "16px", color: "#000" }}>M</span>
              </div>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "28px", letterSpacing: "0.1em", color: "#fff" }}>MODSOL</h2>
            </div>
            <p style={{ fontFamily: "var(--font-mono)", fontSize: "9px", letterSpacing: "0.2em", color: "#C6FF02", marginBottom: "12px", textTransform: "uppercase" }}>
              Build. Bold.
            </p>
            <p style={{ fontSize: "13px", color: "#888", lineHeight: 1.7, maxWidth: "300px", marginBottom: "32px" }}>
              Modular systems engineered for the next generation of temporary architecture. Events. Exhibitions. Hospitality. Retail.
            </p>
            <Link
              href="/contact"
              style={{
                background: "#C6FF02",
                color: "#000",
                padding: "12px 20px",
                fontFamily: "var(--font-mono)",
                fontSize: "9px",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                textDecoration: "none",
                fontWeight: 700,
                display: "inline-block",
              }}
            >
              Get In Touch
            </Link>
          </div>

          {/* Products */}
          <div>
            <h4 style={{ fontFamily: "var(--font-mono)", fontSize: "10px", letterSpacing: "0.25em", textTransform: "uppercase", color: "#C6FF02", marginBottom: "24px" }}>
              Products
            </h4>
            <ul style={{ listStyle: "none" }}>
              {[["The Modblock", "/products/modblock"], ["The Modwall", "/products/modwall"], ["The Modframe", "/products/modframe"]].map(([label, href]) => (
                <li key={href} style={{ marginBottom: "10px" }}>
                  <Link href={href} style={{ fontSize: "13px", color: "#888", textDecoration: "none" }}>{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h4 style={{ fontFamily: "var(--font-mono)", fontSize: "10px", letterSpacing: "0.25em", textTransform: "uppercase", color: "#C6FF02", marginBottom: "24px" }}>
              Solutions
            </h4>
            <ul style={{ listStyle: "none" }}>
              {["Events", "Exhibitions", "Hospitality", "Retail", "Brand Activation", "Temporary Offices"].map((s) => (
                <li key={s} style={{ marginBottom: "10px" }}>
                  <Link href="/solutions" style={{ fontSize: "13px", color: "#888", textDecoration: "none" }}>{s}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 style={{ fontFamily: "var(--font-mono)", fontSize: "10px", letterSpacing: "0.25em", textTransform: "uppercase", color: "#C6FF02", marginBottom: "24px" }}>
              Company
            </h4>
            <ul style={{ listStyle: "none" }}>
              {[["The Company", "/company"], ["The Projects", "/projects"], ["Knowledge Hub", "/knowledge"], ["Contact", "/contact"]].map(([label, href]) => (
                <li key={href} style={{ marginBottom: "10px" }}>
                  <Link href={href} style={{ fontSize: "13px", color: "#888", textDecoration: "none" }}>{label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "20px" }}>
          <div style={{ fontFamily: "var(--font-mono)", fontSize: "10px", letterSpacing: "0.15em", color: "rgba(255,255,255,0.2)" }}>
            © 2025 Modsol Limited. All rights reserved. Registered in England &amp; Wales.
          </div>
          <div style={{ display: "flex", gap: "16px" }}>
            {["Li", "Ig", "X"].map((s) => (
              <a key={s} href="#" style={{
                width: "36px", height: "36px",
                border: "1px solid rgba(255,255,255,0.12)",
                display: "flex", alignItems: "center", justifyContent: "center",
                color: "#888",
                textDecoration: "none",
                fontFamily: "var(--font-mono)",
                fontSize: "10px",
                letterSpacing: "0.15em",
              }}>
                {s}
              </a>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .footer-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 640px) {
          .footer-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
        }
      `}</style>
    </footer>
  );
}

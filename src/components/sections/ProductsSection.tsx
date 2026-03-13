import Link from "next/link";

export default function ProductsSection() {
  return (
    <section className="products-section section-pad" id="products">
      <div className="container">
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: "16px" }}>
          <div>
            <p className="section-label">03 — The Products</p>
            <h2 className="section-title reveal">Three Systems.<br />One Platform.</h2>
          </div>
          <Link href="/products" className="link-arrow reveal" style={{ marginBottom: "12px" }}>View All Products</Link>
        </div>

        <div className="product-grid">
          {/* MODBLOCK */}
          <div className="product-card" id="modblock">
            <div className="product-card-bg">
              <div className="product-card-bg-inner">
                <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 64px)", gridTemplateRows: "repeat(4, 32px)", gap: "2px", opacity: 0.5 }}>
                  <div style={{ background: "rgba(198,255,2,0.5)", gridColumn: "span 2" }} /><div style={{ background: "#2a2a2a" }} />
                  <div style={{ background: "#1a1a1a" }} /><div style={{ background: "rgba(198,255,2,0.2)", gridColumn: "span 2" }} />
                  <div style={{ background: "rgba(198,255,2,0.3)", gridColumn: "span 3" }} />
                  <div style={{ background: "#1a1a1a" }} /><div style={{ background: "#2a2a2a" }} /><div style={{ background: "rgba(198,255,2,0.1)" }} />
                </div>
              </div>
            </div>
            <span className="product-img-label">Photography Placeholder</span>
            <div className="product-card-overlay">
              <div>
                <div className="product-card-tag">Build Modular Architecture</div>
                <h3>THE<br />MODBLOCK</h3>
                <p>For Modular Buildings</p>
                <Link href="/products/modblock" className="btn-primary" style={{ fontSize: "9px", padding: "12px 20px" }}>Explore System</Link>
              </div>
            </div>
          </div>

          {/* MODWALL */}
          <div className="product-card" id="modwall">
            <div className="product-card-bg">
              <div className="product-card-bg-inner">
                <div style={{ display: "flex", flexDirection: "column", gap: "3px", width: "160px", opacity: 0.5 }}>
                  {[
                    "rgba(198,255,2,0.4)", "#1a1a1a", "rgba(198,255,2,0.2)", "#2a2a2a",
                    "rgba(198,255,2,0.6)", "#1a1a1a", "rgba(198,255,2,0.15)", "#222"
                  ].map((bg, i) => (
                    <div key={i} style={{ height: "8px", background: bg, border: "1px solid rgba(255,255,255,0.06)" }} />
                  ))}
                </div>
              </div>
            </div>
            <span className="product-img-label">Photography Placeholder</span>
            <div className="product-card-overlay">
              <div>
                <div className="product-card-tag">Build Bold Interior Environments</div>
                <h3>THE<br />MODWALL</h3>
                <p>For Modular Interiors</p>
                <Link href="/products/modwall" className="btn-primary" style={{ fontSize: "9px", padding: "12px 20px" }}>Explore System</Link>
              </div>
            </div>
          </div>

          {/* MODFRAME */}
          <div className="product-card" id="modframe">
            <div className="product-card-bg">
              <div className="product-card-bg-inner">
                <svg viewBox="0 0 200 200" width="160" height="160" opacity={0.4}>
                  <line x1="20" y1="20" x2="180" y2="20" stroke="#C6FF02" strokeWidth="2"/>
                  <line x1="20" y1="20" x2="20" y2="180" stroke="#C6FF02" strokeWidth="2"/>
                  <line x1="180" y1="20" x2="180" y2="180" stroke="#C6FF02" strokeWidth="2"/>
                  <line x1="20" y1="180" x2="180" y2="180" stroke="#C6FF02" strokeWidth="2"/>
                  <line x1="100" y1="20" x2="100" y2="180" stroke="rgba(198,255,2,0.4)" strokeWidth="1"/>
                  <line x1="20" y1="100" x2="180" y2="100" stroke="rgba(198,255,2,0.4)" strokeWidth="1"/>
                  <rect x="40" y="40" width="50" height="50" fill="rgba(198,255,2,0.12)" stroke="rgba(198,255,2,0.3)" strokeWidth="1"/>
                  <rect x="110" y="110" width="50" height="50" fill="rgba(198,255,2,0.08)" stroke="rgba(198,255,2,0.2)" strokeWidth="1"/>
                  <circle cx="100" cy="100" r="4" fill="#C6FF02"/>
                </svg>
              </div>
            </div>
            <span className="product-img-label">Photography Placeholder</span>
            <div className="product-card-overlay">
              <div>
                <div className="product-card-tag">Build Bold Branded Environments</div>
                <h3>THE<br />MODFRAME</h3>
                <p>For Modular Branding</p>
                <Link href="/products/modframe" className="btn-primary" style={{ fontSize: "9px", padding: "12px 20px" }}>Explore System</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

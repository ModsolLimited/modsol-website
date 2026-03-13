"use client";

export default function NewsletterSignup() {
  return (
    <div style={{ background: "rgba(198,255,2,0.04)", border: "1px solid rgba(198,255,2,0.15)", padding: "32px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
      <div style={{ fontFamily: "var(--font-mono)", fontSize: "9px", color: "var(--yellow)", letterSpacing: "0.3em", textTransform: "uppercase", marginBottom: "20px" }}>Newsletter</div>
      <h3 style={{ fontFamily: "var(--font-display)", fontSize: "28px", color: "var(--white)", marginBottom: "12px", lineHeight: "1.1" }}>Stay Informed.</h3>
      <p style={{ fontSize: "13px", color: "var(--muted)", lineHeight: "1.6", marginBottom: "24px" }}>Monthly insights on temporary architecture, event design, and the Modsol platform. No noise.</p>
      <form onSubmit={(e) => e.preventDefault()} style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
        <input type="email" placeholder="your@email.com" className="form-field" style={{ fontFamily: "var(--font-mono)", fontSize: "12px" }} />
        <button type="submit" className="btn-primary" style={{ textAlign: "center" }}>Subscribe</button>
      </form>
    </div>
  );
}

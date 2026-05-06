"use client";

import ContactForm from "@/components/sections/ContactForm";

export default function ContactClient() {
  return (
    <>
      <style>{`.directions-btn:hover { background: #fff !important; }`}</style>
      <section className="section-pad" style={{ background: "var(--black)" }}>
        <div className="container">
          <div className="contact-inner">
            {/* Left column */}
            <div>
              <p className="section-label">Get in Touch</p>
              <h2 className="section-title reveal" style={{ marginBottom: "40px" }}>LET&apos;S <span style={{ color: "#C6FF02" }}>BUILD</span><br />SOMETHING <span style={{ color: "#C6FF02" }}>BOLD.</span></h2>

              <p style={{ fontSize: "16px", color: "var(--muted)", lineHeight: "1.9", marginBottom: "40px", maxWidth: "360px" }}>
                Whether you have a detailed brief or a rough idea, we&apos;ve been solving modular architecture problems since 2008. If you can imagine it, we can build it.
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: "32px", marginBottom: "48px" }}>
                <div>
                  <div style={{ fontFamily: "var(--font-mono)", fontSize: "12px", color: "var(--muted)", letterSpacing: "0.22em", textTransform: "uppercase", marginBottom: "8px" }}>Email</div>
                  <div style={{ fontFamily: "var(--font-body)", fontSize: "clamp(18px, 2vw, 24px)", fontWeight: 300, color: "var(--white)" }}>sales@modsol.co.uk</div>
                </div>
                <div>
                  <div style={{ fontFamily: "var(--font-mono)", fontSize: "12px", color: "var(--muted)", letterSpacing: "0.22em", textTransform: "uppercase", marginBottom: "8px" }}>Phone</div>
                  <div style={{ fontFamily: "var(--font-body)", fontSize: "clamp(18px, 2vw, 24px)", fontWeight: 300, color: "var(--white)" }}>01744 884 158</div>
                </div>
                <div>
                  <div style={{ fontFamily: "var(--font-mono)", fontSize: "12px", color: "var(--muted)", letterSpacing: "0.22em", textTransform: "uppercase", marginBottom: "8px" }}>Mobile</div>
                  <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                    {[
                      { name: "Steve", number: "07544 481 006" },
                      { name: "Rich", number: "07760 226 264" },
                      { name: "Kieran", number: "07760 226 262" },
                    ].map(({ name, number }) => (
                      <div key={name} style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                        <span style={{ fontFamily: "var(--font-display)", fontSize: "clamp(28px, 3vw, 40px)", color: "#C6FF02", lineHeight: 1 }}>{name}</span>
                        <span style={{ fontSize: "clamp(16px, 2vw, 22px)", color: "var(--white)" }}>{number}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <div style={{ fontFamily: "var(--font-mono)", fontSize: "12px", color: "var(--muted)", letterSpacing: "0.22em", textTransform: "uppercase", marginBottom: "8px" }}>Registered Office</div>
                  <div style={{ fontFamily: "var(--font-body)", fontSize: "clamp(18px, 2vw, 24px)", fontWeight: 300, color: "var(--white)", lineHeight: "1.7" }}>Britannic House, 657 Liverpool Road,<br />Irlam, Manchester,<br />Greater Manchester, England, M44 5XD</div>
                </div>
                <div>
                  <div style={{ fontFamily: "var(--font-mono)", fontSize: "12px", color: "var(--muted)", letterSpacing: "0.22em", textTransform: "uppercase", marginBottom: "8px" }}>Depot</div>
                  <div style={{ fontFamily: "var(--font-body)", fontSize: "clamp(18px, 2vw, 24px)", fontWeight: 300, color: "var(--white)", lineHeight: "1.7" }}>Modsol Limited, Narrow Ln,<br />Aughton, Ormskirk, L39 7HD</div>
                  <a
                    href="https://what3words.com/multiples.outermost.mutual"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ fontFamily: "var(--font-mono)", fontSize: "clamp(14px, 1.5vw, 18px)", color: "var(--yellow)", letterSpacing: "0.12em", marginTop: "6px", display: "block", textDecoration: "none" }}
                  >///multiples.outermost.mutual</a>
                  <a
                    href="https://www.google.com/maps?q=53.56774271476488,-2.9308639607916245"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="directions-btn"
                    style={{ display: "inline-flex", alignItems: "center", gap: "8px", marginTop: "12px", padding: "10px 20px", background: "#C6FF02", color: "#000", fontFamily: "var(--font-mono)", fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase", textDecoration: "none" }}
                  >GET DIRECTIONS →</a>
                </div>
                <div>
                  <div style={{ fontFamily: "var(--font-mono)", fontSize: "12px", color: "var(--muted)", letterSpacing: "0.22em", textTransform: "uppercase", marginBottom: "8px" }}>Response Time</div>
                  <div style={{ fontFamily: "var(--font-body)", fontSize: "clamp(18px, 2vw, 24px)", fontWeight: 300, color: "var(--white)" }}>Within 1–3 Business Days</div>
                </div>
              </div>

              <div style={{ paddingTop: "32px", borderTop: "1px solid rgba(255,255,255,0.08)" }}>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: "9px", color: "var(--muted)", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "16px" }}>Follow Modsol</div>
                <div style={{ display: "flex", gap: "24px" }}>
                  <div style={{ display: "flex", flexDirection: "column", gap: "6px", alignItems: "center" }}>
                    <a href="https://linkedin.com/company/modsol" target="_blank" rel="noopener noreferrer" style={{ color: "#fff", display: "inline-block", opacity: 0.7, transition: "opacity 0.2s ease" }} onMouseEnter={e => (e.currentTarget.style.opacity = "1")} onMouseLeave={e => (e.currentTarget.style.opacity = "0.7")}>
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </a>
                    <span style={{ fontFamily: "var(--font-mono)", fontSize: "8px", color: "var(--muted)", letterSpacing: "0.1em", textTransform: "uppercase" }}>LinkedIn</span>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: "6px", alignItems: "center" }}>
                    <a href="https://instagram.com/modsol" target="_blank" rel="noopener noreferrer" style={{ color: "#fff", display: "inline-block", opacity: 0.7, transition: "opacity 0.2s ease" }} onMouseEnter={e => (e.currentTarget.style.opacity = "1")} onMouseLeave={e => (e.currentTarget.style.opacity = "0.7")}>
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                      </svg>
                    </a>
                    <span style={{ fontFamily: "var(--font-mono)", fontSize: "8px", color: "var(--muted)", letterSpacing: "0.1em", textTransform: "uppercase" }}>Instagram</span>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: "6px", alignItems: "center" }}>
                    <a href="https://x.com/modsol" target="_blank" rel="noopener noreferrer" style={{ color: "#fff", display: "inline-block", opacity: 0.7, transition: "opacity 0.2s ease" }} onMouseEnter={e => (e.currentTarget.style.opacity = "1")} onMouseLeave={e => (e.currentTarget.style.opacity = "0.7")}>
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                      </svg>
                    </a>
                    <span style={{ fontFamily: "var(--font-mono)", fontSize: "8px", color: "var(--muted)", letterSpacing: "0.1em", textTransform: "uppercase" }}>X / Twitter</span>
                  </div>
                </div>
              </div>

              <div style={{ marginTop: "40px", padding: "24px", background: "rgba(198,255,2,0.04)", borderLeft: "2px solid var(--yellow)" }}>
                <p style={{ fontFamily: "var(--font-mono)", fontSize: "9px", color: "var(--yellow)", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: "12px" }}>Technical Enquiries</p>
                <p style={{ fontSize: "13px", color: "var(--muted)", lineHeight: "1.7" }}>Structural engineers, architects and designers with specification questions: <span style={{ color: "var(--white)" }}>technical@modsol.co.uk</span></p>
              </div>
            </div>

            {/* Right column — form */}
            <ContactForm />
          </div>
        </div>
      </section>

      {/* What to expect */}
      <section className="section-pad" style={{ background: "var(--dark)", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <div className="container">
          <p className="section-label">What Happens Next</p>
          <h2 className="section-title reveal" style={{ marginBottom: "48px" }}>From Brief<br /><span style={{ color: "var(--yellow)" }}>to Build.</span></h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "1px", background: "rgba(255,255,255,0.06)" }}>
            {[
              { step: "01", title: "We Read Your Brief", body: "Every enquiry is reviewed by a project manager and structural engineer within one business day. If we need clarification, we call — we don't send a form." },
              { step: "02", title: "Initial Assessment", body: "We provide an honest initial assessment of feasibility, timeline and indicative cost range. If your brief needs refining, we'll tell you what information would make our response more accurate." },
              { step: "03", title: "Proposal & Structural Design", body: "For confirmed projects, we produce a full structural proposal with certified drawings, programme schedule and detailed pricing. No surprises downstream." },
              { step: "04", title: "We Build It", body: "Our crew builds to schedule. You get a structure that matches the specification, delivered on time, managed throughout. That's been our record for 15 years and it's not changing." },
            ].map((p) => (
              <div key={p.step} style={{ background: "var(--dark)", padding: "40px", display: "grid", gridTemplateColumns: "80px 220px 1fr", gap: "40px", alignItems: "start" }}>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: "11px", color: "var(--yellow)", letterSpacing: "0.2em" }}>{p.step}</div>
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: "22px", color: "var(--white)", letterSpacing: "0.05em", lineHeight: 1.1 }}>{p.title}</h3>
                <p style={{ fontSize: "14px", color: "var(--muted)", lineHeight: "1.8" }}>{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

"use client";

export default function ContactCTA() {
  return (
    <section className="contact-cta" id="contact">
      <div className="container">
        <div className="contact-inner">
          {/* Left */}
          <div>
            <p className="section-label">Contact</p>
            <h2 className="section-title reveal" style={{ marginBottom: "24px" }}>
              Let&apos;s Build<br />
              <span style={{ color: "var(--yellow)" }}>Something</span><br />
              Bold.
            </h2>
            <p className="section-body reveal" style={{ marginBottom: "40px" }}>
              Tell us about your project. Whether you&apos;re planning an event structure, exhibition environment or branded activation — Modsol has the system.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }} className="reveal">
              <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                <div style={{ width: "36px", height: "36px", border: "1px solid rgba(198,255,2,0.3)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C6FF02" strokeWidth="1.5">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                </div>
                <span style={{ fontSize: "14px", color: "var(--off-white)" }}>sales@modsol.co.uk</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                <div style={{ width: "36px", height: "36px", border: "1px solid rgba(198,255,2,0.3)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C6FF02" strokeWidth="1.5">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                </div>
                <span style={{ fontSize: "14px", color: "var(--off-white)" }}>United Kingdom</span>
              </div>
            </div>
          </div>

          {/* Right — Form */}
          <form className="contact-form reveal" onSubmit={(e) => e.preventDefault()}>
            <div className="form-row">
              <div className="form-field">
                <label>First Name</label>
                <input type="text" placeholder="John" />
              </div>
              <div className="form-field">
                <label>Last Name</label>
                <input type="text" placeholder="Smith" />
              </div>
            </div>
            <div className="form-field">
              <label>Company</label>
              <input type="text" placeholder="Company Name" />
            </div>
            <div className="form-field">
              <label>Email Address</label>
              <input type="email" placeholder="john@company.com" />
            </div>
            <div className="form-field">
              <label>Project Type</label>
              <select style={{ background: "#1a1a1a", color: "#ffffff", border: "1px solid rgba(255,255,255,0.1)", cursor: "auto" }}>
                <option value="" style={{ background: "#1a1a1a", color: "#ffffff" }}>Select project type</option>
                <option style={{ background: "#1a1a1a", color: "#ffffff" }}>Event Structure</option>
                <option style={{ background: "#1a1a1a", color: "#ffffff" }}>Exhibition Environment</option>
                <option style={{ background: "#1a1a1a", color: "#ffffff" }}>Hospitality Suite</option>
                <option style={{ background: "#1a1a1a", color: "#ffffff" }}>Retail Activation</option>
                <option style={{ background: "#1a1a1a", color: "#ffffff" }}>Brand Activation</option>
                <option style={{ background: "#1a1a1a", color: "#ffffff" }}>Temporary Office</option>
                <option style={{ background: "#1a1a1a", color: "#ffffff" }}>Other</option>
              </select>
            </div>
            <div className="form-field">
              <label>Tell Us About Your Project</label>
              <textarea placeholder="Brief project description, timeline, scale..." />
            </div>
            <button className="btn-primary" type="submit" style={{ alignSelf: "flex-start" }}>
              Send Enquiry
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

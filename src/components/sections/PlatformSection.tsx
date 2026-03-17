export default function PlatformSection() {
  return (
    <section className="platform-section section-pad" id="company">
      <div className="container">
        <div className="platform-intro" style={{ marginBottom: 0 }}>
          <div>
            <p className="section-label">THE PLATFORM</p>
            <h2 className="section-title reveal">Three Systems.<br />One Platform.</h2>
          </div>
          <div>
            <div className="stats-row reveal" style={{
              marginTop: "40px",
              border: "1px solid rgba(198,255,2,0.25)",
              background: "rgba(198,255,2,0.25)",
            }}>
              {[
                { num: "3",   label: "Core Systems"   },
                { num: "12+", label: "Industries"      },
                { num: "∞",   label: "Configurations" },
              ].map((s) => (
                <div className="stat-item" key={s.label} style={{
                  minHeight: "200px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  backgroundImage: "linear-gradient(rgba(198,255,2,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(198,255,2,0.03) 1px, transparent 1px)",
                  backgroundSize: "30px 30px",
                }}>
                  <div className="stat-num">{s.num}</div>
                  <div className="stat-label">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <p className="section-body reveal" style={{ marginTop: "40px" }}>
          Three precision-engineered modular systems. One unified platform. Modsol delivers the infrastructure behind the world's most ambitious temporary environments — from flagship event structures to international brand activations.
        </p>
      </div>
    </section>
  );
}

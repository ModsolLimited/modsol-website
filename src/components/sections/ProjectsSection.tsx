import Link from "next/link";

const projects = [
  {
    cls: "proj-am",
    cat: "Hospitality · Motorsport",
    title: "Aston Martin\nHospitality Suite",
    desc: "Premium modular hospitality environment for Aston Martin's Formula 1 programme. Flat-packed. Deployed in 48 hours. Delivered at race pace.",
    watermark: "ASTON\nMARTIN",
    watermarkColor: "rgba(198,255,2,0.15)",
    watermarkSize: "80px",
  },
  {
    cls: "proj-pp",
    cat: "Hospitality · Media",
    title: "The Politico Pub",
    desc: "Fully branded modular pub environment for Politico's political convention activation.",
    watermark: "THE\nPOLITICO\nPUB",
    watermarkColor: "rgba(255,255,255,0.08)",
    watermarkSize: "60px",
  },
  {
    cls: "proj-oa",
    cat: "Retail · Music",
    title: "Oasis Live '25\nMerch Environment",
    desc: "Large-scale modular merchandise retail environment for the Oasis reunion tour.",
    watermark: "OASIS\nLIVE '25",
    watermarkColor: "rgba(198,255,2,0.1)",
    watermarkSize: "60px",
  },
  {
    cls: "proj-nfl",
    cat: "Retail · Sport",
    title: "NFL Fan\nRetail Experience",
    desc: "Fan retail activation and brand environment for the NFL's London series.",
    watermark: "NFL\nFAN\nZONE",
    watermarkColor: "rgba(255,255,255,0.07)",
    watermarkSize: "60px",
  },
];

export default function ProjectsSection() {
  return (
    <section className="projects-section section-pad" id="projects">
      <div className="container">
        <div className="projects-header">
          <div>
            <p className="section-label">05 — The Projects</p>
            <h2 className="section-title reveal">Selected<br />Work</h2>
          </div>
          <Link href="/projects" className="btn-secondary reveal">View All Projects</Link>
        </div>

        <div className="projects-grid">
          {projects.map((proj, i) => (
            <Link key={i} href="/projects" style={{ textDecoration: "none" }}>
              <div className="project-card">
                <div className="project-card-image">
                  <div className={`project-image-fill ${proj.cls}`}>
                    <div className="proj-grid-pattern" />
                    <div style={{
                      fontFamily: "var(--font-display)",
                      fontSize: proj.watermarkSize,
                      color: proj.watermarkColor,
                      letterSpacing: "0.1em",
                      zIndex: 2,
                      position: "relative",
                      textAlign: "center",
                      whiteSpace: "pre-line",
                    }}>
                      {proj.watermark}
                    </div>
                  </div>
                </div>
                <div className="project-card-info">
                  <div>
                    <div className="project-card-cat">{proj.cat}</div>
                    <div className="project-card-title" style={{ whiteSpace: "pre-line" }}>{proj.title}</div>
                    <div className="project-card-desc">{proj.desc}</div>
                  </div>
                  <div className="project-card-arrow">→</div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

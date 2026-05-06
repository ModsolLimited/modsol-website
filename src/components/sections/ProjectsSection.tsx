import Link from "next/link";

const projects = [
  {
    cls: "proj-am",
    cat: "HOSPITALITY",
    title: "Aston Martin\nHospitality Suite",
    desc: "Premium modular hospitality environment for Aston Martin's Formula 1 programme. Flat-packed. Deployed in 48 hours. Delivered at race pace.",
    watermark: "ASTON\nMARTIN",
    watermarkColor: "rgba(198,255,2,0.15)",
    watermarkSize: "80px",
    image: "/Aston Martin Internal.JPG",
  },
  {
    cls: "proj-oa",
    cat: "SHOWS & FESTIVALS",
    title: "Oasis Live '25\nTour Infrastructure",
    desc: "Large-scale modular tour infrastructure and merchandise retail environment for the Oasis reunion tour.",
    watermark: "OASIS\nLIVE '25",
    watermarkColor: "rgba(198,255,2,0.1)",
    watermarkSize: "60px",
    image: "/Oasis.JPG",
  },
  {
    cls: "proj-nfl",
    cat: "BRAND ACTIVATION",
    title: "NFL Wembley\nMegastore",
    desc: "Fan retail activation and brand environment for the NFL's London series at Wembley.",
    watermark: "NFL\nFAN\nZONE",
    watermarkColor: "rgba(255,255,255,0.07)",
    watermarkSize: "60px",
    image: "/NFL.JPG",
  },
  {
    cls: "proj-pp",
    cat: "EXPERIENTIAL",
    title: "The Politico\nPub",
    desc: "Fully branded modular pub environment for Politico's political convention activation.",
    watermark: "THE\nPOLITICO\nPUB",
    watermarkColor: "rgba(255,255,255,0.08)",
    watermarkSize: "60px",
    image: "/The Politico Pub.JPG",
  },
];

export default function ProjectsSection() {
  return (
    <section className="projects-section section-pad" id="projects">
      <div className="container">
        <div className="projects-header">
          <div>
            <p className="section-label">THE PROJECTS</p>
            <h2 className="section-title reveal">Our<br />Work</h2>
          </div>
          <Link href="/projects/case-studies" className="btn-secondary reveal">View All Projects</Link>
        </div>

        <div className="projects-grid">
          {projects.map((proj, i) => (
            <Link key={i} href="/projects/case-studies" style={{ textDecoration: "none" }}>
              <div className="project-card">
                <div className="project-card-image">
                  <div className={`project-image-fill ${proj.cls}`} style={{
                    backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.65) 100%), url("${proj.image}")`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    filter: "brightness(0.75) contrast(1.1)",
                  }}>
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

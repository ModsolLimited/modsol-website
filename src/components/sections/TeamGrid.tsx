"use client";

const team = [
  {
    name: "Steven Hill",
    role: "Managing Director",
    founder: true,
    photo: "/Persons/Steven Hill.jpg",
  },
  {
    name: "Richard Mahood",
    role: "Director",
    founder: true,
    photo: "/Persons/Richard Mahood.jpg",
  },
  {
    name: "Kieran Mahood",
    role: "Director",
    founder: true,
  },
  {
    name: "Adrian Jackson",
    role: "Lead Architect & Designer",
    qualification: "BA(Hons) DIP ARCH RIBA M.APS",
    founder: false,
  },
  {
    name: "Mark Welding",
    role: "Project Architect",
    founder: false,
  },
];

export default function TeamGrid() {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        gap: "24px",
      }}
      className="team-grid"
    >
      {team.map((member) => (
        <div key={member.name} className="team-card">
          {/* Square image placeholder */}
          <div className="team-card-img">
            <div
              style={{
                position: "absolute",
                inset: 0,
                backgroundImage:
                  "linear-gradient(rgba(198,255,2,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(198,255,2,0.06) 1px, transparent 1px)",
                backgroundSize: "24px 24px",
              }}
            />
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "9px",
                color: "rgba(198,255,2,0.3)",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                position: "relative",
                zIndex: 1,
              }}
            >
              Photo
            </span>
            {member.photo && (
              <img
                src={member.photo}
                alt={member.name}
                style={{
                  position: "absolute",
                  inset: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  zIndex: 2,
                }}
                onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
              />
            )}
          </div>

          {/* Card text */}
          <div style={{ padding: "0 0 0 24px", flex: 1 }}>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "28px",
                color: "#fff",
                lineHeight: 1,
                marginBottom: "6px",
              }}
            >
              {member.name}
            </h2>

            <p
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "11px",
                color: "#C6FF02",
                textTransform: "uppercase",
                letterSpacing: "0.2em",
                marginBottom: member.founder ? "10px" : 0,
              }}
            >
              {member.role}
            </p>

            {member.qualification && (
              <p style={{
                fontFamily: "var(--font-mono)",
                fontSize: "10px",
                color: "var(--muted)",
                textTransform: "uppercase",
                letterSpacing: "0.15em",
                marginTop: "6px",
                marginBottom: 0,
              }}>
                {member.qualification}
              </p>
            )}

            {member.founder && (
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "9px",
                  textTransform: "uppercase",
                  letterSpacing: "0.15em",
                  color: "#C6FF02",
                  background: "rgba(198,255,2,0.1)",
                  border: "1px solid rgba(198,255,2,0.3)",
                  padding: "3px 8px",
                  borderRadius: "2px",
                  display: "inline-block",
                }}
              >
                Founder
              </span>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

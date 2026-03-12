export default function Ticker() {
  const items = [
    "Build Bold", "Modblock", "Modwall", "Modframe",
    "Events", "Exhibitions", "Hospitality", "Retail",
    "Brand Activations", "Modular Architecture",
  ];
  const doubled = [...items, ...items];

  return (
    <div style={{ background: "#C6FF02", padding: "12px 0", overflow: "hidden", whiteSpace: "nowrap" }}>
      <div className="ticker-animate" style={{ display: "inline-flex" }}>
        {doubled.map((item, i) => (
          <span key={i} style={{
            fontFamily: "var(--font-mono)",
            fontSize: "11px",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "#000",
            fontWeight: 700,
            padding: "0 32px",
            display: "inline-flex",
            alignItems: "center",
            gap: "16px",
          }}>
            {item}
            <span style={{ fontSize: "8px" }}>◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}

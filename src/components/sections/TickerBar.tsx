const tickerItems = [
  "MODULAR",
  "SCALABLE",
  "ADAPTABLE",
  "BUILD BOLD",
  "TEMPORARY ARCHITECTURE",
  "ENGINEERED SYSTEMS",
  "MODBLOCK",
  "MODWALL",
  "MODFRAME",
];

export default function TickerBar() {
  // Triple repeat to ensure seamless loop at all viewport widths
  const repeated = [...tickerItems, ...tickerItems, ...tickerItems];

  return (
    <div
      className="w-full overflow-hidden"
      style={{ background: "#C6FF02", height: "46px" }}
      aria-hidden="true"
    >
      <div className="ticker-animate flex items-center h-full whitespace-nowrap" style={{ width: "max-content" }}>
        {repeated.map((item, i) => (
          <span key={i} className="flex items-center shrink-0">
            <span
              className="text-black uppercase px-8"
              style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: "11px",
                letterSpacing: "0.18em",
                fontWeight: 700,
              }}
            >
              {item}
            </span>
            <span
              className="text-black shrink-0"
              style={{ fontSize: "8px", opacity: 0.5 }}
            >
              ◆
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}

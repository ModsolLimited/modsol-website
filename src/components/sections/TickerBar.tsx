const tickerItems = [
  "BUILD. BOLD.",
  "MODULAR ARCHITECTURE",
  "EVENTS",
  "EXHIBITIONS",
  "BRAND ACTIVATIONS",
  "TEMPORARY STRUCTURES",
  "HOSPITALITY",
  "RETAIL ENVIRONMENTS",
  "THE MODBLOCK",
  "THE MODWALL",
  "THE MODFRAME",
  "ENGINEERED TO PERFORM",
  "BUILT TO IMPRESS",
];

export default function TickerBar() {
  const repeated = [...tickerItems, ...tickerItems];

  return (
    <div
      className="w-full overflow-hidden"
      style={{ background: "#C6FF02", height: "44px" }}
    >
      <div className="ticker-animate flex items-center h-full whitespace-nowrap w-max">
        {repeated.map((item, i) => (
          <span key={i} className="flex items-center">
            <span
              className="text-black uppercase px-6"
              style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: "11px",
                letterSpacing: "0.15em",
                fontWeight: 700,
              }}
            >
              {item}
            </span>
            <span className="text-black/40 text-xs">◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}

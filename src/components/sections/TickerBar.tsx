const items = [
  "Build Bold", "Modblock", "Modwall", "Modframe",
  "Events", "Exhibitions", "Hospitality", "Retail",
  "Brand Activations", "Modular Architecture",
];

export default function TickerBar() {
  // Doubled for seamless loop
  const all = [...items, ...items];
  return (
    <div className="ticker-bar" aria-hidden="true">
      <div className="ticker-inner">
        {all.map((item, i) => (
          <span key={i} className="ticker-item">{item}</span>
        ))}
      </div>
    </div>
  );
}

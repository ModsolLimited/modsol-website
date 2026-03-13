interface PageHeroProps {
  label: string;
  title: string;
  subtitle?: string;
}

export default function PageHero({ label, title, subtitle }: PageHeroProps) {
  return (
    <section className="page-hero">
      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <p className="section-label">{label}</p>
        <h1
          className="section-title"
          style={{ marginBottom: subtitle ? "24px" : 0, maxWidth: "800px" }}
          dangerouslySetInnerHTML={{ __html: title }}
        />
        {subtitle && (
          <p className="section-body" style={{ marginTop: "16px" }}>{subtitle}</p>
        )}
      </div>
    </section>
  );
}

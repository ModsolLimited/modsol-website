import SectionLabel from "@/components/ui/SectionLabel";
import AccentLine from "@/components/ui/AccentLine";

interface PageHeroProps {
  label: string;
  title: string;
  subtitle?: string;
  className?: string;
}

export default function PageHero({ label, title, subtitle, className = "" }: PageHeroProps) {
  return (
    <section
      className={`pt-32 pb-16 arch-grid ${className}`}
      style={{ background: "#000000", borderBottom: "1px solid rgba(255,255,255,0.06)" }}
    >
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <SectionLabel className="mb-6">{label}</SectionLabel>
        <h1
          className="text-white uppercase leading-none mb-6"
          style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: "clamp(3rem, 8vw, 7rem)",
            letterSpacing: "0.02em",
          }}
        >
          {title}
        </h1>
        {subtitle && (
          <p
            className="text-white/50 max-w-2xl"
            style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "clamp(1rem, 1.5vw, 1.125rem)", lineHeight: "1.7" }}
          >
            {subtitle}
          </p>
        )}
        <AccentLine className="mt-10 w-24" />
      </div>
    </section>
  );
}

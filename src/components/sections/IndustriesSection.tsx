import Link from "next/link";
import SectionLabel from "@/components/ui/SectionLabel";

const industries = [
  {
    number: "01",
    name: "Events",
    href: "/solutions/events",
    description: "Stages, grandstands, VIP structures, and temporary event architecture built to the brief — every time.",
  },
  {
    number: "02",
    name: "Exhibitions",
    href: "/solutions/exhibitions",
    description: "Stand systems and exhibition environments that put your brand centre-stage across any floorplan.",
  },
  {
    number: "03",
    name: "Hospitality",
    href: "/solutions/hospitality",
    description: "Premium temporary hospitality environments — from trackside suites to corporate entertainment pods.",
  },
  {
    number: "04",
    name: "Retail",
    href: "/solutions/retail",
    description: "Pop-up retail, seasonal flagships, and in-store brand moments delivered with architectural precision.",
  },
  {
    number: "05",
    name: "Brand Activations",
    href: "/solutions/brand-activations",
    description: "Immersive brand experiences that stop traffic. Modular, repeatable, unforgettable.",
  },
  {
    number: "06",
    name: "Temporary Offices",
    href: "/solutions/temporary-offices",
    description: "Professional workspace structures for construction sites, film productions, and interim operations.",
  },
];

export default function IndustriesSection() {
  return (
    <section className="py-24 lg:py-32" style={{ background: "#000000" }}>
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <SectionLabel className="mb-6">Industries Served</SectionLabel>
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16 gap-4">
          <h2
            className="text-white uppercase leading-none"
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "clamp(2.5rem, 6vw, 5rem)",
              letterSpacing: "0.02em",
            }}
          >
            Where Modsol<br />
            <span className="text-[#C6FF02]">Delivers.</span>
          </h2>
          <p
            className="text-white/40 max-w-xs text-sm"
            style={{ fontFamily: "'DM Sans', sans-serif", lineHeight: "1.7" }}
          >
            Six sectors. One platform. From global brand activations to intimate hospitality — Modsol builds it all.
          </p>
        </div>

        {/* Industry grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px" style={{ background: "rgba(255,255,255,0.06)" }}>
          {industries.map((industry) => (
            <Link
              key={industry.name}
              href={industry.href}
              className="group block p-8 transition-colors duration-200 hover:bg-white/03"
              style={{ background: "#000" }}
            >
              <div className="flex items-start justify-between mb-6">
                <span
                  className="text-[#C6FF02]"
                  style={{ fontFamily: "'Space Mono', monospace", fontSize: "10px", letterSpacing: "0.2em" }}
                >
                  {industry.number}
                </span>
                <span
                  className="text-white/20 group-hover:text-[#C6FF02] transition-colors"
                  style={{ fontFamily: "'Space Mono', monospace", fontSize: "12px" }}
                >
                  →
                </span>
              </div>

              {/* Yellow accent line */}
              <div className="w-8 h-px bg-[#C6FF02] mb-5" />

              <h3
                className="text-white uppercase mb-3 group-hover:text-[#C6FF02] transition-colors duration-200"
                style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: "2rem",
                  letterSpacing: "0.04em",
                }}
              >
                {industry.name}
              </h3>
              <p
                className="text-white/40 text-sm leading-relaxed"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                {industry.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

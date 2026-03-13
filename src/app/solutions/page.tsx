import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/layout/PageHero";
import SectionLabel from "@/components/ui/SectionLabel";
import AccentLine from "@/components/ui/AccentLine";
import YellowButton from "@/components/ui/YellowButton";

export const metadata: Metadata = {
  title: "The Solutions — Modular Systems for Every Application",
  description:
    "Modsol delivers modular solutions across events, exhibitions, hospitality, retail, brand activations, and temporary offices.",
};

const solutions = [
  {
    number: "01",
    name: "Event Solutions",
    href: "/solutions/events",
    description: "Stages, grandstands, VIP structures, and temporary event architecture built to any brief.",
  },
  {
    number: "02",
    name: "Exhibition Solutions",
    href: "/solutions/exhibitions",
    description: "Stand systems and exhibition environments that put your brand centre-stage across any floorplan.",
  },
  {
    number: "03",
    name: "Hospitality Solutions",
    href: "/solutions/hospitality",
    description: "Premium temporary hospitality environments — from trackside suites to corporate entertainment pods.",
  },
  {
    number: "04",
    name: "Retail Solutions",
    href: "/solutions/retail",
    description: "Pop-up retail, seasonal flagships, and in-store brand moments delivered with architectural precision.",
  },
  {
    number: "05",
    name: "Brand Activation Solutions",
    href: "/solutions/brand-activations",
    description: "Immersive brand experiences that stop traffic — modular, repeatable, unforgettable.",
  },
  {
    number: "06",
    name: "Temporary Office Solutions",
    href: "/solutions/temporary-offices",
    description: "Professional workspace structures for construction sites, film productions, and interim operations.",
  },
];

export default function SolutionsPage() {
  return (
    <>
      <PageHero
        label="The Solutions"
        title="Where Modsol Delivers"
        subtitle="Six sectors. One modular platform. Modsol has the structural system, the delivery expertise, and the creative capability to bring any temporary environment to life."
      />

      <section className="py-24 lg:py-32" style={{ background: "#000000" }}>
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <SectionLabel className="mb-12">All Solutions</SectionLabel>

          <div className="space-y-px" style={{ background: "rgba(255,255,255,0.06)" }}>
            {solutions.map((sol) => (
              <Link
                key={sol.name}
                href={sol.href}
                className="group flex items-center justify-between p-8 transition-colors hover:bg-white/03"
                style={{ background: "#000" }}
              >
                <div className="flex items-start gap-8">
                  <span
                    className="text-[#C6FF02] shrink-0 mt-1"
                    style={{ fontFamily: "'Space Mono', monospace", fontSize: "10px", letterSpacing: "0.2em" }}
                  >
                    {sol.number}
                  </span>
                  <div>
                    <AccentLine className="w-6 mb-4" />
                    <h2
                      className="text-white uppercase group-hover:text-[#C6FF02] transition-colors duration-200 mb-2"
                      style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(1.75rem, 3vw, 2.5rem)", letterSpacing: "0.04em" }}
                    >
                      {sol.name}
                    </h2>
                    <p
                      className="text-white/40 max-w-md text-sm"
                      style={{ fontFamily: "'DM Sans', sans-serif", lineHeight: "1.6" }}
                    >
                      {sol.description}
                    </p>
                  </div>
                </div>
                <span
                  className="text-white/20 group-hover:text-[#C6FF02] transition-colors shrink-0 text-xl"
                >
                  →
                </span>
              </Link>
            ))}
          </div>

          <div className="mt-16 text-center">
            <YellowButton href="/contact">Discuss Your Requirements</YellowButton>
          </div>
        </div>
      </section>
    </>
  );
}

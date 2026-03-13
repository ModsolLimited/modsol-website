import type { Metadata } from "next";
import PageHero from "@/components/layout/PageHero";
import SectionLabel from "@/components/ui/SectionLabel";
import AccentLine from "@/components/ui/AccentLine";
import ImagePlaceholder from "@/components/ui/ImagePlaceholder";
import YellowButton from "@/components/ui/YellowButton";

export const metadata: Metadata = {
  title: "The Company — About Modsol Limited",
  description:
    "Modsol Limited designs and manufactures precision modular systems for temporary architecture, events, exhibitions, and branded environments. Founded on the principle of BUILD. BOLD.",
};

const values = [
  {
    number: "01",
    title: "Precision Engineering",
    description:
      "Every system we manufacture is engineered to tolerance. Not close to spec — to spec. That discipline runs from material selection through to the final bolt torque on site.",
  },
  {
    number: "02",
    title: "Bold Design",
    description:
      "We believe temporary architecture should be as considered as permanent design. Every Modsol structure should stop someone in their tracks — even before the brand dresses it.",
  },
  {
    number: "03",
    title: "Modular Intelligence",
    description:
      "A system isn't modular just because it can be moved. True modularity means infinite combination without compromise — every element designed for every configuration.",
  },
  {
    number: "04",
    title: "Delivery Confidence",
    description:
      "Events don't slip. Builds have to happen on time, every time. Modsol's delivery record and project management capability give clients the confidence to specify boldly.",
  },
];

export default function CompanyPage() {
  return (
    <>
      <PageHero
        label="The Company"
        title="Modsol Limited"
        subtitle="Designing and manufacturing modular systems for temporary architecture, events, exhibitions, and branded environments since the day we decided temporary should never mean ordinary."
      />

      {/* Mission section */}
      <section className="py-24 lg:py-32" style={{ background: "#000000" }}>
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            <div className="lg:col-span-7">
              <AccentLine className="w-12 mb-8" />
              <h2
                className="text-white uppercase leading-none mb-8"
                style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: "clamp(2.5rem, 6vw, 5rem)",
                  letterSpacing: "0.02em",
                }}
              >
                Built on the belief<br />
                <span className="text-[#C6FF02]">that temporary should be anything but.</span>
              </h2>
              <div className="space-y-5 text-white/50" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1.0625rem", lineHeight: "1.75" }}>
                <p>
                  Modsol Limited was founded on a single observation: the standard of temporary architecture was not good enough. Structures that looked cheap, performed worse, and communicated entirely the wrong thing about the brands they were supposed to represent.
                </p>
                <p>
                  We set out to change that. By engineering a modular platform from the ground up — not adapting existing systems, not approximating — we built the tools that the industry needed to build bolder.
                </p>
                <p>
                  Today, Modsol's three-system platform — The Modblock, The Modwall, and The Modframe — has been deployed across five continents, at some of the world's most demanding events and brand environments.
                </p>
              </div>
            </div>
            <div className="lg:col-span-5">
              <ImagePlaceholder
                label="COMPANY — Replace with team or manufacturing facility photography"
                aspectRatio="3/4"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 lg:py-32 arch-grid" style={{ background: "#0A0A0A" }}>
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <SectionLabel className="mb-12">Our Values</SectionLabel>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px" style={{ background: "rgba(255,255,255,0.06)" }}>
            {values.map((value) => (
              <div key={value.number} className="p-8 lg:p-10" style={{ background: "#0A0A0A" }}>
                <div
                  className="text-[#C6FF02] mb-4"
                  style={{ fontFamily: "'Space Mono', monospace", fontSize: "10px", letterSpacing: "0.2em" }}
                >
                  {value.number}
                </div>
                <AccentLine className="w-6 mb-5" />
                <h3
                  className="text-white uppercase mb-4"
                  style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "2rem", letterSpacing: "0.04em" }}
                >
                  {value.title}
                </h3>
                <p
                  className="text-white/40 leading-relaxed"
                  style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.9375rem" }}
                >
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-24" style={{ background: "#000000" }}>
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px" style={{ background: "rgba(255,255,255,0.06)" }}>
            {[
              { value: "500+", label: "Projects Delivered" },
              { value: "12+", label: "Years Experience" },
              { value: "40+", label: "Countries" },
              { value: "3", label: "Engineered Systems" },
            ].map((stat) => (
              <div key={stat.label} className="py-12 px-8 text-center" style={{ background: "#000" }}>
                <div
                  className="text-[#C6FF02]"
                  style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "3.5rem", letterSpacing: "0.04em" }}
                >
                  {stat.value}
                </div>
                <div
                  className="text-white/40 uppercase mt-1"
                  style={{ fontFamily: "'Space Mono', monospace", fontSize: "9px", letterSpacing: "0.18em" }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Manufacturing */}
      <section className="py-24 lg:py-32" style={{ background: "#0A0A0A" }}>
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <ImagePlaceholder
              label="MANUFACTURING — Replace with factory/production floor photography"
              aspectRatio="4/3"
            />
            <div>
              <SectionLabel className="mb-6">Manufacturing</SectionLabel>
              <h2
                className="text-white uppercase leading-none mb-6"
                style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(2rem, 4vw, 3.5rem)", letterSpacing: "0.02em" }}
              >
                Built in-house.<br />
                <span className="text-[#C6FF02]">Controlled end to end.</span>
              </h2>
              <p
                className="text-white/50 leading-relaxed mb-8"
                style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "1.0625rem", lineHeight: "1.75" }}
              >
                Every Modsol system component is manufactured in our own facilities — not sourced from third parties and re-labelled. That means total quality control, shorter lead times, and the ability to engineer bespoke components when standard configurations aren&apos;t enough.
              </p>
              <YellowButton href="/contact">Work With Us</YellowButton>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

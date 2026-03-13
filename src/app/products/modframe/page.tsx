import type { Metadata } from "next";
import ProductHero from "@/components/products/ProductHero";
import ProductFeatures from "@/components/products/ProductFeatures";
import ProductApplications from "@/components/products/ProductApplications";
import ContactCTA from "@/components/sections/ContactCTA";

export const metadata: Metadata = {
  title: "The Modframe — Large-Span Modular Framework System",
  description:
    "The Modframe is Modsol's large-span structural framework system — engineered for multi-storey temporary builds, spanning structures, and large-format temporary architecture.",
};

const specs = [
  { label: "System Code", value: "SYS-03 / Modframe" },
  { label: "Primary Material", value: "Hot-dip galvanised structural steel" },
  { label: "Connection Standard", value: "Engineered pin-joint with locking collar" },
  { label: "Maximum Clear Span", value: "12 metres (standard configuration)" },
  { label: "Maximum Build Height", value: "3 storeys / 9.6 metres" },
  { label: "Wind Certification", value: "Designed to Eurocode 1 (EN 1991-1-4)" },
  { label: "Live Load Capacity", value: "600kg/m² (floor deck option)" },
  { label: "Engineering Package", value: "Full PE-stamped drawings on request" },
];

const features = [
  {
    number: "F-01",
    title: "12m Clear Span",
    description:
      "Modframe's engineered truss system achieves clear spans of up to 12 metres — enabling column-free event spaces, viewing decks, and covered walkways.",
  },
  {
    number: "F-02",
    title: "Multi-Level Capable",
    description:
      "The system is certified for multi-storey construction up to 3 levels. Full structural engineering packages available for every configuration.",
  },
  {
    number: "F-03",
    title: "Single Connection Standard",
    description:
      "All Modframe elements use a single pin-joint connection standard. No specialist tools or skills required on-site — fast build, faster strike.",
  },
  {
    number: "F-04",
    title: "Eurocode Wind Certified",
    description:
      "Every Modframe configuration is designed to Eurocode 1 wind loading requirements — suitable for outdoor events and exposed installations.",
  },
  {
    number: "F-05",
    title: "Floor Deck Integration",
    description:
      "Optional 600kg/m² rated floor deck panels integrate directly with the Modframe chassis — for elevated platforms, stages, and mezzanine structures.",
  },
  {
    number: "F-06",
    title: "Full Engineering Package",
    description:
      "Every Modframe build includes a full site-specific structural engineering package — PE-stamped drawings, load calculations, and installation method statements.",
  },
];

const applications = [
  {
    sector: "Event Stages",
    description: "Large-format stage structures with clear spans, wing extensions, and coverage decks.",
    imageLabel: "MODFRAME — Event stage application photography",
  },
  {
    sector: "Viewing Decks",
    description: "Multi-level spectator platforms for motorsport, live events, and sports.",
    imageLabel: "MODFRAME — Viewing deck / grandstand photography",
  },
  {
    sector: "Covered Walkways",
    description: "Spanning covered walkways and entrance structures for events and exhibitions.",
    imageLabel: "MODFRAME — Covered walkway application photography",
  },
];

export default function ModframePage() {
  return (
    <>
      <ProductHero
        code="SYS-03 — The Modframe"
        name="The Modframe"
        tagline="Large-span frameworks for ambitious temporary architecture."
        description="The Modframe is Modsol's engineered structural framework system — designed for large-span, multi-storey, and cantilevered temporary builds. When a project demands scale, The Modframe delivers the structural confidence to go further."
        imageLabel="MODFRAME HERO — Replace with large-scale structural installation photography"
        specs={specs}
      />
      <ProductFeatures features={features} />
      <ProductApplications applications={applications} productName="Modframe" />
      <ContactCTA />
    </>
  );
}

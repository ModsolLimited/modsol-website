import type { Metadata } from "next";
import ProductHero from "@/components/products/ProductHero";
import ProductFeatures from "@/components/products/ProductFeatures";
import ProductApplications from "@/components/products/ProductApplications";
import ContactCTA from "@/components/sections/ContactCTA";

export const metadata: Metadata = {
  title: "The Modblock — Structural Modular Block System",
  description:
    "The Modblock is Modsol's precision-engineered structural block system — the foundational element for temporary architecture, events, and exhibitions.",
};

const specs = [
  { label: "System Code", value: "SYS-01 / Modblock" },
  { label: "Material", value: "6061-T6 Aluminium Extrusion" },
  { label: "Surface Finish", value: "Anodised — Silver, Black, or Powder Coat" },
  { label: "Connection Type", value: "Tool-Free Interlocking Pin System" },
  { label: "Load Rating", value: "500kg per module (stacked)" },
  { label: "Standard Dimensions", value: "600mm × 600mm × 300mm" },
  { label: "Weight per Module", value: "12kg" },
  { label: "Assembly Time", value: "2 min per module (2-person team)" },
];

const features = [
  {
    number: "F-01",
    title: "Tool-Free Assembly",
    description:
      "Every Modblock connects with a patent-pending pin and slide system — no tools required. A 2-person team can assemble a complete wall section in under 20 minutes.",
  },
  {
    number: "F-02",
    title: "500kg Load Rating",
    description:
      "Independently tested and certified to carry 500kg per stacked module. Safe for signage, AV equipment, and shelving applications without additional bracing.",
  },
  {
    number: "F-03",
    title: "Infinite Configuration",
    description:
      "Modblocks combine in any direction — linear runs, 90° corners, T-junctions, and curves. The system scales from a single display unit to a full exhibition stand.",
  },
  {
    number: "F-04",
    title: "Surface Ready",
    description:
      "All external faces accept direct-print vinyl, timber face panels, or fabric stretching — integrating seamlessly with The Modwall face panel system.",
  },
  {
    number: "F-05",
    title: "Compact Flat-Pack",
    description:
      "Modules stack and nest for transport efficiency. A standard flatbed can carry enough Modblocks to build a 200m² exhibition environment.",
  },
  {
    number: "F-06",
    title: "10-Year Service Life",
    description:
      "Anodised aluminium resists corrosion, UV degradation, and mechanical damage. Every Modblock is designed and tested for a minimum 10-year service life.",
  },
];

const applications = [
  {
    sector: "Exhibition Stands",
    description: "Floor-to-ceiling stand structures that integrate brand graphics with structural precision.",
    imageLabel: "MODBLOCK — Exhibition stand application photography",
  },
  {
    sector: "Retail Environments",
    description: "Modular shelving, display plinths, and branded retail fixtures built overnight.",
    imageLabel: "MODBLOCK — Retail environment application photography",
  },
  {
    sector: "Event Staging",
    description: "Stage risers, DJ booths, speaker plinths, and branded event furniture.",
    imageLabel: "MODBLOCK — Event staging application photography",
  },
];

export default function ModblockPage() {
  return (
    <>
      <ProductHero
        code="SYS-01 — The Modblock"
        name="The Modblock"
        tagline="The structural backbone of temporary architecture."
        description="A precision-engineered structural block system built from aerospace-grade aluminium. The Modblock is the foundational element of every Modsol build — enabling rapid assembly, infinite configuration, and load-rated performance across events, exhibitions, and branded environments."
        imageLabel="MODBLOCK HERO — Replace with large format product or installation photography"
        specs={specs}
      />
      <ProductFeatures features={features} />
      <ProductApplications applications={applications} productName="Modblock" />
      <ContactCTA />
    </>
  );
}

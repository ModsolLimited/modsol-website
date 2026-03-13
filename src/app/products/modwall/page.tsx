import type { Metadata } from "next";
import ProductHero from "@/components/products/ProductHero";
import ProductFeatures from "@/components/products/ProductFeatures";
import ProductApplications from "@/components/products/ProductApplications";
import ContactCTA from "@/components/sections/ContactCTA";

export const metadata: Metadata = {
  title: "The Modwall — Modular Surface Panel System",
  description:
    "The Modwall is Modsol's modular surface panel system — engineered for high-impact branded environments, seamless graphics, and acoustic performance.",
};

const specs = [
  { label: "System Code", value: "SYS-02 / Modwall" },
  { label: "Panel Material", value: "Aluminium composite core with timber backing" },
  { label: "Face Finishes", value: "Direct print, fabric, timber veneer, glass" },
  { label: "Panel Depths", value: "10mm, 18mm, 25mm" },
  { label: "Standard Panel Size", value: "1200mm × 2400mm (bespoke available)" },
  { label: "Edge Detail", value: "Flush, reveal, or shadow gap" },
  { label: "Acoustic Option", value: "50dB Rw reduction panel available" },
  { label: "Weight (std)", value: "8kg per panel" },
];

const features = [
  {
    number: "F-01",
    title: "Seamless Face Finish",
    description:
      "Panel-to-panel joints achieve ≤0.5mm gap tolerance — enabling full-bleed graphics and premium surface finishes with no visible fixing points.",
  },
  {
    number: "F-02",
    title: "Interchangeable Faces",
    description:
      "Face panels clip to a fixed backing frame, allowing complete graphic refreshes in under an hour. Perfect for multi-use or touring applications.",
  },
  {
    number: "F-03",
    title: "Acoustic Performance",
    description:
      "Our 25mm acoustic Modwall panels provide up to 50dB Rw sound reduction — engineered for hospitality suites, conference rooms, and broadcast environments.",
  },
  {
    number: "F-04",
    title: "Backlit Ready",
    description:
      "Modwall backing frames accept LED strip installations for seamless backlit graphic panels — no secondary framing required.",
  },
  {
    number: "F-05",
    title: "Modblock Compatible",
    description:
      "Modwall face panels attach directly to Modblock structural cores — the two systems integrate in a single structural and surface solution.",
  },
  {
    number: "F-06",
    title: "Print-Ready Surface",
    description:
      "All standard panels are supplied with a print-ready white laminate face. Direct UV printing available across the full Modsol supply network.",
  },
];

const applications = [
  {
    sector: "Branded Environments",
    description: "Full-room wall graphics and immersive brand environments built from a modular panel grid.",
    imageLabel: "MODWALL — Branded environment photography",
  },
  {
    sector: "Exhibition Stands",
    description: "Floor-to-ceiling graphic panels with seamless joints for exhibition and trade show applications.",
    imageLabel: "MODWALL — Exhibition stand application photography",
  },
  {
    sector: "Hospitality Suites",
    description: "Acoustic and aesthetic wall solutions for temporary hospitality environments.",
    imageLabel: "MODWALL — Hospitality suite application photography",
  },
];

export default function ModwallPage() {
  return (
    <>
      <ProductHero
        code="SYS-02 — The Modwall"
        name="The Modwall"
        tagline="Surface systems built for maximum brand impact."
        description="The Modwall is a high-performance modular surface panel system designed to deliver seamless brand graphics, acoustic control, and premium finishes across any temporary environment. From exhibition stands to hospitality suites — The Modwall defines the space."
        imageLabel="MODWALL HERO — Replace with large format installation or surface detail photography"
        specs={specs}
      />
      <ProductFeatures features={features} />
      <ProductApplications applications={applications} productName="Modwall" />
      <ContactCTA />
    </>
  );
}

import type { Metadata } from "next";
import SolutionLayout from "@/components/solutions/SolutionLayout";

export const metadata: Metadata = {
  title: "Brand Activation Solutions — Modular Brand Experience Structures",
  description:
    "Modsol builds immersive brand activation structures — modular, repeatable, and engineered to stop traffic at any scale.",
};

export default function BrandActivationSolutionsPage() {
  return (
    <SolutionLayout
      label="Solutions / Brand Activations"
      title="Brand Activation Solutions"
      subtitle="Immersive brand experiences that stop traffic — modular structures engineered for maximum impact, built for repeatability."
      heroImageLabel="BRAND ACTIVATION HERO — Replace with brand activation or immersive experience photography"
      intro="The best brand activations don't just get noticed — they become talked about. Modsol's modular platform enables activation structures at any scale: from a single hero installation to a multi-market touring campaign. Engineered to impress, designed to repeat."
      capabilities={[
        {
          title: "Hero Installations",
          description: "Large-format centrepiece brand structures — Modframe chassis with Modwall surface systems delivering maximum visual impact.",
        },
        {
          title: "Immersive Environments",
          description: "Fully enclosed brand experience rooms and walk-through environments with seamless graphic surfaces, lighting integration, and controlled acoustics.",
        },
        {
          title: "Touring Activations",
          description: "Repeatable modular activation structures designed for multi-city touring — installed by local crews from a standardised kit of parts.",
        },
        {
          title: "Product Launch Structures",
          description: "Bespoke product launch environments for automotive, technology, fashion, and FMCG brands — built to reveal in any location.",
        },
        {
          title: "Experiential Retail",
          description: "Brand experience structures within retail environments — pop-up activations that drive dwell time and social sharing.",
        },
        {
          title: "Festival Brand Villages",
          description: "Multi-structure brand villages for major festival and event sponsorships — a complete branded world built from a single modular platform.",
        },
      ]}
      systems={["The Modframe (SYS-03)", "The Modwall (SYS-02)", "The Modblock (SYS-01)"]}
      galleryImages={[
        { label: "BRAND ACTIVATION — Hero installation photography" },
        { label: "BRAND ACTIVATION — Immersive environment interior" },
        { label: "BRAND ACTIVATION — Touring activation photography" },
        { label: "BRAND ACTIVATION — Product launch structure" },
        { label: "BRAND ACTIVATION — Festival brand village photography" },
        { label: "BRAND ACTIVATION — Experiential retail or pop-up" },
      ]}
    />
  );
}

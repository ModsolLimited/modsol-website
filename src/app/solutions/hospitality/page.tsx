import type { Metadata } from "next";
import SolutionLayout from "@/components/solutions/SolutionLayout";

export const metadata: Metadata = {
  title: "Hospitality Solutions — Premium Temporary Hospitality Environments",
  description:
    "Modsol builds premium temporary hospitality environments — trackside suites, VIP lounges, corporate entertainment structures, and more.",
};

export default function HospitalitySolutionsPage() {
  return (
    <SolutionLayout
      label="Solutions / Hospitality"
      title="Hospitality Solutions"
      subtitle="Premium temporary hospitality environments built to the standard of permanent architecture — for the world's most demanding venues and occasions."
      heroImageLabel="HOSPITALITY SOLUTIONS HERO — Replace with premium hospitality suite or VIP lounge photography"
      intro="The best hospitality doesn't feel temporary. Modsol's premium surface systems and structural precision deliver environments that feel permanent, polished, and entirely on-brand — whether trackside at a grand prix or front-of-house at a major concert."
      capabilities={[
        {
          title: "Trackside Hospitality Suites",
          description: "Motorsport hospitality structures with full fit-out — branded surfaces, acoustic interiors, bar installations, and viewing terraces.",
        },
        {
          title: "VIP Lounges",
          description: "Premium enclosed and partially open VIP environments — designed for comfort, brand expression, and guest experience.",
        },
        {
          title: "Corporate Entertainment Pods",
          description: "Self-contained corporate entertainment structures for sporting events, festivals, and corporate occasions.",
        },
        {
          title: "Premium Bar Structures",
          description: "Branded bar and service structures with integrated back-bar, refrigeration routing, and full Modwall surface finishes.",
        },
        {
          title: "Catering & BOH Infrastructure",
          description: "Back-of-house kitchen, preparation, and service infrastructure built from the Modframe chassis system.",
        },
        {
          title: "Interior Fit-Out",
          description: "Full interior specification — flooring, lighting, furniture, and AV integration alongside the Modsol structural platform.",
        },
      ]}
      systems={["The Modwall (SYS-02)", "The Modblock (SYS-01)", "The Modframe (SYS-03)"]}
      galleryImages={[
        { label: "HOSPITALITY — Trackside suite exterior photography" },
        { label: "HOSPITALITY — VIP lounge interior photography" },
        { label: "HOSPITALITY — Bar structure photography" },
        { label: "HOSPITALITY — Corporate pod or entertainment suite" },
        { label: "HOSPITALITY — Interior fit-out detail" },
        { label: "HOSPITALITY — Viewing terrace or deck photography" },
      ]}
    />
  );
}

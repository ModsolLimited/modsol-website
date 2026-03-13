import type { Metadata } from "next";
import SolutionLayout from "@/components/solutions/SolutionLayout";

export const metadata: Metadata = {
  title: "Event Solutions — Modular Event Structures",
  description:
    "Modsol delivers precision modular structures for live events — stages, grandstands, VIP environments, and temporary event architecture.",
};

export default function EventSolutionsPage() {
  return (
    <SolutionLayout
      label="Solutions / Events"
      title="Event Solutions"
      subtitle="Precision modular structures for live events — from intimate festival stages to large-format sporting environments."
      heroImageLabel="EVENT SOLUTIONS HERO — Replace with live event environment photography (stage, crowd, or VIP structure)"
      intro="Live events demand structures that perform under pressure — fast builds, confident load ratings, and designs that hold their own against the spectacle. Modsol's modular platform delivers event infrastructure that is as engineered as it is impactful."
      capabilities={[
        {
          title: "Stage Structures",
          description: "Modframe-based stage systems in any configuration — proscenium, thrust, in-the-round. Clear spans up to 12m, with integrated roof and coverage deck options.",
        },
        {
          title: "Grandstands & Viewing Decks",
          description: "Multi-tier spectator platforms engineered to Eurocode loading requirements. Motorsport, live music, sport — built to hold the crowd and the moment.",
        },
        {
          title: "VIP & Hospitality Structures",
          description: "Premium enclosed and open-sided hospitality environments. Modwall surface finishes and Modblock structural cores deliver brand quality in every detail.",
        },
        {
          title: "Production Infrastructure",
          description: "Camera platforms, lighting rigs, technical platforms, and production office structures — all from the same modular platform.",
        },
        {
          title: "Festival Structures",
          description: "Reusable, scalable festival structures — bars, information points, artist areas, and brand activation villages built across a single hire fleet.",
        },
        {
          title: "Covered Walkways",
          description: "Weather-rated covered walkway and bridge structures connecting event zones — built fast, struck fast, leaving no trace.",
        },
      ]}
      systems={["The Modframe (SYS-03)", "The Modblock (SYS-01)", "The Modwall (SYS-02)"]}
      galleryImages={[
        { label: "EVENT — Stage structure photography" },
        { label: "EVENT — Grandstand/viewing deck photography" },
        { label: "EVENT — VIP hospitality structure photography" },
        { label: "EVENT — Festival bar or activation photography" },
        { label: "EVENT — Production platform photography" },
        { label: "EVENT — Covered walkway or entrance photography" },
      ]}
    />
  );
}

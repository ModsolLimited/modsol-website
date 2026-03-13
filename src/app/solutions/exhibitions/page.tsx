import type { Metadata } from "next";
import SolutionLayout from "@/components/solutions/SolutionLayout";

export const metadata: Metadata = {
  title: "Exhibition Solutions — Modular Exhibition Stand Systems",
  description:
    "Modsol delivers modular exhibition stand systems and branded environments for trade shows, exhibitions, and corporate events worldwide.",
};

export default function ExhibitionSolutionsPage() {
  return (
    <SolutionLayout
      label="Solutions / Exhibitions"
      title="Exhibition Solutions"
      subtitle="Stand systems and exhibition environments that command attention — from shell scheme upgrades to full custom builds."
      heroImageLabel="EXHIBITION SOLUTIONS HERO — Replace with exhibition stand or trade show environment photography"
      intro="Your exhibition stand is the physical expression of your brand — it needs to stop people in their tracks. Modsol delivers exhibition environments that combine architectural precision with creative ambition, built from a modular platform that makes every square metre work harder."
      capabilities={[
        {
          title: "Bespoke Stand Design",
          description: "Full custom exhibition stand design and build — from concept through to installation. Every stand is engineered to your exact footprint and brand identity.",
        },
        {
          title: "Reusable Stand Systems",
          description: "Modular stands designed for multiple show cycles — the same structure reconfigured, rebranded, and redeployed across your exhibition calendar.",
        },
        {
          title: "Double-Deck Stands",
          description: "Modframe-based double-deck stand structures for maximum meeting and hospitality space within your footprint.",
        },
        {
          title: "Graphic Systems",
          description: "Modwall panel systems deliver seamless large-format graphics — direct print, backlit, fabric, or timber veneer finishes.",
        },
        {
          title: "Storage & Meeting Integration",
          description: "Integrated storage rooms, private meeting pods, and hospitality counters built into every stand structure.",
        },
        {
          title: "International Delivery",
          description: "Exhibition delivery across Europe, the Middle East, and North America — with local installation crews managed by Modsol.",
        },
      ]}
      systems={["The Modblock (SYS-01)", "The Modwall (SYS-02)", "The Modframe (SYS-03)"]}
      galleryImages={[
        { label: "EXHIBITION — Large custom stand photography" },
        { label: "EXHIBITION — Double-deck stand photography" },
        { label: "EXHIBITION — Graphic wall / Modwall detail" },
        { label: "EXHIBITION — Meeting pod or private room" },
        { label: "EXHIBITION — Stand reception counter" },
        { label: "EXHIBITION — Wide-angle exhibition hall shot" },
      ]}
    />
  );
}

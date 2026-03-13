import type { Metadata } from "next";
import SolutionLayout from "@/components/solutions/SolutionLayout";

export const metadata: Metadata = {
  title: "Retail Solutions — Modular Pop-Up Retail & Brand Environments",
  description:
    "Modsol delivers modular pop-up retail, seasonal flagships, and in-store brand environments — built fast, without compromise.",
};

export default function RetailSolutionsPage() {
  return (
    <SolutionLayout
      label="Solutions / Retail"
      title="Retail Solutions"
      subtitle="Pop-up retail, seasonal flagships, and in-store brand moments — delivered with the architectural precision of a permanent fit-out."
      heroImageLabel="RETAIL SOLUTIONS HERO — Replace with pop-up retail or branded retail environment photography"
      intro="The retail landscape demands flexibility. Seasonal flagships, touring pop-ups, concession environments, and in-store brand moments — all requiring a structural solution that can be installed overnight, branded with precision, and struck without trace. That is the Modsol retail offer."
      capabilities={[
        {
          title: "Pop-Up Retail Structures",
          description: "Fully enclosed or open-fronted pop-up retail structures — from a single concession unit to a multi-zone brand flagship.",
        },
        {
          title: "Seasonal Flagship Stores",
          description: "Temporary flagship retail environments built to the visual standard of a permanent store — for Christmas, new product launches, and seasonal campaigns.",
        },
        {
          title: "In-Store Brand Moments",
          description: "Within-store branded environments and product launch structures — installed overnight in live retail settings.",
        },
        {
          title: "Product Display Systems",
          description: "Modblock-based display plinths, shelving systems, and branded product furniture built to brand specification.",
        },
        {
          title: "Concession Units",
          description: "Self-contained branded concession structures for department stores, airports, and shopping centres.",
        },
        {
          title: "Touring Retail",
          description: "Repeatable modular retail structures that can be installed by local crews in multiple locations across a touring campaign.",
        },
      ]}
      systems={["The Modblock (SYS-01)", "The Modwall (SYS-02)"]}
      galleryImages={[
        { label: "RETAIL — Pop-up retail structure photography" },
        { label: "RETAIL — Seasonal flagship environment photography" },
        { label: "RETAIL — In-store brand activation photography" },
        { label: "RETAIL — Product display / plinth photography" },
        { label: "RETAIL — Concession unit photography" },
        { label: "RETAIL — Touring retail / multi-location photography" },
      ]}
    />
  );
}

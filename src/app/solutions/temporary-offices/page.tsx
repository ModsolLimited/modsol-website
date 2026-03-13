import type { Metadata } from "next";
import SolutionLayout from "@/components/solutions/SolutionLayout";

export const metadata: Metadata = {
  title: "Temporary Office Solutions — Modular Workspace Structures",
  description:
    "Modsol delivers professional temporary office and workspace structures for construction sites, film productions, and interim operations.",
};

export default function TemporaryOfficeSolutionsPage() {
  return (
    <SolutionLayout
      label="Solutions / Temporary Offices"
      title="Temporary Office Solutions"
      subtitle="Professional modular workspace structures that work as hard as the people inside them — for construction sites, film productions, and interim operations."
      heroImageLabel="TEMPORARY OFFICE HERO — Replace with temporary office or on-site workspace photography"
      intro="A temporary office should never feel temporary. Modsol's workspace structures combine the speed and flexibility of modular construction with the finish quality of a permanent fit-out — delivering professional environments wherever your operation demands them."
      capabilities={[
        {
          title: "Construction Site Offices",
          description: "Professional on-site office structures — meeting rooms, project offices, welfare facilities — built to last the duration of any construction project.",
        },
        {
          title: "Film & Production Offices",
          description: "On-location production office, green room, and base camp structures — installed and struck around your production schedule.",
        },
        {
          title: "Interim Corporate Offices",
          description: "Full-specification temporary corporate office environments for business relocation, renovation periods, and expansion phases.",
        },
        {
          title: "Multi-Zone Workspace",
          description: "Open-plan areas, private offices, meeting rooms, and welfare spaces — all configurable within a single Modframe structural chassis.",
        },
        {
          title: "Welfare & Welfare Facilities",
          description: "Compliant welfare facilities — canteens, changing rooms, locker rooms, and first aid rooms — built to CDM and HSE requirements.",
        },
        {
          title: "Secure Storage",
          description: "Integrated secure storage and plant room structures built to the same specification as the office environment.",
        },
      ]}
      systems={["The Modframe (SYS-03)", "The Modwall (SYS-02)", "The Modblock (SYS-01)"]}
      galleryImages={[
        { label: "TEMP OFFICE — Construction site office photography" },
        { label: "TEMP OFFICE — Interior workspace photography" },
        { label: "TEMP OFFICE — Meeting room photography" },
        { label: "TEMP OFFICE — Film production base camp photography" },
        { label: "TEMP OFFICE — Welfare facility photography" },
        { label: "TEMP OFFICE — Multi-unit site compound photography" },
      ]}
    />
  );
}

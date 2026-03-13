import type { Metadata } from "next";
import HeroSection from "@/components/sections/HeroSection";
import TickerBar from "@/components/sections/TickerBar";
import PlatformSection from "@/components/sections/PlatformSection";
import ProductsSection from "@/components/sections/ProductsSection";
import IndustriesSection from "@/components/sections/IndustriesSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import BrandStatement from "@/components/sections/BrandStatement";
import KnowledgePreview from "@/components/sections/KnowledgePreview";
import ContactCTA from "@/components/sections/ContactCTA";

export const metadata: Metadata = {
  title: "Modsol Limited — Modular Architecture Systems | BUILD. BOLD.",
  description:
    "Modsol designs and manufactures precision modular systems for temporary architecture, events, exhibitions, branded environments and commercial spaces.",
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TickerBar />
      <PlatformSection />
      <ProductsSection />
      <IndustriesSection />
      <ProjectsSection />
      <BrandStatement />
      <KnowledgePreview />
      <ContactCTA />
    </>
  );
}

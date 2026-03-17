import type { Metadata } from "next";
import HeroSection from "@/components/sections/HeroSection";
import TickerBar from "@/components/sections/TickerBar";
import PlatformSection from "@/components/sections/PlatformSection";
import ProductsSection from "@/components/sections/ProductsSection";
import IndustriesSection from "@/components/sections/IndustriesSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import BrandStatement from "@/components/sections/BrandStatement";
import ContactCTA from "@/components/sections/ContactCTA";

export const metadata: Metadata = {
  title: "Modsol Limited — Build. Bold. Modular Systems for Temporary Architecture.",
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TickerBar />
      <div className="y-line" />
      <PlatformSection />
      <div className="y-line" />
      <ProductsSection />
      <IndustriesSection />
      <ProjectsSection />
      <BrandStatement />
      <ContactCTA />
    </>
  );
}

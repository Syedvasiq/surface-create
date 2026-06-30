import type { Metadata } from "next";
import HeroSlider from "@/components/HeroSlider";
import ArtOfHarmony from "@/components/ArtOfHarmony";
import AboutUs from "@/components/AboutUs";
import IntegratedSystems from "@/components/IntegratedSystems";
import ServicesSection from "@/components/ServicesSection";
import IndoorOutdoorServices from "@/components/IndoorOutdoorServices";
import RenovationBeforeAfter from "@/components/RenovationBeforeAfter";
import ProjectStartCTA from "@/components/ProjectStartCTA";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Welcome to Surface Create — premium creative surfaces, designs, and materials for your next project.",
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return (
    <main className="flex flex-1 flex-col">
      <HeroSlider />
      <ArtOfHarmony />
      <AboutUs />
      <IntegratedSystems />
      <ServicesSection />
      <IndoorOutdoorServices />
      <RenovationBeforeAfter />
      <ProjectStartCTA />
    </main>
  );
}

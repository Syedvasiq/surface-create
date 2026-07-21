import type { Metadata } from "next";
import TerraeCalceHero from "@/components/terrae-calce/TerraeCalceHero";
import TerraeCalceContinuousSpace from "@/components/terrae-calce/TerraeCalceContinuousSpace";
import TerraeCalceGallery from "@/components/terrae-calce/TerraeCalceGallery";
import TerraeCalceDesignSections from "@/components/terrae-calce/TerraeCalceDesignSections";
import TerraeCalceFeatures from "@/components/terrae-calce/TerraeCalceFeatures";
import TerraeCalceBenefits from "@/components/terrae-calce/TerraeCalceBenefits";
import TerraeCalceHow from "@/components/terrae-calce/TerraeCalceHow";
import ProjectStartCTA from "@/components/ProjectStartCTA";

export const metadata: Metadata = {
  title: "Terrae-Calce",
  description: "Terrae-Calce by Surface Crete — natural lime wall finishes with breathable, antibacterial and sustainable properties.",
  alternates: { canonical: "/walls/terrae-calce" },
};

export default function TerraeCalcePage() {
  return (
    <main className="flex flex-1 flex-col">
      <TerraeCalceHero />
      <TerraeCalceContinuousSpace />
      <TerraeCalceGallery />
      <TerraeCalceDesignSections />
      <TerraeCalceFeatures />
      <TerraeCalceBenefits />
      <TerraeCalceHow />
      <ProjectStartCTA />
    </main>
  );
}

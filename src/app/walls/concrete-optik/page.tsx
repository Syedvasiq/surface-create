import type { Metadata } from "next";
import ConcreteOptikHero from "@/components/concrete-optik/ConcreteOptikHero";
import ConcreteOptikContinuousSpace from "@/components/concrete-optik/ConcreteOptikContinuousSpace";
import ConcreteOptikGallery from "@/components/concrete-optik/ConcreteOptikGallery";
import ConcreteOptikDesignSections from "@/components/concrete-optik/ConcreteOptikDesignSections";
import ConcreteOptikFeatures from "@/components/concrete-optik/ConcreteOptikFeatures";
import ConcreteOptikBenefits from "@/components/concrete-optik/ConcreteOptikBenefits";
import ConcreteOptikHow from "@/components/concrete-optik/ConcreteOptikHow";
import ProjectStartCTA from "@/components/ProjectStartCTA";

export const metadata: Metadata = {
  title: "Concrete Optik",
  description: "Concrete Optik by Surface Crete — recreate the brutalism of fair-faced concrete in just 2 mm thickness.",
  alternates: { canonical: "/walls/concrete-optik" },
};

export default function ConcreteOptikPage() {
  return (
    <main className="flex flex-1 flex-col">
      <ConcreteOptikHero />
      <ConcreteOptikContinuousSpace />
      <ConcreteOptikGallery />
      <ConcreteOptikDesignSections />
      <ConcreteOptikFeatures />
      <ConcreteOptikBenefits />
      <ConcreteOptikHow />
      <ProjectStartCTA />
    </main>
  );
}

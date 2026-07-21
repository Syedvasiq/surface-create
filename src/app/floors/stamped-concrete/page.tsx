import type { Metadata } from "next";
import StampedConcreteHero from "@/components/stamped-concrete/StampedConcreteHero";
import StampedConcreteContinuousSpace from "@/components/stamped-concrete/StampedConcreteContinuousSpace";
import StampedConcreteGallery from "@/components/stamped-concrete/StampedConcreteGallery";
import StampedConcreteDesignSections from "@/components/stamped-concrete/StampedConcreteDesignSections";
import StampedConcreteFeatures from "@/components/stamped-concrete/StampedConcreteFeatures";
import StampedConcreteBenefits from "@/components/stamped-concrete/StampedConcreteBenefits";
import StampedConcreteHow from "@/components/stamped-concrete/StampedConcreteHow";
import StampedConcreteFAQ from "@/components/stamped-concrete/StampedConcreteFAQ";
import ProjectStartCTA from "@/components/ProjectStartCTA";

export const metadata: Metadata = {
  title: "Stamped Concrete",
  description:
    "Stamped Concrete by Surface Crete — concrete transformed into an attractive surface replicating natural stone, brick and wood. Competitive price, exceptional speed.",
  alternates: { canonical: "/floors/stamped-concrete" },
};

export default function StampedConcretePage() {
  return (
    <main className="flex flex-1 flex-col">
      <StampedConcreteHero />
      <StampedConcreteContinuousSpace />
      <StampedConcreteGallery />
      <StampedConcreteDesignSections />
      <StampedConcreteFeatures />
      <StampedConcreteBenefits />
      <StampedConcreteHow />
      <StampedConcreteFAQ />
      <ProjectStartCTA />
    </main>
  );
}

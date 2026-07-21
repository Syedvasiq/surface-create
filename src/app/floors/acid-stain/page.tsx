import type { Metadata } from "next";
import AcidStainHero from "@/components/acid-stain/AcidStainHero";
import AcidStainContinuousSpace from "@/components/acid-stain/AcidStainContinuousSpace";
import AcidStainGallery from "@/components/acid-stain/AcidStainGallery";
import AcidStainDesignSections from "@/components/acid-stain/AcidStainDesignSections";
import AcidStainFeatures from "@/components/acid-stain/AcidStainFeatures";
import AcidStainBenefits from "@/components/acid-stain/AcidStainBenefits";
import AcidStainHow from "@/components/acid-stain/AcidStainHow";
import AcidStainFAQ from "@/components/acid-stain/AcidStainFAQ";
import ProjectStartCTA from "@/components/ProjectStartCTA";

export const metadata: Metadata = {
  title: "Acid-Stain",
  description:
    "Acid-Stain by Surface Crete — unique and permanent variegated effects on concrete. Every surface is one of a kind, impossible to duplicate.",
  alternates: { canonical: "/floors/acid-stain" },
};

export default function AcidStainPage() {
  return (
    <main className="flex flex-1 flex-col">
      <AcidStainHero />
      <AcidStainContinuousSpace />
      <AcidStainGallery />
      <AcidStainDesignSections />
      <AcidStainFeatures />
      <AcidStainBenefits />
      <AcidStainHow />
      <AcidStainFAQ />
      <ProjectStartCTA />
    </main>
  );
}

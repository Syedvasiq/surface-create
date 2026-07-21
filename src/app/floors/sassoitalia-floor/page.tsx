import type { Metadata } from "next";
import SassoitaliaHero from "@/components/sassoitalia-floor/SassoitaliaHero";
import SassoitaliaContinuousSpace from "@/components/sassoitalia-floor/SassoitaliaContinuousSpace";
import SassoitaliaGallery from "@/components/sassoitalia-floor/SassoitaliaGallery";
import SassoitaliaDesignSections from "@/components/sassoitalia-floor/SassoitaliaDesignSections";
import SassoitaliaFeatures from "@/components/sassoitalia-floor/SassoitaliaFeatures";
import SassoitaliaBenefits from "@/components/sassoitalia-floor/SassoitaliaBenefits";
import SassoitaliaHow from "@/components/sassoitalia-floor/SassoitaliaHow";
import SassoitaliaFAQ from "@/components/sassoitalia-floor/SassoitaliaFAQ";
import ProjectStartCTA from "@/components/ProjectStartCTA";

export const metadata: Metadata = {
  title: "Sassoitalia Floor",
  description:
    "Sassoitalia Floor by Surface Crete — a natural system for creating beautiful hard landscaping using colourful natural aggregates. Quick, economical and durable.",
  alternates: { canonical: "/floors/sassoitalia-floor" },
};

export default function SassoitaliaFloorPage() {
  return (
    <main className="flex flex-1 flex-col">
      <SassoitaliaHero />
      <SassoitaliaContinuousSpace />
      <SassoitaliaGallery />
      <SassoitaliaDesignSections />
      <SassoitaliaFeatures />
      <SassoitaliaBenefits />
      <SassoitaliaHow />
      <SassoitaliaFAQ />
      <ProjectStartCTA />
    </main>
  );
}

import type { Metadata } from "next";
import LixioPlusHero from "@/components/lixio-plus/LixioPlusHero";
import LixioPlusContinuousSpace from "@/components/lixio-plus/LixioPlusContinuousSpace";
import LixioPlusGallery from "@/components/lixio-plus/LixioPlusGallery";
import LixioPlusWhyChoose from "@/components/lixio-plus/LixioPlusWhyChoose";
import LixioPlusFeatures from "@/components/lixio-plus/LixioPlusFeatures";
import LixioPlusBenefits from "@/components/lixio-plus/LixioPlusBenefits";
import LixioPlusHow from "@/components/lixio-plus/LixioPlusHow";
import ProjectStartCTA from "@/components/ProjectStartCTA";

export const metadata: Metadata = {
  title: "Lixio+",
  description:
    "Lixio+ by Surface Crete — a new version of Lixio that reproduces the iconic terrazzo floor with larger aggregates and endless marble combinations.",
  alternates: { canonical: "/floors/lixio-plus" },
};

export default function LixioPlusPage() {
  return (
    <main className="flex flex-1 flex-col">
      <LixioPlusHero />
      <LixioPlusContinuousSpace />
      <LixioPlusGallery />
      <LixioPlusWhyChoose />
      <LixioPlusFeatures />
      <LixioPlusBenefits />
      <LixioPlusHow />
      <ProjectStartCTA />
    </main>
  );
}

import type { Metadata } from "next";
import PurometalloHero from "@/components/purometallo/PurometalloHero";
import PurometalloContinuousSpace from "@/components/purometallo/PurometalloContinuousSpace";
import PurometalloGallery from "@/components/purometallo/PurometalloGallery";
import PurometalloDesignSections from "@/components/purometallo/PurometalloDesignSections";
import PurometalloBenefits from "@/components/purometallo/PurometalloBenefits";
import PurometalloHow from "@/components/purometallo/PurometalloHow";
import PurometalloFeatures from "@/components/purometallo/PurometalloFeatures";
import ProjectStartCTA from "@/components/ProjectStartCTA";

export const metadata: Metadata = {
  title: "Purometallo — Decorative Metal Coatings for Walls & Furniture",
  description: "Purometallo is an exclusive line of decorative metal powder-based coatings. Turn any surface into a noble metal with tactile, foil or iron oxide effects.",
  alternates: { canonical: "/walls/purometallo" },
};

export default function PurometalloPage() {
  return (
    <main className="flex flex-1 flex-col bg-white">
      <PurometalloHero />
      <PurometalloContinuousSpace />
      <PurometalloGallery />
      <PurometalloDesignSections />
      <PurometalloFeatures />
      <PurometalloBenefits />
      <PurometalloHow />
      <ProjectStartCTA />
    </main>
  );
}

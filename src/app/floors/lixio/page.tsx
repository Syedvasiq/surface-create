import type { Metadata } from "next";
import LixioHero from "@/components/lixio/LixioHero";
import LixioContinuousSpace from "@/components/lixio/LixioContinuousSpace";
import LixioGallery from "@/components/lixio/LixioGallery";
import LixioFeatures from "@/components/lixio/LixioFeatures";
import LixioBenefits from "@/components/lixio/LixioBenefits";
import LixioHow from "@/components/lixio/LixioHow";
import ProjectStartCTA from "@/components/ProjectStartCTA";

export const metadata: Metadata = {
  title: "Lixio",
  description:
    "Lixio by Surface Crete — a premium polished concrete floor with a refined stone-like finish. Seamless, durable and endlessly customisable.",
  alternates: { canonical: "/floors/lixio" },
};

export default function LixioPage() {
  return (
    <main className="flex flex-1 flex-col">
      <LixioHero />
      <LixioContinuousSpace />
      <LixioGallery />
      <LixioFeatures />
      <LixioBenefits />
      <LixioHow />
      <ProjectStartCTA />
    </main>
  );
}

import type { Metadata } from "next";
import RasicoHero from "@/components/rasico/RasicoHero";
import RasicoContinuousSpace from "@/components/rasico/RasicoContinuousSpace";
import RasicoGallery from "@/components/rasico/RasicoGallery";
import RasicoDesignSections from "@/components/rasico/RasicoDesignSections";
import RasicoFeatures from "@/components/rasico/RasicoFeatures";
import RasicoBenefits from "@/components/rasico/RasicoBenefits";
import RasicoHow from "@/components/rasico/RasicoHow";
import RasicoFAQ from "@/components/rasico/RasicoFAQ";
import ProjectStartCTA from "@/components/ProjectStartCTA";

export const metadata: Metadata = {
  title: "Rasico",
  description:
    "Rasico by Surface Crete — a cement-based decorative coating for exterior areas. High wear resistance with just 3-4 mm thickness, perfect for terraces and balconies.",
  alternates: { canonical: "/floors/rasico" },
};

export default function RasicoPage() {
  return (
    <main className="flex flex-1 flex-col">
      <RasicoHero />
      <RasicoContinuousSpace />
      <RasicoGallery />
      <RasicoDesignSections />
      <RasicoFeatures />
      <RasicoBenefits />
      <RasicoHow />
      <RasicoFAQ />
      <ProjectStartCTA />
    </main>
  );
}

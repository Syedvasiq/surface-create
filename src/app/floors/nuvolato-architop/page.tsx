import type { Metadata } from "next";
import NuvolatoHero from "@/components/nuvolato/NuvolatoHero";
import NuvolatoContinuousSpace from "@/components/nuvolato/NuvolatoContinuousSpace";
import NuvolatoGallery from "@/components/nuvolato/NuvolatoGallery";
import NuvolatoFeatures from "@/components/nuvolato/NuvolatoFeatures";
import NuvolatoBenefits from "@/components/nuvolato/NuvolatoBenefits";
import NuvolatoHow from "@/components/nuvolato/NuvolatoHow";
import NuvolatoFAQ from "@/components/nuvolato/NuvolatoFAQ";
import ProjectStartCTA from "@/components/ProjectStartCTA";

export const metadata: Metadata = {
  title: "Nuvolato Architop",
  description:
    "Nuvolato Architop by Surface Crete — a seamless cloud-effect decorative concrete surface for floors and walls. Timeless aesthetics with exceptional durability.",
  alternates: { canonical: "/floors/nuvolato-architop" },
};

export default function NuvolatoArchitopPage() {
  return (
    <main className="flex flex-1 flex-col">
      <NuvolatoHero />
      <NuvolatoContinuousSpace />
      <NuvolatoGallery />
      <NuvolatoFeatures />
      <NuvolatoBenefits />
      <NuvolatoHow />
      <NuvolatoFAQ />
      <ProjectStartCTA />
    </main>
  );
}

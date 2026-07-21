import type { Metadata } from "next";
import StenciltopHero from "@/components/stenciltop-floor/StenciltopHero";
import StenciltopContinuousSpace from "@/components/stenciltop-floor/StenciltopContinuousSpace";
import StenciltopGallery from "@/components/stenciltop-floor/StenciltopGallery";
import StenciltopFeatures from "@/components/stenciltop-floor/StenciltopFeatures";
import StenciltopBenefits from "@/components/stenciltop-floor/StenciltopBenefits";
import StenciltopHow from "@/components/stenciltop-floor/StenciltopHow";
import StenciltopFAQ from "@/components/stenciltop-floor/StenciltopFAQ";
import ProjectStartCTA from "@/components/ProjectStartCTA";

export const metadata: Metadata = {
  title: "Stenciltop Floor",
  description:
    "Stenciltop Floor by Surface Crete — renew existing concrete with new colours, patterns and textures. Easily, quickly and with minimum disruption.",
  alternates: { canonical: "/floors/stenciltop-floor" },
};

export default function StenciltopFloorPage() {
  return (
    <main className="flex flex-1 flex-col">
      <StenciltopHero />
      <StenciltopContinuousSpace />
      <StenciltopGallery />
      <StenciltopFeatures />
      <StenciltopBenefits />
      <StenciltopHow />
      <StenciltopFAQ />
      <ProjectStartCTA />
    </main>
  );
}

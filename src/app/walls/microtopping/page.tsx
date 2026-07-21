import type { Metadata } from "next";
import WallMicrotoppingHero from "@/components/wall-microtopping/WallMicrotoppingHero";
import WallMicrotoppingContinuousSpace from "@/components/wall-microtopping/WallMicrotoppingContinuousSpace";
import WallMicrotoppingGallery from "@/components/wall-microtopping/WallMicrotoppingGallery";
import WallMicrotoppingDesignSections from "@/components/wall-microtopping/WallMicrotoppingDesignSections";
import WallMicrotoppingFeatures from "@/components/wall-microtopping/WallMicrotoppingFeatures";
import WallMicrotoppingBenefits from "@/components/wall-microtopping/WallMicrotoppingBenefits";
import WallMicrotoppingHow from "@/components/wall-microtopping/WallMicrotoppingHow";
import WallMicrotoppingFAQ from "@/components/wall-microtopping/WallMicrotoppingFAQ";
import ProjectStartCTA from "@/components/ProjectStartCTA";

export const metadata: Metadata = {
  title: "Microtopping for Walls",
  description:
    "Microtopping by Surface Crete for walls and vertical surfaces — an innovative decorative surface material that renews every surface with just 3 millimetres.",
  alternates: { canonical: "/walls/microtopping" },
};

export default function WallMicrotoppingPage() {
  return (
    <main className="flex flex-1 flex-col">
      <WallMicrotoppingHero />
      <WallMicrotoppingContinuousSpace />
      <WallMicrotoppingGallery />
      <WallMicrotoppingDesignSections />
      <WallMicrotoppingFeatures />
      <WallMicrotoppingBenefits />
      <WallMicrotoppingHow />
      <WallMicrotoppingFAQ />
      <ProjectStartCTA />
    </main>
  );
}
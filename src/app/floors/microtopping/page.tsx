import type { Metadata } from "next";
import MicrotoppingHero from "@/components/microtopping/MicrotoppingHero";
import MicrotoppingContinuousSpace from "@/components/microtopping/MicrotoppingContinuousSpace";
import MicrotoppingGallery from "@/components/microtopping/MicrotoppingGallery";
import MicrotoppingFeatures from "@/components/microtopping/MicrotoppingFeatures";
import MicrotoppingBenefits from "@/components/microtopping/MicrotoppingBenefits";
import MicrotoppingHow from "@/components/microtopping/MicrotoppingHow";
import MicrotoppingFAQ from "@/components/microtopping/MicrotoppingFAQ";
import ProjectStartCTA from "@/components/ProjectStartCTA";

export const metadata: Metadata = {
  title: "Microtopping",
  description:
    "Microtopping by Surface Crete — an innovative decorative surface material for interiors and exteriors. Renews every surface with just 3 millimetres.",
  alternates: { canonical: "/floors/microtopping" },
};

export default function MicrotoppingPage() {
  return (
    <main className="flex flex-1 flex-col">
      <MicrotoppingHero />
      <MicrotoppingContinuousSpace />
      <MicrotoppingGallery />
      <MicrotoppingFeatures />
      <MicrotoppingBenefits />
      <MicrotoppingHow />
      <MicrotoppingFAQ />
      <ProjectStartCTA />
    </main>
  );
}

import SolidroHero from "@/components/solidro/SolidroHero";
import SolidroContinuousSpace from "@/components/solidro/SolidroContinuousSpace";
import SolidroGallery from "@/components/solidro/SolidroGallery";
import SolidroDesignSections from "@/components/solidro/SolidroDesignSections";
import SolidroFeatures from "@/components/solidro/SolidroFeatures";
import SolidroBenefits from "@/components/solidro/SolidroBenefits";
import SolidroHow from "@/components/solidro/SolidroHow";
import SolidroFAQ from "@/components/solidro/SolidroFAQ";
import ProjectStartCTA from "@/components/ProjectStartCTA";

export default function SolidroPage() {
  return (
    <main>
      <SolidroHero />
      <SolidroContinuousSpace />
      <SolidroGallery />
      <SolidroDesignSections />
      <SolidroFeatures />
      <SolidroBenefits />
      <SolidroHow />
      <SolidroFAQ />
      <ProjectStartCTA />
    </main>
  );
}
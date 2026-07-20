"use client";

import { useRef, useState } from "react";

type Swatch = { name: string; tone: string };

const colourFamilies: { name: string; code: string; swatches: Swatch[] }[] = [
  {
    name: "Yellow",
    code: "Y",
    swatches: [
      ["WHITE 28g", "#ebe9df"], ["TORTORA 14g", "#c8c2b4"], ["OLIVE GREY 28g", "#9b9885"], ["OLIVE GREY 75g", "#6e6d61"],
      ["OCCHIALINO 70g", "#9a8a62"], ["ARDESIA 35g", "#74736d"], ["ARDESIA 45g", "#555954"], ["PIETRA 100g", "#78736a"],
      ["SIGARO 125g", "#635647"], ["OCRA 85g", "#b18a3e"], ["YELLOW 56g", "#d0aa3d"], ["YELLOW 28g", "#dbcb7e"],
      ["IVORY 28g", "#ded7b7"], ["IVORY 14g", "#eee7ce"],
    ].map(([name, tone]) => ({ name, tone })),
  },
  {
    name: "Orange",
    code: "O",
    swatches: [
      ["BEIGE GREY 14g", "#c4b7a7"], ["BEIGE GREY 28g", "#a99884"], ["CHOCOLATE 28g", "#765e4b"], ["CHOCOLATE 56g", "#594337"],
      ["CHARCOAL 42g", "#45413c"], ["CHARCOAL 70g", "#2d302e"], ["FOSSILE 100g", "#706a5d"], ["CACAO 130g", "#4b3429"],
      ["CACAO 80g", "#735443"], ["CANNELLA 100g", "#a86d42"], ["TERRACOTTA 56g", "#b65c3e"], ["MAPLEWOOD 56g", "#bd855b"],
      ["BEIGE 56g", "#c5a67c"], ["BEIGE 28g", "#dfc9a7"],
    ].map(([name, tone]) => ({ name, tone })),
  },
  {
    name: "Red",
    code: "R",
    swatches: [
      ["LAVANDA 14g", "#d5cbd0"], ["LAVANDA 56g", "#987f8b"], ["BROWN 28g", "#836b5d"], ["BEIGE GREY 56g", "#938277"],
      ["BROWN 56g", "#5f4a40"], ["BROWN 84g", "#463530"], ["BRUNO 50g", "#6a4939"], ["BRUNO 80g", "#4a3029"],
      ["MOKA 140g", "#342923"], ["RUGGINE 100g", "#8b4d3b"], ["ROSSO MATTONE 112g", "#9c493b"], ["ROSSO MATTONE 56g", "#b7644f"],
      ["ROSE 56g", "#be8b8a"], ["ROSE 28g", "#e0b9b5"],
    ].map(([name, tone]) => ({ name, tone })),
  },
  {
    name: "Blue",
    code: "B",
    swatches: [
      ["SILVER GREY 56g", "#adb1b0"], ["SMOKE 14g", "#b2b4b1"], ["SMOKE 28g", "#8e9291"], ["SMOKE 56g", "#696e6d"],
      ["GRAFITE 11g", "#565a5a"], ["GRAFITE 14g", "#45494a"], ["GRAFITE 28g", "#363b3e"], ["GRAFITE 56g", "#262c2f"],
      ["BLACK 56g", "#202224"], ["OCEANO 150g", "#1d4e5f"], ["BLUE 56g", "#3b6074"], ["BLUE 28g", "#6b93a5"],
      ["SKY BLUE 56g", "#77a8bd"], ["PALE BLUE 56g", "#b5d0d7"],
    ].map(([name, tone]) => ({ name, tone })),
  },
  {
    name: "Green",
    code: "G",
    swatches: [
      ["MARINE 14g", "#7d9892"], ["MARINE 28g", "#52756f"], ["MARINE 56g", "#315b57"], ["ARGILLA 8.5g", "#b9aa8b"],
      ["ARGILLA 18g", "#958464"], ["ARGILLA 28g", "#756544"], ["ARGILLA 56g", "#574c32"], ["MUSCHIO 140g + BLACK 10g", "#4c5740"],
      ["MUSCHIO 150g", "#5e6943"], ["FORESTA 150g", "#354d3a"], ["PRATO 100g", "#688445"], ["PISTACCHIO 30g", "#a7b56d"],
      ["PISTACCHIO 15g", "#c8d28f"], ["ACQUA MARINA 56g", "#66aaa0"],
    ].map(([name, tone]) => ({ name, tone })),
  },
];

export default function MicrotoppingFeatures() {
  const [finish, setFinish] = useState<"FC" | "HP">("FC");
  const sliderRefs = useRef<(HTMLDivElement | null)[]>([]);
  const productPrefix = finish === "FC" ? "MF" : "MH";

  const scrollFamily = (index: number, direction: 1 | -1) => {
    sliderRefs.current[index]?.scrollBy({ left: direction * 520, behavior: "smooth" });
  };

  return (
    <section className="bg-[#f0ece6] px-6 py-16 sm:px-10 lg:px-12 lg:py-24 md:mx-[15px] md:[width:calc(100%-30px)] mt-[15px]">
      <div>
        <p className="max-w-3xl text-[18px] leading-[1.55] text-[#1d2830] sm:text-[21px]">
          The Microtopping range includes 70 colours and 2 different finishes (FC and HP). Microtopping® uses Color Pack-C dyes.
        </p>

        <div className="mt-12 flex flex-col gap-8 border-t border-[#1d2830]/25 pt-7 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[#5d686b]">Choose your finish</p>
            <div className="mt-4 flex gap-6">
              {(["FC", "HP"] as const).map((option) => (
                <button
                  key={option}
                  type="button"
                  onClick={() => setFinish(option)}
                  className={`border-b pb-2 text-left text-lg transition-colors ${finish === option ? "border-[#1d2830] font-semibold text-[#1d2830]" : "border-transparent text-[#657075] hover:text-[#1d2830]"}`}
                  aria-pressed={finish === option}
                >
                  {option === "FC" ? "Finish Coat – FC" : "High Performance – HP"}
                </button>
              ))}
            </div>
          </div>
          <p className="text-sm leading-relaxed text-[#5d686b]">Explore the five Microtopping colour families below.</p>
        </div>

        <div className="mt-12 space-y-14 lg:space-y-20">
          {colourFamilies.map((family, familyIndex) => (
            <section key={family.code} className="border-t border-[#1d2830]/25 pt-5">
              <div className="flex items-end justify-between gap-5">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#5d686b]">
                    {finish === "FC" ? "Finish Coat" : "High Performance"}
                  </p>
                  <h2 className="mt-1 text-[30px] font-light text-[#1d2830] sm:text-[36px]">{family.name}</h2>
                </div>
                <div className="flex gap-2">
                  <button type="button" onClick={() => scrollFamily(familyIndex, -1)} className="grid h-9 w-9 place-items-center border border-[#1d2830]/40 text-lg text-[#1d2830] transition-colors hover:bg-[#1d2830] hover:text-white" aria-label={`Show previous ${family.name} colours`}>←</button>
                  <button type="button" onClick={() => scrollFamily(familyIndex, 1)} className="grid h-9 w-9 place-items-center border border-[#1d2830]/40 text-lg text-[#1d2830] transition-colors hover:bg-[#1d2830] hover:text-white" aria-label={`Show next ${family.name} colours`}>→</button>
                </div>
              </div>

              <div ref={(element) => { sliderRefs.current[familyIndex] = element; }} className="mt-5 flex snap-x snap-mandatory gap-3 overflow-x-auto pb-3 scrollbar-hide">
                {family.swatches.map((swatch, swatchIndex) => (
                  <article key={`${familyIndex}-${swatchIndex}`} className="group w-[152px] shrink-0 snap-start overflow-hidden bg-white sm:w-[168px]">
                    <div className="aspect-[1.35/1] transition-transform duration-300 group-hover:scale-[1.03]" style={{ backgroundColor: swatch.tone }} />
                    <div className="min-h-[74px] p-3">
                      <p className="text-xs font-semibold text-[#1d2830]">{productPrefix}-{family.code}{swatchIndex + 1}</p>
                      <p className="mt-1 text-xs leading-snug text-[#596267]">{swatch.name}</p>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </section>
  );
}

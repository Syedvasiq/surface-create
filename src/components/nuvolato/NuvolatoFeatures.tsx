"use client";

import { useRef, useState } from "react";

type Swatch = { name: string; tone: string };

const colourFamilies: { name: string; code: string; swatches: Swatch[] }[] = [
  {
    name: "Neutral",
    code: "N",
    swatches: [
      ["WHITE", "#ebe9df"], ["LIGHT GREY", "#c8c2b4"], ["WARM GREY", "#9b9885"], ["STONE GREY", "#6e6d61"],
      ["TAUPE", "#9a8a62"], ["SLATE", "#74736d"], ["DARK SLATE", "#555954"], ["PIETRA", "#78736a"],
      ["TOBACCO", "#635647"], ["SAND", "#b18a3e"], ["IVORY", "#d0aa3d"], ["CREAM", "#dbcb7e"],
      ["LINEN", "#ded7b7"], ["PEARL", "#eee7ce"],
    ].map(([name, tone]) => ({ name, tone })),
  },
  {
    name: "Earth",
    code: "E",
    swatches: [
      ["BEIGE", "#c4b7a7"], ["WARM BEIGE", "#a99884"], ["CHOCOLATE", "#765e4b"], ["DARK CHOCOLATE", "#594337"],
      ["CHARCOAL", "#45413c"], ["DARK CHARCOAL", "#2d302e"], ["FOSSIL", "#706a5d"], ["CACAO", "#4b3429"],
      ["WARM CACAO", "#735443"], ["CINNAMON", "#a86d42"], ["TERRACOTTA", "#b65c3e"], ["MAPLE", "#bd855b"],
      ["LIGHT BEIGE", "#c5a67c"], ["PALE BEIGE", "#dfc9a7"],
    ].map(([name, tone]) => ({ name, tone })),
  },
  {
    name: "Stone",
    code: "S",
    swatches: [
      ["LAVENDER GREY", "#d5cbd0"], ["MAUVE", "#987f8b"], ["WARM BROWN", "#836b5d"], ["STONE BROWN", "#938277"],
      ["DARK BROWN", "#5f4a40"], ["DEEP BROWN", "#463530"], ["BRUNETTE", "#6a4939"], ["DARK BRUNETTE", "#4a3029"],
      ["MOCHA", "#342923"], ["RUST", "#8b4d3b"], ["BRICK", "#9c493b"], ["LIGHT BRICK", "#b7644f"],
      ["ROSE", "#be8b8a"], ["PALE ROSE", "#e0b9b5"],
    ].map(([name, tone]) => ({ name, tone })),
  },
  {
    name: "Cool",
    code: "C",
    swatches: [
      ["SILVER", "#adb1b0"], ["LIGHT SMOKE", "#b2b4b1"], ["SMOKE", "#8e9291"], ["DARK SMOKE", "#696e6d"],
      ["GRAPHITE", "#565a5a"], ["DARK GRAPHITE", "#45494a"], ["DEEP GRAPHITE", "#363b3e"], ["CHARCOAL BLUE", "#262c2f"],
      ["BLACK", "#202224"], ["OCEAN", "#1d4e5f"], ["BLUE", "#3b6074"], ["LIGHT BLUE", "#6b93a5"],
      ["SKY", "#77a8bd"], ["PALE BLUE", "#b5d0d7"],
    ].map(([name, tone]) => ({ name, tone })),
  },
  {
    name: "Green",
    code: "G",
    swatches: [
      ["MARINE", "#7d9892"], ["DARK MARINE", "#52756f"], ["DEEP MARINE", "#315b57"], ["CLAY", "#b9aa8b"],
      ["WARM CLAY", "#958464"], ["DARK CLAY", "#756544"], ["DEEP CLAY", "#574c32"], ["MOSS", "#4c5740"],
      ["LIGHT MOSS", "#5e6943"], ["FOREST", "#354d3a"], ["MEADOW", "#688445"], ["PISTACHIO", "#a7b56d"],
      ["LIGHT PISTACHIO", "#c8d28f"], ["AQUA", "#66aaa0"],
    ].map(([name, tone]) => ({ name, tone })),
  },
];

export default function NuvolatoFeatures() {
  const [finish, setFinish] = useState<"FC" | "HP">("FC");
  const sliderRefs = useRef<(HTMLDivElement | null)[]>([]);
  const productPrefix = finish === "FC" ? "NF" : "NH";

  const scrollFamily = (index: number, direction: 1 | -1) => {
    sliderRefs.current[index]?.scrollBy({ left: direction * 520, behavior: "smooth" });
  };

  return (
    <section className="bg-[#f0ece6] px-6 py-16 sm:px-10 lg:px-12 lg:py-24 md:mx-[15px] md:[width:calc(100%-30px)] mt-[15px]">
      <div>
        <p className="max-w-3xl text-[18px] leading-[1.55] text-[#1d2830] sm:text-[21px]">
          The Nuvolato Architop range includes 70 colours and 2 different finishes (FC and HP).
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
          <p className="text-sm leading-relaxed text-[#5d686b]">Explore the five Nuvolato colour families below.</p>
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
                  <button type="button" onClick={() => scrollFamily(familyIndex, -1)} className="grid h-9 w-9 place-items-center border border-[#1d2830]/40 text-lg text-[#1d2830] transition-colors hover:bg-[#1d2830] hover:text-white" aria-label={`Previous ${family.name}`}>←</button>
                  <button type="button" onClick={() => scrollFamily(familyIndex, 1)} className="grid h-9 w-9 place-items-center border border-[#1d2830]/40 text-lg text-[#1d2830] transition-colors hover:bg-[#1d2830] hover:text-white" aria-label={`Next ${family.name}`}>→</button>
                </div>
              </div>

              <div ref={(el) => { sliderRefs.current[familyIndex] = el; }} className="mt-5 flex snap-x snap-mandatory gap-3 overflow-x-auto pb-3 scrollbar-hide">
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

"use client";

import { useRef, useState, useEffect } from "react";

type Swatch = { code: string; name: string; tone: string };

const colourFamilies: { name: string; swatches: Swatch[] }[] = [
  {
    name: "Yellow",
    swatches: [
      ["AR-Y10", "NEUTRO", "#e4e1d7"], ["AR-Y20", "NEUTRO + TORTORA 28g", "#c5beb0"], ["AR-Y30", "NEUTRO + ARDESIA 28g", "#85867f"],
      ["AR-Y40", "PEWTER + ARDESIA 28g", "#5d615f"], ["AR-Y50", "NEUTRO + OCRA 56g", "#ad8a40"], ["AR-Y60", "NEUTRO + CAPPUCCINO 28g", "#9e7d5d"],
    ].map(([code, name, tone]) => ({ code, name, tone })),
  },
  {
    name: "Orange",
    swatches: [
      ["AR-O10", "NEUTRO + CHOCOLATE 28g", "#745c4c"], ["AR-O20", "NEUTRO + CHARCOAL 56g", "#41413d"], ["AR-O30", "NEUTRO + CANNELLA 56g", "#aa7048"],
      ["AR-O40", "NEUTRO + MAPPLEWOOD 28g", "#bd8a63"], ["AR-O50", "NEUTRO + BEIGE 28g", "#d2b896"],
    ].map(([code, name, tone]) => ({ code, name, tone })),
  },
  {
    name: "Red",
    swatches: [
      ["AR-R10", "NEUTRO + BROWN 28g", "#7e665a"], ["AR-R20", "NEUTRO + BROWN 56g", "#59483f"],
      ["AR-R30", "NEUTRO + ROSSO MATTONE 56g", "#a75542"], ["AR-R40", "NEUTRO + ROSSO MATTONE 28g", "#c07562"],
    ].map(([code, name, tone]) => ({ code, name, tone })),
  },
  {
    name: "Blue",
    swatches: [
      ["AR-B10", "NEUTRO + SMOKE 28g", "#8d9292"], ["AR-B20", "NEUTRO + GRAFITE 28g", "#4b5253"], ["AR-B30", "PEWTER + BLACK 28g", "#2f3638"],
      ["AR-B40", "NEUTRO + BLUE 28g + OCEANO 56g", "#315f70"], ["AR-B50", "NEUTRO + OCEANO 56g", "#3c7c85"], ["AR-B60", "NEUTRO + PALE BLUE 28g", "#b3d0d5"],
    ].map(([code, name, tone]) => ({ code, name, tone })),
  },
  {
    name: "Green",
    swatches: [
      ["AR-G10", "NEUTRO + MARINE 28g", "#557b71"], ["AR-G20", "PEWTER", "#777a72"], ["AR-G30", "PEWTER + FORESTA 56g", "#445642"],
      ["AR-G40", "PEWTER + MUSCHIO 56g", "#687152"], ["AR-G50", "NEUTRO + MUSCHIO 56g", "#7e895d"], ["AR-G60", "NEUTRO + PISTACCHIO 28g", "#b4c07b"],
    ].map(([code, name, tone]) => ({ code, name, tone })),
  },
];

export default function NuvolatoFeatures() {
  const sliderRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [overflows, setOverflows] = useState<boolean[]>(colourFamilies.map(() => true));

  useEffect(() => {
    const observers: ResizeObserver[] = [];
    sliderRefs.current.forEach((el, i) => {
      if (!el) return;
      const check = () => {
        setOverflows((prev) => {
          const next = [...prev];
          next[i] = el.scrollWidth > el.clientWidth;
          return next;
        });
      };
      check();
      const ro = new ResizeObserver(check);
      ro.observe(el);
      observers.push(ro);
    });
    return () => observers.forEach((ro) => ro.disconnect());
  }, []);

  const scrollFamily = (index: number, direction: 1 | -1) => {
    sliderRefs.current[index]?.scrollBy({ left: direction * 520, behavior: "smooth" });
  };

  return (
    <section className="mt-[15px] bg-[#f0ece6] px-6 py-16 sm:px-10 lg:px-12 lg:py-24 md:mx-[15px] md:[width:calc(100%-30px)]">
      <div className="mx-auto max-w-[1370px]">
        <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#5d686b]">The colour chart</p>
        <h2 className="mt-3 text-[32px] font-light leading-tight text-[#1d2830] sm:text-[42px]">The colours of Nuvolato Architop®</h2>
        <p className="mt-5 text-[18px] leading-[1.55] text-[#1d2830] sm:text-[21px]">Colour Hardener + Colour Pack-C</p>

        <div className="mt-14 space-y-14 lg:space-y-20">
          {colourFamilies.map((family, familyIndex) => (
            <section key={family.name} className="border-t border-[#1d2830]/25 pt-5">
              <div className="flex items-end justify-between gap-5">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#5d686b]">Nuvolato Architop</p>
                  <h3 className="mt-1 text-[30px] font-light text-[#1d2830] sm:text-[36px]">{family.name}</h3>
                </div>
                {overflows[familyIndex] && (
                  <div className="hidden md:flex gap-2">
                    <button type="button" onClick={() => scrollFamily(familyIndex, -1)} className="grid h-9 w-9 place-items-center border border-[#1d2830]/40 text-lg text-[#1d2830] transition-colors hover:bg-[#1d2830] hover:text-white" aria-label={`Show previous ${family.name} colours`}>←</button>
                    <button type="button" onClick={() => scrollFamily(familyIndex, 1)} className="grid h-9 w-9 place-items-center border border-[#1d2830]/40 text-lg text-[#1d2830] transition-colors hover:bg-[#1d2830] hover:text-white" aria-label={`Show next ${family.name} colours`}>→</button>
                  </div>
                )}
              </div>

              <div ref={(element) => { sliderRefs.current[familyIndex] = element; }} className="mt-5 flex snap-x snap-mandatory gap-3 overflow-x-auto pb-3 [scrollbar-width:thin]">
                {family.swatches.map((swatch) => (
                  <article key={swatch.code} className="group w-[178px] shrink-0 snap-start overflow-hidden bg-white sm:w-[205px]">
                    <div className="aspect-[1.35/1] transition-transform duration-300 group-hover:scale-[1.03]" style={{ backgroundColor: swatch.tone }} />
                    <div className="min-h-[74px] p-3">
                      <p className="text-xs font-semibold text-[#1d2830]">{swatch.code}</p>
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

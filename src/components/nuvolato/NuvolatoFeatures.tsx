"use client";

import Image from "next/image";
import { useRef, useState, useEffect } from "react";

type Swatch = { code: string; name: string; img: string };

const BASE = "/images/nuvolato/colours";

const colourFamilies: { name: string; swatches: Swatch[] }[] = [
  {
    name: "Yellow",
    swatches: [
      { code: "AR-Y10", name: "Neutro", img: `${BASE}/imgi_1_AR-Y10-NEUTRO_low.jpg` },
      { code: "AR-Y20", name: "Neutro + Tortora 28g", img: `${BASE}/imgi_2_AR-Y20-NEUTRO_TORTORA_28g_low.jpg` },
      { code: "AR-Y30", name: "Neutro + Ardesia 28g", img: `${BASE}/imgi_3_AR-Y30-NEUTRO_ARDESIA_28g_low.jpg` },
      { code: "AR-Y40", name: "Pewter + Ardesia 28g", img: `${BASE}/imgi_4_AR-Y40-PEWTER_ARDESIA_28g_low.jpg` },
      { code: "AR-Y50", name: "Neutro + Ocra 56g", img: `${BASE}/imgi_5_AR-Y50-NEUTRO_OCRA-56g_low.jpg` },
      { code: "AR-Y60", name: "Neutro + Cappuccino 28g", img: `${BASE}/imgi_6_AR-Y60-NEUTRO_CAPPUCCINO_28g_low.jpg` },
    ],
  },
  {
    name: "Orange",
    swatches: [
      { code: "AR-O10", name: "Neutro + Chocolate 28g", img: `${BASE}/imgi_7_AR-O10-NEUTRO_CHOCOLATE_28g_low.jpg` },
      { code: "AR-O20", name: "Neutro + Charcoal 56g", img: `${BASE}/imgi_8_AR-O20-NEUTRO_CHARCOAL_56g_low.jpg` },
      { code: "AR-O30", name: "Neutro + Cannella 56g", img: `${BASE}/imgi_9_AR-O30-NEUTRO_CANNELLA_56g_low.jpg` },
      { code: "AR-O40", name: "Neutro + Mapplewood 28g", img: `${BASE}/imgi_10_AR-O40-NEUTRO_MAPPLEWOOD_28g_low.jpg` },
      { code: "AR-O50", name: "Neutro + Beige 28g", img: `${BASE}/imgi_11_AR-O50-NEUTRO_BEIGE_28g_low.jpg` },
    ],
  },
  {
    name: "Red",
    swatches: [
      { code: "AR-R10", name: "Neutro + Brown 28g", img: `${BASE}/imgi_12_AR-R10-NEUTRO_BROWN_28g_low.jpg` },
      { code: "AR-R20", name: "Neutro + Brown 56g", img: `${BASE}/imgi_13_AR-R20-NEUTRO_BROWN_56g_low.jpg` },
      { code: "AR-R30", name: "Neutro + Rosso Mattone 56g", img: `${BASE}/imgi_14_AR-R30-NEUTRO_ROSSO-MATTONE_56g_low.jpg` },
      { code: "AR-R40", name: "Neutro + Rosso Mattone 28g", img: `${BASE}/imgi_15_AR-R40-NEUTRO_ROSSO-MATTONE-28g_low.jpg` },
    ],
  },
  {
    name: "Blue",
    swatches: [
      { code: "AR-B10", name: "Neutro + Smoke 28g", img: `${BASE}/imgi_16_AR-B10-NEUTRO_SMOKE_28g_low.jpg` },
      { code: "AR-B20", name: "Neutro + Grafite 28g", img: `${BASE}/imgi_17_AR-B20-NEUTRO_GRAFITE_28g_low.jpg` },
      { code: "AR-B30", name: "Pewter + Black 28g", img: `${BASE}/imgi_18_AR-B30-PEWTER_BLACK_28g_low.jpg` },
      { code: "AR-B40", name: "Neutro + Blue 28g + Oceano 56g", img: `${BASE}/imgi_19_AR-B40-NEUTRO_BLUE_28g_OCEANO_56g_low.jpg` },
      { code: "AR-B50", name: "Neutro + Oceano 56g", img: `${BASE}/imgi_20_AR-B50-NEUTRO_OCEANO_56g_low.jpg` },
      { code: "AR-B60", name: "Neutro + Pale Blue 28g", img: `${BASE}/imgi_21_AR-B60-NEUTRO_PALE-BLUE_28g_low.jpg` },
    ],
  },
  {
    name: "Green",
    swatches: [
      { code: "AR-G10", name: "Neutro + Marine 28g", img: `${BASE}/imgi_22_AR-G10-NEUTRO_MARINE_28g_low.jpg` },
      { code: "AR-G20", name: "Pewter", img: `${BASE}/imgi_23_AR-G20-PEWTER_low.jpg` },
      { code: "AR-G30", name: "Pewter + Foresta 56g", img: `${BASE}/imgi_24_AR-G30-PEWTER_FORESTA_56g_low.jpg` },
      { code: "AR-G40", name: "Pewter + Muschio 56g", img: `${BASE}/imgi_25_AR-G40-PEWTER_MUSCHIO_56g_low.jpg` },
      { code: "AR-G50", name: "Neutro + Muschio 56g", img: `${BASE}/imgi_26_AR-G50-NEUTRO_MUSCHIO_56g_low.jpg` },
      { code: "AR-G60", name: "Neutro + Pistacchio 28g", img: `${BASE}/imgi_27_AR-G60-NEUTRO_PISTACCHIO_28g_low.jpg` },
    ],
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
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#5d686b]">The colour chart</p>
        <h2 className="mt-3 text-[32px] font-light leading-tight text-[#1d2830] sm:text-[42px]">The colours of Nuvolato Architop</h2>
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
                    <button type="button" onClick={() => scrollFamily(familyIndex, -1)} className="grid h-9 w-9 place-items-center border border-[#1d2830]/40 text-lg text-[#1d2830] transition-colors hover:bg-[#1d2830] hover:text-white" aria-label={`Previous ${family.name}`}>←</button>
                    <button type="button" onClick={() => scrollFamily(familyIndex, 1)} className="grid h-9 w-9 place-items-center border border-[#1d2830]/40 text-lg text-[#1d2830] transition-colors hover:bg-[#1d2830] hover:text-white" aria-label={`Next ${family.name}`}>→</button>
                  </div>
                )}
              </div>

              <div ref={(el) => { sliderRefs.current[familyIndex] = el; }} className="mt-5 flex snap-x snap-mandatory gap-3 overflow-x-auto pb-3 scrollbar-hide">
                {family.swatches.map((swatch) => (
                  <article key={swatch.code} className="group w-[152px] shrink-0 snap-start overflow-hidden bg-white sm:w-[168px]">
                    <div className="relative aspect-[1.35/1] overflow-hidden">
                      <Image
                        src={swatch.img}
                        alt={swatch.code}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                        sizes="168px"
                      />
                    </div>
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

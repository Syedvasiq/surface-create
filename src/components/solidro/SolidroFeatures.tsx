"use client";

import Image from "next/image";
import { useRef, useState, useEffect } from "react";

type Swatch = { code: string; name: string; img: string };

const BASE = "/images/solidro/colours";

const colourFamilies: { name: string; swatches: Swatch[] }[] = [
  {
    name: "Yellow",
    swatches: [
      { code: "SO-Y101", name: "Tortora 1", img: `${BASE}/imgi_1_SO-Y101_TORTORA_1.jpg` },
      { code: "SO-Y10", name: "Y10", img: `${BASE}/imgi_2_SO-Y10.jpg` },
      { code: "SO-Y20", name: "Y20", img: `${BASE}/imgi_3_SO-Y20.jpg` },
      { code: "SO-Y123", name: "Occhialino 3", img: `${BASE}/imgi_4_SO-Y123_OCCHIALINO_3.jpg` },
      { code: "SO-Y131", name: "Charcoal 1", img: `${BASE}/imgi_5_SO-Y131_CHARCOAL_1.jpg` },
      { code: "SO-Y133", name: "Charcoal 3", img: `${BASE}/imgi_6_SO-Y133_CHARCOAL_3.jpg` },
      { code: "SO-Y153", name: "Ocra 3", img: `${BASE}/imgi_7_SO-Y153_OCRA_3.jpg` },
      { code: "SO-Y30", name: "Y30", img: `${BASE}/imgi_8_SO-Y30.jpg` },
      { code: "SO-Y171", name: "Ivory 1", img: `${BASE}/imgi_9_SO-Y171_IVORY_1.jpg` },
    ],
  },
  {
    name: "Orange",
    swatches: [
      { code: "SO-O101", name: "Beige Grey 1", img: `${BASE}/imgi_10_SO-O101_BEIGE-GREY_1.jpg` },
      { code: "SO-O111", name: "Chocolate 1", img: `${BASE}/imgi_11_SO-O111_CHOCOLATE_1.jpg` },
      { code: "SO-O123", name: "Fossile 3", img: `${BASE}/imgi_12_SO-O123_FOSSILE_3.jpg` },
      { code: "SO-O133", name: "Cacao 3", img: `${BASE}/imgi_13_SO-O133_CACAO_3.jpg` },
      { code: "SO-O141", name: "Cannella 1", img: `${BASE}/imgi_14_SO-O141_CANNELLA_1.jpg` },
      { code: "SO-O153", name: "Terracotta 3", img: `${BASE}/imgi_15_SO-O153_TERRACOTTA_3.jpg` },
      { code: "SO-O10", name: "O10", img: `${BASE}/imgi_16_SO-O10.jpg` },
      { code: "SO-O161", name: "Mapplewood 1", img: `${BASE}/imgi_17_SO-O161_MAPPLEWOOD_1.jpg` },
      { code: "SO-O171", name: "Beige 1", img: `${BASE}/imgi_18_SO-O171_BEIGE_1.jpg` },
    ],
  },
  {
    name: "Red",
    swatches: [
      { code: "SO-R10", name: "R10", img: `${BASE}/imgi_19_SO-R10.jpg` },
      { code: "SO-R20", name: "R20", img: `${BASE}/imgi_20_SO-R20.jpg` },
      { code: "SO-R123", name: "Moka 3", img: `${BASE}/imgi_21_SO-R123_MOKA_3.jpg` },
      { code: "SO-R143", name: "Ruggine 3", img: `${BASE}/imgi_22_SO-R143_RUGGINE_3.jpg` },
      { code: "SO-R30", name: "R30", img: `${BASE}/imgi_23_SO-R30.jpg` },
      { code: "SO-R40", name: "R40", img: `${BASE}/imgi_24_SO-R40.jpg` },
      { code: "SO-R153", name: "Rosso Mattone 3", img: `${BASE}/imgi_25_SO-R153_ROSSO-MATTONE_3.jpg` },
      { code: "SO-R50", name: "R50", img: `${BASE}/imgi_26_SO-R50.jpg` },
      { code: "SO-R60", name: "R60", img: `${BASE}/imgi_27_SO-R60.jpg` },
    ],
  },
  {
    name: "Blue",
    swatches: [
      { code: "SO-B10", name: "B10", img: `${BASE}/imgi_28_SO-B10.jpg` },
      { code: "SO-B20", name: "B20", img: `${BASE}/imgi_29_SO-B20.jpg` },
      { code: "SO-B111", name: "Smoke 1", img: `${BASE}/imgi_30_SO-B111_SMOKE_1-1.jpg` },
      { code: "SO-B30", name: "B30", img: `${BASE}/imgi_31_SO-B30.jpg` },
      { code: "SO-B40", name: "B40", img: `${BASE}/imgi_32_SO-B40.jpg` },
      { code: "SO-B50", name: "B50", img: `${BASE}/imgi_33_SO-B50.jpg` },
      { code: "SO-B60", name: "B60", img: `${BASE}/imgi_34_SO-B60.jpg` },
      { code: "SO-B70", name: "B70", img: `${BASE}/imgi_35_SO-B70.jpg` },
      { code: "SO-B80", name: "B80", img: `${BASE}/imgi_36_SO-B80.jpg` },
      { code: "SO-B90", name: "B90", img: `${BASE}/imgi_37_SO-B90.jpg` },
    ],
  },
  {
    name: "Green",
    swatches: [
      { code: "SO-G101", name: "Marine 1", img: `${BASE}/imgi_38_SO-G101_MARINE_1.jpg` },
      { code: "SO-G10", name: "G10", img: `${BASE}/imgi_39_SO-G10.jpg` },
      { code: "SO-G20", name: "G20", img: `${BASE}/imgi_40_SO-G20.jpg` },
      { code: "SO-G133", name: "Pistacchio 3", img: `${BASE}/imgi_41_SO-G133_PISTACCHIO_3.jpg` },
      { code: "SO-G123", name: "Muschio 3", img: `${BASE}/imgi_42_SO-G123_MUSCHIO_3.jpg` },
      { code: "SO-G30", name: "G30", img: `${BASE}/imgi_43_SO-G30.jpg` },
      { code: "SO-G40", name: "G40", img: `${BASE}/imgi_44_SO-G40.jpg` },
      { code: "SO-G50", name: "G50", img: `${BASE}/imgi_45_SO-G50.jpg` },
      { code: "SO-G60", name: "G60", img: `${BASE}/imgi_46_SO-G60.jpg` },
    ],
  },
];

export default function SolidroFeatures() {
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
    <section className="bg-[#f0ece6] px-6 py-16 sm:px-10 lg:px-12 lg:py-24 md:mx-[15px] md:[width:calc(100%-30px)] mt-[15px]">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#5d686b]">Valentina Collection</p>
        <h2 className="mt-3 text-[32px] font-light leading-tight text-[#1d2830] sm:text-[42px]">The colours of Solidro</h2>
        <div className="mt-12 space-y-14 lg:space-y-20">
          {colourFamilies.map((family, familyIndex) => (
            <section key={family.name} className="border-t border-[#1d2830]/25 pt-5">
              <div className="flex items-end justify-between gap-5">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#5d686b]">Solidro</p>
                  <h3 className="mt-1 text-[30px] font-light text-[#1d2830] sm:text-[36px]">{family.name}</h3>
                </div>
                {overflows[familyIndex] && (
                  <div className="hidden md:flex gap-2">
                    <button type="button" onClick={() => scrollFamily(familyIndex, -1)} className="grid h-9 w-9 place-items-center border border-[#1d2830]/40 text-lg text-[#1d2830] transition-colors hover:bg-[#1d2830] hover:text-white" aria-label="Previous">←</button>
                    <button type="button" onClick={() => scrollFamily(familyIndex, 1)} className="grid h-9 w-9 place-items-center border border-[#1d2830]/40 text-lg text-[#1d2830] transition-colors hover:bg-[#1d2830] hover:text-white" aria-label="Next">→</button>
                  </div>
                )}
              </div>
              <div ref={(el) => { sliderRefs.current[familyIndex] = el; }} className="mt-5 flex snap-x snap-mandatory gap-3 overflow-x-auto pb-3 scrollbar-hide">
                {family.swatches.map((swatch) => (
                  <article key={swatch.code} className="group w-[152px] shrink-0 snap-start overflow-hidden bg-white sm:w-[168px]">
                    <div className="relative aspect-[1.35/1] overflow-hidden">
                      <Image src={swatch.img} alt={swatch.code} fill className="object-cover transition-transform duration-300 group-hover:scale-[1.03]" sizes="168px" />
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

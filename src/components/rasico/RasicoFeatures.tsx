"use client";

import Image from "next/image";
import { useRef, useState, useEffect } from "react";

type Swatch = { code: string; name: string; img: string };

const BASE = "/images/rasico/colours";

const colourFamilies: { name: string; swatches: Swatch[] }[] = [
  {
    name: "Rasico",
    swatches: [
      { code: "R-White", name: "White", img: `${BASE}/imgi_3_R_white.jpg` },
      { code: "R-Tortora", name: "Tortora", img: `${BASE}/imgi_4_R_tortora.jpg` },
      { code: "R-Olive Grey", name: "Olive Grey", img: `${BASE}/imgi_5_R_olive-grey.jpg` },
      { code: "R-Occhialino", name: "Occhialino", img: `${BASE}/imgi_6_R_occhialino.jpg` },
      { code: "R-Yellow", name: "Yellow", img: `${BASE}/imgi_7_R_yellow.jpg` },
      { code: "R-Ivory", name: "Ivory", img: `${BASE}/imgi_8_R_ivory.jpg` },
      { code: "R-Beige Grey", name: "Beige Grey", img: `${BASE}/imgi_9_R_beige-grey.jpg` },
      { code: "R-Chocolate", name: "Chocolate", img: `${BASE}/imgi_10_R_chocolate.jpg` },
      { code: "R-Charcoal", name: "Charcoal", img: `${BASE}/imgi_11_R_charcoal.jpg` },
      { code: "R-Terracotta", name: "Terracotta", img: `${BASE}/imgi_12_R_terracotta.jpg` },
      { code: "R-Mapplewood", name: "Mapplewood", img: `${BASE}/imgi_13_R_mapplewood.jpg` },
      { code: "R-Beige", name: "Beige", img: `${BASE}/imgi_14_R_beige.jpg` },
      { code: "R-Lavanda", name: "Lavanda", img: `${BASE}/imgi_15_R_lavanda.jpg` },
      { code: "R-Brown", name: "Brown", img: `${BASE}/imgi_16_R_brown.jpg` },
      { code: "R-Red", name: "Red", img: `${BASE}/imgi_17_R_red.jpg` },
      { code: "R-Rosso Mattone", name: "Rosso Mattone", img: `${BASE}/imgi_18_R_rosso-mattone.jpg` },
      { code: "R-Rose", name: "Rose", img: `${BASE}/imgi_19_R_rose.jpg` },
      { code: "R-Silver Grey", name: "Silver Grey", img: `${BASE}/imgi_20_R_silver-grey-1.jpg` },
      { code: "R-Smoke", name: "Smoke", img: `${BASE}/imgi_21_R_smoke.jpg` },
      { code: "R-Grafite", name: "Grafite", img: `${BASE}/imgi_22_R_grafite.jpg` },
      { code: "R-Black", name: "Black", img: `${BASE}/imgi_23_R_black.jpg` },
      { code: "R-Blue", name: "Blue", img: `${BASE}/imgi_24_R_blue.jpg` },
      { code: "R-Sky Blue", name: "Sky Blue", img: `${BASE}/imgi_25_R_sky-blue.jpg` },
      { code: "R-Pale Blue", name: "Pale Blue", img: `${BASE}/imgi_26_R_pale-blue.jpg` },
      { code: "R-Marine", name: "Marine", img: `${BASE}/imgi_27_R_marine.jpg` },
      { code: "R-Argilla", name: "Argilla", img: `${BASE}/imgi_28_R_argilla.jpg` },
      { code: "R-Acqua Marina", name: "Acqua Marina", img: `${BASE}/imgi_29_R_ACQUA-MARINA.jpg` },
    ],
  },
  {
    name: "Rasico Touch",
    swatches: [
      { code: "RT-White", name: "White", img: `${BASE}/imgi_30_RT_white.jpg` },
      { code: "RT-Tortora", name: "Tortora", img: `${BASE}/imgi_31_RT_tortora.jpg` },
      { code: "RT-Olive Grey", name: "Olive Grey", img: `${BASE}/imgi_32_RT_olive-grey.jpg` },
      { code: "RT-Occhialino", name: "Occhialino", img: `${BASE}/imgi_33_RT_occhialino.jpg` },
      { code: "RT-Yellow", name: "Yellow", img: `${BASE}/imgi_34_RT_yellow.jpg` },
      { code: "RT-Ivory", name: "Ivory", img: `${BASE}/imgi_35_RT_ivory.jpg` },
      { code: "RT-Beige Grey", name: "Beige Grey", img: `${BASE}/imgi_36_RT_beige-grey-1.jpg` },
      { code: "RT-Chocolate", name: "Chocolate", img: `${BASE}/imgi_37_RT_chocolate.jpg` },
      { code: "RT-Charcoal", name: "Charcoal", img: `${BASE}/imgi_38_RT_charcoal.jpg` },
      { code: "RT-Terracotta", name: "Terracotta", img: `${BASE}/imgi_39_RT_terracotta.jpg` },
      { code: "RT-Mapplewood", name: "Mapplewood", img: `${BASE}/imgi_40_RT_mapplewood.jpg` },
      { code: "RT-Beige", name: "Beige", img: `${BASE}/imgi_41_RT_beige.jpg` },
      { code: "RT-Lavanda", name: "Lavanda", img: `${BASE}/imgi_42_RT_lavanda.jpg` },
      { code: "RT-Brown", name: "Brown", img: `${BASE}/imgi_43_RT_brown.jpg` },
      { code: "RT-Red", name: "Red", img: `${BASE}/imgi_44_RT_red.jpg` },
      { code: "RT-Rosso Mattone", name: "Rosso Mattone", img: `${BASE}/imgi_45_RT_rosso-mattone.jpg` },
      { code: "RT-Rose", name: "Rose", img: `${BASE}/imgi_46_RT_rose.jpg` },
      { code: "RT-Silver Grey", name: "Silver Grey", img: `${BASE}/imgi_47_RT_silver-grey.jpg` },
      { code: "RT-Smoke", name: "Smoke", img: `${BASE}/imgi_48_RT_smoke.jpg` },
      { code: "RT-Grafite", name: "Grafite", img: `${BASE}/imgi_49_RT_grafite.jpg` },
      { code: "RT-Black", name: "Black", img: `${BASE}/imgi_50_RT_black.jpg` },
      { code: "RT-Blue", name: "Blue", img: `${BASE}/imgi_51_RT_blue.jpg` },
      { code: "RT-Sky Blue", name: "Sky Blue", img: `${BASE}/imgi_52_RT_sky-blue.jpg` },
      { code: "RT-Pale Blue", name: "Pale Blue", img: `${BASE}/imgi_53_RT_pale-blue.jpg` },
      { code: "RT-Marine", name: "Marine", img: `${BASE}/imgi_54_RT_marine.jpg` },
      { code: "RT-Argilla", name: "Argilla", img: `${BASE}/imgi_55_RT_argilla.jpg` },
      { code: "RT-Acqua Marina", name: "Acqua Marina", img: `${BASE}/imgi_56_RT_ACQUA-MARINA.jpg` },
    ],
  },
];

export default function RasicoFeatures() {
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
        <p className="max-w-3xl text-[18px] leading-[1.55] text-[#1d2830] sm:text-[21px]">
          Rasico is available in 29 standard colours across two finishes — Rasico and Rasico Touch.
        </p>

        <div className="mt-12 space-y-14 lg:space-y-20">
          {colourFamilies.map((family, familyIndex) => (
            <section key={family.name} className="border-t border-[#1d2830]/25 pt-5">
              <div className="flex items-end justify-between gap-5">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#5d686b]">Colour range</p>
                  <h2 className="mt-1 text-[30px] font-light text-[#1d2830] sm:text-[36px]">{family.name}</h2>
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

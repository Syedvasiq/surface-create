"use client";

import Image from "next/image";
import { useRef, useState, useEffect } from "react";

type Swatch = { code: string; name: string; img: string };

const BASE = "/images/lixio plus/colours";

const colourFamilies: { name: string; swatches: Swatch[] }[] = [
  {
    name: "Yellow",
    swatches: [
      { code: "LI-Y10", name: "Neutro", img: `${BASE}/imgi_3_LI-Y10.jpg` },
      { code: "LI-Y20", name: "Neutro + Tortora 28g", img: `${BASE}/imgi_4_LI-Y20.jpg` },
      { code: "LI-Y30", name: "Neutro + Ardesia 28g", img: `${BASE}/imgi_5_LI-Y30.jpg` },
      { code: "LP-Y40", name: "Pewter + Ardesia 28g", img: `${BASE}/imgi_6_LP-Y40.jpg` },
      { code: "LI-Y50", name: "Neutro + Ocra 56g", img: `${BASE}/imgi_7_LI-Y50.jpg` },
      { code: "LP-Y60", name: "Neutro + Cappuccino 28g", img: `${BASE}/imgi_8_LP-Y60.jpg` },
    ],
  },
  {
    name: "Orange",
    swatches: [
      { code: "LI-O10", name: "Neutro + Chocolate 28g", img: `${BASE}/imgi_9_LI-O10.jpg` },
      { code: "LP-O20", name: "Neutro + Charcoal 56g", img: `${BASE}/imgi_10_LP-O20.jpg` },
      { code: "LP-O30", name: "Neutro + Cannella 56g", img: `${BASE}/imgi_11_LP-O30.jpg` },
      { code: "LP-O40", name: "Neutro + Mapplewood 28g", img: `${BASE}/imgi_12_LP-O40.jpg` },
    ],
  },
  {
    name: "Red",
    swatches: [
      { code: "LI-R10", name: "Neutro + Brown 28g", img: `${BASE}/imgi_13_LI-R10.jpg` },
      { code: "LP-R20", name: "Neutro + Brown 56g", img: `${BASE}/imgi_14_LP-R20.jpg` },
      { code: "LI-R30", name: "Neutro + Rosso Mattone 56g", img: `${BASE}/imgi_15_LI-R30.jpg` },
    ],
  },
  {
    name: "Blue",
    swatches: [
      { code: "LP-B10", name: "Neutro + Smoke 28g", img: `${BASE}/imgi_16_LP-B10.jpg` },
      { code: "LP-B20", name: "Neutro + Grafite 28g", img: `${BASE}/imgi_17_LP-B20.jpg` },
      { code: "LP-B30", name: "Pewter + Black 28g", img: `${BASE}/imgi_18_LP-B30.jpg` },
      { code: "LP-B40", name: "Neutro + Blue 28g + Oceano 56g", img: `${BASE}/imgi_19_LP-B40.jpg` },
      { code: "LP-B50", name: "Neutro + Oceano 56g", img: `${BASE}/imgi_20_LP-B50.jpg` },
      { code: "LI-B60", name: "Neutro + Pale Blue 28g", img: `${BASE}/imgi_21_LI-B60.jpg` },
    ],
  },
  {
    name: "Green",
    swatches: [
      { code: "LP-G10", name: "Neutro + Marine 28g", img: `${BASE}/imgi_22_LP-G10.jpg` },
      { code: "LP-G20", name: "Pewter", img: `${BASE}/imgi_23_LP-G20.jpg` },
    ],
  },
];

export default function LixioPlusFeatures() {
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
          The Lixio+ range includes colours across five families.
        </p>

        <div className="mt-12 space-y-14 lg:space-y-20">
          {colourFamilies.map((family, familyIndex) => (
            <section key={family.name} className="border-t border-[#1d2830]/25 pt-5">
              <div className="flex items-end justify-between gap-5">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#5d686b]">Lixio+</p>
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

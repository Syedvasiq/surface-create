"use client";

import Image from "next/image";
import { useRef, useState, useEffect } from "react";

type Swatch = { code: string; name: string; img: string };

const BASE = "/images/wall-microtopping/colours";

const colourFamilies: { name: string; swatches: Swatch[] }[] = [
  {
    name: "Neutrals",
    swatches: [
      { code: "MT-101", name: "White", img: `${BASE}/imgi_1_MT-101_WHITE.jpg` },
      { code: "MT-102", name: "Ivory", img: `${BASE}/imgi_2_MT-102_IVORY.jpg` },
      { code: "MT-103", name: "Beige", img: `${BASE}/imgi_3_MT-103_BEIGE.jpg` },
      { code: "MT-104", name: "Sand", img: `${BASE}/imgi_4_MT-104_SAND.jpg` },
      { code: "MT-105", name: "Taupe", img: `${BASE}/imgi_5_MT-105_TAUPE.jpg` },
      { code: "MT-106", name: "Grey", img: `${BASE}/imgi_6_MT-106_GREY.jpg` },
      { code: "MT-107", name: "Charcoal", img: `${BASE}/imgi_7_MT-107_CHARCOAL.jpg` },
      { code: "MT-108", name: "Black", img: `${BASE}/imgi_8_MT-108_BLACK.jpg` },
    ],
  },
  {
    name: "Earth Tones",
    swatches: [
      { code: "MT-201", name: "Terracotta", img: `${BASE}/imgi_9_MT-201_TERRACOTTA.jpg` },
      { code: "MT-202", name: "Rust", img: `${BASE}/imgi_10_MT-202_RUST.jpg` },
      { code: "MT-203", name: "Ochre", img: `${BASE}/imgi_11_MT-203_OCHRE.jpg` },
      { code: "MT-204", name: "Sienna", img: `${BASE}/imgi_12_MT-204_SIENNA.jpg` },
      { code: "MT-205", name: "Umber", img: `${BASE}/imgi_13_MT-205_UMBER.jpg` },
      { code: "MT-206", name: "Clay", img: `${BASE}/imgi_14_MT-206_CLAY.jpg` },
      { code: "MT-207", name: "Cocoa", img: `${BASE}/imgi_15_MT-207_COCOA.jpg` },
      { code: "MT-208", name: "Mocha", img: `${BASE}/imgi_16_MT-208_MOCHA.jpg` },
    ],
  },
  {
    name: "Blues & Greens",
    swatches: [
      { code: "MT-301", name: "Sky Blue", img: `${BASE}/imgi_17_MT-301_SKY-BLUE.jpg` },
      { code: "MT-302", name: "Navy", img: `${BASE}/imgi_18_MT-302_NAVY.jpg` },
      { code: "MT-303", name: "Teal", img: `${BASE}/imgi_19_MT-303_TEAL.jpg` },
      { code: "MT-304", name: "Sage", img: `${BASE}/imgi_20_MT-304_SAGE.jpg` },
      { code: "MT-305", name: "Olive", img: `${BASE}/imgi_21_MT-305_OLIVE.jpg` },
      { code: "MT-306", name: "Mint", img: `${BASE}/imgi_22_MT-306_MINT.jpg` },
      { code: "MT-307", name: "Emerald", img: `${BASE}/imgi_23_MT-307_EMERALD.jpg` },
      { code: "MT-308", name: "Forest", img: `${BASE}/imgi_24_MT-308_FOREST.jpg` },
    ],
  },
  {
    name: "Pastels & Specials",
    swatches: [
      { code: "MT-401", name: "Blush", img: `${BASE}/imgi_25_MT-401_BLUSH.jpg` },
      { code: "MT-402", name: "Lavender", img: `${BASE}/imgi_26_MT-402_LAVENDER.jpg` },
      { code: "MT-403", name: "Dusty Pink", img: `${BASE}/imgi_27_MT-403_DUSTY-PINK.jpg` },
      { code: "MT-404", name: "Pearl", img: `${BASE}/imgi_28_MT-404_PEARL.jpg` },
      { code: "MT-405", name: "Metallic Silver", img: `${BASE}/imgi_29_MT-405_METALLIC-SILVER.jpg` },
      { code: "MT-406", name: "Metallic Gold", img: `${BASE}/imgi_30_MT-406_METALLIC-GOLD.jpg` },
      { code: "MT-407", name: "Copper", img: `${BASE}/imgi_31_MT-407_COPPER.jpg` },
      { code: "MT-408", name: "Bronze", img: `${BASE}/imgi_32_MT-408_BRONZE.jpg` },
    ],
  },
];

export default function WallMicrotoppingFeatures() {
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
        <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#5d686b]">Colour Collection</p>
        <h2 className="mt-3 text-[32px] font-light leading-tight text-[#1d2830] sm:text-[42px]">The colours of Microtopping®</h2>
        <div className="mt-12 space-y-14 lg:space-y-20">
          {colourFamilies.map((family, familyIndex) => (
            <section key={family.name} className="border-t border-[#1d2830]/25 pt-5">
              <div className="flex items-end justify-between gap-5">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#5d686b]">Microtopping®</p>
                  <h3 className="mt-1 text-[30px] font-light text-[#1d2830] sm:text-[36px]">{family.name}</h3>
                </div>
                {overflows[familyIndex] && (
                  <div className="flex gap-2">
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
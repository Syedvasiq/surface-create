"use client";

import Image from "next/image";
import { useRef, useState, useEffect } from "react";

type Swatch = { code: string; name: string; img: string };

const BASE = "/images/terrae-calce/colours";

const colourFamilies: { name: string; label: string; swatches: Swatch[] }[] = [
  {
    name: "Neutrals",
    label: "Neutral Tones",
    swatches: [
      { code: "Neutro", name: "Neutro", img: `${BASE}/imgi_4_Calce_Colour_Neutro.jpg` },
      { code: "Sand 10g", name: "Sand 10g", img: `${BASE}/imgi_6_Calce_Colour_Sand_10g.jpg` },
      { code: "Sand 20g", name: "Sand 20g", img: `${BASE}/imgi_9_Calce_Colour_Sand_20g.jpg` },
      { code: "Sand 40g", name: "Sand 40g", img: `${BASE}/imgi_10_Calce_Colour_Sand_40g.jpg` },
      { code: "Sand 80g", name: "Sand 80g", img: `${BASE}/imgi_11_Calce_colour_Sand_80g.jpg` },
    ],
  },
  {
    name: "Earth",
    label: "Earth Tones",
    swatches: [
      { code: "Olive 10g", name: "Olive 10g", img: `${BASE}/imgi_5_Calce_Colour_Olive_10g.jpg` },
      { code: "Olive 20g", name: "Olive 20g", img: `${BASE}/imgi_7_Calce_Colour_Olive_20g.jpg` },
      { code: "Olive 40g", name: "Olive 40g", img: `${BASE}/imgi_8_Calce_Colour_Olive_40g.jpg` },
      { code: "Olive 80g", name: "Olive 80g", img: `${BASE}/imgi_12_Calce_Colour_Olive_80g.jpg` },
      { code: "Straw 10g", name: "Straw 10g", img: `${BASE}/imgi_16_Calce_Colour_Straw_10g.jpg` },
      { code: "Straw 20g", name: "Straw 20g", img: `${BASE}/imgi_15_Calce_colour_Straw_20g.jpg` },
      { code: "Straw 40g", name: "Straw 40g", img: `${BASE}/imgi_14_Calce_Colour_Straw_40g.jpg` },
      { code: "Straw 80g", name: "Straw 80g", img: `${BASE}/imgi_13_Calce_Colour_Straw_80g.jpg` },
    ],
  },
  {
    name: "Warm",
    label: "Warm Tones",
    swatches: [
      { code: "Mud 10g", name: "Mud 10g", img: `${BASE}/imgi_17_Calce_Colour_Mud_10g.jpg` },
      { code: "Mud 20g", name: "Mud 20g", img: `${BASE}/imgi_18_Calce_Colour_Mud_20g.jpg` },
      { code: "Mud 40g", name: "Mud 40g", img: `${BASE}/imgi_19_Calce_Colour_Mud_40g.jpg` },
      { code: "Mud 80g", name: "Mud 80g", img: `${BASE}/imgi_20_Calce_colour_Mud_80g.jpg` },
      { code: "Peach 10g", name: "Peach 10g", img: `${BASE}/imgi_24_Calce_Colour_Peach_10g.jpg` },
      { code: "Peach 20g", name: "Peach 20g", img: `${BASE}/imgi_23_Calce_Colour_Peach_20g.jpg` },
      { code: "Peach 40g", name: "Peach 40g", img: `${BASE}/imgi_22_Calce_Colour_Peach_40g.jpg` },
      { code: "Peach 80g", name: "Peach 80g", img: `${BASE}/imgi_21_Calce_Colour_Peach_80g.jpg` },
      { code: "Brick 10g", name: "Brick 10g", img: `${BASE}/imgi_28_Calce_Colour_Brick_10g.jpg` },
      { code: "Brick 20g", name: "Brick 20g", img: `${BASE}/imgi_27_Calce_colour_Brick_20g.jpg` },
      { code: "Brick 40g", name: "Brick 40g", img: `${BASE}/imgi_26_Calce_Colour_Brick_40g.jpg` },
      { code: "Brick 80g", name: "Brick 80g", img: `${BASE}/imgi_25_Calce_Colour_Brick_80g.jpg` },
    ],
  },
  {
    name: "Cool",
    label: "Cool Tones",
    swatches: [
      { code: "Sky 10g", name: "Sky 10g", img: `${BASE}/imgi_32_Calce_colour_Sky_10g.jpg` },
      { code: "Sky 20g", name: "Sky 20g", img: `${BASE}/imgi_31_Calce_Colour_Sky_20g.jpg` },
      { code: "Sky 40g", name: "Sky 40g", img: `${BASE}/imgi_30_Calce_Colour_Sky_40g.jpg` },
      { code: "Sky 80g", name: "Sky 80g", img: `${BASE}/imgi_29_Calce_Colour_Sky_80g.jpg` },
      { code: "Mint 10g", name: "Mint 10g", img: `${BASE}/imgi_36_Calce_colour_Mint_10g.jpg` },
      { code: "Mint 20g", name: "Mint 20g", img: `${BASE}/imgi_35_Calce_Colour_Mint_20g.jpg` },
      { code: "Mint 40g", name: "Mint 40g", img: `${BASE}/imgi_34_Calce_Colour_Mint_40g.jpg` },
      { code: "Mint 80g", name: "Mint 80g", img: `${BASE}/imgi_33_Calce_Colour_Mint_80g.jpg` },
    ],
  },
];

export default function TerraeCalceFeatures() {
  const sliderRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [overflows, setOverflows] = useState<boolean[]>(colourFamilies.map(() => true));

  useEffect(() => {
    const observers: ResizeObserver[] = [];
    sliderRefs.current.forEach((el, i) => {
      if (!el) return;
      const check = () => {
        setOverflows((prev) => {
          const next = [...prev];
          next[i] = el.scrollWidth > el.clientWidth + 1;
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
      <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#5d686b]">Natural Colour Collection</p>
      <h2 className="mt-3 text-[32px] font-light leading-tight text-[#1d2830] sm:text-[42px]">The colours of Terrae-Calce</h2>
      <div className="mt-12 space-y-14 lg:space-y-20">
        {colourFamilies.map((family, familyIndex) => (
          <section key={family.name} className="border-t border-[#1d2830]/25 pt-5">
            <div className="flex items-end justify-between gap-5">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#5d686b]">Terrae-Calce</p>
                <h3 className="mt-1 text-[30px] font-light text-[#1d2830] sm:text-[36px]">{family.label}</h3>
              </div>
              <div className="flex gap-2">
                <button type="button" onClick={() => scrollFamily(familyIndex, -1)} className="grid h-9 w-9 place-items-center border border-[#1d2830]/40 text-lg text-[#1d2830] transition-colors hover:bg-[#1d2830] hover:text-white" aria-label="Previous">←</button>
                <button type="button" onClick={() => scrollFamily(familyIndex, 1)} className="grid h-9 w-9 place-items-center border border-[#1d2830]/40 text-lg text-[#1d2830] transition-colors hover:bg-[#1d2830] hover:text-white" aria-label="Next">→</button>
              </div>
            </div>
            <div ref={(el) => { sliderRefs.current[familyIndex] = el; }} className="mt-5 flex snap-x snap-mandatory gap-3 overflow-x-auto pb-3 scrollbar-hide">
              {family.swatches.map((swatch) => (
                <article key={`${family.name}-${swatch.code}`} className="group w-[152px] shrink-0 snap-start overflow-hidden bg-white sm:w-[168px]">
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
    </section>
  );
}

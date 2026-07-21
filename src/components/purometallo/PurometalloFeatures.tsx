"use client";

import Image from "next/image";
import { useRef, useState, useEffect } from "react";

type Swatch = { code: string; name: string; img: string };

const BASE = "/images/purometallo/colours";

const colourFamilies: { name: string; label: string; swatches: Swatch[] }[] = [
  {
    name: "Purometallo",
    label: "Base Collection",
    swatches: [
      { code: "Lamina", name: "Purometallo Lamina", img: `${BASE}/imgi_1_purometallo-lamina.jpg` },
      { code: "Rilievo", name: "Purometallo Rilievo", img: `${BASE}/imgi_2_purometallo-rilievo.jpg` },
      { code: "Striato", name: "Purometallo Striato", img: `${BASE}/imgi_3_purometallo-striato.jpg` },
    ],
  },
  {
    name: "Oro",
    label: "Oro",
    swatches: [
      { code: "Oro Rilievo", name: "Oro Rilievo", img: `${BASE}/imgi_4_PM_Oro-Rilievo.jpg` },
      { code: "Oro Striato", name: "Oro Striato", img: `${BASE}/imgi_5_PM_Oro-Striato.jpg` },
      { code: "Oro Lamina", name: "Oro Lamina", img: `${BASE}/imgi_6_PM_Oro-Lamina.jpg` },
    ],
  },
  {
    name: "Bronzo",
    label: "Bronzo",
    swatches: [
      { code: "Bronzo Lamina", name: "Bronzo Lamina", img: `${BASE}/imgi_7_PM_Bronzo-Lamina.jpg` },
      { code: "Bronzo Rilievo", name: "Bronzo Rilievo", img: `${BASE}/imgi_8_PM_Bronzo-Rilievo.jpg` },
      { code: "Bronzo Striato", name: "Bronzo Striato", img: `${BASE}/imgi_9_PM_Bronzo-Striato.jpg` },
    ],
  },
  {
    name: "Corten",
    label: "Corten",
    swatches: [
      { code: "Corten", name: "Corten", img: `${BASE}/imgi_10_PM_CORTEN.jpg` },
    ],
  },
  {
    name: "Fiorentino",
    label: "Fiorentino",
    swatches: [
      { code: "Fiorentino Lamina", name: "Fiorentino Lamina", img: `${BASE}/imgi_11_PM_Fiorentino-Lamina.jpg` },
      { code: "Fiorentino Striato", name: "Fiorentino Striato", img: `${BASE}/imgi_12_PM_Fiorentino-Striato.jpg` },
      { code: "Fiorentino Rilievo", name: "Fiorentino Rilievo", img: `${BASE}/imgi_13_PM_Fiorentino-Rilievo.jpg` },
    ],
  },
  {
    name: "Rame",
    label: "Rame",
    swatches: [
      { code: "Rame Rilievo", name: "Rame Rilievo", img: `${BASE}/imgi_14_PM_Rame-Rilievo.jpg` },
      { code: "Rame Striato", name: "Rame Striato", img: `${BASE}/imgi_15_PM_Rame-Striato.jpg` },
      { code: "Rame Lamina", name: "Rame Lamina", img: `${BASE}/imgi_16_PM_Rame-Lamina.jpg` },
    ],
  },
  {
    name: "Peltro",
    label: "Peltro",
    swatches: [
      { code: "Peltro Lamina", name: "Peltro Lamina", img: `${BASE}/imgi_17_PM_Peltro-Lamina.jpg` },
      { code: "Peltro Striato", name: "Peltro Striato", img: `${BASE}/imgi_18_PM_Peltro-Striato.jpg` },
      { code: "Peltro Rilievo", name: "Peltro Rilievo", img: `${BASE}/imgi_19_PM_Peltro-Rilievo.jpg` },
    ],
  },
];

export default function PurometalloFeatures() {
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
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#5d686b]">Colour Collection</p>
        <h2 className="mt-3 text-[32px] font-light leading-tight text-[#1d2830] sm:text-[42px]">The colours of Purometallo</h2>
        <div className="mt-12 space-y-14 lg:space-y-20">
          {colourFamilies.map((family, familyIndex) => (
            <section key={family.name} className="border-t border-[#1d2830]/25 pt-5">
              <div className="flex items-end justify-between gap-5">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#5d686b]">Purometallo</p>
                  <h3 className="mt-1 text-[30px] font-light text-[#1d2830] sm:text-[36px]">{family.label}</h3>
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
      </div>
    </section>
  );
}

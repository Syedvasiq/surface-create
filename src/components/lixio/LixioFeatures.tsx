"use client";

import Image from "next/image";
import { useRef, useState, useEffect } from "react";

type Swatch = { code: string; name: string; img: string };

const lixioSwatches: Swatch[] = [
  { code: "LI-Y10", name: "Y10", img: "/images/lixio/colours/LI-Y10.jpg" },
  { code: "LI-Y20", name: "Y20", img: "/images/lixio/colours/LI-Y20.jpg" },
  { code: "LI-Y30", name: "Y30", img: "/images/lixio/colours/LI-Y30.jpg" },
  { code: "LI-Y50", name: "Y50", img: "/images/lixio/colours/LI-Y50.jpg" },
  { code: "LI-O10", name: "O10", img: "/images/lixio/colours/LI-O10.jpg" },
  { code: "LI-R10", name: "R10", img: "/images/lixio/colours/LI-R10.jpg" },
  { code: "LI-R30", name: "R30", img: "/images/lixio/colours/LI-R30.jpg" },
  { code: "LI-B60", name: "B60", img: "/images/lixio/colours/LI-B60.jpg" },
];

const lixioPlusSwatches: Swatch[] = [
  { code: "LP-Y40", name: "Y40", img: "/images/lixio/colours/LP-Y40.jpg" },
  { code: "LP-Y60", name: "Y60", img: "/images/lixio/colours/LP-Y60.jpg" },
  { code: "LP-O20", name: "O20", img: "/images/lixio/colours/LP-O20.jpg" },
  { code: "LP-O30", name: "O30", img: "/images/lixio/colours/LP-O30.jpg" },
  { code: "LP-O40", name: "O40", img: "/images/lixio/colours/LP-O40.jpg" },
  { code: "LP-R20", name: "R20", img: "/images/lixio/colours/LP-R20.jpg" },
  { code: "LP-B10", name: "B10", img: "/images/lixio/colours/LP-B10.jpg" },
  { code: "LP-B20", name: "B20", img: "/images/lixio/colours/LP-B20.jpg" },
  { code: "LP-B30", name: "B30", img: "/images/lixio/colours/LP-B30.jpg" },
  { code: "LP-B40", name: "B40", img: "/images/lixio/colours/LP-B40.jpg" },
  { code: "LP-B50", name: "B50", img: "/images/lixio/colours/LP-B50.jpg" },
  { code: "LP-G10", name: "G10", img: "/images/lixio/colours/LP-G10.jpg" },
  { code: "LP-G20", name: "G20", img: "/images/lixio/colours/LP-G20.jpg" },
];

const families = [
  { label: "Lixio", product: "Lixio", swatches: lixioSwatches },
  { label: "Lixio Plus", product: "Lixio Plus", swatches: lixioPlusSwatches },
];

function SwatchRow({ swatches, rowRef }: { swatches: Swatch[]; rowRef: (el: HTMLDivElement | null) => void }) {
  return (
    <div ref={rowRef} className="mt-5 flex snap-x snap-mandatory gap-3 overflow-x-auto pb-3 scrollbar-hide">
      {swatches.map((swatch) => (
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
          <div className="min-h-[52px] p-3">
            <p className="text-xs font-semibold text-[#1d2830]">{swatch.code}</p>
          </div>
        </article>
      ))}
    </div>
  );
}

export default function LixioFeatures() {
  const sliderRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [overflows, setOverflows] = useState<boolean[]>(families.map(() => true));

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
          The Lixio range includes colours across two product lines — Lixio and Lixio Plus.
        </p>

        <div className="mt-12 space-y-14 lg:space-y-20">
          {families.map((family, familyIndex) => (
            <section key={family.label} className="border-t border-[#1d2830]/25 pt-5">
              <div className="flex items-end justify-between gap-5">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#5d686b]">Colour range</p>
                  <h2 className="mt-1 text-[30px] font-light text-[#1d2830] sm:text-[36px]">{family.label}</h2>
                </div>
                {overflows[familyIndex] && (
                  <div className="hidden md:flex gap-2">
                    <button type="button" onClick={() => scrollFamily(familyIndex, -1)} className="grid h-9 w-9 place-items-center border border-[#1d2830]/40 text-lg text-[#1d2830] transition-colors hover:bg-[#1d2830] hover:text-white" aria-label="Previous">←</button>
                    <button type="button" onClick={() => scrollFamily(familyIndex, 1)} className="grid h-9 w-9 place-items-center border border-[#1d2830]/40 text-lg text-[#1d2830] transition-colors hover:bg-[#1d2830] hover:text-white" aria-label="Next">→</button>
                  </div>
                )}
              </div>
              <SwatchRow
                swatches={family.swatches}
                rowRef={(el) => { sliderRefs.current[familyIndex] = el; }}
              />
            </section>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import Image from "next/image";
import { useRef, useState, useEffect } from "react";

type Swatch = { name: string; img: string };

const BASE = "/images/acid-stain/colours";

const swatches: Swatch[] = [
  { name: "Amber", img: `${BASE}/imgi_1_AC_amber.jpg` },
  { name: "Terracotta", img: `${BASE}/imgi_2_AC_terracotta.jpg` },
  { name: "Ebony", img: `${BASE}/imgi_3_AC_ebony.jpg` },
  { name: "Brown", img: `${BASE}/imgi_4_AC_brown.jpg` },
  { name: "Turquoise", img: `${BASE}/imgi_5_AC_turquise.jpg` },
  { name: "Fern Green", img: `${BASE}/imgi_6_AC_ferngreen.jpg` },
  { name: "Jade", img: `${BASE}/imgi_7_AC_jade.jpg` },
];

export default function AcidStainFeatures() {
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const [overflow, setOverflow] = useState(true);

  useEffect(() => {
    const el = sliderRef.current;
    if (!el) return;
    const check = () => setOverflow(el.scrollWidth > el.clientWidth);
    check();
    const ro = new ResizeObserver(check);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const scroll = (direction: 1 | -1) => {
    sliderRef.current?.scrollBy({ left: direction * 520, behavior: "smooth" });
  };

  return (
    <section className="bg-[#f0ece6] px-6 py-16 sm:px-10 lg:px-12 lg:py-24 md:mx-[15px] md:[width:calc(100%-30px)] mt-[15px]">
      <div>
        <p className="max-w-3xl text-[18px] leading-[1.55] text-[#1d2830] sm:text-[21px]">
          Acid-Stain is available in 7 colours, each producing unique and unrepeatable effects on concrete.
        </p>
        <div className="mt-12 border-t border-[#1d2830]/25 pt-5">
          <div className="flex items-end justify-between gap-5">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#5d686b]">Colour range</p>
              <h2 className="mt-1 text-[30px] font-light text-[#1d2830] sm:text-[36px]">Acid-Stain Colours</h2>
            </div>
            {overflow && (
              <div className="hidden md:flex gap-2">
                <button type="button" onClick={() => scroll(-1)} className="grid h-9 w-9 place-items-center border border-[#1d2830]/40 text-lg text-[#1d2830] transition-colors hover:bg-[#1d2830] hover:text-white" aria-label="Previous">←</button>
                <button type="button" onClick={() => scroll(1)} className="grid h-9 w-9 place-items-center border border-[#1d2830]/40 text-lg text-[#1d2830] transition-colors hover:bg-[#1d2830] hover:text-white" aria-label="Next">→</button>
              </div>
            )}
          </div>
          <div ref={sliderRef} className="mt-5 flex snap-x snap-mandatory gap-3 overflow-x-auto pb-3 scrollbar-hide">
            {swatches.map((swatch, i) => (
              <article key={i} className="group w-[152px] shrink-0 snap-start overflow-hidden bg-white sm:w-[168px]">
                <div className="relative aspect-[1.35/1] overflow-hidden">
                  <Image src={swatch.img} alt={swatch.name} fill className="object-cover transition-transform duration-300 group-hover:scale-[1.03]" sizes="168px" />
                </div>
                <div className="min-h-[52px] p-3">
                  <p className="text-xs font-semibold text-[#1d2830]">{swatch.name}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

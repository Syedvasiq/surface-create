"use client";

import Image from "next/image";
import { useRef, useState, useEffect } from "react";

type Swatch = { name: string; img: string };

const BASE = "/images/stenciltop/colours";

const swatches: Swatch[] = [
  { name: "Bianco", img: `${BASE}/imgi_1_CH_bianco.jpg` },
  { name: "Corda", img: `${BASE}/imgi_2_CH_corda.jpg` },
  { name: "Salvstone", img: `${BASE}/imgi_3_CH_salvstone.jpg` },
  { name: "Sand Buff", img: `${BASE}/imgi_4_CH_sand_buff.jpg` },
  { name: "Yellow Buff", img: `${BASE}/imgi_5_CH_yellow_buff.jpg` },
  { name: "Harvest Sand", img: `${BASE}/imgi_6_CH_harvest_sand.jpg` },
  { name: "Bourgogne", img: `${BASE}/imgi_7_CH_bourgogne.jpg` },
  { name: "Sand", img: `${BASE}/imgi_8_CH_sand.jpg` },
  { name: "Sun Buff", img: `${BASE}/imgi_9_CH_sun_buff.jpg` },
  { name: "Nocciola", img: `${BASE}/imgi_10_CH_nocciola.jpg` },
  { name: "Caffe", img: `${BASE}/imgi_11_CH_caffè.jpg` },
  { name: "Pesca", img: `${BASE}/imgi_12_CH_pesca.jpg` },
  { name: "Desert Tan", img: `${BASE}/imgi_13_CH_desert_tan.jpg` },
  { name: "Cuoio", img: `${BASE}/imgi_14_CH_cuoio.jpg` },
  { name: "Kaki", img: `${BASE}/imgi_15_CH_kaki.jpg` },
  { name: "Cream", img: `${BASE}/imgi_16_CH_cream.jpg` },
  { name: "Carboncino", img: `${BASE}/imgi_17_CH_carboncino.jpg` },
  { name: "Grey", img: `${BASE}/imgi_18_CH_grey.jpg` },
  { name: "Marrone", img: `${BASE}/imgi_19_CH_marrone.jpg` },
  { name: "Redwood", img: `${BASE}/imgi_20_CH_redwood.jpg` },
  { name: "Cotto", img: `${BASE}/imgi_21_CH_cotto.jpg` },
  { name: "Rosa", img: `${BASE}/imgi_22_CH_rosa.jpg` },
  { name: "Pewter", img: `${BASE}/imgi_23_CH_pewter.jpg` },
  { name: "Zinco", img: `${BASE}/imgi_24_CH_zinco.jpg` },
  { name: "Cenere", img: `${BASE}/imgi_25_CH_cenere.jpg` },
  { name: "Antracite", img: `${BASE}/imgi_26_CH_antracite.jpg` },
  { name: "Celeste", img: `${BASE}/imgi_27_CH_celeste.jpg` },
  { name: "Verde Mare", img: `${BASE}/imgi_28_CH_verde-mare.jpg` },
  { name: "Green", img: `${BASE}/imgi_29_CH_green.jpg` },
];

export default function StenciltopFeatures() {
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
          Stenciltop is available in 29 Colour Hardener shades.
        </p>
        <div className="mt-12 border-t border-[#1d2830]/25 pt-5">
          <div className="flex items-end justify-between gap-5">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#5d686b]">Colour range</p>
              <h2 className="mt-1 text-[30px] font-light text-[#1d2830] sm:text-[36px]">Colour Hardener</h2>
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

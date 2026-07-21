"use client";

import Image from "next/image";
import { useRef, useState, useEffect } from "react";

type Swatch = { code: string; name: string; img: string };

const BASE = "/images/stamped-concrete/colours";

const colourFamilies: { name: string; swatches: Swatch[] }[] = [
  {
    name: "Stamped Patterns",
    swatches: [
      { code: "SC-04", name: "Stone of Athens – Bianco / Adobe Buff", img: `${BASE}/imgi_1_SC_04_stone-of-Athens_bianco_adobe-buff_r.jpg` },
      { code: "SC-18", name: "Rough Stone – Bianco / Peach", img: `${BASE}/imgi_2_SC_18_rough-stone_bianco_peach_r.jpg` },
      { code: "SC-08", name: "Roman Slate – Corda / Peach", img: `${BASE}/imgi_3_SC_08_roman-slate_corda_peach_r.jpg` },
      { code: "SC-03", name: "Basolato – Bianco / Sun Buff", img: `${BASE}/imgi_4_SC_03_basolato_bianco_sun-buff_r.jpg` },
      { code: "SC-13", name: "Legno Tavola – Bianco / Sun Buff", img: `${BASE}/imgi_5_SC_13_legno-tavola_bianco_sun-buff_r.jpg` },
      { code: "SC-19", name: "Rough Stone – Bianco / Sun Buff + Gray", img: `${BASE}/imgi_6_SC_19_rough-stone_bianco_sun-buffgray_r.jpg` },
      { code: "SC-15", name: "Royal Ashlar Slate – Sun Buff / Gray", img: `${BASE}/imgi_7_SC_15_royal-ashlar-slate_sun-buff_gray_r.jpg` },
      { code: "SC-17", name: "Lastricato Antico – Cuoio / Antracite", img: `${BASE}/imgi_8_SC_17_lastricato-antico_cuoio_antracite_r.jpg` },
      { code: "SC-10", name: "Roman Slate – Zinco / Gray Neutron", img: `${BASE}/imgi_9_SC_10_roman-slate_zinco_grayneutron_r.jpg` },
      { code: "SC-20", name: "Rough Stone – Pewter / Gray", img: `${BASE}/imgi_10_SC_20_rough-stone_pewter_gray_r.jpg` },
      { code: "SC-06", name: "Ashlar Slate – Corda / Gray", img: `${BASE}/imgi_11_SC_06_ashlar-slate_corda_gray_r.jpg` },
      { code: "SC-12", name: "Paris – Antracite / Black", img: `${BASE}/imgi_12_SC_12_paris_antracite_black_r.jpg` },
      { code: "SC-07", name: "Herringbone – Cotto / Gray", img: `${BASE}/imgi_13_SC_07_herringbone_cotto_gray_r.jpg` },
      { code: "SC-14", name: "Venetian Marble – Bianco / Mapplewood", img: `${BASE}/imgi_14_SC_14_venetian-marble_bianco_mapplewood_r.jpg` },
      { code: "SC-09", name: "Roman Slate – Bianco / Gray", img: `${BASE}/imgi_15_SC_09_roman-slate_bianco_gray_r.jpg` },
      { code: "SC-16", name: "Rotating Ashlar – Bianco / Gray", img: `${BASE}/imgi_16_SC_16_rotating-ashlar_bianco_gray_r.jpg` },
      { code: "SC-01", name: "Grand Ashlar – Cenere / Gray Neutron", img: `${BASE}/imgi_17_SC_01_grand-ashlar_cenere_grayneutron_r.jpg` },
      { code: "SC-11", name: "London Cobble – Carboncino / Black", img: `${BASE}/imgi_18_SC_11_london-cobble_carboncino_black_r.jpg` },
    ],
  },
  {
    name: "Colour Hardener",
    swatches: [
      { code: "CH", name: "Bianco", img: `${BASE}/imgi_19_CH_bianco.jpg` },
      { code: "CH", name: "Corda", img: `${BASE}/imgi_20_CH_corda.jpg` },
      { code: "CH", name: "Salvstone", img: `${BASE}/imgi_21_CH_salvstone.jpg` },
      { code: "CH", name: "Sand Buff", img: `${BASE}/imgi_22_CH_sand_buff.jpg` },
      { code: "CH", name: "Yellow Buff", img: `${BASE}/imgi_23_CH_yellow_buff.jpg` },
      { code: "CH", name: "Harvest Sand", img: `${BASE}/imgi_24_CH_harvest_sand.jpg` },
      { code: "CH", name: "Bourgogne", img: `${BASE}/imgi_25_CH_bourgogne.jpg` },
      { code: "CH", name: "Sand", img: `${BASE}/imgi_26_CH_sand.jpg` },
      { code: "CH", name: "Sun Buff", img: `${BASE}/imgi_27_CH_sun_buff.jpg` },
      { code: "CH", name: "Nocciola", img: `${BASE}/imgi_28_CH_nocciola.jpg` },
      { code: "CH", name: "Caffe", img: `${BASE}/imgi_29_CH_caffè.jpg` },
      { code: "CH", name: "Pesca", img: `${BASE}/imgi_30_CH_pesca.jpg` },
      { code: "CH", name: "Desert Tan", img: `${BASE}/imgi_31_CH_desert_tan.jpg` },
      { code: "CH", name: "Cuoio", img: `${BASE}/imgi_32_CH_cuoio.jpg` },
      { code: "CH", name: "Kaki", img: `${BASE}/imgi_33_CH_kaki.jpg` },
      { code: "CH", name: "Cream", img: `${BASE}/imgi_34_CH_cream.jpg` },
      { code: "CH", name: "Carboncino", img: `${BASE}/imgi_35_CH_carboncino.jpg` },
      { code: "CH", name: "Grey", img: `${BASE}/imgi_36_CH_grey.jpg` },
      { code: "CH", name: "Marrone", img: `${BASE}/imgi_37_CH_marrone.jpg` },
      { code: "CH", name: "Redwood", img: `${BASE}/imgi_38_CH_redwood.jpg` },
      { code: "CH", name: "Cotto", img: `${BASE}/imgi_39_CH_cotto.jpg` },
      { code: "CH", name: "Rosa", img: `${BASE}/imgi_40_CH_rosa.jpg` },
      { code: "CH", name: "Pewter", img: `${BASE}/imgi_41_CH_pewter.jpg` },
      { code: "CH", name: "Zinco", img: `${BASE}/imgi_42_CH_zinco.jpg` },
      { code: "CH", name: "Cenere", img: `${BASE}/imgi_43_CH_cenere.jpg` },
      { code: "CH", name: "Antracite", img: `${BASE}/imgi_44_CH_antracite.jpg` },
      { code: "CH", name: "Black", img: `${BASE}/imgi_45_CH_black.jpg` },
      { code: "CH", name: "Celeste", img: `${BASE}/imgi_46_CH_celeste.jpg` },
      { code: "CH", name: "Verde Mare", img: `${BASE}/imgi_47_CH_verde-mare.jpg` },
      { code: "CH", name: "Green", img: `${BASE}/imgi_48_CH_green.jpg` },
    ],
  },
];

export default function StampedConcreteFeatures() {
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
          Stamped Concrete is available in a wide range of patterns and colour hardener options.
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
                {family.swatches.map((swatch, swatchIndex) => (
                  <article key={`${familyIndex}-${swatchIndex}`} className="group w-[152px] shrink-0 snap-start overflow-hidden bg-white sm:w-[168px]">
                    <div className="relative aspect-[1.35/1] overflow-hidden">
                      <Image src={swatch.img} alt={swatch.name} fill className="object-cover transition-transform duration-300 group-hover:scale-[1.03]" sizes="168px" />
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

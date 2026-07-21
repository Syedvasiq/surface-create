"use client";

import Image from "next/image";
import { useRef, useState, useEffect } from "react";

type Swatch = { code: string; name: string; img: string };

const BASE = "/images/sassoitalia-floor/colours";

const swatches: Swatch[] = [
  { code: "SI-01", name: "Tortora / Botticino 5-8 + Botticino 8-12", img: `${BASE}/imgi_1_SI_01_tortora_w_50botticino-5-8-50botticino-8-12.jpg` },
  { code: "SI-18", name: "Paglia / Grey Aurora N.4", img: `${BASE}/imgi_2_SI_18_paglia_75w_28grey_aurora-n.4.jpg` },
  { code: "SI-08", name: "Paglia / Giallo Oro N.4", img: `${BASE}/imgi_3_SI_08_paglia_50w_50g_giallo-oro_n4.jpg` },
  { code: "SI-17", name: "Paglia / Giallo Siena N.4", img: `${BASE}/imgi_4_SI_17_paglia_w_giallo-siena-n.4.jpg` },
  { code: "SI-07", name: "Sabbia / Giallo Siena N.3", img: `${BASE}/imgi_5_SI_07_sabbia_w_giallo-siena-n.3_giallo.jpg` },
  { code: "SI-09", name: "Cammello / Giallo Oro 75 + Botticino N.4", img: `${BASE}/imgi_6_SI_09_cammello_g_75giallo-oro_25botticino-n.4.jpg` },
  { code: "SI-06", name: "Sabbia / Rosa Corallo N.3", img: `${BASE}/imgi_7_SI_06_sabbia_w_rosa-corallo-n.3_rosa-corallo.jpg` },
  { code: "SI-11", name: "Tortora / Arabescato", img: `${BASE}/imgi_8_SI_11_tortora_w_arabescato.jpg` },
  { code: "SI-20", name: "Sabbia / Orientale 65 + Botticino N.4", img: `${BASE}/imgi_9_SI_20_sabbia_w_65orientale_35botticino-n.4.jpg` },
  { code: "SI-02", name: "Neutro / Carrara 75 + Nero Ebano N.4", img: `${BASE}/imgi_10_SI_02_neutro_w_75carrara-25nero-ebano-n.4.jpg` },
  { code: "SI-15", name: "Neutro / Carrara N.3", img: `${BASE}/imgi_11_SI_15_neutro_w_carrara-n.3.jpg` },
  { code: "SI-14", name: "Grigio / Occhialino", img: `${BASE}/imgi_12_SI_14_grigio_w_occhialino.jpg` },
  { code: "SI-04", name: "Antracite / Carrara 50 5-8 + Carrara 8-12", img: `${BASE}/imgi_13_SI_04_antracite_g_carrara-50-5-8-50-8-12.jpg` },
  { code: "SI-13", name: "Neutro / Verde Alpi", img: `${BASE}/imgi_14_SI_13_neutro_g_verde-alpi.jpg` },
];

export default function SassoitaliaFeatures() {
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
          Sassoitalia is available in a wide range of colour combinations using natural marble and stone aggregates.
        </p>

        <div className="mt-12 border-t border-[#1d2830]/25 pt-5">
          <div className="flex items-end justify-between gap-5">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#5d686b]">Colour range</p>
              <h2 className="mt-1 text-[30px] font-light text-[#1d2830] sm:text-[36px]">Sassoitalia</h2>
            </div>
            {overflow && (
              <div className="hidden md:flex gap-2">
                <button type="button" onClick={() => scroll(-1)} className="grid h-9 w-9 place-items-center border border-[#1d2830]/40 text-lg text-[#1d2830] transition-colors hover:bg-[#1d2830] hover:text-white" aria-label="Previous">←</button>
                <button type="button" onClick={() => scroll(1)} className="grid h-9 w-9 place-items-center border border-[#1d2830]/40 text-lg text-[#1d2830] transition-colors hover:bg-[#1d2830] hover:text-white" aria-label="Next">→</button>
              </div>
            )}
          </div>
          <div ref={sliderRef} className="mt-5 flex snap-x snap-mandatory gap-3 overflow-x-auto pb-3 scrollbar-hide">
            {swatches.map((swatch) => (
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
        </div>
      </div>
    </section>
  );
}

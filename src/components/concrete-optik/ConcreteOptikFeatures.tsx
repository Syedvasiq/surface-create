"use client";

import Image from "next/image";
import { useRef, useState, useEffect } from "react";

type Swatch = { code: string; name: string; img: string };

const BASE = "/images/microtopping-wall/colours";

const colourFamilies: { name: string; label: string; swatches: Swatch[] }[] = [
  {
    name: "FC",
    label: "Finish Coat",
    swatches: [
      { code: "Y12", name: "Yellow 28g", img: `${BASE}/imgi_14_Y12-YELLOW-28-g_FC.jpg` },
      { code: "Y13", name: "Ivory 28g", img: `${BASE}/imgi_15_Y13-IVORY-28-g_FC.jpg` },
      { code: "Y14", name: "Ivory 14g", img: `${BASE}/imgi_16_Y14-IVORY-14-g_FC.jpg` },
      { code: "O1", name: "Beige Grey 14g", img: `${BASE}/imgi_17_O1-BEIGE-GREY-14-g_FC.jpg` },
      { code: "O2", name: "Beige Grey 28g", img: `${BASE}/imgi_18_O2-BEIGE-GREY-28-g_FC.jpg` },
      { code: "O3", name: "Chocolate 28g", img: `${BASE}/imgi_19_O3-CHOCOLATE-28-g_FC.jpg` },
      { code: "O4", name: "Chocolate 56g", img: `${BASE}/imgi_20_O4-CHOCOLATE-56-g_FC.jpg` },
      { code: "O5", name: "Charcoal 42g", img: `${BASE}/imgi_21_O5-CHARCOAL-42-g_FC.jpg` },
      { code: "O6", name: "Charcoal 70g", img: `${BASE}/imgi_22_O6-CHARCOAL-70-g_FC.jpg` },
      { code: "O7", name: "Fossile 100g", img: `${BASE}/imgi_23_O7-FOSSILE-100-g_FC.jpg` },
      { code: "O8", name: "Cacao 130g", img: `${BASE}/imgi_24_O8-CACAO-130-g_FC.jpg` },
      { code: "O9", name: "Cacao 80g", img: `${BASE}/imgi_25_O9-CACAO-80-g_FC.jpg` },
      { code: "O10", name: "Cannella 100g", img: `${BASE}/imgi_26_O10-CANNELLA-100-g_FC.jpg` },
      { code: "O11", name: "Terracotta 56g", img: `${BASE}/imgi_27_O11-TERRACOTTA-56-g_FC.jpg` },
      { code: "O12", name: "Maplewood 56g", img: `${BASE}/imgi_28_O12-MAPLEWOOD-56-g_FC.jpg` },
      { code: "O13", name: "Beige 56g", img: `${BASE}/imgi_29_O13-BEIGE-56-g_FC.jpg` },
      { code: "O14", name: "Beige 28g", img: `${BASE}/imgi_30_O14-BEIGE-28-g_FC.jpg` },
      { code: "R1", name: "Lavanda 14g", img: `${BASE}/imgi_31_R1-LAVANDA-14-g_FC.jpg` },
      { code: "R2", name: "Lavanda 56g", img: `${BASE}/imgi_32_R2-LAVANDA-56-g_FC.jpg` },
      { code: "R3", name: "Brown 28g", img: `${BASE}/imgi_33_R3-BROWN-28-g_FC.jpg` },
      { code: "R4", name: "Beige Grey 56g", img: `${BASE}/imgi_34_R4-BEIGE-GREY-56-g_FC.jpg` },
      { code: "R5", name: "Brown 56g", img: `${BASE}/imgi_35_R5-BROWN-56-g_FC.jpg` },
      { code: "R6", name: "Brown 84g", img: `${BASE}/imgi_36_R6-BROWN-84-g_FC.jpg` },
      { code: "R7", name: "Bruno 50g", img: `${BASE}/imgi_37_R7-BRUNO-50-g_FC.jpg` },
      { code: "R8", name: "Bruno 80g", img: `${BASE}/imgi_38_R8-BRUNO-80-g_FC.jpg` },
      { code: "R9", name: "Moka 140g", img: `${BASE}/imgi_39_R9-MOKA-140-g_FC.jpg` },
      { code: "R10", name: "Ruggine 100g", img: `${BASE}/imgi_40_R10-RUGGINE-100-g_FC.jpg` },
      { code: "R11", name: "Rosso Mattone 112g", img: `${BASE}/imgi_41_R11-ROSSO-MATTONE-112-g_FC.jpg` },
      { code: "R12", name: "Rosso Mattone 56g", img: `${BASE}/imgi_42_R12-ROSSO-MATTONE-56-g_FC.jpg` },
      { code: "R13", name: "Rose 56g", img: `${BASE}/imgi_43_R13-ROSE-56-g_FC.jpg` },
      { code: "R14", name: "Rose 28g", img: `${BASE}/imgi_44_R14-ROSE-28-g_FC.jpg` },
      { code: "B1", name: "Silver Grey 56g", img: `${BASE}/imgi_45_B1-SILVER-GREY-56-g_FC.jpg` },
      { code: "B2", name: "Smoke 14g", img: `${BASE}/imgi_46_B2-SMOKE-14-g_FC.jpg` },
      { code: "B3", name: "Smoke 28g", img: `${BASE}/imgi_47_B3-SMOKE-28-g_FC.jpg` },
      { code: "B4", name: "Smoke 56g", img: `${BASE}/imgi_48_B4-SMOKE-56-g_FC.jpg` },
      { code: "B5", name: "Grafite 11g", img: `${BASE}/imgi_49_B5-GRAFITE-11-g_FC.jpg` },
      { code: "B6", name: "Grafite 14g", img: `${BASE}/imgi_50_B6-GRAFITE-14-g_FC.jpg` },
      { code: "B7", name: "Grafite 28g", img: `${BASE}/imgi_51_B7-GRAFITE-28-g_FC.jpg` },
      { code: "B8", name: "Grafite 56g", img: `${BASE}/imgi_52_B8-GRAFITE-56-g_FC.jpg` },
      { code: "B9", name: "Black 56g", img: `${BASE}/imgi_53_B9-BLACK-56-g_FC.jpg` },
      { code: "B10", name: "Oceano 150g", img: `${BASE}/imgi_54_B10-OCEANO-150-g_FC-1.jpg` },
      { code: "B11", name: "Blue 56g", img: `${BASE}/imgi_55_B11-BLUE-56-g_FC-1.jpg` },
      { code: "B12", name: "Blue 28g", img: `${BASE}/imgi_56_B12-BLUE-28-g_FC-1.jpg` },
      { code: "B13", name: "Sky Blue 56g", img: `${BASE}/imgi_57_B13-SKY-BLUE-56-g_FC-1.jpg` },
      { code: "B14", name: "Pale Blue 56g", img: `${BASE}/imgi_58_B14-PALE-BLUE-56-g_FC-1.jpg` },
      { code: "G1", name: "Marine 14g", img: `${BASE}/imgi_59_G1-MARINE-14-g_FC.jpg` },
      { code: "G2", name: "Marine 28g", img: `${BASE}/imgi_60_G2-MARINE-28-g_FC.jpg` },
      { code: "G3", name: "Marine 56g", img: `${BASE}/imgi_61_G3-MARINE-56-g_FC.jpg` },
      { code: "G4", name: "Argilla 85g", img: `${BASE}/imgi_62_G4-ARGILLA-85g_FC.jpg` },
      { code: "G5", name: "Argilla 18g", img: `${BASE}/imgi_63_G5-ARGILLA-18-g_FC.jpg` },
      { code: "G6", name: "Argilla 28g", img: `${BASE}/imgi_64_G6-ARGILLA-28-g_FC.jpg` },
      { code: "G7", name: "Argilla 56g", img: `${BASE}/imgi_65_G7-ARGILLA-56-g_FC.jpg` },
      { code: "G8", name: "Muschio 140g", img: `${BASE}/imgi_66_G8-MUSCHIO-140-g-black-10-g_FC.jpg` },
      { code: "G9", name: "Muschio 150g", img: `${BASE}/imgi_67_G9-MUSCHIO-150-g_FC.jpg` },
      { code: "G10", name: "Foresta 150g", img: `${BASE}/imgi_68_G10-FORESTA-150-g_FC.jpg` },
      { code: "G11", name: "Prato 100g", img: `${BASE}/imgi_69_G11-PRATO-100-g_FC.jpg` },
      { code: "G12", name: "Pistacchio 30g", img: `${BASE}/imgi_70_G12-PISTACCHIO-30-g_FC.jpg` },
      { code: "G13", name: "Pistacchio 15g", img: `${BASE}/imgi_71_G13-PISTACCHIO-15-g_FC.jpg` },
      { code: "G14", name: "Acquamarina 56g", img: `${BASE}/imgi_72_G14-ACQUAMARINA-56-g_FC-1.jpg` },
    ],
  },
  {
    name: "HP",
    label: "High Performance",
    swatches: [
      { code: "Y1", name: "White 28g", img: `${BASE}/imgi_73_Y1-WHITE-28-g_HP.jpg` },
      { code: "Y2", name: "Tortora 14g", img: `${BASE}/imgi_74_Y2-TORTORA-14-g_HP.jpg` },
      { code: "Y3", name: "Olive Grey 28g", img: `${BASE}/imgi_75_Y3-OLIVE-GREY-28-g_HP.jpg` },
      { code: "Y4", name: "Olive Grey 75g", img: `${BASE}/imgi_76_Y4-OLIVE-GREY-75-g_HP.jpg` },
      { code: "Y5", name: "Occhialino 70g", img: `${BASE}/imgi_77_Y5-OCCHIALINO-70-g_HP.jpg` },
      { code: "Y6", name: "Ardesia 35g", img: `${BASE}/imgi_78_Y6-ARDESIA-35g_HP.jpg` },
      { code: "Y7", name: "Ardesia 45g", img: `${BASE}/imgi_79_Y7-ARDESIA-45-g_HP.jpg` },
      { code: "Y8", name: "Pietra 100g", img: `${BASE}/imgi_80_Y8-PIETRA-100-g_HP.jpg` },
      { code: "Y9", name: "Sigaro 125g", img: `${BASE}/imgi_81_Y9-SIGARO-125-g_HP.jpg` },
      { code: "Y10", name: "Ocra 85g", img: `${BASE}/imgi_82_Y10-OCRA-85-g_HP.jpg` },
      { code: "Y11", name: "Yellow 56g", img: `${BASE}/imgi_83_Y11-YELLOW-56-g_HP.jpg` },
      { code: "Y12", name: "Yellow 28g", img: `${BASE}/imgi_84_Y12-YELLOW-28-g_HP.jpg` },
      { code: "Y13", name: "Ivory 28g", img: `${BASE}/imgi_85_Y13-IVORY-28-g_HP.jpg` },
      { code: "Y14", name: "Ivory 14g", img: `${BASE}/imgi_86_Y14-IVORY-14-g_HP.jpg` },
      { code: "O1", name: "Beige Grey 14g", img: `${BASE}/imgi_87_O1-BEIGE-GREY-14-g_HP.jpg` },
      { code: "O2", name: "Beige Grey 28g", img: `${BASE}/imgi_88_O2-BEIGE-GREY-28-g_HP.jpg` },
      { code: "O3", name: "Chocolate 28g", img: `${BASE}/imgi_89_O3-CHOCOLATE-28-g_HP.jpg` },
      { code: "O4", name: "Chocolate 56g", img: `${BASE}/imgi_90_O4-CHOCOLATE-56-g_HP.jpg` },
      { code: "O5", name: "Charcoal 42g", img: `${BASE}/imgi_91_O5-CHARCOAL-42-g_HP.jpg` },
      { code: "O6", name: "Charcoal 70g", img: `${BASE}/imgi_92_O6-CHARCOAL-70-g_HP.jpg` },
      { code: "O7", name: "Fossile 100g", img: `${BASE}/imgi_93_O7-FOSSILE-100-g_HP.jpg` },
      { code: "O8", name: "Cacao 130g", img: `${BASE}/imgi_94_O8-CACAO-130-g_HP.jpg` },
      { code: "O9", name: "Cacao 80g", img: `${BASE}/imgi_95_O9-CACAO-80-g_HP.jpg` },
      { code: "O10", name: "Cannella 100g", img: `${BASE}/imgi_96_O10-CANNELLA-100-g_HP.jpg` },
      { code: "O11", name: "Terracotta 56g", img: `${BASE}/imgi_97_O11-TERRACOTTA-56-g_HP.jpg` },
      { code: "O12", name: "Maplewood 56g", img: `${BASE}/imgi_98_O12-MAPLEWOOD-56-g_HP.jpg` },
      { code: "O13", name: "Beige 56g", img: `${BASE}/imgi_99_O13-BEIGE-56-g_HP.jpg` },
      { code: "O14", name: "Beige 28g", img: `${BASE}/imgi_100_O14-BEIGE-28-g_HP.jpg` },
      { code: "R1", name: "Lavanda 14g", img: `${BASE}/imgi_101_R1-LAVANDA-14-g_HP.jpg` },
      { code: "R2", name: "Lavanda 56g", img: `${BASE}/imgi_102_R2-LAVANDA-56-g_HP.jpg` },
      { code: "R3", name: "Brown 28g", img: `${BASE}/imgi_103_R3-BROWN-28-g_HP.jpg` },
      { code: "R4", name: "Beige Grey 56g", img: `${BASE}/imgi_104_R4-BEIGE-GREY-56-g_HP.jpg` },
      { code: "R5", name: "Brown 56g", img: `${BASE}/imgi_105_R5-BROWN-56-g_HP.jpg` },
      { code: "R6", name: "Brown 84g", img: `${BASE}/imgi_106_R6-BROWN-84-g_HP.jpg` },
      { code: "R7", name: "Bruno 50g", img: `${BASE}/imgi_107_R7-BRUNO-50-g_HP.jpg` },
      { code: "R8", name: "Bruno 80g", img: `${BASE}/imgi_108_R8-BRUNO-80-g_HP.jpg` },
      { code: "R9", name: "Moka 140g", img: `${BASE}/imgi_109_R9-MOKA-140-g_HP.jpg` },
      { code: "R10", name: "Ruggine 100g", img: `${BASE}/imgi_110_R10-RUGGINE-100-g_HP.jpg` },
      { code: "R11", name: "Rosso Mattone 112g", img: `${BASE}/imgi_111_R11-ROSSO-MATTONE-112g_HP.jpg` },
      { code: "R12", name: "Rosso Mattone 56g", img: `${BASE}/imgi_112_R12-ROSSO-MATTONE-56-g_HP.jpg` },
      { code: "R13", name: "Rose 56g", img: `${BASE}/imgi_113_R13-ROSE-56-g_HP.jpg` },
      { code: "R14", name: "Rose 28g", img: `${BASE}/imgi_114_R14-ROSE-28-g_HP.jpg` },
      { code: "B1", name: "Silver Grey 56g", img: `${BASE}/imgi_115_B1-SILVER-GREY-56-g_HP.jpg` },
      { code: "B2", name: "Smoke 14g", img: `${BASE}/imgi_116_B2-SMOKE-14-g_HP.jpg` },
      { code: "B3", name: "Smoke 28g", img: `${BASE}/imgi_117_B3-SMOKE-28-g_HP.jpg` },
      { code: "B4", name: "Smoke 56g", img: `${BASE}/imgi_118_B4-SMOKE-56-g_HP.jpg` },
      { code: "B5", name: "Grafite 11g", img: `${BASE}/imgi_119_B5-GRAFITE-11-g_HP.jpg` },
      { code: "B6", name: "Grafite 14g", img: `${BASE}/imgi_120_B6-GRAFITE-14-g_HP.jpg` },
      { code: "B7", name: "Grafite 28g", img: `${BASE}/imgi_121_B7-GRAFITE-28-g_HP.jpg` },
      { code: "B8", name: "Grafite 56g", img: `${BASE}/imgi_122_B8-GRAFITE-56-g_HP.jpg` },
      { code: "B9", name: "Black 56g", img: `${BASE}/imgi_123_B9-BLACK-56-g_HP.jpg` },
      { code: "B10", name: "Oceano 150g", img: `${BASE}/imgi_124_B10-OCEANO-150-g_HP.jpg` },
      { code: "B11", name: "Blue 56g", img: `${BASE}/imgi_125_B11-BLUE-56-g_HP.jpg` },
      { code: "B12", name: "Blue 28g", img: `${BASE}/imgi_126_B12-BLUE-28-g_HP.jpg` },
      { code: "B13", name: "Sky Blue 56g", img: `${BASE}/imgi_127_B13-SKY-BLUE-56-g_HP.jpg` },
      { code: "B14", name: "Pale Blue 56g", img: `${BASE}/imgi_128_B14-PALE-BLUE-56-g_HP.jpg` },
      { code: "G1", name: "Marine 14g", img: `${BASE}/imgi_129_G1-MARINE-14-g_HP.jpg` },
      { code: "G2", name: "Marine 28g", img: `${BASE}/imgi_130_G2-MARINE-28-g_HP.jpg` },
      { code: "G3", name: "Marine 56g", img: `${BASE}/imgi_131_G3-MARINE-56-g_HP.jpg` },
      { code: "G4", name: "Argilla 85g", img: `${BASE}/imgi_132_G4-ARGILLA-85g_HP.jpg` },
      { code: "G5", name: "Argilla 18g", img: `${BASE}/imgi_133_G5-ARGILLA-18-g_HP.jpg` },
      { code: "G6", name: "Argilla 28g", img: `${BASE}/imgi_134_G6-ARGILLA-28-g_HP.jpg` },
      { code: "G7", name: "Argilla 56g", img: `${BASE}/imgi_135_G7-ARGILLA-56-g_HP.jpg` },
      { code: "G8", name: "Muschio 140g", img: `${BASE}/imgi_136_G8-MUSCHIO-140-g-black-10-g_HP.jpg` },
      { code: "G9", name: "Muschio 150g", img: `${BASE}/imgi_137_G9-MUSCHIO-150-g_HP.jpg` },
      { code: "G10", name: "Foresta 150g", img: `${BASE}/imgi_138_G10-FORESTA-150-g_HP.jpg` },
      { code: "G11", name: "Prato 100g", img: `${BASE}/imgi_139_G11-PRATO-100-g_HP.jpg` },
      { code: "G12", name: "Pistacchio 30g", img: `${BASE}/imgi_140_G12-PISTACCHIO-30-g_HP.jpg` },
      { code: "G13", name: "Pistacchio 15g", img: `${BASE}/imgi_141_G13-PISTACCHIO-15-g_HP.jpg` },
      { code: "G14", name: "Acquamarina 56g", img: `${BASE}/imgi_142_G14-ACQUAMARINA-56-g_HP-2.jpg` },
    ],
  },
];

export default function ConcreteOptikFeatures() {
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
      <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#5d686b]">Colour Collection</p>
      <h2 className="mt-3 text-[32px] font-light leading-tight text-[#1d2830] sm:text-[42px]">The colours of Concrete Optik</h2>
      <div className="mt-12 space-y-14 lg:space-y-20">
        {colourFamilies.map((family, familyIndex) => (
          <section key={family.name} className="border-t border-[#1d2830]/25 pt-5">
            <div className="flex items-end justify-between gap-5">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#5d686b]">Concrete Optik</p>
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

"use client";

import { useState } from "react";

const faqs = [
  {
    q: "Do Stenciltop surfaces have to be renewed after a few years?",
    a: "Stenciltop surfaces are designed for long-term durability. Periodic re-application of the protective sealer is recommended to maintain appearance and performance, but the surface itself does not require renewal under normal conditions.",
  },
  {
    q: "How long does it take to lay a Stenciltop finish?",
    a: "Installation times depend on the area size and design complexity. Typically a team of Surface Crete applicators can complete a standard Stenciltop installation in 1–2 days. The surface can receive foot traffic within a few hours of sealing.",
  },
  {
    q: "If oil is spilt on Stenciltop, will it stain?",
    a: "When correctly sealed, Stenciltop resists oil and most common liquids. Spills should be cleaned promptly to prevent prolonged contact. The protective sealer acts as a barrier and should be re-applied periodically.",
  },
  {
    q: "Can Stenciltop also be used on vertical surfaces?",
    a: "Stenciltop is primarily designed for horizontal surfaces such as floors, patios and pathways. For vertical applications, please consult our technical team for specific guidance.",
  },
  {
    q: "Is it suitable for surfaces of any size?",
    a: "Yes. Stenciltop is suitable for surfaces of any size, from small residential patios to large commercial areas, car parks and public spaces.",
  },
  {
    q: "Is Stenciltop resistant to traffic and atmospheric agents?",
    a: "Yes. Stenciltop provides high wear resistance and, with the appropriate sealer, is resistant to UV exposure, rain, frost and other atmospheric agents.",
  },
  {
    q: "What maintenance does a Stenciltop floor require?",
    a: "Regular cleaning with water and a neutral detergent is sufficient. Periodic re-application of the protective sealer is recommended depending on usage and exposure to maintain the surface's appearance and durability.",
  },
  {
    q: "Can personalised rosettes or decorations be created?",
    a: "Yes. Custom stencil patterns, borders, rosettes and decorative designs can be created using bespoke paper stencils, allowing for highly personalised finishes.",
  },
  {
    q: "Is it necessary to create control joints by cutting the slab?",
    a: "Control joints in the existing substrate should be respected and carried through the Stenciltop finish. Our applicators will advise on the correct approach for each project.",
  },
  {
    q: "What colours are available?",
    a: "Stenciltop is available in 29 Colour Hardener shades ranging from light neutrals to deep tones, allowing a wide variety of design combinations.",
  },
  {
    q: "Is a Stenciltop slab resistant to traffic?",
    a: "Yes. Stenciltop is resistant to foot traffic and light vehicle traffic. For heavy vehicular use, please consult our technical team for the most suitable specification.",
  },
  {
    q: "Can I put Stenciltop over a self-locking floor?",
    a: "Yes, provided the self-locking surface is stable, level and properly prepared. A suitable primer must be applied to ensure correct adhesion of the Stenciltop system.",
  },
  {
    q: "Can I put Stenciltop over an existing tiled floor?",
    a: "Yes, provided the existing tiles are firmly bonded, level and in good condition. The surface must be prepared with the appropriate primer before application.",
  },
  {
    q: "Can Stenciltop be installed over a bitumen sheath?",
    a: "Yes, Stenciltop can be installed over a bitumen sheath provided the surface is structurally sound, clean and properly prepared with a suitable primer to ensure adhesion.",
  },
];

export default function StenciltopFAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <section className="bg-[#f0ece6] px-6 pb-16 pt-12 sm:px-10 lg:px-12 lg:pb-32 lg:pt-16 md:mx-[15px] md:[width:calc(100%-30px)] mt-0 mb-[15px]">
      <div className="mb-10">
        <p className="text-[11px] tracking-widest text-gray-500 uppercase mb-3">FAQ</p>
        <h2 className="text-[26px] sm:text-[32px] lg:text-[38px] font-light text-gray-900 leading-snug">Frequently Asked Questions</h2>
      </div>
      <div>
        {faqs.map((faq, i) => {
          const isOpen = openIdx === i;
          return (
            <div key={i} className="border-t border-gray-300 last:border-b">
              <button
                onClick={() => setOpenIdx(isOpen ? null : i)}
                className="flex w-full items-start justify-between py-5 text-left text-[15px] font-semibold leading-snug text-[#1d2830] transition-opacity hover:opacity-70"
                aria-expanded={isOpen}
              >
                <span className="flex gap-2">
                  <span className="font-medium text-gray-400 shrink-0">{i + 1} &ndash;</span>
                  <span>{faq.q}</span>
                </span>
                <span className="ml-4 mt-0.5 shrink-0 text-gray-500">
                  {isOpen ? (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" /></svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" d="M12 5v14M5 12h14" /></svg>
                  )}
                </span>
              </button>
              {isOpen && (
                <div className="flex gap-2 pb-5 pr-8">
                  <span className="shrink-0 font-medium text-transparent select-none">{i + 1} &ndash;</span>
                  <p className="text-[14px] leading-relaxed text-[#4b5359] max-w-3xl">{faq.a}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}

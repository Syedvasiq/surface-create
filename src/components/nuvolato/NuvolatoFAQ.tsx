"use client";

import { useState } from "react";

const faqs = [
  {
    q: "What is Nuvolato Architop?",
    a: "Nuvolato Architop is a cement-based decorative coating that creates a distinctive cloud-like (nuvolato) effect on floors and walls. It combines aesthetic beauty with high durability.",
  },
  {
    q: "Can Nuvolato Architop be used outdoors?",
    a: "Yes. Nuvolato Architop can be applied on exterior surfaces including terraces and outdoor floors using specific outdoor-grade formulations for UV stability and weather resistance.",
  },
  {
    q: "Can it be applied over existing tiles or floors?",
    a: "Yes. With the correct preparation and primer system, Nuvolato Architop can be applied directly over existing tiles, concrete or screed without demolition.",
  },
  {
    q: "Is it compatible with underfloor heating?",
    a: "Yes. Nuvolato Architop is fully compatible with underfloor heating systems and handles thermal expansion and contraction cycles without cracking.",
  },
  {
    q: "Can I get a seamless, joint-free surface?",
    a: "Yes. Seamless, joint-free surfaces are one of Nuvolato Architop's defining characteristics. It can cover large areas continuously across floors, walls and transitions.",
  },
  {
    q: "How thick is the application?",
    a: "Nuvolato Architop is applied in just a few millimetres, making it ideal for renovation projects where preserving existing floor levels is essential.",
  },
  {
    q: "Is Nuvolato Architop safe for health?",
    a: "Yes. Once sealed, Nuvolato Architop surfaces are non-toxic, hypoallergenic and easy to keep hygienic.",
  },
  {
    q: "What colours are available?",
    a: "Nuvolato Architop is available in a wide range of colours across five families, allowing virtually unlimited combinations.",
  },
  {
    q: "Can it be used in bathrooms and wet areas?",
    a: "Yes. With the correct waterproofing system applied underneath, Nuvolato Architop is fully suitable for wet areas including shower enclosures and bath surrounds.",
  },
  {
    q: "How do I clean and maintain a Nuvolato Architop surface?",
    a: "Daily cleaning with a damp mop and a pH-neutral floor cleaner is sufficient. Avoid bleach, acid-based products and abrasive pads.",
  },
  {
    q: "What finishes are available?",
    a: "Nuvolato Architop can achieve matte, satin and gloss finishes. The cloud effect can be customised in intensity and colour depth.",
  },
  {
    q: "How long does installation take?",
    a: "A standard Nuvolato Architop installation typically takes 3-5 days including preparation, application and sealing, depending on surface area and complexity.",
  },
  {
    q: "Is Nuvolato Architop a resin?",
    a: "No. Nuvolato Architop is a cement-based decorative coating, not a resin. Its cementitious base gives it a natural, breathable character.",
  },
];

export default function NuvolatoFAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <section className="bg-[#f0ece6] px-6 pb-16 pt-12 sm:px-10 lg:px-12 lg:pb-32 lg:pt-16 md:mx-[15px] md:[width:calc(100%-30px)] mt-0 mb-[15px]">

      <div className="mb-10">
        <p className="text-[11px] tracking-widest text-gray-500 uppercase mb-3">FAQ</p>
        <h2 className="text-[26px] sm:text-[32px] lg:text-[38px] font-light text-gray-900 leading-snug">
          Frequently Asked Questions
        </h2>
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
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 5v14M5 12h14" />
                    </svg>
                  )}
                </span>
              </button>

              {isOpen && (
                <div className="flex gap-2 pb-5 pr-8">
                  <span className="shrink-0 font-medium text-transparent select-none">{i + 1} &ndash;</span>
                  <p className="text-[14px] leading-relaxed text-[#4b5359] max-w-3xl">
                    {faq.a}
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";

const faqs = [
  {
    q: "I would like a uniform effect without clouds, is that possible?",
    a: "",
  },
  {
    q: "How is the flooring coloured?",
    a: "The colour comes from the Colour Hardener product which is available in a wide variety of colours which is incorporated in the fresh concrete, making the colour integral and throughout the mix. This is not a varnish or resin spread on the floor surface.",
  },
  {
    q: "I have underfloor heating: can I create a Nuvolato Architop floor?",
    a: "",
  },
  {
    q: "Is it necessary to create crack control joints by cutting the flooring?",
    a: "",
  },
  {
    q: "Can cracks appear over time?",
    a: "",
  },
  {
    q: "How can a Nuvolato Architop floor be kept clean?",
    a: "",
  },
  {
    q: "If oil, water or other liquids are spilled, will they stain the floor?",
    a: "",
  },
  {
    q: "How thick does Nuvolato Architop flooring have to be?",
    a: "",
  },
  {
    q: "Are these surfaces resistant to walking, impacts and car and heavy vehicle traffic?",
    a: "",
  },
  {
    q: "What is the difference between Acid Stain and Nuvolato Architop?",
    a: "",
  },
  {
    q: "Can a Nuvolato Architop flooring be placed on top of an existing floor?",
    a: "",
  },
  {
    q: "Can Nuvolato Architop Flooring also be created outside?",
    a: "",
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
                {faq.a && (
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
                )}
              </button>

              {isOpen && faq.a && (
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

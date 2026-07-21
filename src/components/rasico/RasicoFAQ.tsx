"use client";

import { useState } from "react";

const faqs = [
  { q: "Is it necessary to renew Rasico surfaces after a few years?", a: "" },
  { q: "How long does it take to install a Rasico floor?", a: "" },
  { q: "If oil is spilled, will the Rasico floor stain?", a: "" },
  { q: "Can Rasico also be used on vertical surfaces?", a: "" },
  { q: "Is it suitable for surfaces of any size?", a: "" },
  { q: "Is Rasico resistant to traffic and weathering?", a: "" },
  { q: "What maintenance does a Rasico floor require?", a: "" },
  { q: "Can rosettes or custom decorations be created?", a: "" },
  { q: "Is it necessary to create crack control joints by cutting the floor?", a: "" },
  { q: "What colours are available?", a: "" },
  { q: "Is the Rasico floor resistant to vehicle traffic?", a: "" },
  { q: "Can Rasico be applied over an existing interlocking paving surface?", a: "" },
  { q: "Can Rasico be applied over an existing tiled floor?", a: "" },
  { q: "Can Rasico be applied over a bituminous membrane?", a: "" },
];

export default function RasicoFAQ() {
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
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" /></svg>
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" d="M12 5v14M5 12h14" /></svg>
                    )}
                  </span>
                )}
              </button>
              {isOpen && faq.a && (
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

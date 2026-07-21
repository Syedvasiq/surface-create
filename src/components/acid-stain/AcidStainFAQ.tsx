"use client";

import { useState } from "react";

const faqs = [
  {
    q: "Once the stained surface is finished, do the acids used release harmful substances?",
    a: "No. Once the acid staining process is complete and the surface has been thoroughly washed and neutralised, no harmful substances remain. The chemical reaction is complete and the resulting surface is safe for normal use.",
  },
  {
    q: "I have underfloor heating: can I create an acid stained floor?",
    a: "Yes. Acid-Stain is fully compatible with underfloor heating systems. The staining process penetrates the concrete surface and does not affect the structural or thermal performance of the slab.",
  },
  {
    q: "Is it necessary to create control joints by cutting the flooring?",
    a: "Existing control joints in the concrete substrate should be respected and carried through the finished surface. Our applicators will advise on the correct approach for each specific project.",
  },
  {
    q: "Can cracks appear over time?",
    a: "Acid-Stain does not add structural strength to the concrete. Any cracking that occurs is a result of the underlying concrete substrate. Proper substrate preparation and joint placement minimise the risk of cracking.",
  },
  {
    q: "How can an acid stained floor be kept clean?",
    a: "Daily cleaning with a damp mop and a pH-neutral floor cleaner is sufficient. Avoid bleach, acid-based products and abrasive pads which can damage the sealer and affect the surface appearance.",
  },
  {
    q: "If oil, water or other liquids are spilled, will they stain the floor?",
    a: "When correctly sealed, Acid-Stain surfaces resist water, oil and common household liquids. Spills should be wiped promptly. The protective sealer should be re-applied periodically to maintain stain resistance.",
  },
  {
    q: "Can stairs and vertical surfaces be treated?",
    a: "Yes. Acid-Stain can be applied to stairs and vertical surfaces, giving architects and designers the ability to create continuous, cohesive environments throughout a space.",
  },
  {
    q: "How thick does an acid stained floor have to be?",
    a: "Acid-Stain is applied directly to an existing concrete surface — it does not add significant thickness. The concrete substrate should be a minimum of 5–7 cm thick and in sound condition.",
  },
  {
    q: "Are stained surfaces resistant to walking, impact and car and heavy vehicle traffic?",
    a: "Yes. With the correct sealer applied, Acid-Stain surfaces are resistant to foot traffic and normal impact loads. For heavy vehicular traffic, a heavy-duty sealer specification is recommended.",
  },
  {
    q: "What is the difference between an acid stained floor and Nuvolato?",
    a: "Acid-Stain uses chemical reactions with the existing concrete to create colour — the result depends on the concrete's mineral content and is always unique. Nuvolato Architop is a cement-based overlay applied over the existing surface with controlled colour hardeners, offering more predictable results.",
  },
  {
    q: "Can an acid stained floor be placed over an existing floor?",
    a: "Acid-Stain reacts chemically with concrete, so it must be applied directly to a concrete substrate. It cannot be applied over tiles, wood or other non-concrete surfaces.",
  },
  {
    q: "Can Acid-Stain also be applied externally?",
    a: "Yes. Acid-Stain can be applied to exterior concrete surfaces. UV-resistant sealers are recommended for outdoor applications to protect the surface from weathering and fading.",
  },
  {
    q: "How are the special colour effects of the Acid-Stain surface created?",
    a: "The unique effects are created by the chemical reaction between the metallic salt compounds in the acid stain and the free lime in the concrete. Variations in the concrete's mineral content, porosity and texture produce the characteristic variegated, natural-looking patterns.",
  },
  {
    q: "I would like a uniform effect, is that possible?",
    a: "Acid-Stain inherently produces a variegated, non-uniform effect due to the nature of the chemical reaction. A completely uniform result is not achievable with acid staining. For a more controlled, uniform finish, Microtopping or Nuvolato Architop may be more suitable.",
  },
  {
    q: "Can Acid-Stain floors be created in all colours?",
    a: "Acid-Stain is available in 7 colours — Amber, Terracotta, Ebony, Brown, Turquoise, Fern Green and Jade. These can be used individually or combined to create a wide range of effects. The final result also depends on the concrete substrate.",
  },
];

export default function AcidStainFAQ() {
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

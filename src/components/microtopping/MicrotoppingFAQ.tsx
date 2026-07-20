"use client";

import { useState } from "react";

const faqs = [
  {
    q: "Can Microtopping also be used outside?",
    a: "Yes. Microtopping can be applied on exterior surfaces including terraces, facades and outdoor floors. Specific outdoor-grade formulations are used to ensure UV stability and resistance to weathering.",
  },
  {
    q: "Can flooring be restored without removing the existing surfaces?",
    a: "Absolutely. One of Microtopping's key advantages is that it can be applied directly over existing tiles, concrete or screed without demolition, saving time, cost and disruption.",
  },
  {
    q: "Can Microtopping be applied on top of tiles or wooden parquet floors?",
    a: "Yes, with the correct preparation and primer system. Tiles must be firmly bonded and parquet must be stabilised. Our technical team will assess suitability before application.",
  },
  {
    q: "Can I restore the floor without taking out the existing doors and windows?",
    a: "In most cases, yes. At only 3mm thickness, Microtopping adds minimal height and typically does not require removal of door frames or windows.",
  },
  {
    q: "I have underfloor heating; can I use Microtopping?",
    a: "Yes. Microtopping is fully compatible with underfloor heating systems. The product is flexible enough to handle thermal expansion and contraction cycles without cracking.",
  },
  {
    q: "Can I obtain a continuous surface area without joints?",
    a: "Yes. Seamless, joint-free surfaces are one of Microtopping's defining characteristics. It can cover large areas continuously across floors, walls and transitions.",
  },
  {
    q: "Is a Microtopping floor safe for health?",
    a: "Yes. Once sealed, Microtopping surfaces are non-toxic, hypoallergenic and easy to keep hygienic. They do not harbour dust mites or allergens.",
  },
  {
    q: "Is Microtopping certified?",
    a: "Yes. Microtopping meets international quality and safety standards. Certifications are available on request through our technical documentation.",
  },
  {
    q: "I have an ultra-modern house: is Microtopping recommended?",
    a: "Absolutely. Its seamless, minimalist aesthetic makes it a perfect fit for contemporary and ultra-modern interiors, complementing open-plan spaces and clean architectural lines.",
  },
  {
    q: "I have a restored farmhouse: is Microtopping recommended?",
    a: "Yes. Microtopping's warm, natural textures work beautifully in rustic and restored settings, providing a modern surface with an organic character that respects the existing architecture.",
  },
  {
    q: "I have a restaurant, a bar, a hotel: is Microtopping recommended?",
    a: "Highly recommended. Microtopping is ideal for hospitality environments — durable, easy to clean, and available in a wide palette that can be customised to match your brand identity.",
  },
  {
    q: "I have a shop or a showroom: is Microtopping recommended?",
    a: "Yes. Its seamless appearance creates an uncluttered, premium look perfect for retail and showroom floors and walls, and it holds up well under heavy footfall.",
  },
  {
    q: "Can I apply Microtopping in the bathroom, shower cubicle or washbasin?",
    a: "Yes. With the correct waterproofing system applied underneath, Microtopping is fully suitable for wet areas including shower enclosures, bath surrounds and washbasins.",
  },
  {
    q: "Are the surfaces resistant to tread and impacts?",
    a: "Yes. Microtopping is a high-strength coating with excellent abrasion resistance. Once sealed, it withstands daily foot traffic and normal impact loads.",
  },
  {
    q: "Can kitchen tops and bar counters be made in Microtopping?",
    a: "Yes. Microtopping can be applied to kitchen countertops and bar surfaces. The sealed finish is resistant to moisture and staining, though trivets are recommended for very hot items.",
  },
  {
    q: "What colours are available?",
    a: "Microtopping is available in a wide range of colours, allowing virtually unlimited combinations. Speak to our team for a customised palette.",
  },
  {
    q: "Can I change the colour of the surfaces once created?",
    a: "Yes, in most cases. A new layer of Microtopping can be applied over an existing surface to change the colour, subject to surface condition and preparation.",
  },
  {
    q: "On average, how long does it take to create a surface in Microtopping?",
    a: "A standard Microtopping floor installation typically takes 3-5 days including preparation, application and sealing. Timings vary depending on surface area and complexity.",
  },
  {
    q: "Can Microtopping surfaces be scratched?",
    a: "Like all decorative coatings, Microtopping can show fine surface scratches over time with heavy use. The satin or gloss sealer provides good scratch resistance for residential and light commercial use.",
  },
  {
    q: "If water, oil or other substances are spilled on it, will Microtopping stain?",
    a: "When correctly sealed, Microtopping resists water, oil and common household liquids. Spills should be wiped promptly to prevent prolonged contact, especially with acidic substances.",
  },
  {
    q: "How do you keep a Microtopping surface clean?",
    a: "Daily cleaning with a damp mop and a pH-neutral floor cleaner is sufficient. Avoid bleach, acid-based products and abrasive pads.",
  },
  {
    q: "What finishes and effects can be created with Microtopping?",
    a: "Microtopping can achieve matte, satin and gloss finishes, as well as clouded, acidified and velvet effects. Decorative inserts and custom textured finishes are also possible.",
  },
  {
    q: "Is Microtopping a resin?",
    a: "No. Microtopping is a cement-based decorative coating, not a resin. It contains fine aggregates and polymers for flexibility, but its base is cementitious, giving it a natural, breathable character.",
  },
];

export default function MicrotoppingFAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <section className="bg-[#f0ece6] px-6 pb-16 pt-12 sm:px-10 lg:px-12 lg:pb-32 lg:pt-16 md:mx-[15px] md:[width:calc(100%-30px)] mt-[15px] mb-[15px]">

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
                <span>
                  <span className="font-medium text-gray-400 mr-2">{i + 1} &ndash;</span>
                  {faq.q}
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
                <div className="max-w-3xl pb-5 pr-8">
                  <p className="text-[14px] leading-relaxed text-[#4b5359]">
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


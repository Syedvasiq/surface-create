"use client";

import { useState } from "react";

const faqs = [
  {
    q: "Can Microtopping® also be used outside?",
    a: "Yes, Microtopping® can be used on exterior surfaces when properly sealed and protected from direct weather exposure. For exterior applications, specific protective sealers are recommended.",
  },
  {
    q: "Can flooring be restored without removing the existing surfaces?",
    a: "Yes, Microtopping® can be applied directly over existing surfaces such as tiles, wood, or concrete without removal, making it an ideal solution for renovation projects.",
  },
  {
    q: "Can Microtopping® be applied on top of tiles or wooden parquet floors?",
    a: "Yes, Microtopping® adheres well to properly prepared ceramic tiles, wooden parquet, and most existing floor surfaces.",
  },
  {
    q: "Can I restore the floor without taking out the existing doors and windows?",
    a: "Yes, Microtopping® can be applied without removing doors and windows. The minimal thickness (3mm) allows for seamless integration with existing architectural elements.",
  },
  {
    q: "I have underfloor heating: can I use Microtopping®?",
    a: "Yes, Microtopping® is compatible with underfloor heating systems and maintains good thermal conductivity.",
  },
  {
    q: "Can I obtain a continuous surface area without joints?",
    a: "Yes, Microtopping® creates seamless, joint-free surfaces that can cover large areas without visible interruptions.",
  },
  {
    q: "Is a Microtopping® floor safe for health?",
    a: "Yes, Microtopping® is non-toxic, low-VOC, and safe for indoor environments including homes, schools, and healthcare facilities.",
  },
  {
    q: "Is Microtopping® certified?",
    a: "Yes, Microtopping® carries relevant certifications for safety, durability, and environmental compliance in various markets.",
  },
  {
    q: "I have an ultra-modern house: is Microtopping® recommended?",
    a: "Absolutely. Microtopping®'s sleek, minimalist appearance makes it ideal for contemporary and ultra-modern architectural styles.",
  },
  {
    q: "I have a restored farmhouse: is Microtopping® recommended?",
    a: "Yes, Microtopping® can complement rustic and traditional settings with its natural cement aesthetic and customisable finishes.",
  },
  {
    q: "I have a restaurant, a bar, a hotel: is Microtopping® recommended?",
    a: "Yes, Microtopping® is highly durable, easy to clean, and offers design flexibility making it perfect for commercial hospitality spaces.",
  },
  {
    q: "I have a shop or a showroom: is Microtopping® recommended?",
    a: "Yes, its seamless appearance and customisable finishes make Microtopping® ideal for retail and showroom environments.",
  },
  {
    q: "Can I apply Microtopping® in the bathroom, for example in a shower cubicle or bath or washbasin?",
    a: "Yes, when properly sealed, Microtopping® is waterproof and suitable for wet areas including showers, baths, and washbasins.",
  },
  {
    q: "Are the surfaces resistant to tread and impacts?",
    a: "Yes, Microtopping® provides good resistance to foot traffic and moderate impacts, though heavy impacts should be avoided.",
  },
  {
    q: "Can kitchen tops and bar counters be made in Microtopping®?",
    a: "Yes, with appropriate sealing, Microtopping® can be used for kitchen tops and bar counters, offering a unique, customisable surface.",
  },
  {
    q: "What colours are available?",
    a: "Microtopping® offers a wide range of colours through the Colour Pack-C Liquids system, allowing for endless custom colour combinations.",
  },
  {
    q: "Can I change the colour of the surfaces once created?",
    a: "While not designed for colour changes, surfaces can be re-coated with a new colour if properly prepared and primed.",
  },
  {
    q: "On average, how long does it take to create a surface in Microtopping®?",
    a: "Installation time varies by area size, but a typical residential room can be completed in 2-3 days including preparation and curing.",
  },
  {
    q: "To what can the resistance of Microtopping® be compared?",
    a: "Microtopping® offers durability comparable to high-quality epoxy or resin-based coatings, with better breathability and natural appearance.",
  },
  {
    q: "Can Microtopping® surfaces be scratched?",
    a: "While resistant to normal wear, sharp objects can scratch the surface. Proper maintenance and occasional re-sealing help maintain appearance.",
  },
  {
    q: "Can accidental falls of heavy objects ruin the coating?",
    a: "Heavy impacts may cause damage, but Microtopping® can be spot-repaired if necessary.",
  },
  {
    q: "If water, oil or other substances are spilled on it, will Microtopping® stain?",
    a: "When properly sealed, Microtopping® resists staining from common household substances. Prompt cleaning is recommended for spills.",
  },
  {
    q: "How can a perfect appearance be maintained over time?",
    a: "Regular cleaning with pH-neutral cleaners and periodic re-application of protective sealer will maintain the surface's appearance.",
  },
  {
    q: "How do you keep a Microtopping® surface clean?",
    a: "Regular sweeping or vacuuming followed by damp mopping with mild detergent is sufficient for daily maintenance.",
  },
  {
    q: "Can the colour and appearance of a Microtopping® surface undergo changes over time?",
    a: "Minimal colour changes may occur with UV exposure, but proper sealing and maintenance minimise this effect.",
  },
  {
    q: "At only 3 mm thick, can Microtopping® be used on exterior surfaces that support automobile and heavy?",
    a: "For exterior vehicular traffic, additional reinforcement and specific formulations may be required. Consult technical specifications.",
  },
  {
    q: "I would like to clad a fireplace and a kitchen top: Is Microtopping® heat resistant?",
    a: "Microtopping® has moderate heat resistance but direct contact with high heat sources (like fireplace surrounds) requires additional protection.",
  },
  {
    q: "What finishes and effects can be created with Microtopping®?",
    a: "Glossy, matte, clouded, acid-stained, metallic, and textured finishes are possible, along with decorative inserts and custom patterns.",
  },
  {
    q: "Is Microtopping® a resin?",
    a: "No, Microtopping® is a cement-based microcement system, not a resin. It offers the aesthetic of polished concrete with greater flexibility.",
  },
];

export default function WallMicrotoppingFAQ() {
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
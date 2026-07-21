"use client";

import { useState } from "react";

const faqs = [
  {
    q: "Are these tiles or prefabricated blocks?",
    a: "No. Stamped Concrete is a cast-in-place system applied on site by trained applicators. It is not a tile or prefabricated product — the result is a monolithic, seamless surface that replicates the look of natural stone, brick or wood.",
  },
  {
    q: "What are the installation times of a stamped concrete?",
    a: "Installation times vary depending on the area size and design complexity. Typically, a team of Surface Crete applicators can complete 200 m² in 2–3 days. The surface can receive foot traffic within a few hours of completion.",
  },
  {
    q: "What maintenance does a stamped concrete require?",
    a: "Stamped Concrete requires minimal maintenance. Regular cleaning with water and a neutral detergent is sufficient. Periodic re-application of the protective sealer is recommended to maintain the surface's appearance and durability.",
  },
  {
    q: "What are the advantages in terms of price compared to traditional exterior decorative flatwork?",
    a: "Stamped Concrete is significantly more cost-effective than natural stone, brick or ceramic paving. It delivers a comparable aesthetic at a fraction of the cost, with faster installation and lower long-term maintenance expenses.",
  },
  {
    q: "Is the system recommended only for large surfaces or also for small areas?",
    a: "Stamped Concrete is suitable for surfaces of any size, from small residential terraces and garden paths to large commercial plazas, car parks and public spaces.",
  },
  {
    q: "If oil is spilled, will it stain the Stamped Flooring?",
    a: "When correctly sealed, Stamped Concrete resists oil and most common liquids. Spills should be cleaned promptly. The protective sealer acts as a barrier against staining and should be re-applied periodically.",
  },
  {
    q: "Why choose Surface Crete?",
    a: "Surface Crete offers a complete system backed by technical expertise, trained applicators and high-quality materials. Our decorative concrete solutions combine aesthetic excellence with proven durability, supported by a nationwide network of certified installers.",
  },
  {
    q: "What effects and finishes are available?",
    a: "Stamped Concrete can replicate natural stone, slate, cobblestone, brick, wood planks, and many other textures. A wide range of stamp patterns is available, each combinable with multiple colour hardener and release agent options.",
  },
  {
    q: "Can they be made in all colours?",
    a: "Yes. Stamped Concrete is available in a wide palette of colour hardeners and release agents, allowing virtually unlimited colour combinations to match any design intent.",
  },
  {
    q: "Does the colour of stamped flooring change if exposed to the sun?",
    a: "With the correct UV-resistant sealer applied, colour fading is minimised. Some natural variation in tone may occur over time with prolonged sun exposure, which can be refreshed with a new coat of sealer.",
  },
  {
    q: "What gives the floor its colour?",
    a: "The colour comes from Colour Hardener, a dry-shake product incorporated into the fresh concrete surface before stamping. A Release Agent powder is then applied to create contrast and depth in the pattern.",
  },
  {
    q: "How thick does the floor have to be?",
    a: "The standard slab thickness for Stamped Concrete is 10–15 cm for pedestrian areas and up to 20 cm or more for vehicular traffic areas, depending on load requirements and substrate conditions.",
  },
  {
    q: "Can a stamped floor be laid on an old floor?",
    a: "In most cases, Stamped Concrete requires a new concrete slab. However, in renovation scenarios, it may be possible to apply a thin overlay system over an existing sound substrate. Our technical team will assess suitability.",
  },
  {
    q: "May I buy directly the products and realize my own floor by myself?",
    a: "Stamped Concrete requires specialist skills, tools and experience to achieve a quality result. We strongly recommend using our trained and certified applicators to ensure the best outcome.",
  },
  {
    q: "Can a stamped floor be laid close to sea water?",
    a: "Yes. With the application of appropriate protective sealers, Stamped Concrete is resistant to salt water spray and is suitable for coastal environments.",
  },
  {
    q: "Can access ramps be created?",
    a: "Yes. Stamped Concrete is ideal for access ramps, driveways and garage entrances. The colour hardener treatment doubles the surface's abrasion resistance, making it well suited for vehicular traffic.",
  },
  {
    q: "Is it indispensable to create the control joints by cutting the flooring?",
    a: "Yes. Control joints are necessary in Stamped Concrete to manage natural concrete shrinkage and prevent random cracking. Our applicators will plan and cut joints in locations that complement the overall design.",
  },
  {
    q: "How does the installation of Stamped flooring take place?",
    a: "The process involves surface preparation, concrete placing and levelling, application of Colour Hardener, smoothing, application of Release Agent powder, stamping with pattern moulds, washing, and finally sealing. The entire process is carried out by our trained applicators.",
  },
];

export default function StampedConcreteFAQ() {
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

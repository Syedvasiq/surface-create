"use client";

import { useState } from "react";

const faqs = [
  {
    q: "How many colours and combinations are available and can I choose a specific mixture of colours?",
    a: "Sassoitalia is available in 14 standard colour combinations using natural marble and stone aggregates. Custom mixtures can be discussed with our technical team to create a unique combination tailored to your project.",
  },
  {
    q: "Can Sassoitalia be installed over a bitumen sheath?",
    a: "Yes, Sassoitalia can be installed over a bitumen sheath provided the surface is structurally sound, clean and properly prepared. A suitable primer must be applied to ensure correct adhesion.",
  },
  {
    q: "Are these tiles in Sassolavato?",
    a: "No. Sassoitalia is a cast-in-place decorative concrete system, not a tile product. It is applied on site by trained applicators to create a seamless, continuous surface.",
  },
  {
    q: "Is it necessary to create control joints by cutting the flooring?",
    a: "Control joints may be required depending on the size of the area and the substrate conditions. Our technical team will advise on the correct joint layout for each specific project.",
  },
  {
    q: "Can I lay a Sassoitalia floor near sea water or in areas with significant freeze/thaw cycles?",
    a: "Yes. With the application of appropriate protective sealers, Sassoitalia is resistant to salt water spray and freeze/thaw cycles, making it suitable for coastal and cold-climate environments.",
  },
  {
    q: "Can I use Sassoitalia in areas subject to environmental constraints?",
    a: "Yes. Sassoitalia uses natural aggregates and environmentally responsible materials, making it suitable for use in areas with environmental restrictions. Please consult our team for project-specific guidance.",
  },
  {
    q: "Can I lay Sassoitalia over an existing tiled floor?",
    a: "Yes, provided the existing tiles are firmly bonded, level and in good condition. The surface must be prepared with the appropriate primer to ensure adhesion of the Sassoitalia mixture.",
  },
  {
    q: "Can just 3 cm support traffic, even large cars and heavy vehicles?",
    a: "Yes. At 3 cm thickness, Sassoitalia provides excellent structural performance and can withstand car and light vehicle traffic. For heavy vehicle traffic, a thicker application or reinforced substrate may be recommended.",
  },
  {
    q: "Can I choose pebbles or grits of any size?",
    a: "Sassoitalia uses natural aggregates in specific size ranges to ensure correct application and finish quality. Our team can advise on available aggregate sizes and combinations to achieve your desired aesthetic.",
  },
  {
    q: "Is it possible to use Sassoitalia vertically or on stairs?",
    a: "Yes. Sassoitalia can be applied on stairs and, with the correct technique, on vertical surfaces. Our trained applicators have experience with these applications.",
  },
  {
    q: "What maintenance does Sassoitalia require?",
    a: "Sassoitalia requires minimal maintenance. Regular cleaning with water and a neutral detergent is sufficient. Periodic re-application of the protective sealer may be recommended depending on usage and exposure.",
  },
  {
    q: "What thickness does Sassoitalia have to be?",
    a: "The standard application thickness is 3 cm. This provides the necessary structural integrity while keeping the floor level impact minimal, making it ideal for renovation projects.",
  },
  {
    q: "Can personalised decorations be inserted in Sassoitalia flooring?",
    a: "Yes. Custom decorations, borders, patterns and inlays can be created within Sassoitalia flooring using different aggregate colours and dividing strips, allowing for highly personalised designs.",
  },
];

export default function SassoitaliaFAQ() {
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

"use client";

import Image from "next/image";

const sections = [
  {
    img: "/images/acid-stain/unique-and-modern.jpg",
    imgAlt: "Acid stain unique and modern interior",
    imgLeft: false,
    title: "It is unique and modern",
    content: [
      "Acid stained concrete has caught the attention of design studios, architects, landscape architects, designers and decorators for incorporation into the design of private houses, lofts, public spaces, shops, showrooms, restaurants, nightclubs, pubs, pavilions, exhibition halls, hotels and shopping centres.",
      "Thanks to the adaptability of Surface Crete products and technologies, each individual project is evaluated and designed according to the type of end use envisaged and the type and extent of traffic it has to support. Depending on these criteria and the customer's specific requirements, flooring thicknesses, type of texture, the type of surface finish and other technical variables are decided.",
    ],
  },
  {
    img: "/images/acid-stain/acid-stain-only.jpg",
    imgAlt: "Acid stain on stairs and vertical surfaces",
    imgLeft: true,
    title: "Acid-Stain is not only applicable on floors",
    content: [
      "Acid-Stain can also be applied to stairs and other vertical surfaces. Architects now have a solution to produce unique and unforgettable environments which can be created and personalised to meet specific requirements by Surface Crete applicators.",
    ],
  },
];

export default function AcidStainDesignSections() {
  return (
    <section className="bg-white md:mx-[15px] md:[width:calc(100%-30px)] mt-[15px]">
      {sections.map((s, i) => (
        <div
          key={i}
          className={`flex flex-col ${s.imgLeft ? "md:flex-row" : "md:flex-row-reverse"} md:items-start gap-10 md:gap-0 py-10 md:py-14 ${i > 0 ? "border-t border-gray-100" : ""}`}
        >
          <div className="w-full md:w-[50%] relative aspect-[4/3] md:aspect-auto md:h-[420px] lg:h-[480px] overflow-hidden shrink-0">
            <Image src={s.img} alt={s.imgAlt} fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
          </div>
          <div className="w-full md:w-[50%] shrink-0 px-5 sm:px-10 lg:px-14 py-10 md:py-0">
            <h3 className="text-[22px] sm:text-[26px] lg:text-[30px] font-light text-gray-900 leading-snug mb-5">{s.title}</h3>
            <div className="space-y-4">
              {s.content.map((p, j) => (
                <p key={j} className="text-[14px] sm:text-[15px] text-gray-700 leading-[1.85]">{p}</p>
              ))}
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}

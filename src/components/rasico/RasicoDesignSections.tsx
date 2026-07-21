"use client";

import Image from "next/image";

const sections = [
  {
    img: "/images/rasico/prginal-design.jpg",
    imgAlt: "Rasico original design trowel finish",
    imgLeft: false,
    title: "An original design",
    content: [
      "Thanks to the trowel application and skill of the artisan applicator, Rasico offers an original and always different design, recreating a minimal look.",
      "Rasico is available in 29 standard colours!",
      "With Rasico you can choose between two different finishes: Rasico and Rasico Touch.",
      "For a softer and less tactile effect compared to the original 'classic' finish, one can opt for Rasico Touch, made possible by an additional coat of material. Ideal for places where the slip-resistant feature is not as critical, such as porches, patios and gazebos.",
    ],
  },
  {
    img: "/images/rasico/quick-install.jpg",
    imgAlt: "Rasico quick installation",
    imgLeft: true,
    title: "Quick to install",
    content: [
      "Depending on the season, climate and complexity of the design intent, a team of Surface Crete applicators is able to realize 200 m² of flooring in about 2–3 days.",
      "The surface should be able to receive foot traffic just a few hours after completion. Rasico provides quick to install surfaces that last over time.",
    ],
  },
];

export default function RasicoDesignSections() {
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
            <h3 className="text-[22px] sm:text-[26px] lg:text-[30px] font-light text-gray-900 leading-snug mb-5">
              {s.title}
            </h3>
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

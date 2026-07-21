"use client";

import Image from "next/image";

const sections = [
  {
    img: "/images/stamped-concrete/practicle.jpg",
    imgAlt: "Stamped concrete practical monolithic surface",
    imgLeft: false,
    title: "It is practical",
    content: [
      "The Surface Crete imprinted finish is monolithic, therefore not subject to indentations or settlement. This is the big difference when compared to interlocking or natural stone finishes which can also be more sensitive to changes in temperature.",
      "The continuously reinforced slab created using Surface Crete systems eliminates the problem of weeds growing between single stones, making it ideal for roads, squares, bicycle paths, pavements, pedestrian areas, shopping centres, hotels, camping grounds and amusement parks.",
    ],
  },
  {
    img: "/images/stamped-concrete/solid-robouts.jpg",
    imgAlt: "Stamped concrete solid and robust surface",
    imgLeft: true,
    title: "It is solid and robust",
    content: [
      "There are situations where a concrete slab is required to withstand heavy loads, such as garage access ramps, car parks or similar high vehicular traffic areas. This, however, is not a good reason to forsake giving it a much more pleasing appearance than normal concrete.",
      "The surface of Surface Crete imprinted concrete is treated with special colour hardeners before moulding, resulting in the creation of the colour you prefer whilst doubling its normal abrasion and wear resistance.",
    ],
  },
];

export default function StampedConcreteDesignSections() {
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

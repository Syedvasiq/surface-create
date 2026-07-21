"use client";

import Image from "next/image";

const sections = [
  {
    img: "/images/lixio plus/ressaince-image.jpg",
    imgAlt: "Lixio+ Renaissance marble aggregates",
    imgLeft: true,
    title: "A new \"Renaissance\"",
    content: "Lixio+ allows the use of valuable marble aggregates from any source, even local to the project; this feature has been much in demand to encourage the \"Renaissance\" and use of local raw materials. This ability allows the system to gain a new, sustainable quality, rooted in the local environs, without giving up on the beautiful and timeless look associated with terrazzo.",
  },
  {
    img: "/images/lixio plus/modern-classic-image.jpg",
    imgAlt: "Lixio+ modern classic terrazzo",
    imgLeft: false,
    title: "A modern classic",
    content: "Classic elegance, historical charm, high reflection and value: Lixio+ is a combination of modern and ancient traditions. The look is that of the most noble terrazzo floors, whilst the choice of materials and the application technique reflect Surface Crete's continuous and innovative research in high-performance, high-quality eco-friendly solutions.",
  },
  {
    img: "/images/lixio plus/marble-style.jpg",
    imgAlt: "Lixio+ marble and colour combinations",
    imgLeft: true,
    title: "Marble and colours: endless combinations",
    content: "Through aggregate size and colour choice, Lixio+ offers endless combinations that make it a completely individual product, based on the designer or client's own taste and style. These aspects make Lixio+ a totally adaptable product of fine quality with the ability to have a constantly changing expression.",
  },
];

export default function LixioPlusWhyChoose() {
  return (
    <section className="bg-white md:mx-[15px] md:[width:calc(100%-30px)]">
      <div className="px-5 sm:px-10 lg:px-14 pt-14 md:pt-20">
        <p className="text-[11px] tracking-widest text-gray-500 uppercase mb-3">Overview</p>
        <h2 className="text-[26px] sm:text-[32px] lg:text-[38px] font-light text-gray-900 leading-snug">
          Why choosing Lixio+
        </h2>
      </div>

      {sections.map((s, i) => (
        <div key={i} className={`flex flex-col ${s.imgLeft ? "md:flex-row" : "md:flex-row-reverse"} md:items-center gap-10 md:gap-0 py-14 md:py-20 border-t border-gray-100 mt-10`}>
          <div className="w-full md:w-[50%] relative aspect-[4/3] md:aspect-auto md:h-[420px] lg:h-[480px] overflow-hidden shrink-0">
            <Image src={s.img} alt={s.imgAlt} fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
          </div>
          <div className={`w-full md:w-[50%] shrink-0 px-5 sm:px-10 lg:px-14 ${s.imgLeft ? "" : ""}`}>
            <h3 className="text-[22px] sm:text-[26px] lg:text-[30px] font-light text-gray-900 leading-snug mb-5">
              {s.title}
            </h3>
            <p className="text-[14px] sm:text-[15px] text-gray-700 leading-[1.85]">{s.content}</p>
          </div>
        </div>
      ))}
    </section>
  );
}

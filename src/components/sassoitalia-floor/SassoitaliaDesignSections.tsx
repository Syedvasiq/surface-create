"use client";

import Image from "next/image";

const sections = [
  {
    img: "/images/sassoitalia-floor/exterme-adaptable.jpg",
    imgAlt: "Sassoitalia adaptable floor renovation",
    imgLeft: true,
    title: "It is extremely adaptable",
    content: [
      "Sassoitalia needs a cast thickness of just 3 cm. This results in an exceptional adaptability that makes it ideal for renovating existing floors. In these cases, it is sufficient to apply a primer, Ideal Binder, to make the slab adhere to the underlying concrete base.",
      "It is also possible to apply Sassoitalia onto fresh concrete (\"fresh on fresh\"), especially in the case of small areas. It does not need any maintenance upkeep and its original features remain unchanged over time.",
      "It is also ideal for indoor use where it can also be ground and polished!",
    ],
  },
  {
    img: "/images/sassoitalia-floor/suitable-for-all.jpg",
    imgAlt: "Sassoitalia suitable for all climates",
    imgLeft: false,
    title: "Suitable for all climate conditions",
    content: [
      "The surface of Sassoitalia can be treated with special protective coatings which inhibit dust, prevent moisture ingress and guarantee longevity of appearance and durability by resisting most external agents.",
      "Special coatings also protect Sassoitalia from the effects of freeze/thaw cycles or salt water spray. In all cases the treatments are applied quickly and economically by the artisan installers at the conclusion of the works.",
    ],
  },
];

export default function SassoitaliaDesignSections() {
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

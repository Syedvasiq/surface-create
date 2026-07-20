"use client";

import Image from "next/image";

export default function NuvolatoContinuousSpace() {
  return (
    <section className="bg-white mt-[15px] py-14 md:py-20 md:mx-[15px] md:[width:calc(100%-30px)]">
      <div className="flex flex-col md:flex-row md:items-center gap-10 md:gap-0">

        <div className="w-full md:w-[38%] shrink-0 px-5 sm:px-10 lg:px-14">
          <h2 className="text-[26px] sm:text-[30px] lg:text-[36px] font-light text-gray-900 leading-snug mb-5 md:mb-6">
            The Cloud Effect of Nuvolato Architop
          </h2>

          <div className="space-y-4 mb-8 md:mb-10">
            <p className="text-[14px] sm:text-[15px] text-gray-700 leading-[1.85]">
              Nuvolato Architop is a cement-based decorative coating that
              creates a distinctive cloud-like effect on floors and walls.
              Its unique aesthetic blends seamlessly into both contemporary
              and classic interiors.
            </p>
            <p className="text-[14px] sm:text-[15px] text-gray-700 leading-[1.85]">
              Applied in a continuous, joint-free finish, Nuvolato Architop
              transforms any surface into a refined architectural statement
              with natural depth and texture.
            </p>
            <p className="text-[14px] sm:text-[15px] text-gray-700 leading-[1.85]">
              Suitable for residential and commercial spaces, it adheres
              directly over existing surfaces &mdash; no demolition, no waste,
              no disruption to your environment.
            </p>
            <p className="text-[14px] sm:text-[15px] text-gray-700 leading-[1.85]">
              With a thickness of just a few millimetres, it is the ideal
              solution for renovation projects where preserving existing
              levels and finishes is essential.
            </p>
          </div>
        </div>

        <div className="w-full md:w-[62%] relative aspect-[4/3] md:aspect-auto md:h-[420px] lg:h-[500px] overflow-hidden">
          <Image
            src="/images/nuvolato/nuvolato-image.jpg"
            alt="Nuvolato Architop surface finish"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 62vw"
          />
        </div>

      </div>
    </section>
  );
}

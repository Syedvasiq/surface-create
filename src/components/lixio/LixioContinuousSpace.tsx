"use client";

import Image from "next/image";

export default function LixioContinuousSpace() {
  return (
    <section className="bg-white mt-[15px] py-14 md:py-20 md:mx-[15px] md:[width:calc(100%-30px)]">
      <div className="flex flex-col md:flex-row md:items-center gap-10 md:gap-0">

        <div className="w-full md:w-[38%] shrink-0 px-5 sm:px-10 lg:px-14">
          <h2 className="text-[26px] sm:text-[30px] lg:text-[36px] font-light text-gray-900 leading-snug mb-5 md:mb-6">
            The Refined Surface of Lixio
          </h2>

          <div className="space-y-4 mb-8 md:mb-10">
            <p className="text-[14px] sm:text-[15px] text-gray-700 leading-[1.85]">
              Lixio is a polished decorative concrete floor that delivers a
              refined, stone-like aesthetic with exceptional depth and luminosity.
              Its smooth, continuous surface brings a sense of calm and elegance
              to any interior space.
            </p>
            <p className="text-[14px] sm:text-[15px] text-gray-700 leading-[1.85]">
              Applied seamlessly without joints, Lixio creates a flowing,
              uninterrupted surface that connects rooms and spaces with a
              consistent, architectural finish.
            </p>
            <p className="text-[14px] sm:text-[15px] text-gray-700 leading-[1.85]">
              Suitable for residential and commercial interiors, Lixio adheres
              directly over existing surfaces &mdash; no demolition, no waste,
              no disruption to your space.
            </p>
            <p className="text-[14px] sm:text-[15px] text-gray-700 leading-[1.85]">
              With its ultra-thin application, it is the ideal solution for
              renovation projects where preserving existing floor levels is
              essential.
            </p>
          </div>
        </div>

        <div className="w-full md:w-[62%] relative aspect-[4/3] md:aspect-auto md:h-[420px] lg:h-[500px] overflow-hidden">
          <Image
            src="/images/lixio/lixio-continus-space.jpg"
            alt="Lixio polished concrete surface"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 62vw"
          />
        </div>

      </div>
    </section>
  );
}

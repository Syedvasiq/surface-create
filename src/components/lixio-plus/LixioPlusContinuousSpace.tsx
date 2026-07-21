"use client";

import Image from "next/image";

export default function LixioPlusContinuousSpace() {
  return (
    <section className="bg-white mt-[15px] py-14 md:py-20 md:mx-[15px] md:[width:calc(100%-30px)]">
      <div className="flex flex-col md:flex-row md:items-center gap-10 md:gap-0">

        <div className="w-full md:w-[38%] shrink-0 px-5 sm:px-10 lg:px-14">
          <h2 className="text-[26px] sm:text-[30px] lg:text-[36px] font-light text-gray-900 leading-snug mb-5 md:mb-6">
            Lixio+
          </h2>
          <div className="space-y-4">
            <p className="text-[14px] sm:text-[15px] text-gray-700 leading-[1.85]">
              Lixio+ is a new version of Lixio, Surface Crete's system that reproduces the iconic, classic terrazzo floor.
            </p>
            <p className="text-[14px] sm:text-[15px] text-gray-700 leading-[1.85]">
              Lixio+ is characterised by a different look, a result of using larger aggregates (5&ndash;12 mm) and by a newly developed application technique which slightly increases the floor's thickness.
            </p>
          </div>
        </div>

        <div className="w-full md:w-[62%] relative aspect-[4/3] md:aspect-auto md:h-[420px] lg:h-[500px] overflow-hidden">
          <Image
            src="/images/lixio plus/lixio-plus-continuous-space.jpg"
            alt="Lixio+ terrazzo floor surface"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 62vw"
          />
        </div>

      </div>
    </section>
  );
}

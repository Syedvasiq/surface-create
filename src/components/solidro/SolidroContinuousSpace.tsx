"use client";

import Image from "next/image";

export default function SolidroContinuousSpace() {
  return (
    <section className="bg-white mt-[15px] py-14 md:py-20 md:mx-[15px] md:[width:calc(100%-30px)]">
      <div className="flex flex-col md:flex-row md:items-center gap-10 md:gap-0">
        <div className="w-full md:w-[38%] shrink-0 px-5 sm:px-10 lg:px-14">
          <h2 className="text-[26px] sm:text-[30px] lg:text-[36px] font-light text-gray-900 leading-snug mb-5 md:mb-6">
            Solidro
          </h2>
          <div className="space-y-4">
            <p className="text-[14px] sm:text-[15px] text-gray-700 leading-[1.85]">
              Surface Crete's Solidro range redefines the concept of decorative surfaces for interiors, offering a well-balanced combination of versatility, durability and aesthetic refinement. Perfect for floors, walls and solid decorative elements, Solidro adapts to any space and environment whether residential, institutional or commercial, always ensuring long-lasting performance over time.
            </p>
            <p className="text-[14px] sm:text-[15px] text-gray-700 leading-[1.85]">
              Through its advanced technical features and a formula developed in great detail by our experts, Solidro is able to meet the most diverse interior design ideas and trends.
            </p>
          </div>
        </div>
        <div className="w-full md:w-[62%] relative aspect-[4/3] md:aspect-auto md:h-[420px] lg:h-[500px] overflow-hidden">
          <Image src="/images/solidro/solidro-continuous-space.jpg" alt="Solidro decorative surface" fill className="object-cover" sizes="(max-width: 768px) 100vw, 62vw" />
        </div>
      </div>
    </section>
  );
}

"use client";

import Image from "next/image";

export default function WallMicrotoppingDesignSections() {
  return (
    <section className="bg-white md:mx-[15px] md:[width:calc(100%-30px)] mt-[15px]">

      <div className="flex flex-col md:flex-row md:items-start gap-10 md:gap-0 py-10 md:py-14">
        <div className="w-full md:w-[50%] shrink-0 px-5 sm:px-10 lg:px-14 py-10 md:py-0">
          <p className="text-[11px] tracking-widest text-gray-500 uppercase mb-3">Innovation</p>
          <h3 className="text-[22px] sm:text-[26px] lg:text-[30px] font-light text-gray-900 leading-snug mb-5">Innovative Material: Renew the surface in just 3 millimetres</h3>
          <div className="space-y-4">
            <p className="text-[14px] sm:text-[15px] text-gray-700 leading-[1.85]">With just three millimetres of thickness, microcement Microtopping allows you to renew existing surfaces on different bases (concrete, self-levelling, ceramic, wood) without having to remove them.</p>
            <p className="text-[14px] sm:text-[15px] text-gray-700 leading-[1.85]">Microtopping is easy to clean and fast to install. It is also perfect where underfloor heating is used.</p>
          </div>
        </div>
        <div className="w-full md:w-[50%] relative aspect-[4/3] md:aspect-auto md:h-[420px] lg:h-[480px] overflow-hidden shrink-0">
          <Image src="/images/microtopping-wall/inovattive-material.jpg" alt="Microtopping innovative material" fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
        </div>
      </div>

      <div className="flex flex-col md:flex-row-reverse md:items-start gap-10 md:gap-0 py-10 md:py-14 border-t border-gray-100">
        <div className="w-full md:w-[50%] shrink-0 px-5 sm:px-10 lg:px-14 py-10 md:py-0">
          <p className="text-[11px] tracking-widest text-gray-500 uppercase mb-3">Continuity</p>
          <h3 className="text-[22px] sm:text-[26px] lg:text-[30px] font-light text-gray-900 leading-snug mb-5">From continuity to your ideas: goodbye to visible joints and interruption lines</h3>
          <div className="space-y-4">
            <p className="text-[14px] sm:text-[15px] text-gray-700 leading-[1.85]">Microtopping is the ideal solution for those who do not like visible joints as it allows you to create continuous surfaces, both internally and externally, without visible joints.</p>
            <p className="text-[14px] sm:text-[15px] text-gray-700 leading-[1.85]">Its extraordinary features make it ideal for both horizontal and vertical surfaces, such as plasterboard or masonry walls, stairs, bathrooms and shower enclosures.</p>
          </div>
        </div>
        <div className="w-full md:w-[50%] relative aspect-[4/3] md:aspect-auto md:h-[420px] lg:h-[480px] overflow-hidden shrink-0">
          <Image src="/images/microtopping-wall/from-continunity.jpg" alt="Microtopping continuity" fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
        </div>
      </div>

      <div className="flex flex-col md:flex-row md:items-start gap-10 md:gap-0 py-10 md:py-14 border-t border-gray-100">
        <div className="w-full md:w-[50%] shrink-0 px-5 sm:px-10 lg:px-14 py-10 md:py-0">
          <p className="text-[11px] tracking-widest text-gray-500 uppercase mb-3">Aesthetics</p>
          <h3 className="text-[22px] sm:text-[26px] lg:text-[30px] font-light text-gray-900 leading-snug mb-5">Colours, effects, finishes &mdash; the aesthetic of cement has no limits</h3>
          <div className="space-y-4">
            <p className="text-[14px] sm:text-[15px] text-gray-700 leading-[1.85]">Thanks to the specific Colour Pack-C Liquids, it is possible to mix endless colour combinations of microcement.</p>
            <p className="text-[14px] sm:text-[15px] text-gray-700 leading-[1.85]">The colour intensity and tone will vary depending on the amount of product diluted in the polymer and the type (white or grey) of the Microtopping used.</p>
            <p className="text-[14px] sm:text-[15px] text-gray-700 leading-[1.85]">It is possible to achieve glossy, clouded or acidified effects and create velvets and decorative inserts for unique, personalised finishes.</p>
          </div>
        </div>
        <div className="w-full md:w-[50%] relative aspect-[4/3] md:aspect-auto md:h-[420px] lg:h-[480px] overflow-hidden shrink-0">
          <Image src="/images/microtopping-wall/color-effect.jpg" alt="Microtopping colours and effects" fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
        </div>
      </div>

    </section>
  );
}

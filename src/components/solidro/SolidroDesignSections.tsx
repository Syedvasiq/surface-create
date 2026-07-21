"use client";

import Image from "next/image";

export default function SolidroDesignSections() {
  return (
    <section className="bg-white md:mx-[15px] md:[width:calc(100%-30px)] mt-[15px]">

      {/* 1. Continuous seamless design */}
      <div className="flex flex-col md:flex-row-reverse md:items-start gap-10 md:gap-0 py-10 md:py-14">
        <div className="w-full md:w-[50%] relative aspect-[4/3] md:aspect-auto md:h-[420px] lg:h-[480px] overflow-hidden shrink-0">
          <Image src="/images/solidro/continus-seamless-design.jpg" alt="Solidro continuous seamless design" fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
        </div>
        <div className="w-full md:w-[50%] shrink-0 px-5 sm:px-10 lg:px-14 py-10 md:py-0">
          <p className="text-[11px] tracking-widest text-gray-500 uppercase mb-3">Design</p>
          <h3 className="text-[22px] sm:text-[26px] lg:text-[30px] font-light text-gray-900 leading-snug mb-5">A continuous, seamless design</h3>
          <div className="space-y-4">
            <p className="text-[14px] sm:text-[15px] text-gray-700 leading-[1.85]">Solidro's strength lies in its ability to create continuous, seamless surfaces without joints, gaps or visual discontinuities. This approach amplifies perception of space and conveys a sense of harmony to the entire project.</p>
            <p className="text-[14px] sm:text-[15px] text-gray-700 leading-[1.85]">Through its versatility, Solidro brings together floors, walls and furnishings with stylistic coherence — a great advantage in contemporary interior designs.</p>
            <p className="text-[14px] sm:text-[15px] text-gray-700 leading-[1.85]">Solidro's seamless nature makes it possible to create continuous surfaces that facilitate easy maintenance and convey a contemporary and elegant look.</p>
          </div>
        </div>
      </div>

      {/* 2. Healthy surfaces */}
      <div className="flex flex-col md:flex-row md:items-start gap-10 md:gap-0 py-10 md:py-14 border-t border-gray-100">
        <div className="w-full md:w-[50%] shrink-0 grid grid-cols-2 gap-3 px-5 sm:px-0">
          <div className="relative aspect-[3/4] overflow-hidden">
            <Image src="/images/solidro/healthy-surface-1.jpg" alt="Solidro healthy surface" fill className="object-cover" sizes="25vw" />
          </div>
          <div className="relative aspect-[3/4] overflow-hidden">
            <Image src="/images/solidro/healthy-surface-2.jpg" alt="Solidro healthy surface interior" fill className="object-cover" sizes="25vw" />
          </div>
        </div>
        <div className="w-full md:w-[50%] shrink-0 px-5 sm:px-10 lg:px-14 py-10 md:py-0">
          <p className="text-[11px] tracking-widest text-gray-500 uppercase mb-3">Health</p>
          <h3 className="text-[22px] sm:text-[26px] lg:text-[30px] font-light text-gray-900 leading-snug mb-5">Healthy surfaces for everyone's well-being</h3>
          <div className="space-y-4">
            <p className="text-[14px] sm:text-[15px] text-gray-700 leading-[1.85]">Solidro is remarkable for its innovative and environmentally friendly constituents. Completely free of epoxy resins, this product maintains the healthiness of spaces, improving air quality.</p>
            <p className="text-[14px] sm:text-[15px] text-gray-700 leading-[1.85]">Ideal for both private residences and public environments such as schools, hospitals and workplaces, Solidro provides a safe surface which proves ideal for those seeking comfort without sacrificing quality.</p>
            <p className="text-[14px] sm:text-[15px] text-gray-700 leading-[1.85]">Its application respects high standards in terms of safety, making this material a responsible choice for the future.</p>
          </div>
        </div>
      </div>

      {/* 3. Colour palette */}
      <div className="flex flex-col md:flex-row-reverse md:items-start gap-10 md:gap-0 py-10 md:py-14 border-t border-gray-100">
        <div className="w-full md:w-[50%] relative aspect-[4/3] md:aspect-auto md:h-[420px] lg:h-[480px] overflow-hidden shrink-0">
          <Image src="/images/solidro/colour-palette.jpg" alt="Solidro Valentina Collection colour palette" fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
        </div>
        <div className="w-full md:w-[50%] shrink-0 px-5 sm:px-10 lg:px-14 py-10 md:py-0">
          <p className="text-[11px] tracking-widest text-gray-500 uppercase mb-3">Colours</p>
          <h3 className="text-[22px] sm:text-[26px] lg:text-[30px] font-light text-gray-900 leading-snug mb-5">Colour palette: Valentina Collection</h3>
          <div className="space-y-4">
            <p className="text-[14px] sm:text-[15px] text-gray-700 leading-[1.85]">Those who want custom-made interiors with unique character will relish Solidro's incredible range of colours available in its Valentina Collection.</p>
            <p className="text-[14px] sm:text-[15px] text-gray-700 leading-[1.85]">Created by Surface Crete's in-house designer Valentina De Agnoi, in collaboration with Belgian colour designer Melanie Bernard, this exclusive palette explores a wide variety of shades, from elegant neutrals to bolder nuances.</p>
            <p className="text-[14px] sm:text-[15px] text-gray-700 leading-[1.85]">Created as a result of an in-depth study on 2025 colour trends, Valentina Collection was designed to provide a broader selection of bolder colours. Each colour was designed to enhance the surface and complement any furnishing style.</p>
            <p className="text-[14px] sm:text-[15px] text-gray-700 leading-[1.85]">Valentina Collection offers endless creative possibilities to turn any room into the masterpiece you have always wanted.</p>
          </div>
        </div>
      </div>

    </section>
  );
}

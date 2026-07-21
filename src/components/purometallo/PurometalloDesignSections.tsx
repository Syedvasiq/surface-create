"use client";

import Image from "next/image";

export default function PurometalloDesignSections() {
  return (
    <section className="bg-white md:mx-[15px] md:[width:calc(100%-30px)] mt-[15px]">

      {/* 1. Noble Elements */}
      <div className="flex flex-col md:flex-row md:items-start gap-10 md:gap-0 py-10 md:py-14">
        <div className="w-full md:w-[50%] shrink-0 px-5 sm:px-10 lg:px-14 py-10 md:py-0">
          <p className="text-[11px] tracking-widest text-gray-500 uppercase mb-3">Noble Elements</p>
          <h3 className="text-[22px] sm:text-[26px] lg:text-[30px] font-light text-gray-900 leading-snug mb-5">Renew existing surfaces without removing them</h3>
          <div className="space-y-4">
            <p className="text-[14px] sm:text-[15px] text-gray-700 leading-[1.85]">With just few millimetres of thickness, PUROMETALLO allows you to renew existing surfaces on different bases without having to remove them.</p>
            <p className="text-[14px] sm:text-[15px] text-gray-700 leading-[1.85]">PUROMETALLO is the Ideal Work line for walls and furniture, elegant and with character.</p>
          </div>
        </div>
        <div className="w-full md:w-[50%] relative aspect-[4/3] md:aspect-auto md:h-[420px] lg:h-[480px] overflow-hidden shrink-0">
          <Image src="/images/purometallo/noble-elements.jpg" alt="Purometallo noble elements" fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
        </div>
      </div>

      {/* 2. Five Colours */}
      <div className="flex flex-col md:flex-row-reverse md:items-start gap-10 md:gap-0 py-10 md:py-14 border-t border-gray-100">
        <div className="w-full md:w-[50%] shrink-0 px-5 sm:px-10 lg:px-14 py-10 md:py-0">
          <p className="text-[11px] tracking-widest text-gray-500 uppercase mb-3">Colour & Texture</p>
          <h3 className="text-[22px] sm:text-[26px] lg:text-[30px] font-light text-gray-900 leading-snug mb-5">Five metals, infinite expressions</h3>
          <div className="space-y-4">
            <p className="text-[14px] sm:text-[15px] text-gray-700 leading-[1.85]">There are 5 different Purometallo colours. It is also possible to obtain various tactile effects according to the tool one uses to decorate the surface.</p>
            <p className="text-[14px] sm:text-[15px] text-gray-700 leading-[1.85]">From Lamina&apos;s shiny foil finish to Rilievo&apos;s raised tactile texture and Striato&apos;s brushed linear effect — each application is entirely unique and unrepeatable.</p>
          </div>
        </div>
        <div className="w-full md:w-[50%] relative aspect-[4/3] md:aspect-auto md:h-[420px] lg:h-[480px] overflow-hidden shrink-0">
          <Image src="/images/purometallo/5-diffeent.jpg" alt="Purometallo 5 different colours" fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
        </div>
      </div>

    </section>
  );
}

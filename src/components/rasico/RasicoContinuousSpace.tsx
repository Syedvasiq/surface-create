"use client";

import Image from "next/image";
import Link from "next/link";

export default function RasicoContinuousSpace() {
  return (
    <section className="bg-white mt-[15px] py-14 md:py-20 md:mx-[15px] md:[width:calc(100%-30px)]">
      <div className="flex flex-col md:flex-row md:items-center gap-10 md:gap-0">

        <div className="w-full md:w-[38%] shrink-0 px-5 sm:px-10 lg:px-14">
          <h2 className="text-[26px] sm:text-[30px] lg:text-[36px] font-light text-gray-900 leading-snug mb-5 md:mb-6">
            The Continuous Surface of Rasico
          </h2>
          <div className="space-y-4 mb-8 md:mb-10">
            <p className="text-[14px] sm:text-[15px] text-gray-700 leading-[1.85]">
              Rasico is a cement-based decorative coating for exterior areas, providing high wear resistance yet with a thickness of just 3&ndash;4 mm.
            </p>
            <p className="text-[14px] sm:text-[15px] text-gray-700 leading-[1.85]">
              Rasico is applied by trowel over new or existing substrates and offers original designs characterised by the unique finishes which can be varied through colour choice and application technique.
            </p>
            <p className="text-[14px] sm:text-[15px] text-gray-700 leading-[1.85]">
              Rasico is quickly applied with a minimum of material requirement and without the need for existing slab removal, making it perfect for renovations on terraces and balconies.
            </p>
            <p className="text-[14px] sm:text-[15px] text-gray-700 leading-[1.85]">
              The mixture, consisting of a powder based on quartz and a water-based polymer, is applied by trowel in two coats, with a final sanding revealing depth and movement.
            </p>
          </div>
          <Link
            href="#"
            className="inline-flex items-center gap-3 text-[14px] text-gray-800 hover:text-gray-500 transition-colors group w-fit"
          >
            <span className="flex items-center justify-center w-7 h-7 rounded-full border border-gray-500 group-hover:border-gray-400 group-hover:bg-gray-800 group-hover:text-white transition-colors shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3.5 h-3.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </span>
            Unrepeatable Beauty
          </Link>
        </div>

        <div className="w-full md:w-[62%] relative aspect-[4/3] md:aspect-auto md:h-[420px] lg:h-[500px] overflow-hidden">
          <Image
            src="/images/rasico/rasico-continuous-space.jpg"
            alt="Rasico exterior surface finish"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 62vw"
          />
        </div>

      </div>
    </section>
  );
}

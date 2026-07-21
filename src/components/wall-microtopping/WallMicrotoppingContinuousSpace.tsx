"use client";

import Image from "next/image";
import Link from "next/link";

export default function WallMicrotoppingContinuousSpace() {
  return (
    <section className="bg-white mt-[15px] py-14 md:py-20 md:mx-[15px] md:[width:calc(100%-30px)]">
      <div className="flex flex-col md:flex-row md:items-center gap-10 md:gap-0">

        {/* Left: Text content */}
        <div className="w-full md:w-[38%] shrink-0 px-5 sm:px-10 lg:px-14">
          <h2 className="text-[26px] sm:text-[30px] lg:text-[36px] font-light text-gray-900 leading-snug mb-5 md:mb-6">
            The Continuous Space of Microtopping®
          </h2>

          <div className="space-y-4 mb-8 md:mb-10">
            <p className="text-[14px] sm:text-[15px] text-gray-700 leading-[1.85]">
              Ideal Work Microtopping® is perfect for those who want a continuous, innovative and tactile surface that can make any space unique, whether it is a minimal modern environment where Ideal Work Microtopping® stands out as the main feature, or a classic, rustic or vintage environment, where it completes the style with refined discretion.
            </p>
            <p className="text-[14px] sm:text-[15px] text-gray-700 leading-[1.85]">
              You can customise Microtopping® by choosing shades and creating glossy, clouded, or acid stained effects to make it exactly the way you want it.
            </p>
          </div>

          <Link
            href="/walls/microtopping/unrepeatable-beauty"
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

        {/* Right: Image */}
        <div className="w-full md:w-[62%] relative aspect-[4/3] md:aspect-auto md:h-[420px] lg:h-[500px] overflow-hidden">
          <Image
            src="/images/wall-microtopping/continuous-space.jpg"
            alt="Microtopping wall continuous space"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 62vw"
          />
        </div>

      </div>
    </section>
  );
}
"use client";

import Image from "next/image";
import Link from "next/link";

export default function IndoorOutdoorServices() {
  return (
    <section className="relative md:mx-[15px] mt-[15px] mb-[5px]" style={{ height: "300vh" }}>

      {/* ── INDOOR ── */}
      <div className="sticky top-0 z-10 h-screen w-full flex flex-col md:flex-row overflow-hidden bg-white">

        {/* Content — left, with inset thumbnail */}
        <div className="w-full md:w-1/2 flex flex-col justify-center order-2 md:order-1 px-6 sm:px-12 lg:px-16 py-8 md:py-0 bg-white">
          <div className="relative w-full max-w-[260px] aspect-square mb-8 overflow-hidden">
            <Image
              src="/images/projects/indoor-microcement-thumb.jpg"
              alt="Indoor Microcement Detail"
              fill
              className="object-cover"
              sizes="260px"
            />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight mb-4">
            Indoor Surfaces
          </h2>
          <p className="text-[15px] text-gray-600 leading-relaxed mb-5 max-w-sm">
            Transform living rooms, kitchens, bathrooms and hallways with
            continuous, joint-free microcement surfaces — applied directly
            over existing tiles with no demolition required.
          </p>
          <Link
            href="/services/indoor-microcement"
            className="text-[15px] text-gray-900 underline underline-offset-4 hover:text-gray-500 transition-colors w-fit"
          >
            Discover our products
          </Link>
        </div>

        {/* Image — right, full height */}
        <div className="relative w-full md:w-1/2 h-[45vw] md:h-full shrink-0 order-1 md:order-2">
          <Image
            src="/images/projects/indoor-microcement.jpg"
            alt="Indoor Microcement Finish"
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </div>

      {/* ── OUTDOOR ── */}
      <div className="sticky top-0 z-20 h-screen w-full flex flex-col md:flex-row overflow-hidden shadow-[0_-20px_60px_rgba(0,0,0,0.3)] bg-white">

        {/* Image — left, full height */}
        <div className="relative w-full md:w-1/2 h-[45vw] md:h-full shrink-0 order-1">
          <Image
            src="/images/projects/outdoor-microcement.jpg"
            alt="Outdoor Microcement Finish"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>

        {/* Content — right, with inset thumbnail */}
        <div className="w-full md:w-1/2 flex flex-col justify-center order-2 px-6 sm:px-12 lg:px-16 py-8 md:py-0 bg-white">
          <div className="relative w-full max-w-[260px] aspect-square mb-8 overflow-hidden">
            <Image
              src="/images/projects/outdoor-microcement-thumb.jpg"
              alt="Outdoor Microcement Detail"
              fill
              className="object-cover"
              sizes="260px"
            />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight mb-4">
            Outdoor Surfaces
          </h2>
          <p className="text-[15px] text-gray-600 leading-relaxed mb-5 max-w-sm">
            Built for sun, rain and heavy foot traffic — our outdoor systems
            bring seamless beauty to terraces, poolsides and façades with
            non-slip, weatherproof formulations for India&apos;s climate.
          </p>
          <Link
            href="/services/outdoor-microcement"
            className="text-[15px] text-gray-900 underline underline-offset-4 hover:text-gray-500 transition-colors w-fit"
          >
            Discover more
          </Link>
        </div>
      </div>

      {/* ── SWIMMING POOL ── */}
      <div className="sticky top-0 z-30 h-screen w-full flex flex-col md:flex-row overflow-hidden shadow-[0_-20px_60px_rgba(0,0,0,0.3)] bg-white">

        {/* Content — left, with inset thumbnail */}
        <div className="w-full md:w-1/2 flex flex-col justify-center order-2 md:order-1 px-6 sm:px-12 lg:px-16 py-8 md:py-0 bg-white">
          <div className="relative w-full max-w-[260px] aspect-square mb-8 overflow-hidden">
            <Image
              src="/images/projects/pool-microcement-thumb.jpg"
              alt="Swimming Pool Microcement Detail"
              fill
              className="object-cover"
              sizes="260px"
            />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight mb-4">
            Swimming Pool Surfaces
          </h2>
          <p className="text-[15px] text-gray-600 leading-relaxed mb-5 max-w-sm">
            Transform any pool into a seamless architectural feature.
            Our pool-grade systems are engineered for permanent water
            immersion, chemical resistance and long-term structural stability.
          </p>
          <Link
            href="/services/pool-microcement"
            className="text-[15px] text-gray-900 underline underline-offset-4 hover:text-gray-500 transition-colors w-fit"
          >
            Discover more
          </Link>
        </div>

        {/* Image — right, full height */}
        <div className="relative w-full md:w-1/2 h-[45vw] md:h-full shrink-0 order-1 md:order-2">
          <Image
            src="/images/projects/swimming-pool-outdoor.jpg"
            alt="Swimming Pool Microcement Finish"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </div>


    </section>
  );
}
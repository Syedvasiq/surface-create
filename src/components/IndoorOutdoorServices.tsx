"use client";

import Image from "next/image";
import Link from "next/link";

export default function IndoorOutdoorServices() {
  return (
    <section className="relative md:mx-[15px] mt-[15px] mb-[5px]" style={{ height: "300vh" }}>

      {/* ── INDOOR ── */}
      <div className="sticky top-0 z-10 h-screen w-full flex flex-col md:flex-row overflow-hidden bg-white">
        <div className="w-full md:w-1/2 flex flex-col justify-start order-2 md:order-1 px-6 sm:px-12 lg:px-16 pt-10 md:pt-12 lg:pt-16 pb-8 bg-white">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight mb-4">
            Indoor Surfaces
          </h2>
          <p className="text-[15px] text-gray-600 leading-relaxed mb-4 max-w-lg">
            Transform living rooms, kitchens, bathrooms and hallways with
            continuous, joint-free microcement surfaces — applied directly
            over existing tiles with no demolition required.
          </p>
          <p className="text-[15px] text-gray-600 leading-relaxed mb-4 max-w-lg">
            Each finish is hand-applied and sealed for lasting durability,
            offering a refined material language that works across every
            room in the home or commercial space.
          </p>
          <p className="text-[15px] text-gray-600 leading-relaxed mb-5 max-w-lg">
            From polished concrete looks to soft matte tones, our indoor
            systems are available in a wide range of colours and textures
            to complement any interior design direction — whether minimal,
            warm or contemporary.
          </p>
          <Link
            href="/floors"
            className="text-[15px] text-gray-900 underline underline-offset-4 hover:text-gray-500 transition-colors w-fit"
          >
            Discover our products
          </Link>
        </div>
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
        <div className="relative w-full md:w-1/2 h-[45vw] md:h-full shrink-0 order-1">
          <Image
            src="/images/projects/outdoor-microcement.jpg"
            alt="Outdoor Microcement Finish"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
        <div className="w-full md:w-1/2 flex flex-col justify-start order-2 px-6 sm:px-12 lg:px-16 pt-10 md:pt-12 lg:pt-16 pb-8 bg-white">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight mb-4">
            Outdoor Surfaces
          </h2>
          <p className="text-[15px] text-gray-600 leading-relaxed mb-4 max-w-lg">
            Built for sun, rain and heavy foot traffic — our outdoor systems
            bring seamless beauty to terraces, poolsides and façades with
            non-slip, weatherproof formulations for India&apos;s climate.
          </p>
          <p className="text-[15px] text-gray-600 leading-relaxed mb-4 max-w-lg">
            Engineered to withstand UV exposure and thermal movement, our
            exterior finishes maintain their appearance and integrity through
            years of demanding outdoor conditions.
          </p>
          <p className="text-[15px] text-gray-600 leading-relaxed mb-5 max-w-lg">
            Anti-slip additives and breathable sealers make our outdoor
            range suitable for driveways, garden paths, covered terraces
            and commercial exteriors — delivering performance without
            compromising on aesthetics.
          </p>
          <Link
            href="/floors"
            className="text-[15px] text-gray-900 underline underline-offset-4 hover:text-gray-500 transition-colors w-fit"
          >
            Discover more
          </Link>
        </div>
      </div>

      {/* ── SWIMMING POOL ── */}
      <div className="sticky top-0 z-30 h-screen w-full flex flex-col md:flex-row overflow-hidden shadow-[0_-20px_60px_rgba(0,0,0,0.3)] bg-white">
        <div className="w-full md:w-1/2 flex flex-col justify-start order-2 md:order-1 px-6 sm:px-12 lg:px-16 pt-10 md:pt-12 lg:pt-16 pb-8 bg-white">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight mb-4">
            Swimming Pool Surfaces
          </h2>
          <p className="text-[15px] text-gray-600 leading-relaxed mb-4 max-w-lg">
            Transform any pool into a seamless architectural feature.
            Our pool-grade systems are engineered for permanent water
            immersion, chemical resistance and long-term structural stability.
          </p>
          <p className="text-[15px] text-gray-600 leading-relaxed mb-4 max-w-lg">
            Applied as a continuous lining with no grout lines or joints,
            the finish creates a clean, modern aesthetic while meeting the
            technical demands of full aquatic environments.
          </p>
          <p className="text-[15px] text-gray-600 leading-relaxed mb-5 max-w-lg">
            Compatible with saltwater and chlorinated systems, our pool
            coatings resist algae, staining and chemical degradation —
            keeping the surface looking pristine with minimal maintenance
            over the long term.
          </p>
          <Link
            href="/floors"
            className="text-[15px] text-gray-900 underline underline-offset-4 hover:text-gray-500 transition-colors w-fit"
          >
            Discover more
          </Link>
        </div>
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

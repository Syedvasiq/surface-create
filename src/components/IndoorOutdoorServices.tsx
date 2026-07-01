"use client";

import Image from "next/image";
import Link from "next/link";

/*
  Indoor → Outdoor Microcement Services
  The section must NOT have overflow-hidden — that breaks sticky.
  Width is controlled by mx-[15px] on the section.
  Each panel clips itself with overflow-hidden.
*/
export default function IndoorOutdoorServices() {
  return (
    <section className="relative bg-[#f0ece6] md:mx-[15px] mt-[15px] mb-[5px]">

      {/* ── INDOOR ── */}
      <div className="sticky top-0 z-0 h-auto md:h-screen w-full flex flex-col md:flex-row overflow-hidden">

        {/* Image — left */}
        <div className="relative w-full md:w-1/2 h-[40vh] md:h-full order-1">
          <Image
            src="/images/projects/indoor-microcement.jpg"
            alt="Indoor Microcement Finish"
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-black/10" />
        </div>

        {/* Content — right */}
        <div className="relative w-full md:w-1/2 h-auto md:h-full order-2 flex flex-col justify-center px-6 sm:px-14 lg:px-20 py-8 md:py-0 bg-[#f0ece6]">
          <p className="text-xs tracking-widest text-gray-500 uppercase mb-4">
            Indoor Surfaces
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-light text-gray-800 leading-tight mb-4">
            Seamless Indoor<br />Microcement Finishes
          </h2>
          <p className="text-sm sm:text-[15px] text-gray-600 leading-relaxed mb-4 max-w-md">
            Transform living rooms, kitchens, bathrooms and hallways with
            continuous, joint-free microcement surfaces. Engineered for
            floors, walls and countertops, our indoor systems deliver a
            refined, minimalist aesthetic that adapts to any interior
            design language.
          </p>
          <p className="text-sm text-gray-500 leading-relaxed mb-6 max-w-md">
            Applied directly over existing tiles or concrete with no demolition required,
            microcement reduces project time dramatically. The result is a monolithic surface
            with zero grout lines — hygienic, dust-free and visually expansive. Available in
            over 60 curated tones, from warm stone neutrals to deep architectural shades,
            each finish is sealed for long-term protection and effortless maintenance.
          </p>
          <ul className="space-y-2 mb-6">
            {[
              "Tile-free, seamless floors and walls",
              "Wide colour and texture palette — 60+ tones",
              "Compatible with underfloor heating systems",
              "Durable, scratch-resistant and easy to maintain",
              "Applied over existing surfaces — no demolition",
              "Ideal for luxury homes, hotels and boutique interiors",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                <span className="mt-1.5 w-1 h-1 rounded-full bg-gray-500 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-4 flex-wrap">
            <Link
              href="/services/indoor-microcement"
              className="inline-flex items-center gap-2 text-sm border border-gray-700 text-gray-700 rounded-full px-6 py-2.5 hover:bg-gray-700 hover:text-white transition-colors"
            >
              Explore Indoor Solutions
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-3.5 h-3.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
            <Link
              href="/projects"
              className="text-sm text-gray-500 hover:text-gray-800 transition-colors underline underline-offset-4"
            >
              View Projects
            </Link>
          </div>
        </div>
      </div>

      {/* ── OUTDOOR ── */}
      <div className="sticky top-0 z-10 h-auto md:h-screen w-full flex flex-col md:flex-row overflow-hidden shadow-[0_-20px_60px_rgba(0,0,0,0.3)] bg-[#2b2b28]">

        {/* Content — left */}
        <div className="relative w-full md:w-1/2 h-auto md:h-full order-2 md:order-1 flex flex-col justify-center px-6 sm:px-14 lg:px-20 py-8 md:py-0 bg-[#2b2b28]">
          <p className="text-xs tracking-widest text-gray-400 uppercase mb-4">
            Outdoor Surfaces
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-light text-white leading-tight mb-4">
            Durable Outdoor<br />Microcement Systems
          </h2>
          <p className="text-sm sm:text-[15px] text-gray-300 leading-relaxed mb-4 max-w-md">
            Built to withstand sun, rain and heavy foot traffic, our outdoor
            microcement systems bring the same seamless beauty to terraces,
            poolsides, patios and façades — engineered with non-slip,
            weatherproof formulations for India&apos;s diverse climate.
          </p>
          <p className="text-sm text-gray-400 leading-relaxed mb-6 max-w-md">
            Unlike conventional tiles, our outdoor microcement system expands and contracts
            with temperature changes, preventing cracking and delamination. Specially
            formulated anti-slip textures meet safety standards for wet zones, pool decks
            and high-traffic exteriors — without sacrificing the refined, seamless
            appearance that defines every Surface Kreate project.
          </p>
          <ul className="space-y-2 mb-6">
            {[
              "UV-stable, weatherproof formulation",
              "Slip-resistant textured finish for wet areas",
              "Suitable for poolsides, terraces and patios",
              "Resists cracking across India's seasonal extremes",
              "Applies over existing concrete — no demolition",
              "Low maintenance, pressure-wash friendly",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-gray-300">
                <span className="mt-1.5 w-1 h-1 rounded-full bg-gray-400 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-4 flex-wrap">
            <Link
              href="/services/outdoor-microcement"
              className="inline-flex items-center gap-2 text-sm border border-white/70 text-white rounded-full px-6 py-2.5 hover:bg-white hover:text-gray-900 transition-colors"
            >
              Explore Outdoor Solutions
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-3.5 h-3.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
            <Link
              href="/projects"
              className="text-sm text-gray-400 hover:text-white transition-colors underline underline-offset-4"
            >
              View Projects
            </Link>
          </div>
        </div>

        {/* Image — right */}
        <div className="relative w-full md:w-1/2 h-[40vh] md:h-full order-1 md:order-2">
          <Image
            src="/images/projects/outdoor-microcement.jpg"
            alt="Outdoor Microcement Finish"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-black/15" />
        </div>
      </div>

      {/* ── SWIMMING POOL ── */}
      <div className="relative z-20 h-auto md:h-screen w-full flex flex-col md:flex-row overflow-hidden shadow-[0_-20px_60px_rgba(0,0,0,0.3)] bg-[#0e2a2a]">

        {/* Content — right */}
        <div className="relative w-full md:w-1/2 h-auto md:h-full order-2 flex flex-col justify-center px-6 sm:px-14 lg:px-20 py-8 md:py-0 bg-[#0e2a2a]">
          <p className="text-xs tracking-widest text-teal-400/70 uppercase mb-4">
            Pool Surfaces
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-light text-white leading-tight mb-4">
            Luxury Swimming Pool<br />Microcement Finishes
          </h2>
          <p className="text-sm sm:text-[15px] text-gray-300 leading-relaxed mb-4 max-w-md">
            Redefine your pool with a seamless, grout-free microcement finish that transforms
            any swimming pool into a stunning architectural feature. Our pool-grade systems
            are engineered for permanent water immersion, chemical resistance and long-term
            structural stability — combining elegance with absolute durability.
          </p>
          <p className="text-sm text-gray-400 leading-relaxed mb-6 max-w-md">
            Unlike mosaic tiles or vinyl liners, microcement pools offer a continuous
            surface with no joints to harbour algae or bacteria. Available in deep oceanic
            tones, warm sandy neutrals and crisp whites — every finish creates a unique
            visual depth that shifts beautifully with light and water movement.
          </p>
          <ul className="space-y-2 mb-6">
            {[
              "Certified for full water immersion and chlorine resistance",
              "Zero grout lines — no algae, no bacteria build-up",
              "Available in custom colours and textures",
              "Non-slip finish for pool edges and steps",
              "Suitable for new builds and existing pool renovation",
              "Compatible with saltwater and heated pool systems",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-gray-300">
                <span className="mt-1.5 w-1 h-1 rounded-full bg-teal-400/60 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-4 flex-wrap">
            <Link
              href="/services/pool-microcement"
              className="inline-flex items-center gap-2 text-sm border border-teal-400/60 text-teal-300 rounded-full px-6 py-2.5 hover:bg-teal-400/20 transition-colors"
            >
              Explore Pool Solutions
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-3.5 h-3.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
            <Link
              href="/projects"
              className="text-sm text-gray-400 hover:text-white transition-colors underline underline-offset-4"
            >
              View Projects
            </Link>
          </div>
        </div>

        {/* Image — left */}
        <div className="relative w-full md:w-1/2 h-[40vh] md:h-full order-1">
          <Image
            src="/images/projects/swimming-pool-outdoor.jpg"
            alt="Swimming Pool Microcement Finish"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-black/15" />
        </div>
      </div>

    </section>
  );
}

"use client";

import Link from "next/link";

export default function NuvolatoHero() {
  return (
    <section className="relative w-full h-[48vh] min-h-[284px] md:h-[70vh] md:min-h-[378px] overflow-hidden md:mx-[15px] md:[width:calc(100%-30px)]">

      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/video/nuvolato-hero.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-black/30" />

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-5 sm:px-8 -mt-6 md:-mt-10">

        <nav className="mb-5 md:mb-7">
          <ol className="flex items-center gap-1.5 text-[11px] sm:text-[12px] text-white/70 tracking-wide">
            <li>
              <Link href="/" className="hover:text-white transition-colors">
                Home
              </Link>
            </li>
            <li className="text-white/50">/</li>
            <li className="text-white/50">
              <Link href="/floors" className="hover:text-white transition-colors">
                Floors
              </Link>
            </li>
            <li className="text-white/50">/</li>
            <li className="text-white/90">Nuvolato Architop</li>
          </ol>
        </nav>

        <h1 className="text-[36px] sm:text-[52px] md:text-[68px] lg:text-[80px] font-light text-white leading-none tracking-tight mb-5 md:mb-6">
          Nuvolato Architop
        </h1>

        <p className="text-[13px] sm:text-[15px] md:text-[16px] text-white/85 leading-relaxed max-w-[340px] sm:max-w-[480px] md:max-w-[540px] mb-8 md:mb-10">
          A seamless, cloud-effect decorative concrete surface.
          <br className="hidden sm:block" />
          Timeless aesthetics with exceptional durability for floors and walls.
        </p>

      </div>
    </section>
  );
}

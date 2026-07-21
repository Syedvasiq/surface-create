"use client";

import Link from "next/link";

export default function StenciltopHero() {
  return (
    <section className="relative w-full h-[48vh] min-h-[284px] md:h-[70vh] md:min-h-[378px] overflow-hidden md:mx-[15px] md:[width:calc(100%-30px)]">
      <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover">
        <source src="/video/STENCILTOP-HERO.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black/30" />
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-5 sm:px-8 -mt-6 md:-mt-10">
        <nav className="mb-5 md:mb-7">
          <ol className="flex items-center gap-1.5 text-[11px] sm:text-[12px] text-white/70 tracking-wide">
            <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
            <li className="text-white/50">/</li>
            <li className="text-white/50"><Link href="/floors" className="hover:text-white transition-colors">Floors</Link></li>
            <li className="text-white/50">/</li>
            <li className="text-white/90">Stenciltop Floor</li>
          </ol>
        </nav>
        <h1 className="text-[42px] sm:text-[60px] md:text-[78px] lg:text-[90px] font-light text-white leading-none tracking-tight mb-5 md:mb-6">
          Stenciltop
        </h1>
        <p className="text-[13px] sm:text-[15px] md:text-[16px] text-white/85 leading-relaxed max-w-[340px] sm:max-w-[480px] md:max-w-[540px] mb-8 md:mb-10">
          Renew existing concrete with new colours, patterns and textures.
          <br className="hidden sm:block" />
          Easily, quickly and with minimum disruption.
        </p>
      </div>
    </section>
  );
}

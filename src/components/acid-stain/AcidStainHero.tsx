"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

const heroImages = [
  "/images/acid-stain/hero-1.jpg",
  "/images/acid-stain/hero-2.jpg",
];

export default function AcidStainHero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setCurrent((c) => (c + 1) % heroImages.length), 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full h-[48vh] min-h-[284px] md:h-[70vh] md:min-h-[378px] overflow-hidden md:mx-[15px] md:[width:calc(100%-30px)]">
      {heroImages.map((src, i) => (
        <div
          key={i}
          className="absolute inset-0 transition-opacity duration-1000"
          style={{ opacity: i === current ? 1 : 0 }}
        >
          <Image src={src} alt={`Acid Stain ${i + 1}`} fill className="object-cover" priority={i === 0} sizes="100vw" />
        </div>
      ))}
      <div className="absolute inset-0 bg-black/35" />
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-5 sm:px-8 -mt-6 md:-mt-10">
        <nav className="mb-5 md:mb-7">
          <ol className="flex items-center gap-1.5 text-[11px] sm:text-[12px] text-white/70 tracking-wide">
            <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
            <li className="text-white/50">/</li>
            <li className="text-white/50"><Link href="/floors" className="hover:text-white transition-colors">Floors</Link></li>
            <li className="text-white/50">/</li>
            <li className="text-white/90">Acid-Stain</li>
          </ol>
        </nav>
        <h1 className="text-[42px] sm:text-[60px] md:text-[78px] lg:text-[90px] font-light text-white leading-none tracking-tight mb-5 md:mb-6">
          Acid-Stain
        </h1>
        <p className="text-[13px] sm:text-[15px] md:text-[16px] text-white/85 leading-relaxed max-w-[340px] sm:max-w-[480px] md:max-w-[540px] mb-8 md:mb-10">
          Unique and permanent variegated effects on concrete.
          <br className="hidden sm:block" />
          Every surface is one of a kind.
        </p>
        <div className="flex gap-2 mt-2">
          {heroImages.map((_, i) => (
            <button key={i} onClick={() => setCurrent(i)} className={`w-2 h-2 rounded-full transition-colors ${i === current ? "bg-white" : "bg-white/40"}`} aria-label={`Slide ${i + 1}`} />
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const heroImages = [
  "/images/terrae-calce/hero-1.jpg",
  "/images/terrae-calce/hero-2.jpg",
];

export default function TerraeCalceHero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-[48vh] min-h-[284px] md:h-[70vh] md:min-h-[378px] overflow-hidden md:mx-[15px] md:[width:calc(100%-30px)]">
      {heroImages.map((src, i) => (
        <div
          key={src}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            i === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={src}
            alt={`Terrae-Calce hero ${i + 1}`}
            className="w-full h-full object-cover"
          />
        </div>
      ))}
      <div className="absolute inset-0 bg-black/30" />
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-5 sm:px-8 -mt-6 md:-mt-10">
        <nav className="mb-5 md:mb-7">
          <ol className="flex items-center gap-1.5 text-[11px] sm:text-[12px] text-white/70 tracking-wide">
            <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
            <li className="text-white/50">/</li>
            <li><Link href="/walls" className="hover:text-white transition-colors">Walls</Link></li>
            <li className="text-white/50">/</li>
            <li className="text-white/90">Terrae-Calce</li>
          </ol>
        </nav>
        <h1 className="text-[42px] sm:text-[60px] md:text-[78px] lg:text-[90px] font-light text-white leading-none tracking-tight mb-5 md:mb-6">
          Terrae-Calce
        </h1>
        <p className="text-[13px] sm:text-[15px] md:text-[16px] text-white/85 leading-relaxed max-w-[340px] sm:max-w-[480px] md:max-w-[540px]">
          Natural lime wall finishes that breathe with the earth.
          <br className="hidden sm:block" />
          Sustainable, breathable, timeless.
        </p>
      </div>
    </section>
  );
}

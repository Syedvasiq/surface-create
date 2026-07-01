"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const categories = [
  "Walls",
  "Floors",
  "Bathrooms",
  "Kitchens",
  "Feature surfaces",
];

export default function RenovationBeforeAfter() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const [activeIdx, setActiveIdx] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const el = sectionRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const viewportH = window.innerHeight;
      const total = rect.height - viewportH;
      const scrolled = -rect.top;
      const p = total > 0 ? Math.min(Math.max(scrolled / total, 0), 1) : 0;
      setProgress(p);
      const idx = Math.min(
        categories.length,
        Math.floor(p * (categories.length + 1))
      );
      setActiveIdx(idx);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const afterTranslateY = 100 - progress * 100;

  return (
    <section
      ref={sectionRef}
      className="relative bg-white md:mx-[15px] mt-[15px] mb-[5px] pb-16"
      style={{ height: "220vh" }}
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col md:flex-row">

        {/* ── MOBILE: Image on top, content below ──────────────────────────
            ── DESKTOP: Left text 32% | Right images 68% (unchanged) ── */}

        {/* ── Image area — top on mobile, right on desktop ── */}
        <div className="relative w-full md:w-[68%] md:order-2 h-[52vw] md:h-full overflow-hidden shrink-0">

          {/* BEFORE — greyscale, pinned at the back */}
          <div className="absolute inset-0">
            <Image
              src="/images/projects/living-room-before.png"
              alt="Living room before microcement renovation"
              fill
              className="object-cover grayscale"
              sizes="(max-width: 768px) 100vw, 68vw"
              priority
            />
            <div className="absolute top-3 left-3 md:top-5 md:left-5 z-10 bg-black/40 backdrop-blur-sm text-white text-[10px] md:text-[11px] tracking-widest uppercase px-2 py-1 md:px-3">
              Before
            </div>
          </div>

          {/* AFTER — colour, slides up over the before image */}
          <div
            className="absolute inset-0 transition-transform duration-100 ease-out"
            style={{ transform: `translateY(${afterTranslateY}%)` }}
          >
            <Image
              src="/images/projects/living-room-after.png"
              alt="Living room after microcement renovation"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 68vw"
              priority
            />
            <div className="absolute top-0 left-0 right-0 h-10 bg-gradient-to-b from-black/20 to-transparent" />
            <div className="absolute top-3 left-3 md:top-5 md:left-5 z-10 bg-black/40 backdrop-blur-sm text-white text-[10px] md:text-[11px] tracking-widest uppercase px-2 py-1 md:px-3">
              After
            </div>
          </div>
        </div>

        {/* ── Text content — bottom on mobile, left on desktop ── */}
        <div className="w-full md:w-[32%] md:order-1 shrink-0 flex flex-col justify-center px-6 sm:px-10 lg:px-14 py-8 md:py-0 bg-white overflow-y-auto">

          <p className="text-[11px] tracking-widest text-gray-400 uppercase mb-3 md:mb-4">
            Before &amp; After
          </p>

          <h2 className="text-2xl sm:text-3xl lg:text-[42px] font-light text-gray-900 leading-tight mb-4 md:mb-5">
            Perfect for renovation<br />and restoration
          </h2>

          <p className="text-[13px] md:text-[14px] text-gray-600 leading-relaxed mb-4 md:mb-6 max-w-sm">
            Surface Kreate microcement and decorative concrete systems are
            designed for seamless renovation with zero demolition. Applied
            directly over existing tiles, concrete or plaster, our finishes
            transform spaces in days — not weeks — with minimal disruption
            to your home or business.
          </p>

          <p className="hidden md:block text-[13px] text-gray-500 leading-relaxed mb-7 max-w-sm">
            Whether you have minimal thickness or maximum depth available,
            our system has a solution. Suitable for both internal and
            external surfaces on new builds and existing properties across
            India.
          </p>

          {/* Category list — revealed progressively as user scrolls */}
          <div className="flex flex-col mb-5 md:mb-7">
            {categories.map((cat, i) => {
              const visible = i < activeIdx;
              const isLast = i === activeIdx - 1;
              return (
                <Link
                  key={cat}
                  href="#"
                  className={`text-[14px] md:text-[15px] py-1 md:py-1.5 transition-all duration-500 ${
                    visible
                      ? "text-gray-800 opacity-100 translate-y-0"
                      : "text-gray-300 opacity-0 -translate-y-1"
                  } ${isLast ? "underline underline-offset-4" : ""}`}
                  style={{ transitionDelay: `${i * 60}ms` }}
                >
                  {cat}
                </Link>
              );
            })}
          </div>

          <Link
            href="/projects"
            className="inline-flex items-center gap-3 text-[13px] md:text-[14px] text-gray-800 hover:text-gray-600 transition-colors w-fit group"
          >
            <span className="flex items-center justify-center w-7 h-7 rounded-full border border-gray-400 group-hover:border-gray-700 group-hover:bg-gray-700 group-hover:text-white transition-colors shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3.5 h-3.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </span>
            View all renovations
          </Link>
        </div>

      </div>
    </section>
  );
}
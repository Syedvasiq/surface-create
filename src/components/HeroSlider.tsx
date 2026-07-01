"use client";

import Image from "next/image";
import { useState, useEffect, useCallback } from "react";

const slides = [
  {
    image: "/images/hero/hero-image-1.png",
    smallHeading: "Premium Decorative Surface Solutions",
    mainHeading: "Transform Everyday Interiors Into Timeless Luxury",
    description:
      "Create sophisticated living spaces with seamless Microcement, Decorative Concrete, Polished Concrete and Textured Wall Finishes. Surface Kreate brings premium European-inspired surface solutions to apartments, villas and luxury residences across India.",
    cta: "Get Free Consultation",
    visitLine: "Visit the line",
    visitLabel: "Microcement",
  },
  {
    image: "/images/hero/hero-image-2.png",
    smallHeading: "Luxury Waterproof Surface Systems",
    mainHeading: "Elegant Bathrooms Without Tiles or Grout Lines",
    description:
      "Experience the beauty of seamless waterproof bathrooms designed with Microcement. Ideal for luxury homes, hotels and wellness spaces, our finishes create clean, modern and easy-to-maintain environments.",
    cta: "Book Site Visit",
    visitLine: "Visit the line",
    visitLabel: "Microcement",
  },
  {
    image: "/images/hero/hero-image-3.png",
    smallHeading: "Architectural Exterior Finishes",
    mainHeading: "Make Every First Impression Exceptional",
    description:
      "Upgrade villas, apartments and commercial buildings with durable exterior textures, decorative concrete finishes and architectural coatings engineered for India's diverse climate.",
    cta: "Explore Exterior Designs",
    visitLine: "Visit the line",
    visitLabel: "Decorative Concrete",
  },
  {
    image: "/images/hero/hero-image-4.png",
    smallHeading: "Luxury Pool & Outdoor Living",
    mainHeading: "Beautiful Outdoor Spaces Designed to Last",
    description:
      "Transform swimming pools, terraces, patios and outdoor entertainment areas with premium non-slip decorative surface systems that combine safety, elegance and exceptional durability.",
    cta: "View Pool Projects",
    visitLine: "Visit the line",
    visitLabel: "Outdoor Finishes",
  },
  {
    image: "/images/hero/hero-image-5.png",
    smallHeading: "Commercial Interior Specialists",
    mainHeading: "Create Memorable Dining & Hospitality Experiences",
    description:
      "From boutique cafés to premium restaurants, Surface Kreate designs seamless interiors that elevate customer experiences with decorative walls, polished floors and custom architectural finishes.",
    cta: "Explore Commercial Projects",
    visitLine: "Visit the line",
    visitLabel: "Polished Concrete",
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);

  const goTo = useCallback(
    (index: number) => {
      if (animating) return;
      setAnimating(true);
      setTimeout(() => {
        setCurrent((index + slides.length) % slides.length);
        setAnimating(false);
      }, 400);
    },
    [animating]
  );

  const prev = () => goTo(current - 1);
  const next = useCallback(() => goTo(current + 1), [current, goTo]);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  const slide = slides[current];

  return (
    <section className="relative h-[92vh] min-h-[540px] w-full overflow-hidden bg-black md:mx-[15px] md:[width:calc(100%-30px)]">
      {/* Background Images */}
      {slides.map((s, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-700 ${
            i === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={s.image}
            alt={s.mainHeading}
            fill
            className="object-cover"
            priority={i === 0}
          />
          <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        </div>
      ))}

      {/* Left Arrow */}
      <button
        onClick={prev}
        aria-label="Previous slide"
        className="absolute left-3 sm:left-6 top-1/2 z-20 -translate-y-1/2 flex h-9 w-9 sm:h-11 sm:w-11 items-center justify-center rounded-full border border-white/60 text-white backdrop-blur-sm transition hover:bg-white/20"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-4 w-4 sm:h-5 sm:w-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>
      </button>

      {/* Right Arrow */}
      <button
        onClick={next}
        aria-label="Next slide"
        className="absolute right-3 sm:right-6 top-1/2 z-20 -translate-y-1/2 flex h-9 w-9 sm:h-11 sm:w-11 items-center justify-center rounded-full border border-white/60 text-white backdrop-blur-sm transition hover:bg-white/20"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-4 w-4 sm:h-5 sm:w-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>
      </button>

      {/* Content — bottom-left */}
      <div
        className={`absolute bottom-0 left-0 z-10 px-5 sm:pl-16 sm:pr-8 pb-8 sm:pb-10 transition-all duration-500 ${
          animating ? "opacity-0 translate-y-3" : "opacity-100 translate-y-0"
        }`}
        style={{ maxWidth: "min(680px, 90vw)" }}
      >
        <p className="mb-2 text-[10px] sm:text-[12px] uppercase tracking-widest text-white/70">
          {slide.smallHeading}
        </p>

        <h1 className="mb-3 text-[22px] sm:text-[30px] lg:text-[38px] font-semibold leading-tight text-white">
          {slide.mainHeading}
        </h1>

        <p className="mb-5 text-[12px] sm:text-[13px] leading-relaxed text-white/75 line-clamp-3 sm:line-clamp-none">
          {slide.description}
        </p>

        <a
          href="#"
          className="inline-flex items-center gap-2 text-[12px] sm:text-[13px] text-white/80 hover:text-white transition-colors"
        >
          <span className="flex h-6 w-6 items-center justify-center rounded-full border border-white/60">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="h-3.5 w-3.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </span>
          <span className="border-b border-white/40 pb-px">{slide.cta}</span>
        </a>
      </div>

      {/* Visit the line — hidden on mobile */}
      <div
        className={`hidden sm:block absolute bottom-10 right-8 z-10 text-right transition-all duration-500 ${
          animating ? "opacity-0 translate-y-3" : "opacity-100 translate-y-0"
        }`}
      >
        <p className="mb-1 text-[12px] text-white/60">{slide.visitLine}</p>
        <div className="flex items-center justify-end gap-2">
          <span className="h-2 w-2 rounded-full bg-white/60" />
          <span className="text-[15px] font-medium text-white">{slide.visitLabel}</span>
        </div>
      </div>
    </section>
  );
}

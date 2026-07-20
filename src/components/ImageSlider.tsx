"use client";

import Image from "next/image";
import { useRef, useState, useCallback } from "react";

interface ImageSliderProps {
  images: string[];
  /** How many images visible at once on desktop (default 3) */
  visibleCount?: number;
}

export default function ImageSlider({ images, visibleCount = 3 }: ImageSliderProps) {
  const [current, setCurrent] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const max = images.length - visibleCount;

  const prev = useCallback(() => setCurrent((c) => Math.max(c - 1, 0)), []);
  const next = useCallback(() => setCurrent((c) => Math.min(c + 1, max)), [max]);

  return (
    <div className="relative w-full select-none">
      {/* Track */}
      <div className="overflow-hidden">
        <div
          ref={trackRef}
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(calc(-${current} * (100% / ${visibleCount})))` }}
        >
          {images.map((src, i) => (
            <div
              key={i}
              className="shrink-0 px-[3px]"
              style={{ width: `${100 / visibleCount}%` }}
            >
              <div className="relative w-full overflow-hidden" style={{ aspectRatio: "4/3" }}>
                <Image
                  src={src}
                  alt={`Slide ${i + 1}`}
                  fill
                  className="object-cover"
                  sizes={`(max-width:768px) 100vw, ${Math.round(100 / visibleCount)}vw`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Left arrow */}
      {current > 0 && (
        <button
          onClick={prev}
          aria-label="Previous"
          className="absolute left-2 top-1/2 -translate-y-1/2 z-10 flex h-9 w-9 items-center justify-center bg-white/80 hover:bg-white text-gray-800 shadow transition"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-4 w-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </button>
      )}

      {/* Right arrow */}
      {current < max && (
        <button
          onClick={next}
          aria-label="Next"
          className="absolute right-2 top-1/2 -translate-y-1/2 z-10 flex h-9 w-9 items-center justify-center bg-white/80 hover:bg-white text-gray-800 shadow transition"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-4 w-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </button>
      )}
    </div>
  );
}


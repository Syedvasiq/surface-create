"use client";

import ImageSlider from "@/components/ImageSlider";
import { useState } from "react";

const images = [
  { src: "/images/wall-microtopping/gallery-1.jpg", alt: "Microtopping wall gallery 1" },
  { src: "/images/wall-microtopping/gallery-2.jpg", alt: "Microtopping wall gallery 2" },
  { src: "/images/wall-microtopping/gallery-3.jpg", alt: "Microtopping wall gallery 3" },
  { src: "/images/wall-microtopping/gallery-4.jpg", alt: "Microtopping wall gallery 4" },
  { src: "/images/wall-microtopping/gallery-5.jpg", alt: "Microtopping wall gallery 5" },
  { src: "/images/wall-microtopping/gallery-6.jpg", alt: "Microtopping wall gallery 6" },
  { src: "/images/wall-microtopping/gallery-7.jpg", alt: "Microtopping wall gallery 7" },
  { src: "/images/wall-microtopping/gallery-8.jpg", alt: "Microtopping wall gallery 8" },
];

export default function WallMicrotoppingGallery() {
  const [visibleCount, setVisibleCount] = useState<number | null>(null);

  return (
    <section className="bg-white py-14 md:py-20 md:mx-[15px] md:[width:calc(100%-30px)]">
      <div className="px-5 sm:px-10 lg:px-14">
        <h2 className="text-[26px] sm:text-[30px] lg:text-[36px] font-light text-gray-900 leading-snug mb-10 md:mb-12">
          Gallery
        </h2>
      </div>
      <ImageSlider
        images={images}
        visibleCount={visibleCount}
        setVisibleCount={setVisibleCount}
        className="px-5 sm:px-10 lg:px-14"
      />
    </section>
  );
}
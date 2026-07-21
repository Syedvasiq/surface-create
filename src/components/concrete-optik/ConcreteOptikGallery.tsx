"use client";

import ImageSlider from "@/components/ImageSlider";
import { useEffect, useState } from "react";

const images = [
  "/images/concrete-optik/gallery-.jpg",
  "/images/concrete-optik/gallery-2.jpg",
  "/images/concrete-optik/gallery-3.jpg",
  "/images/concrete-optik/gallery-4.jpg",
  "/images/concrete-optik/gallery-5.jpg",
  "/images/concrete-optik/gallery-6.jpg",
  "/images/concrete-optik/gallery-7.jpg",
];

export default function ConcreteOptikGallery() {
  const [visibleCount, setVisibleCount] = useState(3);

  useEffect(() => {
    const update = () => {
      if (window.innerWidth < 640) setVisibleCount(1);
      else if (window.innerWidth < 1024) setVisibleCount(2);
      else setVisibleCount(3);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return (
    <section className="bg-white py-12 px-0 mt-[15px] md:mx-[15px] md:[width:calc(100%-30px)]">
      <ImageSlider images={images} visibleCount={visibleCount} />
    </section>
  );
}

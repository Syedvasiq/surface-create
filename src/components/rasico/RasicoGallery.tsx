"use client";

import ImageSlider from "@/components/ImageSlider";
import { useEffect, useState } from "react";

const images = Array.from({ length: 5 }, (_, i) => `/images/rasico/gallery-${i + 1}.jpg`);

export default function RasicoGallery() {
  const [visibleCount, setVisibleCount] = useState<number | null>(null);

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
      {visibleCount && <ImageSlider images={images} visibleCount={visibleCount} />}
    </section>
  );
}

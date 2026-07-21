"use client";

import ImageSlider from "@/components/ImageSlider";
import { useEffect, useState } from "react";

const images = [
  "/images/terrae-calce/gallery-1.jpg",
  "/images/terrae-calce/gallery-2.jpg",
  "/images/terrae-calce/gallery3.jpg",
  "/images/terrae-calce/gallery-4.jpg",
  "/images/terrae-calce/gallery-5.jpg",
  "/images/terrae-calce/gallery-6.jpg",
  "/images/terrae-calce/gallery-7.jpg",
  "/images/terrae-calce/gallery-8.jpg",
  "/images/terrae-calce/gallery-9.jpg",
  "/images/terrae-calce/gallery-10.jpg",
  "/images/terrae-calce/gallery-11.jpg",
  "/images/terrae-calce/gallery-12.jpg",
];

export default function TerraeCalceGallery() {
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

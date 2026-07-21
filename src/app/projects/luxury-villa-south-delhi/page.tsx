import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Luxury Villa, South Delhi",
  description: "Seamless microcement floors, walls and bathrooms in a luxury villa in South Delhi by Surface Crete.",
  alternates: { canonical: "/projects/luxury-villa-south-delhi" },
};

const images = [
  { src: "/images/projects/luxury-villa-south-delhi/luxury-villa-south-delhi-exterior.png", alt: "Exterior view" },
  { src: "/images/projects/luxury-villa-south-delhi/luxury-villa-south-delhi-living-room.png", alt: "Living room" },
  { src: "/images/projects/luxury-villa-south-delhi/luxury-villa-south-delhi-master-room.png", alt: "Master room" },
  { src: "/images/projects/luxury-villa-south-delhi/luxury-villa-south-delhi-bed-room.png", alt: "Bedroom" },
  { src: "/images/projects/luxury-villa-south-delhi/luxury-villa-south-delhi-master-bath-room.png", alt: "Master bathroom" },
  { src: "/images/projects/luxury-villa-south-delhi/luxury-villa-south-delhi-pool.png", alt: "Pool area" },
];

export default function ProjectPage() {
  return (
    <main className="flex flex-1 flex-col bg-white">

      {/* Back */}
      <div className="px-6 pt-8 pb-2 max-w-[1200px] mx-auto w-full">
        <Link href="/projects" className="inline-flex items-center gap-2 text-[13px] text-gray-500 hover:text-gray-900 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
          All Projects
        </Link>
      </div>

      {/* Hero image */}
      <div className="relative w-full" style={{ height: "60vh", minHeight: 320 }}>
        <Image src={images[0].src} alt={images[0].alt} fill className="object-cover" priority sizes="100vw" />
      </div>

      <div className="max-w-[1200px] mx-auto w-full px-6 py-12">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-12 border-b border-gray-200 pb-10">
          <div>
            <p className="text-[11px] uppercase tracking-widest text-gray-400 mb-2">Microcement</p>
            <h1 className="text-[32px] sm:text-[42px] font-light text-gray-900 leading-tight mb-4">Luxury Villa, South Delhi</h1>
            <p className="text-[14px] text-gray-600 leading-relaxed max-w-xl">
              A complete transformation of a luxury private residence in South Delhi using seamless
              microcement across floors, walls, bathrooms and the pool area. Surface Crete delivered
              a continuous, grout-free finish throughout, elevating every space with a refined
              minimalist aesthetic tailored to the client&apos;s vision.
            </p>
          </div>
          <div className="shrink-0 flex flex-col gap-3 text-[13px] text-gray-600 md:text-right">
            <div><span className="font-semibold text-gray-900 block">Location</span>South Delhi, India</div>
            <div><span className="font-semibold text-gray-900 block">Surface</span>Microcement · Microtopping</div>
            <div><span className="font-semibold text-gray-900 block">Application</span>Floors · Walls · Bathrooms · Pool</div>
          </div>
        </div>

        {/* Gallery grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {images.slice(1).map((img) => (
            <div key={img.src} className="relative w-full overflow-hidden" style={{ aspectRatio: "4/3" }}>
              <Image src={img.src} alt={img.alt} fill className="object-cover hover:scale-105 transition-transform duration-700" sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw" />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-14 pt-10 border-t border-gray-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-[15px] text-gray-700">Interested in a similar finish for your space?</p>
          <Link href="/contacts" className="inline-flex items-center gap-2 bg-gray-900 text-white text-[13px] font-semibold px-6 py-3 hover:bg-gray-700 transition-colors">
            Get Free Consultation
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>
      </div>
    </main>
  );
}

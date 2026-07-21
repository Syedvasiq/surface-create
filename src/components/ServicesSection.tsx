"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";

/* ─────────────────────────────────────────────
   DATA
───────────────────────────────────────────── */
interface Service {
  id: number;
  category: string;
  heading: string;
  description: string;
  extraLines: string[];
  subLabel: string;
  href: string;
  images: string[];
  projectLabel: string;
  projectTitle: string;
  productTags: string[];
  productImage: string;
  productName: string;
  layout: "text-left" | "text-right";
}

const services: Service[] = [
  {
    id: 1,
    category: "MICROCEMENT",
    heading: "Microcement Surfaces",
    description:
      "A seamless, ultra-thin coating applied over existing surfaces — no demolition, no grout lines. Ideal for floors, walls, bathrooms, kitchens and furniture across luxury homes and commercial spaces. Available in 60+ curated tones with a flawless, continuous finish.",
    extraLines: [
      "Applied in layers as thin as 2–3 mm, microcement adds virtually no height to existing floors or walls.",
      "Its polymer-enhanced formula bonds directly to tiles, concrete and screed — making it the ideal renovation material.",
      "Each surface is hand-finished and sealed, giving every project a unique, tactile quality that cannot be replicated.",
    ],
    subLabel: "Find out more",
    href: "/walls/microcement",
    images: [
      "/images/projects/luxury-villa-south-delhi/luxury-villa-south-delhi-exterior.png",
      "/images/projects/luxury-villa-south-delhi/luxury-villa-south-delhi-living-room.png",
      "/images/projects/luxury-villa-south-delhi/luxury-villa-south-delhi-master-room.png",
      "/images/projects/luxury-villa-south-delhi/luxury-villa-south-delhi-bed-room.png",
      "/images/projects/luxury-villa-south-delhi/luxury-villa-south-delhi-master-bath-room.png",
      "/images/projects/luxury-villa-south-delhi/luxury-villa-south-delhi-pool.png",
    ],
    projectLabel: "Projects",
    projectTitle: "Luxury Villa, South Delhi",
    productTags: [],
    productImage: "",
    productName: "",
    layout: "text-left",
  },
  {
    id: 2,
    category: "MICRO TOPPING",
    heading: "Micro Topping",
    description:
      "Breathe new life into tired surfaces without lifting a tile. Our Micro Topping system overlays existing tiles, old concrete and worn floors with a razor-thin, high-strength decorative layer. The fastest, cleanest route to a premium finish — residential or commercial.",
    extraLines: [
      "Available in a wide palette of mineral tones, Micro Topping delivers a consistent, joint-free finish across any surface area.",
      "Its flexibility makes it suitable for floors, walls, staircases and wet areas including bathrooms and kitchens.",
      "Professional application and sealing ensures long-term durability with minimal maintenance requirements.",
    ],
    subLabel: "Find out more",
    href: "/floors/microtopping",
    images: [
      "/images/projects/mtr eats bangalore/mtr-eats-bangalore-exterior.png",
      "/images/projects/mtr eats bangalore/mtr-eats-bangalore-interior.png",
      "/images/projects/mtr eats bangalore/mtr-eats-bangalore-kitchen.png",
      "/images/projects/mtr eats bangalore/mtr-eats-bangalore-outdoor-area.png",
      "/images/projects/mtr eats bangalore/mtr-eats-bangalore-restroom-area.png",
      "/images/projects/mtr eats bangalore/mtr-eats-bangalore-table-area.png",
    ],
    projectLabel: "Projects",
    projectTitle: "MTR Eats, Bangalore",
    productTags: [],
    productImage: "/images/projects/microtoping/microtopping-room.png",
    productName: "Micro Topping",
    layout: "text-right",
  },
  {
    id: 3,
    category: "DECORATIVE CONCRETE",
    heading: "Decorative Concrete",
    description:
      "Combine the raw strength of concrete with refined architectural design. Our decorative concrete solutions cover feature walls, designer floors and bespoke architectural finishes — bringing an industrial-luxe aesthetic to both residential villas and high-end commercial projects.",
    extraLines: [
      "Each pour is unique — natural variation in tone and texture gives decorative concrete an organic, one-of-a-kind character.",
      "Suitable for both indoor and outdoor applications, it performs equally well in high-traffic and exposed environments.",
      "Custom pigments and aggregate blends allow precise control over the final aesthetic to match any design brief.",
    ],
    subLabel: "Find out more",
    href: "/floors/nuvolato-architop",
    images: [
      "/images/projects/private villa goa/private-villa-goa-exterior.png",
      "/images/projects/private villa goa/private-villa-goa-interior.png",
      "/images/projects/private villa goa/private-villa-goa-balcony-view.png",
      "/images/projects/private villa goa/private-villa-goa-pool-area.png",
      "/images/projects/private villa goa/private-villa-goa-bathroom.png",
      "/images/projects/private villa goa/private-villa-goa-dinning-room.png",
    ],
    projectLabel: "Projects",
    projectTitle: "Private Villa, Goa",
    productTags: [],
    productImage: "/images/projects/decorative-concrete-in-bangalore.png",
    productName: "Decorative Concrete",
    layout: "text-left",
  },
  {
    id: 4,
    category: "POLISHED CONCRETE",
    heading: "Polished Concrete Floors",
    description:
      "Ground, honed and polished to a mirror or matte sheen, our polished concrete floors are virtually indestructible. From luxury residences and retail stores to large-scale commercial offices and warehouses — a timeless finish that only gets better with age.",
    extraLines: [
      "The grinding and densifying process hardens the surface at a molecular level, making it resistant to abrasion and impact.",
      "Polished concrete reflects light beautifully, enhancing the sense of space in both compact and large-scale interiors.",
      "Low maintenance and hygienic, it requires no wax, coatings or specialist cleaning products to retain its appearance.",
    ],
    subLabel: "Find out more",
    href: "/floors/rasico",
    images: [
      "/images/projects/premium reaturant in chennai/premium-restaurant-inchennai-exterior.png",
      "/images/projects/premium reaturant in chennai/premium-restaurant-inchennai-inside.png",
      "/images/projects/premium reaturant in chennai/premium-restaurant-inchennai-interior.png",
    ],
    projectLabel: "Projects",
    projectTitle: "Premium Restaurant in Chennai",
    productTags: [],
    productImage: "",
    productName: "",
    layout: "text-right",
  },
  {
    id: 5,
    category: "TEXTURED WALL FINISHES",
    heading: "Textured Wall Finishes",
    description:
      "From subtle mineral textures to bold designer statements, our wall finishing systems transform any interior into a bespoke environment. Premium textures, luxury feature walls and designer accent walls — crafted for residences, hotels and high-end commercial spaces across India.",
    extraLines: [
      "Our range includes lime-based, mineral and polymer finishes — each with a distinct tactile quality and depth of tone.",
      "Textured wall systems can be applied to new builds and renovation projects alike, with no structural changes required.",
      "Every finish is breathable, low-VOC and formulated to perform in India's varied humidity and temperature conditions.",
    ],
    subLabel: "Find out more",
    href: "/walls",
    images: [
      "/images/projects/botique-hotel-mumbai-exterior.png",
      "/images/projects/botique-hotel-mumbai-interior.png",
      "/images/projects/botique-hotel-mumbai-room.png",
      "/images/projects/botique-hotel-mumbai-wall.png",
    ],
    projectLabel: "Projects",
    projectTitle: "Boutique Hotel, Mumbai",
    productTags: [],
    productImage: "/images/projects/botique-hotel-mumbai-wall.png",
    productName: "Textured Walls",
    layout: "text-left",
  },
  {
    id: 6,
    category: "DECORATIVE WALL COATINGS",
    heading: "Decorative Wall Coatings",
    description:
      "Protect and beautify interior and exterior walls with our advanced decorative coating systems. Fully waterproof, weather-resistant and available in a rich range of finishes — designed for Indian climatic conditions. A seamless upgrade for facades, outdoor walls and premium interiors.",
    extraLines: [
      "Our coating systems provide a continuous, crack-bridging layer that protects masonry from moisture ingress and UV damage.",
      "Available in smooth, textured and stone-effect finishes to complement both contemporary and traditional architecture.",
      "Suitable for exterior facades, boundary walls, feature interiors and any surface requiring long-term decorative protection.",
    ],
    subLabel: "Find out more",
    href: "/walls/concrete-optik",
    images: [
      "/images/projects/hyderabad-villa-exterior.png",
      "/images/projects/hyderabad-villa-interior.png",
      "/images/projects/wall-coatings.png",
    ],
    projectLabel: "Projects",
    projectTitle: "Contemporary Villa in Hyderabad",
    productTags: [],
    productImage: "/images/projects/wall-coatings.png",
    productName: "Wall Coatings",
    layout: "text-right",
  },
];

/* ─────────────────────────────────────────────
   IMAGE CARD
───────────────────────────────────────────── */
function ImageCard({ service }: { service: Service }) {
  const [activeIdx, setActiveIdx] = useState(0);
  const [hovered, setHovered] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const advance = useCallback(() => {
    setActiveIdx((p) => (p + 1) % service.images.length);
  }, [service.images.length]);

  useEffect(() => {
    if (hovered) {
      timerRef.current = setInterval(advance, 1800);
    } else {
      if (timerRef.current) clearInterval(timerRef.current);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [hovered, advance]);

  return (
    <div
      className="relative w-full h-full overflow-hidden cursor-pointer select-none"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={advance}
    >
      {service.images.map((src, i) => (
        <div
          key={i}
          className="absolute inset-0 transition-opacity duration-700"
          style={{ opacity: i === activeIdx ? 1 : 0 }}
        >
          {src ? (
            <Image
              src={src}
              alt={service.projectTitle}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          ) : (
            <div className="w-full h-full bg-stone-300 flex items-center justify-center">
              <span className="text-stone-500 text-sm">Image {i + 1}</span>
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
        </div>
      ))}

      {/* Project label + title */}
      <div className="absolute bottom-5 left-5 z-10">
        <p className="text-white/70 text-xs mb-1">{service.projectLabel}</p>
        <h3 className="text-white text-lg sm:text-xl font-light leading-snug">
          {service.projectTitle}
        </h3>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   INFO PANEL
───────────────────────────────────────────── */
function InfoPanel({ service }: { service: Service }) {
  return (
    <div className="w-full h-full flex flex-col justify-center px-6 sm:px-10 lg:px-16 py-8 md:py-0 bg-[#f0ece6]">
      {service.category && (
        <p className="text-[11px] tracking-widest text-gray-500 uppercase mb-3">
          {service.category}
        </p>
      )}
      <h2 className="text-[26px] sm:text-[30px] lg:text-[34px] font-light text-gray-800 leading-tight mb-4">
        {service.heading}
      </h2>
      <p className="text-[13px] leading-relaxed text-gray-600 mb-3">
        {service.description}
      </p>
      {service.extraLines.map((line, i) => (
        <p key={i} className="text-[13px] leading-relaxed text-gray-500 mb-2">
          {line}
        </p>
      ))}
      {service.subLabel && (
        <div className="flex items-center gap-3 mb-5">
          <Link
            href={service.href}
            className="text-[13px] text-gray-700 hover:text-gray-900 transition-colors border-b border-gray-400 pb-px"
          >
            {service.subLabel}
          </Link>
          <span className="flex items-center justify-center w-7 h-7 rounded-full border border-gray-500 text-gray-600 hover:border-gray-800 hover:text-gray-800 transition-colors shrink-0">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3.5 h-3.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </span>
        </div>
      )}

    </div>
  );
}

/* ─────────────────────────────────────────────
   PRODUCT TEXTURE PANEL
───────────────────────────────────────────── */
function ProductPanel({ service }: { service: Service }) {
  return (
    <Link href={service.href} className="relative w-full h-full block overflow-hidden group">
      {service.productImage ? (
        <Image
          src={service.productImage}
          alt={service.productName}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-700"
          sizes="(max-width: 768px) 100vw, 25vw"
        />
      ) : (
        <div className="w-full h-full bg-stone-200" />
      )}
      <div className="absolute inset-0 bg-black/25 group-hover:bg-black/35 transition-colors" />
      <div className="absolute inset-0 z-10 flex flex-col justify-start p-8">
        <h3 className="text-white text-[22px] sm:text-[26px] font-light mb-3 leading-snug">
          {service.productName}
        </h3>
        <span className="text-white/80 text-[13px] border-b border-white/40 pb-px w-fit group-hover:text-white group-hover:border-white transition-colors">
          Find out more
        </span>
      </div>
    </Link>
  );
}

/* ─────────────────────────────────────────────
   MAIN EXPORT
───────────────────────────────────────────── */
export default function ServicesSection() {
  return (
    <section className="md:mx-[15px] mt-[15px] mb-[5px] bg-[#f0ece6] flex flex-col gap-[6px] py-[15px]">
      {services.map((service) => {
        const hasProduct = !!service.productName;
        const isTextLeft = service.layout === "text-left";

        return (
          <div
            key={service.id}
            className="flex flex-col md:flex-row w-full gap-[6px] overflow-hidden"
            style={{ minHeight: 0 }}
          >
            {/* ── MOBILE: always Image first, then Info, then Product (if any) ──
                ── DESKTOP: honours isTextLeft / isTextRight layout ── */}

            {isTextLeft ? (
              <>
                {/* Info — desktop left / mobile second */}
                <div className="w-full md:w-[38%] shrink-0 order-2 md:order-1 min-h-[280px] md:min-h-0 md:h-[clamp(380px,42vw,500px)]">
                  <InfoPanel service={service} />
                </div>

                {/* Image — desktop centre-right / mobile first */}
                <div
                  className={`w-full relative order-1 md:order-2 h-[56vw] md:h-[clamp(380px,42vw,500px)] ${
                    hasProduct ? "md:w-[40%]" : "md:w-[62%]"
                  }`}
                >
                  <ImageCard service={service} />
                </div>

                {/* Product — desktop far-right / mobile third */}
                {hasProduct && (
                  <div className="w-full md:w-[22%] relative shrink-0 order-3 h-[56vw] md:h-[clamp(380px,42vw,500px)]">
                    <ProductPanel service={service} />
                  </div>
                )}
              </>
            ) : (
              <>
                {/* Image — desktop left / mobile first */}
                <div className="w-full md:w-[62%] relative order-1 h-[56vw] md:h-[clamp(380px,42vw,500px)]">
                  <ImageCard service={service} />
                </div>

                {/* Product panel (if any) — desktop right / mobile second */}
                {hasProduct ? (
                  <div className="w-full md:w-[38%] relative shrink-0 order-2 h-[56vw] md:h-[clamp(380px,42vw,500px)]">
                    <ProductPanel service={service} />
                  </div>
                ) : (
                  /* Info — desktop right / mobile second */
                  <div className="w-full md:w-[38%] shrink-0 order-2 min-h-[280px] md:min-h-0 md:h-[clamp(380px,42vw,500px)]">
                    <InfoPanel service={service} />
                  </div>
                )}
              </>
            )}
          </div>
        );
      })}
    </section>
  );
}

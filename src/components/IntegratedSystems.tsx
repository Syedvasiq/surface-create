"use client";

import { useState } from "react";
import Link from "next/link";

interface Panel {
  id: number;
  title: string;
  description: string;
  bullets?: string[];
  video: string;
  fallbackColor: string;
}

const panels: Panel[] = [
  {
    id: 0,
    title: "Advanced Installation Substrates",
    description:
      "Our mineral screeds, levelers, and self-leveling compounds create a dimensionally stable structural base for all microcement and decorative surface applications:",
    bullets: [
      "Consolidate and strengthen the laying surface like a true technical slab",
      "Transfer and evenly distribute structural loads",
      "Withstand cyclic thermal and mechanical stresses",
      "Interface seamlessly with microcement, polished concrete, and stone finishes",
    ],
    video: "/video/advance-installation.mp4",
    fallbackColor: "#2a2a2a",
  },
  {
    id: 1,
    title: "Waterproofing & Anti-Fracture Solutions",
    description:
      "A complete line combining pure elastomeric membranes and mineral gel systems with multidirectional flexibility — engineered for waterproof bathrooms, wet areas, pools and exterior surfaces across India's diverse climate. Maximum protection, zero grout lines, total safety.",
    video: "/video/water-proofing-and-anti-fracture.mp4",
    fallbackColor: "#7a2035",
  },
  {
    id: 2,
    title: "Hi-Tech Gels & Adhesives",
    description:
      "We specialise in high-performance installation systems using advanced polymer technology developed for microcement and decorative concrete surfaces:",
    bullets: [
      "Adaptive polymer gels with variable flexibility for thermal movement",
      "Duo-polymer systems for monolithic bonding on walls and floors",
      "Tri-polymer gels reinforced with quartz for crack-free installations",
      "Low-VOC, eco-conscious formulations suitable for luxury residential projects",
    ],
    video: "/video/hi-tech-gel.mp4",
    fallbackColor: "#3a3a3a",
  },
  {
    id: 3,
    title: "Design Grouts & Sealants",
    description:
      "A new generation of finishing systems that combine mineral strength, gel technology, and design flexibility for seamless, beautiful and durable surfaces:",
    bullets: [
      "Hybrid mineral grouts — solid, colour-stable, and long-lasting",
      "Ready-to-use coloured gels with micro-quartz spheres, flexible and vibrant",
      "Decorative epoxy sealants — waterproof, anti-microbial, and stain-resistant",
    ],
    video: "/video/design-and-sealents.mp4",
    fallbackColor: "#1e1e1e",
  },
  {
    id: 4,
    title: "Smart Surface Treatments",
    description:
      "Our advanced surface care systems combine functional protection and sustainability, preserving the natural beauty of every finish over time. Deep-penetrating formulas enhance performance without altering material character — zero solvents, low VOCs, and invisible technology that lasts.",
    video: "/video/smart-surface-treatments.mp4",
    fallbackColor: "#111111",
  },
];

export default function IntegratedSystems() {
  const [active, setActive] = useState(0);

  const handleTabClick = (id: number) => {
    setActive(id);
  };

  return (
    <section className="mx-[15px] mt-[15px] mb-[5px] bg-[#0d0d0d] py-12 px-6 lg:px-12">

      {/* Header */}
      <div className="w-full mb-8 flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
        <div className="max-w-xl">
          <h2 className="text-[36px] sm:text-[44px] font-light text-white mb-4 leading-tight">
            Our Surface Systems
          </h2>
          <p className="text-[14px] font-semibold text-white mb-2">
            We deliver some of India&apos;s most advanced decorative surface solutions,
            engineered for lasting performance and timeless aesthetics.
          </p>
          <p className="text-[13px] text-gray-400 leading-relaxed">
            From substrate preparation to final protective treatment — every step
            is backed by precision technology and expert craftsmanship.
          </p>
        </div>
        <Link
          href="/solutions"
          className="flex items-center gap-1 text-[13px] text-white whitespace-nowrap self-start hover:text-gray-300 transition-colors"
        >
          See all surface systems
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </Link>
      </div>

      {/* Desktop Panel Strip */}
      <div className="w-full hidden md:flex h-[560px] overflow-hidden">
        {panels.map((panel) => {
          const isActive = panel.id === active;
          return (
            <div
              key={panel.id}
              onClick={() => handleTabClick(panel.id)}
              className="relative overflow-hidden cursor-pointer flex-shrink-0 transition-all duration-700 ease-in-out"
              style={{
                flex: isActive ? "5 1 0%" : "0.5 1 0%",
              }}
            >
              {/* Video background */}
              <div className="absolute inset-0" style={{ backgroundColor: panel.fallbackColor }}>
                <video
                  key={panel.id}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover opacity-70"
                >
                  <source src={panel.video} type="video/mp4" />
                </video>
                <div className={`absolute inset-0 transition-all duration-700 ${isActive ? "bg-black/45" : "bg-black/65"}`} />
              </div>

              {/* Pause button removed — no auto-advance */}

              {/* Active panel content */}
              {isActive && (
                <div className="absolute inset-0 z-10 flex flex-col justify-end p-6">
                  <h3 className="text-white font-semibold text-[22px] mb-3 leading-snug max-w-xs">
                    {panel.title}
                  </h3>
                  <p className="text-gray-200 text-[14px] leading-relaxed mb-3 max-w-xs">
                    {panel.description}
                  </p>
                  {panel.bullets && (
                    <ul className="mb-4 space-y-1.5">
                      {panel.bullets.map((b, i) => (
                        <li key={i} className="text-gray-200 text-[13px] flex items-start gap-2">
                          <span className="mt-1.5 w-1 h-1 rounded-full bg-gray-300 shrink-0" />
                          {b}
                        </li>
                      ))}
                    </ul>
                  )}
                  <Link
                    href="/solutions"
                    className="self-start bg-white hover:bg-gray-100 text-gray-900 text-[13px] font-semibold px-5 py-2.5 transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    Discover
                  </Link>
                </div>
              )}

              {/* Inactive: vertical rotated title */}
              {!isActive && (
                <div className="absolute inset-0 z-10 flex items-end justify-start pb-6 pl-3">
                  <span
                    className="text-white text-[13px] font-bold tracking-wide whitespace-nowrap"
                    style={{
                      writingMode: "vertical-rl",
                      transform: "rotate(180deg)",
                      overflow: "hidden",
                      maxHeight: "90%",
                    }}
                  >
                    {panel.title.length > 30 ? panel.title.slice(0, 28) + "…" : panel.title}
                  </span>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Mobile: vertical stack */}
      <div className="w-full flex flex-col gap-2 md:hidden">
        {panels.map((panel) => {
          const isActive = panel.id === active;
          return (
            <div
              key={panel.id}
              className="relative overflow-hidden cursor-pointer transition-all duration-700"
              style={{
                height: isActive ? "340px" : "52px",
                backgroundColor: panel.fallbackColor,
              }}
              onClick={() => handleTabClick(panel.id)}
            >
              <div className="absolute inset-0">
                <video autoPlay muted loop playsInline className="w-full h-full object-cover opacity-70">
                  <source src={panel.video} type="video/mp4" />
                </video>
                <div className={`absolute inset-0 ${isActive ? "bg-black/45" : "bg-black/60"}`} />
              </div>

              {/* Collapsed title */}
              {!isActive && (
                <div className="absolute inset-0 z-10 flex items-center pl-4">
                  <span className="text-white text-[13px] font-medium truncate pr-4">{panel.title}</span>
                </div>
              )}

              {/* Expanded content */}
              {isActive && (
                <>
                  <div className="absolute inset-0 z-10 flex flex-col justify-end p-5">
                    <h3 className="text-white font-semibold text-[17px] mb-2 leading-snug">{panel.title}</h3>
                    <p className="text-gray-300 text-[12px] leading-relaxed mb-2">{panel.description}</p>
                    {panel.bullets && (
                      <ul className="mb-4 space-y-1">
                        {panel.bullets.map((b, i) => (
                          <li key={i} className="text-gray-300 text-[12px] flex items-start gap-2">
                            <span className="mt-1.5 w-1 h-1 rounded-full bg-gray-300 shrink-0" />
                            {b}
                          </li>
                        ))}
                      </ul>
                    )}
                    <Link
                      href="/solutions"
                      className="self-start bg-white hover:bg-gray-100 text-gray-900 text-[12px] font-semibold px-5 py-2.5 transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      Discover
                    </Link>
                  </div>
                </>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}

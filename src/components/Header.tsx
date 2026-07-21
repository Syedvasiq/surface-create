"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";

const floorsMegaMenu = [
  {
    groupTitle: "Cement-based",
    columns: [
      {
        subLabel: "INDOOR",
        items: [
          { label: "Microtopping", href: "/floors/microtopping" },
          { label: "Nuvolato Architop", href: "/floors/nuvolato-architop" },
          { label: "Lixio", href: "/floors/lixio" },
          { label: "Lixio+", href: "/floors/lixio-plus" },
        ],
      },
      {
        subLabel: "OUTDOOR",
        items: [
          { label: "Rasico", href: "/floors/rasico" },
          { label: "Sassoitalia Floor", href: "/floors/sassoitalia-floor" },
          { label: "Stamped Concrete", href: "/floors/stamped-concrete" },
          { label: "Stenciltop floor", href: "/floors/stenciltop-floor" },
        ],
      },
    ],
  },
  {
    groupTitle: "Hybrid finishes",
    columns: [
      {
        subLabel: "INDOOR",
        items: [
          { label: "Acid-Stain", href: "/floors/acid-stain" },
          { label: "Solidro", href: "/floors/solidro" },
        ],
      },
    ],
  },
];

const wallsMegaMenu = [
  {
    groupTitle: "Cement-based",
    columns: [
      {
        subLabel: "INDOOR",
        items: [
          { label: "Microtopping", href: "/walls/microtopping" },
          { label: "Concrete Optik", href: "/walls/concrete-optik" },
        ],
      },
    ],
  },
  {
    groupTitle: "Natural finishes",
    columns: [
      {
        subLabel: "INDOOR",
        items: [
          { label: "Microcement", href: "/walls/microcement" },
          { label: "Terrae-Calce", href: "/walls/terrae-calce" },
        ],
      },
    ],
  },
  {
    groupTitle: "Hybrid finishes",
    columns: [
      {
        subLabel: "INDOOR",
        items: [
          { label: "Purometallo", href: "/walls/purometallo" },
        ],
      },
    ],
  },
];

const navLinks = [
  { label: "Floors", href: "/floors", hasMega: "floors" },
  { label: "Walls", href: "/walls", hasMega: "walls" },
  { label: "Projects", href: "/projects" },
  { label: "Solutions", href: "/solutions" },
  { label: "Colours", href: "/colours" },
  { label: "Company", href: "/company" },
  { label: "Download", href: "/download" },
];

export default function Header() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState<"floors" | "walls" | null>(null);
  const [mobileMegaOpen, setMobileMegaOpen] = useState<string | null>(null);
  const floorsRef = useRef<HTMLDivElement>(null);
  const wallsRef = useRef<HTMLDivElement>(null);
  const megaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      const clickedInsideTrigger =
        (floorsRef.current && floorsRef.current.contains(e.target as Node)) ||
        (wallsRef.current && wallsRef.current.contains(e.target as Node));
      const clickedInsideMega = megaRef.current && megaRef.current.contains(e.target as Node);
      if (!clickedInsideTrigger && !clickedInsideMega) setMegaOpen(null);
    }
    if (megaOpen) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [megaOpen]);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white">
      <div className="mx-auto flex h-[83px] md:h-[105px] max-w-[1440px] items-center px-4 md:px-6">

        <Link href="/" className="mr-10 shrink-0">
          <div className="relative h-[90px] w-[90px] md:h-[72px] md:w-[72px] lg:h-[94px] lg:w-[94px]">
            <Image
              src="/surface-crete-logo.png"
              alt="Surface Crete Logo"
              fill
              className="object-contain"
              sizes="130px"
              priority
            />
          </div>
        </Link>

        <nav className="hidden lg:flex flex-1 items-center gap-[48px] ml-[28px]">
          {navLinks.map((link) =>
            link.hasMega ? (
              <div
                key={link.label}
                ref={link.hasMega === "floors" ? floorsRef : wallsRef}
                className="relative h-full flex items-center"
              >
                <button
                  onClick={() => setMegaOpen((v) => v === link.hasMega ? null : link.hasMega as "floors" | "walls")}
                  className={`cursor-pointer whitespace-nowrap text-[15px] font-semibold tracking-wide transition-colors ${
                    megaOpen === link.hasMega ? "text-gray-900" : "text-gray-800 hover:text-gray-900"
                  }`}
                >
                  {link.label}
                </button>
              </div>
            ) : (
              <Link
                key={link.label}
                href={link.href}
                className="cursor-pointer whitespace-nowrap text-[15px] font-semibold tracking-wide text-gray-800 hover:text-gray-900 transition-colors"
              >
                {link.label}
              </Link>
            )
          )}
        </nav>

        <div className="hidden lg:flex ml-6 shrink-0 items-center gap-5">
          <Link href="/contacts" className="cursor-pointer text-[14px] font-semibold text-gray-900 hover:text-gray-600">
            Contacts
          </Link>
          <button className="cursor-pointer flex items-center gap-[2px] text-[14px] font-semibold text-gray-900 hover:text-gray-600">
            EN
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="mt-[2px] h-3 w-3">
              <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
            </svg>
          </button>
          <button onClick={() => setSearchOpen((v) => !v)} aria-label="Search" className="cursor-pointer text-gray-900 hover:text-gray-600">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="h-5 w-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1010.5 18a7.5 7.5 0 006.15-3.15z" />
            </svg>
          </button>
        </div>

        <div className="ml-auto flex lg:hidden items-center gap-4">
          <button onClick={() => setSearchOpen((v) => !v)} aria-label="Search" className="cursor-pointer text-gray-900">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="h-5 w-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1010.5 18a7.5 7.5 0 006.15-3.15z" />
            </svg>
          </button>
          <button
            onClick={() => setMobileMenuOpen((v) => !v)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            className="cursor-pointer text-gray-900"
          >
            {mobileMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-6 w-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-6 w-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {megaOpen && (
        <div ref={megaRef} className="hidden lg:block absolute left-0 right-0 z-40 border-t border-gray-200 bg-white shadow-sm">
          <div className={`mx-auto py-7 ${megaOpen === "floors" ? "max-w-[1720px] px-10" : "max-w-[1440px] px-6"}`}>
            <div className={megaOpen === "floors" ? "pl-[100px]" : "pl-[140px]"}>
              <div className={megaOpen === "floors" ? "flex gap-[110px]" : "flex gap-20"}>
                {(megaOpen === "floors" ? floorsMegaMenu : wallsMegaMenu).map((group) => (
                  <div key={group.groupTitle}>
                    <div className="mb-3 flex items-center gap-3">
                      <span className="text-[16px] font-bold text-gray-900 whitespace-nowrap">{group.groupTitle}</span>
                      <span className="w-16 border-t border-gray-300" />
                    </div>
                    <div className="flex gap-10">
                      {group.columns.map((col) => (
                        <div key={col.subLabel} className="min-w-[130px]">
                          <p className="mb-2 text-[10px] font-semibold uppercase tracking-widest text-gray-400">{col.subLabel}</p>
                          <ul className="flex flex-col gap-2">
                            {col.items.map((item) => (
                              <li key={item.label}>
                                <Link href={item.href} onClick={() => setMegaOpen(null)} className="cursor-pointer text-[14px] font-bold text-gray-700 hover:text-gray-900 transition-colors">
                                  {item.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {searchOpen && (
        <div className="border-t border-gray-200 bg-white px-6 py-3">
          <input
            autoFocus
            type="text"
            placeholder="Search..."
            className="w-full border-b border-gray-300 pb-1 text-[14px] text-gray-800 outline-none placeholder:text-gray-400 focus:border-gray-900"
          />
        </div>
      )}

      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-gray-200 bg-white max-h-[80vh] overflow-y-auto scrollbar-hide">
          <nav className="flex flex-col px-6 py-4 gap-1">
            {navLinks.map((link) => (
              link.hasMega ? (
                <div key={link.label}>
                  <button
                    onClick={() => setMobileMegaOpen((v) => v === link.hasMega ? null : (link.hasMega as string))}
                    className="cursor-pointer w-full flex items-center justify-between py-2 text-[15px] font-normal tracking-wide border-b border-gray-100 text-gray-800"
                  >
                    {link.label}
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={`h-4 w-4 transition-transform ${mobileMegaOpen === link.hasMega ? "rotate-180" : ""}`}>
                      <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                    </svg>
                  </button>
                  {mobileMegaOpen === link.hasMega && (
                    <div className="pl-4 pb-2 pt-1 bg-gray-50">
                      {(link.hasMega === "floors" ? floorsMegaMenu : wallsMegaMenu).map((group) => (
                        <div key={group.groupTitle} className="mb-3">
                          <p className="text-[12px] font-bold text-gray-700 uppercase tracking-wide mb-2">{group.groupTitle}</p>
                          {group.columns.map((col) => (
                            <div key={col.subLabel} className="mb-2">
                              <p className="text-[10px] font-semibold uppercase tracking-widest text-gray-400 mb-1">{col.subLabel}</p>
                              {col.items.map((item) => (
                                <Link
                                  key={item.label}
                                  href={item.href}
                                  onClick={() => { setMobileMegaOpen(null); setMobileMenuOpen(false); }}
                                  className="block py-1 text-[14px] text-gray-700 hover:text-gray-900"
                                >
                                  {item.label}
                                </Link>
                              ))}
                            </div>
                          ))}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-2 text-[15px] font-normal tracking-wide border-b border-gray-100 text-gray-800 hover:text-gray-900 transition-colors"
                >
                  {link.label}
                </Link>
              )
            ))}
            <div className="flex items-center justify-between pt-3">
              <Link href="/contacts" onClick={() => setMobileMenuOpen(false)} className="text-[15px] font-semibold text-gray-900">
                Contacts
              </Link>
              <button className="flex items-center gap-[2px] text-[14px] font-semibold text-gray-900">
                EN
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="mt-[2px] h-3 w-3">
                  <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

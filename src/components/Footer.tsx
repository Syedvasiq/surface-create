"use client";

import Image from "next/image";
import Link from "next/link";

const footerColumns = [
  {
    heading: "Floors",
    links: [
      { label: "Solidro", href: "/floors/solidro" },
      { label: "Microtopping", href: "/floors/microtopping" },
      { label: "Nuvolato Architop", href: "/floors/nuvolato-architop" },
      { label: "Lixio", href: "/floors/lixio" },
      { label: "Lixio+", href: "/floors/lixio-plus" },
      { label: "Acid-Stain", href: "/floors/acid-stain" },
      { label: "Stamped Concrete", href: "/floors/stamped-concrete" },
      { label: "Rasico", href: "/floors/rasico" },
      { label: "Sassoitalia Floor", href: "/floors/sassoitalia-floor" },
      { label: "Stenciltop floor", href: "/floors/stenciltop-floor" },
    ],
  },
  {
    heading: "Walls",
    links: [
      { label: "Microtopping", href: "/walls/microtopping" },
      { label: "Concrete Optik", href: "/walls/concrete-optik" },
      { label: "Microcement", href: "/walls/microcement" },
      { label: "Purometallo", href: "/walls/purometallo" },
      { label: "Terrae-Calce", href: "/walls/terrae-calce" },
    ],
  },
  {
    heading: "Solutions",
    links: [
      { label: "Indoor Applications", href: "/solutions#applications" },
      { label: "Outdoor Applications", href: "/solutions#applications" },
      { label: "Typologies", href: "/solutions#typologies" },
    ],
  },
  {
    heading: "Renovations",
    links: [
      { label: "Indoor Renovation", href: "/solutions#renovation" },
      { label: "Outdoor Renovation", href: "/solutions#renovation" },
    ],
  },
  {
    heading: "Projects",
    links: [
      { label: "All Projects", href: "/projects" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "Company", href: "/company" },
      { label: "Colours", href: "/colours" },
      { label: "Download", href: "/download" },
      { label: "Contacts", href: "/contacts" },
    ],
  },
];

const socialLinks = [
  {
    label: "Facebook",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
        <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.988H7.898V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
        <path d="M21.593 7.203a2.506 2.506 0 00-1.762-1.766C18.265 5.007 12 5 12 5s-6.264-.007-7.831.404a2.56 2.56 0 00-1.766 1.778c-.413 1.566-.417 4.814-.417 4.814s-.004 3.264.406 4.814c.23.857.905 1.534 1.763 1.765 1.582.43 7.83.437 7.83.437s6.265.007 7.831-.403a2.515 2.515 0 001.767-1.763c.414-1.565.417-4.812.417-4.812s.02-3.265-.407-4.831zM9.996 15.005l.005-6 5.207 3.005-5.212 2.995z" />
      </svg>
    ),
  },
  {
    label: "Pinterest",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
        <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#1e2025] text-white">
      <div className="mx-auto max-w-[1440px] px-6 py-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-6">
            <Link href="/" className="shrink-0">
              <div className="relative h-[130px] w-[130px]">
                <Image
                  src="/surface-crete-footer-logo.png"
                  alt="Surface Crete"
                  fill
                  className="object-contain"
                  sizes="130px"
                  priority
                />
              </div>
            </Link>
            <p className="text-[13px] text-gray-300">
              Surface Crete, No. 42, MG Road, Bengaluru, Karnataka 560001, India
            </p>
          </div>
          <div className="flex items-center gap-5">
            {socialLinks.map((s) => (
              <Link key={s.label} href={s.href} aria-label={s.label} className="text-gray-300 transition-colors hover:text-white">
                {s.icon}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-[1440px] border-t border-gray-600 px-6" />

      <div className="mx-auto max-w-[1440px] px-6 py-10">
        <div className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {footerColumns.map((col) => (
            <div key={col.heading} className="flex flex-col gap-3">
              <h3 className="text-[13px] font-bold uppercase tracking-wide text-white">{col.heading}</h3>
              <ul className="flex flex-col gap-2">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-[13px] text-gray-400 transition-colors hover:text-white">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-gray-700">
        <div className="mx-auto max-w-[1440px] px-6 py-5">
          <p className="text-center text-[11px] leading-relaxed text-gray-400">
            &copy; 2024 &ndash; 2025 &ndash; Surface Crete &ndash; No. 42, MG Road, Bengaluru, Karnataka 560001, India &ndash;{" "}
            <Link href="#" className="underline hover:text-white">Data Privacy</Link>{" "}
            &ndash;{" "}
            <Link href="#" className="underline hover:text-white">Cookie Policy</Link>{" "}
            &ndash;{" "}
            <Link href="#" className="underline hover:text-white">#DMIND</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}

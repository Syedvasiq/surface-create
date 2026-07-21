import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore Surface Crete projects — luxury villas, commercial spaces, restaurants and more across India. Seamless microcement and decorative concrete finishes.",
  alternates: { canonical: "/projects" },
};

const projects = [
  {
    slug: "luxury-villa-south-delhi",
    title: "Luxury Villa, South Delhi",
    line: "Microcement",
    location: "South Delhi, India",
    cover: "/images/projects/luxury-villa-south-delhi/luxury-villa-south-delhi-exterior.png",
  },
  {
    slug: "mtr-eats-bangalore",
    title: "MTR Eats, Bangalore",
    line: "Micro Topping",
    location: "Bangalore, India",
    cover: "/images/projects/mtr eats bangalore/mtr-eats-bangalore-exterior.png",
  },
  {
    slug: "private-villa-goa",
    title: "Private Villa, Goa",
    line: "Decorative Concrete",
    location: "Goa, India",
    cover: "/images/projects/private villa goa/private-villa-goa-exterior.png",
  },
  {
    slug: "premium-restaurant-chennai",
    title: "Premium Restaurant, Chennai",
    line: "Polished Concrete",
    location: "Chennai, India",
    cover: "/images/projects/premium reaturant in chennai/premium-restaurant-inchennai-exterior.png",
  },
];

const lines = ["All", "Microcement", "Micro Topping", "Decorative Concrete", "Polished Concrete"];

export default function ProjectsPage() {
  return (
    <main className="flex flex-1 flex-col bg-white">

      {/* Hero heading */}
      <div className="border-b border-gray-200 py-12 px-6 text-center">
        <h1 className="text-[38px] sm:text-[48px] font-light text-gray-900 mb-4">Projects</h1>
        <p className="text-[14px] text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Surface Crete systems and solutions allow you to obtain a unique, attractive, valuable
          finish which can only be provided by true artisan craftsmen and quality materials.
        </p>
      </div>

      <div className="max-w-[1200px] mx-auto w-full px-6 py-12">

        {/* Filter */}
        <div className="mb-10">
          <h2 className="text-[18px] font-light text-gray-900 mb-1">Filter by Line</h2>
          <p className="text-[13px] text-gray-500 mb-5">Use filters to refine your search</p>
          <div className="flex flex-wrap gap-2">
            {lines.map((line) => (
              <span
                key={line}
                className={`px-4 py-1.5 text-[13px] border transition-colors cursor-pointer ${
                  line === "All"
                    ? "border-gray-900 bg-gray-900 text-white"
                    : "border-gray-300 text-gray-700 hover:border-gray-900 hover:text-gray-900"
                }`}
              >
                {line}
              </span>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 mb-10" />

        {/* Project grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">
          {projects.map((project) => (
            <Link key={project.slug} href={`/projects/${project.slug}`} className="group block">
              {/* Image */}
              <div className="relative w-full overflow-hidden mb-4" style={{ aspectRatio: "4/3" }}>
                <Image
                  src={project.cover}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
                />
              </div>

              {/* Info */}
              <p className="text-[11px] uppercase tracking-widest text-gray-400 mb-1">{project.line}</p>
              <h3 className="text-[18px] font-light text-gray-900 mb-2 leading-snug group-hover:underline underline-offset-2">
                {project.title}
              </h3>
              <div className="inline-flex items-center gap-1.5 text-[13px] text-gray-600 hover:text-gray-900 transition-colors">
                <span className="flex h-5 w-5 items-center justify-center rounded-full border border-gray-400">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-3 h-3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </span>
                Visit the project
              </div>
            </Link>
          ))}
        </div>

      </div>
    </main>
  );
}

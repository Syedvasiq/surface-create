import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Solutions",
  description: "Explore Surface Crete applications, surface typologies and renovation solutions.",
  alternates: { canonical: "/solutions" },
};

const applications = [
  {
    category: "Indoor",
    description:
      "Continuous, joint-free surfaces built to handle daily life — spills, foot traffic and humidity — without breaking the line of the room.",
    items: [
      { label: "Bathrooms", href: "/floors/microtopping", img: "/images/projects/microtoping/microtopping-bathroom.png", note: "Fully waterproof, slip-resistant finish" },
      { label: "Living Rooms", href: "/floors/microtopping", img: "/images/projects/microtoping/microtopping-living-room.png", note: "Warm underfoot, zero visible seams" },
      { label: "Bedrooms", href: "/floors/microtopping", img: "/images/projects/luxury-villa-south-delhi/luxury-villa-south-delhi-bed-room.png", note: "Soft matte tones for quiet spaces" },
      { label: "Kitchens", href: "/floors/microtopping", img: "/images/projects/microtoping/microtopping-interior.png", note: "Heat and stain resistant surface" },
      { label: "Restaurants", href: "/floors/microtopping", img: "/images/projects/mtr eats bangalore/mtr-eats-bangalore-interior.png", note: "Engineered for high daily traffic" },
      { label: "Hotels", href: "/floors/microtopping", img: "/images/projects/luxury-villa-south-delhi/luxury-villa-south-delhi-master-room.png", note: "Consistent finish across large areas" },
      { label: "Offices & Showrooms", href: "/floors/microtopping", img: "/images/projects/premium reaturant in chennai/premium-restaurant-inchennai-interior.png", note: "A neutral backdrop for brand and product" },
      { label: "Museums & Public Areas", href: "/floors/microtopping", img: "/images/projects/microtoping/microtopping-room.png", note: "Low-maintenance, long-lifecycle finish" },
    ],
  },
  {
    category: "Outdoor",
    description:
      "Weathertight systems formulated for UV exposure, temperature swings and water — without ever losing the continuous, poured look.",
    items: [
      { label: "Terraces & Patios", href: "/floors/rasico", img: "/images/projects/private villa goa/private-villa-goa-balcony-view.png", note: "UV-stable colour, all-season use" },
      { label: "Swimming Pools", href: "/floors/rasico", img: "/images/projects/private villa goa/private-villa-goa-pool-area.png", note: "Submersible, chemical-resistant system" },
      { label: "Driveways", href: "/floors/stamped-concrete", img: "/images/projects/outdoor-microcement.jpg", note: "Load-rated for vehicle traffic" },
      { label: "Exterior Facades", href: "/walls/concrete-optik", img: "/images/projects/private villa goa/private-villa-goa-exterior.png", note: "Breathable, weatherproof cladding" },
    ],
  },
];

const typologies = [
  {
    label: "Floors",
    description: "Seamless, durable surfaces for every interior and exterior floor.",
    href: "/floors/microtopping",
    img: "/images/projects/microtoping/microtopping-living-room.png",
    thickness: "2–3 mm",
  },
  {
    label: "Walls",
    description: "Continuous wall finishes that transform vertical surfaces.",
    href: "/walls/microtopping",
    img: "/images/projects/luxury-villa-south-delhi/luxury-villa-south-delhi-master-bath-room.png",
    thickness: "1–2 mm",
  },
  {
    label: "Staircases",
    description: "Flowing staircase finishes with no joints or interruptions.",
    href: "/floors/microtopping",
    img: "/images/projects/luxury-villa-south-delhi/luxury-villa-south-delhi-living-room.png",
    thickness: "2–3 mm",
  },
  {
    label: "Furniture & Decor",
    description: "Custom surfaces for countertops, furniture and architectural details.",
    href: "/floors/microtopping",
    img: "/images/projects/mtr eats bangalore/mtr-eats-bangalore-table-area.png",
    thickness: "1–2 mm",
  },
];

const stats = [
  { value: "3 mm", label: "Minimum added thickness" },
  { value: "0", label: "Visible joints or seams" },
  { value: "40+", label: "Standard colour tones" },
  { value: "15 yr", label: "Typical finish lifecycle" },
];

const process = [
  {
    step: "01",
    title: "Site survey",
    desc: "We assess the existing substrate, moisture levels and traffic conditions to confirm the right system for the space.",
  },
  {
    step: "02",
    title: "Substrate preparation",
    desc: "Existing tile, stone or concrete is cleaned, primed and reinforced — no demolition required in most cases.",
  },
  {
    step: "03",
    title: "Base & reinforcement layer",
    desc: "A fibre-reinforced base coat is applied and levelled to correct minor imperfections in the original surface.",
  },
  {
    step: "04",
    title: "Finish application",
    desc: "The chosen microtopping or Rasico finish is hand-applied in thin passes to build texture, tone and depth.",
  },
  {
    step: "05",
    title: "Sealing & reveal",
    desc: "A protective sealer is cured onto the surface, and the space is handed back ready for immediate use.",
  },
];

const comparison = [
  { criteria: "Demolition required", traditional: "Yes — full tear-out of existing surface", surfaceCrete: "No — applied directly over most substrates" },
  { criteria: "Added height", traditional: "10–20 mm or more", surfaceCrete: "As little as 3 mm" },
  { criteria: "Joints / grout lines", traditional: "Visible, prone to staining", surfaceCrete: "Fully seamless" },
  { criteria: "Typical downtime", traditional: "2–3 weeks", surfaceCrete: "5–7 days" },
  { criteria: "Colour & texture range", traditional: "Fixed by tile/stone batch", surfaceCrete: "Custom-mixed on site" },
];

export default function SolutionsPage() {
  return (
    <main className="flex flex-1 flex-col bg-white text-[#1d2830] md:mx-[15px] md:w-[calc(100%-30px)]">

      {/* Hero */}
      <section className="relative h-[70vh] min-h-[480px] overflow-hidden">
        <Image
          src="/images/projects/luxury-villa-south-delhi/luxury-villa-south-delhi-living-room.png"
          alt="Surface Crete solutions"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 flex h-full flex-col justify-end px-6 pb-14 sm:px-12 lg:px-16 lg:pb-20">
          <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/60">Surface Crete</p>
          <h1 className="max-w-3xl text-[48px] font-light leading-[1.0] tracking-tight text-white sm:text-[68px] lg:text-[84px]">
            Surfaces for every space.
          </h1>
          <p className="mt-6 max-w-lg text-[16px] leading-[1.7] text-white/75">
            Explore finishes and systems for the way people live, work, gather and move through a space.
          </p>
        </div>
      </section>

      {/* Stats bar */}
      <section className="border-b border-gray-200 bg-[#1d2830] px-6 py-10 sm:px-12 lg:px-16">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label}>
              <p className="text-[32px] font-light text-white sm:text-[40px]">{s.value}</p>
              <p className="mt-1 text-[12px] uppercase tracking-[0.14em] text-white/50">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Intro nav */}
      <section className="border-b border-gray-200 px-6 py-12 sm:px-12 lg:px-16">
        <div className="grid gap-0 lg:grid-cols-4">
          {[
            { num: "01", title: "Applications", desc: "Solutions shaped around the room, use case and experience you are creating.", href: "#applications" },
            { num: "02", title: "Typologies", desc: "Finishes for floors, walls, staircases, furniture and architectural details.", href: "#typologies" },
            { num: "03", title: "How it's applied", desc: "The system and process behind every Surface Crete finish.", href: "#process" },
            { num: "04", title: "Renovation", desc: "Thoughtful transformations that retain the existing space while changing its feel.", href: "#renovation" },
          ].map((item) => (
            <a key={item.num} href={item.href} className="group border-t border-gray-200 py-8 pr-8 lg:border-l lg:border-t-0 lg:pl-8 lg:first:border-l-0 lg:first:pl-0">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-gray-400">{item.num}</p>
              <h2 className="mt-4 text-[24px] font-light">{item.title}</h2>
              <p className="mt-2 text-[14px] leading-relaxed text-gray-500">{item.desc}</p>
              <p className="mt-5 text-[13px] font-semibold text-[#1d2830] group-hover:underline">Discover →</p>
            </a>
          ))}
        </div>
      </section>

      {/* Applications */}
      <section id="applications" className="px-6 py-16 sm:px-12 lg:px-16 lg:py-24">
        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-gray-400">Applications</p>
        <h2 className="mt-3 max-w-2xl text-[36px] font-light leading-tight sm:text-[48px]">Built around the way a space is used.</h2>

        {applications.map((group) => (
          <div key={group.category} className="mt-14">
            <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-gray-400">{group.category}</p>
              <p className="max-w-md text-[13px] leading-relaxed text-gray-500">{group.description}</p>
            </div>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
              {group.items.map((item) => (
                <Link key={item.label} href={item.href} className="group relative overflow-hidden">
                  <div className="relative aspect-[3/4] overflow-hidden">
                    <Image
                      src={item.img}
                      alt={item.label}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-black/20 transition-opacity duration-300 group-hover:bg-black/35" />
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <p className="text-[15px] font-light text-white">{item.label}</p>
                      <p className="mt-1 text-[11px] leading-snug text-white/70">{item.note}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* Typologies */}
      <section id="typologies" className="bg-[#f2eee8] px-6 py-16 sm:px-12 lg:px-16 lg:py-24">
        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-gray-500">Typologies</p>
        <h2 className="mt-3 max-w-2xl text-[36px] font-light leading-tight sm:text-[48px]">One material language, many possibilities.</h2>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {typologies.map((t) => (
            <Link key={t.label} href={t.href} className="group bg-white overflow-hidden">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={t.img}
                  alt={t.label}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(min-width: 1024px) 25vw, 50vw"
                />
              </div>
              <div className="p-5">
                <div className="flex items-baseline justify-between">
                  <h3 className="text-[20px] font-light text-[#1d2830]">{t.label}</h3>
                  <span className="text-[11px] uppercase tracking-[0.12em] text-gray-400">{t.thickness}</span>
                </div>
                <p className="mt-2 text-[13px] leading-relaxed text-gray-500">{t.description}</p>
                <p className="mt-4 text-[13px] font-semibold text-[#1d2830] group-hover:underline">Explore →</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Process */}
      <section id="process" className="px-6 py-16 sm:px-12 lg:px-16 lg:py-24">
        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-gray-400">How it's applied</p>
        <h2 className="mt-3 max-w-2xl text-[36px] font-light leading-tight sm:text-[48px]">Five steps, one continuous surface.</h2>
        <div className="mt-14 grid gap-0 lg:grid-cols-5">
          {process.map((p, i) => (
            <div
              key={p.step}
              className={`border-t border-gray-200 py-8 pr-8 lg:border-t-0 lg:pl-8 lg:pr-6 ${i !== 0 ? "lg:border-l" : ""}`}
            >
              <p className="text-[13px] font-semibold text-gray-400">{p.step}</p>
              <h3 className="mt-4 text-[19px] font-light">{p.title}</h3>
              <p className="mt-3 text-[13px] leading-relaxed text-gray-500">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Comparison */}
      <section className="bg-[#e9e5de] px-6 py-16 sm:px-12 lg:px-16 lg:py-24">
        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-gray-500">Why Surface Crete</p>
        <h2 className="mt-3 max-w-2xl text-[36px] font-light leading-tight sm:text-[48px]">Compared to a traditional renovation.</h2>
        <div className="mt-12 overflow-x-auto">
          <table className="w-full min-w-[640px] border-collapse text-left">
            <thead>
              <tr>
                <th className="border-b border-[#1d2830]/15 pb-4 pr-6 text-[11px] font-semibold uppercase tracking-[0.14em] text-gray-500">Criteria</th>
                <th className="border-b border-[#1d2830]/15 pb-4 pr-6 text-[11px] font-semibold uppercase tracking-[0.14em] text-gray-500">Traditional renovation</th>
                <th className="border-b border-[#1d2830]/15 pb-4 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#1d2830]">Surface Crete</th>
              </tr>
            </thead>
            <tbody>
              {comparison.map((row) => (
                <tr key={row.criteria}>
                  <td className="border-b border-[#1d2830]/10 py-5 pr-6 text-[14px] font-light text-[#1d2830]">{row.criteria}</td>
                  <td className="border-b border-[#1d2830]/10 py-5 pr-6 text-[14px] leading-relaxed text-gray-500">{row.traditional}</td>
                  <td className="border-b border-[#1d2830]/10 py-5 text-[14px] font-medium leading-relaxed text-[#1d2830]">{row.surfaceCrete}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Renovation */}
      <section id="renovation" className="grid lg:grid-cols-2">
        <div className="relative min-h-[420px] lg:min-h-[560px]">
          <Image
            src="/images/projects/living-room-after.png"
            alt="Renovation with Surface Crete"
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 50vw, 100vw"
          />
        </div>
        <div className="flex flex-col justify-center bg-[#1d2830] px-7 py-16 sm:px-12 lg:px-16">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/50">Renovation</p>
          <h2 className="mt-4 max-w-md text-[36px] font-light leading-tight text-white sm:text-[48px]">
            Refresh the surface. Keep the story of the space.
          </h2>
          <p className="mt-6 max-w-md text-[15px] leading-[1.75] text-white/65">
            Surface Crete systems can transform existing substrates without the disruption of complete removal. The result is an updated material expression with minimal added thickness — as little as 3 mm.
          </p>
          <ul className="mt-8 max-w-md space-y-3">
            {[
              "Applied directly over existing tile, stone or concrete",
              "No skip bins, dust barriers or structural work",
              "Occupied spaces can often stay in partial use",
            ].map((line) => (
              <li key={line} className="flex gap-3 text-[13px] leading-relaxed text-white/70">
                <span className="mt-[7px] h-[3px] w-[3px] shrink-0 rounded-full bg-white/50" />
                {line}
              </li>
            ))}
          </ul>
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            <Link href="/floors/microtopping" className="border-t border-white/20 pt-5 text-[18px] font-light text-white hover:text-white/70 transition-colors">
              Indoor renovation <span className="float-right">→</span>
            </Link>
            <Link href="/floors/rasico" className="border-t border-white/20 pt-5 text-[18px] font-light text-white hover:text-white/70 transition-colors">
              Outdoor renovation <span className="float-right">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#e9e5de] px-6 py-20 sm:px-12 lg:px-16 lg:py-28">
        <div className="flex flex-col items-start justify-between gap-10 lg:flex-row lg:items-end">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-gray-500">Start a project</p>
            <h2 className="mt-4 max-w-2xl text-[36px] font-light leading-tight sm:text-[52px]">
              Let us help you find the right finish for your space.
            </h2>
          </div>
          <Link href="/contacts" className="shrink-0 border-b-2 border-[#1d2830] pb-1 text-[15px] font-semibold text-[#1d2830] hover:opacity-60 transition-opacity">
            Contact Surface Crete →
          </Link>
        </div>
      </section>

    </main>
  );
}
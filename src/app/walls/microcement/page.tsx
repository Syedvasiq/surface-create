import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Microcement",
  description: "Discover Surface Crete microcement for continuous floors, walls, bathrooms, furniture and renovation projects.",
  alternates: { canonical: "/walls/microcement" },
};

const advantages = [
  ["Continuous finish", "A seamless surface with no grout lines for a calm, expanded visual effect."],
  ["Low thickness", "A refined finish applied in millimetres, making it well suited to renovation work."],
  ["Versatile application", "Suitable for floors, walls, stairs, wet areas, counters and selected furniture pieces."],
  ["Easy care", "A professionally sealed surface is simple to maintain with gentle, neutral cleaning products."],
  ["Custom appearance", "Choose from mineral tones, colour ranges and finishes that suit your architecture."],
  ["Compatible with renovation", "Can be specified over stable existing substrates after the correct preparation."],
];

const applications = [
  { title: "Bathrooms", copy: "Create a calm, unified wet-area finish across walls, floors and custom details.", image: "/images/projects/microtoping/microtopping-bathroom.png" },
  { title: "Living spaces", copy: "Bring visual continuity through living areas, hallways and open-plan rooms.", image: "/images/projects/microtoping/microtopping-interior.png" },
  { title: "Kitchens", copy: "A durable, easy-care material language for floors, walls and selected work surfaces.", image: "/images/projects/mtr eats bangalore/mtr-eats-bangalore-kitchen.png" },
  { title: "Outdoor living", copy: "Extend a cohesive material palette to sheltered exterior and landscape spaces.", image: "/images/projects/private villa goa/private-villa-goa-pool-area.png" },
];

const faqs = [
  ["What is microcement?", "Microcement is a thin, cement-based decorative coating, enhanced with polymers, fine aggregates and mineral colourants to create a continuous finished surface."],
  ["Can it be applied over existing surfaces?", "After a professional assessment and proper preparation, it can be specified over many stable substrates, including concrete, screed and existing tiles."],
  ["Is microcement suitable for bathrooms?", "Yes. A correct waterproofing and sealing system makes it a strong choice for bathrooms and other humidity-prone spaces."],
  ["How do I clean it?", "Use a soft mop or cloth with water and neutral, non-abrasive cleaners. Avoid acidic or aggressive products that may affect the sealer."],
];

export default function MicrocementPage() {
  return (
    <main className="flex flex-1 flex-col bg-white text-[#1d2830] md:mx-[15px] md:w-[calc(100%-30px)]">
      <section className="relative grid min-h-[650px] overflow-hidden lg:grid-cols-[0.88fr_1.12fr]">
        <div className="flex flex-col justify-between bg-[#e9e5de] px-7 py-12 sm:px-12 lg:px-16 lg:py-16">
          <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[#5b6569]">Natural finishes</p>
          <div className="py-16 lg:py-0">
            <p className="text-base text-[#5b6569]">Surface Crete</p>
            <h1 className="mt-4 max-w-xl text-[55px] font-light leading-[0.96] tracking-[-0.055em] sm:text-[76px] lg:text-[86px]">Microcement for surfaces with character.</h1>
            <p className="mt-8 max-w-md text-[17px] leading-[1.7] text-[#465158]">A continuous mineral finish for contemporary interiors, thoughtful renovations and spaces that need to feel connected.</p>
          </div>
          <a href="#what-is-microcement" className="inline-flex w-fit items-center gap-3 text-sm font-semibold underline underline-offset-4">Explore microcement <span aria-hidden="true">↓</span></a>
        </div>
        <div className="relative min-h-[430px] lg:min-h-0">
          <Image src="/images/projects/microtoping/microtopping-interior.png" alt="Contemporary interior finished with microcement flooring" fill priority className="object-cover" sizes="(min-width: 1024px) 60vw, 100vw" />
        </div>
      </section>

      <section id="what-is-microcement" className="mx-auto grid w-full max-w-[1370px] gap-12 px-6 py-20 sm:px-10 lg:grid-cols-[0.85fr_1.15fr] lg:px-12 lg:py-28">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#667075]">What is microcement?</p>
          <h2 className="mt-4 max-w-md text-[38px] font-light leading-[1.08] tracking-[-0.03em] sm:text-[50px]">A modern material with a natural point of view.</h2>
        </div>
        <div className="max-w-2xl space-y-5 text-[17px] leading-[1.75] text-[#465158]">
          <p>Microcement is a cement-based composite finish that combines fine mineral aggregate, polymer binders, performance additives and pigments. Together, these layers create a slim yet expressive surface with a tactile, hand-finished quality.</p>
          <p>Its ability to coat stable existing surfaces makes it a considered option for renovations. Floors, walls, stairs, bathroom details and furniture can share one continuous visual language without the interruption of joints.</p>
        </div>
      </section>

      <section className="grid lg:grid-cols-2">
        <div className="relative min-h-[430px] lg:min-h-[590px]"><Image src="/images/projects/luxury-villa-south-delhi/luxury-villa-south-delhi-master-bath-room.png" alt="Microcement surface in a luxury bathroom" fill className="object-cover" sizes="(min-width: 1024px) 50vw, 100vw" /></div>
        <div className="bg-[#f2eee8] px-7 py-16 sm:px-12 lg:px-16 lg:py-20">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#667075]">Why choose it?</p>
          <h2 className="mt-4 max-w-xl text-[37px] font-light leading-[1.08] tracking-[-0.03em] sm:text-[49px]">Designed for continuity, made for real life.</h2>
          <div className="mt-10 grid gap-x-8 gap-y-8 sm:grid-cols-2">
            {advantages.map(([title, copy], index) => <div key={title} className="border-t border-[#1d2830]/25 pt-3"><p className="text-sm font-semibold text-[#1d2830]">0{index + 1} — {title}</p><p className="mt-2 text-sm leading-relaxed text-[#566166]">{copy}</p></div>)}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-[1370px] px-6 py-20 sm:px-10 lg:px-12 lg:py-28">
        <div className="max-w-2xl"><p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#667075]">Our microcement systems</p><h2 className="mt-4 text-[38px] font-light leading-[1.08] tracking-[-0.03em] sm:text-[50px]">Choose the finish that fits the project.</h2></div>
        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          <Link href="/floors/microtopping" className="group relative min-h-[470px] overflow-hidden"><Image src="/images/projects/microtoping/microtopping-living-room.png" alt="Microtopping system in a living space" fill className="object-cover transition-transform duration-500 group-hover:scale-105" sizes="(min-width: 1024px) 50vw, 100vw" /><div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 to-transparent p-8 text-white"><p className="text-3xl font-light">Microtopping</p><p className="mt-2 text-sm text-white/80">Flexible colour and finish possibilities for floors and walls. →</p></div></Link>
          <Link href="/floors/nuvolato-architop" className="group relative min-h-[470px] overflow-hidden"><Image src="/images/projects/private villa goa/private-villa-goa-interior.png" alt="Nuvolato Architop in a contemporary interior" fill className="object-cover transition-transform duration-500 group-hover:scale-105" sizes="(min-width: 1024px) 50vw, 100vw" /><div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 to-transparent p-8 text-white"><p className="text-3xl font-light">Nuvolato Architop</p><p className="mt-2 text-sm text-white/80">A clouded, concrete-inspired finish with depth and movement. →</p></div></Link>
        </div>
      </section>

      <section className="bg-[#1d2830] px-6 py-20 text-white sm:px-10 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-[1370px]"><div className="max-w-2xl"><p className="text-sm font-semibold uppercase tracking-[0.14em] text-white/55">Applications</p><h2 className="mt-4 text-[38px] font-light leading-[1.08] tracking-[-0.03em] sm:text-[50px]">From private rooms to high-use spaces.</h2></div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{applications.map((application) => <article key={application.title} className="group"><div className="relative aspect-[0.95/1] overflow-hidden"><Image src={application.image} alt={application.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" sizes="(min-width: 1024px) 25vw, 50vw" /></div><h3 className="mt-4 text-2xl font-light">{application.title}</h3><p className="mt-2 text-sm leading-relaxed text-white/65">{application.copy}</p></article>)}</div>
        </div>
      </section>

      <section className="mx-auto grid w-full max-w-[1370px] gap-12 px-6 py-20 sm:px-10 lg:grid-cols-2 lg:px-12 lg:py-28">
        <div><p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#667075]">Application and care</p><h2 className="mt-4 max-w-xl text-[38px] font-light leading-[1.08] tracking-[-0.03em] sm:text-[50px]">The best result begins with the right preparation.</h2></div>
        <div className="space-y-6 text-[17px] leading-[1.75] text-[#465158]"><p>Professional installation starts by assessing the substrate, correcting imperfections and applying the appropriate primer. Base and finish coats are then worked by hand, sanded between stages and protected with a compatible sealer.</p><p>For lasting performance, use neutral cleaners, avoid abrasive chemicals and schedule maintenance of the protective finish according to the level of use.</p><Link href="/contacts" className="inline-flex text-sm font-semibold underline underline-offset-4">Speak with a Surface Crete specialist →</Link></div>
      </section>

      <section className="bg-[#e9e5de] px-6 py-20 sm:px-10 lg:px-12 lg:py-28"><div className="mx-auto max-w-[1370px]"><p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#667075]">Microcement FAQ</p><h2 className="mt-4 text-[38px] font-light leading-[1.08] tracking-[-0.03em] sm:text-[50px]">Common questions, clearly answered.</h2><div className="mt-12 grid gap-x-16 gap-y-8 lg:grid-cols-2">{faqs.map(([question, answer], index) => <article key={question} className="border-t border-[#1d2830]/25 pt-4"><p className="text-lg font-semibold">{String(index + 1).padStart(2, "0")} — {question}</p><p className="mt-3 max-w-xl text-[16px] leading-[1.7] text-[#566166]">{answer}</p></article>)}</div></div></section>
    </main>
  );
}

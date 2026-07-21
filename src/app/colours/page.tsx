import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Colours",
  description: "Discover the Surface Crete colour system, material textures, and design combinations.",
  alternates: { canonical: "/colours" },
};

const colourRanges = [
  { name: "Yellow", tones: ["#f0ede3", "#dad0bd", "#b8ad98", "#938779", "#776f61", "#8b8980", "#737570", "#646561", "#8a735e", "#bf955c", "#d4a84d", "#e2bd70", "#e9d499", "#f1e7c7"] },
  { name: "Orange", tones: ["#ded7d1", "#c6bbb0", "#aa998b", "#8c7b70", "#62615d", "#464944", "#6d675e", "#7d6658", "#8c6d5c", "#a6735a", "#bd7b5b", "#cd9675", "#d9b292", "#e8c9aa"] },
  { name: "Red", tones: ["#e4d9d6", "#cbbab7", "#a99590", "#88726d", "#5f4c48", "#463633", "#62483e", "#765348", "#8a5f54", "#a56759", "#b75b46", "#c86d59", "#d38d81", "#e1b2ac"] },
  { name: "Blue", tones: ["#e1e2db", "#c9cbc6", "#a9aeac", "#858d8d", "#5c6568", "#454c4f", "#383f43", "#2d3539", "#232b2f", "#476f82", "#5e96b4", "#78afd0", "#98c8e1", "#bdd8e3"] },
  { name: "Green", tones: ["#dce0d7", "#c6cdc6", "#aeb8b1", "#929e95", "#777f75", "#5d665d", "#4d564d", "#505849", "#65714f", "#71885d", "#8ca15f", "#b3bd84", "#c7d19e", "#b1d2c0"] },
];

const colourCombinations = [
  { name: "Warm mineral", colours: ["#e9d499", "#a6735a", "#5f4c48"] },
  { name: "Coastal calm", colours: ["#bdd8e3", "#5e96b4", "#383f43"] },
  { name: "Natural balance", colours: ["#c7d19e", "#71885d", "#4d564d"] },
  { name: "Soft contrast", colours: ["#f0ede3", "#8c7b70", "#b75b46"] },
];

export default function ColoursPage() {
  return (
    <main className="flex flex-1 flex-col bg-white text-[#1d2830] md:mx-[15px] md:w-[calc(100%-30px)]">
      <section className="grid min-h-[620px] lg:grid-cols-[0.9fr_1.1fr]">
        <div className="flex flex-col justify-between bg-[#e8e4dc] px-7 py-12 sm:px-12 lg:px-16 lg:py-16">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#5a6468]">Surface Crete</p>
          <div className="py-16 lg:py-0">
            <h1 className="max-w-md text-[56px] font-light leading-[0.92] tracking-[-0.055em] sm:text-[76px] lg:text-[88px]">
              The art of <span className="italic">surface</span> harmony
            </h1>
            <div className="mt-10 flex flex-wrap gap-x-5 gap-y-2 text-sm font-semibold uppercase tracking-[0.1em] text-[#526066]">
              <span>Material</span><span>Textures</span><span>Colours</span><span>Creativity</span>
            </div>
          </div>
          <a href="#colour-system" className="inline-flex w-fit items-center gap-3 text-sm font-semibold underline underline-offset-4">
            Explore the colour system <span aria-hidden="true">↓</span>
          </a>
        </div>
        <div className="relative min-h-[430px] overflow-hidden bg-[#1d2830] lg:min-h-0">
          <video className="absolute inset-0 h-full w-full object-cover" autoPlay muted loop playsInline preload="metadata" aria-label="Surface Crete colour story video">
            <source src="/video/6-SECONDI-COLORE-2.mp4" type="video/mp4" />
          </video>
        </div>
      </section>

      <section className="mx-auto grid w-full max-w-[1370px] gap-12 px-6 py-20 sm:px-10 lg:grid-cols-[0.9fr_1.1fr] lg:px-12 lg:py-28">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#667075]">Designing for feeling</p>
          <h2 className="mt-4 max-w-lg text-[34px] font-light leading-[1.05] tracking-[-0.03em] sm:text-[45px]">A surface is more than a colour.</h2>
        </div>
        <div className="max-w-2xl space-y-5 text-[17px] leading-[1.75] text-[#465158]">
          <p>Light, texture, colour and material work together to shape the character of a room. The right finish can make a space feel calm, energetic, intimate or open.</p>
          <p>Our surface systems are designed to let these elements work in harmony, giving architects and homeowners the freedom to build a distinctive atmosphere.</p>
        </div>
      </section>

      <section className="grid lg:grid-cols-2">
        <div className="relative min-h-[440px] lg:min-h-[590px]">
          <Image src="/images/projects/luxury-villa-south-delhi/luxury-villa-south-delhi-master-bath-room.png" alt="Textured Surface Crete bathroom finish" fill className="object-cover" sizes="(min-width: 1024px) 50vw, 100vw" />
        </div>
        <div className="flex flex-col justify-center bg-[#f2eee8] px-7 py-16 sm:px-12 lg:px-16">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#667075]">Material, texture and colour</p>
          <h2 className="mt-5 max-w-xl text-[36px] font-light leading-[1.08] tracking-[-0.03em] sm:text-[48px]">Design with depth, balance and personality.</h2>
          <p className="mt-7 max-w-xl text-[17px] leading-[1.75] text-[#465158]">Subtle clouding, polished movement and tactile mineral textures bring depth to a surface. A considered palette makes those details feel intentional and connected.</p>
        </div>
      </section>

      <section id="colour-system" className="bg-[#1d2830] px-6 py-20 text-white sm:px-10 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-[1370px]">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-white/60">The Surface Crete colour system</p>
              <h2 className="mt-4 max-w-lg text-[36px] font-light leading-[1.08] tracking-[-0.03em] sm:text-[48px]">Five colour ranges, designed to work together.</h2>
            </div>
            <div className="max-w-2xl space-y-5 text-[17px] leading-[1.75] text-white/75">
              <p>Our palette moves from light and soft shades through greys and deeper tones, before reaching richer accents and pale finishing notes.</p>
              <p>Within each range, colours can be paired tone-on-tone or contrasted with confidence. Across the ranges, similar intensities create a balanced material story.</p>
            </div>
          </div>

          <div className="mt-14 overflow-hidden">
            <div className="py-5">
              <div className="grid grid-cols-[42px_repeat(14,minmax(0,1fr))] gap-x-1 gap-y-4 sm:grid-cols-[62px_repeat(14,minmax(0,1fr))] sm:gap-x-2 sm:gap-y-5 lg:grid-cols-[90px_repeat(14,minmax(0,1fr))]">
                <div className="text-[8px] font-semibold uppercase tracking-[0.08em] text-white/65 sm:text-xs sm:tracking-[0.12em]">Range</div>
                {['Light', 'Soft', 'Grey', 'Dark', 'Deep', 'Strong', 'Pastel'].map((label) => <div key={label} className="col-span-2 overflow-hidden border-t border-white/40 pt-2 text-center text-[7px] font-semibold uppercase tracking-[0.04em] text-white/65 sm:text-xs sm:tracking-[0.1em]">{label}</div>)}
                {colourRanges.map((range) => (
                  <div key={range.name} className="contents">
                    <div className="flex items-center overflow-hidden text-[9px] font-semibold text-white [writing-mode:vertical-rl] sm:text-sm">{range.name}</div>
                    {range.tones.map((tone, index) => <div key={tone} className="group">
                      <div className="aspect-square border border-white/10 transition-transform duration-300 group-hover:scale-[1.04]" style={{ backgroundColor: tone }} />
                      <p className="mt-1 hidden text-[9px] uppercase tracking-[0.04em] text-white/70 sm:block">{range.name.slice(0, 1)}{index + 1}</p>
                    </div>)}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#1d2830] px-6 py-20 text-center text-white sm:px-10 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-white/55">The art of combining</p>
          <h2 className="mt-5 text-[40px] font-light leading-[1.08] tracking-[-0.03em] sm:text-[58px]">How to read the colour scheme</h2>
          <p className="mx-auto mt-10 max-w-5xl text-[24px] font-light leading-[1.38] text-white/75 sm:text-[34px]">
            The scheme is designed so tone-on-tone combinations can be created within a colour range, from soft to strong contrasts. Combine colours with a similar strength across ranges to build a balanced, expressive space.
          </p>
          <div className="mx-auto mt-14 grid max-w-[1370px] gap-px bg-white/20 sm:grid-cols-2 lg:grid-cols-4">
            {colourCombinations.map((combination) => (
              <div key={combination.name} className="bg-[#1d2830] p-5 text-left sm:p-6">
                <div className="grid grid-cols-3 gap-2">
                  {combination.colours.map((colour, index) => <div key={colour} className="aspect-square" style={{ backgroundColor: colour }} aria-label={`Colour ${index + 1}`} />)}
                </div>
                <p className="mt-5 text-lg font-light">{combination.name}</p>
                <p className="mt-1 text-xs uppercase tracking-[0.14em] text-white/55">1 + 2 + 3</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid w-full max-w-[1370px] gap-12 px-6 py-20 sm:px-10 lg:grid-cols-[1fr_0.9fr] lg:px-12 lg:py-28">
        <div className="relative min-h-[420px] overflow-hidden">
          <Image src="/images/projects/private villa goa/private-villa-goa-dinning-room.png" alt="Surface Crete finish and colour in a contemporary home" fill className="object-cover" sizes="(min-width: 1024px) 55vw, 100vw" />
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#667075]">How to read a colour code</p>
          <h2 className="mt-4 text-[34px] font-light leading-[1.08] tracking-[-0.03em] sm:text-[43px]">A simple system for precise specification.</h2>
          <div className="mt-8 grid grid-cols-4 gap-2 text-center">
            {[['M', 'Material'], ['F', 'Finish'], ['Y', 'Colour range'], ['3', 'Tone']].map(([symbol, label]) => (
              <div key={symbol} className="border-t border-[#1d2830]/35 pt-3">
                <p className="text-3xl font-light">{symbol}</p><p className="mt-2 text-xs leading-snug text-[#5c676c]">{label}</p>
              </div>
            ))}
          </div>
          <p className="mt-7 text-[16px] leading-[1.7] text-[#465158]">Every product collection has a clear code, helping you select compatible material, finish, colour family and tone for your project.</p>
        </div>
      </section>

      <section className="bg-[#1d2830] px-6 py-20 text-white sm:px-10 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-[1370px]">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-white/60">The five colour ranges</p>
          <h2 className="mt-4 max-w-2xl text-[36px] font-light leading-[1.08] tracking-[-0.03em] sm:text-[48px]">Find the palette that fits your space.</h2>
          <div className="mt-12 grid gap-px bg-white/20 sm:grid-cols-2 lg:grid-cols-5">
            {colourRanges.map((range) => (
              <Link key={range.name} href="/floors/microtopping" className="group flex min-h-[360px] flex-col justify-between bg-[#1d2830] p-8 transition-colors hover:bg-white hover:text-[#1d2830] lg:min-h-[420px]">
                <div className="grid grid-cols-7 gap-1.5">{range.tones.map((tone) => <span key={tone} className="aspect-[0.78/1]" style={{ backgroundColor: tone }} />)}</div>
                <p className="mt-12 text-[31px] font-light">{range.name}</p>
                <p className="mt-2 text-sm text-white/60 group-hover:text-[#1d2830]/60">Explore surface finishes →</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

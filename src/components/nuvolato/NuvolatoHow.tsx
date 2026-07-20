import Image from "next/image";

const steps = [
  "Surface preparation",
  "Application by magic trowel of the 1st coat of mix Colour hardener + Architop Catalyst",
  "Application by magic trowel of the 2nd coat of mix Colour hardener + Architop Catalyst",
  "Finish the surface with a power trowel",
  "Cleaning",
  "Sealer application",
];

export default function NuvolatoHow() {
  return (
    <section className="bg-[#f0ece6] px-6 py-16 sm:px-10 lg:px-16 lg:py-24 md:mx-[15px] md:[width:calc(100%-30px)] mt-0">
      <div>
        <h2 className="mb-12 text-[28px] font-light text-[#1d2830] sm:text-[34px]">
          How
        </h2>

        <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(390px,0.95fr)] lg:gap-20">
          <Image
            src="/images/nuvolato/how-1.png"
            alt="Nuvolato Architop application diagram"
            width={1185}
            height={1035}
            className="h-auto w-full"
            sizes="(min-width: 1024px) 52vw, 100vw"
          />
          <div className="text-[#1d2830]">
            <ol className="space-y-4 text-[17px] leading-snug sm:text-lg">
              {steps.map((step, i) => (
                <li key={i} className="flex gap-1.5">
                  <span className="font-semibold shrink-0">{i + 1}.</span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}

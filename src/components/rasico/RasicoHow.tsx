import Image from "next/image";

const steps = [
  "Surface preparation",
  "Application of Rasico Mix – 1st coat",
  "Application of Rasico Mix – 2nd coat",
  "(Optional) Application of Rasico Touch",
  "Grinding and application of Ideal Sealer",
];

export default function RasicoHow() {
  return (
    <section className="bg-[#f0ece6] px-6 py-16 sm:px-10 lg:px-16 lg:py-24 md:mx-[15px] md:[width:calc(100%-30px)] mt-0">
      <h2 className="mb-12 text-[28px] font-light text-[#1d2830] sm:text-[34px]">How</h2>
      <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(390px,0.95fr)] lg:gap-20">
        <Image
          src="/images/rasico/how.png"
          alt="Rasico application diagram"
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
    </section>
  );
}

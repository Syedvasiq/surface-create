import Image from "next/image";

export default function ConcreteOptikContinuousSpace() {
  return (
    <section className="bg-white mt-[15px] py-14 md:py-20 md:mx-[15px] md:[width:calc(100%-30px)]">
      <div className="flex flex-col md:flex-row md:items-center gap-10 md:gap-0">
        <div className="w-full md:w-[38%] shrink-0 px-5 sm:px-10 lg:px-14">
          <h2 className="text-[26px] sm:text-[30px] lg:text-[36px] font-light text-gray-900 leading-snug mb-5 md:mb-6">
            The expressiveness of fair-faced concrete
          </h2>
          <div className="space-y-4">
            <p className="text-[14px] sm:text-[15px] text-gray-700 leading-[1.85]">
              As a result of Ideal Work's technology, Concrete Optik is a coating able to recreate the brutalism of fair-faced concrete in just 2 mm thickness. The tradition started by Le Corbusier and culminated with Tadao Ando's aesthetics is still alive in this innovative solution signed by Ideal Work.
            </p>
          </div>
        </div>
        <div className="w-full md:w-[62%] relative aspect-[4/3] md:aspect-auto md:h-[420px] lg:h-[500px] overflow-hidden">
          <Image src="/images/concrete-optik/cucina-optik-fair-faced.jpg" alt="Concrete Optik fair-faced concrete" fill className="object-cover" sizes="(max-width: 768px) 100vw, 62vw" />
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";

export default function PurometalloContinuousSpace() {
  return (
    <section className="bg-white mt-[15px] py-14 md:py-20 md:mx-[15px] md:[width:calc(100%-30px)]">
      <div className="flex flex-col md:flex-row md:items-center gap-10 md:gap-0">

        {/* Left: Text content */}
        <div className="w-full md:w-[38%] shrink-0 px-5 sm:px-10 lg:px-14">
          <h2 className="text-[26px] sm:text-[30px] lg:text-[36px] font-light text-gray-900 leading-snug mb-5 md:mb-6">
            Unrepeatable Beauty
          </h2>
          <div className="space-y-4">
            <p className="text-[14px] sm:text-[15px] text-gray-700 leading-[1.85]">
              Purometallo is an exclusive line of decorative metal powders-based coatings for walls and furniture.
            </p>
            <p className="text-[14px] sm:text-[15px] text-gray-700 leading-[1.85]">
              Turn any surface into a noble metal the applicator can shape according to his creativity to obtain a tactile look, a shiny foil finish or an iron oxide chromatic effect.
            </p>
          </div>
        </div>

        {/* Right: Image */}
        <div className="w-full md:w-[62%] relative aspect-[4/3] md:aspect-auto md:h-[420px] lg:h-[500px] overflow-hidden">
          <Image
            src="/images/purometallo/PUROMETALLO-SPACES.jpg"
            alt="Purometallo decorative metal surface"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 62vw"
          />
        </div>

      </div>
    </section>
  );
}

import Image from "next/image";

export default function TerraeCalceContinuousSpace() {
  return (
    <section className="bg-white mt-[15px] py-14 md:py-20 md:mx-[15px] md:[width:calc(100%-30px)]">
      <div className="flex flex-col md:flex-row md:items-center gap-10 md:gap-0">
        <div className="w-full md:w-[38%] shrink-0 px-5 sm:px-10 lg:px-14">
          <h2 className="text-[26px] sm:text-[30px] lg:text-[36px] font-light text-gray-900 leading-snug mb-5 md:mb-6">
            Terrae-Calce
          </h2>
          <div className="space-y-4">
            <p className="text-[14px] sm:text-[15px] text-gray-700 leading-[1.85]">
              Terrae-Calce is a natural seamless wall finish born from a deep connection with the earth and its elements. Made with carefully selected materials such as lime, natural pigments and plant-based aggregates, it combines refined aesthetics with sustainability.
            </p>
            <p className="text-[14px] sm:text-[15px] text-gray-700 leading-[1.85]">
              Its soft, textured finishes enhance vertical surfaces with elegance, creating harmonious and contemporary spaces. Thanks to the breathable and antibacterial properties typical of lime, it contributes to healthier and more comfortable living environments.
            </p>
          </div>
        </div>
        <div className="w-full md:w-[62%] relative aspect-[4/3] md:aspect-auto md:h-[420px] lg:h-[500px] overflow-hidden">
          <Image src="/images/terrae-calce/terrae-calce-space.jpg" alt="Terrae-Calce natural lime finish" fill className="object-cover" sizes="(max-width: 768px) 100vw, 62vw" />
        </div>
      </div>
    </section>
  );
}

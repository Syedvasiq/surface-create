import Image from "next/image";

export default function TerraeCalceDesignSections() {
  return (
    <section className="bg-white md:mx-[15px] md:[width:calc(100%-30px)] mt-[15px]">

      {/* 1. Breathability – VOC — left content, right image */}
      <div className="flex flex-col md:flex-row md:items-start gap-10 md:gap-0 py-10 md:py-14">
        <div className="w-full md:w-[50%] shrink-0 px-5 sm:px-10 lg:px-14 py-10 md:py-0">
          <p className="text-[11px] tracking-widest text-gray-500 uppercase mb-3">Health</p>
          <h3 className="text-[22px] sm:text-[26px] lg:text-[30px] font-light text-gray-900 leading-snug mb-5">Breathability – VOC</h3>
          <div className="space-y-4">
            <p className="text-[14px] sm:text-[15px] text-gray-700 leading-[1.85]">The hygroscopic properties of lime (i.e. it absorbs water molecules from the surrounding environment) make it possible to moderate humidity levels, counteract the formation of mould, bacteria and fungi, and improve air quality, thus favouring the reduction of asthma and allergies.</p>
            <p className="text-[14px] sm:text-[15px] text-gray-700 leading-[1.85]">They are highly breathable and therefore favour the natural passage of water vapour in the walls, limiting detachments due to blistering in humid areas.</p>
            <p className="text-[14px] sm:text-[15px] text-gray-700 leading-[1.85]">Terrae-Calce products are VOC free.</p>
          </div>
        </div>
        <div className="w-full md:w-[50%] relative aspect-[4/3] md:aspect-auto md:h-[420px] lg:h-[480px] overflow-hidden shrink-0">
          <Image src="/images/terrae-calce/breathability.jpg" alt="Terrae-Calce breathability" fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
        </div>
      </div>

      {/* 2. Climate impact — left image, right content */}
      <div className="flex flex-col md:flex-row-reverse md:items-start gap-10 md:gap-0 py-10 md:py-14 border-t border-gray-100">
        <div className="w-full md:w-[50%] shrink-0 px-5 sm:px-10 lg:px-14 py-10 md:py-0">
          <p className="text-[11px] tracking-widest text-gray-500 uppercase mb-3">Environment</p>
          <h3 className="text-[22px] sm:text-[26px] lg:text-[30px] font-light text-gray-900 leading-snug mb-5">Climate impact</h3>
          <div className="space-y-4">
            <p className="text-[14px] sm:text-[15px] text-gray-700 leading-[1.85]">To be produced, lime is fired at a lower temperature than many other solutions. This means that it has a reduced impact on the environment as, by being produced at a lower temperature, uses less energy.</p>
            <p className="text-[14px] sm:text-[15px] text-gray-700 leading-[1.85]">Also, it uniquely reabsorbs part of the carbon dioxide (Co2) emitted during combustion thanks to the "Carbonation" process, while it polymerises in the installation (natural carbon sink), thus reducing the environmental impact. (EPD in process).</p>
          </div>
        </div>
        <div className="w-full md:w-[50%] relative aspect-[4/3] md:aspect-auto md:h-[420px] lg:h-[480px] overflow-hidden shrink-0">
          <Image src="/images/terrae-calce/climate-imapact.jpg" alt="Terrae-Calce climate impact" fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
        </div>
      </div>

      {/* 3. Sustainability — left content, right image */}
      <div className="flex flex-col md:flex-row md:items-start gap-10 md:gap-0 py-10 md:py-14 border-t border-gray-100">
        <div className="w-full md:w-[50%] shrink-0 px-5 sm:px-10 lg:px-14 py-10 md:py-0">
          <p className="text-[11px] tracking-widest text-gray-500 uppercase mb-3">Sustainability</p>
          <h3 className="text-[22px] sm:text-[26px] lg:text-[30px] font-light text-gray-900 leading-snug mb-5">Sustainability</h3>
          <div className="space-y-4">
            <p className="text-[14px] sm:text-[15px] text-gray-700 leading-[1.85] font-semibold">AVAILABILITY</p>
            <p className="text-[14px] sm:text-[15px] text-gray-700 leading-[1.85]">The raw material for the production of lime is limestone, a sedimentary rock rich in calcium carbonate (CaCO3); marble or other minerals can also be used. As these raw materials are widely present, their use does not contribute to the reduction of resources.</p>
            <p className="text-[14px] sm:text-[15px] text-gray-700 leading-[1.85] font-semibold mt-6">WASTE RECOVERY</p>
            <p className="text-[14px] sm:text-[15px] text-gray-700 leading-[1.85]">The aggregates are all products of waste recovery: rice husk and hemp hurds.</p>
          </div>
        </div>
        <div className="w-full md:w-[50%] relative aspect-[4/3] md:aspect-auto md:h-[420px] lg:h-[480px] overflow-hidden shrink-0">
          <Image src="/images/terrae-calce/sustainbility.jpg" alt="Terrae-Calce sustainability" fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
        </div>
      </div>

      {/* 4. Three different finishes — left image, right content */}
      <div className="flex flex-col md:flex-row-reverse md:items-start gap-10 md:gap-0 py-10 md:py-14 border-t border-gray-100">
        <div className="w-full md:w-[50%] shrink-0 px-5 sm:px-10 lg:px-14 py-10 md:py-0">
          <p className="text-[11px] tracking-widest text-gray-500 uppercase mb-3">Finishes</p>
          <h3 className="text-[22px] sm:text-[26px] lg:text-[30px] font-light text-gray-900 leading-snug mb-5">Three different finishes</h3>
          <div className="space-y-6">
            <div>
              <p className="text-[16px] font-semibold text-gray-900 mb-2">MATERA</p>
              <p className="text-[14px] sm:text-[15px] text-gray-700 leading-[1.85]">Its irregular but elegant texture recalls the traditional buildings of southern Italy, where simplicity, craftsmanship and passion blend.</p>
            </div>
            <div>
              <p className="text-[16px] font-semibold text-gray-900 mb-2">SIENA</p>
              <p className="text-[14px] sm:text-[15px] text-gray-700 leading-[1.85]">The aggregates — rice husk and hemp hurds — are the core elements of this finish. The rough, unstructured appearance of the surface conveys a typically rural, extremely natural look.</p>
            </div>
            <div>
              <p className="text-[16px] font-semibold text-gray-900 mb-2">VENEZIA</p>
              <p className="text-[14px] sm:text-[15px] text-gray-700 leading-[1.85]">The soft, elegant touch of this seamless, irregular finish is reminiscent of the Venetian lagoon. Its texture is as delicate to the touch as it is to the sight.</p>
            </div>
          </div>
        </div>
        <div className="w-full md:w-[50%] relative aspect-[4/3] md:aspect-auto md:h-[420px] lg:h-[480px] overflow-hidden shrink-0">
          <Image src="/images/terrae-calce/three-diffrent-finishes.png" alt="Terrae-Calce three finishes" fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
        </div>
      </div>

    </section>
  );
}

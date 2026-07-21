import Image from "next/image";

export default function TerraeCalceHow() {
  return (
    <section className="bg-[#f0ece6] px-6 py-16 sm:px-10 lg:px-16 lg:py-24 md:mx-[15px] md:[width:calc(100%-30px)] mt-0">
      <h2 className="mb-12 text-[28px] font-light text-[#1d2830] sm:text-[34px]">How</h2>
      <div className="space-y-16">

        {/* MATERA — left image, right content */}
        <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(390px,0.95fr)] lg:gap-20">
          <Image src="/images/terrae-calce/how.png" alt="Terrae-Calce Matera application" width={1185} height={1035} className="h-auto w-full" sizes="(min-width: 1024px) 52vw, 100vw" />
          <div className="text-[#1d2830]">
            <h3 className="text-[22px] font-light mb-6">MATERA</h3>
            <ol className="space-y-4 text-[17px] leading-snug sm:text-lg">
              <li className="flex gap-1.5"><span className="font-semibold shrink-0">1.</span><span>Application of Calce-Primer</span></li>
              <li className="flex gap-1.5"><span className="font-semibold shrink-0">2.</span><span>Application of the first coat of Calce-Powder</span></li>
              <li className="flex gap-1.5"><span className="font-semibold shrink-0">3.</span><span>Application of the second coat of Calce-Powder</span></li>
              <li className="flex gap-1.5"><span className="font-semibold shrink-0">4.</span><span>Sponging and smoothing</span></li>
              <li className="flex gap-1.5"><span className="font-semibold shrink-0">5.</span><span>Application of Calce-Protection</span></li>
            </ol>
          </div>
        </div>

        {/* SIENA — right image, left content */}
        <div className="grid items-start gap-12 lg:grid-cols-[minmax(390px,0.95fr)_minmax(0,1.05fr)] lg:gap-20">
          <div className="text-[#1d2830]">
            <h3 className="text-[22px] font-light mb-6">SIENA</h3>
            <ol className="space-y-4 text-[17px] leading-snug sm:text-lg">
              <li className="flex gap-1.5"><span className="font-semibold shrink-0">1.</span><span>Application of Calce-Primer</span></li>
              <li className="flex gap-1.5"><span className="font-semibold shrink-0">2.</span><span>Application of the first coat of Calce-Powder</span></li>
              <li className="flex gap-1.5"><span className="font-semibold shrink-0">3.</span><span>Application of the second coat of Calce Powder + aggregate</span></li>
              <li className="flex gap-1.5"><span className="font-semibold shrink-0">4.</span><span>Washing</span></li>
              <li className="flex gap-1.5"><span className="font-semibold shrink-0">5.</span><span>Application of Calce Protection</span></li>
            </ol>
          </div>
          <Image src="/images/terrae-calce/how-1.png" alt="Terrae-Calce Siena application" width={1185} height={1035} className="h-auto w-full order-first lg:order-last" sizes="(min-width: 1024px) 52vw, 100vw" />
        </div>

        {/* VENEZIA — left image, right content */}
        <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(390px,0.95fr)] lg:gap-20">
          <Image src="/images/terrae-calce/how-2.png" alt="Terrae-Calce Venezia application" width={1185} height={1035} className="h-auto w-full" sizes="(min-width: 1024px) 52vw, 100vw" />
          <div className="text-[#1d2830]">
            <h3 className="text-[22px] font-light mb-6">VENEZIA</h3>
            <ol className="space-y-4 text-[17px] leading-snug sm:text-lg">
              <li className="flex gap-1.5"><span className="font-semibold shrink-0">1.</span><span>Application of Calce-Primer</span></li>
              <li className="flex gap-1.5"><span className="font-semibold shrink-0">2.</span><span>Application of the first coat of Calce-Powder</span></li>
              <li className="flex gap-1.5"><span className="font-semibold shrink-0">3.</span><span>Application of the second coat of Calce-Powder</span></li>
              <li className="flex gap-1.5"><span className="font-semibold shrink-0">4.</span><span>Application of the third coat of Calce-Powder</span></li>
              <li className="flex gap-1.5"><span className="font-semibold shrink-0">5.</span><span>Polishing</span></li>
              <li className="flex gap-1.5"><span className="font-semibold shrink-0">6.</span><span>Application of Calce Protection</span></li>
            </ol>
          </div>
        </div>

      </div>
    </section>
  );
}

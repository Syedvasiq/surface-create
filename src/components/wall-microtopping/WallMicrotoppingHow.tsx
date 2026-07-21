import Image from "next/image";

export default function WallMicrotoppingHow() {
  return (
    <section className="bg-[#f0ece6] px-6 py-16 sm:px-10 lg:px-16 lg:py-24 md:mx-[15px] md:[width:calc(100%-30px)] mt-0">
      <h2 className="mb-12 text-[28px] font-light text-[#1d2830] sm:text-[34px]">How</h2>
      
      <div className="space-y-16">
        
        {/* MicrotoppingÂ Floor */}
        <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(390px,0.95fr)] lg:gap-20">
          <Image src="/images/microtopping-wall/how.png" alt="Microtopping floor application diagram" width={1185} height={1035} className="h-auto w-full" sizes="(min-width: 1024px) 52vw, 100vw" />
          <div className="text-[#1d2830]">
            <h3 className="text-[22px] font-light mb-6">MicrotoppingÂ Floor</h3>
            <ol className="space-y-4 text-[17px] leading-snug sm:text-lg">
              <li className="flex gap-1.5"><span className="font-semibold shrink-0">1.</span><span>Surface preparation</span></li>
              <li className="flex gap-1.5"><span className="font-semibold shrink-0">2.</span><span>Primer application</span></li>
              <li className="flex gap-1.5"><span className="font-semibold shrink-0">3.</span><span>Application of MicrotoppingÂ BC in 2 coats</span></li>
            </ol>
            
            <div className="mt-8 pt-8 border-t border-gray-300">
              <p className="text-[16px] font-semibold mb-4">A. 2 Base Coat + Finish Coat</p>
              <ol className="space-y-4 text-[17px] leading-snug sm:text-lg" start={4}>
                <li className="flex gap-1.5"><span className="font-semibold shrink-0">4.</span><span>Sanding and cleaning of the Surface</span></li>
                <li className="flex gap-1.5"><span className="font-semibold shrink-0">5.</span><span>Application 1st coat of MicrotoppingÂ FC</span></li>
                <li className="flex gap-1.5"><span className="font-semibold shrink-0">6.</span><span>Sanding and cleaning of the surface</span></li>
                <li className="flex gap-1.5"><span className="font-semibold shrink-0">7.</span><span>Application of Ideal PU WB Easy</span></li>
              </ol>
            </div>
            
            <div className="mt-8 pt-8 border-t border-gray-300">
              <p className="text-[16px] font-semibold mb-4">B. 2 Base Coat + HP</p>
              <ol className="space-y-4 text-[17px] leading-snug sm:text-lg" start={4}>
                <li className="flex gap-1.5"><span className="font-semibold shrink-0">4.</span><span>Sanding and cleaning of the surface</span></li>
                <li className="flex gap-1.5"><span className="font-semibold shrink-0">5.</span><span>Application of MicrotoppingÂ HP</span></li>
                <li className="flex gap-1.5"><span className="font-semibold shrink-0">6.</span><span>Sanding and cleaning of the surface</span></li>
                <li className="flex gap-1.5"><span className="font-semibold shrink-0">7.</span><span>Application of Ideal PU WB Easy</span></li>
              </ol>
            </div>
          </div>
        </div>

        {/* MicrotoppingÂ wall */}
        <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(390px,0.95fr)] lg:gap-20">
          <Image src="/images/microtopping-wall/how-1.png" alt="Microtopping wall application diagram" width={1185} height={1035} className="h-auto w-full" sizes="(min-width: 1024px) 52vw, 100vw" />
          <div className="text-[#1d2830]">
            <h3 className="text-[22px] font-light mb-6">MicrotoppingÂ wall</h3>
            <ol className="space-y-4 text-[17px] leading-snug sm:text-lg">
              <li className="flex gap-1.5"><span className="font-semibold shrink-0">1.</span><span>Preparation of the underbed</span></li>
              <li className="flex gap-1.5"><span className="font-semibold shrink-0">2.</span><span>Application of Primer R-R</span></li>
              <li className="flex gap-1.5"><span className="font-semibold shrink-0">3.</span><span>Application of MicrotoppingÂ BC 1 coat</span></li>
              <li className="flex gap-1.5"><span className="font-semibold shrink-0">4.</span><span>Application of MicrotoppingÂ HP</span></li>
              <li className="flex gap-1.5"><span className="font-semibold shrink-0">5.</span><span>Application of MicrotoppingÂ FC</span></li>
              <li className="flex gap-1.5"><span className="font-semibold shrink-0">6.</span><span>Sanding and application of protective sealer Ideal PU WB Easy</span></li>
            </ol>
          </div>
        </div>

      </div>
    </section>
  );
}
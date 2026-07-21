import Image from "next/image";

export default function SolidroHow() {
  return (
    <section className="bg-[#f0ece6] px-6 py-16 sm:px-10 lg:px-16 lg:py-24 md:mx-[15px] md:[width:calc(100%-30px)] mt-0">
      <h2 className="mb-12 text-[28px] font-light text-[#1d2830] sm:text-[34px]">How</h2>
      <div className="space-y-16">
        
        {/* Standard wall/floor */}
        <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(390px,0.95fr)] lg:gap-20">
          <Image src="/images/solidro/how.png" alt="Solidro standard wall/floor application" width={1185} height={1035} className="h-auto w-full" sizes="(min-width: 1024px) 52vw, 100vw" />
          <div className="text-[#1d2830]">
            <h3 className="text-[22px] font-light mb-6">Standard wall and floor</h3>
            <ol className="space-y-4 text-[17px] leading-snug sm:text-lg">
              <li className="flex gap-1.5"><span className="font-semibold shrink-0">1.</span><span>Surface preparation</span></li>
              <li className="flex gap-1.5"><span className="font-semibold shrink-0">2.</span><span>Mixing of Solidro components</span></li>
              <li className="flex gap-1.5"><span className="font-semibold shrink-0">3.</span><span>Application using a steel trowel</span></li>
              <li className="flex gap-1.5"><span className="font-semibold shrink-0">4.</span><span>Smoothing and levelling</span></li>
              <li className="flex gap-1.5"><span className="font-semibold shrink-0">5.</span><span>Curing period</span></li>
              <li className="flex gap-1.5"><span className="font-semibold shrink-0">6.</span><span>Application of protective sealer</span></li>
            </ol>
          </div>
        </div>

        {/* Performance wall/floor */}
        <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(390px,0.95fr)] lg:gap-20">
          <Image src="/images/solidro/how-1.png" alt="Solidro performance application" width={1185} height={1035} className="h-auto w-full" sizes="(min-width: 1024px) 52vw, 100vw" />
          <div className="text-[#1d2830]">
            <h3 className="text-[22px] font-light mb-6">Performance wall and floor</h3>
            <ol className="space-y-4 text-[17px] leading-snug sm:text-lg">
              <li className="flex gap-1.5"><span className="font-semibold shrink-0">1.</span><span>Preparation of the background</span></li>
              <li className="flex gap-1.5"><span className="font-semibold shrink-0">2.</span><span>Application of the Network Blocker</span></li>
              <li className="flex gap-1.5"><span className="font-semibold shrink-0">3.</span><span>Applying the first coat of Solidro Zero</span></li>
              <li className="flex gap-1.5"><span className="font-semibold shrink-0">4.</span><span>Dry surface sanding and cleaning</span></li>
              <li className="flex gap-1.5"><span className="font-semibold shrink-0">5.</span><span>Applying the second coat of Solidro Zero</span></li>
              <li className="flex gap-1.5"><span className="font-semibold shrink-0">6.</span><span>Dry surface sanding and cleaning</span></li>
              <li className="flex gap-1.5"><span className="font-semibold shrink-0">7.</span><span>Application of Solidro Top</span></li>
              <li className="flex gap-1.5"><span className="font-semibold shrink-0">8.</span><span>Dry surface sanding and cleaning</span></li>
              <li className="flex gap-1.5"><span className="font-semibold shrink-0">9.</span><span>Application of Ideal-PU-WB Easy</span></li>
            </ol>
          </div>
        </div>

        {/* Easy wall */}
        <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(390px,0.95fr)] lg:gap-20">
          <Image src="/images/solidro/how-2.png" alt="Solidro easy wall application" width={1185} height={1035} className="h-auto w-full" sizes="(min-width: 1024px) 52vw, 100vw" />
          <div className="text-[#1d2830]">
            <h3 className="text-[22px] font-light mb-6">Easy wall</h3>
            <ol className="space-y-4 text-[17px] leading-snug sm:text-lg">
              <li className="flex gap-1.5"><span className="font-semibold shrink-0">1.</span><span>Preparation of the background</span></li>
              <li className="flex gap-1.5"><span className="font-semibold shrink-0">2.</span><span>Application of the Blocker</span></li>
              <li className="flex gap-1.5"><span className="font-semibold shrink-0">3.</span><span>Application of Solidro Top</span></li>
              <li className="flex gap-1.5"><span className="font-semibold shrink-0">4.</span><span>Dry surface sanding and cleaning</span></li>
              <li className="flex gap-1.5"><span className="font-semibold shrink-0">5.</span><span>Application of Ideal-PU-WB Easy</span></li>
            </ol>
          </div>
        </div>

      </div>
    </section>
  );
}
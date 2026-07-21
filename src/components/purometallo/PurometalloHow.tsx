import Image from "next/image";

export default function PurometalloHow() {
  return (
    <section className="bg-[#f0ece6] px-6 py-16 sm:px-10 lg:px-16 lg:py-24 md:mx-[15px] md:[width:calc(100%-30px)] mt-0">
      <h2 className="mb-12 text-[28px] font-light text-[#1d2830] sm:text-[34px]">How</h2>

      <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(390px,0.95fr)] lg:gap-20">
        <Image
          src="/images/purometallo/how.png"
          alt="Purometallo application diagram"
          width={1185}
          height={1035}
          className="h-auto w-full"
          sizes="(min-width: 1024px) 52vw, 100vw"
        />
        <div className="text-[#1d2830]">
          <h3 className="text-[22px] font-light mb-6">PUROMETALLO</h3>
          <ol className="space-y-4 text-[17px] leading-snug sm:text-lg">
            <li className="flex gap-1.5"><span className="font-semibold shrink-0">1.</span><span>Support Preparation</span></li>
            <li className="flex gap-1.5"><span className="font-semibold shrink-0">2.</span><span>Application of Purometallo Primer</span></li>
            <li className="flex gap-1.5"><span className="font-semibold shrink-0">3.</span><span>Application of Purometallo mix</span></li>
            <li className="flex gap-1.5"><span className="font-semibold shrink-0">4.</span><span>Polishing and protection with Purometallo Polish</span></li>
          </ol>
        </div>
      </div>

    </section>
  );
}

"use client";

import Link from "next/link";

export default function MicrotoppingHero() {
  return (
    <section className="relative w-full h-[48vh] min-h-[284px] md:h-[70vh] md:min-h-[378px] overflow-hidden md:mx-[15px] md:[width:calc(100%-30px)]">

      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/video/MIRCOTOPPING.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-black/30" />

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-5 sm:px-8 -mt-6 md:-mt-10">

        <nav className="mb-5 md:mb-7">
          <ol className="flex items-center gap-1.5 text-[11px] sm:text-[12px] text-white/70 tracking-wide">
            <li>
              <Link href="/" className="hover:text-white transition-colors">
                Home
              </Link>
            </li>
            <li className="text-white/50">/</li>
            <li className="text-white/50">
              <Link href="/floors" className="hover:text-white transition-colors">
                Floors
              </Link>
            </li>
            <li className="text-white/50">/</li>
            <li className="text-white/90">Microtopping</li>
          </ol>
        </nav>

        <h1 className="text-[42px] sm:text-[60px] md:text-[78px] lg:text-[90px] font-light text-white leading-none tracking-tight mb-5 md:mb-6">
          Microtopping
        </h1>

        <p className="text-[13px] sm:text-[15px] md:text-[16px] text-white/85 leading-relaxed max-w-[340px] sm:max-w-[480px] md:max-w-[540px] mb-8 md:mb-10">
          For interiors and exteriors, no stopping your ideas.
          <br className="hidden sm:block" />
          An innovative material that renews every surface with just 3 millimetres
        </p>

        <button
          onClick={() => {
            const vid = document.getElementById("microtopping-video");
            if (vid) vid.scrollIntoView({ behavior: "smooth" });
          }}
          className="flex flex-col items-center gap-1 group"
        >
          <span className="text-[11px] sm:text-[12px] tracking-[0.2em] text-white/80 group-hover:text-white transition-colors uppercase">
            Watch the
          </span>
          <span className="text-[11px] sm:text-[12px] tracking-[0.2em] text-white/80 group-hover:text-white transition-colors uppercase">
            Video
          </span>
          <div className="w-16 sm:w-20 h-px bg-white/50 mt-1" />
        </button>

      </div>
    </section>
  );
}

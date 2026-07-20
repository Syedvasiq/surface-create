export default function ArtOfHarmony() {
  return (
    <section
      className="relative md:mx-[15px] mt-[15px] mb-[5px] overflow-hidden py-[5px]"
      style={{ height: "580px" }}
    >
      {/* Background video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/video/surface-create-video.mp4" type="video/mp4" />
      </video>

      {/* Overlay — semi-transparent dark gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/60" />

      {/* Centred content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-6">

        {/* Eyebrow */}
        <p className="mb-4 text-[11px] uppercase tracking-[0.2em] font-semibold text-white/70">
          Surface Crete · Colour Collection
        </p>

        {/* Main heading */}
        <h2 className="mb-4 text-[32px] sm:text-[48px] font-light leading-tight text-white tracking-tight max-w-xl">
          The art of harmony
        </h2>

        {/* Divider */}
        <div className="mb-5 h-px w-12 bg-white/50" />

        {/* Subtitle */}
        <p className="mb-3 text-[16px] font-normal text-white/90 max-w-md leading-relaxed">
          Find out more about our new colour system
        </p>

        {/* Supporting description */}
        <p className="mb-8 text-[14px] text-white/65 max-w-lg leading-relaxed">
          A curated palette of tones inspired by natural textures and European design sensibility —
          crafted to bring balance and timeless elegance to every surface.
        </p>

        {/* CTA link */}
        <a
          href="/colours"
          className="inline-flex items-center gap-3 text-[13px] font-medium text-white/90 hover:text-white transition-colors group"
        >
          <span className="border-b border-white/40 pb-px group-hover:border-white transition-colors">
            Explore the collection
          </span>
          <span className="flex h-7 w-7 items-center justify-center rounded-full border border-white/50 group-hover:bg-white/20 transition-colors">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.8}
              stroke="currentColor"
              className="h-3.5 w-3.5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </span>
        </a>
      </div>
    </section>
  );
}


import Link from "next/link";

export default function ProjectStartCTA() {
  return (
    <section className="bg-[#1e2025] px-6 py-8 sm:py-10">
      <div className="mx-auto max-w-[900px] flex flex-col items-center text-center">

        {/* Heading */}
        <h2 className="text-[28px] sm:text-[36px] lg:text-[42px] font-light text-white leading-tight mb-4">
          Let&apos;s create something{" "}
          <span className="italic text-gray-300">extraordinary together</span>
        </h2>

        {/* Divider */}
        <div className="h-px w-12 bg-white/20 mb-4" />

        {/* Description */}
        <p className="text-[13px] text-gray-400 leading-relaxed max-w-lg mb-8">
          Whether you&apos;re renovating a home, designing a hotel or building a
          commercial space — our certified specialists are ready to bring your
          vision to life. Free consultation and site visit across India.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/contacts"
            className="inline-flex items-center gap-2 bg-white text-gray-900 text-[14px] font-semibold px-8 py-3 hover:bg-gray-100 transition-colors"
          >
            Get Free Consultation
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 border border-white/30 text-white text-[14px] font-normal px-8 py-3 hover:border-white/70 transition-colors"
          >
            View Our Projects
          </Link>
        </div>

      </div>
    </section>
  );
}


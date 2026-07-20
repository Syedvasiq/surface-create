const benefits = [
  {
    title: "No removal",
    description: "The floor can be restored without removal, fast and clean process.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-10 h-10">
        {/* Crossed-out removal / scissors-like icon */}
        <line x1="8" y1="40" x2="40" y2="8" strokeLinecap="round" />
        <line x1="8" y1="8" x2="40" y2="40" strokeLinecap="round" />
        <rect x="6" y="30" width="12" height="12" rx="1" />
        <rect x="30" y="6" width="12" height="12" rx="1" />
      </svg>
    ),
  },
  {
    title: "Minimal depth",
    description: "Minimal thickness, no change in slab level.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-10 h-10">
        {/* Depth / 3mm arrow icon */}
        <line x1="12" y1="10" x2="36" y2="10" strokeLinecap="round" />
        <line x1="24" y1="10" x2="24" y2="38" strokeLinecap="round" />
        <polyline points="18,32 24,38 30,32" strokeLinecap="round" strokeLinejoin="round" />
        <text x="26" y="22" fontSize="7" fill="currentColor" stroke="none" fontFamily="sans-serif">3mm</text>
      </svg>
    ),
  },
  {
    title: "No joints",
    description: "Can be applied without limits or interruptions depending on the existing surface.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-10 h-10">
        {/* Grid / tile pattern with no joints line */}
        <rect x="6" y="6" width="16" height="16" rx="1" />
        <rect x="26" y="6" width="16" height="16" rx="1" />
        <rect x="6" y="26" width="16" height="16" rx="1" />
        <rect x="26" y="26" width="16" height="16" rx="1" />
      </svg>
    ),
  },
  {
    title: "Continuity",
    description: "Can be applied with a continuous effect between floors and walls.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-10 h-10">
        {/* Corner / floor-to-wall continuity icon */}
        <polyline points="8,40 8,12 36,12" strokeLinecap="round" strokeLinejoin="round" />
        <line x1="8" y1="40" x2="36" y2="40" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Custom finishes",
    description: "Infinite colour possibilities with a variety of hand finished textures.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-10 h-10">
        {/* Colour swatch / fan icon */}
        <path d="M24 24 L10 14 A16 16 0 0 1 24 8 Z" />
        <path d="M24 24 L38 14 A16 16 0 0 0 24 8 Z" />
        <path d="M24 24 L10 34 A16 16 0 0 0 24 40 Z" />
        <path d="M24 24 L38 34 A16 16 0 0 1 24 40 Z" />
        <circle cx="24" cy="24" r="4" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
];

export default function MicrotoppingBenefits() {
  return (
    <section className="bg-[#f0ece6] px-6 sm:px-10 lg:px-16 py-14 md:mx-[15px] md:[width:calc(100%-30px)] mt-[15px]">

      <h2 className="text-[28px] sm:text-[34px] font-light text-gray-900 mb-10">
        Benefits
      </h2>

      <div className="flex flex-col divide-y divide-gray-300/60">
        {benefits.map((b) => (
          <div key={b.title} className="flex items-start gap-6 py-7">
            {/* Icon */}
            <div className="shrink-0 w-12 text-gray-700 mt-0.5">
              {b.icon}
            </div>
            {/* Text */}
            <div>
              <p className="text-[15px] font-semibold text-gray-900 mb-1">
                {b.title}
              </p>
              <p className="text-[14px] text-gray-600 leading-relaxed max-w-xl">
                {b.description}
              </p>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}

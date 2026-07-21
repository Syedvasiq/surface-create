const benefits = [
  {
    title: "No removal",
    description: "The floor can be restored without removal, fast and clean process",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-10 h-10">
        <rect x="8" y="8" width="32" height="32" rx="2" />
        <line x1="16" y1="16" x2="32" y2="32" strokeLinecap="round" />
        <line x1="32" y1="16" x2="16" y2="32" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Minimal depth",
    description: "Minimal thickness, no change in slab level",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-10 h-10">
        <line x1="12" y1="10" x2="36" y2="10" strokeLinecap="round" />
        <line x1="24" y1="10" x2="24" y2="38" strokeLinecap="round" />
        <polyline points="18,32 24,38 30,32" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "No joints",
    description: "Can be applied without limits or interruptions depending on the existing surface",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-10 h-10">
        <path d="M8 24 L40 24" strokeLinecap="round" />
        <path d="M24 8 L24 40" strokeLinecap="round" />
        <circle cx="24" cy="24" r="4" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    title: "Continuity",
    description: "Can be applied with a continuous effect between floors and walls",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-10 h-10">
        <path d="M8 8 L40 8 L40 40 L8 40 Z" strokeLinejoin="round" />
        <path d="M16 16 L32 16 L32 32 L16 32 Z" strokeLinejoin="round" />
        <line x1="24" y1="8" x2="24" y2="40" strokeLinecap="round" />
        <line x1="8" y1="24" x2="40" y2="24" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Custom finishes",
    description: "Infinite colour possibilities with a variety of hand finished textures",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-10 h-10">
        <path d="M24 24 L10 14 A16 16 0 0 1 24 8 Z" />
        <path d="M24 24 L38 14 A16 16 0 0 0 24 8 Z" />
        <path d="M24 24 L10 34 A16 16 0 0 0 24 40 Z" />
        <path d="M24 24 L38 34 A16 16 0 0 1 24 40 Z" />
        <circle cx="24" cy="24" r="4" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
];

export default function WallMicrotoppingBenefits() {
  return (
    <section className="bg-[#f0ece6] px-6 sm:px-10 lg:px-16 py-14 md:mx-[15px] md:[width:calc(100%-30px)] mt-0">
      <h2 className="text-[28px] sm:text-[34px] font-light text-gray-900 mb-10">Benefits</h2>
      <div className="flex flex-col divide-y divide-gray-300/60">
        {benefits.map((b) => (
          <div key={b.title} className="flex items-start gap-6 py-7">
            <div className="shrink-0 w-12 text-gray-700 mt-0.5">{b.icon}</div>
            <div>
              <p className="text-[15px] font-semibold text-gray-900 mb-1">{b.title}</p>
              <p className="text-[14px] text-gray-600 leading-relaxed max-w-xl">{b.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
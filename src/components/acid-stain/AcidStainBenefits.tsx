const benefits = [
  {
    title: "Unique and original",
    description: "Every acid stained surface is one of a kind — the result cannot be duplicated.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-10 h-10">
        <circle cx="24" cy="24" r="16" />
        <path d="M18 24 Q20 18 24 22 Q28 18 30 24 Q28 30 24 26 Q20 30 18 24Z" />
      </svg>
    ),
  },
  {
    title: "No joints",
    description: "Can be applied without limits or interruptions depending on the existing surface.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-10 h-10">
        <rect x="6" y="6" width="16" height="16" rx="1" />
        <rect x="26" y="6" width="16" height="16" rx="1" />
        <rect x="6" y="26" width="16" height="16" rx="1" />
        <rect x="26" y="26" width="16" height="16" rx="1" />
      </svg>
    ),
  },
  {
    title: "No removal",
    description: "The floor can be restored without removal, fast and clean process.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-10 h-10">
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
        <line x1="12" y1="10" x2="36" y2="10" strokeLinecap="round" />
        <line x1="24" y1="10" x2="24" y2="38" strokeLinecap="round" />
        <polyline points="18,32 24,38 30,32" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "High wear resistance",
    description: "Durable surface that withstands daily foot and vehicle traffic.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-10 h-10">
        <path d="M24 6 L38 18 L38 36 Q24 44 10 36 L10 18 Z" strokeLinejoin="round" />
        <polyline points="17,24 22,29 31,19" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export default function AcidStainBenefits() {
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

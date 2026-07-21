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
    title: "Continuity",
    description: "Can be applied with a continuous effect",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-10 h-10">
        <path d="M8 8 L40 8 L40 40 L8 40 Z" strokeLinejoin="round" />
        <line x1="24" y1="8" x2="24" y2="40" strokeLinecap="round" />
        <line x1="8" y1="24" x2="40" y2="24" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Speed of laying",
    description: "Fast application process",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-10 h-10">
        <circle cx="24" cy="24" r="16" />
        <polyline points="24,14 24,24 32,28" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export default function ConcreteOptikBenefits() {
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

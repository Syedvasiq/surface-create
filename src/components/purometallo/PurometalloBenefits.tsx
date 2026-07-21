const benefits = [
  {
    title: "Super real effect",
    description: "Achieves an authentic metallic appearance indistinguishable from real metal surfaces.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-10 h-10">
        <circle cx="24" cy="24" r="16" />
        <path d="M16 24 L21 29 L32 18" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "No removal",
    description: "You can renovate quickly with minimum disruption and waste without having to remove existing substrates.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-10 h-10">
        <rect x="8" y="8" width="32" height="32" rx="2" />
        <line x1="16" y1="16" x2="32" y2="32" strokeLinecap="round" />
        <line x1="32" y1="16" x2="16" y2="32" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Continuity",
    description: "A seamless, joint-free surface that flows across walls and furniture without interruption.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-10 h-10">
        <path d="M8 24 L40 24" strokeLinecap="round" />
        <path d="M24 8 L24 40" strokeLinecap="round" />
        <circle cx="24" cy="24" r="4" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    title: "Minimal depth",
    description: "No change in floor or wall level during renovation — applied in just a few millimetres of thickness.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-10 h-10">
        <line x1="12" y1="10" x2="36" y2="10" strokeLinecap="round" />
        <line x1="24" y1="10" x2="24" y2="38" strokeLinecap="round" />
        <polyline points="18,32 24,38 30,32" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Creative freedom",
    description: "The applicator shapes the finish using different tools to achieve tactile, foil or oxide chromatic effects.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-10 h-10">
        <path d="M12 36 L20 20 L36 12 L28 28 Z" strokeLinejoin="round" />
        <circle cx="24" cy="24" r="3" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
];

export default function PurometalloBenefits() {
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

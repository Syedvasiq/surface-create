const benefits = [
  {
    title: "No removal",
    description: "The floor can be restored without removal, fast and clean process.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={1.4} className="w-10 h-10">
        {/* Trowel blade */}
        <path d="M10 38 L28 14 L36 10 L32 18 L10 38Z" strokeLinejoin="round" />
        {/* Trowel handle */}
        <line x1="28" y1="14" x2="38" y2="8" strokeLinecap="round" />
        {/* Strike-through diagonal */}
        <line x1="6" y1="10" x2="42" y2="40" strokeLinecap="round" strokeWidth={1.8} />
      </svg>
    ),
  },
  {
    title: "Low-thickness Venetian microterrazzo",
    description: "No change in floor profile when used as part of a renovation project.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={1.4} className="w-10 h-10">
        {/* Top horizontal line */}
        <line x1="6" y1="16" x2="42" y2="16" strokeLinecap="round" />
        {/* Downward arrow */}
        <line x1="14" y1="16" x2="14" y2="30" strokeLinecap="round" />
        <polyline points="10,26 14,31 18,26" strokeLinecap="round" strokeLinejoin="round" />
        {/* 8mm label */}
        <text x="18" y="26" fontSize="7" fill="currentColor" stroke="none" fontFamily="sans-serif" fontWeight="400">8 mm</text>
      </svg>
    ),
  },
  {
    title: "No joints",
    description: "Can be applied without limits or interruptions depending on the existing surface.",
    icon: (
      <svg viewBox="0 0 48 48" fill="currentColor" stroke="none" className="w-10 h-10">
        {[8,14,20,26,32,38].map(x =>
          [8,14,20,26,32,38].map(y => (
            <circle key={`${x}-${y}`} cx={x} cy={y} r={1.2} opacity={0.5} />
          ))
        )}
      </svg>
    ),
  },
  {
    title: "Custom finishes",
    description: "Infinite colour possibilities with a variety of Italian marble.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={1.4} className="w-10 h-10">
        {/* Colour swatch fan — 4 petals */}
        <path d="M24 26 L10 16 A16 16 0 0 1 24 10 Z" />
        <path d="M24 26 L38 16 A16 16 0 0 0 24 10 Z" />
        <path d="M24 26 L10 36 A16 16 0 0 0 24 42 Z" />
        <path d="M24 26 L38 36 A16 16 0 0 1 24 42 Z" />
        <circle cx="24" cy="26" r="3.5" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    title: "Speed of laying",
    description: "Fast application process.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={1.4} className="w-10 h-10">
        <circle cx="24" cy="24" r="15" />
        {/* Hour hand ~10 o'clock */}
        <line x1="24" y1="24" x2="16" y2="14" strokeLinecap="round" strokeWidth={1.6} />
        {/* Minute hand ~6 o'clock */}
        <line x1="24" y1="24" x2="24" y2="34" strokeLinecap="round" strokeWidth={1.4} />
        {/* Center dot */}
        <circle cx="24" cy="24" r="1.5" fill="currentColor" stroke="none" />
        {/* Tick marks */}
        <line x1="24" y1="10" x2="24" y2="13" strokeLinecap="round" />
        <line x1="38" y1="24" x2="35" y2="24" strokeLinecap="round" />
        <line x1="24" y1="38" x2="24" y2="35" strokeLinecap="round" />
        <line x1="10" y1="24" x2="13" y2="24" strokeLinecap="round" />
      </svg>
    ),
  },
];

export default function LixioBenefits() {
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

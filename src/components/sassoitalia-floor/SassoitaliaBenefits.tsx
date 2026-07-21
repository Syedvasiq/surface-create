const benefits = [
  {
    title: "Custom finishes",
    description: "Infinite variety of colours and combinations.",
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
  {
    title: "Speed of laying",
    description: "Fast application process.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-10 h-10">
        <circle cx="24" cy="24" r="16" />
        <polyline points="24,14 24,24 32,28" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Low environmental impact",
    description: "Uses natural local aggregates reducing transport and environmental footprint.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-10 h-10">
        <circle cx="24" cy="24" r="16" />
        <path d="M16 28 Q20 18 24 22 Q28 26 32 16" strokeLinecap="round" />
        <path d="M12 32 Q18 24 24 28 Q30 32 36 22" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Resistant to freeze / thaw cycles",
    description: "Engineered for exterior use in all climates and weather conditions.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-10 h-10">
        <line x1="24" y1="6" x2="24" y2="42" strokeLinecap="round" />
        <line x1="6" y1="24" x2="42" y2="24" strokeLinecap="round" />
        <line x1="11" y1="11" x2="37" y2="37" strokeLinecap="round" />
        <line x1="37" y1="11" x2="11" y2="37" strokeLinecap="round" />
        <circle cx="24" cy="24" r="4" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
];

export default function SassoitaliaBenefits() {
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

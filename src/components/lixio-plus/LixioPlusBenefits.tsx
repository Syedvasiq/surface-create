const benefits = [
  {
    title: "Custom finishes",
    description: "Infinite colour possibilities with a variety of Italian marble.",
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
    title: "Low environmental impact",
    description: "Use of local marble aggregates reduces transport and environmental footprint.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-10 h-10">
        <circle cx="24" cy="24" r="16" />
        <path d="M16 28 Q20 18 24 22 Q28 26 32 16" strokeLinecap="round" />
        <path d="M12 32 Q18 24 24 28 Q30 32 36 22" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "High wear resistance",
    description: "Exceptional durability for residential and commercial floors under heavy use.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-10 h-10">
        <path d="M24 6 L38 18 L38 36 Q24 44 10 36 L10 18 Z" strokeLinejoin="round" />
        <polyline points="17,24 22,29 31,19" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export default function LixioPlusBenefits() {
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

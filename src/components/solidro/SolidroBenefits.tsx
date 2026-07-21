const benefits = [
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
    title: "Minimal thickness",
    description: "No change in slab level.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-10 h-10">
        <line x1="12" y1="10" x2="36" y2="10" strokeLinecap="round" />
        <line x1="24" y1="10" x2="24" y2="38" strokeLinecap="round" />
        <polyline points="18,32 24,38 30,32" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "No removal of existing floor",
    description: "Can be applied directly over existing surfaces.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-10 h-10">
        <rect x="8" y="8" width="32" height="32" rx="2" />
        <line x1="16" y1="16" x2="32" y2="32" strokeLinecap="round" />
        <line x1="32" y1="16" x2="16" y2="32" strokeLinecap="round" />
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
  {
    title: "Waterproof",
    description: "Resistant to water and moisture.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-10 h-10">
        <path d="M24 6 C14 6 6 14 6 24 C6 34 14 42 24 42 C34 42 42 34 42 24 C42 14 34 6 24 6 Z" />
        <path d="M24 12 C18 12 12 18 12 24 C12 30 18 36 24 36 C30 36 36 30 36 24 C36 18 30 12 24 12 Z" />
        <path d="M24 18 C20 18 18 20 18 24 C18 28 20 30 24 30 C28 30 30 28 30 24 C30 20 28 18 24 18 Z" />
      </svg>
    ),
  },
  {
    title: "No joints",
    description: "Continuous seamless surface.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-10 h-10">
        <path d="M8 24 L40 24" strokeLinecap="round" />
        <path d="M24 8 L24 40" strokeLinecap="round" />
        <circle cx="24" cy="24" r="4" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
];

export default function SolidroBenefits() {
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
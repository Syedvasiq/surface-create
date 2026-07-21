const benefits = [
  {
    title: "Long-lasting",
    description: "Durable natural finish that stands the test of time.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-10 h-10">
        <path d="M24 6 L38 18 L38 36 Q24 44 10 36 L10 18 Z" strokeLinejoin="round" />
        <polyline points="17,24 22,29 31,19" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Breathability",
    description: "It regulates humidity levels in the environment",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-10 h-10">
        <path d="M24 6 C14 6 6 14 6 24 C6 34 14 42 24 42 C34 42 42 34 42 24 C42 14 34 6 24 6 Z" />
        <path d="M24 12 C18 12 12 18 12 24 C12 30 18 36 24 36 C30 36 36 30 36 24 C36 18 30 12 24 12 Z" />
        <path d="M24 18 C20 18 18 20 18 24 C18 28 20 30 24 30 C28 30 30 28 30 24 C30 20 28 18 24 18 Z" />
      </svg>
    ),
  },
  {
    title: "Mould-proof",
    description: "As a natural biocide, it prevents the growth of mould",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-10 h-10">
        <circle cx="24" cy="24" r="16" />
        <line x1="16" y1="16" x2="32" y2="32" strokeLinecap="round" />
        <line x1="32" y1="16" x2="16" y2="32" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Sustainable",
    description: "Recycled materials such as rice husk and hemp are used",
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
    title: "Custom finishes",
    description: "Wide choice of colours and textures",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-10 h-10">
        <path d="M8 8 L40 8 L40 40 L8 40 Z" strokeLinejoin="round" />
        <path d="M16 16 L32 16 L32 32 L16 32 Z" strokeLinejoin="round" />
        <circle cx="24" cy="24" r="4" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
];

export default function TerraeCalceBenefits() {
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

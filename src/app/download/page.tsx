import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Download",
  description:
    "Download Surface Crete catalogues, product data sheets and technical documentation for microcement, decorative concrete and polished concrete systems.",
  alternates: { canonical: "/download" },
};

const categories = [
  {
    title: "Catalogues",
    description:
      "Browse our full product catalogues covering all Surface Crete surface systems — from microcement and decorative concrete to polished concrete and wall finishes.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.4} stroke="currentColor" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
      </svg>
    ),
    items: [
      { name: "Surface Crete Full Product Catalogue", size: "PDF · 8.2 MB", href: "#" },
      { name: "Microcement Systems Catalogue", size: "PDF · 4.1 MB", href: "#" },
      { name: "Decorative Concrete Catalogue", size: "PDF · 3.8 MB", href: "#" },
      { name: "Colour Collection Catalogue", size: "PDF · 5.6 MB", href: "#" },
    ],
  },
  {
    title: "Product Line Materials",
    description:
      "Detailed product information sheets, application guides and finish references for each Surface Crete product line.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.4} stroke="currentColor" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
      </svg>
    ),
    items: [
      { name: "Microtopping Product Data Sheet", size: "PDF · 1.2 MB", href: "#" },
      { name: "Nuvolato Architop Data Sheet", size: "PDF · 980 KB", href: "#" },
      { name: "Lixio & Lixio+ Data Sheet", size: "PDF · 1.1 MB", href: "#" },
      { name: "Rasico Data Sheet", size: "PDF · 890 KB", href: "#" },
      { name: "Stamped Concrete Data Sheet", size: "PDF · 760 KB", href: "#" },
      { name: "Polished Concrete System Sheet", size: "PDF · 1.4 MB", href: "#" },
    ],
  },
  {
    title: "Technical Documentation",
    description:
      "Installation guides, substrate preparation manuals, maintenance guidelines and application specifications for certified applicators.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.4} stroke="currentColor" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
      </svg>
    ),
    items: [
      { name: "Surface Preparation & Primer Guide", size: "PDF · 2.1 MB", href: "#" },
      { name: "Microcement Application Manual", size: "PDF · 3.4 MB", href: "#" },
      { name: "Waterproofing System Guide", size: "PDF · 1.8 MB", href: "#" },
      { name: "Maintenance & Care Guide", size: "PDF · 920 KB", href: "#" },
      { name: "Colour System Technical Guide", size: "PDF · 1.5 MB", href: "#" },
    ],
  },
];

export default function DownloadPage() {
  return (
    <main className="flex flex-1 flex-col bg-white md:mx-[15px] md:w-[calc(100%-30px)]">

      {/* Hero */}
      <div className="border-b border-gray-200 px-6 py-14 text-center sm:px-10 lg:px-12 lg:py-[72px]">
        <h1 className="text-[38px] sm:text-[48px] font-light text-gray-900 mb-4">Download</h1>
        <p className="text-[14px] text-gray-500 max-w-2xl mx-auto leading-relaxed">
          Download our catalogues and technical data sheets to choose the solution
          that best suits your needs.
        </p>
      </div>

      <div className="mx-auto flex w-full max-w-[1370px] flex-col gap-16 px-6 py-16 sm:px-10 lg:px-12 lg:py-20">

        {categories.map((cat) => (
          <div key={cat.title} className="border-t border-gray-200 pt-10">

            {/* Category header */}
            <div className="mb-9 flex items-start gap-5">
              <div className="shrink-0 text-gray-700 mt-1">{cat.icon}</div>
              <div>
                <h2 className="text-[22px] font-light text-gray-900 mb-2">{cat.title}</h2>
                <p className="text-[14px] text-gray-500 leading-relaxed max-w-2xl">{cat.description}</p>
              </div>
            </div>

            {/* File list */}
            <div className="flex flex-col divide-y divide-gray-100">
              {cat.items.map((item) => (
                <div key={item.name} className="flex items-center justify-between gap-4 py-4">
                  <div className="flex items-center gap-3 min-w-0">
                    {/* PDF icon */}
                    <span className="shrink-0 flex h-9 w-9 items-center justify-center bg-gray-100 text-gray-500">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                      </svg>
                    </span>
                    <div className="min-w-0">
                      <p className="text-[14px] font-medium text-gray-900 truncate">{item.name}</p>
                      <p className="text-[12px] text-gray-400">{item.size}</p>
                    </div>
                  </div>
                  <a
                    href={item.href}
                    className="shrink-0 inline-flex items-center gap-2 text-[13px] font-medium text-gray-800 border border-gray-300 px-4 py-2 hover:bg-gray-900 hover:text-white hover:border-gray-900 transition-colors"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                    </svg>
                    Download
                  </a>
                </div>
              ))}
            </div>
          </div>
        ))}

      </div>
    </main>
  );
}

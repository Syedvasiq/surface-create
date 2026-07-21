import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contacts",
  description:
    "Get in touch with Surface Crete. Request a free consultation, book a site visit or find our showroom in Bangalore, India.",
  alternates: { canonical: "/contacts" },
};

export default function ContactsPage() {
  return (
    <main className="flex flex-1 flex-col bg-white">

      {/* Hero heading */}
      <div className="border-b border-gray-200 py-12 px-6 text-center">
        <h1 className="text-[38px] sm:text-[48px] font-light text-gray-900 mb-4">Contacts</h1>
        <p className="text-[14px] text-gray-500 max-w-xl mx-auto leading-relaxed">
          Do you have any requests or queries? Want more information about our services?
          Fill in the form below or reach us directly — we&apos;re here to help.
        </p>
      </div>

      <div className="max-w-[1200px] mx-auto w-full px-6 sm:px-10 lg:px-12 py-14 grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20">

        {/* Left — Contact form */}
        <div>
          <h2 className="text-[22px] font-light text-gray-900 mb-8">Send us a message</h2>
          <ContactForm />
        </div>

        {/* Right — Info + Map */}
        <div className="flex flex-col gap-10">

          {/* Address block */}
          <div>
            <h2 className="text-[22px] font-light text-gray-900 mb-6">Our office</h2>
            <div className="flex flex-col gap-6">

              <div className="flex items-start gap-4">
                <span className="mt-1 shrink-0 text-gray-400">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                </span>
                <div>
                  <p className="text-[13px] font-semibold text-gray-900 uppercase tracking-wide mb-1">Address</p>
                  <p className="text-[14px] text-gray-600 leading-relaxed">
                    Surface Crete<br />
                    No. 42, MG Road<br />
                    Bengaluru, Karnataka 560001<br />
                    India
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="mt-1 shrink-0 text-gray-400">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                </span>
                <div>
                  <p className="text-[13px] font-semibold text-gray-900 uppercase tracking-wide mb-1">Phone</p>
                  <a href="tel:+919999999999" className="text-[14px] text-gray-600 hover:text-gray-900 transition-colors">
                    +91 99999 99999
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="mt-1 shrink-0 text-gray-400">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                </span>
                <div>
                  <p className="text-[13px] font-semibold text-gray-900 uppercase tracking-wide mb-1">Email</p>
                  <a href="mailto:info@surfacecrete.com" className="text-[14px] text-gray-600 hover:text-gray-900 transition-colors">
                    info@surfacecrete.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="mt-1 shrink-0 text-gray-400">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </span>
                <div>
                  <p className="text-[13px] font-semibold text-gray-900 uppercase tracking-wide mb-1">Showroom Hours</p>
                  <p className="text-[14px] text-gray-600 leading-relaxed">
                    Mon – Sat: 9:00 AM – 6:00 PM<br />
                    Sunday: By appointment only
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Google Map — Bangalore MG Road */}
          <div>
            <p className="text-[13px] font-semibold text-gray-900 uppercase tracking-wide mb-3">Find us</p>
            <div className="w-full overflow-hidden border border-gray-200" style={{ height: 320 }}>
              <iframe
                title="Surface Crete Bangalore Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.9274491787564!2d77.60631677507593!3d12.97538668733617!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sMG%20Road%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="320"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}

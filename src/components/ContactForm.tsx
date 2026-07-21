"use client";

import { useState } from "react";

const services = [
  "Microcement",
  "Micro Topping",
  "Decorative Concrete",
  "Polished Concrete",
  "Textured Wall Finishes",
  "Decorative Wall Coatings",
  "Pool & Outdoor Surfaces",
  "Other",
];

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-start gap-4 py-10">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-900 text-white">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
          </svg>
        </div>
        <h3 className="text-[20px] font-light text-gray-900">Thank you for your message</h3>
        <p className="text-[14px] text-gray-600 leading-relaxed max-w-sm">
          We&apos;ve received your enquiry and will get back to you within 1 business day.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="text-[13px] text-gray-500 underline underline-offset-4 hover:text-gray-900 transition-colors mt-2"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">

      {/* Name row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="firstName" className="text-[12px] font-semibold uppercase tracking-wide text-gray-500">
            First name <span className="text-gray-900">*</span>
          </label>
          <input
            id="firstName"
            name="firstName"
            type="text"
            required
            placeholder="First name"
            className="border border-gray-300 px-4 py-3 text-[14px] text-gray-800 placeholder:text-gray-400 outline-none focus:border-gray-900 transition-colors bg-white"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="lastName" className="text-[12px] font-semibold uppercase tracking-wide text-gray-500">
            Last name <span className="text-gray-900">*</span>
          </label>
          <input
            id="lastName"
            name="lastName"
            type="text"
            required
            placeholder="Last name"
            className="border border-gray-300 px-4 py-3 text-[14px] text-gray-800 placeholder:text-gray-400 outline-none focus:border-gray-900 transition-colors bg-white"
          />
        </div>
      </div>

      {/* Email */}
      <div className="flex flex-col gap-1.5">
        <label htmlFor="email" className="text-[12px] font-semibold uppercase tracking-wide text-gray-500">
          Email <span className="text-gray-900">*</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          placeholder="your@email.com"
          className="border border-gray-300 px-4 py-3 text-[14px] text-gray-800 placeholder:text-gray-400 outline-none focus:border-gray-900 transition-colors bg-white"
        />
      </div>

      {/* Phone */}
      <div className="flex flex-col gap-1.5">
        <label htmlFor="phone" className="text-[12px] font-semibold uppercase tracking-wide text-gray-500">
          Phone
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          placeholder="+91 99999 99999"
          className="border border-gray-300 px-4 py-3 text-[14px] text-gray-800 placeholder:text-gray-400 outline-none focus:border-gray-900 transition-colors bg-white"
        />
      </div>

      {/* Service interest */}
      <div className="flex flex-col gap-1.5">
        <label htmlFor="service" className="text-[12px] font-semibold uppercase tracking-wide text-gray-500">
          Service of interest
        </label>
        <select
          id="service"
          name="service"
          className="border border-gray-300 px-4 py-3 text-[14px] text-gray-800 outline-none focus:border-gray-900 transition-colors bg-white appearance-none"
        >
          <option value="">Select a service…</option>
          {services.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
      </div>

      {/* City */}
      <div className="flex flex-col gap-1.5">
        <label htmlFor="city" className="text-[12px] font-semibold uppercase tracking-wide text-gray-500">
          City / Location
        </label>
        <input
          id="city"
          name="city"
          type="text"
          placeholder="Your city"
          className="border border-gray-300 px-4 py-3 text-[14px] text-gray-800 placeholder:text-gray-400 outline-none focus:border-gray-900 transition-colors bg-white"
        />
      </div>

      {/* Message */}
      <div className="flex flex-col gap-1.5">
        <label htmlFor="message" className="text-[12px] font-semibold uppercase tracking-wide text-gray-500">
          Message <span className="text-gray-900">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Tell us about your project…"
          className="border border-gray-300 px-4 py-3 text-[14px] text-gray-800 placeholder:text-gray-400 outline-none focus:border-gray-900 transition-colors bg-white resize-none"
        />
      </div>

      {/* Privacy */}
      <label className="flex items-start gap-3 cursor-pointer">
        <input
          type="checkbox"
          required
          className="mt-0.5 shrink-0 h-4 w-4 border border-gray-300 accent-gray-900"
        />
        <span className="text-[12px] text-gray-500 leading-relaxed">
          I have read and accept the{" "}
          <a href="/privacy" className="underline underline-offset-2 hover:text-gray-900 transition-colors">
            Privacy Policy
          </a>
        </span>
      </label>

      {/* Submit */}
      <button
        type="submit"
        className="mt-2 inline-flex items-center justify-center gap-2 bg-gray-900 text-white text-[15px] font-semibold px-10 py-4 hover:bg-gray-700 transition-colors w-full sm:w-fit"
      >
        Send message
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-4 h-4">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
        </svg>
      </button>

    </form>
  );
}

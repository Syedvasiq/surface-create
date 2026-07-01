import Image from "next/image";
import Link from "next/link";

export default function AboutUs() {
  return (
    <section className="md:mx-[15px] mt-[15px] mb-[5px] bg-white py-10 px-4 sm:px-8 lg:px-0">

      {/* Top text block */}
      <div className="mb-10">
        <h2 className="mb-2 text-[32px] lg:text-[40px] font-light leading-tight text-gray-900 max-w-2xl">
          Surface Kreate: seamless surfaces,{" "}
          <span className="italic">endless possibilities</span>
        </h2>
        <p className="text-[14px] text-gray-500 font-normal">
          Get inspired by{" "}
          <span className="italic text-gray-700">craftsmanship &amp; design</span>
        </p>
      </div>

      {/* Two-column layout — image left, content right */}
      <div className="flex flex-col lg:flex-row gap-10 lg:gap-14 items-start">

        {/* Image */}
        <div className="w-full lg:w-[48%] shrink-0">
          <div className="relative w-full" style={{ aspectRatio: "4/3" }}>
            <Image
              src="/images/about-us-section-image.jpg"
              alt="Surface Kreate — premium microcement and decorative concrete surfaces"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 flex flex-col justify-center">

          {/* Lead paragraph */}
          <p className="mb-5 text-[18px] lg:text-[20px] font-light leading-relaxed text-gray-900">
            <strong className="font-semibold">Surface Kreate</strong> interprets{" "}
            <sup className="text-[12px] font-normal text-gray-500">microcement</sup>{" "}
            as a creative, versatile and elegant material, perfect for crafting seamless floors,
            walls and surfaces that retain their beauty across decades.
          </p>

          {/* Divider */}
          <div className="mb-5 h-px w-10 bg-gray-300" />

          {/* Body paragraph */}
          <p className="mb-6 text-[14px] leading-relaxed text-gray-600">
            This is <strong className="font-semibold text-gray-800">Surface Kreate&apos;s philosophy</strong> — the synthesis
            of European design expertise and deep knowledge of materials, technologies and finishing
            systems. From raw material to the final installation, we maintain complete and rigorous
            quality control, supported by a skilled team and a wide network of trained applicators
            across India.
          </p>

          {/* Second body paragraph */}
          <p className="mb-6 text-[14px] leading-relaxed text-gray-600">
            Whether it&apos;s a luxury residence, a boutique hotel or a commercial space, we bring
            the same dedication to every project — seamless finishes, zero grout lines, and
            surfaces designed to inspire.
          </p>

          {/* Third body paragraph — split into two */}
          <p className="mb-5 text-[14px] leading-relaxed text-gray-600">
            Our surfaces are engineered to adapt, equally at home on floors, walls, ceilings
            and furniture, offering a continuous visual language throughout any space. With
            minimal maintenance requirements and outstanding resistance to moisture, heat and
            daily wear, Surface Kreate finishes are built to perform as beautifully as they look,
            year after year.
          </p>

          <p className="mb-8 text-[14px] leading-relaxed text-gray-600">
            Every application is handled by our certified specialists who bring precision and
            artistry to each project, ensuring a flawless result that exceeds expectations.
            Our commitment to innovation keeps us at the forefront of decorative surface design.
          </p>

          {/* CTA */}
          <Link
            href="/company"
            className="inline-flex items-center gap-3 text-[13px] font-medium text-gray-800 hover:text-gray-900 transition-colors group w-fit"
          >
            <span className="border-b border-gray-400 pb-px group-hover:border-gray-900 transition-colors">
              Discover our story
            </span>
            <span className="flex h-7 w-7 items-center justify-center rounded-full border border-gray-400 group-hover:border-gray-900 group-hover:bg-gray-900 group-hover:text-white transition-colors">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.8}
                stroke="currentColor"
                className="h-3.5 w-3.5"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}

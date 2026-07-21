import Image from "next/image";

export default function ConcreteOptikDesignSections() {
  return (
    <section className="bg-white md:mx-[15px] md:[width:calc(100%-30px)] mt-[15px]">

      {/* 1. Innovative material — left content, right image */}
      <div className="flex flex-col md:flex-row md:items-start gap-10 md:gap-0 py-10 md:py-14">
        <div className="w-full md:w-[50%] shrink-0 px-5 sm:px-10 lg:px-14 py-10 md:py-0">
          <p className="text-[11px] tracking-widest text-gray-500 uppercase mb-3">Innovation</p>
          <h3 className="text-[22px] sm:text-[26px] lg:text-[30px] font-light text-gray-900 leading-snug mb-5">Innovative material</h3>
          <div className="space-y-4">
            <p className="text-[14px] sm:text-[15px] text-gray-700 leading-[1.85]">Concrete Optik is a cement polymer coating that allows to obtain, in just 2 mm thickness, realistic and uniform concrete walls with a fair-faced effect. Because of its seamless nature, Concrete Optik can be used to coat any vertical surface: walls, tiles and even pieces of furniture or curved surfaces, both indoor and outdoor.</p>
            <p className="text-[14px] sm:text-[15px] text-gray-700 leading-[1.85]">Such low thickness makes Concrete Optik ideal in case of restructuring, since it can be applied without demolishing the preexisting surface.</p>
          </div>
        </div>
        <div className="w-full md:w-[50%] relative aspect-[4/3] md:aspect-auto md:h-[420px] lg:h-[480px] overflow-hidden shrink-0">
          <Image src="/images/concrete-optik/innovative-material.jpg" alt="Concrete Optik innovative material" fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
        </div>
      </div>

      {/* 2. Maximum expressive freedom — left image, right content */}
      <div className="flex flex-col md:flex-row-reverse md:items-start gap-10 md:gap-0 py-10 md:py-14 border-t border-gray-100">
        <div className="w-full md:w-[50%] shrink-0 px-5 sm:px-10 lg:px-14 py-10 md:py-0">
          <p className="text-[11px] tracking-widest text-gray-500 uppercase mb-3">Design</p>
          <h3 className="text-[22px] sm:text-[26px] lg:text-[30px] font-light text-gray-900 leading-snug mb-5">Maximum expressive freedom</h3>
          <div className="space-y-4">
            <p className="text-[14px] sm:text-[15px] text-gray-700 leading-[1.85]">Highly customizable thanks to a wide range of colours, Concrete Optik is a solution designed for concrete perfectionists who aim at transforming any space by recreating the rigorous and industrial look of fair-faced concrete in just 2 mm thickness.</p>
            <p className="text-[14px] sm:text-[15px] text-gray-700 leading-[1.85]">The handcrafted application performed by Ideal Work's authorized applicators allows to obtain an always custom-made result; stores, restaurants, hotels, offices, showrooms, museums and private houses will benefit enormously from this innovative procedure.</p>
          </div>
        </div>
        <div className="w-full md:w-[50%] relative aspect-[4/3] md:aspect-auto md:h-[420px] lg:h-[480px] overflow-hidden shrink-0">
          <Image src="/images/concrete-optik/expressive-freedom.jpg" alt="Concrete Optik expressive freedom" fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
        </div>
      </div>

      {/* 3. Quick application — left content, right image */}
      <div className="flex flex-col md:flex-row md:items-start gap-10 md:gap-0 py-10 md:py-14 border-t border-gray-100">
        <div className="w-full md:w-[50%] shrink-0 px-5 sm:px-10 lg:px-14 py-10 md:py-0">
          <p className="text-[11px] tracking-widest text-gray-500 uppercase mb-3">Efficiency</p>
          <h3 className="text-[22px] sm:text-[26px] lg:text-[30px] font-light text-gray-900 leading-snug mb-5">Quick application, lower costs</h3>
          <div className="space-y-4">
            <p className="text-[14px] sm:text-[15px] text-gray-700 leading-[1.85]">Concrete Optik's application procedure requires about 48 hours; once the surface has been prepared, the Concrete Optik mix is applied. Some special PVC sheets of the same size as the panels the architect wants to create are then positioned.</p>
            <p className="text-[14px] sm:text-[15px] text-gray-700 leading-[1.85]">The protective treatment gives the finishing touch. This innovative technique allows to optimize both the installation time and costs as compared to the traditional procedure.</p>
          </div>
        </div>
        <div className="w-full md:w-[50%] relative aspect-[4/3] md:aspect-auto md:h-[420px] lg:h-[480px] overflow-hidden shrink-0">
          <Image src="/images/concrete-optik/quick-application.jpg" alt="Concrete Optik quick application" fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
        </div>
      </div>

    </section>
  );
}

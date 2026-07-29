"use client";

export default function Hero() {
  return (
    <section className="relative h-[500px] md:h-screen overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/herovideo.mp4" type="video/mp4" />
      </video>

      {/* Luxury Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-transparent"></div>

      {/* Hero Content */}
      <div className="relative z-20 flex h-full items-end px-5 pb-16 md:px-12 lg:px-20 lg:pb-24">
        <div className="max-w-3xl text-left text-white">
          <span className="inline-flex rounded-full border border-[#C8A45D]/40 bg-black/20 backdrop-blur-md px-5 py-2 text-xs font-semibold tracking-[4px] uppercase text-[#E6C16A]">
            BUILD • RENOVATE • REDESIGN       </span>

          <h1
            className="mt-6 text-3xl md:text-6xl  font-extrabold leading-[1.5] md:leading-[1.1]"
           style={{ fontFamily: "var(--font-cinzel)" }}
          >
            From Empty Plots

            <span className="block text-[#D4AF37]">
              To Beautiful Homes
            </span>
          </h1>

          <p
            className="hidden md:block mt-6 max-w-2xl text-lg leading-8 text-gray-300 font-poppins"
          >
            Whether you own a plot or are looking to buy, sell, renovate, or redesign a property, Baba Associates provides end-to-end solutions with quality construction and trusted expertise.
          </p>

          <div className="mt-10 flex flex-wrap gap-5">
            <button className="rounded-md bg-[#C8A45D] px-8 py-4 font-semibold text-black transition-all duration-300 hover:bg-[#D4AF37]">
              Contact us
            </button>

            <button className="rounded-md border border-[#C8A45D] px-8 py-4 font-semibold text-[#D4AF37] transition-all duration-300 hover:bg-[#C8A45D] hover:text-black">
            Services
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
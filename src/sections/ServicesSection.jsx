"use client";

import Image from "next/image";
import {
  Building2,
  Home,
  KeyRound,
  PencilRuler,
  PaintRoller,
  HousePlus,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    icon: Building2,
    title: "New Construction",
    description: "Custom-built homes on your new plot, designed with precision, quality & luxury.",
    image: "/services/newconstruction.webp",
  },
  {
    icon: Home,
    title: "New Home Sales",
    description: "Explore our exclusive range of ready-to-move, premium homes for sale.",
    image: "/services/newhome.webp",
  },
  {
    icon: KeyRound,
    title: "Resale Properties",
    description: "Handpicked pre-owned homes, bought or sold with complete transparency.",
    image: "/services/resale.webp",
  },
  {
    icon: PencilRuler,
    title: "Home Redesign",
    description: "Give your home a stunning new look with our expert design solutions.",
    image: "/services/redesign.webp",
  },
  {
    icon: PaintRoller,
    title: "Renovation",
    description: "Upgrade, modernize & transform your space with our renovation expertise.",
    image: "/services/renovate.webp",
  },
  {
    icon: HousePlus,
    title: "Build On Your Plot",
    description: "Turn your own plot into your dream home with our end-to-end construction.",
    image: "/services/buildonyourplot.webp",
  },
];

export default function ServicesSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center max-w-6xl mx-auto mb-16">
          <span className="uppercase tracking-[4px] text-gold-600 font-semibold text-sm">
            Our Services
          </span>

          <div className="flex items-center justify-center gap-3 mt-4">
            <span className="h-px w-16 bg-gold-300" />
            <span className="h-2 w-2 rotate-45 bg-gold-400" />
            <span className="h-px w-16 bg-gold-300" />
          </div>

          <h2 className="mt-6 text-3xl md:text-5xl font-cinzel font-semibold text-gray-900">
            Premium Services. Exceptional Living.
          </h2>

          <div className="flex items-center justify-center mt-5">
            <span className="h-2 w-2 rotate-45 bg-gold-400" />
          </div>

          <p className="mt-5 text-gray-500 leading-7">
            From a brand-new home on your plot to redesigning the one you
            already own — we offer complete, end-to-end real estate
            solutions built around you.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={index}
                className="group relative h-[420px] overflow-hidden rounded-2xl border border-gold-300/40"
              >
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-black/10" />

                <div className="relative h-full flex flex-col justify-between p-8">
                  <div className="w-14 h-14 rounded-full border border-gold-300 flex items-center justify-center">
                    <Icon size={22} className="text-gold-300" />
                  </div>

                  <div>
                    <h3 className="text-2xl font-cinzel font-bold text-white">
                      {service.title}
                    </h3>

                    <div className="w-10 h-[2px] bg-gold-400 my-4" />

                    <div className="flex items-end justify-between gap-4">
                      <p className="text-white/80 text-sm leading-6 max-w-[80%]">
                        {service.description}
                      </p>

                      <ArrowRight
                        size={22}
                        className="text-gold-300 shrink-0 transition duration-300 group-hover:translate-x-1"
                      />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-14 rounded-2xl border border-gold-200 bg-gold-50 px-8 py-10 flex flex-col lg:flex-row items-center justify-between gap-6 text-center lg:text-left">
          <div>
            <h3 className="text-2xl md:text-3xl font-cinzel text-gray-900">
              Have a plot of your own?
            </h3>
            <p className="mt-2 text-gray-600">
              Let's design and build your dream home on it — right from the
              ground up.
            </p>
          </div>

          <a
            href="/contact"
            className="shrink-0 inline-flex items-center gap-2 bg-gold-950 text-white px-8 py-4 rounded-xl font-semibold hover:bg-gold-800 transition"
          >
            Start Your Project
            <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}

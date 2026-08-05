"use client";

import Image from "next/image";
import {
  Building2,
  Home,
  KeyRound,
  PencilRuler,
  PaintRoller,
  HousePlus,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    icon: Building2,
    title: "New Construction",
    image: "/services/newconstruction.webp",
    description:
      "Starting with a bare plot, our team manages every stage of construction — from architectural planning and structural design to final finishing — ensuring your new home is built to the highest standards of quality, safety and craftsmanship.",
    points: [
      "Site planning & architectural design",
      "Structural engineering & approvals",
      "Premium material sourcing",
      "End-to-end project management",
      "Timely handover with quality assurance",
    ],
  },
  {
    icon: Home,
    title: "New Home Sales",
    image: "/services/newhome.webp",
    description:
      "Browse our curated portfolio of ready-to-move and under-construction homes across prime locations. Every listing is verified for legal clarity, quality construction and fair pricing, so you can buy with complete confidence.",
    points: [
      "RERA-verified listings",
      "Site visits & virtual tours",
      "Legal documentation support",
      "Flexible payment assistance",
      "Post-sale handover support",
    ],
  },
  {
    icon: KeyRound,
    title: "Resale Properties",
    image: "/services/resale.webp",
    description:
      "Whether you're buying a pre-owned home or selling one, we handle the entire process with complete transparency — from property valuation and legal verification to negotiation and final transfer.",
    points: [
      "Fair market valuation",
      "Legal title verification",
      "Transparent negotiation",
      "Complete documentation support",
      "End-to-end transaction assistance",
    ],
  },
  {
    icon: PencilRuler,
    title: "Home Redesign",
    image: "/services/redesign.webp",
    description:
      "Give your existing home a completely new identity. Our design team reimagines layouts, finishes and interiors to create a space that feels brand new — without the need to relocate or rebuild from scratch.",
    points: [
      "Space planning & layout redesign",
      "Modern interior finishes",
      "Custom furniture & fixtures",
      "3D visualization before execution",
      "Minimal disruption during work",
    ],
  },
  {
    icon: PaintRoller,
    title: "Renovation",
    image: "/services/renovate.webp",
    description:
      "From structural repairs to complete interior overhauls, our renovation team restores and upgrades your property — improving strength, functionality and aesthetics while preserving what you love about your home.",
    points: [
      "Structural repair & waterproofing",
      "Electrical & plumbing upgrades",
      "Interior & exterior renovation",
      "Kitchen & bathroom remodeling",
      "Quality material & workmanship",
    ],
  },
  {
    icon: HousePlus,
    title: "Build On Your Plot",
    image: "/services/buildonyourplot.webp",
    description:
      "Already own a plot? We take care of everything — design, approvals, construction and finishing — so you get a fully custom home built exactly to your vision, without having to manage contractors or vendors yourself.",
    points: [
      "Custom architectural design",
      "Government approvals & NOCs",
      "Dedicated project manager",
      "Regular progress updates",
      "On-time, on-budget delivery",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-gold-950 pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <span className="uppercase tracking-[4px] text-gold-300 font-semibold text-sm">
            What We Do
          </span>

          <h1 className="mt-4 font-cinzel text-4xl md:text-5xl font-bold text-white">
            Our Services
          </h1>

          <span className="block w-16 h-[2px] bg-gold-400 mx-auto mt-6" />

          <p className="mt-6 max-w-2xl mx-auto text-gold-100/70 leading-8 font-poppins">
            From a brand-new home on your plot to buying, selling, redesigning
            and renovating — Baba Associates is your complete, end-to-end real
            estate partner.
          </p>
        </div>
      </section>

      {/* Services Detail */}
      <section className="bg-[#FBF6EC] py-24">
        <div className="max-w-7xl mx-auto px-6 space-y-20">
          {services.map((service, index) => {
            const Icon = service.icon;
            const reversed = index % 2 === 1;

            return (
              <div
                key={service.title}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  reversed ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                {/* Image */}
                <div className="relative h-[340px] md:h-[420px] rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 768px) 100vw,(max-width: 1200px) 50vw,33vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                </div>

                {/* Content */}
                <div>
                  <div className="w-14 h-14 rounded-full bg-gold-50 border border-gold-300 flex items-center justify-center">
                    <Icon size={24} className="text-gold-600" />
                  </div>

                  <h2 className="mt-6 font-cinzel text-3xl md:text-4xl font-bold text-gray-900">
                    {service.title}
                  </h2>

                  <span className="block w-10 h-[2px] bg-gold-400 mt-4 mb-5" />

                  <p className="text-gray-600 leading-7 font-poppins">
                    {service.description}
                  </p>

                  <ul className="mt-6 space-y-3">
                    {service.points.map((point) => (
                      <li key={point} className="flex items-start gap-3">
                        <CheckCircle2
                          size={18}
                          className="text-gold-600 mt-0.5 shrink-0"
                        />
                        <span className="text-gray-700 font-poppins text-sm">
                          {point}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href="/contact"
                    className="mt-8 inline-flex items-center gap-2 bg-gold-950 text-white px-7 py-3.5 rounded-xl font-semibold hover:bg-gold-800 transition"
                  >
                    Enquire Now
                    <ArrowRight size={18} />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="rounded-2xl border border-gold-200 bg-gold-50 px-8 py-10 flex flex-col lg:flex-row items-center justify-between gap-6 text-center lg:text-left">
            <div>
              <h3 className="text-2xl md:text-3xl font-cinzel text-gray-900">
                Have a plot of your own?
              </h3>
              <p className="mt-2 text-gray-600 font-poppins">
                Let&apos;s design and build your dream home on it — right from
                the ground up.
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
    </>
  );
}

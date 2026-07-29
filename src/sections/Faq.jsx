"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Do you construct homes on customer-owned plots?",
    answer:
      "Yes. We provide complete end-to-end construction services on your plot, including planning, structural work, finishing, interiors, and project management.",
  },
  {
    question: "Do you renovate existing homes?",
    answer:
      "Absolutely. We specialize in transforming old homes into modern, functional, and elegant living spaces while maintaining structural integrity.",
  },
  {
    question: "What is the difference between renovation and redesign?",
    answer:
      "Renovation focuses on improving or restoring an existing property, while redesign enhances the layout, aesthetics, and functionality through modern design solutions.",
  },
  {
    question: "Do you help clients buy and sell properties?",
    answer:
      "Yes. We assist clients in buying, selling, and evaluating residential properties with complete transparency and professional guidance.",
  },
  {
    question: "How long does a home construction project take?",
    answer:
      "Project timelines depend on plot size, design complexity, and approvals. Most residential projects are completed within the agreed timeline with regular progress updates.",
  },
  {
    question: "Can I customize my home design?",
    answer:
      "Certainly. Every project is tailored according to your lifestyle, budget, and personal preferences to create a home that truly reflects your vision.",
  },
];

export default function FAQSection() {
  const [active, setActive] = useState(0);

  return (
    <section className="bg-[#0B0B0B] py-24">
      <div className="mx-auto max-w-6xl px-6">
        {/* Heading */}
        <div className="mb-16 text-center">
          <span className="text-sm font-semibold uppercase tracking-[4px] text-[#D4AF37]">
            Frequently Asked Questions
          </span>

          <h2 className="mt-4 font-cinzel text-4xl font-bold text-white md:text-5xl">
            Everything You Need
          </h2>

          <h3 className="font-cinzel text-3xl font-bold text-[#D4AF37] md:text-4xl">
            To Know
          </h3>

          <p className="mx-auto mt-6 max-w-2xl font-poppins leading-8 text-gray-400">
            Find answers to the most common questions about construction,
            renovation, redesign, and real estate services offered by Baba
            Associates.
          </p>
        </div>

        {/* FAQ */}
        <div className="space-y-5">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-2xl border border-[#D4AF37]/20 bg-white/5 backdrop-blur-md transition-all duration-300 hover:border-[#D4AF37]/50"
            >
              <button
                onClick={() =>
                  setActive(active === index ? -1 : index)
                }
                className="flex w-full items-center justify-between px-7 py-6 text-left"
              >
                <h3 className="font-poppins text-lg font-semibold text-white md:text-xl">
                  {faq.question}
                </h3>

                <ChevronDown
                  className={`h-6 w-6 text-[#D4AF37] transition-transform duration-300 ${
                    active === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                className={`grid transition-all duration-500 ease-in-out ${
                  active === index
                    ? "grid-rows-[1fr]"
                    : "grid-rows-[0fr]"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="px-7 pb-7 font-poppins leading-8 text-gray-300">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 rounded-3xl border border-[#D4AF37]/20 bg-gradient-to-r from-[#111111] to-[#1A1A1A] p-10 text-center">
          <h3 className="font-cinzel text-3xl text-white">
            Still Have Questions?
          </h3>

          <p className="mt-4 font-poppins text-gray-400">
            Our experts are here to help you with construction, renovation,
            redesign, and property-related queries.
          </p>

          <button className="mt-8 rounded-lg bg-[#D4AF37] px-8 py-4 font-semibold text-black transition duration-300 hover:bg-[#E6C16A]">
            Contact Our Team
          </button>
        </div>
      </div>
    </section>
  );
}
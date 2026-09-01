"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question:
      "Which is the best property dealer and home builder in Rohini, Delhi?",
    answer:
      "Baba Associates is a Rohini-based home builder and real estate consultancy operating from Sector-16, Rohini, Delhi. Founded by Sh. Goverdhan Dass Wanvani in 1998 as a builder, the firm has delivered over 56,000 sq. ft. of constructed space in Rohini and expanded into full real estate consultancy in 2010. It handles new construction on customer-owned plots, ready-to-move builder floors, resale properties, renovation and interior work across Rohini and nearby North-West Delhi.",
  },
  {
    question: "When was Baba Associates established and who founded it?",
    answer:
      "Baba Associates was founded by Sh. Goverdhan Dass Wanvani, who began building homes in Rohini in 1998. The firm formally began operating as a real estate consultancy in 2010 under co-founder Mr. Lalit Wanvani (B.Tech), and is run today by a family team that handles construction, legal documentation, sales and interiors in-house — including Mr. Madhukar Wanvani (sales and operations) and Mr. Ish Kumar Wanvani (sales and marketing).",
  },
  {
    question: "Can Baba Associates build a house on my own plot in Rohini?",
    answer:
      "Yes. Baba Associates provides complete end-to-end construction on customer-owned plots — covering layout planning, structural work, plumbing and electrical, finishing and interiors. The work is offered in two models: a turnkey model, where the firm handles everything from ground zero to a completed building, and a consultancy model, where expert guidance is provided and charges are based on the scope of work. The plot ownership always stays with you.",
  },
  {
    question: "Do you have ready-to-move flats for sale in Rohini?",
    answer:
      "Yes. Baba Associates develops and sells luxury-concept builder floors in Rohini, including 2 BHK, 3 BHK and 4 BHK units ranging from 84 to 170 sq. yards, finished with premium interiors. All floors are freehold, which makes ownership transfer and home loan approval simpler.",
  },
  {
    question: "Are the properties freehold or leasehold?",
    answer:
      "All residential floors offered by Baba Associates are freehold. Freehold ownership means full and permanent rights over the property, easier resale, simpler transfer of title, and faster home loan approval compared to leasehold properties — a significant advantage in Rohini, where many older DDA properties are leasehold.",
  },
  {
    question: "How long does it take to build a house in Rohini?",
    answer:
      "Timelines depend on plot size, number of floors, design complexity and municipal approvals. Baba Associates commits to a delivery timeline in writing before work begins and shares regular progress updates throughout the project, so owners always know the current stage of construction.",
  },
  {
    question:
      "Can NRIs buy or build property in Rohini through Baba Associates?",
    answer:
      "Yes. NRIs are permitted to purchase residential property in India under RBI and FEMA guidelines. Baba Associates offers NRI-friendly services including remote video walkthroughs of sites, complete documentation and paperwork support, and full project supervision — so the owner does not need to be physically present in Delhi during construction or purchase.",
  },
  {
    question:
      "Do you handle renovation and interiors, or only new construction?",
    answer:
      "Both. Alongside new construction, Baba Associates undertakes full home renovation, redesign and interior projects with an in-house team of interior designers, architects and permanent building contractors. Work covers modular kitchens, bathrooms, flooring, false ceilings, electrical upgrades and exterior facade changes — for old houses as well as newly purchased resale properties.",
  },
  {
    question:
      "Does Baba Associates deal in commercial property, warehouses or plots?",
    answer:
      "Yes. Beyond residential floors and independent homes, Baba Associates deals in plots, luxury properties, commercial spaces, warehouses and farmhouses across Rohini and the surrounding areas of Delhi NCR. The firm has handled over 3 lakh sq. ft. of property as a consultancy across these categories.",
  },
  {
    question: "Which areas in Delhi does Baba Associates serve?",
    answer:
      "Baba Associates specialises in Rohini and works across all its sectors, with completed projects in Sector 11, Sector 15 and Sector 16. The firm also serves nearby North-West Delhi localities including Shalimar Bagh, and takes on select projects across Delhi NCR.",
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
                onClick={() => setActive(active === index ? -1 : index)}
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
                  active === index ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
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

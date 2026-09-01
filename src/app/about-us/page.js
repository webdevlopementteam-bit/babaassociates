"use client";

import {
  CheckCircle2,
  Award,
  Users,
  CalendarDays,
  Briefcase,
  HardHat,
  Home,
  LandPlot,
  Building2,
  Warehouse,
  TreePine,
  ArrowRight,
} from "lucide-react";

const history = [
  "⁠Started by Sh Goverdhan Dass Wanvani in 1998 as a builder and delivered multiple residential projects in Rohini.",
  "Started working as a Real Estate Consultancy Firm in 2010 and built a strong reputation for fair dealing and quality service.",
  "In total, almost delivered 56,000 sq. ft. of constructed space in Rohini, and all the clients are living happily.",
  "As a consultancy firm, we have an experience of 17 years and have served thousands of happy clients. Our USP is having satisfied and repeat clients.",
  "As a builder, we work on a consultancy basis as well as on a turnkey model, in which we take care of everything right from ground zero to complete building construction.",
  "In consultancy, we provide our expert guidance and charge according to the scope of work.",
  "We also undertake renovation and interior projects, having an experienced team of interior designers, architects, and permanent building contractors.",
];

const team = [
  {
    initials: "GD",
    name: "Sh. Goverdhan Dass Wanvani",
    role: "Founder",
    points: ["Started working as a builder in 1988."],
  },
  {
    initials: "LW",
    name: "Mr. Lalit Wanvani",
    role: "Co-Founder",
    points: [
      "Graduate in B.Tech.",
      "Expert in property legal framework and in-depth knowledge of property papers.",
      "Expertise in building construction, negotiation, research, design, and building layout planning.",
      "Also an expert in renovation and interior work.",
      "Working in the industry since 2009.",
      "Started/founded Baba Associates in 2010.",
    ],
  },
  {
    initials: "M",
    name: "Mr. Madhukar Wanvani",
    role: "Sales & Operations",
    points: [
      "Graduate in B.A.",
      "Handling sales, operations, and research since 2009.",
      "Having in-depth experience of Rohini and nearby areas.",
      "Expert in handling end-to-end property deals from selection to completion.",
    ],
  },
  {
    initials: "IK",
    name: "Mr. Ish Kumar Wanvani",
    role: "Sales & Marketing",
    points: [
      "Graduate in Journalism & Mass Communication (2010).",
      "Completed MBA (Marketing & Operations) in 2013.",
      "Worked with Electroline (2013–2014), Business Standard Newspaper (2015–2018), AIPL (2018–2019).",
      "Taking care of sales, research, and providing end-to-end client-based solutions.",
      "Expert in paperwork formalities and negotiations.",
      "Working in sales and marketing since 2013.",
    ],
  },
];

const experienceStats = [
  { icon: CalendarDays, value: "17+", label: "Years of Experience" },
  { icon: Users, value: "1000+", label: "Happy Clients Served" },
  { icon: Building2, value: "3 Lakh+", label: "Sq. Ft. Handled" },
  { icon: Award, value: "56,000+", label: "Sq. Ft. Constructed" },
];

const usps = [
  {
    icon: Users,
    title: "Customer-Focused Approach",
    description:
      "Every deal is built around understanding what our clients truly need — leading to satisfied, repeat clients.",
  },
  {
    icon: Award,
    title: "Quality Assurance",
    description:
      "From construction to consultancy, every project is delivered with a commitment to lasting quality.",
  },
];

const dealsIn = [
  { icon: Home, label: "Residential Properties" },
  { icon: LandPlot, label: "Plots & Floors" },
  { icon: Building2, label: "Luxury Properties" },
  { icon: Briefcase, label: "Commercial Spaces" },
  { icon: Warehouse, label: "Warehouses" },
  { icon: TreePine, label: "Farmhouses, etc." },
];

const currentlyDeveloping = [
  { size: "170 sq. yds", type: "4 BHK Floors" },
  { size: "130 sq. yds", type: "3 BHK Floors" },
  { size: "84 sq. yds", type: "2 BHK Floors" },
];

export default function AboutPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-gold-950 pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <span className="uppercase tracking-[4px] text-gold-300 font-semibold text-sm">
            About Us
          </span>

          <h1 className="mt-4 font-cinzel text-4xl md:text-5xl font-bold text-white">
            Baba Associates
          </h1>

          <span className="block w-16 h-[2px] bg-gold-400 mx-auto mt-6" />

          <p className="mt-6 max-w-3xl mx-auto text-gold-100/70 leading-8 font-poppins">
            Baba Associates is a well-known and respected name in the
            residential and commercial real estate industry in Rohini, Delhi and
            NCR, having a specialization in Rohini.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="bg-[#FBF6EC] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-14">
            <div className="lg:col-span-2 lg:sticky lg:top-32 h-fit">
              <span className="uppercase tracking-[4px] text-gold-600 font-semibold text-sm">
                Our Story
              </span>

              <h2 className="mt-4 font-cinzel text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                Since 1998, Building Trust in Rohini
              </h2>

              <span className="block w-10 h-[2px] bg-gold-400 mt-5 mb-6" />

              <p className="text-gray-600 leading-7 font-poppins">
                From a builder delivering homes on the ground, to a trusted real
                estate consultancy — our journey has always stayed rooted in one
                place, and one promise: fair dealing and quality service.
              </p>
            </div>

            <div className="lg:col-span-3">
              <ul className="space-y-5">
                {history.map((point, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-4 bg-white rounded-2xl border border-gold-100 shadow-sm p-6"
                  >
                    <CheckCircle2
                      size={20}
                      className="text-gold-600 mt-0.5 shrink-0"
                    />
                    <span className="text-gray-700 leading-7 font-poppins text-sm md:text-base">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Stats */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="rounded-2xl border border-gold-200 bg-gold-50 grid grid-cols-2 lg:grid-cols-4 divide-y lg:divide-y-0 lg:divide-x divide-gold-200">
            {experienceStats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center py-10 px-6 text-center"
                >
                  <Icon size={28} className="text-gold-700 mb-3" />
                  <h3 className="text-3xl font-cinzel font-bold text-gold-950">
                    {stat.value}
                  </h3>
                  <p className="mt-1 text-gray-600 text-sm font-poppins uppercase tracking-wider">
                    {stat.label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-[#FBF6EC] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="uppercase tracking-[4px] text-gold-600 font-semibold text-sm">
              Meet The Team
            </span>
            <h2 className="mt-4 font-cinzel text-3xl md:text-4xl font-bold text-gray-900">
              Team Member Profile
            </h2>
            <span className="block w-16 h-[2px] bg-gold-400 mx-auto mt-6" />
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {team.map((member) => (
              <div
                key={member.name}
                className="bg-white rounded-2xl border border-gold-100 shadow-sm p-8"
              >
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-gold-950 flex items-center justify-center shrink-0">
                    <span className="font-cinzel text-gold-300 text-lg">
                      {member.initials}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-cinzel text-xl font-bold text-gray-900">
                      {member.name}
                    </h3>
                    <p className="text-gold-700 text-sm font-poppins font-medium">
                      {member.role}
                    </p>
                  </div>
                </div>

                <ul className="mt-6 space-y-2.5">
                  {member.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold-400 mt-2 shrink-0" />
                      <span className="text-gray-600 text-sm leading-6 font-poppins">
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* USPs */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="uppercase tracking-[4px] text-gold-600 font-semibold text-sm">
              Why Choose Us
            </span>
            <h2 className="mt-4 font-cinzel text-3xl md:text-4xl font-bold text-gray-900">
              Our USPs
            </h2>
            <span className="block w-16 h-[2px] bg-gold-400 mx-auto mt-6" />
          </div>

          <div className="grid sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {usps.map((usp) => {
              const Icon = usp.icon;
              return (
                <div
                  key={usp.title}
                  className="rounded-2xl border border-gold-100 bg-gold-50 p-8 text-center"
                >
                  <div className="w-14 h-14 rounded-full bg-gold-950 flex items-center justify-center mx-auto">
                    <Icon size={24} className="text-gold-300" />
                  </div>
                  <h3 className="mt-5 font-cinzel text-xl font-bold text-gray-900">
                    {usp.title}
                  </h3>
                  <p className="mt-3 text-gray-600 text-sm leading-6 font-poppins">
                    {usp.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Deals In */}
      <section className="bg-[#FBF6EC] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="uppercase tracking-[4px] text-gold-600 font-semibold text-sm">
              Our Domain
            </span>
            <h2 className="mt-4 font-cinzel text-3xl md:text-4xl font-bold text-gray-900">
              Deals In
            </h2>
            <span className="block w-16 h-[2px] bg-gold-400 mx-auto mt-6" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {dealsIn.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.label}
                  className="flex items-center gap-4 bg-white rounded-2xl border border-gold-100 shadow-sm p-6 hover:border-gold-400 hover:shadow-md transition"
                >
                  <div className="w-12 h-12 rounded-full bg-gold-50 flex items-center justify-center shrink-0">
                    <Icon size={20} className="text-gold-600" />
                  </div>
                  <span className="font-cinzel text-lg font-semibold text-gray-900">
                    {item.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Currently Developing */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="uppercase tracking-[4px] text-gold-600 font-semibold text-sm">
              As A Builder
            </span>
            <h2 className="mt-4 font-cinzel text-3xl md:text-4xl font-bold text-gray-900">
              Currently Developing
            </h2>
            <span className="block w-16 h-[2px] bg-gold-400 mx-auto mt-6" />
            <p className="mt-5 text-gray-600 font-poppins">
              All built in luxury concept floors.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {currentlyDeveloping.map((floor) => (
              <div
                key={floor.size}
                className="rounded-2xl border border-gold-200 bg-gold-50 p-8 text-center"
              >
                <HardHat size={28} className="text-gold-700 mx-auto" />
                <h3 className="mt-4 font-cinzel text-2xl font-bold text-gold-950">
                  {floor.size}
                </h3>
                <p className="mt-1 text-gray-600 font-poppins text-sm uppercase tracking-wider">
                  {floor.type}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#FBF6EC] pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="rounded-2xl border border-gold-200 bg-white shadow-sm px-8 py-10 flex flex-col lg:flex-row items-center justify-between gap-6 text-center lg:text-left">
            <div>
              <h3 className="text-2xl md:text-3xl font-cinzel text-gray-900">
                Let&apos;s Talk About Your Property
              </h3>
              <p className="mt-2 text-gray-600 font-poppins">
                Whether you&apos;re buying, selling, building or renovating —
                our team is ready to help.
              </p>
            </div>

            <a
              href="/contact/"
              className="shrink-0 inline-flex items-center gap-2 bg-gold-950 text-white px-8 py-4 rounded-xl font-semibold hover:bg-gold-800 transition"
            >
              Get In Touch
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

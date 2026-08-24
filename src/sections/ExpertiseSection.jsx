"use client";

import Image from "next/image";
import {
  PencilRuler,
  Building2,
  Award,
  HardHat,
  Sofa,
  Lamp,
  Users,
  ClipboardCheck,
  Handshake,
  MessageCircle,
  ShieldCheck,
  Clock3,
  Sparkle,
} from "lucide-react";

const expertise = [
  {
    number: "01",
    icon: PencilRuler,
    bgIcon: Building2,
    title: "Architectural Excellence",
    description:
      "Innovative designs that blend functionality, aesthetics and timeless architecture.",
  },
  {
    number: "02",
    icon: Award,
    bgIcon: HardHat,
    title: "Quality Construction",
    description:
      "Using premium materials and advanced techniques to ensure unmatched quality.",
  },
  {
    number: "03",
    icon: Sofa,
    bgIcon: Lamp,
    title: "Interior Mastery",
    description:
      "Thoughtful interiors that reflect elegance, comfort and your unique lifestyle.",
  },
  {
    number: "04",
    icon: Users,
    bgIcon: ClipboardCheck,
    title: "Project Management",
    description:
      "End-to-end management with transparency, accuracy and seamless execution.",
  },
  {
    number: "05",
    icon: Handshake,
    bgIcon: MessageCircle,
    title: "Client-Centric Approach",
    description:
      "We listen, understand and deliver solutions tailored to your needs.",
  },
  {
    number: "06",
    icon: ShieldCheck,
    bgIcon: Clock3,
    title: "Timely Delivery",
    description:
      "Commitment to timelines without compromising on quality and excellence.",
  },
];

export default function ExpertiseSection() {
  return (
    <section className="py-24 bg-[#FBF6EC] overflow-hidden">
      <div className="max-w-7xl mx-auto pl-6 pl-2">
        <div className="grid lg:grid-cols-5 gap-14 items-start">

          {/* LEFT */}
          <div className="lg:col-span-2 lg:sticky lg:top-32">
            <div className="flex items-center gap-3">
              <span className="h-px w-6 bg-gold-500" />
              <span className="uppercase tracking-[4px] text-gold-600 font-semibold text-sm">
                Our Expertise
              </span>
            </div>

            <h2 className="mt-5 text-4xl lg:text-5xl  font-bold leading-tight text-gray-900">
              Where <span className="text-gold-600">Experience</span>
              <br />
              Meets <span className="text-gold-600">Excellence</span>
            </h2>

            <div className="flex items-center gap-3 mt-6">
              <span className="h-px w-24 bg-gold-300" />
              <Sparkle size={14} className="text-gold-400 fill-gold-400" />
            </div>

            <p className="mt-6 text-gray-600 leading-8">
              With deep industry knowledge and a passion for perfection, we
              deliver spaces that are thoughtfully designed, meticulously
              crafted and built to last.
            </p>

            {/* Image */}
            <div className="relative mt-14 hidden lg:block">
              <div className="absolute -top-4 -right-4 w-[92%] h-[92%] bg-gold-950 rounded-tr-[160px] rounded-tl-3xl rounded-br-3xl rounded-bl-3xl" />

              <Image
                src="/expertise/expimage.jpeg"
                alt="Baba Associates Craftsmanship"
                width={700}
                height={760}
                className="relative z-10 w-full h-[500px] object-cover border-2 border-gold-400 rounded-tr-[160px] rounded-tl-3xl rounded-br-3xl rounded-bl-3xl shadow-2xl"
              />

              <div className="absolute z-20 bottom-6 left-6 right-10 bg-gold-950 rounded-2xl shadow-xl px-6 py-5 flex items-center divide-x divide-gold-400/30">
                <div className="flex items-center gap-3 pr-6">
                  <Building2 size={22} className="text-gold-300 shrink-0" />
                  <div>
                    <p className="text-2xl font-bold text-white leading-none">17+</p>
                    <p className="text-[11px] uppercase tracking-[2px] text-gold-200 mt-1">
                      Years of Excellence
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 pl-6">
                  <Users size={22} className="text-gold-300 shrink-0" />
                  <div>
                    <p className="text-2xl font-bold text-white leading-none">1000+</p>
                    <p className="text-[11px] uppercase tracking-[2px] text-gold-200 mt-1">
                      Happy Families
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="lg:col-span-3 grid sm:grid-cols-2 xl:grid-cols-3 gap-3">
            {expertise.map((item, index) => {
              const Icon = item.icon;
              const BgIcon = item.bgIcon;

              return (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-2xl border border-gold-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-gold-400"
                >
                  <BgIcon
                    className="pointer-events-none absolute -bottom-6 -right-6 text-gold-950/[0.06] rotate-[-8deg]"
                    size={140}
                    strokeWidth={1}
                  />

                  <div className="relative">
                    <div className="relative w-16 h-16">
                      <span className="absolute -inset-1.5 rounded-full border border-gold-400/70" />
                      <span className="absolute -bottom-0.5 right-0 w-2 h-2 rounded-full bg-gold-400" />
                      <div className="relative w-16 h-16 rounded-full bg-gold-950 flex items-center justify-center">
                        <Icon size={26} className="text-gold-300" />
                      </div>
                    </div>

                    <p className="mt-6 text-gold-600 font-semibold text-sm">
                      {item.number}
                    </p>

                    <h3 className="mt-1 text-xl font-cinzel font-bold text-gray-900 leading-snug">
                      {item.title}
                    </h3>

                    <span className="block w-8 h-[2px] bg-gold-400 my-3" />

                    <p className="text-gray-600 text-sm leading-6">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}

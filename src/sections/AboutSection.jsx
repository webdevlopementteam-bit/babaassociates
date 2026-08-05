"use client";

import Image from "next/image";
import {
  Eye,
  Target,
  Home,
  Building2,
  Shield,
  Handshake,
  Users,
  Award,
} from "lucide-react";

const highlights = [
  { icon: Shield, label: "Quality Construction" },
  { icon: Handshake, label: "Transparent Process" },
  { icon: Users, label: "Experienced Team" },
  { icon: Award, label: "Timely Delivery" },
];

export default function AboutSection() {
  return (
    <section className="bg-[#FBF6EC] md:py-24 py-5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* LEFT */}
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-6 bg-gold-500" />
              <span className="uppercase tracking-[4px] text-gold-600 font-semibold text-sm">
                About Baba Associate
              </span>
            </div>

            <h2 className="mt-5 text-start font-cinzel font-bold leading-tight text-gray-900">
              <div className="italic whitespace-nowrap">
                <span className="text-gold-600 text-4xl sm:text-5xl lg:text-6xl">
                  B
                </span>
                <span className="align-middle text-xl sm:text-2xl md:text-3xl">
                  uilding&nbsp;Dreams
                </span>
              </div>

              <div className="mt-2 italic whitespace-nowrap">
                <span className="text-gold-600 text-4xl sm:text-5xl lg:text-6xl">
                  A
                </span>
                <span className="align-middle text-xl sm:text-2xl md:text-3xl">
                  chieving Excellence
                </span>
              </div>
            </h2>

            <div className="flex items-center gap-3 mt-6">
              <span className="h-px w-16 bg-gold-300" />
              <span className="h-2 w-2 rotate-45 bg-gold-400" />
              <span className="h-px w-16 bg-gold-300" />
            </div>

            <p className="mt-8 text-gray-600 leading-8 text-lg">
              At Baba Associates, we don't just construct buildings — we create
              homes filled with comfort, designed for generations and built on
              values of honesty, quality and commitment. From concept to
              completion, every detail is thoughtfully planned and executed to
              deliver spaces that reflect luxury, functionality and timeless
              design.
            </p>

            {/* Vision Mission */}
            <div className="mt-12 grid sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-gray-200 bg-white rounded-3xl shadow-lg p-8">
              <div className="sm:pr-8">
                <div className="w-14 h-14 rounded-full bg-gold-50 flex items-center justify-center">
                  <Eye size={24} className="text-gold-600" />
                </div>

                <h4 className="mt-5 text-2xl font-cinzel text-gray-900">
                  Our Vision
                </h4>

                <span className="block w-8 h-[2px] bg-gold-400 my-3" />

                <p className="text-gray-600 leading-7">
                  To become one of the most trusted names in premium residential
                  development through quality, transparency and innovation.
                </p>
              </div>

              <div className="sm:pl-8 pt-8 sm:pt-0">
                <div className="w-14 h-14 rounded-full bg-gold-50 flex items-center justify-center">
                  <Target size={24} className="text-gold-600" />
                </div>

                <h4 className="mt-5 text-2xl font-cinzel text-gray-900">
                  Our Mission
                </h4>

                <span className="block w-8 h-[2px] bg-gold-400 my-3" />

                <p className="text-gray-600 leading-7">
                  Deliver modern homes with excellent craftsmanship, timely
                  completion and complete customer satisfaction.
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="relative">
            {/* Dotted pattern */}
            <div
              className="hidden lg:block absolute -top-8 right-2 w-28 h-16"
              style={{
                backgroundImage:
                  "radial-gradient(circle, var(--color-gold-400) 1.5px, transparent 1.5px)",
                backgroundSize: "14px 14px",
              }}
            />

            {/* Corner bracket */}
            <div className="hidden lg:block absolute -top-6 -left-6 w-20 h-20 border-t-2 border-l-2 border-gold-400 rounded-tl-3xl" />

            <div className="relative">
              <Image
                src="/about/aboutimage.jpeg"
                alt="Baba Associates"
                width={700}
                height={760}
                className="rounded-[2rem] object-cover shadow-2xl w-full h-[480px]"
              />

              {/* Premium Living floating tag */}
              <div className="absolute -top-8 left-8 bg-gold-950 text-white px-6 py-5 rounded-2xl shadow-xl w-36">
                <Home size={24} className="text-gold-300" />
                <p className="mt-3 font-serif text-lg leading-tight">
                  Premium Living
                </p>
                <span className="block w-6 h-[2px] bg-gold-400 mt-3" />
              </div>

              {/* 15+ Experience card */}
              <div className="absolute -bottom-10 right-6 bg-white rounded-2xl shadow-2xl px-7 py-6 flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-gold-50 flex items-center justify-center shrink-0">
                  <Building2 size={24} className="text-gold-600" />
                </div>
                <div>
                  <h3 className="text-4xl font-cinzel font-bold text-gold-600">
                    17+
                  </h3>
                  <p className="uppercase tracking-[2px] text-xs text-gray-600 mt-1 max-w-[9rem] leading-snug">
                    Years of Building Excellence
                  </p>
                </div>
              </div>
            </div>

            {/* Feature panel */}
            <div className="mt-20 bg-gold-950 rounded-[2rem] px-3 py-8">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {highlights.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <div key={index} className="flex items-center gap-2">
                      <div className="w-10 h-10 rounded-full border border-gold-400 flex items-center justify-center shrink-0">
                        <Icon size={17} className="text-gold-300" />
                      </div>
                      <p className="text-white text-xs leading-tight">
                        {item.label}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

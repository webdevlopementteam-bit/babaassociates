"use client";

import CountUp from "react-countup";
import {
  Building2,
  Users,
  Award,
  CalendarDays,
} from "lucide-react";

const stats = [
  {
    icon: Building2,
    value: 25,
    suffix: "+",
    label: "Projects",
  },
  {
    icon: Users,
    value: 500,
    suffix: "+",
    label: "Happy Clients",
  },
  {
    icon: CalendarDays,
    value: 15,
    suffix: "+",
    label: "Years Experience",
  },
  {
    icon: Award,
    value: 100,
    suffix: "%",
    label: "Client Satisfaction",
  },
];

export default function CounterSection() {
  return (
    <section className="py-8 bg-white">
      <div className="w-full">

        <div className="bg-gold-50 border border-gold-200 shadow-xl">

          <div className="grid grid-cols-2 lg:grid-cols-4 divide-y lg:divide-y-0 lg:divide-x divide-gold-200">

            {stats.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center py-10 px-6 text-center"
                >
                  <Icon
                    size={32}
                    className="text-gold-700 mb-4"
                  />

                  <h3 className="text-4xl font-cinzel font-bold text-gold-950">
                    <CountUp
                      end={item.value}
                      duration={2.5}
                      enableScrollSpy
                      scrollSpyOnce
                    />
                    {item.suffix}
                  </h3>

                  <p className="mt-2 text-gold-800 text-sm uppercase tracking-wider">
                    {item.label}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
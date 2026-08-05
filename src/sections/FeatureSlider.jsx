"use client";

import { motion } from "framer-motion";
import { Landmark, Clock3, BadgeCheck, Users, Award } from "lucide-react";

const items = [
  {
    icon: <BadgeCheck size={22} />,
    text: "RERA VERIFIED",
  },
  {
    icon: <Landmark size={22} />,
    text: "FREEHOLD",
  },
  {
    icon: <Clock3 size={22} />,
    text: "50+ YEARS COMBINED EXPERIENCE",
  },
  {
    icon: <Award size={22} />,
    text: "NRI FRIENDLY INVESTMENT",
  },
  {
    icon: <Users size={22} />,
    text: "500+ INVESTORS SERVED",
  },
];

export default function FeatureSlider() {
  return (
    <section className="overflow-hidden border-y border-gold-200 bg-gold-50">
      <motion.div
        className="flex w-max"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          duration: 20,
          ease: "linear",
        }}
      >
        {[...items, ...items].map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-4 px-16 py-6 whitespace-nowrap"
          >
            <span className="text-gold-700">{item.icon}</span>

            <span className="text-gold-950 uppercase tracking-[4px] font-medium text-base lg:text-lg">
              {item.text}
            </span>
          </div>
        ))}
      </motion.div>
    </section>
  );
}

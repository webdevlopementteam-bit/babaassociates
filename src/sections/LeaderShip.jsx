"use client";

import Image from "next/image";
import { Linkedin } from "lucide-react";

const team = [
  {
    name: "Mr. Baba",
    role: "Founder",
    image: "/team/founder.jpg",
  },
  {
    name: "Mr. Rahul",
    role: "Director",
    image: "/team/director.jpg",
  },
  {
    name: "Mr. Amit",
    role: "Project Head",
    image: "/team/project.jpg",
  },
];

export default function LeadershipSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-12 gap-12">

          {/* Left */}

          <div className="lg:col-span-4 sticky top-32 h-fit">

            <span className="uppercase tracking-[4px] text-gold-950 text-sm font-semibold">
              Leadership
            </span>

            <h2 className="mt-5 text-5xl font-cinzel font-bold leading-tight">
              Meet The
              <br />
              Minds Behind
              <br />
              Baba Associates
            </h2>

            <p className="mt-6 text-gray-600 leading-8">
              Our experienced leadership team is committed to creating
              premium living spaces through innovation, transparency,
              and quality construction.
            </p>

          </div>

          {/* Right */}

          <div className="lg:col-span-8 grid md:grid-cols-2 xl:grid-cols-3 gap-8">

            {team.map((member) => (

              <div
                key={member.name}
                className="group"
              >

                <div className="relative overflow-hidden rounded-3xl">

                  <Image
                    src={member.image}
                    width={450}
                    height={600}
                    alt=""
                    className="h-[500px] w-full object-cover transition duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-gold-950 via-gold-950/10 to-transparent opacity-0 group-hover:opacity-100 transition"></div>

                  <div className="absolute top-5 left-5 bg-white/90 backdrop-blur px-4 py-2 rounded-full text-sm font-medium text-gold-950">
                    {member.role}
                  </div>

                  <button className="absolute bottom-5 right-5 w-12 h-12 rounded-full bg-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition">

                    <Linkedin className="text-gold-950" />

                  </button>

                </div>

                <div className="mt-6">

                  <h3 className="text-3xl font-cinzel">
                    {member.name}
                  </h3>

                  <p className="text-gold-950 mt-2 font-medium">
                    {member.role}
                  </p>

                </div>

              </div>

            ))}

          </div>

        </div>

      </div>
    </section>
  );
}
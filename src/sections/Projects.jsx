"use client";

import { MapPin, ArrowRight } from "lucide-react";

const projects = [
  {
    id: 1,
    video: "/projectone.mp4",
    badge: "Sold Out",
    category: "Residential Project",
    title: "3-BHK , 90sq yards",
    location: "Delhi",
    feature: "Luxury Apartments",
  },
  {
    id: 2,
    video: "/projecttwo.mp4",
    badge: "Sold Out",
    category: "New Modern Flat",
    title: "2-BHK , 84sq yards",
    location: "Delhi",
    feature: "Premium Interior Finish",
  },
  {
    id: 3,
    video: "/projecttwo3.mp4",
    badge: "Sold Out",
    category: "New Modern Flat",
    title: "4-BHK , 170sq yards",
    location: "Delhi",
    feature: "Premium Interior Finish",
  },
];

export default function ProjectsSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}

        <div className="flex flex-col lg:flex-row justify-between items-end mb-14">
          <div>
            <span className="uppercase tracking-[4px] text-gold-950 text-sm font-semibold">
              Featured Projects
            </span>

            <h2 className="mt-4 text-3xl font-cinzel font-bold text-gray-900">
              Our Premium Projects
            </h2>

            <p className="mt-5 text-gray-600 max-w-2xl">
              Discover thoughtfully designed residential developments built with
              quality craftsmanship, modern architecture and premium interiors.
            </p>
          </div>
        </div>

        {/* Cards */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm hover:shadow-2xl transition-all duration-500 group"
            >
              <div className="relative overflow-hidden">
                <video
                  src={project.video}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="aspect-video w-full object-cover group-hover:scale-110 transition duration-700"
                />

                <span className="absolute top-5 left-5 rounded-full bg-white px-4 py-2 text-sm font-semibold">
                  {project.badge}
                </span>
              </div>

              <div className="p-7">
                <p className="text-gold-950 font-medium">{project.category}</p>

                <h3 className="mt-3 text-2xl md:text-2xl lg:text-3xl font-semibold min-h-[60px]">
                  {project.title}
                </h3>

                <div className="mt-4 flex items-center gap-2 text-gray-500">
                  <MapPin size={18} />
                  {project.location}
                </div>

                <div className="mt-6 border-t pt-5 flex justify-between items-center">
                  <span className="text-gray-700">{project.feature}</span>

                  <ArrowRight className="text-gold-950 group-hover:translate-x-2 transition" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

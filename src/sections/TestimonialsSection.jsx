"use client";

import { Quote, Star } from "lucide-react";
import { FaInstagram, FaFacebookF } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const testimonials = [
  {
    id: 1,
    quote:
      "Baba Associates built our dream home from the ground up on our new plot. Every detail was handled with precision, quality and genuine care.",
    name: "Arjun Mehta",
    title: "New Construction",
    company: "Sector 21, Noida",
    avatar: "/testimonials/arjun.svg",
    image: "/testimonials/newconstruct.webp",
    rating: 5,
    platform: "google",
  },
  {
    id: 2,
    quote:
      "They completely redesigned our old home and it feels brand new. Outstanding attention to detail from start to finish. Highly recommended!",
    name: "Priya Sharma",
    title: "Home Redesign",
    company: "Greater Noida",
    avatar: "/testimonials/priya.svg",
    image: "/services/renovate.webp",
    rating: 5,
    platform: "instagram",
  },
  {
    id: 3,
    quote:
      "We bought our resale property through Baba Associates — the entire process was transparent, smooth and completely hassle-free.",
    name: "Rohit Verma",
    title: "Resale Property",
    company: "Delhi NCR",
    avatar: "/testimonials/rohit.svg",
    image: "/services/resale.webp",
    rating: 5,
    platform: "facebook",
  },
  {
    id: 4,
    quote:
      "Their renovation team transformed our old house into a modern, comfortable home. A dedicated team that goes above and beyond!",
    name: "Sneha Kapoor",
    title: "Renovation",
    company: "Rohini, Delhi",
    avatar: "/testimonials/sneha.svg",
    image: "/services/redesign.webp",
    rating: 5,
    platform: "google",
  },
];

const platformBadge = {
  google: {
    className: "bg-white border border-gray-200",
    Icon: FcGoogle,
    iconClassName: "",
  },
  instagram: {
    className:
      "bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600",
    Icon: FaInstagram,
    iconClassName: "text-white",
  },
  facebook: {
    className: "bg-[#1877F2]",
    Icon: FaFacebookF,
    iconClassName: "text-white",
  },
};

function TestimonialCard({
  quote,
  name,
  title,
  company,
  avatar,
  image,
  rating = 5,
  platform = "google",
}) {
  const badge = platformBadge[platform] ?? platformBadge.google;
  const PlatformIcon = badge.Icon;

  return (
    <div className="relative bg-white rounded-2xl border border-gold-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 p-6">

      {/* Top row */}
      <div className="flex items-start justify-between">
        <div className="w-11 h-11 rounded-full bg-gold-50 flex items-center justify-center shrink-0">
          <Quote size={20} className="text-gold-600 fill-gold-600" />
        </div>

        <span
          className={`w-8 h-8 rounded-full flex items-center justify-center shadow-sm ${badge.className}`}
        >
          <PlatformIcon size={14} className={badge.iconClassName} />
        </span>
      </div>

      {/* Project image */}
      {image && (
        <div className="relative mt-4 md:h-32 h-45 rounded-lg overflow-hidden bg-gold-50">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={image}
            alt={`${title} project`}
            className="w-full h-full object-cover"
          />
        </div>
      )}

      {/* Quote */}
      <p className="mt-4 text-gray-600 leading-6 text-[15px] line-clamp-3">
        {quote}
      </p>

      {/* Divider */}
      <div className="mt-5 border-t border-gray-100 pt-4 flex items-center gap-3">
        <div className="relative w-11 h-11 shrink-0 rounded-full overflow-hidden border-2 border-gold-400">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={avatar}
            alt={name}
            className="w-full h-full object-cover"
          />
        </div>

        <div>
          <h4 className=" font-semibold text-gold-700 text-sm">{name}</h4>
          <p className="text-xs text-gray-500">
            {title}, {company}
          </p>

          <div className="flex gap-0.5 mt-1">
            {Array.from({ length: rating }).map((_, i) => (
              <Star
                key={i}
                size={12}
                className="text-gold-400 fill-gold-400"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function TestimonialsSection() {
  return (
    <section
      className="relative py-20 overflow-hidden bg-contain bg-center bg-no-repeat"
      style={{ backgroundImage: "url(/testimonials/testimonialbgimage.webp)" }}
    >
      {/* Wash for text contrast */}
      <div className="absolute inset-0 bg-white/70" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mb-16 text-center">
          <span className="text-sm uppercase tracking-[4px] text-[#C8A45D] font-semibold">
            Client Testimonials
          </span>

          <h2 className="mt-4 font-cinzel text-4xl font-bold text-gray-900">
            What Our Clients Say
          </h2>

          <p className="mt-4 max-w-2xl mx-auto text-gray-600 leading-8 font-poppins">
            Real feedback from satisfied clients who trusted us with their
            projects. Their success is our success.
          </p>

          <span className="block w-16 h-[2px] bg-gold-400 mx-auto mt-4" />
        </div>

        {/* Testimonial Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}

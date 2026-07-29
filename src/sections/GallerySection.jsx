"use client";

import GalleryCarousel from "@/components/GalleryCarousel";

const gallery = [
  { id: 1, image: "/gallery/imageone.jpeg", name: "Luxury Villa Exterior" },
  { id: 2, image: "/gallery/imagetwo.jpeg", name: "Elegant Living Room" },
  { id: 3, image: "/gallery/imagethree.jpeg", name: "Modern Kitchen Design" },
  { id: 4, image: "/gallery/imagefour.jpeg", name: "Premium Master Bedroom" },
  { id: 5, image: "/gallery/imagefive.jpeg", name: "Contemporary Dining Space" },
  { id: 6, image: "/gallery/imagesix.jpeg", name: "Designer Bathroom" },
  { id: 7, image: "/gallery/imageseven.jpeg", name: "Spacious Balcony View" },
  { id: 8, image: "/gallery/imageeight.jpeg", name: "Home Office Interior" },
  { id: 9, image: "/gallery/imagenine.jpeg", name: "Rooftop Lounge" },
  { id: 10, image: "/gallery/imageten.webp", name: "Entrance Foyer" },
  { id: 11, image: "/gallery/imageeleven.webp", name: "Modern Facade Design" },
  { id: 12, image: "/gallery/imagetwelve.webp", name: "Cozy Family Lounge" },
  { id: 13, image: "/gallery/imagethirteen.webp", name: "Elegant Staircase" },
  { id: 14, image: "/gallery/imagefourteen.webp", name: "Rooftop Terrace View" },
];

export default function GallerySection() {
  return (
    <section className="bg-slate-50 py-7 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mb-16 text-center">
          <span className="text-sm uppercase tracking-[4px] text-[#C8A45D] font-semibold">
            Project Gallery
          </span>

          <h2 className="mt-4 font-cinzel text-5xl font-bold text-gray-900">
            Crafted Spaces,
          </h2>

          <h3 className="font-cinzel text-4xl md:text-5xl font-bold text-[#D4AF37]">
            Timeless Designs
          </h3>

          <p className="mt-6 max-w-2xl mx-auto text-gray-600 leading-8 font-poppins">
            Explore our collection of beautifully designed interiors,
            premium homes, elegant renovations and architectural excellence.
          </p>
        </div>

        <GalleryCarousel items={gallery} />
      </div>
    </section>
  );
}

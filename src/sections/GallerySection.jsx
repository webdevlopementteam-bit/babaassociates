"use client";

import GalleryCarousel from "@/components/GalleryCarousel";

const gallery = [
  { id: 1, image: "/gallery/imageone.webp" },
  { id: 2, image: "/gallery/imagetwo.webp" },
  { id: 3, image: "/gallery/imagethree.webp" },
  { id: 4, image: "/gallery/imagefour.webp" },
  { id: 5, image: "/gallery/imagefive.webp" },
  { id: 6, image: "/gallery/imagesix.webp" },
  { id: 7, image: "/gallery/imageseven.webp" },
  { id: 8, image: "/gallery/imageeight.webp" },
  { id: 9, image: "/gallery/imagenine.webp" },
  { id: 10, image: "/gallery/imageten.webp" },
  { id: 11, image: "/gallery/imageeleven.webp" },
  { id: 12, image: "/gallery/imagetwelve.webp" },
  { id: 13, image: "/gallery/imagethirteen.webp" },
  { id: 14, image: "/gallery/imagefourteen.webp" },
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

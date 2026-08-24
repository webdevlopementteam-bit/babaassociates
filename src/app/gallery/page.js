"use client";

import Image from "next/image";

const gallery = [
  { id: 1, image: "/gallery/imageone.jpeg" },
  { id: 2, image: "/gallery/imagetwo.jpeg" },
  { id: 3, image: "/gallery/imagethree.jpeg" },
  { id: 4, image: "/gallery/imagefour.jpeg" },
  {
    id: 5,
    image: "/gallery/imagefive.jpeg",
    name: "Contemporary Dining Space",
  },
  { id: 6, image: "/gallery/imagesix.jpeg"   },
  { id: 7, image: "/gallery/imageseven.jpeg"   },
  { id: 8, image: "/gallery/imageeight.jpeg"   },
  { id: 9, image: "/gallery/imagenine.jpeg" },
  { id: 10, image: "/gallery/imageten.webp"  },
  { id: 11, image: "/gallery/imageeleven.webp"  },
  { id: 12, image: "/gallery/imagetwelve.webp"   },
  { id: 13, image: "/gallery/imagethirteen.webp"   },
  {
    id: 14,
    image: "/gallery/imagefourteen.webp",
    name: "Rooftop Terrace View",
  },
];

export default function GalleryPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-gold-950 pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <span className="uppercase tracking-[4px] text-gold-300 font-semibold text-sm">
            Our Work
          </span>

          <h1 className="mt-4 font-cinzel text-4xl md:text-5xl font-bold text-white">
            Gallery
          </h1>

          <span className="block w-16 h-[2px] bg-gold-400 mx-auto mt-6" />

          <p className="mt-6 max-w-2xl mx-auto text-gold-100/70 leading-8 font-poppins">
            Explore our complete collection of beautifully designed interiors,
            premium homes, elegant renovations and architectural excellence.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="bg-slate-50 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {gallery.map((item) => (
              <div
                key={item.id}
                className="group relative overflow-hidden rounded-2xl shadow-xl aspect-[4/5]"
              >
                <Image
                  src={item.image}
                  alt={""}
                  fill
                  sizes="(max-width: 768px) 100vw,(max-width: 1200px) 50vw,33vw"
                  className="object-cover transition-all duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />

                <div className="absolute bottom-6 left-6 right-6 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition duration-500">
                  <p className="uppercase tracking-[3px] text-gold-300 text-xs font-poppins">
                    Baba Associates
                  </p>
                 
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

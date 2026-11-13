import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CalendarDays } from "lucide-react";
import { blogs } from "@/data/blogs";

export default function BlogPage() {
  return (
    <>
      {/* Banner */}
      <section className="relative overflow-hidden bg-gold-950 pt-36 pb-20 md:pt-44 md:pb-28">
        <Image
          src="/bestpropertydealer.webp"
          alt="Baba Associates Rohini property blog"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-gold-950/90 via-gold-950/80 to-gold-950/95" />

        <div className="relative mx-auto max-w-7xl px-6 text-center">
          <span className="text-sm font-semibold uppercase tracking-[4px] text-gold-300">
            Our Blog
          </span>

          <h1 className="mt-4 font-cinzel text-4xl font-bold text-white md:text-5xl">
            Blog
          </h1>

          <span className="mx-auto mt-6 block h-[2px] w-16 bg-gold-400" />

          <p className="mx-auto mt-6 max-w-2xl leading-8 text-gold-100/80">
            Honest guides on buying, selling, building and renovating property
            in Rohini.
          </p>
        </div>
      </section>

      {/* Posts */}
      <section className="bg-[#FBF6EC] px-6 py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogs.map((post) => (
            <Link
              key={post.slug}
              href={`/${post.slug}/`}
              className="group flex flex-col overflow-hidden rounded-2xl border border-gold-100 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative aspect-[1200/630] overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
              </div>

              <div className="flex flex-1 flex-col p-7">
                <div className="flex items-center gap-3 text-xs font-medium text-gray-500">
                  <span className="rounded-full bg-gold-50 px-3 py-1 font-semibold uppercase tracking-wider text-gold-700">
                    {post.category}
                  </span>
                  <span className="flex items-center gap-1">
                    <CalendarDays size={14} />
                    {post.date}
                  </span>
                </div>

                <h2 className="mt-4 text-xl font-bold leading-snug text-gray-900 transition group-hover:text-gold-700">
                  {post.title}
                </h2>

                <p className="mt-3 flex-1 text-sm leading-7 text-gray-600">
                  {post.excerpt}
                </p>

                <span className="mt-6 inline-flex items-center gap-2 font-semibold text-gold-700">
                  Read More
                  <ArrowRight
                    size={18}
                    className="transition group-hover:translate-x-1"
                  />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}

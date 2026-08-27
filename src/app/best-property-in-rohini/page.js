import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  Globe,
  Home,
  ShieldCheck,
  Wrench,
} from "lucide-react";

const whyRohini = [
  {
    lead: "Well-planned layout",
    text: "Rohini was developed by DDA as a planned sub-city, so roads, sectors, and parks are properly laid out",
  },
  {
    lead: "Strong connectivity",
    text: "the Red Line Metro runs through Rohini, with easy access to Rithala and nearby stations, plus good road links to the rest of Delhi",
  },
  {
    lead: "Everyday convenience",
    text: "markets, schools, colleges, and hospitals are close by in almost every sector",
  },
  {
    lead: "Green spaces",
    text: "parks like Japanese Park make Rohini more livable than many other parts of the city",
  },
  {
    lead: "Mix of housing options",
    text: "from budget builder floors to larger independent homes, there's something for most budgets",
  },
  {
    lead: "Steady property demand",
    text: "this keeps resale value healthier compared to less-developed areas nearby",
  },
];

const whatToCheck = [
  {
    lead: "Freehold ownership",
    text: "not leasehold, which makes resale and home loans harder",
  },
  {
    lead: "RERA verification",
    text: "a legal safeguard that many sellers don't mention on their own",
  },
  {
    lead: "Good construction quality",
    text: "materials and finishing that match what was promised",
  },
  {
    lead: "Clear title documents",
    text: "no confusion about who owned the property before",
  },
  {
    lead: "Honest pricing",
    text: "everything included should be written down clearly",
  },
  {
    lead: "Good location basics",
    text: "connectivity, road width, nearby markets, schools, hospitals",
  },
  {
    lead: "A seller with a real, checkable track record",
    text: "not just a listing and a phone number",
  },
];

const propertyTypes = [
  "New home construction on your own plot",
  "Builder floors in 2, 3 & 4 BHK sizes (84–170 sq. yards)",
  "Ready-to-move homes",
  "Resale properties",
  "Home renovation and redesign",
  "Plots, commercial spaces, warehouses, and farmhouses across Delhi NCR",
];

const areasServed = [
  "Rohini Sector 11",
  "Rohini Sector 15",
  "Rohini Sector 16",
  "Nearby North-West Delhi areas, including Shalimar Bagh",
  "Select projects across Delhi NCR",
];

const pastClients = [
  {
    avatar: "/testimonials/arjun.svg",
    name: "Arjun Mehta",
    tag: "New Construction, Rohini Sector 11",
    text: "a home built from the ground up on his own plot.",
  },
  {
    avatar: "/testimonials/priya.svg",
    name: "Priya Sharma",
    tag: "Home Redesign, Rohini Sector 15",
    text: "a full redesign done with close attention to detail.",
  },
  {
    avatar: "/testimonials/rohit.svg",
    name: "Rohit Verma",
    tag: "Resale Property, Rohini Sector 16",
    text: "a smooth, transparent resale deal.",
  },
  {
    avatar: "/testimonials/sneha.svg",
    name: "Sneha Kapoor",
    tag: "Renovation, Shalimar Bagh",
    text: "an old house turned into a modern home.",
  },
];

const whyBabaAssociates = [
  "Since 1998 — over two decades of steady, hands-on work in Rohini, not a newly set-up business",
  "Family-run, not a call centre — the same people who built the business handle your calls and your project directly",
  "In-house team — design, structural work, electrical, plumbing, and finishing are handled as one process, not split across random contractors",
  "Freehold, RERA-verified properties — real legal protection, not just a lower price",
  "Written timelines — a delivery date agreed in writing before work starts, with regular updates along the way",
  "Local, sector-level knowledge — direct experience in Sectors 11, 15, and 16, where rules and conditions differ block by block",
  "Everything under one roof — construction, resale, renovation, and NRI support, so you don't need five different people for one project",
  "Real, checkable history — named clients tied to real sectors, not made-up testimonials",
];

const faqs = [
  [
    "What is the best property in Rohini right now?",
    "It depends on what you need — but freehold builder floors and RERA-verified resale homes in Sectors 11, 15, and 16 usually offer the best mix of clear ownership, connectivity, and resale value. Baba Associates can show you what's currently available.",
  ],
  [
    "Who is the best property dealer in Rohini?",
    "Baba Associates, working from Sector-16, Rohini since 1998, is widely seen as one of the most trusted names — offering freehold, RERA-verified properties and a family-run team that handles every deal directly.",
  ],
  [
    "Is it better to buy freehold or leasehold property in Rohini?",
    "Freehold is almost always the safer long-term choice for anyone looking for the best property in Rohini. It gives you full ownership rights, easier resale, and faster home loan approval compared to Rohini's many leasehold DDA properties.",
  ],
  [
    "How do I check if a property listing is really RERA verified?",
    "Ask the seller for the RERA registration number and check it yourself on the Delhi RERA website before making any payment. Don't just take the listing's word for it.",
  ],
  [
    "Should I buy a ready-made property or build on my own plot?",
    "If you already own a plot, building gives you full control over the layout and finishing. If you don't, a checked resale or ready-to-move home with clean documents is usually faster and simpler.",
  ],
  [
    "Why is Rohini a good place to buy property?",
    "Rohini is a planned sub-city with strong metro and road connectivity, good schools and hospitals nearby, and steady demand — all of which help protect your property's value over time.",
  ],
  [
    "Which Rohini sectors does Baba Associates cover?",
    "Mainly Sectors 11, 15, and 16, along with nearby North-West Delhi areas like Shalimar Bagh, with a few select projects across Delhi NCR.",
  ],
  [
    "Can NRIs buy property in Rohini without visiting in person?",
    "Yes, Baba Associates offers video walkthroughs, full paperwork support, and project supervision, so NRI buyers don't need to be present in Delhi.",
  ],
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(([question, answer]) => ({
    "@type": "Question",
    name: question,
    acceptedAnswer: { "@type": "Answer", text: answer },
  })),
};

function SectionHeading({ eyebrow, title, titleClassName = "text-gray-900", children }) {
  return (
    <div>
      <span className="text-sm font-semibold uppercase tracking-[4px] text-gold-600">
        {eyebrow}
      </span>
      <h2 className={`mt-4 max-w-4xl  text-3xl font-bold md:text-4xl ${titleClassName}`}>
        {title}
      </h2>
      <span className="mt-6 block h-[2px] w-16 bg-gold-400" />
      {children && <p className="mt-6 max-w-3xl leading-8 text-gray-600">{children}</p>}
    </div>
  );
}

export default function BestPropertyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero */}
      <section className="bg-gold-950 px-6 pb-20 pt-36 text-white md:pb-28 md:pt-44">
        <div className="mx-auto max-w-7xl">
          <span className="text-sm font-semibold uppercase tracking-[4px] text-gold-300">
            Trusted in Rohini Since 1998
          </span>
          <h1 className="mt-5 max-w-7xl font-cinzel text-3xl font-bold leading-tight md:text-4xl">
            Best Property in Rohini, Delhi — Baba Associates
          </h1>
          <p className="mt-7 max-w-2xl leading-8 text-gold-100/75">
            Rohini has no shortage of property listings—builder floors, resale flats, plots, and
            ready-to-move homes. But finding the{" "}
            <Link href="/contact/" className="text-white underline decoration-gold-400 underline-offset-4 hover:text-gold-300">
              best property in Rohini
            </Link>{" "}
            usually comes down to a few simple things that don&apos;t show up in a photo: clear
            ownership, good construction, and a seller you can actually trust. Baba Associates
            has been working in Sector-16, Rohini, since 1998 and has helped many families find
            and build the right home here, with over 56,000 sq. ft. of construction delivered
            so far.
          </p>
          <Link
            href="/contact/"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-gold-400 px-7 py-4 font-semibold text-gold-950 transition hover:bg-gold-300"
          >
            Talk to Us <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* Banner Image */}
      <section className="relative w-full overflow-hidden bg-gold-950">
        <Image
          src="/bestproperty.jpeg"
          alt="Best property in Rohini, Delhi — Baba Associates"
          width={1600}
          height={900}
          priority
          sizes="100vw"
          className="block h-auto w-full"
        />
      </section>

      {/* Why Choose Rohini */}
      <section className="bg-[#FBF6EC] px-6 py-20 md:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="A planned sub-city" title="Why Choose Rohini for Your Property?">
            Before picking a builder or a property, it helps to know why Rohini is a good choice
            in the first place. Here&apos;s what makes this part of Delhi stand out:
          </SectionHeading>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {whyRohini.map((point) => (
              <div key={point.lead} className="border-t border-gold-300/60 py-5">
                <CheckCircle2 className="text-gold-600" size={22} />
                <p className="mt-3 leading-7 text-gray-700">
                  <span className="font-semibold text-gray-900">{point.lead}</span> — {point.text}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-10 max-w-4xl leading-7 text-gray-600">
            In short, Rohini gives you both a good place to live and a property that holds its
            value—which is a big reason people searching for the{" "}
            <Link href="/contact/" className="text-gold-700 underline decoration-gold-400 underline-offset-4 hover:text-gold-900">
              best property in Rohini
            </Link>{" "}
            keep landing here year after year.
          </p>
        </div>
      </section>

      {/* What Makes a Property the Best */}
      <section className="bg-white px-6 py-20 md:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="What to check before you buy" title={'What Makes a Property "the Best" in Rohini?'}>
            Rohini is a big area, and property quality can vary a lot depending on the sector,
            the seller, and the type of building. Before you finalize anything, here&apos;s what
            to check when looking for the best property in Rohini:
          </SectionHeading>

          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {whatToCheck.map((item) => (
              <div
                key={item.lead}
                className="flex gap-3 border-b border-gold-100 pb-4 text-sm leading-7 text-gray-700"
              >
                <ShieldCheck className="mt-1 shrink-0 text-gold-600" size={18} />
                <span>
                  <span className="font-semibold text-gray-900">{item.lead}</span> — {item.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Types of Properties */}
      <section className="bg-[#FBF6EC] px-6 py-20 md:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="A complete property search" title="Types of Properties Available in Rohini">
            Rohini&apos;s property market isn&apos;t one-size-fits-all, and Baba Associates
            works across most of it:
          </SectionHeading>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {propertyTypes.map((type) => (
              <div key={type} className="flex items-start gap-3 rounded-xl border border-gold-100 bg-white p-5">
                <Home className="mt-0.5 shrink-0 text-gold-600" size={18} />
                <span className="text-sm leading-6 text-gray-700">{type}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Freehold vs Leasehold */}
      <section className="bg-[#F2E7D2] px-6 py-20 md:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="A Rohini-specific advantage" title="Freehold vs. Leasehold — Why This Matters So Much">
            A lot of older properties in Rohini are DDA leasehold, and this can make resale,
            ownership transfer, and home loans harder down the line. Buyers often miss this
            detail when comparing listings. Every property built or sold through Baba Associates
            is freehold, which means full and permanent ownership rights, easier resale, and
            faster loan approval. Projects are also RERA verified, a basic check that protects
            your money legally.
          </SectionHeading>

          <p className="mt-6 max-w-3xl leading-7 text-gray-700">
            As with any property deal, it&apos;s always worth checking the title documents
            yourself before you finalize anything. That&apos;s good advice with any seller, not
            just this one.
          </p>
        </div>
      </section>

      {/* Sector-Wise Experience */}
      <section className="bg-white px-6 py-20 md:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="Block-by-block knowledge" title="Sector-Wise Property Experience">
            Property prices, connectivity, and the type of homes available can change quite a
            bit from one Rohini sector to another. Baba Associates has direct project experience
            in:
          </SectionHeading>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {areasServed.map((area) => (
              <div key={area} className="flex items-start gap-3 rounded-xl border border-gold-100 bg-[#FBF6EC] p-5">
                <CheckCircle2 className="mt-0.5 shrink-0 text-gold-600" size={18} />
                <span className="text-sm leading-6 text-gray-700">{area}</span>
              </div>
            ))}
          </div>

          <p className="mt-10 max-w-3xl leading-7 text-gray-600">
            This kind of local, sector-level experience — instead of running large city-wide
            projects — makes it easier to find the right property for your budget, since prices
            and demand can shift block by block.
          </p>
        </div>
      </section>

      {/* Building vs Buying */}
      <section className="bg-[#FBF6EC] px-6 py-20 md:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="Two paths, one goal" title="Building vs. Buying — Two Paths to the Best Property in Rohini">
            Not everyone wants a ready-made home. If you already own a plot, Baba Associates
            offers the following:
          </SectionHeading>

          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            <div className="rounded-xl border border-gold-200 bg-white p-7">
              <Wrench className="text-gold-600" size={26} />
              <h3 className="mt-4  text-xl font-bold text-gray-900">Turnkey construction</h3>
              <p className="mt-3 text-sm leading-7 text-gray-600">
                The team handles everything from the ground up to a finished, move-in-ready home.
              </p>
            </div>
            <div className="rounded-xl border border-gold-200 bg-white p-7">
              <Building2 className="text-gold-600" size={26} />
              <h3 className="mt-4 text-xl font-bold text-gray-900">Consultancy support</h3>
              <p className="mt-3 text-sm leading-7 text-gray-600">
                Expert guidance and design help, charged based on the work involved.
              </p>
            </div>
          </div>

          <p className="mt-10 max-w-3xl leading-7 text-gray-600">
            If you&apos;d rather buy something ready, resale and ready-to-move homes are checked
            for clean ownership and good construction condition before they&apos;re shown to
            you. This matters just as much as the price when deciding if something is really a
            good buy.
          </p>
        </div>
      </section>

      {/* What Past Clients Say */}
      <section className="bg-white px-6 py-20 md:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="Named, not generic" title="What Past Clients Say" />

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {pastClients.map((client) => (
              <div key={client.name} className="rounded-xl border border-gold-100 bg-[#FBF6EC] p-6">
                <div className="relative h-12 w-12 overflow-hidden rounded-full border-2 border-gold-400">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={client.avatar} alt={client.name} className="h-full w-full object-cover" />
                </div>
                <h3 className="mt-4  text-lg font-bold text-gray-900">{client.name}</h3>
                <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-gold-600">
                  {client.tag}
                </p>
                <p className="mt-3 text-sm leading-6 text-gray-600">{client.text}</p>
              </div>
            ))}
          </div>

          <p className="mt-10 max-w-3xl leading-7 text-gray-600">
            These are real names tied to real sectors that you can check yourself—not generic
            five-star reviews with no context.
          </p>
        </div>
      </section>

      {/* Why Choose Baba Associates */}
      <section className="bg-[#F2E7D2] px-6 py-20 md:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="What actually sets us apart" title="Why Choose Baba Associates?">
            With so many builders and property dealers working in Rohini, it helps to know what
            actually sets one apart before you commit — especially if you&apos;re trying to find
            the best property in Rohini without wasting weeks on site visits. Here&apos;s why
            Baba Associates is worth considering:
          </SectionHeading>

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {whyBabaAssociates.map((item) => (
              <div key={item} className="flex items-start gap-3 rounded-xl border border-gold-200 bg-white p-5">
                <CheckCircle2 className="mt-0.5 shrink-0 text-gold-600" size={18} />
                <span className="text-sm leading-6 text-gray-700">{item}</span>
              </div>
            ))}
          </div>

          <p className="mt-10 max-w-3xl leading-7 text-gray-600">
            This doesn&apos;t replace your own homework — always check title documents and RERA
            status yourself before finalizing any deal — but it&apos;s a track record worth
            comparing against any other builder or dealer in the area.
          </p>
        </div>
      </section>

      {/* NRI Buyers */}
      <section className="bg-white px-6 py-20 md:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="From anywhere in the world" title="NRI Buyers — Finding the Best Property in Rohini Remotely">
            <span className="flex items-start gap-3">
              <Globe className="mt-1 shrink-0 text-gold-600" size={20} />
              <span>
                Buying property in Delhi is genuinely hard to manage from outside the city or
                outside India. Baba Associates helps NRI clients with video walkthroughs of the
                site, complete paperwork support, and full project supervision—so you
                don&apos;t need to be in Delhi at any stage. NRIs should also check the RBI/FEMA
                rules that apply to their specific purchase before completing any transaction.
              </span>
            </span>
          </SectionHeading>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#FBF6EC] px-6 py-20 md:py-28">
        <div className="mx-auto max-w-5xl">
          <SectionHeading eyebrow="Clear answers before you decide" title="Frequently Asked Questions" />

          <div className="mt-12 space-y-3">
            {faqs.map(([question, answer]) => (
              <details
                key={question}
                className="group rounded-xl border border-gold-200 bg-white px-6 py-5"
              >
                <summary className="cursor-pointer list-none pr-8 font-semibold text-gray-900 marker:hidden">
                  {question}
                </summary>
                <p className="mt-4 max-w-4xl leading-7 text-gray-600">{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="bg-white px-6 py-20 md:py-24">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 rounded-2xl border border-gold-200 bg-gold-50 p-8 md:flex-row md:items-center md:p-12">
          <div>
            <h2 className="max-w-3xl  text-3xl font-bold text-gray-900 md:text-4xl">
              Talk to Baba Associates About Finding the Best Property in Rohini
            </h2>
            <p className="mt-4 max-w-2xl leading-7 text-gray-600">
              A property is a long-term decision, so getting the basics right — ownership,
              documents, construction quality, and pricing — matters more than any single
              listing photo. Whether you want to buy, build, renovate, or resell, Baba
              Associates can help you find what&apos;s genuinely the{" "}
              <Link href="/contact/" className="text-gold-700 underline decoration-gold-400 underline-offset-4 hover:text-gold-900">
                best property in Rohini
              </Link>{" "}
              for your needs, with real numbers and real paperwork.
            </p>
            <p className="mt-4 max-w-2xl leading-7 text-gray-600">
              Contact Baba Associates to talk about your property requirement in Rohini, Delhi.
            </p>
          </div>
          <Link
            href="/contact/"
            className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-gold-950 px-7 py-4 font-semibold text-white transition hover:bg-gold-800"
          >
            Get a Quote <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}

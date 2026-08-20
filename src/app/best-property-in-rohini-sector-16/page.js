import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  FileCheck2,
  Home,
  MapPin,
  PaintRoller,
  Ruler,
  ShieldCheck,
  Wrench,
} from "lucide-react";

const whyBuyPoints = [
  {
    lead: "Wide, planned roads.",
    text: "Dr. K.N. Katju Marg and the internal sector roads were laid out generously. In a builder floor market, road width decides your parking, your resale value, and your emergency access.",
  },
  {
    lead: "Walkable daily life.",
    text: "BCC Model School, Jain Bharti Model School, and Rockfield Public School are inside the sector. Shaheed Sukhdev College of Business Studies is here. Sector 17 and Sector 18 markets are 1–2 km away.",
  },
  {
    lead: "Real metro connectivity.",
    text: "Rohini Sector 18–19 station on the Yellow Line and Samaypur Badli serve the area. Haiderpur Badli Mor is nearby. Badli railway station is about 3 km. Netaji Subhash Place is roughly 8 km via the Outer Ring Road.",
  },
  {
    lead: "Lower entry point.",
    text: "Sector 16 remains more affordable than Sectors 9, 13, and 14, while offering the same planned DDA layout.",
  },
  {
    lead: "Established infrastructure.",
    text: "Metro Walk, Adventure Island, and Centro Mall are within about 4 km. Urban Extension Road 2 links the area towards Gurgaon.",
  },
];

const propertyTypes = [
  { title: "Residential Properties", description: "ready-to-move and under-construction homes", icon: Home },
  { title: "Plots & Floors", description: "for buyers who want to build or buy a floor", icon: Ruler },
  { title: "Luxury Properties", description: "premium residential with modern interior finish", icon: Building2 },
  { title: "Commercial Spaces", description: "for investors and business owners", icon: MapPin },
  { title: "Warehouses", description: "", icon: Building2 },
  { title: "Farmhouses", description: "", icon: Home },
];

const rateFactors = [
  "Property type — floors, plots, and residential units sit at different levels",
  "Freehold status — decides your buyer pool and your loan eligibility",
  "Road width — a 9-metre road prices differently from a 6-metre road, permanently",
  "Floor and position — corner, park-facing, and three-side-open units carry a premium",
  "Construction quality — what was done to the structure, not just the finishing",
  "Documentation — a clean title chain is worth real money at resale",
];

const services = [
  {
    title: "Buying a Home",
    icon: Home,
    points: [
      "Verified listings with legal clarity and fair pricing",
      "Site visits and virtual tours",
      "Legal documentation support",
      "Flexible payment assistance",
      "Post-sale handover support",
    ],
  },
  {
    title: "Buying or Selling a Resale Property",
    icon: FileCheck2,
    points: [
      "Fair market valuation",
      "Legal title verification",
      "Transparent negotiation",
      "Complete documentation support",
      "End-to-end transaction assistance",
    ],
  },
  {
    title: "Building on Your Own Plot",
    icon: Wrench,
    points: [
      "Custom architectural design",
      "Government approvals and NOCs",
      "Dedicated project manager",
      "Regular progress updates",
      "On-time, on-budget delivery",
    ],
  },
  {
    title: "Renovation and Redesign",
    icon: PaintRoller,
    points: [
      "Structural repair and waterproofing",
      "Electrical and plumbing upgrades",
      "Space planning and layout redesign",
      "Kitchen and bathroom remodelling",
      "3D visualisation before execution",
    ],
  },
];

const whyChooseUs = [
  "Building in Rohini since 1998, consultancy since 2010",
  "56,000+ sq. ft. constructed in Rohini, with those families still living in those homes",
  "3 lakh+ sq. ft. handled across consultancy and construction",
  "Office inside Sector 16 — I-4/21 and H-5/57, Rohini",
  "Freehold and RERA-verified properties",
  "NRI-friendly investment support",
  "Repeat and referred clients drive most of our business",
];

const faqs = [
  [
    "Who is the best property dealer in Rohini Sector 16?",
    "Baba Associates — building in Rohini since 1998, real estate consultancy since 2010. Office is inside Sector 16 itself (I-4/21 and H-5/57), with 56,000+ sq. ft. constructed in Rohini and 3 lakh+ sq. ft. handled overall across consultancy and construction.",
  ],
  [
    "Where is the right property located within Rohini Sector 16?",
    "It depends on pocket, road width, and freehold status — a 9-metre road prices differently from a 6-metre road, permanently, and corner, park-facing, and three-side-open units carry a premium. There is no single best spot; we assess this against what you need the property to do, and provide fair market valuation on any specific unit.",
  ],
  [
    "How do I find the best property in Rohini Sector 16?",
    "Start with the right pocket, the right road, and clean paperwork. We handle fair market valuation, legal title verification, and complete documentation on every transaction — get a quote and tell us what you are looking for.",
  ],
  [
    "Where can I get builder floors in Rohini Sector 16?",
    "Directly from us — we build them, not just sell them. Current developments include 2 BHK (84 sq. yards), 3 BHK (90 and 130 sq. yards), and 4 BHK (170 sq. yards) luxury concept floors with premium interior finish.",
  ],
  [
    "How much does property cost in Rohini Sector 16?",
    "There is no single rate. Property type, freehold status, road width, floor position, construction quality, and documentation each move the price significantly — two units in the same block can differ substantially. Get a quote for a realistic figure on a specific block or pocket.",
  ],
  [
    "Where is Rohini Sector 16 connected by metro?",
    "Rohini Sector 18–19 on the Yellow Line is closest, with Samaypur Badli also serving the area. Haiderpur Badli Mor is nearby, and Badli railway station is roughly 3 km away.",
  ],
  [
    "How do I sell my property in Rohini Sector 16?",
    "We provide fair market valuation, legal title verification, transparent negotiation, and complete documentation support — end-to-end transaction assistance from listing to handover.",
  ],
  [
    "Who builds custom homes on my own plot in Rohini Sector 16?",
    "We do — either turnkey (we handle everything from architectural planning to final finishing) or consultancy (you retain control, we guide and charge per scope). Every project includes custom architectural design, approvals, a dedicated project manager, and 3D visualisation before execution.",
  ],
  [
    "How is an old home in Rohini Sector 16 renovated?",
    "We cover structural repair, waterproofing, electrical and plumbing upgrades, space planning, kitchen and bathroom remodelling, and 3D visualisation before execution — often the better route than buying again.",
  ],
  [
    "Who do I contact for NRI property investment in Rohini Sector 16?",
    "Baba Associates offers NRI-friendly support, including legal documentation, verification, and end-to-end transaction handling for buyers who can't be present at every stage.",
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
      <h2
        className={`mt-4  text-2xl font-bold md:text-3xl lg:text-4xl lg:whitespace-nowrap ${titleClassName}`}
      >
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
          <div>
            <span className="text-sm font-semibold uppercase tracking-[4px] text-gold-300">
              Property in Rohini Sector 16
            </span>
            <h1 className="mt-5 font-cinzel text-4xl font-bold leading-tight md:text-5xl lg:text-6xl lg:whitespace-nowrap">
              Best Property in Rohini Sector 16
            </h1>
            <p className="mt-7 max-w-5xl text-lg leading-8 text-gold-100/75">
              Buy, sell, build, or renovate in Sector 16 with a firm whose office is in Sector 16.
            </p>
            <p className="mt-5 max-w-5xl leading-8 text-gold-100/65">
              Baba Associates operates from I-4/21 and H-5/57, Sector-16, Rohini. We started as
              builders in 1998 and became a
             
                real estate consultancy
            
              in 2010, which means we handle both sides — finding you the right property, and
              building it if you already own the plot.
            </p>
            <p className="mt-5 max-w-5xl leading-8 text-gold-100/65">
              Finding the{" "}
              <Link href="/contact/" className="text-white underline decoration-gold-400 underline-offset-4 hover:text-gold-300">
                best property in Rohini Sector 16
              </Link>{" "}
              comes down to the right pocket, the right road, and clean paperwork. We handle
              fair market valuation, legal title verification, and complete documentation
              support on every transaction.
            </p>
            <Link
              href="/contact/"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-gold-400 px-7 py-4 font-semibold text-gold-950 transition hover:bg-gold-300"
            >
              Get a Quote <ArrowRight size={18} />
            </Link>
            <p className="mt-3 text-sm text-gold-100/60">
              Tell us what you are looking for and we will get back to you.
            </p>
          </div>
        </div>
      </section>

      {/* Image */}
      <section className="relative w-full overflow-hidden bg-gold-950">
        <Image
          src="/propertyrohini16.jpeg"
          alt="Best property in Rohini Sector 16 by Baba Associates"
          width={2047}
          height={1331}
          priority
          sizes="100vw"
          className="block h-auto w-full"
        />
      </section>

      {/* Why Buy */}
      <section className="bg-[#FBF6EC] px-6 py-20 md:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="A planned north Rohini address"
            title="Why Buy Property in Rohini Sector 16"
          >
            Sector 16 sits in north Rohini, developed under DDA&apos;s earlier planning phases.
            That gives it a structural advantage newer sectors do not have.
          </SectionHeading>

          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {whyBuyPoints.map((point) => (
              <div key={point.lead} className="border-t border-gold-300/60 py-5">
                <CheckCircle2 className="text-gold-600" size={22} />
                <p className="mt-3 leading-7 text-gray-700">
                  <span className="font-semibold text-gray-900">{point.lead}</span>{" "}
                  {point.text}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-12 max-w-4xl border-l-2 border-gold-500 pl-5 text-sm leading-7 text-gray-600">
            What you should also know: parking is tight in the older pockets, stray cattle on
            some internal roads is a genuine local complaint, and a few connecting roads need
            repair. You should hear this before possession, not after.
          </p>
        </div>
      </section>

      {/* Property We Deal In */}
      <section className="bg-white px-6 py-20 md:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="A complete property search" title="Property We Deal In">
            Every buyer&apos;s idea of the right home is different, which is why the best
            property in Rohini Sector 16 changes depending on who&apos;s asking. We deal across:
          </SectionHeading>

          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {propertyTypes.map(({ title, description, icon: Icon }) => (
              <div key={title} className="rounded-xl border border-gold-100 bg-[#FBF6EC] p-6">
                <Icon className="text-gold-600" size={26} />
                <h3 className="mt-5 font-cinzel text-xl font-bold text-gray-900">
                  {title === "Plots & Floors" ? (
                    <Link href="/services/" className="hover:text-gold-700 transition">
                      {title}
                    </Link>
                  ) : (
                    title
                  )}
                </h3>
                {description && (
                  <p className="mt-2 text-sm leading-7 text-gray-600">{description}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Builder Floor */}
      <section className="bg-[#F2E7D2] px-6 py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl ">
          <SectionHeading eyebrow="Built by Baba Associates" title="Builder Floor in Rohini Sector 16">
            We build{" "}
            <Link href="/services/" className="text-gold-700 underline decoration-gold-400 underline-offset-4 hover:text-gold-900">
              builder floors
            </Link>
            , not just sell them. Our current developments are luxury concept floors:
          </SectionHeading>

          <div>
            <div className="overflow-hidden rounded-xl border border-gold-200 bg-white">
              <div className="grid grid-cols-2 bg-gold-950 px-5 py-4 text-sm font-semibold text-gold-100">
                <span>Configuration</span>
                <span>Size</span>
              </div>
              {[
                ["2 BHK Floor", "84 sq. yards"],
                ["3 BHK Floor", "90 sq. yards"],
                ["3 BHK Floor", "130 sq. yards"],
                ["4 BHK Floor", "170 sq. yards"],
              ].map(([configuration, size]) => (
                <div
                  key={`${configuration}-${size}`}
                  className="grid grid-cols-2 border-t border-gold-100 px-5 py-4 text-gray-700"
                >
                  <span>{configuration}</span>
                  <span>{size}</span>
                </div>
              ))}
            </div>

            <p className="mt-6 leading-7 text-gray-700">
              Every one is designed with premium interior finish, modern layout planning, and
              quality construction.
            </p>

            <p className="mt-6 font-semibold text-gray-900">Two ways we work as builders:</p>

            <div className="mt-4 grid gap-5 sm:grid-cols-2">
              <div className="rounded-xl border border-gold-200 bg-white p-6">
                <h3 className="font-cinzel text-xl font-bold text-gray-900">Turnkey model</h3>
                <p className="mt-3 text-sm leading-7 text-gray-600">
                  We take care of everything from ground zero to complete building construction,
                  including architectural planning, structural engineering, approvals, material
                  sourcing, and final finishing.
                </p>
              </div>
              <div className="rounded-xl border border-gold-200 bg-white p-6">
                <h3 className="font-cinzel text-xl font-bold text-gray-900">Consultancy model</h3>
                <p className="mt-3 text-sm leading-7 text-gray-600">
                  We provide expert guidance and charge according to the scope of work, while you
                  retain control of the project.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Property Rates */}
      <section className="bg-white px-6 py-20 md:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="Know what drives value" title="Rohini Sector 16 Property Rates">
            There is no single rate for the sector, and any figure quoted without seeing the
            property is a guess. These factors set the price:
          </SectionHeading>

          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {rateFactors.map((item) => (
              <div
                key={item}
                className="flex gap-3 border-b border-gold-100 pb-4 text-sm leading-7 text-gray-700"
              >
                <ShieldCheck className="mt-1 shrink-0 text-gold-600" size={18} />
                <span>{item}</span>
              </div>
            ))}
          </div>

          <p className="mt-10 max-w-4xl leading-7 text-gray-700">
            Two floors in the same block can differ substantially for these reasons alone. This
            is exactly why identifying the best property in Rohini Sector 16 takes a proper
            valuation, not a per-square-foot average.
          </p>

          <p className="mt-4 max-w-4xl leading-7 text-gray-700">
            We provide fair market valuation on any property before you commit.
          </p>

          <p className="mt-6 text-lg font-medium text-gray-800">
            Get a Quote for current{" "}
            <Link href="/contact/" className="text-gold-700 underline decoration-gold-400 underline-offset-4 hover:text-gold-900">
              Rohini Sector 16 property rates
            </Link>{" "}
            on a specific block or pocket.
          </p>
        </div>
      </section>

      {/* What We Handle For You */}
      <section className="bg-[#FBF6EC] px-6 py-20 md:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="From site visit to handover" title="What We Handle for You">
            From the first site visit to the final handover, our job is to make sure you
            actually land the best property in Rohini Sector 16 — not just the first one that
            fits your budget.
          </SectionHeading>

          <div className="mt-14 grid gap-5 md:grid-cols-2">
            {services.map(({ title, icon: Icon, points }) => (
              <div key={title} className="rounded-xl border border-gold-100 bg-white p-7">
                <Icon className="text-gold-600" size={26} />
                <h3 className="mt-5 font-cinzel text-2xl font-bold text-gray-900">
                  {title === "Renovation and Redesign" ? (
                    <Link href="/services/" className="hover:text-gold-700 transition">
                      {title}
                    </Link>
                  ) : (
                    title
                  )}
                </h3>
                <ul className="mt-5 space-y-3">
                  {points.map((point) => (
                    <li key={point} className="flex gap-3 text-sm leading-6 text-gray-700">
                      <CheckCircle2 className="mt-0.5 shrink-0 text-gold-600" size={17} />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Baba Associates */}
      <section className="bg-gold-950 px-6 py-20 text-white md:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="A track record in Rohini"
            title="Why Choose Baba Associates"
            titleClassName="text-white"
          >
            <span className="text-gold-100/70">
              Our track record is the reason clients trust us to find the{" "}
              <Link href="/contact/" className="text-white underline decoration-gold-400 underline-offset-4 hover:text-gold-300">
                best property in Rohini Sector 16
              </Link>
              , not just list one.
            </span>
          </SectionHeading>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {whyChooseUs.map((item, index) => (
              <div key={item} className="border-t border-gold-400/40 pt-4 text-sm leading-7 text-gold-100/80">
                <CheckCircle2 className="mb-3 text-gold-400" size={20} />
                {index === 0 ? (
                  <Link href="/about-us/" className="underline decoration-gold-400/60 underline-offset-4 hover:text-white">
                    {item}
                  </Link>
                ) : (
                  item
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#FBF6EC] px-6 py-20 md:py-28">
        <div className="mx-auto max-w-5xl">
          <SectionHeading eyebrow="Clear answers before you decide" title="Frequently Asked Questions">
            Find practical answers about buying, selling, building and renovating property in
            Rohini Sector 16.
          </SectionHeading>

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
            <h2 className="max-w-3xl font-cinzel text-3xl font-bold text-gray-900 md:text-4xl">
              Find Your Property in Sector 16
            </h2>
            <p className="mt-4 max-w-2xl leading-7 text-gray-600">
              Listing portals show you what is advertised. They do not show you which pocket
              suits you, which papers will hold up, or what a property is actually worth.
            </p>
            <p className="mt-4 max-w-2xl leading-7 text-gray-600">
              Whether you are looking for the best property in Rohini Sector 16 to buy, a home
              to sell, a plot to build on, or a renovation of a home you already own — talk to
              us.
            </p>
          </div>
          <div className="flex shrink-0 flex-col items-start gap-3 md:items-end">
            <Link
              href="/contact/"
              className="inline-flex items-center gap-2 rounded-xl bg-gold-950 px-7 py-4 font-semibold text-white transition hover:bg-gold-800"
            >
              Get a Quote <ArrowRight size={18} />
            </Link>
            <p className="text-sm leading-6 text-gray-500">
              Baba Associates
              <br />
              I-4/21 &amp; H-5/57, Sector-16, Rohini, Delhi
              <br />
              rohinihomes.in
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

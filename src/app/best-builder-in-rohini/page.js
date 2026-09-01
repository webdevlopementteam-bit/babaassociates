import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  Globe,
  Home,
  MapPin,
  ShieldCheck,
  Wrench,
} from "lucide-react";

const services = [
  "New home construction on your own plot",
  "Builder floors in Rohini (2, 3 & 4 BHK)",
  "Ready-to-move homes",
  "Resale properties",
  "Home renovation",
  "Home redesign",
  "Property consultation",
  "NRI property support",
];

const preConstructionChecklist = [
  "House design and floor plan",
  "Plot size and number of floors",
  "Construction materials",
  "Interior requirements",
  "Estimated budget and payment terms",
  "Project timeline (committed in writing)",
  "Finishing specifications",
];

const areasServed = [
  "Rohini Sector 11",
  "Rohini Sector 15",
  "Rohini Sector 16",
  "Nearby North-West Delhi areas, including Shalimar Bagh",
  "Select projects across Delhi NCR",
];

const realProjects = [
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
    text: "a full redesign delivered with close attention to detail.",
  },
  {
    avatar: "/testimonials/rohit.svg",
    name: "Rohit Verma",
    tag: "Resale Property, Rohini Sector 16",
    text: "a transparent, hassle-free resale transaction.",
  },
  {
    avatar: "/testimonials/sneha.svg",
    name: "Sneha Kapoor",
    tag: "Renovation, Shalimar Bagh",
    text: "an old house transformed into a modern home.",
  },
];

const comparisonFactors = [
  {
    lead: "Local experience",
    text: "years actually working in Rohini's specific sectors, not just Delhi NCR broadly",
  },
  {
    lead: "Clear pricing",
    text: "exactly what's included in the property price or construction cost, in writing",
  },
  {
    lead: "Construction standards",
    text: "materials, workmanship, and finishing matching agreed specifications",
  },
  {
    lead: "Proper documentation",
    text: "freehold/leasehold status, RERA verification, title clarity",
  },
  {
    lead: "Committed timeline",
    text: "a written delivery schedule, not a verbal estimate",
  },
  {
    lead: "Customer support",
    text: "communication before, during, and after the project",
  },
  {
    lead: "Verifiable proof",
    text: "named testimonials tied to real locations, and projects you can actually visit",
  },
];

const faqs = [
  [
    "Who is the best builder in Rohini, Delhi?",
    "Baba Associates, based in Sector-16, Rohini since 1998, is widely regarded as the best builder in Rohini — with over 56,000 sq. ft. of delivered construction, RERA-verified freehold properties, and a family-run team handling construction, legal work, and interiors in-house.",
  ],
  [
    "Is it better to choose a local Rohini builder or a large city-wide developer?",
    "For construction on your own plot or renovation work, a local builder with deep Rohini-specific experience — local approvals, soil conditions, DDA norms — is typically more responsive and cost-effective than a large developer built for high-rise projects.",
  ],
  [
    "Are Baba Associates' properties freehold or leasehold?",
    "All residential floors are freehold, offering full ownership rights, easier resale, and faster home loan approval compared to Rohini's many leasehold DDA properties.",
  ],
  [
    "Can I build a custom home on my own plot with Baba Associates?",
    "Yes — through either a turnkey model (full end-to-end construction) or a consultancy model (expert guidance with scope-based charges). Plot ownership stays with you throughout, and design, floor plan, and finishing preferences are worked out with you directly.",
  ],
  [
    "Does Baba Associates offer builder floors in Rohini?",
    "Yes — 2, 3, and 4 BHK freehold builder floors ranging from 84 to 170 sq. yards, finished with premium interiors, based on current project availability.",
  ],
  [
    "What should I check before buying a builder floor?",
    "Location, construction quality, floor plan, parking, ventilation, ownership documents, RERA/freehold status, price, and overall condition — before finalizing any purchase.",
  ],
  [
    "Do they help NRIs build or buy property in Rohini?",
    "Yes — including remote video walkthroughs, full documentation support, and complete project supervision, so NRI owners don't need to be present in Delhi.",
  ],
  [
    "Which areas does Baba Associates cover?",
    "Primarily Rohini — Sectors 11, 15, and 16 — and nearby North-West Delhi localities like Shalimar Bagh, with select projects across Delhi NCR.",
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
      <h2 className={`mt-4 max-w-6xl  text-3xl font-semibold md:text-4xl ${titleClassName}`}>
        {title}
      </h2>
      <span className="mt-6 block h-[2px] w-16 bg-gold-400" />
      {children && <p className="mt-6 max-w-3xl leading-8 text-gray-600">{children}</p>}
    </div>
  );
}

export default function BestBuilderPage() {
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
            Rohini's Trusted Builder Since 1998
          </span>
          <h1 className="mt-5 max-w-7xl font-cinzel text-4xl font-semibold leading-tight md:text-4xl">
            Best Builder in Rohini, Delhi — Baba Associates
          </h1>
          <p className="mt-7 max-w-5xl leading-8 text-gold-100/75">
            A good home starts with the right builder — and in Rohini, that reputation has to
            be earned over years, not claimed overnight. Baba Associates, operating from
            Sector-16, Rohini since 1998, is widely regarded as the <Link href="/contact" className="text-gold-400 hover:text-gold-300">
              best builder in Rohini
            </Link>—
            with over 56,000 sq. ft. of delivered construction, RERA-verified freehold
            properties, an in-house team, and a family that has run the business hands-on since
            day one.
          </p>
          <p className="mt-5 max-w-2xl leading-8 text-gold-100/65">
            For anyone comparing builders in Rohini, the factors that actually matter are
            construction quality, years of local experience, clear ownership documents,
            transparent pricing, and real project proof — not just a listing with a phone
            number. Here&apos;s exactly how it measures up on each.
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
          src="/bestbuilder.jpeg"
          alt="Best builder in Rohini, Delhi — Baba Associates"
          width={1600}
          height={900}
          priority
          sizes="100vw"
          className="block h-auto w-full"
        />
      </section>

      {/* Why Baba Associates Is the Best Builder */}
      <section className="bg-[#FBF6EC] px-6 py-20 md:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="A complete builder, not a listing" title="Why Baba Associates Is the Best Builder in Rohini">
            Choosing a builder is a long-term decision — you&apos;re trusting someone with your
            plot, your savings, and years of your life. A good builder should understand your
            needs and give you clear information about the property, the construction work, the
            cost, and the timeline without vague answers.
          </SectionHeading>

          <p className="mt-10 max-w-3xl leading-7 text-gray-700">
            Baba Associates covers the full range of residential needs under one roof:
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {services.map((service) => (
              <div key={service} className="flex items-start gap-3 rounded-xl border border-gold-100 bg-white p-5">
                <CheckCircle2 className="mt-0.5 shrink-0 text-gold-600" size={18} />
                <span className="text-sm leading-6 text-gray-700">{service}</span>
              </div>
            ))}
          </div>

          <p className="mt-10 max-w-3xl leading-7 text-gray-600">
            This makes it a suitable single point of contact for customers who need both
            property and construction services in Rohini, instead of juggling separate
            contractors, agents, and consultants.
          </p>
        </div>
      </section>

      {/* A Traceable History */}
      <section className="bg-white px-6 py-20 md:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="Founded 1998" title="A Traceable History, Not a Claim">
            Baba Associates started as a construction firm in 1998, founded by Sh. Goverdhan
            Dass Wanvani, and formally expanded into full real estate consultancy in 2010 under
            co-founder Mr. Lalit Wanvani (B.Tech). Today it&apos;s run by a family team — Mr.
            Madhukar Wanvani handles sales and operations, Mr. Ish Kumar Wanvani leads sales and
            marketing — meaning the people who answer your call are the same people accountable
            for your project, not a rotating call centre.
          </SectionHeading>
        </div>
      </section>

      {/* Residential Construction Services */}
      <section className="bg-[#FBF6EC] px-6 py-20 md:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="Built as one continuous process" title="Residential Construction Services in Rohini">
            Building a home isn&apos;t only about attractive interiors — good planning, strong
            structural work, and proper finishing matter just as much. For customers building on
            their own plot, Baba Associates&apos; in-house team handles design coordination,
            structural work, electrical, plumbing, flooring, and finishing as one continuous
            process, not handed off between subcontractors.
          </SectionHeading>

          <p className="mt-10 max-w-3xl leading-7 text-gray-700">
            Before construction starts, it helps to have clarity on:
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {preConstructionChecklist.map((item) => (
              <div key={item} className="flex items-start gap-3 rounded-xl border border-gold-100 bg-white p-5">
                <CheckCircle2 className="mt-0.5 shrink-0 text-gold-600" size={18} />
                <span className="text-sm leading-6 text-gray-700">{item}</span>
              </div>
            ))}
          </div>

          <p className="mt-10 max-w-3xl leading-7 text-gray-600">
            Baba Associates commits to a delivery timeline in writing before work begins and
            shares regular progress updates throughout — so you always know the current stage of
            construction, not just the promised end date.
          </p>
        </div>
      </section>

      {/* Builder Floors */}
      <section className="bg-white px-6 py-20 md:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="2, 3 & 4 BHK freehold floors" title="Builder Floors in Rohini">
            Builder floors remain a popular choice in Rohini for buyers who want more privacy
            and independence than a typical apartment offers. Baba Associates&apos; builder
            floors are available in 2 BHK, 3 BHK, and 4 BHK configurations ranging from 84 to
            170 sq. yards, finished with premium interiors — and depending on project
            availability.
          </SectionHeading>

          <p className="mt-6 max-w-3xl leading-7 text-gray-600">
            Beyond interiors, what actually determines whether a builder floor is a good buy is
            construction quality, ventilation and natural light, floor plan efficiency, parking,
            and — critically in Rohini — ownership documents. This is exactly where the best
            builder in Rohini tends to stand apart from smaller, unregistered dealers.
          </p>
        </div>
      </section>

      {/* Freehold Advantage */}
      <section className="bg-[#F2E7D2] px-6 py-20 md:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="RERA verified, always freehold" title="Freehold, Not Leasehold — a Real Rohini-Specific Advantage">
            A large share of older properties in Rohini are DDA leasehold, which complicates
            resale, title transfer, and home loan approval. Every residential floor Baba
            Associates builds or sells is freehold — giving you full and permanent ownership
            rights, simpler resale, and faster loan processing. Projects are also RERA verified,
            a basic but often-skipped check that protects your investment legally. As always
            with any property purchase, it&apos;s worth independently verifying title documents
            before finalizing — that&apos;s good practice with any builder, not a caveat
            specific to this one.
          </SectionHeading>
        </div>
      </section>

      {/* Build On Your Plot */}
      <section className="bg-white px-6 py-20 md:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="Two ways to build" title="Build Your Home on Your Own Plot">
            Owning a plot gives you the freedom to design a home around your family&apos;s
            needs — but managing construction yourself, across multiple contractors and teams,
            can quickly become overwhelming. Baba Associates offers two ways to build on your
            own plot:
          </SectionHeading>

          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            <div className="rounded-xl border border-gold-200 bg-[#FBF6EC] p-7">
              <Wrench className="text-gold-600" size={26} />
              <h3 className="mt-4 font-cinzel text-xl font-bold text-gray-900">Turnkey model</h3>
              <p className="mt-3 text-sm leading-7 text-gray-600">
                The firm manages everything from ground zero to a completed, move-in-ready
                building.
              </p>
            </div>
            <div className="rounded-xl border border-gold-200 bg-[#FBF6EC] p-7">
              <Building2 className="text-gold-600" size={26} />
              <h3 className="mt-4 font-cinzel text-xl font-bold text-gray-900">Consultancy model</h3>
              <p className="mt-3 text-sm leading-7 text-gray-600">
                Expert guidance and design/structural support, billed based on scope of work.
              </p>
            </div>
          </div>

          <p className="mt-10 max-w-3xl leading-7 text-gray-600">
            In both models, plot ownership stays with you throughout. A custom-built home can be
            planned around your preferred bedroom count, floor layout, parking, kitchen, and
            finishing choices — the kind of hands-on flexibility that&apos;s earned Baba
            Associates its name as the <Link href="/contact" className="text-gold-400 hover:text-gold-300">
              best builder in Rohini
            </Link> for plot owners.
          </p>
        </div>
      </section>

      {/* Areas Served */}
      <section className="bg-[#FBF6EC] px-6 py-20 md:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="Hyper-local, sector-level experience" title="Areas Served in Rohini">
            Rohini spans many sectors, and property values, road connectivity, and available
            home types vary noticeably between them. Baba Associates has direct project
            experience in:
          </SectionHeading>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {areasServed.map((area) => (
              <div key={area} className="flex items-start gap-3 rounded-xl border border-gold-100 bg-white p-5">
                <MapPin className="mt-0.5 shrink-0 text-gold-600" size={18} />
                <span className="text-sm leading-6 text-gray-700">{area}</span>
              </div>
            ))}
          </div>

          <p className="mt-10 max-w-3xl leading-7 text-gray-600">
            This kind of hyper-local, sector-level experience — not city-wide, high-rise-scale
            operations — is what makes response times faster and cost estimates more accurate
            for plot-based construction and renovation work.
          </p>
        </div>
      </section>

      {/* NRI Services */}
      <section className="bg-white px-6 py-20 md:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="Property support from anywhere" title="NRI-Friendly Property Services">
            <span className="flex items-start gap-3">
              <Globe className="mt-1 shrink-0 text-gold-600" size={20} />
              <span>
                Buying or building a home in Delhi is genuinely difficult to manage from outside
                the city or outside India. Baba Associates supports NRI clients with remote
                video walkthroughs of sites, complete documentation and paperwork handling, and
                full project supervision — so you don&apos;t need to be physically present in
                Delhi at any stage of construction or purchase. (NRIs should also confirm the
                RBI/FEMA rules applicable to their specific purchase before completing any
                transaction.)
              </span>
            </span>
          </SectionHeading>
        </div>
      </section>

      {/* Real Projects */}
      <section className="bg-[#FBF6EC] px-6 py-20 md:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="Named, not generic" title="Real Projects, Real Sectors — Not Stock Testimonials" />

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {realProjects.map((project) => (
              <div key={project.name} className="rounded-xl border border-gold-100 bg-white p-6">
                <div className="relative h-12 w-12 overflow-hidden rounded-full border-2 border-gold-400">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={project.avatar} alt={project.name} className="h-full w-full object-cover" />
                </div>
                <h3 className="mt-4 font-cinzel text-lg font-bold text-gray-900">{project.name}</h3>
                <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-gold-600">
                  {project.tag}
                </p>
                <p className="mt-3 text-sm leading-6 text-gray-600">{project.text}</p>
              </div>
            ))}
          </div>

          <p className="mt-10 max-w-3xl leading-7 text-gray-600">
            These are tied to specific sectors you can independently verify — not generic
            five-star quotes with no context.
          </p>
        </div>
      </section>

      {/* How to Compare */}
      <section className="bg-white px-6 py-20 md:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="Compare on real factors" title="What Makes a Good Builder in Rohini? (How to Actually Compare)">
            There are many builders and property dealers across Rohini and Delhi NCR, so
            it&apos;s worth comparing on real factors rather than star ratings alone:
          </SectionHeading>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {comparisonFactors.map((factor) => (
              <div key={factor.lead} className="flex gap-3 border-b border-gold-100 pb-5">
                <ShieldCheck className="mt-1 shrink-0 text-gold-600" size={18} />
                <p className="text-sm leading-7 text-gray-700">
                  <span className="font-semibold text-gray-900">{factor.lead}</span> —{" "}
                  {factor.text}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-10 max-w-3xl leading-7 text-gray-600">
            Visiting completed or ongoing projects, and speaking to past clients directly,
            remains the single most reliable way to judge a builder&apos;s actual work — beyond
            anything a website or directory listing can tell you.
          </p>
        </div>
      </section>

      {/* Beyond Rohini */}
      <section className="bg-[#F2E7D2] px-6 py-20 md:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="Delhi NCR reach" title="Beyond Rohini">
            Baba Associates also deals in plots, luxury properties, commercial spaces,
            warehouses, and farmhouses across Delhi NCR, having managed over 3 lakh sq. ft. of
            property as a consultancy — with core project delivery concentrated in
            Rohini&apos;s Sector 11, Sector 15, Sector 16, and nearby Shalimar Bagh.
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
            <h2 className="max-w-3xl font-cinzel text-3xl font-bold text-gray-900 md:text-4xl">
              Talk to the Best Builder in Rohini About Your Home
            </h2>
            <p className="mt-4 max-w-2xl leading-7 text-gray-600">
              A home is a long-term investment, so the builder you choose matters as much as the
              plot or property itself. Whether you need a builder floor in Rohini, a
              ready-to-move home, new construction on your own plot, or a renovation — Baba
              Associates, the best builder in Rohini, can walk you through the real options,
              with real numbers and real timelines.
            </p>
            <p className="mt-4 max-w-2xl leading-7 text-gray-600">
              Contact Baba Associates to discuss your property or construction requirement in
              Rohini, Delhi.
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

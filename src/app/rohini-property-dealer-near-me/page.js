import Link from "next/link";
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  FileCheck2,
  Home,
  MapPin,
  PaintRoller,
  ShieldCheck,
  Wrench,
} from "lucide-react";
import Image from "next/image";

const services = [
  {
    title: "Build on Your Own Plot",
    icon: Wrench,
    text: `Own a plot in Rohini? We build your house on it, from start to finish.

Choose turnkey, where we handle everything from ground zero to a finished building — layout, structure, plumbing, electrical, finishing and interiors. Or choose consultancy, where you run the project yourself and we guide you at each stage, charging as per scope of work.

Your plot stays in your name throughout. We give you a written timeline before work begins and share regular progress updates, so you always know which stage your house is at.`,
  },
  {
    title: "Ready-to-Move Builder Floors",
    icon: Building2,
    text: `We build and sell premium floors in Rohini — 2 BHK of 84 sq. yards, 3 BHK of 130 sq. yards and 4 BHK of 170 sq. yards, all with quality interiors.

All our floors are freehold. That means full permanent ownership, easier resale and faster home loan approval. Many older DDA properties in Rohini are still leasehold, so wherever you buy, always ask for the conversion certificate first.`,
  },
  {
    title: "Buying Property in Rohini",
    icon: Home,
    text: `Tell us your budget, your preferred sectors and what your family needs — parking, lift, floor, distance from school or metro. We shortlist properties that genuinely fit, including ones that are not ours.

We check papers before you pay any advance: title chain, sanctioned building plan, freehold status, tax dues and any existing loan on the property. In older Rohini sectors, extra floors built without MCD approval are common, so this check is important.

We negotiate on your behalf. One useful thing to know — prices on property portals are asking prices, not closing prices. Real deals in Rohini often close below the listed figure, so do not fix your budget from a portal number alone.`,
  },
  {
    title: "Selling Your Property",
    icon: FileCheck2,
    text: `We tell you what your property is actually worth, not an inflated figure to win your listing. An overpriced property sits unsold for months and usually sells for less than it would have at the right price.

We handle valuation, listing, buyer screening, negotiation and the full paperwork up to registry and mutation.`,
  },
  {
    title: "Renovation and Interiors",
    icon: PaintRoller,
    text: `Our in-house team of interior designers, architects and permanent contractors handles modular kitchens, bathrooms, flooring, false ceilings, electrical upgrades and exterior facade work.

This is especially useful right after a resale purchase. Older Rohini homes are usually structurally sound but dated, and a planned renovation costs far less than the price gap between an old floor and a newly built one.`,
  },
  {
    title: "Commercial Property, Plots and More",
    icon: MapPin,
    text: `We also deal in commercial spaces, plots, warehouses and farmhouses across Rohini and Delhi NCR.`,
  },
];

const whyChooseUs = [
  {
    lead: "We build and we deal.",
    text: "Most firms in Rohini do only one. Building here since 1998 means we recognise weak construction, not just weak paperwork.",
  },
  {
    lead: "Our office is real.",
    text: `Many "property dealers in Rohini" you find online are lead-selling websites with no office in Rohini at all. Ours is in Sector-16 and you are welcome to visit before committing to anything.`,
  },
  {
    lead: "Everything in-house.",
    text: "Construction, legal documentation, sales and interiors are handled by our own team. You are never passed on to a third party midway.",
  },
  {
    lead: "We say no.",
    text: "If your budget does not suit the sector you want, we will say so instead of pushing you into a heavy loan. If your asking price is too high, we will tell you that too.",
  },
  {
    lead: "NRI friendly.",
    text: "We offer video walkthroughs of sites, complete documentation support and full project supervision, so you do not need to be in Delhi to buy or build.",
  },
];

const faqs = [
  [
    "1. Who is the best Rohini property dealer near me?",
    "The right property dealer in Rohini depends on your sector and requirement, but look for one with a physical office in Rohini, a verifiable RERA number, named staff and closed deals in your sector. Baba Associates has worked from Sector-16, Rohini since 1998, has constructed over 56,000 sq. ft. in Rohini, and handles construction, resale, rentals and renovation in-house.",
  ],
  [
    "2. How much commission does a property dealer in Rohini charge?",
    "Property dealers in Rohini typically charge 1% to 2% of the transaction value from each party for a sale, and one month's rent for a rental. Brokerage is not fixed by law in Delhi and is negotiable. Always agree the exact percentage in writing before work starts.",
  ],
  [
    "3. What is the property rate in Rohini per sq ft in 2026?",
    "Property in Rohini averages around ₹13,000 to ₹14,100 per sq. ft. for flats as of mid-2026, with builder floors ranging roughly ₹8,650 to ₹14,700 per sq. ft. Rates vary sharply by sector — Sector 13 sits near the top, while Sectors 16, 22 and 28 are more affordable. The Rohini residential circle rate is around ₹6,506 per sq. ft. after the January 2026 revision.",
  ],
  [
    "4. Which sector in Rohini is best to buy property?",
    "Sectors 13, 14 and 18 are the most developed and cost the most, suiting buyers who want established infrastructure and strong resale. Sectors 16, 22, 25 and 28 offer better value with settled infrastructure, ideal for first-time buyers of independent floors. Sectors 34 to 37 have the lowest entry prices and good long-term appreciation, but weaker social infrastructure today.",
  ],
  [
    "5. How do I find a genuine property dealer in Rohini?",
    "Look for a dealer with a physical office you can visit in Rohini, a RERA registration number you can verify on the Delhi RERA portal, named staff rather than an anonymous firm, and a track record in the specific sector you are buying in. Ask to see original documents rather than photocopies, and agree the brokerage percentage in writing before any work begins. Baba Associates operates from an office at I-4/21 & H-5/57, Sector-16, Rohini, with a named family team and both construction and consultancy experience in Rohini since 1998.",
  ],
  [
    "6. What documents should I check before buying property in Rohini?",
    "Check the chain of title, registered sale deed, freehold conversion certificate if the property was DDA leasehold, MCD-sanctioned building plan, mutation records, latest property tax receipts, and electricity and water no-dues certificates. Also run an encumbrance check for any existing mortgage, and insist on originals rather than photocopies.",
  ],
  [
    "7. Can I build a house on my own plot in Rohini?",
    "Yes, you can build on a plot you own in Rohini, subject to MCD-sanctioned building plans and the floor area ratio limits for your plot size and sector. Baba Associates offers this as a turnkey service from ground zero to finished building, or as a consultancy where we guide you and charge as per scope. Plot ownership stays with you throughout.",
  ],
  [
    "8. Do property dealers in Rohini help with home loans?",
    "Most established property dealers in Rohini assist with home loan documentation and can connect you with banks, though they are not lenders and cannot guarantee approval. Freehold properties with clean title and a sanctioned plan are approved faster than leasehold or unauthorised construction.",
  ],
  [
    "9. Can NRIs buy property in Rohini, Delhi?",
    "Yes, NRIs can buy residential and commercial property in India under RBI and FEMA guidelines, though agricultural land, plantations and farmhouses cannot be bought directly. Payment must go through normal banking channels using NRE, NRO or FCNR accounts. Baba Associates provides video walkthroughs, documentation support and project supervision for NRI clients.",
  ],
  [
    "10. How long does it take to build a house in Rohini?",
    "Construction time in Rohini depends on plot size, number of floors, design complexity and how quickly municipal approvals come through. Baba Associates gives a written delivery timeline before work begins and shares regular progress updates throughout the project.",
  ],
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Who is the best Rohini property dealer near me?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The right property dealer in Rohini depends on your sector and requirement, but look for one with a physical office in Rohini, a verifiable RERA number, named staff and closed deals in your sector. Baba Associates has worked from Sector-16, Rohini since 1998, has constructed over 56,000 sq. ft. in Rohini, and handles construction, resale, rentals and renovation in-house.",
      },
    },
    {
      "@type": "Question",
      name: "How much commission does a property dealer in Rohini charge?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Property dealers in Rohini typically charge 1% to 2% of the transaction value from each party for a sale, and one month's rent for a rental. Brokerage is not fixed by law in Delhi and is negotiable. Always agree the exact percentage in writing before work starts.",
      },
    },
    {
      "@type": "Question",
      name: "What is the property rate in Rohini per sq ft in 2026?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Property in Rohini averages around ₹13,000 to ₹14,100 per sq. ft. for flats as of mid-2026, with builder floors ranging roughly ₹8,650 to ₹14,700 per sq. ft. Rates vary sharply by sector — Sector 13 sits near the top, while Sectors 16, 22 and 28 are more affordable. The Rohini residential circle rate is around ₹6,506 per sq. ft. after the January 2026 revision.",
      },
    },
    {
      "@type": "Question",
      name: "Which sector in Rohini is best to buy property?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sectors 13, 14 and 18 are the most developed and cost the most, suiting buyers who want established infrastructure and strong resale. Sectors 16, 22, 25 and 28 offer better value with settled infrastructure, ideal for first-time buyers of independent floors. Sectors 34 to 37 have the lowest entry prices and good long-term appreciation, but weaker social infrastructure today.",
      },
    },
    {
      "@type": "Question",
      name: "How do I find a genuine property dealer in Rohini?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Look for a dealer with a physical office you can visit in Rohini, a RERA registration number you can verify on the Delhi RERA portal, named staff rather than an anonymous firm, and a track record in the specific sector you are buying in. Ask to see original documents rather than photocopies, and agree the brokerage percentage in writing before any work begins. Baba Associates operates from an office at I-4/21 & H-5/57, Sector-16, Rohini, with a named family team and both construction and consultancy experience in Rohini since 1998.",
      },
    },
    {
      "@type": "Question",
      name: "What documents should I check before buying property in Rohini?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Check the chain of title, registered sale deed, freehold conversion certificate if the property was DDA leasehold, MCD-sanctioned building plan, mutation records, latest property tax receipts, and electricity and water no-dues certificates. Also run an encumbrance check for any existing mortgage, and insist on originals rather than photocopies.",
      },
    },
    {
      "@type": "Question",
      name: "Can I build a house on my own plot in Rohini?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, you can build on a plot you own in Rohini, subject to MCD-sanctioned building plans and the floor area ratio limits for your plot size and sector. Baba Associates offers this as a turnkey service from ground zero to finished building, or as a consultancy where we guide you and charge as per scope. Plot ownership stays with you throughout.",
      },
    },
    {
      "@type": "Question",
      name: "Do property dealers in Rohini help with home loans?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most established property dealers in Rohini assist with home loan documentation and can connect you with banks, though they are not lenders and cannot guarantee approval. Freehold properties with clean title and a sanctioned plan are approved faster than leasehold or unauthorised construction.",
      },
    },
    {
      "@type": "Question",
      name: "Can NRIs buy property in Rohini, Delhi?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, NRIs can buy residential and commercial property in India under RBI and FEMA guidelines, though agricultural land, plantations and farmhouses cannot be bought directly. Payment must go through normal banking channels using NRE, NRO or FCNR accounts. Baba Associates provides video walkthroughs, documentation support and project supervision for NRI clients.",
      },
    },
    {
      "@type": "Question",
      name: "What areas does Baba Associates cover in Rohini?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Baba Associates operates from an office at I-4/21 & H-5/57, Sector-16, Rohini, and works across Rohini along with select projects in Delhi NCR. The firm handles new construction on owned plots, ready-to-move builder floors, resale, rentals, renovation and commercial property.",
      },
    },
  ],
};

function SectionHeading({
  eyebrow,
  title,
  titleClassName = "text-gray-900",
  children,
}) {
  return (
    <div>
      <span className="text-sm font-semibold uppercase tracking-[4px] text-gold-600">
        {eyebrow}
      </span>

      <h2
        className={`mt-4 text-2xl font-bold md:text-3xl lg:text-4xl ${titleClassName}`}
      >
        {title}
      </h2>

      <span className="mt-6 block h-[2px] w-16 bg-gold-400" />

      {children && (
        <p className="mt-6 max-w-4xl leading-8 text-gray-600">{children}</p>
      )}
    </div>
  );
}

export default function RohiniPropertyDealerNearMePage() {
  return (
    <>
      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      {/* Hero */}
      <section className="bg-gold-950 px-6 pb-20 pt-36 text-white md:pb-28 md:pt-44">
        <div className="mx-auto max-w-7xl">
          <span className="text-sm font-semibold uppercase tracking-[4px] text-gold-300">
            Rohini Property Dealer Near Me
          </span>

          <h1 className="mt-5 font-cinzel text-4xl font-bold leading-17 md:text-5xl">
            Baba Associates — Your Rohini Property Dealer Near Me
          </h1>

          <p className="mt-7 max-w-5xl text-lg leading-8 text-gold-100/90">
            <strong>
              Baba Associates is a property dealer and home builder based in
              Sector-16, Rohini, Delhi.
            </strong>{" "}
            We have worked in Rohini since 1998 — first as a builder, and as a
            full property consultancy since 2010.
          </p>

          <p className="mt-5 max-w-5xl leading-8 text-gold-100/75">
            If you have been searching for a{" "}
            <Link href="/contact/" className="text-white">
              {" "}
              <strong>Rohini property dealer near me</strong>
            </Link>
            , our office is at I-4/21 &amp; H-5/57, Sector-16, Rohini. You can
            walk in any working day and meet the person who will actually handle
            your file.
          </p>

          <p className="mt-5 max-w-5xl leading-8 text-gold-100/75">
            We help you buy, sell, build and renovate property in Rohini.
            Because we are builders as well as dealers, we can check a
            property's construction quality as closely as we check its papers.
            Very few firms in Rohini do both.
          </p>

          <p className="mt-5 max-w-5xl leading-8 text-gold-100/75">
            So far we have constructed over 56,000 sq. ft. in Rohini and handled
            more than 3 lakh sq. ft. as a consultancy.
          </p>

          <Link
            href="/contact/"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-gold-400 px-7 py-4 font-semibold text-gold-950 transition hover:bg-gold-300"
          >
            Get A Free Quote
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      <section className="relative w-full overflow-hidden bg-gold-950">
        <Image
          src="/propertydealer.jpeg"
          alt="Best property in Rohini Sector 16 by Baba Associates"
          width={2047}
          height={1331}
          priority
          sizes="100vw"
          className="block h-auto w-full"
        />
      </section>

      {/* Our Services */}
      <section className="bg-white px-6 py-20 md:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="Our Services" title="Our Services">
            People searching for a{" "}
            <Link href="/contact/">
              {" "}
              <strong>Rohini property dealer near me</strong>
            </Link>{" "}
            usually need one of these six things. We handle all of them
            in-house, with our own team.
          </SectionHeading>

          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map(({ title, icon: Icon, text }) => (
              <div
                key={title}
                className="rounded-xl border border-gold-100 bg-[#FBF6EC] p-7"
              >
                <Icon className="text-gold-600" size={27} />

                <h3 className="mt-5 text-xl font-bold text-gray-900">
                  {title}
                </h3>

                <div className="mt-4 space-y-4 text-sm leading-7 text-gray-600">
                  {text.split("\n\n").map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Baba Associates */}
      <section className="bg-[#F2E7D2] px-6 py-20 md:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Why Choose Baba Associates"
            title="Why Choose Baba Associates"
          >
            Most people who search for a{" "}
            <Link href="/contact/">
              {" "}
              <strong>Rohini property dealer near me</strong>
            </Link>{" "}
            are really asking one question: can I trust this firm with the
            biggest purchase of my life? Here is our honest answer.
          </SectionHeading>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {whyChooseUs.map(({ lead, text }) => (
              <div
                key={lead}
                className="rounded-xl border border-gold-200 bg-white p-7"
              >
                <CheckCircle2 className="text-gold-600" size={23} />

                <p className="mt-4 leading-7 text-gray-700">
                  <span className="font-semibold text-gray-900">{lead}</span>{" "}
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Property Dealer in Rohini Sector 16 */}
      <section className="bg-white px-6 py-20 md:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Property Dealer in Rohini Sector 16"
            title="Property Dealer in Rohini Sector 16"
          >
            Sector 16 is our home ground, and it is where most clients searching
            for a{" "}
            <Link href="/contact/">
              {" "}
              <strong>Rohini property dealer near me</strong>
            </Link>{" "}
            end up finding us.
          </SectionHeading>

          <div className="mt-10 max-w-5xl space-y-6 leading-8 text-gray-700">
            <p>
              The sector is fully developed, with established markets and
              schools, yet still more affordable than Sectors 13 and 14 — which
              makes it good value for a family buying their first independent
              floor.
            </p>

            <p>
              Rates vary a lot within the sector. Two floors a few hundred
              metres apart can differ by thousands per square foot depending on
              road width, corner position, floor level and parking. Ground
              floors with parking carry a premium, while upper floors without
              lift access sell slower and can be negotiated harder.
            </p>

            <p>
              Some older properties here also still have pending leasehold
              conversion. We confirm this in writing before any advance is paid.
            </p>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="bg-gold-950 px-6 py-20 text-white md:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Our Team"
            title="Our Team"
            titleClassName="text-white"
          >
            <span className="text-gold-100/80">
              <strong>Sh. Goverdhan Dass Wanvani</strong> — Founder. Building
              homes in Rohini since 1998.
              <br />
              <br />
              <strong>Mr. Lalit Wanvani</strong> — Co-Founder, B.Tech. Expert in
              property legal framework, documentation, construction and layout
              planning.
              <br />
              <br />
              <strong>Mr. Madhukar Wanvani</strong> — Sales and Operations, B.A.
              Handling Rohini deals end to end since 2009.
              <br />
              <br />
              <strong>Mr. Ish Kumar Wanvani</strong> — Sales and Marketing, MBA.
              Handles paperwork formalities and negotiations.
            </span>
          </SectionHeading>
        </div>
      </section>

      {/* Talk to Us */}
      <section className="bg-[#FBF6EC] px-6 py-20 md:py-28">
        <div className="mx-auto max-w-5xl">
          <SectionHeading eyebrow="Talk to Us" title="Talk to Us">
            Your search for a <strong>Rohini property dealer near me</strong>{" "}
            ends at our office door. Come and meet us.
          </SectionHeading>

          <div className="mt-10 rounded-2xl border border-gold-200 bg-white p-8 leading-8 text-gray-700">
            <strong>Baba Associates</strong>
            <br />
            I-4/21 &amp; H-5/57, Sector-16, Rohini, Delhi-110085
            <br />
            Phone: <strong>+91 9999774811</strong>
            <br />
            Email: ishkumar.asm@gmail.co
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white px-6 py-20 md:py-28">
        <div className="mx-auto max-w-5xl">
          <SectionHeading
            eyebrow="Frequently Asked Questions"
            title="Frequently Asked Questions"
          />

          <div className="mt-12 space-y-3">
            {faqs.map(([question, answer]) => (
              <details
                key={question}
                className="group rounded-xl border border-gold-200 bg-[#FBF6EC] px-6 py-5"
              >
                <summary className="cursor-pointer list-none pr-8 font-semibold text-gray-900 marker:hidden">
                  {question}
                </summary>

                <p className="mt-4 max-w-4xl leading-7 text-gray-600">
                  {answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="bg-white px-6 py-20 md:py-24">
        <div className="mx-auto max-w-7xl rounded-2xl border border-gold-200 bg-gold-50 p-8 md:p-12">
          <h2 className="font-cinzel text-3xl font-bold text-gray-900 md:text-4xl">
            Talk to Us
          </h2>

          <p className="mt-4 max-w-3xl leading-7 text-gray-600">
            Your search for a <strong>Rohini property dealer near me</strong>{" "}
            ends at our office door. Come and meet us.
          </p>

          <Link
            href="/contact/"
            className="mt-7 inline-flex items-center gap-2 rounded-xl bg-gold-950 px-7 py-4 font-semibold text-white transition hover:bg-gold-800"
          >
            Get A Free Quote
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}

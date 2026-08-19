import AboutSection from "@/sections/AboutSection";
import CounterSection from "@/sections/CounterSection";
import ExpertiseSection from "@/sections/ExpertiseSection";
import FAQSection from "@/sections/Faq";
import FeatureSlider from "@/sections/FeatureSlider";
import GallerySection from "@/sections/GallerySection";
import Hero from "@/sections/Hero";
import ProjectsSection from "@/sections/Projects";
import ServicesSection from "@/sections/ServicesSection";
import TestimonialsSection from "@/sections/TestimonialsSection";
import Image from "next/image";

export const metadata = {
  title: "Baba Associates | Property Dealer & Home Builder in Rohini Since 1998",
  description:
    "Building homes in Rohini since 1998. New construction on your plot, 2-4 BHK freehold floors, resale, renovation & interiors. Call Baba Associates today.",
  alternates: {
    canonical: "/",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Which is the best property dealer and home builder in Rohini, Delhi?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Baba Associates is a Rohini-based home builder and real estate consultancy operating from Sector-16, Rohini, Delhi. Founded by Sh. Goverdhan Dass Wanvani in 1998 as a builder, the firm has delivered over 56,000 sq. ft. of constructed space in Rohini and expanded into full real estate consultancy in 2010. It handles new construction on customer-owned plots, ready-to-move builder floors, resale properties, renovation and interior work across Rohini and nearby North-West Delhi.",
      },
    },
    {
      "@type": "Question",
      name: "When was Baba Associates established and who founded it?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Baba Associates was founded by Sh. Goverdhan Dass Wanvani, who began building homes in Rohini in 1998. The firm formally began operating as a real estate consultancy in 2010 under co-founder Mr. Lalit Wadhwani (B.Tech), and is run today by a family team that handles construction, legal documentation, sales and interiors in-house — including Mr. Madhukar Wanvani (sales and operations) and Mr. Ish Kumar Wanvani (sales and marketing).",
      },
    },
    {
      "@type": "Question",
      name: "Can Baba Associates build a house on my own plot in Rohini?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Baba Associates provides complete end-to-end construction on customer-owned plots — covering layout planning, structural work, plumbing and electrical, finishing and interiors. The work is offered in two models: a turnkey model, where the firm handles everything from ground zero to a completed building, and a consultancy model, where expert guidance is provided and charges are based on the scope of work. The plot ownership always stays with you.",
      },
    },
    {
      "@type": "Question",
      name: "Do you have ready-to-move flats for sale in Rohini?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Baba Associates develops and sells luxury-concept builder floors in Rohini, including 2 BHK, 3 BHK and 4 BHK units ranging from 84 to 170 sq. yards, finished with premium interiors. All floors are freehold, which makes ownership transfer and home loan approval simpler.",
      },
    },
    {
      "@type": "Question",
      name: "Are the properties freehold or leasehold?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "All residential floors offered by Baba Associates are freehold. Freehold ownership means full and permanent rights over the property, easier resale, simpler transfer of title, and faster home loan approval compared to leasehold properties — a significant advantage in Rohini, where many older DDA properties are leasehold.",
      },
    },
    {
      "@type": "Question",
      name: "How long does it take to build a house in Rohini?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Timelines depend on plot size, number of floors, design complexity and municipal approvals. Baba Associates commits to a delivery timeline in writing before work begins and shares regular progress updates throughout the project, so owners always know the current stage of construction.",
      },
    },
    {
      "@type": "Question",
      name: "Can NRIs buy or build property in Rohini through Baba Associates?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. NRIs are permitted to purchase residential property in India under RBI and FEMA guidelines. Baba Associates offers NRI-friendly services including remote video walkthroughs of sites, complete documentation and paperwork support, and full project supervision — so the owner does not need to be physically present in Delhi during construction or purchase.",
      },
    },
    {
      "@type": "Question",
      name: "Do you handle renovation and interiors, or only new construction?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Both. Alongside new construction, Baba Associates undertakes full home renovation, redesign and interior projects with an in-house team of interior designers, architects and permanent building contractors. Work covers modular kitchens, bathrooms, flooring, false ceilings, electrical upgrades and exterior facade changes — for old houses as well as newly purchased resale properties.",
      },
    },
    {
      "@type": "Question",
      name: "Does Baba Associates deal in commercial property, warehouses or plots?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Beyond residential floors and independent homes, Baba Associates deals in plots, luxury properties, commercial spaces, warehouses and farmhouses across Rohini and the surrounding areas of Delhi NCR. The firm has handled over 3 lakh sq. ft. of property as a consultancy across these categories.",
      },
    },
    {
      "@type": "Question",
      name: "Which areas in Delhi does Baba Associates serve?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Baba Associates specialises in Rohini and works across all its sectors, with completed projects in Sector 11, Sector 15 and Sector 16. The firm also serves nearby North-West Delhi localities including Shalimar Bagh, and takes on select projects across Delhi NCR.",
      },
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Hero />
      <FeatureSlider />
      <AboutSection />
      <ServicesSection />
      <CounterSection />
      <ExpertiseSection />
      <ProjectsSection />
      <TestimonialsSection />
      <FAQSection />
      <GallerySection />
    </>
  );
}

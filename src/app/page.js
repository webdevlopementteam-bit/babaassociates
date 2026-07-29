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

export default function Home() {
  return (
   <>
   <Hero/>
   <FeatureSlider/>
   <AboutSection/>
   <ServicesSection/>
   <CounterSection/>
   <ExpertiseSection/>
   <ProjectsSection/>
  
   <TestimonialsSection/>
   <FAQSection/>
   <GallerySection/>
   </>
  );
}

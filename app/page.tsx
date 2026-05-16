import { Hero } from "@/sections/Hero";
import Welcome from "@/sections/Welcome";
import Navbar from "@/components/Navbar";
import AdmissionPopup from "@/components/AdmissionPopup";
import { Partners } from "@/sections/Partners";
import { Programmes } from "@/sections/Programmes";
import { WhyChoose } from "@/sections/WhyChoose";
import Leaders from "@/sections/Leaders";
import Faculty from "@/sections/Faculty";
import Stats from "@/sections/Stats";
import Campus from "@/sections/Campus";
import Testimonials from "@/sections/Testimonials";
import AdmissionCTA from "@/sections/AdmissionCTA";
import Footer from "@/sections/Footer";
import Strength from "@/sections/Strength";
import Features from "@/sections/Features";

export default function Home() {
  return (
    <>
      <AdmissionPopup />
      <Navbar />
      <main>
        <Hero />
        <Welcome />
        <Strength />
        <Features />
        <Partners />
        <Programmes />
        <WhyChoose />
        <Leaders />
        <Faculty />
        <Stats />
        <Campus />
        <Testimonials />
        <AdmissionCTA />
      </main>
      <Footer />
    </>
  );
}

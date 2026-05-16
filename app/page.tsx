import { Hero } from "@/pages/Hero";
import Welcome from "@/pages/Welcome";
import Navbar from "@/components/Navbar";
import AdmissionPopup from "@/components/AdmissionPopup";
import { Partners } from "@/pages/Partners";
import { Programmes } from "@/pages/Programmes";
import { WhyChoose } from "@/pages/WhyChoose";
import Leaders from "@/pages/Leaders";
import Faculty from "@/pages/Faculty";
import Stats from "@/pages/Stats";
import Campus from "@/pages/Campus";
import Testimonials from "@/pages/Testimonials";
import AdmissionCTA from "@/pages/AdmissionCTA";
import Footer from "@/pages/Footer";
import Strength from "@/pages/Strength";
import Features from "@/pages/Features";

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

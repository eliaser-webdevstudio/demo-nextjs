import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Features from "./sections/Features";
import HowItWorks from "./sections/HowItWorks";
import Pricing from "./sections/Pricing";
import FAQ from "./sections/FAQ";
import CTA from "./sections/CTA";
import Footer from "./sections/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <Pricing />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}

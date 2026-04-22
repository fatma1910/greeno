import { FAQ } from "@/components/landing/FAQ";
import { Features } from "@/components/landing/Features";
import { Footer } from "@/components/landing/Footer";
import { Header } from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";

import { Highlights } from "@/components/landing/Highlights";
import HowItWorks from "@/components/landing/HowItWorks";

import { Reviews } from "@/components/landing/Reviews";
import { VendorCTA } from "@/components/landing/VendorCTA";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col bg-white text-foreground">
      <Header />
      <main className="flex-1">
        <Hero />
        <Highlights />
        <Features />
        <HowItWorks />
        <VendorCTA />
        <Reviews />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}

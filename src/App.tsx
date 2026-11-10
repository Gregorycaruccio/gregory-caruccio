import React from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { EcosystemSection } from "./components/EcosystemSection";
import { ComboGrowthSection } from "./components/ComboGrowthSection";
import { AboutSection } from "./components/AboutSection";
import { ServicesSection } from "./components/ServicesSection";
import { PortfolioSection } from "./components/PortfolioSection";
import { ProcessSection } from "./components/ProcessSection";
import { FaqSection } from "./components/FaqSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";
import { WhatsAppFloat } from "./components/WhatsAppFloat";

export const App: React.FC = () => {
  return (
    <div className="min-h-[100dvh] bg-[#040814] text-slate-100 flex flex-col font-sans selection:bg-electric-blue selection:text-white relative">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <EcosystemSection />
        <ComboGrowthSection />
        <AboutSection />
        <ServicesSection />
        <PortfolioSection />
        <ProcessSection />
        <FaqSection />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default App;

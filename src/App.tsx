import React from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { EcosystemSection } from "./components/EcosystemSection";
import { PortfolioSection } from "./components/PortfolioSection";
import { ComboGrowthSection } from "./components/ComboGrowthSection";
import { ServicesSection } from "./components/ServicesSection";
import { AboutSection } from "./components/AboutSection";
import { ProcessSection } from "./components/ProcessSection";
import { CtaBanner } from "./components/CtaBanner";
import { FaqSection } from "./components/FaqSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";
import { WhatsAppFloat } from "./components/WhatsAppFloat";

export const App: React.FC = () => {
  return (
    <div className="min-h-[100dvh] bg-[#FAFBFF] text-slate-900 flex flex-col font-sans selection:bg-blue-600 selection:text-white relative overflow-x-clip">
      <Navbar />
      <main className="flex-1 overflow-x-clip">
        <Hero />
        <EcosystemSection />
        <PortfolioSection />
        <ComboGrowthSection />
        <ServicesSection />
        <AboutSection />
        <ProcessSection />
        <CtaBanner />
        <FaqSection />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default App;

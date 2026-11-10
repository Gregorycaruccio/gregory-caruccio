import React from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { EcosystemSection } from "./components/EcosystemSection";
import { ComboGrowthSection } from "./components/ComboGrowthSection";
import { ServicesSection } from "./components/ServicesSection";
import { PortfolioSection } from "./components/PortfolioSection";
import { ProcessSection } from "./components/ProcessSection";
import { FaqSection } from "./components/FaqSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";
import { WhatsAppFloat } from "./components/WhatsAppFloat";

export const App: React.FC = () => {
  return (
    <div className="min-h-[100dvh] bg-[#040814] text-slate-100 flex flex-col font-sans selection:bg-electric-blue selection:text-white relative overflow-hidden">
      {/* Background Cyber Ambient Lights */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-electric-blue/15 blur-[180px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-[800px] left-1/4 w-[600px] h-[500px] bg-electric-cyan/10 blur-[160px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-[2200px] right-10 w-[700px] h-[600px] bg-electric-blue/10 blur-[200px] rounded-full pointer-events-none -z-10" />

      <Navbar />
      <main className="flex-1">
        <Hero />
        <EcosystemSection />
        <ComboGrowthSection />
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

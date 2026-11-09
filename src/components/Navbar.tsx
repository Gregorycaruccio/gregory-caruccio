import React, { useState, useEffect } from "react";
import { MessageSquare, Menu, X, ArrowUpRight } from "lucide-react";
import { SITE_CONFIG } from "../config/site-config";

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const whatsappHref = `https://wa.me/${SITE_CONFIG.telefoneRaw}?text=Ol%C3%A1%20Gr%C3%A9gory!%20Vi%20seu%20site%20e%20quero%20conversar%20sobre%20crescimento%20para%20minha%20empresa.`;

  return (
    <nav
      data-ui
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-200 ${
        scrolled
          ? "border-b border-carbon-border bg-[#0A0D14]/95 backdrop-blur-sm py-3.5"
          : "bg-transparent py-5"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Identidade */}
        <a href="#" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-orange text-white font-heading font-extrabold text-lg">
            G
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-heading font-extrabold text-white text-base tracking-tight sm:text-lg">
                {SITE_CONFIG.nome}
              </span>
              <span className="hidden sm:inline-block rounded-md bg-brand-orange/15 px-2 py-0.5 text-xs font-semibold text-brand-orange">
                Performance
              </span>
            </div>
            <p className="text-xs text-silver font-sans">
              Estratégia & Crescimento
            </p>
          </div>
        </a>

        {/* Links Desktop */}
        <div className="hidden lg:flex items-center gap-8 text-sm font-medium text-slate-300">
          <a href="#metodo" className="transition-colors hover:text-brand-orange">
            O Método
          </a>
          <a href="#combo-growth" className="transition-colors hover:text-brand-orange font-semibold text-white">
            Combo Growth
          </a>
          <a href="#servicos" className="transition-colors hover:text-brand-orange">
            Serviços
          </a>
          <a href="#nichos" className="transition-colors hover:text-brand-orange">
            Cases Práticos
          </a>
          <a href="#processo" className="transition-colors hover:text-brand-orange">
            Processo
          </a>
          <a href="#faq" className="transition-colors hover:text-brand-orange">
            Dúvidas
          </a>
        </div>

        {/* CTA Direct WhatsApp */}
        <div className="hidden sm:flex items-center gap-4">
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-action !py-2.5 !px-5 text-sm"
          >
            <MessageSquare className="h-4 w-4" />
            <span>Falar no WhatsApp</span>
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        {/* Menu Mobile Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="flex lg:hidden rounded-lg p-2 text-slate-300 hover:bg-carbon-card hover:text-white focus:outline-none"
          aria-label="Menu principal"
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Menu Mobile Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0D1117] px-4 pt-3 pb-6">
          <div className="flex flex-col gap-2.5 text-sm">
            <a
              href="#metodo"
              onClick={() => setMobileMenuOpen(false)}
              className="rounded-lg px-3 py-2 text-slate-300 hover:bg-carbon-card hover:text-brand-orange"
            >
              O Método
            </a>
            <a
              href="#combo-growth"
              onClick={() => setMobileMenuOpen(false)}
              className="rounded-lg px-3 py-2 font-bold text-white bg-brand-orange/15 text-brand-orange flex items-center justify-between"
            >
              <span>Combo Growth (R$ 1.600)</span>
              <span className="text-xs bg-brand-orange text-white px-2 py-0.5 rounded-md">Destaque</span>
            </a>
            <a
              href="#servicos"
              onClick={() => setMobileMenuOpen(false)}
              className="rounded-lg px-3 py-2 text-slate-300 hover:bg-carbon-card hover:text-brand-orange"
            >
              Tabela de Serviços
            </a>
            <a
              href="#nichos"
              onClick={() => setMobileMenuOpen(false)}
              className="rounded-lg px-3 py-2 text-slate-300 hover:bg-carbon-card hover:text-brand-orange"
            >
              Cases Práticos
            </a>
            <a
              href="#processo"
              onClick={() => setMobileMenuOpen(false)}
              className="rounded-lg px-3 py-2 text-slate-300 hover:bg-carbon-card hover:text-brand-orange"
            >
              Processo de Trabalho
            </a>
            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="rounded-lg px-3 py-2 text-slate-300 hover:bg-carbon-card hover:text-brand-orange"
            >
              Dúvidas Frequentes
            </a>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-action mt-2 w-full justify-center"
            >
              <MessageSquare className="h-4 w-4" />
              <span>Chamar no WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

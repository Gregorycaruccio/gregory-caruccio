import React, { useState, useEffect } from "react";
import { MessageSquare, Menu, X, ArrowUpRight, Hexagon } from "lucide-react";
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
          ? "bg-[#040814]/95 backdrop-blur-sm py-3.5"
          : "bg-transparent py-5"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Identidade */}
        <a href="#" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-electric-blue text-white">
            <Hexagon className="h-5 w-5 fill-white/20 stroke-white stroke-[2.2]" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-heading font-extrabold text-white text-base tracking-tight sm:text-lg">
                {SITE_CONFIG.nome}
              </span>
              <span className="hidden sm:inline-block rounded-full bg-electric-blue/15 px-2.5 py-0.5 text-xs font-bold text-electric-cyan border border-electric-cyan/30">
                Performance
              </span>
            </div>
            <p className="text-xs text-slate-400 font-sans">
              Estratégia & Vendas
            </p>
          </div>
        </a>

        {/* Links Desktop */}
        <div className="hidden lg:flex items-center gap-8 text-sm font-medium text-slate-300">
          <a href="#" className="relative text-white font-semibold py-1">
            Início
            <span className="absolute bottom-0 left-0 w-full h-[2px] bg-electric-cyan rounded-full" />
          </a>
          <a href="#combo-growth" className="relative transition-colors hover:text-electric-cyan font-bold text-white flex items-center gap-1.5">
            <span>Combo Growth</span>
            <span className="h-1.5 w-1.5 rounded-full bg-electric-cyan" />
          </a>
          <a href="#sobre" className="transition-colors hover:text-electric-cyan">
            Sobre o Grégory
          </a>
          <a href="#servicos" className="transition-colors hover:text-electric-cyan">
            Serviços
          </a>
          <a href="#nichos" className="transition-colors hover:text-electric-cyan">
            Cases Práticos
          </a>
          <a href="#processo" className="transition-colors hover:text-electric-cyan">
            Processo
          </a>
          <a href="#faq" className="transition-colors hover:text-electric-cyan">
            Dúvidas
          </a>
        </div>

        {/* CTA Direct WhatsApp */}
        <div className="hidden sm:flex items-center gap-4">
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-electric !py-2.5 !px-5 text-sm"
          >
            <MessageSquare className="h-4 w-4" />
            <span>Falar no WhatsApp</span>
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        {/* Menu Mobile Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="flex lg:hidden rounded-lg p-2 text-slate-300 hover:bg-obsidian-850 hover:text-white focus:outline-none"
          aria-label="Menu principal"
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Menu Mobile Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#060B18] px-4 pt-3 pb-6">
          <div className="flex flex-col gap-2.5 text-sm">
            <a
              href="#"
              onClick={() => setMobileMenuOpen(false)}
              className="rounded-lg px-3 py-2 text-white font-semibold bg-electric-blue/15"
            >
              Início
            </a>
            <a
              href="#combo-growth"
              onClick={() => setMobileMenuOpen(false)}
              className="rounded-lg px-3 py-2 font-bold text-white bg-electric-blue flex items-center justify-between"
            >
              <span>Combo Growth (R$ 1.600)</span>
              <span className="text-xs bg-white text-electric-blueDark px-2 py-0.5 rounded-full font-bold">Destaque</span>
            </a>
            <a
              href="#sobre"
              onClick={() => setMobileMenuOpen(false)}
              className="rounded-lg px-3 py-2 text-slate-300 hover:bg-obsidian-850 hover:text-electric-cyan"
            >
              Sobre o Grégory
            </a>
            <a
              href="#servicos"
              onClick={() => setMobileMenuOpen(false)}
              className="rounded-lg px-3 py-2 text-slate-300 hover:bg-obsidian-850 hover:text-electric-cyan"
            >
              Tabela de Serviços
            </a>
            <a
              href="#nichos"
              onClick={() => setMobileMenuOpen(false)}
              className="rounded-lg px-3 py-2 text-slate-300 hover:bg-obsidian-850 hover:text-electric-cyan"
            >
              Cases Práticos
            </a>
            <a
              href="#processo"
              onClick={() => setMobileMenuOpen(false)}
              className="rounded-lg px-3 py-2 text-slate-300 hover:bg-obsidian-850 hover:text-electric-cyan"
            >
              Processo de Trabalho
            </a>
            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="rounded-lg px-3 py-2 text-slate-300 hover:bg-obsidian-850 hover:text-electric-cyan"
            >
              Dúvidas Frequentes
            </a>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-electric mt-2 w-full justify-center !rounded-xl"
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

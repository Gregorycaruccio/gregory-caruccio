import React, { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
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
      className={`fixed top-0 left-0 right-0 z-40 transition-colors duration-200 ${ /* taste-skill-ignore */
        scrolled
          ? "bg-[#0B0F17]/95 backdrop-blur-md border-b border-white/[0.07] py-3.5"
          : "bg-transparent py-5"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 sm:px-8">
        
        {/* Identidade Editorial Sem Ícones Genéricos */}
        <a href="#" className="flex flex-col group">
          <span className="font-heading font-extrabold text-white text-base tracking-tight group-hover:text-blue-400 transition-colors">
            {SITE_CONFIG.nome}
          </span>
          <span className="text-[11px] text-slate-400 font-sans tracking-normal">
            Tráfego Pago, Automação & Performance RS
          </span>
        </a>

        {/* Links Desktop */}
        <div className="hidden lg:flex items-center gap-6 text-xs font-medium text-slate-300">
          <a href="#" className="text-white hover:text-blue-400 transition-colors">
            Início
          </a>
          <a href="#metodo" className="hover:text-blue-400 transition-colors">
            Método A.C.C.O
          </a>
          <a
            href="#combo-growth"
            className="flex items-center gap-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 px-3 py-1 text-blue-400 hover:bg-blue-500/20 transition-colors font-semibold"
          >
            <span>Combo Growth</span>
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
          </a>
          <a href="#nichos" className="hover:text-blue-400 transition-colors">
            Cases Práticos
          </a>
          <a href="#servicos" className="hover:text-blue-400 transition-colors">
            Serviços
          </a>
          <a href="#sobre" className="hover:text-blue-400 transition-colors">
            Sobre o Grégory
          </a>
          <a href="#faq" className="hover:text-blue-400 transition-colors">
            Dúvidas
          </a>
        </div>

        {/* CTA Direct WhatsApp */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-1.5 rounded-lg bg-blue-600 hover:bg-blue-700 px-4 py-2 text-xs font-semibold text-white transition-transform duration-150 hover:scale-[1.01] active:scale-[0.99]"
          >
            <span>Falar no WhatsApp</span>
            <ArrowUpRight className="h-3.5 w-3.5 text-blue-200" />
          </a>
        </div>

        {/* Menu Mobile Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="flex lg:hidden rounded-lg p-2 text-slate-300 hover:bg-white/[0.05] hover:text-white focus:outline-none"
          aria-label="Abrir menu"
        >
          {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Menu Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0D131F] px-5 pt-3 pb-6">
          <div className="flex flex-col gap-2 text-sm">
            <a
              href="#"
              onClick={() => setMobileMenuOpen(false)}
              className="rounded-lg px-3 py-2 text-white font-medium hover:bg-white/[0.04]"
            >
              Início
            </a>
            <a
              href="#metodo"
              onClick={() => setMobileMenuOpen(false)}
              className="rounded-lg px-3 py-2 text-slate-300 hover:bg-white/[0.04]"
            >
              Método A.C.C.O
            </a>
            <a
              href="#combo-growth"
              onClick={() => setMobileMenuOpen(false)}
              className="rounded-lg px-3 py-2 font-semibold text-blue-400 bg-blue-500/10 border border-blue-500/20 flex items-center justify-between"
            >
              <span>Combo Growth (R$ 1.600/mês)</span>
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
            </a>
            <a
              href="#sobre"
              onClick={() => setMobileMenuOpen(false)}
              className="rounded-lg px-3 py-2 text-slate-300 hover:bg-white/[0.04]"
            >
              Sobre o Grégory
            </a>
            <a
              href="#nichos"
              onClick={() => setMobileMenuOpen(false)}
              className="rounded-lg px-3 py-2 text-slate-300 hover:bg-white/[0.04]"
            >
              Cases Práticos de Vendas
            </a>
            <a
              href="#servicos"
              onClick={() => setMobileMenuOpen(false)}
              className="rounded-lg px-3 py-2 text-slate-300 hover:bg-white/[0.04]"
            >
              Serviços e Planos
            </a>
            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="rounded-lg px-3 py-2 text-slate-300 hover:bg-white/[0.04]"
            >
              Perguntas Frequentes
            </a>

            <div className="pt-3">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 rounded-lg bg-blue-600 hover:bg-blue-700 py-3 text-xs font-semibold text-white w-full"
              >
                <span>Conversar no WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

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
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const whatsappHref = `https://wa.me/${SITE_CONFIG.telefoneRaw}?text=Ol%C3%A1%20Gr%C3%A9gory!%20Vi%20seu%20site%20e%20quero%20conversar%20sobre%20crescimento%20para%20minha%20empresa.`;

  return (
    <nav
      data-ui
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
        scrolled
          ? "bg-[#05070E]/90 backdrop-blur-xl border-b border-slate-800/80 py-3 shadow-md"
          : "bg-[#05070E]/50 backdrop-blur-md border-b border-white/[0.06] py-3.5"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 sm:px-8">
        {/* Identidade Editorial com Avatar Monograma e Título Limpo */}
        <a href="#" className="flex items-center gap-2.5 shrink-0 group">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 text-white font-heading font-black text-xs shadow-xs shadow-blue-500/25 group-hover:scale-105 transition-transform">
            GC
          </div>
          <div className="flex flex-col">
            <span className="font-heading font-extrabold text-white text-sm sm:text-base tracking-tight leading-none group-hover:text-blue-400 transition-colors whitespace-nowrap">
              {SITE_CONFIG.nome}
            </span>
            <span className="text-[11px] text-slate-400 font-medium tracking-normal mt-0.5 whitespace-nowrap hidden sm:block">
              Tráfego, IA & Performance RS
            </span>
          </div>
        </a>

        {/* Links Desktop — Concisos, 100% em Linha Única */}
        <div className="hidden lg:flex items-center gap-4 xl:gap-6 text-xs xl:text-sm font-semibold text-slate-300">
          <a
            href="#metodo"
            className="hover:text-white transition-colors whitespace-nowrap"
          >
            Método
          </a>

          <a
            href="#nichos"
            className="hover:text-white transition-colors whitespace-nowrap"
          >
            Cases
          </a>

          <a
            href="#combo-growth"
            className="inline-flex items-center gap-1.5 rounded-full bg-blue-950/70 border border-blue-500/40 px-3 py-1 text-blue-300 hover:bg-blue-900/60 transition-colors font-bold whitespace-nowrap shrink-0"
          >
            <span>Combo Growth</span>
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
          </a>

          <a
            href="#servicos"
            className="hover:text-white transition-colors whitespace-nowrap"
          >
            Serviços
          </a>

          <a
            href="#sobre"
            className="hover:text-white transition-colors whitespace-nowrap"
          >
            Sobre
          </a>

          <a
            href="#faq"
            className="hover:text-white transition-colors whitespace-nowrap"
          >
            Dúvidas
          </a>
        </div>

        {/* CTA Direct WhatsApp & Toggle Mobile */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center justify-center gap-1.5 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-500 hover:from-blue-500 hover:to-indigo-500 px-4 py-2 text-xs font-bold text-white transition-all duration-150 hover:scale-[1.02] active:scale-[0.98] shadow-sm shadow-blue-500/25 whitespace-nowrap shrink-0"
          >
            <span>Falar no WhatsApp</span>
            <ArrowUpRight className="h-3.5 w-3.5 text-blue-100" />
          </a>

          {/* Menu Mobile Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex lg:hidden rounded-xl p-2 text-slate-300 hover:bg-slate-900 focus:outline-none border border-slate-800"
            aria-label="Abrir menu"
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5 text-white" />
            ) : (
              <Menu className="h-5 w-5 text-white" />
            )}
          </button>
        </div>
      </div>

      {/* Menu Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#070A14]/98 backdrop-blur-xl border-b border-slate-800 px-5 pt-3 pb-6 shadow-xl">
          <div className="flex flex-col gap-2 text-sm">
            <a
              href="#metodo"
              onClick={() => setMobileMenuOpen(false)}
              className="rounded-xl px-3.5 py-2 text-slate-300 font-medium hover:bg-slate-900"
            >
              Método A.C.C.O
            </a>
            <a
              href="#nichos"
              onClick={() => setMobileMenuOpen(false)}
              className="rounded-xl px-3.5 py-2 text-slate-300 font-medium hover:bg-slate-900"
            >
              Cases Práticos de Vendas
            </a>
            <a
              href="#combo-growth"
              onClick={() => setMobileMenuOpen(false)}
              className="rounded-xl px-3.5 py-2.5 font-bold text-blue-300 bg-blue-950/70 border border-blue-500/40 flex items-center justify-between"
            >
              <span>Combo Growth (R$ 1.600/mês)</span>
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            </a>
            <a
              href="#servicos"
              onClick={() => setMobileMenuOpen(false)}
              className="rounded-xl px-3.5 py-2 text-slate-300 font-medium hover:bg-slate-900"
            >
              Serviços e Planos
            </a>
            <a
              href="#sobre"
              onClick={() => setMobileMenuOpen(false)}
              className="rounded-xl px-3.5 py-2 text-slate-300 font-medium hover:bg-slate-900"
            >
              Sobre o Grégory
            </a>
            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="rounded-xl px-3.5 py-2 text-slate-300 font-medium hover:bg-slate-900"
            >
              Dúvidas Frequentes
            </a>

            <div className="pt-3">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-500 hover:from-blue-500 hover:to-indigo-500 py-3 text-xs font-bold text-white w-full shadow-md shadow-blue-500/25"
              >
                <span>Conversar no WhatsApp</span>
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

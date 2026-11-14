import React from "react";
import { ArrowUp, Instagram } from "lucide-react";
import { WhatsAppIcon } from "./WhatsAppIcon";
import { SITE_CONFIG } from "../config/site-config";

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#030508] pt-16 pb-12 text-slate-400 border-t border-slate-800/80 relative overflow-hidden">
      {/* Glow Sutil de Fundo */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-20 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-blue-600/5 rounded-full blur-3xl -z-10"
      />

      <div className="mx-auto max-w-6xl px-5 sm:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-800/70">
          {/* Logo e Descrição */}
          <div className="text-center md:text-left">
            <span className="font-heading font-extrabold text-white text-base tracking-tight">
              {SITE_CONFIG.nome}
            </span>
            <p className="mt-2 text-xs sm:text-sm text-slate-400 font-sans max-w-md leading-relaxed">
              Gestão de tráfego pago hiperlocal, social media de autoridade, páginas rápidas e bots inteligentes com IA no Litoral Norte do RS (Cidreira, Tramandaí, Capão da Canoa e região) e em todo o Brasil. Vendas reais no WhatsApp.
            </p>
          </div>

          {/* Links Rápidos Essenciais */}
          <div className="flex flex-wrap justify-center gap-5 text-xs sm:text-sm font-semibold text-slate-400">
            <a href="#" className="hover:text-blue-400 transition-colors">
              Início
            </a>
            <a href="#metodo" className="hover:text-blue-400 transition-colors">
              Método A.C.C.O
            </a>
            <a
              href="#combo-growth"
              className="hover:text-blue-300 transition-colors text-blue-400 font-bold"
            >
              Combo Growth (R$ 1.600)
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
            <a
              href="#contato"
              className="hover:text-blue-300 transition-colors text-blue-400 font-bold"
            >
              Contato
            </a>
          </div>

          {/* Ações e Redes */}
          <div className="flex items-center gap-2.5">
            <a
              href={SITE_CONFIG.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-xl border border-slate-800 bg-[#090D18] text-slate-300 hover:border-blue-500 hover:text-blue-400 transition-colors"
              aria-label="Instagram de Grégory Caruccio"
            >
              <Instagram className="h-4 w-4" />
            </a>

            <a
              href={`https://wa.me/${SITE_CONFIG.telefoneRaw}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-xl border border-slate-800 bg-[#090D18] text-slate-300 hover:border-emerald-500 hover:text-emerald-400 transition-colors"
              aria-label="WhatsApp Oficial"
            >
              <WhatsAppIcon className="h-4 w-4 fill-current" />
            </a>

            <button
              onClick={scrollToTop}
              className="flex h-9 w-9 items-center justify-center rounded-xl border border-slate-800 bg-[#090D18] text-slate-300 hover:border-blue-500 hover:text-blue-400 transition-colors"
              aria-label="Voltar ao topo"
            >
              <ArrowUp className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Rodapé Inferior: Direitos e Status Técnico Alinhado à Direita */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500 font-sans">
          <p>
            © {new Date().getFullYear()} {SITE_CONFIG.nome}. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-2 text-xs text-slate-400 font-medium">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            <span>Sistema Operacional Ativo • React & Tailwind</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

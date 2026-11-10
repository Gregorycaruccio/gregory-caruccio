import React from "react";
import { ArrowUp, Instagram } from "lucide-react";
import { WhatsAppIcon } from "./WhatsAppIcon";
import { SITE_CONFIG } from "../config/site-config";

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-white pt-14 pb-12 text-slate-500 border-t border-slate-200">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-100">
          
          {/* Logo e Descrição Sem Ícone Genérico */}
          <div className="text-center md:text-left">
            <span className="font-heading font-extrabold text-slate-950 text-base tracking-tight">
              {SITE_CONFIG.nome}
            </span>
            <p className="mt-2 text-xs text-slate-600 font-sans max-w-md leading-relaxed">
              Gestão de tráfego pago hiperlocal, social media de autoridade, páginas rápidas e bots inteligentes com IA no Litoral Norte do RS (Cidreira, Tramandaí, Capão da Canoa e região) e em todo o Brasil. Vendas reais no WhatsApp.
            </p>
          </div>

          {/* Links Rápidos Essenciais */}
          <div className="flex flex-wrap justify-center gap-5 text-xs font-semibold text-slate-600">
            <a href="#" className="hover:text-blue-600 transition-colors">
              Início
            </a>
            <a href="#metodo" className="hover:text-blue-600 transition-colors">
              Método A.C.C.O
            </a>
            <a href="#combo-growth" className="hover:text-blue-600 transition-colors text-blue-700 font-bold">
              Combo Growth (R$ 1.600)
            </a>
            <a href="#nichos" className="hover:text-blue-600 transition-colors">
              Cases Práticos
            </a>
            <a href="#servicos" className="hover:text-blue-600 transition-colors">
              Serviços
            </a>
            <a href="#sobre" className="hover:text-blue-600 transition-colors">
              Sobre o Grégory
            </a>
            <a href="#faq" className="hover:text-blue-600 transition-colors">
              Dúvidas
            </a>
            <a href="#contato" className="hover:text-blue-600 transition-colors text-blue-600 font-bold">
              Contato
            </a>
          </div>

          {/* Ações e Redes */}
          <div className="flex items-center gap-2.5">
            <a
              href={SITE_CONFIG.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-slate-700 hover:border-blue-300 hover:text-blue-600 transition-colors"
              aria-label="Instagram de Grégory Caruccio"
            >
              <Instagram className="h-4 w-4" />
            </a>

            <a
              href={`https://wa.me/${SITE_CONFIG.telefoneRaw}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-slate-700 hover:border-emerald-300 hover:text-emerald-600 transition-colors"
              aria-label="WhatsApp Oficial"
            >
              <WhatsAppIcon className="h-4 w-4 fill-current" />
            </a>

            <button
              onClick={scrollToTop}
              className="flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-slate-700 hover:border-blue-300 hover:text-blue-600 transition-colors"
              aria-label="Voltar ao topo"
            >
              <ArrowUp className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Rodapé Inferior: Direitos e Status Técnico Alinhado à Direita */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-600 font-sans">
          <p>
            © {new Date().getFullYear()} {SITE_CONFIG.nome}. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-2 text-[11px] text-slate-500 font-medium">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            <span>Sistema Operacional Ativo • React & Tailwind</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

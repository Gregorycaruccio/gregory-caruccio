import React from "react";
import { ArrowUp, Instagram, MessageSquare } from "lucide-react";
import { SITE_CONFIG } from "../config/site-config";

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#07090F] pt-16 pb-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-12">
          {/* Logo e Descrição */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-orange text-white font-heading font-extrabold text-base">
                G
              </div>
              <span className="font-heading font-extrabold text-lg text-white">
                {SITE_CONFIG.nome}
              </span>
            </div>
            <p className="mt-2 text-xs text-slate-400 font-sans max-w-sm">
              Estratégia de crescimento, tráfego pago hiperlocal e arquitetura de conversão para empresas que buscam previsibilidade de vendas.
            </p>
          </div>

          {/* Links Rápidos */}
          <div className="flex flex-wrap justify-center gap-6 text-xs font-sans font-medium text-slate-400">
            <a href="#metodo" className="hover:text-brand-orange transition-colors">
              O Método
            </a>
            <a href="#combo-growth" className="hover:text-brand-orange transition-colors text-white font-semibold">
              Combo Growth (R$ 1.600)
            </a>
            <a href="#servicos" className="hover:text-brand-orange transition-colors">
              Serviços
            </a>
            <a href="#nichos" className="hover:text-brand-orange transition-colors">
              Cases
            </a>
            <a href="#processo" className="hover:text-brand-orange transition-colors">
              Processo
            </a>
            <a href="#faq" className="hover:text-brand-orange transition-colors">
              Dúvidas
            </a>
          </div>

          {/* Ações e Redes */}
          <div className="flex items-center gap-3">
            <a
              href={SITE_CONFIG.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-xl bg-carbon-card text-slate-300 hover:bg-brand-orange hover:text-white transition-colors duration-200"
              aria-label="Instagram de Grégory Caruccio"
            >
              <Instagram className="h-4 w-4" />
            </a>

            <a
              href={`https://wa.me/${SITE_CONFIG.telefoneRaw}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-xl bg-carbon-card text-slate-300 hover:bg-emerald-500 hover:text-white transition-colors duration-200"
              aria-label="WhatsApp Oficial"
            >
              <MessageSquare className="h-4 w-4" />
            </a>

            <button
              onClick={scrollToTop}
              className="flex h-10 w-10 items-center justify-center rounded-xl bg-carbon-card text-slate-300 hover:text-brand-orange transition-colors duration-200"
              aria-label="Voltar ao topo"
            >
              <ArrowUp className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Rodapé Inferior */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-sans text-slate-500">
          <p>
            © {new Date().getFullYear()} {SITE_CONFIG.nome}. Todos os direitos reservados.
          </p>
          <p className="flex items-center gap-1.5 font-sans">
            <span>Desenvolvido para alta performance com</span>
            <span className="text-brand-orange font-bold">React e Tailwind</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

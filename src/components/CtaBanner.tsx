import React from "react";
import { ArrowRight, CheckCircle2, Zap } from "lucide-react";
import { SITE_CONFIG } from "../config/site-config";

export const CtaBanner: React.FC = () => {
  const whatsappCtaHref = `https://wa.me/${SITE_CONFIG.telefoneRaw}?text=Ol%C3%A1%20Gr%C3%A9gory!%20Quero%20solicitar%20meu%20diagn%C3%B3stico%20comercial%20gratuito.`;

  return (
    <section className="py-12 bg-white">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        
        {/* Banner Gradiente Estilo Flowora */}
        <div className="rounded-3xl bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 p-8 sm:p-12 lg:p-14 text-white relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-8">
          
          {/* Efeitos de Glow e Blur de Fundo */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-20 -left-20 w-80 h-80 bg-white/10 rounded-full blur-2xl"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-20 -right-20 w-80 h-80 bg-indigo-900/40 rounded-full blur-2xl"
          />

          <div className="relative z-10 max-w-2xl text-center lg:text-left">
            <div className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold text-blue-100 mb-4 backdrop-blur-sm">
              <Zap className="h-3.5 w-3.5 text-amber-300" />
              <span>Diagnóstico Comercial Gratuito</span>
            </div>

            <h2 className="font-heading font-extrabold text-xl sm:text-3xl lg:text-4xl text-white tracking-tight leading-tight max-w-xl">
              Transforme seu WhatsApp em máquina de vendas.
            </h2>

            <p className="mt-3 text-sm sm:text-base text-blue-100 font-sans leading-relaxed">
              Converse diretamente com o Grégory Caruccio e descubra onde sua empresa está perdendo vendas e como aplicar o Método A.C.C.O na sua região.
            </p>

            <div className="mt-5 flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs text-blue-100">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-emerald-300" /> Sem intermediários
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-emerald-300" /> Retorno em até 2 horas
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-emerald-300" /> Plano sob medida
              </span>
            </div>
          </div>

          <div className="relative z-10 shrink-0 w-full sm:w-auto">
            <a
              href={whatsappCtaHref}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-2xl bg-white hover:bg-slate-50 px-8 py-4 text-sm font-extrabold text-blue-700 transition-all duration-150 hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>Solicitar Diagnóstico no WhatsApp</span>
              <ArrowRight className="h-4 w-4 text-blue-700" />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};

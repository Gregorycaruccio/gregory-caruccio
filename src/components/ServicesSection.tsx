import React from "react";
import { Check, ArrowRight } from "lucide-react";
import { SITE_CONFIG } from "../config/site-config";

export const ServicesSection: React.FC = () => {
  return (
    <section id="servicos" className="scroll-mt-28 py-20 md:py-28 bg-[#FAFBFF]/80 backdrop-blur-[2px] text-slate-900 border-t border-slate-200/80">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        
        {/* Header Direto e Sóbrio */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 border border-blue-200 bg-blue-50 text-blue-700 text-xs px-3.5 py-1.5 rounded-full font-bold uppercase tracking-wider mb-4">
            <span>Serviços Modulares e Avulsos</span>
          </div>

          <h2 className="font-heading font-extrabold text-2xl sm:text-4xl lg:text-5xl text-slate-950 tracking-tight leading-tight max-w-3xl">
            Contratações individuais <span className="text-blue-600">para cada etapa da sua empresa.</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-600 font-sans leading-relaxed">
            Seja para criar sua primeira Landing Page com carregamento instantâneo ou para estruturar bots e SDRs com Inteligência Artificial no WhatsApp, nossos contratos são objetivos e transparentes.
          </p>
        </div>

        {/* Grid Compacto e Simétrico 3x2 com Cards Brancos Estilo Flowora */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {SITE_CONFIG.servicos.map((servico) => {
            const whatsappServicoHref = `https://wa.me/${SITE_CONFIG.telefoneRaw}?text=Ol%C3%A1%20Gr%C3%A9gory!%20Gostaria%20de%20solicitar%20uma%20proposta%20para%20o%20servi%C3%A7o:%20${encodeURIComponent(servico.nome)}.`;

            return (
              <div
                key={servico.id}
                className="rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-7 h-full flex flex-col justify-between hover:border-blue-400 transition-all duration-200"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                      {servico.categoria}
                    </span>
                    {servico.destaque && (
                      <span className="rounded-full bg-blue-50 border border-blue-200 px-2.5 py-0.5 text-xs font-bold text-blue-700">
                        {servico.destaque}
                      </span>
                    )}
                  </div>

                  <h3 className="mt-3 font-heading font-extrabold text-lg text-slate-950">
                    {servico.nome}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-slate-600 font-sans leading-relaxed min-h-[3rem]">
                    {servico.descricao}
                  </p>

                  <div className="my-5 rounded-2xl border border-slate-100 bg-[#F8FAFC] p-4">
                    <div className="flex items-baseline gap-1.5">
                      <code className="font-mono text-slate-950 text-xl sm:text-2xl font-extrabold tracking-normal">
                        {servico.preco}
                      </code>
                      <span className="text-xs text-slate-500 font-medium">
                        {servico.periodo}
                      </span>
                    </div>
                  </div>

                  <ul className="space-y-2.5">
                    {servico.features.map((feat, fIdx) => (
                      <li
                        key={fIdx}
                        className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 font-sans leading-relaxed"
                      >
                        <Check className="h-4 w-4 text-blue-600 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Secundário Elegante */}
                <div className="mt-8 pt-4 border-t border-slate-100">
                  <a
                    href={whatsappServicoHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-slate-50 hover:bg-blue-50 hover:border-blue-300 hover:text-blue-700 px-4 py-3 text-xs sm:text-sm font-bold text-slate-700 transition-colors"
                  >
                    <span>Solicitar Proposta</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

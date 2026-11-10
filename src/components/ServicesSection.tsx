import React from "react";
import { Check, ArrowRight, MessageSquare } from "lucide-react";
import { SITE_CONFIG } from "../config/site-config";

export const ServicesSection: React.FC = () => {
  return (
    <section id="servicos" className="py-20 md:py-28 bg-[#0B0F17] text-slate-100">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        
        {/* Header Direto e Sóbrio */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs px-3 py-1 rounded-full font-medium mb-4">
            <span>Serviços Modulares e Avulsos</span>
          </div>

          <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-white tracking-tight leading-tight">
            Contratações individuais <br />
            <span className="text-blue-400">
              para a etapa exata da sua empresa.
            </span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-300 font-sans leading-relaxed">
            Seja para criar sua primeira Landing Page com carregamento instantâneo ou para assumir a gestão exclusiva dos seus anúncios no Google, nossos contratos são objetivos e transparentes.
          </p>
        </div>

        {/* Grid Compacto e Simétrico 3x2 com Alturas Unificadas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {SITE_CONFIG.servicos.map((servico) => {
            const whatsappServicoHref = `https://wa.me/${SITE_CONFIG.telefoneRaw}?text=Ol%C3%A1%20Gr%C3%A9gory!%20Gostaria%20de%20solicitar%20uma%20proposta%20para%20o%20servi%C3%A7o:%20${encodeURIComponent(servico.nome)}.`;

            return (
              <div
                key={servico.id}
                className="rounded-xl border border-white/[0.07] bg-[#101725] p-6 h-full flex flex-col justify-between hover:border-white/[0.12] transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-slate-400">
                      {servico.categoria}
                    </span>
                    {servico.destaque && (
                      <span className="rounded-full bg-blue-500/10 border border-blue-500/20 px-2.5 py-0.5 text-[11px] font-semibold text-blue-400">
                        {servico.destaque}
                      </span>
                    )}
                  </div>

                  <h3 className="mt-2 font-heading font-bold text-lg text-white">
                    {servico.nome}
                  </h3>
                  <p className="mt-2 text-xs text-slate-300 font-sans leading-relaxed min-h-[3rem]">
                    {servico.descricao}
                  </p>

                  <div className="my-5 rounded-lg border border-white/[0.05] bg-[#0B0F17] p-3.5">
                    <div className="flex items-baseline gap-1.5">
                      <code className="font-mono text-white text-xl sm:text-2xl font-bold tracking-normal">
                        {servico.preco}
                      </code>
                      <span className="text-xs text-slate-400">
                        {servico.periodo}
                      </span>
                    </div>
                  </div>

                  <ul className="space-y-2">
                    {servico.features.map((feat, fIdx) => (
                      <li
                        key={fIdx}
                        className="flex items-start gap-2.5 text-xs text-slate-300 font-sans leading-relaxed"
                      >
                        <Check className="h-3.5 w-3.5 text-blue-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Secundário Elegante no Estilo Outline */}
                <div className="mt-8 pt-4">
                  <a
                    href={whatsappServicoHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 rounded-lg border border-white/[0.1] bg-white/[0.02] hover:bg-white/[0.06] hover:border-blue-500/30 px-4 py-2.5 text-xs font-medium text-slate-200 hover:text-white transition-colors"
                  >
                    <MessageSquare className="h-3.5 w-3.5 text-blue-400" />
                    <span>Solicitar Proposta</span>
                    <ArrowRight className="h-3 w-3" />
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

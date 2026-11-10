import React from "react";
import { Check, ArrowRight, MessageSquare } from "lucide-react";
import { SITE_CONFIG } from "../config/site-config";

export const ServicesSection: React.FC = () => {
  return (
    <section id="servicos" className="py-20 md:py-28 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header Direto Sem Kicker */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-white tracking-tight">
            Contratações individuais <br />
            <span className="text-electric-cyan">
              para a etapa exata da sua empresa.
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 font-sans leading-relaxed">
            Seja para criar sua primeira Landing Page com carregamento instantâneo ou para assumir a gestão exclusiva dos seus anúncios no Google, nossos contratos são objetivos e transparentes.
          </p>
        </div>

        {/* Grid de Serviços Individuais */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SITE_CONFIG.servicos.map((servico) => {
            const whatsappServicoHref = `https://wa.me/${SITE_CONFIG.telefoneRaw}?text=Ol%C3%A1%20Gr%C3%A9gory!%20Gostaria%20de%20solicitar%20uma%20proposta%20para%20o%20servi%C3%A7o:%20${encodeURIComponent(servico.nome)}.`;

            return (
              <div
                key={servico.id}
                className="glass-card rounded-2xl p-6 sm:p-7 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-slate-400">
                      {servico.categoria}
                    </span>
                    {servico.destaque && (
                      <span className="rounded-full bg-electric-blue/20 px-2.5 py-0.5 text-xs font-semibold text-electric-cyan border border-electric-cyan/30">
                        {servico.destaque}
                      </span>
                    )}
                  </div>

                  <h3 className="mt-2 font-heading font-bold text-xl text-white">
                    {servico.nome}
                  </h3>
                  <p className="mt-2 text-xs text-slate-300 font-sans leading-relaxed min-h-[3rem]">
                    {servico.descricao}
                  </p>

                  <div className="my-5 rounded-xl bg-obsidian-950 p-4">
                    <div className="flex items-baseline gap-1.5">
                      <span className="font-heading font-extrabold text-2xl text-white">
                        {servico.preco}
                      </span>
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
                        <Check className="h-4 w-4 text-electric-cyan shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 pt-4">
                  <a
                    href={whatsappServicoHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-glass w-full justify-center !py-2.5 !text-xs !rounded-full"
                  >
                    <MessageSquare className="h-3.5 w-3.5" />
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

import React from "react";
import { Utensils, Home, Dog, Sparkles, Building2, Car, TrendingUp } from "lucide-react";
import { SITE_CONFIG } from "../config/site-config";

export const PortfolioSection: React.FC = () => {
  const getIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return <Utensils className="h-4 w-4 text-blue-600" />;
      case 1:
        return <Home className="h-4 w-4 text-blue-600" />;
      case 2:
        return <Dog className="h-4 w-4 text-blue-600" />;
      case 3:
        return <Sparkles className="h-4 w-4 text-blue-600" />;
      case 4:
        return <Building2 className="h-4 w-4 text-blue-600" />;
      default:
        return <Car className="h-4 w-4 text-blue-600" />;
    }
  };

  const getNichoTag = (idx: number) => {
    switch (idx) {
      case 0:
        return "Gastronomia & Delivery";
      case 1:
        return "Mercado Imobiliário";
      case 2:
        return "Agropecuária & Pet Shop";
      case 3:
        return "Saúde & Estética Facial";
      case 4:
        return "Comunicação Visual B2B";
      default:
        return "Seminovos & Veículos";
    }
  };

  return (
    <section id="nichos" className="py-20 md:py-28 bg-[#FAFBFF] text-slate-900 border-t border-slate-200/80">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        
        {/* Header Editorial Flowora */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 border border-blue-200 bg-blue-50 text-blue-700 text-xs px-3.5 py-1.5 rounded-full font-bold uppercase tracking-wider mb-4">
            <span>Resultados e Casos Práticos</span>
          </div>

          <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-slate-950 tracking-tight leading-tight">
            Experiência prática no balcão <br />
            <span className="text-blue-600">
              dos principais negócios locais.
            </span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-600 font-sans leading-relaxed">
            Nada de teorias vazias. Conhecemos a rotina da loja física, a sazonalidade do litoral, a comissão imobiliária, o pico noturno do delivery e o estoque de seminovos.
          </p>
        </div>

        {/* Grid de Casos Práticos */}
        <div className="overflow-x-auto snap-x snap-mandatory flex gap-5 no-scrollbar pb-4 md:grid md:grid-cols-2 lg:grid-cols-3 md:overflow-visible md:pb-0">
          {SITE_CONFIG.nichos.map((nicho, idx) => (
            <div
              key={idx}
              className="w-[85vw] sm:w-[360px] shrink-0 snap-start md:w-auto md:shrink rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-7 flex flex-col justify-between hover:border-blue-400 transition-all duration-200"
            >
              <div>
                {/* 1. Header com o Nicho em tag discreta */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-bold text-blue-700 bg-blue-50 border border-blue-200/70 px-3 py-1 rounded-full">
                    {getNichoTag(idx)}
                  </span>
                  <span className="text-[11px] font-semibold text-slate-600">
                    Case {idx + 1}
                  </span>
                </div>

                {/* 2. Nome da empresa em destaque com micro-ícone */}
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-50 border border-blue-200/70 shrink-0">
                    {getIcon(idx)}
                  </div>
                  <h3 className="font-heading font-extrabold text-base text-slate-950 tracking-tight">
                    {nicho.exemplo}
                  </h3>
                </div>

                {/* 2.5 Badges de Métricas Auditadas */}
                {nicho.metricas && nicho.metricas.length > 0 && (
                  <div className="my-3.5 flex flex-wrap gap-1.5">
                    {nicho.metricas.map((m, mIdx) => (
                      <div
                        key={mIdx}
                        className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200/80 bg-slate-50/90 px-2.5 py-1 text-[11px]"
                      >
                        <span className="text-slate-500 font-medium">{m.label}:</span>
                        <code className="font-mono font-bold text-slate-900 tracking-tight">
                          {m.valor}
                        </code>
                      </div>
                    ))}
                  </div>
                )}

                {/* 3. Bloco "Estratégia Aplicada" */}
                <div className="mt-3">
                  <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block mb-1">
                    Estratégia Aplicada:
                  </span>
                  <p className="text-xs sm:text-sm text-slate-600 font-sans leading-relaxed">
                    {nicho.foco}
                  </p>
                </div>
              </div>

              {/* 4. Caixa de "Resultado Real em Caixa" em Preto Profundo com Gradiente Sutil */}
              <div className="mt-6 rounded-2xl bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 p-4 border border-slate-800 text-white shadow-sm">
                <div className="flex items-start gap-2.5">
                  <TrendingUp className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[11px] font-bold text-emerald-400 uppercase tracking-wider block">
                      Resultado Real em Caixa:
                    </span>
                    <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                      <code className="font-mono text-emerald-300 font-medium tracking-normal">
                        {nicho.resultado}
                      </code>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

import React from "react";
import { Utensils, Home, Dog, Sparkles, Building2, Car, TrendingUp } from "lucide-react";
import { SITE_CONFIG } from "../config/site-config";

export const PortfolioSection: React.FC = () => {
  const getIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return <Utensils className="h-4 w-4 text-blue-400" />;
      case 1:
        return <Home className="h-4 w-4 text-blue-400" />;
      case 2:
        return <Dog className="h-4 w-4 text-blue-400" />;
      case 3:
        return <Sparkles className="h-4 w-4 text-blue-400" />;
      case 4:
        return <Building2 className="h-4 w-4 text-blue-400" />;
      default:
        return <Car className="h-4 w-4 text-blue-400" />;
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
    <section id="nichos" className="py-20 md:py-28 bg-[#101725] text-slate-100">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        
        {/* Header Direto e Sóbrio */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs px-3 py-1 rounded-full font-medium mb-4">
            <span>Resultados e Casos de Campo</span>
          </div>

          <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-white tracking-tight leading-tight">
            Experiência prática no balcão <br />
            <span className="text-blue-400">
              dos principais negócios locais.
            </span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-300 font-sans leading-relaxed">
            Nada de teorias vazias. Conhecemos a rotina da loja física, a dor da comissão imobiliária, o pico noturno do delivery e o estoque da revenda de veículos.
          </p>
        </div>

        {/* Grid de Casos Práticos: Desktop em Grid 3x2 e Mobile com Scroll Horizontal Nativo */}
        <div className="overflow-x-auto snap-x snap-mandatory flex gap-5 no-scrollbar pb-4 md:grid md:grid-cols-2 lg:grid-cols-3 md:overflow-visible md:pb-0">
          {SITE_CONFIG.nichos.map((nicho, idx) => (
            <div
              key={idx}
              className="w-[85vw] sm:w-[360px] shrink-0 snap-start md:w-auto md:shrink rounded-xl border border-white/[0.07] bg-[#0B0F17] p-6 flex flex-col justify-between hover:border-white/[0.12] transition-colors"
            >
              <div>
                {/* 1. Header com o Nicho em tag discreta */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-medium text-blue-400 bg-blue-500/10 border border-blue-500/20 px-2.5 py-0.5 rounded-full">
                    {getNichoTag(idx)}
                  </span>
                  <span className="text-[11px] font-semibold text-slate-400">
                    Case {idx + 1}
                  </span>
                </div>

                {/* 2. Nome da empresa em destaque com micro-ícone */}
                <div className="flex items-center gap-2.5 mb-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-500/10 border border-blue-500/20 shrink-0">
                    {getIcon(idx)}
                  </div>
                  <h3 className="font-heading font-bold text-base text-white tracking-tight">
                    {nicho.exemplo}
                  </h3>
                </div>

                {/* 3. Bloco "Estratégia Aplicada" */}
                <div className="mt-3">
                  <span className="text-[11px] font-semibold text-slate-400 block mb-1">
                    Estratégia Aplicada:
                  </span>
                  <p className="text-xs text-slate-300 font-sans leading-relaxed">
                    {nicho.foco}
                  </p>
                </div>
              </div>

              {/* 4. Caixa de "Resultado de Caixa": fundo bg-black/40 com borda fina */}
              <div className="mt-5 rounded-lg border border-white/[0.06] bg-black/40 p-3.5">
                <div className="flex items-start gap-2.5">
                  <TrendingUp className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[11px] font-semibold text-slate-400 block">
                      Resultado de Caixa:
                    </span>
                    <p className="text-xs text-slate-200 mt-0.5 leading-relaxed">
                      <code className="font-mono text-emerald-400 font-semibold tracking-normal">
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

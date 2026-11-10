import React from "react";
import { Utensils, Home, Dog, Sparkles, Building2, Car, TrendingUp } from "lucide-react";
import { SITE_CONFIG } from "../config/site-config";

export const PortfolioSection: React.FC = () => {
  const getIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return <Utensils className="h-5 w-5 text-electric-blue" />;
      case 1:
        return <Home className="h-5 w-5 text-electric-blue" />;
      case 2:
        return <Dog className="h-5 w-5 text-electric-blue" />;
      case 3:
        return <Sparkles className="h-5 w-5 text-electric-blue" />;
      case 4:
        return <Building2 className="h-5 w-5 text-electric-blue" />;
      default:
        return <Car className="h-5 w-5 text-electric-blue" />;
    }
  };

  return (
    <section id="nichos" className="py-20 md:py-28 relative bg-slate-100 text-slate-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header Direto Sem Kicker */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-slate-950 tracking-tight">
            Experiência prática no balcão <br />
            <span className="text-electric-blue">
              dos principais negócios locais.
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 font-sans leading-relaxed">
            Nada de teorias vazias. Conhecemos a rotina da loja física, a dor da comissão imobiliária, o pico noturno do delivery e o estoque da revenda de veículos.
          </p>
        </div>

        {/* Grid de Casos Práticos (Cards Brancos sobre Fundo Slate Claro) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SITE_CONFIG.nichos.map((nicho, idx) => (
            <div
              key={idx}
              className="bg-white border border-slate-200/90 rounded-2xl p-6 sm:p-7 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50">
                    {getIcon(idx)}
                  </div>
                  <span className="text-xs font-semibold text-slate-600 bg-slate-100 px-3 py-1 rounded-full border border-slate-200/70">
                    {nicho.exemplo}
                  </span>
                </div>

                <h3 className="font-heading font-bold text-lg text-slate-950">
                  {nicho.nicho}
                </h3>

                <p className="mt-3 text-xs text-slate-600 font-sans leading-relaxed">
                  {nicho.foco}
                </p>
              </div>

              <div className="mt-6 rounded-xl bg-emerald-50 border border-emerald-200/80 p-3.5 flex items-start gap-2.5">
                <TrendingUp className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                <p className="text-xs text-emerald-950">
                  <strong className="text-emerald-900">Impacto Comercial:</strong> {nicho.resultado}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

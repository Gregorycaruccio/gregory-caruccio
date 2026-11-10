import React from "react";
import { Utensils, Home, Dog, Sparkles, Building2, Car, TrendingUp } from "lucide-react";
import { SITE_CONFIG } from "../config/site-config";

export const PortfolioSection: React.FC = () => {
  const getIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return <Utensils className="h-5 w-5 text-electric-cyan" />;
      case 1:
        return <Home className="h-5 w-5 text-electric-cyan" />;
      case 2:
        return <Dog className="h-5 w-5 text-electric-cyan" />;
      case 3:
        return <Sparkles className="h-5 w-5 text-electric-cyan" />;
      case 4:
        return <Building2 className="h-5 w-5 text-electric-cyan" />;
      default:
        return <Car className="h-5 w-5 text-electric-cyan" />;
    }
  };

  return (
    <section id="nichos" className="py-20 md:py-28 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header Direto Sem Kicker */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-white tracking-tight">
            Experiência prática no balcão <br />
            <span className="text-electric-cyan">
              dos principais negócios locais.
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 font-sans leading-relaxed">
            Nada de teorias vazias. Conhecemos a rotina da loja física, a dor da comissão imobiliária, o pico noturno do delivery e o estoque da revenda de veículos.
          </p>
        </div>

        {/* Grid de Casos Práticos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SITE_CONFIG.nichos.map((nicho, idx) => (
            <div
              key={idx}
              className="glass-card rounded-2xl p-6 sm:p-7 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-obsidian-850">
                    {getIcon(idx)}
                  </div>
                  <span className="text-xs font-semibold text-slate-400 bg-obsidian-950 px-3 py-1 rounded-full">
                    {nicho.exemplo}
                  </span>
                </div>

                <h3 className="font-heading font-bold text-lg text-white">
                  {nicho.nicho}
                </h3>

                <p className="mt-3 text-xs text-slate-300 font-sans leading-relaxed">
                  {nicho.foco}
                </p>
              </div>

              <div className="mt-6 rounded-xl bg-obsidian-950 p-3.5 flex items-start gap-2.5">
                <TrendingUp className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                <p className="text-xs text-slate-200">
                  <strong className="text-white">Impacto Comercial:</strong> {nicho.resultado}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

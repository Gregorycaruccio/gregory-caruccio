import React from "react";
import { Utensils, Home, Dog, Sparkles, Building2, Car, TrendingUp } from "lucide-react";
import { SITE_CONFIG } from "../config/site-config";

export const PortfolioSection: React.FC = () => {
  const getIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return <Utensils className="h-5 w-5 text-brand-orange" />;
      case 1:
        return <Home className="h-5 w-5 text-brand-orange" />;
      case 2:
        return <Dog className="h-5 w-5 text-brand-orange" />;
      case 3:
        return <Sparkles className="h-5 w-5 text-brand-orange" />;
      case 4:
        return <Building2 className="h-5 w-5 text-brand-orange" />;
      default:
        return <Car className="h-5 w-5 text-brand-orange" />;
    }
  };

  return (
    <section id="nichos" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header Direto Sem Eyebrow */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-white tracking-tight">
            Casos práticos de campo <br />
            <span className="text-brand-orange">no comércio e negócios locais.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 font-sans leading-relaxed">
            Estratégias testadas na rotina de empresas reais: a comissão imobiliária, o pico do delivery à noite, o balcão da revenda de veículos e o catálogo da agropecuária.
          </p>
        </div>

        {/* Grid de Casos Práticos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SITE_CONFIG.nichos.map((nicho, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-carbon-border bg-carbon-card p-6 sm:p-7 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-carbon-elevated">
                    {getIcon(idx)}
                  </div>
                  <span className="text-xs font-semibold text-slate-400">
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

              <div className="mt-6 rounded-xl bg-[#0A0D14] p-3.5 flex items-start gap-2.5">
                <TrendingUp className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                <p className="text-xs text-slate-200">
                  <strong className="text-white">Resultado:</strong> {nicho.resultado}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

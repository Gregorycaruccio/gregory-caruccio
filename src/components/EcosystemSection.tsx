import React from "react";
import { ArrowRight, Compass, Layers, PhoneCall, TrendingUp } from "lucide-react";
import { SITE_CONFIG } from "../config/site-config";

export const EcosystemSection: React.FC = () => {
  const getIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Compass className="h-5 w-5 text-brand-orange" />;
      case 1:
        return <Layers className="h-5 w-5 text-brand-orange" />;
      case 2:
        return <PhoneCall className="h-5 w-5 text-brand-orange" />;
      default:
        return <TrendingUp className="h-5 w-5 text-brand-orange" />;
    }
  };

  return (
    <section id="metodo" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header Direto Sem Eyebrow */}
        <div className="max-w-3xl">
          <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-white tracking-tight">
            Um ecossistema completo. <br />
            <span className="text-brand-orange">Não serviços isolados.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 font-sans leading-relaxed">
            Contratar posts avulsos ou ligar anúncios sem cuidar da autoridade do perfil queima verba. No nosso modelo, cada etapa cumpre um papel direto na decisão de compra do cliente.
          </p>
        </div>

        {/* Pipeline das 4 Etapas */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {SITE_CONFIG.ecossistema.map((item, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-carbon-border bg-carbon-card p-6 flex flex-col justify-between"
            >
              <div>
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-carbon-elevated mb-5">
                  {getIcon(idx)}
                </div>

                <h3 className="font-heading font-bold text-xl text-white">
                  {item.fase}
                </h3>
                <p className="text-xs font-semibold text-brand-orange mt-1">
                  {item.subtitulo}
                </p>

                <p className="mt-4 text-sm text-slate-300 font-sans leading-relaxed">
                  {item.descricao}
                </p>
              </div>

              <div className="mt-6 pt-4">
                <p className="text-xs font-semibold text-slate-400 mb-2">
                  Canais em operação:
                </p>
                <ul className="space-y-1.5">
                  {item.canais.map((canal, cIdx) => (
                    <li
                      key={cIdx}
                      className="text-xs text-slate-300 flex items-center gap-1.5"
                    >
                      <ArrowRight className="h-3 w-3 text-brand-orange shrink-0" />
                      <span>{canal}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

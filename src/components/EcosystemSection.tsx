import React from "react";
import { ArrowRight, Compass, Layers, PhoneCall, TrendingUp } from "lucide-react";
import { SITE_CONFIG } from "../config/site-config";

export const EcosystemSection: React.FC = () => {
  const getIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Compass className="h-5 w-5 text-blue-400" />;
      case 1:
        return <Layers className="h-5 w-5 text-blue-400" />;
      case 2:
        return <PhoneCall className="h-5 w-5 text-blue-400" />;
      default:
        return <TrendingUp className="h-5 w-5 text-emerald-400" />;
    }
  };

  return (
    <section id="metodo" className="py-20 md:py-28 bg-[#101725] text-slate-100">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        
        {/* Header Direto e Sóbrio */}
        <div className="max-w-2xl mb-12 sm:mb-16">
          <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-white tracking-tight leading-tight">
            Um ecossistema comercial integrado. <br />
            <span className="text-blue-400">
              Não ações isoladas.
            </span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-300 font-sans leading-relaxed">
            Contratar posts avulsos ou rodar anúncios sem autoridade no perfil desperdiça orçamento. No nosso método, cada etapa cumpre uma função direta na decisão de compra do cliente.
          </p>
        </div>

        {/* Pipeline das 4 Etapas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {SITE_CONFIG.ecossistema.map((item, idx) => (
            <div
              key={idx}
              className="rounded-xl border border-white/[0.07] bg-[#0B0F17] p-6 flex flex-col justify-between"
            >
              <div>
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500/10 border border-blue-500/20 mb-4">
                  {getIcon(idx)}
                </div>

                <div className="flex items-center justify-between mb-1">
                  <h3 className="font-heading font-bold text-lg text-white">
                    {item.fase}
                  </h3>
                  <span className="text-[11px] font-semibold text-slate-400">
                    Fase {idx + 1}
                  </span>
                </div>

                <p className="text-xs font-semibold text-blue-400 mt-0.5">
                  {item.subtitulo}
                </p>

                <p className="mt-3 text-xs sm:text-sm text-slate-300 font-sans leading-relaxed">
                  {item.descricao}
                </p>
              </div>

              <div className="mt-6 pt-3.5">
                <p className="text-[11px] font-medium text-slate-400 mb-2">
                  Canais em operação:
                </p>
                <ul className="space-y-1.5">
                  {item.canais.map((canal, cIdx) => (
                    <li
                      key={cIdx}
                      className="text-xs text-slate-300 flex items-center gap-2"
                    >
                      <ArrowRight className="h-3 w-3 text-blue-400 shrink-0" />
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

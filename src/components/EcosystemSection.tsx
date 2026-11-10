import React from "react";
import { ArrowRight, Compass, Layers, PhoneCall, TrendingUp } from "lucide-react";
import { SITE_CONFIG } from "../config/site-config";

export const EcosystemSection: React.FC = () => {
  const getIconBadge = (index: number) => {
    switch (index) {
      case 0:
        return (
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 border border-blue-100">
            <Compass className="h-5 w-5" />
          </div>
        );
      case 1:
        return (
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-amber-50 text-amber-600 border border-amber-100">
            <Layers className="h-5 w-5" />
          </div>
        );
      case 2:
        return (
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600 border border-emerald-100">
            <PhoneCall className="h-5 w-5" />
          </div>
        );
      default:
        return (
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600 border border-indigo-100">
            <TrendingUp className="h-5 w-5" />
          </div>
        );
    }
  };

  return (
    <section id="metodo" className="py-20 md:py-28 bg-white text-slate-900 border-t border-slate-200/80">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        
        {/* Header Direto e Sóbrio com Método A.C.C.O */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 border border-blue-200 bg-blue-50 text-blue-700 text-xs px-3.5 py-1.5 rounded-full font-bold tracking-wider uppercase mb-4">
            <span>MÉTODO A.C.C.O</span>
          </div>

          <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-slate-950 tracking-tight leading-tight">
            Um ecossistema comercial integrado. <br />
            <span className="text-blue-600">
              Não ações isoladas.
            </span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-600 font-sans leading-relaxed">
            Contratar posts avulsos ou rodar anúncios sem autoridade no perfil desperdiça orçamento. No Método A.C.C.O (Atrair, Construir, Converter e Otimizar), cada etapa cumpre uma função direta na decisão de compra do cliente.
          </p>
        </div>

        {/* Pipeline Estilo Flowora em 4 Cards Brancos com Destaques Suaves */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {SITE_CONFIG.ecossistema.map((item, idx) => (
            <div
              key={idx}
              className="rounded-3xl border border-slate-200/90 bg-[#FAFBFF] p-6 sm:p-7 flex flex-col justify-between hover:border-blue-400 hover:bg-white transition-all duration-200"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  {getIconBadge(idx)}
                  <span className="font-mono text-xs font-bold text-blue-600 bg-blue-50 border border-blue-100 px-2.5 py-1 rounded-lg">
                    0{idx + 1}
                  </span>
                </div>

                <h3 className="font-heading font-extrabold text-lg text-slate-950">
                  {item.fase}
                </h3>

                <p className="text-xs font-semibold text-blue-600 mt-1">
                  {item.subtitulo}
                </p>

                <p className="mt-3 text-xs sm:text-sm text-slate-600 font-sans leading-relaxed">
                  {item.descricao}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200/60">
                <p className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-2.5">
                  Canais em operação:
                </p>
                <ul className="space-y-2">
                  {item.canais.map((canal, cIdx) => (
                    <li
                      key={cIdx}
                      className="text-xs text-slate-700 flex items-center gap-2"
                    >
                      <ArrowRight className="h-3 w-3 text-blue-600 shrink-0" />
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

import React from "react";
import { SITE_CONFIG } from "../config/site-config";

export const ProcessSection: React.FC = () => {
  return (
    <section id="processo" className="py-20 md:py-28 bg-[#FAFBFF] text-slate-900 border-t border-slate-200/80">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        
        {/* Header Direto e Sóbrio */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 border border-blue-200 bg-blue-50 text-blue-700 text-xs px-3.5 py-1.5 rounded-full font-bold uppercase tracking-wider mb-4">
            <span>Metodologia Ágil</span>
          </div>

          <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-slate-950 tracking-tight leading-tight">
            Processo ágil de trabalho, <br />
            <span className="text-blue-600">
              do alinhamento às primeiras vendas.
            </span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-600 font-sans leading-relaxed">
            Sem reuniões enroladas ou burocracia desnecessária. Uma linha direta e estruturada para colocar sua máquina de clientes no ar no menor prazo possível.
          </p>
        </div>

        {/* Linha do Tempo em 5 Etapas Minimalistas com Cards Brancos */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 sm:gap-5">
          {SITE_CONFIG.processo.map((p, idx) => (
            <div
              key={idx}
              className="rounded-3xl border border-slate-200/90 bg-white p-5 sm:p-6 flex flex-col justify-between hover:border-blue-400 transition-all duration-200"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-3xl font-extrabold text-blue-600/30">
                    0{idx + 1}
                  </span>
                  <span className="text-[11px] font-bold text-blue-700 bg-blue-50 border border-blue-200/70 px-2 py-0.5 rounded-lg">
                    Passo {idx + 1}
                  </span>
                </div>

                <h3 className="font-heading font-extrabold text-sm sm:text-base text-slate-950">
                  {p.titulo}
                </h3>
                <p className="mt-2 text-xs text-slate-600 font-sans leading-relaxed">
                  {p.descricao}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-100 text-xs text-slate-500">
                Prazo: <code className="font-mono text-blue-700 font-bold">{p.prazo}</code>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

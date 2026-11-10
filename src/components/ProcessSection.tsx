import React from "react";
import { SITE_CONFIG } from "../config/site-config";

export const ProcessSection: React.FC = () => {
  return (
    <section id="processo" className="py-20 md:py-28 bg-[#0B0F17] text-slate-100">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        
        {/* Header Direto e Sóbrio */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs px-3 py-1 rounded-full font-medium mb-4">
            <span>Metodologia Ágil</span>
          </div>

          <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-white tracking-tight leading-tight">
            Processo ágil de trabalho, <br />
            <span className="text-blue-400">
              do alinhamento às primeiras vendas.
            </span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-300 font-sans leading-relaxed">
            Sem reuniões enroladas ou burocracia desnecessária. Uma linha direta e estruturada para colocar sua máquina de clientes no ar no menor prazo possível.
          </p>
        </div>

        {/* Linha do Tempo em 5 Etapas com Superfície Sólida */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {SITE_CONFIG.processo.map((p, idx) => (
            <div
              key={idx}
              className="rounded-xl border border-white/[0.07] bg-[#101725] p-5 flex flex-col justify-between hover:border-white/[0.12] transition-colors"
            >
              <div>
                <span className="text-[11px] font-semibold text-blue-400 bg-blue-500/10 border border-blue-500/20 px-2.5 py-0.5 rounded-md inline-block">
                  Etapa {idx + 1}
                </span>
                <h3 className="mt-3 font-heading font-bold text-sm sm:text-base text-white">
                  {p.titulo}
                </h3>
                <p className="mt-2 text-xs text-slate-300 font-sans leading-relaxed">
                  {p.descricao}
                </p>
              </div>

              <div className="mt-5 pt-3 text-xs text-slate-400">
                Prazo: <code className="font-mono text-emerald-400 font-semibold">{p.prazo}</code>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

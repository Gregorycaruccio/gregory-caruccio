import React from "react";
import { SITE_CONFIG } from "../config/site-config";

export const ProcessSection: React.FC = () => {
  return (
    <section id="processo" className="py-20 md:py-28 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header Direto Sem Kicker */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-white tracking-tight">
            Processo ágil de trabalho, <br />
            <span className="text-electric-cyan">
              do alinhamento às primeiras vendas.
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 font-sans leading-relaxed">
            Sem reuniões enroladas ou burocracia desnecessária. Uma linha direta e estruturada para colocar sua máquina de clientes no ar no menor prazo possível.
          </p>
        </div>

        {/* Linha do Tempo */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {SITE_CONFIG.processo.map((p, idx) => (
            <div
              key={idx}
              className="glass-card rounded-2xl p-5 flex flex-col justify-between"
            >
              <div>
                <span className="text-xs font-bold text-electric-cyan bg-electric-blue/15 px-2.5 py-1 rounded-md border border-electric-cyan/20 inline-block">
                  Etapa {idx + 1}
                </span>
                <h3 className="mt-3 font-heading font-bold text-base text-white">
                  {p.titulo}
                </h3>
                <p className="mt-2 text-xs text-slate-300 font-sans leading-relaxed">
                  {p.descricao}
                </p>
              </div>

              <div className="mt-5 pt-3 text-xs text-slate-400">
                Prazo: <strong className="text-slate-200">{p.prazo}</strong>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

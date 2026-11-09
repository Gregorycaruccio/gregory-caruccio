import React from "react";
import { SITE_CONFIG } from "../config/site-config";

export const ProcessSection: React.FC = () => {
  return (
    <section id="processo" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header Direto Sem Eyebrow */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-white tracking-tight">
            Processo de trabalho <br />
            <span className="text-brand-orange">do alinhamento aos primeiros resultados.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 font-sans leading-relaxed">
            Sem burocracia ou semanas de reuniões infrutíferas. Uma esteira clara para colocar sua operação de vendas no ar no menor tempo possível.
          </p>
        </div>

        {/* Linha do Tempo */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {SITE_CONFIG.processo.map((p, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-carbon-border bg-carbon-card p-5 flex flex-col justify-between"
            >
              <div>
                <span className="text-xs font-semibold text-brand-orange">
                  Etapa {idx + 1}
                </span>
                <h3 className="mt-2 font-heading font-bold text-base text-white">
                  {p.titulo}
                </h3>
                <p className="mt-2 text-xs text-slate-300 font-sans leading-relaxed">
                  {p.descricao}
                </p>
              </div>

              <div className="mt-5 text-xs text-slate-400">
                Prazo: <strong className="text-slate-200">{p.prazo}</strong>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

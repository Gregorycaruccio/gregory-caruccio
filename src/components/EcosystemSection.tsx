import React from "react";
import { ArrowRight, Compass, Layers, PhoneCall, TrendingUp } from "lucide-react";
import { SITE_CONFIG } from "../config/site-config";

export const EcosystemSection: React.FC = () => {
  const getIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Compass className="h-5 w-5 text-electric-cyan" />;
      case 1:
        return <Layers className="h-5 w-5 text-electric-cyan" />;
      case 2:
        return <PhoneCall className="h-5 w-5 text-electric-cyan" />;
      default:
        return <TrendingUp className="h-5 w-5 text-electric-cyan" />;
    }
  };

  return (
    <section id="metodo" className="py-20 md:py-28 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header Direto */}
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 mb-3">
            <span className="h-2 w-2 rounded-full bg-electric-cyan shadow-[0_0_8px_#00D2FF]" />
            <span className="text-xs font-bold text-electric-cyan uppercase tracking-wider">
              Metodologia de Escala
            </span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-white tracking-tight">
            Um ecossistema digital integrado. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-blue to-electric-cyan">
              Não ações isoladas.
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 font-sans leading-relaxed">
            Contratar posts avulsos ou ligar anúncios sem cuidar da autoridade do perfil queima verba. No nosso modelo, cada etapa cumpre um papel direto na decisão de compra do cliente.
          </p>
        </div>

        {/* Pipeline das 4 Etapas estilo BizNext / Nexora */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SITE_CONFIG.ecossistema.map((item, idx) => (
            <div
              key={idx}
              className="glass-card rounded-2xl p-6 sm:p-7 flex flex-col justify-between relative group"
            >
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-obsidian-800 border border-electric-blue/20 mb-5 group-hover:border-electric-cyan/40 group-hover:bg-electric-blue/15 transition-all duration-300 shadow-md">
                  {getIcon(idx)}
                </div>

                <div className="flex items-center justify-between mb-1">
                  <h3 className="font-heading font-bold text-xl text-white">
                    {item.fase}
                  </h3>
                  <span className="text-[11px] font-bold text-slate-400 group-hover:text-electric-cyan transition-colors">
                    Fase 0{idx + 1}
                  </span>
                </div>

                <p className="text-xs font-semibold text-electric-cyan mt-1">
                  {item.subtitulo}
                </p>

                <p className="mt-4 text-sm text-slate-300 font-sans leading-relaxed">
                  {item.descricao}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/5">
                <p className="text-xs font-semibold text-slate-400 mb-2.5">
                  Canais em operação:
                </p>
                <ul className="space-y-2">
                  {item.canais.map((canal, cIdx) => (
                    <li
                      key={cIdx}
                      className="text-xs text-slate-300 flex items-center gap-2"
                    >
                      <ArrowRight className="h-3 w-3 text-electric-cyan shrink-0" />
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

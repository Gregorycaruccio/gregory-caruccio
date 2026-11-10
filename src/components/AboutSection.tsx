import React from "react";
import { UserCheck, Camera, TrendingUp, MapPin, CheckCircle2, MessageSquare, ArrowRight } from "lucide-react";
import { SITE_CONFIG } from "../config/site-config";

export const AboutSection: React.FC = () => {
  const sobre = SITE_CONFIG.sobre;
  const whatsappHref = `https://wa.me/${SITE_CONFIG.telefoneRaw}?text=Ol%C3%A1%20Gr%C3%A9gory!%20Li%20a%20sua%20apresenta%C3%A7%C3%A3o%20e%20gostaria%20de%20conversar%20sobre%20a%20estrat%C3%A9gia%20da%20minha%20empresa.`;

  return (
    <section id="sobre" className="py-20 md:py-28 bg-[#101725] text-slate-100">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Lado Esquerdo: Posicionamento Humano e Direto */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs px-3 py-1 rounded-full font-medium mb-4">
                <span>Atendimento Direto com o Especialista</span>
              </div>

              <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-white tracking-tight leading-tight">
                {sobre.titulo}
              </h2>

              <p className="mt-4 text-sm sm:text-base text-slate-200 font-sans font-medium leading-relaxed">
                {sobre.subtitulo}
              </p>
            </div>

            <div className="mt-6 space-y-4 text-xs sm:text-sm text-slate-300 font-sans leading-relaxed">
              {sobre.paragrafos.map((p, idx) => (
                <p key={idx} className="text-slate-300">
                  {p}
                </p>
              ))}
            </div>

            <div className="mt-8 pt-2 flex flex-wrap items-center gap-4">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 hover:bg-blue-700 px-6 py-3.5 text-sm font-semibold text-white transition-transform duration-150 hover:scale-[1.01] active:scale-[0.99]"
              >
                <MessageSquare className="h-4 w-4" />
                <span>Conversar com Grégory</span>
                <ArrowRight className="h-4 w-4 text-blue-200" />
              </a>

              <div className="flex items-center gap-2 text-xs text-slate-400">
                <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                <span>Sem estagiários ou intermediários</span>
              </div>
            </div>
          </div>

          {/* Lado Direito: Os 4 Pilares de Confiança Técnica */}
          <div className="lg:col-span-6 space-y-3.5">
            {sobre.diferenciais.map((dif, idx) => {
              const getIcon = () => {
                switch (idx) {
                  case 0:
                    return <UserCheck className="h-5 w-5 text-blue-400" />;
                  case 1:
                    return <Camera className="h-5 w-5 text-blue-400" />;
                  case 2:
                    return <TrendingUp className="h-5 w-5 text-emerald-400" />;
                  default:
                    return <MapPin className="h-5 w-5 text-blue-400" />;
                }
              };

              return (
                <div
                  key={idx}
                  className="rounded-xl border border-white/[0.07] bg-[#0B0F17] p-5 sm:p-6 transition-colors duration-200 hover:border-white/[0.12]"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-500/10 border border-blue-500/20">
                      {getIcon()}
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-sm sm:text-base text-white">
                        {dif.titulo}
                      </h3>
                      <p className="mt-1 text-xs text-slate-300 font-sans leading-relaxed">
                        {dif.descricao}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};

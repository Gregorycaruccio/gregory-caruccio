import React from "react";
import { UserCheck, Camera, TrendingUp, MapPin, CheckCircle2, MessageSquare, ArrowRight } from "lucide-react";
import { SITE_CONFIG } from "../config/site-config";

export const AboutSection: React.FC = () => {
  const sobre = SITE_CONFIG.sobre;
  const whatsappHref = `https://wa.me/${SITE_CONFIG.telefoneRaw}?text=Ol%C3%A1%20Gr%C3%A9gory!%20Li%20a%20sua%20apresenta%C3%A7%C3%A3o%20e%20gostaria%20de%20conversar%20sobre%20a%20estrat%C3%A9gia%20da%20minha%20empresa.`;

  return (
    <section id="sobre" className="py-20 md:py-28 relative bg-[#040814] text-slate-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Lado Esquerdo: Posicionamento Humano e Direto */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="h-2 w-2 rounded-full bg-electric-cyan" />
                <span className="text-xs font-bold text-electric-cyan">
                  Atendimento Direto com o Especialista
                </span>
              </div>

              <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-white tracking-tight leading-tight">
                {sobre.titulo}
              </h2>

              <p className="mt-4 text-base sm:text-lg text-slate-200 font-sans font-medium leading-relaxed">
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

            <div className="mt-8 pt-4 flex flex-wrap items-center gap-4">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-electric !py-3 !px-6 text-xs sm:text-sm !rounded-full"
              >
                <MessageSquare className="h-4 w-4" />
                <span>Falar Diretamente com Grégory</span>
                <ArrowRight className="h-4 w-4" />
              </a>

              <div className="flex items-center gap-2 text-xs text-slate-400">
                <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                <span>Sem intermediários ou estagiários</span>
              </div>
            </div>
          </div>

          {/* Lado Direito: Os 4 Pilares de Confiança Técnica */}
          <div className="lg:col-span-6 space-y-4">
            {sobre.diferenciais.map((dif, idx) => {
              const getIcon = () => {
                switch (idx) {
                  case 0:
                    return <UserCheck className="h-5 w-5 text-electric-cyan" />;
                  case 1:
                    return <Camera className="h-5 w-5 text-electric-cyan" />;
                  case 2:
                    return <TrendingUp className="h-5 w-5 text-emerald-400" />;
                  default:
                    return <MapPin className="h-5 w-5 text-electric-cyan" />;
                }
              };

              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-electric-blue/20 bg-[#070D1F] p-5 sm:p-6 transition-colors duration-200 hover:border-electric-cyan/40"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-obsidian-800">
                      {getIcon()}
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-base sm:text-lg text-white">
                        {dif.titulo}
                      </h3>
                      <p className="mt-1 text-xs sm:text-sm text-slate-300 font-sans leading-relaxed">
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

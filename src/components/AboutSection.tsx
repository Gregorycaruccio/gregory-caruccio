import React from "react";
import { UserCheck, Camera, TrendingUp, Bot, MapPin, CheckCircle2, ArrowRight } from "lucide-react";
import { SITE_CONFIG } from "../config/site-config";

export const AboutSection: React.FC = () => {
  const sobre = SITE_CONFIG.sobre;
  const whatsappHref = `https://wa.me/${SITE_CONFIG.telefoneRaw}?text=Ol%C3%A1%20Gr%C3%A9gory!%20Li%20a%20sua%20apresenta%C3%A7%C3%A3o%20e%20gostaria%20de%20conversar%20sobre%20a%20estrat%C3%A9gia%20da%20minha%20empresa.`;

  const getIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return <UserCheck className="h-5 w-5 text-blue-400" />;
      case 1:
        return <Camera className="h-5 w-5 text-blue-400" />;
      case 2:
        return <TrendingUp className="h-5 w-5 text-emerald-400" />;
      case 3:
        return <Bot className="h-5 w-5 text-blue-400" />;
      default:
        return <MapPin className="h-5 w-5 text-blue-400" />;
    }
  };

  return (
    <section id="sobre" className="py-20 md:py-28 bg-[#0B0F17] text-slate-100">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs px-3.5 py-1.5 rounded-full font-semibold mb-4">
            <span>Atendimento Direto com o Especialista</span>
          </div>

          <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-white tracking-tight leading-tight">
            {sobre.titulo}
          </h2>

          <p className="mt-4 text-sm sm:text-base text-slate-300 font-sans leading-relaxed">
            {sobre.subtitulo}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Lado Esquerdo: Manifesto Direto e CTA */}
          <div className="lg:col-span-5 rounded-2xl border border-white/[0.08] bg-[#101725] p-7 sm:p-8 flex flex-col justify-between">
            <div>
              <span className="text-xs font-mono font-semibold text-blue-400 uppercase tracking-wider block mb-3">
                Posicionamento Técnico
              </span>
              <p className="font-heading text-lg sm:text-xl font-bold text-white leading-snug">
                "O mesmo especialista que planeja a estratégia comercial é quem aperta os botões e cobra resultados de caixa toda semana."
              </p>
              
              <div className="mt-6 pt-6 border-t border-white/[0.06] space-y-3.5 text-xs sm:text-sm text-slate-300 font-sans leading-relaxed">
                <p>
                  Sem intermediários ou estagiários terceirizados postando frases motivacionais. Aqui o trabalho é técnico, pragmático e construído no campo de batalha.
                </p>
                <p>
                  Criativos autênticos gravados no seu pátio ou balcão, anúncios calibrados por CEP e bots inteligentes com IA que atendem em segundos.
                </p>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/[0.06]">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 hover:bg-blue-500 px-6 py-3.5 text-sm font-semibold text-white transition-all duration-150 hover:scale-[1.01] active:scale-[0.99]"
              >
                <span>Falar com o Grégory</span>
                <ArrowRight className="h-4 w-4 text-blue-200" />
              </a>

              <div className="mt-3 flex items-center justify-center gap-2 text-xs text-slate-400">
                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
                <span>Linha direta e transparente no WhatsApp</span>
              </div>
            </div>
          </div>

          {/* Lado Direito: Os 5 Pilares de Confiança Técnica */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {sobre.diferenciais.map((dif, idx) => (
              <div
                key={idx}
                className={`rounded-2xl border border-white/[0.07] bg-[#101725] p-6 flex flex-col justify-between hover:border-blue-500/30 transition-colors duration-200 ${
                  idx === 4 ? "sm:col-span-2" : ""
                }`}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 border border-blue-500/20">
                    {getIcon(idx)}
                  </div>
                  <h3 className="font-heading font-bold text-sm sm:text-base text-white">
                    {dif.titulo}
                  </h3>
                </div>
                <p className="text-xs text-slate-300 font-sans leading-relaxed">
                  {dif.descricao}
                </p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

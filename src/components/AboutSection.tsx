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
        return <Camera className="h-5 w-5 text-amber-400" />;
      case 2:
        return <TrendingUp className="h-5 w-5 text-emerald-400" />;
      case 3:
        return <Bot className="h-5 w-5 text-indigo-400" />;
      default:
        return <MapPin className="h-5 w-5 text-blue-400" />;
    }
  };

  const getIconBg = (idx: number) => {
    switch (idx) {
      case 0:
        return "bg-blue-950/70 border-blue-800/60";
      case 1:
        return "bg-amber-950/70 border-amber-800/60";
      case 2:
        return "bg-emerald-950/70 border-emerald-800/60";
      case 3:
        return "bg-indigo-950/70 border-indigo-800/60";
      default:
        return "bg-blue-950/70 border-blue-800/60";
    }
  };

  return (
    <section
      id="sobre"
      className="scroll-mt-28 py-20 md:py-28 bg-[#06080F] text-white border-t border-slate-800/90 relative overflow-hidden"
    >
      {/* Glow de Fundo */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 left-1/3 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-3xl -z-10"
      />

      <div className="mx-auto max-w-6xl px-5 sm:px-8 relative z-10">
        {/* Header em Dark Mode */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 border border-blue-500/30 bg-blue-950/60 text-blue-400 text-xs px-3.5 py-1.5 rounded-full font-bold uppercase tracking-wider mb-4">
            <span>Atendimento Direto com o Especialista</span>
          </div>

          <h2 className="font-heading font-extrabold text-2xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight max-w-3xl">
            Quem comanda a sua <span className="text-blue-400">estratégia comercial.</span>
          </h2>

          <p className="mt-4 text-sm sm:text-base text-slate-300 font-sans leading-relaxed">
            {sobre.subtitulo}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Lado Esquerdo: Manifesto Direto em Preto e Gradiente com CTA e Foto Real */}
          <div className="lg:col-span-5 rounded-3xl border border-blue-500/30 bg-gradient-to-br from-[#0B0F1A] via-[#0E1526] to-[#121B32] p-7 sm:p-9 text-white flex flex-col justify-between shadow-2xl">
            <div>
              {/* Foto de Perfil Executiva do Grégory */}
              <div className="flex items-center gap-4 mb-6 pb-6 border-b border-white/[0.1]">
                <img
                  src="/images/gregory-portrait.jpg"
                  alt="Grégory Caruccio"
                  className="h-16 w-16 sm:h-20 sm:w-20 rounded-2xl object-cover object-top border-2 border-blue-500/40 shadow-lg shrink-0"
                />
                <div>
                  <span className="font-heading font-extrabold text-white text-base sm:text-lg block leading-snug">
                    {SITE_CONFIG.nome}
                  </span>
                  <span className="text-xs text-blue-400 font-semibold block mt-0.5">
                    Estrategista de Vendas & Tráfego Pago
                  </span>
                  <span className="text-[11px] text-slate-400 block mt-1">
                    Litoral Norte RS & Atendimento Nacional
                  </span>
                </div>
              </div>

              <span className="text-xs font-mono font-bold text-blue-400 uppercase tracking-wider block mb-3">
                Posicionamento Técnico
              </span>
              <p className="font-heading text-lg sm:text-xl font-bold text-white leading-snug">
                "O mesmo especialista que planeja a estratégia comercial é quem aperta os botões e cobra resultados de caixa toda semana."
              </p>

              <div className="mt-6 pt-6 border-t border-white/[0.08] space-y-3.5 text-xs sm:text-sm text-slate-300 font-sans leading-relaxed">
                <p>
                  Sem intermediários ou estagiários terceirizados postando frases motivacionais. Aqui o trabalho é técnico, pragmático e construído no campo de batalha.
                </p>
                <p>
                  Criativos autênticos gravados no seu pátio ou balcão, anúncios calibrados por CEP e bots inteligentes com IA que atendem em segundos.
                </p>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/[0.08]">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-500 hover:from-blue-500 hover:to-indigo-500 px-6 py-3.5 text-sm font-semibold text-white transition-all duration-150 hover:scale-[1.01] active:scale-[0.99] shadow-lg shadow-blue-600/30"
              >
                <span>Falar com o Grégory</span>
                <ArrowRight className="h-4 w-4 text-blue-200" />
              </a>

              <div className="mt-3.5 flex items-center justify-center gap-2 text-xs text-slate-300">
                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
                <span>Linha direta e transparente no WhatsApp</span>
              </div>
            </div>
          </div>

          {/* Lado Direito: Os 5 Pilares de Confiança Técnica em Cards Escuros */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {sobre.diferenciais.map((dif, idx) => (
              <div
                key={idx}
                className={`rounded-3xl border border-slate-800/80 bg-[#0B0F1A]/85 p-6 flex flex-col justify-between hover:border-blue-500/40 hover:bg-[#0E1424] transition-all duration-200 text-white shadow-sm ${
                  idx === 4 ? "sm:col-span-2" : ""
                }`}
              >
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border ${getIconBg(
                        idx
                      )}`}
                    >
                      {getIcon(idx)}
                    </div>
                    <h3 className="font-heading font-extrabold text-sm sm:text-base text-white">
                      {dif.titulo}
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed">
                    {dif.descricao}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

import React from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { SITE_CONFIG } from "../config/site-config";

export const Hero: React.FC = () => {
  const whatsappHeroHref = `https://wa.me/${SITE_CONFIG.telefoneRaw}?text=Ol%C3%A1%20Gr%C3%A9gory!%20Quero%20entender%20como%20estruturar%20uma%20m%C3%A1quina%20de%20vendas%20no%20WhatsApp%20para%20minha%20empresa.`;

  return (
    <header className="relative pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          {/* H1 Principal: Autoritário, Direto e em 2 Linhas */}
          <h1 className="font-heading font-extrabold text-4xl sm:text-6xl lg:text-7xl text-white tracking-tight max-w-4xl leading-[1.05]">
            Compradores reais <br />
            <span className="text-brand-orange">no seu WhatsApp.</span>
          </h1>

          {/* Subtítulo Orientado a Faturamento Real */}
          <p className="mt-6 max-w-2xl text-base sm:text-lg text-slate-300 font-sans leading-relaxed">
            {SITE_CONFIG.hero.subtitulo}
          </p>

          {/* Ações Primárias */}
          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <a
              href={whatsappHeroHref}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-action w-full sm:w-auto group"
            >
              <span>{SITE_CONFIG.hero.ctaPrincipal}</span>
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
            </a>

            <a
              href="#combo-growth"
              className="btn-secondary w-full sm:w-auto"
            >
              <span>{SITE_CONFIG.hero.ctaSecundario}</span>
            </a>
          </div>

          {/* Provas Imediatas */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-slate-400">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-brand-orange shrink-0" />
              <span>Sem contratos de fidelidade forçada</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-brand-orange shrink-0" />
              <span>Campanhas no ar em até 48 horas</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-brand-orange shrink-0" />
              <span>Relatório semanal de vendas e caixa</span>
            </div>
          </div>

          {/* Exemplo Operacional Real de Lead no WhatsApp */}
          <div data-ui className="mt-14 w-full max-w-3xl rounded-2xl border border-carbon-border bg-carbon-card p-5 sm:p-7 text-left">
            <div className="flex items-center justify-between bg-carbon-elevated/60 px-4 py-3 rounded-xl mb-4">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
                <span className="text-xs font-semibold text-slate-300">Fluxo Comercial Ativo: Anúncio Local para WhatsApp</span>
              </div>
              <span className="text-xs text-slate-400">Horário Nobre</span>
            </div>

            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="rounded-xl bg-[#0A0D14] p-4 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-semibold text-brand-orange">Anúncio no Instagram</span>
                  <p className="mt-2 text-xs text-slate-300 leading-relaxed">
                    Vídeo nativo com áudio ambiente e chamada direta: "Clique para pedir agora pelo WhatsApp oficial".
                  </p>
                </div>
                <div className="mt-4 pt-3 flex justify-between text-xs text-slate-400">
                  <span>142 conversas geradas</span>
                  <span className="text-emerald-400 font-semibold">Custo por lead: R$ 3,40</span>
                </div>
              </div>

              <div className="rounded-xl bg-[#0A0D14] p-4 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
                    <span className="font-semibold text-slate-200">Notificação Comercial</span>
                    <span className="text-slate-400">19:14</span>
                  </div>
                  <div className="rounded-lg bg-[#141C1A] border border-emerald-500/20 p-3 text-xs text-slate-200">
                    <p className="text-emerald-300 font-medium">"Olá! Vi o anúncio de vocês no Instagram. Gostaria de fazer um pedido para entrega hoje no centro?"</p>
                  </div>
                </div>
                <p className="mt-3 text-xs text-slate-400">
                  Lead com alta intenção de compra pronto para o balcão.
                </p>
              </div>
            </div>
          </div>

          {/* Faixa de Métricas */}
          <div className="mt-14 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 w-full">
            {SITE_CONFIG.hero.metricas.map((m, idx) => (
              <div
                key={idx}
                className="card-carbon text-center !p-5 sm:!p-6"
              >
                <p className="font-heading font-extrabold text-2xl sm:text-3xl text-white">
                  {m.valor}
                </p>
                <p className="mt-1 text-xs sm:text-sm text-slate-400">
                  {m.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

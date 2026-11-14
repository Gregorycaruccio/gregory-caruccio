import React from "react";
import { ArrowRight, Target, Globe, Zap, Bot, CheckCircle2 } from "lucide-react";
import { WhatsAppIcon } from "./WhatsAppIcon";
import { SITE_CONFIG } from "../config/site-config";

export const Hero: React.FC = () => {
  const whatsappHeroHref = `https://wa.me/${SITE_CONFIG.telefoneRaw}?text=Ol%C3%A1%20Gr%C3%A9gory!%20Quero%20entender%20como%20estruturar%20uma%20m%C3%A1quina%20de%20vendas%20no%20WhatsApp%20para%20minha%20empresa.`;

  return (
    <header className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-[#FAFBFF] text-slate-900 overflow-hidden">
      {/* Background Gradient Mesh Efeitos Flowora */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[1000px] h-[550px] bg-gradient-to-tr from-blue-400/15 via-indigo-400/20 to-purple-400/10 blur-3xl rounded-full -z-10"
      />

      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="flex flex-col items-center text-center">
          
          {/* Indicador Vivo de Operação Ativa */}
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-200/80 bg-blue-50/90 px-4 py-1.5 text-xs text-blue-700 mb-7 font-semibold">
            <span className="flex h-2 w-2 rounded-full bg-emerald-500" />
            <span className="tracking-tight">
              Campanhas Ativas • Otimização em Tempo Real (RS & Brasil)
            </span>
          </div>

          {/* Headline Monumental Limpa e Direta */}
          <h1 className="font-heading font-extrabold text-[27px] sm:text-5xl lg:text-6xl text-slate-950 tracking-tight max-w-4xl leading-[1.14]">
            Compradores reais no seu WhatsApp, <span className="text-blue-600">todos os dias.</span>
          </h1>

          {/* Subtítulo Analítico e Sem Clichês */}
          <p className="mt-6 max-w-2xl text-base sm:text-lg text-slate-600 font-sans leading-relaxed">
            Gestão profissional de tráfego pago no Meta e Google Ads, autoridade no Instagram, páginas ultra velozes em React e automações com bots e SDRs de Inteligência Artificial. Zero métricas de vaidade.
          </p>

          {/* Grupo de CTAs Primários com Microinteração e Gradiente */}
          <div className="mt-8 flex flex-col sm:flex-row items-center gap-3.5 w-full sm:w-auto">
            <a
              href={whatsappHeroHref}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 px-7 py-3.5 text-sm font-semibold text-white transition-all duration-150 hover:scale-[1.01] active:scale-[0.99]"
            >
              <span>Solicitar Diagnóstico Comercial</span>
              <ArrowRight className="h-4 w-4 text-blue-100" />
            </a>

            <a
              href="#combo-growth"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 px-7 py-3.5 text-sm font-semibold text-slate-800 transition-colors"
            >
              <span>Conhecer o Combo Growth (R$ 1.600)</span>
            </a>
          </div>

          {/* ======================================================== */}
          {/* DASHBOARD MOCKUP EXECUTIVO ESTILO FLOWORA (CARD BRANCO COM GRADIENTES) */}
          {/* ======================================================== */}
          <div data-ui className="mt-14 w-full rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-9 text-left relative">
            
            {/* Efeito Glow Gradiente sob o Dashboard */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -inset-0.5 bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-blue-500/10 rounded-3xl blur-xl -z-10"
            />

            {/* Header do Painel */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-6 border-b border-slate-100">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600 border border-blue-200/60">
                  <Target className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900 tracking-tight">
                    Painel Consolidado de Performance Comercial
                  </h3>
                  <p className="text-xs text-slate-500 font-sans">
                    Operação direta por Grégory Caruccio • Litoral Norte do RS & Atendimento Nacional
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 text-xs">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 border border-emerald-200 px-3 py-1 text-emerald-700 font-semibold text-xs">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" />
                  Dayparting nos Horários de Pico
                </span>
              </div>
            </div>

            {/* Grid de 4 Métricas de Precisão Analítica com Fundo Suave */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 pt-6">
              
              <div className="rounded-2xl border border-slate-100 bg-[#F8FAFC] p-5">
                <span className="text-xs font-semibold text-slate-500 block font-sans">
                  Volume de Vendas Locais
                </span>
                <div className="mt-1.5 flex items-baseline gap-1.5">
                  <code className="font-mono text-slate-950 font-bold tracking-normal text-2xl sm:text-3xl">
                    +R$ 1.6M
                  </code>
                </div>
                <span className="text-xs font-medium text-emerald-600 block mt-1.5">
                  ↑ Gerados diretamente no balcão
                </span>
              </div>

              <div className="rounded-2xl border border-slate-100 bg-[#F8FAFC] p-5">
                <span className="text-xs font-semibold text-slate-500 block font-sans">
                  Custo Médio / Conversa
                </span>
                <div className="mt-1.5 flex items-baseline gap-1.5">
                  <code className="font-mono text-blue-600 font-bold tracking-normal text-2xl sm:text-3xl">
                    R$ 3,40
                  </code>
                </div>
                <span className="text-xs font-medium text-slate-500 block mt-1.5">
                  Leads qualificados no WhatsApp
                </span>
              </div>

              <div className="rounded-2xl border border-slate-100 bg-[#F8FAFC] p-5">
                <span className="text-xs font-semibold text-slate-500 block font-sans">
                  Retorno sobre Investimento
                </span>
                <div className="mt-1.5 flex items-baseline gap-1.5">
                  <code className="font-mono text-slate-900 font-bold tracking-normal text-2xl sm:text-3xl">
                    4.8x
                  </code>
                </div>
                <span className="text-xs font-medium text-slate-500 block mt-1.5">
                  Média consolidada dos clientes
                </span>
              </div>

              <div className="rounded-2xl border border-slate-100 bg-[#F8FAFC] p-5">
                <span className="text-xs font-semibold text-slate-500 block font-sans">
                  Taxa de Retenção
                </span>
                <div className="mt-1.5 flex items-baseline gap-1.5">
                  <code className="font-mono text-emerald-600 font-bold tracking-normal text-2xl sm:text-3xl">
                    98%
                  </code>
                </div>
                <span className="text-xs font-medium text-slate-500 block mt-1.5">
                  Contratos renovados mensalmente
                </span>
              </div>

            </div>

            {/* Plataformas e Ferramentas Oficiais com Chips Clean */}
            <div className="mt-6 rounded-2xl bg-slate-50 border border-slate-100 p-4 flex flex-wrap items-center justify-between gap-3 text-xs sm:text-sm text-slate-600">
              <span className="font-bold text-slate-800">
                Tecnologias e canais em operação ativa:
              </span>
              <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-slate-700 font-semibold">
                <span className="flex items-center gap-1.5">
                  <Target className="h-3.5 w-3.5 text-blue-600" /> Meta Ads (v21.0)
                </span>
                <span className="flex items-center gap-1.5">
                  <Globe className="h-3.5 w-3.5 text-blue-600" /> Google Ads
                </span>
                <span className="flex items-center gap-1.5">
                  <WhatsAppIcon className="h-3.5 w-3.5 text-emerald-600" /> WhatsApp Cloud API
                </span>
                <span className="flex items-center gap-1.5">
                  <Bot className="h-3.5 w-3.5 text-indigo-600" /> Bots & SDRs com IA
                </span>
                <span className="flex items-center gap-1.5">
                  <Zap className="h-3.5 w-3.5 text-amber-500" /> Automações n8n
                </span>
              </div>
            </div>

          </div>

          {/* Logo Strip de Confiança estilo Flowora ("Loved by innovative teams") */}
          <div className="mt-14 pt-8 border-t border-slate-200/80 w-full flex flex-col items-center">
            <p className="text-sm font-semibold text-slate-600 mb-5">
              Marcas e empresas locais com estratégias validadas em campo:
            </p>
            <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-10 text-xs sm:text-sm font-bold text-slate-700">
              <span className="hover:text-blue-600 transition-colors">Fleck Pastel</span>
              <span className="text-slate-300">•</span>
              <span className="hover:text-blue-600 transition-colors">Quezia Auler Imóveis</span>
              <span className="text-slate-300">•</span>
              <span className="hover:text-blue-600 transition-colors">Agro Salinas</span>
              <span className="text-slate-300">•</span>
              <span className="hover:text-blue-600 transition-colors">Dra. Sandra Renova Face</span>
              <span className="text-slate-300">•</span>
              <span className="hover:text-blue-600 transition-colors">Alex Contini Multimarcas</span>
              <span className="text-slate-300">•</span>
              <span className="hover:text-blue-600 transition-colors">Win Comunicação</span>
            </div>
          </div>

        </div>
      </div>
    </header>
  );
};

import React from "react";
import { ArrowRight, Target, Globe, Zap, Bot, CheckCircle2 } from "lucide-react";
import { WhatsAppIcon } from "./WhatsAppIcon";
import { SITE_CONFIG } from "../config/site-config";

export const Hero: React.FC = () => {
  const whatsappHeroHref = `https://wa.me/${SITE_CONFIG.telefoneRaw}?text=Ol%C3%A1%20Gr%C3%A9gory!%20Quero%20entender%20como%20estruturar%20uma%20m%C3%A1quina%20de%20vendas%20no%20WhatsApp%20para%20minha%20empresa.`;

  return (
    <header className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-[#0B0F17] text-slate-100">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="flex flex-col items-center text-center">
          
          {/* Indicador Vivo de Status de Operação */}
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3.5 py-1 text-xs text-emerald-400 mb-6">
            <span className="flex h-2 w-2 rounded-full bg-emerald-400" />
            <span className="font-medium tracking-tight">
              Campanhas Ativas • Otimização em Tempo Real (Litoral Norte RS)
            </span>
          </div>

          {/* Headline Monumental e Sóbria */}
          <h1 className="font-heading font-extrabold text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight max-w-3xl leading-[1.12]">
            Compradores reais no seu WhatsApp <br />
            <span className="text-blue-400">
              todos os dias.
            </span>
          </h1>

          {/* Subtítulo Analítico e Sem Clichês */}
          <p className="mt-5 max-w-2xl text-sm sm:text-base text-slate-300 font-sans leading-relaxed">
            Gestão profissional de tráfego pago no Meta Ads e Google Ads, autoridade visual no Instagram e páginas rápidas em React. Filtramos curiosos e colocamos pessoas prontas para comprar no balcão da sua empresa.
          </p>

          {/* Grupo de CTAs Primários com Microinteração */}
          <div className="mt-8 flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
            <a
              href={whatsappHeroHref}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 hover:bg-blue-700 px-6 py-3.5 text-sm font-semibold text-white transition-transform duration-150 hover:scale-[1.01] active:scale-[0.99]"
            >
              <span>Solicitar Diagnóstico Comercial</span>
              <ArrowRight className="h-4 w-4 text-blue-200" />
            </a>

            <a
              href="#combo-growth"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl border border-white/[0.1] bg-white/[0.03] hover:bg-white/[0.07] px-6 py-3.5 text-sm font-medium text-slate-200 hover:text-white transition-colors"
            >
              <span>Ver Combo Growth (R$ 1.600)</span>
            </a>
          </div>

          {/* ======================================================== */}
          {/* PAINEL DE STATUS DE OPERAÇÃO & DASHBOARD ANCORADO */}
          {/* ======================================================== */}
          <div data-ui className="mt-14 w-full rounded-2xl border border-white/[0.07] bg-[#101725] p-5 sm:p-7 text-left">
            
            {/* Header do Painel */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5">
              <div className="flex items-center gap-2.5">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-500/10 text-blue-400 border border-blue-500/20">
                  <Target className="h-4 w-4" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white tracking-tight">
                    Painel Consolidado de Performance de Tráfego
                  </h3>
                  <p className="text-[11px] text-slate-400 font-sans">
                    Operação direta por Grégory Caruccio • Litoral Norte & Atendimento Nacional
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 text-xs text-slate-400">
                <span className="inline-flex items-center gap-1.5 rounded-md bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 text-emerald-400 font-medium">
                  <CheckCircle2 className="h-3.5 w-3.5" />
                  Dayparting nos Horários de Pico
                </span>
              </div>
            </div>

            {/* Grid de Métricas de Precisão Analítica */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              
              <div className="rounded-xl border border-white/[0.05] bg-[#0B0F17]/80 p-4">
                <span className="text-xs text-slate-400 block font-sans">
                  Volume de Vendas Locais
                </span>
                <div className="mt-1 flex items-baseline gap-1.5">
                  <code className="font-mono text-emerald-400 font-semibold tracking-normal text-xl sm:text-2xl">
                    +R$ 1.6M
                  </code>
                </div>
                <span className="text-[11px] text-slate-400 block mt-1">
                  Gerados diretamente no balcão
                </span>
              </div>

              <div className="rounded-xl border border-white/[0.05] bg-[#0B0F17]/80 p-4">
                <span className="text-xs text-slate-400 block font-sans">
                  Custo Médio / Conversa
                </span>
                <div className="mt-1 flex items-baseline gap-1.5">
                  <code className="font-mono text-emerald-400 font-semibold tracking-normal text-xl sm:text-2xl">
                    R$ 3,40
                  </code>
                </div>
                <span className="text-[11px] text-slate-400 block mt-1">
                  Leads qualificados no WhatsApp
                </span>
              </div>

              <div className="rounded-xl border border-white/[0.05] bg-[#0B0F17]/80 p-4">
                <span className="text-xs text-slate-400 block font-sans">
                  Retorno sobre Investimento
                </span>
                <div className="mt-1 flex items-baseline gap-1.5">
                  <code className="font-mono text-emerald-400 font-semibold tracking-normal text-xl sm:text-2xl">
                    4.8x
                  </code>
                </div>
                <span className="text-[11px] text-slate-400 block mt-1">
                  Média consolidada dos clientes
                </span>
              </div>

              <div className="rounded-xl border border-white/[0.05] bg-[#0B0F17]/80 p-4">
                <span className="text-xs text-slate-400 block font-sans">
                  Taxa de Retenção
                </span>
                <div className="mt-1 flex items-baseline gap-1.5">
                  <code className="font-mono text-emerald-400 font-semibold tracking-normal text-xl sm:text-2xl">
                    98%
                  </code>
                </div>
                <span className="text-[11px] text-slate-400 block mt-1">
                  Contratos renovados mensalmente
                </span>
              </div>

            </div>

            {/* Plataformas e Ferramentas Oficiais */}
            <div className="mt-5 rounded-xl bg-[#0B0F17]/50 p-3.5 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-400">
              <span className="font-medium text-slate-300">
                Canais integrados na operação:
              </span>
              <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-slate-300 font-medium">
                <span className="flex items-center gap-1.5">
                  <Target className="h-3.5 w-3.5 text-blue-400" /> Meta Ads (v21.0)
                </span>
                <span className="flex items-center gap-1.5">
                  <Globe className="h-3.5 w-3.5 text-blue-400" /> Google Ads
                </span>
                <span className="flex items-center gap-1.5">
                  <WhatsAppIcon className="h-3.5 w-3.5 text-emerald-400" /> WhatsApp Cloud API
                </span>
                <span className="flex items-center gap-1.5">
                  <Bot className="h-3.5 w-3.5 text-blue-400" /> Bots & SDRs com IA
                </span>
                <span className="flex items-center gap-1.5">
                  <Zap className="h-3.5 w-3.5 text-amber-400" /> Automações n8n
                </span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </header>
  );
};

import React from "react";
import {
  ArrowRight,
  TrendingUp,
  ShieldCheck,
  Utensils,
  Home,
  Car,
  Dog,
  Sparkles,
  Building2,
} from "lucide-react";
import { SITE_CONFIG } from "../config/site-config";

export const Hero: React.FC = () => {
  const whatsappHeroHref = `https://wa.me/${SITE_CONFIG.telefoneRaw}?text=Ol%C3%A1%20Gr%C3%A9gory!%20Quero%20entender%20como%20estruturar%20uma%20m%C3%A1quina%20de%20vendas%20no%20WhatsApp%20para%20minha%20empresa.`;

  return (
    <div>
      {/* ======================================================== */}
      {/* BANNER HERO DE PONTA A PONTA COM FOTO DE FUNDO E GRADIENTE */}
      {/* ======================================================== */}
      <header className="relative w-full min-h-[92vh] lg:min-h-screen flex items-center bg-[#05070E] text-white overflow-hidden pt-28 pb-16 lg:pt-36 lg:pb-24">
        
        {/* Layer de Fundo com Foto e Gradientes de Fusão */}
        <div className="absolute inset-0 z-0">
          {/* Foto Real do Grégory no Escritório */}
          <img
            src="/images/gregory-hero.jpg"
            alt="Grégory Caruccio trabalhando no planejamento e otimização de campanhas"
            className="w-full h-full object-cover object-[72%_center] md:object-[80%_center] lg:object-[83%_center]"
          />

          {/* Gradiente Horizontal: Escuro profundo na esquerda (onde fica o texto) até suave na direita */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#05070E] via-[#05070E]/95 via-50% md:via-46% lg:via-42% to-[#05070E]/30" />

          {/* Gradiente Vertical: Suaviza o topo para a navbar e a base para a próxima seção */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#05070E] via-transparent to-[#05070E]/80" />

          {/* Glow de Atmosfera Azul */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-600/15 rounded-full blur-3xl"
          />
        </div>

        {/* Conteúdo em Frente (Texto, Headline e CTAs) */}
        <div className="relative z-10 mx-auto max-w-6xl px-5 sm:px-8 w-full">
          <div className="max-w-2xl text-left">
            
            {/* Badge de Operação Ativa */}
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-950/70 backdrop-blur-md px-3.5 py-1.5 text-xs text-blue-300 font-semibold mb-6 shadow-xs">
              <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="tracking-tight">
                Operação Ativa • Otimização Diária de Campanhas
              </span>
            </div>

            {/* Headline Monumental com Destaque em Azul */}
            <h1 className="font-heading font-extrabold text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.12]">
              Compradores reais no seu WhatsApp, <span className="text-blue-400">todos os dias.</span>
            </h1>

            {/* Subtítulo Analítico e Direto */}
            <p className="mt-6 text-base sm:text-lg text-slate-300 font-sans leading-relaxed max-w-xl">
              Gestão profissional de tráfego pago no Meta e Google Ads, autoridade no Instagram, páginas ultra velozes em React e automações com bots e SDRs de Inteligência Artificial. Zero intermediários.
            </p>

            {/* Botões de Ação */}
            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href={whatsappHeroHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-500 hover:from-blue-500 hover:to-indigo-500 px-7 py-4 text-xs sm:text-sm font-bold text-white transition-all duration-150 hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-blue-600/30"
              >
                <span>Solicitar Diagnóstico Comercial</span>
                <ArrowRight className="h-4 w-4 text-blue-200" />
              </a>

              <a
                href="#combo-growth"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-700/80 bg-slate-900/80 backdrop-blur-md hover:bg-slate-800 text-slate-200 px-6 py-4 text-xs sm:text-sm font-semibold transition-colors"
              >
                <span>Conhecer o Combo Growth</span>
              </a>
            </div>

            {/* Micro Prova Social */}
            <div className="mt-10 pt-6 border-t border-white/[0.1] flex items-center gap-3.5 text-xs text-slate-300">
              <div className="flex -space-x-2">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-blue-600 text-white font-bold text-[10px] ring-2 ring-[#05070E]">
                  FP
                </span>
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-indigo-600 text-white font-bold text-[10px] ring-2 ring-[#05070E]">
                  QA
                </span>
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-600 text-white font-bold text-[10px] ring-2 ring-[#05070E]">
                  AS
                </span>
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-slate-800 text-blue-300 font-bold text-[10px] ring-2 ring-[#05070E]">
                  +15
                </span>
              </div>
              <div className="flex flex-col">
                <span className="font-semibold text-white">
                  +R$ 1.6 milhão gerados em vendas reais
                </span>
                <span className="text-[11px] text-slate-400">
                  Fleck Pastel, Quezia Imóveis, Agro Salinas e parceiros locais
                </span>
              </div>
            </div>

          </div>

          {/* Badges Flutuantes em Vidro Fosco sobre a Foto */}
          <div className="hidden lg:block">
            <div className="absolute right-8 bottom-16 rounded-2xl border border-white/10 bg-slate-950/80 backdrop-blur-md px-4 py-3 text-xs font-semibold text-white shadow-2xl flex items-center gap-2.5">
              <ShieldCheck className="h-4 w-4 text-blue-400 shrink-0" />
              <span>Atendimento 100% Direto com o Grégory</span>
            </div>

            <div className="hidden xl:flex items-center gap-2.5 rounded-2xl border border-white/10 bg-slate-950/80 backdrop-blur-md px-4 py-3 text-xs font-semibold text-white shadow-2xl absolute right-12 top-40">
              <TrendingUp className="h-4 w-4 text-emerald-400 shrink-0" />
              <span>+25 pedidos/noite • Delivery</span>
            </div>
          </div>

        </div>
      </header>

      {/* ======================================================== */}
      {/* SEÇÃO SEGUINTE: TICKER DE NICHOS & MÉTRICAS AUDITADAS */}
      {/* ======================================================== */}
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">
        
        {/* Barra de Nichos Atendidos Flutuante */}
        <div className="px-5 py-4 rounded-2xl border border-slate-800/80 bg-[#090D18]/90 backdrop-blur-md flex flex-wrap items-center justify-between gap-4 text-xs font-semibold text-slate-300 shadow-xl">
          <span className="text-slate-400 uppercase tracking-wider text-[11px] font-bold">
            Especialidades Validadas em Campo:
          </span>

          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <span className="inline-flex items-center gap-1.5 hover:text-blue-400 transition-colors">
              <Utensils className="h-3.5 w-3.5 text-blue-400" /> Gastronomia & Delivery
            </span>
            <span className="inline-flex items-center gap-1.5 hover:text-blue-400 transition-colors">
              <Home className="h-3.5 w-3.5 text-blue-400" /> Mercado Imobiliário
            </span>
            <span className="inline-flex items-center gap-1.5 hover:text-blue-400 transition-colors">
              <Car className="h-3.5 w-3.5 text-blue-400" /> Revenda de Seminovos
            </span>
            <span className="inline-flex items-center gap-1.5 hover:text-blue-400 transition-colors">
              <Dog className="h-3.5 w-3.5 text-blue-400" /> Agropecuária & Pet Shop
            </span>
            <span className="inline-flex items-center gap-1.5 hover:text-blue-400 transition-colors">
              <Sparkles className="h-3.5 w-3.5 text-blue-400" /> Saúde & Estética Facial
            </span>
            <span className="inline-flex items-center gap-1.5 hover:text-blue-400 transition-colors">
              <Building2 className="h-3.5 w-3.5 text-blue-400" /> Comunicação Visual B2B
            </span>
          </div>
        </div>

        {/* Ilha de Métricas Auditadas (Estilo Saasify Stats) */}
        <div className="mt-8 mb-12 sm:mb-16 rounded-[2.5rem] border border-slate-200/90 bg-white/95 backdrop-blur-md p-8 sm:p-12 shadow-sm relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Lado Esquerdo */}
            <div className="lg:col-span-5">
              <div className="inline-flex items-center gap-2 border border-blue-200 bg-blue-50 text-blue-700 text-xs px-3.5 py-1.5 rounded-full font-bold uppercase tracking-wider mb-4">
                <span>Resultados Auditados em Caixa</span>
              </div>

              <h2 className="font-heading font-extrabold text-2xl sm:text-4xl text-slate-950 tracking-tight leading-tight">
                Resultados comprovados no caixa <span className="text-blue-600">de empresas reais.</span>
              </h2>

              <p className="mt-4 text-sm sm:text-base text-slate-600 font-sans leading-relaxed">
                Zero relatórios de vaidade com curtidas vazias. Conhecemos a rotina da loja física, a sazonalidade do litoral, o estoque de seminovos e o fechamento direto no WhatsApp.
              </p>

              <div className="mt-6">
                <a
                  href="#nichos"
                  className="inline-flex items-center gap-2 rounded-xl bg-slate-950 hover:bg-slate-900 text-white px-6 py-3 text-xs sm:text-sm font-bold transition-all duration-150 hover:scale-[1.01] active:scale-[0.99] shadow-sm"
                >
                  <span>Ver Cases Práticos Detalhados</span>
                  <ArrowRight className="h-4 w-4 text-slate-300" />
                </a>
              </div>
            </div>

            {/* Lado Direito: Grid Bento 2x2 com Métricas Auditadas */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              <div className="rounded-2xl border border-slate-200/80 bg-slate-50/80 p-5 sm:p-6 hover:bg-white hover:border-blue-300 hover:shadow-xs transition-all duration-200">
                <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block">
                  Volume de Vendas Locais
                </span>
                <div className="mt-2 flex items-baseline gap-2">
                  <code className="font-mono text-slate-950 font-black text-3xl sm:text-4xl tracking-tight">
                    +R$ 1.6M
                  </code>
                </div>
                <p className="mt-2 text-xs text-slate-600 font-sans leading-relaxed">
                  Gerados diretamente no balcão e no WhatsApp para nossos clientes parceiros.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200/80 bg-slate-50/80 p-5 sm:p-6 hover:bg-white hover:border-blue-300 hover:shadow-xs transition-all duration-200">
                <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block">
                  Custo por Lead Qualificado
                </span>
                <div className="mt-2 flex items-baseline gap-2">
                  <code className="font-mono text-blue-700 font-black text-3xl sm:text-4xl tracking-tight">
                    R$ 3,40
                  </code>
                </div>
                <p className="mt-2 text-xs text-slate-600 font-sans leading-relaxed">
                  Custo médio por conversa de comprador pronto para fechar negócio.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200/80 bg-slate-50/80 p-5 sm:p-6 hover:bg-white hover:border-blue-300 hover:shadow-xs transition-all duration-200">
                <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block">
                  Taxa de Retenção
                </span>
                <div className="mt-2 flex items-baseline gap-2">
                  <code className="font-mono text-emerald-600 font-black text-3xl sm:text-4xl tracking-tight">
                    98%
                  </code>
                </div>
                <p className="mt-2 text-xs text-slate-600 font-sans leading-relaxed">
                  Contratos renovados mês a mês pelo retorno comprovado, sem fidelidade forçada.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200/80 bg-slate-50/80 p-5 sm:p-6 hover:bg-white hover:border-blue-300 hover:shadow-xs transition-all duration-200">
                <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block">
                  Conversão Clique → WhatsApp
                </span>
                <div className="mt-2 flex items-baseline gap-2">
                  <code className="font-mono text-slate-950 font-black text-3xl sm:text-4xl tracking-tight">
                    85,7%
                  </code>
                </div>
                <p className="mt-2 text-xs text-slate-600 font-sans leading-relaxed">
                  Média de visitantes de anúncios que efetivamente abrem a conversa de compra.
                </p>
              </div>

            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

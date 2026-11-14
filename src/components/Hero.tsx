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
  CheckCircle2,
} from "lucide-react";
import { SITE_CONFIG } from "../config/site-config";

export const Hero: React.FC = () => {
  const whatsappHeroHref = `https://wa.me/${SITE_CONFIG.telefoneRaw}?text=Ol%C3%A1%20Gr%C3%A9gory!%20Quero%20entender%20como%20estruturar%20uma%20m%C3%A1quina%20de%20vendas%20no%20WhatsApp%20para%20minha%20empresa.`;

  return (
    <header className="relative pt-24 sm:pt-28 pb-10 sm:pb-16 bg-transparent text-slate-900 overflow-hidden">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        
        {/* ======================================================== */}
        {/* ILHA FLUTUANTE 1: HERO MONUMENTAL ESCURO (ESTILO SAASIFY/LINEAR) */}
        {/* ======================================================== */}
        <div className="rounded-[2.5rem] bg-[#070A14] border border-slate-800/90 text-white p-6 sm:p-10 lg:p-12 relative overflow-hidden shadow-2xl shadow-blue-950/40">
          
          {/* Efeitos de Glow Ambiente Interno */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-40 -right-40 w-[600px] h-[600px] bg-gradient-to-br from-blue-600/25 via-indigo-600/15 to-transparent rounded-full blur-3xl"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-indigo-600/15 rounded-full blur-3xl"
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center relative z-10">
            
            {/* Coluna Esquerda: Proposta de Valor e Ações */}
            <div className="lg:col-span-7 flex flex-col items-start text-left">
              {/* Badge de Operação Viva */}
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-950/70 px-3.5 py-1.5 text-xs text-blue-300 font-semibold mb-6 shadow-xs">
                <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="tracking-tight">
                  Operação Ativa • Otimização Diária de Campanhas
                </span>
              </div>

              {/* Headline Monumental em Branco e Azul */}
              <h1 className="font-heading font-extrabold text-3xl sm:text-5xl lg:text-[54px] text-white tracking-tight leading-[1.12] max-w-xl">
                Compradores reais no seu WhatsApp, <span className="text-blue-400">todos os dias.</span>
              </h1>

              {/* Subtítulo Analítico e Sem Clichês */}
              <p className="mt-5 text-sm sm:text-base text-slate-300 font-sans leading-relaxed max-w-lg">
                Gestão profissional de tráfego pago no Meta e Google Ads, autoridade no Instagram, páginas ultra rápidas em React e automações com bots e SDRs de Inteligência Artificial. Zero intermediários.
              </p>

              {/* Botões de Ação */}
              <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto">
                <a
                  href={whatsappHeroHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-500 hover:from-blue-500 hover:to-indigo-500 px-7 py-3.5 text-xs sm:text-sm font-bold text-white transition-all duration-150 hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-blue-600/30"
                >
                  <span>Solicitar Diagnóstico Comercial</span>
                  <ArrowRight className="h-4 w-4 text-blue-200" />
                </a>

                <a
                  href="#combo-growth"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-700/80 bg-slate-900/90 hover:bg-slate-800 text-slate-200 px-5 py-3.5 text-xs sm:text-sm font-semibold transition-colors"
                >
                  <span>Conhecer o Combo Growth</span>
                </a>
              </div>

              {/* Micro Prova Social com Avatares Estilo Saasify */}
              <div className="mt-8 pt-6 border-t border-white/[0.08] flex items-center gap-3.5 text-xs text-slate-300">
                <div className="flex -space-x-2">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-blue-600 text-white font-bold text-[10px] ring-2 ring-[#070A14]">
                    FP
                  </span>
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-indigo-600 text-white font-bold text-[10px] ring-2 ring-[#070A14]">
                    QA
                  </span>
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-600 text-white font-bold text-[10px] ring-2 ring-[#070A14]">
                    AS
                  </span>
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-slate-800 text-blue-300 font-bold text-[10px] ring-2 ring-[#070A14]">
                    +15
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="font-semibold text-white">
                    +R$ 1.6 milhão gerados em vendas reais
                  </span>
                  <span className="text-[11px] text-slate-400">
                    Fleck Pastel, Quezia Imóveis, Agro Salinas e parceiros
                  </span>
                </div>
              </div>
            </div>

            {/* Coluna Direita: Foto Executiva do Grégory com Badges Flutuantes */}
            <div className="lg:col-span-5 relative flex justify-center lg:justify-end mt-4 lg:mt-0">
              <div className="relative w-full max-w-[420px] rounded-3xl overflow-hidden border border-blue-500/30 shadow-2xl bg-[#0B0F1D] group">
                {/* Imagem Real do Grégory no Escritório com MacBook */}
                <img
                  src="/images/gregory-hero.jpg"
                  alt="Grégory Caruccio trabalhando no planejamento e otimização de campanhas"
                  className="w-full h-auto object-cover aspect-[4/5] object-center group-hover:scale-[1.02] transition-transform duration-500"
                />

                {/* Gradiente Suave de Integração no Rodapé da Foto */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#070A14] via-transparent to-transparent opacity-60 pointer-events-none" />

                {/* Badge Flutuante 1 (Topo Esquerdo): Case Delivery */}
                <div className="absolute top-4 left-4 rounded-xl border border-white/10 bg-slate-950/85 backdrop-blur-md px-3.5 py-2 text-xs font-semibold text-white shadow-xl flex items-center gap-2">
                  <TrendingUp className="h-4 w-4 text-emerald-400 shrink-0" />
                  <span>+25 pedidos/noite • Delivery</span>
                </div>

                {/* Badge Flutuante 2 (Base Direita): Atendimento 100% Direto */}
                <div className="absolute bottom-4 right-4 rounded-xl border border-white/10 bg-slate-950/85 backdrop-blur-md px-3.5 py-2 text-xs font-semibold text-white shadow-xl flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4 text-blue-400 shrink-0" />
                  <span>Atendimento 100% Direto</span>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* ======================================================== */}
        {/* BARRA DE NICHOS ATENDIDOS (TICKER ESTILO SAASIFY PARTNERS) */}
        {/* ======================================================== */}
        <div className="mt-6 px-5 py-4 rounded-2xl border border-slate-200/80 bg-white/75 backdrop-blur-md flex flex-wrap items-center justify-between gap-4 text-xs font-semibold text-slate-600 shadow-xs">
          <span className="text-slate-400 uppercase tracking-wider text-[11px] font-bold">
            Especialidades Validadas em Campo:
          </span>

          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <span className="inline-flex items-center gap-1.5 hover:text-blue-600 transition-colors">
              <Utensils className="h-3.5 w-3.5 text-blue-600" /> Gastronomia & Delivery
            </span>
            <span className="inline-flex items-center gap-1.5 hover:text-blue-600 transition-colors">
              <Home className="h-3.5 w-3.5 text-blue-600" /> Mercado Imobiliário
            </span>
            <span className="inline-flex items-center gap-1.5 hover:text-blue-600 transition-colors">
              <Car className="h-3.5 w-3.5 text-blue-600" /> Revenda de Seminovos
            </span>
            <span className="inline-flex items-center gap-1.5 hover:text-blue-600 transition-colors">
              <Dog className="h-3.5 w-3.5 text-blue-600" /> Agropecuária & Pet Shop
            </span>
            <span className="inline-flex items-center gap-1.5 hover:text-blue-600 transition-colors">
              <Sparkles className="h-3.5 w-3.5 text-blue-600" /> Saúde & Estética Facial
            </span>
            <span className="inline-flex items-center gap-1.5 hover:text-blue-600 transition-colors">
              <Building2 className="h-3.5 w-3.5 text-blue-600" /> Comunicação Visual B2B
            </span>
          </div>
        </div>

        {/* ======================================================== */}
        {/* ILHA FLUTUANTE 2: MÉTRICAS AUDITADAS (ESTILO SAASIFY STATS) */}
        {/* ======================================================== */}
        <div className="mt-8 rounded-[2.5rem] border border-slate-200/90 bg-white/90 backdrop-blur-md p-8 sm:p-12 shadow-sm relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Lado Esquerdo: Chamada com Prova Real */}
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
    </header>
  );
};

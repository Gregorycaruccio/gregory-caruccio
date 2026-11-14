import React, { useState } from "react";
import {
  TrendingUp,
  Target,
  Share2,
  Globe,
  Utensils,
  Home,
  Dog,
  Sparkles,
  Car,
  Layers,
  CheckCircle2,
  ArrowRight,
  MessageCircle,
} from "lucide-react";
import { SITE_CONFIG } from "../config/site-config";

export const PortfolioSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("todos");

  // Helper de ícone por cliente/caso
  const getCaseIcon = (caseId: string) => {
    switch (caseId) {
      case "fleck-pastel":
        return <Utensils className="h-4 w-4 text-blue-600" />;
      case "quezia-imoveis":
        return <Home className="h-4 w-4 text-blue-600" />;
      case "alex-contini":
        return <Car className="h-4 w-4 text-blue-600" />;
      case "agro-salinas":
        return <Dog className="h-4 w-4 text-indigo-600" />;
      case "helfy-io":
        return <Sparkles className="h-4 w-4 text-indigo-600" />;
      case "pro-corpo":
        return <Share2 className="h-4 w-4 text-indigo-600" />;
      case "renova-face":
        return <Sparkles className="h-4 w-4 text-emerald-600" />;
      case "espaco-salutar":
        return <Globe className="h-4 w-4 text-emerald-600" />;
      case "win-comunicacao":
        return <Target className="h-4 w-4 text-emerald-600" />;
      default:
        return <CheckCircle2 className="h-4 w-4 text-blue-600" />;
    }
  };

  // Helper de ícone mestre por serviço
  const getServiceIcon = (serviceId: string) => {
    switch (serviceId) {
      case "trafego-pago":
        return <Target className="h-5 w-5 text-blue-600" />;
      case "social-media":
        return <Share2 className="h-5 w-5 text-indigo-600" />;
      case "sites":
        return <Globe className="h-5 w-5 text-emerald-600" />;
      default:
        return <Layers className="h-5 w-5 text-blue-600" />;
    }
  };

  // Helper de estilo de badge do serviço
  const getServiceBadgeStyle = (cor: string) => {
    switch (cor) {
      case "indigo":
        return "bg-indigo-50 border-indigo-200 text-indigo-700";
      case "emerald":
        return "bg-emerald-50 border-emerald-200 text-emerald-700";
      default:
        return "bg-blue-50 border-blue-200 text-blue-700";
    }
  };

  // WhatsApp link contextual para cada cliente
  const getWhatsAppHref = (cliente: string) => {
    const msg = `Olá Grégory! Vi o case do ${cliente} no seu portfólio e gostaria de entender como aplicar uma estratégia parecida no meu negócio.`;
    return `https://wa.me/${SITE_CONFIG.telefoneRaw}?text=${encodeURIComponent(msg)}`;
  };

  // Filtragem dos serviços exibidos
  const servicosExibidos =
    activeTab === "todos"
      ? SITE_CONFIG.portfolioServicos
      : SITE_CONFIG.portfolioServicos.filter((s) => s.id === activeTab);

  return (
    <section
      id="nichos"
      className="scroll-mt-28 py-20 md:py-28 bg-[#FAFBFF]/80 backdrop-blur-[2px] text-slate-900 border-t border-slate-200/80 overflow-x-clip"
    >
      {/* Anchor alias para #portfolio */}
      <div id="portfolio" className="scroll-mt-28" />

      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        {/* Header Editorial Flowora */}
        <div className="max-w-3xl mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 border border-blue-200 bg-blue-50 text-blue-700 text-xs px-3.5 py-1.5 rounded-full font-bold uppercase tracking-wider mb-4">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />
            <span>Portfólio & Casos Reais Auditados</span>
          </div>

          <h2 className="font-heading font-extrabold text-2xl sm:text-4xl lg:text-5xl text-slate-950 tracking-tight leading-tight max-w-3xl">
            Casos de sucesso divididos <span className="text-blue-600">por serviço e resultado.</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-600 font-sans leading-relaxed">
            Nada de teorias vazias ou prints maquiados. Conheça o que foi feito na prática em cada frente de atuação — tráfego pago com retorno em caixa, social media com método de autoridade e sites de alta conversão.
          </p>
        </div>

        {/* Barra de Filtros / Seletor de Serviço (Transitions/Reactbits Style) */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-10 sm:mb-12">
          <button
            onClick={() => setActiveTab("todos")}
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-150 ${
              activeTab === "todos"
                ? "bg-slate-950 text-white shadow-sm"
                : "bg-white border border-slate-200 text-slate-600 hover:bg-slate-50 hover:text-slate-950"
            }`}
          >
            <Layers className="h-3.5 w-3.5" />
            <span>Todos os Serviços ({SITE_CONFIG.portfolioServicos.length})</span>
          </button>

          {SITE_CONFIG.portfolioServicos.map((servico) => {
            const isActive = activeTab === servico.id;
            return (
              <button
                key={servico.id}
                onClick={() => setActiveTab(servico.id)}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-150 ${
                  isActive
                    ? "bg-blue-600 text-white shadow-sm"
                    : "bg-white border border-slate-200 text-slate-600 hover:bg-slate-50 hover:text-slate-950"
                }`}
              >
                {getServiceIcon(servico.id)}
                <span>
                  {servico.categoria} ({servico.cases.length} cases)
                </span>
              </button>
            );
          })}
        </div>

        {/* Lista dos 3 Cards Mestres de Serviço */}
        <div className="space-y-12 sm:space-y-16">
          {servicosExibidos.map((servico) => (
            <div
              key={servico.id}
              className="rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-8 lg:p-10 shadow-sm transition-all duration-200 hover:border-blue-300"
            >
              {/* Header do Card Mestre de Serviço */}
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 pb-6 sm:pb-8 border-b border-slate-100">
                <div className="flex items-start gap-3.5">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-50 border border-slate-200/80 shrink-0">
                    {getServiceIcon(servico.id)}
                  </div>
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-1.5">
                      <span
                        className={`text-xs font-bold border px-3 py-0.5 rounded-full ${getServiceBadgeStyle(
                          servico.cor
                        )}`}
                      >
                        {servico.badge}
                      </span>
                      <span className="text-xs font-mono font-semibold text-emerald-600 bg-emerald-50 border border-emerald-200/70 px-2.5 py-0.5 rounded-full">
                        {servico.destaque}
                      </span>
                    </div>
                    <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-slate-950 tracking-tight">
                      {servico.titulo}
                    </h3>
                    <p className="text-xs sm:text-sm font-medium text-slate-500 mt-0.5">
                      {servico.subtitulo}
                    </p>
                  </div>
                </div>

                <div className="lg:max-w-md">
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
                    {servico.descricao}
                  </p>
                </div>
              </div>

              {/* Grid dos Cases Dentro do Card de Serviço */}
              <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
                {servico.cases.map((caso, cIdx) => (
                  <div
                    key={caso.id}
                    className="rounded-2xl border border-slate-200/80 bg-slate-50/60 p-5 sm:p-6 flex flex-col justify-between hover:bg-white hover:border-slate-300 hover:shadow-sm transition-all duration-200"
                  >
                    <div>
                      {/* Top Bar do Case */}
                      <div className="flex items-center justify-between mb-3.5">
                        <span className="text-xs font-bold text-slate-700 bg-white border border-slate-200 px-2.5 py-1 rounded-full">
                          {caso.nicho}
                        </span>
                        <span className="text-xs font-mono font-semibold text-slate-400">
                          Case 0{cIdx + 1}
                        </span>
                      </div>

                      {/* Nome do Cliente com Ícone */}
                      <div className="flex items-center gap-2.5 mb-2">
                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white border border-slate-200/90 shrink-0">
                          {getCaseIcon(caso.id)}
                        </div>
                        <div>
                          <h4 className="font-heading font-bold text-base text-slate-950 tracking-tight leading-snug">
                            {caso.cliente}
                          </h4>
                          <span className="text-xs text-slate-500 block">
                            {caso.subtitulo}
                          </span>
                        </div>
                      </div>

                      {/* Badges de Métricas Auditadas */}
                      {caso.metricas && caso.metricas.length > 0 && (
                        <div className="my-3 flex flex-wrap gap-1.5">
                          {caso.metricas.map((m, mIdx) => (
                            <div
                              key={mIdx}
                              className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200/90 bg-white px-2 py-0.5 text-xs shadow-2xs"
                            >
                              <span className="text-slate-500 font-medium">{m.label}:</span>
                              <code className="font-mono font-bold text-slate-900 tracking-tight">
                                {m.valor}
                              </code>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* O que foi feito */}
                      <div className="mt-4 pt-3 border-t border-slate-200/70">
                        <span className="text-xs font-bold text-slate-700 tracking-wide block mb-1">
                          O que foi feito:
                        </span>
                        <p className="text-xs sm:text-sm text-slate-600 font-sans leading-relaxed">
                          {caso.oqueFoiFeito}
                        </p>
                      </div>
                    </div>

                    {/* Bloco de Resultado Real em Caixa */}
                    <div className="mt-5">
                      <div className="rounded-xl bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 p-4 border border-slate-800 text-white shadow-inner">
                        <div className="flex items-start gap-2">
                          <TrendingUp className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                          <div>
                            <span className="text-xs font-bold text-emerald-400 tracking-wide block">
                              Resultado real em caixa:
                            </span>
                            <p className="text-xs sm:text-sm text-slate-200 mt-1 leading-relaxed font-mono">
                              {caso.resultado}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Botão Contextual WhatsApp para o Case */}
                      <a
                        href={getWhatsAppHref(caso.cliente)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-3.5 inline-flex items-center justify-center gap-1.5 w-full py-2 px-3 text-xs font-semibold text-slate-600 hover:text-blue-600 hover:bg-blue-50/70 rounded-xl border border-transparent hover:border-blue-200 transition-colors"
                      >
                        <MessageCircle className="h-3.5 w-3.5" />
                        <span>Conversar sobre este case</span>
                        <ArrowRight className="h-3 w-3" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

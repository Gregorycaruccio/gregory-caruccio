import React, { useState } from "react";
import { Send, CheckCircle2, MessageSquare, MapPin } from "lucide-react";
import { SITE_CONFIG } from "../config/site-config";

export const ContactSection: React.FC = () => {
  const [nome, setNome] = useState("");
  const [empresa, setEmpresa] = useState("");
  const [cidade, setCidade] = useState("");
  const [segmento, setSegmento] = useState("Gastronomia & Delivery");
  const [servico, setServico] = useState("Combo Growth (R$ 1.600/mês)");
  const [objetivo, setObjetivo] = useState("Aumentar volume de vendas e mensagens no WhatsApp");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const mensagem = `Olá Grégory! Preenchi o formulário no seu site:
*Nome:* ${nome || "Não informado"}
*Empresa:* ${empresa || "Não informada"}
*Cidade / Região:* ${cidade || "Litoral Norte RS / Brasil"}
*Segmento:* ${segmento}
*Serviço de Interesse:* ${servico}
*Objetivo Principal:* ${objetivo}

Gostaria de entender os próximos passos para aplicar essa estratégia no meu negócio!`;

    const url = `https://wa.me/${SITE_CONFIG.telefoneRaw}?text=${encodeURIComponent(mensagem)}`;
    window.open(url, "_blank");
  };

  return (
    <section id="contato" className="py-20 md:py-28 relative bg-[#040814] text-slate-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Lado Esquerdo: Chamada e Prova de Atendimento Humano */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-2 mb-3">
              <span className="h-2 w-2 rounded-full bg-electric-cyan" />
              <span className="text-xs font-bold text-electric-cyan">
                Linha Direta de Atendimento
              </span>
            </div>

            <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-white tracking-tight">
              Vamos conversar sobre o seu <br />
              <span className="text-electric-cyan">
                próximo salto de vendas.
              </span>
            </h2>

            <p className="mt-4 text-base text-slate-300 font-sans leading-relaxed">
              Preencha o formulário rápido ao lado. As informações serão formatadas automaticamente para abrir uma conversa qualificada diretamente comigo no WhatsApp comercial.
            </p>

            <div className="mt-8 space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-emerald-400 shrink-0 mt-0.5" />
                <p className="text-sm text-slate-300 font-sans">
                  <strong>Resposta rápida:</strong> Retorno em horário comercial diretamente pelo Grégory em menos de 2 horas.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-emerald-400 shrink-0 mt-0.5" />
                <p className="text-sm text-slate-300 font-sans">
                  <strong>Diagnóstico sem compromisso:</strong> Avaliamos seu perfil e seus concorrentes locais antes de você investir qualquer centavo.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-emerald-400 shrink-0 mt-0.5" />
                <p className="text-sm text-slate-300 font-sans">
                  <strong>Sem enrolação de agência:</strong> Transparência total sobre custos de anúncio, prazos e retorno financeiro.
                </p>
              </div>
            </div>

            <div className="mt-8 rounded-2xl border border-electric-blue/30 bg-[#070D1F] p-5 flex items-center justify-between">
              <div>
                <p className="text-xs text-slate-400">WhatsApp Oficial de Atendimento:</p>
                <p className="font-heading font-bold text-base text-white">{SITE_CONFIG.telefoneFormatado}</p>
              </div>
              <a
                href={`https://wa.me/${SITE_CONFIG.telefoneRaw}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-electric !py-2.5 !px-5 text-xs !rounded-full"
              >
                Abrir WhatsApp
              </a>
            </div>
          </div>

          {/* Lado Direito: Formulário com Pré-qualificação de Negócio */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl border border-electric-blue/30 bg-[#091124] p-6 sm:p-10">
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <h3 className="font-heading font-bold text-xl text-white">
                    Solicitar Diagnóstico Comercial
                  </h3>
                  <p className="text-xs text-slate-300 font-sans mt-1">
                    Preencha os dados e receba uma análise do seu balcão no WhatsApp
                  </p>
                </div>
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-electric-blue/20 text-electric-cyan border border-electric-cyan/30">
                  <MessageSquare className="h-5 w-5" />
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="input-nome" className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Seu Nome *
                    </label>
                    <input
                      id="input-nome"
                      type="text"
                      required
                      placeholder="Ex: Carlos Silva"
                      value={nome}
                      onChange={(e) => setNome(e.target.value)}
                      className="w-full rounded-xl border border-white/10 bg-obsidian-950 px-4 py-3 text-sm text-white placeholder-slate-500 focus:border-electric-cyan focus:outline-none focus:ring-1 focus:ring-electric-cyan transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="input-empresa" className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Nome da Empresa *
                    </label>
                    <input
                      id="input-empresa"
                      type="text"
                      required
                      placeholder="Ex: Pastelaria do Carlos"
                      value={empresa}
                      onChange={(e) => setEmpresa(e.target.value)}
                      className="w-full rounded-xl border border-white/10 bg-obsidian-950 px-4 py-3 text-sm text-white placeholder-slate-500 focus:border-electric-cyan focus:outline-none focus:ring-1 focus:ring-electric-cyan transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label htmlFor="input-cidade" className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Cidade / Estado *
                    </label>
                    <input
                      id="input-cidade"
                      type="text"
                      required
                      placeholder="Ex: Tramandaí - RS"
                      value={cidade}
                      onChange={(e) => setCidade(e.target.value)}
                      className="w-full rounded-xl border border-white/10 bg-obsidian-950 px-4 py-3 text-sm text-white placeholder-slate-500 focus:border-electric-cyan focus:outline-none focus:ring-1 focus:ring-electric-cyan transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="select-segmento" className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Segmento de Atuação
                    </label>
                    <select
                      id="select-segmento"
                      value={segmento}
                      onChange={(e) => setSegmento(e.target.value)}
                      className="w-full rounded-xl border border-white/10 bg-obsidian-950 px-4 py-3 text-sm text-white focus:border-electric-cyan focus:outline-none focus:ring-1 focus:ring-electric-cyan transition-colors"
                    >
                      <option value="Gastronomia & Delivery">Gastronomia & Delivery</option>
                      <option value="Mercado Imobiliário (Casas e Terrenos)">Mercado Imobiliário (Casas e Terrenos)</option>
                      <option value="Agropecuária & Pet Shop">Agropecuária & Pet Shop</option>
                      <option value="Saúde, Estética & Clínicas">Saúde, Estética & Clínicas</option>
                      <option value="Revenda de Veículos Seminovos">Revenda de Veículos Seminovos</option>
                      <option value="Comunicação Visual & B2B">Comunicação Visual & B2B</option>
                      <option value="Comércio Local / Varejo">Comércio Local / Varejo</option>
                      <option value="Outro Segmento">Outro Segmento</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="select-servico" className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Serviço de Interesse
                    </label>
                    <select
                      id="select-servico"
                      value={servico}
                      onChange={(e) => setServico(e.target.value)}
                      className="w-full rounded-xl border border-electric-cyan/40 bg-obsidian-950 px-4 py-3 text-sm text-white focus:border-electric-cyan focus:outline-none focus:ring-1 focus:ring-electric-cyan font-bold text-electric-cyan transition-colors"
                    >
                      <option value="Combo Growth (R$ 1.600/mês)">Combo Growth (R$ 1.600/mês) - Recomendado</option>
                      <option value="Meta Ads Direto (R$ 850/mês)">Meta Ads Direto (R$ 850/mês)</option>
                      <option value="Google Ads Alta Intenção (R$ 850/mês)">Google Ads Alta Intenção (R$ 850/mês)</option>
                      <option value="Cerco Total Meta + Google (R$ 1.300/mês)">Cerco Total Meta + Google (R$ 1.300/mês)</option>
                      <option value="Social Media Autoridade (R$ 950/mês)">Social Media Autoridade (R$ 950/mês)</option>
                      <option value="Landing Page de Alta Conversão (R$ 1.200 a R$ 1.500)">Landing Page de Alta Conversão</option>
                      <option value="Cardápios & Catálogos para WhatsApp">Cardápios & Catálogos WhatsApp</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="input-objetivo" className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Qual o maior desafio de vendas hoje?
                  </label>
                  <input
                    id="input-objetivo"
                    type="text"
                    placeholder="Ex: Atrair mais clientes para o WhatsApp nos dias de semana"
                    value={objetivo}
                    onChange={(e) => setObjetivo(e.target.value)}
                    className="w-full rounded-xl border border-white/10 bg-obsidian-950 px-4 py-3 text-sm text-white placeholder-slate-500 focus:border-electric-cyan focus:outline-none focus:ring-1 focus:ring-electric-cyan transition-colors"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="btn-electric w-full justify-center !py-4 text-base !rounded-full"
                  >
                    <Send className="h-4 w-4" />
                    <span>Enviar e Iniciar Conversa no WhatsApp</span>
                  </button>
                  <p className="mt-2.5 text-center text-xs text-slate-400">
                    Ao clicar, o WhatsApp abrirá com as informações pré-preenchidas para atendimento imediato.
                  </p>
                </div>
              </form>
            </div>
          </div>

        </div>

        {/* ======================================================== */}
        {/* BLOCO DE SEO LOCAL: REGIÃO DE ATENDIMENTO PRESENCIAL & REMOTO */}
        {/* ======================================================== */}
        <div className="mt-16 rounded-2xl bg-[#070D1D] p-6 sm:p-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="max-w-xl">
              <div className="flex items-center gap-2 mb-2">
                <MapPin className="h-4 w-4 text-electric-cyan" />
                <span className="font-heading font-bold text-sm text-white">
                  Região de Atendimento Presencial & Atendimento Nacional Remoto
                </span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed font-sans">
                Atendimento presencial e captação de materiais no <strong className="text-white">Litoral Norte do RS</strong> (Cidreira, Tramandaí, Imbé, Osório, Capão da Canoa, Xangri-lá, Torres e Santo Antônio da Patrulha) e Região Metropolitana de Porto Alegre. Atendimento 100% remoto para empresas de todo o Brasil com acompanhamento semanal direto no WhatsApp.
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {SITE_CONFIG.regiaoAtendimentoPresencial.map((cidadeNome, cIdx) => (
                <span
                  key={cIdx}
                  className="rounded-full bg-obsidian-850 px-3 py-1 text-xs text-slate-300 border border-white/5"
                >
                  {cidadeNome}
                </span>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

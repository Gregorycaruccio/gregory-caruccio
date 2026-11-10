import React, { useState } from "react";
import { Send, CheckCircle2, MapPin } from "lucide-react";
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
    <section id="contato" className="py-20 md:py-28 bg-[#0B0F17] text-slate-100">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Lado Esquerdo: Chamada e Prova de Atendimento Humano */}
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs px-3 py-1 rounded-full font-medium mb-4">
              <span>Linha Direta de Atendimento</span>
            </div>

            <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-white tracking-tight leading-tight">
              Vamos conversar sobre o seu <br />
              <span className="text-blue-400">
                próximo salto de vendas.
              </span>
            </h2>

            <p className="mt-4 text-sm sm:text-base text-slate-300 font-sans leading-relaxed">
              Preencha o formulário rápido ao lado. As informações serão formatadas para abrir uma conversa qualificada diretamente comigo no WhatsApp comercial.
            </p>

            <div className="mt-8 space-y-3.5">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-emerald-400 shrink-0 mt-0.5" />
                <p className="text-xs sm:text-sm text-slate-300 font-sans">
                  <strong>Resposta rápida:</strong> Retorno em horário comercial diretamente pelo Grégory em menos de 2 horas.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-emerald-400 shrink-0 mt-0.5" />
                <p className="text-xs sm:text-sm text-slate-300 font-sans">
                  <strong>Diagnóstico sem compromisso:</strong> Avaliamos seu perfil e seus concorrentes locais antes de você investir qualquer centavo.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-emerald-400 shrink-0 mt-0.5" />
                <p className="text-xs sm:text-sm text-slate-300 font-sans">
                  <strong>Sem intermediários:</strong> Você fala diretamente com quem planeja, executa e acompanha o seu retorno.
                </p>
              </div>
            </div>

            <div className="mt-8 rounded-xl border border-white/[0.07] bg-[#101725] p-5 flex items-center justify-between">
              <div>
                <p className="text-[11px] text-slate-400 font-sans">WhatsApp Comercial Oficial:</p>
                <p className="font-heading font-bold text-sm sm:text-base text-white">{SITE_CONFIG.telefoneFormatado}</p>
              </div>
              <a
                href={`https://wa.me/${SITE_CONFIG.telefoneRaw}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 rounded-lg bg-blue-600 hover:bg-blue-700 px-4 py-2 text-xs font-semibold text-white transition-transform duration-150 hover:scale-[1.01] active:scale-[0.99]"
              >
                Abrir WhatsApp
              </a>
            </div>
          </div>

          {/* Lado Direito: Formulário com Inputs Técnicos */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-white/[0.08] bg-[#101725] p-6 sm:p-9">
              <div className="mb-6">
                <h3 className="font-heading font-bold text-lg sm:text-xl text-white">
                  Solicitar Diagnóstico Comercial
                </h3>
                <p className="text-xs text-slate-400 font-sans mt-0.5">
                  Selecione suas preferências e envie os dados em 1 clique
                </p>
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
                      className="w-full bg-[#0D131F] border border-white/10 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition text-sm"
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
                      className="w-full bg-[#0D131F] border border-white/10 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition text-sm"
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
                      className="w-full bg-[#0D131F] border border-white/10 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition text-sm"
                    />
                  </div>

                  <div>
                    <label htmlFor="select-segmento" className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Segmento
                    </label>
                    <select
                      id="select-segmento"
                      value={segmento}
                      onChange={(e) => setSegmento(e.target.value)}
                      className="w-full bg-[#0D131F] border border-white/10 rounded-lg px-3 py-3 text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition text-sm"
                    >
                      <option value="Gastronomia & Delivery">Gastronomia & Delivery</option>
                      <option value="Mercado Imobiliário (Casas e Terrenos)">Mercado Imobiliário</option>
                      <option value="Agropecuária & Pet Shop">Agropecuária & Pet</option>
                      <option value="Saúde, Estética & Clínicas">Saúde & Estética</option>
                      <option value="Revenda de Veículos Seminovos">Revenda de Seminovos</option>
                      <option value="Comunicação Visual & B2B">Comunicação Visual B2B</option>
                      <option value="Comércio Local / Varejo">Comércio Local / Varejo</option>
                      <option value="Outro Segmento">Outro Segmento</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="select-servico" className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Serviço
                    </label>
                    <select
                      id="select-servico"
                      value={servico}
                      onChange={(e) => setServico(e.target.value)}
                      className="w-full bg-[#0D131F] border border-blue-500/30 rounded-lg px-3 py-3 text-blue-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition text-sm font-semibold"
                    >
                      <option value="Combo Growth (R$ 1.600/mês)">Combo Growth (R$ 1.600)</option>
                      <option value="Meta Ads Direto (R$ 850/mês)">Meta Ads (R$ 850)</option>
                      <option value="Google Ads Alta Intenção (R$ 850/mês)">Google Ads (R$ 850)</option>
                      <option value="Cerco Total Meta + Google (R$ 1.300/mês)">Cerco Total (R$ 1.300)</option>
                      <option value="Social Media Autoridade (R$ 950/mês)">Social Media (R$ 950)</option>
                      <option value="Landing Page de Alta Conversão">Landing Page</option>
                      <option value="Bots no WhatsApp & SDRs com IA">Bots no WhatsApp & SDRs com IA</option>
                      <option value="Cardápios & Catálogos WhatsApp">Cardápios WhatsApp</option>
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
                    placeholder="Ex: Aumentar o volume de mensagens no WhatsApp nos fins de semana"
                    value={objetivo}
                    onChange={(e) => setObjetivo(e.target.value)}
                    className="w-full bg-[#0D131F] border border-white/10 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition text-sm"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 hover:bg-blue-700 py-3.5 text-sm font-semibold text-white transition-transform duration-150 hover:scale-[1.01] active:scale-[0.99]"
                  >
                    <Send className="h-4 w-4" />
                    <span>Enviar e Iniciar Diagnóstico no WhatsApp</span>
                  </button>
                  <p className="mt-2.5 text-center text-xs text-slate-400 font-sans">
                    Ao enviar, o WhatsApp será aberto com o diagnóstico estruturado para atendimento.
                  </p>
                </div>
              </form>
            </div>
          </div>

        </div>

        {/* ======================================================== */}
        {/* BLOCO DE COBERTURA: REGIÃO PRESENCIAL & REMOTO */}
        {/* ======================================================== */}
        <div className="mt-14 rounded-xl border border-white/[0.06] bg-[#101725] p-5 sm:p-7">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="max-w-xl">
              <div className="flex items-center gap-2 mb-1.5">
                <MapPin className="h-4 w-4 text-blue-400" />
                <span className="font-heading font-bold text-sm text-white">
                  Região de Atendimento Presencial & Atendimento Nacional Remoto
                </span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed font-sans">
                Atendimento presencial no <strong className="text-white">Litoral Norte do RS</strong> (Cidreira, Tramandaí, Imbé, Osório, Capão da Canoa, Xangri-lá, Torres e Santo Antônio da Patrulha) e Porto Alegre. Atendimento remoto com alinhamento semanal para empresas de todo o Brasil.
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {SITE_CONFIG.regiaoAtendimentoPresencial.map((cidadeNome, cIdx) => (
                <span
                  key={cIdx}
                  className="rounded-full bg-[#0B0F17] px-3 py-1 text-xs text-slate-300 border border-white/[0.05]"
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

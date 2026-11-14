import React, { useState } from "react";
import { Send, CheckCircle2, MapPin } from "lucide-react";
import { SITE_CONFIG } from "../config/site-config";

export const ContactSection: React.FC = () => {
  const [nome, setNome] = useState("");
  const [empresa, setEmpresa] = useState("");
  const [cidade, setCidade] = useState("");
  const [segmento, setSegmento] = useState("Gastronomia & Delivery");
  const [servico, setServico] = useState("Combo Growth (R$ 1.600/mês)");
  const [objetivo, setObjetivo] = useState(
    "Aumentar volume de vendas e mensagens no WhatsApp"
  );

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

    const url = `https://wa.me/${SITE_CONFIG.telefoneRaw}?text=${encodeURIComponent(
      mensagem
    )}`;
    window.open(url, "_blank");
  };

  return (
    <section
      id="contato"
      className="scroll-mt-28 py-20 md:py-28 bg-[#070A13] text-white border-t border-slate-800/90 relative overflow-hidden"
    >
      {/* Glow de Fundo */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 right-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-3xl -z-10"
      />

      <div className="mx-auto max-w-6xl px-5 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Lado Esquerdo: Chamada e Prova de Atendimento Humano em Dark Mode */}
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 border border-blue-500/30 bg-blue-950/60 text-blue-400 text-xs px-3.5 py-1.5 rounded-full font-bold uppercase tracking-wider mb-4">
              <span>Linha Direta de Atendimento</span>
            </div>

            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-white tracking-tight leading-tight">
              Vamos conversar sobre o seu <span className="text-blue-400">próximo salto de vendas.</span>
            </h2>

            <p className="mt-4 text-sm sm:text-base text-slate-300 font-sans leading-relaxed">
              Preencha o formulário rápido ao lado. As informações serão formatadas para abrir uma conversa qualificada diretamente comigo no WhatsApp comercial.
            </p>

            <div className="mt-8 space-y-3.5">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-emerald-400 shrink-0 mt-0.5" />
                <p className="text-xs sm:text-sm text-slate-300 font-sans">
                  <strong className="text-white">Resposta rápida:</strong> Retorno em horário comercial diretamente pelo Grégory em menos de 2 horas.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-emerald-400 shrink-0 mt-0.5" />
                <p className="text-xs sm:text-sm text-slate-300 font-sans">
                  <strong className="text-white">Diagnóstico sem compromisso:</strong> Avaliamos seu perfil e seus concorrentes locais antes de você investir qualquer centavo.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-emerald-400 shrink-0 mt-0.5" />
                <p className="text-xs sm:text-sm text-slate-300 font-sans">
                  <strong className="text-white">Sem intermediários:</strong> Você fala diretamente com quem planeja, executa e acompanha o seu retorno.
                </p>
              </div>
            </div>

            <div className="mt-8 rounded-2xl border border-blue-500/30 bg-[#0B0F1D]/80 p-5 flex items-center justify-between shadow-inner">
              <div>
                <p className="text-xs font-semibold text-slate-400 mb-0.5">
                  WhatsApp Comercial Oficial:
                </p>
                <p className="font-heading font-extrabold text-sm sm:text-base text-white">
                  {SITE_CONFIG.telefoneFormatado}
                </p>
              </div>
              <a
                href={`https://wa.me/${SITE_CONFIG.telefoneRaw}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-500 hover:from-blue-500 hover:to-indigo-500 px-4 py-2 text-xs font-semibold text-white transition-transform duration-150 hover:scale-[1.01] active:scale-[0.99] shadow-md shadow-blue-600/30"
              >
                Abrir WhatsApp
              </a>
            </div>
          </div>

          {/* Lado Direito: Formulário com Inputs Dark Executive */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl border border-slate-800/90 bg-[#0B0F1A]/90 p-6 sm:p-9 shadow-2xl">
              <div className="mb-6">
                <h3 className="font-heading font-extrabold text-lg sm:text-xl text-white">
                  Solicitar Diagnóstico Comercial
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 font-sans mt-0.5">
                  Selecione suas preferências e inicie o atendimento em 1 clique
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="input-nome"
                      className="block text-xs font-bold text-slate-300 mb-1.5"
                    >
                      Seu Nome *
                    </label>
                    <input
                      id="input-nome"
                      type="text"
                      required
                      placeholder="Ex: Carlos Silva"
                      value={nome}
                      onChange={(e) => setNome(e.target.value)}
                      className="w-full bg-[#070A14] border border-slate-800 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition text-sm"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="input-empresa"
                      className="block text-xs font-bold text-slate-300 mb-1.5"
                    >
                      Nome da Empresa *
                    </label>
                    <input
                      id="input-empresa"
                      type="text"
                      required
                      placeholder="Ex: Pastelaria do Carlos"
                      value={empresa}
                      onChange={(e) => setEmpresa(e.target.value)}
                      className="w-full bg-[#070A14] border border-slate-800 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition text-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label
                      htmlFor="input-cidade"
                      className="block text-xs font-bold text-slate-300 mb-1.5"
                    >
                      Cidade / Estado *
                    </label>
                    <input
                      id="input-cidade"
                      type="text"
                      required
                      placeholder="Ex: Tramandaí - RS"
                      value={cidade}
                      onChange={(e) => setCidade(e.target.value)}
                      className="w-full bg-[#070A14] border border-slate-800 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition text-sm"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="select-segmento"
                      className="block text-xs font-bold text-slate-300 mb-1.5"
                    >
                      Segmento
                    </label>
                    <select
                      id="select-segmento"
                      value={segmento}
                      onChange={(e) => setSegmento(e.target.value)}
                      className="w-full bg-[#070A14] border border-slate-800 rounded-xl px-3 py-3 text-slate-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition text-sm"
                    >
                      <option value="Gastronomia & Delivery">
                        Gastronomia & Delivery
                      </option>
                      <option value="Mercado Imobiliário (Casas e Terrenos)">
                        Mercado Imobiliário
                      </option>
                      <option value="Agropecuária & Pet Shop">
                        Agropecuária & Pet
                      </option>
                      <option value="Saúde, Estética & Clínicas">
                        Saúde & Estética
                      </option>
                      <option value="Revenda de Veículos Seminovos">
                        Revenda de Seminovos
                      </option>
                      <option value="Comunicação Visual & B2B">
                        Comunicação Visual B2B
                      </option>
                      <option value="Comércio Local / Varejo">
                        Comércio Local / Varejo
                      </option>
                      <option value="Outro Segmento">Outro Segmento</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="select-servico"
                      className="block text-xs font-bold text-slate-300 mb-1.5"
                    >
                      Serviço
                    </label>
                    <select
                      id="select-servico"
                      value={servico}
                      onChange={(e) => setServico(e.target.value)}
                      className="w-full bg-[#070A14] border border-blue-500/40 rounded-xl px-3 py-3 text-blue-300 focus:border-blue-400 focus:ring-1 focus:ring-blue-400 outline-none transition text-sm font-bold"
                    >
                      <option value="Combo Growth (R$ 1.600/mês)">
                        Combo Growth (R$ 1.600)
                      </option>
                      <option value="Meta Ads Direto (R$ 850/mês)">
                        Meta Ads (R$ 850)
                      </option>
                      <option value="Google Ads Alta Intenção (R$ 850/mês)">
                        Google Ads (R$ 850)
                      </option>
                      <option value="Cerco Total Meta + Google (R$ 1.300/mês)">
                        Cerco Total (R$ 1.300)
                      </option>
                      <option value="Social Media Autoridade (R$ 950/mês)">
                        Social Media (R$ 950)
                      </option>
                      <option value="Landing Page de Alta Conversão">
                        Landing Page
                      </option>
                      <option value="Bots no WhatsApp & SDRs com IA">
                        Bots no WhatsApp & SDRs com IA
                      </option>
                      <option value="Cardápios & Catálogos WhatsApp">
                        Cardápios WhatsApp
                      </option>
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="input-objetivo"
                    className="block text-xs font-bold text-slate-300 mb-1.5"
                  >
                    Qual o maior desafio de vendas hoje?
                  </label>
                  <input
                    id="input-objetivo"
                    type="text"
                    placeholder="Ex: Aumentar o volume de mensagens no WhatsApp nos fins de semana"
                    value={objetivo}
                    onChange={(e) => setObjetivo(e.target.value)}
                    className="w-full bg-[#070A14] border border-slate-800 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition text-sm"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-500 hover:from-blue-500 hover:to-indigo-500 py-3.5 text-sm font-bold text-white transition-all duration-150 hover:scale-[1.01] active:scale-[0.99] shadow-lg shadow-blue-600/30"
                  >
                    <span>Enviar e Iniciar Diagnóstico no WhatsApp</span>
                    <Send className="h-4 w-4" />
                  </button>
                </div>
              </form>

              {/* Informações de Localização e Presença */}
              <div className="mt-6 pt-5 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400">
                <span className="flex items-center gap-1.5">
                  <MapPin className="h-3.5 w-3.5 text-blue-400" />
                  {SITE_CONFIG.cidade}
                </span>
                <span className="text-[11px] font-medium text-slate-400">
                  Atendimento presencial no Litoral Norte RS
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

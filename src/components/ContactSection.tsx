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
    <section id="contato" className="py-20 md:py-28 bg-white text-slate-900 border-t border-slate-200/80">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Lado Esquerdo: Chamada e Prova de Atendimento Humano */}
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 border border-blue-200 bg-blue-50 text-blue-700 text-xs px-3.5 py-1.5 rounded-full font-bold uppercase tracking-wider mb-4">
              <span>Linha Direta de Atendimento</span>
            </div>

            <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-slate-950 tracking-tight leading-tight">
              Vamos conversar sobre o seu <br />
              <span className="text-blue-600">
                próximo salto de vendas.
              </span>
            </h2>

            <p className="mt-4 text-sm sm:text-base text-slate-600 font-sans leading-relaxed">
              Preencha o formulário rápido ao lado. As informações serão formatadas para abrir uma conversa qualificada diretamente comigo no WhatsApp comercial.
            </p>

            <div className="mt-8 space-y-3.5">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                <p className="text-xs sm:text-sm text-slate-700 font-sans">
                  <strong>Resposta rápida:</strong> Retorno em horário comercial diretamente pelo Grégory em menos de 2 horas.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                <p className="text-xs sm:text-sm text-slate-700 font-sans">
                  <strong>Diagnóstico sem compromisso:</strong> Avaliamos seu perfil e seus concorrentes locais antes de você investir qualquer centavo.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                <p className="text-xs sm:text-sm text-slate-700 font-sans">
                  <strong>Sem intermediários:</strong> Você fala diretamente com quem planeja, executa e acompanha o seu retorno.
                </p>
              </div>
            </div>

            <div className="mt-8 rounded-2xl border border-blue-200 bg-blue-50/70 p-5 flex items-center justify-between">
              <div>
                <p className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">WhatsApp Comercial Oficial:</p>
                <p className="font-heading font-extrabold text-sm sm:text-base text-slate-950">{SITE_CONFIG.telefoneFormatado}</p>
              </div>
              <a
                href={`https://wa.me/${SITE_CONFIG.telefoneRaw}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 px-4 py-2 text-xs font-semibold text-white transition-transform duration-150 hover:scale-[1.01] active:scale-[0.99]"
              >
                Abrir WhatsApp
              </a>
            </div>
          </div>

          {/* Lado Direito: Formulário com Inputs Estilo Flowora */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl border border-slate-200/90 bg-[#FAFBFF] p-6 sm:p-9">
              <div className="mb-6">
                <h3 className="font-heading font-extrabold text-lg sm:text-xl text-slate-950">
                  Solicitar Diagnóstico Comercial
                </h3>
                <p className="text-xs text-slate-500 font-sans mt-0.5">
                  Selecione suas preferências e inicie o atendimento em 1 clique
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="input-nome" className="block text-xs font-bold text-slate-700 mb-1.5">
                      Seu Nome *
                    </label>
                    <input
                      id="input-nome"
                      type="text"
                      required
                      placeholder="Ex: Carlos Silva"
                      value={nome}
                      onChange={(e) => setNome(e.target.value)}
                      className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-slate-900 placeholder-slate-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition text-sm"
                    />
                  </div>
                  <div>
                    <label htmlFor="input-empresa" className="block text-xs font-bold text-slate-700 mb-1.5">
                      Nome da Empresa *
                    </label>
                    <input
                      id="input-empresa"
                      type="text"
                      required
                      placeholder="Ex: Pastelaria do Carlos"
                      value={empresa}
                      onChange={(e) => setEmpresa(e.target.value)}
                      className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-slate-900 placeholder-slate-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition text-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label htmlFor="input-cidade" className="block text-xs font-bold text-slate-700 mb-1.5">
                      Cidade / Estado *
                    </label>
                    <input
                      id="input-cidade"
                      type="text"
                      required
                      placeholder="Ex: Tramandaí - RS"
                      value={cidade}
                      onChange={(e) => setCidade(e.target.value)}
                      className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-slate-900 placeholder-slate-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition text-sm"
                    />
                  </div>

                  <div>
                    <label htmlFor="select-segmento" className="block text-xs font-bold text-slate-700 mb-1.5">
                      Segmento
                    </label>
                    <select
                      id="select-segmento"
                      value={segmento}
                      onChange={(e) => setSegmento(e.target.value)}
                      className="w-full bg-white border border-slate-200 rounded-xl px-3 py-3 text-slate-900 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition text-sm"
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
                    <label htmlFor="select-servico" className="block text-xs font-bold text-slate-700 mb-1.5">
                      Serviço
                    </label>
                    <select
                      id="select-servico"
                      value={servico}
                      onChange={(e) => setServico(e.target.value)}
                      className="w-full bg-white border border-blue-300 rounded-xl px-3 py-3 text-blue-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition text-sm font-bold"
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
                  <label htmlFor="input-objetivo" className="block text-xs font-bold text-slate-700 mb-1.5">
                    Qual o maior desafio de vendas hoje?
                  </label>
                  <input
                    id="input-objetivo"
                    type="text"
                    placeholder="Ex: Aumentar o volume de mensagens no WhatsApp nos fins de semana"
                    value={objetivo}
                    onChange={(e) => setObjetivo(e.target.value)}
                    className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-slate-900 placeholder-slate-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition text-sm"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 py-3.5 text-sm font-bold text-white transition-transform duration-150 hover:scale-[1.01] active:scale-[0.99]"
                  >
                    <span>Enviar e Iniciar Diagnóstico no WhatsApp</span>
                    <Send className="h-4 w-4" />
                  </button>
                </div>
              </form>

              {/* Informações de Localização e Presença */}
              <div className="mt-6 pt-5 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
                <span className="flex items-center gap-1.5">
                  <MapPin className="h-3.5 w-3.5 text-blue-600" />
                  {SITE_CONFIG.cidade}
                </span>
                <span className="text-[11px] font-medium">
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

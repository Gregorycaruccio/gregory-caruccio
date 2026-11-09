import React, { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";
import { SITE_CONFIG } from "../config/site-config";

export const ContactSection: React.FC = () => {
  const [nome, setNome] = useState("");
  const [empresa, setEmpresa] = useState("");
  const [segmento, setSegmento] = useState("Gastronomia / Alimentação");
  const [servico, setServico] = useState("Combo Growth (R$ 1.600/mês)");
  const [objetivo, setObjetivo] = useState("Mais vendas e mensagens no WhatsApp");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const mensagem = `Olá Grégory! Preenchi o formulário no seu site:
*Nome:* ${nome || "Não informado"}
*Empresa:* ${empresa || "Não informada"}
*Segmento:* ${segmento}
*Serviço de Interesse:* ${servico}
*Objetivo:* ${objetivo}

Gostaria de entender os próximos passos para aplicar essa estratégia!`;

    const url = `https://wa.me/${SITE_CONFIG.telefoneRaw}?text=${encodeURIComponent(mensagem)}`;
    window.open(url, "_blank");
  };

  return (
    <section id="contato" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Lado Esquerdo: Chamada e Autoridade */}
          <div className="lg:col-span-5">
            <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-white tracking-tight">
              Vamos conversar sobre o seu <br />
              <span className="text-brand-orange">próximo salto de vendas.</span>
            </h2>

            <p className="mt-4 text-base text-slate-300 font-sans leading-relaxed">
              Preencha o formulário rápido ao lado. As informações serão formatadas automaticamente para abrir uma conversa qualificada diretamente no meu WhatsApp comercial.
            </p>

            <div className="mt-8 space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-brand-orange shrink-0 mt-0.5" />
                <p className="text-sm text-slate-300 font-sans">
                  <strong>Atendimento rápido:</strong> Retorno em horário comercial em menos de 2 horas.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-brand-orange shrink-0 mt-0.5" />
                <p className="text-sm text-slate-300 font-sans">
                  <strong>Diagnóstico sem compromisso:</strong> Avaliamos sua presença atual antes de apresentar qualquer proposta formal.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-brand-orange shrink-0 mt-0.5" />
                <p className="text-sm text-slate-300 font-sans">
                  <strong>Alinhamento direto:</strong> Você conversa diretamente com quem gerencia os anúncios e o conteúdo.
                </p>
              </div>
            </div>

            <div className="mt-8 rounded-2xl bg-carbon-card border border-carbon-border p-5 flex items-center justify-between">
              <div>
                <p className="text-xs text-slate-400">WhatsApp Comercial:</p>
                <p className="font-heading font-bold text-base text-white">{SITE_CONFIG.telefoneFormatado}</p>
              </div>
              <a
                href={`https://wa.me/${SITE_CONFIG.telefoneRaw}`}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg bg-emerald-500/15 px-3 py-1.5 text-xs font-semibold text-emerald-400 hover:bg-emerald-500/25 transition-colors"
              >
                Abrir WhatsApp
              </a>
            </div>
          </div>

          {/* Lado Direito: Formulário com Pré-qualificação */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl border border-carbon-border bg-carbon-card p-6 sm:p-10">
              <div className="mb-6">
                <h3 className="font-heading font-bold text-xl text-white">
                  Solicitar Proposta & Diagnóstico
                </h3>
                <p className="text-xs text-slate-400 font-sans mt-1">
                  Selecione suas preferências e envie em 1 clique
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
                      className="w-full rounded-xl border border-carbon-border bg-carbon-elevated px-4 py-3 text-sm text-white placeholder-slate-500 focus:border-brand-orange focus:outline-none focus:ring-1 focus:ring-brand-orange"
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
                      className="w-full rounded-xl border border-carbon-border bg-carbon-elevated px-4 py-3 text-sm text-white placeholder-slate-500 focus:border-brand-orange focus:outline-none focus:ring-1 focus:ring-brand-orange"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="select-segmento" className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Segmento de Atuação
                    </label>
                    <select
                      id="select-segmento"
                      value={segmento}
                      onChange={(e) => setSegmento(e.target.value)}
                      className="w-full rounded-xl border border-carbon-border bg-carbon-elevated px-4 py-3 text-sm text-white focus:border-brand-orange focus:outline-none focus:ring-1 focus:ring-brand-orange"
                    >
                      <option value="Gastronomia / Alimentação">Gastronomia / Delivery / Restaurante</option>
                      <option value="Mercado Imobiliário / Corretores">Mercado Imobiliário / Corretores</option>
                      <option value="Agropecuária / Pet Shop">Agropecuária / Pet Shop</option>
                      <option value="Clínica / Estética / Saúde">Clínica / Estética / Saúde</option>
                      <option value="Revenda de Veículos / Concessionária">Revenda de Veículos / Concessionária</option>
                      <option value="Comunicação Visual / B2B">Comunicação Visual / B2B</option>
                      <option value="Varejo / Loja Local">Varejo / Loja Local</option>
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
                      className="w-full rounded-xl border border-carbon-border bg-carbon-elevated px-4 py-3 text-sm text-white focus:border-brand-orange focus:outline-none focus:ring-1 focus:ring-brand-orange font-semibold text-brand-orange"
                    >
                      <option value="Combo Growth (R$ 1.600/mês)">Combo Growth (R$ 1.600/mês) - Recomendado</option>
                      <option value="Meta Ads Direto (R$ 850/mês)">Meta Ads Direto (R$ 850/mês)</option>
                      <option value="Google Ads Alta Intenção (R$ 850/mês)">Google Ads Alta Intenção (R$ 850/mês)</option>
                      <option value="Combo Tráfego Total (R$ 1.300/mês)">Combo Tráfego Total (R$ 1.300/mês)</option>
                      <option value="Social Media Autoridade (R$ 950/mês)">Social Media Autoridade (R$ 950/mês)</option>
                      <option value="Landing Page de Alta Conversão (R$ 1.200 a R$ 1.500)">Landing Page de Alta Conversão (R$ 1.200 a R$ 1.500)</option>
                      <option value="Sistemas & Automações Comerciais">Sistemas & Automações Comerciais</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="input-objetivo" className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Qual o seu objetivo principal hoje?
                  </label>
                  <input
                    id="input-objetivo"
                    type="text"
                    placeholder="Ex: Quero aumentar o volume de pedidos no WhatsApp nos fins de semana"
                    value={objetivo}
                    onChange={(e) => setObjetivo(e.target.value)}
                    className="w-full rounded-xl border border-carbon-border bg-carbon-elevated px-4 py-3 text-sm text-white placeholder-slate-500 focus:border-brand-orange focus:outline-none focus:ring-1 focus:ring-brand-orange"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="btn-action w-full justify-center !py-4 text-base"
                  >
                    <Send className="h-4 w-4" />
                    <span>Enviar e Abrir Conversa no WhatsApp</span>
                  </button>
                  <p className="mt-2.5 text-center text-xs text-slate-400">
                    Ao clicar, o WhatsApp será aberto com todas as informações preenchidas.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

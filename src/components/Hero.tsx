import React from "react";
import { ArrowRight, MessageSquare, TrendingUp, Target, Globe, Flame, ShieldCheck, CheckCircle2, Zap } from "lucide-react";
import { SITE_CONFIG } from "../config/site-config";

export const Hero: React.FC = () => {
  const whatsappHeroHref = `https://wa.me/${SITE_CONFIG.telefoneRaw}?text=Ol%C3%A1%20Gr%C3%A9gory!%20Quero%20entender%20como%20estruturar%20uma%20m%C3%A1quina%20de%20vendas%20no%20WhatsApp%20para%20minha%20empresa.`;

  return (
    <header className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background Lighting & Horizon Glow */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-electric-blue/20 blur-[150px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-80 left-1/2 -translate-x-1/2 w-[1100px] h-[400px] bg-electric-cyan/10 blur-[180px] rounded-full pointer-events-none -z-10" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          
          {/* Eyebrow Script Style (BizNext Style) */}
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-[1px] bg-electric-cyan/60" />
            <span className="text-electric-cyan text-sm sm:text-base font-medium tracking-widest italic font-sans">
              Estratégia & Performance Comercial
            </span>
            <span className="w-8 h-[1px] bg-electric-cyan/60" />
          </div>

          {/* Headline Monumental (BizNext Style) */}
          <h1 className="font-heading font-extrabold text-4xl sm:text-6xl lg:text-7xl text-white tracking-tight max-w-5xl leading-[1.08]">
            Máquina de Vendas & <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-blue via-electric-cyan to-electric-sky drop-shadow-[0_0_35px_rgba(0,210,255,0.4)]">
              Tráfego de Alta Conversão
            </span>
          </h1>

          {/* Subtítulo Tecnológico & Assertivo */}
          <p className="mt-5 max-w-2xl text-base sm:text-lg text-slate-300 font-sans leading-relaxed">
            Unimos anúncios hiperlocais no Meta Ads e Google, autoridade no Instagram e páginas rápidas em React para colocar compradores qualificados conversando no seu WhatsApp todos os dias.
          </p>

          {/* Divisor Cyber Beam */}
          <div className="mt-8 w-44 cyber-beam rounded-full" />

          {/* ======================================================== */}
          {/* CENTERPIECE: O LAPTOP 3D COM DASHBOARD DE CRESCIMENTO REAL */}
          {/* ======================================================== */}
          <div className="mt-12 sm:mt-16 w-full max-w-4xl relative group">
            
            {/* Brilho da Base do Laptop na Mesa */}
            <div className="absolute -inset-1 bg-gradient-to-b from-electric-blue/30 to-electric-cyan/20 rounded-[32px] blur-2xl opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

            {/* Chassi do Laptop */}
            <div className="relative rounded-[28px] border border-obsidian-borderHover bg-[#070D1D] p-3 sm:p-5 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)]">
              
              {/* Moldura da Tela do Laptop */}
              <div className="rounded-[20px] border border-white/10 bg-[#050914] p-3 sm:p-6 overflow-hidden relative">
                
                {/* Barra Superior da Tela (Menu do App) */}
                <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-5">
                  <div className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
                    <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/80" />
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/80" />
                    <span className="text-xs font-semibold text-slate-300 pl-2 hidden sm:inline">
                      Grégory Caruccio • Painel de Performance de Tráfego
                    </span>
                  </div>
                  <div className="flex items-center gap-3 text-xs text-slate-400">
                    <span className="hidden md:inline hover:text-white transition-colors">Meta Ads v21</span>
                    <span className="hidden md:inline hover:text-white transition-colors">Google Ads</span>
                    <span className="rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 px-2.5 py-0.5 text-[11px] font-bold">
                      ● Campanha Ativa
                    </span>
                  </div>
                </div>

                {/* Conteúdo Interno da Tela: Split de Crescimento */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center text-left">
                  
                  {/* Coluna Esquerda: Chamada e Proposta */}
                  <div className="lg:col-span-7 flex flex-col justify-between">
                    <div>
                      <span className="text-xs font-semibold text-electric-cyan uppercase tracking-wider">
                        Resultado em Tempo Real
                      </span>
                      <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-white mt-1 leading-snug">
                        Multiplique as vendas do seu negócio online.
                      </h3>
                      <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
                        Campanhas com Dayparting inteligente rodando nos horários de pico comercial, filtrando curiosos e atraindo clientes prontos para comprar.
                      </p>
                    </div>

                    <div className="mt-5 flex items-center gap-3">
                      <a
                        href={whatsappHeroHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-electric !py-2.5 !px-5 text-xs sm:text-sm !rounded-full"
                      >
                        <span>Ativar Estrutura</span>
                        <ArrowRight className="h-3.5 w-3.5" />
                      </a>
                      <a
                        href="#servicos"
                        className="btn-glass !py-2.5 !px-4 text-xs !rounded-full"
                      >
                        <span>Ver Tabela</span>
                      </a>
                    </div>
                  </div>

                  {/* Coluna Direita: Box Gráfico com Curva de Crescimento (+184% Vendas) */}
                  <div className="lg:col-span-5 rounded-2xl border border-electric-blue/30 bg-[#091124] p-4 relative overflow-hidden shadow-inner">
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <span className="text-[11px] text-slate-400 block">Vendas no WhatsApp</span>
                        <span className="font-heading font-extrabold text-2xl text-white text-transparent bg-clip-text bg-gradient-to-r from-white to-electric-cyan">
                          +184%
                        </span>
                      </div>
                      <span className="rounded-md bg-electric-blue/20 text-electric-cyan border border-electric-cyan/30 px-2 py-0.5 text-xs font-bold">
                        ROI 4.8x
                      </span>
                    </div>

                    {/* Gráfico Curvado SVG com Gradiente Neon Azul */}
                    <div className="h-28 w-full relative">
                      <svg className="w-full h-full overflow-visible" viewBox="0 0 200 80" preserveAspectRatio="none">
                        <defs>
                          <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#00D2FF" stopOpacity="0.5" />
                            <stop offset="100%" stopColor="#1E6BFF" stopOpacity="0.0" />
                          </linearGradient>
                          <linearGradient id="lineGradient" x1="0" y1="0" x2="1" y2="0">
                            <stop offset="0%" stopColor="#1E6BFF" />
                            <stop offset="50%" stopColor="#00D2FF" />
                            <stop offset="100%" stopColor="#38BDF8" />
                          </linearGradient>
                        </defs>
                        {/* Área sob a curva */}
                        <path
                          d="M0,70 Q40,65 70,45 T140,25 T200,8 L200,80 L0,80 Z"
                          fill="url(#chartGradient)"
                        />
                        {/* Linha brilhante */}
                        <path
                          d="M0,70 Q40,65 70,45 T140,25 T200,8"
                          fill="none"
                          stroke="url(#lineGradient)"
                          strokeWidth="3.5"
                          strokeLinecap="round"
                        />
                        {/* Pontos de Dados */}
                        <circle cx="70" cy="45" r="3.5" fill="#00D2FF" className="shadow-[0_0_8px_#00D2FF]" />
                        <circle cx="140" cy="25" r="3.5" fill="#00D2FF" className="shadow-[0_0_8px_#00D2FF]" />
                        <circle cx="200" cy="8" r="4.5" fill="#FFFFFF" className="animate-pulse" />
                      </svg>
                    </div>

                    <div className="mt-2 flex items-center justify-between text-[11px] text-slate-400 border-t border-white/5 pt-2">
                      <span>Custo/Lead: <strong>R$ 3,40</strong></span>
                      <span className="text-emerald-400 font-semibold">142 Conversas</span>
                    </div>
                  </div>
                </div>

                {/* Rodapé da Tela: Plataformas Conectadas (BizNext Style) */}
                <div className="mt-6 pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-400">
                  <span className="font-semibold text-slate-300">Ferramentas oficiais:</span>
                  <div className="flex items-center gap-4 sm:gap-6 text-slate-300 font-medium">
                    <span className="flex items-center gap-1.5 hover:text-white">
                      <Target className="h-3.5 w-3.5 text-electric-cyan" /> Meta Ads
                    </span>
                    <span className="flex items-center gap-1.5 hover:text-white">
                      <Globe className="h-3.5 w-3.5 text-electric-blue" /> Google Ads
                    </span>
                    <span className="flex items-center gap-1.5 hover:text-white">
                      <MessageSquare className="h-3.5 w-3.5 text-emerald-400" /> WhatsApp API
                    </span>
                    <span className="flex items-center gap-1.5 hover:text-white">
                      <Zap className="h-3.5 w-3.5 text-yellow-400" /> n8n Automações
                    </span>
                  </div>
                </div>

              </div>

              {/* Base do Laptop (Teclado sutil e Touchpad) */}
              <div className="h-4 w-40 mx-auto bg-gradient-to-b from-[#132142] to-[#0A1022] rounded-b-xl border-x border-b border-white/10 shadow-md" />
            </div>
          </div>

          {/* ======================================================== */}
          {/* AS 4 CARTELAS ACRÍLICAS / GLASS CARDS FLUTUANTES (BIZNEXT) */}
          {/* ======================================================== */}
          <div className="mt-10 sm:mt-14 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 w-full max-w-5xl">
            
            {/* Card 1: Tráfego Pago */}
            <div className="glass-card rounded-2xl p-5 text-center flex flex-col items-center justify-between">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-electric-blue/15 text-electric-cyan border border-electric-cyan/30 mb-3 shadow-[0_0_15px_rgba(0,210,255,0.2)]">
                <Target className="h-6 w-6" />
              </div>
              <h4 className="font-heading font-bold text-base text-white">
                Tráfego Pago
              </h4>
              <p className="text-xs text-slate-400 mt-1">
                Meta Ads & Google Ads
              </p>
              <div className="mt-4 flex gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-electric-cyan" />
                <span className="h-1.5 w-1.5 rounded-full bg-electric-cyan/40" />
                <span className="h-1.5 w-1.5 rounded-full bg-electric-cyan/40" />
              </div>
            </div>

            {/* Card 2: Combo Growth (O DESTAQUE AZUL COBALTO VIBRANTE DO BIZNEXT) */}
            <div className="glass-card-active rounded-2xl p-5 text-center flex flex-col items-center justify-between relative transform -translate-y-1.5">
              <span className="absolute -top-2.5 bg-white text-electric-blueDark px-3 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider shadow-md">
                O Carro-Chefe
              </span>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/20 text-white border border-white/40 mb-3 shadow-[0_0_20px_rgba(255,255,255,0.4)]">
                <Flame className="h-6 w-6 fill-white" />
              </div>
              <h4 className="font-heading font-extrabold text-base text-white">
                Combo Growth
              </h4>
              <p className="text-xs text-blue-100 font-medium mt-1">
                Tráfego + Social + Wpp
              </p>
              <div className="mt-4 flex gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-white" />
                <span className="h-1.5 w-1.5 rounded-full bg-white" />
                <span className="h-1.5 w-1.5 rounded-full bg-white" />
              </div>
            </div>

            {/* Card 3: Landing Pages */}
            <div className="glass-card rounded-2xl p-5 text-center flex flex-col items-center justify-between">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-electric-blue/15 text-electric-cyan border border-electric-cyan/30 mb-3 shadow-[0_0_15px_rgba(0,210,255,0.2)]">
                <Globe className="h-6 w-6" />
              </div>
              <h4 className="font-heading font-bold text-base text-white">
                Landing Pages
              </h4>
              <p className="text-xs text-slate-400 mt-1">
                Alta Conversão em React
              </p>
              <div className="mt-4 flex gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-electric-cyan" />
                <span className="h-1.5 w-1.5 rounded-full bg-electric-cyan/40" />
                <span className="h-1.5 w-1.5 rounded-full bg-electric-cyan/40" />
              </div>
            </div>

            {/* Card 4: Social Media */}
            <div className="glass-card rounded-2xl p-5 text-center flex flex-col items-center justify-between">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-electric-blue/15 text-electric-cyan border border-electric-cyan/30 mb-3 shadow-[0_0_15px_rgba(0,210,255,0.2)]">
                <TrendingUp className="h-6 w-6" />
              </div>
              <h4 className="font-heading font-bold text-base text-white">
                Social Media
              </h4>
              <p className="text-xs text-slate-400 mt-1">
                Autoridade & Conteúdo
              </p>
              <div className="mt-4 flex gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-electric-cyan" />
                <span className="h-1.5 w-1.5 rounded-full bg-electric-cyan/40" />
                <span className="h-1.5 w-1.5 rounded-full bg-electric-cyan/40" />
              </div>
            </div>

          </div>

          {/* ======================================================== */}
          {/* FAIXA DE ESTATÍSTICAS + BOTAO DE ORÇAMENTO (BIZNEXT STYLE) */}
          {/* ======================================================== */}
          <div className="mt-10 sm:mt-14 w-full max-w-5xl rounded-2xl border border-obsidian-border bg-obsidian-900/80 p-5 sm:p-6 backdrop-blur-xl shadow-glass-card flex flex-col md:flex-row items-center justify-between gap-6">
            
            <div className="grid grid-cols-3 gap-4 sm:gap-8 divide-x divide-white/10 w-full md:w-auto text-center sm:text-left">
              <div className="pr-2 sm:pr-6">
                <span className="font-heading font-extrabold text-2xl sm:text-3xl text-white block">
                  +R$ 1.6M
                </span>
                <span className="text-xs text-slate-400 font-sans">
                  Vendas Geradas
                </span>
              </div>

              <div className="px-2 sm:px-6">
                <span className="font-heading font-extrabold text-2xl sm:text-3xl text-white block">
                  98%
                </span>
                <span className="text-xs text-slate-400 font-sans">
                  Retenção Contratual
                </span>
              </div>

              <div className="pl-2 sm:pl-6">
                <span className="font-heading font-extrabold text-2xl sm:text-3xl text-white block">
                  +15 Nichos
                </span>
                <span className="text-xs text-slate-400 font-sans">
                  No Campo de Batalha
                </span>
              </div>
            </div>

            {/* Botão de Cotação Grátis em Azul Neon */}
            <div className="w-full md:w-auto">
              <a
                href={whatsappHeroHref}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-electric w-full sm:w-auto !rounded-full text-sm group"
              >
                <span>Solicitar Proposta Gratuita</span>
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
              </a>
            </div>

          </div>

          {/* Rodapé da Hero: Cyber Taglines */}
          <div className="mt-10 flex items-center justify-center gap-3 text-xs text-slate-400 font-sans tracking-widest uppercase">
            <span className="w-6 h-[2px] bg-electric-cyan rounded-full" />
            <span>Moderno</span>
            <span className="text-electric-cyan">•</span>
            <span>Rápido</span>
            <span className="text-electric-cyan">•</span>
            <span>Lucrativo</span>
            <span className="text-electric-cyan">•</span>
            <span>Escalável</span>
            <span className="w-6 h-[2px] bg-electric-cyan rounded-full" />
          </div>

        </div>
      </div>
    </header>
  );
};

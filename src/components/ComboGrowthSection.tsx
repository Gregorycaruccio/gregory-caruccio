import React from "react";
import { Check, ShieldCheck, Zap, ArrowRight, MessageSquare, Award } from "lucide-react";
import { SITE_CONFIG } from "../config/site-config";

export const ComboGrowthSection: React.FC = () => {
  const combo = SITE_CONFIG.comboGrowth;
  const whatsappComboHref = `https://wa.me/${SITE_CONFIG.telefoneRaw}?text=Ol%C3%A1%20Gr%C3%A9gory!%20Tenho%20interesse%20no%20Combo%20Growth%20(R$%201.600/m%C3%AAs)%20para%20minha%20empresa.%20Como%20funciona%20o%20in%C3%ADcio?`;

  return (
    <section id="combo-growth" className="py-20 md:py-28 relative">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-electric-blue/15 blur-[160px] rounded-full pointer-events-none -z-10" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header Direto */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="flex items-center gap-2 mb-3">
            <span className="h-2 w-2 rounded-full bg-electric-cyan shadow-[0_0_8px_#00D2FF]" />
            <span className="text-xs font-bold text-electric-cyan uppercase tracking-wider">
              A Solução Mais Contratada
            </span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-white tracking-tight">
            Combo Growth: <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-blue via-electric-cyan to-white">
              Tráfego pago e autoridade no mesmo contrato.
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 font-sans leading-relaxed">
            Em vez de contratar um gestor de anúncios de um lado e um freelancer de posts do outro, o Combo Growth une as duas maiores fontes de receita com um único responsável técnico pelo seu resultado comercial.
          </p>
        </div>

        {/* Painel Executivo do Combo Growth (BizNext Style Glassmorphism) */}
        <div className="relative rounded-3xl border-2 border-electric-blue/50 bg-gradient-to-b from-[#091226] via-[#060B18] to-[#040814] p-6 sm:p-10 lg:p-12 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] backdrop-blur-2xl">
          
          {/* Badge Flutuante no Topo */}
          <div className="absolute -top-4 left-8 sm:left-12 flex items-center gap-1.5 rounded-full bg-gradient-to-r from-electric-blue to-electric-cyan px-4 py-1.5 text-xs font-heading font-extrabold text-white uppercase tracking-wider shadow-blue-glow">
            <Award className="h-4 w-4" />
            <span>O Carro-Chefe Recomendado</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Lado Esquerdo: Valor e Ancoragem */}
            <div className="lg:col-span-5 flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-electric-cyan">
                  Assessoria Integrada
                </span>
                <h3 className="font-heading font-extrabold text-3xl sm:text-4xl text-white mt-1">
                  {combo.nome}
                </h3>
                <p className="mt-3 text-sm text-slate-300 font-sans leading-relaxed">
                  {combo.descricao}
                </p>
              </div>

              <div className="my-6 sm:my-8 rounded-2xl bg-[#040814]/90 border border-electric-blue/20 p-5 shadow-inner">
                <span className="text-xs text-slate-400 block line-through">
                  De R$ 2.000,00 por mês avulso
                </span>
                <div className="flex items-baseline gap-2 mt-1">
                  <span className="font-heading font-extrabold text-4xl sm:text-5xl text-white text-transparent bg-clip-text bg-gradient-to-r from-white to-electric-cyan">
                    {combo.preco}
                  </span>
                  <span className="text-sm text-slate-400 font-medium">
                    {combo.periodo}
                  </span>
                </div>
                <div className="mt-3 inline-flex items-center gap-1.5 rounded-md bg-electric-cyan/15 px-2.5 py-1 text-xs font-semibold text-electric-cyan border border-electric-cyan/30">
                  <Check className="h-3.5 w-3.5" />
                  <span>{combo.economia}</span>
                </div>
              </div>

              <div>
                <a
                  href={whatsappComboHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-electric w-full justify-center !py-4 text-base group !rounded-full"
                >
                  <MessageSquare className="h-5 w-5" />
                  <span>{combo.cta}</span>
                  <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                </a>
                <p className="mt-3 text-center text-xs text-slate-400">
                  Sem contrato de fidelidade forçada • Vagas mensais limitadas por nicho
                </p>
              </div>
            </div>

            {/* Lado Direito: Entregáveis do Combo */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <h4 className="font-heading font-bold text-base sm:text-lg text-white mb-5 flex items-center gap-2">
                <Zap className="h-5 w-5 text-electric-cyan" />
                <span>O que está incluso na assessoria mensal:</span>
              </h4>

              <div className="space-y-3.5">
                {combo.entregaveis.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3.5 rounded-xl border border-obsidian-border bg-obsidian-850/60 p-4 transition-colors hover:border-electric-cyan/40 hover:bg-obsidian-800"
                  >
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-electric-blue/20 text-electric-cyan mt-0.5 border border-electric-cyan/30">
                      <Check className="h-3.5 w-3.5" />
                    </div>
                    <div>
                      <h5 className="font-heading font-bold text-sm text-white">
                        {item.titulo}
                      </h5>
                      <p className="mt-1 text-xs text-slate-300 font-sans leading-relaxed">
                        {item.detalhe}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Box de Relacionamento Direto */}
              <div className="mt-6 flex items-center gap-3 rounded-xl border border-electric-blue/20 bg-[#040814]/80 p-4 text-xs text-slate-300">
                <ShieldCheck className="h-5 w-5 text-electric-cyan shrink-0" />
                <span>
                  <strong>Atendimento Direto:</strong> Você fala e alinha estratégias diretamente com o Grégory. Nada de intermediários.
                </span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

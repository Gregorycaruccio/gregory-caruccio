import React from "react";
import { Check, ShieldCheck, ArrowRight } from "lucide-react";
import { SITE_CONFIG } from "../config/site-config";

export const ComboGrowthSection: React.FC = () => {
  const combo = SITE_CONFIG.comboGrowth;
  const whatsappComboHref = `https://wa.me/${SITE_CONFIG.telefoneRaw}?text=Ol%C3%A1%20Gr%C3%A9gory!%20Tenho%20interesse%20no%20Combo%20Growth%20(R$%201.600/m%C3%AAs)%20para%20minha%20empresa.%20Como%20funciona%20o%20in%C3%ADcio?`;

  return (
    <section id="combo-growth" className="scroll-mt-28 py-20 md:py-28 bg-white text-slate-900 border-t border-slate-200/80">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        
        {/* Header Direto e Sóbrio */}
        <div className="max-w-3xl mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 border border-blue-200 bg-blue-50 text-blue-700 text-xs px-3.5 py-1.5 rounded-full font-bold uppercase tracking-wider mb-4">
            <span>O Carro-Chefe Mais Contratado</span>
          </div>

          <h2 className="font-heading font-extrabold text-2xl sm:text-4xl lg:text-5xl text-slate-950 tracking-tight leading-tight max-w-3xl">
            Combo Growth: <span className="text-blue-600">tráfego e autoridade unificados.</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-600 font-sans leading-relaxed">
            Em vez de contratar um gestor de anúncios de um lado e um freelancer de posts do outro, o Combo Growth une as duas maiores fontes de receita com um único responsável técnico pelo seu resultado comercial.
          </p>
        </div>

        {/* Card Executivo Principal em Tons de Preto Profundo e Gradiente Azul */}
        <div className="rounded-3xl border border-blue-500/30 bg-gradient-to-br from-[#090D16] via-[#0F172A] to-[#161F37] p-7 sm:p-11 text-white relative overflow-hidden">
          
          {/* Efeito Glow Gradiente Interno */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-24 -right-24 w-96 h-96 bg-blue-600/20 blur-3xl rounded-full"
          />

          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 pb-8 border-b border-white/[0.08] relative z-10">
            <div>
              <span className="text-xs font-mono font-bold text-blue-400 uppercase tracking-wider">
                Assessoria Comercial 360°
              </span>
              <h3 className="font-heading font-extrabold text-2xl sm:text-4xl text-white mt-1.5 tracking-tight">
                {combo.nome}
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-300 font-sans max-w-2xl leading-relaxed">
                {combo.descricao}
              </p>
            </div>

            <div className="rounded-2xl border border-white/[0.1] bg-[#0B0F19]/90 p-6 shrink-0 flex flex-col sm:items-end">
              <span className="text-xs text-slate-400 line-through">
                De R$ 2.000,00 por mês avulso
              </span>
              <div className="flex items-baseline gap-2 mt-1">
                <code className="font-mono text-white text-3xl sm:text-4xl font-extrabold tracking-normal">
                  {combo.preco}
                </code>
                <span className="text-xs text-slate-400 font-medium">
                  {combo.periodo}
                </span>
              </div>
              <span className="mt-2.5 inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 text-xs text-emerald-400 font-semibold">
                <Check className="h-3.5 w-3.5" />
                {combo.economia}
              </span>
            </div>
          </div>

          {/* Entregáveis Organizados em 2 Colunas Limpas no Desktop */}
          <div className="pt-8 relative z-10">
            <h4 className="text-xs font-bold text-slate-300 mb-5 tracking-tight uppercase">
              O que está incluso na assessoria mensal:
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {combo.entregaveis.map((item, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border border-white/[0.06] bg-white/[0.03] p-4.5 flex items-start gap-3.5 hover:bg-white/[0.05] transition-colors"
                >
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-500/20 text-blue-400 mt-0.5 border border-blue-500/30">
                    <Check className="h-3.5 w-3.5" />
                  </div>
                  <div>
                    <h5 className="font-heading font-bold text-sm sm:text-base text-white">
                      {item.titulo}
                    </h5>
                    <p className="mt-1 text-xs sm:text-sm text-slate-300 font-sans leading-relaxed">
                      {item.detalhe}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Rodapé do Combo: CTA e Garantia com Botão Gradiente */}
          <div className="mt-9 pt-6 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4 relative z-10">
            <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-300">
              <ShieldCheck className="h-4 w-4 text-emerald-400 shrink-0" />
              <span>Contrato mensal renovável sem fidelidade burocrática • Atendimento direto com Grégory</span>
            </div>

            <a
              href={whatsappComboHref}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-500 hover:from-blue-500 hover:to-indigo-500 px-7 py-3.5 text-sm font-semibold text-white transition-all duration-150 hover:scale-[1.01] active:scale-[0.99]"
            >
              <span>Contratar o Combo Growth</span>
              <ArrowRight className="h-4 w-4 text-blue-200" />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};

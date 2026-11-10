import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { SITE_CONFIG } from "../config/site-config";

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 md:py-28 bg-[#101725] text-slate-100">
      <div className="mx-auto max-w-4xl px-5 sm:px-8">
        
        {/* Header Direto e Sóbrio */}
        <div className="max-w-2xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs px-3 py-1 rounded-full font-medium mb-4">
            <span>Perguntas Frequentes</span>
          </div>

          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-white tracking-tight leading-tight">
            Dúvidas comuns sobre a assessoria.
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300 font-sans">
            Informações claras sobre investimento em anúncios, rotina de entregas e contratos.
          </p>
        </div>

        {/* Accordions com Micro-bordas e Superfície Sólida */}
        <div className="space-y-3.5">
          {SITE_CONFIG.faq.map((item, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className={`rounded-xl transition-colors duration-150 overflow-hidden ${
                  isOpen
                    ? "border border-blue-500/40 bg-[#0B0F17]"
                    : "border border-white/[0.07] bg-[#0B0F17] hover:border-white/[0.12]"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between p-5 sm:p-6 text-left"
                >
                  <span className="font-heading font-bold text-sm sm:text-base text-white pr-4">
                    {item.pergunta}
                  </span>
                  <div
                    className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-lg transition-transform duration-200 ${
                      isOpen ? "rotate-180 bg-blue-500/20 text-blue-400" : "bg-white/[0.05] text-slate-400"
                    }`}
                  >
                    <ChevronDown className="h-4 w-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-xs sm:text-sm text-slate-300 font-sans leading-relaxed pt-1">
                    {item.resposta}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

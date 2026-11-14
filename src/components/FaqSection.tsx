import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { SITE_CONFIG } from "../config/site-config";

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="scroll-mt-28 py-20 md:py-28 bg-[#FAFBFF] text-slate-900 border-t border-slate-200/80">
      <div className="mx-auto max-w-4xl px-5 sm:px-8">
        
        {/* Header Direto e Sóbrio */}
        <div className="max-w-2xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 border border-blue-200 bg-blue-50 text-blue-700 text-xs px-3.5 py-1.5 rounded-full font-bold uppercase tracking-wider mb-4">
            <span>Perguntas Frequentes</span>
          </div>

          <h2 className="font-heading font-extrabold text-2xl sm:text-4xl lg:text-5xl text-slate-950 tracking-tight leading-tight">
            Dúvidas frequentes sobre <span className="text-blue-600">a assessoria comercial.</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 font-sans">
            Informações claras sobre investimento em anúncios, rotina de entregas, bots e contratos.
          </p>
        </div>

        {/* Accordions com Cards Brancos e Destaque Azul */}
        <div className="space-y-3.5">
          {SITE_CONFIG.faq.map((item, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className={`rounded-2xl transition-all duration-150 overflow-hidden ${
                  isOpen
                    ? "border border-blue-400 bg-white"
                    : "border border-slate-200/90 bg-white hover:border-slate-300"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between p-5 sm:p-6 text-left"
                >
                  <span className="font-heading font-extrabold text-sm sm:text-base text-slate-950 pr-4">
                    {item.pergunta}
                  </span>
                  <div
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-xl transition-transform duration-200 ${
                      isOpen ? "rotate-180 bg-blue-50 text-blue-600" : "bg-slate-100 text-slate-500"
                    }`}
                  >
                    <ChevronDown className="h-4 w-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 border-t border-slate-100 text-sm text-slate-600 font-sans leading-relaxed">
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

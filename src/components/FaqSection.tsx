import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { SITE_CONFIG } from "../config/site-config";

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 md:py-28">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Header Direto Sem Eyebrow */}
        <div className="max-w-2xl mb-12 sm:mb-16">
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
            Perguntas frequentes sobre os contratos.
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300 font-sans">
            Informações objetivas sobre verba de anúncios, entregáveis e formato da assessoria.
          </p>
        </div>

        {/* Accordions */}
        <div className="space-y-3">
          {SITE_CONFIG.faq.map((item, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className="rounded-2xl border border-carbon-border bg-carbon-card overflow-hidden"
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
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-carbon-elevated transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-brand-orange" : "text-slate-400"
                    }`}
                  >
                    <ChevronDown className="h-4 w-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-xs sm:text-sm text-slate-300 font-sans leading-relaxed">
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

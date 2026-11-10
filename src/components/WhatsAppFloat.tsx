import React, { useState } from "react";
import { MessageSquare, X } from "lucide-react";
import { SITE_CONFIG } from "../config/site-config";

export const WhatsAppFloat: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  const whatsappHref = `https://wa.me/${SITE_CONFIG.telefoneRaw}?text=Ol%C3%A1%20Gr%C3%A9gory!%20Vi%20seu%20site%20e%20gostaria%20de%20conversar%20sobre%20as%20solu%C3%A7%C3%B5es%20para%20minha%20empresa.`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-end gap-3">
      {/* Tooltip flutuante limpo */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2.5 rounded-2xl border border-electric-cyan/30 bg-[#060B18]/90 backdrop-blur-md px-4 py-2.5 shadow-glass-card">
          <span className="flex h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_8px_#34D399]" />
          <p className="text-xs font-sans text-slate-200">
            Fale direto com o <strong className="text-white">Grégory</strong>
          </p>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-slate-500 hover:text-slate-300 ml-1"
            aria-label="Fechar aviso"
          >
            <X className="h-3.5 w-3.5" />
          </button>
        </div>
      )}

      {/* Botão de WhatsApp */}
      <a
        href={whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex h-14 w-14 items-center justify-center rounded-2xl bg-[#25D366] text-white shadow-[0_10px_30px_-5px_rgba(37,211,102,0.5)] transition-transform duration-200 hover:scale-105 active:scale-95"
        aria-label="Contato rápido pelo WhatsApp"
      >
        <MessageSquare className="h-7 w-7" />
      </a>
    </div>
  );
};

import React, { useState } from "react";
import { MessageSquare, X } from "lucide-react";
import { SITE_CONFIG } from "../config/site-config";

export const WhatsAppFloat: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  const whatsappHref = `https://wa.me/${SITE_CONFIG.telefoneRaw}?text=Ol%C3%A1%20Gr%C3%A9gory!%20Vi%20seu%20site%20e%20gostaria%20de%20conversar%20sobre%20as%20solu%C3%A7%C3%B5es%20para%20minha%20empresa.`;

  return (
    <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-40 flex items-end gap-3">
      {/* Tooltip flutuante discreto em telas médias/grandes */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 rounded-xl border border-white/[0.08] bg-[#101725] px-3.5 py-2">
          <span className="flex h-2 w-2 rounded-full bg-emerald-400" />
          <p className="text-xs font-sans text-slate-200">
            Fale direto com o <strong className="text-white">Grégory</strong>
          </p>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-slate-400 hover:text-slate-200 ml-1"
            aria-label="Fechar aviso"
          >
            <X className="h-3 w-3" />
          </button>
        </div>
      )}

      {/* Botão de WhatsApp: Compacto p-3 rounded-full no Mobile, h-12 w-12 no Desktop */}
      <a
        href={whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-11 w-11 md:h-12 md:w-12 items-center justify-center rounded-full bg-[#25D366] text-white transition-transform duration-150 hover:scale-105 active:scale-95"
        aria-label="Contato direto no WhatsApp"
      >
        <MessageSquare className="h-5 w-5 md:h-6 md:w-6 fill-white" />
      </a>
    </div>
  );
};

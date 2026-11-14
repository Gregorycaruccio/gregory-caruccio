import React, { useEffect, useState } from "react";

export const ScrollDepthBackground: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScroll = window.scrollY;
          const maxScroll =
            document.documentElement.scrollHeight - window.innerHeight;
          setScrollY(currentScroll);
          setScrollProgress(
            maxScroll > 0 ? (currentScroll / maxScroll) * 100 : 0
          );
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* 1. Barra Fina de Progresso no Topo com Gradiente */}
      <div
        aria-hidden="true"
        className="fixed top-0 left-0 right-0 h-[2.5px] z-50 pointer-events-none bg-slate-200/30"
      >
        <div
          className="h-full bg-gradient-to-r from-blue-600 via-indigo-500 to-cyan-400 transition-all duration-75 ease-out shadow-xs shadow-blue-500/50"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* 2. Canvas Fixo de Profundidade em Camadas Parallax */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-0 overflow-hidden select-none"
      >
        {/* Camada 1: Matriz de Pontos Radial Fina */}
        <div
          className="absolute inset-0 opacity-[0.45]"
          style={{
            backgroundImage: `radial-gradient(circle, rgba(59, 130, 246, 0.22) 1px, transparent 1px)`,
            backgroundSize: "36px 36px",
          }}
        />

        {/* Camada 2: Gradiente de Profundidade */}
        <div className="absolute inset-0 bg-radial from-transparent via-[#FAFBFF]/20 to-[#FAFBFF]/60" />

        {/* Orb Parallax 1: Topo / Hero (Desce suavemente com o scroll) */}
        <div
          className="absolute -top-36 left-1/2 -translate-x-1/2 w-[900px] h-[580px] rounded-full bg-gradient-to-tr from-blue-400/20 via-indigo-400/20 to-cyan-400/15 blur-3xl will-change-transform"
          style={{
            transform: `translate3d(-50%, ${scrollY * 0.15}px, 0)`,
          }}
        />

        {/* Orb Parallax 2: Meio Direita (Portfólio & Combo Growth - Contra-movimento suave) */}
        <div
          className="absolute top-[28%] -right-36 w-[700px] h-[700px] rounded-full bg-gradient-to-bl from-blue-600/15 via-indigo-500/15 to-purple-500/10 blur-3xl will-change-transform"
          style={{
            transform: `translate3d(0, ${-scrollY * 0.08}px, 0)`,
          }}
        />

        {/* Orb Parallax 3: Meio Esquerda (Serviços & Sobre) */}
        <div
          className="absolute top-[56%] -left-36 w-[650px] h-[650px] rounded-full bg-gradient-to-tr from-cyan-400/12 via-blue-500/15 to-indigo-600/12 blur-3xl will-change-transform"
          style={{
            transform: `translate3d(0, ${scrollY * 0.07}px, 0)`,
          }}
        />

        {/* Orb Parallax 4: Inferior (Processo, FAQ & Contato) */}
        <div
          className="absolute top-[80%] right-[8%] w-[800px] h-[750px] rounded-full bg-gradient-to-tl from-indigo-500/15 via-blue-500/12 to-cyan-500/10 blur-3xl will-change-transform"
          style={{
            transform: `translate3d(0, ${-scrollY * 0.05}px, 0)`,
          }}
        />
      </div>
    </>
  );
};

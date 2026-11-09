# 🚀 Site Oficial — Grégory Caruccio
**Estrategista de Crescimento, Tráfego Pago & Performance**

Este projeto foi construído para apresentar seu ecossistema de soluções de marketing, com foco em conversão direta no WhatsApp e fechamento de contratos de alta retenção (especialmente o **Combo Growth de R$ 1.600/mês**).

---

## 🎨 Identidade Visual Implementada
* **Paleta:** Preto Carbono (`#0A0D14`), Grafite Chumbo (`#121620`) e Laranja Alta Performance (`#FF5500` / `#FF6A00`).
* **Tipografia:** `Manrope` (Títulos e Números) e `Inter` (Corpo e Leitura).
* **Consistência:** 100% alinhada com o branding do seu Instagram profissional.

---

## 📂 Arquitetura de Componentes (`src/components/`)
1. **`Navbar.tsx`:** Navegação fixa com efeito blur, indicador pulsante no Combo Growth e botão de WhatsApp.
2. **`Hero.tsx`:** Headline de alto impacto ("A máquina de atração e vendas..."), mockups ao vivo de notificações e métricas.
3. **`EcosystemSection.tsx`:** O método de 4 fases (Atrair, Construir, Converter, Otimizar).
4. **`ComboGrowthSection.tsx`:** O cartão nobre do **Combo Growth (R$ 1.600/mês)** com lista completa de entregáveis e ancoragem de economia.
5. **`ServicesSection.tsx`:** Grade com serviços individuais da tabela comercial (Meta Ads, Google Ads, Tráfego Total, Social Media, Landing Pages e Automações).
6. **`PortfolioSection.tsx`:** Casos reais de campo por nicho (Gastronomia/Fleck, Imobiliário/Quezia, Agro & Pet/Agro Salinas, Saúde & Estética/Renova Face, Comunicação Visual/Win, Veículos/Contini).
7. **`ProcessSection.tsx`:** Linha do tempo em 5 etapas (Diagnóstico ao Tráfego no Ar).
8. **`FaqSection.tsx`:** Accordions com dúvidas frequentes sobre verba de anúncios, contratos e modelo de assessoria.
9. **`ContactSection.tsx`:** Formulário com seletor de segmento e serviço que formata a mensagem e abre o WhatsApp qualificado.
10. **`Footer.tsx`:** Rodapé institucional com links rápidos e créditos.
11. **`WhatsAppFloat.tsx`:** Botão flutuante com pulso e aviso de atendimento.

---

## ⚙️ Como Alterar Informações Rápidas
Todas as copys, preços, telefone do WhatsApp e redes sociais estão centralizados em:
👉 `src/config/site-config.ts`

---

## 💻 Comandos
* **Rodar localmente:** Execute `npm run dev` ou dê um duplo clique em `start-dev.bat`.
* **Gerar build de produção:** `npm run build`
* **Deploy na Vercel:** Basta conectar o repositório ou rodar `vercel` na pasta.

// =========================================================================
// CONFIGURAÇÃO GERAL DO SITE — GRÉGORY CARUCCIO
// =========================================================================

export const SITE_CONFIG = {
  // Informações Pessoais & Contato
  nome: "Grégory Caruccio",
  cargo: "Estrategista de Crescimento, Tráfego Pago & Performance",
  cidade: "Litoral Norte - RS & Atendimento Nacional",
  email: "contato@gregorycaruccio.com.br",
  
  // WhatsApp Oficial (Formato DDI + DDD + Número)
  telefoneRaw: "5551980552320", 
  telefoneFormatado: "(51) 98055-2320",
  instagramUrl: "https://instagram.com/gregorycaruccio",
  
  // Hero Section
  hero: {
    tituloPrincipal: "Compradores reais no seu WhatsApp.",
    subtitulo:
      "Tráfego pago hiperlocal no Meta Ads e Google, autoridade visual no Instagram e páginas rápidas de conversão para transformar cliques em clientes no balcão da sua empresa.",
    ctaPrincipal: "Conversar no WhatsApp",
    ctaSecundario: "Ver planos e combos",
    metricas: [
      { valor: "+R$ 1.6M", label: "Gerados em vendas locais" },
      { valor: "85%+", label: "Margem bruta média dos clientes" },
      { valor: "+15", label: "Nichos no campo de batalha" },
      { valor: "98%", label: "Retenção em contratos recorrentes" },
    ],
  },

  // Método: Ecossistema de 4 Fases
  ecossistema: [
    {
      fase: "Atrair",
      subtitulo: "Tráfego Pago & Intenção de Compra",
      descricao:
        "Anúncios no Meta Ads e Google Ads direcionados para quem tem poder de compra e urgência na sua cidade. Programação por horários de pico para não queimar verba quando a loja está fechada.",
      canais: ["Meta Ads (Instagram e Facebook)", "Google Ads (Rede de Pesquisa)", "Google Meu Negócio & Maps"],
    },
    {
      fase: "Construir",
      subtitulo: "Social Media & Autoridade Real",
      descricao:
        "O feed da empresa deixa de ser um panfleto abandonado e se torna uma vitrine profissional baseada em 4 pilares: educar, conectar, vender e entreter. Imagens e vídeos autênticos da sua rotina.",
      canais: ["Carrosséis de posicionamento", "Reels nativos gravados no local", "Arquétipo de marca consistente"],
    },
    {
      fase: "Converter",
      subtitulo: "Landing Pages & Triagem no WhatsApp",
      descricao:
        "Páginas com carregamento instantâneo e scripts de atendimento que eliminam curiosos antes do atendente responder, entregando o lead pronto para fechar.",
      canais: ["Landing Pages em React e Tailwind", "Triagem de leads qualificados", "Link direto de conversão"],
    },
    {
      fase: "Otimizar",
      subtitulo: "Métricas de Caixa & Retorno Real",
      descricao:
        "Acompanhamento semanal de quantas vendas foram fechadas e qual o custo por comprador real. Nada de relatórios vazios com métricas de curtidas ou seguidores.",
      canais: ["Relatório semanal de fechamentos", "Testes contínuos de criativos", "Otimização de orçamento por ROI"],
    },
  ],

  // O Carro-Chefe (Combo Growth)
  comboGrowth: {
    nome: "Combo Growth",
    subtitulo: "Assessoria Completa de Crescimento & Vendas",
    preco: "R$ 1.600,00",
    periodo: "/ mês",
    destaque: "Recomendado",
    economia: "Economia de R$ 400 em relação à contratação avulsa",
    descricao:
      "A solução integrada para o empresário que quer vender mais todos os dias sem perder horas da semana tentando gerenciar marketing sozinho.",
    entregaveis: [
      {
        titulo: "Gestão Completa de Meta Ads",
        detalhe: "Campanhas contínuas no Instagram e Facebook com foco exclusivo em mensagens no WhatsApp e Direct.",
      },
      {
        titulo: "Social Media de Alta Autoridade",
        detalhe: "8 Posts estratégicos em carrossel + 4 roteiros e edição de Reels dinâmicos por mês.",
      },
      {
        titulo: "Otimização de Atendimento no WhatsApp",
        detalhe: "Alinhamento das mensagens rápidas, scripts de quebra de objeção e filtragem de curiosos.",
      },
      {
        titulo: "Programação Inteligente (Dayparting)",
        detalhe: "Seus anúncios rodam exatamente nos dias e horários em que sua equipe está disponível para atender.",
      },
      {
        titulo: "Relatório Executivo Semanal de Caixa",
        detalhe: "Mensuração de leads reais gerados, custo por conversa e feedback direto de fechamentos.",
      },
    ],
    cta: "Contratar o Combo Growth",
  },

  // Grade Completa de Serviços Individuais
  servicos: [
    {
      id: "meta-ads",
      categoria: "Tráfego Pago",
      nome: "Meta Ads Direto (WhatsApp)",
      preco: "R$ 850,00",
      periodo: "/ mês",
      descricao:
        "Campanhas hipersegmentadas no Instagram e Facebook focadas em gerar fluxo previsível de mensagens comerciais no seu balcão.",
      features: [
        "Foco exclusivo em conversão no WhatsApp",
        "Criação e testes de criativos (Hook, Body, CTA)",
        "Dayparting inteligente nos horários de funcionamento",
        "Exclusão de públicos desqualificados e curiosos",
        "Relatório semanal de custo por lead",
      ],
    },
    {
      id: "google-ads",
      categoria: "Tráfego Pago",
      nome: "Google Ads Alta Intenção",
      preco: "R$ 850,00",
      periodo: "/ mês",
      descricao:
        "Captura o cliente no momento exato em que ele busca pelo seu serviço ou produto na sua cidade.",
      features: [
        "Anúncios na Rede de Pesquisa do Google",
        "Otimização e integração com Google Meu Negócio e Maps",
        "Negativação diária de termos irrelevantes",
        "Métricas de chamadas, rotas e cliques no WhatsApp",
        "Ideal para imobiliárias, oficinas, clínicas e serviços urgentes",
      ],
    },
    {
      id: "combo-trafego",
      categoria: "Tráfego Pago",
      nome: "Combo Tráfego Total (Meta + Google)",
      preco: "R$ 1.300,00",
      periodo: "/ mês",
      destaque: "Economia de R$ 400",
      descricao:
        "Cerco completo: sua empresa aparece para quem é lembrado no feed do Instagram e para quem procura ativamente no Google.",
      features: [
        "Gestão unificada Meta Ads + Google Ads",
        "Estratégia integrada de reconhecimento e conversão",
        "Relatório unificado de retorno consolidado",
        "Otimização cruzada de públicos e termos de busca",
      ],
    },
    {
      id: "social-autoridade",
      categoria: "Social Media",
      nome: "Social Media de Autoridade",
      preco: "R$ 950,00",
      periodo: "/ mês",
      descricao:
        "Conteúdo profissional para posicionar sua empresa como a principal referência da sua região.",
      features: [
        "8 Posts em carrossel e estáticos de alto padrão",
        "4 Roteiros e edição de Reels com legendas dinâmicas",
        "Linha editorial baseada em 4 pilares: educar, conectar, vender e entreter",
        "Design sóbrio e profissional sem templates genéricos",
        "Otimização de biografia, destaques e canais de contato",
      ],
    },
    {
      id: "landing-page",
      categoria: "Desenvolvimento Web",
      nome: "Landing Page de Alta Conversão",
      preco: "R$ 1.200 a R$ 1.500",
      periodo: "peça única",
      descricao:
        "Página de alto padrão com carregamento veloz em React e Tailwind, desenhada exclusivamente para transformar cliques em contatos comerciais.",
      features: [
        "Carregamento em menos de 1 segundo (Mobile-first)",
        "Copy persuasiva focada em agendamento no WhatsApp",
        "Instalação e verificação do Meta Pixel e Google Analytics",
        "Configuração de domínio próprio e hospedagem de alta disponibilidade",
        "Sem taxas mensais de plataformas proprietárias",
      ],
    },
    {
      id: "sistemas-especiais",
      categoria: "Sistemas & Automações",
      nome: "Catálogos & Automação n8n",
      preco: "Sob Consulta",
      periodo: "setup + manutenção",
      descricao:
        "Sistemas próprios para livrar seu negócio de comissões abusivas de aplicativos terceiros ou triar leads no WhatsApp.",
      features: [
        "Cardápios digitais próprios sem cobrança de taxas de pedidos",
        "Catálogos interativos de centenas de produtos para WhatsApp",
        "Fluxos de triagem e qualificação de clientes no WhatsApp",
        "Integração direta com o balcão de vendas",
      ],
    },
  ],

  // Casos de Campo & Experiência por Nicho
  nichos: [
    {
      nicho: "Gastronomia & Delivery",
      exemplo: "Fleck Pastel",
      foco: "Vídeos curtos de produto com áudio ambiente e campanhas noturnas com Dayparting ligando apenas nos horários de funcionamento.",
      resultado: "Picos de 25+ pedidos por noite sem pagar comissões de aplicativos de entrega.",
    },
    {
      nicho: "Mercado Imobiliário",
      exemplo: "Quezia Auler Imóveis",
      foco: "Captação de compradores qualificados da Região Metropolitana e Serra buscando casas e terrenos no Litoral.",
      resultado: "Filtro prévio de renda e leads com interesse real prontos para visitação.",
    },
    {
      nicho: "Agropecuária & Pet Shop",
      exemplo: "Agro Salinas",
      foco: "Digitalização do estoque de balcão com catálogo interativo e comunicação baseada no arquétipo 'O Vizinho Especialista'.",
      resultado: "Vendas diretas de rações, medicamentos e acessórios pet pelo WhatsApp.",
    },
    {
      nicho: "Saúde & Estética Facial",
      exemplo: "Renova Face & Espaço Pró Corpo",
      foco: "Páginas profissionais com apresentação clínica clara de procedimentos, quebra de dúvidas e agendamento direto.",
      resultado: "Agenda de procedimentos estéticos e sessões de pilates preenchidas com previsibilidade.",
    },
    {
      nicho: "Comunicação Visual & B2B",
      exemplo: "Win Comunicação Visual",
      foco: "Fachadas comerciais em ACM e letra caixa para lojistas e empresários do Litoral Norte.",
      resultado: "Agendamentos de medição técnica no local com donos de imóveis comerciais.",
    },
    {
      nicho: "Revenda de Veículos",
      exemplo: "Alex Contini Multimarcas",
      foco: "O estoque dita os anúncios: fotos e vídeos reais do pátio com mensagem trazendo o modelo do veículo pré-preenchido.",
      resultado: "Giro rápido de estoque seminovo e redução do custo por lead interessado em financiamento.",
    },
  ],

  // O Processo de Trabalho em 5 Etapas
  processo: [
    {
      titulo: "Diagnóstico Inicial",
      prazo: "Primeiro dia",
      descricao: "Analisamos o histórico de vendas, os concorrentes locais e onde há perda de oportunidades de contato.",
    },
    {
      titulo: "Definição Estratégica",
      prazo: "Segundo dia",
      descricao: "Estabelecemos as ofertas de entrada, o público-alvo prioritário e o tom visual adequado para a marca.",
    },
    {
      titulo: "Setup & Produção",
      prazo: "Dias 3 a 5",
      descricao: "Configuração técnica das contas de anúncio, produção dos criativos iniciais e alinhamento do canal de atendimento.",
    },
    {
      titulo: "Campanhas no Ar",
      prazo: "Até 48 horas após setup",
      descricao: "Ativação dos anúncios nos horários comerciais de pico, monitorando a entrada dos primeiros contatos no WhatsApp.",
    },
    {
      titulo: "Acompanhamento Contínuo",
      prazo: "Semanal",
      descricao: "Substituição de criativos desgastados, ampliação do que gera retorno financeiro e alinhamento direto com o responsável.",
    },
  ],

  // Perguntas Frequentes (FAQ)
  faq: [
    {
      pergunta: "Por que o Combo Growth de R$ 1.600 é mais vantajoso que contratar apenas tráfego?",
      resposta:
        "O tráfego pago atrai as pessoas até o perfil da empresa. Se o perfil estiver sem publicações recentes ou com aparência amadora, o visitante desconfia e não entra em contato. O Combo une a atração ativa dos anúncios com a autoridade visual de um perfil organizado, completando o ciclo de decisão do cliente.",
    },
    {
      pergunta: "O valor investido nos anúncios está incluso na mensalidade?",
      resposta:
        "Não. A mensalidade cobre toda a estratégia, produção de criativos, configuração técnica, programação de horários e acompanhamento. O valor pago aos anúncios é pago diretamente por você às plataformas (Meta e Google) via cartão ou boleto.",
    },
    {
      pergunta: "Posso contratar apenas o serviço de Tráfego Pago ou apenas a Landing Page?",
      resposta:
        "Sim. Caso seu perfil já esteja ativo ou sua empresa precise apenas de uma Landing Page rápida (R$ 1.200 a R$ 1.500 peça única), todos os serviços podem ser contratados individualmente.",
    },
    {
      pergunta: "Em quanto tempo os contatos começam a chegar no WhatsApp?",
      resposta:
        "Assim que os anúncios são aprovados pelas plataformas (geralmente entre 24 e 48 horas após a conclusão do setup), as primeiras mensagens começam a chegar. Os primeiros 7 dias servem para calibrar o custo por conversa e refinar a segmentação.",
    },
    {
      pergunta: "O atendimento é exclusivo para o Litoral Norte do Rio Grande do Sul?",
      resposta:
        "Realizamos atendimento presencial no Litoral Norte (Cidreira, Tramandaí, Imbé e Osório) e atendemos empresas em todo o país de forma 100% remota com o mesmo acompanhamento semanal.",
    },
  ],
};

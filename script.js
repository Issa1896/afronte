const $ = (sel) => document.querySelector(sel);

const i18n = {
  pt: {
    themeToggle: "Tema",
    menuAbout: "Sobre",
    menuSolution: "Solução",
    menuHow: "Como funciona",
    menuKit: "Kit 01",
    menuBenefits: "Benefícios",
    menuFaq: "FAQ",
    menuContact: "Contato",

    badge: "Educação Étnico-Racial o ano todo • Lei 10.639/03",
    heroTitle2:
      "Implementação contínua da Lei 10.639/03 com formação prática e evidências reais.",
    heroSubtitle2:
      "Microformações aplicáveis, kit pedagógico estruturado e painel de acompanhamento para escolas e redes.",
    primaryCta2: "Conhecer a solução",
    kitCtaTop: "Abrir Kit 01 (PDF)",

    trust1Title: "Foco em prática",
    trust1Desc: "menos teoria solta",
    trust2Title: "Acompanhamento",
    trust2Desc: "evidências mensais",
    trust3Title: "Território",
    trust3Desc: "conexão com comunidades",

    aboutTitle: "Sobre o Horizonte Afro",
    aboutLead:
      "A educação étnico-racial não pode ser evento: precisa virar rotina. O Horizonte Afro apoia docentes e gestores com formação prática, materiais aplicáveis e acompanhamento.",
    missionTitle: "Missão",
    missionDesc:
      "Ajudar escolas e redes a implementarem a Lei 10.639/03 de forma contínua, segura e mensurável.",
    visionTitle: "Visão",
    visionDesc:
      "Currículos vivos, conectados ao território e sustentados por práticas pedagógicas consistentes.",

    solutionTitle: "O que oferecemos",
    solutionLead2:
      "Um conjunto de módulos pensados para o cotidiano escolar — do professor à gestão.",
    offer1Title: "Microformações",
    offer1Desc: "Aulas curtas, objetivas e diretamente aplicáveis em sala.",
    offer2Title: "Kit pedagógico",
    offer2Desc: "Sequências didáticas, atividades e checklists para adaptar.",
    offer3Title: "Curadoria do território",
    offer3Desc: "Conteúdos conectados às comunidades e à realidade local.",
    offer4Title: "Painel de evidências",
    offer4Desc:
      "Acompanhamento mensal: trilhas, certificados, portfólios e relatórios por escola/rede.",

    howTitle: "Como funciona",
    how1Title: "Diagnóstico",
    how1Desc: "Entendemos o contexto e os objetivos da escola/rede.",
    how2Title: "Trilhas e aplicação",
    how2Desc: "Microformações + kit para aplicar e adaptar com segurança.",
    how3Title: "Evidências e evolução",
    how3Desc: "Relatórios mensais para acompanhar avanços e lacunas.",

    kitTitle: "Kit Pedagógico 01",
    kitLead:
      "Material estruturado para aplicação prática da Lei 10.639/03 em sala de aula.",
    kitCardTitle: "Horizonte Afro – Kit 01 (PDF)",
    kitCardDesc:
      "Documento institucional com proposta pedagógica, estrutura metodológica e modelo de aplicação.",
    kitOpen: "Abrir PDF em nova aba",

    benefitsTitle: "Benefícios",
    benefitsLead:
      "Resultado esperado: prática contínua, menor retrabalho e maior segurança pedagógica.",
    ben1Title: "Para docentes",
    ben1Desc: "Roteiros aplicáveis, menos improviso, mais confiança.",
    ben2Title: "Para gestão",
    ben2Desc: "Evidências e indicadores para acompanhar implementação real.",
    ben3Title: "Para estudantes",
    ben3Desc: "Currículo mais representativo e conectado ao território.",

    faqTitle: "Perguntas frequentes",
    faq1Q: "Isso substitui formação da rede?",
    faq1A:
      "Não. Complementa com prática aplicável e acompanhamento contínuo, com foco em sala de aula e evidências.",
    faq2Q: "Funciona para escolas pequenas?",
    faq2A:
      "Sim. O produto é modular: dá pra começar pequeno e expandir conforme adesão.",
    faq3Q: "O kit é só para um nível de ensino?",
    faq3A:
      "Não. A ideia é adaptar por etapa/ano e contexto territorial, com apoio de roteiros e checklists.",

    contactTitle: "Contato",
    contactLead:
      "Quer conversar, pilotar ou apoiar?",
    contactCardTitle: "Fale com a equipe",
    contactCardDesc:
      "Envie uma mensagem e retornaremos o quanto antes.",
    contactNote: "Troca esses contatos pelos teus reais quando for publicar.",
    contactCtaTitle: "Baixe o Kit 01",
    contactCtaDesc:
      "Quer ver a proposta completa? Abra o PDF do Kit 01 em uma nova aba.",
    footerDesc: "Site institucional do Horizonte Afro.",
  },

  en: {
    themeToggle: "Theme",
    menuAbout: "About",
    menuSolution: "Solution",
    menuHow: "How it works",
    menuKit: "Kit 01",
    menuBenefits: "Benefits",
    menuFaq: "FAQ",
    menuContact: "Contact",

    badge: "Ethnic-Racial Education year-round • Law 10.639/03",
    heroTitle2:
      "Continuous implementation of Law 10.639/03 with practical training and real evidence.",
    heroSubtitle2:
      "Actionable micro-trainings, a structured teaching kit, and a monitoring dashboard for schools and networks.",
    primaryCta2: "Explore the solution",
    kitCtaTop: "Open Kit 01 (PDF)",

    trust1Title: "Practice-first",
    trust1Desc: "less loose theory",
    trust2Title: "Monitoring",
    trust2Desc: "monthly evidence",
    trust3Title: "Territory",
    trust3Desc: "community connection",

    aboutTitle: "About Horizonte Afro",
    aboutLead:
      "Ethnic-racial education can’t be an event — it must become routine. Horizonte Afro supports teachers and managers with practical training, actionable materials, and follow-up.",
    missionTitle: "Mission",
    missionDesc:
      "Help schools and networks implement Law 10.639/03 continuously, safely, and measurably.",
    visionTitle: "Vision",
    visionDesc:
      "Living curricula connected to territory, sustained by consistent pedagogical practice.",

    solutionTitle: "What we offer",
    solutionLead2:
      "A set of modules designed for everyday school life — from teachers to leadership.",
    offer1Title: "Micro-trainings",
    offer1Desc: "Short, objective sessions directly applicable in class.",
    offer2Title: "Teaching kit",
    offer2Desc: "Sequences, activities, and checklists you can adapt.",
    offer3Title: "Territory-based curation",
    offer3Desc: "Content connected to communities and local reality.",
    offer4Title: "Evidence dashboard",
    offer4Desc:
      "Monthly follow-up: tracks, certificates, portfolios, and reports by school/network.",

    howTitle: "How it works",
    how1Title: "Diagnosis",
    how1Desc: "We understand the school/network context and goals.",
    how2Title: "Tracks and implementation",
    how2Desc: "Micro-trainings + kit to apply and adapt with confidence.",
    how3Title: "Evidence and iteration",
    how3Desc: "Monthly reports to track progress and gaps.",

    kitTitle: "Teaching Kit 01",
    kitLead:
      "Structured material for practical classroom implementation of Law 10.639/03.",
    kitCardTitle: "Horizonte Afro – Kit 01 (PDF)",
    kitCardDesc:
      "Institutional document with pedagogical proposal, methodology structure and implementation model.",
    kitOpen: "Open PDF in a new tab",

    benefitsTitle: "Benefits",
    benefitsLead:
      "Expected outcome: continuous practice, less rework, and greater pedagogical confidence.",
    ben1Title: "For teachers",
    ben1Desc: "Actionable scripts, less improvisation, more confidence.",
    ben2Title: "For management",
    ben2Desc: "Evidence and indicators to track real implementation.",
    ben3Title: "For students",
    ben3Desc: "More representative curriculum connected to territory.",

    faqTitle: "Frequently asked questions",
    faq1Q: "Does this replace district training?",
    faq1A:
      "No. It complements with actionable practice and continuous follow-up, focused on classroom reality and evidence.",
    faq2Q: "Does it work for small schools?",
    faq2A:
      "Yes. The product is modular: you can start small and expand as adoption grows.",
    faq3Q: "Is the kit only for one grade level?",
    faq3A:
      "No. It’s designed to be adaptable by stage/grade and local context, supported by scripts and checklists.",

    contactTitle: "Contact",
    contactLead:
      "Want to talk, pilot, or support?",
    contactCardTitle: "Talk to the team",
    contactCardDesc:
      "Send us a message and we’ll reply soon.",
    contactNote: "Replace these contacts with real ones when publishing.",
    contactCtaTitle: "Download Kit 01",
    contactCtaDesc: "Want the full proposal? Open the Kit 01 PDF in a new tab.",
    footerDesc: "Horizonte Afro institutional website.",
  },

  fr: {
    themeToggle: "Thème",
    menuAbout: "À propos",
    menuSolution: "Solution",
    menuHow: "Fonctionnement",
    menuKit: "Kit 01",
    menuBenefits: "Bénéfices",
    menuFaq: "FAQ",
    menuContact: "Contact",

    badge: "Éducation ethno-raciale toute l’année • Loi 10.639/03",
    heroTitle2:
      "Mise en œuvre continue de la loi 10.639/03 avec formation pratique et preuves réelles.",
    heroSubtitle2:
      "Micro-formations applicables, kit pédagogique structuré et tableau de suivi pour écoles et réseaux.",
    primaryCta2: "Découvrir la solution",
    kitCtaTop: "Ouvrir le Kit 01 (PDF)",

    trust1Title: "Pratique d’abord",
    trust1Desc: "moins de théorie flottante",
    trust2Title: "Suivi",
    trust2Desc: "preuves mensuelles",
    trust3Title: "Territoire",
    trust3Desc: "lien avec les communautés",

    aboutTitle: "À propos de Horizonte Afro",
    aboutLead:
      "L’éducation ethno-raciale ne peut pas être un événement : elle doit devenir une routine. Horizonte Afro soutient enseignant·e·s et directions avec formation pratique, ressources actionnables et suivi.",
    missionTitle: "Mission",
    missionDesc:
      "Aider écoles et réseaux à mettre en œuvre la loi 10.639/03 de manière continue, sûre et mesurable.",
    visionTitle: "Vision",
    visionDesc:
      "Des curricula vivants, liés au territoire, portés par des pratiques pédagogiques cohérentes.",

    solutionTitle: "Ce que nous proposons",
    solutionLead2:
      "Un ensemble de modules pensés pour le quotidien scolaire — des enseignants à la direction.",
    offer1Title: "Micro-formations",
    offer1Desc: "Courtes, claires et directement applicables en classe.",
    offer2Title: "Kit pédagogique",
    offer2Desc: "Séquences, activités et checklists adaptables.",
    offer3Title: "Curation territoriale",
    offer3Desc: "Contenus reliés aux communautés et au contexte local.",
    offer4Title: "Tableau de preuves",
    offer4Desc:
      "Suivi mensuel : parcours, certificats, portfolios et rapports par école/réseau.",

    howTitle: "Comment ça marche",
    how1Title: "Diagnostic",
    how1Desc: "On comprend le contexte et les objectifs de l’école/réseau.",
    how2Title: "Parcours et mise en œuvre",
    how2Desc: "Micro-formations + kit pour appliquer et adapter en confiance.",
    how3Title: "Preuves et amélioration",
    how3Desc: "Rapports mensuels pour suivre progrès et lacunes.",

    kitTitle: "Kit pédagogique 01",
    kitLead:
      "Matériel structuré pour l’application pratique en classe de la loi 10.639/03.",
    kitCardTitle: "Horizonte Afro – Kit 01 (PDF)",
    kitCardDesc:
      "Document institutionnel avec proposition pédagogique, structure méthodologique et modèle de mise en œuvre.",
    kitOpen: "Ouvrir le PDF dans un nouvel onglet",

    benefitsTitle: "Bénéfices",
    benefitsLead:
      "Résultat attendu : pratique continue, moins de retours en arrière et plus de confiance pédagogique.",
    ben1Title: "Pour les enseignant·e·s",
    ben1Desc: "Scripts actionnables, moins d’impro, plus de confiance.",
    ben2Title: "Pour la direction",
    ben2Desc: "Preuves et indicateurs pour suivre l’implémentation réelle.",
    ben3Title: "Pour les élèves",
    ben3Desc: "Curriculum plus représentatif et connecté au territoire.",

    faqTitle: "Questions fréquentes",
    faq1Q: "Est-ce que ça remplace la formation du réseau ?",
    faq1A:
      "Non. Ça complète avec de la pratique actionnable et un suivi continu, axés sur la classe et les preuves.",
    faq2Q: "Ça marche pour les petites écoles ?",
    faq2A:
      "Oui. Le produit est modulaire : on peut commencer petit et étendre ensuite.",
    faq3Q: "Le kit est-il limité à un niveau scolaire ?",
    faq3A:
      "Non. Il est conçu pour être adaptable selon le niveau et le contexte local, avec scripts et checklists.",

    contactTitle: "Contact",
    contactLead:
      "Envie d’échanger, de piloter ou de soutenir ?",
    contactCardTitle: "Parler à l’équipe",
    contactCardDesc:
      "Envoie un message et on répond vite.",
    contactNote: "Remplace ces contacts par les vrais au moment de publier.",
    contactCtaTitle: "Télécharger le Kit 01",
    contactCtaDesc:
      "Tu veux la proposition complète ? Ouvre le PDF du Kit 01 dans un nouvel onglet.",
    footerDesc: "Site institutionnel de Horizonte Afro.",
  },

  es: {
    themeToggle: "Tema",
    menuAbout: "Sobre",
    menuSolution: "Solución",
    menuHow: "Cómo funciona",
    menuKit: "Kit 01",
    menuBenefits: "Beneficios",
    menuFaq: "FAQ",
    menuContact: "Contacto",

    badge: "Educación Étnico-Racial todo el año • Ley 10.639/03",
    heroTitle2:
      "Implementación continua de la Ley 10.639/03 con formación práctica y evidencias reales.",
    heroSubtitle2:
      "Microformaciones aplicables, kit pedagógico estructurado y panel de seguimiento para escuelas y redes.",
    primaryCta2: "Conocer la solución",
    kitCtaTop: "Abrir Kit 01 (PDF)",

    trust1Title: "Práctica primero",
    trust1Desc: "menos teoría suelta",
    trust2Title: "Seguimiento",
    trust2Desc: "evidencias mensuales",
    trust3Title: "Territorio",
    trust3Desc: "conexión con comunidades",

    aboutTitle: "Sobre Horizonte Afro",
    aboutLead:
      "La educación étnico-racial no puede ser un evento: debe volverse rutina. Horizonte Afro apoya a docentes y gestión con formación práctica, materiales aplicables y seguimiento.",
    missionTitle: "Misión",
    missionDesc:
      "Ayudar a escuelas y redes a implementar la Ley 10.639/03 de forma continua, segura y medible.",
    visionTitle: "Visión",
    visionDesc:
      "Currículos vivos, conectados al territorio y sostenidos por prácticas pedagógicas consistentes.",

    solutionTitle: "Qué ofrecemos",
    solutionLead2:
      "Un conjunto de módulos pensados para la vida escolar diaria — del docente a la gestión.",
    offer1Title: "Microformaciones",
    offer1Desc: "Clases cortas, objetivas y aplicables en el aula.",
    offer2Title: "Kit pedagógico",
    offer2Desc: "Secuencias, actividades y checklists para adaptar.",
    offer3Title: "Curaduría del territorio",
    offer3Desc: "Contenidos conectados con comunidades y realidad local.",
    offer4Title: "Panel de evidencias",
    offer4Desc:
      "Seguimiento mensual: rutas, certificados, portafolios e informes por escuela/red.",

    howTitle: "Cómo funciona",
    how1Title: "Diagnóstico",
    how1Desc: "Entendemos el contexto y los objetivos de la escuela/red.",
    how2Title: "Rutas y aplicación",
    how2Desc: "Microformaciones + kit para aplicar y adaptar con seguridad.",
    how3Title: "Evidencias y mejora",
    how3Desc: "Informes mensuales para seguir avances y brechas.",

    kitTitle: "Kit pedagógico 01",
    kitLead:
      "Material estructurado para aplicación práctica en el aula de la Ley 10.639/03.",
    kitCardTitle: "Horizonte Afro – Kit 01 (PDF)",
    kitCardDesc:
      "Documento institucional con propuesta pedagógica, estructura metodológica y modelo de implementación.",
    kitOpen: "Abrir PDF en una pestaña nueva",

    benefitsTitle: "Beneficios",
    benefitsLead:
      "Resultado esperado: práctica continua, menos retrabajo y mayor seguridad pedagógica.",
    ben1Title: "Para docentes",
    ben1Desc: "Guías aplicables, menos improvisación, más confianza.",
    ben2Title: "Para gestión",
    ben2Desc: "Evidencias e indicadores para seguir implementación real.",
    ben3Title: "Para estudiantes",
    ben3Desc: "Currículo más representativo y conectado al territorio.",

    faqTitle: "Preguntas frecuentes",
    faq1Q: "¿Esto reemplaza la formación de la red?",
    faq1A:
      "No. Complementa con práctica aplicable y seguimiento continuo, con foco en aula y evidencias.",
    faq2Q: "¿Funciona para escuelas pequeñas?",
    faq2A:
      "Sí. El producto es modular: puedes empezar pequeño y expandir según adopción.",
    faq3Q: "¿El kit es solo para un nivel de enseñanza?",
    faq3A:
      "No. Está diseñado para adaptarse por etapa y contexto local, con guías y checklists.",

    contactTitle: "Contacto",
    contactLead:
      "¿Quieres conversar, pilotar o apoyar?",
    contactCardTitle: "Habla con el equipo",
    contactCardDesc:
      "Envíanos un mensaje y responderemos pronto.",
    contactNote: "Cambia estos contactos por los reales al publicar.",
    contactCtaTitle: "Descargar Kit 01",
    contactCtaDesc:
      "¿Quieres la propuesta completa? Abre el PDF del Kit 01 en una pestaña nueva.",
    footerDesc: "Sitio institucional de Horizonte Afro.",
  },
};

function applyTranslations(lang) {
  const dict = i18n[lang] || i18n.pt;

  const langMap = { pt: "pt-BR", en: "en", fr: "fr", es: "es" };
  document.documentElement.lang = langMap[lang] || "pt-BR";

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key]) el.textContent = dict[key];
  });

  const titles = {
    pt: "Horizonte Afro — Institucional",
    en: "Horizonte Afro — Institutional",
    fr: "Horizonte Afro — Institutionnel",
    es: "Horizonte Afro — Institucional",
  };
  document.title = titles[lang] || titles.pt;
}

function setTheme(theme) {
  const t = theme === "dark" ? "dark" : "light";
  document.documentElement.setAttribute("data-theme", t);
  localStorage.setItem("theme", t);
}

function toggleTheme() {
  const current = document.documentElement.getAttribute("data-theme") || "light";
  setTheme(current === "light" ? "dark" : "light");
}

function initTheme() {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) return setTheme(savedTheme);

  const prefersDark =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;

  setTheme(prefersDark ? "dark" : "light");
}

function initLanguage() {
  const langSelect = $("#langSelect");
  const savedLang = localStorage.getItem("lang") || "pt";

  if (langSelect) {
    langSelect.value = savedLang;
    langSelect.addEventListener("change", (e) => {
      const lang = e.target.value;
      localStorage.setItem("lang", lang);
      applyTranslations(lang);
    });
  }

  applyTranslations(savedLang);
}

function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener("click", (e) => {
      const href = a.getAttribute("href");
      if (!href || href === "#") return;

      const target = document.querySelector(href);
      if (!target) return;

      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      history.pushState(null, "", href);
    });
  });
}

function initMobileMenu() {
  const btn = $("#hamburger");
  const menu = $("#mobileMenu");
  if (!btn || !menu) return;

  function closeMenu() {
    menu.hidden = true;
    btn.setAttribute("aria-expanded", "false");
  }

  function openMenu() {
    menu.hidden = false;
    btn.setAttribute("aria-expanded", "true");
  }

  btn.addEventListener("click", () => {
    const isOpen = btn.getAttribute("aria-expanded") === "true";
    if (isOpen) closeMenu();
    else openMenu();
  });

  menu.addEventListener("click", (e) => {
    const link = e.target.closest("a");
    if (link) closeMenu();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeMenu();
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 980) closeMenu();
  });
}

function init() {
  initTheme();
  $("#themeToggle")?.addEventListener("click", toggleTheme);

  initLanguage();
  initSmoothScroll();
  initMobileMenu();
}

document.addEventListener("DOMContentLoaded", init);
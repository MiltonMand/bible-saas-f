// Plan Configuration
const PlanConfig = {
  free: {
    name: "Free",
    dailyLimit: 2,
    features: {
      basicInsights: true,
      advancedInsights: false,
      conceptMaps: false,
      fullHistory: false,
      export: false,
      priorityProcessing: false,
    },
  },
  premium: {
    name: "Premium",
    dailyLimit: 30,
    features: {
      basicInsights: true,
      advancedInsights: true,
      conceptMaps: true,
      fullHistory: true,
      export: false,
      priorityProcessing: false,
    },
  },
  pro: {
    name: "Pro",
    dailyLimit: Infinity,
    features: {
      basicInsights: true,
      advancedInsights: true,
      conceptMaps: true,
      fullHistory: true,
      export: true,
      priorityProcessing: true,
    },
  },
};

// Mock AI responses for different analysis types
const MockAIResponses = {
  quick: {
    summary:
      "God loves the world so much that He gave His only Son, so everyone who believes in Him will have eternal life.",
    context:
      "Jesus said this to Nicodemus at night, explaining God's amazing love and the gift of eternal life through faith.",
    practicalExample:
      "Show God's love to others by being kind and sharing hope with those around you.",
    personalReflection:
      "God's love for me is unconditional and eternal, which gives me peace and purpose every day.",
    test: [
      {
        question: "What is the main message of John 3:16?",
        options: [
          "God's love",
          "Eternal punishment",
          "Religious rules",
          "Worldly success",
        ],
        correctAnswer: "a",
      },
      {
        question: "What do we need to do to have eternal life?",
        options: [
          "Believe in Jesus",
          "Follow many rules",
          "Be very rich",
          "Never make mistakes",
        ],
        correctAnswer: "a",
      },
    ],
  },
  deep: {
    summary:
      "God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life. This verse encapsulates the core message of Christianity: God's sacrificial love and the promise of eternal life through faith in Jesus Christ.",
    context:
      "John 3:16 appears in the Gospel of John, chapter 3, during Jesus' conversation with Nicodemus, a Pharisee who came to Jesus at night. This verse is part of Jesus' explanation about being 'born again' and represents one of the most famous and quoted verses in the entire Bible, summarizing the gospel message.",
    practicalExample:
      "This verse encourages us to demonstrate sacrificial love in our daily lives, just as God demonstrated His love through Jesus. We can apply this by showing unconditional love to others, sharing the message of hope with those around us, and living with the confidence that comes from knowing we have eternal life.",
    personalReflection:
      "When I reflect on John 3:16, I'm reminded that God's love is not based on my worthiness but on His character. This truth brings me comfort during difficult times and motivates me to love others more deeply, knowing that I've been loved so completely by God.",
    test: [
      {
        question: "What is the main theme of John 3:16?",
        options: [
          "God's love",
          "Eternal punishment",
          "Religious rules",
          "Worldly success",
        ],
        correctAnswer: "a",
      },
      {
        question: "Who was Jesus speaking to when He said John 3:16?",
        options: ["Peter", "Nicodemus", "Mary Magdalene", "The crowds"],
        correctAnswer: "b",
      },
      {
        question: "What does 'eternal life' refer to in this context?",
        options: [
          "Living forever on earth",
          "Life after death in heaven",
          "A relationship with God that begins now and continues forever",
          "Immortality of the soul",
        ],
        correctAnswer: "c",
      },
      {
        question:
          "What is required to receive eternal life according to this verse?",
        options: [
          "Good works",
          "Church membership",
          "Believing in Jesus",
          "Following the law",
        ],
        correctAnswer: "c",
      },
    ],
  },
  child: {
    summary:
      "God loves everyone in the whole world so much that He gave His special Son, Jesus! If you believe in Jesus, you can live with God forever!",
    context:
      "Jesus was talking to a man named Nicodemus one night and told him this super important message about God's big love!",
    practicalExample:
      "You can show God's love by being kind to your friends, helping your family, and telling others about Jesus!",
    personalReflection:
      "I feel so happy knowing that God loves me no matter what! His love is like the biggest hug ever!",
    test: [
      {
        question: "Who does God love?",
        options: [
          "Only good kids",
          "Everyone in the world",
          "Just pastors",
          "Only rich people",
        ],
        correctAnswer: "b",
      },
      {
        question: "What did God give because He loves us?",
        options: [
          "Lots of toys",
          "His Son Jesus",
          "A big house",
          "Millions of dollars",
        ],
        correctAnswer: "b",
      },
      {
        question: "What happens when we believe in Jesus?",
        options: [
          "We get to live with God forever",
          "We become super strong",
          "We get lots of presents",
          "We never get sick",
        ],
        correctAnswer: "a",
      },
    ],
  },
};

// Data Objects
const AppData = {
  userData: {
    id: "user123",
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "+1 (555) 123-4567",
    timezone: "UTC-5",
    bio: "Passionate about biblical studies and spiritual growth. I love exploring the deeper meanings of scripture and applying them to daily life.",
    memberSince: "2022-10-15",
    plan: "free", // Changed to free to demonstrate limitations
    analysesThisMonth: 12,
    dailyLimit: { used: 2, total: 2 }, // At limit for free plan
    lastAnalysisDate: new Date().toDateString(),
  },

  plans: [
    {
      id: "free",
      name: "Free",
      price: 0,
      features: [
        "2 analyses per day",
        "Basic insights",
        "No concept maps",
        "Limited history",
      ],
      popular: false,
    },
    {
      id: "premium",
      name: "Premium",
      price: 9,
      features: [
        "30 analyses per day",
        "Advanced insights",
        "Interactive concept maps",
        "Full history access",
      ],
      popular: true,
    },
    {
      id: "pro",
      name: "Pro",
      price: 19,
      features: [
        "Unlimited analyses",
        "Priority AI processing",
        "Advanced concept maps",
        "Export capabilities",
      ],
      popular: false,
    },
  ],

  history: [
    {
      id: "hist1",
      reference: "John 3:16",
      date: "2024-10-20T14:30:00",
      summary: "God so loved the world that he gave his one and only Son...",
      aiResponse: null,
    },
    {
      id: "hist2",
      reference: "Psalm 23",
      date: "2024-10-19T10:15:00",
      summary: "The Lord is my shepherd; I shall not want...",
      aiResponse: null,
    },
  ],
};

// Translation data
const translations = {
  pt: {
    logoText: "BibleInsight",
    heroTitle: "Compreensão Bíblica Profunda",
    heroSubtitle:
      "Cole texto bíblico ou insira uma referência para receber insights com IA, aplicações práticas e reflexões pessoais.",
    inputLabelText: "Texto Bíblico",
    referenceLabel: "Referência Bíblica",
    bookLabel: "Livro",
    chapterLabel: "Capítulo",
    verseLabel: "Versículo(s)",
    analyzeText: "Analisar com IA",
    loadingText: "Analisando texto bíblico com IA...",
    summaryTitle: "Resumo",
    contextTitle: "Contexto Histórico",
    practicalTitle: "Aplicação Prática",
    reflectionTitle: "Reflexão Pessoal",
    quizTitle: "Verificação de Conhecimento",
    plansTitle: "Escolha Seu Plano",
    plansSubtitle:
      "Desbloqueie insights bíblicos poderosos com nossos planos flexíveis.",
    historyTitle: "Seu Histórico de Análises",
    historySubtitle:
      "Revise suas análises anteriores de textos bíblicos e insights.",
    profileName: "João Silva",
    profileEmail: "joao.silva@email.com",
    analysesLabel: "Análises Este Mês",
    planLabel: "Plano Atual",
    limitLabel: "Limite Diário",
    memberLabel: "Membro Desde",
    freePlan: "Gratuito",
    premiumPlan: "Premium",
    proPlan: "Pro",
    freeFeature1: "2 análises por dia",
    freeFeature2: "Insights básicos",
    freeFeature3: "Sem mapas conceituais",
    freeFeature4: "Histórico limitado",
    premiumFeature1: "30 análises por dia",
    premiumFeature2: "Insights avançados",
    premiumFeature3: "Mapas conceituais interativos",
    premiumFeature4: "Acesso completo ao histórico",
    proFeature1: "Análises ilimitadas",
    proFeature2: "Processamento prioritário com IA",
    proFeature3: "Mapas conceituais avançados",
    proFeature4: "Capacidades de exportação",
    usageInfo: {
      free: "Plano Gratuito: {{used}}/{{total}} análises usadas hoje",
      premium: "Plano Premium: {{used}}/{{total}} análises usadas hoje",
      pro: "Plano Pro: Análises ilimitadas",
      warning: "Você atingiu seu limite diário! Atualize para continuar.",
      upgrade: "Atualize seu plano para desbloquear mais análises!",
    },
  },
  en: {
    logoText: "BibleInsight",
    heroTitle: "Deep Biblical Understanding",
    heroSubtitle:
      "Paste biblical text or enter a reference to receive AI-powered insights, practical applications, and personal reflections.",
    inputLabelText: "Biblical Text",
    referenceLabel: "Bible Reference",
    bookLabel: "Book",
    chapterLabel: "Chapter",
    verseLabel: "Verse(s)",
    analyzeText: "Analyze with AI",
    loadingText: "Analyzing biblical text with AI...",
    summaryTitle: "Summary",
    contextTitle: "Historical Context",
    practicalTitle: "Practical Application",
    reflectionTitle: "Personal Reflection",
    quizTitle: "Knowledge Check",
    plansTitle: "Choose Your Plan",
    plansSubtitle:
      "Unlock powerful biblical insights with our flexible pricing plans.",
    historyTitle: "Your Analysis History",
    historySubtitle:
      "Review your previous biblical text analyses and insights.",
    profileName: "John Doe",
    profileEmail: "john.doe@example.com",
    analysesLabel: "Analyses This Month",
    planLabel: "Current Plan",
    limitLabel: "Daily Limit",
    memberLabel: "Member Since",
    freePlan: "Free",
    premiumPlan: "Premium",
    proPlan: "Pro",
    freeFeature1: "2 analyses per day",
    freeFeature2: "Basic insights",
    freeFeature3: "No concept maps",
    freeFeature4: "Limited history",
    premiumFeature1: "30 analyses per day",
    premiumFeature2: "Advanced insights",
    premiumFeature3: "Interactive concept maps",
    premiumFeature4: "Full history access",
    proFeature1: "Unlimited analyses",
    proFeature2: "Priority AI processing",
    proFeature3: "Advanced concept maps",
    proFeature4: "Export capabilities",
    usageInfo: {
      free: "Free Plan: {{used}}/{{total}} analyses used today",
      premium: "Premium Plan: {{used}}/{{total}} analyses used today",
      pro: "Pro Plan: Unlimited analyses",
      warning: "You've reached your daily limit! Upgrade to continue.",
      upgrade: "Upgrade your plan to unlock more analyses!",
    },
  },
  es: {
    logoText: "BibleInsight",
    heroTitle: "Comprensión Bíblica Profunda",
    heroSubtitle:
      "Pegue texto bíblico o ingrese una referencia para recibir información impulsada por IA, aplicaciones prácticas y reflexiones personales.",
    inputLabelText: "Texto Bíblico",
    referenceLabel: "Referencia Bíblica",
    bookLabel: "Libro",
    chapterLabel: "Capítulo",
    verseLabel: "Versículo(s)",
    analyzeText: "Analizar con IA",
    loadingText: "Analizando texto bíblico con IA...",
    summaryTitle: "Resumen",
    contextTitle: "Contexto Histórico",
    practicalTitle: "Aplicación Práctica",
    reflectionTitle: "Reflexión Personal",
    quizTitle: "Verificación de Conocimiento",
    plansTitle: "Elige Tu Plan",
    plansSubtitle:
      "Desbloquea poderosos conocimientos bíblicos con nuestros planes flexibles.",
    historyTitle: "Tu Historial de Análisis",
    historySubtitle:
      "Revisa tus análisis anteriores de textos bíblicos e ideas.",
    profileName: "Juan Pérez",
    profileEmail: "juan.perez@email.com",
    analysesLabel: "Análisis Este Mes",
    planLabel: "Plan Actual",
    limitLabel: "Límite Diario",
    memberLabel: "Miembro Desde",
    freePlan: "Gratis",
    premiumPlan: "Premium",
    proPlan: "Pro",
    freeFeature1: "2 análisis por día",
    freeFeature2: "Ideas básicas",
    freeFeature3: "Sin mapas conceptuales",
    freeFeature4: "Historial limitado",
    premiumFeature1: "30 análisis por día",
    premiumFeature2: "Ideas avanzadas",
    premiumFeature3: "Mapas conceptuales interactivos",
    premiumFeature4: "Acceso completo al historial",
    proFeature1: "Análisis ilimitados",
    proFeature2: "Procesamiento prioritario con IA",
    proFeature3: "Mapas conceptuales avanzados",
    proFeature4: "Capacidades de exportación",
    usageInfo: {
      free: "Plan Gratis: {{used}}/{{total}} análisis usados hoy",
      premium: "Plan Premium: {{used}}/{{total}} análisis usados hoy",
      pro: "Plan Pro: Análisis ilimitados",
      warning: "¡Has alcanzado tu límite diario! Actualiza para continuar.",
      upgrade: "¡Actualiza tu plan para desbloquear más análisis!",
    },
  },
  fr: {
    logoText: "BibleInsight",
    heroTitle: "Compréhension Biblique Approfondie",
    heroSubtitle:
      "Collez du texte biblique ou entrez une référence pour recevoir des insights alimentés par l'IA, des applications pratiques et des réflexions personnelles.",
    inputLabelText: "Texte Biblique",
    referenceLabel: "Référence Biblique",
    bookLabel: "Livre",
    chapterLabel: "Chapitre",
    verseLabel: "Verset(s)",
    analyzeText: "Analyser avec l'IA",
    loadingText: "Analyse du texte biblique avec l'IA...",
    summaryTitle: "Résumé",
    contextTitle: "Contexte Historique",
    practicalTitle: "Application Pratique",
    reflectionTitle: "Réflexion Personnelle",
    quizTitle: "Vérification des Connaissances",
    plansTitle: "Choisissez Votre Forfait",
    plansSubtitle:
      "Débloquez des insights bibliques puissants avec nos forfaits flexibles.",
    historyTitle: "Votre Historique d'Analyse",
    historySubtitle:
      "Consultez vos analyses précédentes de textes bibliques et vos insights.",
    profileName: "Jean Dupont",
    profileEmail: "jean.dupont@email.com",
    analysesLabel: "Analyses Ce Mois-ci",
    planLabel: "Forfait Actuel",
    limitLabel: "Limite Quotidienne",
    memberLabel: "Membre Depuis",
    freePlan: "Gratuit",
    premiumPlan: "Premium",
    proPlan: "Pro",
    freeFeature1: "2 analyses par jour",
    freeFeature2: "Insights de base",
    freeFeature3: "Pas de cartes conceptuelles",
    freeFeature4: "Historique limité",
    premiumFeature1: "30 analyses par jour",
    premiumFeature2: "Insights avancés",
    premiumFeature3: "Cartes conceptuelles interactives",
    premiumFeature4: "Accès complet à l'historique",
    proFeature1: "Analyses illimitées",
    proFeature2: "Traitement prioritaire par IA",
    proFeature3: "Cartes conceptuelles avancées",
    proFeature4: "Capacités d'exportation",
    usageInfo: {
      free: "Forfait Gratuit: {{used}}/{{total}} analyses utilisées aujourd'hui",
      premium:
        "Forfait Premium: {{used}}/{{total}} analyses utilisées aujourd'hui",
      pro: "Forfait Pro: Analyses illimitées",
      warning:
        "Vous avez atteint votre limite quotidienne! Mettez à niveau pour continuer.",
      upgrade: "Mettez à niveau votre forfait pour débloquer plus d'analyses!",
    },
  },
};

// DOM Elements
const themeToggle = document.getElementById("theme-toggle");
const mobileThemeToggle = document.getElementById("mobile-theme-toggle");
const languageSelect = document.getElementById("language-select");
const mobileLanguageSelect = document.getElementById("mobile-language-select");
const analyzeBtn = document.getElementById("analyze-btn");
const bibleInput = document.getElementById("bible-input");
const loading = document.getElementById("loading");
const resultsSection = document.getElementById("results-section");
const textTab = document.getElementById("text-tab");
const referenceTab = document.getElementById("reference-tab");
const textInputGroup = document.getElementById("text-input-group");
const referenceInputGroup = document.getElementById("reference-input-group");
const singleBtn = document.getElementById("single-btn");
const rangeBtn = document.getElementById("range-btn");
const verseSingleInput = document.getElementById("verse-single-input");
const verseRangeInput = document.getElementById("verse-range-input");
const mobileMenuBtn = document.getElementById("mobile-menu-btn");
const mobileMenu = document.getElementById("mobile-menu");
const mobileMenuClose = document.getElementById("mobile-menu-close");
const editProfileBtn = document.getElementById("edit-profile-btn");
const profileForm = document.getElementById("profile-form");
const saveProfileBtn = document.getElementById("save-profile-btn");
const cancelProfileBtn = document.getElementById("cancel-profile-btn");
const historyList = document.getElementById("history-list");
const usageInfo = document.getElementById("usage-info");
const quickBtn = document.getElementById("quick-btn");
const deepBtn = document.getElementById("deep-btn");
const childBtn = document.getElementById("child-btn");

let currentAnalysisType = "quick";

// Check if user can perform analysis based on plan
function canAnalyze() {
  const planConfig = PlanConfig[AppData.userData.plan];
  if (!planConfig) return false;

  const today = new Date().toDateString();
  const lastAnalysisDate = AppData.userData.lastAnalysisDate;

  // Reset daily limit if it's a new day
  if (today !== lastAnalysisDate) {
    AppData.userData.dailyLimit.used = 0;
    AppData.userData.lastAnalysisDate = today;
  }

  // Check if at daily limit (for non-pro plans)
  if (
    planConfig.dailyLimit !== Infinity &&
    AppData.userData.dailyLimit.used >= planConfig.dailyLimit
  ) {
    return false;
  }

  return true;
}

// Update usage info display
function updateUsageInfo() {
  const planConfig = PlanConfig[AppData.userData.plan];
  const lang = languageSelect.value;
  const t = translations[lang].usageInfo;

  if (AppData.userData.plan === "pro") {
    usageInfo.innerHTML = `<span class="usage-info-text">${t.pro}</span>`;
    usageInfo.className = "usage-info";
  } else {
    const used = AppData.userData.dailyLimit.used;
    const total = planConfig.dailyLimit;
    const usageText = t[AppData.userData.plan]
      .replace("{{used}}", used)
      .replace("{{total}}", total);

    if (used >= total) {
      usageInfo.innerHTML = `<span class="usage-limit">${t.warning}</span><br><button class="upgrade-btn" onclick="showPage('plans')">Upgrade Now</button>`;
      usageInfo.className = "usage-info";
    } else if (used >= total * 0.8) {
      usageInfo.innerHTML = `<span class="usage-warning">${usageText}</span><br><span class="usage-info-text">${t.upgrade}</span>`;
      usageInfo.className = "usage-info";
    } else {
      usageInfo.innerHTML = `<span class="usage-info-text">${usageText}</span>`;
      usageInfo.className = "usage-info";
    }
  }

  // Enable/disable analyze button
  analyzeBtn.disabled = !canAnalyze();
}

// Initialize theme
function initTheme() {
  const savedTheme = localStorage.getItem("theme") || "light";
  if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
    themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    mobileThemeToggle.innerHTML = '<i class="fas fa-sun"></i>';
  }
}

// Toggle theme
function toggleTheme() {
  document.body.classList.toggle("dark-mode");
  const isDark = document.body.classList.contains("dark-mode");
  localStorage.setItem("theme", isDark ? "dark" : "light");
  themeToggle.innerHTML = isDark
    ? '<i class="fas fa-sun"></i>'
    : '<i class="fas fa-moon"></i>';
  mobileThemeToggle.innerHTML = isDark
    ? '<i class="fas fa-sun"></i>'
    : '<i class="fas fa-moon"></i>';
}

themeToggle.addEventListener("click", toggleTheme);
mobileThemeToggle.addEventListener("click", toggleTheme);

// Initialize language
function initLanguage() {
  const browserLang = navigator.language.split("-")[0];
  const supportedLangs = ["pt", "en", "es", "fr"];
  const lang = supportedLangs.includes(browserLang) ? browserLang : "en";
  languageSelect.value = lang;
  mobileLanguageSelect.value = lang;
  updateLanguage(lang);
}

// Update language
function updateLanguage(lang) {
  const t = translations[lang];
  document.getElementById("logo-text").textContent = t.logoText;
  document.getElementById("mobile-logo-text").textContent = t.logoText;
  document.getElementById("hero-title").textContent = t.heroTitle;
  document.getElementById("hero-subtitle").textContent = t.heroSubtitle;
  document.getElementById("input-label-text").textContent = t.inputLabelText;
  document.getElementById("reference-label").textContent = t.referenceLabel;
  document.getElementById("book-label").textContent = t.bookLabel;
  document.getElementById("chapter-label").textContent = t.chapterLabel;
  document.getElementById("verse-label").textContent = t.verseLabel;
  document.getElementById("analyze-text").textContent = t.analyzeText;
  document.getElementById("loading-text").textContent = t.loadingText;
  document.getElementById("summary-title").textContent = t.summaryTitle;
  document.getElementById("context-title").textContent = t.contextTitle;
  document.getElementById("practical-title").textContent = t.practicalTitle;
  document.getElementById("reflection-title").textContent = t.reflectionTitle;
  document.getElementById("quiz-title").textContent = t.quizTitle;
  document.getElementById("plans-title").textContent = t.plansTitle;
  document.getElementById("plans-subtitle").textContent = t.plansSubtitle;
  document.getElementById("history-title").textContent = t.historyTitle;
  document.getElementById("history-subtitle").textContent = t.historySubtitle;
  document.getElementById("profile-name").textContent = t.profileName;
  document.getElementById("profile-email").textContent = t.profileEmail;
  document.getElementById("analyses-label").textContent = t.analysesLabel;
  document.getElementById("plan-label").textContent = t.planLabel;
  document.getElementById("limit-label").textContent = t.limitLabel;
  document.getElementById("member-label").textContent = t.memberLabel;
  document.getElementById("free-plan").textContent = t.freePlan;
  document.getElementById("premium-plan").textContent = t.premiumPlan;
  document.getElementById("pro-plan").textContent = t.proPlan;
  document.getElementById("free-feature1").textContent = t.freeFeature1;
  document.getElementById("free-feature2").textContent = t.freeFeature2;
  document.getElementById("free-feature3").textContent = t.freeFeature3;
  document.getElementById("free-feature4").textContent = t.freeFeature4;
  document.getElementById("premium-feature1").textContent = t.premiumFeature1;
  document.getElementById("premium-feature2").textContent = t.premiumFeature2;
  document.getElementById("premium-feature3").textContent = t.premiumFeature3;
  document.getElementById("premium-feature4").textContent = t.premiumFeature4;
  document.getElementById("pro-feature1").textContent = t.proFeature1;
  document.getElementById("pro-feature2").textContent = t.proFeature2;
  document.getElementById("pro-feature3").textContent = t.proFeature3;
  document.getElementById("pro-feature4").textContent = t.proFeature4;

  // Update usage info
  updateUsageInfo();
}

languageSelect.addEventListener("change", (e) => {
  mobileLanguageSelect.value = e.target.value;
  updateLanguage(e.target.value);
});

mobileLanguageSelect.addEventListener("change", (e) => {
  languageSelect.value = e.target.value;
  updateLanguage(e.target.value);
});

// Tab switching for input
textTab.addEventListener("click", () => {
  textTab.classList.add("active");
  referenceTab.classList.remove("active");
  textInputGroup.style.display = "block";
  referenceInputGroup.style.display = "none";
});

referenceTab.addEventListener("click", () => {
  referenceTab.classList.add("active");
  textTab.classList.remove("active");
  textInputGroup.style.display = "none";
  referenceInputGroup.style.display = "block";
});

// Verse type selector
singleBtn.addEventListener("click", () => {
  singleBtn.classList.add("active");
  rangeBtn.classList.remove("active");
  verseSingleInput.style.display = "block";
  verseRangeInput.style.display = "none";
});

rangeBtn.addEventListener("click", () => {
  rangeBtn.classList.add("active");
  singleBtn.classList.remove("active");
  verseSingleInput.style.display = "none";
  verseRangeInput.style.display = "block";
});

// Analysis type selector
quickBtn.addEventListener("click", () => {
  quickBtn.classList.add("active");
  deepBtn.classList.remove("active");
  childBtn.classList.remove("active");
  currentAnalysisType = "quick";
});

deepBtn.addEventListener("click", () => {
  deepBtn.classList.add("active");
  quickBtn.classList.remove("active");
  childBtn.classList.remove("active");
  currentAnalysisType = "deep";
});

childBtn.addEventListener("click", () => {
  childBtn.classList.add("active");
  quickBtn.classList.remove("active");
  deepBtn.classList.remove("active");
  currentAnalysisType = "child";
});

// Mobile menu
mobileMenuBtn.addEventListener("click", () => {
  mobileMenu.classList.add("active");
});

mobileMenuClose.addEventListener("click", () => {
  mobileMenu.classList.remove("active");
});

// Close mobile menu when clicking outside
document.addEventListener("click", (e) => {
  if (
    mobileMenu.classList.contains("active") &&
    !mobileMenu.contains(e.target) &&
    !mobileMenuBtn.contains(e.target)
  ) {
    mobileMenu.classList.remove("active");
  }
});

// Page navigation
function showPage(pageId) {
  document.querySelectorAll(".page").forEach((page) => {
    page.classList.remove("active");
  });
  document.getElementById(`${pageId}-page`).classList.add("active");

  // Update nav links
  document.querySelectorAll(".nav-link, .mobile-nav-link").forEach((link) => {
    link.classList.remove("active");
  });
  const activeLinks = document.querySelectorAll(
    `[onclick="showPage('${pageId}')"]`
  );
  activeLinks.forEach((link) => link.classList.add("active"));

  // Close mobile menu
  mobileMenu.classList.remove("active");

  // Populate history if needed
  if (pageId === "history") {
    populateHistory();
  }
}

// Populate history from data
function populateHistory() {
  historyList.innerHTML = "";
  const planConfig = PlanConfig[AppData.userData.plan];

  // Limit history for free plan
  let historyToShow = AppData.history;
  if (!planConfig.features.fullHistory && AppData.userData.plan === "free") {
    historyToShow = AppData.history.slice(0, 2); // Only show last 2 for free plan
  }

  historyToShow.forEach((item) => {
    const date = new Date(item.date);
    const formattedDate = date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });

    const historyItem = document.createElement("div");
    historyItem.className = "history-item";
    historyItem.innerHTML = `
                    <div class="history-header">
                        <div class="history-reference">${item.reference}</div>
                        <div class="history-date">${formattedDate}</div>
                    </div>
                    <div class="history-summary">${item.summary}</div>
                `;
    historyItem.addEventListener("click", () =>
      showHistoryAnalysis(item.reference)
    );
    historyList.appendChild(historyItem);
  });

  // Add upgrade banner for free users with limited history
  if (AppData.userData.plan === "free" && AppData.history.length > 2) {
    const upgradeBanner = document.createElement("div");
    upgradeBanner.className = "upgrade-banner";
    upgradeBanner.innerHTML = `
                    <h3>Unlock Full History Access</h3>
                    <p>Upgrade to Premium to view your complete analysis history.</p>
                    <button class="upgrade-btn" onclick="showPage('plans')">Upgrade Now</button>
                `;
    historyList.appendChild(upgradeBanner);
  }
}

// Show history analysis
function showHistoryAnalysis(reference) {
  showPage("home");
  // Simulate loading the analysis
  loading.style.display = "block";
  resultsSection.style.display = "none";

  setTimeout(() => {
    loading.style.display = "none";
    displayResults(MockAIResponses[currentAnalysisType]);
    resultsSection.style.display = "grid";
    resultsSection.style.gridTemplateColumns =
      "repeat(auto-fit, minmax(300px, 1fr))";
  }, 1500);
}

// Analyze function
analyzeBtn.addEventListener("click", () => {
  if (!canAnalyze()) {
    alert(
      "You have reached your daily analysis limit. Please upgrade your plan to continue."
    );
    showPage("plans");
    return;
  }

  let input = "";
  if (textTab.classList.contains("active")) {
    input = bibleInput.value.trim();
  } else {
    const book = document.getElementById("book-input").value.trim();
    const chapter = document.getElementById("chapter-input").value.trim();
    if (singleBtn.classList.contains("active")) {
      const verse = document.getElementById("verse-single").value.trim();
      if (book && chapter && verse) {
        input = `${book} ${chapter}:${verse}`;
      }
    } else {
      const verseStart = document.getElementById("verse-start").value.trim();
      const verseEnd = document.getElementById("verse-end").value.trim();
      if (book && chapter && verseStart && verseEnd) {
        input = `${book} ${chapter}:${verseStart}-${verseEnd}`;
      }
    }
  }

  if (!input) {
    alert("Please enter biblical text or complete reference information.");
    return;
  }

  // Show loading
  loading.style.display = "block";
  resultsSection.style.display = "none";

  // Simulate API call delay
  setTimeout(() => {
    loading.style.display = "none";
    displayResults(MockAIResponses[currentAnalysisType]);
    resultsSection.style.display = "grid";
    resultsSection.style.gridTemplateColumns =
      "repeat(auto-fit, minmax(300px, 1fr))";

    // Update usage count
    AppData.userData.dailyLimit.used++;
    AppData.userData.lastAnalysisDate = new Date().toDateString();
    AppData.userData.analysesThisMonth++;

    // Update UI
    document.getElementById("daily-limit").textContent = `${
      AppData.userData.dailyLimit.used
    }/${PlanConfig[AppData.userData.plan].dailyLimit}`;
    document.getElementById("analyses-count").textContent =
      AppData.userData.analysesThisMonth;

    // Add to history
    const newHistoryItem = {
      id: `hist${AppData.history.length + 1}`,
      reference: input,
      date: new Date().toISOString(),
      summary:
        MockAIResponses[currentAnalysisType].summary.substring(0, 100) + "...",
      aiResponse: MockAIResponses[currentAnalysisType],
    };
    AppData.history.unshift(newHistoryItem);

    updateUsageInfo();
  }, 2000);
});

// Display results
function displayResults(data) {
  document.getElementById("summary-content").textContent = data.summary;
  document.getElementById("context-content").textContent = data.context;
  document.getElementById("practical-content").textContent =
    data.practicalExample;
  document.getElementById("reflection-content").textContent =
    data.personalReflection;

  // Quiz - sequential questions with auto-progression
  const quizSection = document.getElementById("quiz-section");
  quizSection.innerHTML = "";

  let currentQuestion = 0;
  let userAnswers = [];
  let score = 0;

  function showQuestion(questionIndex) {
    quizSection.innerHTML = "";

    // Progress bar
    const progressDiv = document.createElement("div");
    progressDiv.className = "quiz-progress";
    const progressText = document.createElement("span");
    progressText.textContent = `${questionIndex + 1} of ${data.test.length}`;
    const progressBar = document.createElement("div");
    progressBar.className = "progress-bar";
    const progressFill = document.createElement("div");
    progressFill.className = "progress-fill";
    progressFill.style.width = `${
      ((questionIndex + 1) / data.test.length) * 100
    }%`;
    progressBar.appendChild(progressFill);
    progressDiv.appendChild(progressText);
    progressDiv.appendChild(progressBar);
    quizSection.appendChild(progressDiv);

    const question = data.test[questionIndex];
    const questionDiv = document.createElement("div");
    questionDiv.className = "quiz-container";
    questionDiv.innerHTML = `
                    <div class="quiz-question">${question.question}</div>
                    <div class="quiz-options" id="quiz-options"></div>
                `;
    quizSection.appendChild(questionDiv);

    const optionsContainer = document.getElementById("quiz-options");
    question.options.forEach((option, optionIndex) => {
      const optionLetter = String.fromCharCode(97 + optionIndex); // a, b, c, d
      const optionDiv = document.createElement("div");
      optionDiv.className = "quiz-option";
      optionDiv.dataset.answer = optionLetter;
      optionDiv.textContent = `${optionLetter.toUpperCase()}. ${option}`;
      optionDiv.addEventListener("click", function () {
        // Store answer
        userAnswers[questionIndex] = this.dataset.answer;

        // Check if correct
        const isCorrect = this.dataset.answer === question.correctAnswer;
        if (isCorrect) score++;

        // Show feedback
        const feedback = document.createElement("div");
        feedback.className =
          "quiz-feedback " +
          (isCorrect ? "feedback-correct" : "feedback-wrong");
        feedback.textContent = isCorrect
          ? "Correct! Well done!"
          : `Not quite. The correct answer is ${question.correctAnswer.toUpperCase()}.`;
        feedback.style.display = "block";
        quizSection.appendChild(feedback);

        // Disable options
        document.querySelectorAll(".quiz-option").forEach((opt) => {
          opt.style.pointerEvents = "none";
          if (opt.dataset.answer === question.correctAnswer) {
            opt.classList.add("selected");
          }
        });

        // Auto-proceed after delay
        setTimeout(() => {
          if (questionIndex < data.test.length - 1) {
            showQuestion(questionIndex + 1);
          } else {
            showResults();
          }
        }, 1500);
      });
      optionsContainer.appendChild(optionDiv);
    });
  }

  function showResults() {
    quizSection.innerHTML = "";
    const resultsDiv = document.createElement("div");
    resultsDiv.className = "results-summary";
    resultsDiv.innerHTML = `
                    <h3>Quiz Results</h3>
                    <div class="results-score">${score}/${
      data.test.length
    }</div>
                    <p>You scored ${((score / data.test.length) * 100).toFixed(
                      0
                    )}%!</p>
                    <p style="margin-top: 16px; color: var(--text-light);">
                        ${
                          score === data.test.length
                            ? "Excellent work! You have a deep understanding of this passage."
                            : score >= data.test.length / 2
                            ? "Good job! You have a solid understanding of this passage."
                            : "Keep studying! Review the passage and try again."
                        }
                    </p>
                `;
    quizSection.appendChild(resultsDiv);
  }

  showQuestion(currentQuestion);
}

// Profile editing
editProfileBtn.addEventListener("click", () => {
  // Populate form with current data
  document.getElementById("full-name").value = AppData.userData.name;
  document.getElementById("email").value = AppData.userData.email;
  document.getElementById("phone").value = AppData.userData.phone;
  document.getElementById("timezone").value = AppData.userData.timezone;
  document.getElementById("bio").value = AppData.userData.bio;

  profileForm.classList.add("active");
});

cancelProfileBtn.addEventListener("click", () => {
  profileForm.classList.remove("active");
});

saveProfileBtn.addEventListener("click", () => {
  // Update data object
  AppData.userData.name = document.getElementById("full-name").value;
  AppData.userData.email = document.getElementById("email").value;
  AppData.userData.phone = document.getElementById("phone").value;
  AppData.userData.timezone = document.getElementById("timezone").value;
  AppData.userData.bio = document.getElementById("bio").value;

  // Update UI
  document.getElementById("profile-name").textContent = AppData.userData.name;
  document.getElementById("profile-email").textContent = AppData.userData.email;

  profileForm.classList.remove("active");
  alert("Profile updated successfully!");
});

// Plan selection
document.querySelectorAll(".plan-btn").forEach((btn) => {
  btn.addEventListener("click", function () {
    const newPlan = this.dataset.plan;
    AppData.userData.plan = newPlan;
    AppData.userData.dailyLimit.total = PlanConfig[newPlan].dailyLimit;

    // Reset daily usage when upgrading
    if (newPlan !== "free") {
      AppData.userData.dailyLimit.used = 0;
    }

    // Update UI
    document.getElementById("plan-type").textContent = PlanConfig[newPlan].name;
    document.getElementById("daily-limit").textContent =
      newPlan === "pro"
        ? "Unlimited"
        : `${AppData.userData.dailyLimit.used}/${PlanConfig[newPlan].dailyLimit}`;

    updateUsageInfo();
    showPage("home");
    alert(`Plan upgraded to ${PlanConfig[newPlan].name}!`);
  });
});

// Initialize
initTheme();
initLanguage();
populateHistory();
updateUsageInfo();

// Set up nav links
document.querySelectorAll(".nav-link, .mobile-nav-link").forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const pageText = this.textContent.toLowerCase();
    let pageId;
    if (pageText.includes("home")) pageId = "home";
    else if (pageText.includes("profile")) pageId = "profile";
    else if (pageText.includes("plans")) pageId = "plans";
    else if (pageText.includes("history")) pageId = "history";
    else pageId = "home";
    showPage(pageId);
  });
});

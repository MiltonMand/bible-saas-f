// Translation data
const translations = {
  en: {
    menu: {
      home: "Home",
      profile: "Profile",
      plans: "Plans",
      history: "History",
    },
    logoText: "BibleEasy",
    heroTitle: "Deep Biblical Understanding",
    heroSubtitle:
      "Paste biblical text or enter a reference to receive AI-powered insights, practical applications, and personal reflections.",
    inputLabelText: "Biblical Text",
    referenceLabel: "Bible Reference",
    bookLabel: "Book",
    chapterLabel: "Chapter",
    verseLabel: "Verse(s)",
    analyzeText: "Analyze",
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
    limitLabel: "Monthly Limit",
    memberLabel: "Member Since",
    freePlan: "Free",
    premiumPlan: "Premium",
    proPlan: "Pro",
    freeFeature1: "5 analyses per month",
    freeFeature2: "Basic insights",
    freeFeature3: "No concept maps",
    freeFeature4: "Limited history",
    premiumFeature1: "400 analyses per month",
    premiumFeature2: "Advanced insights",
    premiumFeature3: "Interactive concept maps",
    premiumFeature4: "Full history access",
    proFeature1: "Unlimited analyses",
    proFeature2: "Priority AI processing",
    proFeature3: "Advanced concept maps",
    proFeature4: "Export capabilities",
    usageInfo: {
      free: "Free Plan: {{used}}/{{total}} analyses used this month",
      premium: "Premium Plan: {{used}}/{{total}} analyses used this month",
      pro: "Pro Plan: Unlimited analyses",
      warning: "You've reached your monthly limit! Upgrade to continue.",
      upgrade: "Upgrade your plan to unlock more analyses this month!",
    },
    auth: {
      signIn: "Sign In",
      register: "Register",
      email: "Email Address",
      password: "Password",
      name: "Full Name",
      language: "Language",
      signInSubtitle: "Access your biblical insights and analysis history",
      registerSubtitle:
        "Join BibleInsight to save your analyses and access premium features",
      signInButton: "Sign In",
      registerButton: "Register",
      noAccount: "Don't have an account?",
      haveAccount: "Already have an account?",
      registerNow: "Register now",
      signInNow: "Sign in now",
    },
    plans: {
      currentPlan: "Current Plan",
      choosePlanBtn: "Choose {{plan}}",
      perMonth: "/month",
      unlimited: "Unlimited",
      basicInsights: "Basic insights",
      advancedInsights: "Advanced insights",
      conceptMaps: "Concept maps",
      fullHistory: "Full history access",
      export: "Export capabilities",
      priorityProcessing: "Priority processing",
    },
    btns: {
      quickAnalysis: {
        div: "Quick Analysis",
        p: "Fast & Simple",
      },
      deepAnalysis: {
        div: "Deep Analysis",
        p: "Comprehensive",
      },
      childFriendly: {
        div: "Child-Friendly",
        p: "Simple & Fun",
      },
      pasteText: "Paste Text",
      bibleReference: "Bible Reference",
      single: "Single",
      range: "Range",
      signOut: "Sign Out",
      signIn: "Sign In",
    },
    placeholders: {
      bibleInput: "Example: Paste the full biblical text here...",
      reference: "John",
    },
  },
  pt: {
    menu: {
      home: "Início",
      profile: "Perfil",
      plans: "Planos",
      history: "Histórico",
    },
    logoText: "BibleEasy",
    heroTitle: "Compreensão Bíblica Profunda",
    heroSubtitle:
      "Cole texto bíblico ou insira uma referência para receber insights com IA, aplicações práticas e reflexões pessoais.",
    inputLabelText: "Texto Bíblico",
    referenceLabel: "Referência Bíblica",
    bookLabel: "Livro",
    chapterLabel: "Capítulo",
    verseLabel: "Versículo(s)",
    analyzeText: "Analisar",
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
    limitLabel: "Limite Mensal",
    memberLabel: "Membro Desde",
    freePlan: "Gratuito",
    premiumPlan: "Premium",
    proPlan: "Pro",
    freeFeature1: "5 análises por mês",
    freeFeature2: "Insights básicos",
    freeFeature3: "Sem mapas conceituais",
    freeFeature4: "Histórico limitado",
    premiumFeature1: "400 análises por mês",
    premiumFeature2: "Insights avançados",
    premiumFeature3: "Mapas conceituais interativos",
    premiumFeature4: "Acesso completo ao histórico",
    proFeature1: "Análises ilimitadas",
    proFeature2: "Processamento prioritário com IA",
    proFeature3: "Mapas conceituais avançados",
    proFeature4: "Capacidades de exportação",
    usageInfo: {
      free: "Plano Gratuito: {{used}}/{{total}} análises usadas este mês",
      premium: "Plano Premium: {{used}}/{{total}} análises usadas este mês",
      pro: "Plano Pro: Análises ilimitadas",
      warning: "Você atingiu seu limite mensal! Atualize para continuar.",
      upgrade: "Atualize seu plano para desbloquear mais análises este mês!",
    },
    auth: {
      signIn: "Entrar",
      register: "Registrar",
      email: "Endereço de Email",
      password: "Senha",
      name: "Nome Completo",
      language: "Idioma",
      signInSubtitle: "Acesse seus insights bíblicos e histórico de análises",
      registerSubtitle:
        "Junte-se ao BibleInsight para salvar suas análises e acessar recursos premium",
      signInButton: "Entrar",
      registerButton: "Registrar",
      noAccount: "Não tem uma conta?",
      haveAccount: "Já tem uma conta?",
      registerNow: "Registre-se agora",
      signInNow: "Entre agora",
    },
    plans: {
      currentPlan: "Plano Atual",
      choosePlanBtn: "Escolher {{plan}}",
      perMonth: "/mês",
      unlimited: "Ilimitado",
      basicInsights: "Insights básicos",
      advancedInsights: "Insights avançados",
      conceptMaps: "Mapas conceituais",
      fullHistory: "Acesso completo ao histórico",
      export: "Capacidades de exportação",
      priorityProcessing: "Processamento prioritário",
    },
    btns: {
      quickAnalysis: {
        div: "Análise Rápida",
        p: "Rápido e Simples",
      },
      deepAnalysis: {
        div: "Análise Profunda",
        p: "Abrangente",
      },
      childFriendly: {
        div: "Amigável para Crianças",
        p: "Simples e Divertido",
      },
      pasteText: "Colar Texto",
      bibleReference: "Referência Bíblica",
      single: "Único",
      range: "Intervalo",
      signOut: "Sair",
      signIn: "Entrar",
    },
    placeholders: {
      bibleInput: "Exemplo: Cole aqui o texto bíblico completo...",
      reference: "Joao",
    },
  },
  es: {
    menu: {
      home: "Inicio",
      profile: "Perfil",
      plans: "Planes",
      history: "Historial",
    },
    logoText: "BibleEasy",
    heroTitle: "Comprensión Bíblica Profunda",
    heroSubtitle:
      "Pegue texto bíblico o ingrese una referencia para recibir información impulsada por IA, aplicaciones prácticas y reflexiones personales.",
    inputLabelText: "Texto Bíblico",
    referenceLabel: "Referencia Bíblica",
    bookLabel: "Libro",
    chapterLabel: "Capítulo",
    verseLabel: "Versículo(s)",
    analyzeText: "Analizar",
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
    limitLabel: "Límite Mensual",
    memberLabel: "Miembro Desde",
    freePlan: "Gratis",
    premiumPlan: "Premium",
    proPlan: "Pro",
    freeFeature1: "5 análisis por mes",
    freeFeature2: "Ideas básicas",
    freeFeature3: "Sin mapas conceptuales",
    freeFeature4: "Historial limitado",
    premiumFeature1: "400 análisis por mes",
    premiumFeature2: "Ideas avanzadas",
    premiumFeature3: "Mapas conceptuales interactivos",
    premiumFeature4: "Acceso completo al historial",
    proFeature1: "Análisis ilimitados",
    proFeature2: "Procesamiento prioritario con IA",
    proFeature3: "Mapas conceptuales avanzados",
    proFeature4: "Capacidades de exportación",
    usageInfo: {
      free: "Plan Gratis: {{used}}/{{total}} análisis usados este mes",
      premium: "Plan Premium: {{used}}/{{total}} análisis usados este mes",
      pro: "Plan Pro: Análisis ilimitados",
      warning: "¡Has alcanzado tu límite mensual! Actualiza para continuar.",
      upgrade: "¡Actualiza tu plan para desbloquear más análisis este mes!",
    },
    auth: {
      signIn: "Iniciar Sesión",
      register: "Registrarse",
      email: "Dirección de Email",
      password: "Contraseña",
      name: "Nombre Completo",
      language: "Idioma",
      signInSubtitle:
        "Accede a tus conocimientos bíblicos e historial de análisis",
      registerSubtitle:
        "Únete a BibleInsight para guardar tus análisis y acceder a funciones premium",
      signInButton: "Iniciar Sesión",
      registerButton: "Registrarse",
      noAccount: "¿No tienes una cuenta?",
      haveAccount: "¿Ya tienes una cuenta?",
      registerNow: "Regístrate ahora",
      signInNow: "Inicia sesión ahora",
    },
    plans: {
      currentPlan: "Plan Actual",
      choosePlanBtn: "Elegir {{plan}}",
      perMonth: "/mes",
      unlimited: "Ilimitado",
      basicInsights: "Ideas básicas",
      advancedInsights: "Ideas avanzadas",
      conceptMaps: "Mapas conceptuales",
      fullHistory: "Acceso completo al historial",
      export: "Capacidades de exportación",
      priorityProcessing: "Procesamiento prioritario",
    },
    btns: {
      quickAnalysis: {
        div: "Análisis Rápido",
        p: "Rápido y Sencillo",
      },
      deepAnalysis: {
        div: "Análisis Profundo",
        p: "Integral",
      },
      childFriendly: {
        div: "Apto para Niños",
        p: "Simple y Divertido",
      },
      pasteText: "Pegar Texto",
      bibleReference: "Referencia Bíblica",
      single: "Único",
      range: "Rango",
      signOut: "Cerrar Sesión",
      signIn: "Iniciar Sesión",
    },
    placeholders: {
      bibleInput: "Ejemplo: Pegue aquí el texto bíblico completo...",
      reference: "Juan",
    },
  },
  fr: {
    menu: {
      home: "Accueil",
      profile: "Profil",
      plans: "Plans",
      history: "Historique",
    },
    logoText: "BibleEasy",
    heroTitle: "Compréhension Biblique Approfondie",
    heroSubtitle:
      "Collez du texte biblique ou entrez une référence pour recevoir des insights alimentés par l'IA, des applications pratiques et des réflexions personnelles.",
    inputLabelText: "Texte Biblique",
    referenceLabel: "Référence Biblique",
    bookLabel: "Livre",
    chapterLabel: "Chapitre",
    verseLabel: "Verset(s)",
    analyzeText: "Analyser",
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
    limitLabel: "Limite Mensuelle",
    memberLabel: "Membre Depuis",
    freePlan: "Gratuit",
    premiumPlan: "Premium",
    proPlan: "Pro",
    freeFeature1: "5 analyses par mois",
    freeFeature2: "Insights de base",
    freeFeature3: "Pas de cartes conceptuelles",
    freeFeature4: "Historique limité",
    premiumFeature1: "400 analyses par mois",
    premiumFeature2: "Insights avancés",
    premiumFeature3: "Cartes conceptuelles interactives",
    premiumFeature4: "Accès complet à l'historique",
    proFeature1: "Analyses illimitées",
    proFeature2: "Traitement prioritaire par IA",
    proFeature3: "Cartes conceptuelles avancées",
    proFeature4: "Capacités d'exportation",
    usageInfo: {
      free: "Forfait Gratuit: {{used}}/{{total}} analyses utilisées ce mois-ci",
      premium:
        "Forfait Premium: {{used}}/{{total}} analyses utilisées ce mois-ci",
      pro: "Forfait Pro: Analyses illimitées",
      warning:
        "Vous avez atteint votre limite mensuelle! Mettez à niveau pour continuer.",
      upgrade:
        "Mettez à niveau votre forfait pour débloquer plus d'analyses ce mois-ci!",
    },
    auth: {
      signIn: "Se Connecter",
      register: "S'Inscrire",
      email: "Adresse Email",
      password: "Mot de Passe",
      name: "Nom Complet",
      language: "Langue",
      signInSubtitle:
        "Accédez à vos insights bibliques et à l'historique d'analyse",
      registerSubtitle:
        "Rejoignez BibleInsight pour enregistrer vos analyses et accéder aux fonctionnalités premium",
      signInButton: "Se Connecter",
      registerButton: "S'Inscrire",
      noAccount: "Vous n'avez pas de compte?",
      haveAccount: "Vous avez déjà un compte?",
      registerNow: "Inscrivez-vous maintenant",
      signInNow: "Connectez-vous maintenant",
    },
    plans: {
      currentPlan: "Forfait Actuel",
      choosePlanBtn: "Choisir {{plan}}",
      perMonth: "/mois",
      unlimited: "Illimité",
      basicInsights: "Insights de base",
      advancedInsights: "Insights avancés",
      conceptMaps: "Cartes conceptuelles",
      fullHistory: "Accès complet à l'historique",
      export: "Capacités d'exportation",
      priorityProcessing: "Traitement prioritaire",
    },
    btns: {
      quickAnalysis: {
        div: "Analyse Rapide",
        p: "Rapide et Simple",
      },
      deepAnalysis: {
        div: "Analyse Approfondie",
        p: "Complète",
      },
      childFriendly: {
        div: "Adapté aux Enfants",
        p: "Simple et Amusant",
      },
      pasteText: "Coller le Texte",
      bibleReference: "Référence Biblique",
      single: "Unique",
      range: "Plage",
      signOut: "Se Déconnecter",
      signIn: "Se Connecter",
    },
    placeholders: {
      bibleInput: "Exemple : Collez ici le texte biblique complet...",
      reference: "Jean",
    },
  },
};

// Mock data for demonstration
const mockPlans = [
  {
    id: "free",
    name: "Free",
    key: "free",
    price: 0,
    monthlyLimit: 5,
    aiModel: "meta-llama/llama-3.2-3b-instruct:free",
    features: {
      basicInsights: true,
      advancedInsights: false,
      conceptMaps: false,
      fullHistory: false,
      export: false,
      priorityProcessing: false,
    },
    paypalPlanId: null,
  },
  {
    id: "premium",
    name: "Premium",
    key: "premium",
    price: 9,
    monthlyLimit: 400,
    aiModel: "google/gemini-pro-1.5",
    features: {
      basicInsights: true,
      advancedInsights: true,
      conceptMaps: true,
      fullHistory: true,
      export: false,
      priorityProcessing: false,
    },
    paypalPlanId: "premium-paypal-id",
  },
  {
    id: "pro",
    name: "Pro",
    key: "pro",
    price: 19,
    monthlyLimit: Infinity,
    aiModel: "anthropic/claude-3.5-sonnet",
    features: {
      basicInsights: true,
      advancedInsights: true,
      conceptMaps: true,
      fullHistory: true,
      export: true,
      priorityProcessing: true,
    },
    paypalPlanId: "pro-paypal-id",
  },
];

// State management
let currentUser = {
  id: "user123",
  name: "John Doe",
  email: "john.doe@example.com",
  plan: "free",
  analysesThisMonth: 2,
  monthlyLimit: 5,
  language: "en",
  subscription: {
    id: "sub-123",
    status: "ACTIVE",
    planId: "premium-paypal-id",
    startDate: new Date(),
    nextBillingDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
  },
};

// Mock AI response data
const mockAIResponse = {
  summary:
    "A passagem de Gênesis 1:1-10 descreve os primeiros dias da criação, começando com a famosa declaração de abertura: 'No princípio, Deus criou os céus e a terra.' O texto detalha como Deus trouxe ordem ao caos inicial, criando luz, separando águas e formando terra firme. Cada ato é precedido pelo comando divino 'Haja...' e é seguido pela observação divina de que 'era bom'. Isso estabelece Deus como o Criador soberano que traz ordem e propósito à existência. Espiritualmente, enfatiza a bondade inerente da criação e a autoridade de Deus sobre toda a criação. Historicamente, este texto foi fundamental para as cosmovisões judaico-cristãs, enfatizando a criação ex nihilo (do nada) e contrastando com as narrativas de criação pagãs onde os deuses emergem do caos. A criação por fiat (ordem falada) demonstra o poder e a autoridade da Palavra de Deus.",
  context:
    "Gênesis 1 é o início da Bíblia hebraica e serve como a narrativa de criação para as três religiões abraâmicas. É provavelmente escrito durante o exílio babilônico, servindo tanto como uma narrativa de origem quanto como uma refutação teológica das religiões politeístas circundantes. Em vez de deuses batalhando pelo controle, o Deus de Israel simplesmente fala e a criação vem à existência. A estrutura de 'tarde e manhã' refuta possíveis associações com rituais pagãos ocorrendo à noite. A criação por etapas mostra um Deus de ordem, não caos.",
  practicalExample:
    "Em um mundo que muitas vezes parece caótico e sem sentido, esta passagem lembra os crentes de que Deus é a fonte de toda a ordem, beleza e propósito. Quando se enfrenta o caos na vida - seja no trabalho, relacionamentos ou saúde mental - pode-se lembrar que o mesmo Deus que trouxe ordem ao universo pode trazer paz e propósito às nossas vidas. Isso pode se manifestar em escolher responder com calma a uma situação volátil, confiando que Deus está no controle, ou em organizar os próprios espaços e rotinas para melhor refletir a ordem de Deus. Em um nível prático, também nos chama a ser bons mordomos da criação, desde a redução de resíduos até o apoio a políticas que protegem o mundo natural.",
  personalReflection:
    "A profundidade de Gênesis 1 me atinge toda vez que eu o leio. A simplicidade com que Deus cria - 'Haja luz', e houve luz - é ao mesmo tempo humilhante e fortalecedor. Significa que nem mesmo o caos em minha vida está fora do controle de Deus. Ele pode trazer ordem ao meu caos com uma palavra. Mas também me lembra que, como parte da criação de Deus, sou chamado a refletir sua bondade e ordem em meu próprio life. Quando me sinto vazio ou sem forma, posso me apegar ao fato de que Deus ainda está formando e preenchendo-me, assim como Ele fez com a terra. O fato de que Ele chamou tudo de 'bom' me lembra que vejo a mim mesmo e aos outros de forma muito crítica, enquanto Deus vê a bondade inerente em Sua criação.",
  test: [
    {
      question:
        "Qual é a fonte primária de luz no primeiro dia antes da criação do sol?",
      options: [
        "A glória de Deus",
        "A luz do próprio Criador",
        "As estrelas distantes",
        "A luz é um atributo de Deus, não necessariamente uma fonte física",
      ],
      correctAnswer: "d",
    },
    {
      question: "Por que a separação da luz e das trevas é significativa?",
      options: [
        "Estabelece o ciclo do dia e da noite",
        "Previne futuras heresias gnósticas",
        "Mostra o domínio de Deus sobre ambos",
        "Todas as acima",
      ],
      correctAnswer: "d",
    },
    {
      question: "O que a repetição de 'e foi bom' sugere sobre a criação?",
      options: [
        "Deus é um perfeccionista",
        "A criação é intrinsecamente boa",
        "Deus estava cansado",
        "A criação é apenas temporária",
      ],
      correctAnswer: "b",
    },
    {
      question:
        "O que a separação das águas acima e abaixo do firmamento representa?",
      options: [
        "A separação do caos primordial",
        "A futura inundação de Noé",
        "A divisão entre águas salgadas e doces",
        "Uma preparação para a chuva",
      ],
      correctAnswer: "a",
    },
    {
      question: "Qual é o significado de Deus nomeando os elementos?",
      options: [
        "Estabelece domínio humano",
        "Reflete a tradição hebraica",
        "Estabelece domínio e ordem divinos",
        "Todas as acima",
      ],
      correctAnswer: "c",
    },
    {
      question: "Como a estrutura de seis dias impacta a visão de mundo?",
      options: [
        "Refuta a evolução",
        "Mostra Deus trabalhando em tempo real",
        "Estabelece um padrão para a semana de trabalho",
        "Todas as acima",
      ],
      correctAnswer: "d",
    },
    {
      question: "Por que a criação da luz é primeiro?",
      options: [
        "É o mais importante",
        "Para separar do caos espiritual",
        "Para estabelecer o tempo",
        "Todas as acima",
      ],
      correctAnswer: "d",
    },
    {
      question: "O que a ausência de 'e foi bom' no segundo dia implica?",
      options: [
        "A criação do firmamento foi incompleta",
        "Deus não estava satisfeito ainda",
        "O julgamento está reservado",
        "Nenhuma das acima",
      ],
      correctAnswer: "c",
    },
    {
      question:
        "Como a criação por fiat se compara à criação em outras religiões?",
      options: [
        "É mais violento",
        "É mais rápido e ordenado",
        "Envolve menos deuses",
        "Todas as acima",
      ],
      correctAnswer: "d",
    },
    {
      question: "Qual é a principal lição de Gênesis 1:1-10?",
      options: [
        "Deus é criador",
        "A criação é boa",
        "A ordem de Deus traz paz",
        "Todas as acima",
      ],
      correctAnswer: "d",
    },
  ],
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
const loginBtn = document.getElementById("login-btn");
const mobileLoginBtn = document.getElementById("mobile-login-btn");
const authModal = document.getElementById("auth-modal");
const authModalClose = document.getElementById("auth-modal-close");
const authForm = document.getElementById("auth-form");
const authEmail = document.getElementById("auth-email");
const authPassword = document.getElementById("auth-password");
const authLanguage = document.getElementById("auth-language");
const authSubmitBtn = document.getElementById("auth-submit-btn");
const switchToRegister = document.getElementById("switch-to-register");
const authModalTitle = document.getElementById("auth-modal-title");
const authModalSubtitle = document.getElementById("auth-modal-subtitle");
const authError = document.getElementById("auth-error");
const profileError = document.getElementById("profile-error");
const plansGrid = document.getElementById("plans-grid");
const paypalModal = document.getElementById("paypal-modal");
const paypalModalClose = document.getElementById("paypal-modal-close");
const paypalError = document.getElementById("paypal-error");
const paypalButtonContainer = document.getElementById(
  "paypal-button-container"
);

// Translation function
function t(key) {
  const keys = key.split(".");
  let value = translations[currentLanguage];

  for (let k of keys) {
    if (value && value[k] !== undefined) {
      value = value[k];
    } else {
      return key;
    }
  }

  return value;
}

// Update all text content
function updateTextContent() {
  document.getElementById("logo-text").textContent = t("logoText");
  document.getElementById("mobile-logo-text").textContent = t("logoText");
  document.getElementById("hero-title").textContent = t("heroTitle");
  document.getElementById("hero-subtitle").textContent = t("heroSubtitle");
  document.getElementById("input-label-text").textContent = t("inputLabelText");
  document.getElementById("reference-label").textContent = t("referenceLabel");
  document.getElementById("book-label").textContent = t("bookLabel");
  document.getElementById("chapter-label").textContent = t("chapterLabel");
  document.getElementById("verse-label").textContent = t("verseLabel");
  document.getElementById("analyze-text").textContent = t("analyzeText");
  document.getElementById("loading-text").textContent = t("loadingText");
  document.getElementById("summary-title").textContent = t("summaryTitle");
  document.getElementById("context-title").textContent = t("contextTitle");
  document.getElementById("practical-title").textContent = t("practicalTitle");
  document.getElementById("reflection-title").textContent =
    t("reflectionTitle");
  document.getElementById("quiz-title").textContent = t("quizTitle");
  document.getElementById("plans-title").textContent = t("plansTitle");
  document.getElementById("plans-subtitle").textContent = t("plansSubtitle");
  document.getElementById("history-title").textContent = t("historyTitle");
  document.getElementById("history-subtitle").textContent =
    t("historySubtitle");
  document.getElementById("profile-name").textContent = t("profileName");
  document.getElementById("profile-email").textContent = t("profileEmail");
  document.getElementById("analyses-label").textContent = t("analysesLabel");
  document.getElementById("plan-label").textContent = t("planLabel");
  document.getElementById("limit-label").textContent = t("limitLabel");
  document.getElementById("auth-modal-title").textContent = t("auth.signIn");
  document.getElementById("auth-modal-subtitle").textContent = t(
    "auth.signInSubtitle"
  );
  document.getElementById("auth-email").placeholder = t("auth.email");
  document.getElementById("auth-password").placeholder = t("auth.password");
  document.getElementById("auth-submit-btn").textContent =
    t("auth.signInButton");
  document.getElementById("switch-to-register").textContent =
    t("auth.registerNow");
  document.getElementById("bible-input").placeholder = t(
    "placeholders.bibleInput"
  );
  document.getElementById("book-input").placeholder = t(
    "placeholders.reference"
  );
  document.querySelector("#quick-analysis-title").textContent = t(
    "btns.quickAnalysis.div"
  );
  document.querySelector("#quick-analysis-desc").textContent = t(
    "btns.quickAnalysis.p"
  );
  document.querySelector("#deep-analysis-title").textContent = t(
    "btns.deepAnalysis.div"
  );
  document.querySelector("#deep-analysis-desc").textContent = t(
    "btns.deepAnalysis.p"
  );
  document.querySelector("#child-friendly-title").textContent = t(
    "btns.childFriendly.div"
  );
  document.querySelector("#child-friendly-desc").textContent = t(
    "btns.childFriendly.p"
  );
  document.querySelector("#text-tab").textContent = t("btns.pasteText");
  document.querySelector("#reference-tab").textContent = t(
    "btns.bibleReference"
  );
  document.querySelector("#single-btn").textContent = t("btns.single");
  document.querySelector("#range-btn").textContent = t("btns.range");
  document.querySelector("#login-btn").textContent = t("btns.signIn");
  document.querySelector("#mobile-login-btn").textContent = t("btns.signIn");
  document.getElementById("menu-home").textContent = t("menu.home");
  document.getElementById("mobile-menu-home").textContent = t("menu.home");
  document.getElementById("menu-profile").textContent = t("menu.profile");
  document.getElementById("mobile-menu-profile").textContent =
    t("menu.profile");
  document.getElementById("menu-plans").textContent = t("menu.plans");
  document.getElementById("mobile-menu-plans").textContent = t("menu.plans");
  document.getElementById("menu-history").textContent = t("menu.history");
  document.getElementById("mobile-menu-history").textContent =
    t("menu.history");

  // Update usage info
  updateUsageInfo();

  // Update plans
  renderPlans(mockPlans);
}

// Theme toggle
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

// Language selection
function updateLanguage(lang) {
  currentLanguage = lang;
  localStorage.setItem("language", lang);
  updateTextContent();
}

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

// Auth modal
loginBtn.addEventListener("click", () => {
  authModal.classList.add("active");
});

mobileLoginBtn.addEventListener("click", () => {
  authModal.classList.add("active");
});

authModalClose.addEventListener("click", () => {
  authModal.classList.remove("active");
});

// Close auth modal when clicking outside
authModal.addEventListener("click", (e) => {
  if (e.target == authModal) {
    authModal.classList.remove("active");
  }
});






/*------------------------------------backend------------------------------------*/
// Switch between sign in and register
switchToRegister.addEventListener("click", (e) => {
  e.preventDefault();
  const isRegister = authModalTitle.textContent === t("auth.register");
  if (isRegister) {
    authModalTitle.textContent = t("auth.signIn");
    authModalSubtitle.textContent = t("auth.signInSubtitle");
    authSubmitBtn.textContent = t("auth.signInButton");
    switchToRegister.textContent = t("auth.registerNow");
  } else {
    authModalTitle.textContent = t("auth.register");
    authModalSubtitle.textContent = t("auth.registerSubtitle");
    authSubmitBtn.textContent = t("auth.registerButton");
    switchToRegister.textContent = t("auth.signInNow");
  }
  authError.style.display = "none";
  authEmail.value = "";
  authPassword.value = "";
  authLanguage.value = currentLanguage;
});

// Auth form submission
authForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = authName.value.trim();
  const email = authEmail.value.trim();
  const password = authPassword.value.trim();

  if (!name ||!email || !password) {
    authError.style.display = "block";
    authError.textContent = "Please fill in all fields";
    return;
  }

  authError.style.display = "none";
  authSubmitBtn.disabled = true;
  authSubmitBtn.textContent = "Processing...";

  // Simulate API call
  setTimeout(() => {
    authModal.classList.remove("active");
    authSubmitBtn.disabled = false;
    authSubmitBtn.textContent = t("auth.signInButton");
    updateUIWithUserData();
    updateUsageInfo();
    alert("Signed in successfully!");
  }, 1500);
});

// Profile editing
editProfileBtn.addEventListener("click", () => {
  document.getElementById("full-name").value = currentUser.name;
  document.getElementById("email").value = currentUser.email;
  document.getElementById("phone").value = "+1 (555) 123-4567";
  document.getElementById("timezone").value = "UTC-5";
  document.getElementById("bio").value =
    "Passionate about biblical studies and spiritual growth. I love exploring the deeper meanings of scripture and applying them to daily life.";
  profileForm.classList.add("active");
});

cancelProfileBtn.addEventListener("click", () => {
  profileForm.classList.remove("active");
});

saveProfileBtn.addEventListener("click", () => {
  profileForm.classList.remove("active");
  alert("Profile updated successfully!");
});

// Update UI with user data
function updateUIWithUserData() {
  document.getElementById("profile-name").textContent = currentUser.name;
  document.getElementById("profile-email").textContent = currentUser.email;
  document.getElementById("plan-type").textContent =
    currentUser.plan.charAt(0).toUpperCase() + currentUser.plan.slice(1);
  document.getElementById("analyses-count").textContent =
    currentUser.analysesThisMonth;

  const plan = mockPlans.find((p) => p.key == currentUser.plan);
  const limit =
    plan.monthlyLimit == Infinity
      ? t("plans.unlimited")
      : `${currentUser.analysesThisMonth}/${plan.monthlyLimit}`;
  document.getElementById("daily-limit").textContent = limit;
}

// Update usage info
function updateUsageInfo() {
  const plan = mockPlans.find((p) => p.key == currentUser.plan);
  const lang = currentLanguage;
  const t = translations[lang].usageInfo;

  if (currentUser.plan == "pro") {
    usageInfo.innerHTML = `<span class="usage-info-text">${t.pro}</span>`;
    usageInfo.className = "usage-info";
  } else {
    const used = currentUser.analysesThisMonth;
    const total = plan.monthlyLimit;
    const usageText = t[currentUser.plan]
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

// Check if user can perform analysis
function canAnalyze() {
  const plan = mockPlans.find((p) => p.key == currentUser.plan);
  if (!plan) return false;

  if (
    plan.monthlyLimit !== Infinity &&
    currentUser.analysesThisMonth >= plan.monthlyLimit
  ) {
    return false;
  }

  return true;
}

// Analyze function
analyzeBtn.addEventListener("click", () => {
  if (!canAnalyze()) {
    alert(
      "You have reached your monthly analysis limit. Please upgrade your plan to continue."
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
    displayResults(mockAIResponse);
    resultsSection.style.display = "grid";
    resultsSection.style.gridTemplateColumns =
      "repeat(auto-fit, minmax(300px, 1fr))";

    // Update usage count
    currentUser.analysesThisMonth++;
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

// Render plans
function renderPlans(plans) {
  plansGrid.innerHTML = "";

  plans.forEach((plan) => {
    const planCard = document.createElement("div");
    planCard.className = `plan-card ${plan.key === "premium" ? "popular" : ""}`;

    let planLimit;

    if (plan.monthlyLimit == Infinity) {
      planLimit = t("proFeature1");
    } else if (plan.monthlyLimit == 5) {
      planLimit = t("freeFeature1");
    } else if (plan.monthlyLimit == 400) {
      planLimit = t("premiumFeature1");
    }

    let planButtonHTML = "";
    if (currentUser && currentUser.plan === plan.key) {
      if (plan.key === "free") {
        planButtonHTML = `<button class="plan-btn" disabled>${t(
          "plans.currentPlan"
        )}</button>`;
      } else {
        planButtonHTML = `
          <div class="subscription-status">
            ${t("plans.currentPlan")} • ${
          currentUser.subscription?.status == "ACTIVE" ? "Active" : "Cancelled"
        }
           ${
             currentUser.subscription?.nextBillingDate
               ? ` • Next billing: ${new Date(
                   currentUser.subscription.nextBillingDate
                 ).toLocaleDateString()}`
               : ""
           }
          </div>
          <button class="cancel-subscription-btn" onclick="handleCancelSubscription('${
            plan.key
          }')">
                Cancel Subscription
          </button>
        `;
      }
    } else if (plan.key === "free") {
      planButtonHTML = `<button class="plan-btn" data-plan="${
        plan.key
      }" onclick="handlePlanSelection('${plan.key}')">${t(
        "plans.choosePlanBtn"
      ).replace("{{plan}}", t(`${plan.key}Plan`))}</button>`;
    } else {
      planButtonHTML = `<button class="plan-btn" data-plan="${
        plan.key
      }" onclick="handlePayPalSubscription('${plan.key}', '${
        plan.paypalPlanId
      }')">${t("plans.choosePlanBtn").replace(
        "{{plan}}",
        t(`${plan.key}Plan`)
      )}</button>`;
    }

    planCard.innerHTML = `
                    <div class="plan-name">${t(`${plan.key}Plan`)}</div>
                    <div class="plan-price">$${plan.price}<span>${t(
      "plans.perMonth"
    )}</span></div>
                    <div class="plan-features">
                        <div class="plan-feature">
                            <i class="fas fa-check"></i>
                            <span>${planLimit}</span>
                        </div>
                        <div class="plan-feature">
                            <i class="fas fa-check"></i>
                            <span>${
                              plan.features.advancedInsights
                                ? t("plans.advancedInsights")
                                : t("plans.basicInsights")
                            }</span>
                        </div>
                        <div class="plan-feature ${
                          plan.features.conceptMaps ? "" : "locked"
                        }">
                            <i class="fas ${
                              plan.features.conceptMaps ? "fa-check" : "fa-lock"
                            }"></i>
                            <span>${t("plans.conceptMaps")}</span>
                        </div>
                        <div class="plan-feature ${
                          plan.features.fullHistory ? "" : "locked"
                        }">
                            <i class="fas ${
                              plan.features.fullHistory ? "fa-check" : "fa-lock"
                            }"></i>
                            <span>${t("plans.fullHistory")}</span>
                        </div>
                    </div>
                    ${planButtonHTML}
                `;
    plansGrid.appendChild(planCard);
  });
}

// Handle plan selection
function handlePlanSelection(planKey) {
  if (planKey === "free") {
    currentUser.plan = "free";
    updateUIWithUserData();
    updateUsageInfo();
    showPage("home");
    alert("Plan updated to Free!");
  } else {
    selectedPlan = mockPlans.find((p) => p.key === planKey);
    handlePayPalSubscription(planKey, selectedPlan.paypalPlanId);
  }
}

// Handle PayPal subscription
function handlePayPalSubscription(planKey, planId) {
  selectedPlan = mockPlans.find((p) => p.key === planKey);

  // Show PayPal modal
  document.getElementById("paypal-modal-title").textContent = `Subscribe to ${t(
    `${planKey}Plan`
  )}`;
  document.getElementById(
    "paypal-modal-subtitle"
  ).textContent = `Only $${selectedPlan.price} per month`;
  document.getElementById("paypal-error").style.display = "none";
  paypalModal.classList.add("active");

  // Initialize PayPal buttons
  initializePayPalButtons(planId);
}

// Initialize PayPal buttons
function initializePayPalButtons(planId) {
  if (typeof paypal === "undefined") {
    console.error("PayPal SDK not loaded");
    return;
  }

  paypalButtonContainer.innerHTML = "";

  paypal
    .Buttons({
      style: {
        layout: "vertical",
        color: "gold",
        shape: "rect",
        label: "subscribe",
      },
      createSubscription: function (data, actions) {
        return actions.subscription.create({
          plan_id: planId,
        });
      },
      onApprove: function (data, actions) {
        alert("Subscription created successfully!");
        currentUser.plan = selectedPlan.key;
        currentUser.analysesThisMonth = 0;
        updateUIWithUserData();
        updateUsageInfo();
        paypalModal.classList.remove("active");
        showPage("home");
      },
      onError: function (err) {
        console.error("PayPal error:", err);
        document.getElementById("paypal-error").style.display = "block";
        document.getElementById("paypal-error").textContent =
          "An error occurred with PayPal. Please try again.";
      },
    })
    .render("#paypal-button-container");
}

// Handle cancel subscription
function handleCancelSubscription(planKey) {
  if (
    confirm(
      "Are you sure you want to cancel your subscription? You will lose access to premium features at the end of your billing period."
    )
  ) {
    currentUser.plan = "free";
    currentUser.analysesThisMonth = 0;
    updateUIWithUserData();
    updateUsageInfo();
    showPage("plans");
    alert("Subscription cancelled successfully!");
  }
}

// Close PayPal modal
paypalModalClose.addEventListener("click", () => {
  paypalModal.classList.remove("active");
});

// Close PayPal modal when clicking outside
paypalModal.addEventListener("click", (e) => {
  if (e.target === paypalModal) {
    paypalModal.classList.remove("active");
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

  // Populate plans if needed
  if (pageId === "plans") {
    renderPlans(mockPlans);
  }
}

// Populate history
function populateHistory() {
  historyList.innerHTML = "";

  const historyItems = [
    {
      reference: "John 3:16",
      date: "Today, 2:30 PM",
      summary: "God so loved the world that he gave his one and only Son...",
    },
    {
      reference: "Psalm 23",
      date: "Yesterday, 10:15 AM",
      summary: "The Lord is my shepherd; I shall not want...",
    },
    {
      reference: "Matthew 5:1-12",
      date: "Oct 15, 2024",
      summary:
        "Blessed are the poor in spirit, for theirs is the kingdom of heaven...",
    },
  ];

  historyItems.forEach((item) => {
    const historyItem = document.createElement("div");
    historyItem.className = "history-item";
    historyItem.innerHTML = `
                    <div class="history-header">
                        <div class="history-reference">${item.reference}</div>
                        <div class="history-date">${item.date}</div>
                    </div>
                    <div class="history-summary">${item.summary}</div>
                `;
    historyItem.addEventListener("click", () =>
      showHistoryAnalysis(item.reference)
    );
    historyList.appendChild(historyItem);
  });
}

// Show history analysis
function showHistoryAnalysis(reference) {
  showPage("home");
  // Simulate loading the analysis
  loading.style.display = "block";
  resultsSection.style.display = "none";

  setTimeout(() => {
    loading.style.display = "none";
    displayResults(mockAIResponse);
    resultsSection.style.display = "grid";
    resultsSection.style.gridTemplateColumns =
      "repeat(auto-fit, minmax(300px, 1fr))";
  }, 1500);
}

// Initialize
function init() {
  // Set theme
  const savedTheme = localStorage.getItem("theme") || "light";
  if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
    themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    mobileThemeToggle.innerHTML = '<i class="fas fa-sun"></i>';
  }

  // Set language
  const savedLanguage = localStorage.getItem("language") || "en";
  currentLanguage = savedLanguage;
  languageSelect.value = savedLanguage;
  mobileLanguageSelect.value = savedLanguage;

  // Set up event listeners
  themeToggle.addEventListener("click", toggleTheme);
  mobileThemeToggle.addEventListener("click", toggleTheme);

  languageSelect.addEventListener("change", (e) => {
    updateLanguage(e.target.value);
  });

  mobileLanguageSelect.addEventListener("change", (e) => {
    updateLanguage(e.target.value);
  });

  // Initialize UI
  updateTextContent();
  updateUIWithUserData();
  updateUsageInfo();
  renderPlans(mockPlans);
  populateHistory();
}

// Initialize the app
init();

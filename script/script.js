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
    authLoginModalTitle: "Sign In",
    authLoginModalSubtitle:
      "Access your biblical insights and analysis history",
    authRegisterModalTitle: "Create Account",
    authRegisterModalSubtitle:
      "Join BibleInsight to save your analyses and access premium features",
    authVerifyModalTitle: "Verify Your Account",
    authVerifyModalSubtitle: "We've sent a verification code to your email",
    authVerifyInstruction: "Enter the 6-digit code sent to your email",
    authVerifyResend: "Didn't receive the code? Resend code",
    authLoginEmail: "Email Address",
    authLoginPassword: "Password",
    authRegisterName: "Full Name",
    authRegisterEmail: "Email Address",
    authRegisterPassword: "Password",
    authRegisterConfirmPassword: "Confirm Password",
    authRegisterPhone: "Phone Number",
    authRegisterTimezone: "Time Zone",
    authRegisterLanguage: "Language",
    authRegisterBio: "Bio",
    authLoginSubmitBtn: "Sign In",
    authRegisterSubmitBtn: "Register",
    authVerifyBtn: "Verify Account",
    authLoginCancelBtn: "Cancel",
    authRegisterCancelBtn: "Cancel",
    authVerifyCancelBtn: "Cancel",
    switchToRegister: "Register now",
    switchToLogin: "Sign in now",
    authLoginError: "Invalid credentials",
    authRegisterError: "Failed to create account",
    authVerifyError: "Invalid verification code",
    authLoginSuccess: "Signed in successfully!",
    authRegisterSuccess: "Account created successfully!",
    authVerifySuccess: "Account verified successfully!",
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
    authLoginModalTitle: "Entrar",
    authLoginModalSubtitle:
      "Acesse seus insights bíblicos e histórico de análises",
    authRegisterModalTitle: "Criar Conta",
    authRegisterModalSubtitle:
      "Junte-se ao BibleInsight para salvar suas análises e acessar recursos premium",
    authVerifyModalTitle: "Verifique Sua Conta",
    authVerifyModalSubtitle: "Enviamos um código de verificação para seu email",
    authVerifyInstruction:
      "Digite o código de 6 dígitos enviado para seu email",
    authVerifyResend: "Não recebeu o código? Reenviar código",
    authLoginEmail: "Endereço de Email",
    authLoginPassword: "Senha",
    authRegisterName: "Nome Completo",
    authRegisterEmail: "Endereço de Email",
    authRegisterPassword: "Senha",
    authRegisterConfirmPassword: "Confirmar Senha",
    authRegisterPhone: "Número de Telefone",
    authRegisterTimezone: "Fuso Horário",
    authRegisterLanguage: "Idioma",
    authRegisterBio: "Biografia",
    authLoginSubmitBtn: "Entrar",
    authRegisterSubmitBtn: "Registrar",
    authVerifyBtn: "Verificar Conta",
    authLoginCancelBtn: "Cancelar",
    authRegisterCancelBtn: "Cancelar",
    authVerifyCancelBtn: "Cancelar",
    switchToRegister: "Registrar agora",
    switchToLogin: "Entrar agora",
    authLoginError: "Credenciais inválidas",
    authRegisterError: "Falha ao criar conta",
    authVerifyError: "Código de verificação inválido",
    authLoginSuccess: "Conectado com sucesso!",
    authRegisterSuccess: "Conta criada com sucesso!",
    authVerifySuccess: "Conta verificada com sucesso!",
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
    authLoginModalTitle: "Iniciar Sesión",
    authLoginModalSubtitle:
      "Acceda a sus conocimientos bíblicos e historial de análisis",
    authRegisterModalTitle: "Crear Cuenta",
    authRegisterModalSubtitle:
      "Únase a BibleInsight para guardar sus análisis y acceder a funciones premium",
    authVerifyModalTitle: "Verifica Tu Cuenta",
    authVerifyModalSubtitle:
      "Hemos enviado un código de verificación a tu correo electrónico",
    authVerifyInstruction:
      "Ingresa el código de 6 dígitos enviado a tu correo electrónico",
    authVerifyResend: "¿No recibiste el código? Reenviar código",
    authLoginEmail: "Dirección de Correo Electrónico",
    authLoginPassword: "Contraseña",
    authRegisterName: "Nombre Completo",
    authRegisterEmail: "Dirección de Correo Electrónico",
    authRegisterPassword: "Contraseña",
    authRegisterConfirmPassword: "Confirmar Contraseña",
    authRegisterPhone: "Número de Teléfono",
    authRegisterTimezone: "Zona Horaria",
    authRegisterLanguage: "Idioma",
    authRegisterBio: "Biografía",
    authLoginSubmitBtn: "Iniciar Sesión",
    authRegisterSubmitBtn: "Registrar",
    authVerifyBtn: "Verificar Cuenta",
    authLoginCancelBtn: "Cancelar",
    authRegisterCancelBtn: "Cancelar",
    authVerifyCancelBtn: "Cancelar",
    switchToRegister: "Registrarse ahora",
    switchToLogin: "Iniciar sesión ahora",
    authLoginError: "Credenciales inválidas",
    authRegisterError: "Error al crear cuenta",
    authVerifyError: "Código de verificación inválido",
    authLoginSuccess: "¡Sesión iniciada con éxito!",
    authRegisterSuccess: "¡Cuenta creada con éxito!",
    authVerifySuccess: "¡Cuenta verificada con éxito!",
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
    authLoginModalTitle: "Se Connecter",
    authLoginModalSubtitle:
      "Accédez à vos insights bibliques et à votre historique d'analyse",
    authRegisterModalTitle: "Créer un compte",
    authRegisterModalSubtitle:
      "Rejoignez BibleInsight pour enregistrer vos analyses et accéder aux fonctionnalités premium",
    authVerifyModalTitle: "Vérifiez votre compte",
    authVerifyModalSubtitle:
      "Nous avons envoyé un code de vérification à votre adresse e-mail",
    authVerifyInstruction:
      "Entrez le code à 6 chiffres envoyé à votre adresse e-mail",
    authVerifyResend: "Vous n'avez pas reçu le code ? Renvoyer le code",
    authLoginEmail: "Adresse email",
    authLoginPassword: "Mot de passe",
    authRegisterName: "Nom complet",
    authRegisterEmail: "Adresse email",
    authRegisterPassword: "Mot de passe",
    authRegisterConfirmPassword: "Confirmer le mot de passe",
    authRegisterPhone: "Numéro de téléphone",
    authRegisterTimezone: "Fuseau horaire",
    authRegisterLanguage: "Langue",
    authRegisterBio: "Biographie",
    authLoginSubmitBtn: "Se Connecter",
    authRegisterSubmitBtn: "S'inscrire",
    authVerifyBtn: "Vérifier le compte",
    authLoginCancelBtn: "Annuler",
    authRegisterCancelBtn: "Annuler",
    authVerifyCancelBtn: "Annuler",
    switchToRegister: "S'inscrire maintenant",
    switchToLogin: "Se connecter maintenant",
    authLoginError: "Identifiants invalides",
    authRegisterError: "Échec de la création du compte",
    authVerifyError: "Code de vérification invalide",
    authLoginSuccess: "Connecté avec succès !",
    authRegisterSuccess: "Compte créé avec succès !",
    authVerifySuccess: "Compte vérifié avec succès !",
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
    paypalPlanId: "P-9VV64429E22600438M73KLKY",
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
    paypalPlanId: "P-9VV64429E22600438M73KLKY",
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
const profileError = document.getElementById("profile-error");
const plansGrid = document.getElementById("plans-grid");
const paypalModal = document.getElementById("paypal-modal");
const paypalModalClose = document.getElementById("paypal-modal-close");
const paypalError = document.getElementById("paypal-error");
const paypalButtonContainer = document.getElementById(
  "paypal-button-container"
);

const authLoginModal = document.getElementById("auth-login-modal");
const authRegisterModal = document.getElementById("auth-register-modal");
const authVerifyModal = document.getElementById("auth-verify-modal");
const authLoginModalClose = document.getElementById("auth-login-modal-close");
const authRegisterModalClose = document.getElementById(
  "auth-register-modal-close"
);
const authVerifyModalClose = document.getElementById("auth-verify-modal-close");
const authLoginForm = document.getElementById("auth-login-form");
const authRegisterForm = document.getElementById("auth-register-form");
const switchToRegister = document.getElementById("switch-to-register");
const switchToLogin = document.getElementById("switch-to-login");
const authLoginSubmitBtn = document.getElementById("auth-login-submit-btn");
const authRegisterSubmitBtn = document.getElementById(
  "auth-register-submit-btn"
);
const authVerifyBtn = document.getElementById("auth-verify-btn");
const authLoginCancelBtn = document.getElementById("auth-login-cancel-btn");
const authRegisterCancelBtn = document.getElementById(
  "auth-register-cancel-btn"
);
const authVerifyCancelBtn = document.getElementById("auth-verify-cancel-btn");
const authResendCode = document.getElementById("auth-resend-code");
const authCodeDigits = document.querySelectorAll(".auth-code-digit");

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
  document.getElementById("analyses-label").textContent = t("analysesLabel");
  document.getElementById("plan-label").textContent = t("planLabel");
  document.getElementById("limit-label").textContent = t("limitLabel");

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

  document.getElementById("logo-text").textContent = t("logoText");
  document.getElementById("hero-title").textContent = t("heroTitle");
  document.getElementById("hero-subtitle").textContent = t("heroSubtitle");
  document.getElementById("auth-login-modal-title").textContent = t(
    "authLoginModalTitle"
  );
  document.getElementById("auth-login-modal-subtitle").textContent = t(
    "authLoginModalSubtitle"
  );
  document.getElementById("auth-register-modal-title").textContent = t(
    "authRegisterModalTitle"
  );
  document.getElementById("auth-register-modal-subtitle").textContent = t(
    "authRegisterModalSubtitle"
  );
  document.getElementById("auth-verify-modal-title").textContent = t(
    "authVerifyModalTitle"
  );
  document.getElementById("auth-verify-modal-subtitle").textContent = t(
    "authVerifyModalSubtitle"
  );
  document.getElementById("auth-verify-instruction").textContent = t(
    "authVerifyInstruction"
  );
  document.getElementById("auth-verify-resend").innerHTML =
    t("authVerifyResend");
  document.querySelector('[for="auth-login-email"]').textContent =
    t("authLoginEmail");
  document.querySelector('[for="auth-login-password"]').textContent =
    t("authLoginPassword");
  document.querySelector('[for="auth-register-name"]').textContent =
    t("authRegisterName");
  document.querySelector('[for="auth-register-email"]').textContent =
    t("authRegisterEmail");
  document.querySelector('[for="auth-register-password"]').textContent = t(
    "authRegisterPassword"
  );
  document.querySelector('[for="auth-register-confirm-password"]').textContent =
    t("authRegisterConfirmPassword");
  document.getElementById("auth-login-submit-btn").textContent =
    t("authLoginSubmitBtn");
  document.getElementById("auth-register-submit-btn").textContent = t(
    "authRegisterSubmitBtn"
  );
  document.getElementById("auth-verify-btn").textContent = t("authVerifyBtn");
  document.getElementById("auth-login-cancel-btn").textContent =
    t("authLoginCancelBtn");
  document.getElementById("auth-register-cancel-btn").textContent = t(
    "authRegisterCancelBtn"
  );
  document.getElementById("auth-verify-cancel-btn").textContent = t(
    "authVerifyCancelBtn"
  );
  document.getElementById("switch-to-register").textContent =
    t("switchToRegister");
  document.getElementById("switch-to-login").textContent = t("switchToLogin");

  updateUsageInfo();
  updateUIWithUserData();
  renderPlans();
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
function setAnalysisType(type) {
  quickBtn.classList.remove("active");
  deepBtn.classList.remove("active");
  childBtn.classList.remove("active");

  if (type == "deep") deepBtn.classList.add("active");
  else if (type == "child") childBtn.classList.add("active");
  else quickBtn.classList.add("active");

  localStorage.setItem("analysisType", type);
}

quickBtn.addEventListener("click", () => setAnalysisType("quick"));
deepBtn.addEventListener("click", () => setAnalysisType("deep"));
childBtn.addEventListener("click", () => setAnalysisType("child"));

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

// Função para salvar o modal atual
function saveCurrentModal(name) {
  localStorage.setItem("currentModal", name);
}

// Função para limpar o modal salvo
function clearSavedModal() {
  localStorage.removeItem("currentModal");
}

// Mostrar modais e salvar o nome
function showLoginModal() {
  closeAllAuthModals();
  authLoginModal.classList.add("active");
  saveCurrentModal("login");
}

function showRegisterModal() {
  closeAllAuthModals();
  authRegisterModal.classList.add("active");
  saveCurrentModal("register");
}

function showVerificationModal() {
  closeAllAuthModals();
  authVerifyModal.classList.add("active");
  saveCurrentModal("verify");
}

// Fechar todos e limpar o localStorage
function closeAllAuthModals() {
  authLoginModal.classList.remove("active");
  authRegisterModal.classList.remove("active");
  authVerifyModal.classList.remove("active");
  clearSavedModal();
}

// === Seus listeners permanecem iguais ===
loginBtn.addEventListener("click", showLoginModal);
mobileLoginBtn.addEventListener("click", showLoginModal);
authLoginModalClose.addEventListener("click", closeAllAuthModals);
authRegisterModalClose.addEventListener("click", closeAllAuthModals);
authVerifyModalClose.addEventListener("click", closeAllAuthModals);
authLoginCancelBtn.addEventListener("click", closeAllAuthModals);
authRegisterCancelBtn.addEventListener("click", closeAllAuthModals);
authVerifyCancelBtn.addEventListener("click", closeAllAuthModals);

authLoginModal.addEventListener("click", (e) => {
  if (e.target == authLoginModal) closeAllAuthModals();
});
authRegisterModal.addEventListener("click", (e) => {
  if (e.target == authRegisterModal) closeAllAuthModals();
});
authVerifyModal.addEventListener("click", (e) => {
  if (e.target == authVerifyModal) closeAllAuthModals();
});

switchToRegister.addEventListener("click", (e) => {
  e.preventDefault();
  showRegisterModal();
});
switchToLogin.addEventListener("click", (e) => {
  e.preventDefault();
  showLoginModal();
});

// Code digit input handling
authCodeDigits.forEach((digit, index) => {
  digit.addEventListener("input", () => {
    if (digit.value.length === 1 && index < authCodeDigits.length - 1) {
      authCodeDigits[index + 1].focus();
    }
  });

  digit.addEventListener("keydown", (e) => {
    if (e.key === "Backspace" && digit.value === "" && index > 0) {
      authCodeDigits[index - 1].focus();
    }
  });
});

function showMessage(type = "success", message) {
  const existingToasts = document.querySelectorAll(".toast");
  existingToasts.forEach((toast) => toast.remove());

  const toast = document.createElement("div");
  toast.className = `toast ${type}`;

  const icon = type === "success" ? "check-circle" : "exclamation-circle";

  toast.innerHTML = `
        <i class="fas fa-${icon}"></i>
        <span>${message}</span>
    `;

  document.body.appendChild(toast);

  setTimeout(() => {
    toast.style.animation = "fadeOut 0.3s ease-out forwards";
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

function error(msg) {
  showMessage("error", msg);
}
function success(msg) {
  showMessage("success", msg);
}

/*------------------------------------backend------------------------------------*/
/*------------------------------------backend------------------------------------*/
/*------------------------------------backend------------------------------------*/
/*------------------------------------backend------------------------------------*/
/*------------------------------------backend------------------------------------*/
/*------------------------------------backend------------------------------------*/

const api = axios.create({
  baseURL: `http://localhost:5000/api`,
  withCredentials: true,
});

function errorMsg(error) {
  if (error.response) {
    const status = error.response.status;

    if (status == 401) {
      showMessage("error", "Sessão expirada. Faça login novamente.");
    } else {
      showMessage(
        "error",
        error.response.data?.error_msg || "Erro inesperado."
      );
    }
  } else {
    console.error("Error fetching client data:", error);
    showMessage("error", "Erro de conexão com o servidor.");
  }
}

// Auth Login Form Submission
authLoginForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = document.getElementById("auth-login-email").value.trim();
  const password = document.getElementById("auth-login-password").value;

  if (!email || !password) {
    showMessage("error", `${translations[currentLanguage].authLoginError}`);
    return;
  }

  authLoginSubmitBtn.disabled = true;
  authLoginSubmitBtn.textContent = "Signing In...";

  try {
    const res = await api.post("/auth/login", { email, password });
    const data = res.data;

    if (data.error_msg) return error(data.error_msg);
    if (data.client.isVerified == false) {
      localStorage.setItem("email", data.client.email);
      showVerificationModal();
    }
  } catch (error) {
    errorMsg(error);
  } finally {
    authLoginSubmitBtn.disabled = false;
    authLoginSubmitBtn.textContent =
      translations[currentLanguage].authLoginSubmitBtn;
  }
});

// Auth Register Form Submission
authRegisterForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const name = document.getElementById("auth-register-name").value.trim();
  const email = document.getElementById("auth-register-email").value.trim();
  const password = document.getElementById("auth-register-password").value;
  const confirmPassword = document.getElementById(
    "auth-register-confirm-password"
  ).value;

  // Validation
  if (!name || !email || !password || !confirmPassword) {
    showMessage("error", `${translations[currentLanguage].authRegisterError}`);
    return;
  }

  if (password !== confirmPassword) {
    showMessage("error", `Passwords do not match`);
    return;
  }

  if (password.length < 6) {
    showMessage("error", "Password must be at least 6 characters");
    return;
  }

  authRegisterSubmitBtn.disabled = true;
  authRegisterSubmitBtn.textContent = "Creating Account...";

  try {
    const res = await api.post("auth/register", { name, email, password });
    const data = res.data;

    if (data.error_msg) return error(data.error_msg);
    localStorage.setItem("email", data.client.email);

    showVerificationModal();
  } catch (error) {
    errorMsg(error);
  } finally {
    authRegisterSubmitBtn.disabled = false;
    authRegisterSubmitBtn.textContent =
      translations[currentLanguage].authRegisterSubmitBtn;
  }
});

// Auth Verification Form Submission
authVerifyBtn.addEventListener("click", async () => {
  const email = localStorage.getItem("email");

  const enteredCode = Array.from(authCodeDigits)
    .map((digit) => digit.value)
    .join("");

  authVerifyBtn.disabled = true;
  authVerifyBtn.textContent = "Verifying...";

  try {
    const res = await api.post("/auth/verify", { email, code: enteredCode });
    const data = res.data;

    if (data.error_msg) return error(data.error_msg);
    authCodeDigits.forEach((digit) => (digit.value = ""));
    authCodeDigits[0].focus();

    closeAllAuthModals();
    localStorage.removeItem("email");
  } catch (error) {
    errorMsg(error);
  } finally {
    authVerifyBtn.disabled = false;
    authVerifyBtn.textContent = translations[currentLanguage].authVerifyBtn;
  }
});

// Resend verification code
authResendCode.addEventListener("click", (e) => {
  e.preventDefault();

  // Simulate resending code
  verificationCode = generateVerificationCode();
  console.log("New verification code (for demo):", verificationCode);

  authVerifySuccess.style.display = "block";
  authVerifySuccess.textContent = "Verification code resent successfully!";

  // Clear code inputs
  authCodeDigits.forEach((digit) => (digit.value = ""));
  authCodeDigits[0].focus();
});

// Profile editing
editProfileBtn.addEventListener("click", async () => {
  try {
    const resClient = await api.get("/users/me");
    const user = resClient.data.user;
    document.getElementById("full-name").value = user.name;
    profileForm.classList.add("active");
  } catch (error) {
    errorMsg(error);
  }
});

cancelProfileBtn.addEventListener("click", () => {
  profileForm.classList.remove("active");
});

saveProfileBtn.addEventListener("click", async () => {
  const name = document.getElementById("full-name").value.trim();

  try {
    const res = await api.put("/users/me", { name });
    const data = res.data;

    updateUIWithUserData();
    profileForm.classList.remove("active");
    if (data.error_msg) return error(error_msg);
    if (data.success_msg) return success(success_msg);
  } catch (error) {
    profileForm.classList.remove("active");
    errorMsg(error);
  }
});

async function updateUIWithUserData() {
  const res = await api.get("/plans");
  const plans = res.data.plans;

  const resClient = await api.get("/users/me");
  const user = resClient.data.user;

  const userPlan = plans.find((p) => p.key == user.plan);

  document.getElementById("profile-name").textContent = user.name;
  document.getElementById("profile-email").textContent = user.email;
  document.getElementById("plan-type").textContent =
    userPlan.name.toUpperCase();
  document.getElementById("analyses-count").textContent =
    user.analysesThisMonth;

  const limit =
    userPlan.key == "pro"
      ? t("plans.unlimited")
      : `${user.analysesThisMonth}/${userPlan.monthlyLimit}`;
  document.getElementById("daily-limit").textContent = limit;
}

async function updateUsageInfo() {
  try {
    // Buscar planos e dados do usuário
    const [resPlans, resUser] = await Promise.all([
      api.get("/plans"),
      api.get("/users/me"),
    ]);

    const plans = resPlans.data.plans;
    const user = resUser.data.user;
    const userPlan = plans.find((p) => p.key == user.plan);

    if (!userPlan) {
      usageInfo.innerHTML = `<span class="usage-warning">Plano do usuário não encontrado.</span>`;
      return;
    }

    const lang = localStorage.getItem("language") || "en";
    const t = translations[lang].usageInfo;

    const used = user.analysesThisMonth ?? 0;

    // Corrigir detecção de plano ilimitado
    const isUnlimited =
      userPlan.monthlyLimit === Infinity ||
      userPlan.monthlyLimit === "Infinity" ||
      userPlan.monthlyLimit === null ||
      user.plan === "pro";

    // Plano Pro (ilimitado)
    if (isUnlimited) {
      usageInfo.innerHTML = `<span class="usage-info-text">${t.pro}</span>`;
      usageInfo.className = "usage-info";
      analyzeBtn.disabled = false;
      return;
    }

    // Planos com limite
    const total = userPlan.monthlyLimit ?? 0;
    const usageText = t[user.plan]
      .replace("{{used}}", used)
      .replace("{{total}}", total);

    if (used >= total) {
      usageInfo.innerHTML = `
        <span class="usage-limit">${t.warning}</span><br>
        <button class="upgrade-btn" onclick="showPage('plans')">Upgrade Now</button>`;
      usageInfo.className = "usage-info limit-reached";
    } else if (used >= total * 0.8) {
      usageInfo.innerHTML = `
        <span class="usage-warning">${usageText}</span><br>
        <span class="usage-info-text">${t.upgrade}</span>`;
      usageInfo.className = "usage-info near-limit";
    } else {
      usageInfo.innerHTML = `<span class="usage-info-text">${usageText}</span>`;
      usageInfo.className = "usage-info normal";
    }

    analyzeBtn.disabled = used >= total;
  } catch (error) {
    console.error("Erro ao atualizar informações de uso:", error);
    usageInfo.innerHTML = `<span class="usage-warning">Erro ao carregar informações de uso.</span>`;
  }
}

analyzeBtn.addEventListener("click", async () => {
  const analysisType = localStorage.getItem("analysisType") || "quick";
  const languageCode = localStorage.getItem("language") || "pt";

  // Mapeamento do código para nome da língua em inglês
  const languageMap = {
    pt: "Portuguese",
    en: "English",
    es: "Spanish",
    fr: "French",
  };

  const analysisLanguage = languageMap[languageCode] || "English";
  let referenceData = {};

  if (textTab.classList.contains("active")) {
    const text = bibleInput.value.trim();
    if (!text) {
      alert("Por favor, insira um texto bíblico para análise.");
      return;
    }
    referenceData = {
      referenceType: "text",
      analysisType,
      analysisLanguage,
      text,
    };
  } else {
    const book = document.getElementById("book-input").value.trim();
    const chapter = document.getElementById("chapter-input").value.trim();

    if (!book || !chapter) {
      alert("Por favor, preencha o livro e o capítulo.");
      return;
    }

    if (singleBtn.classList.contains("active")) {
      const verse = document.getElementById("verse-single").value.trim();
      if (!verse) {
        alert("Por favor, insira o versículo.");
        return;
      }
      referenceData = {
        referenceType: "single",
        analysisType,
        analysisLanguage,
        book,
        chapter: Number(chapter),
        verse: Number(verse),
      };
    } else {
      const verseStart = document.getElementById("verse-start").value.trim();
      const verseEnd = document.getElementById("verse-end").value.trim();
      if (!verseStart || !verseEnd) {
        alert("Por favor, insira o intervalo de versículos.");
        return;
      }
      referenceData = {
        referenceType: "range",
        analysisType,
        analysisLanguage,
        book,
        chapter: Number(chapter),
        verseStart: Number(verseStart),
        verseEnd: Number(verseEnd),
      };
    }
  }

  loading.style.display = "block";
  resultsSection.style.display = "none";

  console.log("Dados enviados:", referenceData);

  try {
    const response = await api.post("/analyze/reference", referenceData);
    const result = response.data;

    // Mostra mensagens do backend, se existirem
    if (result.success_msg) {
      console.log("✅", result.success_msg);
    } else if (result.error_msg) {
      console.warn("⚠️", result.error_msg);
    }

    // Se houver resultado de análise
    if (result.result) {
      displayResults(result.result);
      resultsSection.style.display = "block";
    }
  } catch (error) {
    console.error("❌ Erro ao enviar análise:", error);
    const backendError =
      error.response?.data?.error_msg ||
      "Ocorreu um erro ao analisar. Tente novamente mais tarde.";
    alert(backendError);
  } finally {
    loading.style.display = "none";
  }
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
      <div class="results-score">${score}/${data.test.length}</div>
        <p>You scored ${((score / data.test.length) * 100).toFixed(0)}%!</p>
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
async function renderPlans() {
  try {
    const res = await api.get("/plans");
    const plans = res.data.plans;

    const resClient = await api.get("/users/me");
    const user = resClient.data.user;

    plansGrid.innerHTML = "";

    plans.forEach((plan) => {
      const planCard = document.createElement("div");
      planCard.className = `plan-card ${
        plan.key == "premium" ? "popular" : ""
      }`;

      // Definir descrição do limite
      let planLimit;
      if (plan.key == "pro") planLimit = t("proFeature1");
      else if (plan.monthlyLimit == 20) planLimit = t("freeFeature1");
      else if (plan.monthlyLimit == 400) planLimit = t("premiumFeature1");

      let planButtonHTML = "";

      // 🔹 Usuário autenticado
      if (user) {
        const isCurrentPlan = user.plan == plan.key;

        if (isCurrentPlan) {
          // ✅ Caso seja o plano atual
          planButtonHTML = `<button class="plan-btn" disabled>${t(
            "plans.currentPlan"
          )}</button>`;

          // Se for plano pago, mostrar opção de cancelar
          if (["premium", "pro"].includes(plan.key)) {
            planButtonHTML += `
              <div class="subscription-status">
                ${t("plans.currentPlan")} • ${
              user.subscription?.status == "ACTIVE" ? "Active" : "Cancelled"
            }
                ${
                  user.subscription?.nextBillingDate
                    ? ` • Próxima cobrança: ${new Date(
                        user.subscription.nextBillingDate
                      ).toLocaleDateString()}`
                    : ""
                }
              </div>
              <button class="cancel-subscription-btn" onclick="handleCancelSubscription('${
                plan.key
              }')">
                Cancelar Assinatura
              </button>
            `;
          }
        } else {
          // ✅ Caso não seja o plano atual — permitir mudança
          if (plan.key == "free") {
            planButtonHTML = `<button class="plan-btn" onclick="handlePlanSelection('${
              plan.key
            }')">
              ${t("plans.choosePlanBtn").replace(
                "{{plan}}",
                t(`${plan.key}Plan`)
              )}
            </button>`;
          } else {
            planButtonHTML = `<button class="plan-btn" onclick="handlePayPalSubscription('${
              plan.key
            }', '${plan.paypalPlanId}')">
              ${t("plans.choosePlanBtn").replace(
                "{{plan}}",
                t(`${plan.key}Plan`)
              )}
            </button>`;
          }
        }
      }

      // Renderização final
      planCard.innerHTML = `
        <div class="plan-name">${t(`${plan.key}Plan`)}</div>
        <div class="plan-price">$${plan.price}<span>${t(
        "plans.perMonth"
      )}</span></div>
        <div class="plan-features">
          <div class="plan-feature"><i class="fas fa-check"></i><span>${planLimit}</span></div>
          <div class="plan-feature"><i class="fas fa-check"></i><span>${
            plan.features.advancedInsights
              ? t("plans.advancedInsights")
              : t("plans.basicInsights")
          }</span></div>
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
  } catch (err) {
    console.error("Erro ao renderizar planos:", err);
  }
}

// Handle plan selection
function handlePlanSelection(planKey) {
  if (planKey == "free") {
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
  if (typeof paypal == "undefined") {
    console.error("PayPal SDK not loaded");
    return;
  }

  paypalButtonContainer.innerHTML = "";

  paypal
    .Buttons({
      style: {
        shape: "pill",
        color: "blue",
        layout: "vertical",
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
  if (pageId == "history") {
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

async function checkLoginStatus() {
  const hero = document.querySelector(".hero");
  try {
    const response = await api.get("/auth/me");

    if (response.data && response.data.success) {
      loginBtn.style.display = "none";
      mobileLoginBtn.style.display = "none";
      hero.style.display = "none";
    } else {
      console.log("Usuário não está logado.");
    }
  } catch (error) {
    console.log("Usuário não está logado.");
  }
}

// Initialize
async function init() {
  const resClient = await api.get("/users/me");
  const user = resClient.data.user;
  const plan = mockPlans.find((p) => p.key == currentUser.plan);

  // Set theme
  const savedTheme = localStorage.getItem("theme") || "light";
  if (savedTheme == "dark") {
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

  const savedModal = localStorage.getItem("currentModal");
  if (savedModal == "login") showLoginModal();
  else if (savedModal == "register") showRegisterModal();
  else if (savedModal == "verify") showVerificationModal();

  // Initialize UI
  updateTextContent();
  updateUIWithUserData();
  updateUsageInfo();
  renderPlans();
  populateHistory();
  checkLoginStatus();
}

// Initialize the app
document.addEventListener("DOMContentLoaded", init());

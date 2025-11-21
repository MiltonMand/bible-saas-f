// DOM Elements
const themeToggle = document.getElementById("theme-toggle");
const mobileThemeToggle = document.getElementById("mobile-theme-toggle");
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
const signOutBtn = document.getElementById("sign-out-btn");
const mobileLoginBtn = document.getElementById("mobile-login-btn");
const deleteAccountBtn = document.getElementById("delete-account-btn");
const deleteConfirmation = document.getElementById("delete-confirmation");
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

// Bible books in English only
const bibleBooks = [
  "Genesis",
  "Exodus",
  "Leviticus",
  "Numbers",
  "Deuteronomy",
  "Joshua",
  "Judges",
  "Ruth",
  "1 Samuel",
  "2 Samuel",
  "1 Kings",
  "2 Kings",
  "1 Chronicles",
  "2 Chronicles",
  "Ezra",
  "Nehemiah",
  "Esther",
  "Job",
  "Psalms",
  "Proverbs",
  "Ecclesiastes",
  "Song of Solomon",
  "Isaiah",
  "Jeremiah",
  "Lamentations",
  "Ezekiel",
  "Daniel",
  "Hosea",
  "Joel",
  "Amos",
  "Obadiah",
  "Jonah",
  "Micah",
  "Nahum",
  "Habakkuk",
  "Zephaniah",
  "Haggai",
  "Zechariah",
  "Malachi",
  "Matthew",
  "Mark",
  "Luke",
  "John",
  "Acts",
  "Romans",
  "1 Corinthians",
  "2 Corinthians",
  "Galatians",
  "Ephesians",
  "Philippians",
  "Colossians",
  "1 Thessalonians",
  "2 Thessalonians",
  "1 Timothy",
  "2 Timothy",
  "Titus",
  "Philemon",
  "Hebrews",
  "James",
  "1 Peter",
  "2 Peter",
  "1 John",
  "2 John",
  "3 John",
  "Jude",
  "Revelation",
];

const languages = [
  { name: "Afrikaans", value: "Afrikaans" },
  { name: "Amharic (አማርኛ)", value: "Amharic" },
  { name: "Arabic (العربية)", value: "Arabic" },
  { name: "Aragonés", value: "Aragonese" },
  { name: "Armenian (Հայերեն)", value: "Armenian" },
  { name: "Assamese (অসমীয়া)", value: "Assamese" },
  { name: "Aymara", value: "Aymara" },
  { name: "Azerbaijani (Azərbaycan dili)", value: "Azerbaijani" },
  { name: "Balinese", value: "Balinese" },
  { name: "Bambara", value: "Bambara" },
  { name: "Basque (Euskara)", value: "Basque" },
  { name: "Bemba", value: "Bemba" },
  { name: "Bengali (বাংলা)", value: "Bengali" },
  { name: "Bosanski", value: "Bosnian" },
  { name: "Bulgarian (Български)", value: "Bulgarian" },
  { name: "Burmese (မြန်မာ)", value: "Burmese" },
  { name: "Català", value: "Catalan" },
  { name: "Cherokee (ᏣᎳᎩ)", value: "Cherokee" },
  { name: "Chinese (中文)", value: "Chinese" },
  { name: "Corsican (Corsu)", value: "Corsican" },
  { name: "Croatian (Hrvatski)", value: "Croatian" },
  { name: "Czech (Čeština)", value: "Czech" },
  { name: "Danish (Dansk)", value: "Danish" },
  { name: "Dutch (Nederlands)", value: "Dutch" },
  { name: "English", value: "English" },
  { name: "Esperanto", value: "Esperanto" },
  { name: "Estonian (Eesti)", value: "Estonian" },
  { name: "Fijian", value: "Fijian" },
  { name: "Filipino", value: "Filipino" },
  { name: "Finnish (Suomi)", value: "Finnish" },
  { name: "French (Français)", value: "French" },
  { name: "Frisian", value: "Frisian" },
  { name: "Galician (Galego)", value: "Galician" },
  { name: "Georgian (ქართული)", value: "Georgian" },
  { name: "German (Deutsch)", value: "German" },
  { name: "Greek (Ελληνικά)", value: "Greek" },
  { name: "Greenlandic (Kalaallisut)", value: "Greenlandic" },
  { name: "Gujarati (ગુજરાતી)", value: "Gujarati" },
  { name: "Haitian Creole", value: "Haitian Creole" },
  { name: "Hausa", value: "Hausa" },
  { name: "Hebrew (עברית)", value: "Hebrew" },
  { name: "Hindi (हिन्दी)", value: "Hindi" },
  { name: "Hmong", value: "Hmong" },
  { name: "Hungarian (Magyar)", value: "Hungarian" },
  { name: "Icelandic (Íslenska)", value: "Icelandic" },
  { name: "Igbo", value: "Igbo" },
  { name: "Indonesian (Bahasa Indonesia)", value: "Indonesian" },
  { name: "Inuktitut", value: "Inuktitut" },
  { name: "Inupiaq", value: "Inupiaq" },
  { name: "Irish (Gaeilge)", value: "Irish" },
  { name: "Italian (Italiano)", value: "Italian" },
  { name: "Japanese (日本語)", value: "Japanese" },
  { name: "Javanese", value: "Javanese" },
  { name: "Kannada (ಕನ್ನಡ)", value: "Kannada" },
  { name: "Kazakh (Қазақ тілі)", value: "Kazakh" },
  { name: "Khmer (ខ្មែរ)", value: "Khmer" },
  { name: "Kinyarwanda", value: "Kinyarwanda" },
  { name: "Korean (한국어)", value: "Korean" },
  { name: "Kurdî (Kurdish)", value: "Kurdish" },
  { name: "Kyrgyz (Қырғызча)", value: "Kyrgyz" },
  { name: "Ladino", value: "Ladino" },
  { name: "Lao (ລາວ)", value: "Lao" },
  { name: "Latin (Latina)", value: "Latin" },
  { name: "Latvian (Latviešu)", value: "Latvian" },
  { name: "Lithuanian (Lietuvių)", value: "Lithuanian" },
  { name: "Luganda", value: "Luganda" },
  { name: "Malay (Bahasa Melayu)", value: "Malay" },
  { name: "Malayalam (മലയാളം)", value: "Malayalam" },
  { name: "Maltese (Malti)", value: "Maltese" },
  { name: "Mandinka", value: "Mandinka" },
  { name: "Maori (Māori)", value: "Maori" },
  { name: "Marathi (मराठी)", value: "Marathi" },
  { name: "Mongolian (Монгол хэл)", value: "Mongolian" },
  { name: "Nepali (नेपाली)", value: "Nepali" },
  { name: "Norwegian (Norsk)", value: "Norwegian" },
  { name: "Nyanja", value: "Nyanja" },
  { name: "Occitan", value: "Occitan" },
  { name: "Odia (ଓଡ଼ିଆ)", value: "Odia" },
  { name: "Pashto (پښتو)", value: "Pashto" },
  { name: "Persian (فارسی)", value: "Persian" },
  { name: "Polish (Polski)", value: "Polish" },
  { name: "Português", value: "Portuguese" },
  { name: "Punjabi (ਪੰਜਾਬੀ)", value: "Punjabi" },
  { name: "Quechua", value: "Quechua" },
  { name: "Romanian (Română)", value: "Romanian" },
  { name: "Romansh", value: "Romansh" },
  { name: "Russian (Русский)", value: "Russian" },
  { name: "Samoan", value: "Samoan" },
  { name: "Scottish Gaelic (Gàidhlig)", value: "Scottish Gaelic" },
  { name: "Serbian (Српски)", value: "Serbian" },
  { name: "Sesotho", value: "Sesotho" },
  { name: "Shqip", value: "Albanian" },
  { name: "Sinhala (සිංහල)", value: "Sinhala" },
  { name: "Slovak (Slovenčina)", value: "Slovak" },
  { name: "Slovenian (Slovenščina)", value: "Slovenian" },
  { name: "Somali (Soomaaliga)", value: "Somali" },
  { name: "Spanish (Español)", value: "Spanish" },
  { name: "Sranan Tongo", value: "Sranan Tongo" },
  { name: "Sundanese", value: "Sundanese" },
  { name: "Swahili (Kiswahili)", value: "Swahili" },
  { name: "Swedish (Svenska)", value: "Swedish" },
  { name: "Tagalog", value: "Tagalog" },
  { name: "Tamil (தமிழ்)", value: "Tamil" },
  { name: "Telugu (తెలుగు)", value: "Telugu" },
  { name: "Tetum", value: "Tetum" },
  { name: "Thai (ไทย)", value: "Thai" },
  { name: "Tigrinya", value: "Tigrinya" },
  { name: "Tongan", value: "Tongan" },
  { name: "Tswana", value: "Tswana" },
  { name: "Turkish (Türkçe)", value: "Turkish" },
  { name: "Twi", value: "Twi" },
  { name: "Ukrainian (Українська)", value: "Ukrainian" },
  { name: "Urdu (اردو)", value: "Urdu" },
  { name: "Uzbek (Oʻzbekcha)", value: "Uzbek" },
  { name: "Vietnamese (Tiếng Việt)", value: "Vietnamese" },
  { name: "Welsh (Cymraeg)", value: "Welsh" },
  { name: "Wolof", value: "Wolof" },
  { name: "Xhosa", value: "Xhosa" },
  { name: "Yorùbá", value: "Yoruba" },
  { name: "Zulu", value: "Zulu" },
];

function populateLanguageSelect() {
  const select = document.getElementById("response-language");
  if (!select) return;

  languages.forEach((lang) => {
    const option = document.createElement("option");
    option.value = lang.value;
    option.textContent = lang.name;
    select.appendChild(option);
  });
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
document.addEventListener("click", (e) => {
  if (
    mobileMenu.classList.contains("active") &&
    !mobileMenu.contains(e.target) &&
    !mobileMenuBtn.contains(e.target)
  ) {
    mobileMenu.classList.remove("active");
  }
});

// Modal management
function saveCurrentModal(name) {
  localStorage.setItem("currentModal", name);
}
function clearSavedModal() {
  localStorage.removeItem("currentModal");
}
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
function closeAllAuthModals() {
  authLoginModal.classList.remove("active");
  authRegisterModal.classList.remove("active");
  authVerifyModal.classList.remove("active");
  clearSavedModal();
}

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
    if (digit.value.length == 1 && index < authCodeDigits.length - 1) {
      authCodeDigits[index + 1].focus();
    }
  });
  digit.addEventListener("keydown", (e) => {
    if (e.key == "Backspace" && digit.value == "" && index > 0) {
      authCodeDigits[index - 1].focus();
    }
  });
});

// Populate book options in English
function updateBookOptions() {
  const bookSelect = document.getElementById("bookSelect");
  bookSelect.innerHTML = "";
  bibleBooks.forEach((book) => {
    const opt = document.createElement("option");
    opt.value = book.toLowerCase().replace(/\s+/g, "");
    opt.textContent = book;
    bookSelect.appendChild(opt);
  });
}

function success(msg) {
  Swal.fire({
    icon: "success",
    title: msg,
    toast: true,
    position: "bottom-end", // canto superior direito
    showConfirmButton: false,
    timer: 2500, // desaparece em 2.5 segundos
    timerProgressBar: true,
    background: "#e8f9ee", // leve verde
    color: "#1e4620", // texto escuro
  });
}

function error(msg) {
  Swal.fire({
    icon: "error",
    title: msg,
    toast: true,
    position: "bottom-end",
    showConfirmButton: false,
    timer: 4000,
    timerProgressBar: true,
    background: "#fde8e8", // leve vermelho
    color: "#611a15",
  });
}

/*------------------------------------backend------------------------------------*/
const url = "https://biblesaasapi.vercel.app";
// const url = "http://localhost:5000";

const api = axios.create({
  baseURL: `${url}/api`,
  withCredentials: true,
});

function errorMsg(error) {
  if (error.response) {
    const status = error.response.status;
    if (status == 401) {
      error("Session expired. Please log in again.");
    } else {
      error(error.response.data?.error_msg || "Unexpected error.");
    }
  } else {
    console.error("Error fetching client ", error);
    error("Connection error with server.");
  }
}

// Auth Login Form Submission
authLoginForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = document.getElementById("auth-login-email").value.trim();
  const password = document.getElementById("auth-login-password").value;

  if (!email || !password) {
    error("Invalid credentials");
    return;
  }

  authLoginSubmitBtn.disabled = true;
  authLoginSubmitBtn.textContent = "Sending...";

  try {
    const res = await api.post("/auth/login", { email, password });
    const data = res.data;

    if (data.error_msg) {
      return error(data.error_msg);
    }

    const isVerified = data.client?.isVerified;
    if (!isVerified) {
      localStorage.setItem("email", data.client.email);
      showVerificationModal();
      return;
    }

    if (data.success_msg) success(data.success_msg);
    closeAllAuthModals();
    await init();
  } catch (error) {
    errorMsg(error);
  } finally {
    authLoginSubmitBtn.disabled = false;
    authLoginSubmitBtn.textContent = "Sign In";
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
  if (!name || !email || !password || !confirmPassword) {
    error("Failed to create account");
    return;
  }
  if (password !== confirmPassword) {
    error("Passwords do not match");
    return;
  }
  if (password.length < 6) {
    error("Password must be at least 6 characters");
    return;
  }
  authRegisterSubmitBtn.disabled = true;
  authRegisterSubmitBtn.textContent = "Sending...";
  try {
    const res = await api.post("auth/register", { name, email, password });
    const data = res.data;
    if (data.error_msg) return error(data.error_msg);
    localStorage.setItem("email", email);
    showVerificationModal();
  } catch (error) {
    errorMsg(error);
  } finally {
    authRegisterSubmitBtn.disabled = false;
    authRegisterSubmitBtn.textContent = "Register";
  }
});

authVerifyBtn.addEventListener("click", async () => {
  const email = localStorage.getItem("email");
  const enteredCode = Array.from(authCodeDigits)
    .map((digit) => digit.value)
    .join("");
  authVerifyBtn.disabled = true;
  authVerifyBtn.textContent = "Sending...";
  try {
    const res = await api.post("/auth/verify", { email, code: enteredCode });
    const data = res.data;
    if (data.error_msg) return error(data.error_msg);
    authCodeDigits.forEach((digit) => (digit.value = ""));
    authCodeDigits[0].focus();
    closeAllAuthModals();
    localStorage.removeItem("email");

    if (data.success_msg) success(data.success_msg);
    await init();
  } catch (error) {
    errorMsg(error);
  } finally {
    authVerifyBtn.disabled = false;
    authVerifyBtn.textContent = "Verify Account";
  }
});

authResendCode.addEventListener("click", async (e) => {
  e.preventDefault();

  const email = localStorage.getItem("email");
  if (!email) {
    error("Email not found. Please log in again.");
    return;
  }

  authResendCode.disabled = true;
  authResendCode.textContent = "Sending...";

  try {
    const res = await api.post("/auth/resend-verification", { email });
    const data = res.data;

    if (data.success_msg) {
      success("Verification code resent successfully. Check your email.");
    } else if (data.error_msg) {
      error(data.error_msg);
    }
  } catch (error) {
    console.error("Error resending verification code:", error);
    errorMsg(error);
  } finally {
    authResendCode.disabled = false;
    authResendCode.textContent = "Resend Code";
  }
});

signOutBtn.addEventListener("click", async () => {
  const result = await Swal.fire({
    title: "Are you sure?",
    text: "Do you really want to sign out?",
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: "Yes, sign out",
    cancelButtonText: "Cancel",
    confirmButtonColor: "#d33",
    cancelButtonColor: "#3085d6",
  });

  if (!result.isConfirmed) return;

  try {
    signOutBtn.disabled = true;
    signOutBtn.textContent = "Sending...";

    const res = await api.post("/auth/logout");
    const data = res.data;

    if (data.success_msg) success(data.success_msg);
    await init();
  } catch (error) {
    errorMsg(error);
  } finally {
    signOutBtn.disabled = false;
    signOutBtn.textContent = "Sign Out";
  }
});

deleteAccountBtn.addEventListener("click", async () => {
  const confirmation = deleteConfirmation.value.trim();

  if (confirmation !== "DELETE") {
    error("Please type DELETE in the confirmation field to proceed");
    return;
  }
  try {
    const res = await api.delete("/users/delete");
    const data = res.data;

    if (data.success_msg) success(data.success_msg);
    await init();
  } catch (err) {
    errorMsg(err);
  }
});

// Profile editing
editProfileBtn.addEventListener("click", async () => {
  try {
    const resClient = await api.get("/users/me");
    const user = resClient.data.user;
    document.getElementById("full-name").value = user.name;
    document.getElementById("about-me").value = user.me;
    document.getElementById("response-language").value = user.responseLanguage;

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
  const language = document.getElementById("response-language").value;
  const me = document.getElementById("about-me").value;

  try {
    const res = await api.put("/users/me", { name, language, me });
    const data = res.data;
    await updateUIWithUserData();
    profileForm.classList.remove("active");
    if (data.error_msg) return error(data.error_msg);
    return success(data.success_msg);
  } catch (error) {
    profileForm.classList.remove("active");
    errorMsg(error);
  }
});

async function updateUIWithUserData() {
  try {
    const [resPlans, resUser] = await Promise.all([
      api.get("/plans"),
      api.get("/users/me"),
    ]);
    const plans = resPlans.data.plans;
    const user = resUser.data.user;
    const userPlan = plans.find((p) => p.key == user.plan);

    document.getElementById("profile-name").textContent = user.name;
    document.getElementById("profile-email").textContent = user.email;
    document.getElementById("plan-type").textContent =
      userPlan.name.toUpperCase();
    document.getElementById("analyses-count").textContent =
      user.responseLanguage;
    const limit =
      userPlan.key == "pro"
        ? "Unlimited"
        : `${user.analysesThisMonth}/${userPlan.monthlyLimit}`;
    document.getElementById("daily-limit").textContent = limit;
  } catch (error) {
    errorMsg(error);
  }
}

async function updateUsageInfo() {
  try {
    const [resPlans, resUser] = await Promise.all([
      api.get("/plans"),
      api.get("/users/me"),
    ]);
    const plans = resPlans.data.plans;
    const user = resUser.data.user;
    const userPlan = plans.find((p) => p.key == user.plan);
    if (!userPlan) {
      usageInfo.innerHTML = `<span class="usage-warning">User plan not found.</span>`;
      return;
    }
    const used = user.analysesThisMonth ?? 0;
    const isUnlimited = user.plan == "pro";
    if (isUnlimited) {
      usageInfo.innerHTML = `<span class="usage-info-text">Pro Plan: Unlimited analyses</span>`;
      usageInfo.className = "usage-info";
      analyzeBtn.disabled = false;
      return;
    }
    const total = userPlan.monthlyLimit ?? 0;
    const usageText =
      user.plan == "free"
        ? `Free Plan: ${used}/${total} analyses used this month`
        : `Premium Plan: ${used}/${total} analyses used this month`;
    if (used >= total) {
      usageInfo.innerHTML = `
              <span class="usage-limit">You've reached your monthly limit! Upgrade to continue.</span><br>
              <button class="upgrade-btn" onclick="showPage('plans')">Upgrade Now</button>`;
      usageInfo.className = "usage-info limit-reached";
    } else if (used >= total * 0.8) {
      usageInfo.innerHTML = `
              <span class="usage-warning">${usageText}</span><br>
              <span class="usage-info-text">Upgrade your plan to unlock more analyses this month!</span>`;
      usageInfo.className = "usage-info near-limit";
    } else {
      usageInfo.innerHTML = `<span class="usage-info-text">${usageText}</span>`;
      usageInfo.className = "usage-info normal";
    }
    analyzeBtn.disabled = used >= total;
  } catch (error) {
    errorMsg(error);
    usageInfo.innerHTML = `<span class="usage-warning">Error loading usage info.</span>`;
  }
}

analyzeBtn.addEventListener("click", async () => {
  const analysisType = localStorage.getItem("analysisType") || "quick";
  resultsSection.classList.remove("results-grid-active");
  resultsSection.style.display = "none";

  let referenceData = {};
  if (textTab.classList.contains("active")) {
    const text = bibleInput.value.trim();
    if (!text) {
      error("Please enter biblical text for analysis.");
      return;
    }
    referenceData = {
      referenceType: "text",
      analysisType,
      text,
    };
  } else {
    const book = document.getElementById("bookSelect").value.trim();
    const chapter = document.getElementById("chapter-input").value.trim();
    if (!book || !chapter) {
      error("Please fill in the book and chapter.");
      return;
    }
    if (singleBtn.classList.contains("active")) {
      const verse = document.getElementById("verse-single").value.trim();
      if (!verse) {
        error("Please enter the verse.");
        return;
      }
      referenceData = {
        referenceType: "single",
        analysisType,
        book,
        chapter: Number(chapter),
        verseOne: Number(verse),
      };
    } else {
      const verseStart = document.getElementById("verse-start").value.trim();
      const verseEnd = document.getElementById("verse-end").value.trim();
      if (!verseStart || !verseEnd) {
        error("Please enter the verse range.");
        return;
      }
      referenceData = {
        referenceType: "range",
        analysisType,
        book,
        chapter: Number(chapter),
        verseStart: Number(verseStart),
        verseEnd: Number(verseEnd),
      };
    }
  }

  loading.style.display = "block";
  analyzeBtn.disabled = true;
  analyzeBtn.textContent = "Analyzing...";
  try {
    const response = await api.post("/analyze", referenceData);
    const result = response.data;
    if (result.success_msg) {
      success(result.success_msg);
    } else if (result.error_msg) {
      console.warn("⚠️", result.error_msg);
    }
    if (result.result) {
      updateUsageInfo();
      updateUIWithUserData();
      resultsSection.classList.remove("hidden");
      resultsSection.classList.add("results-grid-active");
      resultsSection.style.display = "grid";
      displayResults(result.result);
    }
  } catch (error) {
    errorMsg(error);
  } finally {
    loading.style.display = "none";
    analyzeBtn.disabled = false;
    analyzeBtn.textContent = "Analyze";

    const sectionId = "#res";
    const target = document.querySelector(sectionId);

    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  }
});

function displayResults(data) {
  document.getElementById("summary-content").textContent = data.summary;
  document.getElementById("context-content").textContent = data.context;
  document.getElementById("practical-content").textContent =
    data.practicalExample;
  document.getElementById("reflection-content").textContent = data.reflection;
  const quizSection = document.getElementById("quiz-section");
  quizSection.innerHTML = "";
  let currentQuestion = 0;
  let userAnswers = [];
  let score = 0;
  function showQuestion(questionIndex) {
    quizSection.innerHTML = "";
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
      const optionLetter = String.fromCharCode(97 + optionIndex);
      const optionDiv = document.createElement("div");
      optionDiv.className = "quiz-option";
      optionDiv.dataset.answer = optionLetter;
      optionDiv.textContent = `${optionLetter.toUpperCase()}. ${option}`;
      optionDiv.addEventListener("click", function () {
        userAnswers[questionIndex] = this.dataset.answer;
        const isCorrect = this.dataset.answer == question.correctAnswer;
        if (isCorrect) score++;
        document.querySelectorAll(".quiz-option").forEach((opt) => {
          opt.style.pointerEvents = "none";
          if (opt.dataset.answer == question.correctAnswer) {
            opt.classList.add("selected");
          }
        });
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
              <p>You scored ${((score / data.test.length) * 100).toFixed(
                0
              )}%!</p>
              <p style="margin-top: 16px; color: var(--text-light);">
                ${
                  score == data.test.length
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

async function renderPlans() {
  try {
    const [resPlans, resUser] = await Promise.allSettled([
      api.get("/plans"),
      api.get("/users/me"),
    ]);

    const plans =
      resPlans.status == "fulfilled" ? resPlans.value.data.plans : [];
    const user = resUser.status == "fulfilled" ? resUser.value.data.user : null;

    plansGrid.innerHTML = "";

    plans.forEach((plan) => {
      const planCard = document.createElement("div");
      planCard.className = `plan-card ${
        plan.key == "premium" ? "popular" : ""
      }`;

      // Limite de análises por plano
      let planLimit = "";
      if (plan.key == "pro") planLimit = "Unlimited analyses";
      else if (plan.key == "free") planLimit = "5 analyses per month";
      else if (plan.key == "premium") planLimit = "300 analyses per month";

      let planButtonHTML = "";

      // --- Se o usuário estiver logado ---
      if (user) {
        const isCurrentPlan = user.plan == plan.key;

        if (isCurrentPlan) {
          planButtonHTML += `
            <div class="subscription-status">
              Current Plan • ${
                plan.key == "free"
                  ? "Active"
                  : user.subscription?.status == "ACTIVE"
                  ? "Active"
                  : "Cancelled"
              }
              ${
                user.subscription?.nextBillingDate &&
                user.subscription?.status == "ACTIVE"
                  ? ` • Next billing: ${new Date(
                      user.subscription.nextBillingDate
                    ).toLocaleDateString()}`
                  : ""
              }
            </div>
          `;

          // Botão de cancelar apenas se for plano pago e assinatura ativa
          if (
            ["premium", "pro"].includes(plan.key) &&
            user.subscription?.status == "ACTIVE"
          ) {
            planButtonHTML += `
              <button class="cancel-subscription-btn" onclick="cancelSubscription('${plan._id}')">
                Cancel Subscription
              </button>
            `;
          }
        } else {
          if (plan.key == "free") {
            planButtonHTML = `
            <button class="plan-btn" onclick="subscriptionFree()">
              Choose ${plan.key.charAt(0).toUpperCase() + plan.key.slice(1)}
            </button>
          `;
          } else {
            planButtonHTML = `
            <button class="plan-btn" onclick="handlePayPalSubscription('${
              plan._id
            }', '${plan.paypalPlanId}')">
              Choose ${plan.key.charAt(0).toUpperCase() + plan.key.slice(1)}
            </button>
          `;
          }
        }
      }
      // --- Se o usuário NÃO estiver logado ---
      else {
        planButtonHTML = `
          <button class="plan-btn" onclick="error('Please log in to subscribe to a plan.')">
            Choose ${plan.key.charAt(0).toUpperCase() + plan.key.slice(1)}
          </button>
        `;
      }

      // Monta a lista de features dinamicamente
      const featuresHTML = Object.entries(plan.features)
        .map(([key, enabled]) => {
          const featureNames = {
            basicInsights: "Basic insights",
            advancedInsights: "Advanced insights",
            conceptMaps: "Concept maps",
            fullHistory: "Full history access",
            priorityProcessing: "Priority processing",
          };
          const featureName = featureNames[key] || key;
          return `
            <div class="plan-feature ${enabled ? "" : "locked"}">
              <i class="fas ${enabled ? "fa-check" : "fa-lock"}"></i>
              <span>${featureName}</span>
            </div>
          `;
        })
        .join("");

      // Render final do card
      planCard.innerHTML = `
        <div class="plan-name">${
          plan.key.charAt(0).toUpperCase() + plan.key.slice(1)
        }</div>
        <div class="plan-price">$${plan.price}<span>/month</span></div>
        <div class="plan-feature"><i class="fas fa-check"></i><span>${planLimit}</span></div>
        <div class="plan-features">${featuresHTML}</div>
        ${planButtonHTML}
      `;

      plansGrid.appendChild(planCard);
    });
  } catch (err) {
    console.error("Error rendering plans:", err);
    errorMsg(err);
  }
}

// Handle PayPal subscription
async function handlePayPalSubscription(planId) {
  const resPlan = await api.get(`/plan/${planId}`);
  const plan = resPlan.data.plan;
  document.getElementById("paypal-modal-title").textContent = `Subscribe to ${
    plan.key.charAt(0).toUpperCase() + plan.key.slice(1)
  }`;
  document.getElementById(
    "paypal-modal-subtitle"
  ).textContent = `Only $${plan.price} per month`;
  document.getElementById("paypal-error").style.display = "none";
  paypalModal.classList.add("active");
  initializePayPalButtons(plan.paypalPlanId, plan.key);
}

function initializePayPalButtons(paypalPlanId, planKey) {
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
          plan_id: paypalPlanId,
        });
      },
      onApprove: function (data, actions) {
        createSubscription(data, planKey);
        updateUIWithUserData();
        updateUsageInfo();
        paypalModal.classList.remove("active");
        success("Subscription created successfully!");
      },
      onError: function (err) {
        console.error("PayPal error:", err);
        error("An error occurred with PayPal. Please try again.");
      },
    })
    .render("#paypal-button-container");
}

async function createSubscription(paypalData, planKey) {
  const subscriptionId =
    paypalData.subscriptionID ||
    paypalData.id ||
    (paypalData && paypalData.subscriptionID) ||
    null;
  if (!subscriptionId) {
    console.error("No subscription id from PayPal approval");
  }

  try {
    const res = await api.post("/subscriptions/create", {
      subscriptionId,
      planKey,
    });
    if (res.data?.success_msg) {
      success(res.data.success_msg);
      await updateUIWithUserData();
      await updateUsageInfo();
      await renderPlans();
    } else {
      error("Could not register subscription on server.");
    }
  } catch (err) {
    console.error("createSubscription error:", err);
    errorMsg(err);
  }
}

async function subscriptionFree() {
  const planKey = "free";
  try {
    const res = await api.post("/subscriptions/create", { planKey });
    const data = res.data;

    if (data.error_msg) return error(data.error_msg);
    renderPlans();
    success(data.success_msg);
  } catch (error) {
    errorMsg(error);
  }
}

async function cancelSubscription(planId) {
  const result = await Swal.fire({
    title: "Are you sure?",
    text: "Do you really want to cancel this subscription?",
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: "Yes, cancel",
    cancelButtonText: "Keep subscription",
    confirmButtonColor: "#d33",
    cancelButtonColor: "#3085d6",
  });

  if (!result.isConfirmed) return;

  try {
    const res = await api.post(`/subscription/cancel/${planId}`);
    const data = res.data;
    if (data.error_msg) {
      return error(data.error_msg);
    }
    await renderPlans();
    success(data.success_msg);
  } catch (err) {
    errorMsg(err);
  }
}

paypalModalClose.addEventListener("click", () => {
  paypalModal.classList.remove("active");
});
paypalModal.addEventListener("click", (e) => {
  if (e.target == paypalModal) {
    paypalModal.classList.remove("active");
  }
});

// Page navigation
function showPage(pageId) {
  localStorage.setItem("page", pageId);
  document.querySelectorAll(".page").forEach((page) => {
    page.classList.remove("active");
  });
  document.getElementById(`${pageId}-page`).classList.add("active");
  document.querySelectorAll(".nav-link, .mobile-nav-link").forEach((link) => {
    link.classList.remove("active");
  });
  const activeLinks = document.querySelectorAll(
    `[onclick="showPage('${pageId}')"]`
  );
  activeLinks.forEach((link) => link.classList.add("active"));
  mobileMenu.classList.remove("active");
  if (pageId == "history") {
    populateHistory();
  }
  if (pageId == "plans") {
    renderPlans();
  }
}

// Populate history
async function populateHistory() {
  historyList.innerHTML = "";
  try {
    const res = await api.get("/analyses");
    const historyItems = res.data.analyses;
    historyItems.forEach((item) => {
      const historyItem = document.createElement("div");
      historyItem.className = "history-item";
      let referenceText = "";
      if (item.inputType == "reference") {
        const bookName = capitalizeFirstLetter(item.book);
        if (item.verseOne && !item.verseStart && !item.verseEnd) {
          referenceText = `${bookName} ${item.chapter}:${item.verseOne}`;
        } else if (item.verseStart && item.verseEnd) {
          referenceText = `${bookName} ${item.chapter}:${item.verseStart}-${item.verseEnd}`;
        } else {
          referenceText = `${bookName} ${item.chapter}`;
        }
      } else {
        referenceText = truncateText(item.inputText, 80);
      }
      const formattedDate = formatDate(item.createdAt);
      historyItem.innerHTML = `
              <div class="history-header">
                <div class="history-reference">${referenceText}</div>
              </div>
              <div class="history-summary">${truncateText(
                item.result?.summary || "",
                150
              )}</div>
              <div class="history-date">${formattedDate}</div>
            `;
      historyItem.addEventListener("click", () => {
        resultsSection.classList.remove("hidden");
        resultsSection.classList.add("results-grid-active");
        resultsSection.style.display = "grid";
        showHistoryAnalysis(item._id);
      });
      historyList.appendChild(historyItem);
    });
  } catch (err) {
    historyList.innerHTML = "No History Loading";
    historyList.style.display = "flex";
    historyList.style.justifyContent = "center";
    errorMsg(err);
  }
}

function formatDate(isoDate) {
  if (!isoDate) return "";
  const date = new Date(isoDate);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

function truncateText(text, maxLength) {
  if (!text) return "";
  return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
}

function capitalizeFirstLetter(str) {
  if (!str) return "";
  return str.charAt(0).toUpperCase() + str.slice(1);
}

async function showHistoryAnalysis(itemId) {
  showPage("home");
  loading.style.display = "block";
  resultsSection.style.display = "none";
  try {
    const response = await api.get(`/analyze/${itemId}`);
    const data = response.data;
    if (data.error_msg) return error(data.error_msg);
    if (data.result) {
      displayResults(data.result);
      resultsSection.style.display = "block";
    }
  } catch (error) {
    errorMsg(error);
  } finally {
    loading.style.display = "none";
    const sectionId = "#res";
    const target = document.querySelector(sectionId);

    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  }
}

async function checkLoginStatus() {
  const hero = document.querySelector(".hero");

  const loginButtons = [loginBtn, mobileLoginBtn];
  const allButtons = [analyzeBtn];

  try {
    const { data } = await api.get("/auth/me");

    if (data.success) {
      loginButtons.forEach((btn) => (btn.style.display = "none"));
      hero.style.display = "none";
      return;
    }

    if (data.unverified) {
      loginButtons.forEach((btn) => {
        btn.style.display = "block";
        btn.textContent = "Verify your email";
        btn.onclick = () => showVerificationModal();
      });

      allButtons.forEach((btn) => {
        btn.textContent = "Verify your email";
        btn.onclick = () => showVerificationModal();
      });
      return;
    }

    if (data.loggedOut) {
      loginButtons.forEach((btn) => (btn.style.display = "block"));
      hero.style.display = "block";
      await api.post("/auth/logout");
    }

    loginButtons.forEach((btn) => (btn.style.display = "block"));
  } catch (error) {
    console.log("Erro ao verificar login:", error);
    loginButtons.forEach((btn) => (btn.style.display = "block"));
    hero.style.display = "block";
  }
}

// Flag para evitar adicionar event listeners repetidos
let initHasRun = false;

async function init() {
  const savedPage = localStorage.getItem("page") || "home";
  showPage(savedPage);

  // Tema
  const savedTheme = localStorage.getItem("theme") || "light";
  if (savedTheme == "dark") {
    document.body.classList.add("dark-mode");
    themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    mobileThemeToggle.innerHTML = '<i class="fas fa-sun"></i>';
  }

  // Adiciona listeners apenas UMA vez, mesmo se init() for chamado de novo
  if (!initHasRun) {
    themeToggle.addEventListener("click", toggleTheme);
    mobileThemeToggle.addEventListener("click", toggleTheme);
    initHasRun = true;
  }

  // Modais salvos
  const savedModal = localStorage.getItem("currentModal");
  if (savedModal == "login") showLoginModal();
  else if (savedModal == "register") showRegisterModal();
  else if (savedModal == "verify") showVerificationModal();

  updateBookOptions();

  // ⬇ ESSAS SÃO ASSÍNCRONAS E PRECISAM DE await ⬇
  await checkLoginStatus();
  await updateUIWithUserData();
  await updateUsageInfo();
  await renderPlans();
  await populateHistory();
  populateLanguageSelect();
}

document.addEventListener("DOMContentLoaded", init);

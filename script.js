/* =====================================================
   MONEYMIND
   FINANCIAL DASHBOARD
===================================================== */


/* ================= STORAGE ================= */

const ACCOUNTS_KEY = "moneymind_accounts";
const CURRENT_KEY = "moneymind_current";
const LANG_KEY = "moneymind_language";
const THEME_KEY = "moneymind_theme";

let accounts = JSON.parse(
    localStorage.getItem(ACCOUNTS_KEY) || "{}"
);

let currentPhone =
    localStorage.getItem(CURRENT_KEY);

let currentAccount = null;

let moneyType = "income";

let charts = {};

let currentQuiz = 0;

let selectedDreamId = null;

let expenseFilter = null;

let heroIndex = 0;

let calculatorExpression = "";

let challengeTimerInterval = null;


/* ================= TRANSLATIONS ================= */

const translations = {

    uz: {

        welcome: "MoneyMind'ga xush kelibsiz!",
        authText: "Moliyangizni boshqaring, maqsadlaringizga erishing va pulingizni aqlli sarflang.",
        login: "Kirish",
        register: "Akkaunt yaratish",
        createAccount: "Akkaunt yaratish",
        google: "Google orqali kirish",
        or: "yoki",
        firstName: "Ism",
        lastName: "Familiya",
        phone: "Telefon",

        home: "Asosiy",
        incomeExpense: "Daromad / Xarajat",
        expenses: "Xarajatlar",
        calculator: "Kalkulyator",
        analysis: "Tahlil",
        questions: "Savollar",
        challenge: "Challenge",
        profile: "Profil",

        theme: "Rejim",
        myAccount: "Mening akkauntim",

        heroText: "Daromadingizni boshqaring, xarajatlaringizni nazorat qiling va orzularingiz sari harakat qiling.",
        start: "Boshlash",
        myDreams: "Orzularim",

        income: "Daromad",
        balance: "Balans",
        addIncome: "Daromad qo'shish",
        addExpense: "Xarajat qo'shish",
        currentBalance: "Hozirgi pulingiz",

        overview: "Umumiy",
        cashFlow: "Pul oqimi",
        quick: "Tezkor",
        addDream: "Orzu qo'shish",

        finance: "Moliya",
        incomeExpenseTitle: "Daromad va xarajatlar",
        totalIncome: "Jami daromad",
        totalExpense: "Jami xarajat",

        history: "Tarix",
        transactions: "Tranzaksiyalar",

        expenseDescription: "Pulingiz qaysi yo'nalishga ketayotganini kuzating.",
        food: "Oziq-ovqat",
        utilities: "Kommunal",
        fuel: "Benzin / Gaz",
        transport: "Transport / Yo'l haqi",
        travel: "Sayohatlar",
        recreation: "Dam olishlar",
        health: "Sog'liq",
        dreams: "Orzular",
        other: "Boshqalar",

        category: "Kategoriya",
        amount: "Summa",
        description: "Izoh",
        descriptionPlaceholder: "Masalan: Oylik maosh",
        save: "Saqlash",

        whereMoney: "Pul qayerga ketmoqda?",
        expenseHistory: "Xarajatlar tarixi",

        goals: "Maqsadlar",
        dreamDescription: "Katta orzularingizni kichik qadamlar bilan amalga oshiring.",
        newDream: "Yangi orzu",
        dreamModalText: "Orzuingiz uchun maqsad summa belgilang.",
        dreamName: "Orzu nomi",
        dreamType: "Orzu turi",
        targetAmount: "Kerakli summa",
        savedAmount: "Hozirgacha yig'ilgan",
        car: "🚗 Mashina",
        homeGoal: "🏠 Uy-joy",
        travelGoal: "✈️ Sayohat",
        education: "🎓 Ta'lim",
        createDream: "Orzu yaratish",
        addToDream: "Orzuga pul qo'shish",

        editProfile: "Profilni tahrirlash",
        changePhoto: "Rasmni o'zgartirish",
        saveChanges: "O'zgarishlarni saqlash",
        accounts: "Akkauntlar",
        newAccount: "Yangi akkaunt",
        account: "Akkaunt",
        switchAccount: "Akkauntni almashtirish",
        deleteAccount: "Akkauntni o'chirish",
        edit: "Tahrirlash",

        deleteAccountTitle: "Akkauntni o'chirish",
        deleteConfirm: "Haqiqatan ham ushbu akkauntni o'chirmoqchimisiz? Barcha ma'lumotlar o'chiriladi.",
        no: "Yo'q",
        yesDelete: "Ha, o'chirish",

        calculatorText: "Hisob-kitoblaringizni tez va qulay bajaring.",

        statistics: "Statistika",
        moneyFlow: "Pul oqimi",
        expenseStructure: "Xarajat tarkibi",
        knowledge: "Bilim",

        correct: "To'g'ri!",
        wrong: "Noto'g'ri!",
        thanks: "Javobingiz qabul qilindi.",
        correctAnswer: "To'g'ri javob",
        next: "Keyingi savol",

        saved: "Saqlandi!",
        accountCreated: "Akkaunt yaratildi!",
        incomeAdded: "Daromad qo'shildi!",
        expenseAdded: "Xarajat qo'shildi!",
        dreamAdded: "Orzu qo'shildi!",
        dreamDeleted: "Orzu o'chirildi!",
        dreamSaved: "Orzuga pul qo'shildi!",

        challengeJoined: "Siz qatnashyapsiz!",
        challengeDay: "Bugungi kun qabul qilindi!",
        challengeComplete: "Challenge tugadi!",
        challenge1: "7 kun keraksiz xarajatsiz",
        challenge1Text: "7 kun davomida faqat zarur narsalarga pul sarflang.",
        challenge2: "Har kuni jamg'ar",
        challenge2Text: "Har kuni kichik summa ajrating.",
        challengeSmall: "Sinov",
        join: "Qatnashish",
        challengeActive: "Siz qatnashyapsiz",
        challengeWait: "Keyingi qatnashishgacha",
        challengeDone: "7 / 7 — Tugadi",

        noTransactions: "Hozircha tranzaksiyalar yo'q.",
        noDreams: "Hozircha orzular yo'q.",
        noExpenses: "Hozircha xarajatlar yo'q.",

        balanceError: "Balans yetarli emas.",
        noAccount: "Akkaunt topilmadi.",
        invalidAmount: "Summani to'g'ri kiriting.",
        dreamLimit: "Orzu uchun ajratilayotgan summa balansdan katta.",

        savedProgress: "Yig'ilgan",
        remaining: "Qoldi"

    },


    ru: {

        welcome: "Добро пожаловать в MoneyMind!",
        authText: "Управляйте финансами, достигайте целей и разумно тратьте деньги.",
        login: "Войти",
        register: "Создать аккаунт",
        createAccount: "Создать аккаунт",
        google: "Войти через Google",
        or: "или",
        firstName: "Имя",
        lastName: "Фамилия",
        phone: "Телефон",

        home: "Главная",
        incomeExpense: "Доход / Расход",
        expenses: "Расходы",
        calculator: "Калькулятор",
        analysis: "Анализ",
        questions: "Вопросы",
        challenge: "Челлендж",
        profile: "Профиль",

        theme: "Режим",
        myAccount: "Мой аккаунт",

        heroText: "Управляйте доходами, контролируйте расходы и двигайтесь к своим мечтам.",
        start: "Начать",
        myDreams: "Мои мечты",

        income: "Доход",
        balance: "Баланс",
        addIncome: "Добавить доход",
        addExpense: "Добавить расход",
        currentBalance: "Ваши текущие деньги",

        cashFlow: "Денежный поток",
        quick: "Быстрые действия",
        addDream: "Добавить мечту",

        incomeExpenseTitle: "Доходы и расходы",
        totalIncome: "Общий доход",
        totalExpense: "Общие расходы",

        history: "История",
        transactions: "Транзакции",

        expenseDescription: "Следите за тем, куда уходят ваши деньги.",
        food: "Продукты",
        utilities: "Коммунальные",
        fuel: "Бензин / Газ",
        transport: "Транспорт",
        travel: "Путешествия",
        recreation: "Развлечения",
        health: "Здоровье",
        dreams: "Мечты",
        other: "Другое",

        category: "Категория",
        amount: "Сумма",
        description: "Комментарий",
        descriptionPlaceholder: "Например: Зарплата",
        save: "Сохранить",

        whereMoney: "Куда уходят деньги?",
        expenseHistory: "История расходов",

        goals: "Цели",
        dreamDescription: "Осуществляйте большие мечты маленькими шагами.",
        newDream: "Новая мечта",
        dreamModalText: "Установите сумму для своей мечты.",
        dreamName: "Название мечты",
        dreamType: "Тип мечты",
        targetAmount: "Необходимая сумма",
        savedAmount: "Уже накоплено",
        car: "🚗 Машина",
        homeGoal: "🏠 Жильё",
        travelGoal: "✈️ Путешествие",
        education: "🎓 Образование",
        createDream: "Создать мечту",
        addToDream: "Добавить к мечте",

        editProfile: "Редактировать профиль",
        changePhoto: "Изменить фото",
        saveChanges: "Сохранить изменения",
        accounts: "Аккаунты",
        newAccount: "Новый аккаунт",
        account: "Аккаунт",
        switchAccount: "Сменить аккаунт",
        deleteAccount: "Удалить аккаунт",
        edit: "Изменить",

        deleteAccountTitle: "Удаление аккаунта",
        deleteConfirm: "Вы действительно хотите удалить этот аккаунт? Все данные будут удалены.",
        no: "Нет",
        yesDelete: "Да, удалить",

        calculatorText: "Быстро выполняйте необходимые расчёты.",

        statistics: "Статистика",
        moneyFlow: "Денежный поток",
        expenseStructure: "Структура расходов",
        knowledge: "Знания",

        correct: "Правильно!",
        wrong: "Неправильно!",
        thanks: "Ваш ответ принят.",
        correctAnswer: "Правильный ответ",
        next: "Следующий вопрос",

        saved: "Сохранено!",
        accountCreated: "Аккаунт создан!",
        incomeAdded: "Доход добавлен!",
        expenseAdded: "Расход добавлен!",
        dreamAdded: "Мечта добавлена!",
        dreamDeleted: "Мечта удалена!",
        dreamSaved: "Деньги добавлены к мечте!",

        challengeJoined: "Вы участвуете!",
        challengeDay: "Сегодня засчитано!",
        challengeComplete: "Челлендж завершён!",
        challenge1: "7 дней без лишних расходов",
        challenge1Text: "В течение 7 дней тратьте деньги только на необходимое.",
        challenge2: "Копи каждый день",
        challenge2Text: "Откладывайте небольшую сумму каждый день.",
        challengeSmall: "Испытание",
        join: "Участвовать",
        challengeActive: "Вы участвуете",
        challengeWait: "До следующего участия",
        challengeDone: "7 / 7 — Завершено",

        noTransactions: "Транзакций пока нет.",
        noDreams: "Мечт пока нет.",
        noExpenses: "Расходов пока нет.",

        balanceError: "Недостаточно средств.",
        noAccount: "Аккаунт не найден.",
        invalidAmount: "Введите корректную сумму.",
        dreamLimit: "Сумма больше доступного баланса.",

        savedProgress: "Накоплено",
        remaining: "Осталось"

    },


    en: {

        welcome: "Welcome to MoneyMind!",
        authText: "Manage your finances, reach your goals and spend your money wisely.",
        login: "Login",
        register: "Create account",
        createAccount: "Create account",
        google: "Continue with Google",
        or: "or",
        firstName: "First name",
        lastName: "Last name",
        phone: "Phone",

        home: "Home",
        incomeExpense: "Income / Expense",
        expenses: "Expenses",
        calculator: "Calculator",
        analysis: "Analysis",
        questions: "Questions",
        challenge: "Challenge",
        profile: "Profile",

        theme: "Theme",
        myAccount: "My account",

        heroText: "Manage your income, control your expenses and move towards your dreams.",
        start: "Start",
        myDreams: "My dreams",

        income: "Income",
        balance: "Balance",
        addIncome: "Add income",
        addExpense: "Add expense",
        currentBalance: "Your current money",

        cashFlow: "Cash flow",
        quick: "Quick actions",
        addDream: "Add dream",

        incomeExpenseTitle: "Income and expenses",
        totalIncome: "Total income",
        totalExpense: "Total expenses",

        history: "History",
        transactions: "Transactions",

        expenseDescription: "Track where your money is going.",
        food: "Food",
        utilities: "Utilities",
        fuel: "Fuel / Gas",
        transport: "Transport",
        travel: "Travel",
        recreation: "Recreation",
        health: "Health",
        dreams: "Dreams",
        other: "Other",

        category: "Category",
        amount: "Amount",
        description: "Description",
        descriptionPlaceholder: "Example: Monthly salary",
        save: "Save",

        whereMoney: "Where is your money going?",
        expenseHistory: "Expense history",

        goals: "Goals",
        dreamDescription: "Achieve big dreams with small steps.",
        newDream: "New dream",
        dreamModalText: "Set a target amount for your dream.",
        dreamName: "Dream name",
        dreamType: "Dream type",
        targetAmount: "Target amount",
        savedAmount: "Already saved",
        car: "🚗 Car",
        homeGoal: "🏠 Home",
        travelGoal: "✈️ Travel",
        education: "🎓 Education",
        createDream: "Create dream",
        addToDream: "Add to dream",

        editProfile: "Edit profile",
        changePhoto: "Change photo",
        saveChanges: "Save changes",
        accounts: "Accounts",
        newAccount: "New account",
        account: "Account",
        switchAccount: "Switch account",
        deleteAccount: "Delete account",
        edit: "Edit",

        deleteAccountTitle: "Delete account",
        deleteConfirm: "Are you sure you want to delete this account? All data will be deleted.",
        no: "No",
        yesDelete: "Yes, delete",

        calculatorText: "Perform your calculations quickly and easily.",

        statistics: "Statistics",
        moneyFlow: "Money flow",
        expenseStructure: "Expense structure",
        knowledge: "Knowledge",

        correct: "Correct!",
        wrong: "Wrong!",
        thanks: "Your answer has been accepted.",
        correctAnswer: "Correct answer",
        next: "Next question",

        saved: "Saved!",
        accountCreated: "Account created!",
        incomeAdded: "Income added!",
        expenseAdded: "Expense added!",
        dreamAdded: "Dream added!",
        dreamDeleted: "Dream deleted!",
        dreamSaved: "Money added to dream!",

        challengeJoined: "You are participating!",
        challengeDay: "Today's check-in accepted!",
        challengeComplete: "Challenge completed!",
        challenge1: "7 days without unnecessary expenses",
        challenge1Text: "Spend money only on necessary things for 7 days.",
        challenge2: "Save every day",
        challenge2Text: "Set aside a small amount every day.",
        challengeSmall: "Challenge",
        join: "Join",
        challengeActive: "You are participating",
        challengeWait: "Until next check-in",
        challengeDone: "7 / 7 — Completed",

        noTransactions: "No transactions yet.",
        noDreams: "No dreams yet.",
        noExpenses: "No expenses yet.",

        balanceError: "Insufficient balance.",
        noAccount: "Account not found.",
        invalidAmount: "Enter a valid amount.",
        dreamLimit: "The amount is greater than your available balance.",

        savedProgress: "Saved",
        remaining: "Remaining"

    }

};


let language =
    localStorage.getItem(LANG_KEY) || "uz";


/* ================= HELPERS ================= */

function t(key) {

    return (
        translations[language]?.[key] ||
        translations.uz[key] ||
        key
    );

}


function formatMoney(value) {

    const number = Number(value) || 0;

    return number.toLocaleString("uz-UZ") + " so'm";

}


function createId() {

    return Date.now().toString(36) +
        Math.random().toString(36).slice(2, 8);

}


function today() {

    return new Date().toISOString();

}


function saveAccounts() {

    localStorage.setItem(
        ACCOUNTS_KEY,
        JSON.stringify(accounts)
    );

}


function getBalance() {

    if (!currentAccount) return 0;

    return Number(currentAccount.income || 0) -
        totalExpenses();

}


function totalExpenses() {

    if (!currentAccount) return 0;

    return currentAccount.expenses.reduce(
        (sum, item) =>
            sum + Number(item.amount || 0),
        0
    );

}


function getInitial(firstName, lastName) {

    return (
        (firstName?.[0] || "") +
        (lastName?.[0] || "")
    ).toUpperCase();

}


/*
    Muhim:
    15 000 000 -> aynan 15 000 000.

    Hech qanday +1 ishlatilmaydi.
*/

function parseMoneyInput(value) {

    const raw = String(value ?? "").trim();

    if (!raw) return NaN;

    const cleaned = raw
        .replace(/\s/g, "")
        .replace(/,/g, "")
        .replace(/[^\d.-]/g, "");

    const number = Number(cleaned);

    return Number.isFinite(number)
        ? number
        : NaN;

}


/* ================= ACCOUNT ================= */

function createEmptyAccount(
    firstName,
    lastName,
    phone
) {

    return {

        id: createId(),

        firstName,
        lastName,
        phone,

        photo: "",

        income: 0,

        expenses: [],

        dreams: [],

        transactions: [],

        challenge: {

            active: false,

            days: 0,

            lastCheckIn: null,

            saved: 0

        }

    };

}


function normalizeAccount(account) {

    account.expenses =
        Array.isArray(account.expenses)
            ? account.expenses
            : [];

    account.dreams =
        Array.isArray(account.dreams)
            ? account.dreams
            : [];

    account.transactions =
        Array.isArray(account.transactions)
            ? account.transactions
            : [];

    account.income =
        Number(account.income || 0);

    account.challenge =
        account.challenge || {};

    account.challenge.active =
        Boolean(account.challenge.active);

    account.challenge.days =
        Number(account.challenge.days || 0);

    account.challenge.lastCheckIn =
        account.challenge.lastCheckIn || null;

    account.challenge.saved =
        Number(account.challenge.saved || 0);

    return account;

}


function setCurrentAccount(phone) {

    if (!accounts[phone]) return;

    currentPhone = phone;

    localStorage.setItem(
        CURRENT_KEY,
        currentPhone
    );

    currentAccount =
        normalizeAccount(
            accounts[phone]
        );

    accounts[phone] =
        currentAccount;

    saveAccounts();

    renderAll();

}


function saveCurrentAccount() {

    if (!currentAccount || !currentPhone)
        return;

    accounts[currentPhone] =
        currentAccount;

    saveAccounts();

}


/* ================= AUTH ================= */

function initAuth() {

    const overlay =
        document.getElementById("authOverlay");

    if (
        currentPhone &&
        accounts[currentPhone]
    ) {

        setCurrentAccount(currentPhone);

        overlay?.classList.add("hidden");

    } else {

        overlay?.classList.remove("hidden");

    }

}


function switchAuthTab(type) {

    const loginTab =
        document.getElementById("loginTab");

    const registerTab =
        document.getElementById("registerTab");

    const loginForm =
        document.getElementById("loginForm");

    const registerForm =
        document.getElementById("registerForm");

    if (type === "login") {

        loginTab?.classList.add("active");
        registerTab?.classList.remove("active");

        loginForm?.classList.remove("hidden");
        registerForm?.classList.add("hidden");

    } else {

        registerTab?.classList.add("active");
        loginTab?.classList.remove("active");

        registerForm?.classList.remove("hidden");
        loginForm?.classList.add("hidden");

    }

}


document.getElementById("loginTab")
    ?.addEventListener(
        "click",
        () => switchAuthTab("login")
    );


document.getElementById("registerTab")
    ?.addEventListener(
        "click",
        () => switchAuthTab("register")
    );


document.getElementById("registerForm")
    ?.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();

            const firstName =
                document.getElementById("firstName")
                    .value.trim();

            const lastName =
                document.getElementById("lastName")
                    .value.trim();

            const phone =
                document.getElementById("registerPhone")
                    .value.trim();

            if (!firstName ||
                !lastName ||
                !phone) {

                return;

            }

            if (accounts[phone]) {

                showToast(
                    "Bu telefon raqam bilan akkaunt mavjud."
                );

                return;

            }

            currentAccount =
                createEmptyAccount(
                    firstName,
                    lastName,
                    phone
                );

            currentPhone = phone;

            accounts[phone] =
                currentAccount;

            saveAccounts();

            localStorage.setItem(
                CURRENT_KEY,
                phone
            );

            document.getElementById("authOverlay")
                ?.classList.add("hidden");

            this.reset();

            renderAll();

            showToast(t("accountCreated"));

        }
    );


document.getElementById("loginForm")
    ?.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();

            const phone =
                document.getElementById("loginPhone")
                    .value.trim();

            if (!accounts[phone]) {

                showToast(t("noAccount"));

                return;

            }

            setCurrentAccount(phone);

            document.getElementById("authOverlay")
                ?.classList.add("hidden");

            this.reset();

            showToast(t("login"));

        }
    );


function googleDemoLogin() {

    const phone =
        "google_" + createId();

    currentAccount =
        createEmptyAccount(
            "Google",
            "User",
            phone
        );

    currentPhone = phone;

    accounts[phone] =
        currentAccount;

    saveAccounts();

    localStorage.setItem(
        CURRENT_KEY,
        phone
    );

    document.getElementById("authOverlay")
        ?.classList.add("hidden");

    renderAll();

    showToast(t("accountCreated"));

}


document.getElementById("googleLogin")
    ?.addEventListener(
        "click",
        googleDemoLogin
    );


document.getElementById("googleRegister")
    ?.addEventListener(
        "click",
        googleDemoLogin
    );


/* ================= NAVIGATION ================= */

document.querySelectorAll(".nav-item")
    .forEach(button => {

        button.addEventListener(
            "click",
            () => {

                showSection(
                    button.dataset.section
                );

            }
        );

    });


document.querySelectorAll("[data-section-link]")
    .forEach(button => {

        button.addEventListener(
            "click",
            () => {

                const section =
                    button.dataset.sectionLink;

                showSection(section);

                if (
                    section === "expenses" &&
                    button.id === "homeDreamsBtn"
                ) {

                    setTimeout(
                        openDreamsArea,
                        100
                    );

                }

            }
        );

    });


function showSection(sectionId) {

    document.querySelectorAll(".page-section")
        .forEach(section => {

            section.classList.toggle(
                "active-section",
                section.id === sectionId
            );

        });


    document.querySelectorAll(".nav-item")
        .forEach(button => {

            button.classList.toggle(
                "active",
                button.dataset.section === sectionId
            );

        });


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });


    if (sectionId === "analysis" ||
        sectionId === "expenses" ||
        sectionId === "home") {

        setTimeout(
            updateCharts,
            100
        );

    }

}


/* ================= BRAND ================= */

document.getElementById("brand")
    ?.addEventListener(
        "click",
        () => showSection("home")
    );


document.getElementById("mobileBrand")
    ?.addEventListener(
        "click",
        () => showSection("home")
    );


/* ================= MONEY ================= */

document.querySelectorAll("[data-open-money]")
    .forEach(button => {

        button.addEventListener(
            "click",
            () => {

                openMoneyModal(
                    button.dataset.openMoney
                );

            }
        );

    });


function openMoneyModal(type) {

    moneyType = type;

    const modal =
        document.getElementById("moneyModal");

    const title =
        document.getElementById("moneyModalTitle");

    const category =
        document.getElementById(
            "expenseCategoryWrapper"
        );

    const amount =
        document.getElementById("moneyAmount");

    const description =
        document.getElementById(
            "moneyDescription"
        );


    if (type === "income") {

        title.textContent =
            t("addIncome");

        category?.classList.add("hidden");

    } else {

        title.textContent =
            t("addExpense");

        category?.classList.remove("hidden");

    }


    amount.value = "";

    description.value = "";

    modal?.classList.add("active");

}


document.getElementById("moneyForm")
    ?.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();

            if (!currentAccount)
                return;


            /*
                MUHIM BUG FIX:

                Number(input.value)

                15 000 000 ni 15 000 000
                qilib oladi.

                +1 YO'Q.
            */

            const amount =
                parseMoneyInput(
                    document.getElementById(
                        "moneyAmount"
                    ).value
                );


            if (!Number.isFinite(amount) ||
                amount <= 0) {

                showToast(
                    t("invalidAmount")
                );

                return;

            }


            const description =
                document.getElementById(
                    "moneyDescription"
                ).value.trim();


            if (moneyType === "income") {

                currentAccount.income += amount;

                currentAccount.transactions.push({

                    id: createId(),

                    type: "income",

                    amount,

                    description:
                        description ||
                        t("income"),

                    date: today()

                });

                saveCurrentAccount();

                closeModal("moneyModal");

                renderAll();

                showToast(
                    t("incomeAdded")
                );

                return;

            }


            if (amount > getBalance()) {

                showToast(
                    t("balanceError")
                );

                return;

            }


            const category =
                document.getElementById(
                    "expenseCategory"
                ).value;


            const expense = {

                id: createId(),

                type: "expense",

                amount,

                category,

                description:
                    description ||
                    t(category),

                date: today()

            };


            currentAccount.expenses.push(
                expense
            );

            currentAccount.transactions.push(
                expense
            );


            saveCurrentAccount();

            closeModal("moneyModal");

            renderAll();

            showToast(
                t("expenseAdded")
            );

        }
    );


/* ================= DREAMS ================= */

document.getElementById("homeAddDream")
    ?.addEventListener(
        "click",
        () => {

            showSection("expenses");

            setTimeout(
                () => {

                    openDreamsArea();

                    document.getElementById(
                        "openDreamModal"
                    )?.click();

                },
                100
            );

        }
    );


document.getElementById("dreamExpenseCategory")
    ?.addEventListener(
        "click",
        () => openDreamsArea()
    );


function openDreamsArea() {

    const area =
        document.getElementById(
            "dreamsInsideExpenses"
        );

    area?.classList.remove("hidden");

    document.getElementById(
        "dreamExpenseCategory"
    )?.classList.add("active");

    setTimeout(
        () => {

            area?.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        },
        50
    );

}


document.getElementById("openDreamModal")
    ?.addEventListener(
        "click",
        () => {

            document.getElementById(
                "dreamModal"
            )?.classList.add("active");

        }
    );


document.getElementById("dreamForm")
    ?.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();

            if (!currentAccount)
                return;


            const name =
                document.getElementById(
                    "dreamName"
                ).value.trim();


            const type =
                document.getElementById(
                    "dreamType"
                ).value;


            const target =
                parseMoneyInput(
                    document.getElementById(
                        "dreamTarget"
                    ).value
                );


            const saved =
                parseMoneyInput(
                    document.getElementById(
                        "dreamSaved"
                    ).value
                ) || 0;


            if (!name ||
                !Number.isFinite(target) ||
                target <= 0) {

                showToast(
                    t("invalidAmount")
                );

                return;

            }


            if (saved > getBalance()) {

                showToast(
                    t("dreamLimit")
                );

                return;

            }


            if (saved > target) {

                showToast(
                    "Yig'ilgan summa maqsad summadan katta bo'lmasin."
                );

                return;

            }


            const dream = {

                id: createId(),

                name,

                type,

                target,

                saved,

                createdAt: today()

            };


            currentAccount.dreams.push(
                dream
            );


            /*
                Orzuga boshlang'ich pul
                ham REAL XARAJAT.

                Shu sabab diagrammada
                "Orzular" kategoriyasi
                hisoblanadi.
            */

            if (saved > 0) {

                const expense = {

                    id: createId(),

                    type: "expense",

                    amount: saved,

                    category: "dreams",

                    dreamId: dream.id,

                    description:
                        "Orzu: " + name,

                    date: today()

                };


                currentAccount.expenses.push(
                    expense
                );

                currentAccount.transactions.push(
                    expense
                );

            }


            saveCurrentAccount();

            closeModal("dreamModal");

            this.reset();

            document.getElementById(
                "dreamSaved"
            ).value = "0";

            renderAll();

            showToast(
                t("dreamAdded")
            );

            openDreamsArea();

        }
    );


function getDreamIcon(type) {

    const icons = {

        car: "🚗",
        home: "🏠",
        travel: "✈️",
        education: "🎓",
        other: "✨"

    };

    return icons[type] || "💭";

}


function getDreamTypeName(type) {

    const map = {

        car: "car",
        home: "homeGoal",
        travel: "travelGoal",
        education: "education",
        other: "other"

    };

    return t(map[type] || "other");

}


function renderDreams() {

    const grid =
        document.getElementById(
            "dreamsGrid"
        );

    if (!grid) return;


    if (!currentAccount ||
        !currentAccount.dreams.length) {

        grid.innerHTML = `
            <div class="empty-state">
                ${escapeHtml(t("noDreams"))}
            </div>
        `;

        return;

    }


    grid.innerHTML =
        currentAccount.dreams
            .map(dream => {

                const target =
                    Number(dream.target || 0);

                const saved =
                    Number(dream.saved || 0);

                const percent =
                    target > 0
                        ? Math.min(
                            100,
                            saved / target * 100
                        )
                        : 0;

                const remaining =
                    Math.max(
                        0,
                        target - saved
                    );


                return `

                    <div class="dream-card">

                        <button
                            class="dream-delete"
                            onclick="deleteDream('${dream.id}')">
                            ×
                        </button>

                        <div class="dream-top">

                            <div class="dream-icon">
                                ${getDreamIcon(dream.type)}
                            </div>

                            <div>

                                <h3>
                                    ${escapeHtml(dream.name)}
                                </h3>

                                <span class="dream-type">
                                    ${escapeHtml(
                    getDreamTypeName(
                        dream.type
                    )
                )}
                                </span>

                            </div>

                        </div>


                        <div class="dream-money">

                            <span>
                                ${escapeHtml(t("savedProgress"))}
                            </span>

                            <strong>
                                ${formatMoney(saved)}
                            </strong>

                        </div>


                        <div class="dream-money">

                            <span>
                                ${escapeHtml(t("remaining"))}
                            </span>

                            <strong>
                                ${formatMoney(remaining)}
                            </strong>

                        </div>


                        <div class="dream-progress">

                            <div
                                class="dream-progress-bar"
                                style="width:${percent}%">
                            </div>

                        </div>


                        <div class="dream-percent">

                            <span>
                                ${percent.toFixed(0)}%
                            </span>

                            <span>
                                ${formatMoney(target)}
                            </span>

                        </div>


                        <button
                            class="dream-add-btn"
                            onclick="openDreamTopup('${dream.id}')">

                            + ${escapeHtml(t("addToDream"))}

                        </button>

                    </div>
                `;

            })
            .join("");

}


function deleteDream(id) {

    if (!currentAccount) return;

    currentAccount.dreams =
        currentAccount.dreams.filter(
            dream => dream.id !== id
        );

    saveCurrentAccount();

    renderAll();

    openDreamsArea();

    showToast(
        t("dreamDeleted")
    );

}


function openDreamTopup(id) {

    selectedDreamId = id;

    const dream =
        currentAccount?.dreams.find(
            item => item.id === id
        );

    if (!dream) return;


    const remaining =
        Math.max(
            0,
            Number(dream.target) -
            Number(dream.saved)
        );


    document.getElementById(
        "dreamTopupDescription"
    ).textContent =
        `${dream.name}: ${formatMoney(remaining)} ${t("remaining")}`;


    document.getElementById(
        "dreamTopupAmount"
    ).value = "";


    document.getElementById(
        "dreamTopupModal"
    )?.classList.add("active");

}


document.getElementById("dreamTopupForm")
    ?.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();

            if (!currentAccount ||
                !selectedDreamId)
                return;


            const dream =
                currentAccount.dreams.find(
                    item =>
                        item.id === selectedDreamId
                );


            if (!dream) return;


            const amount =
                parseMoneyInput(
                    document.getElementById(
                        "dreamTopupAmount"
                    ).value
                );


            if (!Number.isFinite(amount) ||
                amount <= 0) {

                showToast(
                    t("invalidAmount")
                );

                return;

            }


            const remaining =
                Number(dream.target) -
                Number(dream.saved);


            if (amount > remaining) {

                showToast(
                    "Bu summa orzu uchun qolgan summadan katta."
                );

                return;

            }


            if (amount > getBalance()) {

                showToast(
                    t("balanceError")
                );

                return;

            }


            dream.saved += amount;


            /*
                ENG MUHIM QISM:

                Orzuga qo'shilgan pul
                oddiy xarajat emasdek ko'rinsa ham,
                balansdan chiqadi.

                Shuning uchun u "dreams"
                kategoriyasida REAL expense bo'ladi.
            */

            const expense = {

                id: createId(),

                type: "expense",

                amount,

                category: "dreams",

                dreamId: dream.id,

                description:
                    "Orzu: " + dream.name,

                date: today()

            };


            currentAccount.expenses.push(
                expense
            );

            currentAccount.transactions.push(
                expense
            );


            saveCurrentAccount();

            closeModal("dreamTopupModal");

            renderAll();

            openDreamsArea();

            showToast(
                t("dreamSaved")
            );

        }
    );


/* ================= EXPENSE FILTER ================= */

document.querySelectorAll(
    "[data-expense-filter]"
).forEach(button => {

    button.addEventListener(
        "click",
        () => {

            const category =
                button.dataset.expenseFilter;


            if (expenseFilter === category) {

                expenseFilter = null;

                button.classList.remove("active");

            } else {

                document.querySelectorAll(
                    "[data-expense-filter]"
                ).forEach(
                    item =>
                        item.classList.remove("active")
                );

                expenseFilter = category;

                button.classList.add("active");

            }


            if (category === "dreams") {

                openDreamsArea();

            }


            renderExpenses();

        }
    );

});


/* ================= PROFILE ================= */

document.getElementById("editProfileBtn")
    ?.addEventListener(
        "click",
        () => {

            if (!currentAccount) return;

            document.getElementById(
                "editFirstName"
            ).value =
                currentAccount.firstName;

            document.getElementById(
                "editLastName"
            ).value =
                currentAccount.lastName;

            document.getElementById(
                "editPhone"
            ).value =
                currentAccount.phone;

            renderEditAvatar();

            document.getElementById(
                "profileModal"
            )?.classList.add("active");

        }
    );


document.getElementById("profileForm")
    ?.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();

            if (!currentAccount) return;


            const oldPhone =
                currentPhone;

            const firstName =
                document.getElementById(
                    "editFirstName"
                ).value.trim();

            const lastName =
                document.getElementById(
                    "editLastName"
                ).value.trim();

            const newPhone =
                document.getElementById(
                    "editPhone"
                ).value.trim();


            if (
                newPhone !== oldPhone &&
                accounts[newPhone]
            ) {

                showToast(
                    "Bu telefon raqamli akkaunt mavjud."
                );

                return;

            }


            currentAccount.firstName =
                firstName;

            currentAccount.lastName =
                lastName;

            currentAccount.phone =
                newPhone;


            if (newPhone !== oldPhone) {

                delete accounts[oldPhone];

                currentPhone =
                    newPhone;

                localStorage.setItem(
                    CURRENT_KEY,
                    newPhone
                );

            }


            saveCurrentAccount();

            closeModal("profileModal");

            renderAll();

            showToast(
                t("saved")
            );

        }
    );


document.getElementById("profilePhoto")
    ?.addEventListener(
        "change",
        function () {

            const file =
                this.files?.[0];

            if (!file || !currentAccount)
                return;


            const reader =
                new FileReader();

            reader.onload = event => {

                currentAccount.photo =
                    event.target.result;

                saveCurrentAccount();

                renderAll();

            };

            reader.readAsDataURL(file);

        }
    );


function renderEditAvatar() {

    const avatar =
        document.getElementById(
            "editAvatar"
        );

    if (!avatar || !currentAccount)
        return;


    if (currentAccount.photo) {

        avatar.innerHTML =
            `<img src="${currentAccount.photo}" alt="">`;

    } else {

        avatar.textContent =
            getInitial(
                currentAccount.firstName,
                currentAccount.lastName
            );

    }

}


/* ================= ACCOUNT SWITCH ================= */

document.getElementById("switchAccountBtn")
    ?.addEventListener(
        "click",
        () => {

            renderAccounts();

            document.getElementById(
                "accountsModal"
            )?.classList.add("active");

        }
    );


document.getElementById("newAccountBtn")
    ?.addEventListener(
        "click",
        () => {

            closeModal("accountsModal");

            document.getElementById(
                "authOverlay"
            )?.classList.remove("hidden");

            switchAuthTab("register");

        }
    );


function renderAccounts() {

    const list =
        document.getElementById(
            "accountsList"
        );

    if (!list) return;


    const phones =
        Object.keys(accounts);


    if (!phones.length) {

        list.innerHTML =
            `<div class="empty-state">
                ${escapeHtml(t("noAccount"))}
             </div>`;

        return;

    }


    list.innerHTML =
        phones.map(phone => {

            const account =
                normalizeAccount(
                    accounts[phone]
                );


            const avatar =
                account.photo
                    ? `<img src="${account.photo}" alt="">`
                    : escapeHtml(
                        getInitial(
                            account.firstName,
                            account.lastName
                        )
                    );


            return `

                <div
                    class="account-item"
                    onclick="switchToAccount('${escapeAttribute(phone)}')">

                    <div class="account-avatar">
                        ${avatar}
                    </div>

                    <div>

                        <strong>
                            ${escapeHtml(
                account.firstName +
                " " +
                account.lastName
            )}
                        </strong>

                        <small>
                            ${escapeHtml(phone)}
                        </small>

                    </div>

                    ${phone === currentPhone
                    ? `<span class="account-check">✓</span>`
                    : ""
                }

                </div>

            `;

        }).join("");

}


function switchToAccount(phone) {

    if (!accounts[phone]) return;

    closeModal("accountsModal");

    setCurrentAccount(phone);

    showToast(
        `${currentAccount.firstName} — ${t("myAccount")}`
    );

}


/* ================= DELETE ACCOUNT ================= */

/*
    Browser confirm() olib tashlandi.

    Endi avval custom modal ochiladi.
*/

document.getElementById("deleteAccountBtn")
    ?.addEventListener(
        "click",
        () => {

            if (!currentAccount) return;

            document.getElementById(
                "deleteAccountModal"
            )?.classList.add("active");

        }
    );


document.getElementById("cancelDeleteAccount")
    ?.addEventListener(
        "click",
        () => {

            closeModal(
                "deleteAccountModal"
            );

        }
    );


document.getElementById("confirmDeleteAccount")
    ?.addEventListener(
        "click",
        deleteCurrentAccount
    );


function deleteCurrentAccount() {

    if (!currentAccount ||
        !currentPhone)
        return;


    const deletedName =
        currentAccount.firstName;


    delete accounts[currentPhone];

    saveAccounts();


    const remaining =
        Object.keys(accounts);


    closeModal(
        "deleteAccountModal"
    );


    if (remaining.length) {

        const nextPhone =
            remaining[0];

        setCurrentAccount(
            nextPhone
        );

        showToast(
            `${deletedName} akkaunti o'chirildi.`
        );

    } else {

        currentAccount = null;

        currentPhone = null;

        localStorage.removeItem(
            CURRENT_KEY
        );

        document.getElementById(
            "authOverlay"
        )?.classList.remove("hidden");

        switchAuthTab("register");

        renderAll();

        showToast(
            "Akkaunt o'chirildi."
        );

    }

}


/* ================= CHALLENGE ================= */

document.getElementById("challengeButton")
    ?.addEventListener(
        "click",
        joinChallenge
    );


function joinChallenge() {

    if (!currentAccount) return;


    const challenge =
        currentAccount.challenge;


    const now =
        Date.now();


    if (challenge.days >= 7) {

        showToast(
            t("challengeComplete")
        );

        return;

    }


    if (!challenge.active) {

        challenge.active = true;

        challenge.days = 1;

        challenge.lastCheckIn = now;

        saveCurrentAccount();

        renderChallenge();

        showToast(
            t("challengeJoined")
        );

        return;

    }


    const elapsed =
        now -
        Number(challenge.lastCheckIn || 0);


    const day =
        24 * 60 * 60 * 1000;


    if (elapsed < day) {

        showToast(
            `${t("challengeWait")}: ${formatRemainingTime(day - elapsed)}`
        );

        renderChallenge();

        return;

    }


    challenge.days += 1;

    challenge.lastCheckIn = now;

    saveCurrentAccount();

    renderChallenge();

    showToast(
        t("challengeDay")
    );

}


function formatRemainingTime(milliseconds) {

    const totalSeconds =
        Math.max(
            0,
            Math.floor(milliseconds / 1000)
        );


    const hours =
        Math.floor(
            totalSeconds / 3600
        );

    const minutes =
        Math.floor(
            (totalSeconds % 3600) / 60
        );

    const seconds =
        totalSeconds % 60;


    return [
        String(hours).padStart(2, "0"),
        String(minutes).padStart(2, "0"),
        String(seconds).padStart(2, "0")
    ].join(":");

}


function renderChallenge() {

    if (!currentAccount) return;


    const challenge =
        currentAccount.challenge;


    const days =
        Math.min(
            7,
            Number(challenge.days || 0)
        );


    const progress =
        days / 7 * 100;


    const daysElement =
        document.getElementById(
            "challengeDays"
        );

    const progressElement =
        document.getElementById(
            "challengeProgress"
        );

    const timerElement =
        document.getElementById(
            "challengeTimer"
        );

    const button =
        document.getElementById(
            "challengeButton"
        );

    const savedElement =
        document.getElementById(
            "challengeSaved"
        );


    if (daysElement)
        daysElement.textContent =
            `${days} / 7`;


    if (progressElement)
        progressElement.style.width =
            `${progress}%`;


    if (savedElement)
        savedElement.textContent =
            formatMoney(
                challenge.saved
            );


    if (!button) return;


    button.classList.remove(
        "challenge-active",
        "challenge-complete"
    );


    if (days >= 7) {

        button.disabled = true;

        button.classList.add(
            "challenge-complete"
        );

        button.innerHTML =
            `<span>${escapeHtml(
                t("challengeDone")
            )}</span>`;

        if (timerElement)
            timerElement.textContent = "";

        return;

    }


    button.disabled = false;


    if (!challenge.active) {

        button.innerHTML =
            `<span>${escapeHtml(
                t("join")
            )}</span>`;

        if (timerElement)
            timerElement.textContent = "-";

        return;

    }


    const remaining =
        24 * 60 * 60 * 1000 -
        (
            Date.now() -
            Number(
                challenge.lastCheckIn || 0
            )
        );


    if (remaining > 0) {

        button.disabled = true;

        button.classList.add(
            "challenge-active"
        );

        button.innerHTML =
            `<span>${escapeHtml(
                t("challengeActive")
            )}</span>`;


        if (timerElement)
            timerElement.textContent =
                formatRemainingTime(
                    remaining
                );

    } else {

        button.disabled = false;

        button.innerHTML =
            `<span>${escapeHtml(
                t("challengeDay")
            )}</span>`;


        if (timerElement)
            timerElement.textContent =
                "00:00:00";

    }

}


/* ================= DAILY SAVING ================= */

document.getElementById("saveChallengeBtn")
    ?.addEventListener(
        "click",
        () => {

            if (!currentAccount)
                return;


            const amount = 10000;


            if (amount > getBalance()) {

                showToast(
                    t("balanceError")
                );

                return;

            }


            const expense = {

                id: createId(),

                type: "expense",

                amount,

                category: "dreams",

                description: "Daily saving",

                date: today()

            };


            currentAccount.expenses.push(
                expense
            );

            currentAccount.transactions.push(
                expense
            );

            currentAccount.challenge.saved +=
                amount;


            saveCurrentAccount();

            renderAll();

            showToast(
                t("saved")
            );

        }
    );


/* ================= QUIZ ================= */

const quizData = {

    uz: [

        {
            question:
                "Daromad va xarajat o'rtasidagi farq nima?",

            options: [
                "Daromad — kiradigan pul, xarajat — chiqadigan pul",
                "Ikkalasi ham xarajat",
                "Ikkalasi ham daromad",
                "Farqi yo'q"
            ],

            answer: 0

        },

        {
            question:
                "Jamg'arishning eng yaxshi usullaridan biri qaysi?",

            options: [
                "Qolgan pulni jamg'arish",
                "Avval jamg'arib, keyin sarflash",
                "Barcha pulni sarflash",
                "Qarz olish"
            ],

            answer: 1

        },

        {
            question:
                "Byudjet nima uchun kerak?",

            options: [
                "Pulni rejalashtirish uchun",
                "Ko'proq qarz olish uchun",
                "Pulni yashirish uchun",
                "Faqat xarid qilish uchun"
            ],

            answer: 0

        }

    ],

    ru: [

        {
            question:
                "Что такое доход?",

            options: [
                "Деньги, которые мы получаем",
                "Деньги, которые тратим",
                "Долг",
                "Налог"
            ],

            answer: 0

        },

        {
            question:
                "Как лучше всего начать копить?",

            options: [
                "Тратить всё",
                "Сначала откладывать часть дохода",
                "Брать кредит",
                "Не планировать"
            ],

            answer: 1

        },

        {
            question:
                "Для чего нужен бюджет?",

            options: [
                "Для планирования денег",
                "Для увеличения долгов",
                "Только для покупок",
                "Он не нужен"
            ],

            answer: 0

        }

    ],

    en: [

        {
            question:
                "What is income?",

            options: [
                "Money we receive",
                "Money we spend",
                "Debt",
                "Tax"
            ],

            answer: 0

        },

        {
            question:
                "What is a good saving habit?",

            options: [
                "Spend everything",
                "Save before spending",
                "Borrow money",
                "Never plan"
            ],

            answer: 1

        },

        {
            question:
                "Why do we need a budget?",

            options: [
                "To plan our money",
                "To increase debt",
                "Only for shopping",
                "It is unnecessary"
            ],

            answer: 0

        }

    ]

};


function getQuizData() {

    return quizData[language] ||
        quizData.uz;

}


function renderQuiz() {

    const data =
        getQuizData();


    const question =
        data[currentQuiz];


    if (!question) return;


    const questionElement =
        document.getElementById(
            "quizQuestion"
        );

    const optionsElement =
        document.getElementById(
            "quizOptions"
        );

    const resultElement =
        document.getElementById(
            "quizResult"
        );

    const nextButton =
        document.getElementById(
            "nextQuestion"
        );

    const counter =
        document.getElementById(
            "quizCounter"
        );


    if (counter) {

        counter.textContent =
            `${String(currentQuiz + 1).padStart(2, "0")} / 03`;

    }


    if (questionElement)
        questionElement.textContent =
            question.question;


    if (optionsElement) {

        optionsElement.innerHTML =
            question.options.map(
                (option, index) => `

                    <button
                        class="quiz-option"
                        onclick="answerQuiz(${index})">

                        ${escapeHtml(option)}

                    </button>

                `
            ).join("");

    }


    resultElement?.classList.add(
        "hidden"
    );

    nextButton?.classList.add(
        "hidden"
    );

}


function answerQuiz(index) {

    const data =
        getQuizData();

    const question =
        data[currentQuiz];


    if (!question) return;


    const options =
        document.querySelectorAll(
            ".quiz-option"
        );


    options.forEach(
        button =>
            button.disabled = true
    );


    options[
        question.answer
    ]?.classList.add(
        "correct"
    );


    const result =
        document.getElementById(
            "quizResult"
        );


    if (index === question.answer) {

        result.textContent =
            t("correct");

        result.className =
            "quiz-result";

    } else {

        options[index]?.classList.add(
            "wrong"
        );

        result.textContent =
            `${t("wrong")} ${t("correctAnswer")}: ${question.options[question.answer]}`;

        result.className =
            "quiz-result wrong-result";

    }


    result.classList.remove(
        "hidden"
    );


    document.getElementById(
        "nextQuestion"
    )?.classList.remove(
        "hidden"
    );

}


document.getElementById("nextQuestion")
    ?.addEventListener(
        "click",
        () => {

            currentQuiz++;

            if (
                currentQuiz >=
                getQuizData().length
            ) {

                currentQuiz = 0;

            }

            renderQuiz();

        }
    );


/* ================= LANGUAGE ================= */

document.getElementById("languageSelect")
    ?.addEventListener(
        "change",
        event => {

            language =
                event.target.value;

            localStorage.setItem(
                LANG_KEY,
                language
            );

            heroIndex = 0;

            applyLanguage();

            renderAll();

        }
    );


function applyLanguage() {

    document.documentElement.lang =
        language;


    document.querySelectorAll(
        "[data-i18n]"
    ).forEach(element => {

        const key =
            element.dataset.i18n;

        if (translations[language]?.[key]) {

            element.textContent =
                translations[language][key];

        }

    });


    document.querySelectorAll(
        "[data-i18n-placeholder]"
    ).forEach(element => {

        const key =
            element.dataset.i18nPlaceholder;

        if (translations[language]?.[key]) {

            element.placeholder =
                translations[language][key];

        }

    });


    const select =
        document.getElementById(
            "languageSelect"
        );

    if (select)
        select.value =
            language;


    updateMoneyModalTitle();

    renderQuiz();

    renderChallenge();

}


function updateMoneyModalTitle() {

    const title =
        document.getElementById(
            "moneyModalTitle"
        );

    if (!title) return;


    title.textContent =
        moneyType === "income"
            ? t("addIncome")
            : t("addExpense");

}


/* ================= THEME ================= */

document.getElementById("themeToggle")
    ?.addEventListener(
        "click",
        () => {

            document.body.classList.toggle(
                "dark"
            );

            const isDark =
                document.body.classList.contains(
                    "dark"
                );

            localStorage.setItem(
                THEME_KEY,
                isDark
                    ? "dark"
                    : "light"
            );

            updateCharts();

        }
    );


function loadTheme() {

    if (
        localStorage.getItem(
            THEME_KEY
        ) === "dark"
    ) {

        document.body.classList.add(
            "dark"
        );

    }

}


/* ================= HERO ================= */

const heroTexts = {

    uz: [
        "Pulingiz ustidan nazorat qiling.",
        "Moliyaviy maqsadlaringizga erishing.",
        "Har bir so'mingizni aqlli boshqaring.",
        "Bugungi reja — ertangi natija.",
        "Moliyaviy erkinlikni bugundan boshlang."
    ],

    ru: [
        "Контролируйте свои деньги.",
        "Достигайте финансовых целей.",
        "Управляйте каждой суммой разумно.",
        "Сегодняшний план — завтрашний результат.",
        "Начните финансовую свободу сегодня."
    ],

    en: [
        "Take control of your money.",
        "Reach your financial goals.",
        "Manage every sum wisely.",
        "Today's plan — tomorrow's result.",
        "Start your financial freedom today."
    ]

};


function startHeroAnimation() {

    setInterval(
        () => {

            const element =
                document.getElementById(
                    "animatedHeroText"
                );

            if (!element) return;


            element.classList.add(
                "change"
            );


            setTimeout(
                () => {

                    heroIndex++;

                    const list =
                        heroTexts[language] ||
                        heroTexts.uz;

                    if (
                        heroIndex >=
                        list.length
                    ) {

                        heroIndex = 0;

                    }


                    element.textContent =
                        list[heroIndex];

                    element.classList.remove(
                        "change"
                    );

                },
                350
            );

        },
        3000
    );

}


/* ================= RENDER USER ================= */

function renderUser() {

    if (!currentAccount) return;


    const fullName =
        `${currentAccount.firstName} ${currentAccount.lastName}`;


    const initials =
        getInitial(
            currentAccount.firstName,
            currentAccount.lastName
        );


    const topName =
        document.getElementById(
            "topUserName"
        );

    const topAvatar =
        document.getElementById(
            "topAvatar"
        );

    const profileAvatar =
        document.getElementById(
            "profileAvatar"
        );

    const profileName =
        document.getElementById(
            "profileName"
        );


    if (topName)
        topName.textContent =
            fullName;


    if (profileName)
        profileName.textContent =
            fullName;


    if (currentAccount.photo) {

        if (topAvatar)
            topAvatar.innerHTML =
                `<img src="${currentAccount.photo}" alt="">`;

        if (profileAvatar)
            profileAvatar.innerHTML =
                `<img src="${currentAccount.photo}" alt="">`;

    } else {

        if (topAvatar)
            topAvatar.textContent =
                initials;

        if (profileAvatar)
            profileAvatar.textContent =
                initials;

    }


    const first =
        document.getElementById(
            "profileFirstName"
        );

    const last =
        document.getElementById(
            "profileLastName"
        );

    const phone =
        document.getElementById(
            "profilePhone"
        );


    if (first)
        first.textContent =
            currentAccount.firstName;

    if (last)
        last.textContent =
            currentAccount.lastName;

    if (phone)
        phone.textContent =
            currentAccount.phone;


    renderEditAvatar();

}


/* ================= RENDER MONEY ================= */

function renderMoney() {

    if (!currentAccount) return;


    const income =
        Number(currentAccount.income || 0);

    const expense =
        totalExpenses();

    const balance =
        income - expense;


    const elements = {

        incomeTotal:
            document.getElementById(
                "incomeTotal"
            ),

        expenseTotal:
            document.getElementById(
                "expenseTotal"
            ),

        balanceTotal:
            document.getElementById(
                "balanceTotal"
            ),

        financeIncome:
            document.getElementById(
                "financeIncome"
            ),

        financeExpense:
            document.getElementById(
                "financeExpense"
            ),

        financeBalance:
            document.getElementById(
                "financeBalance"
            ),

        analysisIncome:
            document.getElementById(
                "analysisIncome"
            ),

        analysisExpense:
            document.getElementById(
                "analysisExpense"
            ),

        analysisBalance:
            document.getElementById(
                "analysisBalance"
            )

    };


    elements.incomeTotal.textContent =
        formatMoney(income);

    elements.expenseTotal.textContent =
        formatMoney(expense);

    elements.balanceTotal.textContent =
        formatMoney(balance);

    elements.financeIncome.textContent =
        formatMoney(income);

    elements.financeExpense.textContent =
        formatMoney(expense);

    elements.financeBalance.textContent =
        formatMoney(balance);

    elements.analysisIncome.textContent =
        formatMoney(income);

    elements.analysisExpense.textContent =
        formatMoney(expense);

    elements.analysisBalance.textContent =
        formatMoney(balance);

}


/* ================= TRANSACTIONS ================= */

function renderTransactionHTML(transaction) {

    const isIncome =
        transaction.type === "income";


    const amount =
        Number(transaction.amount || 0);


    return `

        <div class="transaction">

            <div class="transaction-icon ${isIncome
            ? "income"
            : "expense"
        }">

                ${isIncome ? "↑" : "↓"}

            </div>


            <div class="transaction-info">

                <strong>
                    ${escapeHtml(
            transaction.description ||
            t(
                transaction.category ||
                "other"
            )
        )}
                </strong>

                <small>
                    ${formatDate(
            transaction.date
        )}
                </small>

            </div>


            <div class="transaction-amount ${isIncome
            ? "income"
            : "expense"
        }">

                ${isIncome
            ? "+"
            : "−"
        }${formatMoney(amount)}

            </div>

        </div>

    `;

}


function renderTransactions() {

    const lists = [

        document.getElementById(
            "transactionsList"
        ),

        document.getElementById(
            "financeTransactionsList"
        )

    ];


    if (!currentAccount) return;


    const transactions =
        [...currentAccount.transactions]
            .sort(
                (a, b) =>
                    new Date(b.date) -
                    new Date(a.date)
            );


    lists.forEach(list => {

        if (!list) return;


        if (!transactions.length) {

            list.innerHTML =
                `<div class="empty-state">
                    ${escapeHtml(
                    t("noTransactions")
                )}
                 </div>`;

            return;

        }


        list.innerHTML =
            transactions
                .slice(0, 15)
                .map(
                    renderTransactionHTML
                )
                .join("");

    });

}


function formatDate(date) {

    if (!date) return "";

    const d =
        new Date(date);

    return d.toLocaleDateString(
        language === "ru"
            ? "ru-RU"
            : language === "en"
                ? "en-US"
                : "uz-UZ"
    );

}


/* ================= EXPENSES ================= */

function getExpenseCategories() {

    return [

        "food",
        "utilities",
        "fuel",
        "transport",
        "travel",
        "recreation",
        "health",
        "dreams",
        "other"

    ];

}


function getCategoryData() {

    const categories =
        getExpenseCategories();


    const values =
        categories.map(
            category =>
                currentAccount?.expenses
                    .filter(
                        expense =>
                            expense.category === category
                    )
                    .reduce(
                        (sum, expense) =>
                            sum +
                            Number(
                                expense.amount || 0
                            ),
                        0
                    ) || 0
        );


    return {

        categories,

        values

    };

}


function renderExpenses() {

    if (!currentAccount) return;


    const data =
        getCategoryData();


    data.categories.forEach(
        (category, index) => {

            const element =
                document.getElementById(
                    `cat-${category}`
                );

            if (element) {

                element.textContent =
                    formatMoney(
                        data.values[index]
                    );

            }

        }
    );


    const history =
        document.getElementById(
            "expenseHistoryList"
        );


    if (!history) return;


    let expenses =
        [...currentAccount.expenses]
            .sort(
                (a, b) =>
                    new Date(b.date) -
                    new Date(a.date)
            );


    if (expenseFilter) {

        expenses =
            expenses.filter(
                expense =>
                    expense.category ===
                    expenseFilter
            );

    }


    if (!expenses.length) {

        history.innerHTML =
            `<div class="empty-state">
                ${escapeHtml(
                t("noExpenses")
            )}
             </div>`;

    } else {

        history.innerHTML =
            expenses
                .map(
                    renderTransactionHTML
                )
                .join("");

    }


    updateCharts();

}


/* ================= CHARTS ================= */

const doughnutPercentagePlugin = {

    id: "doughnutPercentage",

    afterDatasetsDraw(chart) {

        if (
            !chart.config.type ||
            chart.config.type !== "doughnut"
        ) return;


        const dataset =
            chart.data.datasets[0];


        if (!dataset) return;


        const total =
            dataset.data.reduce(
                (sum, value) =>
                    sum +
                    Number(value || 0),
                0
            );


        if (!total) return;


        const meta =
            chart.getDatasetMeta(0);


        const ctx =
            chart.ctx;


        ctx.save();


        meta.data.forEach(
            (arc, index) => {

                const value =
                    Number(
                        dataset.data[index] || 0
                    );


                if (!value) return;


                const percent =
                    value /
                    total *
                    100;


                /*
                    Juda kichik bo'laklarga
                    yozuv sig'masligi uchun
                    foizni ichkariga yozmaymiz.
                */

                if (percent < 4)
                    return;


                const angle =
                    (
                        arc.startAngle +
                        arc.endAngle
                    ) / 2;


                const radius =
                    (
                        arc.innerRadius +
                        arc.outerRadius
                    ) / 2;


                const x =
                    arc.x +
                    Math.cos(angle) *
                    radius;


                const y =
                    arc.y +
                    Math.sin(angle) *
                    radius;


                ctx.fillStyle =
                    "#ffffff";


                ctx.font =
                    "700 12px Arial";


                ctx.textAlign =
                    "center";


                ctx.textBaseline =
                    "middle";


                ctx.fillText(
                    `${percent.toFixed(0)}%`,
                    x,
                    y
                );

            }
        );


        ctx.restore();

    }

};


if (
    typeof Chart !== "undefined"
) {

    Chart.register(
        doughnutPercentagePlugin
    );

}


function getChartTextColor() {

    return document.body.classList.contains(
        "dark"
    )
        ? "#eefaf3"
        : "#15251d";

}


function getChartMutedColor() {

    return document.body.classList.contains(
        "dark"
    )
        ? "#91a79c"
        : "#718078";

}


function doughnutOptions() {

    return {

        responsive: true,

        maintainAspectRatio: false,

        cutout: "62%",

        plugins: {

            legend: {

                position: "bottom",

                labels: {

                    color:
                        getChartTextColor(),

                    padding: 15,

                    usePointStyle: true

                }

            },

            tooltip: {

                callbacks: {

                    label: function (context) {

                        const value =
                            Number(
                                context.raw || 0
                            );


                        const total =
                            context.dataset.data
                                .reduce(
                                    (
                                        sum,
                                        item
                                    ) =>
                                        sum +
                                        Number(
                                            item || 0
                                        ),
                                    0
                                );


                        const percent =
                            total > 0
                                ? value /
                                total *
                                100
                                : 0;


                        return `${context.label}: ${formatMoney(value)} (${percent.toFixed(1)}%)`;

                    }

                }

            }

        }

    };

}


function destroyChart(name) {

    if (charts[name]) {

        charts[name].destroy();

        delete charts[name];

    }

}


function updateCharts() {

    if (
        typeof Chart === "undefined" ||
        !currentAccount
    ) return;


    const textColor =
        getChartTextColor();

    const mutedColor =
        getChartMutedColor();


    /* ---------- HOME LINE ---------- */

    const homeCanvas =
        document.getElementById(
            "homeChart"
        );


    if (homeCanvas) {

        destroyChart("homeChart");


        const transactions =
            [...currentAccount.transactions]
                .sort(
                    (a, b) =>
                        new Date(a.date) -
                        new Date(b.date)
                );


        let runningBalance = 0;


        const labels =
            transactions.map(
                item =>
                    formatDate(item.date)
            );


        const values =
            transactions.map(
                item => {

                    if (
                        item.type ===
                        "income"
                    ) {

                        runningBalance +=
                            Number(
                                item.amount || 0
                            );

                    } else {

                        runningBalance -=
                            Number(
                                item.amount || 0
                            );

                    }

                    return runningBalance;

                }
            );


        charts.homeChart =
            new Chart(
                homeCanvas,
                {

                    type: "line",

                    data: {

                        labels:
                            labels.length
                                ? labels
                                : ["-"],

                        datasets: [{

                            label:
                                t("balance"),

                            data:
                                values.length
                                    ? values
                                    : [0],

                            tension: .35,

                            fill: true,

                            borderColor:
                                "#19a463",

                            backgroundColor:
                                "rgba(25,164,99,.10)",

                            pointRadius: 3

                        }]

                    },

                    options: {

                        responsive: true,

                        maintainAspectRatio: false,

                        plugins: {

                            legend: {
                                display: false
                            }

                        },

                        scales: {

                            x: {

                                ticks: {
                                    color:
                                        mutedColor
                                },

                                grid: {
                                    display: false
                                }

                            },

                            y: {

                                ticks: {
                                    color:
                                        mutedColor
                                }

                            }

                        }

                    }

                }
            );

    }


    /* ---------- ANALYSIS BAR ---------- */

    const analysisCanvas =
        document.getElementById(
            "analysisChart"
        );


    if (analysisCanvas) {

        destroyChart("analysisChart");


        charts.analysisChart =
            new Chart(
                analysisCanvas,
                {

                    type: "bar",

                    data: {

                        labels: [
                            t("income"),
                            t("expenses"),
                            t("balance")
                        ],

                        datasets: [{

                            data: [

                                Number(
                                    currentAccount.income || 0
                                ),

                                totalExpenses(),

                                getBalance()

                            ],

                            backgroundColor: [

                                "#19a463",
                                "#e45454",
                                "#4d8df7"

                            ],

                            borderRadius: 10

                        }]

                    },

                    options: {

                        responsive: true,

                        maintainAspectRatio: false,

                        plugins: {

                            legend: {
                                display: false
                            }

                        },

                        scales: {

                            x: {

                                ticks: {
                                    color:
                                        mutedColor
                                },

                                grid: {
                                    display: false
                                }

                            },

                            y: {

                                ticks: {
                                    color:
                                        mutedColor
                                }

                            }

                        }

                    }

                }
            );

    }


    /* ---------- EXPENSE DOUGHNUT ---------- */

    const expenseCanvas =
        document.getElementById(
            "expenseChart"
        );


    const categoryData =
        getCategoryData();


    if (expenseCanvas) {

        destroyChart("expenseChart");


        charts.expenseChart =
            new Chart(
                expenseCanvas,
                {

                    type: "doughnut",

                    data: {

                        labels:
                            categoryData.categories.map(
                                category =>
                                    t(category)
                            ),

                        datasets: [{

                            data:
                                categoryData.values,

                            backgroundColor: [

                                "#19a463",
                                "#4d8df7",
                                "#f4b942",
                                "#e45454",
                                "#8b6cf6",
                                "#f48fb1",
                                "#26a69a",
                                "#9c6ade",
                                "#78909c"

                            ],

                            borderWidth: 3,

                            borderColor:
                                document.body.classList.contains(
                                    "dark"
                                )
                                    ? "#102019"
                                    : "#ffffff"

                        }]

                    },

                    options:
                        doughnutOptions()

                }
            );

    }


    /* ---------- ANALYSIS DOUGHNUT ---------- */

    const analysisExpenseCanvas =
        document.getElementById(
            "analysisExpenseChart"
        );


    if (analysisExpenseCanvas) {

        destroyChart(
            "analysisExpenseChart"
        );


        charts.analysisExpenseChart =
            new Chart(
                analysisExpenseCanvas,
                {

                    type: "doughnut",

                    data: {

                        labels:
                            categoryData.categories.map(
                                category =>
                                    t(category)
                            ),

                        datasets: [{

                            data:
                                categoryData.values,

                            backgroundColor: [

                                "#19a463",
                                "#4d8df7",
                                "#f4b942",
                                "#e45454",
                                "#8b6cf6",
                                "#f48fb1",
                                "#26a69a",
                                "#9c6ade",
                                "#78909c"

                            ],

                            borderWidth: 3,

                            borderColor:
                                document.body.classList.contains(
                                    "dark"
                                )
                                    ? "#102019"
                                    : "#ffffff"

                        }]

                    },

                    options:
                        doughnutOptions()

                }
            );

    }

}


/* ================= MODALS ================= */

document.querySelectorAll(
    "[data-close]"
).forEach(button => {

    button.addEventListener(
        "click",
        () => {

            closeModal(
                button.dataset.close
            );

        }
    );

});


document.querySelectorAll(
    ".modal-overlay"
).forEach(overlay => {

    overlay.addEventListener(
        "click",
        event => {

            if (
                event.target === overlay
            ) {

                closeModal(
                    overlay.id
                );

            }

        }
    );

});


function closeModal(id) {

    document.getElementById(id)
        ?.classList.remove("active");

}


/* ================= TOAST ================= */

let toastTimeout;


function showToast(message) {

    const toast =
        document.getElementById("toast");


    if (!toast) return;


    toast.textContent =
        message;


    toast.classList.add(
        "show"
    );


    clearTimeout(
        toastTimeout
    );


    toastTimeout =
        setTimeout(
            () => {

                toast.classList.remove(
                    "show"
                );

            },
            2800
        );

}


/* ================= CALCULATOR ================= */

const calculatorExpressionElement =
    document.getElementById(
        "calculatorExpression"
    );

const calculatorResultElement =
    document.getElementById(
        "calculatorResult"
    );


function updateCalculatorDisplay() {

    if (calculatorExpressionElement) {

        calculatorExpressionElement.textContent =
            calculatorExpression || "0";

    }


    if (calculatorResultElement) {

        if (!calculatorExpression) {

            calculatorResultElement.textContent =
                "0";

            return;

        }


        try {

            const result =
                calculateExpression(
                    calculatorExpression
                );


            if (
                result !== null &&
                Number.isFinite(result)
            ) {

                calculatorResultElement.textContent =
                    formatCalculatorNumber(
                        result
                    );

            } else {

                calculatorResultElement.textContent =
                    "";

            }

        } catch {

            calculatorResultElement.textContent =
                "";

        }

    }

}


function formatCalculatorNumber(number) {

    if (
        !Number.isFinite(number)
    ) return "Error";


    const rounded =
        Math.round(
            number *
            100000000
        ) / 100000000;


    return String(
        rounded
    );

}


function calculateExpression(expression) {

    const safe =
        String(expression)
            .replace(/×/g, "*")
            .replace(/÷/g, "/")
            .replace(/−/g, "-");


    if (!/^[0-9+\-*/().\s]+$/.test(safe))
        return null;


    if (!safe.trim())
        return null;


    /*
        eval faqat kalkulyatorning
        o'zimiz yaratgan raqamli
        expression qiymati bilan ishlaydi.
    */

    const result =
        Function(
            `"use strict"; return (${safe})`
        )();


    return Number(result);

}


function calculatorPress(value) {

    if (value === "clear") {

        calculatorExpression = "";

        updateCalculatorDisplay();

        return;

    }


    if (value === "backspace") {

        calculatorExpression =
            calculatorExpression.slice(
                0,
                -1
            );

        updateCalculatorDisplay();

        return;

    }


    if (value === "=") {

        const result =
            calculateExpression(
                calculatorExpression
            );


        if (
            result === null ||
            !Number.isFinite(result)
        ) {

            calculatorResultElement.textContent =
                "Error";

            return;

        }


        calculatorExpression =
            formatCalculatorNumber(
                result
            );

        updateCalculatorDisplay();

        return;

    }


    if (
        ["+", "-", "*", "/"].includes(value)
    ) {

        const last =
            calculatorExpression.slice(-1);


        if (
            ["+", "-", "*", "/"].includes(last)
        ) {

            calculatorExpression =
                calculatorExpression.slice(
                    0,
                    -1
                );

        }

    }


    calculatorExpression +=
        value;


    updateCalculatorDisplay();

}


document.querySelectorAll(
    "[data-calc]"
).forEach(button => {

    button.addEventListener(
        "click",
        () => {

            calculatorPress(
                button.dataset.calc
            );

        }
    );

});


document.addEventListener(
    "keydown",
    event => {

        const section =
            document.getElementById(
                "calculator"
            );


        if (
            !section ||
            !section.classList.contains(
                "active-section"
            )
        ) return;


        if (
            /^[0-9.]$/.test(
                event.key
            )
        ) {

            calculatorPress(
                event.key
            );

            return;

        }


        if (
            ["+", "-", "*", "/"].includes(
                event.key
            )
        ) {

            calculatorPress(
                event.key
            );

            return;

        }


        if (
            event.key === "Enter" ||
            event.key === "="
        ) {

            calculatorPress("=");

            return;

        }


        if (event.key === "Backspace") {

            calculatorPress("backspace");

            return;

        }


        if (event.key === "Escape") {

            calculatorPress("clear");

        }

    }
);


/* ================= ESCAPE ================= */

document.addEventListener(
    "keydown",
    event => {

        if (event.key !== "Escape")
            return;


        document.querySelectorAll(
            ".modal-overlay.active"
        ).forEach(
            modal =>
                closeModal(modal.id)
        );

    }
);


/* ================= HTML SAFETY ================= */

function escapeHtml(value) {

    return String(value ?? "")
        .replace(
            /&/g,
            "&amp;"
        )
        .replace(
            /</g,
            "&lt;"
        )
        .replace(
            />/g,
            "&gt;"
        )
        .replace(
            /"/g,
            "&quot;"
        )
        .replace(
            /'/g,
            "&#039;"
        );

}


function escapeAttribute(value) {

    return String(value ?? "")
        .replace(
            /\\/g,
            "\\\\"
        )
        .replace(
            /'/g,
            "\\'"
        );

}


/* ================= RENDER ALL ================= */

function renderAll() {

    if (!currentAccount)
        return;


    currentAccount =
        normalizeAccount(
            currentAccount
        );


    renderUser();

    renderMoney();

    renderTransactions();

    renderExpenses();

    renderDreams();

    renderChallenge();

    renderQuiz();

    applyLanguage();


    setTimeout(
        updateCharts,
        50
    );

}


/* ================= INIT ================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        loadTheme();

        applyLanguage();

        initAuth();

        renderQuiz();

        updateCalculatorDisplay();

        startHeroAnimation();

        renderAll();


        /*
            Challenge vaqtini
            har sekund tekshiradi.
        */

        challengeTimerInterval =
            setInterval(
                renderChallenge,
                1000
            );

    }
);
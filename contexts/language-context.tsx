"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

type Language = "ru" | "en"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

const translations: Record<Language, Record<string, string>> = {
  ru: {
    // Header
    "header.login": "Войти",
    "header.register": "Зарегистрироваться",
    "header.dashboard": "Панель управления",
    "header.ru": "Русский",
    "header.en": "English",

    // Hero Section
    "hero.badge": "Премиум VDS/VPS хостинг",
    "hero.title1": "Виртуальные серверы",
    "hero.title2": "нового поколения",
    "hero.subtitle": "Мощные VDS с мгновенным развертыванием, гибкой оплатой и профессиональной поддержкой 24/7",
    "hero.createServer": "Создать сервер",
    "hero.register": "Зарегистрироваться",
    "hero.uptime": "99.9% Аптайм",
    "hero.instantDeploy": "Мгновенное развертывание",
    "hero.ddosProtection": "DDoS защита",

    // Features
    "features.instantDeploy.title": "Мгновенное развертывание",
    "features.instantDeploy.desc": "Ваш сервер будет готов к работе через несколько секунд после оплаты",
    "features.ddosProtection.title": "Защита от DDoS",
    "features.ddosProtection.desc": "Встроенная защита от DDoS-атак на всех тарифных планах",
    "features.hourlyBilling.title": "Почасовая оплата",
    "features.hourlyBilling.desc": "Платите только за фактическое время использования сервера",
    "features.support247.title": "Поддержка 24/7",
    "features.support247.desc": "Наша команда всегда готова помочь вам в любое время",

    // Server Configurator
    "configurator.title": "Ваш новый Виртуальный сервер",
    "configurator.serverName": "Название",
    "configurator.serverNamePlaceholder": "Мой первый сервер",
    "configurator.billingType": "Тип оплаты",
    "configurator.selectPlan": "Выберите тариф",
    "configurator.showMore": "Показать еще",
    "configurator.showLess": "Показать меньше",
    "configurator.hour": "Час",
    "configurator.month": "Месяц",
    "configurator.3months": "3 месяца",
    "configurator.year": "Год",
    "configurator.popular": "Популярный",
    "configurator.create": "Создать",
    "configurator.enterName": "Пожалуйста, введите название сервера",
    "configurator.insufficientFunds": "Недостаточно средств на балансе",

    // Sidebar
    "sidebar.virtualServer": "Виртуальный сервер",
    "sidebar.myServices": "Мои услуги",
    "sidebar.support": "Поддержка",
    "sidebar.referrals": "Реферальная система",

    // Server Plan Card
    "plan.cores": "ядра",
    "plan.ram": "ОЗУ",
    "plan.storage": "Диск",
    "plan.popular": "Популярный",
    "plan.select": "Выбрать",
    "plan.perHour": "час",
    "plan.perMonth": "мес",
    "plan.per3Months": "мес",
    "plan.perYear": "год",
    "plan.cpu": "CPU",
    "plan.bandwidth": "Трафик",

    // Auth Pages
    "auth.backToHome": "Назад на главную",
    "auth.createAccount": "Создать аккаунт",
    "auth.joinToday": "Присоединяйтесь к VDS_HUB сегодня",
    "auth.welcome": "Добро пожаловать",
    "auth.loginSubtitle": "Войдите в свой аккаунт VDS_HUB",
    "auth.haveAccount": "Уже есть аккаунт?",
    "auth.noAccount": "Нет аккаунта?",
    "auth.login": "Войти",
    "auth.register": "Зарегистрироваться",

    // Register Form
    "register.fullName": "Полное имя",
    "register.email": "Email",
    "register.password": "Пароль",
    "register.confirmPassword": "Подтвердите пароль",
    "register.passwordMinLength": "Минимум 8 символов",
    "register.acceptTerms": "Я принимаю",
    "register.terms": "условия использования",
    "register.and": "и",
    "register.privacy": "политику конфиденциальности",
    "register.createButton": "Создать аккаунт",
    "register.creating": "Регистрация...",
    "register.passwordMismatch": "Пароли не совпадают",
    "register.acceptTermsError": "Необходимо принять условия использования",
    "register.passwordTooShort": "Пароль должен содержать минимум 8 символов",
    "register.error": "Ошибка регистрации",
    "register.required": "*",

    // Login Form
    "login.email": "Email",
    "login.password": "Пароль",
    "login.rememberMe": "Запомнить меня",
    "login.forgotPassword": "Забыли пароль?",
    "login.captcha": "Защита от ботов (Cloudflare Turnstile)",
    "login.loginButton": "Войти",
    "login.loggingIn": "Вход...",
    "login.error": "Ошибка входа",

    // Dashboard
    "dashboard.title": "Панель управления",
    "dashboard.welcome": "Добро пожаловать в VDS_HUB",
    "dashboard.topUp": "Пополнить",
    "dashboard.profile": "Профиль",
    "dashboard.billing": "Биллинг",
    "dashboard.referrals": "Реферальная система",
    "dashboard.adminPanel": "Админ панель",
    "dashboard.logout": "Выйти",

    // Stats Cards
    "stats.activeServers": "Активные серверы",
    "stats.balance": "Баланс",
    "stats.usage": "Использование",
    "stats.referralIncome": "Реферальный доход",
    "stats.perMonth": "за месяц",
    "stats.lastTopUp": "Последнее пополнение",
    "stats.avgLoad": "Средняя загрузка",
    "stats.perWeek": "за неделю",

    // Servers List
    "servers.myServers": "Мои серверы",
    "servers.createServer": "Создать сервер",
    "servers.running": "Работает",
    "servers.stopped": "Остановлен",
    "servers.plan": "План",
    "servers.location": "Локация",
    "servers.stop": "Остановить",
    "servers.start": "Запустить",
    "servers.manage": "Управление",
    "servers.noServers": "У вас пока нет серверов",
    "servers.createFirst": "Создайте свой первый сервер",
    "servers.title": "Мои серверы",
    "servers.subtitle": "Управление виртуальными серверами",
    "servers.createFirstDesc": "Создайте свой первый сервер, чтобы начать работу",
    "servers.serverName": "Название сервера",
    "servers.serverNamePlaceholder": "Например: Web Server",
    "servers.monthly": "Ежемесячно",
    "servers.quarterly": "Ежеквартально",
    "servers.yearly": "Ежегодно",
    "servers.selectPlan": "Выберите тариф",
    "servers.selectedPlan": "Выбранный тариф",
    "servers.total": "Итого",
    "servers.create": "Создать сервер",
    "servers.insufficientBalance": "Недостаточно средств на балансе. Пополните баланс.",
    "servers.createSuccess": "Сервер успешно создан!",
    "servers.createError": "Ошибка при создании сервера",
    "servers.expiresIn": "Истекает через",
    "servers.days": "дней",
    "servers.paid": "Оплачено",
    "servers.extend": "Продлить",
    "servers.successOrder": "Сервер успешно заказан!",
    "servers.delete": "Удалить",
    "servers.confirmDelete": "Вы уверены, что хотите удалить этот сервер?",
    "servers.extendInfo": "Функция продления будет доступна в ближайшее время",
    

    // 🆕 Server Buy Page (из скриншота)
    "servers.buyTitle": "Покупка сервера",
    "servers.choosePlan": "Выберите тарифный план",
    "servers.orderConfig": "Настройка заказа",
    "servers.nameLabel": "Название сервера",
    "servers.namePlaceholder": "Введите имя сервера",
    "servers.billing": "Тип оплаты",
    "servers.hourly": "Почасовая",
    "servers.monthlyBilling": "Ежемесячная",
    "servers.buyButton": "Купить сервер",

    // Common
    "common.cancel": "Отмена",
    "common.creating": "Создание...",
    "common.save": "Сохранить",
    "common.delete": "Удалить",
    "common.edit": "Редактировать",
    "common.back": "Назад",

    // Privacy Page
    "privacy.title": "Политика конфиденциальности",
    "privacy.backToHome": "Назад на главную",
    "privacy.intro": "На этой странице подробно описано, как мы собираем, храним и используем ваши персональные данные.",
    "privacy.item1.title": "Данные для регистрации и идентификации",
    "privacy.item1.details": "Используются для создания аккаунта, авторизации и обработки платежей.",
    "privacy.item2.title": "Технические данные",
    "privacy.item2.details": "Помогают анализировать работу сайта и предотвращать злоупотребления.",
    "privacy.item3.title": "Данные, которые вы храните на сервере",
    "privacy.item3.details": "Мы не просматриваем ваши данные, кроме случаев, предусмотренных законом.",
    "privacy.item4.title": "Передача данных третьим лицам",
    "privacy.item4.details": "Возможна только надежным партнерам и только при необходимости.",
    "privacy.item5.title": "Хранение и защита данных",
    "privacy.item5.details": "Используются современные технологии защиты и шифрования.",
    "privacy.item6.title": "Ваши права",
    "privacy.item6.details": "Вы можете запросить удаление, изменение или просмотр своих данных.",
    "privacy.page.underText": "Мы ценим вашу конфиденциальность и ответственно относимся к вашим данным.",
    "privacy.page.title": "Политика конфиденциальности",
    "privacy.page.backToHome": "Назад на главную",

    // Footer
    "footer.privacyPolicy": "Политика конфиденциальности",
  },

  // ================= English =================
  en: {
    "header.login": "Login",
    "header.register": "Register",
    "header.dashboard": "Dashboard",
    "header.ru": "Русский",
    "header.en": "English",

    "hero.badge": "Premium VDS/VPS Hosting",
    "hero.title1": "Virtual Servers",
    "hero.title2": "of the New Generation",
    "hero.subtitle": "Powerful VDS with instant deployment, flexible billing, and professional 24/7 support",
    "hero.createServer": "Create Server",
    "hero.register": "Register",
    "hero.uptime": "99.9% Uptime",
    "hero.instantDeploy": "Instant Deployment",
    "hero.ddosProtection": "DDoS Protection",

    "features.instantDeploy.title": "Instant Deployment",
    "features.instantDeploy.desc": "Your server will be ready in seconds after payment",
    "features.ddosProtection.title": "DDoS Protection",
    "features.ddosProtection.desc": "Built-in DDoS protection on all plans",
    "features.hourlyBilling.title": "Hourly Billing",
    "features.hourlyBilling.desc": "Pay only for actual server usage time",
    "features.support247.title": "24/7 Support",
    "features.support247.desc": "Our team is always ready to help you anytime",

    "configurator.title": "Your New Virtual Server",
    "configurator.serverName": "Name",
    "configurator.serverNamePlaceholder": "My First Server",
    "configurator.billingType": "Billing Type",
    "configurator.selectPlan": "Select Plan",
    "configurator.showMore": "Show More",
    "configurator.showLess": "Show Less",
    "configurator.hour": "Hour",
    "configurator.month": "Month",
    "configurator.3months": "3 Months",
    "configurator.year": "Year",
    "configurator.popular": "Popular",
    "configurator.create": "Create",
    "configurator.enterName": "Please enter server name",
    "configurator.insufficientFunds": "Insufficient funds",

    "sidebar.virtualServer": "Virtual Server",
    "sidebar.myServices": "My Services",
    "sidebar.support": "Support",
    "sidebar.referrals": "Referral System",

    "plan.cores": "cores",
    "plan.ram": "RAM",
    "plan.storage": "Storage",
    "plan.popular": "Popular",
    "plan.select": "Select",
    "plan.perHour": "hr",
    "plan.perMonth": "mo",
    "plan.per3Months": "mo",
    "plan.perYear": "yr",
    "plan.cpu": "CPU",
    "plan.bandwidth": "Bandwidth",

    "auth.backToHome": "Back to Home",
    "auth.createAccount": "Create Account",
    "auth.joinToday": "Join VDS_HUB today",
    "auth.welcome": "Welcome Back",
    "auth.loginSubtitle": "Sign in to your VDS_HUB account",
    "auth.haveAccount": "Already have an account?",
    "auth.noAccount": "Don't have an account?",
    "auth.login": "Sign In",
    "auth.register": "Sign Up",

    "register.fullName": "Full Name",
    "register.email": "Email",
    "register.password": "Password",
    "register.confirmPassword": "Confirm Password",
    "register.passwordMinLength": "Minimum 8 characters",
    "register.acceptTerms": "I accept the",
    "register.terms": "terms of service",
    "register.and": "and",
    "register.privacy": "privacy policy",
    "register.createButton": "Create Account",
    "register.creating": "Creating...",
    "register.passwordMismatch": "Passwords do not match",
    "register.acceptTermsError": "You must accept the terms of service",
    "register.passwordTooShort": "Password must be at least 8 characters",
    "register.error": "Registration error",
    "register.required": "*",

    "login.email": "Email",
    "login.password": "Password",
    "login.rememberMe": "Remember me",
    "login.forgotPassword": "Forgot password?",
    "login.captcha": "Bot Protection (Cloudflare Turnstile)",
    "login.loginButton": "Sign In",
    "login.loggingIn": "Signing in...",
    "login.error": "Login error",

    "dashboard.title": "Dashboard",
    "dashboard.welcome": "Welcome to VDS_HUB",
    "dashboard.topUp": "Top Up",
    "dashboard.profile": "Profile",
    "dashboard.billing": "Billing",
    "dashboard.referrals": "Referral System",
    "dashboard.adminPanel": "Admin Panel",
    "dashboard.logout": "Logout",

    "stats.activeServers": "Active Servers",
    "stats.balance": "Balance",
    "stats.usage": "Usage",
    "stats.referralIncome": "Referral Income",
    "stats.perMonth": "per month",
    "stats.lastTopUp": "Last top-up",
    "stats.avgLoad": "Average load",
    "stats.perWeek": "per week",

    "servers.myServers": "My Servers",
    "servers.createServer": "Create Server",
    "servers.running": "Running",
    "servers.stopped": "Stopped",
    "servers.plan": "Plan",
    "servers.location": "Location",
    "servers.stop": "Stop",
    "servers.start": "Start",
    "servers.manage": "Manage",
    "servers.noServers": "You don't have any servers yet",
    "servers.createFirst": "Create your first server",
    "servers.title": "My Servers",
    "servers.subtitle": "Manage your virtual servers",
    "servers.createFirstDesc": "Create your first server to get started",
    "servers.serverName": "Server Name",
    "servers.serverNamePlaceholder": "e.g., Web Server",
    "servers.monthly": "Monthly",
    "servers.quarterly": "Quarterly",
    "servers.yearly": "Yearly",
    "servers.selectPlan": "Select Plan",
    "servers.selectedPlan": "Selected Plan",
    "servers.total": "Total",
    "servers.create": "Create Server",
    "servers.insufficientBalance": "Insufficient balance. Please top up your account.",
    "servers.createSuccess": "Server created successfully!",
    "servers.createError": "Error creating server",
    "servers.expiresIn": "Expires in",
    "servers.days": "days",
    "servers.paid": "Paid",
    "servers.extend": "Extend",
    "servers.delete": "Delete",
    "servers.confirmDelete": "Are you sure you want to delete this server?",
    "servers.extendInfo": "Extension feature will be available soon",

    // 🆕 Server Buy Page (from screenshot)
    "servers.buyTitle": "Buy Server",
    "servers.choosePlan": "Choose Plan",
    "servers.orderConfig": "Order Configuration",
    "servers.nameLabel": "Server Name",
    "servers.namePlaceholder": "Enter server name",
    "servers.billing": "Billing",
    "servers.hourly": "Hourly",
    "servers.monthlyBilling": "Monthly",
    "servers.buyButton": "Buy Server",

    "common.cancel": "Cancel",
    "common.creating": "Creating...",
    "common.save": "Save",
    "common.delete": "Delete",
    "common.edit": "Edit",
   
    "privacy.title": "Privacy Policy",
    "privacy.backToHome": "Back to Home",
    "privacy.intro": "This page details how we collect, store, and use your personal data on our service.",
    "privacy.item1.title": "Registration and identification data",
    "privacy.item1.details": "Used to create an account, authorize, and process payments.",
    "privacy.item2.title": "Technical data",
    "privacy.item2.details": "Helps analyze site performance and prevent abuse.",
    "privacy.item3.title": "Data stored on your server",
    "privacy.item3.details": "We never access your stored data unless required by law.",
    "privacy.item4.title": "Data sharing with third parties",
    "privacy.item4.details": "Only possible with trusted partners and only when necessary.",
    "privacy.item5.title": "Data storage and protection",
    "privacy.item5.details": "Modern protection and encryption technologies are used.",
    "privacy.item6.title": "Your rights",
    "privacy.item6.details": "You can request deletion, modification, or access to your data.",
    "privacy.page.underText": "We value your privacy and handle your data responsibly.",
    "privacy.page.title": "Privacy Policy",
    "privacy.page.backToHome": "Back to Home",

    // Footer
    "footer.privacyPolicy": "Privacy Policy",
  },
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("ru")

  useEffect(() => {
    const saved = localStorage.getItem("lang") as Language | null
    if (saved) setLanguage(saved)
  }, [])

  useEffect(() => {
    localStorage.setItem("lang", language)
  }, [language])

  const t = (key: string) => translations[language][key] || key

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider")
  return ctx
}

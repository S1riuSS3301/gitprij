(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["chunks/[root-of-the-server]__63703ddf._.js",
"[externals]/node:buffer [external] (node:buffer, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:buffer", () => require("node:buffer"));

module.exports = mod;
}),
"[externals]/node:async_hooks [external] (node:async_hooks, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:async_hooks", () => require("node:async_hooks"));

module.exports = mod;
}),
"[project]/messages/ru.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v({"navigation":{"home":"Главная","servers":"Серверы","dashboard":"Личный кабинет","admin":"Админка","login":"Войти","register":"Регистрация","logout":"Выйти","support":"Поддержка"},"home":{"title":"VDS HUB - Премиум хостинг виртуальных серверов","subtitle":"Профессиональный VDS/VPS хостинг с гибкими конфигурациями и конкурентными ценами","hero":{"badge":"Премиум хостинг","title1":"Надежный VDS","title2":"хостинг","subtitle":"Профессиональный VDS/VPS хостинг с гибкими конфигурациями и конкурентными ценами. Высокопроизводительные виртуальные серверы с мгновенной выдачей.","createServer":"Создать сервер","register":"Регистрация","uptime":"99.9% uptime","instantDeploy":"Мгновенная выдача","ddosProtection":"DDoS защита"},"get_started":"Начать","learn_more":"Узнать больше"},"auth":{"login_title":"Вход в аккаунт","register_title":"Регистрация","email":"Email","password":"Пароль","confirm_password":"Подтвердите пароль","login_button":"Войти","register_button":"Зарегистрироваться","forgot_password":"Забыли пароль?","no_account":"Нет аккаунта?","have_account":"Уже есть аккаунт?"},"dashboard":{"balance":"Баланс","servers":"Серверы","payments":"Платежи","referrals":"Рефералы"},"admin":{"totalRevenue":"Общий доход","newUsers":"Новые пользователи","orders":"Заказы","revenueChart":"График доходов","revenueByMonth":"Доход по месяцам","chartPlaceholder":"График будет реализован с использованием библиотеки для графиков (например, Recharts)"}});}),
"[project]/messages/en.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v({"navigation":{"home":"Home","servers":"Servers","dashboard":"Dashboard","admin":"Admin","login":"Login","register":"Register","logout":"Logout","support":"Support"},"home":{"title":"VDS HUB - Premium Virtual Server Hosting","subtitle":"Professional VDS/VPS hosting with flexible configurations and competitive pricing","hero":{"badge":"Premium Hosting","title1":"Reliable VDS","title2":"Hosting","subtitle":"Professional VDS/VPS hosting with flexible configurations and competitive pricing. High-performance virtual servers with instant deployment.","createServer":"Create Server","register":"Register","uptime":"99.9% uptime","instantDeploy":"Instant Deploy","ddosProtection":"DDoS Protection"},"get_started":"Get Started","learn_more":"Learn More"},"auth":{"login_title":"Sign In","register_title":"Sign Up","email":"Email","password":"Password","confirm_password":"Confirm Password","login_button":"Sign In","register_button":"Sign Up","forgot_password":"Forgot password?","no_account":"Don't have an account?","have_account":"Already have an account?"},"dashboard":{"balance":"Balance","servers":"Servers","payments":"Payments","referrals":"Referrals"},"admin":{"totalRevenue":"Total Revenue","newUsers":"New Users","orders":"Orders","revenueChart":"Revenue Chart","revenueByMonth":"Revenue by month","chartPlaceholder":"Chart will be implemented using a charting library (e.g., Recharts)"}});}),
"[project]/i18n.ts [middleware-edge] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$server$2f$react$2d$server$2f$getRequestConfig$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$export__default__as__getRequestConfig$3e$__ = __turbopack_context__.i("[project]/node_modules/next-intl/dist/esm/development/server/react-server/getRequestConfig.js [middleware-edge] (ecmascript) <export default as getRequestConfig>");
var __TURBOPACK__imported__module__$5b$project$5d2f$messages$2f$ru$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/messages/ru.json (json)");
var __TURBOPACK__imported__module__$5b$project$5d2f$messages$2f$en$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/messages/en.json (json)");
;
;
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$server$2f$react$2d$server$2f$getRequestConfig$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$export__default__as__getRequestConfig$3e$__["getRequestConfig"])(({ locale })=>({
        locale,
        messages: locale === 'ru' ? __TURBOPACK__imported__module__$5b$project$5d2f$messages$2f$ru$2e$json__$28$json$29$__["default"] : __TURBOPACK__imported__module__$5b$project$5d2f$messages$2f$en$2e$json__$28$json$29$__["default"]
    }));
}),
"[project]/middleware.ts [middleware-edge] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "config",
    ()=>config,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$middleware$2f$middleware$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-intl/dist/esm/development/middleware/middleware.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$i18n$2e$ts__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/i18n.ts [middleware-edge] (ecmascript)");
;
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$intl$2f$dist$2f$esm$2f$development$2f$middleware$2f$middleware$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["default"])({
    locales: [
        'en',
        'ru'
    ],
    defaultLocale: 'ru'
});
const config = {
    matcher: [
        '/((?!api|_next|_vercel|.*\\..*).*)'
    ]
};
}),
]);

//# sourceMappingURL=%5Broot-of-the-server%5D__63703ddf._.js.map
module.exports = [
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/@prisma/client [external] (@prisma/client, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("@prisma/client", () => require("@prisma/client"));

module.exports = mod;
}),
"[project]/Downloads/vds-hub/vds-hub/lib/prisma.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "prisma",
    ()=>prisma
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/@prisma/client [external] (@prisma/client, cjs)");
;
const prisma = global.prisma ?? new __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$29$__["PrismaClient"]();
if ("TURBOPACK compile-time truthy", 1) {
    global.prisma = prisma;
}
}),
"[project]/Downloads/vds-hub/vds-hub/lib/storage.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Local storage utilities for data persistence
__turbopack_context__.s([
    "KEYS",
    ()=>KEYS,
    "storage",
    ()=>storage
]);
const STORAGE_KEYS = {
    USER: "vds_hub_user",
    USERS: "vds_hub_users",
    SERVERS: "vds_hub_servers",
    TRANSACTIONS: "vds_hub_transactions",
    ACTIVITY_LOGS: "vds_hub_activity_logs",
    PROMO_CODES: "vds_hub_promo_codes",
    REFERRALS: "vds_hub_referrals",
    SUPPORT_TICKETS: "vds_hub_support_tickets"
};
const storage = {
    get: (key)=>{
        if ("TURBOPACK compile-time truthy", 1) return null;
        //TURBOPACK unreachable
        ;
        const item = undefined;
    },
    set: (key, value)=>{
        if ("TURBOPACK compile-time truthy", 1) return;
        //TURBOPACK unreachable
        ;
    },
    remove: (key)=>{
        if ("TURBOPACK compile-time truthy", 1) return;
        //TURBOPACK unreachable
        ;
    },
    clear: ()=>{
        if ("TURBOPACK compile-time truthy", 1) return;
        //TURBOPACK unreachable
        ;
    }
};
const KEYS = STORAGE_KEYS;
}),
"[project]/Downloads/vds-hub/vds-hub/lib/auth.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "auth",
    ()=>auth
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$lib$2f$storage$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/vds-hub/vds-hub/lib/storage.ts [app-route] (ecmascript)");
;
const auth = {
    login: (email, password)=>{
        const users = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$lib$2f$storage$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["storage"].get(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$lib$2f$storage$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["KEYS"].USERS) || [];
        const user = users.find((u)=>u.email === email);
        if (!user) return null;
        // Log activity
        logActivity(user.id, "login", "User logged in");
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$lib$2f$storage$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["storage"].set(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$lib$2f$storage$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["KEYS"].USER, user);
        return user;
    },
    register: (email, password, telegram, referralCode)=>{
        const users = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$lib$2f$storage$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["storage"].get(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$lib$2f$storage$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["KEYS"].USERS) || [];
        // Check if user exists
        if (users.find((u)=>u.email === email)) {
            return null;
        }
        // Generate referral code
        const userReferralCode = generateReferralCode();
        const newUser = {
            id: generateId(),
            email,
            role: "user",
            balance: 0,
            registeredAt: new Date().toISOString(),
            telegram,
            referralCode: userReferralCode,
            referredBy: referralCode,
            totalTopUps: 0
        };
        users.push(newUser);
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$lib$2f$storage$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["storage"].set(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$lib$2f$storage$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["KEYS"].USERS, users);
        // Handle referral
        if (referralCode) {
            const referrer = users.find((u)=>u.referralCode === referralCode);
            if (referrer) {
                const referrals = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$lib$2f$storage$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["storage"].get(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$lib$2f$storage$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["KEYS"].REFERRALS) || [];
                referrals.push({
                    id: generateId(),
                    referrerId: referrer.id,
                    referredId: newUser.id,
                    earnings: 0,
                    createdAt: new Date().toISOString()
                });
                __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$lib$2f$storage$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["storage"].set(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$lib$2f$storage$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["KEYS"].REFERRALS, referrals);
            }
        }
        // Log activity
        logActivity(newUser.id, "register", "User registered");
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$lib$2f$storage$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["storage"].set(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$lib$2f$storage$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["KEYS"].USER, newUser);
        return newUser;
    },
    logout: ()=>{
        const user = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$lib$2f$storage$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["storage"].get(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$lib$2f$storage$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["KEYS"].USER);
        if (user) {
            logActivity(user.id, "logout", "User logged out");
        }
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$lib$2f$storage$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["storage"].remove(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$lib$2f$storage$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["KEYS"].USER);
    },
    getCurrentUser: ()=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$lib$2f$storage$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["storage"].get(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$lib$2f$storage$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["KEYS"].USER);
    },
    updateUser: (updates)=>{
        const user = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$lib$2f$storage$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["storage"].get(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$lib$2f$storage$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["KEYS"].USER);
        if (!user) return;
        const updatedUser = {
            ...user,
            ...updates
        };
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$lib$2f$storage$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["storage"].set(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$lib$2f$storage$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["KEYS"].USER, updatedUser);
        // Update in users list
        const users = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$lib$2f$storage$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["storage"].get(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$lib$2f$storage$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["KEYS"].USERS) || [];
        const index = users.findIndex((u)=>u.id === user.id);
        if (index !== -1) {
            users[index] = updatedUser;
            __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$lib$2f$storage$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["storage"].set(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$lib$2f$storage$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["KEYS"].USERS, users);
        }
    }
};
function generateId() {
    return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}
function generateReferralCode() {
    return Math.random().toString(36).substr(2, 8).toUpperCase();
}
function logActivity(userId, action, details) {
    const logs = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$lib$2f$storage$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["storage"].get(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$lib$2f$storage$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["KEYS"].ACTIVITY_LOGS) || [];
    logs.push({
        id: generateId(),
        userId,
        action,
        ip: "127.0.0.1",
        timestamp: new Date().toISOString(),
        details
    });
    __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$lib$2f$storage$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["storage"].set(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$lib$2f$storage$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["KEYS"].ACTIVITY_LOGS, logs);
}
}),
"[project]/Downloads/vds-hub/vds-hub/app/api/transactions/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GET",
    ()=>GET
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/vds-hub/vds-hub/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/vds-hub/vds-hub/lib/prisma.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$lib$2f$auth$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/vds-hub/vds-hub/lib/auth.ts [app-route] (ecmascript)"); // Assuming you have auth to get userId
;
;
;
async function GET() {
    try {
        const user = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$lib$2f$auth$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getCurrentUser"])();
        if (!user) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: 'Unauthorized'
            }, {
                status: 401
            });
        }
        const transactions = await __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].transaction.findMany({
            where: {
                userId: user.id
            },
            orderBy: {
                createdAt: 'desc'
            },
            take: 50
        });
        return __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json(transactions);
    } catch (err) {
        console.error('Transactions Error:', err);
        return __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: err.message
        }, {
            status: 500
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__c8f421dd._.js.map
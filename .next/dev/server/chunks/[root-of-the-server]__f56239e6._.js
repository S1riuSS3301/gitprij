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
"[project]/lib/prisma.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/app/api/crystalpay/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/prisma.ts [app-route] (ecmascript)");
;
;
async function POST(request) {
    try {
        const body = await request.json();
        // 🔥 ДВОЙНАЯ ЛОГИКА: CHECK or CREATE
        if (body.id) {
            return handleStatusCheck(body.id);
        }
        // CREATE (старый код + улучшения)
        return handleCreateInvoice(body);
    } catch (err) {
        console.error('🚫 Error:', err);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: false,
            error: err.message
        }, {
            status: 500
        });
    }
}
// 🔥 1. CHECK STATUS (после редиректа ?tx=1)
async function handleStatusCheck(id) {
    const auth_login = process.env.AUTH_LOGIN;
    const auth_secret = process.env.AUTH_SECRET;
    if (!auth_login || !auth_secret) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: false,
            error: '❌ Credentials'
        }, {
            status: 500
        });
    }
    // 📡 API STATUS
    const res = await fetch('https://api.crystalpay.io/v3/invoice/status/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            auth_login,
            auth_secret,
            id
        })
    });
    const data = await res.json();
    if (!res.ok || data.error) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: false,
            error: data.errors?.[0] || data.error || 'API Error'
        }, {
            status: 400
        });
    }
    // 👤 PARSE userId из extra
    const userIdMatch = data.extra?.match(/userId:([a-zA-Z0-9_-]+)/);
    const userId = userIdMatch?.[1];
    if (!userId) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: false,
            error: '❌ userId не найден в extra'
        }, {
            status: 400
        });
    }
    const isPaid = data.state === 'payed';
    // 💰 AUTO-CREDIT если paid + pending
    if (isPaid) {
        await autoCredit(userId, String(id), Number(data.amount), data.currency);
    }
    // 🎉 RESPONSE
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
        success: true,
        paid: isPaid,
        status: data.state,
        amount: data.amount,
        userId,
        message: isPaid ? '✅ ОПЛАЧЕНО & ПОПОЛНЕНО!' : '⏳ Ожидаем...'
    });
}
// 🔥 2. AUTO-CREDIT (idempotent)
async function autoCredit(userId, externalId, amount, currency) {
    await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].$transaction(async (tx)=>{
        // Transaction exists? Update
        const transaction = await tx.transaction.updateMany({
            where: {
                externalId,
                method: 'crystalpay',
                status: 'pending'
            },
            data: {
                status: 'completed',
                completedAt: new Date()
            }
        });
        if (transaction.count === 0) {
            return;
        }
        // 💵 +BALANCE
        await tx.profile.update({
            where: {
                userId
            },
            data: {
                balance: {
                    increment: amount
                }
            }
        });
        // Реферальный бонус (10%)
        const user = await tx.user.findUnique({
            where: {
                id: userId
            },
            select: {
                referredBy: true
            }
        });
        if (user?.referredBy) {
            const referralBonus = amount * 0.1;
            await tx.profile.update({
                where: {
                    userId: user.referredBy
                },
                data: {
                    balance: {
                        increment: referralBonus
                    }
                }
            });
            await tx.referral.updateMany({
                where: {
                    referrerId: user.referredBy,
                    referredId: userId
                },
                data: {
                    earnings: {
                        increment: referralBonus
                    }
                }
            });
            await tx.transaction.create({
                data: {
                    userId: user.referredBy,
                    amount: referralBonus,
                    currency: 'USD',
                    method: 'referral',
                    status: 'completed',
                    description: `Реферальный бонус 10% от пополнения пользователя`,
                    type: 'referral',
                    completedAt: new Date()
                }
            });
        }
    });
}
// 🔥 3. CREATE INVOICE (твой код + lifetime/body)
async function handleCreateInvoice(body) {
    const { amount, description, userId, currency = "USD", lifetime = 60 } = body;
    // VALIDATION
    if (!userId || !amount || amount < 10) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: false,
            error: '❌ userId + ≥$10'
        }, {
            status: 400
        });
    }
    const auth_login = process.env.AUTH_LOGIN;
    const auth_secret = process.env.AUTH_SECRET;
    let redirect_url = process.env.REDIRECT_URL || "localhost:3000/dashboard/billing";
    if (!redirect_url.startsWith("http")) redirect_url = `https://${redirect_url.replace(/^\/+/, "")}`;
    // Добавляем параметры для возврата с платежной системы
    redirect_url += `?tx=${Date.now()}`;
    // Используем JSON формат для extra (более надежный)
    const payload = {
        auth_login,
        auth_secret,
        amount: Number(amount.toFixed(2)),
        lifetime,
        type: "topup",
        currency: currency,
        description: description || "Пополнение баланса",
        extra: JSON.stringify({
            userId
        }),
        redirect_url
    };
    const res = await fetch("https://api.crystalpay.io/v3/invoice/create/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
    });
    const data = await res.json();
    if (!res.ok || data.error) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: false,
            error: data.errors?.join(', ') || data.error || 'API Error'
        }, {
            status: 400
        });
    }
    // 🗄️ TRANSACTION
    await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"].transaction.create({
        data: {
            userId,
            amount: Number(data.amount),
            currency: data.currency ?? "USD",
            method: 'crystalpay',
            status: 'pending',
            externalId: String(data.id)
        }
    });
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
        success: true,
        url: data.url,
        id: data.id,
        message: '✅ Готово! Переходим...'
    });
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__f56239e6._.js.map
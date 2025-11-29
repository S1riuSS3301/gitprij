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
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[project]/Downloads/vds-hub/vds-hub/public/vds-hub/_next/lib/jwt.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "signToken",
    ()=>signToken,
    "verifyToken",
    ()=>verifyToken
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$public$2f$vds$2d$hub$2f$_next$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$jwt$2f$sign$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/vds-hub/vds-hub/public/vds-hub/_next/node_modules/jose/dist/webapi/jwt/sign.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$public$2f$vds$2d$hub$2f$_next$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$jwt$2f$verify$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/vds-hub/vds-hub/public/vds-hub/_next/node_modules/jose/dist/webapi/jwt/verify.js [app-route] (ecmascript)");
;
const JWT_SECRET = new TextEncoder().encode(process.env.JWT_SECRET || "your-secret-key-change-in-production");
const JWT_EXPIRES_IN = "7d";
async function signToken(payload) {
    return await new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$public$2f$vds$2d$hub$2f$_next$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$jwt$2f$sign$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["SignJWT"](payload).setProtectedHeader({
        alg: "HS256"
    }).setIssuedAt().setExpirationTime(JWT_EXPIRES_IN).sign(JWT_SECRET);
}
async function verifyToken(token) {
    try {
        const { payload } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$public$2f$vds$2d$hub$2f$_next$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$jwt$2f$verify$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jwtVerify"])(token, JWT_SECRET);
        return payload;
    } catch (error) {
        return null;
    }
}
}),
"[externals]/@prisma/client [external] (@prisma/client, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("@prisma/client", () => require("@prisma/client"));

module.exports = mod;
}),
"[project]/Downloads/vds-hub/vds-hub/public/vds-hub/_next/lib/prisma.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/Downloads/vds-hub/vds-hub/public/vds-hub/_next/lib/db.ts [app-route] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$public$2f$vds$2d$hub$2f$_next$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/vds-hub/vds-hub/public/vds-hub/_next/lib/prisma.ts [app-route] (ecmascript)");
;
}),
"[project]/Downloads/vds-hub/vds-hub/public/vds-hub/_next/lib/prisma.ts [app-route] (ecmascript) <export prisma as db>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "db",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$public$2f$vds$2d$hub$2f$_next$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["prisma"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$public$2f$vds$2d$hub$2f$_next$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/vds-hub/vds-hub/public/vds-hub/_next/lib/prisma.ts [app-route] (ecmascript)");
}),
"[project]/Downloads/vds-hub/vds-hub/public/vds-hub/_next/lib/auth-utils.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "clearAuthCookie",
    ()=>clearAuthCookie,
    "comparePassword",
    ()=>comparePassword,
    "getAuthUser",
    ()=>getAuthUser,
    "getUser",
    ()=>getUser,
    "hashPassword",
    ()=>hashPassword,
    "setAuthCookie",
    ()=>setAuthCookie
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$public$2f$vds$2d$hub$2f$_next$2f$node_modules$2f$bcryptjs$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/vds-hub/vds-hub/public/vds-hub/_next/node_modules/bcryptjs/index.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$public$2f$vds$2d$hub$2f$_next$2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/vds-hub/vds-hub/public/vds-hub/_next/node_modules/next/headers.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$public$2f$vds$2d$hub$2f$_next$2f$lib$2f$jwt$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/vds-hub/vds-hub/public/vds-hub/_next/lib/jwt.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$public$2f$vds$2d$hub$2f$_next$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/vds-hub/vds-hub/public/vds-hub/_next/lib/db.ts [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$public$2f$vds$2d$hub$2f$_next$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__prisma__as__db$3e$__ = __turbopack_context__.i("[project]/Downloads/vds-hub/vds-hub/public/vds-hub/_next/lib/prisma.ts [app-route] (ecmascript) <export prisma as db>");
;
;
;
;
const SALT_ROUNDS = 10;
async function hashPassword(password) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$public$2f$vds$2d$hub$2f$_next$2f$node_modules$2f$bcryptjs$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].hash(password, SALT_ROUNDS);
}
async function comparePassword(password, hash) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$public$2f$vds$2d$hub$2f$_next$2f$node_modules$2f$bcryptjs$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].compare(password, hash);
}
async function getAuthUser() {
    const cookieStore = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$public$2f$vds$2d$hub$2f$_next$2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cookies"])();
    const token = cookieStore.get("auth-token")?.value;
    if (!token) return null;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$public$2f$vds$2d$hub$2f$_next$2f$lib$2f$jwt$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["verifyToken"])(token);
}
async function getUser() {
    const authUser = await getAuthUser();
    if (!authUser) return null;
    const user = await __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$public$2f$vds$2d$hub$2f$_next$2f$lib$2f$prisma$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__prisma__as__db$3e$__["db"].user.findUnique({
        where: {
            id: authUser.userId
        },
        include: {
            profile: true
        }
    });
    return user;
}
async function setAuthCookie(token) {
    const cookieStore = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$public$2f$vds$2d$hub$2f$_next$2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cookies"])();
    cookieStore.set("auth-token", token, {
        httpOnly: true,
        secure: ("TURBOPACK compile-time value", "development") === "production",
        sameSite: "lax",
        maxAge: 60 * 60 * 24 * 7,
        path: "/"
    });
}
async function clearAuthCookie() {
    const cookieStore = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$public$2f$vds$2d$hub$2f$_next$2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cookies"])();
    cookieStore.delete("auth-token");
}
}),
"[project]/Downloads/vds-hub/vds-hub/public/vds-hub/_next/app/api/user/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GET",
    ()=>GET
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$public$2f$vds$2d$hub$2f$_next$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/vds-hub/vds-hub/public/vds-hub/_next/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$public$2f$vds$2d$hub$2f$_next$2f$lib$2f$auth$2d$utils$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/vds-hub/vds-hub/public/vds-hub/_next/lib/auth-utils.ts [app-route] (ecmascript)");
;
;
async function GET() {
    try {
        const user = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$public$2f$vds$2d$hub$2f$_next$2f$lib$2f$auth$2d$utils$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getUser"])();
        if (user) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$public$2f$vds$2d$hub$2f$_next$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                id: user.id,
                email: user.email,
                name: user.name ?? undefined,
                role: user.role
            });
        }
        // Fallback: если пользователь в БД не найден, но токен валиден — вернуть данные из токена
        const payload = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$public$2f$vds$2d$hub$2f$_next$2f$lib$2f$auth$2d$utils$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getAuthUser"])();
        if (payload) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$public$2f$vds$2d$hub$2f$_next$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                id: payload.userId,
                email: payload.email,
                role: payload.role
            });
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$public$2f$vds$2d$hub$2f$_next$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: "Unauthorized"
        }, {
            status: 401
        });
    } catch (error) {
        console.error("Error fetching user:", error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$public$2f$vds$2d$hub$2f$_next$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: "Internal server error"
        }, {
            status: 500
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__5dc062d9._.js.map
module.exports = [
"[externals]/@prisma/client [external] (@prisma/client, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("@prisma/client", () => require("@prisma/client"));

module.exports = mod;
}),
"[project]/Downloads/vds-hub/vds-hub/lib/prisma.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/Downloads/vds-hub/vds-hub/lib/db.ts [app-rsc] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/vds-hub/vds-hub/lib/prisma.ts [app-rsc] (ecmascript)");
;
}),
"[project]/Downloads/vds-hub/vds-hub/lib/prisma.ts [app-rsc] (ecmascript) <export prisma as db>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "db",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/vds-hub/vds-hub/lib/prisma.ts [app-rsc] (ecmascript)");
}),
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[project]/Downloads/vds-hub/vds-hub/lib/jwt.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "signToken",
    ()=>signToken,
    "verifyToken",
    ()=>verifyToken
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$jwt$2f$sign$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/vds-hub/vds-hub/node_modules/jose/dist/webapi/jwt/sign.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$jwt$2f$verify$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/vds-hub/vds-hub/node_modules/jose/dist/webapi/jwt/verify.js [app-rsc] (ecmascript)");
;
const JWT_SECRET = new TextEncoder().encode(process.env.JWT_SECRET || "your-secret-key-change-in-production");
const JWT_EXPIRES_IN = "7d";
async function signToken(payload) {
    return await new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$jwt$2f$sign$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SignJWT"](payload).setProtectedHeader({
        alg: "HS256"
    }).setIssuedAt().setExpirationTime(JWT_EXPIRES_IN).sign(JWT_SECRET);
}
async function verifyToken(token) {
    try {
        const { payload } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$jwt$2f$verify$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jwtVerify"])(token, JWT_SECRET);
        return payload;
    } catch (error) {
        return null;
    }
}
}),
"[project]/Downloads/vds-hub/vds-hub/lib/auth-utils.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$node_modules$2f$bcryptjs$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/vds-hub/vds-hub/node_modules/bcryptjs/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/vds-hub/vds-hub/node_modules/next/headers.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$lib$2f$jwt$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/vds-hub/vds-hub/lib/jwt.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/vds-hub/vds-hub/lib/db.ts [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__prisma__as__db$3e$__ = __turbopack_context__.i("[project]/Downloads/vds-hub/vds-hub/lib/prisma.ts [app-rsc] (ecmascript) <export prisma as db>");
;
;
;
;
const SALT_ROUNDS = 10;
async function hashPassword(password) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$node_modules$2f$bcryptjs$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].hash(password, SALT_ROUNDS);
}
async function comparePassword(password, hash) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$node_modules$2f$bcryptjs$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].compare(password, hash);
}
async function getAuthUser() {
    const cookieStore = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cookies"])();
    const token = cookieStore.get("auth-token")?.value;
    if (!token) return null;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$lib$2f$jwt$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["verifyToken"])(token);
}
async function getUser() {
    const authUser = await getAuthUser();
    if (!authUser) return null;
    const user = await __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__prisma__as__db$3e$__["db"].user.findUnique({
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
    const cookieStore = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cookies"])();
    cookieStore.set("auth-token", token, {
        httpOnly: true,
        secure: ("TURBOPACK compile-time value", "development") === "production",
        sameSite: "lax",
        maxAge: 60 * 60 * 24 * 7,
        path: "/"
    });
}
async function clearAuthCookie() {
    const cookieStore = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cookies"])();
    cookieStore.delete("auth-token");
}
}),
"[project]/Downloads/vds-hub/vds-hub/lib/actions/auth.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"002ca81bd5d5855f450fbaba7e9d1719322f9710a5":"getUser","003d3d5d091f35b6ba99b84978e649b8c4fb8e2899":"signOut","006de16e4e8bbd9c0694ceaf77e09a0e67621fca11":"getUserProfile","60329d4b2588ebcfa01b27bc1c0a8771f083e66998":"signIn","70e9d172b7b5e09121794a0b3624c2d1c3682f4041":"signUp"},"",""] */ __turbopack_context__.s([
    "getUser",
    ()=>getUser,
    "getUserProfile",
    ()=>getUserProfile,
    "signIn",
    ()=>signIn,
    "signOut",
    ()=>signOut,
    "signUp",
    ()=>signUp
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/vds-hub/vds-hub/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/vds-hub/vds-hub/lib/db.ts [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__prisma__as__db$3e$__ = __turbopack_context__.i("[project]/Downloads/vds-hub/vds-hub/lib/prisma.ts [app-rsc] (ecmascript) <export prisma as db>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$lib$2f$auth$2d$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/vds-hub/vds-hub/lib/auth-utils.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$lib$2f$jwt$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/vds-hub/vds-hub/lib/jwt.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/vds-hub/vds-hub/node_modules/next/cache.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Downloads/vds-hub/vds-hub/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/vds-hub/vds-hub/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/vds-hub/vds-hub/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
;
;
;
;
async function signIn(email, password) {
    try {
        const user = await __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__prisma__as__db$3e$__["db"].user.findUnique({
            where: {
                email
            },
            include: {
                profile: true
            }
        });
        if (!user) {
            return {
                error: "Неверный email или пароль"
            };
        }
        const isValid = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$lib$2f$auth$2d$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["comparePassword"])(password, user.password);
        if (!isValid) {
            return {
                error: "Неверный email или пароль"
            };
        }
        const token = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$lib$2f$jwt$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["signToken"])({
            userId: user.id,
            email: user.email,
            role: user.role
        });
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$lib$2f$auth$2d$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["setAuthCookie"])(token);
        return {
            success: true
        };
    } catch (error) {
        console.error("[v0] Sign in error:", error);
        return {
            error: "Ошибка входа"
        };
    }
}
async function signUp(email, password, name) {
    try {
        const existingUser = await __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__prisma__as__db$3e$__["db"].user.findUnique({
            where: {
                email
            }
        });
        if (existingUser) {
            return {
                error: "Пользователь с таким email уже существует"
            };
        }
        const hashedPassword = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$lib$2f$auth$2d$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["hashPassword"])(password);
        const user = await __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__prisma__as__db$3e$__["db"].user.create({
            data: {
                email,
                password: hashedPassword,
                name,
                profile: {
                    create: {
                        balance: 0
                    }
                }
            }
        });
        const token = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$lib$2f$jwt$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["signToken"])({
            userId: user.id,
            email: user.email,
            role: user.role
        });
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$lib$2f$auth$2d$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["setAuthCookie"])(token);
        return {
            success: true
        };
    } catch (error) {
        console.error("[v0] Sign up error:", error);
        return {
            error: "Ошибка регистрации"
        };
    }
}
async function signOut() {
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$lib$2f$auth$2d$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["clearAuthCookie"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/", "layout");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["redirect"])("/");
}
async function getUser() {
    const authUser = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$lib$2f$auth$2d$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getAuthUser"])();
    if (!authUser) return null;
    const user = await __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__prisma__as__db$3e$__["db"].user.findUnique({
        where: {
            id: authUser.userId
        },
        include: {
            profile: true
        }
    });
    return user;
}
async function getUserProfile() {
    const authUser = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$lib$2f$auth$2d$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getAuthUser"])();
    if (!authUser) return null;
    const profile = await __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__prisma__as__db$3e$__["db"].profile.findUnique({
        where: {
            userId: authUser.userId
        }
    });
    return profile;
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    signIn,
    signUp,
    signOut,
    getUser,
    getUserProfile
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(signIn, "60329d4b2588ebcfa01b27bc1c0a8771f083e66998", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(signUp, "70e9d172b7b5e09121794a0b3624c2d1c3682f4041", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(signOut, "003d3d5d091f35b6ba99b84978e649b8c4fb8e2899", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getUser, "002ca81bd5d5855f450fbaba7e9d1719322f9710a5", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getUserProfile, "006de16e4e8bbd9c0694ceaf77e09a0e67621fca11", null);
}),
"[project]/Downloads/vds-hub/vds-hub/.next-internal/server/app/dashboard/page/actions.js { ACTIONS_MODULE0 => \"[project]/Downloads/vds-hub/vds-hub/lib/actions/auth.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$lib$2f$actions$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/vds-hub/vds-hub/lib/actions/auth.ts [app-rsc] (ecmascript)");
;
;
;
}),
"[project]/Downloads/vds-hub/vds-hub/.next-internal/server/app/dashboard/page/actions.js { ACTIONS_MODULE0 => \"[project]/Downloads/vds-hub/vds-hub/lib/actions/auth.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "003d3d5d091f35b6ba99b84978e649b8c4fb8e2899",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$lib$2f$actions$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["signOut"],
    "60329d4b2588ebcfa01b27bc1c0a8771f083e66998",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$lib$2f$actions$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["signIn"],
    "70e9d172b7b5e09121794a0b3624c2d1c3682f4041",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$lib$2f$actions$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["signUp"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f2e$next$2d$internal$2f$server$2f$app$2f$dashboard$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$lib$2f$actions$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/Downloads/vds-hub/vds-hub/.next-internal/server/app/dashboard/page/actions.js { ACTIONS_MODULE0 => "[project]/Downloads/vds-hub/vds-hub/lib/actions/auth.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$lib$2f$actions$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/vds-hub/vds-hub/lib/actions/auth.ts [app-rsc] (ecmascript)");
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__f736b4d3._.js.map
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
"[project]/Downloads/vds-hub/vds-hub/lib/db.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "db",
    ()=>db
]);
class MockDB {
    getItem(key) {
        if ("TURBOPACK compile-time truthy", 1) {
            const g = globalThis;
            g.__mockdb = g.__mockdb || {};
            const data = g.__mockdb[key];
            return data ? data : [];
        }
        //TURBOPACK unreachable
        ;
        const data = undefined;
    }
    setItem(key, data) {
        if ("TURBOPACK compile-time truthy", 1) {
            const g = globalThis;
            g.__mockdb = g.__mockdb || {};
            g.__mockdb[key] = data;
            return;
        }
        //TURBOPACK unreachable
        ;
    }
    // Initialize with default data
    init() {
        if ("TURBOPACK compile-time truthy", 1) return;
        //TURBOPACK unreachable
        ;
        // Initialize server plans if not exists
        const plans = undefined;
        // Initialize users if not exists
        const users = undefined;
        // Initialize profiles if not exists
        const profiles = undefined;
        // Initialize orders if not exists
        const orders = undefined;
        // Initialize promo codes if not exists
        const promo = undefined;
        // Initialize notifications if not exists
        const notifs = undefined;
    }
    user = {
        findUnique: async ({ where, include })=>{
            const users = this.getItem("users");
            const user = users.find((u)=>where.id ? u.id === where.id : u.email === where.email);
            if (user && include?.profile) {
                const profiles = this.getItem("profiles");
                user.profile = profiles.find((p)=>p.userId === user.id);
            }
            return user || null;
        },
        create: async ({ data })=>{
            const users = this.getItem("users");
            const newUser = {
                id: Date.now().toString(),
                email: data.email,
                password: data.password,
                name: data.name || null,
                role: "user",
                createdAt: new Date()
            };
            users.push(newUser);
            this.setItem("users", users);
            if (data.profile) {
                const profiles = this.getItem("profiles");
                const newProfile = {
                    id: Date.now().toString(),
                    userId: newUser.id,
                    balance: data.profile.create.balance,
                    createdAt: new Date()
                };
                profiles.push(newProfile);
                this.setItem("profiles", profiles);
            }
            return newUser;
        },
        update: async ({ where, data })=>{
            const users = this.getItem("users");
            const idx = users.findIndex((u)=>u.id === where.id);
            if (idx === -1) return null;
            users[idx] = {
                ...users[idx],
                ...data
            };
            this.setItem("users", users);
            return users[idx];
        },
        delete: async ({ where })=>{
            const users = this.getItem("users");
            const filtered = users.filter((u)=>u.id !== where.id);
            this.setItem("users", filtered);
            return {
                id: where.id
            };
        },
        findMany: async ()=>{
            return this.getItem("users");
        }
    };
    promoCode = {
        findMany: async ()=>{
            return this.getItem("promoCodes");
        },
        create: async ({ data })=>{
            const list = this.getItem("promoCodes");
            const newItem = {
                id: Date.now().toString(),
                ...data,
                currentUses: 0,
                createdAt: new Date()
            };
            list.push(newItem);
            this.setItem("promoCodes", list);
            return newItem;
        },
        delete: async ({ where })=>{
            const list = this.getItem("promoCodes");
            const filtered = list.filter((p)=>p.id !== where.id);
            this.setItem("promoCodes", filtered);
            return {
                id: where.id
            };
        },
        update: async ({ where, data })=>{
            const list = this.getItem("promoCodes");
            const idx = list.findIndex((p)=>p.id === where.id);
            if (idx === -1) return null;
            list[idx] = {
                ...list[idx],
                ...data
            };
            this.setItem("promoCodes", list);
            return list[idx];
        }
    };
    notification = {
        findMany: async ()=>{
            return this.getItem("notifications");
        },
        create: async ({ data })=>{
            const list = this.getItem("notifications");
            const item = {
                id: Date.now().toString(),
                ...data,
                createdAt: new Date()
            };
            list.unshift(item);
            this.setItem("notifications", list);
            return item;
        }
    };
    profile = {
        findUnique: async ({ where })=>{
            const profiles = this.getItem("profiles");
            return profiles.find((p)=>p.userId === where.userId) || null;
        },
        create: async ({ data })=>{
            const profiles = this.getItem("profiles");
            const newProfile = {
                id: Date.now().toString(),
                userId: data.userId,
                balance: data.balance,
                createdAt: new Date()
            };
            profiles.push(newProfile);
            this.setItem("profiles", profiles);
            return newProfile;
        },
        update: async ({ where, data })=>{
            const profiles = this.getItem("profiles");
            const index = profiles.findIndex((p)=>p.userId === where.userId);
            if (index !== -1) {
                profiles[index] = {
                    ...profiles[index],
                    ...data
                };
                this.setItem("profiles", profiles);
                return profiles[index];
            }
            return null;
        }
    };
    serverPlan = {
        findMany: async ()=>{
            return this.getItem("serverPlans");
        },
        findUnique: async ({ where })=>{
            const plans = this.getItem("serverPlans");
            return plans.find((p)=>p.id === where.id) || null;
        },
        create: async ({ data })=>{
            const plans = this.getItem("serverPlans");
            const newPlan = {
                id: Date.now().toString(),
                ...data,
                createdAt: new Date()
            };
            plans.push(newPlan);
            this.setItem("serverPlans", plans);
            return newPlan;
        },
        update: async ({ where, data })=>{
            const plans = this.getItem("serverPlans");
            const index = plans.findIndex((p)=>p.id === where.id);
            if (index !== -1) {
                plans[index] = {
                    ...plans[index],
                    ...data
                };
                this.setItem("serverPlans", plans);
                return plans[index];
            }
            return null;
        },
        delete: async ({ where })=>{
            const plans = this.getItem("serverPlans");
            const filtered = plans.filter((p)=>p.id !== where.id);
            this.setItem("serverPlans", filtered);
            return {
                id: where.id
            };
        }
    };
    order = {
        create: async ({ data })=>{
            const orders = this.getItem("orders");
            const newOrder = {
                id: Date.now().toString(),
                ...data,
                createdAt: new Date()
            };
            orders.push(newOrder);
            this.setItem("orders", orders);
            return newOrder;
        },
        findMany: async ({ where, include, orderBy })=>{
            let orders = this.getItem("orders");
            if (where?.userId) {
                orders = orders.filter((o)=>o.userId === where.userId);
            }
            if (include?.serverPlan) {
                const plans = this.getItem("serverPlans");
                orders = orders.map((o)=>({
                        ...o,
                        serverPlan: plans.find((p)=>p.id === o.serverPlanId)
                    }));
            }
            if (orderBy?.createdAt === "desc") {
                orders.sort((a, b)=>new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
            }
            return orders;
        },
        findUnique: async ({ where })=>{
            const orders = this.getItem("orders");
            return orders.find((o)=>o.id === where.id) || null;
        }
    };
}
const db = new MockDB();
// Initialize default data and optional admin from env
db.init();
// Seed admin user from env if provided
const ADMIN_EMAIL = process.env.ADMIN_EMAIL;
const ADMIN_PASSWORD_HASH = process.env.ADMIN_PASSWORD_HASH;
const ADMIN_NAME = process.env.ADMIN_NAME || "Admin";
(async ()=>{
    try {
        if (!ADMIN_EMAIL || !ADMIN_PASSWORD_HASH) return;
        const existing = await db.user.findUnique({
            where: {
                email: ADMIN_EMAIL
            }
        });
        if (existing) return;
        await db.user.create({
            data: {
                email: ADMIN_EMAIL,
                password: ADMIN_PASSWORD_HASH,
                name: ADMIN_NAME,
                profile: {
                    create: {
                        balance: 0
                    }
                }
            }
        });
        // Force role to admin
        const users = db.getItem?.("users") || [];
        const idx = users.findIndex((u)=>u.email === ADMIN_EMAIL);
        if (idx !== -1) {
            users[idx].role = "admin";
            db.setItem?.("users", users);
        }
    } catch  {}
})();
}),
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[project]/Downloads/vds-hub/vds-hub/lib/jwt.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "signToken",
    ()=>signToken,
    "verifyToken",
    ()=>verifyToken
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$jwt$2f$sign$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/vds-hub/vds-hub/node_modules/jose/dist/webapi/jwt/sign.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$jwt$2f$verify$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/vds-hub/vds-hub/node_modules/jose/dist/webapi/jwt/verify.js [app-route] (ecmascript)");
;
const JWT_SECRET = new TextEncoder().encode(process.env.JWT_SECRET || "your-secret-key-change-in-production");
const JWT_EXPIRES_IN = "7d";
async function signToken(payload) {
    return await new __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$jwt$2f$sign$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["SignJWT"](payload).setProtectedHeader({
        alg: "HS256"
    }).setIssuedAt().setExpirationTime(JWT_EXPIRES_IN).sign(JWT_SECRET);
}
async function verifyToken(token) {
    try {
        const { payload } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$node_modules$2f$jose$2f$dist$2f$webapi$2f$jwt$2f$verify$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jwtVerify"])(token, JWT_SECRET);
        return payload;
    } catch (error) {
        return null;
    }
}
}),
"[project]/Downloads/vds-hub/vds-hub/lib/auth-utils.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$node_modules$2f$bcryptjs$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/vds-hub/vds-hub/node_modules/bcryptjs/index.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/vds-hub/vds-hub/node_modules/next/headers.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$lib$2f$jwt$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/vds-hub/vds-hub/lib/jwt.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/vds-hub/vds-hub/lib/db.ts [app-route] (ecmascript)");
;
;
;
;
const SALT_ROUNDS = 10;
async function hashPassword(password) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$node_modules$2f$bcryptjs$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].hash(password, SALT_ROUNDS);
}
async function comparePassword(password, hash) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$node_modules$2f$bcryptjs$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].compare(password, hash);
}
async function getAuthUser() {
    const cookieStore = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cookies"])();
    const token = cookieStore.get("auth-token")?.value;
    if (!token) return null;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$lib$2f$jwt$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["verifyToken"])(token);
}
async function getUser() {
    const authUser = await getAuthUser();
    if (!authUser) return null;
    const user = await __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["db"].user.findUnique({
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
    const cookieStore = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cookies"])();
    cookieStore.set("auth-token", token, {
        httpOnly: true,
        secure: ("TURBOPACK compile-time value", "development") === "production",
        sameSite: "lax",
        maxAge: 60 * 60 * 24 * 7,
        path: "/"
    });
}
async function clearAuthCookie() {
    const cookieStore = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["cookies"])();
    cookieStore.delete("auth-token");
}
}),
"[project]/Downloads/vds-hub/vds-hub/app/api/profile/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GET",
    ()=>GET,
    "PATCH",
    ()=>PATCH
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/vds-hub/vds-hub/lib/db.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$lib$2f$auth$2d$utils$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/vds-hub/vds-hub/lib/auth-utils.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/vds-hub/vds-hub/node_modules/next/server.js [app-route] (ecmascript)");
;
;
;
async function GET() {
    try {
        const authUser = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$lib$2f$auth$2d$utils$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getAuthUser"])();
        if (!authUser) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "Unauthorized"
            }, {
                status: 401
            });
        }
        let profile = await __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["db"].profile.findUnique({
            where: {
                userId: authUser.userId
            }
        });
        if (!profile) {
            // Автосоздание профиля, если отсутствует
            profile = await __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["db"].profile.create({
                data: {
                    userId: authUser.userId,
                    balance: 0
                }
            });
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json(profile);
    } catch (error) {
        console.error("[v0] Error fetching profile:", error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: "Failed to fetch profile"
        }, {
            status: 500
        });
    }
}
async function PATCH(request) {
    try {
        const authUser = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$lib$2f$auth$2d$utils$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getAuthUser"])();
        if (!authUser) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "Unauthorized"
            }, {
                status: 401
            });
        }
        const body = await request.json();
        const profile = await __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["db"].profile.update({
            where: {
                userId: authUser.userId
            },
            data: body
        });
        return __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json(profile);
    } catch (error) {
        console.error("[v0] Error updating profile:", error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: "Failed to update profile"
        }, {
            status: 500
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__5b2f8ce5._.js.map
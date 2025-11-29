module.exports = [
"[project]/Downloads/vds-hub/vds-hub/lib/db.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/vds-hub/vds-hub/lib/db.ts [app-rsc] (ecmascript)");
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
    const user = await __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].user.findUnique({
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
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/vds-hub/vds-hub/lib/db.ts [app-rsc] (ecmascript)");
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
        const user = await __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].user.findUnique({
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
        const existingUser = await __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].user.findUnique({
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
        const user = await __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].user.create({
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
    const user = await __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].user.findUnique({
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
    const profile = await __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].profile.findUnique({
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
"[project]/Downloads/vds-hub/vds-hub/.next-internal/server/app/privacy/page/actions.js { ACTIONS_MODULE0 => \"[project]/Downloads/vds-hub/vds-hub/lib/actions/auth.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$lib$2f$actions$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/vds-hub/vds-hub/lib/actions/auth.ts [app-rsc] (ecmascript)");
;
;
;
}),
"[project]/Downloads/vds-hub/vds-hub/.next-internal/server/app/privacy/page/actions.js { ACTIONS_MODULE0 => \"[project]/Downloads/vds-hub/vds-hub/lib/actions/auth.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "003d3d5d091f35b6ba99b84978e649b8c4fb8e2899",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$lib$2f$actions$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["signOut"],
    "60329d4b2588ebcfa01b27bc1c0a8771f083e66998",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$lib$2f$actions$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["signIn"],
    "70e9d172b7b5e09121794a0b3624c2d1c3682f4041",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$lib$2f$actions$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["signUp"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f2e$next$2d$internal$2f$server$2f$app$2f$privacy$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$lib$2f$actions$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/Downloads/vds-hub/vds-hub/.next-internal/server/app/privacy/page/actions.js { ACTIONS_MODULE0 => "[project]/Downloads/vds-hub/vds-hub/lib/actions/auth.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$lib$2f$actions$2f$auth$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/vds-hub/vds-hub/lib/actions/auth.ts [app-rsc] (ecmascript)");
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__b9b2b763._.js.map
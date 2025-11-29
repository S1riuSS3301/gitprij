module.exports = [
"[project]/Downloads/vds-hub/vds-hub/public/vds-hub/vds-hub/components/ui/button.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button,
    "buttonVariants",
    ()=>buttonVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$public$2f$vds$2d$hub$2f$vds$2d$hub$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/vds-hub/vds-hub/public/vds-hub/vds-hub/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$public$2f$vds$2d$hub$2f$vds$2d$hub$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/vds-hub/vds-hub/public/vds-hub/vds-hub/node_modules/@radix-ui/react-slot/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$public$2f$vds$2d$hub$2f$vds$2d$hub$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/vds-hub/vds-hub/public/vds-hub/vds-hub/node_modules/class-variance-authority/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$public$2f$vds$2d$hub$2f$vds$2d$hub$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/vds-hub/vds-hub/public/vds-hub/vds-hub/lib/utils.ts [app-ssr] (ecmascript)");
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$public$2f$vds$2d$hub$2f$vds$2d$hub$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-semibold tracking-tight transition-all duration-200 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive active:scale-[0.98]", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm hover:shadow-md hover:glow-effect",
            destructive: "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60 shadow-sm hover:shadow-md",
            outline: "border-2 border-border bg-background shadow-sm hover:bg-accent hover:text-accent-foreground hover:border-primary/50 dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
            secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80 shadow-sm hover:shadow-md",
            ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
            link: "text-primary underline-offset-4 hover:underline"
        },
        size: {
            default: "h-10 px-5 py-2.5 has-[>svg]:px-4 text-sm",
            sm: "h-8 rounded-md gap-1.5 px-3.5 has-[>svg]:px-2.5 text-xs",
            lg: "h-12 rounded-lg px-7 has-[>svg]:px-5 text-base",
            icon: "size-10",
            "icon-sm": "size-8",
            "icon-lg": "size-12"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
});
function Button({ className, variant, size, asChild = false, ...props }) {
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$public$2f$vds$2d$hub$2f$vds$2d$hub$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Slot"] : "button";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$public$2f$vds$2d$hub$2f$vds$2d$hub$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        "data-slot": "button",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$public$2f$vds$2d$hub$2f$vds$2d$hub$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        })),
        ...props
    }, void 0, false, {
        fileName: "[project]/Downloads/vds-hub/vds-hub/public/vds-hub/vds-hub/components/ui/button.tsx",
        lineNumber: 49,
        columnNumber: 10
    }, this);
}
;
}),
"[project]/Downloads/vds-hub/vds-hub/public/vds-hub/vds-hub/components/header.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Header",
    ()=>Header
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$public$2f$vds$2d$hub$2f$vds$2d$hub$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/vds-hub/vds-hub/public/vds-hub/vds-hub/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$public$2f$vds$2d$hub$2f$vds$2d$hub$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/vds-hub/vds-hub/public/vds-hub/vds-hub/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$public$2f$vds$2d$hub$2f$vds$2d$hub$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/vds-hub/vds-hub/public/vds-hub/vds-hub/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$public$2f$vds$2d$hub$2f$vds$2d$hub$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/vds-hub/vds-hub/public/vds-hub/vds-hub/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$public$2f$vds$2d$hub$2f$vds$2d$hub$2f$contexts$2f$language$2d$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/vds-hub/vds-hub/public/vds-hub/vds-hub/contexts/language-context.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$public$2f$vds$2d$hub$2f$vds$2d$hub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/vds-hub/vds-hub/public/vds-hub/vds-hub/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$public$2f$vds$2d$hub$2f$vds$2d$hub$2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/vds-hub/vds-hub/public/vds-hub/vds-hub/node_modules/react-icons/fa/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$public$2f$vds$2d$hub$2f$vds$2d$hub$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/vds-hub/vds-hub/public/vds-hub/vds-hub/node_modules/next/image.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
function Header() {
    const { t, language, setLanguage } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$public$2f$vds$2d$hub$2f$vds$2d$hub$2f$contexts$2f$language$2d$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLanguage"])();
    const [isAuthenticated, setIsAuthenticated] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$public$2f$vds$2d$hub$2f$vds$2d$hub$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [balance, setBalance] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$public$2f$vds$2d$hub$2f$vds$2d$hub$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [serversCount, setServersCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$public$2f$vds$2d$hub$2f$vds$2d$hub$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$public$2f$vds$2d$hub$2f$vds$2d$hub$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const checkAuth = async ()=>{
            try {
                const response = await fetch("/api/user", {
                    cache: "no-store"
                });
                setIsAuthenticated(response.ok);
                if (response.ok) {
                    const [profileRes, ordersRes] = await Promise.all([
                        fetch("/api/profile", {
                            cache: "no-store"
                        }),
                        fetch("/api/orders", {
                            cache: "no-store"
                        })
                    ]);
                    if (profileRes.ok) {
                        const p = await profileRes.json();
                        setBalance(typeof p?.balance === "number" ? p.balance : 0);
                    } else {
                        setBalance(0);
                    }
                    if (ordersRes.ok) {
                        const o = await ordersRes.json();
                        setServersCount(Array.isArray(o) ? o.length : 0);
                    }
                } else {
                    setBalance(null);
                    setServersCount(0);
                }
            } catch  {
                setIsAuthenticated(false);
            }
        };
        checkAuth();
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$public$2f$vds$2d$hub$2f$vds$2d$hub$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$public$2f$vds$2d$hub$2f$vds$2d$hub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].header, {
        className: "border-b-2 border-border/30 backdrop-blur-lg bg-background/80 sticky top-0 z-50 shadow-md",
        initial: {
            y: -40,
            opacity: 0
        },
        animate: {
            y: 0,
            opacity: 1
        },
        transition: {
            duration: 0.4,
            ease: "easeOut"
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$public$2f$vds$2d$hub$2f$vds$2d$hub$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative container mx-auto px-4 sm:px-6 h-16 flex items-center justify-between",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$public$2f$vds$2d$hub$2f$vds$2d$hub$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute left-0 top-1/2 -translate-y-1/2 flex items-center z-50",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$public$2f$vds$2d$hub$2f$vds$2d$hub$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$public$2f$vds$2d$hub$2f$vds$2d$hub$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        href: "/",
                        className: "flex items-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$public$2f$vds$2d$hub$2f$vds$2d$hub$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$public$2f$vds$2d$hub$2f$vds$2d$hub$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            src: "/logo-vds-hub.png",
                            alt: "VDS Hub Logo",
                            width: 94,
                            height: 94,
                            className: "block",
                            style: {
                                filter: "drop-shadow(0 0 18px #8c6cfa33)"
                            }
                        }, void 0, false, {
                            fileName: "[project]/Downloads/vds-hub/vds-hub/public/vds-hub/vds-hub/components/header.tsx",
                            lineNumber: 60,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Downloads/vds-hub/vds-hub/public/vds-hub/vds-hub/components/header.tsx",
                        lineNumber: 58,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Downloads/vds-hub/vds-hub/public/vds-hub/vds-hub/components/header.tsx",
                    lineNumber: 57,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$public$2f$vds$2d$hub$2f$vds$2d$hub$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-1 flex ml-[44px]"
                }, void 0, false, {
                    fileName: "[project]/Downloads/vds-hub/vds-hub/public/vds-hub/vds-hub/components/header.tsx",
                    lineNumber: 73,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$public$2f$vds$2d$hub$2f$vds$2d$hub$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$public$2f$vds$2d$hub$2f$vds$2d$hub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                    className: "flex items-center gap-4 sm:gap-5",
                    initial: {
                        opacity: 0
                    },
                    animate: {
                        opacity: 1
                    },
                    transition: {
                        duration: 0.35,
                        delay: 0.15
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$public$2f$vds$2d$hub$2f$vds$2d$hub$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$public$2f$vds$2d$hub$2f$vds$2d$hub$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                            variant: "outline",
                            size: "sm",
                            className: "hidden sm:inline-flex rounded-full px-4 py-2 border font-semibold border-primary/40 bg-primary/5 transition-all duration-300 ease-out text-sm",
                            onClick: ()=>setLanguage(language === "ru" ? "en" : "ru"),
                            children: language === "ru" ? "RU" : "EN"
                        }, void 0, false, {
                            fileName: "[project]/Downloads/vds-hub/vds-hub/public/vds-hub/vds-hub/components/header.tsx",
                            lineNumber: 84,
                            columnNumber: 11
                        }, this),
                        isAuthenticated && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$public$2f$vds$2d$hub$2f$vds$2d$hub$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "hidden sm:flex items-center gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$public$2f$vds$2d$hub$2f$vds$2d$hub$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$public$2f$vds$2d$hub$2f$vds$2d$hub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                    className: "flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-primary/15 to-accent/15 border shadow-sm border-primary/25 text-base font-semibold transition-all duration-300",
                                    animate: {
                                        boxShadow: [
                                            "0 0 8px #8c6cfa55",
                                            "0 0 12px #ac94fbcc",
                                            "0 0 8px #8c6cfa55"
                                        ]
                                    },
                                    transition: {
                                        duration: 1.5,
                                        repeat: Infinity,
                                        repeatType: "reverse"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$public$2f$vds$2d$hub$2f$vds$2d$hub$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$public$2f$vds$2d$hub$2f$vds$2d$hub$2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaWallet"], {
                                            className: "text-primary",
                                            size: 17
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/vds-hub/vds-hub/public/vds-hub/vds-hub/components/header.tsx",
                                            lineNumber: 99,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$public$2f$vds$2d$hub$2f$vds$2d$hub$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-muted-foreground",
                                            children: language === "ru" ? "Баланс" : "Balance"
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/vds-hub/vds-hub/public/vds-hub/vds-hub/components/header.tsx",
                                            lineNumber: 100,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$public$2f$vds$2d$hub$2f$vds$2d$hub$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-bold text-foreground",
                                            children: new Intl.NumberFormat("en-US", {
                                                style: "currency",
                                                currency: "USD"
                                            }).format(balance ?? 0)
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/vds-hub/vds-hub/public/vds-hub/vds-hub/components/header.tsx",
                                            lineNumber: 101,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Downloads/vds-hub/vds-hub/public/vds-hub/vds-hub/components/header.tsx",
                                    lineNumber: 94,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$public$2f$vds$2d$hub$2f$vds$2d$hub$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$public$2f$vds$2d$hub$2f$vds$2d$hub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                    className: "flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary/30 border shadow-sm border-secondary/25 text-base text-foreground font-semibold transition-all duration-300",
                                    animate: {
                                        boxShadow: [
                                            "0 0 8px #8c6cfa55",
                                            "0 0 12px #ac94fbcc",
                                            "0 0 8px #8c6cfa55"
                                        ]
                                    },
                                    transition: {
                                        duration: 1.5,
                                        repeat: Infinity,
                                        repeatType: "reverse"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$public$2f$vds$2d$hub$2f$vds$2d$hub$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$public$2f$vds$2d$hub$2f$vds$2d$hub$2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaServer"], {}, void 0, false, {
                                            fileName: "[project]/Downloads/vds-hub/vds-hub/public/vds-hub/vds-hub/components/header.tsx",
                                            lineNumber: 110,
                                            columnNumber: 17
                                        }, this),
                                        " ",
                                        language === "ru" ? "VPS" : "VPS",
                                        ": ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$public$2f$vds$2d$hub$2f$vds$2d$hub$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-bold ml-1",
                                            children: serversCount
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/vds-hub/vds-hub/public/vds-hub/vds-hub/components/header.tsx",
                                            lineNumber: 110,
                                            columnNumber: 67
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Downloads/vds-hub/vds-hub/public/vds-hub/vds-hub/components/header.tsx",
                                    lineNumber: 105,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/vds-hub/vds-hub/public/vds-hub/vds-hub/components/header.tsx",
                            lineNumber: 93,
                            columnNumber: 13
                        }, this),
                        isAuthenticated ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$public$2f$vds$2d$hub$2f$vds$2d$hub$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$public$2f$vds$2d$hub$2f$vds$2d$hub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                            transition: {
                                duration: 0.3,
                                ease: "easeOut"
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$public$2f$vds$2d$hub$2f$vds$2d$hub$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$public$2f$vds$2d$hub$2f$vds$2d$hub$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: "/dashboard",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$public$2f$vds$2d$hub$2f$vds$2d$hub$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$public$2f$vds$2d$hub$2f$vds$2d$hub$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                    size: "sm",
                                    className: "rounded-full px-5 py-2 bg-primary text-white font-extrabold shadow-md text-base transition-all duration-300 border border-primary/70 flex gap-2 items-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$public$2f$vds$2d$hub$2f$vds$2d$hub$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$public$2f$vds$2d$hub$2f$vds$2d$hub$2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaThLarge"], {
                                            size: 17
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/vds-hub/vds-hub/public/vds-hub/vds-hub/components/header.tsx",
                                            lineNumber: 121,
                                            columnNumber: 19
                                        }, this),
                                        " ",
                                        t("header.dashboard")
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Downloads/vds-hub/vds-hub/public/vds-hub/vds-hub/components/header.tsx",
                                    lineNumber: 117,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Downloads/vds-hub/vds-hub/public/vds-hub/vds-hub/components/header.tsx",
                                lineNumber: 116,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Downloads/vds-hub/vds-hub/public/vds-hub/vds-hub/components/header.tsx",
                            lineNumber: 115,
                            columnNumber: 13
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$public$2f$vds$2d$hub$2f$vds$2d$hub$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$public$2f$vds$2d$hub$2f$vds$2d$hub$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$public$2f$vds$2d$hub$2f$vds$2d$hub$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$public$2f$vds$2d$hub$2f$vds$2d$hub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                    transition: {
                                        duration: 0.3,
                                        ease: "easeOut"
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$public$2f$vds$2d$hub$2f$vds$2d$hub$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$public$2f$vds$2d$hub$2f$vds$2d$hub$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/login",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$public$2f$vds$2d$hub$2f$vds$2d$hub$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$public$2f$vds$2d$hub$2f$vds$2d$hub$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                            variant: "outline",
                                            size: "sm",
                                            className: "rounded-full px-4 py-2 font-bold border border-primary/25 bg-transparent transition-all duration-300 text-sm flex gap-2 items-center",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$public$2f$vds$2d$hub$2f$vds$2d$hub$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$public$2f$vds$2d$hub$2f$vds$2d$hub$2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaSignInAlt"], {
                                                    size: 16
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/vds-hub/vds-hub/public/vds-hub/vds-hub/components/header.tsx",
                                                    lineNumber: 134,
                                                    columnNumber: 21
                                                }, this),
                                                " ",
                                                t("header.login")
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Downloads/vds-hub/vds-hub/public/vds-hub/vds-hub/components/header.tsx",
                                            lineNumber: 129,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/vds-hub/vds-hub/public/vds-hub/vds-hub/components/header.tsx",
                                        lineNumber: 128,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/vds-hub/vds-hub/public/vds-hub/vds-hub/components/header.tsx",
                                    lineNumber: 127,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$public$2f$vds$2d$hub$2f$vds$2d$hub$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$public$2f$vds$2d$hub$2f$vds$2d$hub$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                    transition: {
                                        duration: 0.3,
                                        ease: "easeOut"
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$public$2f$vds$2d$hub$2f$vds$2d$hub$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$public$2f$vds$2d$hub$2f$vds$2d$hub$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/register",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$public$2f$vds$2d$hub$2f$vds$2d$hub$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$public$2f$vds$2d$hub$2f$vds$2d$hub$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                            size: "sm",
                                            className: "rounded-full px-5 py-2 bg-primary text-white font-extrabold border border-primary/70 shadow-md text-base transition-all duration-300 flex gap-2 items-center",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$public$2f$vds$2d$hub$2f$vds$2d$hub$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$public$2f$vds$2d$hub$2f$vds$2d$hub$2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaUserPlus"], {
                                                    size: 16
                                                }, void 0, false, {
                                                    fileName: "[project]/Downloads/vds-hub/vds-hub/public/vds-hub/vds-hub/components/header.tsx",
                                                    lineNumber: 144,
                                                    columnNumber: 21
                                                }, this),
                                                " ",
                                                t("header.register")
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Downloads/vds-hub/vds-hub/public/vds-hub/vds-hub/components/header.tsx",
                                            lineNumber: 140,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/vds-hub/vds-hub/public/vds-hub/vds-hub/components/header.tsx",
                                        lineNumber: 139,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/vds-hub/vds-hub/public/vds-hub/vds-hub/components/header.tsx",
                                    lineNumber: 138,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/vds-hub/vds-hub/public/vds-hub/vds-hub/components/header.tsx",
                    lineNumber: 78,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Downloads/vds-hub/vds-hub/public/vds-hub/vds-hub/components/header.tsx",
            lineNumber: 55,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Downloads/vds-hub/vds-hub/public/vds-hub/vds-hub/components/header.tsx",
        lineNumber: 49,
        columnNumber: 5
    }, this);
}
}),
"[project]/Downloads/vds-hub/vds-hub/public/vds-hub/vds-hub/components/footer.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Footer",
    ()=>Footer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$public$2f$vds$2d$hub$2f$vds$2d$hub$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/vds-hub/vds-hub/public/vds-hub/vds-hub/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$public$2f$vds$2d$hub$2f$vds$2d$hub$2f$contexts$2f$language$2d$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/vds-hub/vds-hub/public/vds-hub/vds-hub/contexts/language-context.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$public$2f$vds$2d$hub$2f$vds$2d$hub$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/vds-hub/vds-hub/public/vds-hub/vds-hub/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
"use client";
;
;
;
function Footer() {
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$public$2f$vds$2d$hub$2f$vds$2d$hub$2f$contexts$2f$language$2d$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLanguage"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$public$2f$vds$2d$hub$2f$vds$2d$hub$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        className: "mt-20 pt-8 pb-8 border-t border-border/40 bg-background/60 backdrop-blur animate-fade-in",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$public$2f$vds$2d$hub$2f$vds$2d$hub$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$public$2f$vds$2d$hub$2f$vds$2d$hub$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-2 text-sm text-muted-foreground",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$public$2f$vds$2d$hub$2f$vds$2d$hub$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: [
                                "© ",
                                new Date().getFullYear(),
                                " vds.hub"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/vds-hub/vds-hub/public/vds-hub/vds-hub/components/footer.tsx",
                            lineNumber: 13,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$public$2f$vds$2d$hub$2f$vds$2d$hub$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "hidden md:inline-block",
                            children: "·"
                        }, void 0, false, {
                            fileName: "[project]/Downloads/vds-hub/vds-hub/public/vds-hub/vds-hub/components/footer.tsx",
                            lineNumber: 14,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$public$2f$vds$2d$hub$2f$vds$2d$hub$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$public$2f$vds$2d$hub$2f$vds$2d$hub$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: "/privacy",
                            className: "hover:text-primary underline underline-offset-4 transition-colors duration-200",
                            children: t ? t("footer.privacyPolicy") : "Политика конфиденциальности"
                        }, void 0, false, {
                            fileName: "[project]/Downloads/vds-hub/vds-hub/public/vds-hub/vds-hub/components/footer.tsx",
                            lineNumber: 15,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/vds-hub/vds-hub/public/vds-hub/vds-hub/components/footer.tsx",
                    lineNumber: 12,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$public$2f$vds$2d$hub$2f$vds$2d$hub$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex space-x-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$public$2f$vds$2d$hub$2f$vds$2d$hub$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "mailto:support@vds.sh",
                            className: "text-muted-foreground hover:text-primary transition-colors duration-200 text-sm",
                            title: "support@vds.sh",
                            children: "support@vds.sh"
                        }, void 0, false, {
                            fileName: "[project]/Downloads/vds-hub/vds-hub/public/vds-hub/vds-hub/components/footer.tsx",
                            lineNumber: 20,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$public$2f$vds$2d$hub$2f$vds$2d$hub$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "https://t.me/vdssh",
                            className: "text-muted-foreground hover:text-primary transition-colors duration-200 text-sm",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            title: "Telegram",
                            children: "Telegram"
                        }, void 0, false, {
                            fileName: "[project]/Downloads/vds-hub/vds-hub/public/vds-hub/vds-hub/components/footer.tsx",
                            lineNumber: 27,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Downloads/vds-hub/vds-hub/public/vds-hub/vds-hub/components/footer.tsx",
                    lineNumber: 19,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Downloads/vds-hub/vds-hub/public/vds-hub/vds-hub/components/footer.tsx",
            lineNumber: 11,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Downloads/vds-hub/vds-hub/public/vds-hub/vds-hub/components/footer.tsx",
        lineNumber: 10,
        columnNumber: 5
    }, this);
}
}),
"[project]/Downloads/vds-hub/vds-hub/public/vds-hub/vds-hub/app/privacy/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PrivacyPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$public$2f$vds$2d$hub$2f$vds$2d$hub$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/vds-hub/vds-hub/public/vds-hub/vds-hub/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$public$2f$vds$2d$hub$2f$vds$2d$hub$2f$components$2f$header$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/vds-hub/vds-hub/public/vds-hub/vds-hub/components/header.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$public$2f$vds$2d$hub$2f$vds$2d$hub$2f$components$2f$footer$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/vds-hub/vds-hub/public/vds-hub/vds-hub/components/footer.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$public$2f$vds$2d$hub$2f$vds$2d$hub$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/vds-hub/vds-hub/public/vds-hub/vds-hub/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$public$2f$vds$2d$hub$2f$vds$2d$hub$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/vds-hub/vds-hub/public/vds-hub/vds-hub/node_modules/next/navigation.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
function PrivacyPage() {
    const [isMenuOpen, setIsMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$public$2f$vds$2d$hub$2f$vds$2d$hub$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$public$2f$vds$2d$hub$2f$vds$2d$hub$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const sections = [
        {
            id: 'section1',
            title: '1. Какие Данные Мы Собираем'
        },
        {
            id: 'section2',
            title: '2. Цели Сбора и Обработки Данных'
        },
        {
            id: 'section3',
            title: '3. Передача Данных Третьим Лицам'
        },
        {
            id: 'section4',
            title: '4. Защита Данных'
        },
        {
            id: 'section5',
            title: '5. Хранение Данных'
        },
        {
            id: 'section6',
            title: '6. Ваши Права'
        },
        {
            id: 'section7',
            title: '7. Согласие и Изменения'
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$public$2f$vds$2d$hub$2f$vds$2d$hub$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen gradient-purple text-foreground p-8",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$public$2f$vds$2d$hub$2f$vds$2d$hub$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-3xl mx-auto space-y-12",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$public$2f$vds$2d$hub$2f$vds$2d$hub$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$public$2f$vds$2d$hub$2f$vds$2d$hub$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-between items-center mt-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$public$2f$vds$2d$hub$2f$vds$2d$hub$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>router.back(),
                                className: "text-foreground hover:underline font-medium",
                                children: "Назад"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/vds-hub/vds-hub/public/vds-hub/vds-hub/app/privacy/page.tsx",
                                lineNumber: 26,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$public$2f$vds$2d$hub$2f$vds$2d$hub$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setIsMenuOpen(true),
                                className: "flex flex-col justify-center items-center w-8 h-8 space-y-1",
                                title: "Открыть меню",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$public$2f$vds$2d$hub$2f$vds$2d$hub$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "block w-6 h-0.5 bg-foreground"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/vds-hub/vds-hub/public/vds-hub/vds-hub/app/privacy/page.tsx",
                                        lineNumber: 28,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$public$2f$vds$2d$hub$2f$vds$2d$hub$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "block w-6 h-0.5 bg-foreground"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/vds-hub/vds-hub/public/vds-hub/vds-hub/app/privacy/page.tsx",
                                        lineNumber: 29,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$public$2f$vds$2d$hub$2f$vds$2d$hub$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "block w-6 h-0.5 bg-foreground"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/vds-hub/vds-hub/public/vds-hub/vds-hub/app/privacy/page.tsx",
                                        lineNumber: 30,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/vds-hub/vds-hub/public/vds-hub/vds-hub/app/privacy/page.tsx",
                                lineNumber: 27,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/vds-hub/vds-hub/public/vds-hub/vds-hub/app/privacy/page.tsx",
                        lineNumber: 25,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$public$2f$vds$2d$hub$2f$vds$2d$hub$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$public$2f$vds$2d$hub$2f$vds$2d$hub$2f$components$2f$header$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Header"], {}, void 0, false, {
                        fileName: "[project]/Downloads/vds-hub/vds-hub/public/vds-hub/vds-hub/app/privacy/page.tsx",
                        lineNumber: 34,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$public$2f$vds$2d$hub$2f$vds$2d$hub$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-3xl font-bold mb-4 mt-12",
                        children: "Политика конфиденциальности"
                    }, void 0, false, {
                        fileName: "[project]/Downloads/vds-hub/vds-hub/public/vds-hub/vds-hub/app/privacy/page.tsx",
                        lineNumber: 35,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$public$2f$vds$2d$hub$2f$vds$2d$hub$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `fixed top-0 left-0 h-full w-64 bg-purple-900 text-foreground shadow-lg transform ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out z-50 overflow-y-auto`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$public$2f$vds$2d$hub$2f$vds$2d$hub$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setIsMenuOpen(false),
                                className: "absolute top-4 right-4 text-2xl text-foreground hover:text-gray-300",
                                "aria-label": "Закрыть меню",
                                children: "×"
                            }, void 0, false, {
                                fileName: "[project]/Downloads/vds-hub/vds-hub/public/vds-hub/vds-hub/app/privacy/page.tsx",
                                lineNumber: 38,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$public$2f$vds$2d$hub$2f$vds$2d$hub$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "mt-16 p-4 space-y-4",
                                children: sections.map((section)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$public$2f$vds$2d$hub$2f$vds$2d$hub$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$public$2f$vds$2d$hub$2f$vds$2d$hub$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: `#${section.id}`,
                                            onClick: ()=>setIsMenuOpen(false),
                                            className: "block py-2 hover:underline hover:text-gray-300 transition-colors duration-200",
                                            children: section.title
                                        }, void 0, false, {
                                            fileName: "[project]/Downloads/vds-hub/vds-hub/public/vds-hub/vds-hub/app/privacy/page.tsx",
                                            lineNumber: 42,
                                            columnNumber: 19
                                        }, this)
                                    }, section.id, false, {
                                        fileName: "[project]/Downloads/vds-hub/vds-hub/public/vds-hub/vds-hub/app/privacy/page.tsx",
                                        lineNumber: 41,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/Downloads/vds-hub/vds-hub/public/vds-hub/vds-hub/app/privacy/page.tsx",
                                lineNumber: 39,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/vds-hub/vds-hub/public/vds-hub/vds-hub/app/privacy/page.tsx",
                        lineNumber: 37,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$public$2f$vds$2d$hub$2f$vds$2d$hub$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "whitespace-pre-wrap text-foreground",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$public$2f$vds$2d$hub$2f$vds$2d$hub$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                id: "section1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$public$2f$vds$2d$hub$2f$vds$2d$hub$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "1. Какие Данные Мы Собираем"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/vds-hub/vds-hub/public/vds-hub/vds-hub/app/privacy/page.tsx",
                                        lineNumber: 56,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$public$2f$vds$2d$hub$2f$vds$2d$hub$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: "[project]/Downloads/vds-hub/vds-hub/public/vds-hub/vds-hub/app/privacy/page.tsx",
                                        lineNumber: 56,
                                        columnNumber: 59
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$public$2f$vds$2d$hub$2f$vds$2d$hub$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "1.1."
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/vds-hub/vds-hub/public/vds-hub/vds-hub/app/privacy/page.tsx",
                                        lineNumber: 57,
                                        columnNumber: 15
                                    }, this),
                                    " Данные для регистрации и идентификации: Имя, фамилия, email, номер телефона, платежные реквизиты.",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$public$2f$vds$2d$hub$2f$vds$2d$hub$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: "[project]/Downloads/vds-hub/vds-hub/public/vds-hub/vds-hub/app/privacy/page.tsx",
                                        lineNumber: 57,
                                        columnNumber: 134
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$public$2f$vds$2d$hub$2f$vds$2d$hub$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "1.2."
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/vds-hub/vds-hub/public/vds-hub/vds-hub/app/privacy/page.tsx",
                                        lineNumber: 58,
                                        columnNumber: 15
                                    }, this),
                                    " Технические данные: IP-адреса, логи доступа, данные об использовании услуг (трафик, потребление ресурсов), информация из cookies и аналогичных технологий для анализа работы сайта.",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$public$2f$vds$2d$hub$2f$vds$2d$hub$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: "[project]/Downloads/vds-hub/vds-hub/public/vds-hub/vds-hub/app/privacy/page.tsx",
                                        lineNumber: 58,
                                        columnNumber: 216
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$public$2f$vds$2d$hub$2f$vds$2d$hub$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "1.3."
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/vds-hub/vds-hub/public/vds-hub/vds-hub/app/privacy/page.tsx",
                                        lineNumber: 59,
                                        columnNumber: 15
                                    }, this),
                                    " Данные, которые вы храните на сервере: Мы не просматриваем и не анализируем содержание ваших данных на VDS, за исключением случаев, предусмотренных законом или при подозрении в нарушении пользовательского соглашения (например, жалобы на спам)."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/vds-hub/vds-hub/public/vds-hub/vds-hub/app/privacy/page.tsx",
                                lineNumber: 55,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$public$2f$vds$2d$hub$2f$vds$2d$hub$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-4",
                                id: "section2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$public$2f$vds$2d$hub$2f$vds$2d$hub$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "2. Цели Сбора и Обработки Данных"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/vds-hub/vds-hub/public/vds-hub/vds-hub/app/privacy/page.tsx",
                                        lineNumber: 62,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$public$2f$vds$2d$hub$2f$vds$2d$hub$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: "[project]/Downloads/vds-hub/vds-hub/public/vds-hub/vds-hub/app/privacy/page.tsx",
                                        lineNumber: 62,
                                        columnNumber: 64
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$public$2f$vds$2d$hub$2f$vds$2d$hub$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "2.1."
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/vds-hub/vds-hub/public/vds-hub/vds-hub/app/privacy/page.tsx",
                                        lineNumber: 63,
                                        columnNumber: 15
                                    }, this),
                                    " Для предоставления, управления и поддержки наших Услуг.",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$public$2f$vds$2d$hub$2f$vds$2d$hub$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: "[project]/Downloads/vds-hub/vds-hub/public/vds-hub/vds-hub/app/privacy/page.tsx",
                                        lineNumber: 63,
                                        columnNumber: 92
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$public$2f$vds$2d$hub$2f$vds$2d$hub$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "2.2."
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/vds-hub/vds-hub/public/vds-hub/vds-hub/app/privacy/page.tsx",
                                        lineNumber: 64,
                                        columnNumber: 15
                                    }, this),
                                    " Для обработки платежей и связи с вами по поводу вашего аккаунта.",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$public$2f$vds$2d$hub$2f$vds$2d$hub$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: "[project]/Downloads/vds-hub/vds-hub/public/vds-hub/vds-hub/app/privacy/page.tsx",
                                        lineNumber: 64,
                                        columnNumber: 101
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$public$2f$vds$2d$hub$2f$vds$2d$hub$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "2.3."
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/vds-hub/vds-hub/public/vds-hub/vds-hub/app/privacy/page.tsx",
                                        lineNumber: 65,
                                        columnNumber: 15
                                    }, this),
                                    " Для отправки важных уведомлений (изменения в услугах, тарифах, технические работы).",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$public$2f$vds$2d$hub$2f$vds$2d$hub$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: "[project]/Downloads/vds-hub/vds-hub/public/vds-hub/vds-hub/app/privacy/page.tsx",
                                        lineNumber: 65,
                                        columnNumber: 120
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$public$2f$vds$2d$hub$2f$vds$2d$hub$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "2.4."
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/vds-hub/vds-hub/public/vds-hub/vds-hub/app/privacy/page.tsx",
                                        lineNumber: 66,
                                        columnNumber: 15
                                    }, this),
                                    " Для улучшения качества наших услуг и разработки новых продуктов."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/vds-hub/vds-hub/public/vds-hub/vds-hub/app/privacy/page.tsx",
                                lineNumber: 61,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$public$2f$vds$2d$hub$2f$vds$2d$hub$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-4",
                                id: "section3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$public$2f$vds$2d$hub$2f$vds$2d$hub$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "3. Передача Данных Третьим Лицам"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/vds-hub/vds-hub/public/vds-hub/vds-hub/app/privacy/page.tsx",
                                        lineNumber: 69,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$public$2f$vds$2d$hub$2f$vds$2d$hub$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: "[project]/Downloads/vds-hub/vds-hub/public/vds-hub/vds-hub/app/privacy/page.tsx",
                                        lineNumber: 69,
                                        columnNumber: 64
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$public$2f$vds$2d$hub$2f$vds$2d$hub$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "3.1."
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/vds-hub/vds-hub/public/vds-hub/vds-hub/app/privacy/page.tsx",
                                        lineNumber: 70,
                                        columnNumber: 15
                                    }, this),
                                    " Мы не продаем и не передаем ваши персональные данные третьим лицам для их маркетинговых целей.",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$public$2f$vds$2d$hub$2f$vds$2d$hub$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: "[project]/Downloads/vds-hub/vds-hub/public/vds-hub/vds-hub/app/privacy/page.tsx",
                                        lineNumber: 70,
                                        columnNumber: 131
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$public$2f$vds$2d$hub$2f$vds$2d$hub$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "3.2."
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/vds-hub/vds-hub/public/vds-hub/vds-hub/app/privacy/page.tsx",
                                        lineNumber: 71,
                                        columnNumber: 15
                                    }, this),
                                    " Мы можем передавать данные:",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$public$2f$vds$2d$hub$2f$vds$2d$hub$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: "[project]/Downloads/vds-hub/vds-hub/public/vds-hub/vds-hub/app/privacy/page.tsx",
                                        lineNumber: 71,
                                        columnNumber: 64
                                    }, this),
                                    "   — ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$public$2f$vds$2d$hub$2f$vds$2d$hub$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "Партнерам и подрядчикам:"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/vds-hub/vds-hub/public/vds-hub/vds-hub/app/privacy/page.tsx",
                                        lineNumber: 72,
                                        columnNumber: 35
                                    }, this),
                                    " для осуществления платежей (платежные шлюзы), отправки email (рассылочные сервисы), при условии соблюдения ими конфиденциальности.",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$public$2f$vds$2d$hub$2f$vds$2d$hub$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: "[project]/Downloads/vds-hub/vds-hub/public/vds-hub/vds-hub/app/privacy/page.tsx",
                                        lineNumber: 72,
                                        columnNumber: 207
                                    }, this),
                                    "   — ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$public$2f$vds$2d$hub$2f$vds$2d$hub$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "По требованию закона:"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/vds-hub/vds-hub/public/vds-hub/vds-hub/app/privacy/page.tsx",
                                        lineNumber: 73,
                                        columnNumber: 35
                                    }, this),
                                    " правоохранительным и государственным органам в случаях, предусмотренных действующим законодательством."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/vds-hub/vds-hub/public/vds-hub/vds-hub/app/privacy/page.tsx",
                                lineNumber: 68,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$public$2f$vds$2d$hub$2f$vds$2d$hub$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-4",
                                id: "section4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$public$2f$vds$2d$hub$2f$vds$2d$hub$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "4. Защита Данных"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/vds-hub/vds-hub/public/vds-hub/vds-hub/app/privacy/page.tsx",
                                        lineNumber: 76,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$public$2f$vds$2d$hub$2f$vds$2d$hub$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: "[project]/Downloads/vds-hub/vds-hub/public/vds-hub/vds-hub/app/privacy/page.tsx",
                                        lineNumber: 76,
                                        columnNumber: 48
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$public$2f$vds$2d$hub$2f$vds$2d$hub$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "4.1."
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/vds-hub/vds-hub/public/vds-hub/vds-hub/app/privacy/page.tsx",
                                        lineNumber: 77,
                                        columnNumber: 15
                                    }, this),
                                    " Мы принимаем необходимые организационные и технические меры для защиты ваших данных от несанкционированного доступа, изменения, раскрытия или уничтожения.",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$public$2f$vds$2d$hub$2f$vds$2d$hub$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: "[project]/Downloads/vds-hub/vds-hub/public/vds-hub/vds-hub/app/privacy/page.tsx",
                                        lineNumber: 77,
                                        columnNumber: 191
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$public$2f$vds$2d$hub$2f$vds$2d$hub$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "4.2."
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/vds-hub/vds-hub/public/vds-hub/vds-hub/app/privacy/page.tsx",
                                        lineNumber: 78,
                                        columnNumber: 15
                                    }, this),
                                    " Доступ к серверам и панели управления имеет строго ограниченный круг лиц."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/vds-hub/vds-hub/public/vds-hub/vds-hub/app/privacy/page.tsx",
                                lineNumber: 75,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$public$2f$vds$2d$hub$2f$vds$2d$hub$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-4",
                                id: "section5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$public$2f$vds$2d$hub$2f$vds$2d$hub$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "5. Хранение Данных"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/vds-hub/vds-hub/public/vds-hub/vds-hub/app/privacy/page.tsx",
                                        lineNumber: 81,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$public$2f$vds$2d$hub$2f$vds$2d$hub$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: "[project]/Downloads/vds-hub/vds-hub/public/vds-hub/vds-hub/app/privacy/page.tsx",
                                        lineNumber: 81,
                                        columnNumber: 50
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$public$2f$vds$2d$hub$2f$vds$2d$hub$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "5.1."
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/vds-hub/vds-hub/public/vds-hub/vds-hub/app/privacy/page.tsx",
                                        lineNumber: 82,
                                        columnNumber: 15
                                    }, this),
                                    " Мы храним ваши персональные данные до тех пор, пока это необходимо для целей, описанных в настоящей Политике, или пока вы не отзовете свое согласие на их обработку (если применимо по закону).",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$public$2f$vds$2d$hub$2f$vds$2d$hub$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: "[project]/Downloads/vds-hub/vds-hub/public/vds-hub/vds-hub/app/privacy/page.tsx",
                                        lineNumber: 82,
                                        columnNumber: 228
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$public$2f$vds$2d$hub$2f$vds$2d$hub$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "5.2."
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/vds-hub/vds-hub/public/vds-hub/vds-hub/app/privacy/page.tsx",
                                        lineNumber: 83,
                                        columnNumber: 15
                                    }, this),
                                    " После удаления аккаунта мы аннулируем ваши данные в разумные сроки, за исключением случаев, когда закон требует их более длительного хранения (например, финансовые транзакции)."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/vds-hub/vds-hub/public/vds-hub/vds-hub/app/privacy/page.tsx",
                                lineNumber: 80,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$public$2f$vds$2d$hub$2f$vds$2d$hub$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-4",
                                id: "section6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$public$2f$vds$2d$hub$2f$vds$2d$hub$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "6. Ваши Права"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/vds-hub/vds-hub/public/vds-hub/vds-hub/app/privacy/page.tsx",
                                        lineNumber: 86,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$public$2f$vds$2d$hub$2f$vds$2d$hub$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: "[project]/Downloads/vds-hub/vds-hub/public/vds-hub/vds-hub/app/privacy/page.tsx",
                                        lineNumber: 86,
                                        columnNumber: 45
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$public$2f$vds$2d$hub$2f$vds$2d$hub$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "6.1."
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/vds-hub/vds-hub/public/vds-hub/vds-hub/app/privacy/page.tsx",
                                        lineNumber: 87,
                                        columnNumber: 15
                                    }, this),
                                    " Вы имеете право запросить доступ к вашим персональным данным, их исправление, обновление или удаление.",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$public$2f$vds$2d$hub$2f$vds$2d$hub$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: "[project]/Downloads/vds-hub/vds-hub/public/vds-hub/vds-hub/app/privacy/page.tsx",
                                        lineNumber: 87,
                                        columnNumber: 139
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$public$2f$vds$2d$hub$2f$vds$2d$hub$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "6.2."
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/vds-hub/vds-hub/public/vds-hub/vds-hub/app/privacy/page.tsx",
                                        lineNumber: 88,
                                        columnNumber: 15
                                    }, this),
                                    " Вы можете отказаться от получения маркетинговых рассылок в любой момент."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/vds-hub/vds-hub/public/vds-hub/vds-hub/app/privacy/page.tsx",
                                lineNumber: 85,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$public$2f$vds$2d$hub$2f$vds$2d$hub$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-4",
                                id: "section7",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$public$2f$vds$2d$hub$2f$vds$2d$hub$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "7. Согласие и Изменения"
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/vds-hub/vds-hub/public/vds-hub/vds-hub/app/privacy/page.tsx",
                                        lineNumber: 91,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$public$2f$vds$2d$hub$2f$vds$2d$hub$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: "[project]/Downloads/vds-hub/vds-hub/public/vds-hub/vds-hub/app/privacy/page.tsx",
                                        lineNumber: 91,
                                        columnNumber: 55
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$public$2f$vds$2d$hub$2f$vds$2d$hub$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "7.1."
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/vds-hub/vds-hub/public/vds-hub/vds-hub/app/privacy/page.tsx",
                                        lineNumber: 92,
                                        columnNumber: 15
                                    }, this),
                                    " Используя наш сервис, вы соглашаетесь с условиями данной Политики конфиденциальности.",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$public$2f$vds$2d$hub$2f$vds$2d$hub$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: "[project]/Downloads/vds-hub/vds-hub/public/vds-hub/vds-hub/app/privacy/page.tsx",
                                        lineNumber: 92,
                                        columnNumber: 122
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$public$2f$vds$2d$hub$2f$vds$2d$hub$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "7.2."
                                    }, void 0, false, {
                                        fileName: "[project]/Downloads/vds-hub/vds-hub/public/vds-hub/vds-hub/app/privacy/page.tsx",
                                        lineNumber: 93,
                                        columnNumber: 15
                                    }, this),
                                    " Мы оставляем за собой право вносить изменения в Политику. Актуальная версия всегда будет размещена на нашем сайте."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Downloads/vds-hub/vds-hub/public/vds-hub/vds-hub/app/privacy/page.tsx",
                                lineNumber: 90,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$public$2f$vds$2d$hub$2f$vds$2d$hub$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$public$2f$vds$2d$hub$2f$vds$2d$hub$2f$components$2f$footer$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Footer"], {}, void 0, false, {
                                fileName: "[project]/Downloads/vds-hub/vds-hub/public/vds-hub/vds-hub/app/privacy/page.tsx",
                                lineNumber: 95,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Downloads/vds-hub/vds-hub/public/vds-hub/vds-hub/app/privacy/page.tsx",
                        lineNumber: 54,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Downloads/vds-hub/vds-hub/public/vds-hub/vds-hub/app/privacy/page.tsx",
                lineNumber: 24,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/Downloads/vds-hub/vds-hub/public/vds-hub/vds-hub/app/privacy/page.tsx",
            lineNumber: 23,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Downloads/vds-hub/vds-hub/public/vds-hub/vds-hub/app/privacy/page.tsx",
        lineNumber: 22,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=Downloads_vds-hub_vds-hub_public_vds-hub_vds-hub_efb3ad4f._.js.map
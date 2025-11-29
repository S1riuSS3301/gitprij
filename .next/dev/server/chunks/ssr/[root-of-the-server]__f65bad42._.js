module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

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
"[project]/Downloads/vds-hub/vds-hub/hooks/use-toast.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "reducer",
    ()=>reducer,
    "toast",
    ()=>toast,
    "useToast",
    ()=>useToast
]);
// Inspired by react-hot-toast library
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/vds-hub/vds-hub/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
const TOAST_LIMIT = 1;
const TOAST_REMOVE_DELAY = 1000000;
const actionTypes = {
    ADD_TOAST: 'ADD_TOAST',
    UPDATE_TOAST: 'UPDATE_TOAST',
    DISMISS_TOAST: 'DISMISS_TOAST',
    REMOVE_TOAST: 'REMOVE_TOAST'
};
let count = 0;
function genId() {
    count = (count + 1) % Number.MAX_SAFE_INTEGER;
    return count.toString();
}
const toastTimeouts = new Map();
const addToRemoveQueue = (toastId)=>{
    if (toastTimeouts.has(toastId)) {
        return;
    }
    const timeout = setTimeout(()=>{
        toastTimeouts.delete(toastId);
        dispatch({
            type: 'REMOVE_TOAST',
            toastId: toastId
        });
    }, TOAST_REMOVE_DELAY);
    toastTimeouts.set(toastId, timeout);
};
const reducer = (state, action)=>{
    switch(action.type){
        case 'ADD_TOAST':
            return {
                ...state,
                toasts: [
                    action.toast,
                    ...state.toasts
                ].slice(0, TOAST_LIMIT)
            };
        case 'UPDATE_TOAST':
            return {
                ...state,
                toasts: state.toasts.map((t)=>t.id === action.toast.id ? {
                        ...t,
                        ...action.toast
                    } : t)
            };
        case 'DISMISS_TOAST':
            {
                const { toastId } = action;
                // ! Side effects ! - This could be extracted into a dismissToast() action,
                // but I'll keep it here for simplicity
                if (toastId) {
                    addToRemoveQueue(toastId);
                } else {
                    state.toasts.forEach((toast)=>{
                        addToRemoveQueue(toast.id);
                    });
                }
                return {
                    ...state,
                    toasts: state.toasts.map((t)=>t.id === toastId || toastId === undefined ? {
                            ...t,
                            open: false
                        } : t)
                };
            }
        case 'REMOVE_TOAST':
            if (action.toastId === undefined) {
                return {
                    ...state,
                    toasts: []
                };
            }
            return {
                ...state,
                toasts: state.toasts.filter((t)=>t.id !== action.toastId)
            };
    }
};
const listeners = [];
let memoryState = {
    toasts: []
};
function dispatch(action) {
    memoryState = reducer(memoryState, action);
    listeners.forEach((listener)=>{
        listener(memoryState);
    });
}
function toast({ ...props }) {
    const id = genId();
    const update = (props)=>dispatch({
            type: 'UPDATE_TOAST',
            toast: {
                ...props,
                id
            }
        });
    const dismiss = ()=>dispatch({
            type: 'DISMISS_TOAST',
            toastId: id
        });
    dispatch({
        type: 'ADD_TOAST',
        toast: {
            ...props,
            id,
            open: true,
            onOpenChange: (open)=>{
                if (!open) dismiss();
            }
        }
    });
    return {
        id: id,
        dismiss,
        update
    };
}
function useToast() {
    const [state, setState] = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](memoryState);
    __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"](()=>{
        listeners.push(setState);
        return ()=>{
            const index = listeners.indexOf(setState);
            if (index > -1) {
                listeners.splice(index, 1);
            }
        };
    }, [
        state
    ]);
    return {
        ...state,
        toast,
        dismiss: (toastId)=>dispatch({
                type: 'DISMISS_TOAST',
                toastId
            })
    };
}
;
}),
"[project]/Downloads/vds-hub/vds-hub/lib/actions/data:36ff8d [app-ssr] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"60329d4b2588ebcfa01b27bc1c0a8771f083e66998":"signIn"},"Downloads/vds-hub/vds-hub/lib/actions/auth.ts",""] */ __turbopack_context__.s([
    "signIn",
    ()=>signIn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/vds-hub/vds-hub/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)");
"use turbopack no side effects";
;
var signIn = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createServerReference"])("60329d4b2588ebcfa01b27bc1c0a8771f083e66998", __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSourceMapURL"], "signIn"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYXV0aC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzZXJ2ZXJcIlxuXG5pbXBvcnQgeyBkYiB9IGZyb20gXCJAL2xpYi9kYlwiXG5pbXBvcnQgeyBoYXNoUGFzc3dvcmQsIGNvbXBhcmVQYXNzd29yZCwgc2V0QXV0aENvb2tpZSwgY2xlYXJBdXRoQ29va2llLCBnZXRBdXRoVXNlciB9IGZyb20gXCJAL2xpYi9hdXRoLXV0aWxzXCJcbmltcG9ydCB7IHNpZ25Ub2tlbiB9IGZyb20gXCJAL2xpYi9qd3RcIlxuaW1wb3J0IHsgcmV2YWxpZGF0ZVBhdGggfSBmcm9tIFwibmV4dC9jYWNoZVwiXG5pbXBvcnQgeyByZWRpcmVjdCB9IGZyb20gXCJuZXh0L25hdmlnYXRpb25cIlxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc2lnbkluKGVtYWlsOiBzdHJpbmcsIHBhc3N3b3JkOiBzdHJpbmcpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCB1c2VyID0gYXdhaXQgZGIudXNlci5maW5kVW5pcXVlKHtcbiAgICAgIHdoZXJlOiB7IGVtYWlsIH0sXG4gICAgICBpbmNsdWRlOiB7IHByb2ZpbGU6IHRydWUgfSxcbiAgICB9KVxuXG4gICAgaWYgKCF1c2VyKSB7XG4gICAgICByZXR1cm4geyBlcnJvcjogXCLQndC10LLQtdGA0L3Ri9C5IGVtYWlsINC40LvQuCDQv9Cw0YDQvtC70YxcIiB9XG4gICAgfVxuXG4gICAgY29uc3QgaXNWYWxpZCA9IGF3YWl0IGNvbXBhcmVQYXNzd29yZChwYXNzd29yZCwgdXNlci5wYXNzd29yZClcbiAgICBpZiAoIWlzVmFsaWQpIHtcbiAgICAgIHJldHVybiB7IGVycm9yOiBcItCd0LXQstC10YDQvdGL0LkgZW1haWwg0LjQu9C4INC/0LDRgNC+0LvRjFwiIH1cbiAgICB9XG5cbiAgICBjb25zdCB0b2tlbiA9IGF3YWl0IHNpZ25Ub2tlbih7XG4gICAgICB1c2VySWQ6IHVzZXIuaWQsXG4gICAgICBlbWFpbDogdXNlci5lbWFpbCxcbiAgICAgIHJvbGU6IHVzZXIucm9sZSxcbiAgICB9KVxuXG4gICAgYXdhaXQgc2V0QXV0aENvb2tpZSh0b2tlbilcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH1cbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiW3YwXSBTaWduIGluIGVycm9yOlwiLCBlcnJvcilcbiAgICByZXR1cm4geyBlcnJvcjogXCLQntGI0LjQsdC60LAg0LLRhdC+0LTQsFwiIH1cbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc2lnblVwKGVtYWlsOiBzdHJpbmcsIHBhc3N3b3JkOiBzdHJpbmcsIG5hbWU/OiBzdHJpbmcpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCBleGlzdGluZ1VzZXIgPSBhd2FpdCBkYi51c2VyLmZpbmRVbmlxdWUoe1xuICAgICAgd2hlcmU6IHsgZW1haWwgfSxcbiAgICB9KVxuXG4gICAgaWYgKGV4aXN0aW5nVXNlcikge1xuICAgICAgcmV0dXJuIHsgZXJyb3I6IFwi0J/QvtC70YzQt9C+0LLQsNGC0LXQu9GMINGBINGC0LDQutC40LwgZW1haWwg0YPQttC1INGB0YPRidC10YHRgtCy0YPQtdGCXCIgfVxuICAgIH1cblxuICAgIGNvbnN0IGhhc2hlZFBhc3N3b3JkID0gYXdhaXQgaGFzaFBhc3N3b3JkKHBhc3N3b3JkKVxuXG4gICAgY29uc3QgdXNlciA9IGF3YWl0IGRiLnVzZXIuY3JlYXRlKHtcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgZW1haWwsXG4gICAgICAgIHBhc3N3b3JkOiBoYXNoZWRQYXNzd29yZCxcbiAgICAgICAgbmFtZSxcbiAgICAgICAgcHJvZmlsZToge1xuICAgICAgICAgIGNyZWF0ZToge1xuICAgICAgICAgICAgYmFsYW5jZTogMCxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9KVxuXG4gICAgY29uc3QgdG9rZW4gPSBhd2FpdCBzaWduVG9rZW4oe1xuICAgICAgdXNlcklkOiB1c2VyLmlkLFxuICAgICAgZW1haWw6IHVzZXIuZW1haWwsXG4gICAgICByb2xlOiB1c2VyLnJvbGUsXG4gICAgfSlcblxuICAgIGF3YWl0IHNldEF1dGhDb29raWUodG9rZW4pXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihcIlt2MF0gU2lnbiB1cCBlcnJvcjpcIiwgZXJyb3IpXG4gICAgcmV0dXJuIHsgZXJyb3I6IFwi0J7RiNC40LHQutCwINGA0LXQs9C40YHRgtGA0LDRhtC40LhcIiB9XG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHNpZ25PdXQoKSB7XG4gIGF3YWl0IGNsZWFyQXV0aENvb2tpZSgpXG4gIHJldmFsaWRhdGVQYXRoKFwiL1wiLCBcImxheW91dFwiKVxuICByZWRpcmVjdChcIi9cIilcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFVzZXIoKSB7XG4gIGNvbnN0IGF1dGhVc2VyID0gYXdhaXQgZ2V0QXV0aFVzZXIoKVxuICBpZiAoIWF1dGhVc2VyKSByZXR1cm4gbnVsbFxuXG4gIGNvbnN0IHVzZXIgPSBhd2FpdCBkYi51c2VyLmZpbmRVbmlxdWUoe1xuICAgIHdoZXJlOiB7IGlkOiBhdXRoVXNlci51c2VySWQgfSxcbiAgICBpbmNsdWRlOiB7IHByb2ZpbGU6IHRydWUgfSxcbiAgfSlcblxuICByZXR1cm4gdXNlclxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0VXNlclByb2ZpbGUoKSB7XG4gIGNvbnN0IGF1dGhVc2VyID0gYXdhaXQgZ2V0QXV0aFVzZXIoKVxuICBpZiAoIWF1dGhVc2VyKSByZXR1cm4gbnVsbFxuXG4gIGNvbnN0IHByb2ZpbGUgPSBhd2FpdCBkYi5wcm9maWxlLmZpbmRVbmlxdWUoe1xuICAgIHdoZXJlOiB7IHVzZXJJZDogYXV0aFVzZXIudXNlcklkIH0sXG4gIH0pXG5cbiAgcmV0dXJuIHByb2ZpbGVcbn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiNlNBUXNCIn0=
}),
"[project]/Downloads/vds-hub/vds-hub/lib/actions/data:09b2bd [app-ssr] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"003d3d5d091f35b6ba99b84978e649b8c4fb8e2899":"signOut"},"Downloads/vds-hub/vds-hub/lib/actions/auth.ts",""] */ __turbopack_context__.s([
    "signOut",
    ()=>signOut
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/vds-hub/vds-hub/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)");
"use turbopack no side effects";
;
var signOut = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createServerReference"])("003d3d5d091f35b6ba99b84978e649b8c4fb8e2899", __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSourceMapURL"], "signOut"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYXV0aC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzZXJ2ZXJcIlxuXG5pbXBvcnQgeyBkYiB9IGZyb20gXCJAL2xpYi9kYlwiXG5pbXBvcnQgeyBoYXNoUGFzc3dvcmQsIGNvbXBhcmVQYXNzd29yZCwgc2V0QXV0aENvb2tpZSwgY2xlYXJBdXRoQ29va2llLCBnZXRBdXRoVXNlciB9IGZyb20gXCJAL2xpYi9hdXRoLXV0aWxzXCJcbmltcG9ydCB7IHNpZ25Ub2tlbiB9IGZyb20gXCJAL2xpYi9qd3RcIlxuaW1wb3J0IHsgcmV2YWxpZGF0ZVBhdGggfSBmcm9tIFwibmV4dC9jYWNoZVwiXG5pbXBvcnQgeyByZWRpcmVjdCB9IGZyb20gXCJuZXh0L25hdmlnYXRpb25cIlxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc2lnbkluKGVtYWlsOiBzdHJpbmcsIHBhc3N3b3JkOiBzdHJpbmcpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCB1c2VyID0gYXdhaXQgZGIudXNlci5maW5kVW5pcXVlKHtcbiAgICAgIHdoZXJlOiB7IGVtYWlsIH0sXG4gICAgICBpbmNsdWRlOiB7IHByb2ZpbGU6IHRydWUgfSxcbiAgICB9KVxuXG4gICAgaWYgKCF1c2VyKSB7XG4gICAgICByZXR1cm4geyBlcnJvcjogXCLQndC10LLQtdGA0L3Ri9C5IGVtYWlsINC40LvQuCDQv9Cw0YDQvtC70YxcIiB9XG4gICAgfVxuXG4gICAgY29uc3QgaXNWYWxpZCA9IGF3YWl0IGNvbXBhcmVQYXNzd29yZChwYXNzd29yZCwgdXNlci5wYXNzd29yZClcbiAgICBpZiAoIWlzVmFsaWQpIHtcbiAgICAgIHJldHVybiB7IGVycm9yOiBcItCd0LXQstC10YDQvdGL0LkgZW1haWwg0LjQu9C4INC/0LDRgNC+0LvRjFwiIH1cbiAgICB9XG5cbiAgICBjb25zdCB0b2tlbiA9IGF3YWl0IHNpZ25Ub2tlbih7XG4gICAgICB1c2VySWQ6IHVzZXIuaWQsXG4gICAgICBlbWFpbDogdXNlci5lbWFpbCxcbiAgICAgIHJvbGU6IHVzZXIucm9sZSxcbiAgICB9KVxuXG4gICAgYXdhaXQgc2V0QXV0aENvb2tpZSh0b2tlbilcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH1cbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiW3YwXSBTaWduIGluIGVycm9yOlwiLCBlcnJvcilcbiAgICByZXR1cm4geyBlcnJvcjogXCLQntGI0LjQsdC60LAg0LLRhdC+0LTQsFwiIH1cbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc2lnblVwKGVtYWlsOiBzdHJpbmcsIHBhc3N3b3JkOiBzdHJpbmcsIG5hbWU/OiBzdHJpbmcpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCBleGlzdGluZ1VzZXIgPSBhd2FpdCBkYi51c2VyLmZpbmRVbmlxdWUoe1xuICAgICAgd2hlcmU6IHsgZW1haWwgfSxcbiAgICB9KVxuXG4gICAgaWYgKGV4aXN0aW5nVXNlcikge1xuICAgICAgcmV0dXJuIHsgZXJyb3I6IFwi0J/QvtC70YzQt9C+0LLQsNGC0LXQu9GMINGBINGC0LDQutC40LwgZW1haWwg0YPQttC1INGB0YPRidC10YHRgtCy0YPQtdGCXCIgfVxuICAgIH1cblxuICAgIGNvbnN0IGhhc2hlZFBhc3N3b3JkID0gYXdhaXQgaGFzaFBhc3N3b3JkKHBhc3N3b3JkKVxuXG4gICAgY29uc3QgdXNlciA9IGF3YWl0IGRiLnVzZXIuY3JlYXRlKHtcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgZW1haWwsXG4gICAgICAgIHBhc3N3b3JkOiBoYXNoZWRQYXNzd29yZCxcbiAgICAgICAgbmFtZSxcbiAgICAgICAgcHJvZmlsZToge1xuICAgICAgICAgIGNyZWF0ZToge1xuICAgICAgICAgICAgYmFsYW5jZTogMCxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9KVxuXG4gICAgY29uc3QgdG9rZW4gPSBhd2FpdCBzaWduVG9rZW4oe1xuICAgICAgdXNlcklkOiB1c2VyLmlkLFxuICAgICAgZW1haWw6IHVzZXIuZW1haWwsXG4gICAgICByb2xlOiB1c2VyLnJvbGUsXG4gICAgfSlcblxuICAgIGF3YWl0IHNldEF1dGhDb29raWUodG9rZW4pXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihcIlt2MF0gU2lnbiB1cCBlcnJvcjpcIiwgZXJyb3IpXG4gICAgcmV0dXJuIHsgZXJyb3I6IFwi0J7RiNC40LHQutCwINGA0LXQs9C40YHRgtGA0LDRhtC40LhcIiB9XG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHNpZ25PdXQoKSB7XG4gIGF3YWl0IGNsZWFyQXV0aENvb2tpZSgpXG4gIHJldmFsaWRhdGVQYXRoKFwiL1wiLCBcImxheW91dFwiKVxuICByZWRpcmVjdChcIi9cIilcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFVzZXIoKSB7XG4gIGNvbnN0IGF1dGhVc2VyID0gYXdhaXQgZ2V0QXV0aFVzZXIoKVxuICBpZiAoIWF1dGhVc2VyKSByZXR1cm4gbnVsbFxuXG4gIGNvbnN0IHVzZXIgPSBhd2FpdCBkYi51c2VyLmZpbmRVbmlxdWUoe1xuICAgIHdoZXJlOiB7IGlkOiBhdXRoVXNlci51c2VySWQgfSxcbiAgICBpbmNsdWRlOiB7IHByb2ZpbGU6IHRydWUgfSxcbiAgfSlcblxuICByZXR1cm4gdXNlclxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0VXNlclByb2ZpbGUoKSB7XG4gIGNvbnN0IGF1dGhVc2VyID0gYXdhaXQgZ2V0QXV0aFVzZXIoKVxuICBpZiAoIWF1dGhVc2VyKSByZXR1cm4gbnVsbFxuXG4gIGNvbnN0IHByb2ZpbGUgPSBhd2FpdCBkYi5wcm9maWxlLmZpbmRVbmlxdWUoe1xuICAgIHdoZXJlOiB7IHVzZXJJZDogYXV0aFVzZXIudXNlcklkIH0sXG4gIH0pXG5cbiAgcmV0dXJuIHByb2ZpbGVcbn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOFNBNkVzQiJ9
}),
"[project]/Downloads/vds-hub/vds-hub/lib/actions/data:d52b83 [app-ssr] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"70e9d172b7b5e09121794a0b3624c2d1c3682f4041":"signUp"},"Downloads/vds-hub/vds-hub/lib/actions/auth.ts",""] */ __turbopack_context__.s([
    "signUp",
    ()=>signUp
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/vds-hub/vds-hub/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)");
"use turbopack no side effects";
;
var signUp = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createServerReference"])("70e9d172b7b5e09121794a0b3624c2d1c3682f4041", __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSourceMapURL"], "signUp"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYXV0aC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzZXJ2ZXJcIlxuXG5pbXBvcnQgeyBkYiB9IGZyb20gXCJAL2xpYi9kYlwiXG5pbXBvcnQgeyBoYXNoUGFzc3dvcmQsIGNvbXBhcmVQYXNzd29yZCwgc2V0QXV0aENvb2tpZSwgY2xlYXJBdXRoQ29va2llLCBnZXRBdXRoVXNlciB9IGZyb20gXCJAL2xpYi9hdXRoLXV0aWxzXCJcbmltcG9ydCB7IHNpZ25Ub2tlbiB9IGZyb20gXCJAL2xpYi9qd3RcIlxuaW1wb3J0IHsgcmV2YWxpZGF0ZVBhdGggfSBmcm9tIFwibmV4dC9jYWNoZVwiXG5pbXBvcnQgeyByZWRpcmVjdCB9IGZyb20gXCJuZXh0L25hdmlnYXRpb25cIlxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc2lnbkluKGVtYWlsOiBzdHJpbmcsIHBhc3N3b3JkOiBzdHJpbmcpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCB1c2VyID0gYXdhaXQgZGIudXNlci5maW5kVW5pcXVlKHtcbiAgICAgIHdoZXJlOiB7IGVtYWlsIH0sXG4gICAgICBpbmNsdWRlOiB7IHByb2ZpbGU6IHRydWUgfSxcbiAgICB9KVxuXG4gICAgaWYgKCF1c2VyKSB7XG4gICAgICByZXR1cm4geyBlcnJvcjogXCLQndC10LLQtdGA0L3Ri9C5IGVtYWlsINC40LvQuCDQv9Cw0YDQvtC70YxcIiB9XG4gICAgfVxuXG4gICAgY29uc3QgaXNWYWxpZCA9IGF3YWl0IGNvbXBhcmVQYXNzd29yZChwYXNzd29yZCwgdXNlci5wYXNzd29yZClcbiAgICBpZiAoIWlzVmFsaWQpIHtcbiAgICAgIHJldHVybiB7IGVycm9yOiBcItCd0LXQstC10YDQvdGL0LkgZW1haWwg0LjQu9C4INC/0LDRgNC+0LvRjFwiIH1cbiAgICB9XG5cbiAgICBjb25zdCB0b2tlbiA9IGF3YWl0IHNpZ25Ub2tlbih7XG4gICAgICB1c2VySWQ6IHVzZXIuaWQsXG4gICAgICBlbWFpbDogdXNlci5lbWFpbCxcbiAgICAgIHJvbGU6IHVzZXIucm9sZSxcbiAgICB9KVxuXG4gICAgYXdhaXQgc2V0QXV0aENvb2tpZSh0b2tlbilcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlIH1cbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiW3YwXSBTaWduIGluIGVycm9yOlwiLCBlcnJvcilcbiAgICByZXR1cm4geyBlcnJvcjogXCLQntGI0LjQsdC60LAg0LLRhdC+0LTQsFwiIH1cbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc2lnblVwKGVtYWlsOiBzdHJpbmcsIHBhc3N3b3JkOiBzdHJpbmcsIG5hbWU/OiBzdHJpbmcpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCBleGlzdGluZ1VzZXIgPSBhd2FpdCBkYi51c2VyLmZpbmRVbmlxdWUoe1xuICAgICAgd2hlcmU6IHsgZW1haWwgfSxcbiAgICB9KVxuXG4gICAgaWYgKGV4aXN0aW5nVXNlcikge1xuICAgICAgcmV0dXJuIHsgZXJyb3I6IFwi0J/QvtC70YzQt9C+0LLQsNGC0LXQu9GMINGBINGC0LDQutC40LwgZW1haWwg0YPQttC1INGB0YPRidC10YHRgtCy0YPQtdGCXCIgfVxuICAgIH1cblxuICAgIGNvbnN0IGhhc2hlZFBhc3N3b3JkID0gYXdhaXQgaGFzaFBhc3N3b3JkKHBhc3N3b3JkKVxuXG4gICAgY29uc3QgdXNlciA9IGF3YWl0IGRiLnVzZXIuY3JlYXRlKHtcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgZW1haWwsXG4gICAgICAgIHBhc3N3b3JkOiBoYXNoZWRQYXNzd29yZCxcbiAgICAgICAgbmFtZSxcbiAgICAgICAgcHJvZmlsZToge1xuICAgICAgICAgIGNyZWF0ZToge1xuICAgICAgICAgICAgYmFsYW5jZTogMCxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9KVxuXG4gICAgY29uc3QgdG9rZW4gPSBhd2FpdCBzaWduVG9rZW4oe1xuICAgICAgdXNlcklkOiB1c2VyLmlkLFxuICAgICAgZW1haWw6IHVzZXIuZW1haWwsXG4gICAgICByb2xlOiB1c2VyLnJvbGUsXG4gICAgfSlcblxuICAgIGF3YWl0IHNldEF1dGhDb29raWUodG9rZW4pXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSB9XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihcIlt2MF0gU2lnbiB1cCBlcnJvcjpcIiwgZXJyb3IpXG4gICAgcmV0dXJuIHsgZXJyb3I6IFwi0J7RiNC40LHQutCwINGA0LXQs9C40YHRgtGA0LDRhtC40LhcIiB9XG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHNpZ25PdXQoKSB7XG4gIGF3YWl0IGNsZWFyQXV0aENvb2tpZSgpXG4gIHJldmFsaWRhdGVQYXRoKFwiL1wiLCBcImxheW91dFwiKVxuICByZWRpcmVjdChcIi9cIilcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFVzZXIoKSB7XG4gIGNvbnN0IGF1dGhVc2VyID0gYXdhaXQgZ2V0QXV0aFVzZXIoKVxuICBpZiAoIWF1dGhVc2VyKSByZXR1cm4gbnVsbFxuXG4gIGNvbnN0IHVzZXIgPSBhd2FpdCBkYi51c2VyLmZpbmRVbmlxdWUoe1xuICAgIHdoZXJlOiB7IGlkOiBhdXRoVXNlci51c2VySWQgfSxcbiAgICBpbmNsdWRlOiB7IHByb2ZpbGU6IHRydWUgfSxcbiAgfSlcblxuICByZXR1cm4gdXNlclxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0VXNlclByb2ZpbGUoKSB7XG4gIGNvbnN0IGF1dGhVc2VyID0gYXdhaXQgZ2V0QXV0aFVzZXIoKVxuICBpZiAoIWF1dGhVc2VyKSByZXR1cm4gbnVsbFxuXG4gIGNvbnN0IHByb2ZpbGUgPSBhd2FpdCBkYi5wcm9maWxlLmZpbmRVbmlxdWUoe1xuICAgIHdoZXJlOiB7IHVzZXJJZDogYXV0aFVzZXIudXNlcklkIH0sXG4gIH0pXG5cbiAgcmV0dXJuIHByb2ZpbGVcbn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiNlNBc0NzQiJ9
}),
"[project]/Downloads/vds-hub/vds-hub/contexts/auth-context.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AuthProvider",
    ()=>AuthProvider,
    "useAuth",
    ()=>useAuth
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/vds-hub/vds-hub/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/vds-hub/vds-hub/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/vds-hub/vds-hub/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/vds-hub/vds-hub/hooks/use-toast.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$lib$2f$actions$2f$data$3a$36ff8d__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/Downloads/vds-hub/vds-hub/lib/actions/data:36ff8d [app-ssr] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$lib$2f$actions$2f$data$3a$09b2bd__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/Downloads/vds-hub/vds-hub/lib/actions/data:09b2bd [app-ssr] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$lib$2f$actions$2f$data$3a$d52b83__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/Downloads/vds-hub/vds-hub/lib/actions/data:d52b83 [app-ssr] (ecmascript) <text/javascript>");
"use client";
;
;
;
;
;
const AuthContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(undefined);
function AuthProvider({ children }) {
    const [user, setUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const { toast } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useToast"])();
    const refresh = async ()=>{
        try {
            const [u, p] = await Promise.all([
                fetch("/api/user").then((r)=>r.ok ? r.json() : null),
                fetch("/api/profile").then((r)=>r.ok ? r.json() : null)
            ]);
            if (!u) {
                setUser(null);
                return;
            }
            setUser({
                id: u.id,
                email: u.email,
                role: u.role,
                name: u.name ?? null,
                profile: p ?? null
            });
        } catch  {
            setUser(null);
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        ;
        (async ()=>{
            await refresh();
            setIsLoading(false);
        })();
    }, []);
    const login = async (email, password)=>{
        const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$lib$2f$actions$2f$data$3a$36ff8d__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["signIn"])(email, password);
        if (res?.error) {
            toast({
                title: "Ошибка входа",
                description: "Неверный email или пароль",
                variant: "destructive"
            });
            return false;
        }
        await refresh();
        toast({
            title: "Добро пожаловать!",
            description: "Вы успешно вошли в систему"
        });
        router.push("/dashboard");
        return true;
    };
    const register = async (email, password, fullName)=>{
        const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$lib$2f$actions$2f$data$3a$d52b83__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["signUp"])(email, password, fullName);
        if (res?.error) {
            toast({
                title: "Ошибка регистрации",
                description: res.error,
                variant: "destructive"
            });
            return false;
        }
        await refresh();
        toast({
            title: "Регистрация успешна!",
            description: "Добро пожаловать в VDS_HUB"
        });
        router.push("/dashboard");
        return true;
    };
    const logout = async ()=>{
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$lib$2f$actions$2f$data$3a$09b2bd__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["signOut"])();
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(AuthContext.Provider, {
        value: {
            user,
            login,
            register,
            logout,
            refresh,
            isLoading
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/Downloads/vds-hub/vds-hub/contexts/auth-context.tsx",
        lineNumber: 80,
        columnNumber: 5
    }, this);
}
function useAuth() {
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(AuthContext);
    if (context === undefined) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
}
}),
"[project]/Downloads/vds-hub/vds-hub/lib/storage.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/Downloads/vds-hub/vds-hub/contexts/data-context.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DataProvider",
    ()=>DataProvider,
    "useData",
    ()=>useData
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/vds-hub/vds-hub/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/vds-hub/vds-hub/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$lib$2f$storage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/vds-hub/vds-hub/lib/storage.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$contexts$2f$auth$2d$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/vds-hub/vds-hub/contexts/auth-context.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/vds-hub/vds-hub/hooks/use-toast.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
const DataContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(undefined);
function DataProvider({ children }) {
    const { user, updateUser } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$contexts$2f$auth$2d$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAuth"])();
    const { toast } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useToast"])();
    const [servers, setServers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [transactions, setTransactions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [promoCodes, setPromoCodes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [referrals, setReferrals] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [supportTickets, setSupportTickets] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const loadData = ()=>{
        setServers(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$lib$2f$storage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["storage"].get(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$lib$2f$storage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["KEYS"].SERVERS) || []);
        setTransactions(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$lib$2f$storage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["storage"].get(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$lib$2f$storage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["KEYS"].TRANSACTIONS) || []);
        setPromoCodes(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$lib$2f$storage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["storage"].get(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$lib$2f$storage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["KEYS"].PROMO_CODES) || []);
        setReferrals(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$lib$2f$storage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["storage"].get(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$lib$2f$storage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["KEYS"].REFERRALS) || []);
        setSupportTickets(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$lib$2f$storage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["storage"].get(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$lib$2f$storage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["KEYS"].SUPPORT_TICKETS) || []);
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        loadData();
    }, []);
    const createServer = (serverData)=>{
        if (!user) return;
        const newServer = {
            ...serverData,
            id: generateId(),
            userId: user.id,
            createdAt: new Date().toISOString()
        };
        const updatedServers = [
            ...servers,
            newServer
        ];
        setServers(updatedServers);
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$lib$2f$storage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["storage"].set(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$lib$2f$storage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["KEYS"].SERVERS, updatedServers);
        // Deduct from balance
        updateUser({
            balance: user.balance - serverData.price
        });
        // Add transaction
        addTransaction({
            userId: user.id,
            type: "purchase",
            amount: -serverData.price,
            status: "completed",
            description: `Purchased server: ${serverData.name}`
        });
        toast({
            title: "Сервер создан!",
            description: `Сервер ${serverData.name} успешно создан`
        });
    };
    const deleteServer = (serverId)=>{
        const updatedServers = servers.filter((s)=>s.id !== serverId);
        setServers(updatedServers);
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$lib$2f$storage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["storage"].set(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$lib$2f$storage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["KEYS"].SERVERS, updatedServers);
        toast({
            title: "Сервер удален",
            description: "Сервер успешно удален"
        });
    };
    const updateServer = (serverId, updates)=>{
        const updatedServers = servers.map((s)=>s.id === serverId ? {
                ...s,
                ...updates
            } : s);
        setServers(updatedServers);
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$lib$2f$storage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["storage"].set(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$lib$2f$storage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["KEYS"].SERVERS, updatedServers);
    };
    const addTransaction = (transactionData)=>{
        const newTransaction = {
            ...transactionData,
            id: generateId(),
            createdAt: new Date().toISOString()
        };
        const updatedTransactions = [
            ...transactions,
            newTransaction
        ];
        setTransactions(updatedTransactions);
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$lib$2f$storage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["storage"].set(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$lib$2f$storage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["KEYS"].TRANSACTIONS, updatedTransactions);
        // Handle referral commission
        if (transactionData.type === "topup" && transactionData.status === "completed" && user) {
            const userReferrals = referrals.filter((r)=>r.referredId === user.id);
            if (userReferrals.length > 0) {
                const commission = transactionData.amount * 0.1;
                const referral = userReferrals[0];
                // Update referral earnings
                const updatedReferrals = referrals.map((r)=>r.id === referral.id ? {
                        ...r,
                        earnings: r.earnings + commission
                    } : r);
                setReferrals(updatedReferrals);
                __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$lib$2f$storage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["storage"].set(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$lib$2f$storage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["KEYS"].REFERRALS, updatedReferrals);
            }
        }
    };
    const createPromoCode = (promoCodeData)=>{
        const newPromoCode = {
            ...promoCodeData,
            id: generateId(),
            currentUses: 0
        };
        const updatedPromoCodes = [
            ...promoCodes,
            newPromoCode
        ];
        setPromoCodes(updatedPromoCodes);
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$lib$2f$storage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["storage"].set(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$lib$2f$storage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["KEYS"].PROMO_CODES, updatedPromoCodes);
        toast({
            title: "Промокод создан",
            description: `Промокод ${promoCodeData.code} успешно создан`
        });
    };
    const applyPromoCode = (code, amount)=>{
        const promoCode = promoCodes.find((p)=>p.code === code && p.active && p.currentUses < p.maxUses && new Date(p.expiresAt) > new Date());
        if (!promoCode) {
            toast({
                title: "Ошибка",
                description: "Промокод недействителен или истек",
                variant: "destructive"
            });
            return amount;
        }
        // Update promo code usage
        const updatedPromoCodes = promoCodes.map((p)=>p.id === promoCode.id ? {
                ...p,
                currentUses: p.currentUses + 1
            } : p);
        setPromoCodes(updatedPromoCodes);
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$lib$2f$storage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["storage"].set(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$lib$2f$storage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["KEYS"].PROMO_CODES, updatedPromoCodes);
        const discount = promoCode.type === "percentage" ? amount * (promoCode.discount / 100) : promoCode.discount;
        toast({
            title: "Промокод применен!",
            description: `Скидка: ${discount.toFixed(2)}$`
        });
        return amount - discount;
    };
    const createSupportTicket = (ticketData)=>{
        if (!user) return;
        const newTicket = {
            ...ticketData,
            id: generateId(),
            userId: user.id,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
        };
        const updatedTickets = [
            ...supportTickets,
            newTicket
        ];
        setSupportTickets(updatedTickets);
        __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$lib$2f$storage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["storage"].set(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$lib$2f$storage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["KEYS"].SUPPORT_TICKETS, updatedTickets);
        toast({
            title: "Тикет создан",
            description: "Ваш запрос отправлен в поддержку"
        });
    };
    const refreshData = ()=>{
        loadData();
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(DataContext.Provider, {
        value: {
            servers,
            transactions,
            promoCodes,
            referrals,
            supportTickets,
            createServer,
            deleteServer,
            updateServer,
            addTransaction,
            createPromoCode,
            applyPromoCode,
            createSupportTicket,
            refreshData
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/Downloads/vds-hub/vds-hub/contexts/data-context.tsx",
        lineNumber: 199,
        columnNumber: 5
    }, this);
}
function useData() {
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(DataContext);
    if (context === undefined) {
        throw new Error("useData must be used within a DataProvider");
    }
    return context;
}
function generateId() {
    return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}
}),
"[project]/Downloads/vds-hub/vds-hub/contexts/currency-context.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CurrencyProvider",
    ()=>CurrencyProvider,
    "useCurrency",
    ()=>useCurrency
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/vds-hub/vds-hub/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/vds-hub/vds-hub/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
const CurrencyContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(undefined);
function CurrencyProvider({ children }) {
    const currency = "USD";
    const setCurrency = (newCurrency)=>{
    // No-op, always USD
    };
    const convertPrice = (priceUSD)=>{
        return priceUSD;
    };
    const formatPrice = (priceUSD)=>{
        return `$${priceUSD.toFixed(2)}`;
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(CurrencyContext.Provider, {
        value: {
            currency,
            setCurrency,
            formatPrice,
            convertPrice
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/Downloads/vds-hub/vds-hub/contexts/currency-context.tsx",
        lineNumber: 32,
        columnNumber: 5
    }, this);
}
function useCurrency() {
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(CurrencyContext);
    if (!context) {
        throw new Error("useCurrency must be used within CurrencyProvider");
    }
    return context;
}
}),
"[project]/Downloads/vds-hub/vds-hub/lib/utils.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/vds-hub/vds-hub/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/vds-hub/vds-hub/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-ssr] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
}),
"[project]/Downloads/vds-hub/vds-hub/components/ui/toast.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Toast",
    ()=>Toast,
    "ToastAction",
    ()=>ToastAction,
    "ToastClose",
    ()=>ToastClose,
    "ToastDescription",
    ()=>ToastDescription,
    "ToastProvider",
    ()=>ToastProvider,
    "ToastTitle",
    ()=>ToastTitle,
    "ToastViewport",
    ()=>ToastViewport
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/vds-hub/vds-hub/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/vds-hub/vds-hub/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/vds-hub/vds-hub/node_modules/@radix-ui/react-toast/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/vds-hub/vds-hub/node_modules/class-variance-authority/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/Downloads/vds-hub/vds-hub/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/vds-hub/vds-hub/lib/utils.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
const ToastProvider = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Provider"];
const ToastViewport = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Viewport"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Downloads/vds-hub/vds-hub/components/ui/toast.tsx",
        lineNumber: 16,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
ToastViewport.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Viewport"].displayName;
const toastVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cva"])('group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full', {
    variants: {
        variant: {
            default: 'border bg-background text-foreground',
            destructive: 'destructive group border-destructive bg-destructive text-destructive-foreground'
        }
    },
    defaultVariants: {
        variant: 'default'
    }
});
const Toast = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, variant, ...props }, ref)=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Root"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])(toastVariants({
            variant
        }), className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Downloads/vds-hub/vds-hub/components/ui/toast.tsx",
        lineNumber: 49,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
});
Toast.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Root"].displayName;
const ToastAction = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Action"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Downloads/vds-hub/vds-hub/components/ui/toast.tsx",
        lineNumber: 62,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
ToastAction.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Action"].displayName;
const ToastClose = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Close"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600', className),
        "toast-close": "",
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
            className: "h-4 w-4"
        }, void 0, false, {
            fileName: "[project]/Downloads/vds-hub/vds-hub/components/ui/toast.tsx",
            lineNumber: 86,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/Downloads/vds-hub/vds-hub/components/ui/toast.tsx",
        lineNumber: 77,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
ToastClose.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Close"].displayName;
const ToastTitle = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Title"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('text-sm font-semibold', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Downloads/vds-hub/vds-hub/components/ui/toast.tsx",
        lineNumber: 95,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
ToastTitle.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Title"].displayName;
const ToastDescription = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Description"], {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('text-sm opacity-90', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/Downloads/vds-hub/vds-hub/components/ui/toast.tsx",
        lineNumber: 107,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
ToastDescription.displayName = __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Description"].displayName;
;
}),
"[project]/Downloads/vds-hub/vds-hub/components/ui/toaster.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Toaster",
    ()=>Toaster
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/vds-hub/vds-hub/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/vds-hub/vds-hub/hooks/use-toast.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$components$2f$ui$2f$toast$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/vds-hub/vds-hub/components/ui/toast.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
function Toaster() {
    const { toasts } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useToast"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$components$2f$ui$2f$toast$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ToastProvider"], {
        children: [
            toasts.map(function({ id, title, description, action, ...props }) {
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$components$2f$ui$2f$toast$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Toast"], {
                    ...props,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid gap-1",
                            children: [
                                title && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$components$2f$ui$2f$toast$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ToastTitle"], {
                                    children: title
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/vds-hub/vds-hub/components/ui/toaster.tsx",
                                    lineNumber: 22,
                                    columnNumber: 25
                                }, this),
                                description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$components$2f$ui$2f$toast$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ToastDescription"], {
                                    children: description
                                }, void 0, false, {
                                    fileName: "[project]/Downloads/vds-hub/vds-hub/components/ui/toaster.tsx",
                                    lineNumber: 24,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Downloads/vds-hub/vds-hub/components/ui/toaster.tsx",
                            lineNumber: 21,
                            columnNumber: 13
                        }, this),
                        action,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$components$2f$ui$2f$toast$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ToastClose"], {}, void 0, false, {
                            fileName: "[project]/Downloads/vds-hub/vds-hub/components/ui/toaster.tsx",
                            lineNumber: 28,
                            columnNumber: 13
                        }, this)
                    ]
                }, id, true, {
                    fileName: "[project]/Downloads/vds-hub/vds-hub/components/ui/toaster.tsx",
                    lineNumber: 20,
                    columnNumber: 11
                }, this);
            }),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$components$2f$ui$2f$toast$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ToastViewport"], {}, void 0, false, {
                fileName: "[project]/Downloads/vds-hub/vds-hub/components/ui/toaster.tsx",
                lineNumber: 32,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Downloads/vds-hub/vds-hub/components/ui/toaster.tsx",
        lineNumber: 17,
        columnNumber: 5
    }, this);
}
}),
"[project]/Downloads/vds-hub/vds-hub/contexts/language-context.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LanguageProvider",
    ()=>LanguageProvider,
    "useLanguage",
    ()=>useLanguage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/vds-hub/vds-hub/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/vds-hub/vds-hub/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
const LanguageContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(undefined);
const translations = {
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
        "hero.uptime": "99.9% Uptime",
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
        "login.password": "Password",
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
        "servers.billingPeriod": "Период оплаты",
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
        "servers.delete": "Удалить",
        "servers.confirmDelete": "Вы уверены, что хотите удалить этот сервер?",
        "servers.extendInfo": "Функция продления будет доступна в ближайшее время",
        "plan.cpu": "CPU",
        "plan.bandwidth": "Трафик",
        "common.cancel": "Отмена",
        "common.creating": "Создание...",
        "common.save": "Сохранить",
        "common.delete": "Удалить",
        "common.edit": "Редактировать"
    },
    en: {
        // Header
        "header.login": "Login",
        "header.register": "Register",
        "header.dashboard": "Dashboard",
        "header.ru": "Русский",
        "header.en": "English",
        // Hero Section
        "hero.badge": "Premium VDS/VPS Hosting",
        "hero.title1": "Virtual Servers",
        "hero.title2": "of the New Generation",
        "hero.subtitle": "Powerful VDS with instant deployment, flexible billing, and professional 24/7 support",
        "hero.createServer": "Create Server",
        "hero.register": "Register",
        "hero.uptime": "99.9% Uptime",
        "hero.instantDeploy": "Instant Deployment",
        "hero.ddosProtection": "DDoS Protection",
        // Features
        "features.instantDeploy.title": "Instant Deployment",
        "features.instantDeploy.desc": "Your server will be ready in seconds after payment",
        "features.ddosProtection.title": "DDoS Protection",
        "features.ddosProtection.desc": "Built-in DDoS protection on all plans",
        "features.hourlyBilling.title": "Hourly Billing",
        "features.hourlyBilling.desc": "Pay only for actual server usage time",
        "features.support247.title": "24/7 Support",
        "features.support247.desc": "Our team is always ready to help you anytime",
        // Server Configurator
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
        // Sidebar
        "sidebar.virtualServer": "Virtual Server",
        "sidebar.myServices": "My Services",
        "sidebar.support": "Support",
        "sidebar.referrals": "Referral System",
        // Server Plan Card
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
        // Auth Pages
        "auth.backToHome": "Back to Home",
        "auth.createAccount": "Create Account",
        "auth.joinToday": "Join VDS_HUB today",
        "auth.welcome": "Welcome Back",
        "auth.loginSubtitle": "Sign in to your VDS_HUB account",
        "auth.haveAccount": "Already have an account?",
        "auth.noAccount": "Don't have an account?",
        "auth.login": "Sign In",
        "auth.register": "Sign Up",
        // Register Form
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
        // Login Form
        "login.email": "Email",
        "login.password": "Password",
        "login.rememberMe": "Remember me",
        "login.forgotPassword": "Forgot password?",
        "login.captcha": "Bot Protection (Cloudflare Turnstile)",
        "login.loginButton": "Sign In",
        "login.loggingIn": "Signing in...",
        "login.error": "Login error",
        // Dashboard
        "dashboard.title": "Dashboard",
        "dashboard.welcome": "Welcome to VDS_HUB",
        "dashboard.topUp": "Top Up",
        "dashboard.profile": "Profile",
        "dashboard.billing": "Billing",
        "dashboard.referrals": "Referral System",
        "dashboard.adminPanel": "Admin Panel",
        "dashboard.logout": "Logout",
        // Stats Cards
        "stats.activeServers": "Active Servers",
        "stats.balance": "Balance",
        "stats.usage": "Usage",
        "stats.referralIncome": "Referral Income",
        "stats.perMonth": "per month",
        "stats.lastTopUp": "Last top-up",
        "stats.avgLoad": "Average load",
        "stats.perWeek": "per week",
        // Servers List
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
        "servers.billingPeriod": "Billing Period",
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
        "plan.cpu": "CPU",
        "plan.bandwidth": "Bandwidth",
        "common.cancel": "Cancel",
        "common.creating": "Creating...",
        "common.save": "Save",
        "common.delete": "Delete",
        "common.edit": "Edit"
    }
};
function LanguageProvider({ children }) {
    const [language, setLanguageState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("ru");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const saved = localStorage.getItem("language");
        if (saved && (saved === "ru" || saved === "en")) {
            setLanguageState(saved);
        }
    }, []);
    const setLanguage = (lang)=>{
        setLanguageState(lang);
        localStorage.setItem("language", lang);
    };
    const t = (key)=>{
        return translations[language][key] || key;
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(LanguageContext.Provider, {
        value: {
            language,
            setLanguage,
            t
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/Downloads/vds-hub/vds-hub/contexts/language-context.tsx",
        lineNumber: 373,
        columnNumber: 10
    }, this);
}
function useLanguage() {
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$vds$2d$hub$2f$vds$2d$hub$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(LanguageContext);
    if (!context) {
        throw new Error("useLanguage must be used within LanguageProvider");
    }
    return context;
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__f65bad42._.js.map
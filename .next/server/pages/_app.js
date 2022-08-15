(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 722:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "header_container__wIxGG",
	"rightBox": "header_rightBox__w82ZM",
	"connectButton": "header_connectButton__LtG7w",
	"walletAddr": "header_walletAddr__Aj0wN",
	"status": "header_status__7CfIJ",
	"navContainer": "header_navContainer__PpCk5",
	"navItem": "header_navItem__ryzmP"
};


/***/ }),

/***/ 876:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "@reduxjs/toolkit"
var toolkit_ = __webpack_require__(184);
// EXTERNAL MODULE: external "@reduxjs/toolkit/query/react"
var react_ = __webpack_require__(335);
;// CONCATENATED MODULE: ./redux/api-query/blogsApi.ts

const blogsApi = (0,react_.createApi)({
    reducerPath: "blogsApi",
    baseQuery: (0,react_.fetchBaseQuery)({
        baseUrl: "http://localhost:1337/api"
    }),
    tagTypes: [
        "Blog"
    ],
    endpoints: (builder)=>({
            blogs: builder.query({
                query: ()=>"/blogs"
            }),
            blog: builder.query({
                query: (id)=>`/blog/${id}`
            }),
            addBlog: builder.mutation({
                query: (blog)=>({
                        url: "/blog",
                        method: "POST",
                        body: blog
                    })
            }),
            updateBlog: builder.mutation({
                query: ({ blogId , ...rest })=>({
                        url: `/blogs/${blogId}`,
                        method: "PUT",
                        body: rest
                    })
            }),
            deleteBlog: builder.mutation({
                query: (id)=>({
                        url: `/blogs/${id}`,
                        method: "DELETE"
                    })
            })
        })
});
const { useBlogsQuery , useBlogQuery , useAddBlogMutation , useUpdateBlogMutation , useDeleteBlogMutation ,  } = blogsApi;

;// CONCATENATED MODULE: ./redux/redux-toolkit/counterSlice.ts

const initialState = {
    counterValue: 0
};
const counterSlice = (0,toolkit_.createSlice)({
    name: "counter",
    initialState,
    reducers: {
        increment: (state, action)=>{
            state.counterValue += action.payload;
        },
        decrement: (state, action)=>{
            state.counterValue -= action.payload;
        },
        incrementByAmount: (state, action)=>{
            state.counterValue += action.payload;
        }
    }
});
// Action creators are generated for each case reducer function
const { increment , decrement , incrementByAmount  } = counterSlice.actions;
/* harmony default export */ const redux_toolkit_counterSlice = (counterSlice.reducer);

// EXTERNAL MODULE: ./redux/redux-toolkit/adminSlice.ts
var adminSlice = __webpack_require__(104);
// EXTERNAL MODULE: ./redux/redux-toolkit/userSlice.ts
var userSlice = __webpack_require__(595);
;// CONCATENATED MODULE: ./redux/store.ts





const store = (0,toolkit_.configureStore)({
    reducer: {
        counter: redux_toolkit_counterSlice,
        admin: adminSlice/* default */.ZP,
        user: userSlice/* default */.ZP,
        [blogsApi.reducerPath]: blogsApi.reducer
    }
});

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(22);
// EXTERNAL MODULE: external "semantic-ui-react"
var external_semantic_ui_react_ = __webpack_require__(831);
// EXTERNAL MODULE: ./styles/components/header.module.css
var header_module = __webpack_require__(722);
var header_module_default = /*#__PURE__*/__webpack_require__.n(header_module);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(853);
;// CONCATENATED MODULE: ./components/header.tsx








const HeaderComponent = ()=>{
    const router = (0,router_.useRouter)();
    const dispatch = (0,external_react_redux_.useDispatch)();
    (0,external_react_.useEffect)(()=>{
        if (false) {}
    }, []); // eslint-disable-line
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (header_module_default()).container,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                onClick: ()=>router.push("/")
                ,
                children: "Chatbot"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (header_module_default()).rightBox,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (header_module_default()).navContainer,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: (header_module_default()).navItem,
                                onClick: ()=>router.push("/")
                                ,
                                children: "Home"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: (header_module_default()).navItem,
                                onClick: ()=>router.push("/login")
                                ,
                                children: "Login"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: (header_module_default()).navItem,
                                onClick: ()=>router.push("/register")
                                ,
                                children: "Register"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: (header_module_default()).navItem,
                                onClick: ()=>router.push("/feedback")
                                ,
                                children: "Feedback"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: (header_module_default()).navItem,
                                onClick: ()=>router.push("/help")
                                ,
                                children: "Help"
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(external_semantic_ui_react_.Button, {
                        circular: true,
                        inverted: true,
                        color: "green",
                        size: "medium",
                        onClick: ()=>router.push("/adminLogin")
                        ,
                        children: "Admin"
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const header = (HeaderComponent);

;// CONCATENATED MODULE: ./pages/_app.tsx






function MyApp({ Component , pageProps  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_redux_.Provider, {
        store: store,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(header, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                ...pageProps
            })
        ]
    });
}
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 104:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Xd": () => (/* binding */ updateAdminToken),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export adminSlice */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const initialState = {
    data: {
        accessToken: "",
        refreshToken: ""
    }
};
const adminSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "admin",
    initialState,
    reducers: {
        updateAdminToken: (state, action)=>{
            state.data = action.payload.data;
        }
    }
});
// Action creators are generated for each case reducer function
const { updateAdminToken  } = adminSlice.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (adminSlice.reducer);


/***/ }),

/***/ 595:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Rj": () => (/* binding */ updateUserToken),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export userSlice */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const initialState = {
    data: {
        accessToken: "",
        refreshToken: ""
    }
};
const userSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "user",
    initialState,
    reducers: {
        updateUserToken: (state, action)=>{
            state.data = action.payload.data;
        }
    }
});
// Action creators are generated for each case reducer function
const { updateUserToken  } = userSlice.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (userSlice.reducer);


/***/ }),

/***/ 184:
/***/ ((module) => {

"use strict";
module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ 335:
/***/ ((module) => {

"use strict";
module.exports = require("@reduxjs/toolkit/query/react");

/***/ }),

/***/ 853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 22:
/***/ ((module) => {

"use strict";
module.exports = require("react-redux");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 831:
/***/ ((module) => {

"use strict";
module.exports = require("semantic-ui-react");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(876));
module.exports = __webpack_exports__;

})();
"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/tweet/[id]",{

/***/ "./pages/tweet/[id].tsx":
/*!******************************!*\
  !*** ./pages/tweet/[id].tsx ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swr */ \"./node_modules/swr/dist/index.mjs\");\nvar _this = undefined;\n\n\n\nvar _s = $RefreshSig$();\nvar ItemDetail = function() {\n    var ref, ref1, ref2, ref3;\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    var ref4 = (0,swr__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(router.query.id ? \"/api/tweet/\".concat(router.query.id) : null), data = ref4.data, error = ref4.error;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"px-4 py-4\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mb-8 \",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"h-20 bg-slate-300 flex items-center justify-center font-bold text-3xl \",\n                        children: \"Tweet\"\n                    }, void 0, false, {\n                        fileName: \"/Users/hun2/Downloads/nextjs-prisma-typescript-tailwind-blueprint/pages/tweet/[id].tsx\",\n                        lineNumber: 16,\n                        columnNumber: 11\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-col justify-center items-center\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex cursor-pointer py-3 border-t border-b items-center space-x-3\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"w-12 h-12 rounded-full bg-slate-100\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/hun2/Downloads/nextjs-prisma-typescript-tailwind-blueprint/pages/tweet/[id].tsx\",\n                                        lineNumber: 22,\n                                        columnNumber: 13\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                className: \"text-sm font-medium text-gray-700\",\n                                                children: data === null || data === void 0 ? void 0 : (ref = data.tweet) === null || ref === void 0 ? void 0 : (ref1 = ref.user) === null || ref1 === void 0 ? void 0 : ref1.name\n                                            }, void 0, false, {\n                                                fileName: \"/Users/hun2/Downloads/nextjs-prisma-typescript-tailwind-blueprint/pages/tweet/[id].tsx\",\n                                                lineNumber: 24,\n                                                columnNumber: 15\n                                            }, _this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                className: \"text-xs font-medium cursor-pointer text-gray-500\",\n                                                children: \"View profile \\u2192\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/hun2/Downloads/nextjs-prisma-typescript-tailwind-blueprint/pages/tweet/[id].tsx\",\n                                                lineNumber: 27,\n                                                columnNumber: 17\n                                            }, _this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/hun2/Downloads/nextjs-prisma-typescript-tailwind-blueprint/pages/tweet/[id].tsx\",\n                                        lineNumber: 23,\n                                        columnNumber: 13\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/hun2/Downloads/nextjs-prisma-typescript-tailwind-blueprint/pages/tweet/[id].tsx\",\n                                lineNumber: 21,\n                                columnNumber: 13\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"mt-5 flex\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                        className: \"text-3xl font-bold text-gray-900\",\n                                        children: data === null || data === void 0 ? void 0 : (ref2 = data.tweet) === null || ref2 === void 0 ? void 0 : ref2.name\n                                    }, void 0, false, {\n                                        fileName: \"/Users/hun2/Downloads/nextjs-prisma-typescript-tailwind-blueprint/pages/tweet/[id].tsx\",\n                                        lineNumber: 34,\n                                        columnNumber: 13\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \" my-6 text-gray-700\",\n                                        children: data === null || data === void 0 ? void 0 : (ref3 = data.tweet) === null || ref3 === void 0 ? void 0 : ref3.content\n                                    }, void 0, false, {\n                                        fileName: \"/Users/hun2/Downloads/nextjs-prisma-typescript-tailwind-blueprint/pages/tweet/[id].tsx\",\n                                        lineNumber: 37,\n                                        columnNumber: 13\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"flex items-center justify-between space-x-2\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            className: \"p-3 rounded-md flex items-center justify-center text-gray-400 hover:bg-gray-100 hover:text-gray-500\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                                className: \"h-6 w-6 \",\n                                                xmlns: \"http://www.w3.org/2000/svg\",\n                                                fill: \"none\",\n                                                viewBox: \"0 0 24 24\",\n                                                stroke: \"currentColor\",\n                                                \"aria-hidden\": \"true\",\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                                    strokeLinecap: \"round\",\n                                                    strokeLinejoin: \"round\",\n                                                    strokeWidth: \"2\",\n                                                    d: \"M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/hun2/Downloads/nextjs-prisma-typescript-tailwind-blueprint/pages/tweet/[id].tsx\",\n                                                    lineNumber: 48,\n                                                    columnNumber: 19\n                                                }, _this)\n                                            }, void 0, false, {\n                                                fileName: \"/Users/hun2/Downloads/nextjs-prisma-typescript-tailwind-blueprint/pages/tweet/[id].tsx\",\n                                                lineNumber: 40,\n                                                columnNumber: 17\n                                            }, _this)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/hun2/Downloads/nextjs-prisma-typescript-tailwind-blueprint/pages/tweet/[id].tsx\",\n                                            lineNumber: 39,\n                                            columnNumber: 15\n                                        }, _this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/hun2/Downloads/nextjs-prisma-typescript-tailwind-blueprint/pages/tweet/[id].tsx\",\n                                        lineNumber: 38,\n                                        columnNumber: 13\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/hun2/Downloads/nextjs-prisma-typescript-tailwind-blueprint/pages/tweet/[id].tsx\",\n                                lineNumber: 33,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/hun2/Downloads/nextjs-prisma-typescript-tailwind-blueprint/pages/tweet/[id].tsx\",\n                        lineNumber: 19,\n                        columnNumber: 13\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/hun2/Downloads/nextjs-prisma-typescript-tailwind-blueprint/pages/tweet/[id].tsx\",\n                lineNumber: 15,\n                columnNumber: 9\n            }, _this)\n        }, void 0, false, {\n            fileName: \"/Users/hun2/Downloads/nextjs-prisma-typescript-tailwind-blueprint/pages/tweet/[id].tsx\",\n            lineNumber: 14,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/hun2/Downloads/nextjs-prisma-typescript-tailwind-blueprint/pages/tweet/[id].tsx\",\n        lineNumber: 13,\n        columnNumber: 5\n    }, _this);\n};\n_s(ItemDetail, \"F2OQGCTB9lgwThKfzWI7sczFgbA=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter,\n        swr__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n    ];\n});\n_c = ItemDetail;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ItemDetail);\nvar _c;\n$RefreshReg$(_c, \"ItemDetail\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SDs7Ozs7eURBQy9IOzs7OztxREFDRTs7Ozs7aURBQ0M7Ozs7OzZDQUNMOzs7Ozs7cUNBQ0Y7Ozs7Ozs2QkFDRTs7Ozs7O3FCQUdKOzs7OztpQkFFRjs7Ozs7YUFDRixDQUNOO0NBQ0g7R0E1REsxQixVQUFVOztRQUNDRixrREFBUztRQUNBQywyQ0FBTTs7O0FBRjFCQyxLQUFBQSxVQUFVO0FBNkRoQiwrREFBZUEsVUFBVSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3R3ZWV0L1tpZF0udHN4P2YzZDIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBOZXh0UGFnZSB9IGZyb20gXCJuZXh0XCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCB1c2VTV1IgZnJvbSBcInN3clwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuXG5jb25zdCBJdGVtRGV0YWlsOiBOZXh0UGFnZSA9ICgpID0+IHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IHVzZVNXUihcbiAgICByb3V0ZXIucXVlcnkuaWQgPyBgL2FwaS90d2VldC8ke3JvdXRlci5xdWVyeS5pZH1gIDogbnVsbFxuICApO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHgtNCAgcHktNFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTggXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoLTIwIGJnLXNsYXRlLTMwMCBmbGV4ICBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgZm9udC1ib2xkIHRleHQtM3hsIFwiPlxuICAgICAgICAgICAgVHdlZXQgXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXJcIj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGN1cnNvci1wb2ludGVyIHB5LTMgYm9yZGVyLXQgYm9yZGVyLWIgaXRlbXMtY2VudGVyIHNwYWNlLXgtM1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTEyIGgtMTIgcm91bmRlZC1mdWxsIGJnLXNsYXRlLTEwMFwiIC8+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIGZvbnQtbWVkaXVtIHRleHQtZ3JheS03MDBcIj5cbiAgICAgICAgICAgICAgICB7ZGF0YT8udHdlZXQ/LnVzZXI/Lm5hbWV9XG4gICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJ0ZXh0LXhzIGZvbnQtbWVkaXVtIGN1cnNvci1wb2ludGVyIHRleHQtZ3JheS01MDBcIj5cbiAgICAgICAgICAgICAgICAgIFZpZXcgcHJvZmlsZSAmcmFycjtcbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtNSBmbGV4XCI+XG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC0zeGwgZm9udC1ib2xkIHRleHQtZ3JheS05MDBcIj5cbiAgICAgICAgICAgICAge2RhdGE/LnR3ZWV0Py5uYW1lfVxuICAgICAgICAgICAgPC9oMT5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIiBteS02IHRleHQtZ3JheS03MDBcIj57ZGF0YT8udHdlZXQ/LmNvbnRlbnR9PC9wPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gc3BhY2UteC0yXCI+XG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwicC0zIHJvdW5kZWQtbWQgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgdGV4dC1ncmF5LTQwMCBob3ZlcjpiZy1ncmF5LTEwMCBob3Zlcjp0ZXh0LWdyYXktNTAwXCI+XG4gICAgICAgICAgICAgICAgPHN2Z1xuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaC02IHctNiBcIlxuICAgICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICAgICAgICAgICAgICBmaWxsPVwibm9uZVwiXG4gICAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcbiAgICAgICAgICAgICAgICAgIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgICAgICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgICAgIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiXG4gICAgICAgICAgICAgICAgICAgIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIlxuICAgICAgICAgICAgICAgICAgICBzdHJva2VXaWR0aD1cIjJcIlxuICAgICAgICAgICAgICAgICAgICBkPVwiTTQuMzE4IDYuMzE4YTQuNSA0LjUgMCAwMDAgNi4zNjRMMTIgMjAuMzY0bDcuNjgyLTcuNjgyYTQuNSA0LjUgMCAwMC02LjM2NC02LjM2NEwxMiA3LjYzNmwtMS4zMTgtMS4zMThhNC41IDQuNSAwIDAwLTYuMzY0IDB6XCJcbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgIFxuICAgICAgICAgIFxuICAgICAgICA8L2Rpdj5cbiAgICBcbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcbmV4cG9ydCBkZWZhdWx0IEl0ZW1EZXRhaWw7Il0sIm5hbWVzIjpbInVzZVJvdXRlciIsInVzZVNXUiIsIkl0ZW1EZXRhaWwiLCJkYXRhIiwicm91dGVyIiwicXVlcnkiLCJpZCIsImVycm9yIiwiZGl2IiwiY2xhc3NOYW1lIiwicCIsInR3ZWV0IiwidXNlciIsIm5hbWUiLCJhIiwiaDEiLCJjb250ZW50IiwiYnV0dG9uIiwic3ZnIiwieG1sbnMiLCJmaWxsIiwidmlld0JveCIsInN0cm9rZSIsImFyaWEtaGlkZGVuIiwicGF0aCIsInN0cm9rZUxpbmVjYXAiLCJzdHJva2VMaW5lam9pbiIsInN0cm9rZVdpZHRoIiwiZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/tweet/[id].tsx\n");

/***/ })

});
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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swr */ \"./node_modules/swr/dist/index.mjs\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\nvar _this = undefined;\n\n\n\n\nvar _s = $RefreshSig$();\nvar ItemDetail = function() {\n    var _this1 = _this;\n    var ref, ref1, ref2, ref3, ref4, ref5;\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    var ref6 = (0,swr__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(router.query.id ? \"/api/tweet/\".concat(router.query.id) : null), data = ref6.data, error = ref6.error;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"px-4 py-4\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"mb-8\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"h-96 bg-slate-300\"\n                        }, void 0, false, {\n                            fileName: \"/Users/hun2/Downloads/nextjs-prisma-typescript-tailwind-blueprint/pages/tweet/[id].tsx\",\n                            lineNumber: 16,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex cursor-pointer py-3 border-t border-b items-center space-x-3\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"w-12 h-12 rounded-full bg-slate-300\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/hun2/Downloads/nextjs-prisma-typescript-tailwind-blueprint/pages/tweet/[id].tsx\",\n                                    lineNumber: 18,\n                                    columnNumber: 13\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            className: \"text-sm font-medium text-gray-700\",\n                                            children: data === null || data === void 0 ? void 0 : (ref = data.tweet) === null || ref === void 0 ? void 0 : (ref1 = ref.user) === null || ref1 === void 0 ? void 0 : ref1.name\n                                        }, void 0, false, {\n                                            fileName: \"/Users/hun2/Downloads/nextjs-prisma-typescript-tailwind-blueprint/pages/tweet/[id].tsx\",\n                                            lineNumber: 20,\n                                            columnNumber: 15\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                            href: \"/users/profiles/\".concat(data === null || data === void 0 ? void 0 : (ref2 = data.tweet) === null || ref2 === void 0 ? void 0 : (ref3 = ref2.user) === null || ref3 === void 0 ? void 0 : ref3.id),\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                className: \"text-xs font-medium text-gray-500\",\n                                                children: \"View profile \\u2192\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/hun2/Downloads/nextjs-prisma-typescript-tailwind-blueprint/pages/tweet/[id].tsx\",\n                                                lineNumber: 24,\n                                                columnNumber: 17\n                                            }, _this)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/hun2/Downloads/nextjs-prisma-typescript-tailwind-blueprint/pages/tweet/[id].tsx\",\n                                            lineNumber: 23,\n                                            columnNumber: 15\n                                        }, _this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/hun2/Downloads/nextjs-prisma-typescript-tailwind-blueprint/pages/tweet/[id].tsx\",\n                                    lineNumber: 19,\n                                    columnNumber: 13\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/hun2/Downloads/nextjs-prisma-typescript-tailwind-blueprint/pages/tweet/[id].tsx\",\n                            lineNumber: 17,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"mt-5\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                    className: \"text-3xl font-bold text-gray-900\",\n                                    children: data === null || data === void 0 ? void 0 : (ref4 = data.tweet) === null || ref4 === void 0 ? void 0 : ref4.name\n                                }, void 0, false, {\n                                    fileName: \"/Users/hun2/Downloads/nextjs-prisma-typescript-tailwind-blueprint/pages/tweet/[id].tsx\",\n                                    lineNumber: 31,\n                                    columnNumber: 13\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \" my-6 text-gray-700\",\n                                    children: data === null || data === void 0 ? void 0 : (ref5 = data.tweet) === null || ref5 === void 0 ? void 0 : ref5.content\n                                }, void 0, false, {\n                                    fileName: \"/Users/hun2/Downloads/nextjs-prisma-typescript-tailwind-blueprint/pages/tweet/[id].tsx\",\n                                    lineNumber: 34,\n                                    columnNumber: 13\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex items-center justify-between space-x-2\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        className: \"p-3 rounded-md flex items-center justify-center text-gray-400 hover:bg-gray-100 hover:text-gray-500\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                            className: \"h-6 w-6 \",\n                                            xmlns: \"http://www.w3.org/2000/svg\",\n                                            fill: \"none\",\n                                            viewBox: \"0 0 24 24\",\n                                            stroke: \"currentColor\",\n                                            \"aria-hidden\": \"true\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                                strokeLinecap: \"round\",\n                                                strokeLinejoin: \"round\",\n                                                strokeWidth: \"2\",\n                                                d: \"M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/hun2/Downloads/nextjs-prisma-typescript-tailwind-blueprint/pages/tweet/[id].tsx\",\n                                                lineNumber: 45,\n                                                columnNumber: 19\n                                            }, _this)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/hun2/Downloads/nextjs-prisma-typescript-tailwind-blueprint/pages/tweet/[id].tsx\",\n                                            lineNumber: 37,\n                                            columnNumber: 17\n                                        }, _this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/hun2/Downloads/nextjs-prisma-typescript-tailwind-blueprint/pages/tweet/[id].tsx\",\n                                        lineNumber: 36,\n                                        columnNumber: 15\n                                    }, _this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/hun2/Downloads/nextjs-prisma-typescript-tailwind-blueprint/pages/tweet/[id].tsx\",\n                                    lineNumber: 35,\n                                    columnNumber: 13\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/hun2/Downloads/nextjs-prisma-typescript-tailwind-blueprint/pages/tweet/[id].tsx\",\n                            lineNumber: 30,\n                            columnNumber: 11\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/hun2/Downloads/nextjs-prisma-typescript-tailwind-blueprint/pages/tweet/[id].tsx\",\n                    lineNumber: 15,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            className: \"text-2xl font-bold text-gray-900\",\n                            children: \"Similar items\"\n                        }, void 0, false, {\n                            fileName: \"/Users/hun2/Downloads/nextjs-prisma-typescript-tailwind-blueprint/pages/tweet/[id].tsx\",\n                            lineNumber: 57,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \" mt-6 grid grid-cols-2 gap-4\",\n                            children: [\n                                1,\n                                2,\n                                3,\n                                4,\n                                5,\n                                6\n                            ].map(function(_, i) {\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"h-56 w-full mb-4 bg-slate-300\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/hun2/Downloads/nextjs-prisma-typescript-tailwind-blueprint/pages/tweet/[id].tsx\",\n                                            lineNumber: 61,\n                                            columnNumber: 17\n                                        }, _this1),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                            className: \"text-gray-700 -mb-1\",\n                                            children: \"Galaxy S60\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/hun2/Downloads/nextjs-prisma-typescript-tailwind-blueprint/pages/tweet/[id].tsx\",\n                                            lineNumber: 62,\n                                            columnNumber: 17\n                                        }, _this1),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"text-sm font-medium text-gray-900\",\n                                            children: \"$6\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/hun2/Downloads/nextjs-prisma-typescript-tailwind-blueprint/pages/tweet/[id].tsx\",\n                                            lineNumber: 63,\n                                            columnNumber: 17\n                                        }, _this1)\n                                    ]\n                                }, i, true, {\n                                    fileName: \"/Users/hun2/Downloads/nextjs-prisma-typescript-tailwind-blueprint/pages/tweet/[id].tsx\",\n                                    lineNumber: 60,\n                                    columnNumber: 15\n                                }, _this1);\n                            })\n                        }, void 0, false, {\n                            fileName: \"/Users/hun2/Downloads/nextjs-prisma-typescript-tailwind-blueprint/pages/tweet/[id].tsx\",\n                            lineNumber: 58,\n                            columnNumber: 11\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/hun2/Downloads/nextjs-prisma-typescript-tailwind-blueprint/pages/tweet/[id].tsx\",\n                    lineNumber: 56,\n                    columnNumber: 9\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/hun2/Downloads/nextjs-prisma-typescript-tailwind-blueprint/pages/tweet/[id].tsx\",\n            lineNumber: 14,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/hun2/Downloads/nextjs-prisma-typescript-tailwind-blueprint/pages/tweet/[id].tsx\",\n        lineNumber: 13,\n        columnNumber: 5\n    }, _this);\n};\n_s(ItemDetail, \"F2OQGCTB9lgwThKfzWI7sczFgbA=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter,\n        swr__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n    ];\n});\n_c = ItemDetail;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ItemDetail);\nvar _c;\n$RefreshReg$(_c, \"ItemDetail\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3R3ZWV0L1tpZF0udHN4P2YzZDIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBOZXh0UGFnZSB9IGZyb20gXCJuZXh0XCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCB1c2VTV1IgZnJvbSBcInN3clwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuXG5jb25zdCBJdGVtRGV0YWlsOiBOZXh0UGFnZSA9ICgpID0+IHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IHVzZVNXUihcbiAgICByb3V0ZXIucXVlcnkuaWQgPyBgL2FwaS90d2VldC8ke3JvdXRlci5xdWVyeS5pZH1gIDogbnVsbFxuICApO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHgtNCAgcHktNFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLThcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImgtOTYgYmctc2xhdGUtMzAwXCIgLz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggY3Vyc29yLXBvaW50ZXIgcHktMyBib3JkZXItdCBib3JkZXItYiBpdGVtcy1jZW50ZXIgc3BhY2UteC0zXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMTIgaC0xMiByb3VuZGVkLWZ1bGwgYmctc2xhdGUtMzAwXCIgLz5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc20gZm9udC1tZWRpdW0gdGV4dC1ncmF5LTcwMFwiPlxuICAgICAgICAgICAgICAgIHtkYXRhPy50d2VldD8udXNlcj8ubmFtZX1cbiAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICA8TGluayBocmVmPXtgL3VzZXJzL3Byb2ZpbGVzLyR7ZGF0YT8udHdlZXQ/LnVzZXI/LmlkfWB9PlxuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInRleHQteHMgZm9udC1tZWRpdW0gdGV4dC1ncmF5LTUwMFwiPlxuICAgICAgICAgICAgICAgICAgVmlldyBwcm9maWxlICZyYXJyO1xuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC01XCI+XG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC0zeGwgZm9udC1ib2xkIHRleHQtZ3JheS05MDBcIj5cbiAgICAgICAgICAgICAge2RhdGE/LnR3ZWV0Py5uYW1lfVxuICAgICAgICAgICAgPC9oMT5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIiBteS02IHRleHQtZ3JheS03MDBcIj57ZGF0YT8udHdlZXQ/LmNvbnRlbnR9PC9wPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gc3BhY2UteC0yXCI+XG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwicC0zIHJvdW5kZWQtbWQgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgdGV4dC1ncmF5LTQwMCBob3ZlcjpiZy1ncmF5LTEwMCBob3Zlcjp0ZXh0LWdyYXktNTAwXCI+XG4gICAgICAgICAgICAgICAgPHN2Z1xuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaC02IHctNiBcIlxuICAgICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICAgICAgICAgICAgICBmaWxsPVwibm9uZVwiXG4gICAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcbiAgICAgICAgICAgICAgICAgIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgICAgICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgICAgIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiXG4gICAgICAgICAgICAgICAgICAgIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIlxuICAgICAgICAgICAgICAgICAgICBzdHJva2VXaWR0aD1cIjJcIlxuICAgICAgICAgICAgICAgICAgICBkPVwiTTQuMzE4IDYuMzE4YTQuNSA0LjUgMCAwMDAgNi4zNjRMMTIgMjAuMzY0bDcuNjgyLTcuNjgyYTQuNSA0LjUgMCAwMC02LjM2NC02LjM2NEwxMiA3LjYzNmwtMS4zMTgtMS4zMThhNC41IDQuNSAwIDAwLTYuMzY0IDB6XCJcbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LWJvbGQgdGV4dC1ncmF5LTkwMFwiPlNpbWlsYXIgaXRlbXM8L2gyPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIG10LTYgZ3JpZCBncmlkLWNvbHMtMiBnYXAtNFwiPlxuICAgICAgICAgICAge1sxLCAyLCAzLCA0LCA1LCA2XS5tYXAoKF8sIGkpID0+IChcbiAgICAgICAgICAgICAgPGRpdiBrZXk9e2l9PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaC01NiB3LWZ1bGwgbWItNCBiZy1zbGF0ZS0zMDBcIiAvPlxuICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNzAwIC1tYi0xXCI+R2FsYXh5IFM2MDwvaDM+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1zbSBmb250LW1lZGl1bSB0ZXh0LWdyYXktOTAwXCI+JDY8L3NwYW4+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuZXhwb3J0IGRlZmF1bHQgSXRlbURldGFpbDsiXSwibmFtZXMiOlsidXNlUm91dGVyIiwidXNlU1dSIiwiTGluayIsIkl0ZW1EZXRhaWwiLCJkYXRhIiwicm91dGVyIiwicXVlcnkiLCJpZCIsImVycm9yIiwiZGl2IiwiY2xhc3NOYW1lIiwicCIsInR3ZWV0IiwidXNlciIsIm5hbWUiLCJocmVmIiwiYSIsImgxIiwiY29udGVudCIsImJ1dHRvbiIsInN2ZyIsInhtbG5zIiwiZmlsbCIsInZpZXdCb3giLCJzdHJva2UiLCJhcmlhLWhpZGRlbiIsInBhdGgiLCJzdHJva2VMaW5lY2FwIiwic3Ryb2tlTGluZWpvaW4iLCJzdHJva2VXaWR0aCIsImQiLCJoMiIsIm1hcCIsIl8iLCJpIiwiaDMiLCJzcGFuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/tweet/[id].tsx\n");

/***/ })

});
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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swr */ \"./node_modules/swr/dist/index.mjs\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\nvar _this = undefined;\n\n\n\n\nvar _s = $RefreshSig$();\nvar ItemDetail = function() {\n    var ref, ref1, ref2, ref3, ref4;\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    var ref5 = (0,swr__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(router.query.id ? \"/api/tweet/\".concat(router.query.id) : null), data = ref5.data, error = ref5.error;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"px-4 bg-blue-400 p-6 py-4\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mb-8 \",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"h-20 bg-slate-300 flex rounded-lg items-center justify-center font-bold text-3xl \",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                href: \"/\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex justify-start\",\n                                    children: \"\\u2190\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/hun2/Downloads/nextjs-prisma-typescript-tailwind-blueprint/pages/tweet/[id].tsx\",\n                                    lineNumber: 19,\n                                    columnNumber: 13\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/Users/hun2/Downloads/nextjs-prisma-typescript-tailwind-blueprint/pages/tweet/[id].tsx\",\n                                lineNumber: 18,\n                                columnNumber: 11\n                            }, _this),\n                            \"Tweet\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/hun2/Downloads/nextjs-prisma-typescript-tailwind-blueprint/pages/tweet/[id].tsx\",\n                        lineNumber: 17,\n                        columnNumber: 11\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-col mt-10 \",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex cursor-pointer py-3 border rounded-xl w-[200px] bg-slate-100 items-center space-x-3\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"w-12 ml-3 h-12 rounded-full bg-blue-300\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/hun2/Downloads/nextjs-prisma-typescript-tailwind-blueprint/pages/tweet/[id].tsx\",\n                                        lineNumber: 28,\n                                        columnNumber: 13\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                className: \"text-sm font-medium text-gray-700\",\n                                                children: data === null || data === void 0 ? void 0 : (ref = data.tweet) === null || ref === void 0 ? void 0 : (ref1 = ref.user) === null || ref1 === void 0 ? void 0 : ref1.name\n                                            }, void 0, false, {\n                                                fileName: \"/Users/hun2/Downloads/nextjs-prisma-typescript-tailwind-blueprint/pages/tweet/[id].tsx\",\n                                                lineNumber: 30,\n                                                columnNumber: 15\n                                            }, _this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                className: \"text-xs font-medium cursor-pointer text-gray-500\",\n                                                children: \"View profile \\u2192\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/hun2/Downloads/nextjs-prisma-typescript-tailwind-blueprint/pages/tweet/[id].tsx\",\n                                                lineNumber: 33,\n                                                columnNumber: 17\n                                            }, _this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/hun2/Downloads/nextjs-prisma-typescript-tailwind-blueprint/pages/tweet/[id].tsx\",\n                                        lineNumber: 29,\n                                        columnNumber: 13\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/hun2/Downloads/nextjs-prisma-typescript-tailwind-blueprint/pages/tweet/[id].tsx\",\n                                lineNumber: 27,\n                                columnNumber: 13\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"mt-5 flex\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                        className: \"text-3xl font-bold text-gray-900 \",\n                                        children: data === null || data === void 0 ? void 0 : (ref2 = data.tweet) === null || ref2 === void 0 ? void 0 : ref2.name\n                                    }, void 0, false, {\n                                        fileName: \"/Users/hun2/Downloads/nextjs-prisma-typescript-tailwind-blueprint/pages/tweet/[id].tsx\",\n                                        lineNumber: 40,\n                                        columnNumber: 13\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"w-full h-screen\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"h-[30%] bg-gray-50 rounded-t-md \",\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                        className: \" mb-6 mt-2 ml-2\",\n                                                        children: \"\\uC791\\uC131\\uAE00\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/hun2/Downloads/nextjs-prisma-typescript-tailwind-blueprint/pages/tweet/[id].tsx\",\n                                                        lineNumber: 45,\n                                                        columnNumber: 17\n                                                    }, _this),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                        className: \"text-gray-700 ml-3 \",\n                                                        children: data === null || data === void 0 ? void 0 : (ref3 = data.tweet) === null || ref3 === void 0 ? void 0 : ref3.content\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/hun2/Downloads/nextjs-prisma-typescript-tailwind-blueprint/pages/tweet/[id].tsx\",\n                                                        lineNumber: 48,\n                                                        columnNumber: 15\n                                                    }, _this)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/hun2/Downloads/nextjs-prisma-typescript-tailwind-blueprint/pages/tweet/[id].tsx\",\n                                                lineNumber: 44,\n                                                columnNumber: 15\n                                            }, _this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"flex justify-end items-center bg-gray-50 rounded-b-md space-x-2 \",\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                    className: \"mr-3 p-3 rounded-md flex items-center justify-center text-gray-400 hover:bg-gray-100 hover:text-gray-500\",\n                                                    children: [\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                            className: \"mr-1 \",\n                                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                                                className: \"h-6 w-6 \",\n                                                                xmlns: \"http://www.w3.org/2000/svg\",\n                                                                fill: \"red\",\n                                                                viewBox: \"0 0 24 24\",\n                                                                stroke: \"currentColor\",\n                                                                \"aria-hidden\": \"true\",\n                                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                                                    strokeLinecap: \"round\",\n                                                                    strokeLinejoin: \"round\",\n                                                                    strokeWidth: \"2\",\n                                                                    d: \"M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z\"\n                                                                }, void 0, false, {\n                                                                    fileName: \"/Users/hun2/Downloads/nextjs-prisma-typescript-tailwind-blueprint/pages/tweet/[id].tsx\",\n                                                                    lineNumber: 62,\n                                                                    columnNumber: 19\n                                                                }, _this)\n                                                            }, void 0, false, {\n                                                                fileName: \"/Users/hun2/Downloads/nextjs-prisma-typescript-tailwind-blueprint/pages/tweet/[id].tsx\",\n                                                                lineNumber: 54,\n                                                                columnNumber: 17\n                                                            }, _this)\n                                                        }, void 0, false, {\n                                                            fileName: \"/Users/hun2/Downloads/nextjs-prisma-typescript-tailwind-blueprint/pages/tweet/[id].tsx\",\n                                                            lineNumber: 53,\n                                                            columnNumber: 17\n                                                        }, _this),\n                                                        data === null || data === void 0 ? void 0 : (ref4 = data.tweet) === null || ref4 === void 0 ? void 0 : ref4.likes\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"/Users/hun2/Downloads/nextjs-prisma-typescript-tailwind-blueprint/pages/tweet/[id].tsx\",\n                                                    lineNumber: 52,\n                                                    columnNumber: 15\n                                                }, _this)\n                                            }, void 0, false, {\n                                                fileName: \"/Users/hun2/Downloads/nextjs-prisma-typescript-tailwind-blueprint/pages/tweet/[id].tsx\",\n                                                lineNumber: 51,\n                                                columnNumber: 13\n                                            }, _this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/hun2/Downloads/nextjs-prisma-typescript-tailwind-blueprint/pages/tweet/[id].tsx\",\n                                        lineNumber: 43,\n                                        columnNumber: 13\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/hun2/Downloads/nextjs-prisma-typescript-tailwind-blueprint/pages/tweet/[id].tsx\",\n                                lineNumber: 39,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/hun2/Downloads/nextjs-prisma-typescript-tailwind-blueprint/pages/tweet/[id].tsx\",\n                        lineNumber: 25,\n                        columnNumber: 13\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/hun2/Downloads/nextjs-prisma-typescript-tailwind-blueprint/pages/tweet/[id].tsx\",\n                lineNumber: 15,\n                columnNumber: 9\n            }, _this)\n        }, void 0, false, {\n            fileName: \"/Users/hun2/Downloads/nextjs-prisma-typescript-tailwind-blueprint/pages/tweet/[id].tsx\",\n            lineNumber: 14,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/hun2/Downloads/nextjs-prisma-typescript-tailwind-blueprint/pages/tweet/[id].tsx\",\n        lineNumber: 13,\n        columnNumber: 5\n    }, _this);\n};\n_s(ItemDetail, \"F2OQGCTB9lgwThKfzWI7sczFgbA=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter,\n        swr__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n    ];\n});\n_c = ItemDetail;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ItemDetail);\nvar _c;\n$RefreshReg$(_c, \"ItemDetail\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LDRFQUFDUyxRQUFNO29EQUFDVCxTQUFTLEVBQUMsMEdBQTBHOztzRUFDMUgsOERBQUNELEtBQUc7NERBQUNDLFNBQVMsRUFBQyxPQUFPO3NFQUN0Qiw0RUFBQ1UsS0FBRztnRUFDRlYsU0FBUyxFQUFDLFVBQVU7Z0VBQ3BCVyxLQUFLLEVBQUMsNEJBQTRCO2dFQUNsQ0MsSUFBSSxFQUFDLEtBQUs7Z0VBQ1ZDLE9BQU8sRUFBQyxXQUFXO2dFQUNuQkMsTUFBTSxFQUFDLGNBQWM7Z0VBQ3JCQyxhQUFXLEVBQUMsTUFBTTswRUFFbEIsNEVBQUNDLE1BQUk7b0VBQ0hDLGFBQWEsRUFBQyxPQUFPO29FQUNyQkMsY0FBYyxFQUFDLE9BQU87b0VBQ3RCQyxXQUFXLEVBQUMsR0FBRztvRUFDZkMsQ0FBQyxFQUFDLDZIQUE2SDs7Ozs7eUVBQy9IOzs7OztxRUFFRTs7Ozs7aUVBQ0E7d0RBQ0wxQixJQUFJLGFBQUpBLElBQUksV0FBTyxHQUFYQSxLQUFBQSxDQUFXLEdBQVhBLENBQUFBLElBQVcsR0FBWEEsSUFBSSxDQUFFUyxLQUFLLGNBQVhULElBQVcsY0FBWEEsS0FBQUEsQ0FBVyxHQUFYQSxJQUFXLENBQUUyQixLQUFLOzs7Ozs7eURBQ1o7Ozs7O3FEQUNMOzs7Ozs7NkNBRUE7Ozs7OztxQ0FDRjs7Ozs7OzZCQUNFOzs7Ozs7cUJBR0o7Ozs7O2lCQUVGOzs7OzthQUNGLENBQ047Q0FDSDtHQS9FSzVCLFVBQVU7O1FBQ0NILGtEQUFTO1FBQ0FDLDJDQUFNOzs7QUFGMUJFLEtBQUFBLFVBQVU7QUFnRmhCLCtEQUFlQSxVQUFVLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdHdlZXQvW2lkXS50c3g/ZjNkMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IE5leHRQYWdlIH0gZnJvbSBcIm5leHRcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IHVzZVNXUiBmcm9tIFwic3dyXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5cbmNvbnN0IEl0ZW1EZXRhaWw6IE5leHRQYWdlID0gKCkgPT4ge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gdXNlU1dSKFxuICAgIHJvdXRlci5xdWVyeS5pZCA/IGAvYXBpL3R3ZWV0LyR7cm91dGVyLnF1ZXJ5LmlkfWAgOiBudWxsXG4gICk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJweC00IGJnLWJsdWUtNDAwIHAtNiBweS00XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItOCBcIj5cbiAgICAgICAgXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoLTIwICBiZy1zbGF0ZS0zMDAgIGZsZXggIHJvdW5kZWQtbGcgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGZvbnQtYm9sZCB0ZXh0LTN4bCBcIj5cbiAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktc3RhcnRcIj4mbGFycjs8L2Rpdj5cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgVHdlZXQgXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgXG4gICAgICAgICAgXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgIG10LTEwIFwiPlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggY3Vyc29yLXBvaW50ZXIgcHktMyBib3JkZXIgcm91bmRlZC14bCB3LVsyMDBweF0gYmctc2xhdGUtMTAwIGl0ZW1zLWNlbnRlciBzcGFjZS14LTNcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0xMiBtbC0zIGgtMTIgcm91bmRlZC1mdWxsIGJnLWJsdWUtMzAwXCIgIC8+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIGZvbnQtbWVkaXVtIHRleHQtZ3JheS03MDBcIj5cbiAgICAgICAgICAgICAgICB7ZGF0YT8udHdlZXQ/LnVzZXI/Lm5hbWV9XG4gICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJ0ZXh0LXhzIGZvbnQtbWVkaXVtIGN1cnNvci1wb2ludGVyIHRleHQtZ3JheS01MDBcIj5cbiAgICAgICAgICAgICAgICAgIFZpZXcgcHJvZmlsZSAmcmFycjtcbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtNSBmbGV4XCI+XG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC0zeGwgZm9udC1ib2xkIHRleHQtZ3JheS05MDAgXCI+XG4gICAgICAgICAgICAgIHtkYXRhPy50d2VldD8ubmFtZX1cbiAgICAgICAgICAgIDwvaDE+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBoLXNjcmVlblwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImgtWzMwJV0gYmctZ3JheS01MCByb3VuZGVkLXQtbWQgIFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIG1iLTYgbXQtMiBtbC0yXCI+XG4gICAgICAgICAgICAgICAgICDsnpHshLHquIBcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtZ3JheS03MDAgbWwtMyBcIj57ZGF0YT8udHdlZXQ/LmNvbnRlbnR9PC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggIGp1c3RpZnktZW5kICBpdGVtcy1jZW50ZXIgYmctZ3JheS01MCAgcm91bmRlZC1iLW1kIHNwYWNlLXgtMiBcIj5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJtci0zIHAtMyByb3VuZGVkLW1kIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHRleHQtZ3JheS00MDAgaG92ZXI6YmctZ3JheS0xMDAgaG92ZXI6dGV4dC1ncmF5LTUwMFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXItMSBcIj5cbiAgICAgICAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoLTYgdy02IFwiXG4gICAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgICAgICAgICAgIGZpbGw9XCJyZWRcIlxuICAgICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXG4gICAgICAgICAgICAgICAgICBzdHJva2U9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICAgICAgICAgICAgYXJpYS1oaWRkZW49XCJ0cnVlXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgICAgICBzdHJva2VMaW5lY2FwPVwicm91bmRcIlxuICAgICAgICAgICAgICAgICAgICBzdHJva2VMaW5lam9pbj1cInJvdW5kXCJcbiAgICAgICAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg9XCIyXCJcbiAgICAgICAgICAgICAgICAgICAgZD1cIk00LjMxOCA2LjMxOGE0LjUgNC41IDAgMDAwIDYuMzY0TDEyIDIwLjM2NGw3LjY4Mi03LjY4MmE0LjUgNC41IDAgMDAtNi4zNjQtNi4zNjRMMTIgNy42MzZsLTEuMzE4LTEuMzE4YTQuNSA0LjUgMCAwMC02LjM2NCAwelwiXG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAge2RhdGE/LnR3ZWV0Py5saWtlc31cbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgIFxuICAgICAgICAgIFxuICAgICAgICA8L2Rpdj5cbiAgICBcbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcbmV4cG9ydCBkZWZhdWx0IEl0ZW1EZXRhaWw7Il0sIm5hbWVzIjpbInVzZVJvdXRlciIsInVzZVNXUiIsIkxpbmsiLCJJdGVtRGV0YWlsIiwiZGF0YSIsInJvdXRlciIsInF1ZXJ5IiwiaWQiLCJlcnJvciIsImRpdiIsImNsYXNzTmFtZSIsImhyZWYiLCJwIiwidHdlZXQiLCJ1c2VyIiwibmFtZSIsImEiLCJoMSIsImNvbnRlbnQiLCJidXR0b24iLCJzdmciLCJ4bWxucyIsImZpbGwiLCJ2aWV3Qm94Iiwic3Ryb2tlIiwiYXJpYS1oaWRkZW4iLCJwYXRoIiwic3Ryb2tlTGluZWNhcCIsInN0cm9rZUxpbmVqb2luIiwic3Ryb2tlV2lkdGgiLCJkIiwibGlrZXMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/tweet/[id].tsx\n");

/***/ })

});
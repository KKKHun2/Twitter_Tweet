"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/mainPage.tsx":
/*!****************************!*\
  !*** ./pages/mainPage.tsx ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swr */ \"./node_modules/swr/dist/index.mjs\");\nvar _this = undefined;\n\n\n\n\nvar _s = $RefreshSig$();\nvar Home = function() {\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    var ref = (0,swr__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\"/api/users/my\"), data = ref.data, error = ref.error;\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        if (error) {\n            router.replace(\"/create-account\");\n        }\n    }, [\n        router,\n        error\n    ]);\n    if (!data) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n            fileName: \"/Users/hun2/Downloads/nextjs-prisma-typescript-tailwind-blueprint/pages/mainPage.tsx\",\n            lineNumber: 15,\n            columnNumber: 12\n        }, _this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \" w-[60%] h-100vh space-y-10\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"m-10 p-3 bg-gray-50 rounded-lg shadow-lg \",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex felx-row \",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"bg-blue-300 w-5 h-5 p-10 rounded-3xl mr-5 \"\n                            }, void 0, false, {\n                                fileName: \"/Users/hun2/Downloads/nextjs-prisma-typescript-tailwind-blueprint/pages/mainPage.tsx\",\n                                lineNumber: 21,\n                                columnNumber: 5\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"w-25 mt-2 text-xl font-semibold\",\n                                        children: [\n                                            data === null || data === void 0 ? void 0 : data.name,\n                                            \" (\",\n                                            data === null || data === void 0 ? void 0 : data.email,\n                                            \")\"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/hun2/Downloads/nextjs-prisma-typescript-tailwind-blueprint/pages/mainPage.tsx\",\n                                        lineNumber: 23,\n                                        columnNumber: 5\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"text-gray-400 mt-1 text-xs\",\n                                        children: \"\\uB0B4 \\uD504\\uB85C\\uD544 \\uD398\\uC774\\uC9C0 \\uBCF4\\uAE30\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/hun2/Downloads/nextjs-prisma-typescript-tailwind-blueprint/pages/mainPage.tsx\",\n                                        lineNumber: 24,\n                                        columnNumber: 7\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/hun2/Downloads/nextjs-prisma-typescript-tailwind-blueprint/pages/mainPage.tsx\",\n                                lineNumber: 22,\n                                columnNumber: 5\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/hun2/Downloads/nextjs-prisma-typescript-tailwind-blueprint/pages/mainPage.tsx\",\n                        lineNumber: 20,\n                        columnNumber: 5\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {}, void 0, false, {\n                        fileName: \"/Users/hun2/Downloads/nextjs-prisma-typescript-tailwind-blueprint/pages/mainPage.tsx\",\n                        lineNumber: 29,\n                        columnNumber: 5\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex felx-row\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"mr-7 mt-2 ml-5 \",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"text-lg font-bold\",\n                                        children: \"200\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/hun2/Downloads/nextjs-prisma-typescript-tailwind-blueprint/pages/mainPage.tsx\",\n                                        lineNumber: 33,\n                                        columnNumber: 9\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"text-gray-400 text-xs\",\n                                        children: \"TWEETS\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/hun2/Downloads/nextjs-prisma-typescript-tailwind-blueprint/pages/mainPage.tsx\",\n                                        lineNumber: 34,\n                                        columnNumber: 9\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/hun2/Downloads/nextjs-prisma-typescript-tailwind-blueprint/pages/mainPage.tsx\",\n                                lineNumber: 32,\n                                columnNumber: 5\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"mr-7 mt-2 \",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"text-lg font-bold\",\n                                        children: \"2,579\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/hun2/Downloads/nextjs-prisma-typescript-tailwind-blueprint/pages/mainPage.tsx\",\n                                        lineNumber: 37,\n                                        columnNumber: 9\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"text-gray-400 text-xs\",\n                                        children: \"\\uD314\\uB85C\\uC789\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/hun2/Downloads/nextjs-prisma-typescript-tailwind-blueprint/pages/mainPage.tsx\",\n                                        lineNumber: 38,\n                                        columnNumber: 9\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/hun2/Downloads/nextjs-prisma-typescript-tailwind-blueprint/pages/mainPage.tsx\",\n                                lineNumber: 36,\n                                columnNumber: 9\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"mr-7 mt-2 \",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"text-lg font-bold\",\n                                        children: \"2,355\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/hun2/Downloads/nextjs-prisma-typescript-tailwind-blueprint/pages/mainPage.tsx\",\n                                        lineNumber: 41,\n                                        columnNumber: 9\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"text-gray-400 text-xs\",\n                                        children: \"\\uD314\\uB85C\\uC6CC\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/hun2/Downloads/nextjs-prisma-typescript-tailwind-blueprint/pages/mainPage.tsx\",\n                                        lineNumber: 42,\n                                        columnNumber: 9\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/hun2/Downloads/nextjs-prisma-typescript-tailwind-blueprint/pages/mainPage.tsx\",\n                                lineNumber: 40,\n                                columnNumber: 9\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/hun2/Downloads/nextjs-prisma-typescript-tailwind-blueprint/pages/mainPage.tsx\",\n                        lineNumber: 30,\n                        columnNumber: 5\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/hun2/Downloads/nextjs-prisma-typescript-tailwind-blueprint/pages/mainPage.tsx\",\n                lineNumber: 19,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"m-10 p-3 bg-gray-50 rounded-lg shadow-lg \",\n                children: \"123\"\n            }, void 0, false, {\n                fileName: \"/Users/hun2/Downloads/nextjs-prisma-typescript-tailwind-blueprint/pages/mainPage.tsx\",\n                lineNumber: 48,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"m-10 p-3 bg-gray-50 rounded-lg shadow-lg \",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-row\",\n                        children: [\n                            \"\\uC11C\\uC6B8\\uC758 \\uD2B8\\uB80C\\uB4DC\",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \" ml-2\",\n                                children: \"\\uBCC0\\uACBD\"\n                            }, void 0, false, {\n                                fileName: \"/Users/hun2/Downloads/nextjs-prisma-typescript-tailwind-blueprint/pages/mainPage.tsx\",\n                                lineNumber: 52,\n                                columnNumber: 13\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/hun2/Downloads/nextjs-prisma-typescript-tailwind-blueprint/pages/mainPage.tsx\",\n                        lineNumber: 50,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"text-blue-500\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: \"\\uC5B4\\uCA4C\\uACE0\"\n                            }, void 0, false, {\n                                fileName: \"/Users/hun2/Downloads/nextjs-prisma-typescript-tailwind-blueprint/pages/mainPage.tsx\",\n                                lineNumber: 55,\n                                columnNumber: 13\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: \"\\uC800\\uCA4C\\uACE0\"\n                            }, void 0, false, {\n                                fileName: \"/Users/hun2/Downloads/nextjs-prisma-typescript-tailwind-blueprint/pages/mainPage.tsx\",\n                                lineNumber: 58,\n                                columnNumber: 13\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: \"\\uC5B4\\uCA4C\\uACE0\"\n                            }, void 0, false, {\n                                fileName: \"/Users/hun2/Downloads/nextjs-prisma-typescript-tailwind-blueprint/pages/mainPage.tsx\",\n                                lineNumber: 61,\n                                columnNumber: 13\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: \"\\uC800\\uCA4C\\uACE0\"\n                            }, void 0, false, {\n                                fileName: \"/Users/hun2/Downloads/nextjs-prisma-typescript-tailwind-blueprint/pages/mainPage.tsx\",\n                                lineNumber: 64,\n                                columnNumber: 13\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/hun2/Downloads/nextjs-prisma-typescript-tailwind-blueprint/pages/mainPage.tsx\",\n                        lineNumber: 54,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/hun2/Downloads/nextjs-prisma-typescript-tailwind-blueprint/pages/mainPage.tsx\",\n                lineNumber: 49,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"m-10 p-3 text-gray-400 bg-gray-50 rounded-lg shadow-lg \",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mb-2 text-xl\",\n                        children: \"twitter\"\n                    }, void 0, false, {\n                        fileName: \"/Users/hun2/Downloads/nextjs-prisma-typescript-tailwind-blueprint/pages/mainPage.tsx\",\n                        lineNumber: 72,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"text-sm\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: \"\\u24B8 2012 Twitter \\uD68C\\uC0AC\\uC18C\\uAC1C \\uACE0\\uAC1D\\uC9C0\\uC6D0 \\uC774\\uC6A9\\uC57D\\uAD00\"\n                            }, void 0, false, {\n                                fileName: \"/Users/hun2/Downloads/nextjs-prisma-typescript-tailwind-blueprint/pages/mainPage.tsx\",\n                                lineNumber: 74,\n                                columnNumber: 9\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: \"\\uAC1C\\uC778\\uC815\\uBCF4\\uCDE8\\uAE09 \\uBE14\\uB85C\\uADF8 \\uC2DC\\uC2A4\\uD15C \\uD604\\uD669\"\n                            }, void 0, false, {\n                                fileName: \"/Users/hun2/Downloads/nextjs-prisma-typescript-tailwind-blueprint/pages/mainPage.tsx\",\n                                lineNumber: 75,\n                                columnNumber: 9\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: \"\\uC560\\uD50C\\uB9AC\\uCF00\\uC774\\uC158 \\uC790\\uB8CC\\uC2E4 \\uC778\\uC7AC\\uCC44\\uC6A9 \\uAD11\\uACE0\\uC8FC\"\n                            }, void 0, false, {\n                                fileName: \"/Users/hun2/Downloads/nextjs-prisma-typescript-tailwind-blueprint/pages/mainPage.tsx\",\n                                lineNumber: 76,\n                                columnNumber: 9\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: \"\\uBE44\\uC988\\uB2C8\\uC2A4 \\uBBF8\\uB514\\uC5B4 \\uAC1C\\uBC1C\\uC790\"\n                            }, void 0, false, {\n                                fileName: \"/Users/hun2/Downloads/nextjs-prisma-typescript-tailwind-blueprint/pages/mainPage.tsx\",\n                                lineNumber: 77,\n                                columnNumber: 9\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/hun2/Downloads/nextjs-prisma-typescript-tailwind-blueprint/pages/mainPage.tsx\",\n                        lineNumber: 73,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/hun2/Downloads/nextjs-prisma-typescript-tailwind-blueprint/pages/mainPage.tsx\",\n                lineNumber: 71,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/hun2/Downloads/nextjs-prisma-typescript-tailwind-blueprint/pages/mainPage.tsx\",\n        lineNumber: 18,\n        columnNumber: 5\n    }, _this);\n};\n_s(Home, \"ueaSG3dFe54Zrjg9PlhqkDW4vec=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter,\n        swr__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n    ];\n});\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RCxLQUFHO2dDQUFDQyxTQUFTLEVBQUMsT0FBTzswQ0FBQyxjQUFFOzs7OztxQ0FBVTs7Ozs7OzZCQUM3QjtrQ0FDViw4REFBQ0QsS0FBRzt3QkFBQ0MsU0FBUyxFQUFDLGVBQWU7OzBDQUMxQiw4REFBQ0QsS0FBRzswQ0FBQyxvQkFFTDs7Ozs7cUNBQU07MENBQ04sOERBQUNBLEtBQUc7MENBQUMsb0JBRUw7Ozs7O3FDQUFNOzBDQUNOLDhEQUFDQSxLQUFHOzBDQUFDLG9CQUVMOzs7OztxQ0FBTTswQ0FDTiw4REFBQ0EsS0FBRzswQ0FBQyxvQkFFTDs7Ozs7cUNBQU07Ozs7Ozs2QkFDSjs7Ozs7O3FCQUNGOzBCQUdOLDhEQUFDQSxLQUFHO2dCQUFDQyxTQUFTLEVBQUMseURBQTBEOztrQ0FDdkUsOERBQUNELEtBQUc7d0JBQUNDLFNBQVMsRUFBQyxjQUFjO2tDQUFDLFNBQU87Ozs7OzZCQUFNO2tDQUMzQyw4REFBQ0QsS0FBRzt3QkFBQ0MsU0FBUyxFQUFDLFNBQVM7OzBDQUN4Qiw4REFBQ0QsS0FBRzswQ0FBQyxnR0FBNkI7Ozs7O3FDQUFnQzswQ0FDeEMsOERBQXpCQSxLQUFHOzBDQUFDLHlGQUFpQjs7Ozs7cUNBQWtDOzBDQUM1Qiw4REFBM0JBLEtBQUc7MENBQUMscUdBQW1COzs7OztxQ0FBc0M7MENBQzlCLDhEQUEvQkEsS0FBRzswQ0FBQyxnRUFBWTs7Ozs7cUNBQU07Ozs7Ozs2QkFDakI7Ozs7OztxQkFDRjs7Ozs7O2FBRUYsQ0FDTjtDQUNIO0dBN0VLTCxJQUFJOztRQUNPSixrREFBUztRQUNBRywyQ0FBTTs7O0FBRjFCQyxLQUFBQSxJQUFJO0FBK0VWLCtEQUFlQSxJQUFJLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbWFpblBhZ2UudHN4P2ZkNzEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dFBhZ2UgfSBmcm9tIFwibmV4dFwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgdXNlU1dSIGZyb20gXCJzd3JcIjtcblxuY29uc3QgSG9tZTogTmV4dFBhZ2UgPSAoKSA9PiB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSB1c2VTV1IoXCIvYXBpL3VzZXJzL215XCIpO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChlcnJvcikge1xuICAgICAgcm91dGVyLnJlcGxhY2UoXCIvY3JlYXRlLWFjY291bnRcIik7XG4gICAgfVxuICB9LCBbcm91dGVyLCBlcnJvcl0pO1xuICBpZiAoIWRhdGEpIHtcbiAgICByZXR1cm4gPGRpdiAvPjtcbiAgfVxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiIHctWzYwJV0gaC0xMDB2aCBzcGFjZS15LTEwXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm0tMTAgcC0zICBiZy1ncmF5LTUwIHJvdW5kZWQtbGcgc2hhZG93LWxnIFwiPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmZWx4LXJvdyBcIj5cbiAgICA8ZGl2IGNsYXNzTmFtZT0nYmctYmx1ZS0zMDAgdy01IGgtNSBwLTEwIHJvdW5kZWQtM3hsIG1yLTUgJyAvPlxuICAgIDxkaXY+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJ3LTI1IG10LTIgIHRleHQteGwgZm9udC1zZW1pYm9sZFwiPntkYXRhPy5uYW1lfSAoe2RhdGE/LmVtYWlsfSk8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTQwMCBtdC0xIHRleHQteHNcIj7rgrQg7ZSE66Gc7ZWEIO2OmOydtOyngCDrs7TquLA8L2Rpdj5cbiAgICAgXG4gICAgPC9kaXY+XG4gICAgIFxuICAgIDwvZGl2PlxuICAgIDxociAvPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmZWx4LXJvd1wiPlxuICAgICAgICBcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1yLTcgbXQtMiBtbC01IFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtbGcgZm9udC1ib2xkXCI+MjAwPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTQwMCB0ZXh0LXhzXCI+VFdFRVRTPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1yLTcgbXQtMiBcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWxnIGZvbnQtYm9sZFwiPjIsNTc5PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTQwMCB0ZXh0LXhzXCI+7YyU66Gc7J6JPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1yLTcgbXQtMiBcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWxnIGZvbnQtYm9sZFwiPjIsMzU1PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTQwMCB0ZXh0LXhzXCI+7YyU66Gc7JuMPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgICAgIFxuICAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm0tMTAgcC0zICBiZy1ncmF5LTUwIHJvdW5kZWQtbGcgc2hhZG93LWxnIFwiPjEyMzwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtLTEwIHAtMyAgYmctZ3JheS01MCByb3VuZGVkLWxnIHNoYWRvdy1sZyBcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93XCI+XG4gICAgICAgICAgICDshJzsmrjsnZgg7Yq466CM65OcIFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCIgbWwtMlwiPuuzgOqyvTwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWJsdWUtNTAwXCI+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAg7Ja07KmM6rOgXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICDsoIDsqYzqs6BcbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIOyWtOypjOqzoFxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAg7KCA7KmM6rOgXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm0tMTAgcC0zICB0ZXh0LWdyYXktNDAwIGJnLWdyYXktNTAgcm91bmRlZC1sZyBzaGFkb3ctbGcgXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItMiB0ZXh0LXhsXCI+dHdpdHRlcjwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtc21cIj5cbiAgICAgICAgPGRpdj7ikrggMjAxMiBUd2l0dGVyIO2ajOyCrOyGjOqwnCDqs6DqsJ3sp4Dsm5Ag7J207Jqp7JW96rSAPC9kaXY+XG4gICAgICAgIDxkaXY+6rCc7J247KCV67O07Leo6riJIOu4lOuhnOq3uCDsi5zsiqTthZwg7ZiE7ZmpPC9kaXY+XG4gICAgICAgIDxkaXY+7JWg7ZSM66as7LyA7J207IWYIOyekOujjOyLpCDsnbjsnqzssYTsmqkg6rSR6rOg7KO8PC9kaXY+XG4gICAgICAgIDxkaXY+67mE7KaI64uI7IqkIOuvuOuUlOyWtCDqsJzrsJzsnpA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgXG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIb21lOyJdLCJuYW1lcyI6WyJ1c2VSb3V0ZXIiLCJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVNXUiIsIkhvbWUiLCJyb3V0ZXIiLCJkYXRhIiwiZXJyb3IiLCJyZXBsYWNlIiwiZGl2IiwiY2xhc3NOYW1lIiwibmFtZSIsImVtYWlsIiwiaHIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/mainPage.tsx\n");

/***/ })

});
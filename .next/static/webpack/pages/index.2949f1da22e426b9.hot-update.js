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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swr */ \"./node_modules/swr/dist/index.mjs\");\nvar _this = undefined;\n\n\n\n\nvar _s = $RefreshSig$();\nvar Home = function() {\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    var ref = (0,swr__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\"/api/users/my\"), data = ref.data, error = ref.error;\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        if (error) {\n            router.replace(\"/create-account\");\n        }\n    }, [\n        router,\n        error\n    ]);\n    if (!data) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n            fileName: \"/Users/hun2/Downloads/nextjs-prisma-typescript-tailwind-blueprint/pages/mainPage.tsx\",\n            lineNumber: 15,\n            columnNumber: 12\n        }, _this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \" w-[60%] h-100vh space-y-10\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"m-10 p-3 bg-gray-50 rounded-lg shadow-lg \",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex felx-row \",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"bg-blue-300 w-5 h-5 p-10 rounded-3xl mr-5 \"\n                            }, void 0, false, {\n                                fileName: \"/Users/hun2/Downloads/nextjs-prisma-typescript-tailwind-blueprint/pages/mainPage.tsx\",\n                                lineNumber: 21,\n                                columnNumber: 5\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"w-25 mt-2 text-xl font-semibold\",\n                                        children: [\n                                            data === null || data === void 0 ? void 0 : data.name,\n                                            \" (\",\n                                            data === null || data === void 0 ? void 0 : data.email,\n                                            \")\"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/hun2/Downloads/nextjs-prisma-typescript-tailwind-blueprint/pages/mainPage.tsx\",\n                                        lineNumber: 23,\n                                        columnNumber: 5\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"text-gray-400 mt-1 text-xs\",\n                                        children: \"\\uB0B4 \\uD504\\uB85C\\uD544 \\uD398\\uC774\\uC9C0 \\uBCF4\\uAE30\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/hun2/Downloads/nextjs-prisma-typescript-tailwind-blueprint/pages/mainPage.tsx\",\n                                        lineNumber: 24,\n                                        columnNumber: 7\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/hun2/Downloads/nextjs-prisma-typescript-tailwind-blueprint/pages/mainPage.tsx\",\n                                lineNumber: 22,\n                                columnNumber: 5\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/hun2/Downloads/nextjs-prisma-typescript-tailwind-blueprint/pages/mainPage.tsx\",\n                        lineNumber: 20,\n                        columnNumber: 5\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {}, void 0, false, {\n                        fileName: \"/Users/hun2/Downloads/nextjs-prisma-typescript-tailwind-blueprint/pages/mainPage.tsx\",\n                        lineNumber: 29,\n                        columnNumber: 5\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex felx-row\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"mr-7 mt-2 ml-5 \",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"text-lg font-bold\",\n                                        children: \"200\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/hun2/Downloads/nextjs-prisma-typescript-tailwind-blueprint/pages/mainPage.tsx\",\n                                        lineNumber: 33,\n                                        columnNumber: 9\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"text-gray-400 text-xs\",\n                                        children: \"TWEETS\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/hun2/Downloads/nextjs-prisma-typescript-tailwind-blueprint/pages/mainPage.tsx\",\n                                        lineNumber: 34,\n                                        columnNumber: 9\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/hun2/Downloads/nextjs-prisma-typescript-tailwind-blueprint/pages/mainPage.tsx\",\n                                lineNumber: 32,\n                                columnNumber: 5\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"mr-7 mt-2 \",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"text-lg font-bold\",\n                                        children: \"2,579\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/hun2/Downloads/nextjs-prisma-typescript-tailwind-blueprint/pages/mainPage.tsx\",\n                                        lineNumber: 37,\n                                        columnNumber: 9\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"text-gray-400 text-xs\",\n                                        children: \"\\uD314\\uB85C\\uC789\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/hun2/Downloads/nextjs-prisma-typescript-tailwind-blueprint/pages/mainPage.tsx\",\n                                        lineNumber: 38,\n                                        columnNumber: 9\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/hun2/Downloads/nextjs-prisma-typescript-tailwind-blueprint/pages/mainPage.tsx\",\n                                lineNumber: 36,\n                                columnNumber: 9\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"mr-7 mt-2 \",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"text-lg font-bold\",\n                                        children: \"2,355\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/hun2/Downloads/nextjs-prisma-typescript-tailwind-blueprint/pages/mainPage.tsx\",\n                                        lineNumber: 41,\n                                        columnNumber: 9\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"text-gray-400 text-xs\",\n                                        children: \"\\uD314\\uB85C\\uC6CC\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/hun2/Downloads/nextjs-prisma-typescript-tailwind-blueprint/pages/mainPage.tsx\",\n                                        lineNumber: 42,\n                                        columnNumber: 9\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/hun2/Downloads/nextjs-prisma-typescript-tailwind-blueprint/pages/mainPage.tsx\",\n                                lineNumber: 40,\n                                columnNumber: 9\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/hun2/Downloads/nextjs-prisma-typescript-tailwind-blueprint/pages/mainPage.tsx\",\n                        lineNumber: 30,\n                        columnNumber: 5\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/hun2/Downloads/nextjs-prisma-typescript-tailwind-blueprint/pages/mainPage.tsx\",\n                lineNumber: 19,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"m-10 p-3 bg-gray-50 rounded-lg shadow-lg \",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex flex-row text-lg mb-2\",\n                    children: [\n                        \"\\uD314\\uB85C\\uC6B0 \\uCD94\\uCC9C\",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \" ml-2 mt-2 text-xs text-blue-600 cursor-pointer\",\n                            children: \"\\uC0C8\\uB85C \\uACE0\\uCE68\"\n                        }, void 0, false, {\n                            fileName: \"/Users/hun2/Downloads/nextjs-prisma-typescript-tailwind-blueprint/pages/mainPage.tsx\",\n                            lineNumber: 51,\n                            columnNumber: 13\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \" ml-1 mt-2 text-xs text-blue-600 cursor-pointer\",\n                            children: \"\\uBAA8\\uB450 \\uBCF4\\uAE30\"\n                        }, void 0, false, {\n                            fileName: \"/Users/hun2/Downloads/nextjs-prisma-typescript-tailwind-blueprint/pages/mainPage.tsx\",\n                            lineNumber: 52,\n                            columnNumber: 13\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/hun2/Downloads/nextjs-prisma-typescript-tailwind-blueprint/pages/mainPage.tsx\",\n                    lineNumber: 49,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/hun2/Downloads/nextjs-prisma-typescript-tailwind-blueprint/pages/mainPage.tsx\",\n                lineNumber: 48,\n                columnNumber: 8\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"m-10 p-3 bg-gray-50 rounded-lg shadow-lg \",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-row text-lg mb-2\",\n                        children: [\n                            \"\\uC11C\\uC6B8\\uC758 \\uD2B8\\uB80C\\uB4DC\",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \" ml-2 mt-2 text-xs text-blue-600 cursor-pointer\",\n                                children: \"\\uBCC0\\uACBD\\uD558\\uAE30\"\n                            }, void 0, false, {\n                                fileName: \"/Users/hun2/Downloads/nextjs-prisma-typescript-tailwind-blueprint/pages/mainPage.tsx\",\n                                lineNumber: 61,\n                                columnNumber: 13\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/hun2/Downloads/nextjs-prisma-typescript-tailwind-blueprint/pages/mainPage.tsx\",\n                        lineNumber: 59,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"text-blue-600 text-sm\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"cursor-pointer\",\n                                children: \"\\uC5B4\\uCA4C\\uACE0 \\uC800\\uCA4C\\uACE0\"\n                            }, void 0, false, {\n                                fileName: \"/Users/hun2/Downloads/nextjs-prisma-typescript-tailwind-blueprint/pages/mainPage.tsx\",\n                                lineNumber: 64,\n                                columnNumber: 13\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"cursor-pointer\",\n                                children: \"\\uC800\\uCA4C\\uACE0 \\uC5B4\\uCA4C\\uACE0\"\n                            }, void 0, false, {\n                                fileName: \"/Users/hun2/Downloads/nextjs-prisma-typescript-tailwind-blueprint/pages/mainPage.tsx\",\n                                lineNumber: 67,\n                                columnNumber: 13\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"cursor-pointer\",\n                                children: \"\\uC5B4\\uCA4C\\uACE0 \\uC800\\uCA4C\\uACE0\"\n                            }, void 0, false, {\n                                fileName: \"/Users/hun2/Downloads/nextjs-prisma-typescript-tailwind-blueprint/pages/mainPage.tsx\",\n                                lineNumber: 70,\n                                columnNumber: 13\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"cursor-pointer\",\n                                children: \"\\uC800\\uCA4C\\uACE0 \\uC5B4\\uCA4C\\uACE0\"\n                            }, void 0, false, {\n                                fileName: \"/Users/hun2/Downloads/nextjs-prisma-typescript-tailwind-blueprint/pages/mainPage.tsx\",\n                                lineNumber: 73,\n                                columnNumber: 13\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/hun2/Downloads/nextjs-prisma-typescript-tailwind-blueprint/pages/mainPage.tsx\",\n                        lineNumber: 63,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/hun2/Downloads/nextjs-prisma-typescript-tailwind-blueprint/pages/mainPage.tsx\",\n                lineNumber: 58,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"m-10 p-3 text-gray-400 bg-gray-50 rounded-lg shadow-lg \",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mb-2 text-xl\",\n                        children: \"twitter\"\n                    }, void 0, false, {\n                        fileName: \"/Users/hun2/Downloads/nextjs-prisma-typescript-tailwind-blueprint/pages/mainPage.tsx\",\n                        lineNumber: 81,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"text-xs\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: \"\\u24B8 2012 Twitter \\uD68C\\uC0AC\\uC18C\\uAC1C \\uACE0\\uAC1D\\uC9C0\\uC6D0 \\uC774\\uC6A9\\uC57D\\uAD00\"\n                            }, void 0, false, {\n                                fileName: \"/Users/hun2/Downloads/nextjs-prisma-typescript-tailwind-blueprint/pages/mainPage.tsx\",\n                                lineNumber: 83,\n                                columnNumber: 9\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: \"\\uAC1C\\uC778\\uC815\\uBCF4\\uCDE8\\uAE09 \\uBE14\\uB85C\\uADF8 \\uC2DC\\uC2A4\\uD15C \\uD604\\uD669\"\n                            }, void 0, false, {\n                                fileName: \"/Users/hun2/Downloads/nextjs-prisma-typescript-tailwind-blueprint/pages/mainPage.tsx\",\n                                lineNumber: 84,\n                                columnNumber: 9\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: \"\\uC560\\uD50C\\uB9AC\\uCF00\\uC774\\uC158 \\uC790\\uB8CC\\uC2E4 \\uC778\\uC7AC\\uCC44\\uC6A9 \\uAD11\\uACE0\\uC8FC\"\n                            }, void 0, false, {\n                                fileName: \"/Users/hun2/Downloads/nextjs-prisma-typescript-tailwind-blueprint/pages/mainPage.tsx\",\n                                lineNumber: 85,\n                                columnNumber: 9\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: \"\\uBE44\\uC988\\uB2C8\\uC2A4 \\uBBF8\\uB514\\uC5B4 \\uAC1C\\uBC1C\\uC790\"\n                            }, void 0, false, {\n                                fileName: \"/Users/hun2/Downloads/nextjs-prisma-typescript-tailwind-blueprint/pages/mainPage.tsx\",\n                                lineNumber: 86,\n                                columnNumber: 9\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/hun2/Downloads/nextjs-prisma-typescript-tailwind-blueprint/pages/mainPage.tsx\",\n                        lineNumber: 82,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/hun2/Downloads/nextjs-prisma-typescript-tailwind-blueprint/pages/mainPage.tsx\",\n                lineNumber: 80,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/hun2/Downloads/nextjs-prisma-typescript-tailwind-blueprint/pages/mainPage.tsx\",\n        lineNumber: 18,\n        columnNumber: 5\n    }, _this);\n};\n_s(Home, \"ueaSG3dFe54Zrjg9PlhqkDW4vec=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter,\n        swr__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n    ];\n});\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7OzZCQUNqQjs7Ozs7O3FCQUNGOzs7Ozs7YUFFRixDQUNOO0NBQ0g7R0F0RktMLElBQUk7O1FBQ09KLGtEQUFTO1FBQ0FHLDJDQUFNOzs7QUFGMUJDLEtBQUFBLElBQUk7QUF3RlYsK0RBQWVBLElBQUksRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9tYWluUGFnZS50c3g/ZmQ3MSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0UGFnZSB9IGZyb20gXCJuZXh0XCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB1c2VTV1IgZnJvbSBcInN3clwiO1xuXG5jb25zdCBIb21lOiBOZXh0UGFnZSA9ICgpID0+IHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IHVzZVNXUihcIi9hcGkvdXNlcnMvbXlcIik7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGVycm9yKSB7XG4gICAgICByb3V0ZXIucmVwbGFjZShcIi9jcmVhdGUtYWNjb3VudFwiKTtcbiAgICB9XG4gIH0sIFtyb3V0ZXIsIGVycm9yXSk7XG4gIGlmICghZGF0YSkge1xuICAgIHJldHVybiA8ZGl2IC8+O1xuICB9XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCIgdy1bNjAlXSBoLTEwMHZoIHNwYWNlLXktMTBcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibS0xMCBwLTMgIGJnLWdyYXktNTAgcm91bmRlZC1sZyBzaGFkb3ctbGcgXCI+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZlbHgtcm93IFwiPlxuICAgIDxkaXYgY2xhc3NOYW1lPSdiZy1ibHVlLTMwMCB3LTUgaC01IHAtMTAgcm91bmRlZC0zeGwgbXItNSAnIC8+XG4gICAgPGRpdj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cInctMjUgbXQtMiAgdGV4dC14bCBmb250LXNlbWlib2xkXCI+e2RhdGE/Lm5hbWV9ICh7ZGF0YT8uZW1haWx9KTwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNDAwIG10LTEgdGV4dC14c1wiPuuCtCDtlITroZztlYQg7Y6Y7J207KeAIOuztOq4sDwvZGl2PlxuICAgICBcbiAgICA8L2Rpdj5cbiAgICAgXG4gICAgPC9kaXY+XG4gICAgPGhyIC8+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZlbHgtcm93XCI+XG4gICAgICAgIFxuICAgIDxkaXYgY2xhc3NOYW1lPVwibXItNyBtdC0yIG1sLTUgXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1sZyBmb250LWJvbGRcIj4yMDA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNDAwIHRleHQteHNcIj5UV0VFVFM8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXItNyBtdC0yIFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtbGcgZm9udC1ib2xkXCI+Miw1Nzk8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNDAwIHRleHQteHNcIj7tjJTroZzsnok8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXItNyBtdC0yIFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtbGcgZm9udC1ib2xkXCI+MiwzNTU8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNDAwIHRleHQteHNcIj7tjJTroZzsm4w8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgICAgXG4gICAgICAgPC9kaXY+XG5cbiAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm0tMTAgcC0zICBiZy1ncmF5LTUwIHJvdW5kZWQtbGcgc2hhZG93LWxnICBcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IHRleHQtbGcgbWItMlwiPlxuICAgICAgICAgICAg7YyU66Gc7JqwIOy2lOyynFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCIgbWwtMiBtdC0yIHRleHQteHMgdGV4dC1ibHVlLTYwMCBjdXJzb3ItcG9pbnRlclwiPuyDiOuhnCDqs6Dsuag8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIG1sLTEgbXQtMiB0ZXh0LXhzIHRleHQtYmx1ZS02MDAgY3Vyc29yLXBvaW50ZXJcIj7rqqjrkZAg67O06riwPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cblxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm0tMTAgcC0zICBiZy1ncmF5LTUwIHJvdW5kZWQtbGcgc2hhZG93LWxnICBcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IHRleHQtbGcgbWItMlwiPlxuICAgICAgICAgICAg7ISc7Jq47J2YIO2KuOugjOuTnCBcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIG1sLTIgbXQtMiB0ZXh0LXhzIHRleHQtYmx1ZS02MDAgY3Vyc29yLXBvaW50ZXJcIj7rs4Dqsr3tlZjquLA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1ibHVlLTYwMCB0ZXh0LXNtXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImN1cnNvci1wb2ludGVyXCI+XG4gICAgICAgICAgICDslrTsqYzqs6Ag7KCA7KmM6rOgXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY3Vyc29yLXBvaW50ZXJcIj5cbiAgICAgICAgICAgIOyggOypjOqzoCDslrTsqYzqs6BcbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjdXJzb3ItcG9pbnRlclwiPlxuICAgICAgICAgICAg7Ja07KmM6rOgIOyggOypjOqzoFxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImN1cnNvci1wb2ludGVyXCI+XG4gICAgICAgICAgICDsoIDsqYzqs6Ag7Ja07KmM6rOgXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm0tMTAgcC0zICB0ZXh0LWdyYXktNDAwIGJnLWdyYXktNTAgcm91bmRlZC1sZyBzaGFkb3ctbGcgXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItMiB0ZXh0LXhsXCI+dHdpdHRlcjwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQteHNcIj5cbiAgICAgICAgPGRpdj7ikrggMjAxMiBUd2l0dGVyIO2ajOyCrOyGjOqwnCDqs6DqsJ3sp4Dsm5Ag7J207Jqp7JW96rSAPC9kaXY+XG4gICAgICAgIDxkaXY+6rCc7J247KCV67O07Leo6riJIOu4lOuhnOq3uCDsi5zsiqTthZwg7ZiE7ZmpPC9kaXY+XG4gICAgICAgIDxkaXY+7JWg7ZSM66as7LyA7J207IWYIOyekOujjOyLpCDsnbjsnqzssYTsmqkg6rSR6rOg7KO8PC9kaXY+XG4gICAgICAgIDxkaXY+67mE7KaI64uI7IqkIOuvuOuUlOyWtCDqsJzrsJzsnpA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgXG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIb21lOyJdLCJuYW1lcyI6WyJ1c2VSb3V0ZXIiLCJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVNXUiIsIkhvbWUiLCJyb3V0ZXIiLCJkYXRhIiwiZXJyb3IiLCJyZXBsYWNlIiwiZGl2IiwiY2xhc3NOYW1lIiwibmFtZSIsImVtYWlsIiwiaHIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/mainPage.tsx\n");

/***/ })

});
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

/***/ "./pages/mainPage2.tsx":
/*!*****************************!*\
  !*** ./pages/mainPage2.tsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_hun2_Downloads_nextjs_prisma_typescript_tailwind_blueprint_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_hun2_Downloads_nextjs_prisma_typescript_tailwind_blueprint_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_hun2_Downloads_nextjs_prisma_typescript_tailwind_blueprint_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swr */ \"./node_modules/swr/dist/index.mjs\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\nvar _this = undefined;\n\n\nvar _s = $RefreshSig$();\nvar HomePage = function() {\n    _s();\n    var ref = (0,swr__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\"/api/tweets\"), tweets = ref.data, mutateTweets = ref.mutate;\n    var handleCreateTweet = function() {\n        var _ref = _asyncToGenerator(_Users_hun2_Downloads_nextjs_prisma_typescript_tailwind_blueprint_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var content, res;\n            return _Users_hun2_Downloads_nextjs_prisma_typescript_tailwind_blueprint_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        content = prompt(\"Enter your tweet:\");\n                        if (!content) {\n                            _ctx.next = 6;\n                            break;\n                        }\n                        _ctx.next = 4;\n                        return fetch(\"/api/tweets\", {\n                            method: \"POST\",\n                            headers: {\n                                \"Content-Type\": \"application/json\"\n                            },\n                            body: JSON.stringify({\n                                content: content\n                            })\n                        });\n                    case 4:\n                        res = _ctx.sent;\n                        if (res.ok) {\n                            mutateTweets();\n                        }\n                    case 6:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function handleCreateTweet() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: \"w-full h-screen overflow-auto bg-slate-500 \",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"flex fixed items-center h-20 bg-gray-50 w-[800px]\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: \"flex ml-5 text-2xl font-bold\",\n                        children: \"\\uD2B8\\uC717\"\n                    }, void 0, false, {\n                        fileName: \"/Users/hun2/Downloads/nextjs-prisma-typescript-tailwind-blueprint/pages/mainPage2.tsx\",\n                        lineNumber: 30,\n                        columnNumber: 3\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: \"bg-blue-500 ml-[500px]\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                            onClick: handleCreateTweet,\n                            children: \"Create Tweet\"\n                        }, void 0, false, {\n                            fileName: \"/Users/hun2/Downloads/nextjs-prisma-typescript-tailwind-blueprint/pages/mainPage2.tsx\",\n                            lineNumber: 32,\n                            columnNumber: 5\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/hun2/Downloads/nextjs-prisma-typescript-tailwind-blueprint/pages/mainPage2.tsx\",\n                        lineNumber: 31,\n                        columnNumber: 3\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/hun2/Downloads/nextjs-prisma-typescript-tailwind-blueprint/pages/mainPage2.tsx\",\n                lineNumber: 29,\n                columnNumber: 6\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \" p-2 mt-20 overflow-y-scroll \",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                    className: \"space-y-10\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                            className: \"mb-3 p-5 bg-red-200 flex felx-row\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                    className: \"bg-blue-300 w-5 h-5 p-10 rounded-3xl left-0 \"\n                                }, void 0, false, {\n                                    fileName: \"/Users/hun2/Downloads/nextjs-prisma-typescript-tailwind-blueprint/pages/mainPage2.tsx\",\n                                    lineNumber: 39,\n                                    columnNumber: 9\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                    className: \"m-2\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                            children: \"ava1\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/hun2/Downloads/nextjs-prisma-typescript-tailwind-blueprint/pages/mainPage2.tsx\",\n                                            lineNumber: 41,\n                                            columnNumber: 11\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                            children: \"contetasdsdasddsdadasdadadsa\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/hun2/Downloads/nextjs-prisma-typescript-tailwind-blueprint/pages/mainPage2.tsx\",\n                                            lineNumber: 42,\n                                            columnNumber: 11\n                                        }, _this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/hun2/Downloads/nextjs-prisma-typescript-tailwind-blueprint/pages/mainPage2.tsx\",\n                                    lineNumber: 40,\n                                    columnNumber: 11\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/hun2/Downloads/nextjs-prisma-typescript-tailwind-blueprint/pages/mainPage2.tsx\",\n                            lineNumber: 38,\n                            columnNumber: 9\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                            className: \"mb-3 p-5 bg-red-200 flex felx-row\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                    className: \"bg-blue-300 w-5 h-5 p-10 rounded-3xl left-0 \"\n                                }, void 0, false, {\n                                    fileName: \"/Users/hun2/Downloads/nextjs-prisma-typescript-tailwind-blueprint/pages/mainPage2.tsx\",\n                                    lineNumber: 46,\n                                    columnNumber: 9\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                    className: \"m-2\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                            children: \"ava1\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/hun2/Downloads/nextjs-prisma-typescript-tailwind-blueprint/pages/mainPage2.tsx\",\n                                            lineNumber: 48,\n                                            columnNumber: 11\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                            children: \"contetasdsdasddsdadasdadadsa\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/hun2/Downloads/nextjs-prisma-typescript-tailwind-blueprint/pages/mainPage2.tsx\",\n                                            lineNumber: 49,\n                                            columnNumber: 11\n                                        }, _this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/hun2/Downloads/nextjs-prisma-typescript-tailwind-blueprint/pages/mainPage2.tsx\",\n                                    lineNumber: 47,\n                                    columnNumber: 11\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/hun2/Downloads/nextjs-prisma-typescript-tailwind-blueprint/pages/mainPage2.tsx\",\n                            lineNumber: 45,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                            className: \"mb-3 p-5 bg-red-200 flex felx-row\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                    className: \"bg-blue-300 w-5 h-5 p-10 rounded-3xl left-0 \"\n                                }, void 0, false, {\n                                    fileName: \"/Users/hun2/Downloads/nextjs-prisma-typescript-tailwind-blueprint/pages/mainPage2.tsx\",\n                                    lineNumber: 53,\n                                    columnNumber: 9\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                    className: \"m-2\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                            children: \"ava1\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/hun2/Downloads/nextjs-prisma-typescript-tailwind-blueprint/pages/mainPage2.tsx\",\n                                            lineNumber: 55,\n                                            columnNumber: 11\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                            children: \"contetasdsdasddsdadasdadadsa\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/hun2/Downloads/nextjs-prisma-typescript-tailwind-blueprint/pages/mainPage2.tsx\",\n                                            lineNumber: 56,\n                                            columnNumber: 11\n                                        }, _this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/hun2/Downloads/nextjs-prisma-typescript-tailwind-blueprint/pages/mainPage2.tsx\",\n                                    lineNumber: 54,\n                                    columnNumber: 11\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/hun2/Downloads/nextjs-prisma-typescript-tailwind-blueprint/pages/mainPage2.tsx\",\n                            lineNumber: 52,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                            className: \"mb-10 p-5 bg-red-200 flex felx-row\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                    className: \"bg-blue-300 w-5 h-5 p-10 rounded-3xl left-0 \"\n                                }, void 0, false, {\n                                    fileName: \"/Users/hun2/Downloads/nextjs-prisma-typescript-tailwind-blueprint/pages/mainPage2.tsx\",\n                                    lineNumber: 60,\n                                    columnNumber: 9\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                    className: \"m-2\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                            children: \"ava1\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/hun2/Downloads/nextjs-prisma-typescript-tailwind-blueprint/pages/mainPage2.tsx\",\n                                            lineNumber: 62,\n                                            columnNumber: 11\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                            children: \"contetasdsdasddsdadasdadadsa\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/hun2/Downloads/nextjs-prisma-typescript-tailwind-blueprint/pages/mainPage2.tsx\",\n                                            lineNumber: 63,\n                                            columnNumber: 11\n                                        }, _this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/hun2/Downloads/nextjs-prisma-typescript-tailwind-blueprint/pages/mainPage2.tsx\",\n                                    lineNumber: 61,\n                                    columnNumber: 11\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/hun2/Downloads/nextjs-prisma-typescript-tailwind-blueprint/pages/mainPage2.tsx\",\n                            lineNumber: 59,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                            className: \"mb-10 p-5 bg-red-200 flex felx-row\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                    className: \"bg-blue-300 w-5 h-5 p-10 rounded-3xl left-0 \"\n                                }, void 0, false, {\n                                    fileName: \"/Users/hun2/Downloads/nextjs-prisma-typescript-tailwind-blueprint/pages/mainPage2.tsx\",\n                                    lineNumber: 67,\n                                    columnNumber: 9\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                    className: \"m-2\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                            children: \"ava1\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/hun2/Downloads/nextjs-prisma-typescript-tailwind-blueprint/pages/mainPage2.tsx\",\n                                            lineNumber: 69,\n                                            columnNumber: 11\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                            children: \"contetasdsdasddsdadasdadadsa\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/hun2/Downloads/nextjs-prisma-typescript-tailwind-blueprint/pages/mainPage2.tsx\",\n                                            lineNumber: 70,\n                                            columnNumber: 11\n                                        }, _this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/hun2/Downloads/nextjs-prisma-typescript-tailwind-blueprint/pages/mainPage2.tsx\",\n                                    lineNumber: 68,\n                                    columnNumber: 11\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/hun2/Downloads/nextjs-prisma-typescript-tailwind-blueprint/pages/mainPage2.tsx\",\n                            lineNumber: 66,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                            className: \"mb-10 p-5 bg-red-200 flex felx-row\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                    className: \"bg-blue-300 w-5 h-5 p-10 rounded-3xl left-0 \"\n                                }, void 0, false, {\n                                    fileName: \"/Users/hun2/Downloads/nextjs-prisma-typescript-tailwind-blueprint/pages/mainPage2.tsx\",\n                                    lineNumber: 74,\n                                    columnNumber: 9\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                    className: \"m-2\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                            children: \"ava1\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/hun2/Downloads/nextjs-prisma-typescript-tailwind-blueprint/pages/mainPage2.tsx\",\n                                            lineNumber: 76,\n                                            columnNumber: 11\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                            children: \"contetasdsdasddsdadasdadadsa\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/hun2/Downloads/nextjs-prisma-typescript-tailwind-blueprint/pages/mainPage2.tsx\",\n                                            lineNumber: 77,\n                                            columnNumber: 11\n                                        }, _this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/hun2/Downloads/nextjs-prisma-typescript-tailwind-blueprint/pages/mainPage2.tsx\",\n                                    lineNumber: 75,\n                                    columnNumber: 11\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/hun2/Downloads/nextjs-prisma-typescript-tailwind-blueprint/pages/mainPage2.tsx\",\n                            lineNumber: 73,\n                            columnNumber: 11\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/hun2/Downloads/nextjs-prisma-typescript-tailwind-blueprint/pages/mainPage2.tsx\",\n                    lineNumber: 37,\n                    columnNumber: 7\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/hun2/Downloads/nextjs-prisma-typescript-tailwind-blueprint/pages/mainPage2.tsx\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/hun2/Downloads/nextjs-prisma-typescript-tailwind-blueprint/pages/mainPage2.tsx\",\n        lineNumber: 28,\n        columnNumber: 5\n    }, _this);\n};\n_s(HomePage, \"ddOhZ40HkLHStq/Ffe+Hy3tszH4=\", false, function() {\n    return [\n        swr__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n    ];\n});\n_c = HomePage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomePage);\nvar _c;\n$RefreshReg$(_c, \"HomePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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UyxFQUFDLG9DQUFvQzs7OENBQ3JELDhEQUFDRCxLQUFHO29DQUFDQyxTQUFTLEVBQUMsOENBQThDOzs7Ozt5Q0FBRzs4Q0FDOUQsOERBQUNELEtBQUc7b0NBQUNDLFNBQVMsRUFBQyxLQUFLOztzREFDcEIsOERBQUNELEtBQUc7c0RBQUMsTUFBSTs7Ozs7aURBQU07c0RBQ2YsOERBQUNBLEtBQUc7c0RBQUMsOEJBQTRCOzs7OztpREFBTTs7Ozs7O3lDQUNqQzs7Ozs7O2lDQUNBO3NDQUNOLDhEQUFDQSxLQUFHOzRCQUFDQyxTQUFTLEVBQUMsb0NBQW9DOzs4Q0FDckQsOERBQUNELEtBQUc7b0NBQUNDLFNBQVMsRUFBQyw4Q0FBOEM7Ozs7O3lDQUFHOzhDQUM5RCw4REFBQ0QsS0FBRztvQ0FBQ0MsU0FBUyxFQUFDLEtBQUs7O3NEQUNwQiw4REFBQ0QsS0FBRztzREFBQyxNQUFJOzs7OztpREFBTTtzREFDZiw4REFBQ0EsS0FBRztzREFBQyw4QkFBNEI7Ozs7O2lEQUFNOzs7Ozs7eUNBQ2pDOzs7Ozs7aUNBQ0E7c0NBQ04sOERBQUNBLEtBQUc7NEJBQUNDLFNBQVMsRUFBQyxvQ0FBb0M7OzhDQUNyRCw4REFBQ0QsS0FBRztvQ0FBQ0MsU0FBUyxFQUFDLDhDQUE4Qzs7Ozs7eUNBQUc7OENBQzlELDhEQUFDRCxLQUFHO29DQUFDQyxTQUFTLEVBQUMsS0FBSzs7c0RBQ3BCLDhEQUFDRCxLQUFHO3NEQUFDLE1BQUk7Ozs7O2lEQUFNO3NEQUNmLDhEQUFDQSxLQUFHO3NEQUFDLDhCQUE0Qjs7Ozs7aURBQU07Ozs7Ozt5Q0FDakM7Ozs7OztpQ0FDQTs7Ozs7O3lCQUNKOzs7OztxQkFRQTs7Ozs7O2FBQ0YsQ0FDTjtDQUNIO0dBdkZLaEIsUUFBUTs7UUFDbUNELDJDQUFNOzs7QUFEakRDLEtBQUFBLFFBQVE7QUF5RmQsK0RBQWVBLFFBQVEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9tYWluUGFnZTIudHN4PzljZTkiXSwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgdXNlU1dSIGZyb20gJ3N3cic7XG5cbmNvbnN0IEhvbWVQYWdlID0gKCkgPT4ge1xuICBjb25zdCB7IGRhdGE6IHR3ZWV0cywgbXV0YXRlOiBtdXRhdGVUd2VldHMgfSA9IHVzZVNXUignL2FwaS90d2VldHMnKTtcblxuICBcblxuICBjb25zdCBoYW5kbGVDcmVhdGVUd2VldCA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCBjb250ZW50ID0gcHJvbXB0KCdFbnRlciB5b3VyIHR3ZWV0OicpO1xuICAgIGlmIChjb250ZW50KSB7XG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnL2FwaS90d2VldHMnLCB7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgfSxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBjb250ZW50IH0pLFxuICAgICAgfSk7XG4gICAgICBpZiAocmVzLm9rKSB7XG4gICAgICAgIG11dGF0ZVR3ZWV0cygpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT0ndy1mdWxsIGgtc2NyZWVuICBvdmVyZmxvdy1hdXRvIGJnLXNsYXRlLTUwMCAnPlxuICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBmaXhlZCAgaXRlbXMtY2VudGVyIGgtMjAgYmctZ3JheS01MCB3LVs4MDBweF0nPlxuICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBtbC01IHRleHQtMnhsIGZvbnQtYm9sZCc+7Yq47JyXPC9kaXY+XG4gIDxkaXYgY2xhc3NOYW1lPSdiZy1ibHVlLTUwMCBtbC1bNTAwcHhdJz5cbiAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUNyZWF0ZVR3ZWV0fT5DcmVhdGUgVHdlZXQ8L2J1dHRvbj5cbiAgPC9kaXY+XG48L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9JyBwLTIgbXQtMjAgIG92ZXJmbG93LXktc2Nyb2xsICc+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktMTBcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J21iLTMgcC01IGJnLXJlZC0yMDAgZmxleCBmZWx4LXJvdyc+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdiZy1ibHVlLTMwMCB3LTUgaC01IHAtMTAgcm91bmRlZC0zeGwgbGVmdC0wICcgLz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbS0yJz5cbiAgICAgICAgICA8ZGl2PmF2YTE8L2Rpdj5cbiAgICAgICAgICA8ZGl2PmNvbnRldGFzZHNkYXNkZHNkYWRhc2RhZGFkc2E8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbWItMyBwLTUgYmctcmVkLTIwMCBmbGV4IGZlbHgtcm93Jz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2JnLWJsdWUtMzAwIHctNSBoLTUgcC0xMCByb3VuZGVkLTN4bCBsZWZ0LTAgJyAvPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtLTInPlxuICAgICAgICAgIDxkaXY+YXZhMTwvZGl2PlxuICAgICAgICAgIDxkaXY+Y29udGV0YXNkc2Rhc2Rkc2RhZGFzZGFkYWRzYTwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtYi0zIHAtNSBiZy1yZWQtMjAwIGZsZXggZmVseC1yb3cnPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYmctYmx1ZS0zMDAgdy01IGgtNSBwLTEwIHJvdW5kZWQtM3hsIGxlZnQtMCAnIC8+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J20tMic+XG4gICAgICAgICAgPGRpdj5hdmExPC9kaXY+XG4gICAgICAgICAgPGRpdj5jb250ZXRhc2RzZGFzZGRzZGFkYXNkYWRhZHNhPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J21iLTEwIHAtNSBiZy1yZWQtMjAwIGZsZXggZmVseC1yb3cnPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYmctYmx1ZS0zMDAgdy01IGgtNSBwLTEwIHJvdW5kZWQtM3hsIGxlZnQtMCAnIC8+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J20tMic+XG4gICAgICAgICAgPGRpdj5hdmExPC9kaXY+XG4gICAgICAgICAgPGRpdj5jb250ZXRhc2RzZGFzZGRzZGFkYXNkYWRhZHNhPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J21iLTEwIHAtNSBiZy1yZWQtMjAwIGZsZXggZmVseC1yb3cnPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYmctYmx1ZS0zMDAgdy01IGgtNSBwLTEwIHJvdW5kZWQtM3hsIGxlZnQtMCAnIC8+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J20tMic+XG4gICAgICAgICAgPGRpdj5hdmExPC9kaXY+XG4gICAgICAgICAgPGRpdj5jb250ZXRhc2RzZGFzZGRzZGFkYXNkYWRhZHNhPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J21iLTEwIHAtNSBiZy1yZWQtMjAwIGZsZXggZmVseC1yb3cnPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYmctYmx1ZS0zMDAgdy01IGgtNSBwLTEwIHJvdW5kZWQtM3hsIGxlZnQtMCAnIC8+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J20tMic+XG4gICAgICAgICAgPGRpdj5hdmExPC9kaXY+XG4gICAgICAgICAgPGRpdj5jb250ZXRhc2RzZGFzZGRzZGFkYXNkYWRhZHNhPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgXG4gICAgICAgIFxuICAgICAgICB7Lyoge3R3ZWV0cz8ubWFwKCh0d2VldCkgPT4gKFxuICAgICAgICAgIDxsaSBrZXk9e3R3ZWV0LmlkfT5cbiAgICAgICAgICAgIHt0d2VldC5jb250ZW50fSAtIExpa2VzOiB7dHdlZXQubGlrZXN9XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgKSl9ICovfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIb21lUGFnZTsiXSwibmFtZXMiOlsidXNlU1dSIiwiSG9tZVBhZ2UiLCJkYXRhIiwidHdlZXRzIiwibXV0YXRlIiwibXV0YXRlVHdlZXRzIiwiaGFuZGxlQ3JlYXRlVHdlZXQiLCJjb250ZW50IiwicmVzIiwicHJvbXB0IiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJvayIsImRpdiIsImNsYXNzTmFtZSIsImJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/mainPage2.tsx\n");

/***/ })

});
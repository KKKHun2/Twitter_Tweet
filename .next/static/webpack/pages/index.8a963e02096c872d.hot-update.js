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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_hun2_Downloads_nextjs_prisma_typescript_tailwind_blueprint_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_hun2_Downloads_nextjs_prisma_typescript_tailwind_blueprint_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_hun2_Downloads_nextjs_prisma_typescript_tailwind_blueprint_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swr */ \"./node_modules/swr/dist/index.mjs\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\nvar _this = undefined;\n\n\nvar _s = $RefreshSig$();\nvar HomePage = function() {\n    var _this1 = _this;\n    _s();\n    var ref = (0,swr__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\"/api/tweets\"), tweets = ref.data, mutateTweets = ref.mutate;\n    var handleCreateTweet = function() {\n        var _ref = _asyncToGenerator(_Users_hun2_Downloads_nextjs_prisma_typescript_tailwind_blueprint_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var content, res;\n            return _Users_hun2_Downloads_nextjs_prisma_typescript_tailwind_blueprint_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        content = prompt(\"Enter your tweet:\");\n                        if (!content) {\n                            _ctx.next = 6;\n                            break;\n                        }\n                        _ctx.next = 4;\n                        return fetch(\"/api/tweets\", {\n                            method: \"POST\",\n                            headers: {\n                                \"Content-Type\": \"application/json\"\n                            },\n                            body: JSON.stringify({\n                                content: content\n                            })\n                        });\n                    case 4:\n                        res = _ctx.sent;\n                        if (res.ok) {\n                            mutateTweets();\n                        }\n                    case 6:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function handleCreateTweet() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: \"w-full h-screen overflow-auto bg-slate-500 \",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"flex fixed items-center h-20 bg-red-400 w-full\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: \"flex ml-5 text-2xl font-bold\",\n                        children: \"\\uD2B8\\uC717\"\n                    }, void 0, false, {\n                        fileName: \"/Users/hun2/Downloads/nextjs-prisma-typescript-tailwind-blueprint/pages/mainPage2.tsx\",\n                        lineNumber: 30,\n                        columnNumber: 3\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: \"bg-blue-500 ml-60\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                            onClick: handleCreateTweet,\n                            children: \"Create Tweet\"\n                        }, void 0, false, {\n                            fileName: \"/Users/hun2/Downloads/nextjs-prisma-typescript-tailwind-blueprint/pages/mainPage2.tsx\",\n                            lineNumber: 32,\n                            columnNumber: 5\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/hun2/Downloads/nextjs-prisma-typescript-tailwind-blueprint/pages/mainPage2.tsx\",\n                        lineNumber: 31,\n                        columnNumber: 3\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/hun2/Downloads/nextjs-prisma-typescript-tailwind-blueprint/pages/mainPage2.tsx\",\n                lineNumber: 29,\n                columnNumber: 6\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \" p-2 mt-20 overflow-y-scroll \",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: \"space-y-10\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                className: \"mb-3 p-5 bg-red-200 flex felx-row\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                        className: \"bg-blue-300 w-5 h-5 p-10 rounded-3xl left-0 \"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/hun2/Downloads/nextjs-prisma-typescript-tailwind-blueprint/pages/mainPage2.tsx\",\n                                        lineNumber: 39,\n                                        columnNumber: 9\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                        className: \"m-2\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                                children: \"ava1\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/hun2/Downloads/nextjs-prisma-typescript-tailwind-blueprint/pages/mainPage2.tsx\",\n                                                lineNumber: 41,\n                                                columnNumber: 11\n                                            }, _this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                                children: \"contetasdsdasddsdadasdadadsa\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/hun2/Downloads/nextjs-prisma-typescript-tailwind-blueprint/pages/mainPage2.tsx\",\n                                                lineNumber: 42,\n                                                columnNumber: 11\n                                            }, _this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/hun2/Downloads/nextjs-prisma-typescript-tailwind-blueprint/pages/mainPage2.tsx\",\n                                        lineNumber: 40,\n                                        columnNumber: 11\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/hun2/Downloads/nextjs-prisma-typescript-tailwind-blueprint/pages/mainPage2.tsx\",\n                                lineNumber: 38,\n                                columnNumber: 9\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                className: \"mb-3 p-5 bg-red-200 flex felx-row\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                        className: \"bg-blue-300 w-5 h-5 p-10 rounded-3xl left-0 \"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/hun2/Downloads/nextjs-prisma-typescript-tailwind-blueprint/pages/mainPage2.tsx\",\n                                        lineNumber: 46,\n                                        columnNumber: 9\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                        className: \"m-2\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                                children: \"ava1\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/hun2/Downloads/nextjs-prisma-typescript-tailwind-blueprint/pages/mainPage2.tsx\",\n                                                lineNumber: 48,\n                                                columnNumber: 11\n                                            }, _this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                                children: \"contetasdsdasddsdadasdadadsa\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/hun2/Downloads/nextjs-prisma-typescript-tailwind-blueprint/pages/mainPage2.tsx\",\n                                                lineNumber: 49,\n                                                columnNumber: 11\n                                            }, _this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/hun2/Downloads/nextjs-prisma-typescript-tailwind-blueprint/pages/mainPage2.tsx\",\n                                        lineNumber: 47,\n                                        columnNumber: 11\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/hun2/Downloads/nextjs-prisma-typescript-tailwind-blueprint/pages/mainPage2.tsx\",\n                                lineNumber: 45,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                className: \"mb-3 p-5 bg-red-200 flex felx-row\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                        className: \"bg-blue-300 w-5 h-5 p-10 rounded-3xl left-0 \"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/hun2/Downloads/nextjs-prisma-typescript-tailwind-blueprint/pages/mainPage2.tsx\",\n                                        lineNumber: 53,\n                                        columnNumber: 9\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                        className: \"m-2\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                                children: \"ava1\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/hun2/Downloads/nextjs-prisma-typescript-tailwind-blueprint/pages/mainPage2.tsx\",\n                                                lineNumber: 55,\n                                                columnNumber: 11\n                                            }, _this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                                children: \"contetasdsdasddsdadasdadadsa\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/hun2/Downloads/nextjs-prisma-typescript-tailwind-blueprint/pages/mainPage2.tsx\",\n                                                lineNumber: 56,\n                                                columnNumber: 11\n                                            }, _this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/hun2/Downloads/nextjs-prisma-typescript-tailwind-blueprint/pages/mainPage2.tsx\",\n                                        lineNumber: 54,\n                                        columnNumber: 11\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/hun2/Downloads/nextjs-prisma-typescript-tailwind-blueprint/pages/mainPage2.tsx\",\n                                lineNumber: 52,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                className: \"mb-10 p-5 bg-red-200 flex felx-row\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                        className: \"bg-blue-300 w-5 h-5 p-10 rounded-3xl left-0 \"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/hun2/Downloads/nextjs-prisma-typescript-tailwind-blueprint/pages/mainPage2.tsx\",\n                                        lineNumber: 60,\n                                        columnNumber: 9\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                        className: \"m-2\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                                children: \"ava1\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/hun2/Downloads/nextjs-prisma-typescript-tailwind-blueprint/pages/mainPage2.tsx\",\n                                                lineNumber: 62,\n                                                columnNumber: 11\n                                            }, _this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                                children: \"contetasdsdasddsdadasdadadsa\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/hun2/Downloads/nextjs-prisma-typescript-tailwind-blueprint/pages/mainPage2.tsx\",\n                                                lineNumber: 63,\n                                                columnNumber: 11\n                                            }, _this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/hun2/Downloads/nextjs-prisma-typescript-tailwind-blueprint/pages/mainPage2.tsx\",\n                                        lineNumber: 61,\n                                        columnNumber: 11\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/hun2/Downloads/nextjs-prisma-typescript-tailwind-blueprint/pages/mainPage2.tsx\",\n                                lineNumber: 59,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                className: \"mb-10 p-5 bg-red-200 flex felx-row\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                        className: \"bg-blue-300 w-5 h-5 p-10 rounded-3xl left-0 \"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/hun2/Downloads/nextjs-prisma-typescript-tailwind-blueprint/pages/mainPage2.tsx\",\n                                        lineNumber: 67,\n                                        columnNumber: 9\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                        className: \"m-2\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                                children: \"ava1\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/hun2/Downloads/nextjs-prisma-typescript-tailwind-blueprint/pages/mainPage2.tsx\",\n                                                lineNumber: 69,\n                                                columnNumber: 11\n                                            }, _this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                                children: \"contetasdsdasddsdadasdadadsa\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/hun2/Downloads/nextjs-prisma-typescript-tailwind-blueprint/pages/mainPage2.tsx\",\n                                                lineNumber: 70,\n                                                columnNumber: 11\n                                            }, _this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/hun2/Downloads/nextjs-prisma-typescript-tailwind-blueprint/pages/mainPage2.tsx\",\n                                        lineNumber: 68,\n                                        columnNumber: 11\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/hun2/Downloads/nextjs-prisma-typescript-tailwind-blueprint/pages/mainPage2.tsx\",\n                                lineNumber: 66,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                className: \"mb-10 p-5 bg-red-200 flex felx-row\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                        className: \"bg-blue-300 w-5 h-5 p-10 rounded-3xl left-0 \"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/hun2/Downloads/nextjs-prisma-typescript-tailwind-blueprint/pages/mainPage2.tsx\",\n                                        lineNumber: 74,\n                                        columnNumber: 9\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                        className: \"m-2\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                                children: \"ava1\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/hun2/Downloads/nextjs-prisma-typescript-tailwind-blueprint/pages/mainPage2.tsx\",\n                                                lineNumber: 76,\n                                                columnNumber: 11\n                                            }, _this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                                children: \"contetasdsdasddsdadasdadadsa\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/hun2/Downloads/nextjs-prisma-typescript-tailwind-blueprint/pages/mainPage2.tsx\",\n                                                lineNumber: 77,\n                                                columnNumber: 11\n                                            }, _this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/hun2/Downloads/nextjs-prisma-typescript-tailwind-blueprint/pages/mainPage2.tsx\",\n                                        lineNumber: 75,\n                                        columnNumber: 11\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/hun2/Downloads/nextjs-prisma-typescript-tailwind-blueprint/pages/mainPage2.tsx\",\n                                lineNumber: 73,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/hun2/Downloads/nextjs-prisma-typescript-tailwind-blueprint/pages/mainPage2.tsx\",\n                        lineNumber: 37,\n                        columnNumber: 7\n                    }, _this),\n                    tweets === null || tweets === void 0 ? void 0 : tweets.map(function(tweet) {\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"li\", {\n                            children: [\n                                tweet.content,\n                                \" - Likes: \",\n                                tweet.likes\n                            ]\n                        }, tweet.id, true, {\n                            fileName: \"/Users/hun2/Downloads/nextjs-prisma-typescript-tailwind-blueprint/pages/mainPage2.tsx\",\n                            lineNumber: 84,\n                            columnNumber: 11\n                        }, _this1);\n                    })\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/hun2/Downloads/nextjs-prisma-typescript-tailwind-blueprint/pages/mainPage2.tsx\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/hun2/Downloads/nextjs-prisma-typescript-tailwind-blueprint/pages/mainPage2.tsx\",\n        lineNumber: 28,\n        columnNumber: 5\n    }, _this);\n};\n_s(HomePage, \"ddOhZ40HkLHStq/Ffe+Hy3tszH4=\", false, function() {\n    return [\n        swr__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n    ];\n});\n_c = HomePage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomePage);\nvar _c;\n$RefreshReg$(_c, \"HomePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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a0NBRVo7cUJBQ04sQ0FBQzs7Ozs7O3FCQUNFOzs7Ozs7YUFDRixDQUNOO0NBQ0g7R0F2Rkt4QixRQUFROztRQUNtQ0QsMkNBQU07OztBQURqREMsS0FBQUEsUUFBUTtBQXlGZCwrREFBZUEsUUFBUSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL21haW5QYWdlMi50c3g/OWNlOSJdLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB1c2VTV1IgZnJvbSAnc3dyJztcblxuY29uc3QgSG9tZVBhZ2UgPSAoKSA9PiB7XG4gIGNvbnN0IHsgZGF0YTogdHdlZXRzLCBtdXRhdGU6IG11dGF0ZVR3ZWV0cyB9ID0gdXNlU1dSKCcvYXBpL3R3ZWV0cycpO1xuXG4gIFxuXG4gIGNvbnN0IGhhbmRsZUNyZWF0ZVR3ZWV0ID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBwcm9tcHQoJ0VudGVyIHlvdXIgdHdlZXQ6Jyk7XG4gICAgaWYgKGNvbnRlbnQpIHtcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCcvYXBpL3R3ZWV0cycsIHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICB9LFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IGNvbnRlbnQgfSksXG4gICAgICB9KTtcbiAgICAgIGlmIChyZXMub2spIHtcbiAgICAgICAgbXV0YXRlVHdlZXRzKCk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG5cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPSd3LWZ1bGwgaC1zY3JlZW4gIG92ZXJmbG93LWF1dG8gYmctc2xhdGUtNTAwICc+XG4gICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGZpeGVkICBpdGVtcy1jZW50ZXIgaC0yMCBiZy1yZWQtNDAwIHctZnVsbCc+XG4gIDxkaXYgY2xhc3NOYW1lPSdmbGV4IG1sLTUgdGV4dC0yeGwgZm9udC1ib2xkJz7tirjsnJc8L2Rpdj5cbiAgPGRpdiBjbGFzc05hbWU9J2JnLWJsdWUtNTAwIG1sLTYwJz5cbiAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUNyZWF0ZVR3ZWV0fT5DcmVhdGUgVHdlZXQ8L2J1dHRvbj5cbiAgPC9kaXY+XG48L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9JyBwLTIgbXQtMjAgIG92ZXJmbG93LXktc2Nyb2xsICc+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktMTBcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J21iLTMgcC01IGJnLXJlZC0yMDAgZmxleCBmZWx4LXJvdyc+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdiZy1ibHVlLTMwMCB3LTUgaC01IHAtMTAgcm91bmRlZC0zeGwgbGVmdC0wICcgLz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbS0yJz5cbiAgICAgICAgICA8ZGl2PmF2YTE8L2Rpdj5cbiAgICAgICAgICA8ZGl2PmNvbnRldGFzZHNkYXNkZHNkYWRhc2RhZGFkc2E8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbWItMyBwLTUgYmctcmVkLTIwMCBmbGV4IGZlbHgtcm93Jz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2JnLWJsdWUtMzAwIHctNSBoLTUgcC0xMCByb3VuZGVkLTN4bCBsZWZ0LTAgJyAvPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtLTInPlxuICAgICAgICAgIDxkaXY+YXZhMTwvZGl2PlxuICAgICAgICAgIDxkaXY+Y29udGV0YXNkc2Rhc2Rkc2RhZGFzZGFkYWRzYTwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtYi0zIHAtNSBiZy1yZWQtMjAwIGZsZXggZmVseC1yb3cnPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYmctYmx1ZS0zMDAgdy01IGgtNSBwLTEwIHJvdW5kZWQtM3hsIGxlZnQtMCAnIC8+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J20tMic+XG4gICAgICAgICAgPGRpdj5hdmExPC9kaXY+XG4gICAgICAgICAgPGRpdj5jb250ZXRhc2RzZGFzZGRzZGFkYXNkYWRhZHNhPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J21iLTEwIHAtNSBiZy1yZWQtMjAwIGZsZXggZmVseC1yb3cnPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYmctYmx1ZS0zMDAgdy01IGgtNSBwLTEwIHJvdW5kZWQtM3hsIGxlZnQtMCAnIC8+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J20tMic+XG4gICAgICAgICAgPGRpdj5hdmExPC9kaXY+XG4gICAgICAgICAgPGRpdj5jb250ZXRhc2RzZGFzZGRzZGFkYXNkYWRhZHNhPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J21iLTEwIHAtNSBiZy1yZWQtMjAwIGZsZXggZmVseC1yb3cnPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYmctYmx1ZS0zMDAgdy01IGgtNSBwLTEwIHJvdW5kZWQtM3hsIGxlZnQtMCAnIC8+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J20tMic+XG4gICAgICAgICAgPGRpdj5hdmExPC9kaXY+XG4gICAgICAgICAgPGRpdj5jb250ZXRhc2RzZGFzZGRzZGFkYXNkYWRhZHNhPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J21iLTEwIHAtNSBiZy1yZWQtMjAwIGZsZXggZmVseC1yb3cnPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYmctYmx1ZS0zMDAgdy01IGgtNSBwLTEwIHJvdW5kZWQtM3hsIGxlZnQtMCAnIC8+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J20tMic+XG4gICAgICAgICAgPGRpdj5hdmExPC9kaXY+XG4gICAgICAgICAgPGRpdj5jb250ZXRhc2RzZGFzZGRzZGFkYXNkYWRhZHNhPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgXG4gICAgICAgIFxuICAgICAgICB7dHdlZXRzPy5tYXAoKHR3ZWV0KSA9PiAoXG4gICAgICAgICAgPGxpIGtleT17dHdlZXQuaWR9PlxuICAgICAgICAgICAge3R3ZWV0LmNvbnRlbnR9IC0gTGlrZXM6IHt0d2VldC5saWtlc31cbiAgICAgICAgICA8L2xpPlxuICAgICAgICApKX1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSG9tZVBhZ2U7Il0sIm5hbWVzIjpbInVzZVNXUiIsIkhvbWVQYWdlIiwiZGF0YSIsInR3ZWV0cyIsIm11dGF0ZSIsIm11dGF0ZVR3ZWV0cyIsImhhbmRsZUNyZWF0ZVR3ZWV0IiwiY29udGVudCIsInJlcyIsInByb21wdCIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5Iiwib2siLCJkaXYiLCJjbGFzc05hbWUiLCJidXR0b24iLCJvbkNsaWNrIiwibWFwIiwidHdlZXQiLCJsaSIsImxpa2VzIiwiaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/mainPage2.tsx\n");

/***/ })

});
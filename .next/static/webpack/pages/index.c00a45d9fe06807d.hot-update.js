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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_hun2_Downloads_nextjs_prisma_typescript_tailwind_blueprint_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_hun2_Downloads_nextjs_prisma_typescript_tailwind_blueprint_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_hun2_Downloads_nextjs_prisma_typescript_tailwind_blueprint_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\nvar _this = undefined;\n\nvar HomePage = function() {\n    var _this1 = _this;\n    // useSWR 훅을 사용하여 서버로부터 트윗 데이터를 비동기적으로 가져옵니다.\n    // const { data: tweets, mutate: mutateTweets } = useSWR('/api/tweets');\n    var sampleTweets = [\n        {\n            id: 1,\n            content: \"\\uD2B8\\uC717 \\uB0B4\\uC6A9 1\",\n            author: \"\\uC791\\uC131\\uC7901\"\n        },\n        {\n            id: 2,\n            content: \"\\uD2B8\\uC717 \\uB0B4\\uC6A9 2\",\n            author: \"\\uC791\\uC131\\uC7902\"\n        },\n        {\n            id: 3,\n            content: \"\\uD2B8\\uC717 \\uB0B4\\uC6A9 2\",\n            author: \"\\uC791\\uC131\\uC7902\"\n        },\n        {\n            id: 4,\n            content: \"\\uD2B8\\uC717 \\uB0B4\\uC6A9 2\",\n            author: \"\\uC791\\uC131\\uC7902\"\n        },\n        {\n            id: 5,\n            content: \"\\uD2B8\\uC717 \\uB0B4\\uC6A9 2\",\n            author: \"\\uC791\\uC131\\uC7902\"\n        }\n    ];\n    var tweets = sampleTweets;\n    var handleCreateTweet = function() {\n        var _ref = _asyncToGenerator(_Users_hun2_Downloads_nextjs_prisma_typescript_tailwind_blueprint_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var content, res;\n            return _Users_hun2_Downloads_nextjs_prisma_typescript_tailwind_blueprint_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        content = prompt(\"Enter your tweet:\");\n                        if (!content) {\n                            _ctx.next = 6;\n                            break;\n                        }\n                        _ctx.next = 4;\n                        return fetch(\"/api/tweets\", {\n                            method: \"POST\",\n                            headers: {\n                                \"Content-Type\": \"application/json\"\n                            },\n                            body: JSON.stringify({\n                                content: content\n                            })\n                        });\n                    case 4:\n                        res = _ctx.sent;\n                        if (res.ok) {\n                        // mutateTweets();\n                        }\n                    case 6:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function handleCreateTweet() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    // 트윗 데이터가 없을 경우 로딩 상태 표시\n    if (!tweets) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n            children: \"Loading...\"\n        }, void 0, false, {\n            fileName: \"/Users/hun2/Downloads/nextjs-prisma-typescript-tailwind-blueprint/pages/mainPage2.tsx\",\n            lineNumber: 55,\n            columnNumber: 12\n        }, _this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: \"w-full h-screen mt-9 overflow-auto bg-slate-500\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"flex fixed items-center h-20 rounded-md shadow-lg bg-gray-50 w-[715px]\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: \"flex ml-5 text-3xl font-bold\",\n                        children: \"\\uD2B8\\uC717\"\n                    }, void 0, false, {\n                        fileName: \"/Users/hun2/Downloads/nextjs-prisma-typescript-tailwind-blueprint/pages/mainPage2.tsx\",\n                        lineNumber: 61,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: \" ml-[540px]\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                            className: \"text-xl mt-5 font-semibold\",\n                            onClick: handleCreateTweet,\n                            children: \"\\uD2B8\\uC717\\uC791\\uC131\"\n                        }, void 0, false, {\n                            fileName: \"/Users/hun2/Downloads/nextjs-prisma-typescript-tailwind-blueprint/pages/mainPage2.tsx\",\n                            lineNumber: 63,\n                            columnNumber: 11\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/hun2/Downloads/nextjs-prisma-typescript-tailwind-blueprint/pages/mainPage2.tsx\",\n                        lineNumber: 62,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/hun2/Downloads/nextjs-prisma-typescript-tailwind-blueprint/pages/mainPage2.tsx\",\n                lineNumber: 60,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"p-2 mt-24 overflow-y-scroll\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                    className: \"space-y-10\",\n                    children: tweets.map(function(tweet) {\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                            className: \"mb-3 p-5 bg-red-200 rounded-md shadow-lg flex felx-row\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                    className: \"bg-blue-300 w-5 h-5 p-10 rounded-3xl left-0\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/hun2/Downloads/nextjs-prisma-typescript-tailwind-blueprint/pages/mainPage2.tsx\",\n                                    lineNumber: 73,\n                                    columnNumber: 15\n                                }, _this1),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                    className: \"m-2\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                            children: tweet.author\n                                        }, void 0, false, {\n                                            fileName: \"/Users/hun2/Downloads/nextjs-prisma-typescript-tailwind-blueprint/pages/mainPage2.tsx\",\n                                            lineNumber: 75,\n                                            columnNumber: 17\n                                        }, _this1),\n                                        \" \",\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                            children: tweet.content\n                                        }, void 0, false, {\n                                            fileName: \"/Users/hun2/Downloads/nextjs-prisma-typescript-tailwind-blueprint/pages/mainPage2.tsx\",\n                                            lineNumber: 76,\n                                            columnNumber: 17\n                                        }, _this1)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/hun2/Downloads/nextjs-prisma-typescript-tailwind-blueprint/pages/mainPage2.tsx\",\n                                    lineNumber: 74,\n                                    columnNumber: 15\n                                }, _this1)\n                            ]\n                        }, tweet.id, true, {\n                            fileName: \"/Users/hun2/Downloads/nextjs-prisma-typescript-tailwind-blueprint/pages/mainPage2.tsx\",\n                            lineNumber: 72,\n                            columnNumber: 13\n                        }, _this1);\n                    })\n                }, void 0, false, {\n                    fileName: \"/Users/hun2/Downloads/nextjs-prisma-typescript-tailwind-blueprint/pages/mainPage2.tsx\",\n                    lineNumber: 70,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/hun2/Downloads/nextjs-prisma-typescript-tailwind-blueprint/pages/mainPage2.tsx\",\n                lineNumber: 69,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/hun2/Downloads/nextjs-prisma-typescript-tailwind-blueprint/pages/mainPage2.tsx\",\n        lineNumber: 59,\n        columnNumber: 5\n    }, _this);\n};\n_c = HomePage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomePage);\nvar _c;\n$RefreshReg$(_c, \"HomePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7O2tDQU1aO3FCQUNQLENBQUM7Ozs7O3lCQUNFOzs7OztxQkFDRjs7Ozs7O2FBQ0YsQ0FDTjtDQUNIO0FBakZLRixLQUFBQSxRQUFRO0FBbUZkLCtEQUFlQSxRQUFRLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbWFpblBhZ2UyLnRzeD85Y2U5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB1c2VTV1IgZnJvbSAnc3dyJztcblxuY29uc3QgSG9tZVBhZ2UgPSAoKSA9PiB7XG4gIC8vIHVzZVNXUiDtm4XsnYQg7IKs7Jqp7ZWY7JesIOyEnOuyhOuhnOu2gO2EsCDtirjsnJcg642w7J207YSw66W8IOu5hOuPmeq4sOyggeycvOuhnCDqsIDsoLjsmLXri4jri6QuXG4gIC8vIGNvbnN0IHsgZGF0YTogdHdlZXRzLCBtdXRhdGU6IG11dGF0ZVR3ZWV0cyB9ID0gdXNlU1dSKCcvYXBpL3R3ZWV0cycpO1xuXG4gIGNvbnN0IHNhbXBsZVR3ZWV0cyA9IFtcbiAgICB7XG4gICAgICBpZDogMSxcbiAgICAgIGNvbnRlbnQ6IFwi7Yq47JyXIOuCtOyaqSAxXCIsXG4gICAgICBhdXRob3I6IFwi7J6R7ISx7J6QMVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgaWQ6IDIsXG4gICAgICBjb250ZW50OiBcIu2KuOyclyDrgrTsmqkgMlwiLFxuICAgICAgYXV0aG9yOiBcIuyekeyEseyekDJcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIGlkOiAzLFxuICAgICAgY29udGVudDogXCLtirjsnJcg64K07JqpIDJcIixcbiAgICAgIGF1dGhvcjogXCLsnpHshLHsnpAyXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBpZDogNCxcbiAgICAgIGNvbnRlbnQ6IFwi7Yq47JyXIOuCtOyaqSAyXCIsXG4gICAgICBhdXRob3I6IFwi7J6R7ISx7J6QMlwiLFxuICAgIH0sXG4gICAge1xuICAgICAgaWQ6IDUsXG4gICAgICBjb250ZW50OiBcIu2KuOyclyDrgrTsmqkgMlwiLFxuICAgICAgYXV0aG9yOiBcIuyekeyEseyekDJcIixcbiAgICB9LFxuICAgIC8vIOuNlCDrp47snYAg7Yq47JyXIOuNsOydtO2EsC4uLlxuICBdO1xuICBjb25zdCB0d2VldHMgPSBzYW1wbGVUd2VldHM7XG4gIFxuICBjb25zdCBoYW5kbGVDcmVhdGVUd2VldCA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCBjb250ZW50ID0gcHJvbXB0KCdFbnRlciB5b3VyIHR3ZWV0OicpO1xuICAgIGlmIChjb250ZW50KSB7XG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnL2FwaS90d2VldHMnLCB7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgfSxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBjb250ZW50IH0pLFxuICAgICAgfSk7XG4gICAgICBpZiAocmVzLm9rKSB7XG4gICAgICAgIC8vIG11dGF0ZVR3ZWV0cygpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICAvLyDtirjsnJcg642w7J207YSw6rCAIOyXhuydhCDqsr3smrAg66Gc65SpIOyDge2DnCDtkZzsi5xcbiAgaWYgKCF0d2VldHMpIHtcbiAgICByZXR1cm4gPGRpdj5Mb2FkaW5nLi4uPC9kaXY+O1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT0ndy1mdWxsIGgtc2NyZWVuIG10LTkgb3ZlcmZsb3ctYXV0byBiZy1zbGF0ZS01MDAnPlxuICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggZml4ZWQgaXRlbXMtY2VudGVyIGgtMjAgcm91bmRlZC1tZCBzaGFkb3ctbGcgYmctZ3JheS01MCB3LVs3MTVweF0nPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBtbC01IHRleHQtM3hsIGZvbnQtYm9sZCc+7Yq47JyXPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPScgbWwtWzU0MHB4XSc+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J3RleHQteGwgbXQtNSBmb250LXNlbWlib2xkJyBvbkNsaWNrPXtoYW5kbGVDcmVhdGVUd2VldH0+XG4gICAgICAgICAgICDtirjsnJfsnpHshLFcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9J3AtMiBtdC0yNCAgb3ZlcmZsb3cteS1zY3JvbGwnPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc3BhY2UteS0xMCc+XG4gICAgICAgICAge3R3ZWV0cy5tYXAoKHR3ZWV0KSA9PiAoXG4gICAgICAgICAgICA8ZGl2IGtleT17dHdlZXQuaWR9IGNsYXNzTmFtZT0nbWItMyBwLTUgYmctcmVkLTIwMCByb3VuZGVkLW1kIHNoYWRvdy1sZyBmbGV4IGZlbHgtcm93Jz5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2JnLWJsdWUtMzAwIHctNSBoLTUgcC0xMCByb3VuZGVkLTN4bCBsZWZ0LTAnIC8+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtLTInPlxuICAgICAgICAgICAgICAgIDxkaXY+e3R3ZWV0LmF1dGhvcn08L2Rpdj4gey8qIOyekeyEseyekCDsoJXrs7Trpbwg7Lac66ClICovfVxuICAgICAgICAgICAgICAgIDxkaXY+e3R3ZWV0LmNvbnRlbnR9PC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIb21lUGFnZTtcbiJdLCJuYW1lcyI6WyJIb21lUGFnZSIsInNhbXBsZVR3ZWV0cyIsImlkIiwiY29udGVudCIsImF1dGhvciIsInR3ZWV0cyIsImhhbmRsZUNyZWF0ZVR3ZWV0IiwicmVzIiwicHJvbXB0IiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJvayIsImRpdiIsImNsYXNzTmFtZSIsImJ1dHRvbiIsIm9uQ2xpY2siLCJtYXAiLCJ0d2VldCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/mainPage2.tsx\n");

/***/ })

});
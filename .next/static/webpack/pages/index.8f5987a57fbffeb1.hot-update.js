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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swr */ \"./node_modules/swr/dist/index.mjs\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\nvar _this = undefined;\n\n\n\nvar _s = $RefreshSig$();\nvar HomePage = function() {\n    var _this1 = _this;\n    _s();\n    // useSWR 훅을 사용하여 서버로부터 트윗 데이터를 비동기적으로 가져옵니다.\n    var data = (0,swr__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"/api/tweet\").data;\n    console.log(data);\n    if (!data) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: \"Loading...\"\n        }, void 0, false, {\n            fileName: \"/Users/hun2/Downloads/nextjs-prisma-typescript-tailwind-blueprint/pages/mainPage2.tsx\",\n            lineNumber: 12,\n            columnNumber: 12\n        }, _this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-[85%] h-screen mt-9 overflow-auto bg-gray-200 shadow-lg \",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex fixed items-center justify-between h-20 rounded-md shadow-lg bg-gray-50 w-[59%]\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex ml-5 text-3xl font-bold\",\n                        children: \"\\uD2B8\\uC717\"\n                    }, void 0, false, {\n                        fileName: \"/Users/hun2/Downloads/nextjs-prisma-typescript-tailwind-blueprint/pages/mainPage2.tsx\",\n                        lineNumber: 18,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \" \",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"text-xl mt-5 font-semibold\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                href: \"/tweet/upload\",\n                                children: \"\\uD2B8\\uC717\\uC791\\uC131\"\n                            }, void 0, false, {\n                                fileName: \"/Users/hun2/Downloads/nextjs-prisma-typescript-tailwind-blueprint/pages/mainPage2.tsx\",\n                                lineNumber: 21,\n                                columnNumber: 13\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/Users/hun2/Downloads/nextjs-prisma-typescript-tailwind-blueprint/pages/mainPage2.tsx\",\n                            lineNumber: 20,\n                            columnNumber: 11\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/hun2/Downloads/nextjs-prisma-typescript-tailwind-blueprint/pages/mainPage2.tsx\",\n                        lineNumber: 19,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/hun2/Downloads/nextjs-prisma-typescript-tailwind-blueprint/pages/mainPage2.tsx\",\n                lineNumber: 17,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \" mt-24 overflow-y-scroll\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"space-y-8\",\n                    children: data.tweets.map(function(tweet, id) {\n                        /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            href: \"/tweet/\".concat(id + 1),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"mb-3 p-3 cursor-pointer bg-gray-50 rounded-md shadow-lg flex flex-row\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"bg-blue-300 h-5 p-10 rounded-3xl\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/hun2/Downloads/nextjs-prisma-typescript-tailwind-blueprint/pages/mainPage2.tsx\",\n                                        lineNumber: 34,\n                                        columnNumber: 15\n                                    }, _this1),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"mt-2 ml-5\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"mb-1\",\n                                                children: tweet === null || tweet === void 0 ? void 0 : tweet.user.name\n                                            }, void 0, false, {\n                                                fileName: \"/Users/hun2/Downloads/nextjs-prisma-typescript-tailwind-blueprint/pages/mainPage2.tsx\",\n                                                lineNumber: 36,\n                                                columnNumber: 17\n                                            }, _this1),\n                                            \" \",\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                children: tweet === null || tweet === void 0 ? void 0 : tweet.content\n                                            }, void 0, false, {\n                                                fileName: \"/Users/hun2/Downloads/nextjs-prisma-typescript-tailwind-blueprint/pages/mainPage2.tsx\",\n                                                lineNumber: 37,\n                                                columnNumber: 17\n                                            }, _this1),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                children: tweet === null || tweet === void 0 ? void 0 : tweet.likes\n                                            }, void 0, false, {\n                                                fileName: \"/Users/hun2/Downloads/nextjs-prisma-typescript-tailwind-blueprint/pages/mainPage2.tsx\",\n                                                lineNumber: 38,\n                                                columnNumber: 17\n                                            }, _this1)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/hun2/Downloads/nextjs-prisma-typescript-tailwind-blueprint/pages/mainPage2.tsx\",\n                                        lineNumber: 35,\n                                        columnNumber: 15\n                                    }, _this1)\n                                ]\n                            }, tweet.id, true, {\n                                fileName: \"/Users/hun2/Downloads/nextjs-prisma-typescript-tailwind-blueprint/pages/mainPage2.tsx\",\n                                lineNumber: 33,\n                                columnNumber: 13\n                            }, _this1)\n                        }, void 0, false, {\n                            fileName: \"/Users/hun2/Downloads/nextjs-prisma-typescript-tailwind-blueprint/pages/mainPage2.tsx\",\n                            lineNumber: 32,\n                            columnNumber: 13\n                        }, _this1);\n                    })\n                }, void 0, false, {\n                    fileName: \"/Users/hun2/Downloads/nextjs-prisma-typescript-tailwind-blueprint/pages/mainPage2.tsx\",\n                    lineNumber: 30,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/hun2/Downloads/nextjs-prisma-typescript-tailwind-blueprint/pages/mainPage2.tsx\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/hun2/Downloads/nextjs-prisma-typescript-tailwind-blueprint/pages/mainPage2.tsx\",\n        lineNumber: 16,\n        columnNumber: 5\n    }, _this);\n};\n_s(HomePage, \"Bw9uScf/xQBWZKhLCWSR33xISM4=\", false, function() {\n    return [\n        swr__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n    ];\n});\n_c = HomePage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomePage);\nvar _c;\n$RefreshReg$(_c, \"HomePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9tYWluUGFnZTIudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUNBOztBQUF5QjtBQUNJOztBQUc3QixJQUFNRSxRQUFRLEdBQUcsV0FBTTs7O0lBQ3JCO0lBQ3dELElBQWxELElBQU0sR0FBS0YsK0NBQU0sQ0FBQyxZQUFZLENBQUMsQ0FBN0JHLElBQUk7SUFDYkMsT0FBTyxDQUFDQyxHQUFHLENBQUNGLElBQUksQ0FBQztJQUVoQixJQUFJLENBQUNBLElBQUksRUFBRTtRQUNULHFCQUFPLDhEQUFDRyxLQUFHO3NCQUFDLFlBQVU7Ozs7O2lCQUFNLENBQUM7S0FDOUI7SUFFRCxxQkFDRSw4REFBQ0EsS0FBRztRQUFDQyxTQUFTLEVBQUMsNERBQTREOzswQkFDekUsOERBQUNELEtBQUc7Z0JBQUNDLFNBQVMsRUFBQyxzRkFBc0Y7O2tDQUNuRyw4REFBQ0QsS0FBRzt3QkFBQ0MsU0FBUyxFQUFDLDhCQUE4QjtrQ0FBQyxjQUFFOzs7Ozs2QkFBVTtrQ0FDdEQsOERBQUhELEtBQUc7d0JBQUNDLFNBQVMsRUFBQyxHQUFHO2tDQUNoQiw0RUFBQ0MsUUFBTTs0QkFBQ0QsU0FBUyxFQUFDLDRCQUE0QjtzQ0FDNUMsNEVBQUNOLGtEQUFJO2dDQUFDUSxJQUFJLEVBQUMsZUFBZTswQ0FBRSwwQkFFNUI7Ozs7O3FDQUFPOzs7OztpQ0FFQTs7Ozs7NkJBQ0w7Ozs7OztxQkFDRjswQkFFTiw4REFBQ0gsS0FBRztnQkFBQ0MsU0FBUyxFQUFDLDBCQUEyQjswQkFDeEMsNEVBQUNELEtBQUc7b0JBQUNDLFNBQVMsRUFBQyxXQUFXOzhCQUN2QkosSUFBSSxDQUFDTyxNQUFNLENBQUNDLEdBQUcsQ0FBQyxTQUFDQyxLQUFLLEVBQUNDLEVBQUU7c0NBQ3hCLHFFQUFDWixrREFBSTs0QkFBQ1EsSUFBSSxFQUFFLFNBQVEsQ0FBTyxPQUFMSSxFQUFFLEdBQUMsQ0FBQyxDQUFFO3NDQUM1Qiw0RUFBQ1AsS0FBRztnQ0FBZ0JDLFNBQVMsRUFBQyx1RUFBd0U7O2tEQUNwRyw4REFBQ0QsS0FBRzt3Q0FBQ0MsU0FBUyxFQUFDLGtDQUFrQzs7Ozs7OENBQUc7a0RBQ3BELDhEQUFDRCxLQUFHO3dDQUFDQyxTQUFTLEVBQUMsV0FBVzs7MERBQ3hCLDhEQUFDRCxLQUFHO2dEQUFDQyxTQUFTLEVBQUMsTUFBTTswREFBRUssS0FBSyxhQUFMQSxLQUFLLFdBQU0sR0FBWEEsS0FBQUEsQ0FBVyxHQUFYQSxLQUFLLENBQUVFLElBQUksQ0FBQ0MsSUFBSTs7Ozs7c0RBQU87NENBQUEsR0FBQzswREFDL0MsOERBQUNULEtBQUc7MERBQUVNLEtBQUssYUFBTEEsS0FBSyxXQUFTLEdBQWRBLEtBQUFBLENBQWMsR0FBZEEsS0FBSyxDQUFFSSxPQUFPOzs7OztzREFBTzswREFDM0IsOERBQUNWLEtBQUc7MERBQUVNLEtBQUssYUFBTEEsS0FBSyxXQUFPLEdBQVpBLEtBQUFBLENBQVksR0FBWkEsS0FBSyxDQUFFSyxLQUFLOzs7OztzREFBTzs7Ozs7OzhDQUNyQjs7K0JBTkVMLEtBQUssQ0FBQ0MsRUFBRTs7OztzQ0FPWjs7Ozs7a0NBQ0M7cUJBQ1IsQ0FBQzs7Ozs7eUJBQ0U7Ozs7O3FCQUNGOzs7Ozs7YUFDRixDQUNOO0NBQ0g7R0F6Q0tYLFFBQVE7O1FBRUtGLDJDQUFNOzs7QUFGbkJFLEtBQUFBLFFBQVE7QUEyQ2QsK0RBQWVBLFFBQVEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9tYWluUGFnZTIudHN4PzljZTkiXSwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgdXNlU1dSIGZyb20gJ3N3cic7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5cblxuY29uc3QgSG9tZVBhZ2UgPSAoKSA9PiB7XG4gIC8vIHVzZVNXUiDtm4XsnYQg7IKs7Jqp7ZWY7JesIOyEnOuyhOuhnOu2gO2EsCDtirjsnJcg642w7J207YSw66W8IOu5hOuPmeq4sOyggeycvOuhnCDqsIDsoLjsmLXri4jri6QuXG4gIGNvbnN0IHsgZGF0YSB9ID0gdXNlU1dSKCcvYXBpL3R3ZWV0Jyk7XG4gY29uc29sZS5sb2coZGF0YSlcblxuICBpZiAoIWRhdGEpIHtcbiAgICByZXR1cm4gPGRpdj5Mb2FkaW5nLi4uPC9kaXY+O1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT0ndy1bODUlXSBoLXNjcmVlbiBtdC05IG92ZXJmbG93LWF1dG8gYmctZ3JheS0yMDAgc2hhZG93LWxnICc+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBmaXhlZCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIGgtMjAgcm91bmRlZC1tZCBzaGFkb3ctbGcgYmctZ3JheS01MCB3LVs1OSVdJz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggbWwtNSB0ZXh0LTN4bCBmb250LWJvbGQnPu2KuOyclzwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nICc+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J3RleHQteGwgbXQtNSBmb250LXNlbWlib2xkJz5cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvdHdlZXQvdXBsb2FkXCIgPlxuICAgICAgICAgICAg7Yq47JyX7J6R7ISxXG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICBcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9JyBtdC0yNCAgb3ZlcmZsb3cteS1zY3JvbGwnPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc3BhY2UteS04Jz5cbiAgICAgICAgICB7ZGF0YS50d2VldHMubWFwKCh0d2VldCxpZCkgPT4gKFxuICAgICAgICAgICAgPExpbmsgaHJlZj17YC90d2VldC8ke2lkKzF9YH0+XG4gICAgICAgICAgICA8ZGl2IGtleT17dHdlZXQuaWR9IGNsYXNzTmFtZT0nbWItMyBwLTMgY3Vyc29yLXBvaW50ZXIgYmctZ3JheS01MCAgcm91bmRlZC1tZCBzaGFkb3ctbGcgZmxleCBmbGV4LXJvdyc+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdiZy1ibHVlLTMwMCBoLTUgcC0xMCByb3VuZGVkLTN4bCcgLz5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J210LTIgbWwtNSc+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J21iLTEnPnt0d2VldD8udXNlci5uYW1lfTwvZGl2PiB7Lyog7J6R7ISx7J6QIOygleuztOulvCDstpzroKUgKi99XG4gICAgICAgICAgICAgICAgPGRpdj57dHdlZXQ/LmNvbnRlbnR9PC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdj57dHdlZXQ/Lmxpa2VzfTwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSG9tZVBhZ2U7XG4iXSwibmFtZXMiOlsidXNlU1dSIiwiTGluayIsIkhvbWVQYWdlIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJkaXYiLCJjbGFzc05hbWUiLCJidXR0b24iLCJocmVmIiwidHdlZXRzIiwibWFwIiwidHdlZXQiLCJpZCIsInVzZXIiLCJuYW1lIiwiY29udGVudCIsImxpa2VzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/mainPage2.tsx\n");

/***/ })

});
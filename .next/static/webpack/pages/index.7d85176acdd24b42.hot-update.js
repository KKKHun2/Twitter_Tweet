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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swr */ \"./node_modules/swr/dist/index.mjs\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\nvar _this = undefined;\n\n\n\nvar _s = $RefreshSig$();\nvar HomePage = function() {\n    var _this1 = _this;\n    _s();\n    // useSWR 훅을 사용하여 서버로부터 트윗 데이터를 비동기적으로 가져옵니다.\n    var data = (0,swr__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"/api/tweet\").data;\n    console.log(data);\n    if (!data) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: \"Loading...\"\n        }, void 0, false, {\n            fileName: \"/Users/hun2/Downloads/nextjs-prisma-typescript-tailwind-blueprint/pages/mainPage2.tsx\",\n            lineNumber: 12,\n            columnNumber: 12\n        }, _this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-[85%] h-screen mt-9 overflow-auto bg-gray-200 shadow-lg \",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex fixed items-center justify-between h-20 rounded-md shadow-lg bg-gray-50 w-[59%]\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex ml-5 text-3xl font-bold\",\n                        children: \"\\uD2B8\\uC717\"\n                    }, void 0, false, {\n                        fileName: \"/Users/hun2/Downloads/nextjs-prisma-typescript-tailwind-blueprint/pages/mainPage2.tsx\",\n                        lineNumber: 18,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \" \",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"text-xl mt-5 font-semibold\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                href: \"/tweet/upload\",\n                                children: \"\\uD2B8\\uC717\\uC791\\uC131\"\n                            }, void 0, false, {\n                                fileName: \"/Users/hun2/Downloads/nextjs-prisma-typescript-tailwind-blueprint/pages/mainPage2.tsx\",\n                                lineNumber: 21,\n                                columnNumber: 13\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/Users/hun2/Downloads/nextjs-prisma-typescript-tailwind-blueprint/pages/mainPage2.tsx\",\n                            lineNumber: 20,\n                            columnNumber: 11\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/hun2/Downloads/nextjs-prisma-typescript-tailwind-blueprint/pages/mainPage2.tsx\",\n                        lineNumber: 19,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/hun2/Downloads/nextjs-prisma-typescript-tailwind-blueprint/pages/mainPage2.tsx\",\n                lineNumber: 17,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \" mt-24 overflow-y-scroll\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"space-y-8\",\n                    children: data.tweets.map(function(tweet, id) {\n                        /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            href: \"/tweet/\".concat(id + 1),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"mb-3 p-3 cursor-pointer bg-gray-50 rounded-md shadow-lg flex flex-row\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"bg-blue-300 h-5 p-10 rounded-3xl\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/hun2/Downloads/nextjs-prisma-typescript-tailwind-blueprint/pages/mainPage2.tsx\",\n                                        lineNumber: 34,\n                                        columnNumber: 15\n                                    }, _this1),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"mt-2 ml-5\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"mb-1\",\n                                                children: tweet === null || tweet === void 0 ? void 0 : tweet.user.name\n                                            }, void 0, false, {\n                                                fileName: \"/Users/hun2/Downloads/nextjs-prisma-typescript-tailwind-blueprint/pages/mainPage2.tsx\",\n                                                lineNumber: 36,\n                                                columnNumber: 17\n                                            }, _this1),\n                                            \" \",\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                children: tweet === null || tweet === void 0 ? void 0 : tweet.content\n                                            }, void 0, false, {\n                                                fileName: \"/Users/hun2/Downloads/nextjs-prisma-typescript-tailwind-blueprint/pages/mainPage2.tsx\",\n                                                lineNumber: 37,\n                                                columnNumber: 17\n                                            }, _this1),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"ml-[100]\",\n                                                children: tweet === null || tweet === void 0 ? void 0 : tweet.likes\n                                            }, void 0, false, {\n                                                fileName: \"/Users/hun2/Downloads/nextjs-prisma-typescript-tailwind-blueprint/pages/mainPage2.tsx\",\n                                                lineNumber: 38,\n                                                columnNumber: 17\n                                            }, _this1)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/hun2/Downloads/nextjs-prisma-typescript-tailwind-blueprint/pages/mainPage2.tsx\",\n                                        lineNumber: 35,\n                                        columnNumber: 15\n                                    }, _this1)\n                                ]\n                            }, tweet.id, true, {\n                                fileName: \"/Users/hun2/Downloads/nextjs-prisma-typescript-tailwind-blueprint/pages/mainPage2.tsx\",\n                                lineNumber: 33,\n                                columnNumber: 13\n                            }, _this1)\n                        }, void 0, false, {\n                            fileName: \"/Users/hun2/Downloads/nextjs-prisma-typescript-tailwind-blueprint/pages/mainPage2.tsx\",\n                            lineNumber: 32,\n                            columnNumber: 13\n                        }, _this1);\n                    })\n                }, void 0, false, {\n                    fileName: \"/Users/hun2/Downloads/nextjs-prisma-typescript-tailwind-blueprint/pages/mainPage2.tsx\",\n                    lineNumber: 30,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/hun2/Downloads/nextjs-prisma-typescript-tailwind-blueprint/pages/mainPage2.tsx\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/hun2/Downloads/nextjs-prisma-typescript-tailwind-blueprint/pages/mainPage2.tsx\",\n        lineNumber: 16,\n        columnNumber: 5\n    }, _this);\n};\n_s(HomePage, \"Bw9uScf/xQBWZKhLCWSR33xISM4=\", false, function() {\n    return [\n        swr__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n    ];\n});\n_c = HomePage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomePage);\nvar _c;\n$RefreshReg$(_c, \"HomePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9tYWluUGFnZTIudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUNBOztBQUF5QjtBQUNJOztBQUc3QixJQUFNRSxRQUFRLEdBQUcsV0FBTTs7O0lBQ3JCO0lBQ3dELElBQWxELElBQU0sR0FBS0YsK0NBQU0sQ0FBQyxZQUFZLENBQUMsQ0FBN0JHLElBQUk7SUFDYkMsT0FBTyxDQUFDQyxHQUFHLENBQUNGLElBQUksQ0FBQztJQUVoQixJQUFJLENBQUNBLElBQUksRUFBRTtRQUNULHFCQUFPLDhEQUFDRyxLQUFHO3NCQUFDLFlBQVU7Ozs7O2lCQUFNLENBQUM7S0FDOUI7SUFFRCxxQkFDRSw4REFBQ0EsS0FBRztRQUFDQyxTQUFTLEVBQUMsNERBQTREOzswQkFDekUsOERBQUNELEtBQUc7Z0JBQUNDLFNBQVMsRUFBQyxzRkFBc0Y7O2tDQUNuRyw4REFBQ0QsS0FBRzt3QkFBQ0MsU0FBUyxFQUFDLDhCQUE4QjtrQ0FBQyxjQUFFOzs7Ozs2QkFBVTtrQ0FDdEQsOERBQUhELEtBQUc7d0JBQUNDLFNBQVMsRUFBQyxHQUFHO2tDQUNoQiw0RUFBQ0MsUUFBTTs0QkFBQ0QsU0FBUyxFQUFDLDRCQUE0QjtzQ0FDNUMsNEVBQUNOLGtEQUFJO2dDQUFDUSxJQUFJLEVBQUMsZUFBZTswQ0FBRSwwQkFFNUI7Ozs7O3FDQUFPOzs7OztpQ0FFQTs7Ozs7NkJBQ0w7Ozs7OztxQkFDRjswQkFFTiw4REFBQ0gsS0FBRztnQkFBQ0MsU0FBUyxFQUFDLDBCQUEyQjswQkFDeEMsNEVBQUNELEtBQUc7b0JBQUNDLFNBQVMsRUFBQyxXQUFXOzhCQUN2QkosSUFBSSxDQUFDTyxNQUFNLENBQUNDLEdBQUcsQ0FBQyxTQUFDQyxLQUFLLEVBQUNDLEVBQUU7c0NBQ3hCLHFFQUFDWixrREFBSTs0QkFBQ1EsSUFBSSxFQUFFLFNBQVEsQ0FBTyxPQUFMSSxFQUFFLEdBQUMsQ0FBQyxDQUFFO3NDQUM1Qiw0RUFBQ1AsS0FBRztnQ0FBZ0JDLFNBQVMsRUFBQyx1RUFBd0U7O2tEQUNwRyw4REFBQ0QsS0FBRzt3Q0FBQ0MsU0FBUyxFQUFDLGtDQUFrQzs7Ozs7OENBQUc7a0RBQ3BELDhEQUFDRCxLQUFHO3dDQUFDQyxTQUFTLEVBQUMsV0FBVzs7MERBQ3hCLDhEQUFDRCxLQUFHO2dEQUFDQyxTQUFTLEVBQUMsTUFBTTswREFBRUssS0FBSyxhQUFMQSxLQUFLLFdBQU0sR0FBWEEsS0FBQUEsQ0FBVyxHQUFYQSxLQUFLLENBQUVFLElBQUksQ0FBQ0MsSUFBSTs7Ozs7c0RBQU87NENBQUEsR0FBQzswREFDL0MsOERBQUNULEtBQUc7MERBQUVNLEtBQUssYUFBTEEsS0FBSyxXQUFTLEdBQWRBLEtBQUFBLENBQWMsR0FBZEEsS0FBSyxDQUFFSSxPQUFPOzs7OztzREFBTzswREFDM0IsOERBQUNWLEtBQUc7Z0RBQUNDLFNBQVMsRUFBQyxVQUFVOzBEQUFFSyxLQUFLLGFBQUxBLEtBQUssV0FBTyxHQUFaQSxLQUFBQSxDQUFZLEdBQVpBLEtBQUssQ0FBRUssS0FBSzs7Ozs7c0RBQU87Ozs7Ozs4Q0FDMUM7OytCQU5FTCxLQUFLLENBQUNDLEVBQUU7Ozs7c0NBT1o7Ozs7O2tDQUNDO3FCQUNSLENBQUM7Ozs7O3lCQUNFOzs7OztxQkFDRjs7Ozs7O2FBQ0YsQ0FDTjtDQUNIO0dBekNLWCxRQUFROztRQUVLRiwyQ0FBTTs7O0FBRm5CRSxLQUFBQSxRQUFRO0FBMkNkLCtEQUFlQSxRQUFRLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbWFpblBhZ2UyLnRzeD85Y2U5Il0sInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHVzZVNXUiBmcm9tICdzd3InO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuXG5cbmNvbnN0IEhvbWVQYWdlID0gKCkgPT4ge1xuICAvLyB1c2VTV1Ig7ZuF7J2EIOyCrOyaqe2VmOyXrCDshJzrsoTroZzrtoDthLAg7Yq47JyXIOuNsOydtO2EsOulvCDruYTrj5nquLDsoIHsnLzroZwg6rCA7KC47Ji164uI64ukLlxuICBjb25zdCB7IGRhdGEgfSA9IHVzZVNXUignL2FwaS90d2VldCcpO1xuIGNvbnNvbGUubG9nKGRhdGEpXG5cbiAgaWYgKCFkYXRhKSB7XG4gICAgcmV0dXJuIDxkaXY+TG9hZGluZy4uLjwvZGl2PjtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9J3ctWzg1JV0gaC1zY3JlZW4gbXQtOSBvdmVyZmxvdy1hdXRvIGJnLWdyYXktMjAwIHNoYWRvdy1sZyAnPlxuICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggZml4ZWQgaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBoLTIwIHJvdW5kZWQtbWQgc2hhZG93LWxnIGJnLWdyYXktNTAgdy1bNTklXSc+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IG1sLTUgdGV4dC0zeGwgZm9udC1ib2xkJz7tirjsnJc8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9JyAnPlxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSd0ZXh0LXhsIG10LTUgZm9udC1zZW1pYm9sZCc+XG4gICAgICAgICAgICA8TGluayBocmVmPVwiL3R3ZWV0L3VwbG9hZFwiID5cbiAgICAgICAgICAgIO2KuOycl+yekeyEsVxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgXG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPScgbXQtMjQgIG92ZXJmbG93LXktc2Nyb2xsJz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3NwYWNlLXktOCc+XG4gICAgICAgICAge2RhdGEudHdlZXRzLm1hcCgodHdlZXQsaWQpID0+IChcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvdHdlZXQvJHtpZCsxfWB9PlxuICAgICAgICAgICAgPGRpdiBrZXk9e3R3ZWV0LmlkfSBjbGFzc05hbWU9J21iLTMgcC0zIGN1cnNvci1wb2ludGVyIGJnLWdyYXktNTAgIHJvdW5kZWQtbWQgc2hhZG93LWxnIGZsZXggZmxleC1yb3cnPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYmctYmx1ZS0zMDAgaC01IHAtMTAgcm91bmRlZC0zeGwnIC8+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtdC0yIG1sLTUnPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtYi0xJz57dHdlZXQ/LnVzZXIubmFtZX08L2Rpdj4gey8qIOyekeyEseyekCDsoJXrs7Trpbwg7Lac66ClICovfVxuICAgICAgICAgICAgICAgIDxkaXY+e3R3ZWV0Py5jb250ZW50fTwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtbC1bMTAwXSc+e3R3ZWV0Py5saWtlc308L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWVQYWdlO1xuIl0sIm5hbWVzIjpbInVzZVNXUiIsIkxpbmsiLCJIb21lUGFnZSIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwiZGl2IiwiY2xhc3NOYW1lIiwiYnV0dG9uIiwiaHJlZiIsInR3ZWV0cyIsIm1hcCIsInR3ZWV0IiwiaWQiLCJ1c2VyIiwibmFtZSIsImNvbnRlbnQiLCJsaWtlcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/mainPage2.tsx\n");

/***/ })

});
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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swr */ \"./node_modules/swr/dist/index.mjs\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\nvar _this = undefined;\n\n\n\n\nvar _s = $RefreshSig$();\nvar HomePage = function() {\n    var _this1 = _this;\n    var ref;\n    _s();\n    var data = (0,swr__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"/api/tweet\").data;\n    if (!data) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: \"Loading...\"\n        }, void 0, false, {\n            fileName: \"/Users/hun2/Downloads/nextjs-prisma-typescript-tailwind-blueprint/pages/mainPage2.tsx\",\n            lineNumber: 8,\n            columnNumber: 12\n        }, _this);\n    }\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false), likes = ref1[0], setLikes = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)((data === null || data === void 0 ? void 0 : (ref = data.tweet) === null || ref === void 0 ? void 0 : ref.likes) || 0), count = ref2[0], setCount = ref2[1];\n    var handleLikeClick = function() {\n        setLikes(!likes);\n        console.log(likes);\n        setCount(function(prevLikes) {\n            return likes === false ? prevLikes + 1 : prevLikes - 1;\n        });\n    };\n    var sortedTweets = data.tweets.sort(function(a, b) {\n        return b.id - a.id;\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-[85%] h-screen mt-9 overflow-auto bg-gray-200 shadow-lg \",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex fixed items-center justify-between h-20 rounded-md shadow-lg bg-gray-50 w-[61%]\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex ml-5 text-3xl font-bold\",\n                        children: \"\\uD2B8\\uC717\"\n                    }, void 0, false, {\n                        fileName: \"/Users/hun2/Downloads/nextjs-prisma-typescript-tailwind-blueprint/pages/mainPage2.tsx\",\n                        lineNumber: 21,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \" \",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"text-xl mt-5 font-semibold\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                href: \"/tweet/upload\",\n                                children: \"\\uD2B8\\uC717\\uC791\\uC131\"\n                            }, void 0, false, {\n                                fileName: \"/Users/hun2/Downloads/nextjs-prisma-typescript-tailwind-blueprint/pages/mainPage2.tsx\",\n                                lineNumber: 24,\n                                columnNumber: 13\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/Users/hun2/Downloads/nextjs-prisma-typescript-tailwind-blueprint/pages/mainPage2.tsx\",\n                            lineNumber: 23,\n                            columnNumber: 11\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/hun2/Downloads/nextjs-prisma-typescript-tailwind-blueprint/pages/mainPage2.tsx\",\n                        lineNumber: 22,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/hun2/Downloads/nextjs-prisma-typescript-tailwind-blueprint/pages/mainPage2.tsx\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \" mt-24 overflow-y-scroll\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"space-y-8\",\n                    children: sortedTweets.map(function(tweet) {\n                        /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            href: \"/tweet/\".concat(tweet.id),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"mb-3 p-3 cursor-pointer bg-gray-50 rounded-md shadow-lg flex flex-row\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"bg-blue-300 h-5 p-10 rounded-3xl\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/hun2/Downloads/nextjs-prisma-typescript-tailwind-blueprint/pages/mainPage2.tsx\",\n                                        lineNumber: 36,\n                                        columnNumber: 17\n                                    }, _this1),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"mt-2 ml-5 w-full\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"mb-1\",\n                                                children: tweet === null || tweet === void 0 ? void 0 : tweet.user.name\n                                            }, void 0, false, {\n                                                fileName: \"/Users/hun2/Downloads/nextjs-prisma-typescript-tailwind-blueprint/pages/mainPage2.tsx\",\n                                                lineNumber: 38,\n                                                columnNumber: 19\n                                            }, _this1),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                children: tweet === null || tweet === void 0 ? void 0 : tweet.content\n                                            }, void 0, false, {\n                                                fileName: \"/Users/hun2/Downloads/nextjs-prisma-typescript-tailwind-blueprint/pages/mainPage2.tsx\",\n                                                lineNumber: 39,\n                                                columnNumber: 19\n                                            }, _this1),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                onClick: handleLikeClick,\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                    className: \"flex justify-end mr-2\",\n                                                    children: [\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                            className: \"h-5 w-5 mr-2\",\n                                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                                                className: \"h-6 w-6 \",\n                                                                xmlns: \"http://www.w3.org/2000/svg\",\n                                                                fill: \"red\",\n                                                                viewBox: \"0 0 24 24\",\n                                                                stroke: \"currentColor\",\n                                                                \"aria-hidden\": \"true\",\n                                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                                                    strokeLinecap: \"round\",\n                                                                    strokeLinejoin: \"round\",\n                                                                    strokeWidth: \"2\",\n                                                                    d: \"M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z\"\n                                                                }, void 0, false, {\n                                                                    fileName: \"/Users/hun2/Downloads/nextjs-prisma-typescript-tailwind-blueprint/pages/mainPage2.tsx\",\n                                                                    lineNumber: 51,\n                                                                    columnNumber: 25\n                                                                }, _this1)\n                                                            }, void 0, false, {\n                                                                fileName: \"/Users/hun2/Downloads/nextjs-prisma-typescript-tailwind-blueprint/pages/mainPage2.tsx\",\n                                                                lineNumber: 43,\n                                                                columnNumber: 23\n                                                            }, _this1)\n                                                        }, void 0, false, {\n                                                            fileName: \"/Users/hun2/Downloads/nextjs-prisma-typescript-tailwind-blueprint/pages/mainPage2.tsx\",\n                                                            lineNumber: 42,\n                                                            columnNumber: 21\n                                                        }, _this1),\n                                                        tweet === null || tweet === void 0 ? void 0 : tweet.likes\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"/Users/hun2/Downloads/nextjs-prisma-typescript-tailwind-blueprint/pages/mainPage2.tsx\",\n                                                    lineNumber: 41,\n                                                    columnNumber: 19\n                                                }, _this1)\n                                            }, void 0, false, {\n                                                fileName: \"/Users/hun2/Downloads/nextjs-prisma-typescript-tailwind-blueprint/pages/mainPage2.tsx\",\n                                                lineNumber: 40,\n                                                columnNumber: 19\n                                            }, _this1)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/hun2/Downloads/nextjs-prisma-typescript-tailwind-blueprint/pages/mainPage2.tsx\",\n                                        lineNumber: 37,\n                                        columnNumber: 17\n                                    }, _this1)\n                                ]\n                            }, tweet.id, true, {\n                                fileName: \"/Users/hun2/Downloads/nextjs-prisma-typescript-tailwind-blueprint/pages/mainPage2.tsx\",\n                                lineNumber: 35,\n                                columnNumber: 15\n                            }, _this1)\n                        }, void 0, false, {\n                            fileName: \"/Users/hun2/Downloads/nextjs-prisma-typescript-tailwind-blueprint/pages/mainPage2.tsx\",\n                            lineNumber: 34,\n                            columnNumber: 13\n                        }, _this1);\n                    })\n                }, void 0, false, {\n                    fileName: \"/Users/hun2/Downloads/nextjs-prisma-typescript-tailwind-blueprint/pages/mainPage2.tsx\",\n                    lineNumber: 32,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/hun2/Downloads/nextjs-prisma-typescript-tailwind-blueprint/pages/mainPage2.tsx\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/hun2/Downloads/nextjs-prisma-typescript-tailwind-blueprint/pages/mainPage2.tsx\",\n        lineNumber: 19,\n        columnNumber: 5\n    }, _this);\n};\n_s(HomePage, \"3SxZbNdcntlLAU/1HWQ+giW6eGA=\", false, function() {\n    return [\n        swr__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n    ];\n});\n_c = HomePage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomePage);\nvar _c;\n$RefreshReg$(_c, \"HomePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUc7MERBQUVHLEtBQUssYUFBTEEsS0FBSyxXQUFTLEdBQWRBLEtBQUFBLENBQWMsR0FBZEEsS0FBSyxDQUFFbUIsT0FBTzs7Ozs7c0RBQU87MERBQzNCLDhEQUFDTCxRQUFNO2dEQUFFTSxPQUFPLEVBQUVqQixlQUFlOzBEQUNqQyw0RUFBQ04sS0FBRztvREFBQ2dCLFNBQVMsRUFBQyx1QkFBdUI7O3NFQUNwQyw4REFBQ2hCLEtBQUc7NERBQUNnQixTQUFTLEVBQUMsY0FBYztzRUFDM0IsNEVBQUNRLEtBQUc7Z0VBQ0ZSLFNBQVMsRUFBQyxVQUFVO2dFQUNwQlMsS0FBSyxFQUFDLDRCQUE0QjtnRUFDbENDLElBQUksRUFBQyxLQUFLO2dFQUNWQyxPQUFPLEVBQUMsV0FBVztnRUFDbkJDLE1BQU0sRUFBQyxjQUFjO2dFQUNyQkMsYUFBVyxFQUFDLE1BQU07MEVBRWxCLDRFQUFDQyxNQUFJO29FQUNIQyxhQUFhLEVBQUMsT0FBTztvRUFDckJDLGNBQWMsRUFBQyxPQUFPO29FQUN0QkMsV0FBVyxFQUFDLEdBQUc7b0VBQ2ZDLENBQUMsRUFBQyw2SEFBNkg7Ozs7OzBFQUMvSDs7Ozs7c0VBQ0U7Ozs7O2tFQUNGO3dEQUNML0IsS0FBSyxhQUFMQSxLQUFLLFdBQU8sR0FBWkEsS0FBQUEsQ0FBWSxHQUFaQSxLQUFLLENBQUVGLEtBQUs7Ozs7OzswREFDVDs7Ozs7c0RBRUc7Ozs7Ozs4Q0FFTDs7K0JBN0JFRSxLQUFLLENBQUNZLEVBQUU7Ozs7c0NBOEJaOzs7OztrQ0FDRDtxQkFDUixDQUFDOzs7Ozt5QkFDRTs7Ozs7cUJBQ0Y7Ozs7OzthQUNGLENBQ047Q0FDSDtHQW5FS2pCLFFBQVE7O1FBQ0tILDJDQUFNOzs7QUFEbkJHLEtBQUFBLFFBQVE7QUFxRWQsK0RBQWVBLFFBQVEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9tYWluUGFnZTIudHN4PzljZTkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHVzZVNXUiBmcm9tICdzd3InO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IEhvbWVQYWdlID0gKCkgPT4ge1xuICBjb25zdCB7IGRhdGEgfSA9IHVzZVNXUignL2FwaS90d2VldCcpO1xuICBpZiAoIWRhdGEpIHtcbiAgICByZXR1cm4gPGRpdj5Mb2FkaW5nLi4uPC9kaXY+O1xuICB9XG4gIGNvbnN0IFtsaWtlcywgc2V0TGlrZXNdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbY291bnQsIHNldENvdW50XSA9IHVzZVN0YXRlKGRhdGE/LnR3ZWV0Py5saWtlcyB8fCAwKTtcbiAgY29uc3QgaGFuZGxlTGlrZUNsaWNrID0gKCkgPT4ge1xuICAgIHNldExpa2VzKCFsaWtlcylcbiAgICBjb25zb2xlLmxvZyhsaWtlcylcbiAgICBzZXRDb3VudCgocHJldkxpa2VzKSA9PiAoKGxpa2VzID09PSBmYWxzZSkgPyBwcmV2TGlrZXMgKyAxIDogcHJldkxpa2VzIC0gMSkpO1xuICB9XG4gIGNvbnN0IHNvcnRlZFR3ZWV0cyA9IGRhdGEudHdlZXRzLnNvcnQoKGEsIGIpID0+IGIuaWQgLSBhLmlkKTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT0ndy1bODUlXSBoLXNjcmVlbiBtdC05IG92ZXJmbG93LWF1dG8gYmctZ3JheS0yMDAgc2hhZG93LWxnICc+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBmaXhlZCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIGgtMjAgcm91bmRlZC1tZCBzaGFkb3ctbGcgYmctZ3JheS01MCB3LVs2MSVdJz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggbWwtNSB0ZXh0LTN4bCBmb250LWJvbGQnPu2KuOyclzwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nICc+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J3RleHQteGwgbXQtNSBmb250LXNlbWlib2xkJz5cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvdHdlZXQvdXBsb2FkXCIgPlxuICAgICAgICAgICAg7Yq47JyX7J6R7ISxXG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPScgbXQtMjQgIG92ZXJmbG93LXktc2Nyb2xsJz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3NwYWNlLXktOCc+XG4gICAgICAgICAge3NvcnRlZFR3ZWV0cy5tYXAoKHR3ZWV0KSA9PiAoXG4gICAgICAgICAgICA8TGluayBocmVmPXtgL3R3ZWV0LyR7dHdlZXQuaWR9YH0+XG4gICAgICAgICAgICAgIDxkaXYga2V5PXt0d2VldC5pZH0gY2xhc3NOYW1lPSdtYi0zIHAtMyAgY3Vyc29yLXBvaW50ZXIgYmctZ3JheS01MCAgcm91bmRlZC1tZCBzaGFkb3ctbGcgZmxleCBmbGV4LXJvdyc+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2JnLWJsdWUtMzAwIGgtNSBwLTEwIHJvdW5kZWQtM3hsJyAvPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtdC0yIG1sLTUgdy1mdWxsJz5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtYi0xJz57dHdlZXQ/LnVzZXIubmFtZX08L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXY+e3R3ZWV0Py5jb250ZW50fTwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGJ1dHRvbiAgb25DbGljaz17aGFuZGxlTGlrZUNsaWNrfSAgPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXgganVzdGlmeS1lbmQgbXItMic+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdoLTUgdy01IG1yLTInPlxuICAgICAgICAgICAgICAgICAgICAgIDxzdmdcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImgtNiB3LTYgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgZmlsbD1cInJlZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdHJva2VXaWR0aD1cIjJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBkPVwiTTQuMzE4IDYuMzE4YTQuNSA0LjUgMCAwMDAgNi4zNjRMMTIgMjAuMzY0bDcuNjgyLTcuNjgyYTQuNSA0LjUgMCAwMC02LjM2NC02LjM2NEwxMiA3LjYzNmwtMS4zMTgtMS4zMThhNC41IDQuNSAwIDAwLTYuMzY0IDB6XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICB7dHdlZXQ/Lmxpa2VzfVxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSG9tZVBhZ2U7XG4iXSwibmFtZXMiOlsidXNlU1dSIiwiTGluayIsInVzZVN0YXRlIiwiSG9tZVBhZ2UiLCJkYXRhIiwiZGl2IiwibGlrZXMiLCJzZXRMaWtlcyIsInR3ZWV0IiwiY291bnQiLCJzZXRDb3VudCIsImhhbmRsZUxpa2VDbGljayIsImNvbnNvbGUiLCJsb2ciLCJwcmV2TGlrZXMiLCJzb3J0ZWRUd2VldHMiLCJ0d2VldHMiLCJzb3J0IiwiYSIsImIiLCJpZCIsImNsYXNzTmFtZSIsImJ1dHRvbiIsImhyZWYiLCJtYXAiLCJ1c2VyIiwibmFtZSIsImNvbnRlbnQiLCJvbkNsaWNrIiwic3ZnIiwieG1sbnMiLCJmaWxsIiwidmlld0JveCIsInN0cm9rZSIsImFyaWEtaGlkZGVuIiwicGF0aCIsInN0cm9rZUxpbmVjYXAiLCJzdHJva2VMaW5lam9pbiIsInN0cm9rZVdpZHRoIiwiZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/mainPage2.tsx\n");

/***/ })

});
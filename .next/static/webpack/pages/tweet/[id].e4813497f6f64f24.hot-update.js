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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swr */ \"./node_modules/swr/dist/index.mjs\");\nvar _this = undefined;\n\n\n\nvar _s = $RefreshSig$();\nvar ItemDetail = function() {\n    var ref, ref1, ref2, ref3;\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    var ref4 = (0,swr__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(router.query.id ? \"/api/tweet/\".concat(router.query.id) : null), data = ref4.data, error = ref4.error;\n    console.log(data);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"px-4 bg-blue-400 p-6 py-4\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mb-8 \",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"h-20 bg-slate-300 flex items-center justify-center font-bold text-3xl \",\n                        children: \"Tweet\"\n                    }, void 0, false, {\n                        fileName: \"/Users/hun2/Downloads/nextjs-prisma-typescript-tailwind-blueprint/pages/tweet/[id].tsx\",\n                        lineNumber: 16,\n                        columnNumber: 11\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-col mt-10 \",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex cursor-pointer py-3 border rounded-xl w-[15%] bg-slate-100 items-center space-x-3\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"w-12 ml-3 h-12 rounded-full bg-blue-300\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/hun2/Downloads/nextjs-prisma-typescript-tailwind-blueprint/pages/tweet/[id].tsx\",\n                                        lineNumber: 22,\n                                        columnNumber: 13\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                className: \"text-sm font-medium text-gray-700\",\n                                                children: data === null || data === void 0 ? void 0 : (ref = data.tweet) === null || ref === void 0 ? void 0 : (ref1 = ref.user) === null || ref1 === void 0 ? void 0 : ref1.name\n                                            }, void 0, false, {\n                                                fileName: \"/Users/hun2/Downloads/nextjs-prisma-typescript-tailwind-blueprint/pages/tweet/[id].tsx\",\n                                                lineNumber: 24,\n                                                columnNumber: 15\n                                            }, _this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                className: \"text-xs font-medium cursor-pointer text-gray-500\",\n                                                children: \"View profile \\u2192\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/hun2/Downloads/nextjs-prisma-typescript-tailwind-blueprint/pages/tweet/[id].tsx\",\n                                                lineNumber: 27,\n                                                columnNumber: 17\n                                            }, _this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/hun2/Downloads/nextjs-prisma-typescript-tailwind-blueprint/pages/tweet/[id].tsx\",\n                                        lineNumber: 23,\n                                        columnNumber: 13\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/hun2/Downloads/nextjs-prisma-typescript-tailwind-blueprint/pages/tweet/[id].tsx\",\n                                lineNumber: 21,\n                                columnNumber: 13\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"mt-5 flex\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                        className: \"text-3xl font-bold text-gray-900 \",\n                                        children: data === null || data === void 0 ? void 0 : (ref2 = data.tweet) === null || ref2 === void 0 ? void 0 : ref2.name\n                                    }, void 0, false, {\n                                        fileName: \"/Users/hun2/Downloads/nextjs-prisma-typescript-tailwind-blueprint/pages/tweet/[id].tsx\",\n                                        lineNumber: 34,\n                                        columnNumber: 13\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"w-48 h-48\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                className: \" my-6 text-gray-700 bg-red-500\",\n                                                children: data === null || data === void 0 ? void 0 : (ref3 = data.tweet) === null || ref3 === void 0 ? void 0 : ref3.content\n                                            }, void 0, false, {\n                                                fileName: \"/Users/hun2/Downloads/nextjs-prisma-typescript-tailwind-blueprint/pages/tweet/[id].tsx\",\n                                                lineNumber: 38,\n                                                columnNumber: 13\n                                            }, _this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"flex items-center justify-between space-x-2\",\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                    className: \"p-3 rounded-md flex items-center justify-center text-gray-400 hover:bg-gray-100 hover:text-gray-500\",\n                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                                        className: \"h-6 w-6 \",\n                                                        xmlns: \"http://www.w3.org/2000/svg\",\n                                                        fill: \"none\",\n                                                        viewBox: \"0 0 24 24\",\n                                                        stroke: \"currentColor\",\n                                                        \"aria-hidden\": \"true\",\n                                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                                            strokeLinecap: \"round\",\n                                                            strokeLinejoin: \"round\",\n                                                            strokeWidth: \"2\",\n                                                            d: \"M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z\"\n                                                        }, void 0, false, {\n                                                            fileName: \"/Users/hun2/Downloads/nextjs-prisma-typescript-tailwind-blueprint/pages/tweet/[id].tsx\",\n                                                            lineNumber: 49,\n                                                            columnNumber: 19\n                                                        }, _this)\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/hun2/Downloads/nextjs-prisma-typescript-tailwind-blueprint/pages/tweet/[id].tsx\",\n                                                        lineNumber: 41,\n                                                        columnNumber: 17\n                                                    }, _this)\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/hun2/Downloads/nextjs-prisma-typescript-tailwind-blueprint/pages/tweet/[id].tsx\",\n                                                    lineNumber: 40,\n                                                    columnNumber: 15\n                                                }, _this)\n                                            }, void 0, false, {\n                                                fileName: \"/Users/hun2/Downloads/nextjs-prisma-typescript-tailwind-blueprint/pages/tweet/[id].tsx\",\n                                                lineNumber: 39,\n                                                columnNumber: 13\n                                            }, _this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/hun2/Downloads/nextjs-prisma-typescript-tailwind-blueprint/pages/tweet/[id].tsx\",\n                                        lineNumber: 37,\n                                        columnNumber: 13\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/hun2/Downloads/nextjs-prisma-typescript-tailwind-blueprint/pages/tweet/[id].tsx\",\n                                lineNumber: 33,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/hun2/Downloads/nextjs-prisma-typescript-tailwind-blueprint/pages/tweet/[id].tsx\",\n                        lineNumber: 19,\n                        columnNumber: 13\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/hun2/Downloads/nextjs-prisma-typescript-tailwind-blueprint/pages/tweet/[id].tsx\",\n                lineNumber: 15,\n                columnNumber: 9\n            }, _this)\n        }, void 0, false, {\n            fileName: \"/Users/hun2/Downloads/nextjs-prisma-typescript-tailwind-blueprint/pages/tweet/[id].tsx\",\n            lineNumber: 14,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/hun2/Downloads/nextjs-prisma-typescript-tailwind-blueprint/pages/tweet/[id].tsx\",\n        lineNumber: 13,\n        columnNumber: 5\n    }, _this);\n};\n_s(ItemDetail, \"F2OQGCTB9lgwThKfzWI7sczFgbA=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter,\n        swr__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n    ];\n});\n_c = ItemDetail;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ItemDetail);\nvar _c;\n$RefreshReg$(_c, \"ItemDetail\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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YUFBYSxFQUFDLE9BQU87NERBQ3JCQyxjQUFjLEVBQUMsT0FBTzs0REFDdEJDLFdBQVcsRUFBQyxHQUFHOzREQUNmQyxDQUFDLEVBQUMsNkhBQTZIOzs7OztpRUFDL0g7Ozs7OzZEQUNFOzs7Ozt5REFDQzs7Ozs7cURBQ0w7Ozs7Ozs2Q0FFQTs7Ozs7O3FDQUNGOzs7Ozs7NkJBQ0U7Ozs7OztxQkFHSjs7Ozs7aUJBRUY7Ozs7O2FBQ0YsQ0FDTjtDQUNIO0dBL0RLNUIsVUFBVTs7UUFDQ0Ysa0RBQVM7UUFDQUMsMkNBQU07OztBQUYxQkMsS0FBQUEsVUFBVTtBQWdFaEIsK0RBQWVBLFVBQVUsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy90d2VldC9baWRdLnRzeD9mM2QyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgTmV4dFBhZ2UgfSBmcm9tIFwibmV4dFwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgdXNlU1dSIGZyb20gXCJzd3JcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcblxuY29uc3QgSXRlbURldGFpbDogTmV4dFBhZ2UgPSAoKSA9PiB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSB1c2VTV1IoXG4gICAgcm91dGVyLnF1ZXJ5LmlkID8gYC9hcGkvdHdlZXQvJHtyb3V0ZXIucXVlcnkuaWR9YCA6IG51bGxcbiAgKTtcbiBjb25zb2xlLmxvZyhkYXRhKVxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInB4LTQgYmctYmx1ZS00MDAgcC02IHB5LTRcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi04IFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaC0yMCBiZy1zbGF0ZS0zMDAgIGZsZXggIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBmb250LWJvbGQgdGV4dC0zeGwgXCI+XG4gICAgICAgICAgICBUd2VldCBcbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sICBtdC0xMCBcIj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGN1cnNvci1wb2ludGVyIHB5LTMgYm9yZGVyIHJvdW5kZWQteGwgdy1bMTUlXSBiZy1zbGF0ZS0xMDAgaXRlbXMtY2VudGVyIHNwYWNlLXgtM1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTEyIG1sLTMgaC0xMiByb3VuZGVkLWZ1bGwgYmctYmx1ZS0zMDBcIiAgLz5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc20gZm9udC1tZWRpdW0gdGV4dC1ncmF5LTcwMFwiPlxuICAgICAgICAgICAgICAgIHtkYXRhPy50d2VldD8udXNlcj8ubmFtZX1cbiAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInRleHQteHMgZm9udC1tZWRpdW0gY3Vyc29yLXBvaW50ZXIgdGV4dC1ncmF5LTUwMFwiPlxuICAgICAgICAgICAgICAgICAgVmlldyBwcm9maWxlICZyYXJyO1xuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC01IGZsZXhcIj5cbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTN4bCBmb250LWJvbGQgdGV4dC1ncmF5LTkwMCBcIj5cbiAgICAgICAgICAgICAge2RhdGE/LnR3ZWV0Py5uYW1lfVxuICAgICAgICAgICAgPC9oMT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy00OCBoLTQ4XCI+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCIgbXktNiAgdGV4dC1ncmF5LTcwMCBiZy1yZWQtNTAwXCI+e2RhdGE/LnR3ZWV0Py5jb250ZW50fTwvcD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIHNwYWNlLXgtMlwiPlxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInAtMyByb3VuZGVkLW1kIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHRleHQtZ3JheS00MDAgaG92ZXI6YmctZ3JheS0xMDAgaG92ZXI6dGV4dC1ncmF5LTUwMFwiPlxuICAgICAgICAgICAgICAgIDxzdmdcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImgtNiB3LTYgXCJcbiAgICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXG4gICAgICAgICAgICAgICAgICBzdHJva2U9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICAgICAgICAgICAgYXJpYS1oaWRkZW49XCJ0cnVlXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgICAgICBzdHJva2VMaW5lY2FwPVwicm91bmRcIlxuICAgICAgICAgICAgICAgICAgICBzdHJva2VMaW5lam9pbj1cInJvdW5kXCJcbiAgICAgICAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg9XCIyXCJcbiAgICAgICAgICAgICAgICAgICAgZD1cIk00LjMxOCA2LjMxOGE0LjUgNC41IDAgMDAwIDYuMzY0TDEyIDIwLjM2NGw3LjY4Mi03LjY4MmE0LjUgNC41IDAgMDAtNi4zNjQtNi4zNjRMMTIgNy42MzZsLTEuMzE4LTEuMzE4YTQuNSA0LjUgMCAwMC02LjM2NCAwelwiXG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgXG4gICAgICAgICAgXG4gICAgICAgIDwvZGl2PlxuICAgIFxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuZXhwb3J0IGRlZmF1bHQgSXRlbURldGFpbDsiXSwibmFtZXMiOlsidXNlUm91dGVyIiwidXNlU1dSIiwiSXRlbURldGFpbCIsImRhdGEiLCJyb3V0ZXIiLCJxdWVyeSIsImlkIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwiZGl2IiwiY2xhc3NOYW1lIiwicCIsInR3ZWV0IiwidXNlciIsIm5hbWUiLCJhIiwiaDEiLCJjb250ZW50IiwiYnV0dG9uIiwic3ZnIiwieG1sbnMiLCJmaWxsIiwidmlld0JveCIsInN0cm9rZSIsImFyaWEtaGlkZGVuIiwicGF0aCIsInN0cm9rZUxpbmVjYXAiLCJzdHJva2VMaW5lam9pbiIsInN0cm9rZVdpZHRoIiwiZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/tweet/[id].tsx\n");

/***/ })

});
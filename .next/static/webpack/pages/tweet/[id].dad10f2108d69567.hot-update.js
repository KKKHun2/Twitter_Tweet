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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swr */ \"./node_modules/swr/dist/index.mjs\");\nvar _this = undefined;\n\n\n\nvar _s = $RefreshSig$();\nvar ItemDetail = function() {\n    var ref, ref1, ref2, ref3, ref4;\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    var ref5 = (0,swr__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(router.query.id ? \"/api/tweet/\".concat(router.query.id) : null), data = ref5.data, error = ref5.error;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"px-4 bg-blue-400 p-6 py-4\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mb-8 \",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"h-20 bg-slate-300 flex items-center justify-center font-bold text-3xl \",\n                        children: \"Tweet\"\n                    }, void 0, false, {\n                        fileName: \"/Users/hun2/Downloads/nextjs-prisma-typescript-tailwind-blueprint/pages/tweet/[id].tsx\",\n                        lineNumber: 16,\n                        columnNumber: 11\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-col mt-10 \",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex cursor-pointer py-3 border rounded-xl w-[20%] bg-slate-100 items-center space-x-3\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"w-12 ml-3 h-12 rounded-full bg-blue-300\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/hun2/Downloads/nextjs-prisma-typescript-tailwind-blueprint/pages/tweet/[id].tsx\",\n                                        lineNumber: 22,\n                                        columnNumber: 13\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                className: \"text-sm font-medium text-gray-700\",\n                                                children: data === null || data === void 0 ? void 0 : (ref = data.tweet) === null || ref === void 0 ? void 0 : (ref1 = ref.user) === null || ref1 === void 0 ? void 0 : ref1.name\n                                            }, void 0, false, {\n                                                fileName: \"/Users/hun2/Downloads/nextjs-prisma-typescript-tailwind-blueprint/pages/tweet/[id].tsx\",\n                                                lineNumber: 24,\n                                                columnNumber: 15\n                                            }, _this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                className: \"text-xs font-medium cursor-pointer text-gray-500\",\n                                                children: \"View profile \\u2192\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/hun2/Downloads/nextjs-prisma-typescript-tailwind-blueprint/pages/tweet/[id].tsx\",\n                                                lineNumber: 27,\n                                                columnNumber: 17\n                                            }, _this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/hun2/Downloads/nextjs-prisma-typescript-tailwind-blueprint/pages/tweet/[id].tsx\",\n                                        lineNumber: 23,\n                                        columnNumber: 13\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/hun2/Downloads/nextjs-prisma-typescript-tailwind-blueprint/pages/tweet/[id].tsx\",\n                                lineNumber: 21,\n                                columnNumber: 13\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"mt-5 flex\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                        className: \"text-3xl font-bold text-gray-900 \",\n                                        children: data === null || data === void 0 ? void 0 : (ref2 = data.tweet) === null || ref2 === void 0 ? void 0 : ref2.name\n                                    }, void 0, false, {\n                                        fileName: \"/Users/hun2/Downloads/nextjs-prisma-typescript-tailwind-blueprint/pages/tweet/[id].tsx\",\n                                        lineNumber: 34,\n                                        columnNumber: 13\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"w-full h-screen\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                className: \" my-6 text-gray-700 h-50% bg-gray-50 rounded-sm \",\n                                                children: data === null || data === void 0 ? void 0 : (ref3 = data.tweet) === null || ref3 === void 0 ? void 0 : ref3.content\n                                            }, void 0, false, {\n                                                fileName: \"/Users/hun2/Downloads/nextjs-prisma-typescript-tailwind-blueprint/pages/tweet/[id].tsx\",\n                                                lineNumber: 38,\n                                                columnNumber: 13\n                                            }, _this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"flex items-center bg-gray-50 justify-between space-x-2\",\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                    className: \"p-3 rounded-md flex items-center justify-center text-gray-400 hover:bg-gray-100 hover:text-gray-500\",\n                                                    children: [\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                                            className: \"h-6 w-6 \",\n                                                            xmlns: \"http://www.w3.org/2000/svg\",\n                                                            fill: \"none\",\n                                                            viewBox: \"0 0 24 24\",\n                                                            stroke: \"currentColor\",\n                                                            \"aria-hidden\": \"true\",\n                                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                                                strokeLinecap: \"round\",\n                                                                strokeLinejoin: \"round\",\n                                                                strokeWidth: \"2\",\n                                                                d: \"M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z\"\n                                                            }, void 0, false, {\n                                                                fileName: \"/Users/hun2/Downloads/nextjs-prisma-typescript-tailwind-blueprint/pages/tweet/[id].tsx\",\n                                                                lineNumber: 49,\n                                                                columnNumber: 19\n                                                            }, _this)\n                                                        }, void 0, false, {\n                                                            fileName: \"/Users/hun2/Downloads/nextjs-prisma-typescript-tailwind-blueprint/pages/tweet/[id].tsx\",\n                                                            lineNumber: 41,\n                                                            columnNumber: 17\n                                                        }, _this),\n                                                        data === null || data === void 0 ? void 0 : (ref4 = data.tweet) === null || ref4 === void 0 ? void 0 : ref4.likes\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"/Users/hun2/Downloads/nextjs-prisma-typescript-tailwind-blueprint/pages/tweet/[id].tsx\",\n                                                    lineNumber: 40,\n                                                    columnNumber: 15\n                                                }, _this)\n                                            }, void 0, false, {\n                                                fileName: \"/Users/hun2/Downloads/nextjs-prisma-typescript-tailwind-blueprint/pages/tweet/[id].tsx\",\n                                                lineNumber: 39,\n                                                columnNumber: 13\n                                            }, _this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/hun2/Downloads/nextjs-prisma-typescript-tailwind-blueprint/pages/tweet/[id].tsx\",\n                                        lineNumber: 37,\n                                        columnNumber: 13\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/hun2/Downloads/nextjs-prisma-typescript-tailwind-blueprint/pages/tweet/[id].tsx\",\n                                lineNumber: 33,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/hun2/Downloads/nextjs-prisma-typescript-tailwind-blueprint/pages/tweet/[id].tsx\",\n                        lineNumber: 19,\n                        columnNumber: 13\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/hun2/Downloads/nextjs-prisma-typescript-tailwind-blueprint/pages/tweet/[id].tsx\",\n                lineNumber: 15,\n                columnNumber: 9\n            }, _this)\n        }, void 0, false, {\n            fileName: \"/Users/hun2/Downloads/nextjs-prisma-typescript-tailwind-blueprint/pages/tweet/[id].tsx\",\n            lineNumber: 14,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/hun2/Downloads/nextjs-prisma-typescript-tailwind-blueprint/pages/tweet/[id].tsx\",\n        lineNumber: 13,\n        columnNumber: 5\n    }, _this);\n};\n_s(ItemDetail, \"F2OQGCTB9lgwThKfzWI7sczFgbA=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter,\n        swr__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n    ];\n});\n_c = ItemDetail;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ItemDetail);\nvar _c;\n$RefreshReg$(_c, \"ItemDetail\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Y0FBYyxFQUFDLE9BQU87Z0VBQ3RCQyxXQUFXLEVBQUMsR0FBRztnRUFDZkMsQ0FBQyxFQUFDLDZIQUE2SDs7Ozs7cUVBQy9IOzs7OztpRUFFRTt3REFDTHpCLElBQUksYUFBSkEsSUFBSSxXQUFPLEdBQVhBLEtBQUFBLENBQVcsR0FBWEEsQ0FBQUEsSUFBVyxHQUFYQSxJQUFJLENBQUVRLEtBQUssY0FBWFIsSUFBVyxjQUFYQSxLQUFBQSxDQUFXLEdBQVhBLElBQVcsQ0FBRTBCLEtBQUs7Ozs7Ozt5REFDWjs7Ozs7cURBQ0w7Ozs7Ozs2Q0FFQTs7Ozs7O3FDQUNGOzs7Ozs7NkJBQ0U7Ozs7OztxQkFHSjs7Ozs7aUJBRUY7Ozs7O2FBQ0YsQ0FDTjtDQUNIO0dBakVLM0IsVUFBVTs7UUFDQ0Ysa0RBQVM7UUFDQUMsMkNBQU07OztBQUYxQkMsS0FBQUEsVUFBVTtBQWtFaEIsK0RBQWVBLFVBQVUsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy90d2VldC9baWRdLnRzeD9mM2QyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgTmV4dFBhZ2UgfSBmcm9tIFwibmV4dFwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgdXNlU1dSIGZyb20gXCJzd3JcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcblxuY29uc3QgSXRlbURldGFpbDogTmV4dFBhZ2UgPSAoKSA9PiB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSB1c2VTV1IoXG4gICAgcm91dGVyLnF1ZXJ5LmlkID8gYC9hcGkvdHdlZXQvJHtyb3V0ZXIucXVlcnkuaWR9YCA6IG51bGxcbiAgKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInB4LTQgYmctYmx1ZS00MDAgcC02IHB5LTRcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi04IFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaC0yMCBiZy1zbGF0ZS0zMDAgIGZsZXggIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBmb250LWJvbGQgdGV4dC0zeGwgXCI+XG4gICAgICAgICAgICBUd2VldCBcbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sICBtdC0xMCBcIj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGN1cnNvci1wb2ludGVyIHB5LTMgYm9yZGVyIHJvdW5kZWQteGwgdy1bMjAlXSBiZy1zbGF0ZS0xMDAgaXRlbXMtY2VudGVyIHNwYWNlLXgtM1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTEyIG1sLTMgaC0xMiByb3VuZGVkLWZ1bGwgYmctYmx1ZS0zMDBcIiAgLz5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc20gZm9udC1tZWRpdW0gdGV4dC1ncmF5LTcwMFwiPlxuICAgICAgICAgICAgICAgIHtkYXRhPy50d2VldD8udXNlcj8ubmFtZX1cbiAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInRleHQteHMgZm9udC1tZWRpdW0gY3Vyc29yLXBvaW50ZXIgdGV4dC1ncmF5LTUwMFwiPlxuICAgICAgICAgICAgICAgICAgVmlldyBwcm9maWxlICZyYXJyO1xuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC01IGZsZXhcIj5cbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTN4bCBmb250LWJvbGQgdGV4dC1ncmF5LTkwMCBcIj5cbiAgICAgICAgICAgICAge2RhdGE/LnR3ZWV0Py5uYW1lfVxuICAgICAgICAgICAgPC9oMT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGgtc2NyZWVuXCI+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCIgbXktNiAgdGV4dC1ncmF5LTcwMCBoLTUwJSBiZy1ncmF5LTUwIHJvdW5kZWQtc20gXCI+e2RhdGE/LnR3ZWV0Py5jb250ZW50fTwvcD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgYmctZ3JheS01MCBqdXN0aWZ5LWJldHdlZW4gc3BhY2UteC0yXCI+XG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwicC0zIHJvdW5kZWQtbWQgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgdGV4dC1ncmF5LTQwMCBob3ZlcjpiZy1ncmF5LTEwMCBob3Zlcjp0ZXh0LWdyYXktNTAwXCI+XG4gICAgICAgICAgICAgICAgPHN2Z1xuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaC02IHctNiBcIlxuICAgICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICAgICAgICAgICAgICBmaWxsPVwibm9uZVwiXG4gICAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcbiAgICAgICAgICAgICAgICAgIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgICAgICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgICAgIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiXG4gICAgICAgICAgICAgICAgICAgIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIlxuICAgICAgICAgICAgICAgICAgICBzdHJva2VXaWR0aD1cIjJcIlxuICAgICAgICAgICAgICAgICAgICBkPVwiTTQuMzE4IDYuMzE4YTQuNSA0LjUgMCAwMDAgNi4zNjRMMTIgMjAuMzY0bDcuNjgyLTcuNjgyYTQuNSA0LjUgMCAwMC02LjM2NC02LjM2NEwxMiA3LjYzNmwtMS4zMTgtMS4zMThhNC41IDQuNSAwIDAwLTYuMzY0IDB6XCJcbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgICB7ZGF0YT8udHdlZXQ/Lmxpa2VzfVxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgXG4gICAgICAgICAgXG4gICAgICAgIDwvZGl2PlxuICAgIFxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuZXhwb3J0IGRlZmF1bHQgSXRlbURldGFpbDsiXSwibmFtZXMiOlsidXNlUm91dGVyIiwidXNlU1dSIiwiSXRlbURldGFpbCIsImRhdGEiLCJyb3V0ZXIiLCJxdWVyeSIsImlkIiwiZXJyb3IiLCJkaXYiLCJjbGFzc05hbWUiLCJwIiwidHdlZXQiLCJ1c2VyIiwibmFtZSIsImEiLCJoMSIsImNvbnRlbnQiLCJidXR0b24iLCJzdmciLCJ4bWxucyIsImZpbGwiLCJ2aWV3Qm94Iiwic3Ryb2tlIiwiYXJpYS1oaWRkZW4iLCJwYXRoIiwic3Ryb2tlTGluZWNhcCIsInN0cm9rZUxpbmVqb2luIiwic3Ryb2tlV2lkdGgiLCJkIiwibGlrZXMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/tweet/[id].tsx\n");

/***/ })

});
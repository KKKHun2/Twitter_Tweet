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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swr */ \"./node_modules/swr/dist/index.mjs\");\nvar _this = undefined;\n\n\n\n\nvar _s = $RefreshSig$();\nvar Home = function() {\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    var ref = (0,swr__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(\"/api/users/my\"), data = ref.data, error = ref.error;\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        if (error) {\n            router.replace(\"/create-account\");\n        }\n    }, [\n        router,\n        error\n    ]);\n    if (!data) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n            fileName: \"/Users/hun2/Downloads/nextjs-prisma-typescript-tailwind-blueprint/pages/mainPage.tsx\",\n            lineNumber: 15,\n            columnNumber: 12\n        }, _this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"p-2 bg-red-500 w-[50%] max-h-full \",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"m-10 mb-20 bg-slate-400\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: [\n                            \"Welcome \",\n                            data === null || data === void 0 ? void 0 : data.name,\n                            \"!\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/hun2/Downloads/nextjs-prisma-typescript-tailwind-blueprint/pages/mainPage.tsx\",\n                        lineNumber: 20,\n                        columnNumber: 7\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        children: [\n                            \"Your email is: \",\n                            data === null || data === void 0 ? void 0 : data.email\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/hun2/Downloads/nextjs-prisma-typescript-tailwind-blueprint/pages/mainPage.tsx\",\n                        lineNumber: 21,\n                        columnNumber: 7\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/hun2/Downloads/nextjs-prisma-typescript-tailwind-blueprint/pages/mainPage.tsx\",\n                lineNumber: 19,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"m-10 p-10 bg-slate-400\",\n                children: \"123\"\n            }, void 0, false, {\n                fileName: \"/Users/hun2/Downloads/nextjs-prisma-typescript-tailwind-blueprint/pages/mainPage.tsx\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"m-10 p-10 bg-slate-400\",\n                children: \"12312312\"\n            }, void 0, false, {\n                fileName: \"/Users/hun2/Downloads/nextjs-prisma-typescript-tailwind-blueprint/pages/mainPage.tsx\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/hun2/Downloads/nextjs-prisma-typescript-tailwind-blueprint/pages/mainPage.tsx\",\n        lineNumber: 18,\n        columnNumber: 5\n    }, _this);\n};\n_s(Home, \"ueaSG3dFe54Zrjg9PlhqkDW4vec=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter,\n        swr__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n    ];\n});\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9tYWluUGFnZS50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7QUFDd0M7QUFDQztBQUNoQjs7QUFFekIsSUFBTUksSUFBSSxHQUFhLFdBQU07O0lBQzNCLElBQU1DLE1BQU0sR0FBR0wsc0RBQVMsRUFBRTtJQUMxQixJQUF3QkcsR0FBdUIsR0FBdkJBLCtDQUFNLENBQUMsZUFBZSxDQUFDLEVBQXZDRyxJQUFJLEdBQVlILEdBQXVCLENBQXZDRyxJQUFJLEVBQUVDLEtBQUssR0FBS0osR0FBdUIsQ0FBakNJLEtBQUs7SUFDbkJMLGdEQUFTLENBQUMsV0FBTTtRQUNkLElBQUlLLEtBQUssRUFBRTtZQUNURixNQUFNLENBQUNHLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1NBQ25DO0tBQ0YsRUFBRTtRQUFDSCxNQUFNO1FBQUVFLEtBQUs7S0FBQyxDQUFDLENBQUM7SUFDcEIsSUFBSSxDQUFDRCxJQUFJLEVBQUU7UUFDVCxxQkFBTyw4REFBQ0csS0FBRzs7OztpQkFBRyxDQUFDO0tBQ2hCO0lBQ0QscUJBQ0UsOERBQUNBLEtBQUc7UUFBQ0MsU0FBUyxFQUFDLG9DQUFvQzs7MEJBQ2pELDhEQUFDRCxLQUFHO2dCQUFDQyxTQUFTLEVBQUMseUJBQXlCOztrQ0FDeEMsOERBQUNDLElBQUU7OzRCQUFDLFVBQVE7NEJBQUNMLElBQUksYUFBSkEsSUFBSSxXQUFNLEdBQVZBLEtBQUFBLENBQVUsR0FBVkEsSUFBSSxDQUFFTSxJQUFJOzRCQUFDLEdBQUM7Ozs7Ozs2QkFBSztrQ0FDOUIsOERBQUNDLElBQUU7OzRCQUFDLGlCQUFlOzRCQUFDUCxJQUFJLGFBQUpBLElBQUksV0FBTyxHQUFYQSxLQUFBQSxDQUFXLEdBQVhBLElBQUksQ0FBRVEsS0FBSzs7Ozs7OzZCQUFNOzs7Ozs7cUJBQzlCOzBCQUNQLDhEQUFDTCxLQUFHO2dCQUFDQyxTQUFTLEVBQUMsd0JBQXdCOzBCQUFDLEtBQUc7Ozs7O3FCQUFNOzBCQUNqRCw4REFBQ0QsS0FBRztnQkFBQ0MsU0FBUyxFQUFDLHdCQUF5QjswQkFBQyxVQUFROzs7OztxQkFBTTs7Ozs7O2FBR25ELENBQ047Q0FDSDtHQXZCS04sSUFBSTs7UUFDT0osa0RBQVM7UUFDQUcsMkNBQU07OztBQUYxQkMsS0FBQUEsSUFBSTtBQXlCViwrREFBZUEsSUFBSSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL21haW5QYWdlLnRzeD9mZDcxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRQYWdlIH0gZnJvbSBcIm5leHRcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHVzZVNXUiBmcm9tIFwic3dyXCI7XG5cbmNvbnN0IEhvbWU6IE5leHRQYWdlID0gKCkgPT4ge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gdXNlU1dSKFwiL2FwaS91c2Vycy9teVwiKTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoZXJyb3IpIHtcbiAgICAgIHJvdXRlci5yZXBsYWNlKFwiL2NyZWF0ZS1hY2NvdW50XCIpO1xuICAgIH1cbiAgfSwgW3JvdXRlciwgZXJyb3JdKTtcbiAgaWYgKCFkYXRhKSB7XG4gICAgcmV0dXJuIDxkaXYgLz47XG4gIH1cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInAtMiBiZy1yZWQtNTAwIHctWzUwJV0gbWF4LWgtZnVsbCBcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibS0xMCBtYi0yMCBiZy1zbGF0ZS00MDBcIj5cbiAgICAgIDxoMT5XZWxjb21lIHtkYXRhPy5uYW1lfSE8L2gxPlxuICAgICAgPGgzPllvdXIgZW1haWwgaXM6IHtkYXRhPy5lbWFpbH08L2gzPlxuICAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtLTEwIHAtMTAgYmctc2xhdGUtNDAwXCI+MTIzPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm0tMTAgcC0xMCAgYmctc2xhdGUtNDAwXCI+MTIzMTIzMTI8L2Rpdj5cbiAgICAgXG4gICAgIFxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSG9tZTsiXSwibmFtZXMiOlsidXNlUm91dGVyIiwiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTV1IiLCJIb21lIiwicm91dGVyIiwiZGF0YSIsImVycm9yIiwicmVwbGFjZSIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwibmFtZSIsImgzIiwiZW1haWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/mainPage.tsx\n");

/***/ })

});
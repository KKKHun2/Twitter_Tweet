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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_hun2_Downloads_nextjs_prisma_typescript_tailwind_blueprint_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_hun2_Downloads_nextjs_prisma_typescript_tailwind_blueprint_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_hun2_Downloads_nextjs_prisma_typescript_tailwind_blueprint_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swr */ \"./node_modules/swr/dist/index.mjs\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\nvar _this = undefined;\n\n\nvar _s = $RefreshSig$();\nvar HomePage = function() {\n    var _this1 = _this;\n    _s();\n    var ref = (0,swr__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\"/api/tweets\"), tweets = ref.data, mutateTweets = ref.mutate;\n    var handleCreateTweet = function() {\n        var _ref = _asyncToGenerator(_Users_hun2_Downloads_nextjs_prisma_typescript_tailwind_blueprint_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var content, res;\n            return _Users_hun2_Downloads_nextjs_prisma_typescript_tailwind_blueprint_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        content = prompt(\"Enter your tweet:\");\n                        if (!content) {\n                            _ctx.next = 6;\n                            break;\n                        }\n                        _ctx.next = 4;\n                        return fetch(\"/api/tweets\", {\n                            method: \"POST\",\n                            headers: {\n                                \"Content-Type\": \"application/json\"\n                            },\n                            body: JSON.stringify({\n                                content: content\n                            })\n                        });\n                    case 4:\n                        res = _ctx.sent;\n                        if (res.ok) {\n                            mutateTweets();\n                        }\n                    case 6:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function handleCreateTweet() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: \"w-full h-screen\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"flex justify-center items-center mt-10\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                    onClick: handleCreateTweet,\n                    children: \"Create Tweet\"\n                }, void 0, false, {\n                    fileName: \"/Users/hun2/Downloads/nextjs-prisma-typescript-tailwind-blueprint/pages/mainPage2.tsx\",\n                    lineNumber: 29,\n                    columnNumber: 7\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/hun2/Downloads/nextjs-prisma-typescript-tailwind-blueprint/pages/mainPage2.tsx\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"space-y-20 p-2 bg-slate-500\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: \"mb-10 bg-red-200 flex felx-row\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                className: \"bg-blue-300 w-5 h-5 p-10 rounded-full left-0 \"\n                            }, void 0, false, {\n                                fileName: \"/Users/hun2/Downloads/nextjs-prisma-typescript-tailwind-blueprint/pages/mainPage2.tsx\",\n                                lineNumber: 34,\n                                columnNumber: 9\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                className: \"m-2\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                        children: \"ava1\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/hun2/Downloads/nextjs-prisma-typescript-tailwind-blueprint/pages/mainPage2.tsx\",\n                                        lineNumber: 36,\n                                        columnNumber: 11\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                        children: \"contetasdsdn\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/hun2/Downloads/nextjs-prisma-typescript-tailwind-blueprint/pages/mainPage2.tsx\",\n                                        lineNumber: 37,\n                                        columnNumber: 11\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/hun2/Downloads/nextjs-prisma-typescript-tailwind-blueprint/pages/mainPage2.tsx\",\n                                lineNumber: 35,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/hun2/Downloads/nextjs-prisma-typescript-tailwind-blueprint/pages/mainPage2.tsx\",\n                        lineNumber: 33,\n                        columnNumber: 9\n                    }, _this),\n                    tweets === null || tweets === void 0 ? void 0 : tweets.map(function(tweet) {\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"li\", {\n                            children: [\n                                tweet.content,\n                                \" - Likes: \",\n                                tweet.likes\n                            ]\n                        }, tweet.id, true, {\n                            fileName: \"/Users/hun2/Downloads/nextjs-prisma-typescript-tailwind-blueprint/pages/mainPage2.tsx\",\n                            lineNumber: 43,\n                            columnNumber: 11\n                        }, _this1);\n                    })\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/hun2/Downloads/nextjs-prisma-typescript-tailwind-blueprint/pages/mainPage2.tsx\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/hun2/Downloads/nextjs-prisma-typescript-tailwind-blueprint/pages/mainPage2.tsx\",\n        lineNumber: 27,\n        columnNumber: 5\n    }, _this);\n};\n_s(HomePage, \"ddOhZ40HkLHStq/Ffe+Hy3tszH4=\", false, function() {\n    return [\n        swr__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n    ];\n});\n_c = HomePage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomePage);\nvar _c;\n$RefreshReg$(_c, \"HomePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9tYWluUGFnZTIudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUF5Qjs7QUFFekIsSUFBTUMsUUFBUSxHQUFHLFdBQU07OztJQUNyQixJQUErQ0QsR0FBcUIsR0FBckJBLCtDQUFNLENBQUMsYUFBYSxDQUFDLEVBQTVERSxNQUFZLEdBQTJCRixHQUFxQixDQUE1REUsSUFBSSxFQUFVRSxZQUFvQixHQUFLSixHQUFxQixDQUE5Q0ksTUFBTTtJQUc1QixJQUFNRSxpQkFBaUI7bUJBQUcsa05BQVk7Z0JBQzlCQyxPQUFPLEVBRUxDLEdBQUc7Ozs7d0JBRkxELE9BQU8sR0FBR0UsTUFBTSxDQUFDLG1CQUFtQixDQUFDLENBQUM7NEJBQ3hDRixDQUFBQSxPQUFPOzs7OzsrQkFDU0csS0FBSyxDQUFDLGFBQWEsRUFBRTs0QkFDckNDLE1BQU0sRUFBRSxNQUFNOzRCQUNkQyxPQUFPLEVBQUU7Z0NBQ1AsY0FBYyxFQUFFLGtCQUFrQjs2QkFDbkM7NEJBQ0RDLElBQUksRUFBRUMsSUFBSSxDQUFDQyxTQUFTLENBQUM7Z0NBQUVSLE9BQU8sRUFBUEEsT0FBTzs2QkFBRSxDQUFDO3lCQUNsQyxDQUFDOzt3QkFOSUMsR0FBRyxZQU1QO3dCQUNGLElBQUlBLEdBQUcsQ0FBQ1EsRUFBRSxFQUFFOzRCQUNWWCxZQUFZLEVBQUUsQ0FBQzt5QkFDaEI7Ozs7OztTQUVKO3dCQWRLQyxpQkFBaUI7OztPQWN0QjtJQUlELHFCQUNFLDhEQUFDVyxLQUFHO1FBQUNDLFNBQVMsRUFBQyxpQkFBaUI7OzBCQUM5Qiw4REFBQ0QsS0FBRztnQkFBQ0MsU0FBUyxFQUFDLHdDQUF3QzswQkFDdkQsNEVBQUNDLFFBQU07b0JBQUVDLE9BQU8sRUFBRWQsaUJBQWlCOzhCQUFFLGNBQVk7Ozs7O3lCQUFTOzs7OztxQkFDcEQ7MEJBRU4sOERBQUNXLEtBQUc7Z0JBQUNDLFNBQVMsRUFBQyw2QkFBNkI7O2tDQUMxQyw4REFBQ0QsS0FBRzt3QkFBQ0MsU0FBUyxFQUFDLGdDQUFnQzs7MENBQy9DLDhEQUFDRCxLQUFHO2dDQUFDQyxTQUFTLEVBQUMsK0NBQStDOzs7OztxQ0FBRzswQ0FDL0QsOERBQUNELEtBQUc7Z0NBQUNDLFNBQVMsRUFBQyxLQUFLOztrREFDcEIsOERBQUNELEtBQUc7a0RBQUMsTUFBSTs7Ozs7NkNBQU07a0RBQ2YsOERBQUNBLEtBQUc7a0RBQUMsY0FBWTs7Ozs7NkNBQU07Ozs7OztxQ0FDakI7Ozs7Ozs2QkFFQTtvQkFFUGQsTUFBTSxhQUFOQSxNQUFNLFdBQUssR0FBWEEsS0FBQUEsQ0FBVyxHQUFYQSxNQUFNLENBQUVrQixHQUFHLENBQUMsU0FBQ0MsS0FBSzs2Q0FDakIsOERBQUNDLElBQUU7O2dDQUNBRCxLQUFLLENBQUNmLE9BQU87Z0NBQUMsWUFBVTtnQ0FBQ2UsS0FBSyxDQUFDRSxLQUFLOzsyQkFEOUJGLEtBQUssQ0FBQ0csRUFBRTs7OztrQ0FFWjtxQkFDTixDQUFDOzs7Ozs7cUJBQ0U7Ozs7OzthQUNGLENBQ047Q0FDSDtHQTlDS3hCLFFBQVE7O1FBQ21DRCwyQ0FBTTs7O0FBRGpEQyxLQUFBQSxRQUFRO0FBZ0RkLCtEQUFlQSxRQUFRLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbWFpblBhZ2UyLnRzeD85Y2U5Il0sInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHVzZVNXUiBmcm9tICdzd3InO1xuXG5jb25zdCBIb21lUGFnZSA9ICgpID0+IHtcbiAgY29uc3QgeyBkYXRhOiB0d2VldHMsIG11dGF0ZTogbXV0YXRlVHdlZXRzIH0gPSB1c2VTV1IoJy9hcGkvdHdlZXRzJyk7XG5cblxuICBjb25zdCBoYW5kbGVDcmVhdGVUd2VldCA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCBjb250ZW50ID0gcHJvbXB0KCdFbnRlciB5b3VyIHR3ZWV0OicpO1xuICAgIGlmIChjb250ZW50KSB7XG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnL2FwaS90d2VldHMnLCB7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgfSxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBjb250ZW50IH0pLFxuICAgICAgfSk7XG4gICAgICBpZiAocmVzLm9rKSB7XG4gICAgICAgIG11dGF0ZVR3ZWV0cygpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT0ndy1mdWxsIGgtc2NyZWVuJz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBtdC0xMCc+XG4gICAgICA8YnV0dG9uICBvbkNsaWNrPXtoYW5kbGVDcmVhdGVUd2VldH0+Q3JlYXRlIFR3ZWV0PC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICAgIFxuICAgICAgPGRpdiBjbGFzc05hbWU9J3NwYWNlLXktMjAgcC0yIGJnLXNsYXRlLTUwMCc+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtYi0xMCBiZy1yZWQtMjAwIGZsZXggZmVseC1yb3cnPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYmctYmx1ZS0zMDAgdy01IGgtNSBwLTEwIHJvdW5kZWQtZnVsbCBsZWZ0LTAgJyAvPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtLTInPlxuICAgICAgICAgIDxkaXY+YXZhMTwvZGl2PlxuICAgICAgICAgIDxkaXY+Y29udGV0YXNkc2RuPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIFxuICAgICAgICB7dHdlZXRzPy5tYXAoKHR3ZWV0KSA9PiAoXG4gICAgICAgICAgPGxpIGtleT17dHdlZXQuaWR9PlxuICAgICAgICAgICAge3R3ZWV0LmNvbnRlbnR9IC0gTGlrZXM6IHt0d2VldC5saWtlc31cbiAgICAgICAgICA8L2xpPlxuICAgICAgICApKX1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSG9tZVBhZ2U7Il0sIm5hbWVzIjpbInVzZVNXUiIsIkhvbWVQYWdlIiwiZGF0YSIsInR3ZWV0cyIsIm11dGF0ZSIsIm11dGF0ZVR3ZWV0cyIsImhhbmRsZUNyZWF0ZVR3ZWV0IiwiY29udGVudCIsInJlcyIsInByb21wdCIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5Iiwib2siLCJkaXYiLCJjbGFzc05hbWUiLCJidXR0b24iLCJvbkNsaWNrIiwibWFwIiwidHdlZXQiLCJsaSIsImxpa2VzIiwiaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/mainPage2.tsx\n");

/***/ })

});
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

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _ArticlesTable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ArticlesTable */ \"./pages/ArticlesTable.js\");\n/* harmony import */ var _Hero__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Hero */ \"./pages/Hero.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction Home() {\n    _s();\n    const [dataResponse, setdataResponse] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        async function getPageData() {\n            const apiUrlEndpoint = \"http://localhost:8080/api/getdata\";\n            const response = await fetch(apiUrlEndpoint);\n            const res = await response.json();\n            console.log(res);\n            setdataResponse(res.articles);\n        }\n        getPageData();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().container),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"\".concat((_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().featuresWrapper), \" center\"),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().featuresHeading),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"Header\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ulyss\\\\ecds-node\\\\pages\\\\index.js\",\n                        lineNumber: 22,\n                        columnNumber: 13\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\ulyss\\\\ecds-node\\\\pages\\\\index.js\",\n                    lineNumber: 21,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Hero__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\ulyss\\\\ecds-node\\\\pages\\\\index.js\",\n                    lineNumber: 24,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().tableAligned),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ArticlesTable__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        articles: dataResponse\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ulyss\\\\ecds-node\\\\pages\\\\index.js\",\n                        lineNumber: 26,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\ulyss\\\\ecds-node\\\\pages\\\\index.js\",\n                    lineNumber: 25,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\ulyss\\\\ecds-node\\\\pages\\\\index.js\",\n            lineNumber: 20,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\ulyss\\\\ecds-node\\\\pages\\\\index.js\",\n        lineNumber: 19,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"j0VXpqHHmpv5YAIAipdGBxW5l6k=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTs7QUFBNEM7QUFDRztBQUNIO0FBQ2xCO0FBRVgsU0FBU0ssT0FBTzs7SUFDN0IsTUFBTSxDQUFDQyxjQUFjQyxnQkFBZ0IsR0FBR04sK0NBQVFBLENBQUMsRUFBRTtJQUNuREQsZ0RBQVNBLENBQUMsSUFBTTtRQUNkLGVBQWVRLGNBQWM7WUFDM0IsTUFBTUMsaUJBQWtCO1lBQ3hCLE1BQU1DLFdBQVcsTUFBTUMsTUFBTUY7WUFDN0IsTUFBTUcsTUFBTSxNQUFNRixTQUFTRyxJQUFJO1lBQy9CQyxRQUFRQyxHQUFHLENBQUNIO1lBQ1pMLGdCQUFnQkssSUFBSUksUUFBUTtRQUM5QjtRQUNBUjtJQUNGLEdBQUcsRUFBRTtJQUNMLHFCQUNFLDhEQUFDUztRQUFJQyxXQUFXaEIsMEVBQWdCO2tCQUM5Qiw0RUFBQ2U7WUFBSUMsV0FBVyxHQUEwQixPQUF2QmhCLGdGQUFzQixFQUFDOzs4QkFDdEMsOERBQUNlO29CQUFJQyxXQUFXaEIsZ0ZBQXNCOzhCQUNwQyw0RUFBQ29CO2tDQUFFOzs7Ozs7Ozs7Ozs4QkFFUCw4REFBQ2xCLDZDQUFJQTs7Ozs7OEJBQ0wsOERBQUNhO29CQUFJQyxXQUFXaEIsNkVBQW1COzhCQUNqQyw0RUFBQ0Msc0RBQWFBO3dCQUFDYSxVQUFVVjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUtuQyxDQUFDO0dBekJ1QkQ7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzXCI7XG5pbXBvcnQgQXJ0aWNsZXNUYWJsZSBmcm9tIFwiLi9BcnRpY2xlc1RhYmxlXCI7XG5pbXBvcnQgSGVybyBmcm9tIFwiLi9IZXJvXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IFtkYXRhUmVzcG9uc2UsIHNldGRhdGFSZXNwb25zZV0gPSB1c2VTdGF0ZShbXSk7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgYXN5bmMgZnVuY3Rpb24gZ2V0UGFnZURhdGEoKSB7XG4gICAgICBjb25zdCBhcGlVcmxFbmRwb2ludCA9IGBodHRwOi8vbG9jYWxob3N0OjgwODAvYXBpL2dldGRhdGFgO1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChhcGlVcmxFbmRwb2ludCk7XG4gICAgICBjb25zdCByZXMgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICBjb25zb2xlLmxvZyhyZXMpO1xuICAgICAgc2V0ZGF0YVJlc3BvbnNlKHJlcy5hcnRpY2xlcyk7XG4gICAgfVxuICAgIGdldFBhZ2VEYXRhKCk7XG4gIH0sIFtdKTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7c3R5bGVzLmZlYXR1cmVzV3JhcHBlcn0gY2VudGVyYH0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5mZWF0dXJlc0hlYWRpbmd9PlxuICAgICAgICAgICAgPHA+SGVhZGVyPC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8SGVybz48L0hlcm8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGFibGVBbGlnbmVkfT5cbiAgICAgICAgICA8QXJ0aWNsZXNUYWJsZSBhcnRpY2xlcz17ZGF0YVJlc3BvbnNlfT48L0FydGljbGVzVGFibGU+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJzdHlsZXMiLCJBcnRpY2xlc1RhYmxlIiwiSGVybyIsIkhvbWUiLCJkYXRhUmVzcG9uc2UiLCJzZXRkYXRhUmVzcG9uc2UiLCJnZXRQYWdlRGF0YSIsImFwaVVybEVuZHBvaW50IiwicmVzcG9uc2UiLCJmZXRjaCIsInJlcyIsImpzb24iLCJjb25zb2xlIiwibG9nIiwiYXJ0aWNsZXMiLCJkaXYiLCJjbGFzc05hbWUiLCJjb250YWluZXIiLCJmZWF0dXJlc1dyYXBwZXIiLCJmZWF0dXJlc0hlYWRpbmciLCJwIiwidGFibGVBbGlnbmVkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});
"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/getdata";
exports.ids = ["pages/api/getdata"];
exports.modules = {

/***/ "mysql2/promise":
/*!*********************************!*\
  !*** external "mysql2/promise" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("mysql2/promise");

/***/ }),

/***/ "(api)/./pages/api/getdata.js":
/*!******************************!*\
  !*** ./pages/api/getdata.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var mysql2_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mysql2/promise */ \"mysql2/promise\");\n/* harmony import */ var mysql2_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mysql2_promise__WEBPACK_IMPORTED_MODULE_0__);\n\nasync function handler(req, res) {\n    const dbconnection = await mysql2_promise__WEBPACK_IMPORTED_MODULE_0___default().createConnection({\n        host: \"localhost\",\n        database: \"ecds\",\n        user: \"root\",\n        password: \"\"\n    });\n    try {\n        const query = \"SELECT url, date, description, title, author, keywords FROM articles\";\n        const values = [];\n        const [data] = await dbconnection.execute(query, values);\n        dbconnection.end();\n        res.status(200).json({\n            articles: data\n        });\n    } catch (error) {\n        res.status(500).json({\n            error: error.message\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZ2V0ZGF0YS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBbUM7QUFFcEIsZUFBZUMsUUFBUUMsR0FBRyxFQUFFQyxHQUFHLEVBQUU7SUFFNUMsTUFBTUMsZUFBZSxNQUFNSixzRUFBc0IsQ0FBQztRQUM5Q00sTUFBTTtRQUNOQyxVQUFVO1FBQ1ZDLE1BQU07UUFDTkMsVUFBVTtJQUNkO0lBRUEsSUFBSTtRQUNBLE1BQU1DLFFBQVE7UUFDZCxNQUFNQyxTQUFTLEVBQUU7UUFDakIsTUFBTSxDQUFDQyxLQUFLLEdBQUcsTUFBTVIsYUFBYVMsT0FBTyxDQUFDSCxPQUFPQztRQUNqRFAsYUFBYVUsR0FBRztRQUVoQlgsSUFBSVksTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztZQUFFQyxVQUFVTDtRQUFLO0lBQzFDLEVBQUUsT0FBT00sT0FBTztRQUNaZixJQUFJWSxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO1lBQUVFLE9BQU9BLE1BQU1DLE9BQU87UUFBQTtJQUMvQztBQUNKLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lY2RzLXVpLy4vcGFnZXMvYXBpL2dldGRhdGEuanM/MWNiOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbXlzcWwgZnJvbSBcIm15c3FsMi9wcm9taXNlXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XHJcblxyXG4gICAgY29uc3QgZGJjb25uZWN0aW9uID0gYXdhaXQgbXlzcWwuY3JlYXRlQ29ubmVjdGlvbih7XHJcbiAgICAgICAgaG9zdDogXCJsb2NhbGhvc3RcIixcclxuICAgICAgICBkYXRhYmFzZTogXCJlY2RzXCIsXHJcbiAgICAgICAgdXNlcjogXCJyb290XCIsXHJcbiAgICAgICAgcGFzc3dvcmQ6IFwiXCIsXHJcbiAgICB9KTtcclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHF1ZXJ5ID0gXCJTRUxFQ1QgdXJsLCBkYXRlLCBkZXNjcmlwdGlvbiwgdGl0bGUsIGF1dGhvciwga2V5d29yZHMgRlJPTSBhcnRpY2xlc1wiXHJcbiAgICAgICAgY29uc3QgdmFsdWVzID0gW107XHJcbiAgICAgICAgY29uc3QgW2RhdGFdID0gYXdhaXQgZGJjb25uZWN0aW9uLmV4ZWN1dGUocXVlcnksIHZhbHVlcyk7XHJcbiAgICAgICAgZGJjb25uZWN0aW9uLmVuZCgpO1xyXG5cclxuICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7IGFydGljbGVzOiBkYXRhIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICByZXMuc3RhdHVzKDUwMCkuanNvbih7IGVycm9yOiBlcnJvci5tZXNzYWdlfSk7XHJcbiAgICB9XHJcbn0iXSwibmFtZXMiOlsibXlzcWwiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwiZGJjb25uZWN0aW9uIiwiY3JlYXRlQ29ubmVjdGlvbiIsImhvc3QiLCJkYXRhYmFzZSIsInVzZXIiLCJwYXNzd29yZCIsInF1ZXJ5IiwidmFsdWVzIiwiZGF0YSIsImV4ZWN1dGUiLCJlbmQiLCJzdGF0dXMiLCJqc29uIiwiYXJ0aWNsZXMiLCJlcnJvciIsIm1lc3NhZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/getdata.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/getdata.js"));
module.exports = __webpack_exports__;

})();
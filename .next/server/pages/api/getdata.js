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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var mysql2_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mysql2/promise */ \"mysql2/promise\");\n/* harmony import */ var mysql2_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mysql2_promise__WEBPACK_IMPORTED_MODULE_0__);\n\nasync function handler(req, res) {\n    const dbconnection = await mysql2_promise__WEBPACK_IMPORTED_MODULE_0___default().createConnection({\n        host: \"ecds-1.c3opxu6xd3jh.eu-west-3.rds.amazonaws.com\",\n        user: \"admin\",\n        password: \"0HEFgic6tLrxV7SszQ18\",\n        port: \"3306\",\n        database: \"ecds\"\n    });\n    try {\n        const query = \"SELECT url, date, description, title, author, keywords FROM articles\";\n        const values = [];\n        const [data] = await dbconnection.execute(query, values);\n        dbconnection.end();\n        res.status(200).json({\n            articles: data\n        });\n    } catch (error) {\n        res.status(500).json({\n            error: error.message\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZ2V0ZGF0YS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBbUM7QUFFcEIsZUFBZUMsUUFBUUMsR0FBRyxFQUFFQyxHQUFHLEVBQUU7SUFFNUMsTUFBTUMsZUFBZSxNQUFNSixzRUFBc0IsQ0FBQztRQUM5Q00sTUFBVztRQUNYQyxNQUFXO1FBQ1hDLFVBQVc7UUFDWEMsTUFBVztRQUNYQyxVQUFXO0lBQ2Y7SUFFQSxJQUFJO1FBQ0EsTUFBTUMsUUFBUTtRQUNkLE1BQU1DLFNBQVMsRUFBRTtRQUNqQixNQUFNLENBQUNDLEtBQUssR0FBRyxNQUFNVCxhQUFhVSxPQUFPLENBQUNILE9BQU9DO1FBQ2pEUixhQUFhVyxHQUFHO1FBRWhCWixJQUFJYSxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO1lBQUVDLFVBQVVMO1FBQUs7SUFDMUMsRUFBRSxPQUFPTSxPQUFPO1FBQ1poQixJQUFJYSxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO1lBQUVFLE9BQU9BLE1BQU1DLE9BQU87UUFBQTtJQUMvQztBQUNKLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lY2RzLXVpLy4vcGFnZXMvYXBpL2dldGRhdGEuanM/MWNiOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbXlzcWwgZnJvbSBcIm15c3FsMi9wcm9taXNlXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XHJcblxyXG4gICAgY29uc3QgZGJjb25uZWN0aW9uID0gYXdhaXQgbXlzcWwuY3JlYXRlQ29ubmVjdGlvbih7XHJcbiAgICAgICAgaG9zdCAgICAgOiAnZWNkcy0xLmMzb3B4dTZ4ZDNqaC5ldS13ZXN0LTMucmRzLmFtYXpvbmF3cy5jb20nLFxyXG4gICAgICAgIHVzZXIgICAgIDogJ2FkbWluJyxcclxuICAgICAgICBwYXNzd29yZCA6ICcwSEVGZ2ljNnRMcnhWN1NzelExOCcsXHJcbiAgICAgICAgcG9ydCAgICAgOiAnMzMwNicsXHJcbiAgICAgICAgZGF0YWJhc2UgOiAnZWNkcydcclxuICAgIH0pO1xyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcXVlcnkgPSBcIlNFTEVDVCB1cmwsIGRhdGUsIGRlc2NyaXB0aW9uLCB0aXRsZSwgYXV0aG9yLCBrZXl3b3JkcyBGUk9NIGFydGljbGVzXCJcclxuICAgICAgICBjb25zdCB2YWx1ZXMgPSBbXTtcclxuICAgICAgICBjb25zdCBbZGF0YV0gPSBhd2FpdCBkYmNvbm5lY3Rpb24uZXhlY3V0ZShxdWVyeSwgdmFsdWVzKTtcclxuICAgICAgICBkYmNvbm5lY3Rpb24uZW5kKCk7XHJcblxyXG4gICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgYXJ0aWNsZXM6IGRhdGEgfSk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgZXJyb3I6IGVycm9yLm1lc3NhZ2V9KTtcclxuICAgIH1cclxufSJdLCJuYW1lcyI6WyJteXNxbCIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJkYmNvbm5lY3Rpb24iLCJjcmVhdGVDb25uZWN0aW9uIiwiaG9zdCIsInVzZXIiLCJwYXNzd29yZCIsInBvcnQiLCJkYXRhYmFzZSIsInF1ZXJ5IiwidmFsdWVzIiwiZGF0YSIsImV4ZWN1dGUiLCJlbmQiLCJzdGF0dXMiLCJqc29uIiwiYXJ0aWNsZXMiLCJlcnJvciIsIm1lc3NhZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/getdata.js\n");

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
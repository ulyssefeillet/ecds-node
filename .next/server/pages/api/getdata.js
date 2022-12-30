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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var mysql2_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mysql2/promise */ \"mysql2/promise\");\n/* harmony import */ var mysql2_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mysql2_promise__WEBPACK_IMPORTED_MODULE_0__);\n\nasync function handler(req, res) {\n    /*\r\n\r\n    const dbconnection = await mysql.createConnection({\r\n        host: \"localhost\",\r\n        database: \"ecds\",\r\n        user: \"root\",\r\n        password: \"\",\r\n    });\r\n\r\n    try {\r\n        const query = \"SELECT url, date, description, title, author, keywords FROM articles\"\r\n        const values = [];\r\n        const [data] = await dbconnection.execute(query, values);\r\n        dbconnection.end();\r\n\r\n        res.status(200).json({ articles: data });\r\n    } catch (error) {\r\n        res.status(500).json({ error: error.message});\r\n    }*/ const connection = await mysql2_promise__WEBPACK_IMPORTED_MODULE_0___default().createConnection({\n        host: \"ecds-1.c3opxu6xd3jh.eu-west-3.rds.amazonaws.com\",\n        user: \"admin\",\n        password: \"toto\",\n        port: \"3306\"\n    });\n    try {\n        connection.end();\n        res.status(200).json({\n            res: \"database connected\"\n        });\n    } catch (error) {\n        res.status(500).json({\n            error: error.message\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZ2V0ZGF0YS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBbUM7QUFFcEIsZUFBZUMsUUFBUUMsR0FBRyxFQUFFQyxHQUFHLEVBQUU7SUFDaEQ7O1FBcUJRSSxNQUFXO1FBQ1hDLFVBQVc7UUFDWEMsTUFBVztJQUNiO0lBRUEsSUFBSTtRQUNGTDs7O1FBQ2lEO0lBQ25ELEVBQUUsT0FBT1MsT0FBTztRQUNkVixJQUFJUSxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO1lBQUVDLE9BQU9BLE1BQU1DOztJQUN0QztBQUNOLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lY2RzLXVpLy4vcGFnZXMvYXBpL2dldGRhdGEuanM/MWNiOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbXlzcWwgZnJvbSBcIm15c3FsMi9wcm9taXNlXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XHJcbi8qXHJcblxyXG4gICAgY29uc3QgZGJjb25uZWN0aW9uID0gYXdhaXQgbXlzcWwuY3JlYXRlQ29ubmVjdGlvbih7XHJcbiAgICAgICAgaG9zdDogXCJsb2NhbGhvc3RcIixcclxuICAgICAgICBkYXRhYmFzZTogXCJlY2RzXCIsXHJcbiAgICAgICAgdXNlcjogXCJyb290XCIsXHJcbiAgICAgICAgcGFzc3dvcmQ6IFwiXCIsXHJcbiAgICB9KTtcclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHF1ZXJ5ID0gXCJTRUxFQ1QgdXJsLCBkYXRlLCBkZXNjcmlwdGlvbiwgdGl0bGUsIGF1dGhvciwga2V5d29yZHMgRlJPTSBhcnRpY2xlc1wiXHJcbiAgICAgICAgY29uc3QgdmFsdWVzID0gW107XHJcbiAgICAgICAgY29uc3QgW2RhdGFdID0gYXdhaXQgZGJjb25uZWN0aW9uLmV4ZWN1dGUocXVlcnksIHZhbHVlcyk7XHJcbiAgICAgICAgZGJjb25uZWN0aW9uLmVuZCgpO1xyXG5cclxuICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7IGFydGljbGVzOiBkYXRhIH0pO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICByZXMuc3RhdHVzKDUwMCkuanNvbih7IGVycm9yOiBlcnJvci5tZXNzYWdlfSk7XHJcbiAgICB9Ki9cclxuICAgIGNvbnN0IGNvbm5lY3Rpb24gPSBhd2FpdCBteXNxbC5jcmVhdGVDb25uZWN0aW9uKHtcclxuICAgICAgICBob3N0ICAgICA6ICdlY2RzLTEuYzNvcHh1NnhkM2poLmV1LXdlc3QtMy5yZHMuYW1hem9uYXdzLmNvbScsXHJcbiAgICAgICAgdXNlciAgICAgOiAnYWRtaW4nLFxyXG4gICAgICAgIHBhc3N3b3JkIDogJ3RvdG8nLFxyXG4gICAgICAgIHBvcnQgICAgIDogJzMzMDYnXHJcbiAgICAgIH0pO1xyXG4gICAgICBcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25uZWN0aW9uLmVuZCgpO1xyXG4gICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgcmVzOiBcImRhdGFiYXNlIGNvbm5lY3RlZFwiIH0pO1xyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgZXJyb3I6IGVycm9yLm1lc3NhZ2UgfSk7XHJcbiAgICAgIH1cclxufSJdLCJuYW1lcyI6WyJteXNxbCIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJjb25uZWN0aW9uIiwiY3JlYXRlQ29ubmVjdGlvbiIsImhvc3QiLCJ1c2VyIiwicGFzc3dvcmQiLCJwb3J0IiwiZW5kIiwic3RhdHVzIiwianNvbiIsImVycm9yIiwibWVzc2FnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/getdata.js\n");

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
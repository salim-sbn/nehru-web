webpackHotUpdate_N_E("pages/index",{

/***/ "./components/home/Result.js":
/*!***********************************!*\
  !*** ./components/home/Result.js ***!
  \***********************************/
/*! exports provided: Results, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Results\", function() { return Results; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _constants_results__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../constants/results */ \"./constants/results.js\");\n\n\nvar _jsxFileName = \"/workspace/nehru-web/components/home/Result.js\",\n    _this = undefined;\n\n\nvar Results = function Results() {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: 'flex flex-col items-center',\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"m-4 bg-white rounded bordered shadow\\n    transition duration-500 ease-in-out \\n    transform hover:-translate-y-1 hover:scale-105\\n    \",\n      style: {\n        width: '90vw'\n      },\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: 'flex flex-col rounded-t  px-4 p-2 bg-red-800',\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"text\", {\n          className: 'text-2xl font-middle text-center text-white cursor-default hover:underline',\n          children: \"Results\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 11,\n          columnNumber: 17\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 10,\n        columnNumber: 13\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: 'flex flex-col flex-wrap  px-4 p-2',\n        style: {\n          overflow: 'scroll',\n          maxHeight: 300\n        },\n        children: _constants_results__WEBPACK_IMPORTED_MODULE_1__[\"allResults\"].map(function (i) {\n          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n            href: i.path,\n            target: \"_blank\",\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n              className: 'flex flex-row items-center justify-between mx-2 w-100',\n              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"text\", {\n                className: 'font-light text-gray-700 cursor-default hover:underline',\n                children: i.title\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 17,\n                columnNumber: 21\n              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n                href: \"/results/\",\n                download: true,\n                children: \"Click to download\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 20,\n                columnNumber: 21\n              }, _this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 16,\n              columnNumber: 17\n            }, _this)\n          }, i.title, false, {\n            fileName: _jsxFileName,\n            lineNumber: 15,\n            columnNumber: 37\n          }, _this);\n        })\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 14,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 6,\n      columnNumber: 5\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 5,\n    columnNumber: 5\n  }, _this);\n};\n_c = Results;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Results);\n\nvar _c;\n\n$RefreshReg$(_c, \"Results\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9ob21lL1Jlc3VsdC5qcz83NDZmIl0sIm5hbWVzIjpbIlJlc3VsdHMiLCJ3aWR0aCIsIm92ZXJmbG93IiwibWF4SGVpZ2h0IiwiYWxsUmVzdWx0cyIsIm1hcCIsImkiLCJwYXRoIiwidGl0bGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUVPLElBQU1BLE9BQU8sR0FBRyxTQUFWQSxPQUFVLEdBQU07QUFDM0Isc0JBQ0U7QUFBSyxhQUFTLEVBQUUsNEJBQWhCO0FBQUEsMkJBQ0E7QUFBSyxlQUFTLDRJQUFkO0FBR0csV0FBSyxFQUFFO0FBQUVDLGFBQUssRUFBRTtBQUFULE9BSFY7QUFBQSw4QkFJUTtBQUFLLGlCQUFTLEVBQUUsOENBQWhCO0FBQUEsK0JBQ0k7QUFDSSxtQkFBUyxFQUFFLDRFQURmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUpSLGVBUUk7QUFBSyxpQkFBUyxFQUFFLG1DQUFoQjtBQUFxRCxhQUFLLEVBQUU7QUFBQ0Msa0JBQVEsRUFBQyxRQUFWO0FBQW1CQyxtQkFBUyxFQUFDO0FBQTdCLFNBQTVEO0FBQUEsa0JBQ01DLDZEQUFELENBQWFDLEdBQWIsQ0FBaUIsVUFBQUMsQ0FBQztBQUFBLDhCQUFLO0FBQUcsZ0JBQUksRUFBRUEsQ0FBQyxDQUFDQyxJQUFYO0FBQStCLGtCQUFNLEVBQUMsUUFBdEM7QUFBQSxtQ0FDcEI7QUFBSyx1QkFBUyxFQUFFLHVEQUFoQjtBQUFBLHNDQUNJO0FBQU0seUJBQVMsRUFBRSx5REFBakI7QUFBQSwwQkFDS0QsQ0FBQyxDQUFDRTtBQURQO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBREosZUFJSTtBQUFHLG9CQUFJLEVBQUMsV0FBUjtBQUFvQix3QkFBUSxNQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFKSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEb0IsYUFBc0JGLENBQUMsQ0FBQ0UsS0FBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFBTDtBQUFBLFNBQWxCO0FBREw7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQXVCRCxDQXhCTTtLQUFNUixPO0FBeUJFQSxzRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvaG9tZS9SZXN1bHQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBhbGxSZXN1bHRzIH0gZnJvbSBcIi4uLy4uL2NvbnN0YW50cy9yZXN1bHRzXCI7XG5cbmV4cG9ydCBjb25zdCBSZXN1bHRzID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXsnZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXInfT5cbiAgICA8ZGl2IGNsYXNzTmFtZT17YG0tNCBiZy13aGl0ZSByb3VuZGVkIGJvcmRlcmVkIHNoYWRvd1xuICAgIHRyYW5zaXRpb24gZHVyYXRpb24tNTAwIGVhc2UtaW4tb3V0IFxuICAgIHRyYW5zZm9ybSBob3ZlcjotdHJhbnNsYXRlLXktMSBob3ZlcjpzY2FsZS0xMDVcbiAgICBgfSBzdHlsZT17eyB3aWR0aDogJzkwdncnIH19PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9eydmbGV4IGZsZXgtY29sIHJvdW5kZWQtdCAgcHgtNCBwLTIgYmctcmVkLTgwMCd9PlxuICAgICAgICAgICAgICAgIDx0ZXh0XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17J3RleHQtMnhsIGZvbnQtbWlkZGxlIHRleHQtY2VudGVyIHRleHQtd2hpdGUgY3Vyc29yLWRlZmF1bHQgaG92ZXI6dW5kZXJsaW5lJ30+UmVzdWx0czwvdGV4dD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17J2ZsZXggZmxleC1jb2wgZmxleC13cmFwICBweC00IHAtMid9IHN0eWxlPXt7b3ZlcmZsb3c6J3Njcm9sbCcsbWF4SGVpZ2h0OjMwMH19PlxuICAgICAgICAgICAgeyhhbGxSZXN1bHRzKS5tYXAoaSA9PiAoPGEgaHJlZj17aS5wYXRofSBrZXk9e2kudGl0bGV9IHRhcmdldD0nX2JsYW5rJz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17J2ZsZXggZmxleC1yb3cgaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBteC0yIHctMTAwJ30+XG4gICAgICAgICAgICAgICAgICAgIDx0ZXh0IGNsYXNzTmFtZT17J2ZvbnQtbGlnaHQgdGV4dC1ncmF5LTcwMCBjdXJzb3ItZGVmYXVsdCBob3Zlcjp1bmRlcmxpbmUnfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtpLnRpdGxlfVxuICAgICAgICAgICAgICAgICAgICA8L3RleHQ+XG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9Jy9yZXN1bHRzLycgZG93bmxvYWQ+Q2xpY2sgdG8gZG93bmxvYWQ8L2E+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2E+KSl9XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59XG5leHBvcnQgZGVmYXVsdCBSZXN1bHRzO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/home/Result.js\n");

/***/ })

})
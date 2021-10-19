webpackHotUpdate_N_E("pages/index",{

/***/ "./components/home/Notices.js":
/*!************************************!*\
  !*** ./components/home/Notices.js ***!
  \************************************/
/*! exports provided: Notices, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Notices\", function() { return Notices; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\n\nvar _jsxFileName = \"/workspace/nehru-web/components/home/Notices.js\",\n    _this = undefined;\n\nvar Notices = function Notices() {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: \"m-4 bg-white rounded bordered shadow\\n    transition duration-500 ease-in-out \\n    transform hover:-translate-y-1 hover:scale-105\\n    \",\n    style: {\n      width: '25rem'\n    },\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: 'flex flex-col rounded-t card-classes px-4 p-2',\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"text\", {\n        className: 'text-2xl font-middle text-white cursor-default hover:underline',\n        children: \"Notices\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 9,\n        columnNumber: 17\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n        className: 'font-light text-white cursor-default hover:underline',\n        children: \"Nehru Institute of Information Technology'}\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 11,\n        columnNumber: 17\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 13\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: 'flex flex-col flex-wrap  px-4 p-2',\n      children: [{\n        path: 'notices/Datesheet.pdf',\n        title: 'Date Sheet'\n      }].map(function (i) {\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Link, {\n          href: i.path,\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            className: 'flex flex-row items-center justify-between mx-2 w-100',\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"text\", {\n              className: 'font-light text-gray-700 cursor-default hover:underline',\n              children: i.title\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 18,\n              columnNumber: 21\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 17,\n            columnNumber: 17\n          }, _this)\n        }, i.title, false, {\n          fileName: _jsxFileName,\n          lineNumber: 16,\n          columnNumber: 78\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 9\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 3,\n    columnNumber: 5\n  }, _this);\n};\n_c = Notices;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Notices);\n\nvar _c;\n\n$RefreshReg$(_c, \"Notices\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9ob21lL05vdGljZXMuanM/ZTdhZiJdLCJuYW1lcyI6WyJOb3RpY2VzIiwid2lkdGgiLCJwYXRoIiwidGl0bGUiLCJtYXAiLCJpIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBTyxJQUFNQSxPQUFPLEdBQUcsU0FBVkEsT0FBVSxHQUFNO0FBQzNCLHNCQUNFO0FBQUssYUFBUyw0SUFBZDtBQUdHLFNBQUssRUFBRTtBQUFFQyxXQUFLLEVBQUU7QUFBVCxLQUhWO0FBQUEsNEJBS1E7QUFBSyxlQUFTLEVBQUUsK0NBQWhCO0FBQUEsOEJBQ0k7QUFDSSxpQkFBUyxFQUFFLGdFQURmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREosZUFHSTtBQUFHLGlCQUFTLEVBQUUsc0RBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFISjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFMUixlQVlJO0FBQUssZUFBUyxFQUFFLG1DQUFoQjtBQUFBLGdCQUNNLENBQUM7QUFBQ0MsWUFBSSxFQUFDLHVCQUFOO0FBQThCQyxhQUFLLEVBQUM7QUFBcEMsT0FBRCxDQUFELENBQXNEQyxHQUF0RCxDQUEwRCxVQUFBQyxDQUFDO0FBQUEsNEJBQUsscUVBQUMsSUFBRDtBQUFNLGNBQUksRUFBRUEsQ0FBQyxDQUFDSCxJQUFkO0FBQUEsaUNBQzdEO0FBQUsscUJBQVMsRUFBRSx1REFBaEI7QUFBQSxtQ0FDSTtBQUFNLHVCQUFTLEVBQUUseURBQWpCO0FBQUEsd0JBQ0tHLENBQUMsQ0FBQ0Y7QUFEUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUQ2RCxXQUF5QkUsQ0FBQyxDQUFDRixLQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUFMO0FBQUEsT0FBM0Q7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBWko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUF3QkQsQ0F6Qk07S0FBTUgsTztBQTBCRUEsc0VBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL2hvbWUvTm90aWNlcy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBOb3RpY2VzID0gKCkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtgbS00IGJnLXdoaXRlIHJvdW5kZWQgYm9yZGVyZWQgc2hhZG93XG4gICAgdHJhbnNpdGlvbiBkdXJhdGlvbi01MDAgZWFzZS1pbi1vdXQgXG4gICAgdHJhbnNmb3JtIGhvdmVyOi10cmFuc2xhdGUteS0xIGhvdmVyOnNjYWxlLTEwNVxuICAgIGB9IHN0eWxlPXt7IHdpZHRoOiAnMjVyZW0nIH19PlxuICAgICAgICBcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsnZmxleCBmbGV4LWNvbCByb3VuZGVkLXQgY2FyZC1jbGFzc2VzIHB4LTQgcC0yJ30+XG4gICAgICAgICAgICAgICAgPHRleHRcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXsndGV4dC0yeGwgZm9udC1taWRkbGUgdGV4dC13aGl0ZSBjdXJzb3ItZGVmYXVsdCBob3Zlcjp1bmRlcmxpbmUnfT5Ob3RpY2VzPC90ZXh0PlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17J2ZvbnQtbGlnaHQgdGV4dC13aGl0ZSBjdXJzb3ItZGVmYXVsdCBob3Zlcjp1bmRlcmxpbmUnfT5cbiAgICAgICAgICAgICAgICAgICAgTmVocnUgSW5zdGl0dXRlIG9mIEluZm9ybWF0aW9uIFRlY2hub2xvZ3knfVxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17J2ZsZXggZmxleC1jb2wgZmxleC13cmFwICBweC00IHAtMid9PlxuICAgICAgICAgICAgeyhbe3BhdGg6J25vdGljZXMvRGF0ZXNoZWV0LnBkZicsdGl0bGU6J0RhdGUgU2hlZXQnfV0pLm1hcChpID0+ICg8TGluayBocmVmPXtpLnBhdGh9IGtleT17aS50aXRsZX0+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9eydmbGV4IGZsZXgtcm93IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gbXgtMiB3LTEwMCd9PlxuICAgICAgICAgICAgICAgICAgICA8dGV4dCBjbGFzc05hbWU9eydmb250LWxpZ2h0IHRleHQtZ3JheS03MDAgY3Vyc29yLWRlZmF1bHQgaG92ZXI6dW5kZXJsaW5lJ30+XG4gICAgICAgICAgICAgICAgICAgICAgICB7aS50aXRsZX1cbiAgICAgICAgICAgICAgICAgICAgPC90ZXh0PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9MaW5rPikpfVxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuZXhwb3J0IGRlZmF1bHQgTm90aWNlczsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/home/Notices.js\n");

/***/ })

})
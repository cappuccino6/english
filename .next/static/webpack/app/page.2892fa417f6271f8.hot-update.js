/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./app/components/questionaire/index.tsx":
/*!***********************************************!*\
  !*** ./app/components/questionaire/index.tsx ***!
  \***********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {



;
    // Wrapped in an IIFE to avoid polluting the global scope
    ;
    (function () {
        var _a, _b;
        // Legacy CSS implementations will `eval` browser code in a Node.js context
        // to extract CSS. For backwards compatibility, we need to check we're in a
        // browser context before continuing.
        if (typeof self !== 'undefined' &&
            // AMP / No-JS mode does not inject these helpers:
            '$RefreshHelpers$' in self) {
            // @ts-ignore __webpack_module__ is global
            var currentExports = module.exports;
            // @ts-ignore __webpack_module__ is global
            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;
            // This cannot happen in MainTemplate because the exports mismatch between
            // templating and execution.
            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
            // A module can be accepted automatically based on its exports, e.g. when
            // it is a Refresh Boundary.
            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
                // Save the previous exports signature on update so we can compare the boundary
                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)
                module.hot.dispose(function (data) {
                    data.prevSignature =
                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);
                });
                // Unconditionally accept an update to this module, we'll check if it's
                // still a Refresh Boundary later.
                // @ts-ignore importMeta is replaced in the loader
                module.hot.accept();
                // This field is set when the previous version of this module was a
                // Refresh Boundary, letting us know we need to check for invalidation or
                // enqueue an update.
                if (prevSignature !== null) {
                    // A boundary can become ineligible if its exports are incompatible
                    // with the previous exports.
                    //
                    // For example, if you add/remove/change exports, we'll want to
                    // re-execute the importing modules, and force those components to
                    // re-render. Similarly, if you convert a class component to a
                    // function, we want to invalidate the boundary.
                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {
                        module.hot.invalidate();
                    }
                    else {
                        self.$RefreshHelpers$.scheduleUpdate();
                    }
                }
            }
            else {
                // Since we just executed the code for the module, it's possible that the
                // new exports made it ineligible for being a boundary.
                // We only care about the case when we were _previously_ a boundary,
                // because we already accepted this update (accidental side effect).
                var isNoLongerABoundary = prevSignature !== null;
                if (isNoLongerABoundary) {
                    module.hot.invalidate();
                }
            }
        }
    })();


/***/ }),

/***/ "(app-pages-browser)/./app/page.tsx":
/*!**********************!*\
  !*** ./app/page.tsx ***!
  \**********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"(app-pages-browser)/./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_questionaire__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/questionaire */ \"(app-pages-browser)/./app/components/questionaire/index.tsx\");\n/* harmony import */ var _components_questionaire__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_components_questionaire__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _style_reset_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style/reset.css */ \"(app-pages-browser)/./app/style/reset.css\");\n/* harmony import */ var _style_index_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style/index.css */ \"(app-pages-browser)/./app/style/index.css\");\n/* harmony import */ var _assets_gaojiao_siji_zhenti_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/gaojiao_siji_zhenti.png */ \"(app-pages-browser)/./app/assets/gaojiao_siji_zhenti.png\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction Home() {\n    _s();\n    const [show, setShow] = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(false);\n    const handleEnd = ()=>{\n        setShow(true);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"jsx-ee3fb4cfac29d234\" + \" \" + \"w-full h-full flex items-center justify-center relative overflow-hidden\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {\n                id: \"ee3fb4cfac29d234\",\n                children: \".showresult{-webkit-animation:show 2s ease-in-out forwards;-moz-animation:show 2s ease-in-out forwards;-o-animation:show 2s ease-in-out forwards;animation:show 2s ease-in-out forwards;width:200px};\\n      \"\n            }, void 0, false, void 0, this),\n            show && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    position: \"absolute\",\n                    // transform: 'translate3d(-50%, -50%, 0)',\n                    zIndex: 100,\n                    background: \"rgba(0, 0, 0, .58)\"\n                },\n                onClick: setShow.bind(null, !show),\n                className: \"jsx-ee3fb4cfac29d234\" + \" \" + \"left-0 top-0 right-0 bottom-0 w-full h-full\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    style: {\n                        position: \"absolute\",\n                        left: \"50%\",\n                        top: \"50%\",\n                        transform: \"translate3d(-50%, -50%, 0)\",\n                        zIndex: 100\n                    },\n                    className: \"jsx-ee3fb4cfac29d234\" + \" \" + \"showresult\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: _assets_gaojiao_siji_zhenti_png__WEBPACK_IMPORTED_MODULE_5__[\"default\"].src,\n                        className: \"jsx-ee3fb4cfac29d234\"\n                    }, void 0, false, {\n                        fileName: \"/Users/bytedance/personal/redbook/english/app/page.tsx\",\n                        lineNumber: 51,\n                        columnNumber: 13\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/bytedance/personal/redbook/english/app/page.tsx\",\n                    lineNumber: 41,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/bytedance/personal/redbook/english/app/page.tsx\",\n                lineNumber: 30,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                name: \"viewport\",\n                content: \"width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0;\",\n                className: \"jsx-ee3fb4cfac29d234\"\n            }, void 0, false, {\n                fileName: \"/Users/bytedance/personal/redbook/english/app/page.tsx\",\n                lineNumber: 56,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: \"jsx-ee3fb4cfac29d234\" + \" \" + \"main w-full h-full\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"jsx-ee3fb4cfac29d234\" + \" \" + \"title flex justify-center text-center bold\",\n                        children: \"四六级教材自查\"\n                    }, void 0, false, {\n                        fileName: \"/Users/bytedance/personal/redbook/english/app/page.tsx\",\n                        lineNumber: 58,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"jsx-ee3fb4cfac29d234\" + \" \" + \"subtitle flex justify-center text-center\",\n                        children: \"1分钟找到最适合你的四六级教材\"\n                    }, void 0, false, {\n                        fileName: \"/Users/bytedance/personal/redbook/english/app/page.tsx\",\n                        lineNumber: 61,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        style: {\n                            height: \"45vh\"\n                        },\n                        className: \"jsx-ee3fb4cfac29d234\" + \" \" + \"ml-8 mr-8 mt-12\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_components_questionaire__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            onShowResult: handleEnd\n                        }, void 0, false, {\n                            fileName: \"/Users/bytedance/personal/redbook/english/app/page.tsx\",\n                            lineNumber: 65,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/bytedance/personal/redbook/english/app/page.tsx\",\n                        lineNumber: 64,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        style: {\n                            color: \"#8B9CFA\"\n                        },\n                        className: \"jsx-ee3fb4cfac29d234\" + \" \" + \"bottom flex flex-col items-end absolute right-8 bottom-16 bold\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"jsx-ee3fb4cfac29d234\" + \" \" + \"font-light\",\n                                children: \"@小红书：赵二一呀咿呀咿\"\n                            }, void 0, false, {\n                                fileName: \"/Users/bytedance/personal/redbook/english/app/page.tsx\",\n                                lineNumber: 68,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"jsx-ee3fb4cfac29d234\" + \" \" + \"font-light\",\n                                children: \"关注我，了解更多四六级/考研小技巧\"\n                            }, void 0, false, {\n                                fileName: \"/Users/bytedance/personal/redbook/english/app/page.tsx\",\n                                lineNumber: 71,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/bytedance/personal/redbook/english/app/page.tsx\",\n                        lineNumber: 67,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/bytedance/personal/redbook/english/app/page.tsx\",\n                lineNumber: 57,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/bytedance/personal/redbook/english/app/page.tsx\",\n        lineNumber: 21,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"NKb1ZOdhT+qUsWLXSgjSS2bk2C4=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUlvRDtBQUN6QjtBQUNBO0FBRTBCO0FBQ3BCO0FBRWxCLFNBQVNHOztJQUV0QixNQUFNLENBQUNDLE1BQU1DLFFBQVEsR0FBR0gsK0NBQVFBLENBQVU7SUFFMUMsTUFBTUksWUFBWTtRQUNoQkQsUUFBUTtJQUNWO0lBRUEscUJBQ0UsOERBQUNFO2tEQUFjOzs7Ozs7WUFRWkgsc0JBQ0MsOERBQUNHO2dCQUNDQyxPQUFPO29CQUNMQyxVQUFVO29CQUNWLDJDQUEyQztvQkFDM0NDLFFBQVE7b0JBQ1JDLFlBQVk7Z0JBRWQ7Z0JBRUFDLFNBQVNQLFFBQVFRLElBQUksQ0FBQyxNQUFNLENBQUNUOzBEQURuQjswQkFHViw0RUFBQ0c7b0JBQ0NDLE9BQU87d0JBQ0xDLFVBQVU7d0JBQ1ZLLE1BQU07d0JBQ05DLEtBQUs7d0JBQ0xDLFdBQVc7d0JBQ1hOLFFBQVE7b0JBQ1Y7OERBQ1U7OEJBRVYsNEVBQUNPO3dCQUFJQyxLQUFLakIsdUVBQUtBLENBQUNpQixHQUFHOzs7Ozs7Ozs7Ozs7Ozs7OzswQkFLekIsOERBQUNDO2dCQUFLQyxNQUFLO2dCQUFXQyxTQUFROzs7Ozs7OzBCQUM5Qiw4REFBQ0M7MERBQWlCOztrQ0FDaEIsOERBQUNmO2tFQUFjO2tDQUE2Qzs7Ozs7O2tDQUc1RCw4REFBQ0E7a0VBQWM7a0NBQTJDOzs7Ozs7a0NBRzFELDhEQUFDQTt3QkFBZ0NDLE9BQU87NEJBQUVlLFFBQVE7d0JBQU87a0VBQTFDO2tDQUNiLDRFQUFDdkIsaUVBQVdBOzRCQUFDd0IsY0FBY2xCOzs7Ozs7Ozs7OztrQ0FFN0IsOERBQUNDO3dCQUErRUMsT0FBTzs0QkFBRWlCLE9BQU87d0JBQVU7a0VBQTNGOzswQ0FDYiw4REFBQ0M7MEVBQWU7MENBQWE7Ozs7OzswQ0FHN0IsOERBQUNBOzBFQUFlOzBDQUFhOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPdkM7R0FsRXdCdkI7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL3BhZ2UudHN4Pzc2MDMiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnO1xuXG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCB7IEJhc2VDb25maWcgfSBmcm9tIFwiLi9jb25zdGFudFwiO1xuaW1wb3J0IFF1ZXN0aW9uYXJlIGZyb20gXCIuL2NvbXBvbmVudHMvcXVlc3Rpb25haXJlXCI7XG5pbXBvcnQgJy4vc3R5bGUvcmVzZXQuY3NzJztcbmltcG9ydCAnLi9zdHlsZS9pbmRleC5jc3MnO1xuXG5pbXBvcnQgaW1hZ2UgZnJvbSAnLi9hc3NldHMvZ2Fvamlhb19zaWppX3poZW50aS5wbmcnO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcblxuICBjb25zdCBbc2hvdywgc2V0U2hvd10gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XG5cbiAgY29uc3QgaGFuZGxlRW5kID0gKCkgPT4ge1xuICAgIHNldFNob3codHJ1ZSk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGgtZnVsbCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciByZWxhdGl2ZSBvdmVyZmxvdy1oaWRkZW5cIj5cbiAgICAgIDxzdHlsZSBnbG9iYWwganN4PntgXG4gICAgICAgIC5zaG93cmVzdWx0IHtcbiAgICAgICAgICBhbmltYXRpb246IHNob3cgMnMgZWFzZS1pbi1vdXQgZm9yd2FyZHM7XG4gICAgICAgICAgd2lkdGg6IDIwMHB4O1xuICAgICAgICB9O1xuICAgICAgYH08L3N0eWxlPlxuXG4gICAgICB7c2hvdyAmJiAoXG4gICAgICAgIDxkaXZcbiAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgICAgICAvLyB0cmFuc2Zvcm06ICd0cmFuc2xhdGUzZCgtNTAlLCAtNTAlLCAwKScsXG4gICAgICAgICAgICB6SW5kZXg6IDEwMCxcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICdyZ2JhKDAsIDAsIDAsIC41OCknXG4gICAgICAgICAgICAvLyBiYWNrZ3JvdW5kOiAnI0ZGRidcbiAgICAgICAgICB9fVxuICAgICAgICAgIGNsYXNzTmFtZT1cImxlZnQtMCB0b3AtMCByaWdodC0wIGJvdHRvbS0wIHctZnVsbCBoLWZ1bGxcIlxuICAgICAgICAgIG9uQ2xpY2s9e3NldFNob3cuYmluZChudWxsLCAhc2hvdyl9XG4gICAgICAgID5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICAgICAgICAgbGVmdDogJzUwJScsXG4gICAgICAgICAgICAgIHRvcDogJzUwJScsXG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZTNkKC01MCUsIC01MCUsIDApJyxcbiAgICAgICAgICAgICAgekluZGV4OiAxMDAsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwic2hvd3Jlc3VsdFwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGltZyBzcmM9e2ltYWdlLnNyY30gLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuXG4gICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEuMCwgbWF4aW11bS1zY2FsZT0xLjAsIHVzZXItc2NhbGFibGU9MDtcIi8+XG4gICAgICA8bWFpbiBjbGFzc05hbWU9e2BtYWluIHctZnVsbCBoLWZ1bGxgfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZSBmbGV4IGp1c3RpZnktY2VudGVyIHRleHQtY2VudGVyIGJvbGRcIj5cbiAgICAgICAgICDlm5vlha3nuqfmlZnmnZDoh6rmn6VcbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3VidGl0bGUgZmxleCBqdXN0aWZ5LWNlbnRlciB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgIDHliIbpkp/mib7liLDmnIDpgILlkIjkvaDnmoTlm5vlha3nuqfmlZnmnZBcbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWwtOCBtci04IG10LTEyXCIgc3R5bGU9e3sgaGVpZ2h0OiAnNDV2aCcgfX0+XG4gICAgICAgICAgPFF1ZXN0aW9uYXJlIG9uU2hvd1Jlc3VsdD17aGFuZGxlRW5kfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3R0b20gZmxleCBmbGV4LWNvbCBpdGVtcy1lbmQgYWJzb2x1dGUgcmlnaHQtOCBib3R0b20tMTYgYm9sZFwiIHN0eWxlPXt7IGNvbG9yOiAnIzhCOUNGQScgfX0+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZm9udC1saWdodFwiPlxuICAgICAgICAgIEDlsI/nuqLkuabvvJrotbXkuozkuIDlkYDlkr/lkYDlkr9cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZm9udC1saWdodFwiPlxuICAgICAgICAgIOWFs+azqOaIke+8jOS6huino+abtOWkmuWbm+WFree6py/ogIPnoJTlsI/mioDlt6dcbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9tYWluPlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbIlF1ZXN0aW9uYXJlIiwiaW1hZ2UiLCJ1c2VTdGF0ZSIsIkhvbWUiLCJzaG93Iiwic2V0U2hvdyIsImhhbmRsZUVuZCIsImRpdiIsInN0eWxlIiwicG9zaXRpb24iLCJ6SW5kZXgiLCJiYWNrZ3JvdW5kIiwib25DbGljayIsImJpbmQiLCJsZWZ0IiwidG9wIiwidHJhbnNmb3JtIiwiaW1nIiwic3JjIiwibWV0YSIsIm5hbWUiLCJjb250ZW50IiwibWFpbiIsImhlaWdodCIsIm9uU2hvd1Jlc3VsdCIsImNvbG9yIiwic3BhbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/page.tsx\n"));

/***/ })

});
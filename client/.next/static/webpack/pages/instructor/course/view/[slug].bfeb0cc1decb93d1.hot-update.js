"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/instructor/course/view/[slug]",{

/***/ "./pages/instructor/course/view/[slug].js":
/*!************************************************!*\
  !*** ./pages/instructor/course/view/[slug].js ***!
  \************************************************/
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var _components_routes_InstructorRoute__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../components/routes/InstructorRoute */ \"./components/routes/InstructorRoute.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-markdown */ \"./node_modules/react-markdown/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst CourseView = ()=>{\n    _s();\n    const [course, setCourse] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const { slug } = router.query;\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        loadCourse();\n    }, [\n        slug\n    ]);\n    const loadCourse = async ()=>{\n        const { data } = await axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].get(\"/api/course/\".concat(slug));\n        setCourse(data);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_routes_InstructorRoute__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"container-fluid pt-3\",\n            children: course && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"container-fluid pt-1\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"d-flex align-items-center pt-2\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: course.image ? course.image.Location : \"/1-8.jpg\",\n                                alt: \"Course Thumbnail\",\n                                style: {\n                                    width: \"80px\",\n                                    height: \"80px\",\n                                    borderRadius: \"50%\",\n                                    marginRight: \"15px\"\n                                }\n                            }, void 0, false, {\n                                fileName: \"F:\\\\projects\\\\Online_Education_Marketplace\\\\client\\\\pages\\\\instructor\\\\course\\\\view\\\\[slug].js\",\n                                lineNumber: 27,\n                                columnNumber: 29\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"ml-3\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                                        className: \"text-primary\",\n                                        children: course.name\n                                    }, void 0, false, {\n                                        fileName: \"F:\\\\projects\\\\Online_Education_Marketplace\\\\client\\\\pages\\\\instructor\\\\course\\\\view\\\\[slug].js\",\n                                        lineNumber: 33,\n                                        columnNumber: 33\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: [\n                                            course.lessons && course.lessons.length,\n                                            \" Lessons\"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"F:\\\\projects\\\\Online_Education_Marketplace\\\\client\\\\pages\\\\instructor\\\\course\\\\view\\\\[slug].js\",\n                                        lineNumber: 34,\n                                        columnNumber: 33\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        style: {\n                                            fontSize: \"10px\"\n                                        },\n                                        children: course.category\n                                    }, void 0, false, {\n                                        fileName: \"F:\\\\projects\\\\Online_Education_Marketplace\\\\client\\\\pages\\\\instructor\\\\course\\\\view\\\\[slug].js\",\n                                        lineNumber: 35,\n                                        columnNumber: 33\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"F:\\\\projects\\\\Online_Education_Marketplace\\\\client\\\\pages\\\\instructor\\\\course\\\\view\\\\[slug].js\",\n                                lineNumber: 32,\n                                columnNumber: 29\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"ml-auto\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"tooltip\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                className: \"tooltiptext\",\n                                                children: \"Edit\"\n                                            }, void 0, false, {\n                                                fileName: \"F:\\\\projects\\\\Online_Education_Marketplace\\\\client\\\\pages\\\\instructor\\\\course\\\\view\\\\[slug].js\",\n                                                lineNumber: 39,\n                                                columnNumber: 37\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                className: \"h5 pointer text-warning\",\n                                                children: \"✎\"\n                                            }, void 0, false, {\n                                                fileName: \"F:\\\\projects\\\\Online_Education_Marketplace\\\\client\\\\pages\\\\instructor\\\\course\\\\view\\\\[slug].js\",\n                                                lineNumber: 40,\n                                                columnNumber: 37\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"F:\\\\projects\\\\Online_Education_Marketplace\\\\client\\\\pages\\\\instructor\\\\course\\\\view\\\\[slug].js\",\n                                        lineNumber: 38,\n                                        columnNumber: 33\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"tooltip\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                className: \"tooltiptext\",\n                                                children: \"Publish\"\n                                            }, void 0, false, {\n                                                fileName: \"F:\\\\projects\\\\Online_Education_Marketplace\\\\client\\\\pages\\\\instructor\\\\course\\\\view\\\\[slug].js\",\n                                                lineNumber: 43,\n                                                columnNumber: 37\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                className: \"h5 pointer text-danger\",\n                                                children: \"✔\"\n                                            }, void 0, false, {\n                                                fileName: \"F:\\\\projects\\\\Online_Education_Marketplace\\\\client\\\\pages\\\\instructor\\\\course\\\\view\\\\[slug].js\",\n                                                lineNumber: 44,\n                                                columnNumber: 37\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"F:\\\\projects\\\\Online_Education_Marketplace\\\\client\\\\pages\\\\instructor\\\\course\\\\view\\\\[slug].js\",\n                                        lineNumber: 42,\n                                        columnNumber: 33\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"F:\\\\projects\\\\Online_Education_Marketplace\\\\client\\\\pages\\\\instructor\\\\course\\\\view\\\\[slug].js\",\n                                lineNumber: 37,\n                                columnNumber: 29\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"F:\\\\projects\\\\Online_Education_Marketplace\\\\client\\\\pages\\\\instructor\\\\course\\\\view\\\\[slug].js\",\n                        lineNumber: 26,\n                        columnNumber: 25\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"row\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"col\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_markdown__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                                    fileName: \"F:\\\\projects\\\\Online_Education_Marketplace\\\\client\\\\pages\\\\instructor\\\\course\\\\view\\\\[slug].js\",\n                                    lineNumber: 50,\n                                    columnNumber: 33\n                                }, undefined),\n                                course.description\n                            ]\n                        }, void 0, true, {\n                            fileName: \"F:\\\\projects\\\\Online_Education_Marketplace\\\\client\\\\pages\\\\instructor\\\\course\\\\view\\\\[slug].js\",\n                            lineNumber: 49,\n                            columnNumber: 29\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"F:\\\\projects\\\\Online_Education_Marketplace\\\\client\\\\pages\\\\instructor\\\\course\\\\view\\\\[slug].js\",\n                        lineNumber: 48,\n                        columnNumber: 25\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"F:\\\\projects\\\\Online_Education_Marketplace\\\\client\\\\pages\\\\instructor\\\\course\\\\view\\\\[slug].js\",\n                lineNumber: 25,\n                columnNumber: 21\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"F:\\\\projects\\\\Online_Education_Marketplace\\\\client\\\\pages\\\\instructor\\\\course\\\\view\\\\[slug].js\",\n            lineNumber: 22,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"F:\\\\projects\\\\Online_Education_Marketplace\\\\client\\\\pages\\\\instructor\\\\course\\\\view\\\\[slug].js\",\n        lineNumber: 21,\n        columnNumber: 9\n    }, undefined);\n};\n_s(CourseView, \"UoHkdvHTTNcDTthacdceha0WjqI=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = CourseView;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CourseView);\nvar _c;\n$RefreshReg$(_c, \"CourseView\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = __webpack_module__.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = __webpack_module__.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, __webpack_module__.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                __webpack_module__.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                __webpack_module__.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        __webpack_module__.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    __webpack_module__.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbnN0cnVjdG9yL2NvdXJzZS92aWV3L1tzbHVnXS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBNEM7QUFDSjtBQUNvQztBQUNsRDtBQUNpQjtBQUMzQyxNQUFNTSxhQUFhOztJQUNmLE1BQU0sQ0FBQ0MsUUFBUUMsVUFBVSxHQUFHUiwrQ0FBUUEsQ0FBQyxDQUFDO0lBQ3RDLE1BQU1TLFNBQVNQLHNEQUFTQTtJQUN4QixNQUFNLEVBQUVRLElBQUksRUFBRSxHQUFHRCxPQUFPRSxLQUFLO0lBRTdCVixnREFBU0EsQ0FBQztRQUNOVztJQUNKLEdBQUc7UUFBQ0Y7S0FBSztJQUVULE1BQU1FLGFBQWE7UUFDZixNQUFNLEVBQUVDLElBQUksRUFBRSxHQUFHLE1BQU1ULGlEQUFTLENBQUMsZUFBb0IsT0FBTE07UUFDaERGLFVBQVVLO0lBQ2Q7SUFFQSxxQkFDSSw4REFBQ1YsMEVBQWVBO2tCQUNaLDRFQUFDWTtZQUFJQyxXQUFVO3NCQUVWVCx3QkFDRyw4REFBQ1E7Z0JBQUlDLFdBQVU7O2tDQUNYLDhEQUFDRDt3QkFBSUMsV0FBVTs7MENBQ1gsOERBQUNDO2dDQUNHQyxLQUFLWCxPQUFPWSxLQUFLLEdBQUdaLE9BQU9ZLEtBQUssQ0FBQ0MsUUFBUSxHQUFHO2dDQUM1Q0MsS0FBSTtnQ0FDSkMsT0FBTztvQ0FBRUMsT0FBTztvQ0FBUUMsUUFBUTtvQ0FBUUMsY0FBYztvQ0FBT0MsYUFBYTtnQ0FBTzs7Ozs7OzBDQUVyRiw4REFBQ1g7Z0NBQUlDLFdBQVU7O2tEQUNYLDhEQUFDVzt3Q0FBR1gsV0FBVTtrREFBZ0JULE9BQU9xQixJQUFJOzs7Ozs7a0RBQ3pDLDhEQUFDQzs7NENBQUd0QixPQUFPdUIsT0FBTyxJQUFJdkIsT0FBT3VCLE9BQU8sQ0FBQ0MsTUFBTTs0Q0FBQzs7Ozs7OztrREFDNUMsOERBQUNGO3dDQUFFUCxPQUFPOzRDQUFFVSxVQUFVO3dDQUFPO2tEQUFJekIsT0FBTzBCLFFBQVE7Ozs7Ozs7Ozs7OzswQ0FFcEQsOERBQUNsQjtnQ0FBSUMsV0FBVTs7a0RBQ1gsOERBQUNEO3dDQUFJQyxXQUFVOzswREFDWCw4REFBQ2tCO2dEQUFLbEIsV0FBVTswREFBYzs7Ozs7OzBEQUM5Qiw4REFBQ2tCO2dEQUFLbEIsV0FBVTswREFBMEI7Ozs7Ozs7Ozs7OztrREFFOUMsOERBQUNEO3dDQUFJQyxXQUFVOzswREFDWCw4REFBQ2tCO2dEQUFLbEIsV0FBVTswREFBYzs7Ozs7OzBEQUM5Qiw4REFBQ2tCO2dEQUFLbEIsV0FBVTswREFBeUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQ0FJckQsOERBQUNEO3dCQUFJQyxXQUFVO2tDQUNYLDRFQUFDRDs0QkFBSUMsV0FBVTs7OENBQ1gsOERBQUNYLHNEQUFhQTs7Ozs7Z0NBQ2JFLE9BQU80QixXQUFXOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUW5EO0dBckRNN0I7O1FBRWFKLGtEQUFTQTs7O0tBRnRCSTtBQXVETiwrREFBZUEsVUFBVUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbnN0cnVjdG9yL2NvdXJzZS92aWV3L1tzbHVnXS5qcz85ZDQ0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCBJbnN0cnVjdG9yUm91dGUgZnJvbSBcIi4uLy4uLy4uLy4uL2NvbXBvbmVudHMvcm91dGVzL0luc3RydWN0b3JSb3V0ZVwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgUmVhY3RNYXJrZG93biBmcm9tICdyZWFjdC1tYXJrZG93bic7XHJcbmNvbnN0IENvdXJzZVZpZXcgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBbY291cnNlLCBzZXRDb3Vyc2VdID0gdXNlU3RhdGUoe30pO1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgICBjb25zdCB7IHNsdWcgfSA9IHJvdXRlci5xdWVyeTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGxvYWRDb3Vyc2UoKVxyXG4gICAgfSwgW3NsdWddKTtcclxuXHJcbiAgICBjb25zdCBsb2FkQ291cnNlID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXhpb3MuZ2V0KGAvYXBpL2NvdXJzZS8ke3NsdWd9YCk7XHJcbiAgICAgICAgc2V0Q291cnNlKGRhdGEpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPEluc3RydWN0b3JSb3V0ZT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWQgcHQtM1wiPlxyXG4gICAgICAgICAgICAgICAgey8qIDxwcmU+e0pTT04uc3RyaW5naWZ5KGNvdXJzZSwgbnVsbCwgNCl9PC9wcmU+ICovfVxyXG4gICAgICAgICAgICAgICAge2NvdXJzZSAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWQgcHQtMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIgcHQtMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17Y291cnNlLmltYWdlID8gY291cnNlLmltYWdlLkxvY2F0aW9uIDogXCIvMS04LmpwZ1wifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIkNvdXJzZSBUaHVtYm5haWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjgwcHhcIiwgaGVpZ2h0OiBcIjgwcHhcIiwgYm9yZGVyUmFkaXVzOiBcIjUwJVwiLCBtYXJnaW5SaWdodDogXCIxNXB4XCIgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1sLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwidGV4dC1wcmltYXJ5XCI+e2NvdXJzZS5uYW1lfTwvaDU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e2NvdXJzZS5sZXNzb25zICYmIGNvdXJzZS5sZXNzb25zLmxlbmd0aH0gTGVzc29uczwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17eyBmb250U2l6ZTogXCIxMHB4XCIgfX0+e2NvdXJzZS5jYXRlZ29yeX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWwtYXV0b1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG9vbHRpcFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0b29sdGlwdGV4dFwiPkVkaXQ8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImg1IHBvaW50ZXIgdGV4dC13YXJuaW5nXCI+JiM5OTk4Ozwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRvb2x0aXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidG9vbHRpcHRleHRcIj5QdWJsaXNoPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJoNSBwb2ludGVyIHRleHQtZGFuZ2VyXCI+JiMxMDAwNDs8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSZWFjdE1hcmtkb3duIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2NvdXJzZS5kZXNjcmlwdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvSW5zdHJ1Y3RvclJvdXRlPlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvdXJzZVZpZXc7XHJcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZVJvdXRlciIsIkluc3RydWN0b3JSb3V0ZSIsImF4aW9zIiwiUmVhY3RNYXJrZG93biIsIkNvdXJzZVZpZXciLCJjb3Vyc2UiLCJzZXRDb3Vyc2UiLCJyb3V0ZXIiLCJzbHVnIiwicXVlcnkiLCJsb2FkQ291cnNlIiwiZGF0YSIsImdldCIsImRpdiIsImNsYXNzTmFtZSIsImltZyIsInNyYyIsImltYWdlIiwiTG9jYXRpb24iLCJhbHQiLCJzdHlsZSIsIndpZHRoIiwiaGVpZ2h0IiwiYm9yZGVyUmFkaXVzIiwibWFyZ2luUmlnaHQiLCJoNSIsIm5hbWUiLCJwIiwibGVzc29ucyIsImxlbmd0aCIsImZvbnRTaXplIiwiY2F0ZWdvcnkiLCJzcGFuIiwiZGVzY3JpcHRpb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/instructor/course/view/[slug].js\n"));

/***/ })

});
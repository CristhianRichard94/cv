(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["features-about-me-about-me-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/features/about-me/about-me.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/features/about-me/about-me.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>about-me works!</p>\n"

/***/ }),

/***/ "./src/app/features/about-me/about-me-routing.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/features/about-me/about-me-routing.module.ts ***!
  \**************************************************************/
/*! exports provided: AboutMeRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutMeRoutingModule", function() { return AboutMeRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _about_me_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about-me.component */ "./src/app/features/about-me/about-me.component.ts");




var routes = [
    {
        path: '',
        component: _about_me_component__WEBPACK_IMPORTED_MODULE_3__["AboutMeComponent"]
    }
];
var AboutMeRoutingModule = /** @class */ (function () {
    function AboutMeRoutingModule() {
    }
    AboutMeRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AboutMeRoutingModule);
    return AboutMeRoutingModule;
}());



/***/ }),

/***/ "./src/app/features/about-me/about-me.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/features/about-me/about-me.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZlYXR1cmVzL2Fib3V0LW1lL2Fib3V0LW1lLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/features/about-me/about-me.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/features/about-me/about-me.component.ts ***!
  \*********************************************************/
/*! exports provided: AboutMeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutMeComponent", function() { return AboutMeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AboutMeComponent = /** @class */ (function () {
    function AboutMeComponent() {
    }
    AboutMeComponent.prototype.ngOnInit = function () {
    };
    AboutMeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-about-me',
            template: __webpack_require__(/*! raw-loader!./about-me.component.html */ "./node_modules/raw-loader/index.js!./src/app/features/about-me/about-me.component.html"),
            styles: [__webpack_require__(/*! ./about-me.component.scss */ "./src/app/features/about-me/about-me.component.scss")]
        })
    ], AboutMeComponent);
    return AboutMeComponent;
}());



/***/ }),

/***/ "./src/app/features/about-me/about-me.module.ts":
/*!******************************************************!*\
  !*** ./src/app/features/about-me/about-me.module.ts ***!
  \******************************************************/
/*! exports provided: AboutMeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutMeModule", function() { return AboutMeModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _about_me_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about-me-routing.module */ "./src/app/features/about-me/about-me-routing.module.ts");
/* harmony import */ var _about_me_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./about-me.component */ "./src/app/features/about-me/about-me.component.ts");





var AboutMeModule = /** @class */ (function () {
    function AboutMeModule() {
    }
    AboutMeModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_about_me_component__WEBPACK_IMPORTED_MODULE_4__["AboutMeComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _about_me_routing_module__WEBPACK_IMPORTED_MODULE_3__["AboutMeRoutingModule"]
            ]
        })
    ], AboutMeModule);
    return AboutMeModule;
}());



/***/ })

}]);
//# sourceMappingURL=features-about-me-about-me-module-es5.js.map
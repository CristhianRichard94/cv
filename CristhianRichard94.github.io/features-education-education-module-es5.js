(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["features-education-education-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/features/education/education.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/features/education/education.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>education works!</p>\n"

/***/ }),

/***/ "./src/app/features/education/education-routing.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/features/education/education-routing.module.ts ***!
  \****************************************************************/
/*! exports provided: EducationRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EducationRoutingModule", function() { return EducationRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _education_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./education.component */ "./src/app/features/education/education.component.ts");




var routes = [
    {
        path: '',
        component: _education_component__WEBPACK_IMPORTED_MODULE_3__["EducationComponent"]
    }
];
var EducationRoutingModule = /** @class */ (function () {
    function EducationRoutingModule() {
    }
    EducationRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], EducationRoutingModule);
    return EducationRoutingModule;
}());



/***/ }),

/***/ "./src/app/features/education/education.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/features/education/education.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZlYXR1cmVzL2VkdWNhdGlvbi9lZHVjYXRpb24uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/features/education/education.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/features/education/education.component.ts ***!
  \***********************************************************/
/*! exports provided: EducationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EducationComponent", function() { return EducationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var EducationComponent = /** @class */ (function () {
    function EducationComponent() {
    }
    EducationComponent.prototype.ngOnInit = function () {
    };
    EducationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-education',
            template: __webpack_require__(/*! raw-loader!./education.component.html */ "./node_modules/raw-loader/index.js!./src/app/features/education/education.component.html"),
            styles: [__webpack_require__(/*! ./education.component.scss */ "./src/app/features/education/education.component.scss")]
        })
    ], EducationComponent);
    return EducationComponent;
}());



/***/ }),

/***/ "./src/app/features/education/education.module.ts":
/*!********************************************************!*\
  !*** ./src/app/features/education/education.module.ts ***!
  \********************************************************/
/*! exports provided: EducationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EducationModule", function() { return EducationModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _education_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./education-routing.module */ "./src/app/features/education/education-routing.module.ts");
/* harmony import */ var _education_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./education.component */ "./src/app/features/education/education.component.ts");





var EducationModule = /** @class */ (function () {
    function EducationModule() {
    }
    EducationModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_education_component__WEBPACK_IMPORTED_MODULE_4__["EducationComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _education_routing_module__WEBPACK_IMPORTED_MODULE_3__["EducationRoutingModule"]
            ]
        })
    ], EducationModule);
    return EducationModule;
}());



/***/ })

}]);
//# sourceMappingURL=features-education-education-module-es5.js.map
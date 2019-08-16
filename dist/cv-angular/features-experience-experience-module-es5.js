(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["features-experience-experience-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/features/experience/experience.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/features/experience/experience.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>experience works!</p>\n"

/***/ }),

/***/ "./src/app/features/experience/experience-routing.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/features/experience/experience-routing.module.ts ***!
  \******************************************************************/
/*! exports provided: ExperienceRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExperienceRoutingModule", function() { return ExperienceRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _experience_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./experience.component */ "./src/app/features/experience/experience.component.ts");




var routes = [
    {
        path: '',
        component: _experience_component__WEBPACK_IMPORTED_MODULE_3__["ExperienceComponent"]
    }
];
var ExperienceRoutingModule = /** @class */ (function () {
    function ExperienceRoutingModule() {
    }
    ExperienceRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], ExperienceRoutingModule);
    return ExperienceRoutingModule;
}());



/***/ }),

/***/ "./src/app/features/experience/experience.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/features/experience/experience.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZlYXR1cmVzL2V4cGVyaWVuY2UvZXhwZXJpZW5jZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/features/experience/experience.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/features/experience/experience.component.ts ***!
  \*************************************************************/
/*! exports provided: ExperienceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExperienceComponent", function() { return ExperienceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ExperienceComponent = /** @class */ (function () {
    function ExperienceComponent() {
    }
    ExperienceComponent.prototype.ngOnInit = function () {
    };
    ExperienceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-experience',
            template: __webpack_require__(/*! raw-loader!./experience.component.html */ "./node_modules/raw-loader/index.js!./src/app/features/experience/experience.component.html"),
            styles: [__webpack_require__(/*! ./experience.component.scss */ "./src/app/features/experience/experience.component.scss")]
        })
    ], ExperienceComponent);
    return ExperienceComponent;
}());



/***/ }),

/***/ "./src/app/features/experience/experience.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/features/experience/experience.module.ts ***!
  \**********************************************************/
/*! exports provided: ExperienceModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExperienceModule", function() { return ExperienceModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _experience_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./experience-routing.module */ "./src/app/features/experience/experience-routing.module.ts");
/* harmony import */ var _experience_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./experience.component */ "./src/app/features/experience/experience.component.ts");





var ExperienceModule = /** @class */ (function () {
    function ExperienceModule() {
    }
    ExperienceModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_experience_component__WEBPACK_IMPORTED_MODULE_4__["ExperienceComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _experience_routing_module__WEBPACK_IMPORTED_MODULE_3__["ExperienceRoutingModule"]
            ]
        })
    ], ExperienceModule);
    return ExperienceModule;
}());



/***/ })

}]);
//# sourceMappingURL=features-experience-experience-module-es5.js.map
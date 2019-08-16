(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["features-home-home-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/features/home/home.component.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/features/home/home.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n<main>\n    <p>main</p>\n</main>\n<div class=\"side side2\">\n        <p>side2</p>\n</div>\n\n<footer>\n    <p>footer</p>\n</footer>\n</div>\n"

/***/ }),

/***/ "./src/app/features/home/home-routing.module.ts":
/*!******************************************************!*\
  !*** ./src/app/features/home/home-routing.module.ts ***!
  \******************************************************/
/*! exports provided: HomeRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeRoutingModule", function() { return HomeRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.component */ "./src/app/features/home/home.component.ts");




const routes = [
    {
        path: '',
        component: _home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]
    }
];
let HomeRoutingModule = class HomeRoutingModule {
};
HomeRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], HomeRoutingModule);



/***/ }),

/***/ "./src/app/features/home/home.component.scss":
/*!***************************************************!*\
  !*** ./src/app/features/home/home.component.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "p {\n  margin: 0;\n}\n\n.container {\n  display: grid;\n  height: 100%;\n  grid-template: \"main main side2\" 1fr \"footer footer footer\" 40px/25% 50% 25%;\n}\n\nmain {\n  grid-area: main;\n  background-color: whitesmoke;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: #343434;\n}\n\n.side {\n  background-color: #343434;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: #E1F1FF;\n}\n\n.side2 {\n  grid-area: side2;\n}\n\nfooter {\n  grid-area: footer;\n  background-color: #04335E;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: #E1F1FF;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2NyaXN0aGlhbi9Eb2N1bWVudG9zL2N2LWFuZ3VsYXIvc3JjL2FwcC9mZWF0dXJlcy9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2ZlYXR1cmVzL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyIsIi9ob21lL2NyaXN0aGlhbi9Eb2N1bWVudG9zL2N2LWFuZ3VsYXIvc3JjL2Fzc2V0cy9zdHlsZXMvZ2xvYmFsL19jb2xvcnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLFNBQUE7QUNESjs7QURJQTtFQUNJLGFBQUE7RUFDQSxZQUFBO0VBQ0EsNEVBQUE7QUNESjs7QURJQTtFQUNJLGVBQUE7RUFDQSw0QkVScUI7RUZTckIsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjRWZjO0FEY2xCOztBRElBO0VBQ0kseUJFbkJjO0VGb0JkLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0V0QmU7QURxQm5COztBREdBO0VBQ0ksZ0JBQUE7QUNBSjs7QURHQTtFQUNJLGlCQUFBO0VBQ0EseUJFN0JvQjtFRjhCcEIsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjRWxDZTtBRGtDbkIiLCJmaWxlIjoic3JjL2FwcC9mZWF0dXJlcy9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi8uLi9hc3NldHMvc3R5bGVzL3N0eWxlcy5zY3NzJztcblxucCB7XG4gICAgbWFyZ2luOiAwO1xufVxuXG4uY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBncmlkLXRlbXBsYXRlOiBcIm1haW4gbWFpbiBzaWRlMlwiIDFmciBcImZvb3RlciBmb290ZXIgZm9vdGVyXCIgNDBweCAvIDI1JSA1MCUgMjUlXG59XG5cbm1haW4ge1xuICAgIGdyaWQtYXJlYTogbWFpbjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmFja2dyb3VuZC1saWdodC1jb2xvcjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgY29sb3I6ICR0ZXh0LWRhcmstY29sb3I7XG59XG5cbi5zaWRlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdGV4dC1kYXJrLWNvbG9yO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBjb2xvcjogJHRleHQtbGlnaHQtY29sb3I7XG59XG4uc2lkZTIge1xuICAgIGdyaWQtYXJlYTogc2lkZTI7XG59XG5cbmZvb3RlciB7XG4gICAgZ3JpZC1hcmVhOiBmb290ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGJhY2tncm91bmQtZGFyay1jb2xvcjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgY29sb3I6ICR0ZXh0LWxpZ2h0LWNvbG9yO1xufSIsInAge1xuICBtYXJnaW46IDA7XG59XG5cbi5jb250YWluZXIge1xuICBkaXNwbGF5OiBncmlkO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGdyaWQtdGVtcGxhdGU6IFwibWFpbiBtYWluIHNpZGUyXCIgMWZyIFwiZm9vdGVyIGZvb3RlciBmb290ZXJcIiA0MHB4LzI1JSA1MCUgMjUlO1xufVxuXG5tYWluIHtcbiAgZ3JpZC1hcmVhOiBtYWluO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgY29sb3I6ICMzNDM0MzQ7XG59XG5cbi5zaWRlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM0MzQzNDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGNvbG9yOiAjRTFGMUZGO1xufVxuXG4uc2lkZTIge1xuICBncmlkLWFyZWE6IHNpZGUyO1xufVxuXG5mb290ZXIge1xuICBncmlkLWFyZWE6IGZvb3RlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA0MzM1RTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGNvbG9yOiAjRTFGMUZGO1xufSIsIiRwcmltYXJ5LWNvbG9yOiAjMDA1RTg4O1xuJHNlY29uZGFyeS1jb2xvcjogIzAwQjY5MztcbiRhY2NlbnQtY29sb3I6ICNGOUY4NzE7XG4kdGV4dC1kYXJrLWNvbG9yOiAjMzQzNDM0O1xuJHRleHQtbGlnaHQtY29sb3I6ICNFMUYxRkY7XG4kYmFja2dyb3VuZC1kYXJrLWNvbG9yOiAjMDQzMzVFO1xuJGJhY2tncm91bmQtbGlnaHQtY29sb3I6IHdoaXRlc21va2U7XG4iXX0= */"

/***/ }),

/***/ "./src/app/features/home/home.component.ts":
/*!*************************************************!*\
  !*** ./src/app/features/home/home.component.ts ***!
  \*************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HomeComponent = class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
};
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: __webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/index.js!./src/app/features/home/home.component.html"),
        styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/features/home/home.component.scss")]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/features/home/home.module.ts":
/*!**********************************************!*\
  !*** ./src/app/features/home/home.module.ts ***!
  \**********************************************/
/*! exports provided: HomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home-routing.module */ "./src/app/features/home/home-routing.module.ts");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home.component */ "./src/app/features/home/home.component.ts");





let HomeModule = class HomeModule {
};
HomeModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _home_routing_module__WEBPACK_IMPORTED_MODULE_3__["HomeRoutingModule"]
        ]
    })
], HomeModule);



/***/ })

}]);
//# sourceMappingURL=features-home-home-module-es2015.js.map
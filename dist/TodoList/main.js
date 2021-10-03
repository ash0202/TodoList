(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Angular\guvi angular\TodoList\src\main.ts */"zUnb");


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");


function AppComponent_p_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "All tasks have been completed.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function (a0) { return { "completedtask": a0 }; };
function AppComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_div_10_Template_input_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const i_r4 = ctx.index; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.change(i_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const elements_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, !elements_r3.finished));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](elements_r3.work);
} }
class AppComponent {
    constructor() {
        this.title = 'TodoList';
        this.works = [];
    }
    addToList(value) {
        let data = {
            work: value,
            finished: true
        };
        this.works.push(data);
        console.log(this.works);
    }
    change(index) {
        if (this.works[index].finished == true) {
            this.works[index].finished = false;
        }
        else {
            this.works[index].finished = true;
        }
        console.log(this.works[index]);
    }
    remove() {
        for (let i = 0; i < this.works.length; i++) {
            if (this.works[i].finished == false) {
                this.works.splice(i, 1);
            }
        }
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 14, vars: 2, consts: [[1, "container-fluid"], [1, "row", "d-flex", "justify-content-center", "margin"], [1, "col-lg-6", "content"], [1, "row"], ["type", "text", "name", "", "id", "task", "placeholder", "Add a task", 1, "m-2", "p-2", "textinput"], ["myInput", ""], ["type", "button", 1, "btn", "btn-success", "p-2", "text-white", "m-2", "fw-bold", 3, "click"], ["class", "mt-2 fw-bold", 4, "ngIf"], ["class", "row text-wrap", 4, "ngFor", "ngForOf"], [1, "btn", "btn-success", "p-3", "m-2", "complete", "fw-bold", 3, "click"], [1, "mt-2", "fw-bold"], [1, "row", "text-wrap"], [1, "output", "col-lg-12", "m-0"], [1, "fw-bold", 3, "ngClass"], ["type", "checkbox", "name", "", "id", "", 1, "radio", 3, "click"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6); return ctx.addToList(_r0.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Add a task");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, AppComponent_p_9_Template, 2, 0, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, AppComponent_div_10_Template, 6, 4, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_12_listener() { return ctx.remove(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Clear Completed Task ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.works.length == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.works);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"]], styles: [".content[_ngcontent-%COMP%]{\r\n    background-color: aliceblue !important;\r\n   \r\n}\r\n.margin[_ngcontent-%COMP%]{\r\n    margin-top: 10%;\r\n}\r\n.inputContent[_ngcontent-%COMP%]{\r\n    display: block;\r\n}\r\n.textinput[_ngcontent-%COMP%]{\r\n    width: 80%;\r\n}\r\ninput[type=text][_ngcontent-%COMP%] {\r\n    border: 1px solid grey;        \r\n   \r\n   \r\n  }\r\ninput[type=text][_ngcontent-%COMP%]:focus{\r\n      border: none;\r\n    outline: none;      \r\n    box-shadow: 0 0 0 2px #66B266; \r\n  }\r\n.complete[_ngcontent-%COMP%]{\r\n      font-size: 18px;\r\n      background-color: #66B266;\r\n      width: 30%;\r\n  }\r\nbutton[_ngcontent-%COMP%]{\r\n    width: 15%;\r\n    background-color: #66B266;\r\n    border: none;\r\n  }\r\n.output[_ngcontent-%COMP%]{\r\n      display: flex;\r\n      flex-direction: row;\r\n      justify-content: space-between;\r\n  }\r\ninput[type=checkbox][_ngcontent-%COMP%]{\r\n    width: 18px;\r\n    height: 18px;\r\n    background: lighten(#66B266, 15%);\r\n    border-radius: 100% !important;\r\n}\r\n.completedtask[_ngcontent-%COMP%]{\r\n    color: gray 0.5;\r\n    text-decoration: line-through;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksc0NBQXNDOztBQUUxQztBQUNBO0lBQ0ksZUFBZTtBQUNuQjtBQUVBO0lBQ0ksY0FBYztBQUNsQjtBQUNBO0lBQ0ksVUFBVTtBQUNkO0FBQ0E7SUFDSSxzQkFBc0I7OztFQUd4QjtBQUNBO01BQ0ksWUFBWTtJQUNkLGFBQWE7SUFDYiw2QkFBNkI7RUFDL0I7QUFFQTtNQUNJLGVBQWU7TUFDZix5QkFBeUI7TUFDekIsVUFBVTtFQUNkO0FBQ0E7SUFDRSxVQUFVO0lBQ1YseUJBQXlCO0lBQ3pCLFlBQVk7RUFDZDtBQUNBO01BQ0ksYUFBYTtNQUNiLG1CQUFtQjtNQUNuQiw4QkFBOEI7RUFDbEM7QUFDQTtJQUNFLFdBQVc7SUFDWCxZQUFZO0lBQ1osaUNBQWlDO0lBQ2pDLDhCQUE4QjtBQUNsQztBQUNBO0lBQ0ksZUFBZTtJQUNmLDZCQUE2QjtBQUNqQyIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250ZW50e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYWxpY2VibHVlICFpbXBvcnRhbnQ7XHJcbiAgIFxyXG59XHJcbi5tYXJnaW57XHJcbiAgICBtYXJnaW4tdG9wOiAxMCU7XHJcbn1cclxuXHJcbi5pbnB1dENvbnRlbnR7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufVxyXG4udGV4dGlucHV0e1xyXG4gICAgd2lkdGg6IDgwJTtcclxufVxyXG5pbnB1dFt0eXBlPXRleHRdIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyZXk7ICAgICAgICBcclxuICAgXHJcbiAgIFxyXG4gIH1cclxuICBpbnB1dFt0eXBlPXRleHRdOmZvY3Vze1xyXG4gICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBvdXRsaW5lOiBub25lOyAgICAgIFxyXG4gICAgYm94LXNoYWRvdzogMCAwIDAgMnB4ICM2NkIyNjY7IFxyXG4gIH1cclxuXHJcbiAgLmNvbXBsZXRle1xyXG4gICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICM2NkIyNjY7XHJcbiAgICAgIHdpZHRoOiAzMCU7XHJcbiAgfVxyXG4gIGJ1dHRvbntcclxuICAgIHdpZHRoOiAxNSU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjZCMjY2O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gIH1cclxuICAub3V0cHV0e1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgfVxyXG4gIGlucHV0W3R5cGU9Y2hlY2tib3hde1xyXG4gICAgd2lkdGg6IDE4cHg7XHJcbiAgICBoZWlnaHQ6IDE4cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaWdodGVuKCM2NkIyNjYsIDE1JSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlICFpbXBvcnRhbnQ7XHJcbn1cclxuLmNvbXBsZXRlZHRhc2t7XHJcbiAgICBjb2xvcjogZ3JheSAwLjU7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _card_card_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./card/card.component */ "mJ8H");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");





class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _card_card_component__WEBPACK_IMPORTED_MODULE_3__["CardComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"]] }); })();


/***/ }),

/***/ "mJ8H":
/*!****************************************!*\
  !*** ./src/app/card/card.component.ts ***!
  \****************************************/
/*! exports provided: CardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardComponent", function() { return CardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class CardComponent {
    constructor() {
        this.myData = {};
    }
    ngOnInit() {
    }
}
CardComponent.ɵfac = function CardComponent_Factory(t) { return new (t || CardComponent)(); };
CardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CardComponent, selectors: [["app-card"]], inputs: { myData: "myData" }, decls: 1, vars: 0, consts: [[1, "m-2"]], template: function CardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
    } }, styles: [".content[_ngcontent-%COMP%]{\r\n    background-color: aliceblue !important;\r\n   \r\n}\r\n.margin[_ngcontent-%COMP%]{\r\n    margin-top: 10%;\r\n}\r\n.inputContent[_ngcontent-%COMP%]{\r\n    display: block;\r\n}\r\n.textinput[_ngcontent-%COMP%]{\r\n    width: 80%;\r\n}\r\ninput[type=text][_ngcontent-%COMP%] {\r\n    border: 1px solid grey;        \r\n   \r\n   \r\n  }\r\ninput[type=text][_ngcontent-%COMP%]:focus{\r\n      border: none;\r\n    outline: none;      \r\n    box-shadow: 0 0 0 2px #66B266; \r\n  }\r\ninput[type=button][_ngcontent-%COMP%]\r\n  {\r\n      width: 15%;\r\n      background-color: #66B266;\r\n      border: none;\r\n  }\r\n.complete[_ngcontent-%COMP%]{\r\n      font-size: 18px;\r\n      background-color: #66B266;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHNDQUFzQzs7QUFFMUM7QUFDQTtJQUNJLGVBQWU7QUFDbkI7QUFFQTtJQUNJLGNBQWM7QUFDbEI7QUFDQTtJQUNJLFVBQVU7QUFDZDtBQUNBO0lBQ0ksc0JBQXNCOzs7RUFHeEI7QUFDQTtNQUNJLFlBQVk7SUFDZCxhQUFhO0lBQ2IsNkJBQTZCO0VBQy9CO0FBRUE7O01BRUksVUFBVTtNQUNWLHlCQUF5QjtNQUN6QixZQUFZO0VBQ2hCO0FBQ0E7TUFDSSxlQUFlO01BQ2YseUJBQXlCO0VBQzdCIiwiZmlsZSI6ImNhcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250ZW50e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYWxpY2VibHVlICFpbXBvcnRhbnQ7XHJcbiAgIFxyXG59XHJcbi5tYXJnaW57XHJcbiAgICBtYXJnaW4tdG9wOiAxMCU7XHJcbn1cclxuXHJcbi5pbnB1dENvbnRlbnR7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufVxyXG4udGV4dGlucHV0e1xyXG4gICAgd2lkdGg6IDgwJTtcclxufVxyXG5pbnB1dFt0eXBlPXRleHRdIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyZXk7ICAgICAgICBcclxuICAgXHJcbiAgIFxyXG4gIH1cclxuICBpbnB1dFt0eXBlPXRleHRdOmZvY3Vze1xyXG4gICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBvdXRsaW5lOiBub25lOyAgICAgIFxyXG4gICAgYm94LXNoYWRvdzogMCAwIDAgMnB4ICM2NkIyNjY7IFxyXG4gIH1cclxuXHJcbiAgaW5wdXRbdHlwZT1idXR0b25dXHJcbiAge1xyXG4gICAgICB3aWR0aDogMTUlO1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjZCMjY2O1xyXG4gICAgICBib3JkZXI6IG5vbmU7XHJcbiAgfVxyXG4gIC5jb21wbGV0ZXtcclxuICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjZCMjY2O1xyXG4gIH0iXX0= */"] });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");



const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
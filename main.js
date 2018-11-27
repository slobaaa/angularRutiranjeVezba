(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing-module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing-module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _zaposleni_zaposleni_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./zaposleni/zaposleni.component */ "./src/app/zaposleni/zaposleni.component.ts");
/* harmony import */ var _kontakt_kontakt_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./kontakt/kontakt.component */ "./src/app/kontakt/kontakt.component.ts");
/* harmony import */ var _nije_pronadjeno_nije_pronadjeno_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./nije-pronadjeno/nije-pronadjeno.component */ "./src/app/nije-pronadjeno/nije-pronadjeno.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var appRoutes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    { path: 'zaposleni', component: _zaposleni_zaposleni_component__WEBPACK_IMPORTED_MODULE_3__["ZaposleniComponent"] },
    { path: 'kontakt', component: _kontakt_kontakt_component__WEBPACK_IMPORTED_MODULE_4__["KontaktComponent"] },
    { path: 'nijepronadjena', component: _nije_pronadjeno_nije_pronadjeno_component__WEBPACK_IMPORTED_MODULE_5__["NijePronadjenoComponent"] },
    { path: '**', redirectTo: '/nijepronadjena' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(appRoutes)
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "li{\r\n    margin: 20px;\r\n  }"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-xs-12 col-sm-10 col-md-8 col-sm-offset-1 col-md-offset-2\">\n      <ul class=\"nav nav-tabs\">\n        <li role=\"presentation\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact:true}\">\n          <a routerLink=\"/\">Home</a></li>\n        <li role=\"presentation\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact:true}\">\n          <a routerLink=\"/zaposleni\">Zaposleni</a></li>\n        <li role=\"presentation\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact:true}\">\n          <a routerLink=\"/kontakt\">Kontakt</a></li>\n      </ul>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-xs-12 col-sm-10 col-md-8 col-sm-offset-1 col-md-offset-2\">\n      <router-outlet></router-outlet>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Zaposleni - rutiranje';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _nije_pronadjeno_nije_pronadjeno_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./nije-pronadjeno/nije-pronadjeno.component */ "./src/app/nije-pronadjeno/nije-pronadjeno.component.ts");
/* harmony import */ var _zaposleni_zaposleni_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./zaposleni/zaposleni.component */ "./src/app/zaposleni/zaposleni.component.ts");
/* harmony import */ var _kontakt_kontakt_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./kontakt/kontakt.component */ "./src/app/kontakt/kontakt.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app-routing-module */ "./src/app/app-routing-module.ts");
/* harmony import */ var _zaposleni_zaposleni_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./zaposleni/zaposleni.service */ "./src/app/zaposleni/zaposleni.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _nije_pronadjeno_nije_pronadjeno_component__WEBPACK_IMPORTED_MODULE_5__["NijePronadjenoComponent"],
                _zaposleni_zaposleni_component__WEBPACK_IMPORTED_MODULE_6__["ZaposleniComponent"],
                _kontakt_kontakt_component__WEBPACK_IMPORTED_MODULE_7__["KontaktComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_3__["HttpModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"]
            ],
            providers: [_zaposleni_zaposleni_service__WEBPACK_IMPORTED_MODULE_10__["ZaposleniService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Home stranica</h1>\n<button (click)=\"pozdrav()\">Klikni za pozdrav</button>\n<ul>\n    <li role=\"presentation\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact:true}\">\n        <a routerLink=\"/\">Home</a></li>\n    <li role=\"presentation\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact:true}\">\n        <a routerLink=\"/zaposleni\">Zaposleni</a></li>\n    <li role=\"presentation\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact:true}\">\n         <a routerLink=\"/kontakt\">Kontakt</a></li>\n</ul>"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = /** @class */ (function () {
    function HomeComponent(router) {
        this.router = router;
        this.message = 'aaaa';
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.pozdrav = function () {
        this.message = 'Pozdrav iz Home-a';
        alert(this.message);
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/kontakt/kontakt.component.css":
/*!***********************************************!*\
  !*** ./src/app/kontakt/kontakt.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/kontakt/kontakt.component.html":
/*!************************************************!*\
  !*** ./src/app/kontakt/kontakt.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<label for=\"ime\">Ime: </label>\n<input type=\"text\" class=\"form-control\" id=\"ime\" [(ngModel)]=\"ime\">\n<label for=\"prezime\">Prezime: </label>\n<input type=\"text\" class=\"form-control\" id=\"prezime\" [(ngModel)]=\"prezime\">\n<label for=\"email\">Email: </label>\n<input type=\"text\" class=\"form-control\" id=\"email\" [(ngModel)]=\"email\">\n<br>\n<button type=\"submit\" class=\"btn btn-primary\" (click)=\"iscitajPodatke(ime, prezime, email)\">Posalji</button>\n\n"

/***/ }),

/***/ "./src/app/kontakt/kontakt.component.ts":
/*!**********************************************!*\
  !*** ./src/app/kontakt/kontakt.component.ts ***!
  \**********************************************/
/*! exports provided: KontaktComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KontaktComponent", function() { return KontaktComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var KontaktComponent = /** @class */ (function () {
    function KontaktComponent() {
    }
    KontaktComponent.prototype.ngOnInit = function () {
    };
    KontaktComponent.prototype.iscitajPodatke = function (ime, prezime, email) {
        return alert('Ime: ' + ime + ' \nPrezime: ' + prezime + ' \nEmail: ' + email);
    };
    KontaktComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-kontakt',
            template: __webpack_require__(/*! ./kontakt.component.html */ "./src/app/kontakt/kontakt.component.html"),
            styles: [__webpack_require__(/*! ./kontakt.component.css */ "./src/app/kontakt/kontakt.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], KontaktComponent);
    return KontaktComponent;
}());



/***/ }),

/***/ "./src/app/nije-pronadjeno/nije-pronadjeno.component.css":
/*!***************************************************************!*\
  !*** ./src/app/nije-pronadjeno/nije-pronadjeno.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/nije-pronadjeno/nije-pronadjeno.component.html":
/*!****************************************************************!*\
  !*** ./src/app/nije-pronadjeno/nije-pronadjeno.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Stranica koju zelite ne postoji</h1>"

/***/ }),

/***/ "./src/app/nije-pronadjeno/nije-pronadjeno.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/nije-pronadjeno/nije-pronadjeno.component.ts ***!
  \**************************************************************/
/*! exports provided: NijePronadjenoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NijePronadjenoComponent", function() { return NijePronadjenoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NijePronadjenoComponent = /** @class */ (function () {
    function NijePronadjenoComponent() {
    }
    NijePronadjenoComponent.prototype.ngOnInit = function () {
    };
    NijePronadjenoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-nije-pronadjeno',
            template: __webpack_require__(/*! ./nije-pronadjeno.component.html */ "./src/app/nije-pronadjeno/nije-pronadjeno.component.html"),
            styles: [__webpack_require__(/*! ./nije-pronadjeno.component.css */ "./src/app/nije-pronadjeno/nije-pronadjeno.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NijePronadjenoComponent);
    return NijePronadjenoComponent;
}());



/***/ }),

/***/ "./src/app/zaposleni/zaposleni.component.css":
/*!***************************************************!*\
  !*** ./src/app/zaposleni/zaposleni.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/zaposleni/zaposleni.component.html":
/*!****************************************************!*\
  !*** ./src/app/zaposleni/zaposleni.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col\">\n    <div class=\"form-group\">\n      <label>Ime zaposlenog</label>\n      <input\n        type=\"text\"\n        class=\"form-control\"\n        #ime>\n    </div>\n    <div class=\"form-group\">\n      <label>Prezime zaposlenog</label>\n      <input\n        type=\"text\"\n        class=\"form-control\"\n        #prezime>\n    </div>\n    <div class=\"form-group\">\n      <label>Email zaposlenog</label>\n      <input\n        type=\"text\"\n        class=\"form-control\"\n        #email>\n    </div>\n\n    <button\n      class=\"btn btn-secondary\"\n      (click)=\"dodajZaposlenog(ime.value, prezime.value, email.value)\">\n      Dodaj zaposlenog\n    </button>\n  </div>\n</div>\n\n<div class=\"row\">\n  <div class=\"col\">\n    <h2>Spisak zaposlenih</h2>\n   <p *ngFor=\"let zaposlen of zaposleni; let i = index\"><a href=\"#\" (click)=\"ispisiDetalje(zaposlen.ime, zaposlen.prezime, zaposlen.email)\">{{i+1}} . {{zaposlen.ime}}</a></p>\n\n   \n  </div>\n</div> "

/***/ }),

/***/ "./src/app/zaposleni/zaposleni.component.ts":
/*!**************************************************!*\
  !*** ./src/app/zaposleni/zaposleni.component.ts ***!
  \**************************************************/
/*! exports provided: ZaposleniComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZaposleniComponent", function() { return ZaposleniComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _zaposleni_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./zaposleni.service */ "./src/app/zaposleni/zaposleni.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ZaposleniComponent = /** @class */ (function () {
    function ZaposleniComponent(zaposleniService, ruter, ruta) {
        this.zaposleniService = zaposleniService;
        this.ruter = ruter;
        this.ruta = ruta;
        this.zaposleni = [];
    }
    ZaposleniComponent.prototype.dodajZaposlenog = function (ime, prezime, email) {
        this.zaposleniService.dodajZaposlenog(ime, prezime, email);
    };
    ZaposleniComponent.prototype.ispisiDetalje = function (ime, prezime, email) {
        alert('Ime: ' + ime + '\nPrezime: ' + prezime + '\nEmail: ' + email);
        return false;
    };
    ZaposleniComponent.prototype.ngOnInit = function () {
        this.zaposleni = this.zaposleniService.zaposleni;
    };
    ZaposleniComponent.prototype.ucitaj = function () {
        this.ruter.navigate(['zaposleni'], { relativeTo: this.ruta });
    };
    ZaposleniComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-zaposleni',
            template: __webpack_require__(/*! ./zaposleni.component.html */ "./src/app/zaposleni/zaposleni.component.html"),
            styles: [__webpack_require__(/*! ./zaposleni.component.css */ "./src/app/zaposleni/zaposleni.component.css")]
        }),
        __metadata("design:paramtypes", [_zaposleni_service__WEBPACK_IMPORTED_MODULE_1__["ZaposleniService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], ZaposleniComponent);
    return ZaposleniComponent;
}());



/***/ }),

/***/ "./src/app/zaposleni/zaposleni.service.ts":
/*!************************************************!*\
  !*** ./src/app/zaposleni/zaposleni.service.ts ***!
  \************************************************/
/*! exports provided: ZaposleniService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZaposleniService", function() { return ZaposleniService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ZaposleniService = /** @class */ (function () {
    function ZaposleniService() {
        this.zaposleni = [
            {
                ime: 'Mirko',
                prezime: 'Mirkovic',
                email: 'mirko@mirko.com'
            },
            {
                ime: 'Marko',
                prezime: 'Markovic',
                email: 'marko@marko.com'
            },
            {
                ime: 'Pera',
                prezime: 'Peric',
                email: 'pera@pera.com'
            },
            {
                ime: 'AAA',
                prezime: 'BBB',
                email: 'aaa@mvvv.com'
            }
        ];
    }
    ZaposleniService.prototype.dodajZaposlenog = function (ime, prezime, email) {
        this.zaposleni.push({ ime: ime, prezime: prezime, email: email });
    };
    ZaposleniService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])() // da bi ostale komponente mogle da ga vide
    ], ZaposleniService);
    return ZaposleniService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
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
var environment = {
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

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Sloba\Desktop\Smartinit\Frontend\Domaci\11. 21.10.2018 - Angular rutiranje\rutiranje\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
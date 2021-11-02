(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-health-check-health-check-module"],{

/***/ "aDMX":
/*!*******************************************************************!*\
  !*** ./src/app/pages/health-check/health-check-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: HealthCheckPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HealthCheckPageRoutingModule", function() { return HealthCheckPageRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _health_check_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./health-check.page */ "nTk1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [
    {
        path: '',
        component: _health_check_page__WEBPACK_IMPORTED_MODULE_1__["HealthCheckPage"]
    }
];
class HealthCheckPageRoutingModule {
}
HealthCheckPageRoutingModule.ɵfac = function HealthCheckPageRoutingModule_Factory(t) { return new (t || HealthCheckPageRoutingModule)(); };
HealthCheckPageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: HealthCheckPageRoutingModule });
HealthCheckPageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](HealthCheckPageRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "b5sV":
/*!***********************************************************!*\
  !*** ./src/app/pages/health-check/health-check.module.ts ***!
  \***********************************************************/
/*! exports provided: HealthCheckPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HealthCheckPageModule", function() { return HealthCheckPageModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _health_check_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./health-check-routing.module */ "aDMX");
/* harmony import */ var _health_check_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./health-check.page */ "nTk1");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");







class HealthCheckPageModule {
}
HealthCheckPageModule.ɵfac = function HealthCheckPageModule_Factory(t) { return new (t || HealthCheckPageModule)(); };
HealthCheckPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: HealthCheckPageModule });
HealthCheckPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"], _health_check_routing_module__WEBPACK_IMPORTED_MODULE_3__["HealthCheckPageRoutingModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](HealthCheckPageModule, { declarations: [_health_check_page__WEBPACK_IMPORTED_MODULE_4__["HealthCheckPage"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"], _health_check_routing_module__WEBPACK_IMPORTED_MODULE_3__["HealthCheckPageRoutingModule"]] }); })();


/***/ }),

/***/ "nTk1":
/*!*********************************************************!*\
  !*** ./src/app/pages/health-check/health-check.page.ts ***!
  \*********************************************************/
/*! exports provided: HealthCheckPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HealthCheckPage", function() { return HealthCheckPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _airgap_coinlib_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @airgap/coinlib-core */ "RKiA");
/* harmony import */ var _airgap_coinlib_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_airgap_coinlib_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var src_app_services_coinlib_coinlib_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/coinlib/coinlib.service */ "kB1F");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");










function HealthCheckPage_ion_card_11_ion_spinner_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "ion-spinner", 10);
} }
function HealthCheckPage_ion_card_11_span_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](item_r1.status);
} }
function HealthCheckPage_ion_card_11_span_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "ion-icon", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function HealthCheckPage_ion_card_11_span_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "ion-icon", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function HealthCheckPage_ion_card_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "ion-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "ion-item", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "ion-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "ion-buttons", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "ion-button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](7, HealthCheckPage_ion_card_11_ion_spinner_7_Template, 1, 0, "ion-spinner", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](8, HealthCheckPage_ion_card_11_span_8_Template, 2, 1, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](9, HealthCheckPage_ion_card_11_span_9_Template, 2, 0, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](10, HealthCheckPage_ion_card_11_span_10_Template, 2, 0, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](item_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", item_r1.status === "pending");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", item_r1.status === "loading");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", item_r1.status === "fail");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", item_r1.status === "success");
} }
var CheckStatus;
(function (CheckStatus) {
    CheckStatus["LOADING"] = "loading";
    CheckStatus["PENDING"] = "pending";
    CheckStatus["SUCCESS"] = "success";
    CheckStatus["FAIL"] = "fail";
})(CheckStatus || (CheckStatus = {}));
var ApiType;
(function (ApiType) {
    ApiType["NODE"] = "node";
    ApiType["Explorer"] = "explorer";
})(ApiType || (ApiType = {}));
// TODO: Should be provided by the API
const rskHealthMock = {
    identifier: _airgap_coinlib_core__WEBPACK_IMPORTED_MODULE_1__["MainProtocolSymbols"].RBTC,
    node: { isHealthy: true },
    explorer: { isHealthy: true }
};
class HealthCheckPage {
    constructor(coinlibService, loadingController, translateService) {
        this.coinlibService = coinlibService;
        this.loadingController = loadingController;
        this.translateService = translateService;
        this.items = [
            this.generateCheckItem('Tezos', _airgap_coinlib_core__WEBPACK_IMPORTED_MODULE_1__["MainProtocolSymbols"].XTZ, ApiType.NODE),
            this.generateCheckItem('Tezos', _airgap_coinlib_core__WEBPACK_IMPORTED_MODULE_1__["MainProtocolSymbols"].XTZ, ApiType.Explorer),
            this.generateCheckItem('Bitcoin', _airgap_coinlib_core__WEBPACK_IMPORTED_MODULE_1__["MainProtocolSymbols"].BTC, ApiType.NODE),
            this.generateCheckItem('Ethereum', _airgap_coinlib_core__WEBPACK_IMPORTED_MODULE_1__["MainProtocolSymbols"].ETH, ApiType.NODE),
            this.generateCheckItem('Ethereum', _airgap_coinlib_core__WEBPACK_IMPORTED_MODULE_1__["MainProtocolSymbols"].ETH, ApiType.Explorer),
            this.generateCheckItem('RSK', _airgap_coinlib_core__WEBPACK_IMPORTED_MODULE_1__["MainProtocolSymbols"].RBTC, ApiType.NODE),
            this.generateCheckItem('RSK', _airgap_coinlib_core__WEBPACK_IMPORTED_MODULE_1__["MainProtocolSymbols"].RBTC, ApiType.Explorer),
            this.generateCheckItem('Polkadot', _airgap_coinlib_core__WEBPACK_IMPORTED_MODULE_1__["MainProtocolSymbols"].POLKADOT, ApiType.NODE),
            this.generateCheckItem('Polkadot', _airgap_coinlib_core__WEBPACK_IMPORTED_MODULE_1__["MainProtocolSymbols"].POLKADOT, ApiType.Explorer),
            this.generateCheckItem('Kusama', _airgap_coinlib_core__WEBPACK_IMPORTED_MODULE_1__["MainProtocolSymbols"].KUSAMA, ApiType.NODE),
            this.generateCheckItem('Kusama', _airgap_coinlib_core__WEBPACK_IMPORTED_MODULE_1__["MainProtocolSymbols"].KUSAMA, ApiType.Explorer),
            this.generateCheckItem('Cosmos', _airgap_coinlib_core__WEBPACK_IMPORTED_MODULE_1__["MainProtocolSymbols"].COSMOS, ApiType.NODE),
            this.generateCheckItem('Aeternity', _airgap_coinlib_core__WEBPACK_IMPORTED_MODULE_1__["MainProtocolSymbols"].AE, ApiType.NODE),
            this.generateCheckItem('Groestlcoin', _airgap_coinlib_core__WEBPACK_IMPORTED_MODULE_1__["MainProtocolSymbols"].GRS, ApiType.NODE)
        ];
    }
    ionViewWillEnter() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.displayLoading();
            this.coinlibService.checkApiHealth().then((apiHealth) => {
                var _a;
                this.apiHealth = apiHealth.concat(rskHealthMock); // TODO: Api result instead of mock
                (_a = this.loadingElement) === null || _a === void 0 ? void 0 : _a.dismiss();
                this.runChecks();
            });
        });
    }
    displayLoading() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.loadingElement = yield this.loadingController.create({
                message: this.translateService.instant('health-check.message'),
                backdropDismiss: true
            });
            yield this.loadingElement.present();
        });
    }
    generateCheckItem(protocolName, identifier, apiType) {
        return {
            title: apiType === ApiType.NODE ? `${protocolName} Node` : `${protocolName} Explorer`,
            status: CheckStatus.LOADING,
            delay: 100,
            check: () => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                return this.isHealthy(identifier, apiType);
            })
        };
    }
    isHealthy(identifier, apiType) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const healthInfo = this.apiHealth.find((el) => el.identifier === identifier);
            return healthInfo[apiType].isHealthy;
        });
    }
    runChecks() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.items.forEach((item) => (item.status = CheckStatus.LOADING));
            for (let i = 0; i < this.items.length; i++) {
                const element = this.items[i];
                element.status = CheckStatus.PENDING;
                yield new Promise((resolve) => setTimeout(resolve, element.delay));
                element.status = (yield element.check()) ? CheckStatus.SUCCESS : CheckStatus.FAIL;
                yield new Promise((resolve) => setTimeout(resolve, 100));
            }
        });
    }
}
HealthCheckPage.ɵfac = function HealthCheckPage_Factory(t) { return new (t || HealthCheckPage)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_coinlib_coinlib_service__WEBPACK_IMPORTED_MODULE_4__["CoinlibService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"])); };
HealthCheckPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: HealthCheckPage, selectors: [["app-health-check"]], decls: 12, vars: 4, consts: [[1, "ion-no-border"], ["fixed", "true", 1, "ion-no-padding"], ["slot", "start"], ["defaultHref", "/tabs/settings"], [4, "ngFor", "ngForOf"], ["lines", "none"], ["slot", "end"], ["shape", "round", "size", "small", "color", "secondary"], ["name", "lines-small", "color", "primary", 4, "ngIf"], [4, "ngIf"], ["name", "lines-small", "color", "primary"], ["size", "large", "color", "danger", "name", "close-circle"], ["size", "large", "color", "success", "name", "checkmark-circle-outline"]], template: function HealthCheckPage_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ion-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "ion-grid", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "ion-toolbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "ion-buttons", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "ion-back-button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "ion-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](7, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "ion-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "ion-grid", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "ion-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](11, HealthCheckPage_ion_card_11_Template, 11, 5, "ion-card", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](7, 2, "health-check.title"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.items);
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonGrid"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonBackButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonBackButtonDelegate"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonList"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonCard"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonCardHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonCardTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonButton"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSpinner"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonIcon"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJoZWFsdGgtY2hlY2sucGFnZS5zY3NzIn0= */"] });


/***/ })

}]);
//# sourceMappingURL=pages-health-check-health-check-module.js.map
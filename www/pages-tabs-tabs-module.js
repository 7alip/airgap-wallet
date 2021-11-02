(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-tabs-tabs-module"],{

/***/ "0gJg":
/*!**********************************************************!*\
  !*** ./src/app/pages/introduction/introdution.module.ts ***!
  \**********************************************************/
/*! exports provided: IntroductionPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntroductionPageModule", function() { return IntroductionPageModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/components.module */ "j1ZV");
/* harmony import */ var _introduction_download_introduction_download_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../introduction-download/introduction-download.module */ "tEGm");
/* harmony import */ var _introduction__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./introduction */ "xWVS");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ "fXoL");










class IntroductionPageModule {
}
IntroductionPageModule.ɵfac = function IntroductionPageModule_Factory(t) { return new (t || IntroductionPageModule)(); };
IntroductionPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({ type: IntroductionPageModule });
IntroductionPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({ imports: [[
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_5__["ComponentsModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"],
            _introduction_download_introduction_download_module__WEBPACK_IMPORTED_MODULE_6__["IntroductionDownloadPageModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _introduction__WEBPACK_IMPORTED_MODULE_7__["IntroductionPage"] }])
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](IntroductionPageModule, { declarations: [_introduction__WEBPACK_IMPORTED_MODULE_7__["IntroductionPage"]], imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
        _components_components_module__WEBPACK_IMPORTED_MODULE_5__["ComponentsModule"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"],
        _introduction_download_introduction_download_module__WEBPACK_IMPORTED_MODULE_6__["IntroductionDownloadPageModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] }); })();


/***/ }),

/***/ "30Mf":
/*!**************************************************!*\
  !*** ./src/app/pages/tabs/tabs.router.module.ts ***!
  \**************************************************/
/*! exports provided: TabsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPageRoutingModule", function() { return TabsPageRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabs.page */ "TA0h");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [
    {
        path: 'tabs',
        component: _tabs_page__WEBPACK_IMPORTED_MODULE_1__["TabsPage"],
        children: [
            {
                path: 'portfolio',
                children: [
                    {
                        path: '',
                        loadChildren: () => __webpack_require__.e(/*! import() | portfolio-portfolio-module */ "portfolio-portfolio-module").then(__webpack_require__.bind(null, /*! ../portfolio/portfolio.module */ "0rid")).then((m) => m.PortfolioPageModule)
                    }
                ]
            },
            {
                path: 'scan',
                children: [
                    {
                        path: '',
                        loadChildren: () => __webpack_require__.e(/*! import() | scan-scan-module */ "scan-scan-module").then(__webpack_require__.bind(null, /*! ../scan/scan.module */ "Fo4Z")).then((m) => m.ScanPageModule)
                    }
                ]
            },
            {
                path: 'exchange',
                children: [
                    {
                        path: '',
                        loadChildren: () => __webpack_require__.e(/*! import() | exchange-exchange-module */ "exchange-exchange-module").then(__webpack_require__.bind(null, /*! ../exchange/exchange.module */ "l1L9")).then((m) => m.ExchangePageModule)
                    }
                ]
            },
            {
                path: 'settings',
                children: [
                    {
                        path: '',
                        loadChildren: () => __webpack_require__.e(/*! import() | settings-settings-module */ "settings-settings-module").then(__webpack_require__.bind(null, /*! ../settings/settings.module */ "yPrK")).then((m) => m.SettingsPageModule)
                    }
                ]
            },
            {
                path: '',
                redirectTo: '/tabs/portfolio',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: '',
        redirectTo: '/tabs/portfolio',
        pathMatch: 'full'
    }
];
class TabsPageRoutingModule {
}
TabsPageRoutingModule.ɵfac = function TabsPageRoutingModule_Factory(t) { return new (t || TabsPageRoutingModule)(); };
TabsPageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: TabsPageRoutingModule });
TabsPageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](TabsPageRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "4HcY":
/*!********************************************!*\
  !*** ./src/app/pages/exchange/exchange.ts ***!
  \********************************************/
/*! exports provided: ExchangePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExchangePage", function() { return ExchangePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _airgap_angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @airgap/angular-core */ "138U");
/* harmony import */ var _airgap_coinlib_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @airgap/coinlib-core */ "RKiA");
/* harmony import */ var _airgap_coinlib_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_airgap_coinlib_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _airgap_coinlib_core_utils_ProtocolNetwork__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @airgap/coinlib-core/utils/ProtocolNetwork */ "14cC");
/* harmony import */ var _airgap_coinlib_core_utils_ProtocolNetwork__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_airgap_coinlib_core_utils_ProtocolNetwork__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! bignumber.js */ "kB5k");
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(bignumber_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _services_account_account_provider__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../services/account/account.provider */ "57MG");
/* harmony import */ var _services_data_data_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../services/data/data.service */ "1y+R");
/* harmony import */ var _services_exchange_exchange__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../services/exchange/exchange */ "dW0/");
/* harmony import */ var _services_price_price_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../services/price/price.service */ "QMTT");
/* harmony import */ var _services_sentry_error_handler_sentry_error_handler__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../services/sentry-error-handler/sentry-error-handler */ "hPkG");
/* harmony import */ var _services_storage_storage__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../services/storage/storage */ "AFs5");
/* harmony import */ var _exchange_select_exchange_select_page__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./../exchange-select/exchange-select.page */ "TxTD");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _components_swap_swap__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../components/swap/swap */ "vs69");
/* harmony import */ var _components_fee_fee_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../components/fee/fee.component */ "pNtj");
/* harmony import */ var _components_widget_selector_widget_selector__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../components/widget-selector/widget-selector */ "cwVp");


































function ExchangePage_ng_container_10_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "ion-row", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "ion-col", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "h3", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "ion-col", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "ion-button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ExchangePage_ng_container_10_Template_ion_button_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r4.dismissExchangeOnboarding(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](12, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](4, 3, "exchange.onboarding.heading"), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](9, 5, "exchange.onboarding.description"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](12, 7, "exchange.onboarding.exchange_label"), " ");
} }
function ExchangePage_ng_container_11_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "ion-row", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "ion-col", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "h3", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "ion-col", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "ion-button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ExchangePage_ng_container_11_Template_ion_button_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r6.goToAddCoinPage(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](12, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](4, 3, "exchange.no-currencies.heading"), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](9, 5, "exchange.no-currencies.description"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](12, 7, "exchange.no-currencies.exchange_label"), " ");
} }
function ExchangePage_ng_container_12_ion_row_4_img_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "img", 27);
} }
function ExchangePage_ng_container_12_ion_row_4_img_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "img", 28);
} }
function ExchangePage_ng_container_12_ion_row_4_img_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "img", 29);
} }
function ExchangePage_ng_container_12_ion_row_4_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ion-row", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "ion-col", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "ion-row", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "ion-text", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, ExchangePage_ng_container_12_ion_row_4_img_7_Template, 1, 0, "img", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](8, ExchangePage_ng_container_12_ion_row_4_img_8_Template, 1, 0, "img", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](9, ExchangePage_ng_container_12_ion_row_4_img_9_Template, 1, 0, "img", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "ion-col", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "ion-button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ExchangePage_ng_container_12_ion_row_4_Template_ion_button_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r13.doRadio(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](13, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](14, "ion-icon", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](6, 6, "exchange.powered-by_label"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r8.activeExchange === ctx_r8.ExchangeEnum.CHANGENOW);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r8.activeExchange === ctx_r8.ExchangeEnum.CHANGELLY);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r8.activeExchange === ctx_r8.ExchangeEnum.QUIPUSWAP);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx_r8.disableExchangeSelection);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](13, 8, "exchange.switch-exchange_label"), " ");
} }
function ExchangePage_ng_container_12_ion_row_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ion-row", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "ion-col", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "widget-selector", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const widget_r15 = ctx.$implicit;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("widget", widget_r15)("widgetForm", ctx_r9.exchangeForm.controls[ctx_r9.activeExchange]);
} }
function ExchangePage_ng_container_12_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "swap", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("protocolSetEmitter", function ExchangePage_ng_container_12_Template_swap_protocolSetEmitter_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r17); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r16.setFromProtocol($event); })("walletSetEmitter", function ExchangePage_ng_container_12_Template_swap_walletSetEmitter_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r17); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r18.setFromWallet($event); })("amountSetEmitter", function ExchangePage_ng_container_12_Template_swap_amountSetEmitter_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r17); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r19.amountSet($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "swap", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("protocolSetEmitter", function ExchangePage_ng_container_12_Template_swap_protocolSetEmitter_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r17); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r20.setToProtocol($event); })("walletSetEmitter", function ExchangePage_ng_container_12_Template_swap_walletSetEmitter_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r17); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r21.setToWallet($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, ExchangePage_ng_container_12_ion_row_4_Template, 15, 10, "ion-row", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, ExchangePage_ng_container_12_ion_row_5_Template, 3, 2, "ion-row", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "fee", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("selectedWallet", ctx_r2.fromWallet)("supportedWallets", ctx_r2.supportedFromWallets)("selectedProtocol", ctx_r2.selectedFromProtocol)("supportedProtocols", ctx_r2.supportedProtocolsFrom)("exchangeAmount", ctx_r2.amount)("minExchangeAmount", ctx_r2.minExchangeAmount)("currentlyNotSupported", ctx_r2.currentlyNotSupported);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("selectedWallet", ctx_r2.toWallet)("supportedWallets", ctx_r2.supportedToWallets)("selectedProtocol", ctx_r2.selectedToProtocol)("supportedProtocols", ctx_r2.supportedProtocolsTo)("exchangeAmount", ctx_r2.exchangeAmount)("swapSell", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r2.isTZBTCExchange);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r2.exchangeWidgets);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("state", ctx_r2.state)("form", ctx_r2.exchangeForm)("wallet", ctx_r2.fromWallet);
} }
function ExchangePage_ng_container_13_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "ion-fab", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "ion-button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ExchangePage_ng_container_13_Template_ion_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r23); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r22.startExchange(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", (ctx_r3.amount == null ? null : ctx_r3.amount.isNaN()) || (ctx_r3.amount == null ? null : ctx_r3.amount.isZero()) || (ctx_r3.amount == null ? null : ctx_r3.amount.isLessThan(ctx_r3.minExchangeAmount)) || (ctx_r3.amount == null ? null : ctx_r3.amount.isGreaterThan(ctx_r3.fromWallet.currentBalance.shiftedBy(-1 * ctx_r3.fromWallet.protocol.decimals))) || ctx_r3.currentlyNotSupported);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](4, 2, "exchange.exchange_label"), " ");
} }
var ExchangePageState;
(function (ExchangePageState) {
    ExchangePageState[ExchangePageState["LOADING"] = 0] = "LOADING";
    ExchangePageState[ExchangePageState["ONBOARDING"] = 1] = "ONBOARDING";
    ExchangePageState[ExchangePageState["NOT_ENOUGH_CURRENCIES"] = 2] = "NOT_ENOUGH_CURRENCIES";
    ExchangePageState[ExchangePageState["EXCHANGE"] = 3] = "EXCHANGE";
})(ExchangePageState || (ExchangePageState = {}));
class ExchangePage {
    constructor(formBuilder, router, exchangeProvider, storageProvider, accountProvider, dataService, loadingController, translateService, modalController, alertCtrl, priceService, protocolService, _ngZone) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.exchangeProvider = exchangeProvider;
        this.storageProvider = storageProvider;
        this.accountProvider = accountProvider;
        this.dataService = dataService;
        this.loadingController = loadingController;
        this.translateService = translateService;
        this.modalController = modalController;
        this.alertCtrl = alertCtrl;
        this.priceService = priceService;
        this.protocolService = protocolService;
        this._ngZone = _ngZone;
        this.supportedProtocolsFrom = [];
        this.supportedProtocolsTo = [];
        this.currentlyNotSupported = false;
        this.minExchangeAmount = new bignumber_js__WEBPACK_IMPORTED_MODULE_9__["BigNumber"](0);
        this.amount = new bignumber_js__WEBPACK_IMPORTED_MODULE_9__["BigNumber"](0);
        this.disableExchangeSelection = false;
        this.activeExchange$ = new rxjs__WEBPACK_IMPORTED_MODULE_10__["BehaviorSubject"](undefined);
        // temporary field until we figure out how to handle Substrate fee/tip model
        this.isSubstrate = false;
        this.ExchangeEnum = _services_exchange_exchange__WEBPACK_IMPORTED_MODULE_14__["ExchangeEnum"];
        this.exchangePageStates = ExchangePageState;
        this.exchangePageState = ExchangePageState.LOADING;
        this.exchangeWidgets = [];
        this._state = undefined;
        this.state$ = new rxjs__WEBPACK_IMPORTED_MODULE_10__["BehaviorSubject"](this._state);
        this.ngDestroyed$ = new rxjs__WEBPACK_IMPORTED_MODULE_10__["Subject"]();
    }
    get isTZBTCExchange() {
        return ((this.selectedFromProtocol !== undefined && this.selectedFromProtocol.identifier === _airgap_coinlib_core__WEBPACK_IMPORTED_MODULE_2__["SubProtocolSymbols"].XTZ_BTC) ||
            (this.selectedToProtocol !== undefined && this.selectedToProtocol.identifier === _airgap_coinlib_core__WEBPACK_IMPORTED_MODULE_2__["SubProtocolSymbols"].XTZ_BTC));
    }
    ionViewWillEnter() {
        this.initForm();
        this.initState();
        this.accountProvider.allWallets$
            .asObservable()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["takeUntil"])(this.ngDestroyed$))
            .subscribe((wallets) => {
            this.walletList = wallets.filter((wallet) => wallet.status === _airgap_coinlib_core__WEBPACK_IMPORTED_MODULE_2__["AirGapWalletStatus"].ACTIVE);
        });
        this.exchangeProvider
            .getActiveExchange()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["takeUntil"])(this.ngDestroyed$))
            .subscribe((exchange) => {
            this.changeExchange(exchange).catch(Object(_services_sentry_error_handler_sentry_error_handler__WEBPACK_IMPORTED_MODULE_16__["handleErrorSentry"])(_services_sentry_error_handler_sentry_error_handler__WEBPACK_IMPORTED_MODULE_16__["ErrorCategory"].OTHER));
        });
        this.activeExchange$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["takeUntil"])(this.ngDestroyed$)).subscribe((exchange) => {
            this.activeExchange = exchange;
        });
        this.setup()
            .then(() => {
            try {
                this.onChanges();
                this.updateFeeEstimate();
            }
            catch (err) {
                console.error(err);
            }
        })
            .catch((err) => {
            console.error(err);
            this.showLoadingErrorAlert();
        });
    }
    changeExchange(exchange) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.exchangeForm.removeControl(this.activeExchange);
            this.updateState({ providerState: null });
            this.activeExchange$.next(exchange);
            const exchangeUI = yield this.exchangeProvider.getCustomUI();
            this.exchangeWidgets = exchangeUI.widgets;
            if (exchangeUI.form) {
                this.exchangeForm.addControl(this.activeExchange, exchangeUI.form);
                this.updateState({ providerState: exchangeUI.form.value });
                this.exchangeForm.controls[this.activeExchange].valueChanges.subscribe((providerState) => {
                    this.updateState({ providerState });
                });
            }
        });
    }
    initForm() {
        this.exchangeForm = this.formBuilder.group({
            feeLevel: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
            fee: [0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required])],
            isAdvancedMode: [false, []]
        });
    }
    initState() {
        this._state = {
            feeDefaults: {
                low: '0',
                medium: '0',
                high: '0'
            },
            disableAdvancedMode: this.isSubstrate,
            feeCurrentMarketPrice: null,
            disableFeeSlider: true,
            disableExchangeButton: true,
            estimatingFeeDefaults: false,
            feeLevel: {
                value: this.exchangeForm.controls.feeLevel.value,
                dirty: false
            },
            fee: {
                value: this.exchangeForm.controls.fee.value,
                dirty: false
            },
            isAdvancedMode: {
                value: this.exchangeForm.controls.isAdvancedMode.value,
                dirty: false
            },
            providerState: null,
            lastUpdated: []
        };
        this.state = this._state;
        this.updateState(this.state);
    }
    updateTransactionForm(formState) {
        const formValues = this.exchangeForm.value;
        const updated = {};
        Object.keys(formValues).forEach((key) => {
            if (key in formState && !formState[key].dirty && formState[key].value !== formValues[key]) {
                updated[key] = formState[key].value;
            }
        });
        this._ngZone.run(() => {
            this.exchangeForm.patchValue(updated, { emitEvent: false });
            Object.keys(updated).forEach((key) => {
                this.exchangeForm.controls[key].markAsDirty();
            });
        });
    }
    onStateUpdated(newState) {
        this.state = newState;
        this.updateTransactionForm({
            fee: this.state.fee,
            feeLevel: this.state.feeLevel,
            isAdvancedMode: this.state.isAdvancedMode
        });
        if (this.state.lastUpdated.includes('providerState')) {
            this.loadDataFromExchange().then(() => this.updateFeeEstimate());
        }
    }
    onChanges() {
        this.state$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["debounceTime"])(200)).subscribe((state) => {
            this.onStateUpdated(state);
        });
        this.exchangeForm
            .get('fee')
            .valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["debounceTime"])(500))
            .subscribe((value) => {
            const fee = new bignumber_js__WEBPACK_IMPORTED_MODULE_9__["BigNumber"](value);
            this.updateState({
                fee: {
                    value: fee.isNaN() ? '' : fee.toFixed(),
                    dirty: true
                }
            });
        });
        this.exchangeForm.get('feeLevel').valueChanges.subscribe((value) => {
            const fee = new bignumber_js__WEBPACK_IMPORTED_MODULE_9__["BigNumber"](this.getFeeFromLevel(value));
            this.updateState({
                fee: {
                    value: fee.toFixed(),
                    dirty: false
                },
                feeLevel: {
                    value,
                    dirty: true
                },
                disableExchangeButton: this.exchangeForm.invalid || this.amount.lte(0)
            }, false);
        });
        this.exchangeForm.get('isAdvancedMode').valueChanges.subscribe((value) => {
            this.updateState({
                isAdvancedMode: {
                    value,
                    dirty: true
                },
                disableExchangeButton: this.exchangeForm.invalid || new bignumber_js__WEBPACK_IMPORTED_MODULE_9__["BigNumber"](this.amount).lte(0)
            }, false);
        });
    }
    updateFeeEstimate() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this._state) {
                let feeCurrentMarketPrice;
                if (this.selectedFromProtocol.identifier.startsWith(_airgap_coinlib_core__WEBPACK_IMPORTED_MODULE_2__["SubProtocolSymbols"].ETH_ERC20)) {
                    feeCurrentMarketPrice = this.priceService
                        .getCurrentMarketPrice(new _airgap_coinlib_core__WEBPACK_IMPORTED_MODULE_2__["EthereumProtocol"](), 'USD')
                        .then((price) => price.toNumber());
                }
                else if (this.selectedFromProtocol.identifier.startsWith(_airgap_coinlib_core__WEBPACK_IMPORTED_MODULE_2__["SubProtocolSymbols"].RBTC_ERC20)) {
                    feeCurrentMarketPrice = this.priceService
                        .getCurrentMarketPrice(new _airgap_coinlib_core__WEBPACK_IMPORTED_MODULE_2__["RskProtocol"](), 'USD')
                        .then((price) => price.toNumber());
                }
                else {
                    feeCurrentMarketPrice = (yield this.priceService.getCurrentMarketPrice(this.selectedFromProtocol, 'USD')).toNumber();
                }
                this.updateState({
                    feeCurrentMarketPrice
                });
                this.updateState({
                    estimatingFeeDefaults: true,
                    disableFeeSlider: true,
                    disableExchangeButton: true
                });
                const feeDefaults = yield this.estimateFees().catch(() => undefined);
                const feeLevel = feeDefaults && !this.isSubstrate ? 1 : this._state.feeLevel.value;
                this.updateState({
                    estimatingFeeDefaults: false,
                    feeDefaults,
                    fee: {
                        value: new bignumber_js__WEBPACK_IMPORTED_MODULE_9__["BigNumber"](this.getFeeFromLevel(feeLevel, feeDefaults)).toFixed(),
                        dirty: false
                    },
                    feeLevel: {
                        value: feeLevel,
                        dirty: false
                    },
                    disableFeeSlider: !feeDefaults,
                    disableExchangeButton: !feeDefaults || this.exchangeForm.invalid || this.amount.lte(0)
                });
            }
        });
    }
    estimateFees(amount) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this.exchangeProvider.estimateFee(this.fromWallet, this.toWallet, (amount !== null && amount !== void 0 ? amount : this.amount).toString(), this.state.providerState);
        });
    }
    getFeeFromLevel(feeLevel, feeDefaults) {
        const defaults = feeDefaults || this._state.feeDefaults;
        switch (feeLevel) {
            case 0:
                return defaults.low;
            case 1:
                return defaults.medium;
            case 2:
                return defaults.high;
            default:
                return defaults.medium;
        }
    }
    filterSupportedProtocols(protocols, filterZeroBalance = true) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const result = protocols.filter((supportedProtocol) => this.walletList.some((wallet) => wallet.protocol.identifier === supportedProtocol &&
                (!filterZeroBalance || (filterZeroBalance && wallet.currentBalance.isGreaterThan(0)))));
            const tzbtcIndex = result.indexOf(_airgap_coinlib_core__WEBPACK_IMPORTED_MODULE_2__["SubProtocolSymbols"].XTZ_BTC);
            if (tzbtcIndex !== -1 &&
                !this.walletList.some((wallet) => wallet.protocol.identifier === _airgap_coinlib_core__WEBPACK_IMPORTED_MODULE_2__["MainProtocolSymbols"].BTC)) {
                result.splice(tzbtcIndex, 1);
            }
            return result;
        });
    }
    setup() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.activeExchange$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["first"])()).toPromise();
            const fromProtocols = yield this.getSupportedFromProtocols();
            if (fromProtocols.length === 0) {
                this.supportedProtocolsFrom = [];
                this.supportedProtocolsTo = [];
                this.selectedFromProtocol = undefined;
                this.selectedToProtocol = undefined;
                this.exchangePageState = ExchangePageState.NOT_ENOUGH_CURRENCIES;
                throw new Error('could not set up exchange');
            }
            this.supportedProtocolsFrom = fromProtocols;
            let currentFromProtocol;
            if (this.selectedFromProtocol !== undefined && this.supportedProtocolsFrom.includes(this.selectedFromProtocol.identifier)) {
                currentFromProtocol = this.selectedFromProtocol.identifier;
            }
            else {
                currentFromProtocol = fromProtocols[0];
            }
            yield this.setFromProtocol(yield this.protocolService.getProtocol(currentFromProtocol));
            if (this.exchangePageState === ExchangePageState.LOADING) {
                const hasShownOnboarding = yield this.storageProvider.get(_services_storage_storage__WEBPACK_IMPORTED_MODULE_17__["WalletStorageKey"].EXCHANGE_INTEGRATION);
                if (!hasShownOnboarding) {
                    this.exchangePageState = ExchangePageState.ONBOARDING;
                    return;
                }
            }
            if (this.supportedProtocolsFrom.length > 0 && this.supportedProtocolsTo.length > 0) {
                this.exchangePageState = ExchangePageState.EXCHANGE;
            }
        });
    }
    showLoadingErrorAlert() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const faultyExchange = this.activeExchange;
            this.exchangeProvider.switchActiveExchange();
            const newExchange = this.activeExchange;
            this.setup() // setup new exchange
                .then(() => this.switchExchange(faultyExchange, newExchange))
                .then(() => {
                this.onChanges();
            })
                .catch(() => this.displaySetupFail());
        });
    }
    switchExchange(faultyExchange, newExchange) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                header: this.translateService.instant('exchange.loading.setup'),
                message: `${faultyExchange} could currently not be loaded, switched to ${newExchange}`,
                backdropDismiss: false,
                buttons: [
                    {
                        text: 'ok',
                        role: 'cancel'
                    }
                ]
            });
            this.disableExchangeSelection = true; // temporarily disable user to switch to exchange for which loading error occured
            alert.present().catch(Object(_services_sentry_error_handler_sentry_error_handler__WEBPACK_IMPORTED_MODULE_16__["handleErrorSentry"])(_services_sentry_error_handler_sentry_error_handler__WEBPACK_IMPORTED_MODULE_16__["ErrorCategory"].IONIC_ALERT));
        });
    }
    displaySetupFail() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                header: this.translateService.instant('exchange.loading.setup'),
                message: this.translateService.instant('exchange.loading.message'),
                backdropDismiss: false,
                buttons: [
                    {
                        text: 'ok',
                        role: 'cancel'
                    }
                ]
            });
            alert.present().catch(Object(_services_sentry_error_handler_sentry_error_handler__WEBPACK_IMPORTED_MODULE_16__["handleErrorSentry"])(_services_sentry_error_handler_sentry_error_handler__WEBPACK_IMPORTED_MODULE_16__["ErrorCategory"].IONIC_ALERT));
        });
    }
    getSupportedFromProtocols() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const allFromProtocols = yield this.exchangeProvider.getAvailableFromCurrencies();
            allFromProtocols.push(_airgap_coinlib_core__WEBPACK_IMPORTED_MODULE_2__["SubProtocolSymbols"].XTZ_BTC);
            const supportedFromProtocols = yield this.filterSupportedProtocols(allFromProtocols);
            const exchangeableFromProtocols = (yield Promise.all(supportedFromProtocols.map((fromProtocol) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                if (fromProtocol === _airgap_coinlib_core__WEBPACK_IMPORTED_MODULE_2__["SubProtocolSymbols"].XTZ_BTC) {
                    return fromProtocol;
                }
                const availableToCurrencies = yield this.exchangeProvider.getAvailableToCurrenciesForCurrency(fromProtocol);
                return availableToCurrencies.length > 0 ? fromProtocol : undefined;
            })))).filter((fromProtocol) => fromProtocol !== undefined);
            return exchangeableFromProtocols;
        });
    }
    getSupportedToProtocols(from) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (from === _airgap_coinlib_core__WEBPACK_IMPORTED_MODULE_2__["SubProtocolSymbols"].XTZ_BTC) {
                return this.filterSupportedProtocols([_airgap_coinlib_core__WEBPACK_IMPORTED_MODULE_2__["MainProtocolSymbols"].BTC], false);
            }
            const toProtocols = yield this.exchangeProvider.getAvailableToCurrenciesForCurrency(from);
            if (from === _airgap_coinlib_core__WEBPACK_IMPORTED_MODULE_2__["MainProtocolSymbols"].BTC) {
                toProtocols.push(_airgap_coinlib_core__WEBPACK_IMPORTED_MODULE_2__["SubProtocolSymbols"].XTZ_BTC);
            }
            return this.filterSupportedProtocols(toProtocols, false);
        });
    }
    setFromProtocol(protocol) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.selectedFromProtocol = protocol;
            this.supportedProtocolsTo = yield this.getSupportedToProtocols(protocol.identifier);
            if (this.supportedProtocolsTo.length === 0) {
                this.supportedProtocolsFrom = [];
                this.supportedProtocolsTo = [];
                this.selectedFromProtocol = undefined;
                this.selectedToProtocol = undefined;
                this.exchangePageState = ExchangePageState.NOT_ENOUGH_CURRENCIES;
                return;
            }
            if (this.selectedToProtocol === undefined ||
                this.selectedFromProtocol.identifier === this.selectedToProtocol.identifier ||
                !this.supportedProtocolsTo.includes(this.selectedToProtocol.identifier)) {
                const toProtocol = yield this.protocolService.getProtocol(this.supportedProtocolsTo[0]);
                this.selectedToProtocol = toProtocol;
                this.loadWalletsForSelectedToProtocol();
            }
            this.loadWalletsForSelectedFromProtocol();
            this.loadDataFromExchange();
            // TODO: this is needed to update the amount in the portfolio-item component, need to find a better way to do this.
            this.accountProvider.triggerWalletChanged();
            this.updateFeeEstimate();
        });
    }
    setToProtocol(protocol) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.selectedToProtocol = protocol;
            this.loadWalletsForSelectedToProtocol();
            this.loadDataFromExchange();
            // TODO: this is needed to update the amount in the portfolio-item component, need to find a better way to do this.
            this.accountProvider.triggerWalletChanged();
        });
    }
    loadWalletsForSelectedFromProtocol() {
        this.supportedFromWallets = this.walletsForProtocol(this.selectedFromProtocol.identifier, true);
        // Only set wallet if it's another protocol or not available
        if (this.shouldReplaceActiveWallet(this.fromWallet, this.supportedFromWallets)) {
            this.fromWallet = this.supportedFromWallets[0];
        }
    }
    loadWalletsForSelectedToProtocol() {
        this.supportedToWallets = this.walletsForProtocol(this.selectedToProtocol.identifier, false);
        this.toWallet = this.supportedToWallets[0];
        // Only set wallet if it's another protocol or not available
        if (this.shouldReplaceActiveWallet(this.toWallet, this.supportedToWallets)) {
            this.toWallet = this.supportedToWallets[0];
        }
    }
    walletsForProtocol(protocol, filterZeroBalance = true) {
        return this.walletList.filter((wallet) => wallet.protocol.identifier === protocol &&
            wallet.protocol.options.network.type === _airgap_coinlib_core_utils_ProtocolNetwork__WEBPACK_IMPORTED_MODULE_3__["NetworkType"].MAINNET &&
            (!filterZeroBalance || wallet.currentBalance.isGreaterThan(0)));
    }
    shouldReplaceActiveWallet(wallet, walletArray) {
        return (!wallet ||
            wallet.protocol.identifier !== walletArray[0].protocol.identifier ||
            walletArray.every((supportedWallet) => !this.accountProvider.isSameWallet(supportedWallet, wallet)));
    }
    setFromWallet(wallet) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.fromWallet = wallet;
            this.isSubstrate =
                this.fromWallet.protocol.identifier === _airgap_coinlib_core__WEBPACK_IMPORTED_MODULE_2__["MainProtocolSymbols"].KUSAMA ||
                    this.selectedFromProtocol.identifier === _airgap_coinlib_core__WEBPACK_IMPORTED_MODULE_2__["MainProtocolSymbols"].POLKADOT;
            this.loadDataFromExchange();
            // TODO: this is needed to update the amount in the portfolio-item component, need to find a better way to do this.
            this.accountProvider.triggerWalletChanged();
        });
    }
    setToWallet(wallet) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.toWallet = wallet;
            this.loadDataFromExchange();
            // TODO: this is needed to update the amount in the portfolio-item component, need to find a better way to do this.
            this.accountProvider.triggerWalletChanged();
        });
    }
    amountSet(amount) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.amount = new bignumber_js__WEBPACK_IMPORTED_MODULE_9__["BigNumber"](amount);
            this.updateFeeEstimate();
            this.loadDataFromExchange();
        });
    }
    loadDataFromExchange() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.currentlyNotSupported = false;
            try {
                if (this.fromWallet && this.toWallet) {
                    this.minExchangeAmount = yield this.getMinAmountForCurrency();
                }
                if (this.fromWallet && this.toWallet && this.amount.isGreaterThan(0)) {
                    this.exchangeAmount = new bignumber_js__WEBPACK_IMPORTED_MODULE_9__["BigNumber"](yield this.getExchangeAmount());
                }
                else {
                    this.exchangeAmount = new bignumber_js__WEBPACK_IMPORTED_MODULE_9__["BigNumber"](0);
                }
            }
            catch (error) {
                this.currentlyNotSupported = true;
            }
        });
    }
    getMinAmountForCurrency() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.isTZBTCExchange) {
                return new bignumber_js__WEBPACK_IMPORTED_MODULE_9__["BigNumber"](0);
            }
            return new bignumber_js__WEBPACK_IMPORTED_MODULE_9__["BigNumber"](yield this.exchangeProvider.getMinAmountForCurrency(this.fromWallet.protocol.identifier, this.toWallet.protocol.identifier));
        });
    }
    getExchangeAmount() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.isTZBTCExchange) {
                return this.amount.toFixed();
            }
            return yield this.exchangeProvider.getExchangeAmount(this.fromWallet.protocol.identifier, this.toWallet.protocol.identifier, this.amount.toString(), this.state.providerState);
        });
    }
    startExchange() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.isTZBTCExchange) {
                this.router.navigateByUrl('/exchange-custom').catch(Object(_services_sentry_error_handler_sentry_error_handler__WEBPACK_IMPORTED_MODULE_16__["handleErrorSentry"])(_services_sentry_error_handler_sentry_error_handler__WEBPACK_IMPORTED_MODULE_16__["ErrorCategory"].STORAGE));
            }
            else {
                const loader = yield this.getAndShowLoader();
                try {
                    const transaction = yield this.exchangeProvider.createTransaction(this.fromWallet, this.toWallet, this.amount.toString(), this.state.fee.value, this.state.providerState);
                    const info = Object.assign(Object.assign({}, transaction), { fromWallet: this.fromWallet, fromCurrency: this.fromWallet.protocol.marketSymbol, toWallet: this.toWallet, toCurrency: this.toWallet.protocol.marketSymbol });
                    this.dataService.setData(_services_data_data_service__WEBPACK_IMPORTED_MODULE_13__["DataServiceKey"].EXCHANGE, info);
                    this.router.navigateByUrl('/exchange-confirm/' + _services_data_data_service__WEBPACK_IMPORTED_MODULE_13__["DataServiceKey"].EXCHANGE).catch(Object(_services_sentry_error_handler_sentry_error_handler__WEBPACK_IMPORTED_MODULE_16__["handleErrorSentry"])(_services_sentry_error_handler_sentry_error_handler__WEBPACK_IMPORTED_MODULE_16__["ErrorCategory"].STORAGE));
                    const txId = transaction.id;
                    let txStatus = (yield this.exchangeProvider.getStatus(txId)).status;
                    const exchangeTxInfo = {
                        receivingAddress: this.toWallet.addresses[0],
                        sendingAddress: this.fromWallet.addresses[0],
                        fromCurrency: this.fromWallet.protocol.identifier,
                        toCurrency: this.toWallet.protocol.identifier,
                        amountExpectedFrom: this.amount,
                        amountExpectedTo: transaction.amountExpectedTo,
                        fee: transaction.fee,
                        status: txStatus,
                        exchange: this.activeExchange,
                        id: txId,
                        timestamp: new bignumber_js__WEBPACK_IMPORTED_MODULE_9__["BigNumber"](Date.now()).toNumber()
                    };
                    this.exchangeProvider.pushExchangeTransaction(exchangeTxInfo);
                }
                catch (error) {
                    console.error(error);
                }
                finally {
                    this.hideLoader(loader);
                }
            }
        });
    }
    doRadio() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _exchange_select_exchange_select_page__WEBPACK_IMPORTED_MODULE_18__["ExchangeSelectPage"],
                componentProps: {
                    activeExchange: this.activeExchange
                }
            });
            modal.present().catch((err) => console.error(err));
            modal
                .onDidDismiss()
                .then(() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                yield this.setup();
            }))
                .catch(Object(_services_sentry_error_handler_sentry_error_handler__WEBPACK_IMPORTED_MODULE_16__["handleErrorSentry"])(_services_sentry_error_handler_sentry_error_handler__WEBPACK_IMPORTED_MODULE_16__["ErrorCategory"].IONIC_MODAL));
        });
    }
    dismissExchangeOnboarding() {
        this.setup();
        this.storageProvider.set(_services_storage_storage__WEBPACK_IMPORTED_MODULE_17__["WalletStorageKey"].EXCHANGE_INTEGRATION, true).catch(Object(_services_sentry_error_handler_sentry_error_handler__WEBPACK_IMPORTED_MODULE_16__["handleErrorSentry"])(_services_sentry_error_handler_sentry_error_handler__WEBPACK_IMPORTED_MODULE_16__["ErrorCategory"].STORAGE));
    }
    goToAddCoinPage() {
        this.router.navigateByUrl('/account-add');
    }
    getAndShowLoader() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loader = yield this.loadingController.create({
                message: 'Preparing transaction...'
            });
            yield loader.present().catch(Object(_services_sentry_error_handler_sentry_error_handler__WEBPACK_IMPORTED_MODULE_16__["handleErrorSentry"])(_services_sentry_error_handler_sentry_error_handler__WEBPACK_IMPORTED_MODULE_16__["ErrorCategory"].IONIC_LOADER));
            return loader;
        });
    }
    hideLoader(loader) {
        loader.dismiss().catch(Object(_services_sentry_error_handler_sentry_error_handler__WEBPACK_IMPORTED_MODULE_16__["handleErrorSentry"])(_services_sentry_error_handler_sentry_error_handler__WEBPACK_IMPORTED_MODULE_16__["ErrorCategory"].IONIC_LOADER));
    }
    updateState(newState, debounce = true) {
        if (!this._state) {
            return;
        }
        this._state = this.reduceState(this._state, newState);
        if (debounce) {
            this.state$.next(this._state);
        }
        else {
            this.onStateUpdated(this._state);
        }
    }
    reduceState(currentState, newState) {
        return {
            feeDefaults: newState.feeDefaults || currentState.feeDefaults,
            feeCurrentMarketPrice: newState.feeCurrentMarketPrice !== undefined ? newState.feeCurrentMarketPrice : currentState.feeCurrentMarketPrice,
            disableAdvancedMode: this.isSubstrate || (newState.disableAdvancedMode !== undefined ? newState.disableAdvancedMode : currentState.disableAdvancedMode),
            disableFeeSlider: this.isSubstrate || (newState.disableFeeSlider !== undefined ? newState.disableFeeSlider : currentState.disableFeeSlider),
            disableExchangeButton: newState.disableExchangeButton !== undefined ? newState.disableExchangeButton : currentState.disableExchangeButton,
            estimatingFeeDefaults: newState.estimatingFeeDefaults !== undefined ? newState.estimatingFeeDefaults : currentState.estimatingFeeDefaults,
            feeLevel: newState.feeLevel || currentState.feeLevel,
            fee: newState.fee || currentState.fee,
            isAdvancedMode: newState.isAdvancedMode || currentState.isAdvancedMode,
            providerState: newState.providerState !== undefined ? newState.providerState : currentState.providerState,
            lastUpdated: Object.keys(newState)
        };
    }
    ngOnDestroy() {
        this.ngDestroyed$.next();
        this.ngDestroyed$.complete();
    }
}
ExchangePage.ɵfac = function ExchangePage_Factory(t) { return new (t || ExchangePage)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_exchange_exchange__WEBPACK_IMPORTED_MODULE_14__["ExchangeProvider"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_storage_storage__WEBPACK_IMPORTED_MODULE_17__["WalletStorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_account_account_provider__WEBPACK_IMPORTED_MODULE_12__["AccountProvider"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_data_data_service__WEBPACK_IMPORTED_MODULE_13__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_7__["LoadingController"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ModalController"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_7__["AlertController"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_price_price_service__WEBPACK_IMPORTED_MODULE_15__["PriceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_airgap_angular_core__WEBPACK_IMPORTED_MODULE_1__["ProtocolService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"])); };
ExchangePage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: ExchangePage, selectors: [["page-exchange"]], decls: 14, vars: 7, consts: [[1, "ion-no-border"], ["fixed", "true", 1, "ion-no-padding"], ["slot", "start"], [4, "ngIf"], [1, "onboarding__container", "ion-padding"], ["size", "12"], [1, "ion-no-margin", 3, "innerHTML"], [1, "content--align__center-center", "ion-no-padding"], ["src", "./assets/img/token_swap.svg"], [1, "ion-no-margin", "ion-padding-bottom"], ["shape", "round", "color", "primary", "expand", "full", 3, "click"], [3, "selectedWallet", "supportedWallets", "selectedProtocol", "supportedProtocols", "exchangeAmount", "minExchangeAmount", "currentlyNotSupported", "protocolSetEmitter", "walletSetEmitter", "amountSetEmitter"], [3, "selectedWallet", "supportedWallets", "selectedProtocol", "supportedProtocols", "exchangeAmount", "swapSell", "protocolSetEmitter", "walletSetEmitter"], [1, "divider--line"], ["class", "powered__container ion-padding ion-align-items-center", 4, "ngIf"], ["class", "ion-padding-horizontal ion-padding-bottom", 4, "ngFor", "ngForOf"], [3, "state", "form", "wallet"], [1, "powered__container", "ion-padding", "ion-align-items-center"], [1, "ion-no-padding"], [1, "powered__container", "ion-align-items-center"], ["color", "blackLight"], ["src", "./assets/img/changenow_logo.svg", 4, "ngIf"], ["src", "./assets/img/changelly_logo.svg", 4, "ngIf"], ["src", "./assets/img/quipuswap_logo.svg", 4, "ngIf"], [1, "ion-no-padding", "justify--content__end"], ["fill", "clear", "color", "secondary", "size", "small", 3, "disabled", "click"], ["name", "chevron-down-outline"], ["src", "./assets/img/changenow_logo.svg"], ["src", "./assets/img/changelly_logo.svg"], ["src", "./assets/img/quipuswap_logo.svg"], [1, "ion-padding-horizontal", "ion-padding-bottom"], [3, "widget", "widgetForm"], ["vertical", "bottom", "horizontal", "end"], ["color", "primary", "shape", "round", 3, "disabled", "click"]], template: function ExchangePage_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ion-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "ion-grid", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "ion-toolbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "ion-buttons", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "ion-menu-button");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "ion-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](7, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "ion-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "ion-grid", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](10, ExchangePage_ng_container_10_Template, 13, 9, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](11, ExchangePage_ng_container_11_Template, 13, 9, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](12, ExchangePage_ng_container_12_Template, 7, 18, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](13, ExchangePage_ng_container_13_Template, 5, 4, "ng-container", 3);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](7, 5, "exchange.title"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.exchangePageState === ctx.exchangePageStates.ONBOARDING);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.exchangePageState === ctx.exchangePageStates.NOT_ENOUGH_CURRENCIES);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.exchangePageState === ctx.exchangePageStates.EXCHANGE);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.exchangePageState === ctx.exchangePageStates.EXCHANGE);
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonGrid"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonMenuButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonContent"], _angular_common__WEBPACK_IMPORTED_MODULE_19__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonRow"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonCol"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonButton"], _components_swap_swap__WEBPACK_IMPORTED_MODULE_20__["SwapComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_19__["NgForOf"], _components_fee_fee_component__WEBPACK_IMPORTED_MODULE_21__["FeeComponent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonText"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonIcon"], _components_widget_selector_widget_selector__WEBPACK_IMPORTED_MODULE_22__["WidgetSelector"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonFab"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslatePipe"]], styles: [".onboarding__container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 50vh;\n  height: 50vh;\n}\n\n.divider--line[_ngcontent-%COMP%] {\n  border-top: 1px solid rgba(var(--ion-color-primary-rgb), 0.24);\n}\n\n.powered__container[_ngcontent-%COMP%] {\n  padding-bottom: 8px;\n}\n\n.powered__container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: auto;\n  height: 24px;\n  margin-left: 8px;\n  max-width: 96px;\n}\n\nion-content[_ngcontent-%COMP%] {\n  --padding-bottom: 108px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2V4Y2hhbmdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQUFKOztBQUdBO0VBQ0UsOERBQUE7QUFBRjs7QUFFQTtFQU9FLG1CQUFBO0FBTEY7O0FBREU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQUdKOztBQUVBO0VBQ0UsdUJBQUE7QUFDRiIsImZpbGUiOiJleGNoYW5nZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm9uYm9hcmRpbmdfX2NvbnRhaW5lciB7XG4gIGltZyB7XG4gICAgd2lkdGg6IDUwdmg7XG4gICAgaGVpZ2h0OiA1MHZoO1xuICB9XG59XG4uZGl2aWRlci0tbGluZSB7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LXJnYiksIDAuMjQpO1xufVxuLnBvd2VyZWRfX2NvbnRhaW5lciB7XG4gIGltZyB7XG4gICAgd2lkdGg6IGF1dG87XG4gICAgaGVpZ2h0OiAyNHB4O1xuICAgIG1hcmdpbi1sZWZ0OiA4cHg7XG4gICAgbWF4LXdpZHRoOiA5NnB4O1xuICB9XG4gIHBhZGRpbmctYm90dG9tOiA4cHg7XG59XG5cbmlvbi1jb250ZW50IHtcbiAgLS1wYWRkaW5nLWJvdHRvbTogMTA4cHg7XG59XG4iXX0= */"] });


/***/ }),

/***/ "TA0h":
/*!*****************************************!*\
  !*** ./src/app/pages/tabs/tabs.page.ts ***!
  \*****************************************/
/*! exports provided: TabsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPage", function() { return TabsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _services_sentry_error_handler_sentry_error_handler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/sentry-error-handler/sentry-error-handler */ "hPkG");
/* harmony import */ var _services_storage_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/storage/storage */ "AFs5");
/* harmony import */ var _exchange_exchange__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../exchange/exchange */ "4HcY");
/* harmony import */ var _introduction_introduction__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../introduction/introduction */ "xWVS");
/* harmony import */ var _portfolio_portfolio__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../portfolio/portfolio */ "fOEu");
/* harmony import */ var _scan_scan__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../scan/scan */ "XvSo");
/* harmony import */ var _settings_settings__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../settings/settings */ "ipgs");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");














function TabsPage_ion_tab_bar_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "ion-tab-bar", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "ion-tab-button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](2, "ion-icon", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "ion-tab-button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](7, "ion-icon", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](8, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](10, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](11, "ion-tab-button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](12, "ion-icon", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](13, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](15, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](16, "ion-tab-button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](17, "ion-icon", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](18, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](20, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](5, 4, "tabs.wallets"));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](10, 6, "tabs.scan"));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](15, 8, "tabs.exchange"));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](20, 10, "tabs.settings"));
} }
class TabsPage {
    constructor(modalController, storageProvider, platform) {
        this.modalController = modalController;
        this.storageProvider = storageProvider;
        this.platform = platform;
        this.tab1Root = _portfolio_portfolio__WEBPACK_IMPORTED_MODULE_6__["PortfolioPage"];
        this.tab2Root = _scan_scan__WEBPACK_IMPORTED_MODULE_7__["ScanPage"];
        this.tab3Root = _exchange_exchange__WEBPACK_IMPORTED_MODULE_4__["ExchangePage"];
        this.tab4Root = _settings_settings__WEBPACK_IMPORTED_MODULE_8__["SettingsPage"];
        this.isMobile = false;
        this.showIntroductions().catch(Object(_services_sentry_error_handler_sentry_error_handler__WEBPACK_IMPORTED_MODULE_2__["handleErrorSentry"])(_services_sentry_error_handler_sentry_error_handler__WEBPACK_IMPORTED_MODULE_2__["ErrorCategory"].OTHER));
        this.isMobile = this.platform.is('android') || this.platform.is('ios');
    }
    showIntroductions() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alreadyOpenByDeepLink = yield this.storageProvider.get(_services_storage_storage__WEBPACK_IMPORTED_MODULE_3__["WalletStorageKey"].DEEP_LINK);
            if (!alreadyOpenByDeepLink) {
                yield this.showWalletIntroduction().catch(console.error);
            }
        });
    }
    showWalletIntroduction() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this.showModal(_services_storage_storage__WEBPACK_IMPORTED_MODULE_3__["WalletStorageKey"].WALLET_INTRODUCTION, _introduction_introduction__WEBPACK_IMPORTED_MODULE_5__["IntroductionPage"]);
        });
    }
    showModal(settingsKey, page) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const introduction = yield this.storageProvider.get(settingsKey);
            if (!introduction) {
                return new Promise((resolve) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                    const modal = yield this.modalController.create({
                        component: page
                    });
                    modal
                        .onDidDismiss()
                        .then(() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                        yield this.storageProvider.set(settingsKey, true);
                        resolve(undefined);
                    }))
                        .catch(Object(_services_sentry_error_handler_sentry_error_handler__WEBPACK_IMPORTED_MODULE_2__["handleErrorSentry"])(_services_sentry_error_handler_sentry_error_handler__WEBPACK_IMPORTED_MODULE_2__["ErrorCategory"].IONIC_MODAL));
                    modal.present().catch(Object(_services_sentry_error_handler_sentry_error_handler__WEBPACK_IMPORTED_MODULE_2__["handleErrorSentry"])(_services_sentry_error_handler_sentry_error_handler__WEBPACK_IMPORTED_MODULE_2__["ErrorCategory"].IONIC_MODAL));
                }));
            }
            else {
                return Promise.resolve();
            }
        });
    }
    tabChange(tabsRef) {
        this.activeTab = tabsRef.outlet.activatedView.element;
    }
    ionViewWillEnter() {
        this.propagateToActiveTab('ionViewWillEnter');
    }
    propagateToActiveTab(eventName) {
        if (this.activeTab) {
            this.activeTab.dispatchEvent(new CustomEvent(eventName));
        }
    }
}
TabsPage.ɵfac = function TabsPage_Factory(t) { return new (t || TabsPage)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ModalController"]), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_services_storage_storage__WEBPACK_IMPORTED_MODULE_3__["WalletStorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["Platform"])); };
TabsPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({ type: TabsPage, selectors: [["app-tabs"]], decls: 3, vars: 1, consts: [[3, "ionTabsDidChange"], ["tabs", ""], ["slot", "bottom", 4, "ngIf"], ["slot", "bottom"], ["tab", "portfolio"], ["name", "list-outline"], ["tab", "scan"], ["name", "barcode-outline"], ["tab", "exchange"], ["name", "repeat-outline"], ["tab", "settings"], ["name", "settings-outline"]], template: function TabsPage_Template(rf, ctx) { if (rf & 1) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "ion-tabs", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ionTabsDidChange", function TabsPage_Template_ion_tabs_ionTabsDidChange_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r2); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](1); return ctx.tabChange(_r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](2, TabsPage_ion_tab_bar_2_Template, 21, 12, "ion-tab-bar", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.isMobile);
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonTabs"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonTabBar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonTabButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonLabel"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__["TranslatePipe"]], styles: ["ion-tab-button[_ngcontent-%COMP%] {\n  font-weight: 500;\n  --color-selected: var(--ion-color-secondary);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3RhYnMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7RUFDQSw0Q0FBQTtBQUNGIiwiZmlsZSI6InRhYnMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRhYi1idXR0b24ge1xuICBmb250LXdlaWdodDogNTAwO1xuICAtLWNvbG9yLXNlbGVjdGVkOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbn1cbiJdfQ== */"] });


/***/ }),

/***/ "XvSo":
/*!************************************!*\
  !*** ./src/app/pages/scan/scan.ts ***!
  \************************************/
/*! exports provided: ScanPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScanPage", function() { return ScanPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _airgap_angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @airgap/angular-core */ "138U");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _zxing_ngx_scanner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @zxing/ngx-scanner */ "IyRd");
/* harmony import */ var src_app_services_iac_iac_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/iac/iac.service */ "wTY4");
/* harmony import */ var _services_sentry_error_handler_sentry_error_handler__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/sentry-error-handler/sentry-error-handler */ "hPkG");
/* harmony import */ var _scan_base_scan_base__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../scan-base/scan-base */ "AffV");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _pipes_percentage_percentage_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../pipes/percentage/percentage.pipe */ "c6WW");




// import { Router } from '@angular/router'













const _c0 = ["scanner"];
function ScanPage_ion_text_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ion-text", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "percentage");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 1, ctx_r0.percentageScanned));
} }
function ScanPage_ng_container_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 1, "scan.text"));
} }
function ScanPage_ng_container_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 1, "scan.multi-qr_text"));
} }
function ScanPage_ion_progress_bar_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "ion-progress-bar", 20);
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", ctx_r3.percentageScanned);
} }
const _c1 = function () { return ["QR_CODE"]; };
function ScanPage_zxing_scanner_20_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "zxing-scanner", 21, 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("scanSuccess", function ScanPage_zxing_scanner_20_Template_zxing_scanner_scanSuccess_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r6.checkScan($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formats", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](3, _c1))("timeBetweenScans", 0)("delayBetweenScanSuccess", 0);
} }
class ScanPage extends _scan_base_scan_base__WEBPACK_IMPORTED_MODULE_8__["ScanBasePage"] {
    constructor(platform, scanner, permissionsProvider, iacService, ngZone) {
        super(platform, scanner, permissionsProvider);
        this.platform = platform;
        this.scanner = scanner;
        this.permissionsProvider = permissionsProvider;
        this.iacService = iacService;
        this.ngZone = ngZone;
        this.percentageScanned = 0;
        this.parts = new Set();
        this.isMultiQr = false;
    }
    ionViewWillEnter() {
        const _super = Object.create(null, {
            ionViewWillEnter: { get: () => super.ionViewWillEnter }
        });
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield _super.ionViewWillEnter.call(this);
            this.resetScannerPage();
            this.iacService.resetHandlers();
        });
    }
    resetScannerPage() {
        this.parts = new Set();
        this.percentageScanned = 0;
        this.isMultiQr = false;
        this.iacService.resetHandlers();
    }
    checkScan(data) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const sizeBefore = this.parts.size;
            this.parts.add(data);
            if (sizeBefore === this.parts.size) {
                // We scanned a string we already have in our cache, ignoring it and starting scan again.
                this.startScan();
                return undefined;
            }
            this.ngZone.run(() => {
                this.iacService
                    .handleRequest(data, _airgap_angular_core__WEBPACK_IMPORTED_MODULE_1__["IACMessageTransport"].QR_SCANNER, (progress) => {
                    this.isMultiQr = true;
                    this.percentageScanned = progress !== null && progress !== void 0 ? progress : 0;
                    this.startScan();
                })
                    .catch(Object(_services_sentry_error_handler_sentry_error_handler__WEBPACK_IMPORTED_MODULE_7__["handleErrorSentry"])(_services_sentry_error_handler_sentry_error_handler__WEBPACK_IMPORTED_MODULE_7__["ErrorCategory"].SCHEME_ROUTING));
            });
        });
    }
    ionViewWillLeave() {
        super.ionViewWillLeave();
        this.resetScannerPage();
    }
}
ScanPage.ɵfac = function ScanPage_Factory(t) { return new (t || ScanPage)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_airgap_angular_core__WEBPACK_IMPORTED_MODULE_1__["QrScannerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_airgap_angular_core__WEBPACK_IMPORTED_MODULE_1__["PermissionsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_iac_iac_service__WEBPACK_IMPORTED_MODULE_6__["IACService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"])); };
ScanPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: ScanPage, selectors: [["page-scan"]], viewQuery: function ScanPage_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.zxingScanner = _t.first);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵProvidersFeature"]([_angular_common__WEBPACK_IMPORTED_MODULE_2__["PercentPipe"]]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]], decls: 29, vars: 18, consts: [[1, "ion-no-border"], ["fixed", "true", 1, "ion-no-padding"], ["slot", "start"], ["defaultHref", "/"], ["slot", "end", "class", "ion-padding-end", 4, "ngIf"], ["forceOverscroll", "false"], ["color", "secondary"], [1, "ion-padding", "ion-no-margin"], [4, "ngIf"], ["style", "height: 8px", "color", "secondary", 3, "value", 4, "ngIf"], [1, "row--height__100", "ion-justify-content-center", "ion-align-items-center", 3, "hidden"], [1, "guides--container", "content--align__center-center"], ["src", "./assets/img/qr_code_guides.svg", 1, "guides--container__img"], [3, "formats", "timeBetweenScans", "delayBetweenScanSuccess", "scanSuccess", 4, "ngIf"], [1, "row--height__100", "ion-justify-content-center", "ion-align-items-center", 3, "hidden", "click"], [1, "ion-text-center"], ["src", "./assets/img/permission_onboarding_camera.svg"], [1, "ion-padding-horizontal", 3, "innerHTML"], ["shape", "round", "color", "primary"], ["slot", "end", 1, "ion-padding-end"], ["color", "secondary", 2, "height", "8px", 3, "value"], [3, "formats", "timeBetweenScans", "delayBetweenScanSuccess", "scanSuccess"], ["scanner", ""]], template: function ScanPage_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ion-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "ion-grid", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "ion-toolbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "ion-buttons", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "ion-menu-button");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "ion-back-button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "ion-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](8, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, ScanPage_ion_text_9_Template, 3, 3, "ion-text", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "ion-content", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "ion-grid", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "ion-text", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](14, ScanPage_ng_container_14_Template, 3, 3, "ng-container", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](15, ScanPage_ng_container_15_Template, 3, 3, "ng-container", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](16, ScanPage_ion_progress_bar_16_Template, 1, 1, "ion-progress-bar", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "ion-row", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "ion-col", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](19, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](20, ScanPage_zxing_scanner_20_Template, 2, 4, "zxing-scanner", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "ion-row", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ScanPage_Template_ion_row_click_21_listener() { return ctx.requestPermission(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "ion-col", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](23, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](24, "h3", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](25, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "ion-button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](28, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](8, 12, "scan.title"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isMultiQr);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("transparent", ctx.hasCameraPermission);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.isMultiQr);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isMultiQr);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isMultiQr);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("hidden", !ctx.hasCameraPermission);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isBrowser || ctx.isElectron);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("hidden", ctx.hasCameraPermission);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](25, 14, "scan.empty-state_heading"), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](28, 16, "scan.grant-permission_label"));
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonGrid"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonMenuButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonBackButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonBackButtonDelegate"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonTitle"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonText"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonRow"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonCol"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonProgressBar"], _zxing_ngx_scanner__WEBPACK_IMPORTED_MODULE_5__["ZXingScannerComponent"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslatePipe"], _pipes_percentage_percentage_pipe__WEBPACK_IMPORTED_MODULE_10__["PercentagePipe"]], styles: ["[_ngcontent-%COMP%]:root {\n  \n  --ion-color-primary: #00e8cc;\n  --ion-color-primary-rgb: 0, 232, 204;\n  --ion-color-primary-contrast: #311b58;\n  --ion-color-primary-contrast-rgb: 49, 27, 88;\n  --ion-color-primary-shade: #00ccb4;\n  --ion-color-primary-tint: #1aead1;\n  \n  --ion-color-secondary: #311b58;\n  --ion-color-secondary-rgb: 49, 27, 88;\n  --ion-color-secondary-contrast: #00e8cc;\n  --ion-color-secondary-contrast-rgb: 0, 232, 204;\n  --ion-color-secondary-shade: #2b184d;\n  --ion-color-secondary-tint: #463269;\n  \n  --ion-color-tertiary: #7044ff;\n  --ion-color-tertiary-rgb: 112, 68, 255;\n  --ion-color-tertiary-contrast: #ffffff;\n  --ion-color-tertiary-contrast-rgb: 255, 255, 255;\n  --ion-color-tertiary-shade: #633ce0;\n  --ion-color-tertiary-tint: #7e57ff;\n  \n  --ion-color-success: #10dc60;\n  --ion-color-success-rgb: 16, 220, 96;\n  --ion-color-success-contrast: #ffffff;\n  --ion-color-success-contrast-rgb: 255, 255, 255;\n  --ion-color-success-shade: #0ec254;\n  --ion-color-success-tint: #28e070;\n  \n  --ion-color-warning: #ffce00;\n  --ion-color-warning-rgb: 255, 206, 0;\n  --ion-color-warning-contrast: #ffffff;\n  --ion-color-warning-contrast-rgb: 255, 255, 255;\n  --ion-color-warning-shade: #e0b500;\n  --ion-color-warning-tint: #ffd31a;\n  \n  --ion-color-danger: #f04141;\n  --ion-color-danger-rgb: 245, 61, 61;\n  --ion-color-danger-contrast: #ffffff;\n  --ion-color-danger-contrast-rgb: 255, 255, 255;\n  --ion-color-danger-shade: #d33939;\n  --ion-color-danger-tint: #f25454;\n  \n  --ion-color-dark: #222428;\n  --ion-color-dark-rgb: 34, 34, 34;\n  --ion-color-dark-contrast: #ffffff;\n  --ion-color-dark-contrast-rgb: 255, 255, 255;\n  --ion-color-dark-shade: #1e2023;\n  --ion-color-dark-tint: #383a3e;\n  \n  --ion-color-medium: #989aa2;\n  --ion-color-medium-rgb: 152, 154, 162;\n  --ion-color-medium-contrast: #ffffff;\n  --ion-color-medium-contrast-rgb: 255, 255, 255;\n  --ion-color-medium-shade: #86888f;\n  --ion-color-medium-tint: #a2a4ab;\n  \n  --ion-color-light: #f4f4f4;\n  --ion-color-light-rgb: 244, 244, 244;\n  --ion-color-light-contrast: #000000;\n  --ion-color-light-contrast-rgb: 0, 0, 0;\n  --ion-color-light-shade: #d7d8da;\n  --ion-color-light-tint: #f5f6f9;\n  \n  --ion-color-secondaryLight: #440094;\n  --ion-color-secondaryLight-rgb: 68, 0, 148;\n  --ion-color-secondaryLight-contrast: #ffffff;\n  --ion-color-secondaryLight-contrast-rgb: 255, 255, 255;\n  --ion-color-secondaryLight-shade: #3c0082;\n  --ion-color-secondaryLight-tint: #571a9f;\n  \n  --ion-color-gray: #d3d3d3;\n  --ion-color-gray-rgb: 211, 211, 211;\n  --ion-color-gray-contrast: #000;\n  --ion-color-gray-contrast-rgb: 255, 255, 255;\n  --ion-color-gray-shade: #bababa;\n  --ion-color-gray-tint: #d7d7d7;\n  \n  --ion-color-grayLight: #f4f4f4;\n  --ion-color-grayLight-rgb: 244, 244, 244;\n  --ion-color-grayLight-contrast: #000;\n  --ion-color-grayLight-contrast-rgb: 255, 255, 255;\n  --ion-color-grayLight-shade: #d7d7d7;\n  --ion-color-grayLight-tint: #f5f5f5;\n  \n  \n  \n  \n  \n}\n[_ngcontent-%COMP%]:root   ion-title[_ngcontent-%COMP%] {\n  --color: var(--ion-color-secondary);\n}\n[_ngcontent-%COMP%]:root   ion-back-button[_ngcontent-%COMP%] {\n  --icon-margin-end: 0;\n  --color: var(--ion-color-secondary);\n}\n[_ngcontent-%COMP%]:root   ion-button[_ngcontent-%COMP%] {\n  --border-width: 1px;\n  --padding-start: 1.5rem;\n  --padding-end: 1.5rem;\n}\n[_ngcontent-%COMP%]:root   ion-toolbar[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%] {\n  --padding-start: 0.5rem;\n  --padding-end: 0.5rem;\n}\n[_ngcontent-%COMP%]:root   ion-alert[_ngcontent-%COMP%] {\n  --max-width: calc(100% - 32px);\n}\n[_ngcontent-%COMP%]:root   page-exchange[_ngcontent-%COMP%]   .button-small[_ngcontent-%COMP%] {\n  --padding-start: 0;\n  --padding-end: 0;\n  margin: 0;\n}\n[_ngcontent-%COMP%]:root   ion-split-pane[_ngcontent-%COMP%] {\n  --side-max-width: 10vw;\n}\n.ion-color-white[_ngcontent-%COMP%] {\n  --ion-color-base: #fff;\n  --ion-color-base-rgb: 255, 255, 255;\n  --ion-color-contrast: #000;\n  --ion-color-contrast-rgb: 0, 0, 0;\n  --ion-color-shade: #e0e0e0;\n  --ion-color-tint: #ffffff;\n}\n.ion-color-black[_ngcontent-%COMP%] {\n  --ion-color-base: #000;\n  --ion-color-base-rgb: 0, 0, 0;\n  --ion-color-contrast: #000;\n  --ion-color-contrast-rgb: 255, 255, 255;\n  --ion-color-shade: #5ca56c;\n  --ion-color-tint: #78c288;\n}\n.ion-color-whiteLight[_ngcontent-%COMP%] {\n  --ion-color-base: #311b58;\n  --ion-color-base-rgb: 49, 27, 88;\n  --ion-color-contrast: #ffffff;\n  --ion-color-contrast-rgb: 255, 255, 255;\n  --ion-color-shade: #2b184d;\n  --ion-color-tint: #463269;\n}\n.ion-color-blackLight[_ngcontent-%COMP%] {\n  --ion-color-base: rgba(0, 0, 0, 0.54);\n  --ion-color-base-rgb: 49, 27, 88;\n  --ion-color-contrast: #ffffff;\n  --ion-color-contrast-rgb: 255, 255, 255;\n  --ion-color-shade: #5ca56c;\n  --ion-color-tint: #78c288;\n}\n.ion-color-grayLight[_ngcontent-%COMP%] {\n  --ion-color-base: #f4f4f4;\n  --ion-color-base-rgb: 0, 0, 0;\n  --ion-color-contrast: #000;\n  --ion-color-contrast-rgb: 255, 255, 255;\n  --ion-color-shade: #5ca56c;\n  --ion-color-tint: #78c288;\n}\nion-avatar[_ngcontent-%COMP%] {\n  min-width: 48px;\n  min-height: 48px;\n}\npage-account-address[_ngcontent-%COMP%]   identicon[_ngcontent-%COMP%], page-account-address[_ngcontent-%COMP%]   identicon[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], page-account-address[_ngcontent-%COMP%]   ion-avatar[_ngcontent-%COMP%] {\n  width: 64px;\n  height: 64px;\n}\nportfolio-item[_ngcontent-%COMP%]   div[slot=end][_ngcontent-%COMP%] {\n  margin-inline-start: 8px;\n}\npage-portfolio[_ngcontent-%COMP%]   portfolio-item[_ngcontent-%COMP%]   div[slot=end][_ngcontent-%COMP%] {\n  margin-inline-end: 0;\n}\n.item__image[slot=start][_ngcontent-%COMP%] {\n  margin: 8px 16px 8px 0;\n}\nion-content[_ngcontent-%COMP%] {\n  --background: none transparent;\n}\n.transparent[_ngcontent-%COMP%] {\n  background: none !important;\n}\np[_ngcontent-%COMP%] {\n  background: var(--ion-color-primary);\n}\n.row--height__100[_ngcontent-%COMP%] {\n  height: calc(100% - 48px);\n}\n.row--height__100[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 45vh;\n}\n.guides--container[_ngcontent-%COMP%] {\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  top: 0;\n  left: 0;\n}\n.guides--container[_ngcontent-%COMP%]   .guides--container__img[_ngcontent-%COMP%] {\n  width: 60%;\n  max-width: 400px;\n  margin-top: 3em;\n  max-height: 50%;\n}\nion-grid[_ngcontent-%COMP%] {\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3RoZW1lL3ZhcmlhYmxlcy5zY3NzIiwiLi4vLi4vLi4vLi4vc2Nhbi5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBLDBCQUFBO0FBQ0E7RUFDRSxjQUFBO0VBQ0EsNEJBQUE7RUFDQSxvQ0FBQTtFQUNBLHFDQUFBO0VBQ0EsNENBQUE7RUFDQSxrQ0FBQTtFQUNBLGlDQUFBO0VBRUEsZ0JBQUE7RUFDQSw4QkFBQTtFQUNBLHFDQUFBO0VBQ0EsdUNBQUE7RUFDQSwrQ0FBQTtFQUNBLG9DQUFBO0VBQ0EsbUNBQUE7RUFFQSxlQUFBO0VBQ0EsNkJBQUE7RUFDQSxzQ0FBQTtFQUNBLHNDQUFBO0VBQ0EsZ0RBQUE7RUFDQSxtQ0FBQTtFQUNBLGtDQUFBO0VBRUEsY0FBQTtFQUNBLDRCQUFBO0VBQ0Esb0NBQUE7RUFDQSxxQ0FBQTtFQUNBLCtDQUFBO0VBQ0Esa0NBQUE7RUFDQSxpQ0FBQTtFQUVBLGNBQUE7RUFDQSw0QkFBQTtFQUNBLG9DQUFBO0VBQ0EscUNBQUE7RUFDQSwrQ0FBQTtFQUNBLGtDQUFBO0VBQ0EsaUNBQUE7RUFFQSxhQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQ0FBQTtFQUNBLG9DQUFBO0VBQ0EsOENBQUE7RUFDQSxpQ0FBQTtFQUNBLGdDQUFBO0VBRUEsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxrQ0FBQTtFQUNBLDRDQUFBO0VBQ0EsK0JBQUE7RUFDQSw4QkFBQTtFQUVBLGFBQUE7RUFDQSwyQkFBQTtFQUNBLHFDQUFBO0VBQ0Esb0NBQUE7RUFDQSw4Q0FBQTtFQUNBLGlDQUFBO0VBQ0EsZ0NBQUE7RUFFQSxZQUFBO0VBQ0EsMEJBQUE7RUFDQSxvQ0FBQTtFQUNBLG1DQUFBO0VBQ0EsdUNBQUE7RUFDQSxnQ0FBQTtFQUNBLCtCQUFBO0VBRUEsc0JBQUE7RUFDQSxtQ0FBQTtFQUNBLDBDQUFBO0VBQ0EsNENBQUE7RUFDQSxzREFBQTtFQUNBLHlDQUFBO0VBQ0Esd0NBQUE7RUFFQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxtQ0FBQTtFQUNBLCtCQUFBO0VBQ0EsNENBQUE7RUFDQSwrQkFBQTtFQUNBLDhCQUFBO0VBRUEsaUJBQUE7RUFDQSw4QkFBQTtFQUNBLHdDQUFBO0VBQ0Esb0NBQUE7RUFDQSxpREFBQTtFQUNBLG9DQUFBO0VBQ0EsbUNBQUE7RUFFQSw2Q0FBQTtFQUtBLHNFQUFBO0VBTUEsZ0VBQUE7RUFPQSwrREFBQTtFQVVBLDRDQUFBO0FDdENGO0FEV0U7RUFDRSxtQ0FBQTtBQ1RKO0FEYUU7RUFDRSxvQkFBQTtFQUNBLG1DQUFBO0FDWEo7QURlRTtFQUNFLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxxQkFBQTtBQ2JKO0FEaUJFO0VBQ0UsdUJBQUE7RUFDQSxxQkFBQTtBQ2ZKO0FEa0JFO0VBQ0UsOEJBQUE7QUNoQko7QURxQkk7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsU0FBQTtBQ25CTjtBRHVCRTtFQUNFLHNCQUFBO0FDckJKO0FEeUJBO0VBQ0Usc0JBQUE7RUFDQSxtQ0FBQTtFQUNBLDBCQUFBO0VBQ0EsaUNBQUE7RUFDQSwwQkFBQTtFQUNBLHlCQUFBO0FDdEJGO0FEeUJBO0VBQ0Usc0JBQUE7RUFDQSw2QkFBQTtFQUNBLDBCQUFBO0VBQ0EsdUNBQUE7RUFDQSwwQkFBQTtFQUNBLHlCQUFBO0FDdEJGO0FEeUJBO0VBQ0UseUJBQUE7RUFDQSxnQ0FBQTtFQUNBLDZCQUFBO0VBQ0EsdUNBQUE7RUFDQSwwQkFBQTtFQUNBLHlCQUFBO0FDdEJGO0FEeUJBO0VBQ0UscUNBQUE7RUFDQSxnQ0FBQTtFQUNBLDZCQUFBO0VBQ0EsdUNBQUE7RUFDQSwwQkFBQTtFQUNBLHlCQUFBO0FDdEJGO0FEeUJBO0VBQ0UseUJBQUE7RUFDQSw2QkFBQTtFQUNBLDBCQUFBO0VBQ0EsdUNBQUE7RUFDQSwwQkFBQTtFQUNBLHlCQUFBO0FDdEJGO0FEeUJBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FDdEJGO0FEMEJFOzs7RUFHRSxXQUFBO0VBQ0EsWUFBQTtBQ3ZCSjtBRDRCRTtFQUNFLHdCQUFBO0FDekJKO0FEOEJJO0VBQ0Usb0JBQUE7QUMzQk47QURnQ0E7RUFDRSxzQkFBQTtBQzdCRjtBQXpMQTtFQUNFLDhCQUFBO0FBNExGO0FBekxBO0VBQ0UsMkJBQUE7QUE0TEY7QUF6TEE7RUFDRSxvQ0FBQTtBQTRMRjtBQXpMQTtFQUNFLHlCQUFBO0FBNExGO0FBM0xFO0VBQ0UsWUFBQTtBQTZMSjtBQTFMQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtBQTZMRjtBQTVMRTtFQUNFLFVBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0FBOExKO0FBMUxBO0VBQ0UsWUFBQTtBQTZMRjtBQTFMQTs7Ozs7O0NBQUEiLCJmaWxlIjoic2Nhbi5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW9uaWMgVmFyaWFibGVzIGFuZCBUaGVtaW5nLiBGb3IgbW9yZSBpbmZvLCBwbGVhc2Ugc2VlOlxuLy8gaHR0cDovL2lvbmljZnJhbWV3b3JrLmNvbS9kb2NzL3RoZW1pbmcvXG5cbi8qKiBJb25pYyBDU1MgVmFyaWFibGVzICoqL1xuOnJvb3Qge1xuICAvKiogcHJpbWFyeSAqKi9cbiAgLS1pb24tY29sb3ItcHJpbWFyeTogIzAwZThjYztcbiAgLS1pb24tY29sb3ItcHJpbWFyeS1yZ2I6IDAsIDIzMiwgMjA0O1xuICAtLWlvbi1jb2xvci1wcmltYXJ5LWNvbnRyYXN0OiAjMzExYjU4O1xuICAtLWlvbi1jb2xvci1wcmltYXJ5LWNvbnRyYXN0LXJnYjogNDksIDI3LCA4ODtcbiAgLS1pb24tY29sb3ItcHJpbWFyeS1zaGFkZTogIzAwY2NiNDtcbiAgLS1pb24tY29sb3ItcHJpbWFyeS10aW50OiAjMWFlYWQxO1xuXG4gIC8qKiBzZWNvbmRhcnkgKiovXG4gIC0taW9uLWNvbG9yLXNlY29uZGFyeTogIzMxMWI1ODtcbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5LXJnYjogNDksIDI3LCA4ODtcbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5LWNvbnRyYXN0OiAjMDBlOGNjO1xuICAtLWlvbi1jb2xvci1zZWNvbmRhcnktY29udHJhc3QtcmdiOiAwLCAyMzIsIDIwNDtcbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5LXNoYWRlOiAjMmIxODRkO1xuICAtLWlvbi1jb2xvci1zZWNvbmRhcnktdGludDogIzQ2MzI2OTtcblxuICAvKiogdGVydGlhcnkgKiovXG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5OiAjNzA0NGZmO1xuICAtLWlvbi1jb2xvci10ZXJ0aWFyeS1yZ2I6IDExMiwgNjgsIDI1NTtcbiAgLS1pb24tY29sb3ItdGVydGlhcnktY29udHJhc3Q6ICNmZmZmZmY7XG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5LWNvbnRyYXN0LXJnYjogMjU1LCAyNTUsIDI1NTtcbiAgLS1pb24tY29sb3ItdGVydGlhcnktc2hhZGU6ICM2MzNjZTA7XG4gIC0taW9uLWNvbG9yLXRlcnRpYXJ5LXRpbnQ6ICM3ZTU3ZmY7XG5cbiAgLyoqIHN1Y2Nlc3MgKiovXG4gIC0taW9uLWNvbG9yLXN1Y2Nlc3M6ICMxMGRjNjA7XG4gIC0taW9uLWNvbG9yLXN1Y2Nlc3MtcmdiOiAxNiwgMjIwLCA5NjtcbiAgLS1pb24tY29sb3Itc3VjY2Vzcy1jb250cmFzdDogI2ZmZmZmZjtcbiAgLS1pb24tY29sb3Itc3VjY2Vzcy1jb250cmFzdC1yZ2I6IDI1NSwgMjU1LCAyNTU7XG4gIC0taW9uLWNvbG9yLXN1Y2Nlc3Mtc2hhZGU6ICMwZWMyNTQ7XG4gIC0taW9uLWNvbG9yLXN1Y2Nlc3MtdGludDogIzI4ZTA3MDtcblxuICAvKiogd2FybmluZyAqKi9cbiAgLS1pb24tY29sb3Itd2FybmluZzogI2ZmY2UwMDtcbiAgLS1pb24tY29sb3Itd2FybmluZy1yZ2I6IDI1NSwgMjA2LCAwO1xuICAtLWlvbi1jb2xvci13YXJuaW5nLWNvbnRyYXN0OiAjZmZmZmZmO1xuICAtLWlvbi1jb2xvci13YXJuaW5nLWNvbnRyYXN0LXJnYjogMjU1LCAyNTUsIDI1NTtcbiAgLS1pb24tY29sb3Itd2FybmluZy1zaGFkZTogI2UwYjUwMDtcbiAgLS1pb24tY29sb3Itd2FybmluZy10aW50OiAjZmZkMzFhO1xuXG4gIC8qKiBkYW5nZXIgKiovXG4gIC0taW9uLWNvbG9yLWRhbmdlcjogI2YwNDE0MTtcbiAgLS1pb24tY29sb3ItZGFuZ2VyLXJnYjogMjQ1LCA2MSwgNjE7XG4gIC0taW9uLWNvbG9yLWRhbmdlci1jb250cmFzdDogI2ZmZmZmZjtcbiAgLS1pb24tY29sb3ItZGFuZ2VyLWNvbnRyYXN0LXJnYjogMjU1LCAyNTUsIDI1NTtcbiAgLS1pb24tY29sb3ItZGFuZ2VyLXNoYWRlOiAjZDMzOTM5O1xuICAtLWlvbi1jb2xvci1kYW5nZXItdGludDogI2YyNTQ1NDtcblxuICAvKiogZGFyayAqKi9cbiAgLS1pb24tY29sb3ItZGFyazogIzIyMjQyODtcbiAgLS1pb24tY29sb3ItZGFyay1yZ2I6IDM0LCAzNCwgMzQ7XG4gIC0taW9uLWNvbG9yLWRhcmstY29udHJhc3Q6ICNmZmZmZmY7XG4gIC0taW9uLWNvbG9yLWRhcmstY29udHJhc3QtcmdiOiAyNTUsIDI1NSwgMjU1O1xuICAtLWlvbi1jb2xvci1kYXJrLXNoYWRlOiAjMWUyMDIzO1xuICAtLWlvbi1jb2xvci1kYXJrLXRpbnQ6ICMzODNhM2U7XG5cbiAgLyoqIG1lZGl1bSAqKi9cbiAgLS1pb24tY29sb3ItbWVkaXVtOiAjOTg5YWEyO1xuICAtLWlvbi1jb2xvci1tZWRpdW0tcmdiOiAxNTIsIDE1NCwgMTYyO1xuICAtLWlvbi1jb2xvci1tZWRpdW0tY29udHJhc3Q6ICNmZmZmZmY7XG4gIC0taW9uLWNvbG9yLW1lZGl1bS1jb250cmFzdC1yZ2I6IDI1NSwgMjU1LCAyNTU7XG4gIC0taW9uLWNvbG9yLW1lZGl1bS1zaGFkZTogIzg2ODg4ZjtcbiAgLS1pb24tY29sb3ItbWVkaXVtLXRpbnQ6ICNhMmE0YWI7XG5cbiAgLyoqIGxpZ2h0ICoqL1xuICAtLWlvbi1jb2xvci1saWdodDogI2Y0ZjRmNDtcbiAgLS1pb24tY29sb3ItbGlnaHQtcmdiOiAyNDQsIDI0NCwgMjQ0O1xuICAtLWlvbi1jb2xvci1saWdodC1jb250cmFzdDogIzAwMDAwMDtcbiAgLS1pb24tY29sb3ItbGlnaHQtY29udHJhc3QtcmdiOiAwLCAwLCAwO1xuICAtLWlvbi1jb2xvci1saWdodC1zaGFkZTogI2Q3ZDhkYTtcbiAgLS1pb24tY29sb3ItbGlnaHQtdGludDogI2Y1ZjZmOTtcblxuICAvKiogc2Vjb25kYXJ5IGxpZ2h0ICoqL1xuICAtLWlvbi1jb2xvci1zZWNvbmRhcnlMaWdodDogIzQ0MDA5NDtcbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5TGlnaHQtcmdiOiA2OCwgMCwgMTQ4O1xuICAtLWlvbi1jb2xvci1zZWNvbmRhcnlMaWdodC1jb250cmFzdDogI2ZmZmZmZjtcbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5TGlnaHQtY29udHJhc3QtcmdiOiAyNTUsIDI1NSwgMjU1O1xuICAtLWlvbi1jb2xvci1zZWNvbmRhcnlMaWdodC1zaGFkZTogIzNjMDA4MjtcbiAgLS1pb24tY29sb3Itc2Vjb25kYXJ5TGlnaHQtdGludDogIzU3MWE5ZjtcblxuICAvKiogZ3JheSAqKi9cbiAgLS1pb24tY29sb3ItZ3JheTogI2QzZDNkMztcbiAgLS1pb24tY29sb3ItZ3JheS1yZ2I6IDIxMSwgMjExLCAyMTE7XG4gIC0taW9uLWNvbG9yLWdyYXktY29udHJhc3Q6ICMwMDA7XG4gIC0taW9uLWNvbG9yLWdyYXktY29udHJhc3QtcmdiOiAyNTUsIDI1NSwgMjU1O1xuICAtLWlvbi1jb2xvci1ncmF5LXNoYWRlOiAjYmFiYWJhO1xuICAtLWlvbi1jb2xvci1ncmF5LXRpbnQ6ICNkN2Q3ZDc7XG5cbiAgLyoqIGdyYXkgbGlnaHQgKiovXG4gIC0taW9uLWNvbG9yLWdyYXlMaWdodDogI2Y0ZjRmNDtcbiAgLS1pb24tY29sb3ItZ3JheUxpZ2h0LXJnYjogMjQ0LCAyNDQsIDI0NDtcbiAgLS1pb24tY29sb3ItZ3JheUxpZ2h0LWNvbnRyYXN0OiAjMDAwO1xuICAtLWlvbi1jb2xvci1ncmF5TGlnaHQtY29udHJhc3QtcmdiOiAyNTUsIDI1NSwgMjU1O1xuICAtLWlvbi1jb2xvci1ncmF5TGlnaHQtc2hhZGU6ICNkN2Q3ZDc7XG4gIC0taW9uLWNvbG9yLWdyYXlMaWdodC10aW50OiAjZjVmNWY1O1xuXG4gIC8qIHNldHMgdGhlIGNvbG9yIG9mIGlvbi10aXRsZSB0byBzZWNvbmRhcnkgKi9cbiAgaW9uLXRpdGxlIHtcbiAgICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbiAgfVxuXG4gIC8qIHNldHMgdGhlIGNvbG9mIG9mIGlvbi1iYWNrLWJ1dHRvbiB0byBzZWNvbmRhcnkgYW5kIHJlbW92ZXMgbWFyZ2luICovXG4gIGlvbi1iYWNrLWJ1dHRvbiB7XG4gICAgLS1pY29uLW1hcmdpbi1lbmQ6IDA7XG4gICAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG4gIH1cblxuICAvKiBTZXQgdGhlIGJvcmRlciB3aWR0aCBhbmQgcGFkZGluZyBvbiBhbGwgaW9uLWJ1dHRvbiBlbGVtZW50cyAqL1xuICBpb24tYnV0dG9uIHtcbiAgICAtLWJvcmRlci13aWR0aDogMXB4O1xuICAgIC0tcGFkZGluZy1zdGFydDogMS41cmVtO1xuICAgIC0tcGFkZGluZy1lbmQ6IDEuNXJlbTtcbiAgfVxuXG4gIC8qIFNldCB0aGUgcGFkZGluZyB3aXRoIG9uIGlvbi1idXR0b24gaW4gaW9uLXRvb2xiYXIgZWxlbWVudHMgKi9cbiAgaW9uLXRvb2xiYXIgaW9uLWJ1dHRvbiB7XG4gICAgLS1wYWRkaW5nLXN0YXJ0OiAwLjVyZW07XG4gICAgLS1wYWRkaW5nLWVuZDogMC41cmVtO1xuICB9XG5cbiAgaW9uLWFsZXJ0IHtcbiAgICAtLW1heC13aWR0aDogY2FsYygxMDAlIC0gMzJweCk7XG4gIH1cblxuICAvKiBubyBwYWRkaW5nIGFuZCBtYXJnaW4gZm9yIHNtYWxsIGJ1dHRvbnMgKi9cbiAgcGFnZS1leGNoYW5nZSB7XG4gICAgLmJ1dHRvbi1zbWFsbCB7XG4gICAgICAtLXBhZGRpbmctc3RhcnQ6IDA7XG4gICAgICAtLXBhZGRpbmctZW5kOiAwO1xuICAgICAgbWFyZ2luOiAwO1xuICAgIH1cbiAgfVxuXG4gIGlvbi1zcGxpdC1wYW5lIHtcbiAgICAtLXNpZGUtbWF4LXdpZHRoOiAxMHZ3O1xuICB9XG59XG5cbi5pb24tY29sb3Itd2hpdGUge1xuICAtLWlvbi1jb2xvci1iYXNlOiAjZmZmO1xuICAtLWlvbi1jb2xvci1iYXNlLXJnYjogMjU1LCAyNTUsIDI1NTtcbiAgLS1pb24tY29sb3ItY29udHJhc3Q6ICMwMDA7XG4gIC0taW9uLWNvbG9yLWNvbnRyYXN0LXJnYjogMCwgMCwgMDtcbiAgLS1pb24tY29sb3Itc2hhZGU6ICNlMGUwZTA7XG4gIC0taW9uLWNvbG9yLXRpbnQ6ICNmZmZmZmY7XG59XG5cbi5pb24tY29sb3ItYmxhY2sge1xuICAtLWlvbi1jb2xvci1iYXNlOiAjMDAwO1xuICAtLWlvbi1jb2xvci1iYXNlLXJnYjogMCwgMCwgMDtcbiAgLS1pb24tY29sb3ItY29udHJhc3Q6ICMwMDA7XG4gIC0taW9uLWNvbG9yLWNvbnRyYXN0LXJnYjogMjU1LCAyNTUsIDI1NTtcbiAgLS1pb24tY29sb3Itc2hhZGU6ICM1Y2E1NmM7XG4gIC0taW9uLWNvbG9yLXRpbnQ6ICM3OGMyODg7XG59XG5cbi5pb24tY29sb3Itd2hpdGVMaWdodCB7XG4gIC0taW9uLWNvbG9yLWJhc2U6ICMzMTFiNTg7XG4gIC0taW9uLWNvbG9yLWJhc2UtcmdiOiA0OSwgMjcsIDg4O1xuICAtLWlvbi1jb2xvci1jb250cmFzdDogI2ZmZmZmZjtcbiAgLS1pb24tY29sb3ItY29udHJhc3QtcmdiOiAyNTUsIDI1NSwgMjU1O1xuICAtLWlvbi1jb2xvci1zaGFkZTogIzJiMTg0ZDtcbiAgLS1pb24tY29sb3ItdGludDogIzQ2MzI2OTtcbn1cblxuLmlvbi1jb2xvci1ibGFja0xpZ2h0IHtcbiAgLS1pb24tY29sb3ItYmFzZTogcmdiYSgwLCAwLCAwLCAwLjU0KTtcbiAgLS1pb24tY29sb3ItYmFzZS1yZ2I6IDQ5LCAyNywgODg7XG4gIC0taW9uLWNvbG9yLWNvbnRyYXN0OiAjZmZmZmZmO1xuICAtLWlvbi1jb2xvci1jb250cmFzdC1yZ2I6IDI1NSwgMjU1LCAyNTU7XG4gIC0taW9uLWNvbG9yLXNoYWRlOiAjNWNhNTZjO1xuICAtLWlvbi1jb2xvci10aW50OiAjNzhjMjg4O1xufVxuXG4uaW9uLWNvbG9yLWdyYXlMaWdodCB7XG4gIC0taW9uLWNvbG9yLWJhc2U6ICNmNGY0ZjQ7XG4gIC0taW9uLWNvbG9yLWJhc2UtcmdiOiAwLCAwLCAwO1xuICAtLWlvbi1jb2xvci1jb250cmFzdDogIzAwMDtcbiAgLS1pb24tY29sb3ItY29udHJhc3QtcmdiOiAyNTUsIDI1NSwgMjU1O1xuICAtLWlvbi1jb2xvci1zaGFkZTogIzVjYTU2YztcbiAgLS1pb24tY29sb3ItdGludDogIzc4YzI4ODtcbn1cblxuaW9uLWF2YXRhciB7XG4gIG1pbi13aWR0aDogNDhweDtcbiAgbWluLWhlaWdodDogNDhweDtcbn1cblxucGFnZS1hY2NvdW50LWFkZHJlc3Mge1xuICBpZGVudGljb24sXG4gIGlkZW50aWNvbiBpbWcsXG4gIGlvbi1hdmF0YXIge1xuICAgIHdpZHRoOiA2NHB4O1xuICAgIGhlaWdodDogNjRweDtcbiAgfVxufVxuXG5wb3J0Zm9saW8taXRlbSB7XG4gIGRpdltzbG90PSdlbmQnXSB7XG4gICAgbWFyZ2luLWlubGluZS1zdGFydDogOHB4O1xuICB9XG59XG5wYWdlLXBvcnRmb2xpbyB7XG4gIHBvcnRmb2xpby1pdGVtIHtcbiAgICBkaXZbc2xvdD0nZW5kJ10ge1xuICAgICAgbWFyZ2luLWlubGluZS1lbmQ6IDA7XG4gICAgfVxuICB9XG59XG5cbi5pdGVtX19pbWFnZVtzbG90PSdzdGFydCddIHtcbiAgbWFyZ2luOiA4cHggMTZweCA4cHggMDtcbn1cbiIsIkBpbXBvcnQgJy4uLy4uLy4uL3RoZW1lL3ZhcmlhYmxlcy5zY3NzJztcblxuaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IG5vbmUgdHJhbnNwYXJlbnQ7XG59XG5cbi50cmFuc3BhcmVudCB7XG4gIGJhY2tncm91bmQ6IG5vbmUgIWltcG9ydGFudDtcbn1cblxucCB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn1cblxuLnJvdy0taGVpZ2h0X18xMDAge1xuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDQ4cHgpO1xuICBpbWcge1xuICAgIGhlaWdodDogNDV2aDtcbiAgfVxufVxuLmd1aWRlcy0tY29udGFpbmVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIC5ndWlkZXMtLWNvbnRhaW5lcl9faW1nIHtcbiAgICB3aWR0aDogNjAlO1xuICAgIG1heC13aWR0aDogNDAwcHg7XG4gICAgbWFyZ2luLXRvcDogM2VtO1xuICAgIG1heC1oZWlnaHQ6IDUwJTtcbiAgfVxufVxuXG5pb24tZ3JpZCB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLypcbnZpZGVvIHtcbiAgbWluLWhlaWdodDogNzA1cHg7XG4gIG1pbi13aWR0aDogMTAwdnc7XG4gIG9iamVjdC1maXQ6IGNvbnRhaW47XG59XG4qL1xuIl19 */"] });


/***/ }),

/***/ "fOEu":
/*!**********************************************!*\
  !*** ./src/app/pages/portfolio/portfolio.ts ***!
  \**********************************************/
/*! exports provided: PortfolioPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortfolioPage", function() { return PortfolioPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _pipes_crypto_to_fiat_crypto_to_fiat_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../pipes/crypto-to-fiat/crypto-to-fiat.pipe */ "onrW");
/* harmony import */ var _services_account_account_provider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/account/account.provider */ "57MG");
/* harmony import */ var _services_data_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/data/data.service */ "1y+R");
/* harmony import */ var _services_operations_operations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/operations/operations */ "nxqh");
/* harmony import */ var _services_sentry_error_handler_sentry_error_handler__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/sentry-error-handler/sentry-error-handler */ "hPkG");
/* harmony import */ var _airgap_angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @airgap/angular-core */ "138U");
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! bignumber.js */ "kB5k");
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(bignumber_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _airgap_coinlib_core_wallet_AirGapWallet__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @airgap/coinlib-core/wallet/AirGapWallet */ "7pxb");
/* harmony import */ var _airgap_coinlib_core_wallet_AirGapWallet__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_airgap_coinlib_core_wallet_AirGapWallet__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _components_current_wallet_group_current_wallet_group_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../components/current-wallet-group/current-wallet-group.component */ "r/DQ");
/* harmony import */ var _components_chart_chart_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../components/chart/chart.component */ "0HKr");
/* harmony import */ var _components_portfolio_item_portfolio_item__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../components/portfolio-item/portfolio-item */ "F07p");
/* harmony import */ var _components_empty_state_empty_state__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../components/empty-state/empty-state */ "1Mpf");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");

























function PortfolioPage_ng_container_6_chart_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](0, "chart", 11);
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("total", ctx_r6.total);
} }
function PortfolioPage_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1, PortfolioPage_ng_container_6_chart_1_Template, 1, 1, "chart", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const walletsArray_r5 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", walletsArray_r5.length > 0);
} }
function PortfolioPage_ng_container_12_ng_container_1_ion_list_1_portfolio_item_2_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "portfolio-item", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function PortfolioPage_ng_container_12_ng_container_1_ion_list_1_portfolio_item_2_Template_portfolio_item_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r17); const walletGroup_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]().$implicit; const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](3); return ctx_r15.openDetail(walletGroup_r12.mainWallet); });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
} if (rf & 2) {
    const walletGroup_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("wallet", walletGroup_r12.mainWallet);
} }
function PortfolioPage_ng_container_12_ng_container_1_ion_list_1_portfolio_item_3_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "portfolio-item", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function PortfolioPage_ng_container_12_ng_container_1_ion_list_1_portfolio_item_3_Template_portfolio_item_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r22); const subWallet_r19 = ctx.$implicit; const walletGroup_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]().$implicit; const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](3); return ctx_r20.openDetail(walletGroup_r12.mainWallet, subWallet_r19); });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
} if (rf & 2) {
    const subWallet_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("wallet", subWallet_r19);
} }
const _c0 = function (a0) { return { network: a0 }; };
function PortfolioPage_ng_container_12_ng_container_1_ion_list_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "ion-list", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1, "ion-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](2, PortfolioPage_ng_container_12_ng_container_1_ion_list_1_portfolio_item_2_Template, 1, 1, "portfolio-item", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](3, PortfolioPage_ng_container_12_ng_container_1_ion_list_1_portfolio_item_3_Template, 1, 1, "portfolio-item", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](4, "walletFilter");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
} if (rf & 2) {
    const walletGroup_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", walletGroup_r12.mainWallet);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind2"](4, 2, walletGroup_r12.subWallets, _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpureFunction1"](5, _c0, walletGroup_r12.mainWallet == null ? null : walletGroup_r12.mainWallet.protocol == null ? null : walletGroup_r12.mainWallet.protocol.options == null ? null : walletGroup_r12.mainWallet.protocol.options.network)));
} }
function PortfolioPage_ng_container_12_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1, PortfolioPage_ng_container_12_ng_container_1_ion_list_1_Template, 5, 7, "ion-list", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const walletGroupsArray_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngForOf", walletGroupsArray_r7);
} }
function PortfolioPage_ng_container_12_ng_template_2_empty_state_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](0, "empty-state", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](1, "translate");
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("text", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](1, 3, "portfolio.empty-state_desktop_text"))("imageName", "signer-vault-ledger-desktop.svg")("fullHeight", true);
} }
function PortfolioPage_ng_container_12_ng_template_2_empty_state_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](0, "empty-state", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](1, "translate");
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("text", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](1, 3, "portfolio.empty-state_text"))("imageName", "sync_wallet_onboarding_1.svg")("fullHeight", true);
} }
function PortfolioPage_ng_container_12_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](0, PortfolioPage_ng_container_12_ng_template_2_empty_state_0_Template, 2, 5, "empty-state", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1, PortfolioPage_ng_container_12_ng_template_2_empty_state_1_Template, 2, 5, "empty-state", 19);
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx_r10.isDesktop);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", !ctx_r10.isDesktop);
} }
function PortfolioPage_ng_container_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1, PortfolioPage_ng_container_12_ng_container_1_Template, 2, 1, "ng-container", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](2, PortfolioPage_ng_container_12_ng_template_2_Template, 2, 2, "ng-template", null, 12, _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const walletGroupsArray_r7 = ctx.ngIf;
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵreference"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", walletGroupsArray_r7.length)("ngIfElse", _r9);
} }
function PortfolioPage_ng_template_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "ion-list", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1, "ion-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](2, "portfolio-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](3, "ion-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](4, "portfolio-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](5, "ion-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](6, "portfolio-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](7, "ion-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](8, "portfolio-item");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
} }
function PortfolioPage_ng_container_17_ion_fab_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "ion-fab-button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function PortfolioPage_ng_container_17_ion_fab_button_1_Template_ion_fab_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r30); const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2); return ctx_r29.openAccountAddPage(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](1, "ion-icon", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
} }
function PortfolioPage_ng_container_17_ion_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "ion-button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("click", function PortfolioPage_ng_container_17_ion_button_2_Template_ion_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r32); const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2); return ctx_r31.openAccountAddPage(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](1, "ion-icon", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](3, 1, "portfolio.add-coins_label"), " ");
} }
function PortfolioPage_ng_container_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1, PortfolioPage_ng_container_17_ion_fab_button_1_Template, 2, 0, "ion-fab-button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](2, PortfolioPage_ng_container_17_ion_button_2_Template, 4, 3, "ion-button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const walletsArray_r26 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", walletsArray_r26.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", walletsArray_r26.length === 0);
} }
const _c1 = function (a0) { return { status: a0 }; };
class PortfolioPage {
    constructor(router, walletsProvider, operationsProvider, protocolService, platform) {
        this.router = router;
        this.walletsProvider = walletsProvider;
        this.operationsProvider = operationsProvider;
        this.protocolService = protocolService;
        this.platform = platform;
        this.isVisible = 'hidden';
        this.total = 0;
        this.changePercentage = 0;
        this.walletGroups = new rxjs__WEBPACK_IMPORTED_MODULE_2__["ReplaySubject"](1);
        this.isDesktop = false;
        this.AirGapWalletStatus = _airgap_coinlib_core_wallet_AirGapWallet__WEBPACK_IMPORTED_MODULE_11__["AirGapWalletStatus"];
        this.isDesktop = !this.platform.is('hybrid');
        this.wallets = this.walletsProvider.wallets$.asObservable();
        this.activeWallets = this.wallets.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["map"])((wallets) => { var _a; return (_a = wallets.filter((wallet) => wallet.status === _airgap_coinlib_core_wallet_AirGapWallet__WEBPACK_IMPORTED_MODULE_11__["AirGapWalletStatus"].ACTIVE)) !== null && _a !== void 0 ? _a : []; }));
        // If a wallet gets added or removed, recalculate all values
        this.wallets.subscribe((wallets) => {
            this.calculateTotal(wallets);
            this.refreshWalletGroups(wallets);
        });
        this.walletsProvider.walletChangedObservable.subscribe(() => {
            this.calculateTotal(this.walletsProvider.getWalletList());
        });
    }
    refreshWalletGroups(wallets) {
        const groups = [];
        const walletMap = new Map();
        wallets
            .filter((wallet) => wallet.status === _airgap_coinlib_core_wallet_AirGapWallet__WEBPACK_IMPORTED_MODULE_11__["AirGapWalletStatus"].ACTIVE)
            .forEach((wallet) => {
            const isSubProtocol = wallet.protocol.isSubProtocol;
            const identifier = isSubProtocol ? wallet.protocol.identifier.split('-')[0] : wallet.protocol.identifier;
            const walletKey = `${wallet.publicKey}_${identifier}`;
            if (walletMap.has(walletKey)) {
                const group = walletMap.get(walletKey);
                if (isSubProtocol) {
                    group.subWallets.push(wallet);
                }
                else {
                    group.mainWallet = wallet;
                }
            }
            else {
                if (isSubProtocol) {
                    walletMap.set(walletKey, { mainWallet: undefined, subWallets: [wallet] });
                }
                else {
                    walletMap.set(walletKey, { mainWallet: wallet, subWallets: [] });
                }
            }
        });
        walletMap.forEach((value) => {
            groups.push(value);
        });
        groups.sort((group1, group2) => {
            if (group1.mainWallet && group2.mainWallet) {
                return group1.mainWallet.protocol.symbol.localeCompare(group2.mainWallet.protocol.symbol);
            }
            else if (group1.mainWallet) {
                return -1;
            }
            else if (group2.mainWallet) {
                return 1;
            }
            else {
                return 0;
            }
        });
        // TODO: Find a solution to this
        /*
        It seems like this is an Ionic / Angular bug. If a wallet is deleted on a sub-page
        (which is how it is done currently), then the UI end up in a weird state. There is no
        crash, but some wallets are not shown and empty cards are being displayed. To resolve this,
        the app has to be restarted or another wallet has to be added. When investigating,
        we saw that it is related to the transition phase. If the observable emits at the same time
        as the transition is happening, then this weird state occurs. If we simply wait, everything
        works as intended.
        */
        setTimeout(() => {
            this.walletGroups.next(groups);
        }, 500);
    }
    ionViewDidEnter() {
        this.doRefresh().catch(Object(_services_sentry_error_handler_sentry_error_handler__WEBPACK_IMPORTED_MODULE_8__["handleErrorSentry"])());
    }
    openDetail(mainWallet, subWallet) {
        const info = subWallet
            ? {
                mainWallet,
                wallet: subWallet
            }
            : {
                wallet: mainWallet
            };
        this.router
            .navigateByUrl(`/account-transaction-list/${_services_data_data_service__WEBPACK_IMPORTED_MODULE_6__["DataServiceKey"].ACCOUNTS}/${info.wallet.publicKey}/${info.wallet.protocol.identifier}/${info.wallet.addressIndex}`)
            .catch(console.error);
    }
    openAccountAddPage() {
        this.router.navigateByUrl('/account-add').catch(Object(_services_sentry_error_handler_sentry_error_handler__WEBPACK_IMPORTED_MODULE_8__["handleErrorSentry"])(_services_sentry_error_handler_sentry_error_handler__WEBPACK_IMPORTED_MODULE_8__["ErrorCategory"].NAVIGATION));
    }
    doRefresh(event = null) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // XTZ: Refresh delegation status
            this.operationsProvider.refreshAllDelegationStatuses(this.walletsProvider.getWalletList());
            const observables = [
                this.walletsProvider.getWalletList().map((wallet) => {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(wallet.synchronize());
                })
            ];
            /**
             * if we use await Promise.all() instead, then each wallet
             * is synchronized asynchronously, leading to blocking behaviour.
             * Instead we want to synchronize all wallets simultaneously
             */
            const allWalletsSynced = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["forkJoin"])([observables]);
            this.subscription = allWalletsSynced.subscribe(() => {
                this.calculateTotal(this.walletsProvider.getWalletList(), event ? event.target : null);
                this.wallets.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["take"])(1)).subscribe(wallets => this.refreshWalletGroups(wallets));
            });
        });
    }
    calculateTotal(wallets, refresher = null) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const cryptoToFiatPipe = new _pipes_crypto_to_fiat_crypto_to_fiat_pipe__WEBPACK_IMPORTED_MODULE_4__["CryptoToFiatPipe"](this.protocolService);
            wallets = wallets.filter((wallet) => wallet.status === _airgap_coinlib_core_wallet_AirGapWallet__WEBPACK_IMPORTED_MODULE_11__["AirGapWalletStatus"].ACTIVE);
            this.total = (yield Promise.all(wallets.map((wallet) => cryptoToFiatPipe.transform(wallet.currentBalance, {
                protocolIdentifier: wallet.protocol.identifier,
                currentMarketPrice: wallet.currentMarketPrice
            }))))
                .reduce((sum, next) => sum.plus(next), new bignumber_js__WEBPACK_IMPORTED_MODULE_10___default.a(0))
                .toNumber();
            if (refresher) {
                refresher.complete();
            }
            this.isVisible = 'visible';
        });
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
PortfolioPage.ɵfac = function PortfolioPage_Factory(t) { return new (t || PortfolioPage)(_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_services_account_account_provider__WEBPACK_IMPORTED_MODULE_5__["AccountProvider"]), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_services_operations_operations__WEBPACK_IMPORTED_MODULE_7__["OperationsProvider"]), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_airgap_angular_core__WEBPACK_IMPORTED_MODULE_9__["ProtocolService"]), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"])); };
PortfolioPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineComponent"]({ type: PortfolioPage, selectors: [["page-portfolio"]], decls: 20, vars: 15, consts: [[1, "ion-no-border"], ["color", "translucent"], ["slot", "start"], ["fullscreen", "true"], ["fixed", "true", 1, "ion-no-padding"], [4, "ngIf"], ["slot", "fixed", 3, "ionRefresh"], [4, "ngIf", "ngIfElse"], ["loading", ""], ["vertical", "bottom", "horizontal", "end", "slot", "fixed"], [3, "total", 4, "ngIf"], [3, "total"], ["noItems", ""], ["class", "walletGroups ion-no-padding", "lines", "none", 4, "ngFor", "ngForOf"], ["lines", "none", 1, "walletGroups", "ion-no-padding"], ["class", "mainWallet", "tappable", "", 3, "wallet", "click", 4, "ngIf"], ["tappable", "", 3, "wallet", "click", 4, "ngFor", "ngForOf"], ["tappable", "", 1, "mainWallet", 3, "wallet", "click"], ["tappable", "", 3, "wallet", "click"], [3, "text", "imageName", "fullHeight", 4, "ngIf"], [3, "text", "imageName", "fullHeight"], ["lines", "none", 1, "ion-margin-top"], ["id", "add-more-coins-button", "color", "secondary", 3, "click", 4, "ngIf"], ["id", "add-initial-coin-button", "color", "secondary", "shape", "round", 3, "click", 4, "ngIf"], ["id", "add-more-coins-button", "color", "secondary", 3, "click"], ["name", "add"], ["id", "add-initial-coin-button", "color", "secondary", "shape", "round", 3, "click"], ["slot", "start", "name", "add"]], template: function PortfolioPage_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "ion-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](1, "ion-toolbar", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](2, "ion-buttons", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](3, "ion-menu-button");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](4, "ion-content", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](5, "ion-grid", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](6, PortfolioPage_ng_container_6_Template, 2, 1, "ng-container", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](7, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](8, "ion-toolbar", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](9, "current-wallet-group");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](10, "ion-refresher", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("ionRefresh", function PortfolioPage_Template_ion_refresher_ionRefresh_10_listener($event) { return ctx.doRefresh($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelement"](11, "ion-refresher-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](12, PortfolioPage_ng_container_12_Template, 4, 2, "ng-container", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](13, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](14, PortfolioPage_ng_template_14_Template, 9, 0, "ng-template", null, 8, _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](16, "ion-fab", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](17, PortfolioPage_ng_container_17_Template, 3, 2, "ng-container", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](18, "walletFilter");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](19, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵreference"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](7, 4, ctx.activeWallets));
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](13, 6, ctx.walletGroups))("ngIfElse", _r2);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind2"](18, 8, _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](19, 11, ctx.wallets), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpureFunction1"](13, _c1, ctx.AirGapWalletStatus.ACTIVE)));
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonMenuButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonGrid"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgIf"], _components_current_wallet_group_current_wallet_group_component__WEBPACK_IMPORTED_MODULE_15__["CurrentWalletGroupComponent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonRefresher"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonRefresherContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonFab"], _components_chart_chart_component__WEBPACK_IMPORTED_MODULE_16__["ChartComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgForOf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonList"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonCard"], _components_portfolio_item_portfolio_item__WEBPACK_IMPORTED_MODULE_17__["PortfolioItemComponent"], _components_empty_state_empty_state__WEBPACK_IMPORTED_MODULE_18__["EmptyStateComponent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonFabButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonButton"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_14__["AsyncPipe"], _airgap_angular_core__WEBPACK_IMPORTED_MODULE_9__["WalletFilterPipe"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_19__["TranslatePipe"]], styles: [".loading-header[_ngcontent-%COMP%] {\n  color: white;\n  font-weight: 300;\n  width: 100%;\n  text-align: center;\n}\n.loading-header[_ngcontent-%COMP%]   ion-spinner[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n  width: 28px;\n  height: 28px;\n  stroke: #fff !important;\n}\n.loading-content[_ngcontent-%COMP%] {\n  color: white;\n  font-weight: 300;\n  width: 100%;\n  margin-top: 20vh;\n  text-align: center;\n}\n.loading-content[_ngcontent-%COMP%]   ion-spinner[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n  width: 28px;\n  height: 28px;\n}\n.sc-ion-card-ios-h[_ngcontent-%COMP%], .sc-ion-card-md-h[_ngcontent-%COMP%] {\n  padding: 4px 0;\n  margin-bottom: 16px;\n  margin-top: 0px;\n}\n.sc-ion-card-ios-h[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .sc-ion-card-md-h[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-weight: inherit;\n}\n.sc-ion-card-ios-h[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%], .sc-ion-card-md-h[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%] {\n  padding-bottom: 4px;\n}\n.list-ios[_ngcontent-%COMP%] {\n  margin: 0;\n}\nion-card[_ngcontent-%COMP%] {\n  margin: 0 8px 16px;\n}\n.container__empty[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 30vh;\n}\n\n.content-ios[_ngcontent-%COMP%]   ion-fab[bottom][_ngcontent-%COMP%] {\n  bottom: 10px;\n}\n.portfolio--hero[_ngcontent-%COMP%] {\n  background: url(\"/assets/img/portfolio-lines.svg\") no-repeat;\n  height: 25vh;\n  background-position: bottom;\n}\n.portfolio--hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin-bottom: 48px;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3BvcnRmb2xpby5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FBQ0Y7QUFBRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7QUFFSjtBQUNBO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFFRjtBQURFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUFHSjtBQUFBOztFQUVFLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUFHRjtBQUZFOztFQUNFLG9CQUFBO0FBS0o7QUFIRTs7RUFDRSxtQkFBQTtBQU1KO0FBSEE7RUFDRSxTQUFBO0FBTUY7QUFKQTtFQUNFLGtCQUFBO0FBT0Y7QUFKRTtFQUNFLFlBQUE7QUFPSjtBQUpBLHdHQUFBO0FBQ0E7RUFDRSxZQUFBO0FBT0Y7QUFMQTtFQUNFLDREQUFBO0VBQ0EsWUFBQTtFQUNBLDJCQUFBO0FBUUY7QUFQRTtFQUNFLG1CQUFBO0VBQ0EsaUJBQUE7QUFTSiIsImZpbGUiOiJwb3J0Zm9saW8uc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2FkaW5nLWhlYWRlciB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgaW9uLXNwaW5uZXIgKiB7XG4gICAgd2lkdGg6IDI4cHg7XG4gICAgaGVpZ2h0OiAyOHB4O1xuICAgIHN0cm9rZTogI2ZmZiAhaW1wb3J0YW50O1xuICB9XG59XG4ubG9hZGluZy1jb250ZW50IHtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXdlaWdodDogMzAwO1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLXRvcDogMjB2aDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBpb24tc3Bpbm5lciAqIHtcbiAgICB3aWR0aDogMjhweDtcbiAgICBoZWlnaHQ6IDI4cHg7XG4gIH1cbn1cbi5zYy1pb24tY2FyZC1pb3MtaCxcbi5zYy1pb24tY2FyZC1tZC1oIHtcbiAgcGFkZGluZzogNHB4IDA7XG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XG4gIG1hcmdpbi10b3A6IDBweDtcbiAgcCB7XG4gICAgZm9udC13ZWlnaHQ6IGluaGVyaXQ7XG4gIH1cbiAgaW9uLWl0ZW0ge1xuICAgIHBhZGRpbmctYm90dG9tOiA0cHg7XG4gIH1cbn1cbi5saXN0LWlvcyB7XG4gIG1hcmdpbjogMDtcbn1cbmlvbi1jYXJkIHtcbiAgbWFyZ2luOiAwIDhweCAxNnB4O1xufVxuLmNvbnRhaW5lcl9fZW1wdHkge1xuICBpbWcge1xuICAgIGhlaWdodDogMzB2aDtcbiAgfVxufVxuLyogRkFCIHdpdGggYSBidXR0b24sIGJvdHRvbSBwYWRkaW5nIGZpeCBmb3IgaW9zIGRldmljZXMsIHJlc2V0IGZvciBGQUIgb24gcGFnZSB3aXRoIGJvdHRvbSBuYXZpZ2F0aW9uICovXG4uY29udGVudC1pb3MgaW9uLWZhYltib3R0b21dIHtcbiAgYm90dG9tOiAxMHB4O1xufVxuLnBvcnRmb2xpby0taGVybyB7XG4gIGJhY2tncm91bmQ6IHVybCgnL2Fzc2V0cy9pbWcvcG9ydGZvbGlvLWxpbmVzLnN2ZycpIG5vLXJlcGVhdDtcbiAgaGVpZ2h0OiAyNXZoO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBib3R0b207XG4gIGgxIHtcbiAgICBtYXJnaW4tYm90dG9tOiA0OHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB9XG59XG4iXX0= */"] });


/***/ }),

/***/ "ipgs":
/*!********************************************!*\
  !*** ./src/app/pages/settings/settings.ts ***!
  \********************************************/
/*! exports provided: SettingsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsPage", function() { return SettingsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _airgap_angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @airgap/angular-core */ "138U");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @capacitor/core */ "FUe0");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_capacitor_plugins_injection_tokens__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/capacitor-plugins/injection-tokens */ "Bpmc");
/* harmony import */ var src_app_services_browser_browser_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/browser/browser.service */ "jysE");
/* harmony import */ var src_app_services_iac_iac_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/iac/iac.service */ "wTY4");
/* harmony import */ var _services_sentry_error_handler_sentry_error_handler__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/sentry-error-handler/sentry-error-handler */ "hPkG");
/* harmony import */ var _introduction_introduction__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../introduction/introduction */ "xWVS");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");


















function SettingsPage_ion_item_40_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "ion-item", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function SettingsPage_ion_item_40_Template_ion_item_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return ctx_r1.about(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](1, "ion-icon", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](3, 1, "settings.about_label"), " ");
} }
class SettingsPage {
    constructor(alertCtrl, serializerService, router, modalController, clipboardProvider, iacService, browserService, sharePlugin) {
        this.alertCtrl = alertCtrl;
        this.serializerService = serializerService;
        this.router = router;
        this.modalController = modalController;
        this.clipboardProvider = clipboardProvider;
        this.iacService = iacService;
        this.browserService = browserService;
        this.sharePlugin = sharePlugin;
        this.platform = _capacitor_core__WEBPACK_IMPORTED_MODULE_3__["Capacitor"].getPlatform();
    }
    about() {
        this.navigate('/about');
    }
    dappPermissions() {
        this.navigate('/dapp-permission-list');
    }
    dappSettings() {
        this.navigate('/dapp-settings');
    }
    share() {
        const options = {
            title: 'Check out AirGap Wallet',
            text: "Take a look at this app I found. It's the most secure way to do crypto transactions.",
            url: 'https://www.airgap.it',
            dialogTitle: 'Pick an app' // Set a title for the share modal. Android only
        };
        this.sharePlugin
            .share(options)
            .then((result) => {
            console.log(`Share completed: ${result}`);
        })
            .catch((error) => {
            console.log('Sharing failed with error: ' + error);
        });
    }
    introduction() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _introduction_introduction__WEBPACK_IMPORTED_MODULE_9__["IntroductionPage"]
            });
            modal
                .dismiss(() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                //
            }))
                .catch(Object(_services_sentry_error_handler_sentry_error_handler__WEBPACK_IMPORTED_MODULE_8__["handleErrorSentry"])(_services_sentry_error_handler_sentry_error_handler__WEBPACK_IMPORTED_MODULE_8__["ErrorCategory"].IONIC_MODAL));
            modal.present().catch(Object(_services_sentry_error_handler_sentry_error_handler__WEBPACK_IMPORTED_MODULE_8__["handleErrorSentry"])(_services_sentry_error_handler_sentry_error_handler__WEBPACK_IMPORTED_MODULE_8__["ErrorCategory"].IONIC_MODAL));
        });
    }
    feedback() {
        this.browserService.openUrl('https://github.com/airgap-it/airgap-wallet/issues');
    }
    discord() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.browserService.openUrl('https://discord.gg/gnWqCQsteh');
        });
    }
    translate() {
        this.browserService.openUrl('https://translate.sook.ch/');
    }
    /*
    // Removed because of google policies
    public donate(): void {
      this.openUrl('https://airgap.it/#donate')
    }
    */
    githubDistro() {
        this.browserService.openUrl('https://github.com/airgap-it/airgap-distro');
    }
    githubWebSigner() {
        this.browserService.openUrl('https://github.com/airgap-it/airgap-web-signer');
    }
    githubWallet() {
        this.browserService.openUrl('https://github.com/airgap-it');
    }
    faq() {
        this.browserService.openUrl('https://support.airgap.it');
    }
    aboutBeacon() {
        this.browserService.openUrl('https://walletbeacon.io');
    }
    goToQrSettings() {
        this.navigate('/qr-settings');
    }
    goToHealthCheck() {
        this.navigate('/health-check');
    }
    goToWalletInteraction() {
        this.navigate('/interaction-selection-settings');
    }
    navigate(url) {
        this.router.navigateByUrl(url, { replaceUrl: true }).catch(Object(_services_sentry_error_handler_sentry_error_handler__WEBPACK_IMPORTED_MODULE_8__["handleErrorSentry"])(_services_sentry_error_handler_sentry_error_handler__WEBPACK_IMPORTED_MODULE_8__["ErrorCategory"].NAVIGATION));
    }
    pasteClipboard() {
        this.clipboardProvider.paste().then((text) => {
            this.iacService.handleRequest(text, _airgap_angular_core__WEBPACK_IMPORTED_MODULE_1__["IACMessageTransport"].PASTE).catch((error) => console.error(error));
        }, (err) => {
            console.error('Error: ' + err);
        });
    }
}
SettingsPage.ɵfac = function SettingsPage_Factory(t) { return new (t || SettingsPage)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_airgap_angular_core__WEBPACK_IMPORTED_MODULE_1__["SerializerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_airgap_angular_core__WEBPACK_IMPORTED_MODULE_1__["ClipboardService"]), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_services_iac_iac_service__WEBPACK_IMPORTED_MODULE_7__["IACService"]), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_services_browser_browser_service__WEBPACK_IMPORTED_MODULE_6__["BrowserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_capacitor_plugins_injection_tokens__WEBPACK_IMPORTED_MODULE_5__["SHARE_PLUGIN"])); };
SettingsPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({ type: SettingsPage, selectors: [["page-settings"]], decls: 84, vars: 55, consts: [[1, "ion-no-border"], ["fixed", "true", 1, "ion-no-padding"], ["slot", "start"], ["lines", "none"], ["lines", "none", 1, "ion-no-margin"], ["detail", "true", 3, "click"], ["name", "bulb-outline", "slot", "start"], ["name", "help-circle-outline", "slot", "start"], ["name", "chatbubbles-outline", "slot", "start"], ["name", "share-outline", "slot", "start"], ["name", "logo-github", "slot", "start"], ["detail", "true", 3, "click", 4, "ngIf"], ["name", "pulse-outline", "slot", "start"], ["src", "assets/img/beacon_logo_black.svg", "slot", "start"], ["name", "information-circle-outline", "slot", "start"], ["src", "assets/icon/md-swap_horiz.svg", "slot", "start"], [3, "click"], ["name", "return-up-forward-outline", "slot", "start"], ["name", "qr-code-outline", "slot", "start"]], template: function SettingsPage_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "ion-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "ion-grid", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "ion-toolbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "ion-buttons", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](4, "ion-menu-button");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "ion-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](7, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](8, "ion-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](9, "ion-grid", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](10, "ion-list", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](11, "ion-list-header", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](12, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](14, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](15, "ion-item", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function SettingsPage_Template_ion_item_click_15_listener() { return ctx.introduction(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](16, "ion-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](18, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](19, "ion-item", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function SettingsPage_Template_ion_item_click_19_listener() { return ctx.faq(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](20, "ion-icon", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](22, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](23, "ion-item", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function SettingsPage_Template_ion_item_click_23_listener() { return ctx.discord(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](24, "ion-icon", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](26, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](27, "ion-item", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function SettingsPage_Template_ion_item_click_27_listener() { return ctx.share(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](28, "ion-icon", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](30, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](31, "ion-list", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](32, "ion-list-header", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](33, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](35, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](36, "ion-item", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function SettingsPage_Template_ion_item_click_36_listener() { return ctx.githubWallet(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](37, "ion-icon", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](38);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](39, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](40, SettingsPage_ion_item_40_Template, 4, 3, "ion-item", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](41, "ion-item", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function SettingsPage_Template_ion_item_click_41_listener() { return ctx.goToHealthCheck(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](42, "ion-icon", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](43);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](44, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](45, "ion-list", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](46, "ion-list-header", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](47, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](48);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](49, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](50, "ion-item", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function SettingsPage_Template_ion_item_click_50_listener() { return ctx.dappPermissions(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](51, "ion-icon", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](52);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](53, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](54, "ion-item", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function SettingsPage_Template_ion_item_click_54_listener() { return ctx.dappSettings(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](55, "ion-icon", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](56);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](57, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](58, "ion-item", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function SettingsPage_Template_ion_item_click_58_listener() { return ctx.aboutBeacon(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](59, "ion-icon", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](60);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](61, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](62, "ion-list", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](63, "ion-list-header", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](64, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](65);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](66, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](67, "ion-item", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function SettingsPage_Template_ion_item_click_67_listener() { return ctx.goToWalletInteraction(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](68, "ion-icon", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](69);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](70, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](71, "ion-list", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](72, "ion-list-header", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](73, "ion-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](74);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](75, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](76, "ion-item", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function SettingsPage_Template_ion_item_click_76_listener() { return ctx.pasteClipboard(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](77, "ion-icon", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](78);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](79, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](80, "ion-item", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function SettingsPage_Template_ion_item_click_80_listener() { return ctx.goToQrSettings(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](81, "ion-icon", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](82);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](83, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](7, 19, "settings.title"));
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](14, 21, "settings.help_label"));
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](18, 23, "settings.introduction_label"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](22, 25, "settings.faq_label"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](26, 27, "settings.discord_label"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](30, 29, "settings.share_label"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](35, 31, "settings.information_label"));
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](39, 33, "settings.github_label"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.platform !== "web");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](44, 35, "settings.health-check"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](49, 37, "settings.dapp.label"));
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](53, 39, "settings.dapp.permission-list_label"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](57, 41, "settings.dapp.settings_label"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](61, 43, "settings.dapp.about_label"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](66, 45, "settings.interaction.label"));
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](70, 47, "settings.interaction.text"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](75, 49, "settings.qr.settings_label"));
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](79, 51, "settings.paste-from-clipboard_label"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](83, 53, "settings.qr-advanced-settings_label"), " ");
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonGrid"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonMenuButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonList"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonListHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonLabel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__["TranslatePipe"]], encapsulation: 2 });


/***/ }),

/***/ "lkre":
/*!**********************************************************************!*\
  !*** ./src/app/pages/introduction-download/introduction-download.ts ***!
  \**********************************************************************/
/*! exports provided: IntroductionDownloadPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntroductionDownloadPage", function() { return IntroductionDownloadPage; });
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _services_sentry_error_handler_sentry_error_handler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/sentry-error-handler/sentry-error-handler */ "hPkG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");







function IntroductionDownloadPage_h5_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 1, "introduction-download.text"));
} }
function IntroductionDownloadPage_ng_container_29_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "ion-button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function IntroductionDownloadPage_ng_container_29_Template_ion_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r2.downloadAndroid(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "ion-icon", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "ion-button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function IntroductionDownloadPage_ng_container_29_Template_ion_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r3); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r4.downloadDistribution(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "ion-icon", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](11, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](14, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](4, 4, "introduction-download.android"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](7, 6, "introduction-download." + ctx_r1.playStoreText), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](11, 8, "introduction-download.linux-distro_label"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](14, 10, "introduction-download.install-distro_text"));
} }
class IntroductionDownloadPage {
    constructor(platform, viewController, translateService) {
        this.platform = platform;
        this.viewController = viewController;
        this.translateService = translateService;
        this.appStoreText = 'android-device-iOS_text';
        this.playStoreText = 'iOS-device-android_text';
        this.isIOS = true;
        this.isIOS = this.platform.is('ios');
        if (!this.translateService.currentLang.startsWith('en')) {
            this.appStoreText = 'app-store_text';
            this.playStoreText = 'play-store_text';
        }
        else {
            if (this.platform.is('ios')) {
                this.appStoreText = 'iOS-device-iOS_text';
                this.playStoreText = 'iOS-device-android_text';
            }
            else if (this.platform.is('android')) {
                this.appStoreText = 'android-device-iOS_text';
                this.playStoreText = 'android-device-android_text';
            }
        }
    }
    dismiss(shouldCloseAllModals = false) {
        this.viewController.dismiss(shouldCloseAllModals).catch(Object(_services_sentry_error_handler_sentry_error_handler__WEBPACK_IMPORTED_MODULE_2__["handleErrorSentry"])(_services_sentry_error_handler_sentry_error_handler__WEBPACK_IMPORTED_MODULE_2__["ErrorCategory"].NAVIGATION));
    }
    downloadAndroid() {
        if (this.platform.is('android')) {
            window.open('https://play.google.com/store/apps/details?id=it.airgap.vault', '_system');
        }
        else if (this.platform.is('hybrid')) {
            window.open('https://play.google.com/store/apps/details?id=it.airgap.vault', '_system');
        }
        else {
            window.open('https://play.google.com/store/apps/details?id=it.airgap.vault', '_blank');
        }
        this.dismiss(true);
    }
    downloadIos() {
        if (this.platform.is('ios')) {
            window.open('itms-apps://itunes.apple.com/app/id1417126841', '_system');
        }
        else if (this.platform.is('hybrid')) {
            window.open('https://itunes.apple.com/us/app/airgap-vault-secure-secrets/id1417126841?mt=8', '_system');
        }
        else {
            window.open('https://itunes.apple.com/us/app/airgap-vault-secure-secrets/id1417126841?mt=8', '_blank');
        }
        this.dismiss(true);
    }
    downloadDistribution() {
        if (this.platform.is('hybrid')) {
            window.open('https://github.com/airgap-it/airgap-distro', '_system');
        }
        else {
            window.open('https://github.com/airgap-it/airgap-distro', '_blank');
        }
        this.dismiss(true);
    }
    openGuide() {
        if (this.platform.is('hybrid')) {
            window.open('https://medium.com/airgap-it/airgap-the-step-by-step-guide-c4c3d3fe9a05', '_system');
        }
        else {
            window.open('https://medium.com/airgap-it/airgap-the-step-by-step-guide-c4c3d3fe9a05', '_blank');
        }
        this.dismiss(true);
    }
}
IntroductionDownloadPage.ɵfac = function IntroductionDownloadPage_Factory(t) { return new (t || IntroductionDownloadPage)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_0__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_0__["ModalController"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"])); };
IntroductionDownloadPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: IntroductionDownloadPage, selectors: [["page-introduction-download"]], decls: 34, vars: 23, consts: [[1, "ion-no-border"], ["slot", "start"], ["defaultHref", "/"], ["slot", "end"], ["color", "secondary", 3, "click"], ["name", "close-outline"], [1, "ion-padding"], ["color", "primary", "shape", "round", 1, "ion-margin-top", 3, "click"], ["slot", "start", "name", "open-outline"], [1, "ion-padding-bottom"], [4, "ngIf"], ["id", "btn-import-secret", "color", "primary", "shape", "round", 3, "click"], ["slot", "start", "name", "phone-portrait-outline"], ["vertical", "bottom", "horizontal", "end", "slot", "fixed"], ["shape", "round", "color", "primary", 3, "click"], ["id", "btn-generate-secret", "color", "primary", "shape", "round", 1, "ion-margin-top", 3, "click"], ["slot", "start", "name", "logo-android"], ["id", "btn-recover-secret", "color", "primary", "shape", "round", 3, "click"], ["slot", "start", "name", "desktop-outline"]], template: function IntroductionDownloadPage_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ion-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "ion-toolbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "ion-buttons", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "ion-back-button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "ion-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](6, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "ion-buttons", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "ion-button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function IntroductionDownloadPage_Template_ion_button_click_8_listener() { return ctx.dismiss(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "ion-icon", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "ion-content", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](13, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "ion-button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function IntroductionDownloadPage_Template_ion_button_click_14_listener() { return ctx.openGuide(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](15, "ion-icon", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](17, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](20, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](21, IntroductionDownloadPage_h5_21_Template, 3, 3, "h5", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "ion-button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function IntroductionDownloadPage_Template_ion_button_click_22_listener() { return ctx.downloadIos(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](23, "ion-icon", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](25, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](28, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](29, IntroductionDownloadPage_ng_container_29_Template, 15, 12, "ng-container", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "ion-fab", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "ion-button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function IntroductionDownloadPage_Template_ion_button_click_31_listener() { return ctx.dismiss(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](33, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](6, 9, "introduction-download.title"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](13, 11, "introduction-download.heading"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](17, 13, "introduction-download.guide-link_label"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](20, 15, "introduction-download.description"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.isIOS);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](25, 17, "introduction-download.iOS"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](28, 19, "introduction-download." + ctx.appStoreText));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.isIOS);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](33, 21, "introduction-download.go_label"));
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonBackButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonBackButtonDelegate"], _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonContent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonFab"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslatePipe"]], encapsulation: 2 });


/***/ }),

/***/ "qiIP":
/*!*******************************************!*\
  !*** ./src/app/pages/tabs/tabs.module.ts ***!
  \*******************************************/
/*! exports provided: TabsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPageModule", function() { return TabsPageModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _introduction_introdution_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../introduction/introdution.module */ "0gJg");
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tabs.page */ "TA0h");
/* harmony import */ var _tabs_router_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tabs.router.module */ "30Mf");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "fXoL");








class TabsPageModule {
}
TabsPageModule.ɵfac = function TabsPageModule_Factory(t) { return new (t || TabsPageModule)(); };
TabsPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: TabsPageModule });
TabsPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ imports: [[_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _tabs_router_module__WEBPACK_IMPORTED_MODULE_6__["TabsPageRoutingModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"], _introduction_introdution_module__WEBPACK_IMPORTED_MODULE_4__["IntroductionPageModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](TabsPageModule, { declarations: [_tabs_page__WEBPACK_IMPORTED_MODULE_5__["TabsPage"]], imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _tabs_router_module__WEBPACK_IMPORTED_MODULE_6__["TabsPageRoutingModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"], _introduction_introdution_module__WEBPACK_IMPORTED_MODULE_4__["IntroductionPageModule"]] }); })();


/***/ }),

/***/ "tEGm":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/introduction-download/introduction-download.module.ts ***!
  \*****************************************************************************/
/*! exports provided: IntroductionDownloadPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntroductionDownloadPageModule", function() { return IntroductionDownloadPageModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/components.module */ "j1ZV");
/* harmony import */ var _introduction_download__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./introduction-download */ "lkre");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "fXoL");









class IntroductionDownloadPageModule {
}
IntroductionDownloadPageModule.ɵfac = function IntroductionDownloadPageModule_Factory(t) { return new (t || IntroductionDownloadPageModule)(); };
IntroductionDownloadPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: IntroductionDownloadPageModule });
IntroductionDownloadPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ imports: [[
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_5__["ComponentsModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _introduction_download__WEBPACK_IMPORTED_MODULE_6__["IntroductionDownloadPage"] }])
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](IntroductionDownloadPageModule, { declarations: [_introduction_download__WEBPACK_IMPORTED_MODULE_6__["IntroductionDownloadPage"]], imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
        _components_components_module__WEBPACK_IMPORTED_MODULE_5__["ComponentsModule"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] }); })();


/***/ }),

/***/ "xWVS":
/*!****************************************************!*\
  !*** ./src/app/pages/introduction/introduction.ts ***!
  \****************************************************/
/*! exports provided: IntroductionPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntroductionPage", function() { return IntroductionPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _services_sentry_error_handler_sentry_error_handler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/sentry-error-handler/sentry-error-handler */ "hPkG");
/* harmony import */ var _introduction_download_introduction_download__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../introduction-download/introduction-download */ "lkre");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");









function IntroductionPage_ion_segment_9_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ion-segment", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function IntroductionPage_ion_segment_9_Template_ion_segment_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r3.security = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "ion-segment-button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "ion-segment-button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx_r0.security);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](4, 3, "introduction.highest.label"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](8, 5, "introduction.medium.label"));
} }
function IntroductionPage_ng_container_10_p_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](1, "translate");
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](1, 1, "introduction.highest.text"), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeHtml"]);
} }
function IntroductionPage_ng_container_10_p_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](1, "translate");
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](1, 1, "introduction.highest.desktop_text"), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeHtml"]);
} }
function IntroductionPage_ng_container_10_ion_col_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ion-col", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "img", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function IntroductionPage_ng_container_10_ion_col_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ion-col", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "img", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function IntroductionPage_ng_container_10_ng_container_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "ion-row", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "ion-col", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "img", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "ion-col", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "ion-row", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "ion-col", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](10, "img", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "ion-col", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](14, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](15, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](16, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](7, 3, "introduction.communication.highest_text"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](14, 5, "introduction.vault.heading"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](16, 7, "introduction.vault.text"), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeHtml"]);
} }
function IntroductionPage_ng_container_10_ng_container_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "ion-row", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "ion-col", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "img", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "ion-col", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](8, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](7, 2, "introduction.vault.desktop_heading"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](9, 4, "introduction.vault.desktop_text"), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeHtml"]);
} }
function IntroductionPage_ng_container_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, IntroductionPage_ng_container_10_p_2_Template, 2, 3, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, IntroductionPage_ng_container_10_p_3_Template, 2, 3, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "ion-row", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, IntroductionPage_ng_container_10_ion_col_5_Template, 2, 0, "ion-col", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, IntroductionPage_ng_container_10_ion_col_6_Template, 2, 0, "ion-col", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "ion-col", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](10, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](11, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](12, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](13, IntroductionPage_ng_container_10_ng_container_13_Template, 17, 9, "ng-container", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](14, IntroductionPage_ng_container_10_ng_container_14_Template, 10, 6, "ng-container", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r1.isDesktop);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.isDesktop);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.isDesktop);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r1.isDesktop);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](10, 8, "introduction.wallet.heading"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](12, 10, "introduction.wallet.text"), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r1.isDesktop);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.isDesktop);
} }
function IntroductionPage_ng_container_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "ion-row", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "ion-col", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "img", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "ion-col", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](10, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](11, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](12, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "ion-row", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "ion-col", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](15, "img", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "ion-col", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](19, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "ion-row", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "ion-col", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](22, "img", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "ion-col", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](26, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](27, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](28, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](3, 6, "introduction.medium.text"), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](10, 8, "introduction.wallet.heading"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](12, 10, "introduction.wallet.text"), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](19, 12, "introduction.communication.medium_text"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](26, 14, "introduction.vault.heading"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](28, 16, "introduction.vault.text"), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeHtml"]);
} }
class IntroductionPage {
    constructor(platform, modalController) {
        this.platform = platform;
        this.modalController = modalController;
        this.security = 'highest';
        this.isDesktop = false;
        this.isDesktop = !this.platform.is('hybrid');
    }
    dismiss() {
        this.modalController.dismiss().catch(Object(_services_sentry_error_handler_sentry_error_handler__WEBPACK_IMPORTED_MODULE_2__["handleErrorSentry"])(_services_sentry_error_handler_sentry_error_handler__WEBPACK_IMPORTED_MODULE_2__["ErrorCategory"].NAVIGATION));
    }
    openIntroductionDownloadPage() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _introduction_download_introduction_download__WEBPACK_IMPORTED_MODULE_3__["IntroductionDownloadPage"]
            });
            modal.dismiss((shouldCloseAllModals) => {
                if (shouldCloseAllModals) {
                    this.dismiss();
                }
            });
            modal.present().catch(Object(_services_sentry_error_handler_sentry_error_handler__WEBPACK_IMPORTED_MODULE_2__["handleErrorSentry"])(_services_sentry_error_handler_sentry_error_handler__WEBPACK_IMPORTED_MODULE_2__["ErrorCategory"].IONIC_MODAL));
        });
    }
}
IntroductionPage.ɵfac = function IntroductionPage_Factory(t) { return new (t || IntroductionPage)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ModalController"])); };
IntroductionPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: IntroductionPage, selectors: [["page-introduction"]], decls: 19, vars: 12, consts: [[1, "ion-no-border"], ["slot", "end"], ["color", "secondary", 3, "click"], ["name", "close-outline"], ["forceOverflow", "false", 1, "ion-padding"], ["color", "secondary", "value", "highest", 3, "ngModel", "ngModelChange", 4, "ngIf"], [4, "ngIf"], ["vertical", "bottom", "horizontal", "end", "slot", "fixed"], ["id", "introduction-button", "shape", "round", "color", "secondary", 3, "click"], ["id", "dismiss-button", "shape", "round", "color", "primary", 3, "click"], ["color", "secondary", "value", "highest", 3, "ngModel", "ngModelChange"], ["value", "highest"], ["value", "medium"], [3, "innerHTML", 4, "ngIf"], [1, "ion-padding-top", "ion-align-items-center"], ["size", "5", 4, "ngIf"], ["size", "7"], [3, "innerHTML"], ["size", "5"], ["src", "./assets/img/airgap_onboarding_wallet-notebook.svg"], ["src", "./assets/img/airgap_onboarding_wallet.svg"], [1, "ion-padding-vertical", "ion-align-items-center"], ["size", "5", 1, "ion-text-center"], ["src", "./assets/img/qrcode.svg", 1, "connector--img"], [1, "ion-align-items-center"], ["src", "./assets/img/airgap_onboarding_vault.svg"], ["src", "./assets/img/signer-vault-ledger-desktop.svg"], ["src", "./assets/img/clone.svg", 1, "connector--img"]], template: function IntroductionPage_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ion-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "ion-toolbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "ion-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](4, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "ion-buttons", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "ion-button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function IntroductionPage_Template_ion_button_click_6_listener() { return ctx.dismiss(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](7, "ion-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "ion-content", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](9, IntroductionPage_ion_segment_9_Template, 9, 7, "ion-segment", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](10, IntroductionPage_ng_container_10_Template, 15, 12, "ng-container", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](11, IntroductionPage_ng_container_11_Template, 29, 18, "ng-container", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "ion-fab", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "ion-button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function IntroductionPage_Template_ion_button_click_13_listener() { return ctx.openIntroductionDownloadPage(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](15, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "ion-button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function IntroductionPage_Template_ion_button_click_16_listener() { return ctx.dismiss(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](18, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](4, 6, "introduction.title"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.isDesktop);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.security === "highest");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.security === "medium");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](15, 8, "introduction.vault-install_label"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](18, 10, "introduction.continue_label"), " ");
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonContent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonFab"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonSegment"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["SelectValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonSegmentButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonLabel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonRow"], _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonCol"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslatePipe"]], styles: [".connector--img[_ngcontent-%COMP%] {\n  height: 40px;\n  width: 40px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2ludHJvZHVjdGlvbi5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7QUFDRiIsImZpbGUiOiJpbnRyb2R1Y3Rpb24uc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb25uZWN0b3ItLWltZyB7XG4gIGhlaWdodDogNDBweDtcbiAgd2lkdGg6IDQwcHg7XG59XG4iXX0= */"] });


/***/ })

}]);
//# sourceMappingURL=pages-tabs-tabs-module.js.map
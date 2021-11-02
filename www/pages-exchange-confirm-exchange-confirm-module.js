(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-exchange-confirm-exchange-confirm-module"],{

/***/ "68Zl":
/*!*******************************************************************!*\
  !*** ./src/app/pages/exchange-confirm/exchange-confirm.module.ts ***!
  \*******************************************************************/
/*! exports provided: ExchangeConfirmPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExchangeConfirmPageModule", function() { return ExchangeConfirmPageModule; });
/* harmony import */ var _airgap_angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @airgap/angular-core */ "138U");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/components.module */ "j1ZV");
/* harmony import */ var _exchange_confirm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./exchange-confirm */ "ZUKC");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ "fXoL");










class ExchangeConfirmPageModule {
}
ExchangeConfirmPageModule.ɵfac = function ExchangeConfirmPageModule_Factory(t) { return new (t || ExchangeConfirmPageModule)(); };
ExchangeConfirmPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({ type: ExchangeConfirmPageModule });
ExchangeConfirmPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({ imports: [[
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_6__["ComponentsModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild([{ path: '', component: _exchange_confirm__WEBPACK_IMPORTED_MODULE_7__["ExchangeConfirmPage"] }]),
            _airgap_angular_core__WEBPACK_IMPORTED_MODULE_0__["AirGapAngularCoreModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](ExchangeConfirmPageModule, { declarations: [_exchange_confirm__WEBPACK_IMPORTED_MODULE_7__["ExchangeConfirmPage"]], imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _components_components_module__WEBPACK_IMPORTED_MODULE_6__["ComponentsModule"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _airgap_angular_core__WEBPACK_IMPORTED_MODULE_0__["AirGapAngularCoreModule"]] }); })();


/***/ }),

/***/ "ZUKC":
/*!************************************************************!*\
  !*** ./src/app/pages/exchange-confirm/exchange-confirm.ts ***!
  \************************************************************/
/*! exports provided: ExchangeConfirmPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExchangeConfirmPage", function() { return ExchangeConfirmPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _airgap_coinlib_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @airgap/coinlib-core */ "RKiA");
/* harmony import */ var _airgap_coinlib_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_airgap_coinlib_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bignumber.js */ "kB5k");
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(bignumber_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _services_account_account_provider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/account/account.provider */ "57MG");
/* harmony import */ var _services_browser_browser_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/browser/browser.service */ "jysE");
/* harmony import */ var _services_data_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/data/data.service */ "1y+R");
/* harmony import */ var _services_exchange_exchange__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/exchange/exchange */ "dW0/");
/* harmony import */ var _services_operations_operations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/operations/operations */ "nxqh");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _airgap_angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @airgap/angular-core */ "138U");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");




















function ExchangeConfirmPage_ion_row_47_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "ion-row", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ExchangeConfirmPage_ion_row_47_Template_ion_row_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return ctx_r2.changellyUrl(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "small", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](2, 1, "exchange-confirm.changelly_disclaimer"), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsanitizeHtml"]);
} }
function ExchangeConfirmPage_ion_row_48_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "ion-row", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ExchangeConfirmPage_ion_row_48_Template_ion_row_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return ctx_r4.changeNowUrl(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "small", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](2, 1, "exchange-confirm.changenow_disclaimer"), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsanitizeHtml"]);
} }
class ExchangeConfirmPage {
    constructor(exchangeProvider, route, operationsProvider, dataService, browserService, accountProvider) {
        var _a, _b;
        this.exchangeProvider = exchangeProvider;
        this.route = route;
        this.operationsProvider = operationsProvider;
        this.dataService = dataService;
        this.browserService = browserService;
        this.accountProvider = accountProvider;
        if (this.route.snapshot.data.special) {
            const info = this.route.snapshot.data.special;
            this.fromWallet = info.fromWallet;
            this.toWallet = info.toWallet;
            this.fromCurrency = info.fromCurrency;
            this.toCurrency = info.toCurrency;
            this.payoutAddress = info.payoutAddress;
            this.payinAddress = info.payinAddress;
            this.fee = info.fee;
            this.memo = info.memo;
            this.airGapTxs = (_a = info.transaction) === null || _a === void 0 ? void 0 : _a.details;
            this.unsignedTransaction = (_b = info.transaction) === null || _b === void 0 ? void 0 : _b.unsigned;
            this.amountExpectedFrom = info.amountExpectedFrom;
            this.amountExpectedTo = info.amountExpectedTo;
            this.feeFiatAmount = new bignumber_js__WEBPACK_IMPORTED_MODULE_3___default.a(this.fee).multipliedBy(this.fromWallet.currentMarketPrice).toString();
            this.fromFiatAmount = new bignumber_js__WEBPACK_IMPORTED_MODULE_3___default.a(this.amountExpectedFrom).multipliedBy(this.fromWallet.currentMarketPrice).toNumber();
            this.toFiatAmount = new bignumber_js__WEBPACK_IMPORTED_MODULE_3___default.a(this.amountExpectedTo).multipliedBy(this.toWallet.currentMarketPrice).toNumber();
        }
        this.exchangeProvider.getActiveExchange().subscribe((exchange) => {
            this.activeExchange = exchange;
        });
    }
    prepareTransaction() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                const info = this.unsignedTransaction
                    ? yield this.getInteractionInfoFromUnsignedTransaction()
                    : yield this.prepareTransactionAndGetInteractionInfo();
                this.dataService.setData(_services_data_data_service__WEBPACK_IMPORTED_MODULE_6__["DataServiceKey"].INTERACTION, info);
                this.accountProvider.startInteraction(info.wallet, info.data, info.type, info.airGapTxs);
            }
            catch (error) {
                //
            }
        });
    }
    getInteractionInfoFromUnsignedTransaction() {
        var _a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const wallet = this.fromWallet;
            const airGapTxs = (_a = this.airGapTxs) !== null && _a !== void 0 ? _a : (yield wallet.protocol.getTransactionDetails(this.unsignedTransaction));
            return {
                wallet,
                airGapTxs,
                data: this.unsignedTransaction.transaction,
                type: _airgap_coinlib_core__WEBPACK_IMPORTED_MODULE_1__["IACMessageType"].TransactionSignRequest
            };
        });
    }
    prepareTransactionAndGetInteractionInfo() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const wallet = this.fromWallet;
            const amount = new bignumber_js__WEBPACK_IMPORTED_MODULE_3___default.a(new bignumber_js__WEBPACK_IMPORTED_MODULE_3___default.a(this.amountExpectedFrom)).shiftedBy(wallet.protocol.decimals);
            const fee = new bignumber_js__WEBPACK_IMPORTED_MODULE_3___default.a(this.fee).shiftedBy(wallet.protocol.feeDecimals);
            const { airGapTxs, unsignedTx } = yield this.operationsProvider.prepareTransaction(wallet, this.payinAddress, amount, fee, this.accountProvider.getWalletList(), this.memo);
            return {
                wallet,
                airGapTxs,
                data: unsignedTx,
                type: _airgap_coinlib_core__WEBPACK_IMPORTED_MODULE_1__["IACMessageType"].TransactionSignRequest
            };
        });
    }
    changellyUrl() {
        this.browserService.openUrl('https://old.changelly.com/aml-kyc');
    }
    changeNowUrl() {
        this.browserService.openUrl('https://support.changenow.io/hc/en-us/articles/360011609979');
    }
}
ExchangeConfirmPage.ɵfac = function ExchangeConfirmPage_Factory(t) { return new (t || ExchangeConfirmPage)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_services_exchange_exchange__WEBPACK_IMPORTED_MODULE_7__["ExchangeProvider"]), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_services_operations_operations__WEBPACK_IMPORTED_MODULE_8__["OperationsProvider"]), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_services_data_data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_services_browser_browser_service__WEBPACK_IMPORTED_MODULE_5__["BrowserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_services_account_account_provider__WEBPACK_IMPORTED_MODULE_4__["AccountProvider"])); };
ExchangeConfirmPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({ type: ExchangeConfirmPage, selectors: [["page-exchange-confirm"]], decls: 53, vars: 47, consts: [[1, "ion-no-border"], ["fixed", "true", 1, "ion-no-padding"], ["slot", "start"], ["defaultHref", "/"], [1, "ion-padding-end"], [1, "ion-padding-start", "ion-padding-bottom", 3, "innerHTML"], [3, "address", "title", "hasSymbol", "symbol"], [1, "ion-align-items-center", "ion-padding-vertical"], ["size", "3", 1, "ion-no-padding"], [1, "ion-justify-content-center"], [1, "line--first"], ["size", "9", 1, "ion-padding-bottom"], ["position", "stacked", 1, "ion-text-uppercase"], ["item-content", "", 1, "typography--mono"], [1, "typography--mono"], [1, "line--second"], ["class", "ion-padding ion-margin-vertical", 3, "click", 4, "ngIf"], ["vertical", "bottom", "horizontal", "end", "slot", "fixed"], ["color", "primary", "shape", "round", 3, "click"], [1, "ion-padding", "ion-margin-vertical", 3, "click"], [3, "innerHTML"]], template: function ExchangeConfirmPage_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "ion-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "ion-grid", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "ion-toolbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "ion-buttons", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](4, "ion-back-button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "ion-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](7, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](8, "ion-content", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](9, "ion-grid", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](10, "h3", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](11, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](12, "airgap-titled-address", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](13, "ion-row", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](14, "ion-col", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](15, "ion-row", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](16, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](17, "ion-col", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](18, "ion-label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](20, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](21, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](22, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](24, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](26, "ion-label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](28, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](29, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](30, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](32, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](33, "airgap-titled-address", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](34, "ion-row", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](35, "ion-col", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](36, "ion-row", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](37, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](38, "ion-col", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](39, "ion-label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](40);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](41, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](42, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](43, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](44);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](45, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](46, "airgap-titled-address", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](47, ExchangeConfirmPage_ion_row_47_Template, 3, 3, "ion-row", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](48, ExchangeConfirmPage_ion_row_48_Template, 3, 3, "ion-row", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](49, "ion-fab", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](50, "ion-button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function ExchangeConfirmPage_Template_ion_button_click_50_listener() { return ctx.prepareTransaction(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](51);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](52, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](7, 26, "exchange-confirm.title"));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](11, 28, "exchange-confirm.heading"), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("address", ctx.fromWallet.receivingPublicAddress)("title", "exchange-confirm.sell_label")("hasSymbol", true)("symbol", ctx.fromCurrency);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](20, 30, "exchange-confirm.sell-amount_label"));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate2"]("", ctx.amountExpectedFrom, " (~$", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind2"](24, 32, ctx.fromFiatAmount, "1.2-2"), ")");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](28, 35, "exchange-confirm.fee_label"));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate2"]("", ctx.fee, " (~$", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind2"](32, 37, ctx.feeFiatAmount, "1.2-2"), ")");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("address", ctx.payinAddress)("title", "exchange-confirm.exchange-address_label")("hasSymbol", true)("symbol", ctx.fromCurrency);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](41, 40, "exchange-confirm.buy-amount_label"));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate2"]("", ctx.amountExpectedTo, " (~$", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind2"](45, 42, ctx.toFiatAmount, "1.2-2"), ")");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("address", ctx.toWallet.receivingPublicAddress)("title", "exchange-confirm.receiving-to_label")("hasSymbol", true)("symbol", ctx.toCurrency);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.activeExchange === "Changelly");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.activeExchange === "ChangeNow");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](52, 45, "exchange-confirm.confirm-exchange_label"), " ");
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_10__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["IonGrid"], _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["IonBackButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["IonBackButtonDelegate"], _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["IonContent"], _airgap_angular_core__WEBPACK_IMPORTED_MODULE_11__["TitledAddressComponent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["IonRow"], _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["IonCol"], _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["IonLabel"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["IonFab"], _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["IonButton"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__["TranslatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["DecimalPipe"]], styles: [".line--first[_ngcontent-%COMP%] {\n  height: 96px;\n}\n\n.line--second[_ngcontent-%COMP%] {\n  height: 48px;\n}\n\n.line--first[_ngcontent-%COMP%], .line--second[_ngcontent-%COMP%] {\n  border-left: 1px solid var(--ion-color-dark);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2V4Y2hhbmdlLWNvbmZpcm0uc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7QUFDRjs7QUFDQTtFQUNFLFlBQUE7QUFFRjs7QUFBQTs7RUFFRSw0Q0FBQTtBQUdGIiwiZmlsZSI6ImV4Y2hhbmdlLWNvbmZpcm0uc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5saW5lLS1maXJzdCB7XG4gIGhlaWdodDogOTZweDtcbn1cbi5saW5lLS1zZWNvbmQge1xuICBoZWlnaHQ6IDQ4cHg7XG59XG4ubGluZS0tZmlyc3QsXG4ubGluZS0tc2Vjb25kIHtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItZGFyayk7XG59XG4iXX0= */"] });


/***/ })

}]);
//# sourceMappingURL=pages-exchange-confirm-exchange-confirm-module.js.map
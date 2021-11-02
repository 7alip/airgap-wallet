(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-ledger-sign-ledger-sign-module"],{

/***/ "DEZm":
/*!**************************************************!*\
  !*** ./src/app/pages/ledger-sign/ledger-sign.ts ***!
  \**************************************************/
/*! exports provided: LedgerSignPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LedgerSignPage", function() { return LedgerSignPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _airgap_coinlib_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @airgap/coinlib-core */ "RKiA");
/* harmony import */ var _airgap_coinlib_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_airgap_coinlib_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bignumber.js */ "kB5k");
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(bignumber_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var src_app_services_data_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/data/data.service */ "1y+R");
/* harmony import */ var src_app_services_ledger_ledger_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/ledger/ledger-service */ "z26V");
/* harmony import */ var src_app_services_sentry_error_handler_sentry_error_handler__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/sentry-error-handler/sentry-error-handler */ "hPkG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _airgap_angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @airgap/angular-core */ "138U");

















const _c0 = function (a0) { return { protocol: a0, maxDigits: undefined }; };
const _c1 = function (a0) { return { protocol: a0 }; };
function LedgerSignPage_ng_container_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "ion-row", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "ion-col", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](5, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](6, "amountConverter");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "ion-col", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](8, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](10, "ion-col", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](11, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](13, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](14, "feeConverter");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](15, "ion-col", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](16, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](17, "Amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](18, "ion-col", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](19, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](20, "Operations");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](21, "ion-col", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](22, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](23, "Fee");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](5, 3, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind2"](6, 5, ctx_r0.aggregatedInfo.totalAmount.toFixed(), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction1"](13, _c0, ctx_r0.airGapTxs[0].protocolIdentifier))), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r0.aggregatedInfo.numberOfTxs);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](13, 8, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind2"](14, 10, ctx_r0.aggregatedInfo.totalFees.toFixed(), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction1"](15, _c1, ctx_r0.airGapTxs[0].protocolIdentifier))));
} }
function LedgerSignPage_ng_container_15_airgap_from_to_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "airgap-from-to", 13);
} if (rf & 2) {
    const airGapTx_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("transaction", airGapTx_r3);
} }
function LedgerSignPage_ng_container_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, LedgerSignPage_ng_container_15_airgap_from_to_1_Template, 1, 1, "airgap-from-to", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx_r1.airGapTxs);
} }
const _c2 = function (a0) { return { title: a0 }; };
class LedgerSignPage {
    constructor(router, route, dataService, alertCtrl, loadingController, translateService, ledgerService) {
        this.router = router;
        this.route = route;
        this.dataService = dataService;
        this.alertCtrl = alertCtrl;
        this.loadingController = loadingController;
        this.translateService = translateService;
        this.ledgerService = ledgerService;
        this.wallet = null;
        this.airGapTxs = null;
        if (this.route.snapshot.data.special) {
            const info = this.route.snapshot.data.special;
            this.wallet = info.wallet;
            this.airGapTxs = info.airGapTxs;
            this.unsignedTx = info.data;
            if (this.airGapTxs.length > 1 &&
                this.airGapTxs.every((tx) => tx.protocolIdentifier === this.airGapTxs[0].protocolIdentifier)) {
                this.aggregatedInfo = {
                    numberOfTxs: this.airGapTxs.length,
                    totalAmount: this.airGapTxs
                        .map((tx) => new bignumber_js__WEBPACK_IMPORTED_MODULE_3___default.a(tx.amount))
                        .filter((amount) => !amount.isNaN())
                        .reduce((pv, cv) => pv.plus(cv), new bignumber_js__WEBPACK_IMPORTED_MODULE_3___default.a(0)),
                    totalFees: this.airGapTxs.reduce((pv, cv) => pv.plus(cv.fee), new bignumber_js__WEBPACK_IMPORTED_MODULE_3___default.a(0))
                };
            }
        }
        this.connectWithLedger();
    }
    connectWithLedger() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.showLoader('Connecting device...');
            try {
                yield this.ledgerService.openConnection(this.wallet.protocol.identifier);
            }
            catch (error) {
                console.warn(error);
                this.promptError(error);
            }
            finally {
                this.dismissLoader();
            }
        });
    }
    signTx() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.showLoader('Signing transaction...');
            try {
                const signedTx = yield this.ledgerService.signTransaction(this.wallet.protocol.identifier, this.unsignedTx);
                const signedTransactionSync = {
                    id: Object(_airgap_coinlib_core__WEBPACK_IMPORTED_MODULE_2__["generateId"])(8),
                    type: _airgap_coinlib_core__WEBPACK_IMPORTED_MODULE_2__["IACMessageType"].MessageSignResponse,
                    protocol: this.wallet.protocol.identifier,
                    payload: {
                        transaction: signedTx,
                        accountIdentifier: this.wallet.publicKey.substr(-6)
                    }
                };
                const info = {
                    messageDefinitionObjects: [signedTransactionSync]
                };
                this.dataService.setData(src_app_services_data_data_service__WEBPACK_IMPORTED_MODULE_6__["DataServiceKey"].TRANSACTION, info);
                this.router.navigateByUrl(`/transaction-confirm/${src_app_services_data_data_service__WEBPACK_IMPORTED_MODULE_6__["DataServiceKey"].TRANSACTION}`).catch(Object(src_app_services_sentry_error_handler_sentry_error_handler__WEBPACK_IMPORTED_MODULE_8__["handleErrorSentry"])(src_app_services_sentry_error_handler_sentry_error_handler__WEBPACK_IMPORTED_MODULE_8__["ErrorCategory"].NAVIGATION));
            }
            catch (error) {
                console.warn(error);
                this.promptError(error);
            }
            finally {
                this.dismissLoader();
            }
        });
    }
    promptError(error) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let message;
            if (typeof error === 'string') {
                if (error === 'Rejected') {
                    return;
                }
                message = error;
            }
            else if (error instanceof Error) {
                message = error.message;
            }
            else {
                message = this.translateService.instant('ledger-sign.error-alert.unknown');
            }
            const alert = yield this.alertCtrl.create({
                header: this.translateService.instant('ledger-sign.error-alert.header'),
                message,
                buttons: [
                    {
                        text: this.translateService.instant('ledger-sign.error-alert.confirm')
                    }
                ]
            });
            alert.present().catch(Object(src_app_services_sentry_error_handler_sentry_error_handler__WEBPACK_IMPORTED_MODULE_8__["handleErrorSentry"])(src_app_services_sentry_error_handler_sentry_error_handler__WEBPACK_IMPORTED_MODULE_8__["ErrorCategory"].IONIC_ALERT));
        });
    }
    showLoader(message) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.dismissLoader();
            this.loader = yield this.loadingController.create({ message });
            yield this.loader.present().catch(Object(src_app_services_sentry_error_handler_sentry_error_handler__WEBPACK_IMPORTED_MODULE_8__["handleErrorSentry"])(src_app_services_sentry_error_handler_sentry_error_handler__WEBPACK_IMPORTED_MODULE_8__["ErrorCategory"].IONIC_LOADER));
        });
    }
    dismissLoader() {
        if (this.loader) {
            this.loader.dismiss().catch(Object(src_app_services_sentry_error_handler_sentry_error_handler__WEBPACK_IMPORTED_MODULE_8__["handleErrorSentry"])(src_app_services_sentry_error_handler_sentry_error_handler__WEBPACK_IMPORTED_MODULE_8__["ErrorCategory"].IONIC_LOADER));
            this.loader = null;
        }
    }
}
LedgerSignPage.ɵfac = function LedgerSignPage_Factory(t) { return new (t || LedgerSignPage)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_services_data_data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"]), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_services_ledger_ledger_service__WEBPACK_IMPORTED_MODULE_7__["LedgerService"])); };
LedgerSignPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({ type: LedgerSignPage, selectors: [["page-ledger-sign"]], decls: 20, vars: 16, consts: [[1, "ion-no-border"], ["fixed", "true", 1, "ion-no-padding"], ["slot", "start"], ["defaultHref", "/"], [1, "ion-padding", "ion-margin-bottom"], [3, "innerHTML"], [4, "ngIf"], ["vertical", "bottom", "horizontal", "end", "slot", "fixed"], ["id", "confirm", "size", "default", "color", "primary", "shape", "round", 3, "click"], [1, "ion-padding-bottom", "ion-text-center"], ["size", "4", 1, "content--align__center-center"], ["size", "4"], ["class", "ion-padding-horizontal", 3, "transaction", 4, "ngFor", "ngForOf"], [1, "ion-padding-horizontal", 3, "transaction"]], template: function LedgerSignPage_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "ion-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "ion-grid", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "ion-toolbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "ion-buttons", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](4, "ion-back-button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "ion-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](7, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](8, "uppercase");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](9, "ion-content", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](10, "ion-grid", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](11, "ion-row");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](12, "h5", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](13, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](14, LedgerSignPage_ng_container_14_Template, 24, 17, "ng-container", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](15, LedgerSignPage_ng_container_15_Template, 2, 1, "ng-container", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](16, "ion-fab", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](17, "ion-button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function LedgerSignPage_Template_ion_button_click_17_listener() { return ctx.signTx(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](19, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind2"](7, 5, "ledger-sign.title", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction1"](14, _c2, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](8, 8, ctx.wallet.protocol.identifier))));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](13, 10, "ledger-sign.text"), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.airGapTxs && ctx.airGapTxs.length > 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.airGapTxs);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](19, 12, "ledger-sign.confirm_label"), " ");
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonGrid"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonBackButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonBackButtonDelegate"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonRow"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonFab"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonCol"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _airgap_angular_core__WEBPACK_IMPORTED_MODULE_11__["FromToComponent"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["UpperCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["AsyncPipe"], _airgap_angular_core__WEBPACK_IMPORTED_MODULE_11__["AmountConverterPipe"], _airgap_angular_core__WEBPACK_IMPORTED_MODULE_11__["FeeConverterPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsZWRnZXItc2lnbi5zY3NzIn0= */"] });


/***/ }),

/***/ "awK3":
/*!*********************************************************!*\
  !*** ./src/app/pages/ledger-sign/ledger-sign.module.ts ***!
  \*********************************************************/
/*! exports provided: LedgerSignPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LedgerSignPageModule", function() { return LedgerSignPageModule; });
/* harmony import */ var _airgap_angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @airgap/angular-core */ "138U");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/components/components.module */ "j1ZV");
/* harmony import */ var src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/pipes/pipes.module */ "iTUp");
/* harmony import */ var _ledger_sign__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ledger-sign */ "DEZm");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ "fXoL");










class LedgerSignPageModule {
}
LedgerSignPageModule.ɵfac = function LedgerSignPageModule_Factory(t) { return new (t || LedgerSignPageModule)(); };
LedgerSignPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({ type: LedgerSignPageModule });
LedgerSignPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({ imports: [[
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_5__["ComponentsModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"],
            src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_6__["PipesModule"],
            _airgap_angular_core__WEBPACK_IMPORTED_MODULE_0__["AirGapAngularCoreModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _ledger_sign__WEBPACK_IMPORTED_MODULE_7__["LedgerSignPage"] }])
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](LedgerSignPageModule, { declarations: [_ledger_sign__WEBPACK_IMPORTED_MODULE_7__["LedgerSignPage"]], imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        src_app_components_components_module__WEBPACK_IMPORTED_MODULE_5__["ComponentsModule"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"],
        src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_6__["PipesModule"],
        _airgap_angular_core__WEBPACK_IMPORTED_MODULE_0__["AirGapAngularCoreModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] }); })();


/***/ })

}]);
//# sourceMappingURL=pages-ledger-sign-ledger-sign-module.js.map
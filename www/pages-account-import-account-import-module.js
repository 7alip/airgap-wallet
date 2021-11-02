(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-account-import-account-import-module"],{

/***/ "MsxR":
/*!***************************************************************!*\
  !*** ./src/app/pages/account-import/account-import.module.ts ***!
  \***************************************************************/
/*! exports provided: AccountImportPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountImportPageModule", function() { return AccountImportPageModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/components.module */ "j1ZV");
/* harmony import */ var _account_import__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./account-import */ "ggQK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "fXoL");









class AccountImportPageModule {
}
AccountImportPageModule.ɵfac = function AccountImportPageModule_Factory(t) { return new (t || AccountImportPageModule)(); };
AccountImportPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: AccountImportPageModule });
AccountImportPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ imports: [[
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_5__["ComponentsModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _account_import__WEBPACK_IMPORTED_MODULE_6__["AccountImportPage"] }])
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](AccountImportPageModule, { declarations: [_account_import__WEBPACK_IMPORTED_MODULE_6__["AccountImportPage"]], imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
        _components_components_module__WEBPACK_IMPORTED_MODULE_5__["ComponentsModule"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] }); })();


/***/ }),

/***/ "ggQK":
/*!********************************************************!*\
  !*** ./src/app/pages/account-import/account-import.ts ***!
  \********************************************************/
/*! exports provided: AccountImportPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountImportPage", function() { return AccountImportPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _airgap_angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @airgap/angular-core */ "138U");
/* harmony import */ var _airgap_coinlib_core_wallet_AirGapWallet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @airgap/coinlib-core/wallet/AirGapWallet */ "7pxb");
/* harmony import */ var _airgap_coinlib_core_wallet_AirGapWallet__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_airgap_coinlib_core_wallet_AirGapWallet__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _services_account_account_provider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/account/account.provider */ "57MG");
/* harmony import */ var _services_data_data_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/data/data.service */ "1y+R");
/* harmony import */ var _services_sentry_error_handler_sentry_error_handler__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../services/sentry-error-handler/sentry-error-handler */ "hPkG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _components_portfolio_item_portfolio_item__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/portfolio-item/portfolio-item */ "F07p");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");



















function AccountImportPage_ng_container_15_ng_container_5_ng_container_1_ion_item_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ion-item", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 1, "account-import.warning"), " ");
} }
function AccountImportPage_ng_container_15_ng_container_5_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "portfolio-item", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, AccountImportPage_ng_container_15_ng_container_5_ng_container_1_ion_item_2_Template, 3, 3, "ion-item", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const accountImport_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("wallet", accountImport_r3.wallet);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", accountImport_r3.alreadyExists);
} }
function AccountImportPage_ng_container_15_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, AccountImportPage_ng_container_15_ng_container_5_ng_container_1_Template, 3, 2, "ng-container", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const accountImport_r3 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", accountImport_r3.wallet.status === ctx_r2.AirGapWalletStatus.ACTIVE);
} }
function AccountImportPage_ng_container_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0, 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "ion-item", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "ion-list");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, AccountImportPage_ng_container_15_ng_container_5_Template, 2, 1, "ng-container", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const accountImports_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](accountImports_r1.key);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", accountImports_r1.value);
} }
class AccountImportPage {
    constructor(platform, loadingCtrl, navController, route, router, accountProvider, dataService, ngZone) {
        this.platform = platform;
        this.loadingCtrl = loadingCtrl;
        this.navController = navController;
        this.route = route;
        this.router = router;
        this.accountProvider = accountProvider;
        this.dataService = dataService;
        this.ngZone = ngZone;
        this.accountImports = new Map();
        this.AirGapWalletStatus = _airgap_coinlib_core_wallet_AirGapWallet__WEBPACK_IMPORTED_MODULE_2__["AirGapWalletStatus"];
        this.ngDestroyed$ = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        if (!this.route.snapshot.data.special) {
            this.router.navigateByUrl('/');
            window.alert("The address you're trying to access is invalid.");
            throw new Error();
        }
    }
    get allAccountImports() {
        return Object(_airgap_angular_core__WEBPACK_IMPORTED_MODULE_1__["flattened"])(Array.from(this.accountImports.values()));
    }
    ionViewWillEnter() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.accountImports.clear();
            if (this.route.snapshot.data.special) {
                this.dataService
                    .getAccountSyncs()
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(this.ngDestroyed$))
                    .subscribe((accountSyncs) => {
                    accountSyncs.forEach((accountSync) => {
                        const groupLabel = accountSync.groupLabel;
                        if (!this.accountImports.has(groupLabel)) {
                            this.accountImports.set(groupLabel, []);
                        }
                        this.accountImports.get(groupLabel).push(Object.assign(Object.assign({}, accountSync), { alreadyExists: false }));
                    });
                    this.ionViewDidEnter();
                });
            }
            yield this.platform.ready();
            this.loading = yield this.loadingCtrl.create({
                message: 'Syncing...',
                backdropDismiss: true
            });
            this.loading.present().catch(Object(_services_sentry_error_handler_sentry_error_handler__WEBPACK_IMPORTED_MODULE_10__["handleErrorSentry"])(_services_sentry_error_handler_sentry_error_handler__WEBPACK_IMPORTED_MODULE_10__["ErrorCategory"].NAVIGATION));
        });
    }
    ionViewDidEnter() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const message = this.allAccountImports.map((accountImport) => {
                return {
                    protocolIdentifier: accountImport.wallet.protocol.identifier,
                    publicKey: accountImport.wallet.publicKey,
                    isExtendedPublicKey: accountImport.wallet.isExtendedPublicKey,
                    derivationPath: accountImport.wallet.derivationPath,
                    masterFingerprint: accountImport.wallet.masterFingerprint,
                    status: accountImport.wallet.status
                };
            });
            const airGapWorker = new Worker('./assets/workers/airgap-coin-lib.js');
            airGapWorker.postMessage(message);
            airGapWorker.onmessage = (event) => {
                const derivedAddressesMap = event.data;
                this.allAccountImports.forEach((accountImport) => {
                    accountImport.alreadyExists = this.accountProvider.walletExists(accountImport.wallet);
                    const key = `${accountImport.wallet.protocol.identifier}_${accountImport.wallet.publicKey}`;
                    accountImport.wallet.addresses = derivedAddressesMap[key];
                    accountImport.wallet
                        .synchronize()
                        .then(() => {
                        if (accountImport.wallet.currentBalance !== undefined && accountImport.wallet.currentBalance.gt(0)) {
                            accountImport.wallet.status = _airgap_coinlib_core_wallet_AirGapWallet__WEBPACK_IMPORTED_MODULE_2__["AirGapWalletStatus"].ACTIVE;
                        }
                        this.ngZone.run(() => {
                            this.accountProvider.triggerWalletChanged();
                        });
                    })
                        .catch(Object(_services_sentry_error_handler_sentry_error_handler__WEBPACK_IMPORTED_MODULE_10__["handleErrorSentry"])(_services_sentry_error_handler_sentry_error_handler__WEBPACK_IMPORTED_MODULE_10__["ErrorCategory"].WALLET_PROVIDER));
                    this.loading.dismiss().catch(Object(_services_sentry_error_handler_sentry_error_handler__WEBPACK_IMPORTED_MODULE_10__["handleErrorSentry"])(_services_sentry_error_handler_sentry_error_handler__WEBPACK_IMPORTED_MODULE_10__["ErrorCategory"].NAVIGATION));
                });
            };
        });
    }
    ngOnDestroy() {
        this.ngDestroyed$.next();
        this.ngDestroyed$.complete();
    }
    dismiss() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.navController.back();
        });
    }
    import() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const addWalletInfos = this.allAccountImports.map((accountimport) => {
                return {
                    walletToAdd: accountimport.wallet,
                    groupId: accountimport.groupId,
                    groupLabel: accountimport.groupLabel,
                    interactionSetting: accountimport.interactionSetting,
                    options: { override: true }
                };
            });
            yield this.accountProvider.addWallets(addWalletInfos);
            addWalletInfos.forEach((addWalletInfo) => {
                this.accountProvider.setInteractionSettingForWalletGroupByWallet(addWalletInfo.walletToAdd, addWalletInfo.interactionSetting);
            });
            yield this.router.navigateByUrl('/tabs/portfolio');
        });
    }
}
AccountImportPage.ɵfac = function AccountImportPage_Factory(t) { return new (t || AccountImportPage)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_account_account_provider__WEBPACK_IMPORTED_MODULE_8__["AccountProvider"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_data_data_service__WEBPACK_IMPORTED_MODULE_9__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"])); };
AccountImportPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: AccountImportPage, selectors: [["page-account-import"]], decls: 24, vars: 15, consts: [[1, "ion-no-border"], ["fixed", "true", 1, "ion-no-padding"], ["slot", "start"], ["defaultHref", "/"], [1, "ion-padding"], ["class", "ion-margin-bottom", 4, "ngFor", "ngForOf"], ["vertical", "bottom", "horizontal", "end", "slot", "fixed"], ["id", "dismiss", "shape", "round", "color", "secondary", 3, "click"], ["id", "import", "shape", "round", "color", "primary", 3, "click"], [1, "ion-margin-bottom"], ["lines", "none"], [4, "ngFor", "ngForOf"], [4, "ngIf"], [3, "wallet"], ["color", "warning", "class", "ion-margin-top ion-text-wrap", 4, "ngIf"], ["color", "warning", 1, "ion-margin-top", "ion-text-wrap"]], template: function AccountImportPage_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ion-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "ion-grid", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "ion-toolbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "ion-buttons", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "ion-back-button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "ion-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](7, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "ion-content", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "ion-grid", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "ion-row");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](13, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "ion-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](15, AccountImportPage_ng_container_15_Template, 6, 2, "ng-container", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](16, "keyvalue");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "ion-fab", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "ion-button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AccountImportPage_Template_ion_button_click_18_listener() { return ctx.dismiss(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](20, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "ion-button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AccountImportPage_Template_ion_button_click_21_listener() { return ctx.import(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](23, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](7, 5, "account-import.title"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](13, 7, "account-import.import-text"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](16, 9, ctx.accountImports));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](20, 11, "account-import.cancel_label"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](23, 13, "account-import.import_label"), " ");
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonGrid"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonBackButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonBackButtonDelegate"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonRow"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonList"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonFab"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonLabel"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _components_portfolio_item_portfolio_item__WEBPACK_IMPORTED_MODULE_12__["PortfolioItemComponent"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__["TranslatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["KeyValuePipe"]], encapsulation: 2 });


/***/ })

}]);
//# sourceMappingURL=pages-account-import-account-import-module.js.map
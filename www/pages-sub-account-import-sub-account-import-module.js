(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-sub-account-import-sub-account-import-module"],{

/***/ "MvGR":
/*!****************************************************************!*\
  !*** ./src/app/pages/sub-account-import/sub-account-import.ts ***!
  \****************************************************************/
/*! exports provided: SubAccountImportPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubAccountImportPage", function() { return SubAccountImportPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _airgap_angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @airgap/angular-core */ "138U");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _airgap_coinlib_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @airgap/coinlib-core */ "RKiA");
/* harmony import */ var _airgap_coinlib_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_airgap_coinlib_core__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_services_data_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/data/data.service */ "1y+R");
/* harmony import */ var src_app_services_price_price_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/price/price.service */ "QMTT");
/* harmony import */ var _services_account_account_provider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/account/account.provider */ "57MG");
/* harmony import */ var _services_sentry_error_handler_sentry_error_handler__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/sentry-error-handler/sentry-error-handler */ "hPkG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _components_portfolio_item_portfolio_item__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/portfolio-item/portfolio-item */ "F07p");
/* harmony import */ var _components_empty_state_empty_state__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../components/empty-state/empty-state */ "1Mpf");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");




















function SubAccountImportPage_ion_grid_9_ion_list_3_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "ion-list", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "portfolio-item", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function SubAccountImportPage_ion_grid_9_ion_list_3_Template_portfolio_item_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r5); const walletWithGroup_r3 = ctx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2); return ctx_r4.importWallet(walletWithGroup_r3[0], walletWithGroup_r3[1]); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const walletWithGroup_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("wallet", walletWithGroup_r3[1]);
} }
const _c0 = function (a0) { return { tokenName: a0 }; };
function SubAccountImportPage_ion_grid_9_empty_state_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "empty-state", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](1, "translate");
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("text", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind2"](1, 2, "sub-account-import.empty_text", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction1"](5, _c0, ctx_r2.subProtocol.name)))("imageName", "no-imports.svg");
} }
const _c1 = function (a0) { return { subProtocolName: a0 }; };
const _c2 = function (a0) { return { typeLabel: a0 }; };
function SubAccountImportPage_ion_grid_9_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "ion-grid", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "p", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](3, SubAccountImportPage_ion_grid_9_ion_list_3_Template, 2, 1, "ion-list", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](4, SubAccountImportPage_ion_grid_9_empty_state_4_Template, 2, 7, "empty-state", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "ion-fab", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "ion-button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function SubAccountImportPage_ion_grid_9_Template_ion_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return ctx_r6.importWallets(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](7, "ion-icon", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](10, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind2"](2, 5, "sub-account-import.text", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction1"](13, _c1, ctx_r0.subProtocol.name)), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx_r0.subWalletsWithGroups);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r0.subWalletsWithGroups.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("disabled", ctx_r0.subWalletsWithGroups.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind2"](9, 8, "sub-account-import.import-all_label", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction1"](15, _c2, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](10, 11, ctx_r0.typeLabel))), " ");
} }
class SubAccountImportPage {
    constructor(router, route, accountProvider, priceService, protocolService, dataService) {
        this.router = router;
        this.route = route;
        this.accountProvider = accountProvider;
        this.priceService = priceService;
        this.protocolService = protocolService;
        this.typeLabel = '';
        this.subWalletsWithGroups = [];
        let info;
        info = dataService.getData(src_app_services_data_data_service__WEBPACK_IMPORTED_MODULE_5__["DataServiceKey"].PROTOCOL);
        if (info !== undefined) {
            this.subProtocolIdentifier = info.subProtocolIdentifier;
            this.networkIdentifier = info.networkIdentifier;
            this.protocolService.getProtocol(this.subProtocolIdentifier, this.networkIdentifier).then((protocol) => {
                this.subProtocol = protocol;
            });
        }
        else {
            this.subProtocolIdentifier = this.route.snapshot.params.protocolID;
            this.networkIdentifier = this.route.snapshot.params.networkID;
            this.protocolService.getProtocol(this.subProtocolIdentifier, this.networkIdentifier).then((protocol) => {
                this.subProtocol = protocol;
            });
        }
        this.accountProvider.wallets$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((mainAccounts) => mainAccounts.filter((wallet) => wallet.status === _airgap_coinlib_core__WEBPACK_IMPORTED_MODULE_3__["AirGapWalletStatus"].ACTIVE &&
            wallet.protocol.identifier === Object(_airgap_angular_core__WEBPACK_IMPORTED_MODULE_1__["getMainIdentifier"])(this.subProtocolIdentifier) &&
            wallet.protocol.options.network.type === _airgap_coinlib_core__WEBPACK_IMPORTED_MODULE_3__["NetworkType"].MAINNET)))
            .subscribe((mainAccounts) => {
            const promises = mainAccounts.map((mainAccount) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                const wallet = this.accountProvider.walletByPublicKeyAndProtocolAndAddressIndex(mainAccount.publicKey, this.subProtocolIdentifier);
                if (!wallet || wallet.status !== _airgap_coinlib_core__WEBPACK_IMPORTED_MODULE_3__["AirGapWalletStatus"].ACTIVE) {
                    const protocol = yield this.protocolService.getProtocol(this.subProtocolIdentifier, this.networkIdentifier);
                    const walletGroup = this.accountProvider.findWalletGroup(mainAccount);
                    const airGapMarketWallet = new _airgap_coinlib_core__WEBPACK_IMPORTED_MODULE_3__["AirGapMarketWallet"](protocol, mainAccount.publicKey, mainAccount.isExtendedPublicKey, mainAccount.derivationPath, mainAccount.masterFingerprint, mainAccount.status, this.priceService);
                    airGapMarketWallet.addresses = mainAccount.addresses;
                    this.subWalletsWithGroups.push([walletGroup, airGapMarketWallet]);
                    return airGapMarketWallet.synchronize();
                }
            }));
            Promise.all(promises)
                .then(() => this.accountProvider.triggerWalletChanged())
                .catch(Object(_services_sentry_error_handler_sentry_error_handler__WEBPACK_IMPORTED_MODULE_8__["handleErrorSentry"])(_services_sentry_error_handler_sentry_error_handler__WEBPACK_IMPORTED_MODULE_8__["ErrorCategory"].COINLIB));
        });
    }
    importWallets() {
        const walletAddInfos = this.subWalletsWithGroups.map(([group, subWallet]) => {
            return {
                walletToAdd: subWallet,
                groupId: group !== undefined ? group.id : undefined,
                groupLabel: group !== undefined ? group.label : undefined
            };
        });
        this.accountProvider.addWallets(walletAddInfos).catch(Object(_services_sentry_error_handler_sentry_error_handler__WEBPACK_IMPORTED_MODULE_8__["handleErrorSentry"])(_services_sentry_error_handler_sentry_error_handler__WEBPACK_IMPORTED_MODULE_8__["ErrorCategory"].WALLET_PROVIDER));
        this.popToRoot();
    }
    importWallet(group, subWallet) {
        const walletAddInfos = [
            {
                walletToAdd: subWallet,
                groupId: group !== undefined ? group.id : undefined,
                groupLabel: group !== undefined ? group.label : undefined
            }
        ];
        this.accountProvider.addWallets(walletAddInfos).catch(Object(_services_sentry_error_handler_sentry_error_handler__WEBPACK_IMPORTED_MODULE_8__["handleErrorSentry"])(_services_sentry_error_handler_sentry_error_handler__WEBPACK_IMPORTED_MODULE_8__["ErrorCategory"].WALLET_PROVIDER));
        this.popToRoot();
    }
    popToRoot() {
        this.router.navigateByUrl('/tabs/portfolio').catch(Object(_services_sentry_error_handler_sentry_error_handler__WEBPACK_IMPORTED_MODULE_8__["handleErrorSentry"])(_services_sentry_error_handler_sentry_error_handler__WEBPACK_IMPORTED_MODULE_8__["ErrorCategory"].NAVIGATION));
    }
}
SubAccountImportPage.ɵfac = function SubAccountImportPage_Factory(t) { return new (t || SubAccountImportPage)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_services_account_account_provider__WEBPACK_IMPORTED_MODULE_7__["AccountProvider"]), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_services_price_price_service__WEBPACK_IMPORTED_MODULE_6__["PriceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_airgap_angular_core__WEBPACK_IMPORTED_MODULE_1__["ProtocolService"]), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_services_data_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"])); };
SubAccountImportPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({ type: SubAccountImportPage, selectors: [["page-sub-account-import"]], decls: 10, vars: 4, consts: [[1, "ion-no-border"], ["fixed", "true", 1, "ion-no-padding"], ["slot", "start"], ["defaultHref", "/"], ["fixed", "true", "class", "ion-no-padding", 4, "ngIf"], [1, "ion-padding-horizontal", 3, "innerHTML"], ["lines", "none", "class", "ion-margin-top", 4, "ngFor", "ngForOf"], [3, "text", "imageName", 4, "ngIf"], ["vertical", "bottom", "horizontal", "end", "slot", "fixed"], ["shape", "round", "color", "secondary", 3, "disabled", "click"], ["slot", "start", "name", "add"], ["lines", "none", 1, "ion-margin-top"], ["tappable", "", 3, "wallet", "click"], [3, "text", "imageName"]], template: function SubAccountImportPage_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](8, "ion-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](9, SubAccountImportPage_ion_grid_9_Template, 11, 17, "ion-grid", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](7, 2, "sub-account-import.title"));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.subProtocol);
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_10__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["IonGrid"], _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["IonBackButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["IonBackButtonDelegate"], _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["IonContent"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["IonFab"], _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["IonList"], _components_portfolio_item_portfolio_item__WEBPACK_IMPORTED_MODULE_12__["PortfolioItemComponent"], _components_empty_state_empty_state__WEBPACK_IMPORTED_MODULE_13__["EmptyStateComponent"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__["TranslatePipe"]], encapsulation: 2 });


/***/ }),

/***/ "Q4oi":
/*!***********************************************************************!*\
  !*** ./src/app/pages/sub-account-import/sub-account-import.module.ts ***!
  \***********************************************************************/
/*! exports provided: SubAccountImportPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubAccountImportPageModule", function() { return SubAccountImportPageModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/components.module */ "j1ZV");
/* harmony import */ var _sub_account_import__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sub-account-import */ "MvGR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "fXoL");









class SubAccountImportPageModule {
}
SubAccountImportPageModule.ɵfac = function SubAccountImportPageModule_Factory(t) { return new (t || SubAccountImportPageModule)(); };
SubAccountImportPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: SubAccountImportPageModule });
SubAccountImportPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ imports: [[
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_5__["ComponentsModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _sub_account_import__WEBPACK_IMPORTED_MODULE_6__["SubAccountImportPage"] }])
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](SubAccountImportPageModule, { declarations: [_sub_account_import__WEBPACK_IMPORTED_MODULE_6__["SubAccountImportPage"]], imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
        _components_components_module__WEBPACK_IMPORTED_MODULE_5__["ComponentsModule"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] }); })();


/***/ })

}]);
//# sourceMappingURL=pages-sub-account-import-sub-account-import-module.js.map
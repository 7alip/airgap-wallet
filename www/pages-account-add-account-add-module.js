(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-account-add-account-add-module"],{

/***/ "+hnQ":
/*!*********************************************************!*\
  !*** ./src/app/pages/account-add/account-add.module.ts ***!
  \*********************************************************/
/*! exports provided: AccountAddPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountAddPageModule", function() { return AccountAddPageModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/components.module */ "j1ZV");
/* harmony import */ var _account_add__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./account-add */ "kpa/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "fXoL");









class AccountAddPageModule {
}
AccountAddPageModule.ɵfac = function AccountAddPageModule_Factory(t) { return new (t || AccountAddPageModule)(); };
AccountAddPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: AccountAddPageModule });
AccountAddPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ imports: [[
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_5__["ComponentsModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _account_add__WEBPACK_IMPORTED_MODULE_6__["AccountAddPage"] }])
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](AccountAddPageModule, { declarations: [_account_add__WEBPACK_IMPORTED_MODULE_6__["AccountAddPage"]], imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
        _components_components_module__WEBPACK_IMPORTED_MODULE_5__["ComponentsModule"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] }); })();


/***/ }),

/***/ "kpa/":
/*!**************************************************!*\
  !*** ./src/app/pages/account-add/account-add.ts ***!
  \**************************************************/
/*! exports provided: AccountAddPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountAddPage", function() { return AccountAddPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _airgap_angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @airgap/angular-core */ "138U");
/* harmony import */ var _airgap_coinlib_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @airgap/coinlib-core */ "RKiA");
/* harmony import */ var _airgap_coinlib_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_airgap_coinlib_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _airgap_coinlib_core_utils_ProtocolNetwork__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @airgap/coinlib-core/utils/ProtocolNetwork */ "14cC");
/* harmony import */ var _airgap_coinlib_core_utils_ProtocolNetwork__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_airgap_coinlib_core_utils_ProtocolNetwork__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _services_account_account_provider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/account/account.provider */ "57MG");
/* harmony import */ var _services_data_data_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/data/data.service */ "1y+R");
/* harmony import */ var _services_ledger_ledger_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/ledger/ledger-service */ "z26V");
/* harmony import */ var _services_sentry_error_handler_sentry_error_handler__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/sentry-error-handler/sentry-error-handler */ "hPkG");
/* harmony import */ var _types_GenericProtocolSymbols__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../types/GenericProtocolSymbols */ "lwXz");
/* harmony import */ var _account_import_interaction_selection_account_import_interaction_selection__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../account-import-interaction-selection/account-import-interaction-selection */ "X9E/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _components_currency_item_currency_item__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../components/currency-item/currency-item */ "Bx04");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");























function AccountAddPage_ion_text_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "ion-text", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](3, 1, "account-add.featured"), " ");
} }
function AccountAddPage_currency_item_14_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "currency-item", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function AccountAddPage_currency_item_14_Template_currency_item_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r8); const protocol_r6 = ctx.$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](); return ctx_r7.addAccount(protocol_r6); });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const protocol_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("protocol", protocol_r6);
} }
function AccountAddPage_currency_item_15_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "currency-item", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function AccountAddPage_currency_item_15_Template_currency_item_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r11); const subProtocol_r9 = ctx.$implicit; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](); return ctx_r10.addSubAccount(subProtocol_r9); });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const subProtocol_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("protocol", subProtocol_r9);
} }
function AccountAddPage_ion_text_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "ion-text", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](3, 1, "account-add.others"), " ");
} }
function AccountAddPage_currency_item_17_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "currency-item", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function AccountAddPage_currency_item_17_Template_currency_item_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r14); const genericProtocol_r12 = ctx.$implicit; const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](); return ctx_r13.addGenericSubAccount(genericProtocol_r12); });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const genericProtocol_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("protocol", genericProtocol_r12)("showSymbol", false);
} }
function AccountAddPage_currency_item_18_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "currency-item", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function AccountAddPage_currency_item_18_Template_currency_item_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r17); const subProtocol_r15 = ctx.$implicit; const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](); return ctx_r16.addSubAccount(subProtocol_r15); });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const subProtocol_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("protocol", subProtocol_r15);
} }
class AccountAddPage {
    constructor(platform, accountProvider, protocolService, router, ledgerService, dataService) {
        this.platform = platform;
        this.accountProvider = accountProvider;
        this.protocolService = protocolService;
        this.router = router;
        this.ledgerService = ledgerService;
        this.dataService = dataService;
        this.searchTerm = '';
        this.supportedAccountProtocols = [];
        this.featuredSubAccountProtocols = [];
        this.otherSubAccountProtocols = [];
        this.genericSubAccountProtocols = [
            {
                name: 'account-add.generic.xtz_label',
                identifier: _types_GenericProtocolSymbols__WEBPACK_IMPORTED_MODULE_10__["GenericSubProtocolSymbol"].XTZ_FA,
                symbol: 'XTZ',
                mainIdentifier: _airgap_coinlib_core__WEBPACK_IMPORTED_MODULE_2__["MainProtocolSymbols"].XTZ
            }
        ];
        this.filteredAccountProtocols = [];
        this.filteredFeaturedSubAccountProtocols = [];
        this.filteredOtherSubAccountProtocols = [];
        this.filteredGenericSubAccountProtocols = [];
        this.featuredSubProtocols = [_airgap_coinlib_core__WEBPACK_IMPORTED_MODULE_2__["SubProtocolSymbols"].XTZ_KT, _airgap_coinlib_core__WEBPACK_IMPORTED_MODULE_2__["SubProtocolSymbols"].XTZ_YOU, _airgap_coinlib_core__WEBPACK_IMPORTED_MODULE_2__["SubProtocolSymbols"].XTZ_UUSD];
    }
    ionViewWillEnter() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.supportedAccountProtocols = (yield this.protocolService.getActiveProtocols()).filter((protocol) => protocol.options.network.type === _airgap_coinlib_core_utils_ProtocolNetwork__WEBPACK_IMPORTED_MODULE_3__["NetworkType"].MAINNET);
            const supportedSubAccountProtocols = Array.prototype.concat.apply([], yield Promise.all(Object.values(_airgap_coinlib_core__WEBPACK_IMPORTED_MODULE_2__["MainProtocolSymbols"]).map((protocol) => this.protocolService.getSubProtocols(protocol))));
            this.featuredSubAccountProtocols = supportedSubAccountProtocols.filter((protocol) => this.featuredSubProtocols.includes(protocol.identifier.toLowerCase()) &&
                protocol.options.network.type === _airgap_coinlib_core_utils_ProtocolNetwork__WEBPACK_IMPORTED_MODULE_3__["NetworkType"].MAINNET &&
                protocol.identifier !== _airgap_coinlib_core__WEBPACK_IMPORTED_MODULE_2__["SubProtocolSymbols"].XTZ_KT);
            this.otherSubAccountProtocols = supportedSubAccountProtocols.filter((protocol) => !this.featuredSubProtocols.includes(protocol.identifier.toLowerCase()) &&
                protocol.options.network.type === _airgap_coinlib_core_utils_ProtocolNetwork__WEBPACK_IMPORTED_MODULE_3__["NetworkType"].MAINNET &&
                protocol.identifier !== _airgap_coinlib_core__WEBPACK_IMPORTED_MODULE_2__["SubProtocolSymbols"].XTZ_KT);
            this.filterProtocols();
        });
    }
    searchTermChanged() {
        this.filterProtocols();
    }
    filterProtocols() {
        const lowerCaseSearchTerm = this.searchTerm.toLowerCase();
        this.filteredAccountProtocols = this.supportedAccountProtocols.filter((protocol) => protocol.name.toLowerCase().includes(lowerCaseSearchTerm) || protocol.symbol.toLowerCase().includes(lowerCaseSearchTerm));
        this.filteredFeaturedSubAccountProtocols = this.featuredSubAccountProtocols.filter((protocol) => protocol.name.toLowerCase().includes(lowerCaseSearchTerm) || protocol.symbol.toLowerCase().includes(lowerCaseSearchTerm));
        this.filteredOtherSubAccountProtocols = this.otherSubAccountProtocols.filter((protocol) => protocol.name.toLowerCase().includes(lowerCaseSearchTerm) || protocol.symbol.toLowerCase().includes(lowerCaseSearchTerm));
        this.filteredGenericSubAccountProtocols = this.genericSubAccountProtocols.filter((protocol) => protocol.name.toLowerCase().includes(lowerCaseSearchTerm) ||
            protocol.identifier.toLowerCase().includes(lowerCaseSearchTerm) ||
            protocol.mainIdentifier.toLowerCase().includes(lowerCaseSearchTerm));
    }
    addAccount(protocol) {
        const isLedgerImportAvailable = this.ledgerService.isProtocolSupported(protocol) && this.platform.is('desktop');
        if (!isLedgerImportAvailable) {
            this.importFromVault(protocol);
        }
        else {
            this.showImportInteractionSelection(protocol);
        }
    }
    addSubAccount(subProtocol) {
        const mainProtocolIdentifier = subProtocol.identifier.split('-')[0];
        if (this.mainAccountExists(mainProtocolIdentifier, subProtocol.options.network.identifier)) {
            this.router
                .navigateByUrl(`/sub-account-import/${_services_data_data_service__WEBPACK_IMPORTED_MODULE_7__["DataServiceKey"].PROTOCOL}/${subProtocol.identifier}/${subProtocol.options.network.identifier}`)
                .catch((err) => console.error(err));
        }
        else {
            this.showOnboarding(subProtocol.identifier);
        }
    }
    addGenericSubAccount(customSubProtocol) {
        if (this.mainAccountExists(customSubProtocol.mainIdentifier, customSubProtocol.network)) {
            this.router
                .navigateByUrl(`/sub-account-add-generic/${_services_data_data_service__WEBPACK_IMPORTED_MODULE_7__["DataServiceKey"].PROTOCOL}/${customSubProtocol.mainIdentifier}/${customSubProtocol.network}/${customSubProtocol.identifier}`)
                .catch((err) => console.error(err));
        }
        else {
            this.showOnboarding(customSubProtocol.mainIdentifier);
        }
    }
    mainAccountExists(protocolIdentifier, networkIdentifier) {
        return (this.accountProvider
            .getWalletList()
            .filter((wallet) => wallet.protocol.identifier === protocolIdentifier &&
            (!networkIdentifier || wallet.protocol.options.network.identifier === networkIdentifier)).length > 0);
    }
    showImportInteractionSelection(protocol) {
        const info = {
            callback: (interactionType) => {
                switch (interactionType) {
                    case _account_import_interaction_selection_account_import_interaction_selection__WEBPACK_IMPORTED_MODULE_11__["AccountImportInteractionType"].VAULT:
                        this.importFromVault(protocol);
                        break;
                    case _account_import_interaction_selection_account_import_interaction_selection__WEBPACK_IMPORTED_MODULE_11__["AccountImportInteractionType"].LEDGER:
                        this.importFromLedger(protocol);
                        break;
                    default:
                        console.log('Unknown import interaction type selected.');
                }
            }
        };
        this.dataService.setData(_services_data_data_service__WEBPACK_IMPORTED_MODULE_7__["DataServiceKey"].INTERACTION, info);
        this.router
            .navigateByUrl(`/account-import-interaction-selection/${_services_data_data_service__WEBPACK_IMPORTED_MODULE_7__["DataServiceKey"].INTERACTION}`, { skipLocationChange: true })
            .catch(Object(_services_sentry_error_handler_sentry_error_handler__WEBPACK_IMPORTED_MODULE_9__["handleErrorSentry"])(_services_sentry_error_handler_sentry_error_handler__WEBPACK_IMPORTED_MODULE_9__["ErrorCategory"].NAVIGATION));
    }
    importFromLedger(protocol) {
        this.router
            .navigateByUrl(`/account-import-ledger-onboarding/${_services_data_data_service__WEBPACK_IMPORTED_MODULE_7__["DataServiceKey"].PROTOCOL}/${protocol.identifier}`)
            .catch(Object(_services_sentry_error_handler_sentry_error_handler__WEBPACK_IMPORTED_MODULE_9__["handleErrorSentry"])(_services_sentry_error_handler_sentry_error_handler__WEBPACK_IMPORTED_MODULE_9__["ErrorCategory"].NAVIGATION));
    }
    importFromVault(protocol) {
        if (this.accountProvider.hasInactiveWallets(protocol)) {
            this.router
                .navigateByUrl(`/account-activate/${_services_data_data_service__WEBPACK_IMPORTED_MODULE_7__["DataServiceKey"].PROTOCOL}/${protocol.identifier}`)
                .catch(Object(_services_sentry_error_handler_sentry_error_handler__WEBPACK_IMPORTED_MODULE_9__["handleErrorSentry"])(_services_sentry_error_handler_sentry_error_handler__WEBPACK_IMPORTED_MODULE_9__["ErrorCategory"].NAVIGATION));
        }
        else {
            this.showOnboarding(protocol.identifier);
        }
    }
    showOnboarding(protocolIdentifier) {
        this.router
            .navigateByUrl(`/account-import-onboarding/${_services_data_data_service__WEBPACK_IMPORTED_MODULE_7__["DataServiceKey"].PROTOCOL}/${protocolIdentifier}`)
            .catch(Object(_services_sentry_error_handler_sentry_error_handler__WEBPACK_IMPORTED_MODULE_9__["handleErrorSentry"])(_services_sentry_error_handler_sentry_error_handler__WEBPACK_IMPORTED_MODULE_9__["ErrorCategory"].NAVIGATION));
    }
    navigateToScan() {
        this.router.navigateByUrl('/tabs/scan').catch(Object(_services_sentry_error_handler_sentry_error_handler__WEBPACK_IMPORTED_MODULE_9__["handleErrorSentry"])(_services_sentry_error_handler_sentry_error_handler__WEBPACK_IMPORTED_MODULE_9__["ErrorCategory"].NAVIGATION));
    }
}
AccountAddPage.ɵfac = function AccountAddPage_Factory(t) { return new (t || AccountAddPage)(_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_services_account_account_provider__WEBPACK_IMPORTED_MODULE_6__["AccountProvider"]), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_airgap_angular_core__WEBPACK_IMPORTED_MODULE_1__["ProtocolService"]), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_services_ledger_ledger_service__WEBPACK_IMPORTED_MODULE_8__["LedgerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_services_data_data_service__WEBPACK_IMPORTED_MODULE_7__["DataService"])); };
AccountAddPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineComponent"]({ type: AccountAddPage, selectors: [["page-account-add"]], decls: 22, vars: 10, consts: [[1, "ion-no-border"], ["fixed", "true", 1, "ion-no-padding"], ["slot", "start"], ["defaultHref", "/"], ["mode", "md", 3, "ngModel", "ngModelChange", "ionChange"], [1, "ion-padding"], ["lines", "none"], ["color", "primary", 4, "ngIf"], [3, "protocol", "click", 4, "ngFor", "ngForOf"], [3, "protocol", "showSymbol", "click", 4, "ngFor", "ngForOf"], ["vertical", "bottom", "horizontal", "end", "slot", "fixed"], ["id", "add-more-coins-button", "color", "secondary", 3, "click"], ["name", "barcode-outline"], ["color", "primary"], [1, "font--weight__bold"], [3, "protocol", "click"], [3, "protocol", "showSymbol", "click"]], template: function AccountAddPage_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "ion-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "ion-grid", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](2, "ion-toolbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](3, "ion-buttons", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](4, "ion-back-button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](5, "ion-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](7, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](8, "ion-toolbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](9, "ion-searchbar", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("ngModelChange", function AccountAddPage_Template_ion_searchbar_ngModelChange_9_listener($event) { return ctx.searchTerm = $event; })("ionChange", function AccountAddPage_Template_ion_searchbar_ionChange_9_listener() { return ctx.searchTermChanged(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](10, "ion-content", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](11, "ion-grid", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](12, "ion-list", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](13, AccountAddPage_ion_text_13_Template, 4, 3, "ion-text", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](14, AccountAddPage_currency_item_14_Template, 1, 1, "currency-item", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](15, AccountAddPage_currency_item_15_Template, 1, 1, "currency-item", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](16, AccountAddPage_ion_text_16_Template, 4, 3, "ion-text", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](17, AccountAddPage_currency_item_17_Template, 1, 2, "currency-item", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](18, AccountAddPage_currency_item_18_Template, 1, 1, "currency-item", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](19, "ion-fab", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](20, "ion-fab-button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function AccountAddPage_Template_ion_fab_button_click_20_listener() { return ctx.navigateToScan(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](21, "ion-icon", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](7, 8, "add-account.title"));
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngModel", ctx.searchTerm);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.filteredAccountProtocols.length > 0 || ctx.filteredFeaturedSubAccountProtocols.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngForOf", ctx.filteredAccountProtocols);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngForOf", ctx.filteredFeaturedSubAccountProtocols);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.filteredOtherSubAccountProtocols.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngForOf", ctx.filteredGenericSubAccountProtocols);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngForOf", ctx.filteredOtherSubAccountProtocols);
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonGrid"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonBackButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonBackButtonDelegate"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonSearchbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["TextValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["NgModel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonList"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgForOf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonFab"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonFabButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonText"], _components_currency_item_currency_item__WEBPACK_IMPORTED_MODULE_15__["CurrencyItemComponent"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__["TranslatePipe"]], styles: [".item__image[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2FjY291bnQtYWRkLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQUNGIiwiZmlsZSI6ImFjY291bnQtYWRkLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaXRlbV9faW1hZ2Uge1xuICB3aWR0aDogMzJweDtcbiAgaGVpZ2h0OiAzMnB4O1xufVxuIl19 */"] });


/***/ })

}]);
//# sourceMappingURL=pages-account-add-account-add-module.js.map
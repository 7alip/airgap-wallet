(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-sub-account-add-sub-account-add-module"],{

/***/ "1jfS":
/*!**********************************************************!*\
  !*** ./src/app/pages/sub-account-add/sub-account-add.ts ***!
  \**********************************************************/
/*! exports provided: SubAccountAddPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubAccountAddPage", function() { return SubAccountAddPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _airgap_angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @airgap/angular-core */ "138U");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _airgap_coinlib_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @airgap/coinlib-core */ "RKiA");
/* harmony import */ var _airgap_coinlib_core__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_airgap_coinlib_core__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _airgap_coinlib_core_protocols_ICoinSubProtocol__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @airgap/coinlib-core/protocols/ICoinSubProtocol */ "Z7VQ");
/* harmony import */ var _airgap_coinlib_core_protocols_ICoinSubProtocol__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_airgap_coinlib_core_protocols_ICoinSubProtocol__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _airgap_coinlib_core_utils_assert__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @airgap/coinlib-core/utils/assert */ "peH2");
/* harmony import */ var _airgap_coinlib_core_utils_assert__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_airgap_coinlib_core_utils_assert__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var src_app_services_price_price_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/price/price.service */ "QMTT");
/* harmony import */ var _services_account_account_provider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/account/account.provider */ "57MG");
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! bignumber.js */ "kB5k");
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(bignumber_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ "fXoL");

















const _c0 = function (a0) { return { typeLabel: a0 }; };
function SubAccountAddPage_empty_state_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "empty-state", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](2, "translate");
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("text", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind2"](1, 3, "add-sub-account.no-imports_text", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction1"](8, _c0, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](2, 6, ctx_r0.typeLabel))))("imageName", ctx_r0.wallet.protocol.identifier === ctx_r0.mainProtocolSymbols.XTZ ? "no-imports.svg" : "currencies-empty.svg")("fullHeight", ctx_r0.wallet.protocol.identifier === ctx_r0.mainProtocolSymbols.XTZ ? false : true);
} }
function SubAccountAddPage_ion_row_19_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "ion-row", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "ion-col", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "portfolio-item", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function SubAccountAddPage_ion_row_19_Template_portfolio_item_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r4); const subAccount_r2 = ctx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return ctx_r3.toggleAccount(subAccount_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "ion-col", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "ion-checkbox", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function SubAccountAddPage_ion_row_19_Template_ion_checkbox_ngModelChange_4_listener($event) { const subAccount_r2 = ctx.$implicit; return subAccount_r2.selected = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const subAccount_r2 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("isToken", ctx_r1.subProtocolType === ctx_r1.subProtocolTypes.TOKEN)("wallet", subAccount_r2.wallet);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngModel", subAccount_r2.selected);
} }
class SubAccountAddPage {
    constructor(navController, route, accountProvider, priceService, protocolService) {
        this.navController = navController;
        this.route = route;
        this.accountProvider = accountProvider;
        this.priceService = priceService;
        this.protocolService = protocolService;
        this.mainProtocolSymbols = _airgap_coinlib_core__WEBPACK_IMPORTED_MODULE_4__["MainProtocolSymbols"];
        this.subAccounts = [];
        this.filteredSubAccounts = [];
        this.displayedSubAccounts = [];
        this.subProtocolTypes = _airgap_coinlib_core_protocols_ICoinSubProtocol__WEBPACK_IMPORTED_MODULE_5__["SubProtocolType"];
        this.typeLabel = '';
        this.searchTerm = '';
        this.infiniteEnabled = false;
        this.limit = 10;
        this.loaded = 0;
        this.publicKey = this.route.snapshot.params.publicKey;
        this.protocolID = this.route.snapshot.params.protocolID;
        this.addressIndex = this.route.snapshot.params.addressIndex;
        this.subProtocolType = this.route.snapshot.params.subProtocolType;
        if (this.addressIndex === 'undefined') {
            this.addressIndex = undefined;
        }
        this.wallet = this.accountProvider.walletByPublicKeyAndProtocolAndAddressIndex(this.publicKey, this.protocolID, this.addressIndex);
        if (this.route.snapshot.data.special) {
            const info = this.route.snapshot.data.special;
            this.actionCallback = info.actionCallback;
            this.subProtocolType = info.subProtocolType;
            this.wallet = info.wallet;
        }
        if (this.subProtocolType === _airgap_coinlib_core_protocols_ICoinSubProtocol__WEBPACK_IMPORTED_MODULE_5__["SubProtocolType"].ACCOUNT) {
            this.initWithAccountSubProtocol();
        }
        else if (this.subProtocolType === _airgap_coinlib_core_protocols_ICoinSubProtocol__WEBPACK_IMPORTED_MODULE_5__["SubProtocolType"].TOKEN) {
            this.initWithTokenSubProtocol();
        }
        else {
            Object(_airgap_coinlib_core_utils_assert__WEBPACK_IMPORTED_MODULE_6__["assertNever"])(this.subProtocolType);
        }
    }
    toggleAccount(account) {
        account.selected = !account.selected;
    }
    addSubAccounts() {
        this.actionCallback({ subAccounts: this.subAccounts, accountProvider: this.accountProvider, location: this.navController });
    }
    initWithAccountSubProtocol() {
        this.typeLabel = 'add-sub-account.accounts_label';
    }
    initWithTokenSubProtocol() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.typeLabel = 'add-sub-account.tokens_label';
            const subProtocols = (yield this.protocolService.getSubProtocols(this.wallet.protocol.identifier)).filter((protocol) => protocol.subProtocolType === _airgap_coinlib_core_protocols_ICoinSubProtocol__WEBPACK_IMPORTED_MODULE_5__["SubProtocolType"].TOKEN);
            this.infiniteEnabled = true;
            this.subAccounts = yield this.loadSubAccounts(subProtocols);
            yield this.loadDisplayedAccounts();
        });
    }
    loadSubAccounts(subProtocols) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const balances = yield this.wallet.protocol.getBalanceOfPublicKeyForSubProtocols(this.wallet.publicKey, subProtocols);
            const accounts = balances
                .map((balance, index) => {
                const walletGroup = this.accountProvider.findWalletGroup(this.wallet);
                const wallet = new _airgap_coinlib_core__WEBPACK_IMPORTED_MODULE_4__["AirGapMarketWallet"](subProtocols[index], this.wallet.publicKey, this.wallet.isExtendedPublicKey, this.wallet.derivationPath, this.wallet.masterFingerprint, this.wallet.status, this.priceService);
                if (this.accountProvider.walletExists(wallet)) {
                    return undefined;
                }
                wallet.addresses = this.wallet.addresses;
                wallet.currentBalance = new bignumber_js__WEBPACK_IMPORTED_MODULE_9___default.a(balance);
                return {
                    wallet,
                    selected: false,
                    groupId: walletGroup !== undefined ? walletGroup.id : undefined,
                    groupLabel: walletGroup !== undefined ? walletGroup.label : undefined
                };
            })
                .filter((account) => account !== undefined)
                .sort((a, b) => a.wallet.currentBalance.minus(b.wallet.currentBalance).toNumber() * -1);
            return accounts;
        });
    }
    setFilteredItems(searchTerm) {
        this.displayedSubAccounts = [];
        this.loaded = 0;
        if (searchTerm.length === 0) {
            this.infiniteEnabled = true;
            this.loadDisplayedAccounts();
        }
        else {
            const searchTermLowerCase = searchTerm.toLowerCase();
            this.filteredSubAccounts = this.subAccounts.filter((account) => {
                const hasMatchingName = account.wallet.protocol.name.toLowerCase().includes(searchTermLowerCase);
                const hasMatchingSymbol = account.wallet.protocol.symbol.toLowerCase().includes(searchTermLowerCase);
                return hasMatchingName || hasMatchingSymbol;
            });
            this.infiniteEnabled = false;
            this.loadDisplayedAccounts(true);
        }
    }
    loadDisplayedAccounts(filtered = false) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const newSubAccounts = (filtered ? this.filteredSubAccounts : this.subAccounts).slice(this.loaded, this.loaded + this.limit);
            if (newSubAccounts.length < this.limit) {
                this.infiniteEnabled = false;
            }
            newSubAccounts.forEach((account) => {
                if (account.wallet.currentMarketPrice === undefined) {
                    account.wallet.fetchCurrentMarketPrice();
                }
                this.displayedSubAccounts.push(account);
            });
            this.loaded += newSubAccounts.length;
        });
    }
    doInfinite(event) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!this.infiniteEnabled) {
                return event.target.complete();
            }
            yield this.loadDisplayedAccounts();
            event.target.complete();
        });
    }
}
SubAccountAddPage.ɵfac = function SubAccountAddPage_Factory(t) { return new (t || SubAccountAddPage)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_services_account_account_provider__WEBPACK_IMPORTED_MODULE_8__["AccountProvider"]), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_services_price_price_service__WEBPACK_IMPORTED_MODULE_7__["PriceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_airgap_angular_core__WEBPACK_IMPORTED_MODULE_1__["ProtocolService"])); };
SubAccountAddPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({ type: SubAccountAddPage, selectors: [["page-sub-account-add"]], decls: 28, vars: 23, consts: [[1, "ion-no-border"], ["fixed", "true", 1, "ion-no-padding"], ["slot", "start"], ["defaultHref", "/"], [3, "ngModel", "ngModelChange", "ionChange"], [1, "ion-padding"], ["color", "primary", 1, "font--weight__bold"], [3, "text", "imageName", "fullHeight", 4, "ngIf"], ["class", "ion-no-padding", 4, "ngFor", "ngForOf"], [3, "ionInfinite"], ["vertical", "bottom", "horizontal", "end", "slot", "fixed"], ["shape", "round", "color", "secondary", 3, "disabled", "click"], ["slot", "start", "name", "add"], [3, "text", "imageName", "fullHeight"], [1, "ion-no-padding"], ["size", "10", 1, "ion-no-padding"], ["tappable", "", 3, "isToken", "wallet", "click"], ["size", "2", 1, "content--align__center-center", "ion-no-padding"], ["color", "primary", 3, "ngModel", "ngModelChange"]], template: function SubAccountAddPage_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "ion-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "ion-grid", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "ion-toolbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "ion-buttons", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](4, "ion-back-button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "ion-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](7, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](8, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](9, "ion-toolbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](10, "ion-searchbar", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngModelChange", function SubAccountAddPage_Template_ion_searchbar_ngModelChange_10_listener($event) { return ctx.searchTerm = $event; })("ionChange", function SubAccountAddPage_Template_ion_searchbar_ionChange_10_listener() { return ctx.setFilteredItems(ctx.searchTerm); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](11, "ion-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](12, "ion-grid", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](13, "ion-row", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](14, "ion-text", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](15, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](17, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](18, SubAccountAddPage_empty_state_18_Template, 3, 10, "empty-state", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](19, SubAccountAddPage_ion_row_19_Template, 5, 3, "ion-row", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](20, "ion-infinite-scroll", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ionInfinite", function SubAccountAddPage_Template_ion_infinite_scroll_ionInfinite_20_listener($event) { return ctx.doInfinite($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](21, "ion-infinite-scroll-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](22, "ion-fab", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](23, "ion-button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function SubAccountAddPage_Template_ion_button_click_23_listener() { return ctx.addSubAccounts(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](24, "ion-icon", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](26, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](27, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind2"](7, 7, "add-sub-account.title", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction1"](19, _c0, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](8, 10, ctx.typeLabel))));
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngModel", ctx.searchTerm);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](17, 12, ctx.typeLabel));
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !ctx.subAccounts.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx.displayedSubAccounts);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("disabled", !ctx.subAccounts.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind2"](26, 14, "add-sub-account.add-accounts_label", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction1"](21, _c0, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](27, 17, ctx.typeLabel))), " ");
    } }, styles: [".empty-list[_ngcontent-%COMP%] {\n  height: 50%;\n}\n\nspan[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3N1Yi1hY2NvdW50LWFkZC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtBQUNGOztBQUNBO0VBQ0UsZUFBQTtBQUVGIiwiZmlsZSI6InN1Yi1hY2NvdW50LWFkZC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmVtcHR5LWxpc3Qge1xuICBoZWlnaHQ6IDUwJTtcbn1cbnNwYW4ge1xuICBmb250LXNpemU6IDE0cHg7XG59XG4iXX0= */"] });


/***/ }),

/***/ "cq7r":
/*!*****************************************************************!*\
  !*** ./src/app/pages/sub-account-add/sub-account-add.module.ts ***!
  \*****************************************************************/
/*! exports provided: SubAccountAddPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubAccountAddPageModule", function() { return SubAccountAddPageModule; });
/* harmony import */ var _airgap_angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @airgap/angular-core */ "138U");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/components.module */ "j1ZV");
/* harmony import */ var _sub_account_add__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./sub-account-add */ "1jfS");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _components_empty_state_empty_state__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/empty-state/empty-state */ "1Mpf");
/* harmony import */ var _components_portfolio_item_portfolio_item__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/portfolio-item/portfolio-item */ "F07p");
















class SubAccountAddPageModule {
}
SubAccountAddPageModule.ɵfac = function SubAccountAddPageModule_Factory(t) { return new (t || SubAccountAddPageModule)(); };
SubAccountAddPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({ type: SubAccountAddPageModule });
SubAccountAddPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({ imports: [[
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_6__["ComponentsModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild([{ path: '', component: _sub_account_add__WEBPACK_IMPORTED_MODULE_7__["SubAccountAddPage"] }]),
            _airgap_angular_core__WEBPACK_IMPORTED_MODULE_0__["AirGapAngularCoreModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](SubAccountAddPageModule, { declarations: [_sub_account_add__WEBPACK_IMPORTED_MODULE_7__["SubAccountAddPage"]], imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _components_components_module__WEBPACK_IMPORTED_MODULE_6__["ComponentsModule"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _airgap_angular_core__WEBPACK_IMPORTED_MODULE_0__["AirGapAngularCoreModule"]] }); })();
_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetComponentScope"](_sub_account_add__WEBPACK_IMPORTED_MODULE_7__["SubAccountAddPage"], [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonGrid"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonBackButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonBackButtonDelegate"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonSearchbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["TextValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonRow"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonText"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _components_empty_state_empty_state__WEBPACK_IMPORTED_MODULE_9__["EmptyStateComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonCol"], _components_portfolio_item_portfolio_item__WEBPACK_IMPORTED_MODULE_10__["PortfolioItemComponent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonCheckbox"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["BooleanValueAccessor"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonInfiniteScroll"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonInfiniteScrollContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonFab"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonIcon"]], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslatePipe"]]);


/***/ })

}]);
//# sourceMappingURL=pages-sub-account-add-sub-account-add-module.js.map
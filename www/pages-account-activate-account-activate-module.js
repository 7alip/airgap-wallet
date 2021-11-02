(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-account-activate-account-activate-module"],{

/***/ "3KR4":
/*!******************************************************************!*\
  !*** ./src/app/pages/account-activate/account-activate.utils.ts ***!
  \******************************************************************/
/*! exports provided: createAccountId */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createAccountId", function() { return createAccountId; });
function createAccountId(walletOrIdentifier, publicKey) {
    const protocolIdentifier = typeof walletOrIdentifier === 'string' ? walletOrIdentifier : walletOrIdentifier.protocol.identifier;
    const walletPublicKey = typeof walletOrIdentifier === 'string' ? publicKey : walletOrIdentifier.publicKey;
    return `${protocolIdentifier}:${walletPublicKey}`;
}


/***/ }),

/***/ "5sn5":
/*!*****************************************************************!*\
  !*** ./src/app/pages/account-activate/account-activate.page.ts ***!
  \*****************************************************************/
/*! exports provided: AccountActivatePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountActivatePage", function() { return AccountActivatePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _airgap_angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @airgap/angular-core */ "138U");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _account_activate_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./account-activate.actions */ "tXgB");
/* harmony import */ var _account_activate_reducers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./account-activate.reducers */ "oSI1");
/* harmony import */ var _account_activate_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./account-activate.utils */ "3KR4");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _components_portfolio_item_portfolio_item__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/portfolio-item/portfolio-item */ "F07p");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _pipes_group_label_group_label_pipe__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../pipes/group-label/group-label.pipe */ "1UBK");
















const _c0 = function (a0) { return { protocol: a0 }; };
function AccountActivatePage_ion_row_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "ion-row", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "ion-text");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](2, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](4, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("innerHtml", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](3, 1, "account-activate.message", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](6, _c0, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](4, 4, ctx_r0.protocolName$).value)), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsanitizeHtml"]);
} }
function AccountActivatePage_ng_container_12_ion_row_7_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "ion-row", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "ion-col", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "portfolio-item", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function AccountActivatePage_ng_container_12_ion_row_7_Template_portfolio_item_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r6); const wallet_r4 = ctx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2); return ctx_r5.toggleAccount(wallet_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "ion-col", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "ion-checkbox", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ionChange", function AccountActivatePage_ng_container_12_ion_row_7_Template_ion_checkbox_ionChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r6); const wallet_r4 = ctx.$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2); return ctx_r7.toggleAccount(wallet_r4, $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](5, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const wallet_r4 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("wallet", wallet_r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("checked", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](5, 2, ctx_r3.isChecked$)[ctx_r3.createAccountId(wallet_r4)]);
} }
function AccountActivatePage_ng_container_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "ion-row", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "ion-text", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](6, "groupLabel");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](7, AccountActivatePage_ng_container_12_ion_row_7_Template, 6, 4, "ion-row", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const accounts_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](5, 2, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](6, 4, accounts_r2)));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", accounts_r2.wallets);
} }
class AccountActivatePage {
    constructor(store, route) {
        this.store = store;
        this.route = route;
        this.createAccountId = _account_activate_utils__WEBPACK_IMPORTED_MODULE_7__["createAccountId"];
        this.UIResourceStatus = _airgap_angular_core__WEBPACK_IMPORTED_MODULE_1__["UIResourceStatus"];
        this.protocolName$ = this.store.select(_account_activate_reducers__WEBPACK_IMPORTED_MODULE_6__["selectProtocolName"]);
        this.inactiveAccounts$ = this.store.select(_account_activate_reducers__WEBPACK_IMPORTED_MODULE_6__["selectInactiveAccounts"]);
        this.isChecked$ = this.store.select(_account_activate_reducers__WEBPACK_IMPORTED_MODULE_6__["selectIsAccountChecked"]);
    }
    ionViewWillEnter() {
        this.store.dispatch(_account_activate_actions__WEBPACK_IMPORTED_MODULE_5__["viewWillEnter"]({ routeParams: this.route.snapshot.params }));
    }
    toggleAccount(wallet, event) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const isChecked = (yield this.isChecked$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])()).toPromise())[Object(_account_activate_utils__WEBPACK_IMPORTED_MODULE_7__["createAccountId"])(wallet)];
            if (event !== undefined && event.detail.checked === isChecked) {
                return;
            }
            this.store.dispatch(_account_activate_actions__WEBPACK_IMPORTED_MODULE_5__["accountToggled"]({ protocolIdentifier: wallet.protocol.identifier, publicKey: wallet.publicKey }));
        });
    }
    add() {
        this.store.dispatch(_account_activate_actions__WEBPACK_IMPORTED_MODULE_5__["addButtonClicked"]());
    }
}
AccountActivatePage.ɵfac = function AccountActivatePage_Factory(t) { return new (t || AccountActivatePage)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"])); };
AccountActivatePage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({ type: AccountActivatePage, selectors: [["app-account-activate"]], decls: 20, vars: 15, consts: [[1, "ion-no-border"], ["fixed", "true", 1, "ion-no-padding"], ["slot", "start"], ["defaultHref", "/"], ["class", "ion-padding", 4, "ngIf"], [4, "ngFor", "ngForOf"], ["vertical", "bottom", "horizontal", "end", "slot", "fixed"], ["shape", "round", "color", "secondary", 3, "disabled", "click"], ["slot", "start", "name", "add"], [1, "ion-padding"], [3, "innerHtml"], ["color", "primary", 1, "font--weight__bold"], ["class", "ion-no-padding", 4, "ngFor", "ngForOf"], [1, "ion-no-padding"], ["size", "10", 1, "ion-no-padding"], ["tappable", "", 3, "wallet", "click"], ["size", "2", 1, "content--align__center-center", "ion-no-padding"], ["color", "primary", 3, "checked", "ionChange"]], template: function AccountActivatePage_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "ion-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "ion-grid", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "ion-toolbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "ion-buttons", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](4, "ion-back-button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "ion-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](7, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "ion-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "ion-grid", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](10, AccountActivatePage_ion_row_10_Template, 5, 8, "ion-row", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](11, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](12, AccountActivatePage_ng_container_12_Template, 8, 6, "ng-container", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](13, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](14, "ion-fab", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](15, "ion-button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function AccountActivatePage_Template_ion_button_click_15_listener() { return ctx.add(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](16, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](17, "ion-icon", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](19, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](7, 5, "account-activate.title"));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](11, 7, ctx.protocolName$).status === ctx.UIResourceStatus.SUCCESS);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](13, 9, ctx.inactiveAccounts$).value);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](16, 11, ctx.inactiveAccounts$).status !== ctx.UIResourceStatus.SUCCESS);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](19, 13, "account-activate.add-accounts_label"), " ");
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_9__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["IonGrid"], _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["IonBackButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["IonBackButtonDelegate"], _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["IonContent"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["IonFab"], _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["IonRow"], _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["IonText"], _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["IonCol"], _components_portfolio_item_portfolio_item__WEBPACK_IMPORTED_MODULE_11__["PortfolioItemComponent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["IonCheckbox"], _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["BooleanValueAccessor"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__["TranslatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["AsyncPipe"], _pipes_group_label_group_label_pipe__WEBPACK_IMPORTED_MODULE_13__["GroupLabelPipe"]], styles: ["span[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2FjY291bnQtYWN0aXZhdGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtBQUNGIiwiZmlsZSI6ImFjY291bnQtYWN0aXZhdGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsic3BhbiB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbiJdfQ== */"] });


/***/ }),

/***/ "Awna":
/*!*******************************************************************!*\
  !*** ./src/app/pages/account-activate/account-activate.module.ts ***!
  \*******************************************************************/
/*! exports provided: AccountActivatePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountActivatePageModule", function() { return AccountActivatePageModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/effects */ "9jGm");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/components.module */ "j1ZV");
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../pipes/pipes.module */ "iTUp");
/* harmony import */ var _account_activate_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./account-activate-routing.module */ "C3FI");
/* harmony import */ var _account_activate_effects__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./account-activate.effects */ "RvYn");
/* harmony import */ var _account_activate_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./account-activate.page */ "5sn5");
/* harmony import */ var _account_activate_reducers__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./account-activate.reducers */ "oSI1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ "fXoL");
// import { AirGapAngularCoreModule } from '@airgap/angular-core'
// import { AirGapAngularNgRxModule } from '@airgap/angular-ngrx'















class AccountActivatePageModule {
}
AccountActivatePageModule.ɵfac = function AccountActivatePageModule_Factory(t) { return new (t || AccountActivatePageModule)(); };
AccountActivatePageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineNgModule"]({ type: AccountActivatePageModule });
AccountActivatePageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_6__["ComponentsModule"],
            _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"],
            _account_activate_routing_module__WEBPACK_IMPORTED_MODULE_8__["AccountActivatePageRoutingModule"],
            // AirGapAngularCoreModule,
            // AirGapAngularNgRxModule,
            _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["StoreModule"].forFeature('accountActivate', _account_activate_reducers__WEBPACK_IMPORTED_MODULE_11__["reducer"]),
            _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["EffectsModule"].forFeature([_account_activate_effects__WEBPACK_IMPORTED_MODULE_9__["AccountActivateEffects"]])
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsetNgModuleScope"](AccountActivatePageModule, { declarations: [_account_activate_page__WEBPACK_IMPORTED_MODULE_10__["AccountActivatePage"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"],
        _components_components_module__WEBPACK_IMPORTED_MODULE_6__["ComponentsModule"],
        _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"],
        _account_activate_routing_module__WEBPACK_IMPORTED_MODULE_8__["AccountActivatePageRoutingModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["StoreFeatureModule"], _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["EffectsFeatureModule"]] }); })();


/***/ }),

/***/ "C3FI":
/*!***************************************************************************!*\
  !*** ./src/app/pages/account-activate/account-activate-routing.module.ts ***!
  \***************************************************************************/
/*! exports provided: AccountActivatePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountActivatePageRoutingModule", function() { return AccountActivatePageRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _account_activate_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./account-activate.page */ "5sn5");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [
    {
        path: '',
        component: _account_activate_page__WEBPACK_IMPORTED_MODULE_1__["AccountActivatePage"]
    }
];
class AccountActivatePageRoutingModule {
}
AccountActivatePageRoutingModule.ɵfac = function AccountActivatePageRoutingModule_Factory(t) { return new (t || AccountActivatePageRoutingModule)(); };
AccountActivatePageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AccountActivatePageRoutingModule });
AccountActivatePageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AccountActivatePageRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "RvYn":
/*!********************************************************************!*\
  !*** ./src/app/pages/account-activate/account-activate.effects.ts ***!
  \********************************************************************/
/*! exports provided: AccountActivateEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountActivateEffects", function() { return AccountActivateEffects; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _airgap_angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @airgap/angular-core */ "138U");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/effects */ "9jGm");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _services_account_account_provider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/account/account.provider */ "57MG");
/* harmony import */ var _services_sentry_error_handler_sentry_error_handler__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/sentry-error-handler/sentry-error-handler */ "hPkG");
/* harmony import */ var _account_activate_actions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./account-activate.actions */ "tXgB");
/* harmony import */ var _account_activate_reducers__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./account-activate.reducers */ "oSI1");
/* harmony import */ var _account_activate_utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./account-activate.utils */ "3KR4");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ "fXoL");


















class AccountActivateEffects {
    constructor(actions$, store, router, accountProvider, protocolService) {
        this.actions$ = actions$;
        this.store = store;
        this.router = router;
        this.accountProvider = accountProvider;
        this.protocolService = protocolService;
        this.initialData$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_account_activate_actions__WEBPACK_IMPORTED_MODULE_9__["viewWillEnter"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["withLatestFrom"])(this.accountProvider.getWalletGroupsObservable()), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])(([action, walletGroups]) => Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["concat"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(_account_activate_actions__WEBPACK_IMPORTED_MODULE_9__["initialDataLoaded"]({ walletGroups })), Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["from"])(this.loadNavigationData(action.routeParams)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["first"])())))));
        this.add$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["ofType"])(_account_activate_actions__WEBPACK_IMPORTED_MODULE_9__["addButtonClicked"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["withLatestFrom"])(this.store.select(_account_activate_reducers__WEBPACK_IMPORTED_MODULE_10__["selectWalletGroups"])), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["withLatestFrom"])(this.store.select(_account_activate_reducers__WEBPACK_IMPORTED_MODULE_10__["selectCheckedAccounts"])), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(([[_, walletsGroups], checkedAccounts]) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (walletsGroups.status !== _airgap_angular_core__WEBPACK_IMPORTED_MODULE_1__["UIResourceStatus"].SUCCESS || walletsGroups.value === undefined) {
                return;
            }
            yield this.addAccounts(walletsGroups.value, checkedAccounts);
            this.popToRoot();
        }))), { dispatch: false });
    }
    loadNavigationData(routeParams) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const protocolIdentifier = routeParams.protocolID;
            const protocol = protocolIdentifier !== undefined ? yield this.protocolService.getProtocol(protocolIdentifier) : undefined;
            const protocolDetails = protocol !== undefined ? { name: protocol.name, identifier: protocol.identifier } : undefined;
            return protocolDetails !== undefined ? _account_activate_actions__WEBPACK_IMPORTED_MODULE_9__["navigationDataLoaded"]({ protocolDetails }) : _account_activate_actions__WEBPACK_IMPORTED_MODULE_9__["invalidNavigationData"]();
        });
    }
    addAccounts(walletGroups, checkedAccounts) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const checkedAccountsSet = new Set(checkedAccounts);
            yield Promise.all(walletGroups.map((walletGroup) => this.activateWallets(walletGroup, checkedAccountsSet)));
        });
    }
    activateWallets(walletGroup, checkedAccounts) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield Promise.all(walletGroup.wallets
                .filter((wallet) => checkedAccounts.has(Object(_account_activate_utils__WEBPACK_IMPORTED_MODULE_11__["createAccountId"])(wallet)))
                .map((wallet) => this.activateWallet(wallet, walletGroup.id)));
        });
    }
    activateWallet(wallet, groupId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.accountProvider.activateWallet(wallet, groupId);
        });
    }
    popToRoot() {
        this.router.navigateByUrl('/tabs/portfolio').catch(Object(_services_sentry_error_handler_sentry_error_handler__WEBPACK_IMPORTED_MODULE_8__["handleErrorSentry"])(_services_sentry_error_handler_sentry_error_handler__WEBPACK_IMPORTED_MODULE_8__["ErrorCategory"].NAVIGATION));
    }
}
AccountActivateEffects.ɵfac = function AccountActivateEffects_Factory(t) { return new (t || AccountActivateEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Actions"]), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵinject"](_services_account_account_provider__WEBPACK_IMPORTED_MODULE_7__["AccountProvider"]), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵinject"](_airgap_angular_core__WEBPACK_IMPORTED_MODULE_1__["ProtocolService"])); };
AccountActivateEffects.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineInjectable"]({ token: AccountActivateEffects, factory: AccountActivateEffects.ɵfac });


/***/ }),

/***/ "oSI1":
/*!*********************************************************************!*\
  !*** ./src/app/pages/account-activate/account-activate.reducers.ts ***!
  \*********************************************************************/
/*! exports provided: initialState, reducer, selectFeatureState, selectWalletGroups, selectProtocolDetails, selectCheckedAccounts, selectProtocolIdentifier, selectProtocolName, selectInactiveAccounts, selectIsAccountChecked */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectFeatureState", function() { return selectFeatureState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectWalletGroups", function() { return selectWalletGroups; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectProtocolDetails", function() { return selectProtocolDetails; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectCheckedAccounts", function() { return selectCheckedAccounts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectProtocolIdentifier", function() { return selectProtocolIdentifier; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectProtocolName", function() { return selectProtocolName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectInactiveAccounts", function() { return selectInactiveAccounts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectIsAccountChecked", function() { return selectIsAccountChecked; });
/* harmony import */ var _airgap_angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @airgap/angular-core */ "138U");
/* harmony import */ var _airgap_coinlib_core_wallet_AirGapWallet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @airgap/coinlib-core/wallet/AirGapWallet */ "7pxb");
/* harmony import */ var _airgap_coinlib_core_wallet_AirGapWallet__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_airgap_coinlib_core_wallet_AirGapWallet__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _models_AirGapMarketWalletGroup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/AirGapMarketWalletGroup */ "z4jU");
/* harmony import */ var _account_activate_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./account-activate.actions */ "tXgB");
/* harmony import */ var _account_activate_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./account-activate.utils */ "3KR4");






/**************** Reducers ****************/
const initialState = {
    walletGroups: {
        status: _airgap_angular_core__WEBPACK_IMPORTED_MODULE_0__["UIResourceStatus"].IDLE,
        value: []
    },
    protocol: {
        status: _airgap_angular_core__WEBPACK_IMPORTED_MODULE_0__["UIResourceStatus"].IDLE,
        value: undefined
    },
    checkedAccounts: []
};
const reducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["createReducer"])(initialState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["on"])(_account_activate_actions__WEBPACK_IMPORTED_MODULE_4__["initialDataLoaded"], (state, { walletGroups }) => (Object.assign(Object.assign({}, state), { walletGroups: {
        status: _airgap_angular_core__WEBPACK_IMPORTED_MODULE_0__["UIResourceStatus"].SUCCESS,
        value: walletGroups
    }, checkedAccounts: [] }))), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["on"])(_account_activate_actions__WEBPACK_IMPORTED_MODULE_4__["navigationDataLoaded"], (state, { protocolDetails }) => (Object.assign(Object.assign({}, state), { protocol: {
        status: _airgap_angular_core__WEBPACK_IMPORTED_MODULE_0__["UIResourceStatus"].SUCCESS,
        value: protocolDetails
    }, checkedAccounts: [] }))), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["on"])(_account_activate_actions__WEBPACK_IMPORTED_MODULE_4__["invalidNavigationData"], (state) => (Object.assign(Object.assign({}, state), { protocol: {
        status: _airgap_angular_core__WEBPACK_IMPORTED_MODULE_0__["UIResourceStatus"].ERROR,
        value: undefined
    } }))), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["on"])(_account_activate_actions__WEBPACK_IMPORTED_MODULE_4__["accountToggled"], (state, { protocolIdentifier, publicKey }) => {
    const accountId = Object(_account_activate_utils__WEBPACK_IMPORTED_MODULE_5__["createAccountId"])(protocolIdentifier, publicKey);
    const foundIndex = state.checkedAccounts.indexOf(accountId);
    return Object.assign(Object.assign({}, state), { checkedAccounts: foundIndex > -1
            ? state.checkedAccounts.slice(0, foundIndex).concat(state.checkedAccounts.slice(foundIndex + 1))
            : [...state.checkedAccounts, accountId] });
}));
/**************** Selectors ****************/
const selectFeatureState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["createFeatureSelector"])('accountActivate');
const selectWalletGroups = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["createSelector"])(selectFeatureState, (state) => state.walletGroups);
const selectProtocolDetails = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["createSelector"])(selectFeatureState, (state) => state.protocol);
const selectCheckedAccounts = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["createSelector"])(selectFeatureState, (state) => state.checkedAccounts);
const selectProtocolIdentifier = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["createSelector"])(selectFeatureState, (state) => ({
    status: state.protocol.status,
    value: state.protocol.value !== undefined ? state.protocol.value.identifier : undefined
}));
const selectProtocolName = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["createSelector"])(selectFeatureState, (state) => ({
    status: state.protocol.status,
    value: state.protocol.value !== undefined ? state.protocol.value.name : undefined
}));
const selectInactiveAccounts = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["createSelector"])(selectWalletGroups, selectProtocolIdentifier, (walletGroups, protocolIdentifier) => {
    if (protocolIdentifier.status === _airgap_angular_core__WEBPACK_IMPORTED_MODULE_0__["UIResourceStatus"].SUCCESS || protocolIdentifier.value !== undefined) {
        return {
            status: walletGroups.status,
            value: walletGroups.value !== undefined
                ? walletGroups.value
                    .map((walletGroup) => new _models_AirGapMarketWalletGroup__WEBPACK_IMPORTED_MODULE_3__["AirGapMarketWalletGroup"](walletGroup.id, walletGroup.label, walletGroup.interactionSetting, walletGroup.wallets.filter((wallet) => wallet.protocol.identifier === protocolIdentifier.value && wallet.status !== _airgap_coinlib_core_wallet_AirGapWallet__WEBPACK_IMPORTED_MODULE_1__["AirGapWalletStatus"].ACTIVE), walletGroup.transient))
                    .filter((group) => group.wallets.length > 0)
                : undefined
        };
    }
    else {
        return {
            status: protocolIdentifier.status,
            value: []
        };
    }
});
const selectIsAccountChecked = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["createSelector"])(selectInactiveAccounts, selectCheckedAccounts, (inactiveAccounts, checkedAccounts) => {
    if (inactiveAccounts.value === undefined || inactiveAccounts.value.length === 0) {
        return {};
    }
    const checkedAccountsSet = new Set(checkedAccounts);
    const inactiveWallets = Object(_airgap_angular_core__WEBPACK_IMPORTED_MODULE_0__["flattened"])(inactiveAccounts.value.map((group) => group.wallets));
    return inactiveWallets.reduce((record, next) => {
        const accountId = Object(_account_activate_utils__WEBPACK_IMPORTED_MODULE_5__["createAccountId"])(next);
        return Object.assign(record, { [accountId]: checkedAccountsSet.has(accountId) });
    }, {});
});


/***/ }),

/***/ "tXgB":
/*!********************************************************************!*\
  !*** ./src/app/pages/account-activate/account-activate.actions.ts ***!
  \********************************************************************/
/*! exports provided: viewWillEnter, initialDataLoaded, navigationDataLoaded, invalidNavigationData, accountToggled, addButtonClicked */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "viewWillEnter", function() { return viewWillEnter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialDataLoaded", function() { return initialDataLoaded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "navigationDataLoaded", function() { return navigationDataLoaded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "invalidNavigationData", function() { return invalidNavigationData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "accountToggled", function() { return accountToggled; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addButtonClicked", function() { return addButtonClicked; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");

const featureName = 'Account Activate';
/**************** View Lifecycle ****************/
const viewWillEnter = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(`[${featureName}] View Will Enter`, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const initialDataLoaded = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(`[${featureName}] Initial Data Loaded`, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const navigationDataLoaded = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(`[${featureName}] Navigation Data Loaded`, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const invalidNavigationData = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(`[${featureName}] Invalid Navigation Data`);
/**************** User Interaction ****************/
const accountToggled = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(`[${featureName}] Account Toggled`, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const addButtonClicked = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(`[${featureName}] Add Button Clicked`);


/***/ })

}]);
//# sourceMappingURL=pages-account-activate-account-activate-module.js.map
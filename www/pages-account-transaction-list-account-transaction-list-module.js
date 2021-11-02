(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-account-transaction-list-account-transaction-list-module"],{

/***/ "9nSm":
/*!************************************************!*\
  !*** ./src/app/models/actions/ButtonAction.ts ***!
  \************************************************/
/*! exports provided: ButtonAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonAction", function() { return ButtonAction; });
/* harmony import */ var _airgap_coinlib_core_actions_RepeatableAction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @airgap/coinlib-core/actions/RepeatableAction */ "zLwR");
/* harmony import */ var _airgap_coinlib_core_actions_RepeatableAction__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_airgap_coinlib_core_actions_RepeatableAction__WEBPACK_IMPORTED_MODULE_0__);

class ButtonAction extends _airgap_coinlib_core_actions_RepeatableAction__WEBPACK_IMPORTED_MODULE_0__["RepeatableAction"] {
    get identifier() {
        return this.context.identifier;
    }
    set identifier(_value) {
        // TODO: Does this have to be empty?
    }
    constructor(context, actionFactory) {
        super(context, actionFactory);
    }
}


/***/ }),

/***/ "INF6":
/*!**************************************************!*\
  !*** ./src/app/models/actions/AddTokenAction.ts ***!
  \**************************************************/
/*! exports provided: AddTokenAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddTokenAction", function() { return AddTokenAction; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _airgap_coinlib_core_actions_Action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @airgap/coinlib-core/actions/Action */ "u8Qk");
/* harmony import */ var _airgap_coinlib_core_actions_Action__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_airgap_coinlib_core_actions_Action__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_sentry_error_handler_sentry_error_handler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/sentry-error-handler/sentry-error-handler */ "hPkG");



class AddTokenAction extends _airgap_coinlib_core_actions_Action__WEBPACK_IMPORTED_MODULE_1__["Action"] {
    constructor() {
        super(...arguments);
        this.info = {
            name: 'account-transaction-list.add-tokens_label',
            icon: 'add-outline'
        };
    }
    get identifier() {
        return 'add-token-action';
    }
    perform() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.context.subAccounts
                .filter((account) => account.selected)
                .forEach((account) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                const walletAddInfos = [
                    {
                        walletToAdd: account.wallet,
                        groupId: account.groupId,
                        groupLabel: account.groupLabel
                    }
                ];
                this.context.accountProvider.addWallets(walletAddInfos).catch(Object(_services_sentry_error_handler_sentry_error_handler__WEBPACK_IMPORTED_MODULE_2__["handleErrorSentry"])(_services_sentry_error_handler_sentry_error_handler__WEBPACK_IMPORTED_MODULE_2__["ErrorCategory"].WALLET_PROVIDER));
            }));
        });
    }
}


/***/ }),

/***/ "OIS8":
/*!*****************************************************!*\
  !*** ./src/app/models/actions/FundAccountAction.ts ***!
  \*****************************************************/
/*! exports provided: FundAccountAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FundAccountAction", function() { return FundAccountAction; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _airgap_coinlib_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @airgap/coinlib-core */ "RKiA");
/* harmony import */ var _airgap_coinlib_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_airgap_coinlib_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _airgap_coinlib_core_actions_Action__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @airgap/coinlib-core/actions/Action */ "u8Qk");
/* harmony import */ var _airgap_coinlib_core_actions_Action__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_airgap_coinlib_core_actions_Action__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_app_services_data_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/data/data.service */ "1y+R");
/* harmony import */ var src_app_services_sentry_error_handler_sentry_error_handler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/sentry-error-handler/sentry-error-handler */ "hPkG");
/* harmony import */ var src_app_utils_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/utils/utils */ "oCjk");






class FundAccountAction extends _airgap_coinlib_core_actions_Action__WEBPACK_IMPORTED_MODULE_2__["Action"] {
    constructor() {
        super(...arguments);
        this.info = {
            name: 'account-transaction-list.fund_label',
            icon: 'logo-usd'
        };
    }
    get identifier() {
        return 'fund-action';
    }
    perform() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const wallets = this.context.accountProvider.getWalletList();
            const [compatibleWallets, incompatibleWallets] = Object(src_app_utils_utils__WEBPACK_IMPORTED_MODULE_5__["partition"])(wallets.filter((wallet) => wallet.publicKey !== this.context.wallet.publicKey), (wallet) => this.isCompatible(wallet));
            const info = {
                actionType: 'fund-account',
                targetIdentifier: this.context.wallet.protocol.identifier,
                address: this.context.wallet.receivingPublicAddress,
                compatibleWallets,
                incompatibleWallets
            };
            this.context.dataService.setData(src_app_services_data_data_service__WEBPACK_IMPORTED_MODULE_3__["DataServiceKey"].ACCOUNTS, info);
            this.context.router.navigateByUrl(`/select-wallet/${src_app_services_data_data_service__WEBPACK_IMPORTED_MODULE_3__["DataServiceKey"].ACCOUNTS}`).catch(Object(src_app_services_sentry_error_handler_sentry_error_handler__WEBPACK_IMPORTED_MODULE_4__["handleErrorSentry"])(src_app_services_sentry_error_handler_sentry_error_handler__WEBPACK_IMPORTED_MODULE_4__["ErrorCategory"].NAVIGATION));
        });
    }
    isCompatible(wallet) {
        const compatibleIdentifiers = new Set(this.context.wallet.protocol.identifier);
        if (this.context.wallet.protocol.identifier === _airgap_coinlib_core__WEBPACK_IMPORTED_MODULE_1__["MainProtocolSymbols"].XTZ_SHIELDED) {
            compatibleIdentifiers.add(_airgap_coinlib_core__WEBPACK_IMPORTED_MODULE_1__["MainProtocolSymbols"].XTZ);
        }
        return compatibleIdentifiers.has(wallet.protocol.identifier);
    }
}


/***/ }),

/***/ "e+VP":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/account-transaction-list/account-transaction-list.module.ts ***!
  \***********************************************************************************/
/*! exports provided: AccountTransactionListPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountTransactionListPageModule", function() { return AccountTransactionListPageModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var ngx_moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-moment */ "QUrN");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/components.module */ "j1ZV");
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../pipes/pipes.module */ "iTUp");
/* harmony import */ var _account_transaction_list__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./account-transaction-list */ "nQTt");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _components_portfolio_item_portfolio_item__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/portfolio-item/portfolio-item */ "F07p");
/* harmony import */ var _components_tezos_delegation_card_tezos_delegation_card__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/tezos-delegation-card/tezos-delegation-card */ "Q6rr");
/* harmony import */ var _components_card_actionable_card_actionable__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/card-actionable/card-actionable */ "5n3a");
/* harmony import */ var _components_widget_account_extended_details_widget_account_extended_details__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../components/widget-account-extended-details/widget-account-extended-details */ "vMYo");
/* harmony import */ var _components_transaction_list_transaction_list_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../components/transaction-list/transaction-list.component */ "ZATT");



















class AccountTransactionListPageModule {
}
AccountTransactionListPageModule.ɵfac = function AccountTransactionListPageModule_Factory(t) { return new (t || AccountTransactionListPageModule)(); };
AccountTransactionListPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({ type: AccountTransactionListPageModule });
AccountTransactionListPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({ imports: [[
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_6__["ComponentsModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"],
            _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"],
            ngx_moment__WEBPACK_IMPORTED_MODULE_5__["MomentModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _account_transaction_list__WEBPACK_IMPORTED_MODULE_8__["AccountTransactionListPage"] }])
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](AccountTransactionListPageModule, { declarations: [_account_transaction_list__WEBPACK_IMPORTED_MODULE_8__["AccountTransactionListPage"]], imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
        _components_components_module__WEBPACK_IMPORTED_MODULE_6__["ComponentsModule"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"],
        _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"],
        ngx_moment__WEBPACK_IMPORTED_MODULE_5__["MomentModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] }); })();
_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetComponentScope"](_account_transaction_list__WEBPACK_IMPORTED_MODULE_8__["AccountTransactionListPage"], [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonGrid"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonBackButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonBackButtonDelegate"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonRow"], _components_portfolio_item_portfolio_item__WEBPACK_IMPORTED_MODULE_10__["PortfolioItemComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["NgForOf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonContent"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["NgIf"], _components_tezos_delegation_card_tezos_delegation_card__WEBPACK_IMPORTED_MODULE_11__["TezosDelegationCard"], _components_card_actionable_card_actionable__WEBPACK_IMPORTED_MODULE_12__["CardActionableComponent"], _components_widget_account_extended_details_widget_account_extended_details__WEBPACK_IMPORTED_MODULE_13__["WidgetAccountExtendedDetails"], _components_transaction_list_transaction_list_component__WEBPACK_IMPORTED_MODULE_14__["TransactionListComponent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonCol"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonText"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonSpinner"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonRefresher"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonRefresherContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonInfiniteScroll"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonInfiniteScrollContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonFab"]], [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslatePipe"]]);


/***/ }),

/***/ "gc8t":
/*!***************************************!*\
  !*** ./src/app/models/ActionGroup.ts ***!
  \***************************************/
/*! exports provided: ActionGroup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionGroup", function() { return ActionGroup; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _airgap_coinlib_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @airgap/coinlib-core */ "RKiA");
/* harmony import */ var _airgap_coinlib_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_airgap_coinlib_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _airgap_coinlib_core_actions_GetKtAccountsAction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @airgap/coinlib-core/actions/GetKtAccountsAction */ "Y9VN");
/* harmony import */ var _airgap_coinlib_core_actions_GetKtAccountsAction__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_airgap_coinlib_core_actions_GetKtAccountsAction__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _airgap_coinlib_core_actions_LinkedAction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @airgap/coinlib-core/actions/LinkedAction */ "+B6e");
/* harmony import */ var _airgap_coinlib_core_actions_LinkedAction__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_airgap_coinlib_core_actions_LinkedAction__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _airgap_coinlib_core_actions_SimpleAction__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @airgap/coinlib-core/actions/SimpleAction */ "ZheS");
/* harmony import */ var _airgap_coinlib_core_actions_SimpleAction__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_airgap_coinlib_core_actions_SimpleAction__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _airgap_coinlib_core_protocols_cosmos_CosmosProtocol__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @airgap/coinlib-core/protocols/cosmos/CosmosProtocol */ "Z7Z5");
/* harmony import */ var _airgap_coinlib_core_protocols_cosmos_CosmosProtocol__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_airgap_coinlib_core_protocols_cosmos_CosmosProtocol__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _airgap_coinlib_core_protocols_ICoinSubProtocol__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @airgap/coinlib-core/protocols/ICoinSubProtocol */ "Z7VQ");
/* harmony import */ var _airgap_coinlib_core_protocols_ICoinSubProtocol__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_airgap_coinlib_core_protocols_ICoinSubProtocol__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _services_data_data_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/data/data.service */ "1y+R");
/* harmony import */ var _services_sentry_error_handler_sentry_error_handler__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/sentry-error-handler/sentry-error-handler */ "hPkG");
/* harmony import */ var _actions_AddTokenAction__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./actions/AddTokenAction */ "INF6");
/* harmony import */ var _actions_ButtonAction__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./actions/ButtonAction */ "9nSm");
/* harmony import */ var _actions_DelegatorAction__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./actions/DelegatorAction */ "rtTb");
/* harmony import */ var _actions_TezosMigrateAction__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./actions/TezosMigrateAction */ "xSlK");
/* harmony import */ var _actions_FundAccountAction__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./actions/FundAccountAction */ "OIS8");















class ActionGroup {
    constructor(callerContext) {
        this.callerContext = callerContext;
    }
    getActions() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const actionMap = new Map();
            actionMap.set(_airgap_coinlib_core__WEBPACK_IMPORTED_MODULE_1__["MainProtocolSymbols"].XTZ, () => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                return this.getTezosActions();
            }));
            actionMap.set(_airgap_coinlib_core__WEBPACK_IMPORTED_MODULE_1__["SubProtocolSymbols"].XTZ_KT, () => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                return this.getTezosKTActions();
            }));
            actionMap.set(_airgap_coinlib_core__WEBPACK_IMPORTED_MODULE_1__["MainProtocolSymbols"].XTZ_SHIELDED, () => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                return this.getTezosShieldedTezActions();
            }));
            actionMap.set(_airgap_coinlib_core__WEBPACK_IMPORTED_MODULE_1__["MainProtocolSymbols"].ETH, () => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                return this.getEthereumActions();
            }));
            actionMap.set(_airgap_coinlib_core__WEBPACK_IMPORTED_MODULE_1__["MainProtocolSymbols"].RBTC, () => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                return this.getRskActions();
            }));
            actionMap.set(_airgap_coinlib_core__WEBPACK_IMPORTED_MODULE_1__["MainProtocolSymbols"].COSMOS, () => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                return this.getCosmosActions();
            }));
            actionMap.set(_airgap_coinlib_core__WEBPACK_IMPORTED_MODULE_1__["MainProtocolSymbols"].POLKADOT, () => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                return this.getPolkadotActions();
            }));
            actionMap.set(_airgap_coinlib_core__WEBPACK_IMPORTED_MODULE_1__["MainProtocolSymbols"].KUSAMA, () => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                return this.getKusamaActions();
            }));
            actionMap.set(_airgap_coinlib_core__WEBPACK_IMPORTED_MODULE_1__["MainProtocolSymbols"].MOONBASE, () => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                return this.getMoonbeamActions();
            }));
            actionMap.set(_airgap_coinlib_core__WEBPACK_IMPORTED_MODULE_1__["MainProtocolSymbols"].MOONRIVER, () => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                return this.getMoonbeamActions();
            }));
            const actionFunction = actionMap.get(this.callerContext.protocolIdentifier);
            return actionFunction ? actionFunction() : [];
        });
    }
    getTezosActions() {
        const delegateButtonAction = this.createDelegateButtonAction();
        //TODO: Move logic to sub-account-add.ts
        const addTokenButtonAction = new _actions_ButtonAction__WEBPACK_IMPORTED_MODULE_10__["ButtonAction"]({ name: 'account-transaction-list.add-tokens_label', icon: 'add', identifier: 'add-tokens' }, () => {
            const prepareAddTokenActionContext = new _airgap_coinlib_core_actions_SimpleAction__WEBPACK_IMPORTED_MODULE_4__["SimpleAction"](() => {
                return new Promise((resolve) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                    const info = {
                        subProtocolType: _airgap_coinlib_core_protocols_ICoinSubProtocol__WEBPACK_IMPORTED_MODULE_6__["SubProtocolType"].TOKEN,
                        wallet: this.callerContext.wallet,
                        actionCallback: resolve
                    };
                    this.callerContext.dataService.setData(_services_data_data_service__WEBPACK_IMPORTED_MODULE_7__["DataServiceKey"].DETAIL, info);
                    this.callerContext.router
                        .navigateByUrl(`/sub-account-add/${_services_data_data_service__WEBPACK_IMPORTED_MODULE_7__["DataServiceKey"].DETAIL}/${info.wallet.publicKey}/${info.wallet.protocol.identifier}/${info.wallet.addressIndex}/${info.subProtocolType}`)
                        .catch(Object(_services_sentry_error_handler_sentry_error_handler__WEBPACK_IMPORTED_MODULE_8__["handleErrorSentry"])(_services_sentry_error_handler_sentry_error_handler__WEBPACK_IMPORTED_MODULE_8__["ErrorCategory"].NAVIGATION));
                }));
            });
            const addTokenAction = new _airgap_coinlib_core_actions_LinkedAction__WEBPACK_IMPORTED_MODULE_3__["LinkedAction"](prepareAddTokenActionContext, _actions_AddTokenAction__WEBPACK_IMPORTED_MODULE_9__["AddTokenAction"]);
            addTokenAction.onComplete = () => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                addTokenAction.getLinkedAction().context.location.navigateRoot('');
            });
            return addTokenAction;
        });
        return [delegateButtonAction, addTokenButtonAction];
    }
    getImportAccountsAction() {
        const importButtonAction = new _actions_ButtonAction__WEBPACK_IMPORTED_MODULE_10__["ButtonAction"]({ name: 'account-transaction-list.import-accounts_label', icon: 'add-outline', identifier: 'import-accounts' }, () => {
            const importAccountAction = new _airgap_coinlib_core_actions_GetKtAccountsAction__WEBPACK_IMPORTED_MODULE_2__["ImportAccountAction"]({ publicKey: this.callerContext.wallet.publicKey });
            importAccountAction.onComplete = (ktAddresses) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                if (ktAddresses.length === 0) {
                    this.callerContext.showToast('No accounts to import.');
                }
                else {
                    for (const [index] of ktAddresses.entries()) {
                        yield this.addKtAddress(this.callerContext.wallet, index, ktAddresses);
                    }
                    this.callerContext.router.navigateByUrl('/').catch(Object(_services_sentry_error_handler_sentry_error_handler__WEBPACK_IMPORTED_MODULE_8__["handleErrorSentry"])(_services_sentry_error_handler_sentry_error_handler__WEBPACK_IMPORTED_MODULE_8__["ErrorCategory"].NAVIGATION));
                    this.callerContext.showToast('Accounts imported');
                }
            });
            return importAccountAction;
        });
        return importButtonAction;
    }
    getTezosKTActions() {
        const migrateAction = new _actions_ButtonAction__WEBPACK_IMPORTED_MODULE_10__["ButtonAction"]({ name: 'account-transaction-list.migrate_label', icon: 'return-right', identifier: 'migrate-action' }, () => {
            const action = new _actions_TezosMigrateAction__WEBPACK_IMPORTED_MODULE_12__["AirGapTezosMigrateAction"]({
                wallet: this.callerContext.wallet,
                alertCtrl: this.callerContext.alertCtrl,
                translateService: this.callerContext.translateService,
                protocolService: this.callerContext.protocolService,
                dataService: this.callerContext.dataService,
                router: this.callerContext.router
            });
            return action;
        });
        return [migrateAction];
    }
    getTezosShieldedTezActions() {
        const fundAction = new _actions_ButtonAction__WEBPACK_IMPORTED_MODULE_10__["ButtonAction"]({ name: 'account-transaction-list.fund_label', icon: 'logo-usd', identifier: 'fund-action' }, () => {
            const action = new _actions_FundAccountAction__WEBPACK_IMPORTED_MODULE_13__["FundAccountAction"]({
                wallet: this.callerContext.wallet,
                accountProvider: this.callerContext.accountProvider,
                dataService: this.callerContext.dataService,
                router: this.callerContext.router
            });
            return action;
        });
        return [fundAction];
    }
    getCosmosActions() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const delegateButtonAction = this.createDelegateButtonAction();
            const extraDelegatorButtonActions = yield this.createDelegatorButtonActions({
                type: _airgap_coinlib_core_protocols_cosmos_CosmosProtocol__WEBPACK_IMPORTED_MODULE_5__["CosmosDelegationActionType"].WITHDRAW_ALL_REWARDS,
                name: 'account-transaction-list.claim_rewards_label',
                icon: 'logo-usd',
                identifier: 'claim-rewards'
            });
            return [delegateButtonAction, ...extraDelegatorButtonActions];
        });
    }
    getEthereumActions() {
        const addTokenButtonAction = new _actions_ButtonAction__WEBPACK_IMPORTED_MODULE_10__["ButtonAction"]({ name: 'account-transaction-list.add-tokens_label', icon: 'add-outline', identifier: 'add-tokens' }, () => {
            const prepareAddTokenActionContext = new _airgap_coinlib_core_actions_SimpleAction__WEBPACK_IMPORTED_MODULE_4__["SimpleAction"](() => {
                return new Promise((resolve) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                    const info = {
                        subProtocolType: _airgap_coinlib_core_protocols_ICoinSubProtocol__WEBPACK_IMPORTED_MODULE_6__["SubProtocolType"].TOKEN,
                        wallet: this.callerContext.wallet,
                        actionCallback: resolve
                    };
                    this.callerContext.dataService.setData(_services_data_data_service__WEBPACK_IMPORTED_MODULE_7__["DataServiceKey"].DETAIL, info);
                    this.callerContext.router
                        .navigateByUrl(`/sub-account-add/${_services_data_data_service__WEBPACK_IMPORTED_MODULE_7__["DataServiceKey"].DETAIL}/${info.wallet.publicKey}/${info.wallet.protocol.identifier}/${info.wallet.addressIndex}/${info.subProtocolType}`)
                        .catch(Object(_services_sentry_error_handler_sentry_error_handler__WEBPACK_IMPORTED_MODULE_8__["handleErrorSentry"])(_services_sentry_error_handler_sentry_error_handler__WEBPACK_IMPORTED_MODULE_8__["ErrorCategory"].NAVIGATION));
                }));
            });
            const addTokenAction = new _airgap_coinlib_core_actions_LinkedAction__WEBPACK_IMPORTED_MODULE_3__["LinkedAction"](prepareAddTokenActionContext, _actions_AddTokenAction__WEBPACK_IMPORTED_MODULE_9__["AddTokenAction"]);
            addTokenAction.onComplete = () => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                addTokenAction.getLinkedAction().context.location.navigateRoot('');
            });
            return addTokenAction;
        });
        return [addTokenButtonAction];
    }
    getRskActions() {
        const addTokenButtonAction = new _actions_ButtonAction__WEBPACK_IMPORTED_MODULE_10__["ButtonAction"]({ name: 'account-transaction-list.add-tokens_label', icon: 'add-outline', identifier: 'add-tokens' }, () => {
            const prepareAddTokenActionContext = new _airgap_coinlib_core_actions_SimpleAction__WEBPACK_IMPORTED_MODULE_4__["SimpleAction"](() => {
                return new Promise((resolve) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                    const info = {
                        subProtocolType: _airgap_coinlib_core_protocols_ICoinSubProtocol__WEBPACK_IMPORTED_MODULE_6__["SubProtocolType"].TOKEN,
                        wallet: this.callerContext.wallet,
                        actionCallback: resolve
                    };
                    this.callerContext.dataService.setData(_services_data_data_service__WEBPACK_IMPORTED_MODULE_7__["DataServiceKey"].DETAIL, info);
                    this.callerContext.router
                        .navigateByUrl(`/sub-account-add/${_services_data_data_service__WEBPACK_IMPORTED_MODULE_7__["DataServiceKey"].DETAIL}/${info.wallet.publicKey}/${info.wallet.protocol.identifier}/${info.wallet.addressIndex}/${info.subProtocolType}`)
                        .catch(Object(_services_sentry_error_handler_sentry_error_handler__WEBPACK_IMPORTED_MODULE_8__["handleErrorSentry"])(_services_sentry_error_handler_sentry_error_handler__WEBPACK_IMPORTED_MODULE_8__["ErrorCategory"].NAVIGATION));
                }));
            });
            const addTokenAction = new _airgap_coinlib_core_actions_LinkedAction__WEBPACK_IMPORTED_MODULE_3__["LinkedAction"](prepareAddTokenActionContext, _actions_AddTokenAction__WEBPACK_IMPORTED_MODULE_9__["AddTokenAction"]);
            addTokenAction.onComplete = () => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                addTokenAction.getLinkedAction().context.location.navigateRoot('');
            });
            return addTokenAction;
        });
        return [addTokenButtonAction];
    }
    getPolkadotActions() {
        const delegateButtonAction = this.createDelegateButtonAction();
        return [delegateButtonAction];
    }
    getKusamaActions() {
        const delegateButtonAction = this.createDelegateButtonAction();
        return [delegateButtonAction];
    }
    getMoonbeamActions() {
        const delegateButtonAction = this.createDelegateButtonAction();
        return [delegateButtonAction];
    }
    addKtAddress(xtzWallet, index, ktAddresses) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let wallet = this.callerContext.accountProvider.walletByPublicKeyAndProtocolAndAddressIndex(xtzWallet.publicKey, _airgap_coinlib_core__WEBPACK_IMPORTED_MODULE_1__["SubProtocolSymbols"].XTZ_KT, index);
            if (wallet) {
                return wallet;
            }
            const xtzWalletGroup = this.callerContext.accountProvider.findWalletGroup(xtzWallet);
            const protocol = yield this.callerContext.protocolService.getProtocol(_airgap_coinlib_core__WEBPACK_IMPORTED_MODULE_1__["SubProtocolSymbols"].XTZ_KT);
            wallet = new _airgap_coinlib_core__WEBPACK_IMPORTED_MODULE_1__["AirGapMarketWallet"](protocol, xtzWallet.publicKey, xtzWallet.isExtendedPublicKey, xtzWallet.derivationPath, xtzWallet.masterFingerprint, xtzWallet.status, xtzWallet.priceService, index);
            wallet.addresses = ktAddresses;
            yield wallet.synchronize().catch(Object(_services_sentry_error_handler_sentry_error_handler__WEBPACK_IMPORTED_MODULE_8__["handleErrorSentry"])(_services_sentry_error_handler_sentry_error_handler__WEBPACK_IMPORTED_MODULE_8__["ErrorCategory"].COINLIB));
            const walletAddInfos = [
                {
                    walletToAdd: wallet,
                    groupId: xtzWalletGroup !== undefined ? xtzWalletGroup.id : undefined,
                    groupLabel: xtzWalletGroup !== undefined ? xtzWalletGroup.label : undefined
                }
            ];
            yield this.callerContext.accountProvider.addWallets(walletAddInfos).catch(Object(_services_sentry_error_handler_sentry_error_handler__WEBPACK_IMPORTED_MODULE_8__["handleErrorSentry"])(_services_sentry_error_handler_sentry_error_handler__WEBPACK_IMPORTED_MODULE_8__["ErrorCategory"].WALLET_PROVIDER));
            return wallet;
        });
    }
    createDelegateButtonAction() {
        return new _actions_ButtonAction__WEBPACK_IMPORTED_MODULE_10__["ButtonAction"]({ name: 'account-transaction-list.delegate_label', icon: 'logo-usd', identifier: 'delegate-action' }, () => {
            return new _airgap_coinlib_core_actions_SimpleAction__WEBPACK_IMPORTED_MODULE_4__["SimpleAction"](() => {
                return new Promise((resolve) => {
                    const info = {
                        wallet: this.callerContext.wallet
                    };
                    this.callerContext.dataService.setData(_services_data_data_service__WEBPACK_IMPORTED_MODULE_7__["DataServiceKey"].DETAIL, info);
                    this.callerContext.router
                        .navigateByUrl(`/delegation-detail/${_services_data_data_service__WEBPACK_IMPORTED_MODULE_7__["DataServiceKey"].DETAIL}/${this.callerContext.wallet.publicKey}/${this.callerContext.wallet.protocol.identifier}/${this.callerContext.wallet.addressIndex}`)
                        .catch(Object(_services_sentry_error_handler_sentry_error_handler__WEBPACK_IMPORTED_MODULE_8__["handleErrorSentry"])(_services_sentry_error_handler_sentry_error_handler__WEBPACK_IMPORTED_MODULE_8__["ErrorCategory"].NAVIGATION));
                    resolve();
                });
            });
        });
    }
    createDelegatorButtonActions(...contexts) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                const delegatorDetails = yield this.callerContext.operationsProvider.getDelegatorDetails(this.callerContext.wallet);
                if (delegatorDetails.availableActions) {
                    const availableActionTypes = delegatorDetails.availableActions.map((action) => action.type);
                    return contexts
                        .filter((context) => availableActionTypes.includes(context.type))
                        .map((context) => {
                        return new _actions_ButtonAction__WEBPACK_IMPORTED_MODULE_10__["ButtonAction"](context, () => {
                            return new _actions_DelegatorAction__WEBPACK_IMPORTED_MODULE_11__["AirGapDelegatorAction"]({
                                wallet: this.callerContext.wallet,
                                type: context.type,
                                data: context.data,
                                toastController: this.callerContext.toastController,
                                loadingController: this.callerContext.loadingController,
                                operationsProvider: this.callerContext.operationsProvider,
                                dataService: this.callerContext.dataService,
                                accountService: this.callerContext.accountProvider
                            });
                        });
                    });
                }
            }
            catch (error) {
                console.warn(error);
            }
            return [];
        });
    }
}


/***/ }),

/***/ "nQTt":
/*!****************************************************************************!*\
  !*** ./src/app/pages/account-transaction-list/account-transaction-list.ts ***!
  \****************************************************************************/
/*! exports provided: refreshRate, AccountTransactionListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "refreshRate", function() { return refreshRate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountTransactionListPage", function() { return AccountTransactionListPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _airgap_angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @airgap/angular-core */ "138U");
/* harmony import */ var _airgap_coinlib_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @airgap/coinlib-core */ "RKiA");
/* harmony import */ var _airgap_coinlib_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_airgap_coinlib_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! bignumber.js */ "kB5k");
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(bignumber_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var src_app_helpers_delegation__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/helpers/delegation */ "VE8E");
/* harmony import */ var src_app_services_browser_browser_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/services/browser/browser.service */ "jysE");
/* harmony import */ var src_app_services_extensions_extensions_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/services/extensions/extensions.service */ "Xl7a");
/* harmony import */ var src_app_services_interaction_interaction_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/services/interaction/interaction.service */ "rYTG");
/* harmony import */ var _components_account_edit_popover_account_edit_popover_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../components/account-edit-popover/account-edit-popover.component */ "Pb0q");
/* harmony import */ var _helpers_promise__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../helpers/promise */ "0pct");
/* harmony import */ var _models_ActionGroup__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../models/ActionGroup */ "gc8t");
/* harmony import */ var _models_actions_TezosMigrateAction__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../models/actions/TezosMigrateAction */ "xSlK");
/* harmony import */ var _services_account_account_provider__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../services/account/account.provider */ "57MG");
/* harmony import */ var _services_data_data_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../services/data/data.service */ "1y+R");
/* harmony import */ var _services_operations_operations__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../services/operations/operations */ "nxqh");
/* harmony import */ var _services_push_backend_push_backend__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../services/push-backend/push-backend */ "GsAe");
/* harmony import */ var _services_sentry_error_handler_sentry_error_handler__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../services/sentry-error-handler/sentry-error-handler */ "hPkG");
/* harmony import */ var _services_storage_storage__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../services/storage/storage */ "AFs5");
/* harmony import */ var _services_exchange_exchange__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./../../services/exchange/exchange */ "dW0/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/core */ "fXoL");







































function AccountTransactionListPage_ion_button_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](0, "ion-button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵlistener"]("click", function AccountTransactionListPage_ion_button_14_Template_ion_button_click_0_listener() { const action_r7 = ctx.$implicit; return action_r7.start(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelement"](1, "ion-icon", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementEnd"]();
} if (rf & 2) {
    const action_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵproperty"]("name", action_r7.context.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵpipeBind1"](3, 2, action_r7.context.name), " ");
} }
function AccountTransactionListPage_tezos_delegation_card_17_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](0, "tezos-delegation-card", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵlistener"]("onDelegatedClick", function AccountTransactionListPage_tezos_delegation_card_17_Template_tezos_delegation_card_onDelegatedClick_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵnextContext"](); return ctx_r9.openDelegationDetails(); })("onUndelegatedClick", function AccountTransactionListPage_tezos_delegation_card_17_Template_tezos_delegation_card_onUndelegatedClick_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵrestoreView"](_r10); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵnextContext"](); return ctx_r11.openDelegationDetails(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵproperty"]("wallet", ctx_r1.wallet)("isDelegated", ctx_r1.isKtDelegated)("delegateAmount", ctx_r1.wallet.currentBalance);
} }
function AccountTransactionListPage_card_actionable_18_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](0, "card-actionable", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵlistener"]("click", function AccountTransactionListPage_card_actionable_18_Template_card_actionable_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵnextContext"](); return ctx_r12.openPreparePage(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵpipe"](1, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵproperty"]("imageLeft", false)("imageName", "babylon-migration.svg")("text", _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵpipeBind1"](1, 4, "account-transaction-list.migrate-babylon_card.text"))("heading", _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵpipeBind1"](2, 6, "account-transaction-list.migrate-babylon_card.heading"));
} }
function AccountTransactionListPage_widget_account_extended_details_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelement"](0, "widget-account-extended-details", 36);
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵproperty"]("widget", ctx_r3.accountExtendedDetails);
} }
function AccountTransactionListPage_ion_spinner_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelement"](0, "ion-spinner", 37);
} }
function AccountTransactionListPage_ion_row_31_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](0, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](1, "ion-col", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](2, "ion-text", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](6, "ion-button", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵlistener"]("click", function AccountTransactionListPage_ion_row_31_Template_ion_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵnextContext"](); return ctx_r14.openBlockexplorer(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelement"](7, "ion-icon", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵpipe"](9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵpipeBind1"](5, 2, "account-transaction-list.tx_not_loading"));
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵpipeBind1"](9, 4, "account-transaction-list.pending-transactions.open-blockexplorer_label"), " ");
} }
function AccountTransactionListPage_ng_container_35_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](1, "ion-button", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵlistener"]("click", function AccountTransactionListPage_ng_container_35_Template_ion_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵrestoreView"](_r17); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵnextContext"](); return ctx_r16.loadMoreTransactions(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵpipeBind1"](3, 1, "account-transaction-list.load_more"));
} }
const refreshRate = 3000;
class AccountTransactionListPage {
    constructor(alertCtrl, navController, router, translateService, operationsProvider, popoverCtrl, toastController, loadingController, accountProvider, http, dataService, protocolService, interactionService, route, platform, storageProvider, pushBackendProvider, exchangeProvider, extensionsService, browserService) {
        this.alertCtrl = alertCtrl;
        this.navController = navController;
        this.router = router;
        this.translateService = translateService;
        this.operationsProvider = operationsProvider;
        this.popoverCtrl = popoverCtrl;
        this.toastController = toastController;
        this.loadingController = loadingController;
        this.accountProvider = accountProvider;
        this.http = http;
        this.dataService = dataService;
        this.protocolService = protocolService;
        this.interactionService = interactionService;
        this.route = route;
        this.platform = platform;
        this.storageProvider = storageProvider;
        this.pushBackendProvider = pushBackendProvider;
        this.exchangeProvider = exchangeProvider;
        this.extensionsService = extensionsService;
        this.browserService = browserService;
        this.mainProtocolSymbols = _airgap_coinlib_core__WEBPACK_IMPORTED_MODULE_2__["MainProtocolSymbols"];
        this.subProtocolSymbols = _airgap_coinlib_core__WEBPACK_IMPORTED_MODULE_2__["SubProtocolSymbols"];
        this.timer$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["timer"])(0, refreshRate);
        this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_8__["Subscription"]();
        this.isRefreshing = false;
        this.initialTransactionsLoaded = false;
        this.infiniteEnabled = false;
        this.infiniteScrollActivated = false;
        this.isDesktop = false;
        this.showLinkToBlockExplorer = false;
        this.txOffset = 0;
        this.transactions = [];
        this.pendingTransactions = [];
        this.formattedExchangeTransactions = [];
        // XTZ
        this.isKtDelegated = false;
        this.lottieConfig = {
            path: './assets/animations/loading.json'
        };
        this.TRANSACTION_LIMIT = 10;
        this.isDesktop = this.platform.is('desktop');
        this.publicKey = this.route.snapshot.params.publicKey;
        this.protocolID = this.route.snapshot.params.protocolID;
        this.addressIndex = this.route.snapshot.params.addressIndex;
        if (this.addressIndex === 'undefined') {
            this.addressIndex = undefined;
        }
        else {
            this.addressIndex = Number(this.addressIndex);
        }
        this.wallet = this.accountProvider.walletByPublicKeyAndProtocolAndAddressIndex(this.publicKey, this.protocolID, this.addressIndex);
        this.updateExtendedDetails();
        this.walletChanged = accountProvider.walletChangedObservable.subscribe(() => {
            this.loadInitialTransactions(true);
            this.updateExtendedDetails();
        });
        this.subscription = this.timer$.subscribe(() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.hasExchangeTransactions) {
                this.formattedExchangeTransactions = yield this.exchangeProvider.getExchangeTransactionsByProtocol(this.wallet.protocol.identifier, this.wallet.addresses[0]);
            }
        }));
        this.protocolIdentifier = this.wallet.protocol.identifier;
        if (this.protocolIdentifier === _airgap_coinlib_core__WEBPACK_IMPORTED_MODULE_2__["SubProtocolSymbols"].XTZ_KT) {
            this.isDelegated().catch(Object(_services_sentry_error_handler_sentry_error_handler__WEBPACK_IMPORTED_MODULE_21__["handleErrorSentry"])(_services_sentry_error_handler_sentry_error_handler__WEBPACK_IMPORTED_MODULE_21__["ErrorCategory"].COINLIB));
        }
        if (this.protocolIdentifier === _airgap_coinlib_core__WEBPACK_IMPORTED_MODULE_2__["MainProtocolSymbols"].XTZ) {
            this.getKtAddresses().catch(Object(_services_sentry_error_handler_sentry_error_handler__WEBPACK_IMPORTED_MODULE_21__["handleErrorSentry"])(_services_sentry_error_handler_sentry_error_handler__WEBPACK_IMPORTED_MODULE_21__["ErrorCategory"].COINLIB));
            this.isDelegated().catch(Object(_services_sentry_error_handler_sentry_error_handler__WEBPACK_IMPORTED_MODULE_21__["handleErrorSentry"])(_services_sentry_error_handler_sentry_error_handler__WEBPACK_IMPORTED_MODULE_21__["ErrorCategory"].COINLIB));
        }
        this.actionGroup = new _models_ActionGroup__WEBPACK_IMPORTED_MODULE_15__["ActionGroup"](this);
        this.actionGroup.getActions().then((actions) => {
            this.actions = actions;
        });
    }
    get hasPendingTransactions() {
        return this.pendingTransactions.length > 0;
    }
    get hasExchangeTransactions() {
        return this.formattedExchangeTransactions.length > 0;
    }
    showNoTransactionScreen() {
        return this.transactions.length === 0;
    }
    ionViewWillEnter() {
        this.doRefresh();
    }
    openPreparePage() {
        let info;
        if (this.protocolIdentifier === _airgap_coinlib_core__WEBPACK_IMPORTED_MODULE_2__["SubProtocolSymbols"].XTZ_KT) {
            const action = new _models_actions_TezosMigrateAction__WEBPACK_IMPORTED_MODULE_16__["AirGapTezosMigrateAction"]({
                wallet: this.wallet,
                alertCtrl: this.alertCtrl,
                translateService: this.translateService,
                protocolService: this.protocolService,
                dataService: this.dataService,
                router: this.router
            });
            action.start();
            return;
        }
        else if (this.protocolIdentifier === _airgap_coinlib_core__WEBPACK_IMPORTED_MODULE_2__["SubProtocolSymbols"].XTZ_BTC) {
            info = {
                wallet: this.wallet,
                address: '',
                disableFees: true
            };
        }
        else {
            info = {
                wallet: this.wallet,
                address: ''
            };
        }
        this.router
            .navigateByUrl(`/transaction-prepare/${_services_data_data_service__WEBPACK_IMPORTED_MODULE_18__["DataServiceKey"].DETAIL}/${this.publicKey}/${this.protocolID}/${this.addressIndex}/${info.address !== ''}/${0}/${'not_forced'}`)
            .catch(Object(_services_sentry_error_handler_sentry_error_handler__WEBPACK_IMPORTED_MODULE_21__["handleErrorSentry"])(_services_sentry_error_handler_sentry_error_handler__WEBPACK_IMPORTED_MODULE_21__["ErrorCategory"].NAVIGATION));
    }
    openReceivePage() {
        this.router
            .navigateByUrl(`/account-address/${_services_data_data_service__WEBPACK_IMPORTED_MODULE_18__["DataServiceKey"].DETAIL}/${this.publicKey}/${this.protocolID}/${this.addressIndex}`)
            .catch(Object(_services_sentry_error_handler_sentry_error_handler__WEBPACK_IMPORTED_MODULE_21__["handleErrorSentry"])(_services_sentry_error_handler_sentry_error_handler__WEBPACK_IMPORTED_MODULE_21__["ErrorCategory"].NAVIGATION));
    }
    openTransactionDetailPage(transaction) {
        this.dataService.setData(_services_data_data_service__WEBPACK_IMPORTED_MODULE_18__["DataServiceKey"].DETAIL, transaction);
        this.router
            .navigateByUrl(`/transaction-detail/${_services_data_data_service__WEBPACK_IMPORTED_MODULE_18__["DataServiceKey"].DETAIL}/${transaction.hash}`)
            .catch(Object(_services_sentry_error_handler_sentry_error_handler__WEBPACK_IMPORTED_MODULE_21__["handleErrorSentry"])(_services_sentry_error_handler_sentry_error_handler__WEBPACK_IMPORTED_MODULE_21__["ErrorCategory"].NAVIGATION));
    }
    openBlockexplorer() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const blockexplorer = yield this.wallet.protocol.getBlockExplorerLinkForAddress(this.wallet.addresses[0]);
            this.browserService.openUrl(blockexplorer);
        });
    }
    doRefresh(event = null) {
        if (Object(src_app_helpers_delegation__WEBPACK_IMPORTED_MODULE_9__["supportsDelegation"])(this.wallet.protocol)) {
            this.operationsProvider.refreshAllDelegationStatuses([this.wallet]);
        }
        this.isRefreshing = true;
        if (event) {
            event.target.complete();
        }
        this.loadInitialTransactions().catch(Object(_services_sentry_error_handler_sentry_error_handler__WEBPACK_IMPORTED_MODULE_21__["handleErrorSentry"])());
    }
    loadMoreTransactions() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const newTransactions = yield this.getTransactions(this.transactionResult ? this.transactionResult.cursor : undefined, this.TRANSACTION_LIMIT);
            this.transactions = this.transactions.concat(newTransactions);
            yield this.storageProvider.setCache(this.accountProvider.getAccountIdentifier(this.wallet), this.transactions);
            this.infiniteEnabled = newTransactions.length >= this.TRANSACTION_LIMIT;
        });
    }
    doInfinite(event) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.infiniteScrollActivated = true;
            if (!this.infiniteEnabled) {
                return event.target.complete();
            }
            yield this.loadMoreTransactions();
            event.target.complete();
        });
    }
    loadInitialTransactions(_forceRefresh = false) {
        var _a, _b;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.transactions.length === 0) {
                this.transactions = (_b = (_a = (yield this.storageProvider.getCache(this.accountProvider.getAccountIdentifier(this.wallet)))) === null || _a === void 0 ? void 0 : _a.slice(0, 10)) !== null && _b !== void 0 ? _b : [];
            }
            const transactionPromise = this.getTransactions(undefined, this.TRANSACTION_LIMIT);
            const transactions = yield Object(_helpers_promise__WEBPACK_IMPORTED_MODULE_14__["promiseTimeout"])(10000, transactionPromise).catch((error) => {
                console.error(error);
                // either the txs are taking too long to load or there is actually a network error
                this.showLinkToBlockExplorer = true;
                return [];
            });
            if (transactions.length > 0) {
                this.transactions = transactions;
            }
            this.isRefreshing = false;
            this.initialTransactionsLoaded = true;
            const addr = this.wallet.receivingPublicAddress;
            try {
                this.pendingTransactions = (yield this.pushBackendProvider.getPendingTxs(addr, this.protocolIdentifier));
            }
            catch (err) { }
            this.formattedExchangeTransactions = yield this.exchangeProvider.getExchangeTransactionsByProtocol(this.wallet.protocol.identifier, this.wallet.addresses[0]);
            // remove duplicates from pendingTransactions
            const txHashes = this.transactions.map((value) => value.hash);
            this.pendingTransactions = this.pendingTransactions.filter((value) => {
                return txHashes.indexOf(value.hash) === -1;
            });
            if (this.hasPendingTransactions) {
                this.pendingTransactions = this.pendingTransactions.map((pendingTx) => {
                    pendingTx.fee = new bignumber_js__WEBPACK_IMPORTED_MODULE_7__["BigNumber"](pendingTx.fee).toString(10);
                    pendingTx.amount = new bignumber_js__WEBPACK_IMPORTED_MODULE_7__["BigNumber"](pendingTx.amount).toString(10);
                    return pendingTx;
                });
            }
            yield this.storageProvider.setCache(this.accountProvider.getAccountIdentifier(this.wallet), this.transactions);
            this.txOffset = this.transactions.length;
            this.infiniteEnabled = this.transactions.length >= this.TRANSACTION_LIMIT;
            this.infiniteScrollActivated = false;
        });
    }
    getTransactions(cursor, limit = 10) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const [transactionResult] = yield Promise.all([
                this.transactionResult ? this.wallet.fetchTransactions(limit, cursor) : this.wallet.fetchTransactions(limit),
                this.wallet.synchronize().catch((error) => {
                    console.error(error);
                })
            ]);
            this.transactionResult = transactionResult;
            return transactionResult.transactions;
        });
    }
    presentEditPopover(event) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const popover = yield this.popoverCtrl.create({
                component: _components_account_edit_popover_account_edit_popover_component__WEBPACK_IMPORTED_MODULE_13__["AccountEditPopoverComponent"],
                componentProps: {
                    wallet: this.wallet,
                    importAccountAction: this.wallet.protocol.identifier === _airgap_coinlib_core__WEBPACK_IMPORTED_MODULE_2__["MainProtocolSymbols"].XTZ ? this.actionGroup.getImportAccountsAction() : undefined,
                    onDelete: () => {
                        this.navController.pop();
                    }
                },
                event,
                translucent: true
            });
            return popover.present().catch(Object(_services_sentry_error_handler_sentry_error_handler__WEBPACK_IMPORTED_MODULE_21__["handleErrorSentry"])(_services_sentry_error_handler_sentry_error_handler__WEBPACK_IMPORTED_MODULE_21__["ErrorCategory"].NAVIGATION));
        });
    }
    // Tezos
    isDelegated() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const isDelegated = yield this.operationsProvider.checkDelegated(this.wallet.protocol, this.wallet.receivingPublicAddress);
            this.isKtDelegated = isDelegated;
            // const action = isDelegated ? this.getStatusAction() : this.getDelegateAction()
            // this.replaceAction(ActionType.DELEGATE, action)
        });
    }
    getKtAddresses() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const protocol = new _airgap_coinlib_core__WEBPACK_IMPORTED_MODULE_2__["TezosKtProtocol"]();
            const ktAddresses = yield protocol.getAddressesFromPublicKey(this.wallet.publicKey);
            // const action = ktAddresses.length > 0 ? this.getStatusAction(ktAddresses) : this.getDelegateAction()
            // this.replaceAction(ActionType.DELEGATE, action)
            return ktAddresses.map((address) => address.getValue());
        });
    }
    openDelegationDetails() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const delegateAction = this.actions.find((action) => action.identifier === 'delegate-action');
            if (delegateAction) {
                yield delegateAction.start();
            }
        });
    }
    showToast(message) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                duration: 3000,
                message,
                buttons: [
                    {
                        text: 'Ok',
                        role: 'cancel'
                    }
                ],
                position: 'bottom'
            });
            toast.present().catch(Object(_services_sentry_error_handler_sentry_error_handler__WEBPACK_IMPORTED_MODULE_21__["handleErrorSentry"])(_services_sentry_error_handler_sentry_error_handler__WEBPACK_IMPORTED_MODULE_21__["ErrorCategory"].NAVIGATION));
        });
    }
    updateExtendedDetails() {
        if (Object(src_app_helpers_delegation__WEBPACK_IMPORTED_MODULE_9__["supportsDelegation"])(this.wallet.protocol) && this.wallet.receivingPublicAddress !== undefined) {
            this.extensionsService.loadDelegationExtensions().then(() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                this.accountExtendedDetails = yield this.operationsProvider.getAccountExtendedDetails(this.wallet);
            }));
        }
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
        this.walletChanged.unsubscribe();
    }
}
AccountTransactionListPage.ɵfac = function AccountTransactionListPage_Factory(t) { return new (t || AccountTransactionListPage)(_angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"]), _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"]), _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵdirectiveInject"](_services_operations_operations__WEBPACK_IMPORTED_MODULE_19__["OperationsProvider"]), _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["PopoverController"]), _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"]), _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"]), _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵdirectiveInject"](_services_account_account_provider__WEBPACK_IMPORTED_MODULE_17__["AccountProvider"]), _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵdirectiveInject"](_services_data_data_service__WEBPACK_IMPORTED_MODULE_18__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵdirectiveInject"](_airgap_angular_core__WEBPACK_IMPORTED_MODULE_1__["ProtocolService"]), _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵdirectiveInject"](src_app_services_interaction_interaction_service__WEBPACK_IMPORTED_MODULE_12__["InteractionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵdirectiveInject"](_services_storage_storage__WEBPACK_IMPORTED_MODULE_22__["WalletStorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵdirectiveInject"](_services_push_backend_push_backend__WEBPACK_IMPORTED_MODULE_20__["PushBackendProvider"]), _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵdirectiveInject"](_services_exchange_exchange__WEBPACK_IMPORTED_MODULE_23__["ExchangeProvider"]), _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵdirectiveInject"](src_app_services_extensions_extensions_service__WEBPACK_IMPORTED_MODULE_11__["ExtensionsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵdirectiveInject"](src_app_services_browser_browser_service__WEBPACK_IMPORTED_MODULE_10__["BrowserService"])); };
AccountTransactionListPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵdefineComponent"]({ type: AccountTransactionListPage, selectors: [["page-account-transaction-list"]], decls: 50, vars: 40, consts: [[1, "ion-no-border"], ["fixed", "true", 1, "ion-no-padding"], ["slot", "start"], ["defaultHref", "/tabs/portfolio"], ["slot", "end"], ["id", "edit-popover", "color", "secondary", 3, "click"], ["name", "ellipsis-vertical-outline"], [2, "display", "block"], [3, "wallet", "maxDigits"], [1, "ion-padding-top", "ion-padding-horizontal", "action--container"], ["color", "secondary", "shape", "round", "size", "small", "fill", "outline", 3, "click", 4, "ngFor", "ngForOf"], ["no-bounce", "", "has-bouncing", "false", "forceOverscroll", "false"], [3, "wallet", "isDelegated", "delegateAmount", "onDelegatedClick", "onUndelegatedClick", 4, "ngIf"], ["tappable", "", 3, "imageLeft", "imageName", "text", "heading", "click", 4, "ngIf"], [3, "widget", 4, "ngIf"], [3, "transactionType", "hasPendingTransactions", "transactions", "isRefreshing", "initialTransactionsLoaded", "wallet"], [3, "transactionType", "hasExchangeTransactions", "transactions", "isRefreshing", "initialTransactionsLoaded", "wallet"], [1, "ion-align-items-center", "ion-padding-top"], ["size", "10", 1, "ion-padding-horizontal"], ["color", "primary", 1, "font--weight__bold"], ["size", "1", 1, "justify--content__end", "ion-no-padding"], ["color", "primary", "name", "dots", 4, "ngIf"], ["size", "1"], [4, "ngIf"], ["slot", "fixed", 3, "ionRefresh"], [3, "transactionType", "transactions", "isRefreshing", "initialTransactionsLoaded", "wallet"], [3, "ionInfinite"], ["vertical", "bottom", "slot", "fixed"], ["id", "receive", "expand", "full", "size", "default", "color", "primary", "shape", "round", 3, "click"], ["slot", "start", "src", "./assets/custom-ion-icons/md-call_received.svg"], ["id", "send", "expand", "full", "size", "default", "color", "primary", "shape", "round", 3, "disabled", "click"], ["slot", "start", "name", "send-outline"], ["color", "secondary", "shape", "round", "size", "small", "fill", "outline", 3, "click"], ["slot", "start", 3, "name"], [3, "wallet", "isDelegated", "delegateAmount", "onDelegatedClick", "onUndelegatedClick"], ["tappable", "", 3, "imageLeft", "imageName", "text", "heading", "click"], [3, "widget"], ["color", "primary", "name", "dots"], [1, "ion-padding"], ["color", "secondary", 1, "font--weight__bold"], ["fill", "outline", "color", "secondary", "shape", "round", 1, "ion-margin-top", 3, "click"], ["name", "open", "slot", "start"], ["fill", "clear", "size", "small", 3, "click"]], template: function AccountTransactionListPage_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](0, "ion-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](1, "ion-grid", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](2, "ion-toolbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](3, "ion-buttons", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelement"](4, "ion-back-button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](5, "ion-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵpipe"](7, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](8, "ion-buttons", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](9, "ion-button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵlistener"]("click", function AccountTransactionListPage_Template_ion_button_click_9_listener($event) { return ctx.presentEditPopover($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelement"](10, "ion-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](11, "ion-row", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelement"](12, "portfolio-item", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](13, "ion-row", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtemplate"](14, AccountTransactionListPage_ion_button_14_Template, 4, 4, "ion-button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](15, "ion-content", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](16, "ion-grid", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtemplate"](17, AccountTransactionListPage_tezos_delegation_card_17_Template, 1, 3, "tezos-delegation-card", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtemplate"](18, AccountTransactionListPage_card_actionable_18_Template, 3, 8, "card-actionable", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtemplate"](19, AccountTransactionListPage_widget_account_extended_details_19_Template, 1, 1, "widget-account-extended-details", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelement"](20, "transaction-list", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelement"](21, "transaction-list", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](22, "ion-row", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](23, "ion-col", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](24, "ion-text", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](25, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtext"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵpipe"](27, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](28, "ion-col", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtemplate"](29, AccountTransactionListPage_ion_spinner_29_Template, 1, 0, "ion-spinner", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelement"](30, "ion-col", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtemplate"](31, AccountTransactionListPage_ion_row_31_Template, 10, 6, "ion-row", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](32, "ion-refresher", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵlistener"]("ionRefresh", function AccountTransactionListPage_Template_ion_refresher_ionRefresh_32_listener($event) { return ctx.doRefresh($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelement"](33, "ion-refresher-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelement"](34, "transaction-list", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtemplate"](35, AccountTransactionListPage_ng_container_35_Template, 4, 3, "ng-container", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](36, "ion-infinite-scroll", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵlistener"]("ionInfinite", function AccountTransactionListPage_Template_ion_infinite_scroll_ionInfinite_36_listener($event) { return ctx.doInfinite($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelement"](37, "ion-infinite-scroll-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](38, "ion-fab", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](39, "ion-row");
        _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](40, "ion-col");
        _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](41, "ion-button", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵlistener"]("click", function AccountTransactionListPage_Template_ion_button_click_41_listener() { return ctx.openReceivePage(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelement"](42, "ion-icon", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtext"](43);
        _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵpipe"](44, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](45, "ion-col");
        _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](46, "ion-button", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵlistener"]("click", function AccountTransactionListPage_Template_ion_button_click_46_listener() { return ctx.openPreparePage(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelement"](47, "ion-icon", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtext"](48);
        _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵpipe"](49, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtextInterpolate2"]("", ctx.wallet == null ? null : ctx.wallet.protocol.symbol, " ", _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵpipeBind1"](7, 32, "account-transaction-list.title"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵproperty"]("wallet", ctx.wallet)("maxDigits", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵproperty"]("ngForOf", ctx.actions);
        _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵproperty"]("ngIf", ctx.wallet.protocol.identifier === ctx.mainProtocolSymbols.XTZ && ctx.wallet.currentBalance);
        _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵproperty"]("ngIf", ctx.wallet.protocol.identifier === ctx.subProtocolSymbols.XTZ_KT);
        _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵproperty"]("ngIf", ctx.accountExtendedDetails !== undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵproperty"]("transactionType", "pendingTransaction")("hasPendingTransactions", ctx.hasPendingTransactions)("transactions", ctx.pendingTransactions)("isRefreshing", ctx.isRefreshing)("initialTransactionsLoaded", ctx.initialTransactionsLoaded)("wallet", ctx.wallet);
        _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵproperty"]("transactionType", "exchangeTransaction")("hasExchangeTransactions", ctx.hasExchangeTransactions)("transactions", ctx.formattedExchangeTransactions)("isRefreshing", ctx.isRefreshing)("initialTransactionsLoaded", ctx.initialTransactionsLoaded)("wallet", ctx.wallet);
        _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵpipeBind1"](27, 34, "account-transaction-list.transactions_label"));
        _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵproperty"]("ngIf", ctx.isRefreshing && !ctx.showLinkToBlockExplorer);
        _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵproperty"]("ngIf", ctx.showLinkToBlockExplorer);
        _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵproperty"]("transactionType", "normalTransaction")("transactions", ctx.transactions)("isRefreshing", ctx.isRefreshing)("initialTransactionsLoaded", ctx.initialTransactionsLoaded)("wallet", ctx.wallet);
        _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵproperty"]("ngIf", ctx.isDesktop && ctx.infiniteEnabled && !ctx.infiniteScrollActivated);
        _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵpipeBind1"](44, 36, "account-transaction-list.receive_label"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵproperty"]("disabled", (ctx.wallet.currentBalance == null ? null : ctx.wallet.currentBalance.toNumber()) === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵpipeBind1"](49, 38, "account-transaction-list.send_label"), " ");
    } }, styles: [".loading-header[_ngcontent-%COMP%] {\n  color: white;\n  font-weight: 300;\n  width: 100%;\n  text-align: center;\n}\n.loading-header[_ngcontent-%COMP%]   ion-spinner[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n  width: 28px;\n  height: 28px;\n  stroke: #fff !important;\n}\n.loading-content[_ngcontent-%COMP%] {\n  color: white;\n  font-weight: 300;\n  width: 100%;\n  margin-top: 20vh;\n  text-align: center;\n}\n.loading-content[_ngcontent-%COMP%]   ion-spinner[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n  width: 28px;\n  height: 28px;\n}\nion-fab[_ngcontent-%COMP%] {\n  width: 100%;\n}\nsvg[_ngcontent-%COMP%] {\n  stroke: none;\n}\n.action--container[_ngcontent-%COMP%] {\n  background: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2FjY291bnQtdHJhbnNhY3Rpb24tbGlzdC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FBQ0Y7QUFBRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7QUFFSjtBQUNBO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFFRjtBQURFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUFHSjtBQUFBO0VBQ0UsV0FBQTtBQUdGO0FBQUE7RUFDRSxZQUFBO0FBR0Y7QUFEQTtFQUNFLGdCQUFBO0FBSUYiLCJmaWxlIjoiYWNjb3VudC10cmFuc2FjdGlvbi1saXN0LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9hZGluZy1oZWFkZXIge1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGlvbi1zcGlubmVyICoge1xuICAgIHdpZHRoOiAyOHB4O1xuICAgIGhlaWdodDogMjhweDtcbiAgICBzdHJva2U6ICNmZmYgIWltcG9ydGFudDtcbiAgfVxufVxuLmxvYWRpbmctY29udGVudCB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi10b3A6IDIwdmg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgaW9uLXNwaW5uZXIgKiB7XG4gICAgd2lkdGg6IDI4cHg7XG4gICAgaGVpZ2h0OiAyOHB4O1xuICB9XG59XG5pb24tZmFiIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbnN2ZyB7XG4gIHN0cm9rZTogbm9uZTtcbn1cbi5hY3Rpb24tLWNvbnRhaW5lciB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG59XG4iXX0= */"] });


/***/ }),

/***/ "xSlK":
/*!******************************************************!*\
  !*** ./src/app/models/actions/TezosMigrateAction.ts ***!
  \******************************************************/
/*! exports provided: AirGapTezosMigrateAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AirGapTezosMigrateAction", function() { return AirGapTezosMigrateAction; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _airgap_coinlib_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @airgap/coinlib-core */ "RKiA");
/* harmony import */ var _airgap_coinlib_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_airgap_coinlib_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _airgap_coinlib_core_actions_Action__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @airgap/coinlib-core/actions/Action */ "u8Qk");
/* harmony import */ var _airgap_coinlib_core_actions_Action__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_airgap_coinlib_core_actions_Action__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _pipes_shorten_string_shorten_string_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../pipes/shorten-string/shorten-string.pipe */ "iLEx");
/* harmony import */ var _services_data_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/data/data.service */ "1y+R");
/* harmony import */ var _services_sentry_error_handler_sentry_error_handler__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/sentry-error-handler/sentry-error-handler */ "hPkG");






class AirGapTezosMigrateAction extends _airgap_coinlib_core_actions_Action__WEBPACK_IMPORTED_MODULE_2__["Action"] {
    perform() {
        return new Promise((resolve) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const mainProtocol = yield this.context.protocolService.getProtocol(_airgap_coinlib_core__WEBPACK_IMPORTED_MODULE_1__["MainProtocolSymbols"].XTZ);
            const mainAddress = yield mainProtocol.getAddressFromPublicKey(this.context.wallet.publicKey);
            const shortenString = new _pipes_shorten_string_shorten_string_pipe__WEBPACK_IMPORTED_MODULE_3__["ShortenStringPipe"]();
            this.context.alertCtrl
                .create({
                header: this.context.translateService.instant('account-transaction-list.migrate-alert.header'),
                message: `Do you want to transfer <span class=\"style__strong color__primary\">${this.context.wallet.currentBalance.shiftedBy(-1 * this.context.wallet.protocol.decimals)} XTZ</span> </strong> from <span class=\"style__strong color__primary\"> ${shortenString.transform(this.context.wallet.receivingPublicAddress)} </span> to <span class=\"style__strong color__primary\"> ${shortenString.transform(mainAddress.getValue())}</span>?`,
                buttons: [
                    {
                        text: this.context.translateService.instant('account-transaction-list.migrate-alert.cancel'),
                        role: 'cancel',
                        handler: () => {
                            resolve();
                        }
                    },
                    {
                        text: this.context.translateService.instant('account-transaction-list.migrate-alert.confirm'),
                        handler: () => {
                            const info = {
                                wallet: this.context.wallet,
                                address: mainAddress.getValue(),
                                forceMigration: true
                            };
                            this.context.dataService.setData(_services_data_data_service__WEBPACK_IMPORTED_MODULE_4__["DataServiceKey"].DETAIL, info);
                            this.context.router
                                .navigateByUrl(`/transaction-prepare/${_services_data_data_service__WEBPACK_IMPORTED_MODULE_4__["DataServiceKey"].DETAIL}/${info.wallet.publicKey}/${info.wallet.protocol.identifier}/${info.wallet.addressIndex}/${info.address}/${0}/${info.forceMigration ? 'forced' : 'not_forced'}`)
                                .catch(Object(_services_sentry_error_handler_sentry_error_handler__WEBPACK_IMPORTED_MODULE_5__["handleErrorSentry"])(_services_sentry_error_handler_sentry_error_handler__WEBPACK_IMPORTED_MODULE_5__["ErrorCategory"].NAVIGATION));
                            resolve();
                        }
                    }
                ]
            })
                .then((alert) => {
                alert.present().catch(Object(_services_sentry_error_handler_sentry_error_handler__WEBPACK_IMPORTED_MODULE_5__["handleErrorSentry"])(_services_sentry_error_handler_sentry_error_handler__WEBPACK_IMPORTED_MODULE_5__["ErrorCategory"].NAVIGATION));
            })
                .catch(Object(_services_sentry_error_handler_sentry_error_handler__WEBPACK_IMPORTED_MODULE_5__["handleErrorSentry"])(_services_sentry_error_handler_sentry_error_handler__WEBPACK_IMPORTED_MODULE_5__["ErrorCategory"].IONIC_ALERT));
        }));
    }
}


/***/ })

}]);
//# sourceMappingURL=pages-account-transaction-list-account-transaction-list-module.js.map
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-transaction-confirm-transaction-confirm-module"],{

/***/ "1ZIO":
/*!*************************************************************************!*\
  !*** ./src/app/pages/transaction-confirm/transaction-confirm.module.ts ***!
  \*************************************************************************/
/*! exports provided: TransactionConfirmPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionConfirmPageModule", function() { return TransactionConfirmPageModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/components.module */ "j1ZV");
/* harmony import */ var _transaction_confirm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./transaction-confirm */ "Drc1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "fXoL");









class TransactionConfirmPageModule {
}
TransactionConfirmPageModule.ɵfac = function TransactionConfirmPageModule_Factory(t) { return new (t || TransactionConfirmPageModule)(); };
TransactionConfirmPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: TransactionConfirmPageModule });
TransactionConfirmPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ imports: [[
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_5__["ComponentsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _transaction_confirm__WEBPACK_IMPORTED_MODULE_6__["TransactionConfirmPage"] }])
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](TransactionConfirmPageModule, { declarations: [_transaction_confirm__WEBPACK_IMPORTED_MODULE_6__["TransactionConfirmPage"]], imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"],
        _components_components_module__WEBPACK_IMPORTED_MODULE_5__["ComponentsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] }); })();


/***/ }),

/***/ "Drc1":
/*!******************************************************************!*\
  !*** ./src/app/pages/transaction-confirm/transaction-confirm.ts ***!
  \******************************************************************/
/*! exports provided: TransactionConfirmPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionConfirmPage", function() { return TransactionConfirmPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _airgap_angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @airgap/angular-core */ "138U");
/* harmony import */ var _airgap_coinlib_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @airgap/coinlib-core */ "RKiA");
/* harmony import */ var _airgap_coinlib_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_airgap_coinlib_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _airgap_coinlib_core_utils_ProtocolNetwork__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @airgap/coinlib-core/utils/ProtocolNetwork */ "14cC");
/* harmony import */ var _airgap_coinlib_core_utils_ProtocolNetwork__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_airgap_coinlib_core_utils_ProtocolNetwork__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! bignumber.js */ "kB5k");
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(bignumber_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var src_app_services_account_account_provider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/account/account.provider */ "57MG");
/* harmony import */ var src_app_services_browser_browser_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/browser/browser.service */ "jysE");
/* harmony import */ var src_app_services_data_data_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/data/data.service */ "1y+R");
/* harmony import */ var _services_beacon_beacon_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../services/beacon/beacon.service */ "q3zY");
/* harmony import */ var _services_push_backend_push_backend__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../services/push-backend/push-backend */ "GsAe");
/* harmony import */ var _services_sentry_error_handler_sentry_error_handler__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../services/sentry-error-handler/sentry-error-handler */ "hPkG");
/* harmony import */ var _services_storage_storage__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../services/storage/storage */ "AFs5");
/* harmony import */ var src_app_services_walletconnect_walletconnect_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/services/walletconnect/walletconnect.service */ "8xAc");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _components_signed_transaction_signed_transaction__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../components/signed-transaction/signed-transaction */ "l5qu");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");




























const SECOND = 1000;
const TOAST_DURATION = SECOND * 3;
const TOAST_ERROR_DURATION = SECOND * 5;
const TIMEOUT_TRANSACTION_QUEUED = SECOND * 20;
class TransactionConfirmPage {
    constructor(loadingCtrl, toastCtrl, router, route, alertCtrl, platform, storageProvider, beaconService, pushBackendProvider, browserService, accountService, protocolService, dataService, walletConnectService) {
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.router = router;
        this.route = route;
        this.alertCtrl = alertCtrl;
        this.platform = platform;
        this.storageProvider = storageProvider;
        this.beaconService = beaconService;
        this.pushBackendProvider = pushBackendProvider;
        this.browserService = browserService;
        this.accountService = accountService;
        this.protocolService = protocolService;
        this.dataService = dataService;
        this.walletConnectService = walletConnectService;
        this.txInfos = [];
        this.protocols = [];
    }
    dismiss() {
        this.router.navigateByUrl('/tabs/portfolio').catch(Object(_services_sentry_error_handler_sentry_error_handler__WEBPACK_IMPORTED_MODULE_12__["handleErrorSentry"])(_services_sentry_error_handler_sentry_error_handler__WEBPACK_IMPORTED_MODULE_12__["ErrorCategory"].NAVIGATION));
    }
    ionViewWillEnter() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.platform.ready();
            if (this.route.snapshot.data.special) {
                const info = this.route.snapshot.data.special;
                this.messageDefinitionObjects = info.messageDefinitionObjects;
            }
            // TODO: Multi messages
            // tslint:disable-next-line:no-unnecessary-type-assertion
            this.messageDefinitionObjects.forEach((messageObject) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                const protocol = yield this.protocolService.getProtocol(messageObject.protocol);
                const wallet = this.accountService.walletBySerializerAccountIdentifier(messageObject.payload.accountIdentifier, messageObject.protocol);
                const [request, savedProtocol] = yield this.beaconService.getVaultRequest();
                const selectedProtocol = request && savedProtocol && savedProtocol.identifier === protocol.identifier
                    ? savedProtocol
                    : wallet && wallet.protocol
                        ? wallet.protocol
                        : protocol;
                this.txInfos.push([messageObject.payload.transaction, selectedProtocol, request]);
                this.protocols.push(selectedProtocol);
            }));
        });
    }
    broadcastTransaction() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.protocols.length === 1 && this.protocols[0].identifier === _airgap_coinlib_core__WEBPACK_IMPORTED_MODULE_2__["MainProtocolSymbols"].XTZ_SHIELDED) {
                // temporary
                yield this.wrapInTezosOperation(this.protocols[0], this.txInfos[0][0]);
                return;
            }
            const loading = yield this.loadingCtrl.create({
                message: 'Broadcasting...'
            });
            loading.present().catch(Object(_services_sentry_error_handler_sentry_error_handler__WEBPACK_IMPORTED_MODULE_12__["handleErrorSentry"])(_services_sentry_error_handler_sentry_error_handler__WEBPACK_IMPORTED_MODULE_12__["ErrorCategory"].NAVIGATION));
            const interval = setTimeout(() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                loading.dismiss().catch(Object(_services_sentry_error_handler_sentry_error_handler__WEBPACK_IMPORTED_MODULE_12__["handleErrorSentry"])(_services_sentry_error_handler_sentry_error_handler__WEBPACK_IMPORTED_MODULE_12__["ErrorCategory"].NAVIGATION));
                const toast = yield this.toastCtrl.create({
                    duration: TOAST_DURATION,
                    message: 'Transaction queued. It might take some time until your TX shows up!',
                    buttons: [
                        {
                            text: 'Ok',
                            role: 'cancel'
                        }
                    ],
                    position: 'bottom'
                });
                toast.present().catch(Object(_services_sentry_error_handler_sentry_error_handler__WEBPACK_IMPORTED_MODULE_12__["handleErrorSentry"])(_services_sentry_error_handler_sentry_error_handler__WEBPACK_IMPORTED_MODULE_12__["ErrorCategory"].IONIC_TOAST));
                this.router.navigateByUrl('/tabs/portfolio').catch(Object(_services_sentry_error_handler_sentry_error_handler__WEBPACK_IMPORTED_MODULE_12__["handleErrorSentry"])(_services_sentry_error_handler_sentry_error_handler__WEBPACK_IMPORTED_MODULE_12__["ErrorCategory"].NAVIGATION));
            }), TIMEOUT_TRANSACTION_QUEUED);
            this.txInfos.forEach(([signedTx, protocol, request], index) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                protocol
                    .broadcastTransaction(signedTx)
                    .then((txId) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                    if (request) {
                        // TODO: Type
                        if (request['transaction']) {
                            this.walletConnectService.approveRequest(request.id, txId);
                        }
                        else {
                            const response = {
                                id: request.id,
                                type: this.beaconService.getResponseByRequestType(request.type),
                                transactionHash: txId
                            };
                            this.beaconService.respond(response, request).catch(Object(_services_sentry_error_handler_sentry_error_handler__WEBPACK_IMPORTED_MODULE_12__["handleErrorSentry"])(_services_sentry_error_handler_sentry_error_handler__WEBPACK_IMPORTED_MODULE_12__["ErrorCategory"].BEACON));
                        }
                    }
                    if (interval) {
                        clearInterval(interval);
                    }
                    // TODO: Remove once we introduce pending transaction handling
                    // TODO: Multi messages
                    // tslint:disable-next-line:no-unnecessary-type-assertion
                    const signedTxWrapper = this.messageDefinitionObjects[index].payload;
                    const lastTx = {
                        protocol: this.messageDefinitionObjects[index].protocol,
                        accountIdentifier: signedTxWrapper.accountIdentifier,
                        date: new Date().getTime()
                    };
                    this.storageProvider.set(_services_storage_storage__WEBPACK_IMPORTED_MODULE_13__["WalletStorageKey"].LAST_TX_BROADCAST, lastTx).catch(Object(_services_sentry_error_handler_sentry_error_handler__WEBPACK_IMPORTED_MODULE_12__["handleErrorSentry"])(_services_sentry_error_handler_sentry_error_handler__WEBPACK_IMPORTED_MODULE_12__["ErrorCategory"].STORAGE));
                    loading.dismiss().catch(Object(_services_sentry_error_handler_sentry_error_handler__WEBPACK_IMPORTED_MODULE_12__["handleErrorSentry"])(_services_sentry_error_handler_sentry_error_handler__WEBPACK_IMPORTED_MODULE_12__["ErrorCategory"].NAVIGATION));
                    this.showTransactionSuccessfulAlert(protocol, txId);
                    // POST TX TO BACKEND
                    // Only send it if we are on mainnet
                    if (protocol.options.network.type === _airgap_coinlib_core_utils_ProtocolNetwork__WEBPACK_IMPORTED_MODULE_3__["NetworkType"].MAINNET) {
                        const signed = (yield protocol.getTransactionDetailsFromSigned(this.messageDefinitionObjects[index].payload))[0];
                        // necessary for the transaction backend
                        signed.amount = signed.amount.toString();
                        signed.fee = signed.fee.toString();
                        signed.signedTx = signedTx;
                        signed.hash = txId;
                        this.pushBackendProvider.postPendingTx(signed); // Don't await
                    }
                    // END POST TX TO BACKEND
                }))
                    .catch((error) => {
                    if (interval) {
                        clearInterval(interval);
                    }
                    Object(_services_sentry_error_handler_sentry_error_handler__WEBPACK_IMPORTED_MODULE_12__["handleErrorSentry"])(_services_sentry_error_handler_sentry_error_handler__WEBPACK_IMPORTED_MODULE_12__["ErrorCategory"].COINLIB)(error);
                    loading.dismiss().catch(Object(_services_sentry_error_handler_sentry_error_handler__WEBPACK_IMPORTED_MODULE_12__["handleErrorSentry"])(_services_sentry_error_handler_sentry_error_handler__WEBPACK_IMPORTED_MODULE_12__["ErrorCategory"].NAVIGATION));
                    // TODO: Remove this special error case once we remove web3 from the coin-lib
                    if (error && error.message && error.message.startsWith('Failed to check for transaction receipt')) {
                        ;
                        protocol.getTransactionDetailsFromSigned(this.messageDefinitionObjects[index].payload).then((signed) => {
                            if (signed.hash) {
                                this.showTransactionSuccessfulAlert(protocol, signed.hash);
                                // POST TX TO BACKEND
                                // necessary for the transaction backend
                                signed.amount = signed.amount.toString();
                                signed.fee = signed.fee.toString();
                                signed.signedTx = signedTx;
                                this.pushBackendProvider.postPendingTx(signed); // Don't await
                                // END POST TX TO BACKEND
                            }
                            else {
                                Object(_services_sentry_error_handler_sentry_error_handler__WEBPACK_IMPORTED_MODULE_12__["handleErrorSentry"])(_services_sentry_error_handler_sentry_error_handler__WEBPACK_IMPORTED_MODULE_12__["ErrorCategory"].COINLIB)('No transaction hash present in signed ETH transaction');
                            }
                        });
                    }
                    else {
                        this.toastCtrl
                            .create({
                            duration: TOAST_ERROR_DURATION,
                            message: 'Transaction broadcasting failed: ' + error,
                            buttons: [
                                {
                                    text: 'Ok',
                                    role: 'cancel'
                                }
                            ],
                            position: 'bottom'
                        })
                            .then((toast) => {
                            toast.present().catch(Object(_services_sentry_error_handler_sentry_error_handler__WEBPACK_IMPORTED_MODULE_12__["handleErrorSentry"])(_services_sentry_error_handler_sentry_error_handler__WEBPACK_IMPORTED_MODULE_12__["ErrorCategory"].NAVIGATION));
                        })
                            .catch(Object(_services_sentry_error_handler_sentry_error_handler__WEBPACK_IMPORTED_MODULE_12__["handleErrorSentry"])(_services_sentry_error_handler_sentry_error_handler__WEBPACK_IMPORTED_MODULE_12__["ErrorCategory"].IONIC_TOAST));
                    }
                    this.router.navigateByUrl('/tabs/portfolio').catch(Object(_services_sentry_error_handler_sentry_error_handler__WEBPACK_IMPORTED_MODULE_12__["handleErrorSentry"])(_services_sentry_error_handler_sentry_error_handler__WEBPACK_IMPORTED_MODULE_12__["ErrorCategory"].NAVIGATION));
                });
            }));
        });
    }
    showTransactionSuccessfulAlert(protocol, transactionHash) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const blockexplorer = yield protocol.getBlockExplorerLinkForTxId(transactionHash);
            this.alertCtrl
                .create({
                header: 'Transaction broadcasted!',
                message: 'Your transaction has been successfully broadcasted',
                buttons: [
                    {
                        text: 'Open Blockexplorer',
                        handler: () => {
                            this.browserService.openUrl(blockexplorer);
                            this.router.navigateByUrl('/tabs/portfolio').catch(Object(_services_sentry_error_handler_sentry_error_handler__WEBPACK_IMPORTED_MODULE_12__["handleErrorSentry"])(_services_sentry_error_handler_sentry_error_handler__WEBPACK_IMPORTED_MODULE_12__["ErrorCategory"].NAVIGATION));
                        }
                    },
                    {
                        text: 'Ok',
                        handler: () => {
                            this.router.navigateByUrl('/tabs/portfolio').catch(Object(_services_sentry_error_handler_sentry_error_handler__WEBPACK_IMPORTED_MODULE_12__["handleErrorSentry"])(_services_sentry_error_handler_sentry_error_handler__WEBPACK_IMPORTED_MODULE_12__["ErrorCategory"].NAVIGATION));
                        }
                    }
                ]
            })
                .then((alert) => {
                alert.present().catch(Object(_services_sentry_error_handler_sentry_error_handler__WEBPACK_IMPORTED_MODULE_12__["handleErrorSentry"])(_services_sentry_error_handler_sentry_error_handler__WEBPACK_IMPORTED_MODULE_12__["ErrorCategory"].NAVIGATION));
            })
                .catch(Object(_services_sentry_error_handler_sentry_error_handler__WEBPACK_IMPORTED_MODULE_12__["handleErrorSentry"])(_services_sentry_error_handler_sentry_error_handler__WEBPACK_IMPORTED_MODULE_12__["ErrorCategory"].IONIC_ALERT));
        });
    }
    wrapInTezosOperation(protocol, transaction) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const wallet = yield this.selectTezosTzAccount(protocol);
            const unsignedTx = yield protocol.wrapSaplingTransactions(wallet.publicKey, transaction, new bignumber_js__WEBPACK_IMPORTED_MODULE_6___default.a(wallet.protocol.feeDefaults.medium).shiftedBy(wallet.protocol.feeDecimals).toString(), true);
            const airGapTxs = yield protocol.getTransactionDetails({
                publicKey: wallet.publicKey,
                transaction: unsignedTx
            }, { knownViewingKeys: this.accountService.getKnownViewingKeys() });
            this.accountService.startInteraction(wallet, unsignedTx, _airgap_coinlib_core__WEBPACK_IMPORTED_MODULE_2__["IACMessageType"].TransactionSignRequest, airGapTxs);
        });
    }
    selectTezosTzAccount(protocol) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return new Promise((resolve) => {
                const wallets = this.accountService.getWalletList();
                const [compatibleWallets, incompatibleWallets] = Object(_airgap_angular_core__WEBPACK_IMPORTED_MODULE_1__["partition"])(wallets, (wallet) => wallet.protocol.identifier === _airgap_coinlib_core__WEBPACK_IMPORTED_MODULE_2__["MainProtocolSymbols"].XTZ);
                const info = {
                    actionType: 'broadcast',
                    targetIdentifier: protocol.identifier,
                    compatibleWallets,
                    incompatibleWallets,
                    callback: resolve
                };
                this.dataService.setData(src_app_services_data_data_service__WEBPACK_IMPORTED_MODULE_9__["DataServiceKey"].ACCOUNTS, info);
                this.router.navigateByUrl(`/select-wallet/${src_app_services_data_data_service__WEBPACK_IMPORTED_MODULE_9__["DataServiceKey"].ACCOUNTS}`).catch(Object(_services_sentry_error_handler_sentry_error_handler__WEBPACK_IMPORTED_MODULE_12__["handleErrorSentry"])(_services_sentry_error_handler_sentry_error_handler__WEBPACK_IMPORTED_MODULE_12__["ErrorCategory"].NAVIGATION));
            });
        });
    }
}
TransactionConfirmPage.ɵfac = function TransactionConfirmPage_Factory(t) { return new (t || TransactionConfirmPage)(_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"]), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"]), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"]), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_services_storage_storage__WEBPACK_IMPORTED_MODULE_13__["WalletStorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_services_beacon_beacon_service__WEBPACK_IMPORTED_MODULE_10__["BeaconService"]), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_services_push_backend_push_backend__WEBPACK_IMPORTED_MODULE_11__["PushBackendProvider"]), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](src_app_services_browser_browser_service__WEBPACK_IMPORTED_MODULE_8__["BrowserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](src_app_services_account_account_provider__WEBPACK_IMPORTED_MODULE_7__["AccountProvider"]), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_airgap_angular_core__WEBPACK_IMPORTED_MODULE_1__["ProtocolService"]), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](src_app_services_data_data_service__WEBPACK_IMPORTED_MODULE_9__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](src_app_services_walletconnect_walletconnect_service__WEBPACK_IMPORTED_MODULE_14__["WalletconnectService"])); };
TransactionConfirmPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineComponent"]({ type: TransactionConfirmPage, selectors: [["page-transaction-confirm"]], decls: 23, vars: 11, consts: [[1, "ion-no-border"], ["fixed", "true", 1, "ion-no-padding"], ["slot", "start"], ["defaultHref", "/"], [1, "ion-padding"], [3, "signedTxs", "protocols"], ["vertical", "bottom", "slot", "fixed"], ["size", "default", "expand", "full", "color", "secondary", "shape", "round", 3, "click"], ["slot", "start", "name", "close"], ["size", "default", "expand", "full", "color", "primary", "shape", "round", 3, "click"], ["slot", "start", "name", "checkmark"]], template: function TransactionConfirmPage_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "ion-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1, "ion-grid", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](2, "ion-toolbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](3, "ion-buttons", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](4, "ion-back-button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](5, "ion-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](7, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](8, "ion-content", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](9, "ion-grid", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](10, "signed-transaction", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](11, "ion-fab", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](12, "ion-row");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](13, "ion-col");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](14, "ion-button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function TransactionConfirmPage_Template_ion_button_click_14_listener() { return ctx.dismiss(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](15, "ion-icon", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](17, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](18, "ion-col");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](19, "ion-button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function TransactionConfirmPage_Template_ion_button_click_19_listener() { return ctx.broadcastTransaction(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](20, "ion-icon", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](22, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](7, 5, "transaction-confirm.title"));
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("signedTxs", ctx.messageDefinitionObjects)("protocols", ctx.protocols);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](17, 7, "transaction-confirm.decline_label"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](22, 9, "transaction-confirm.confirm_label"), " ");
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonGrid"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonBackButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonBackButtonDelegate"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonContent"], _components_signed_transaction_signed_transaction__WEBPACK_IMPORTED_MODULE_16__["SignedTransactionComponent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonFab"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonRow"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonCol"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonIcon"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__["TranslatePipe"]], styles: ["ion-fab[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3RyYW5zYWN0aW9uLWNvbmZpcm0uc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7QUFDRiIsImZpbGUiOiJ0cmFuc2FjdGlvbi1jb25maXJtLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tZmFiIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4iXX0= */"] });


/***/ })

}]);
//# sourceMappingURL=pages-transaction-confirm-transaction-confirm-module.js.map
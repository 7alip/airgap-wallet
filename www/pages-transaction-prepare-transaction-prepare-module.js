(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-transaction-prepare-transaction-prepare-module"],{

/***/ "MUkV":
/*!************************************************!*\
  !*** ./src/app/validators/AddressValidator.ts ***!
  \************************************************/
/*! exports provided: AddressValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddressValidator", function() { return AddressValidator; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");

class AddressValidator {
    static validate(protocol, addressService) {
        return (control) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const isValid = yield addressService.validate(String(control.value), protocol);
            if (!isValid) {
                return { addressFormat: 'Address format is unknown.' };
            }
            return null;
        });
    }
}


/***/ }),

/***/ "RpAR":
/*!*************************************************************************!*\
  !*** ./src/app/pages/transaction-prepare/transaction-prepare.module.ts ***!
  \*************************************************************************/
/*! exports provided: TransactionPreparePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionPreparePageModule", function() { return TransactionPreparePageModule; });
/* harmony import */ var _airgap_angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @airgap/angular-core */ "138U");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/components.module */ "j1ZV");
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../pipes/pipes.module */ "iTUp");
/* harmony import */ var _transaction_prepare__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./transaction-prepare */ "vESZ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ "fXoL");











class TransactionPreparePageModule {
}
TransactionPreparePageModule.ɵfac = function TransactionPreparePageModule_Factory(t) { return new (t || TransactionPreparePageModule)(); };
TransactionPreparePageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({ type: TransactionPreparePageModule });
TransactionPreparePageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({ imports: [[
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_6__["ComponentsModule"],
            _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild([{ path: '', component: _transaction_prepare__WEBPACK_IMPORTED_MODULE_8__["TransactionPreparePage"] }]),
            _airgap_angular_core__WEBPACK_IMPORTED_MODULE_0__["AirGapAngularCoreModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](TransactionPreparePageModule, { declarations: [_transaction_prepare__WEBPACK_IMPORTED_MODULE_8__["TransactionPreparePage"]], imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"],
        _components_components_module__WEBPACK_IMPORTED_MODULE_6__["ComponentsModule"],
        _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _airgap_angular_core__WEBPACK_IMPORTED_MODULE_0__["AirGapAngularCoreModule"]] }); })();


/***/ }),

/***/ "vESZ":
/*!******************************************************************!*\
  !*** ./src/app/pages/transaction-prepare/transaction-prepare.ts ***!
  \******************************************************************/
/*! exports provided: TransactionPreparePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionPreparePage", function() { return TransactionPreparePage; });
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
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! bignumber.js */ "kB5k");
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(bignumber_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _services_account_account_provider__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../services/account/account.provider */ "57MG");
/* harmony import */ var _services_data_data_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../services/data/data.service */ "1y+R");
/* harmony import */ var _services_operations_operations__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../services/operations/operations */ "nxqh");
/* harmony import */ var _services_price_price_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../services/price/price.service */ "QMTT");
/* harmony import */ var _services_sentry_error_handler_sentry_error_handler__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../services/sentry-error-handler/sentry-error-handler */ "hPkG");
/* harmony import */ var _validators_AddressValidator__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../validators/AddressValidator */ "MUkV");
/* harmony import */ var _validators_DecimalValidator__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../validators/DecimalValidator */ "fUHw");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _components_fee_fee_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../components/fee/fee.component */ "pNtj");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _pipes_shorten_string_shorten_string_pipe__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../pipes/shorten-string/shorten-string.pipe */ "iLEx");































function TransactionPreparePage_ng_container_13_ion_badge_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ion-badge");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r8.wallet.protocol.options.network.rpcUrl, " ");
} }
function TransactionPreparePage_ng_container_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0, 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "ion-badge", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, TransactionPreparePage_ng_container_13_ion_badge_3_Template, 2, 1, "ion-badge", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r0.wallet.protocol.options.network.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.wallet.protocol.options.network.type === ctx_r0.networkType.CUSTOM);
} }
const _c0 = function (a0, a1) { return { protocol: a0, maxDigits: a1 }; };
function TransactionPreparePage_ng_container_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "amountConverter");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 1, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](3, 3, ctx_r1.state.availableBalance, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction2"](6, _c0, ctx_r1.wallet.protocol.identifier, ctx_r1.wallet.protocol.decimals + 1))), " ");
} }
function TransactionPreparePage_ion_spinner_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "ion-spinner", 49);
} }
function TransactionPreparePage_span_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 1, "transaction-prepare.fee.max_label"));
} }
function TransactionPreparePage_ion_col_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ion-col", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "ion-text", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "p", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](4, 1, "transaction-prepare.error.amount_label"), " ");
} }
function TransactionPreparePage_ion_row_47_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ion-row", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "ion-col", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "ion-item", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "ion-toggle", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ionChange", function TransactionPreparePage_ion_row_47_Template_ion_toggle_ionChange_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r9.toggleExcludeExistentialDeposit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](5, 2, "transaction-prepare.existential_deposit"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("checked", ctx_r5.ignoreExistentialDeposit);
} }
function TransactionPreparePage_ion_label_58_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ion-label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "shortenString");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 1, ctx_r6.state.receiverAddress), " ");
} }
const _c1 = function (a0) { return { addressPlaceholder: a0 }; };
function TransactionPreparePage_ion_col_66_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ion-col", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "ion-text", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "p", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](3, 1, "transaction-prepare.error.address_label", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](4, _c1, ctx_r7.wallet.protocol.addressPlaceholder)), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeHtml"]);
} }
const _c2 = function (a0) { return { title: a0 }; };
class TransactionPreparePage {
    constructor(loadingCtrl, formBuilder, router, route, _ngZone, clipboardProvider, operationsProvider, dataService, amountConverterPipe, priceService, addressService, accountProvider) {
        this.loadingCtrl = loadingCtrl;
        this.formBuilder = formBuilder;
        this.router = router;
        this.route = route;
        this._ngZone = _ngZone;
        this.clipboardProvider = clipboardProvider;
        this.operationsProvider = operationsProvider;
        this.dataService = dataService;
        this.amountConverterPipe = amountConverterPipe;
        this.priceService = priceService;
        this.addressService = addressService;
        this.accountProvider = accountProvider;
        this.networkType = _airgap_coinlib_core_utils_ProtocolNetwork__WEBPACK_IMPORTED_MODULE_3__["NetworkType"];
        this.publicKey = this.route.snapshot.params.publicKey;
        this.protocolID = this.route.snapshot.params.protocolID;
        const addressIndex = this.route.snapshot.params.addressIndex;
        this.addressIndex = addressIndex === 'undefined' ? undefined : Number(addressIndex);
        this.state$ = new rxjs__WEBPACK_IMPORTED_MODULE_9__["BehaviorSubject"](this._state);
        const address = this.route.snapshot.params.address === 'false' ? '' : this.route.snapshot.params.address || '';
        const amount = Number(this.route.snapshot.params.amount) || 0;
        const wallet = this.accountProvider.walletByPublicKeyAndProtocolAndAddressIndex(this.publicKey, this.protocolID, this.addressIndex);
        const forced = this.route.snapshot.params.forceMigration;
        const forceMigration = forced === 'forced' || false;
        this.transactionForm = this.formBuilder.group({
            receiver: [address, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _validators_AddressValidator__WEBPACK_IMPORTED_MODULE_16__["AddressValidator"].validate(wallet.protocol, this.addressService)],
            amount: [amount, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _validators_DecimalValidator__WEBPACK_IMPORTED_MODULE_17__["DecimalValidator"].validate(wallet.protocol.decimals)])],
            feeLevel: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
            fee: [0, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _validators_DecimalValidator__WEBPACK_IMPORTED_MODULE_17__["DecimalValidator"].validate(wallet.protocol.feeDecimals)])],
            memo: [undefined],
            isAdvancedMode: [false, []]
        });
        this.wallet = wallet;
        this.isSubstrate =
            wallet.protocol.identifier === _airgap_coinlib_core__WEBPACK_IMPORTED_MODULE_2__["MainProtocolSymbols"].KUSAMA || wallet.protocol.identifier === _airgap_coinlib_core__WEBPACK_IMPORTED_MODULE_2__["MainProtocolSymbols"].POLKADOT;
        this.ignoreExistentialDeposit = this.isSubstrate ? true : undefined;
        this.isSapling = wallet.protocol.identifier === _airgap_coinlib_core__WEBPACK_IMPORTED_MODULE_2__["MainProtocolSymbols"].XTZ_SHIELDED;
        this.initState()
            .then(() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (forceMigration) {
                yield this.forceMigration();
            }
            this.onChanges();
            this.updateFeeEstimate();
        }))
            .catch(Object(_services_sentry_error_handler_sentry_error_handler__WEBPACK_IMPORTED_MODULE_15__["handleErrorSentry"])(_services_sentry_error_handler_sentry_error_handler__WEBPACK_IMPORTED_MODULE_15__["ErrorCategory"].OTHER));
    }
    onChanges() {
        this.state$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["debounceTime"])(200)).subscribe((state) => {
            this.onStateUpdated(state);
        });
        this.transactionForm
            .get('receiver')
            .valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["debounceTime"])(500))
            .subscribe((value) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const receiverAddress = yield this.addressService.getAddress(value, this.wallet.protocol);
            this.updateState({
                receiver: {
                    value,
                    dirty: true
                },
                receiverAddress: receiverAddress !== undefined ? receiverAddress : '',
                disableSendMaxAmount: false,
                disablePrepareButton: this.transactionForm.invalid || receiverAddress === undefined || new bignumber_js__WEBPACK_IMPORTED_MODULE_8__["BigNumber"](this._state.amount.value).lte(0)
            });
            this.updateFeeEstimate();
        }));
        this.transactionForm
            .get('amount')
            .valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["debounceTime"])(500))
            .subscribe((value) => {
            const amount = new bignumber_js__WEBPACK_IMPORTED_MODULE_8__["BigNumber"](value);
            this.updateState({
                sendMaxAmount: false,
                amount: {
                    value: amount.isNaN() ? '' : amount.toFixed(),
                    dirty: true
                },
                disablePrepareButton: this.transactionForm.invalid || amount.isNaN() || amount.lte(0)
            });
            this.updateFeeEstimate();
        });
        this.transactionForm
            .get('fee')
            .valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["debounceTime"])(500))
            .subscribe((value) => {
            const fee = new bignumber_js__WEBPACK_IMPORTED_MODULE_8__["BigNumber"](value);
            this.updateState({
                fee: {
                    value: fee.isNaN() ? '' : fee.toFixed(),
                    dirty: true
                },
                disablePrepareButton: this.transactionForm.invalid || new bignumber_js__WEBPACK_IMPORTED_MODULE_8__["BigNumber"](this._state.amount.value).lte(0)
            });
            if (this._state.sendMaxAmount) {
                this.updateWithMaxAmount(fee.toString(10));
            }
        });
        this.transactionForm.get('feeLevel').valueChanges.subscribe((value) => {
            const fee = new bignumber_js__WEBPACK_IMPORTED_MODULE_8__["BigNumber"](this.getFeeFromLevel(value));
            this.updateState({
                fee: {
                    value: fee.toFixed(),
                    dirty: false
                },
                feeLevel: {
                    value,
                    dirty: true
                },
                disablePrepareButton: this.transactionForm.invalid || new bignumber_js__WEBPACK_IMPORTED_MODULE_8__["BigNumber"](this._state.amount.value).lte(0)
            }, false);
            if (this._state.sendMaxAmount) {
                this.updateWithMaxAmount(fee.toString(10));
            }
        });
        this.transactionForm.get('isAdvancedMode').valueChanges.subscribe((value) => {
            this.updateState({
                isAdvancedMode: {
                    value,
                    dirty: true
                },
                disablePrepareButton: this.transactionForm.invalid || new bignumber_js__WEBPACK_IMPORTED_MODULE_8__["BigNumber"](this._state.amount.value).lte(0)
            }, false);
        });
        this.transactionForm.get('memo').valueChanges.subscribe((value) => {
            this.updateState({
                memo: {
                    value,
                    dirty: true
                },
                disablePrepareButton: this.transactionForm.invalid || new bignumber_js__WEBPACK_IMPORTED_MODULE_8__["BigNumber"](this._state.amount.value).lte(0)
            }, false);
        });
    }
    initState() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this._state = {
                availableBalance: null,
                forceMigration: false,
                feeDefaults: this.wallet.protocol.feeDefaults,
                feeCurrentMarketPrice: null,
                sendMaxAmount: false,
                disableSendMaxAmount: true,
                disableAdvancedMode: this.isSubstrate || this.isSapling,
                disableFeeSlider: true,
                disablePrepareButton: true,
                estimatingMaxAmount: false,
                estimatingFeeDefaults: false,
                receiver: {
                    value: this.transactionForm.controls.receiver.value,
                    dirty: false
                },
                receiverAddress: this.transactionForm.controls.receiver.value,
                amount: {
                    value: this.transactionForm.controls.amount.value,
                    dirty: false
                },
                feeLevel: {
                    value: this.transactionForm.controls.feeLevel.value,
                    dirty: false
                },
                fee: {
                    value: this.transactionForm.controls.fee.value,
                    dirty: false
                },
                isAdvancedMode: {
                    value: this.transactionForm.controls.isAdvancedMode.value,
                    dirty: false
                },
                memo: {
                    value: this.transactionForm.controls.memo.value,
                    dirty: false
                }
            };
            this.state = this._state;
            const [feeCurrentMarketPrice, availableBalance] = yield Promise.all([
                this.calculateFeeCurrentMarketPrice(this.wallet),
                this.getAvailableBalance(this.wallet)
            ]);
            this.updateState({
                availableBalance,
                feeCurrentMarketPrice
            });
        });
    }
    updateState(newState, debounce = true) {
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
            availableBalance: newState.availableBalance !== undefined ? newState.availableBalance : currentState.availableBalance,
            forceMigration: newState.forceMigration !== undefined ? newState.forceMigration : currentState.forceMigration,
            feeDefaults: newState.feeDefaults || currentState.feeDefaults,
            feeCurrentMarketPrice: newState.feeCurrentMarketPrice !== undefined ? newState.feeCurrentMarketPrice : currentState.feeCurrentMarketPrice,
            sendMaxAmount: newState.sendMaxAmount !== undefined ? newState.sendMaxAmount : currentState.sendMaxAmount,
            disableSendMaxAmount: newState.disableSendMaxAmount !== undefined ? newState.disableSendMaxAmount : currentState.disableSendMaxAmount,
            disableAdvancedMode: this.isSubstrate || (newState.disableAdvancedMode !== undefined ? newState.disableAdvancedMode : currentState.disableAdvancedMode),
            disableFeeSlider: this.isSubstrate || (newState.disableFeeSlider !== undefined ? newState.disableFeeSlider : currentState.disableFeeSlider),
            disablePrepareButton: newState.disablePrepareButton !== undefined ? newState.disablePrepareButton : currentState.disablePrepareButton,
            estimatingMaxAmount: newState.estimatingMaxAmount !== undefined ? newState.estimatingMaxAmount : currentState.estimatingMaxAmount,
            estimatingFeeDefaults: newState.estimatingFeeDefaults !== undefined ? newState.estimatingFeeDefaults : currentState.estimatingFeeDefaults,
            receiver: newState.receiver || currentState.receiver,
            receiverAddress: newState.receiverAddress !== undefined ? newState.receiverAddress : currentState.receiverAddress,
            amount: newState.amount || currentState.amount,
            feeLevel: newState.feeLevel || currentState.feeLevel,
            fee: newState.fee || currentState.fee,
            isAdvancedMode: newState.isAdvancedMode || currentState.isAdvancedMode,
            memo: newState.memo || currentState.memo
        };
    }
    onStateUpdated(newState) {
        this.state = newState;
        this.updateTransactionForm({
            receiver: this.state.receiver,
            amount: this.state.amount,
            fee: this.state.fee,
            feeLevel: this.state.feeLevel,
            isAdvancedMode: this.state.isAdvancedMode
        });
    }
    updateTransactionForm(formState) {
        const formValues = this.transactionForm.value;
        const updated = {};
        Object.keys(formValues).forEach((key) => {
            if (key in formState && !formState[key].dirty && formState[key].value !== formValues[key]) {
                updated[key] = formState[key].value;
            }
        });
        this._ngZone.run(() => {
            this.transactionForm.patchValue(updated, { emitEvent: false });
            Object.keys(updated).forEach((key) => {
                this.transactionForm.controls[key].markAsDirty();
            });
        });
    }
    calculateFeeCurrentMarketPrice(wallet) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (wallet.protocol.identifier === _airgap_coinlib_core__WEBPACK_IMPORTED_MODULE_2__["SubProtocolSymbols"].XTZ_BTC) {
                return this.priceService.getCurrentMarketPrice(new _airgap_coinlib_core__WEBPACK_IMPORTED_MODULE_2__["TezosProtocol"](), 'USD').then((price) => price.toNumber());
            }
            else if (wallet.protocol.identifier.startsWith(_airgap_coinlib_core__WEBPACK_IMPORTED_MODULE_2__["SubProtocolSymbols"].ETH_ERC20)) {
                return this.priceService.getCurrentMarketPrice(new _airgap_coinlib_core__WEBPACK_IMPORTED_MODULE_2__["EthereumProtocol"](), 'USD').then((price) => price.toNumber());
            }
            else if (wallet.protocol.identifier.startsWith(_airgap_coinlib_core__WEBPACK_IMPORTED_MODULE_2__["SubProtocolSymbols"].RBTC_ERC20)) {
                return this.priceService.getCurrentMarketPrice(new _airgap_coinlib_core__WEBPACK_IMPORTED_MODULE_2__["RskProtocol"](), 'USD').then((price) => price.toNumber());
            }
            else {
                return wallet.currentMarketPrice.toNumber();
            }
        });
    }
    getAvailableBalance(wallet) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // TODO: refactor this so that we do not need to check for the protocols
            if (wallet.protocol.identifier === _airgap_coinlib_core__WEBPACK_IMPORTED_MODULE_2__["MainProtocolSymbols"].COSMOS ||
                wallet.protocol.identifier === _airgap_coinlib_core__WEBPACK_IMPORTED_MODULE_2__["MainProtocolSymbols"].KUSAMA ||
                wallet.protocol.identifier === _airgap_coinlib_core__WEBPACK_IMPORTED_MODULE_2__["MainProtocolSymbols"].POLKADOT) {
                return new bignumber_js__WEBPACK_IMPORTED_MODULE_8__["BigNumber"](yield wallet.protocol.getAvailableBalanceOfAddresses([wallet.addresses[0]]));
            }
            else {
                return wallet.currentBalance;
            }
        });
    }
    updateFeeEstimate() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!this._state.isAdvancedMode.value) {
                this.updateState({
                    estimatingFeeDefaults: true,
                    disableFeeSlider: true,
                    disablePrepareButton: true
                });
                const feeDefaults = yield this.estimateFees().catch(() => undefined);
                const feeLevel = feeDefaults && !this.isSubstrate ? 1 : this._state.feeLevel.value;
                this.updateState({
                    estimatingFeeDefaults: false,
                    feeDefaults,
                    fee: {
                        value: new bignumber_js__WEBPACK_IMPORTED_MODULE_8__["BigNumber"](this.getFeeFromLevel(feeLevel, feeDefaults)).toFixed(),
                        dirty: false
                    },
                    feeLevel: {
                        value: feeLevel,
                        dirty: false
                    },
                    disableFeeSlider: !feeDefaults,
                    disablePrepareButton: !feeDefaults || this.transactionForm.invalid || new bignumber_js__WEBPACK_IMPORTED_MODULE_8__["BigNumber"](this._state.amount.value).lte(0)
                });
            }
        });
    }
    estimateFees() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const amount = new bignumber_js__WEBPACK_IMPORTED_MODULE_8__["BigNumber"](this._state.amount.value).shiftedBy(this.wallet.protocol.decimals);
            const isAddressValid = this.transactionForm.controls.receiver.valid;
            const isAmountValid = this.transactionForm.controls.amount.valid && !amount.isNaN() && amount.gt(0);
            return isAddressValid && isAmountValid && this._state.receiverAddress
                ? this.operationsProvider.estimateFees(this.wallet, this._state.receiverAddress, amount)
                : undefined;
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
    prepareTransaction() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const amount = new bignumber_js__WEBPACK_IMPORTED_MODULE_8__["BigNumber"](this._state.amount.value).shiftedBy(this.wallet.protocol.decimals);
            const fee = new bignumber_js__WEBPACK_IMPORTED_MODULE_8__["BigNumber"](this._state.fee.value).shiftedBy(this.wallet.protocol.feeDecimals);
            const data = this.isSubstrate ? !this.ignoreExistentialDeposit : this._state.memo.value;
            try {
                const { airGapTxs, unsignedTx } = yield this.operationsProvider.prepareTransaction(this.wallet, this._state.receiverAddress, amount, fee, this.accountProvider.getWalletList(), data);
                this.accountProvider.startInteraction(this.wallet, unsignedTx, _airgap_coinlib_core__WEBPACK_IMPORTED_MODULE_2__["IACMessageType"].TransactionSignRequest, airGapTxs);
            }
            catch (error) {
                //
            }
        });
    }
    openScanner() {
        const callback = (address) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const receiverAddress = yield this.addressService.getAddress(address, this.wallet.protocol);
            this.updateState({
                receiver: {
                    value: address,
                    dirty: false
                },
                receiverAddress: receiverAddress !== undefined ? receiverAddress : ''
            });
        });
        const info = {
            callback
        };
        this.dataService.setData(_services_data_data_service__WEBPACK_IMPORTED_MODULE_12__["DataServiceKey"].SCAN, info);
        this.router.navigateByUrl('/scan-address/' + _services_data_data_service__WEBPACK_IMPORTED_MODULE_12__["DataServiceKey"].SCAN).catch(Object(_services_sentry_error_handler_sentry_error_handler__WEBPACK_IMPORTED_MODULE_15__["handleErrorSentry"])(_services_sentry_error_handler_sentry_error_handler__WEBPACK_IMPORTED_MODULE_15__["ErrorCategory"].NAVIGATION));
    }
    toggleMaxAmount() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.updateState({
                sendMaxAmount: !this._state.sendMaxAmount
            }, false);
            if (this._state.sendMaxAmount) {
                yield this.updateWithMaxAmount();
                this.updateFeeEstimate();
            }
        });
    }
    forceMigration() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.updateState({
                forceMigration: true,
                sendMaxAmount: true,
                disablePrepareButton: false
            }, false);
            yield this.updateWithMaxAmount();
        });
    }
    updateWithMaxAmount(formFee) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.updateState({
                estimatingMaxAmount: true
            });
            const fee = formFee ? new bignumber_js__WEBPACK_IMPORTED_MODULE_8__["BigNumber"](formFee).shiftedBy(this.wallet.protocol.feeDecimals) : undefined;
            const maxAmount = yield this.operationsProvider.estimateMaxTransferAmount(this.wallet, this._state.receiverAddress, fee, !this.ignoreExistentialDeposit);
            const formAmount = this.amountConverterPipe.transformValueOnly(maxAmount, this.wallet.protocol, this.wallet.protocol.decimals + 1);
            if (!maxAmount.isNaN()) {
                this.updateState({
                    estimatingMaxAmount: false,
                    amount: {
                        value: formAmount,
                        dirty: false
                    },
                    disablePrepareButton: this.transactionForm.invalid || maxAmount.isNaN() || maxAmount.lte(0)
                });
            }
        });
    }
    toggleExcludeExistentialDeposit() {
        this.ignoreExistentialDeposit = !this.ignoreExistentialDeposit;
    }
    pasteClipboard() {
        this.clipboardProvider.paste().then((text) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const receiverAddress = yield this.addressService.getAddress(text, this.wallet.protocol);
            this.updateState({
                receiver: {
                    value: text,
                    dirty: false
                },
                receiverAddress: receiverAddress !== undefined ? receiverAddress : '',
                disableSendMaxAmount: false,
                disablePrepareButton: this.transactionForm.invalid || receiverAddress === undefined || new bignumber_js__WEBPACK_IMPORTED_MODULE_8__["BigNumber"](this._state.amount.value).lte(0)
            });
            this.updateFeeEstimate();
        }), (err) => {
            console.error('Error: ' + err);
        });
    }
}
TransactionPreparePage.ɵfac = function TransactionPreparePage_Factory(t) { return new (t || TransactionPreparePage)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_7__["LoadingController"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_airgap_angular_core__WEBPACK_IMPORTED_MODULE_1__["ClipboardService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_operations_operations__WEBPACK_IMPORTED_MODULE_13__["OperationsProvider"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_data_data_service__WEBPACK_IMPORTED_MODULE_12__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_airgap_angular_core__WEBPACK_IMPORTED_MODULE_1__["AmountConverterPipe"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_price_price_service__WEBPACK_IMPORTED_MODULE_14__["PriceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_airgap_angular_core__WEBPACK_IMPORTED_MODULE_1__["AddressService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_account_account_provider__WEBPACK_IMPORTED_MODULE_11__["AccountProvider"])); };
TransactionPreparePage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: TransactionPreparePage, selectors: [["page-transaction-prepare"]], decls: 81, vars: 50, consts: [[1, "ion-no-border"], ["fixed", "true", 1, "ion-no-padding"], ["slot", "start"], ["defaultHref", "/tabs/portfolio"], [1, "ion-no-padding"], ["fixed", "true"], [1, "ion-padding-horizontal"], ["class", "ion-no-padding", "lines", "none", "slot", "start", 4, "ngIf"], [1, "ion-padding-bottom", 3, "formGroup"], [1, "ion-justify-content-between"], ["size", "3"], ["color", "blackLight", "position", "stacked", 1, "ion-no-margin"], ["size", "9", 1, "ion-text-end"], [4, "ngIf"], [1, "amount__container"], ["size", "2", 1, "d-flex", "ion-align-items-center"], [3, "address"], ["size", "7", 1, "ion-no-padding", "amount--container__input"], ["lines", "none", 1, "ion-no-padding"], ["formControlName", "amount", "type", "number", "id", "amount-input", "placeholder", "0.0"], ["size", "3", 1, "ion-no-padding", "d-flex", "ion-align-items-center"], ["slot", "end"], ["shape", "round", "size", "small", "color", "secondary", 3, "fill", "click"], ["name", "lines-small", "color", "primary", 4, "ngIf"], ["size", "10", "offset", "2", "class", "ion-no-padding error--container", 4, "ngIf"], ["offset", "2", 1, "ion-no-padding"], ["color", "blackLight", 1, "ion-no-margin"], [1, "ion-no-margin"], ["class", "rawdata--container", 4, "ngIf"], [1, "ion-text-center", "ion-no-padding", "divider--container"], ["name", "arrow-down-outline", "color", "medium"], ["color", "blackLight", "position", "stacked"], ["color", "blackLight", "class", "ion-no-margin", "position", "stacked", 4, "ngIf"], [1, "to__container"], ["size", "2"], [1, "d-flex", "ion-align-items-center"], ["size", "10", 1, "ion-no-padding"], [1, "content--align-vert__center", "to-address__item", "ion-no-padding"], ["formControlName", "receiver", "id", "receiver-input", 3, "placeholder"], ["size", "10", "offset", "2", "class", "ion-no-padding error--address", 4, "ngIf"], ["size", "10", "offset", "2", 1, "address-to__buttons"], ["fill", "outline", "size", "small", "color", "secondary", "shape", "round", 3, "click"], ["slot", "start", "name", "barcode-outline"], [3, "wallet", "state", "form"], ["vertical", "bottom", "horizontal", "end", "slot", "fixed"], ["id", "prepare", "size", "default", "color", "primary", "shape", "round", 3, "disabled", "click"], ["slot", "start", "name", "open"], ["lines", "none", "slot", "start", 1, "ion-no-padding"], ["color", "danger"], ["name", "lines-small", "color", "primary"], ["size", "10", "offset", "2", 1, "ion-no-padding", "error--container"], ["color", "danger", 1, "ion-no-margin"], [1, "rawdata--container"], ["slot", "end", 3, "checked", "ionChange"], ["size", "10", "offset", "2", 1, "ion-no-padding", "error--address"], [1, "ion-no-margin", 3, "innerHTML"]], template: function TransactionPreparePage_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ion-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "ion-grid", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "ion-toolbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "ion-buttons", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "ion-back-button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "ion-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](7, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "ion-content", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "ion-grid", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "ion-row", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "ion-col", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "ion-row");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](13, TransactionPreparePage_ng_container_13_Template, 4, 2, "ng-container", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "form", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "ion-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "ion-row", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "ion-col", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "ion-label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](20, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "ion-col", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "ion-label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](24, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](25, TransactionPreparePage_ng_container_25_Template, 4, 9, "ng-container", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "ion-row", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "ion-col", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "ion-avatar");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](29, "airgap-identicon", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "ion-col", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "ion-item", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](32, "ion-input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](33, "ion-col", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](34, "ion-toolbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](35, "ion-buttons", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](36, "ion-button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function TransactionPreparePage_Template_ion_button_click_36_listener() { return ctx.toggleMaxAmount(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](37, TransactionPreparePage_ion_spinner_37_Template, 1, 0, "ion-spinner", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](38, TransactionPreparePage_span_38_Template, 3, 3, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](39, "ion-row");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](40, TransactionPreparePage_ion_col_40_Template, 5, 3, "ion-col", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](41, "ion-row");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](42, "ion-col", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](43, "ion-text", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](44, "p", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](45);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](46, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](47, TransactionPreparePage_ion_row_47_Template, 7, 4, "ion-row", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](48, "ion-row");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](49, "ion-col", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](50, "ion-icon", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](51, "ion-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](52, "ion-row");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](53, "ion-col", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](54, "ion-label", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](55);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](56, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](57, "ion-col", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](58, TransactionPreparePage_ion_label_58_Template, 3, 3, "ion-label", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](59, "ion-row", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](60, "ion-col", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](61, "ion-avatar", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](62, "airgap-identicon", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](63, "ion-col", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](64, "ion-item", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](65, "ion-textarea", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](66, TransactionPreparePage_ion_col_66_Template, 4, 6, "ion-col", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](67, "ion-col", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](68, "ion-button", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function TransactionPreparePage_Template_ion_button_click_68_listener() { return ctx.pasteClipboard(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](69);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](70, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](71, "ion-button", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function TransactionPreparePage_Template_ion_button_click_71_listener() { return ctx.openScanner(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](72, "ion-icon", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](73);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](74, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](75, "fee", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](76, "ion-fab", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](77, "ion-button", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function TransactionPreparePage_Template_ion_button_click_77_listener() { return ctx.prepareTransaction(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](78, "ion-icon", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](79);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](80, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](7, 30, "transaction-prepare.title", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](48, _c2, ctx.wallet.protocol.symbol)), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.wallet.protocol.options.network && ctx.wallet.protocol.options.network.type !== ctx.networkType.MAINNET);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.transactionForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](20, 33, "transaction-prepare.amount_label"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](24, 35, "transaction-prepare.balance_label"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.state.availableBalance !== null);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("address", ctx.wallet.receivingPublicAddress);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("disabled", ctx.state.forceMigration);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("fill", ctx.state.sendMaxAmount ? "solid" : "outline");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("disabled", ctx.state.disableSendMaxAmount);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.state.estimatingMaxAmount);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.state.estimatingMaxAmount);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.transactionForm.controls["amount"].valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" $", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](46, 37, ctx.wallet.currentMarketPrice.times(ctx.state.amount.value).toNumber(), "1.2-2"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.isSubstrate && !ctx.state.disableSendMaxAmount);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](56, 40, "transaction-prepare.to-address_label"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.state.receiverAddress.length > 0 && ctx.state.receiverAddress !== ctx.state.receiver.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("address", ctx.state.receiverAddress);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("placeholder", ctx.wallet.protocol.addressPlaceholder);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("disabled", ctx.state.forceMigration);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.transactionForm.controls["receiver"].dirty && ctx.transactionForm.controls["receiver"].invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("disabled", ctx.state.forceMigration);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](70, 42, "transaction-prepare.paste_label"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("disabled", ctx.state.forceMigration);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](74, 44, "transaction-prepare.to-address-scan_label"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("wallet", ctx.wallet)("state", ctx.state)("form", ctx.transactionForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx.state.disablePrepareButton);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](80, 46, "transaction-prepare.create-transaction"), " ");
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonGrid"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonBackButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonBackButtonDelegate"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonTitle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonRow"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonCol"], _angular_common__WEBPACK_IMPORTED_MODULE_18__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroupDirective"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonCard"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonLabel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonAvatar"], _airgap_angular_core__WEBPACK_IMPORTED_MODULE_1__["IdenticonComponent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonInput"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["NumericValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControlName"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonText"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonIcon"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonTextarea"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["TextValueAccessor"], _components_fee_fee_component__WEBPACK_IMPORTED_MODULE_19__["FeeComponent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonFab"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonBadge"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonSpinner"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonToggle"], _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["BooleanValueAccessor"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_20__["TranslatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_18__["DecimalPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_18__["AsyncPipe"], _airgap_angular_core__WEBPACK_IMPORTED_MODULE_1__["AmountConverterPipe"], _pipes_shorten_string_shorten_string_pipe__WEBPACK_IMPORTED_MODULE_21__["ShortenStringPipe"]], styles: [".label-stacked[_ngcontent-%COMP%], .item-md.item-toggle[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%], .item-ios.item-toggle[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n\n.font--size__large[_ngcontent-%COMP%] {\n  font-size: large;\n}\n\n.to-address__item[_ngcontent-%COMP%]   ion-textarea[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n\n.address-to__buttons[_ngcontent-%COMP%] {\n  padding: 4px 0 0 0;\n}\n\n.amount__container[_ngcontent-%COMP%]   .item-inner[_ngcontent-%COMP%] {\n  border-bottom-color: transparent !important;\n  box-shadow: none !important;\n}\n\n.amount__container[_ngcontent-%COMP%]   ion-input[_ngcontent-%COMP%] {\n  font-size: 1.4em;\n  font-weight: bold;\n  margin: 0;\n  --padding-top: 12px;\n}\n\n.amount__container[_ngcontent-%COMP%]   .md[_ngcontent-%COMP%]   ion-input[_ngcontent-%COMP%] {\n  --padding-bottom: 0;\n}\n\n.amount__container[_ngcontent-%COMP%]   .amount--container__input[_ngcontent-%COMP%], .amount__container[_ngcontent-%COMP%]   .amount--container__input[_ngcontent-%COMP%]   .item-inner[_ngcontent-%COMP%] {\n  padding-right: 0;\n}\n\n.amount__container[_ngcontent-%COMP%], .to__container[_ngcontent-%COMP%] {\n  padding-top: 8px;\n}\n\n.error--container[_ngcontent-%COMP%] {\n  padding-bottom: 8px;\n}\n\nion-avatar[_ngcontent-%COMP%] {\n  height: 40px;\n  min-height: 40px;\n  width: 40px;\n  min-width: 40px;\n}\n\n.range-slider[_ngcontent-%COMP%] {\n  --bar-background: rgba(var(--ion-color-secondary-rgb), 0.12);\n  --bar-background-active: var(--ion-color-primary);\n}\n\n.advanced-item[_ngcontent-%COMP%] {\n  --border-color: var(--ion-color-primary);\n}\n\nion-card[_ngcontent-%COMP%] {\n  padding: 12px;\n}\n\n.divider--container[_ngcontent-%COMP%] {\n  padding-top: 8px;\n}\n\n.native-textarea.sc-ion-textarea-md[_ngcontent-%COMP%] {\n  padding-top: 0;\n}\n\nion-textarea[_ngcontent-%COMP%] {\n  --padding-top: 0;\n}\n\nion-content[_ngcontent-%COMP%] {\n  --padding-bottom: 108px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3RyYW5zYWN0aW9uLXByZXBhcmUuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0VBR0UsZUFBQTtBQUNGOztBQUNBO0VBQ0UsZ0JBQUE7QUFFRjs7QUFFRTtFQUNFLGVBQUE7QUFDSjs7QUFFQTtFQUNFLGtCQUFBO0FBQ0Y7O0FBRUU7RUFDRSwyQ0FBQTtFQUNBLDJCQUFBO0FBQ0o7O0FBQ0U7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsU0FBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBRUk7RUFDRSxtQkFBQTtBQUFOOztBQUdFOztFQUVFLGdCQUFBO0FBREo7O0FBSUE7O0VBRUUsZ0JBQUE7QUFERjs7QUFHQTtFQUNFLG1CQUFBO0FBQUY7O0FBRUE7RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQUNGOztBQUNBO0VBQ0UsNERBQUE7RUFDQSxpREFBQTtBQUVGOztBQUNBO0VBQ0Usd0NBQUE7QUFFRjs7QUFBQTtFQUNFLGFBQUE7QUFHRjs7QUFEQTtFQUNFLGdCQUFBO0FBSUY7O0FBRkE7RUFDRSxjQUFBO0FBS0Y7O0FBSEE7RUFDRSxnQkFBQTtBQU1GOztBQUhBO0VBQ0UsdUJBQUE7QUFNRiIsImZpbGUiOiJ0cmFuc2FjdGlvbi1wcmVwYXJlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubGFiZWwtc3RhY2tlZCxcbi5pdGVtLW1kLml0ZW0tdG9nZ2xlIGlvbi1sYWJlbCxcbi5pdGVtLWlvcy5pdGVtLXRvZ2dsZSBpb24tbGFiZWwge1xuICBmb250LXNpemU6IDE0cHg7XG59XG4uZm9udC0tc2l6ZV9fbGFyZ2Uge1xuICBmb250LXNpemU6IGxhcmdlO1xufVxuXG4udG8tYWRkcmVzc19faXRlbSB7XG4gIGlvbi10ZXh0YXJlYSB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICB9XG59XG4uYWRkcmVzcy10b19fYnV0dG9ucyB7XG4gIHBhZGRpbmc6IDRweCAwIDAgMDtcbn1cbi5hbW91bnRfX2NvbnRhaW5lciB7XG4gIC5pdGVtLWlubmVyIHtcbiAgICBib3JkZXItYm90dG9tLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICAgIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbiAgfVxuICBpb24taW5wdXQge1xuICAgIGZvbnQtc2l6ZTogMS40ZW07XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgbWFyZ2luOiAwO1xuICAgIC0tcGFkZGluZy10b3A6IDEycHg7XG4gIH1cbiAgLm1kIHtcbiAgICBpb24taW5wdXQge1xuICAgICAgLS1wYWRkaW5nLWJvdHRvbTogMDtcbiAgICB9XG4gIH1cbiAgLmFtb3VudC0tY29udGFpbmVyX19pbnB1dCxcbiAgLmFtb3VudC0tY29udGFpbmVyX19pbnB1dCAuaXRlbS1pbm5lciB7XG4gICAgcGFkZGluZy1yaWdodDogMDtcbiAgfVxufVxuLmFtb3VudF9fY29udGFpbmVyLFxuLnRvX19jb250YWluZXIge1xuICBwYWRkaW5nLXRvcDogOHB4O1xufVxuLmVycm9yLS1jb250YWluZXIge1xuICBwYWRkaW5nLWJvdHRvbTogOHB4O1xufVxuaW9uLWF2YXRhciB7XG4gIGhlaWdodDogNDBweDtcbiAgbWluLWhlaWdodDogNDBweDtcbiAgd2lkdGg6IDQwcHg7XG4gIG1pbi13aWR0aDogNDBweDtcbn1cbi5yYW5nZS1zbGlkZXIge1xuICAtLWJhci1iYWNrZ3JvdW5kOiByZ2JhKHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnktcmdiKSwgMC4xMik7XG4gIC0tYmFyLWJhY2tncm91bmQtYWN0aXZlOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59XG5cbi5hZHZhbmNlZC1pdGVtIHtcbiAgLS1ib3JkZXItY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn1cbmlvbi1jYXJkIHtcbiAgcGFkZGluZzogMTJweDtcbn1cbi5kaXZpZGVyLS1jb250YWluZXIge1xuICBwYWRkaW5nLXRvcDogOHB4O1xufVxuLm5hdGl2ZS10ZXh0YXJlYS5zYy1pb24tdGV4dGFyZWEtbWQge1xuICBwYWRkaW5nLXRvcDogMDtcbn1cbmlvbi10ZXh0YXJlYSB7XG4gIC0tcGFkZGluZy10b3A6IDA7XG59XG5cbmlvbi1jb250ZW50IHtcbiAgLS1wYWRkaW5nLWJvdHRvbTogMTA4cHg7XG59XG4iXX0= */"] });


/***/ })

}]);
//# sourceMappingURL=pages-transaction-prepare-transaction-prepare-module.js.map
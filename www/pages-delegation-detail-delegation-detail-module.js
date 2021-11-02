(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-delegation-detail-delegation-detail-module"],{

/***/ "SV0d":
/*!**************************************************************!*\
  !*** ./src/app/pages/delegation-detail/delegation-detail.ts ***!
  \**************************************************************/
/*! exports provided: DelegationDetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DelegationDetailPage", function() { return DelegationDetailPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _airgap_angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @airgap/angular-core */ "138U");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _airgap_coinlib_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @airgap/coinlib-core */ "RKiA");
/* harmony import */ var _airgap_coinlib_core__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_airgap_coinlib_core__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var src_app_components_delegate_action_popover_delegate_action_popover_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/delegate-action-popover/delegate-action-popover.component */ "HQfb");
/* harmony import */ var src_app_helpers_delegation__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/helpers/delegation */ "VE8E");
/* harmony import */ var src_app_models_widgets_display_UIAccount__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/models/widgets/display/UIAccount */ "ZBbp");
/* harmony import */ var src_app_models_widgets_display_UIIconText__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/models/widgets/display/UIIconText */ "tZEG");
/* harmony import */ var src_app_services_data_data_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/services/data/data.service */ "1y+R");
/* harmony import */ var src_app_services_extensions_extensions_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/services/extensions/extensions.service */ "Xl7a");
/* harmony import */ var src_app_services_operations_operations__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/services/operations/operations */ "nxqh");
/* harmony import */ var src_app_services_sentry_error_handler_sentry_error_handler__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/services/sentry-error-handler/sentry-error-handler */ "hPkG");
/* harmony import */ var src_app_utils_utils__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/utils/utils */ "oCjk");
/* harmony import */ var src_app_services_account_account_provider__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/services/account/account.provider */ "57MG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _components_widget_account_widget_account__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../components/widget-account/widget-account */ "0CrI");
/* harmony import */ var _components_widget_selector_widget_selector__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../components/widget-selector/widget-selector */ "cwVp");
/* harmony import */ var _components_widget_alert_widget_alert__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../components/widget-alert/widget-alert */ "vqqn");
/* harmony import */ var _components_widget_icon_text_widget_icon_text__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../components/widget-icon-text/widget-icon-text */ "sXsg");
/* harmony import */ var _components_widget_reward_list_widget_reward_list__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../components/widget-reward-list/widget-reward-list */ "wcx9");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");

































function DelegationDetailPage_ion_button_10_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "ion-button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("click", function DelegationDetailPage_ion_button_10_Template_ion_button_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r23); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](); return ctx_r22.presentEditPopover($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](1, "ion-icon", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
} }
function DelegationDetailPage_widget_account_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](0, "widget-account", 32);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("widget", ctx_r1.delegateeAccountWidget);
} }
function DelegationDetailPage_ng_template_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](1, "ion-item", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](2, "ion-avatar", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](3, "ion-skeleton-text", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](4, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](5, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](6, "ion-skeleton-text", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](8, "ion-skeleton-text", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
} }
const _c0 = function (a0) { return { delegateeLabel: a0 }; };
function DelegationDetailPage_ion_row_18_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "ion-row", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](1, "ion-col", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](2, "ion-button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("click", function DelegationDetailPage_ion_row_18_Template_ion_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r25); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](); return ctx_r24.showDelegateesList(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](3, "ion-icon", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind2"](5, 1, "delegation-detail.change-delegatee_label", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpureFunction1"](6, _c0, _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](6, 4, ctx_r4.delegateeLabel))), " ");
} }
function DelegationDetailPage_small_34_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind2"](2, 1, _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](3, 4, ctx_r26.delegateeDetails$).usageDetails.usage.toNumber() * 100, "1.2-2"), "% ");
} }
function DelegationDetailPage_small_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](1, DelegationDetailPage_small_34_span_1_Template, 4, 6, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](2, 1, ctx_r5.delegateeDetails$).usageDetails);
} }
function DelegationDetailPage_ng_template_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](1, "p", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](2, "ion-skeleton-text", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
} }
const _c1 = function (a0) { return { protocol: a0, maxDigits: 3 }; };
function DelegationDetailPage_small_39_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](3, "amountConverter");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](4, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](5, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](6, "amountConverter");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](7, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](2, 2, _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind2"](3, 4, _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](4, 7, ctx_r27.delegateeDetails$).usageDetails.current.toFixed(), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpureFunction1"](16, _c1, ctx_r27.wallet.protocol))), " / ", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](5, 9, _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind2"](6, 11, _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](7, 14, ctx_r27.delegateeDetails$).usageDetails.total.toFixed(), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpureFunction1"](18, _c1, ctx_r27.wallet.protocol))), " ");
} }
function DelegationDetailPage_small_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](1, DelegationDetailPage_small_39_span_1_Template, 8, 20, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](2, 1, ctx_r8.delegateeDetails$).usageDetails);
} }
function DelegationDetailPage_ng_template_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](1, "ion-skeleton-text", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
} }
function DelegationDetailPage_ng_container_45_ion_card_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](1, "ion-item", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](2, "widget-selector", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const extra_r30 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("widget", extra_r30);
} }
function DelegationDetailPage_ng_container_45_ion_card_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "ion-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](1, DelegationDetailPage_ng_container_45_ion_card_1_ng_container_1_Template, 3, 1, "ng-container", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngForOf", ctx_r28.filterVisible(_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](2, 1, ctx_r28.delegateeDetails$).displayDetails));
} }
function DelegationDetailPage_ng_container_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](1, DelegationDetailPage_ng_container_45_ion_card_1_Template, 3, 3, "ion-card", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](2, 1, ctx_r11.delegateeDetails$).displayDetails);
} }
function DelegationDetailPage_ng_template_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "ion-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](1, "ion-item", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](2, "ion-avatar", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](3, "ion-skeleton-text", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](4, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](5, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](6, "ion-skeleton-text", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](7, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](8, "ion-skeleton-text", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
} }
function DelegationDetailPage_ion_row_49_widget_alert_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](0, "widget-alert", 32);
} if (rf & 2) {
    const widget_r32 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("widget", widget_r32);
} }
function DelegationDetailPage_ion_row_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "ion-row", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](1, "ion-col", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](2, DelegationDetailPage_ion_row_49_widget_alert_2_Template, 1, 1, "widget-alert", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngForOf", ctx_r14.delegationAlertWidgets);
} }
function DelegationDetailPage_ion_row_50_ion_segment_2_ion_segment_button_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "ion-segment-button", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](1, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
} if (rf & 2) {
    const main_r36 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("value", main_r36.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](3, 2, main_r36.label));
} }
const _c2 = function () { return []; };
function DelegationDetailPage_ion_row_50_ion_segment_2_Template(rf, ctx) { if (rf & 1) {
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "ion-segment", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("ngModelChange", function DelegationDetailPage_ion_row_50_ion_segment_2_Template_ion_segment_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r38); const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](2); return ctx_r37.activeDelegatorAction = $event; })("ionChange", function DelegationDetailPage_ion_row_50_ion_segment_2_Template_ion_segment_ionChange_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵrestoreView"](_r38); const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](2); return ctx_r39.onActiveActionChange(ctx_r39.activeDelegatorAction); });
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](1, DelegationDetailPage_ion_row_50_ion_segment_2_ion_segment_button_1_Template, 4, 4, "ion-segment-button", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngModel", ctx_r33.activeDelegatorAction);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](2, 2, ctx_r33.delegatorDetails$).mainActions || _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpureFunction0"](4, _c2));
} }
function DelegationDetailPage_ion_row_50_ng_container_4_ng_container_1_ion_row_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "ion-row", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](1, "ion-col", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](2, "p", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
} if (rf & 2) {
    const main_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("innerHtml", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](3, 1, main_r40.description), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵsanitizeHtml"]);
} }
function DelegationDetailPage_ion_row_50_ng_container_4_ng_container_1_ion_row_2_form_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "form", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](1, "widget-selector", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
} if (rf & 2) {
    const arg_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]().$implicit;
    const main_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](2).$implicit;
    const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("formGroup", ctx_r46.delegationForms.get(main_r40.type));
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("widget", arg_r45)("widgetForm", ctx_r46.delegationForms.get(main_r40.type));
} }
function DelegationDetailPage_ion_row_50_ng_container_4_ng_container_1_ion_row_2_widget_selector_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](0, "widget-selector", 32);
} if (rf & 2) {
    const arg_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("widget", arg_r45);
} }
function DelegationDetailPage_ion_row_50_ng_container_4_ng_container_1_ion_row_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](1, "ion-col", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](2, DelegationDetailPage_ion_row_50_ng_container_4_ng_container_1_ion_row_2_form_2_Template, 2, 3, "form", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](3, DelegationDetailPage_ion_row_50_ng_container_4_ng_container_1_ion_row_2_widget_selector_3_Template, 1, 1, "widget-selector", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
} if (rf & 2) {
    const main_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](2).$implicit;
    const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", ctx_r43.delegationForms.get(main_r40.type));
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", !ctx_r43.delegationForms.get(main_r40.type));
} }
function DelegationDetailPage_ion_row_50_ng_container_4_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](1, DelegationDetailPage_ion_row_50_ng_container_4_ng_container_1_ion_row_1_Template, 4, 3, "ion-row", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](2, DelegationDetailPage_ion_row_50_ng_container_4_ng_container_1_ion_row_2_Template, 4, 2, "ion-row", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const main_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]().$implicit;
    const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", main_r40.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngForOf", ctx_r41.filterVisible(main_r40.args));
} }
function DelegationDetailPage_ion_row_50_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](1, DelegationDetailPage_ion_row_50_ng_container_4_ng_container_1_Template, 3, 2, "ng-container", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const main_r40 = ctx.$implicit;
    const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", ctx_r34.activeDelegatorAction === main_r40.type.toString());
} }
const _c3 = function (a0) { return { "segment--container": a0 }; };
function DelegationDetailPage_ion_row_50_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](1, "ion-col", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](2, DelegationDetailPage_ion_row_50_ion_segment_2_Template, 3, 5, "ion-segment", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](3, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](4, DelegationDetailPage_ion_row_50_ng_container_4_Template, 2, 1, "ng-container", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](5, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", ctx_r15.shouldDisplaySegmentButtons);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpureFunction1"](5, _c3, ctx_r15.shouldDisplaySegmentButtons));
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](5, 3, ctx_r15.delegatorDetails$).mainActions || _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpureFunction0"](7, _c2));
} }
function DelegationDetailPage_ng_container_61_ion_item_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "ion-item", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](1, "widget-icon-text", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("widget", ctx_r53.delegatorBalanceWidget);
} }
function DelegationDetailPage_ng_container_61_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](1, "ion-item", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](2, "widget-selector", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const extra_r55 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("widget", extra_r55);
} }
function DelegationDetailPage_ng_container_61_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](1, DelegationDetailPage_ng_container_61_ion_item_1_Template, 2, 1, "ion-item", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](2, DelegationDetailPage_ng_container_61_ng_container_2_Template, 3, 1, "ng-container", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", ctx_r16.delegatorBalanceWidget);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngForOf", ctx_r16.filterVisible(_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](3, 2, ctx_r16.delegatorDetails$).displayDetails));
} }
function DelegationDetailPage_ng_template_63_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "ion-item", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](1, "ion-avatar", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](2, "ion-skeleton-text", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](3, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](4, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](5, "ion-skeleton-text", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](6, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](7, "ion-skeleton-text", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
} }
function DelegationDetailPage_ng_container_65_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](1, "ion-row", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](2, "ion-text", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](3, "p", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](6, "ion-row");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](7, "ion-col", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](8, "widget-reward-list", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](9, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](5, 2, "delegation-detail.your-rewards_label"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("widget", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](9, 4, ctx_r19.rewardDisplay$));
} }
function DelegationDetailPage_ng_template_67_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](1, "ion-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](2, "ion-item", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](3, "ion-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](4, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](5, "ion-skeleton-text", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](6, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](7, "ion-skeleton-text", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](8, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](9, "ion-skeleton-text", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](10, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](11, "ion-skeleton-text", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementContainerEnd"]();
} }
function DelegationDetailPage_ng_template_67_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](0, DelegationDetailPage_ng_template_67_ng_container_0_Template, 12, 0, "ng-container", 23);
} if (rf & 2) {
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", ctx_r21.hasRewardDetails === undefined);
} }
class DelegationDetailPage {
    constructor(router, navController, dataService, operations, extensionsService, loadingController, popoverController, toastController, route, formBuilder, amountConverter, accountProvider) {
        this.router = router;
        this.navController = navController;
        this.dataService = dataService;
        this.operations = operations;
        this.extensionsService = extensionsService;
        this.loadingController = loadingController;
        this.popoverController = popoverController;
        this.toastController = toastController;
        this.route = route;
        this.formBuilder = formBuilder;
        this.amountConverter = amountConverter;
        this.accountProvider = accountProvider;
        this.delegationForms = new Map();
        this.activeDelegatorAction = null;
        this.activeDelegatorActionConfirmButton = null;
        this.delegateeDetails$ = new rxjs__WEBPACK_IMPORTED_MODULE_6__["BehaviorSubject"](null);
        this.delegatorDetails$ = new rxjs__WEBPACK_IMPORTED_MODULE_6__["BehaviorSubject"](null);
        this.rewardDisplay$ = new rxjs__WEBPACK_IMPORTED_MODULE_6__["BehaviorSubject"](null);
        this.canProceed = true;
        this.hasRewardDetails = undefined;
        this.delegateeAddress$ = new rxjs__WEBPACK_IMPORTED_MODULE_6__["BehaviorSubject"](null);
        this.areMultipleDelegationsSupported = false;
    }
    get shouldDisplaySegmentButtons() {
        const details = this.delegatorDetails$.value;
        return details.mainActions && details.mainActions.some((action) => !!action.description || !!action.args);
    }
    get isAirGapDelegatee() {
        return Object(src_app_helpers_delegation__WEBPACK_IMPORTED_MODULE_8__["supportsAirGapDelegation"])(this.wallet.protocol)
            ? this.wallet.protocol.airGapDelegatee() && this.delegateeAddress$.value === this.wallet.protocol.airGapDelegatee()
            : false;
    }
    get hideAirGapOverflow() {
        return Object(src_app_helpers_delegation__WEBPACK_IMPORTED_MODULE_8__["supportsAirGapDelegation"])(this.wallet.protocol)
            ? !this.wallet.protocol.airGapDelegatee() || this.isAirGapDelegatee
            : this.isAirGapDelegatee;
    }
    ngOnInit() {
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
        this.extensionsService.loadDelegationExtensions().then(() => {
            this.initView();
        });
    }
    filterVisible(widgets) {
        return widgets ? widgets.filter((widget) => widget.isVisible) : [];
    }
    presentEditPopover(event) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const delegatorDetails = this.delegatorDetails$.value;
            const secondaryActions = delegatorDetails ? delegatorDetails.secondaryActions : undefined;
            const popover = yield this.popoverController.create({
                component: src_app_components_delegate_action_popover_delegate_action_popover_component__WEBPACK_IMPORTED_MODULE_7__["DelegateActionPopoverComponent"],
                componentProps: {
                    hideAirGap: this.hideAirGapOverflow,
                    delegateeLabel: this.delegateeLabel,
                    secondaryDelegatorActions: secondaryActions
                },
                event,
                translucent: true
            });
            popover
                .onDidDismiss()
                .then(({ data }) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                if (Object(src_app_utils_utils__WEBPACK_IMPORTED_MODULE_15__["isType"])(data, 'changeToAirGap') && Object(src_app_helpers_delegation__WEBPACK_IMPORTED_MODULE_8__["supportsAirGapDelegation"])(this.wallet.protocol)) {
                    this.changeDisplayedDetails(this.wallet.protocol.airGapDelegatee());
                }
                else if (Object(src_app_utils_utils__WEBPACK_IMPORTED_MODULE_15__["isType"])(data, 'secondaryActionType')) {
                    this.callSecondaryAction(data.secondaryActionType);
                }
                else {
                    console.log('Unknown option selected.');
                }
            }))
                .catch(Object(src_app_services_sentry_error_handler_sentry_error_handler__WEBPACK_IMPORTED_MODULE_14__["handleErrorSentry"])(src_app_services_sentry_error_handler_sentry_error_handler__WEBPACK_IMPORTED_MODULE_14__["ErrorCategory"].IONIC_ALERT));
            return popover.present().catch(Object(src_app_services_sentry_error_handler_sentry_error_handler__WEBPACK_IMPORTED_MODULE_14__["handleErrorSentry"])(src_app_services_sentry_error_handler_sentry_error_handler__WEBPACK_IMPORTED_MODULE_14__["ErrorCategory"].NAVIGATION));
        });
    }
    callMainAction(type) {
        const delegatorDetails = this.delegatorDetails$.value;
        if (!delegatorDetails) {
            return;
        }
        if (!delegatorDetails.mainActions || delegatorDetails.mainActions.length === 0) {
            this.navController.back();
            return;
        }
        this.callAction(delegatorDetails.mainActions, type);
    }
    callSecondaryAction(type) {
        const delegatorDetails = this.delegatorDetails$.value;
        if (!delegatorDetails) {
            return;
        }
        this.callAction(delegatorDetails.secondaryActions || [], type);
    }
    onActiveActionChange(activeDelegatorAction) {
        const activeAction = this.delegatorDetails$.value.mainActions
            ? this.delegatorDetails$.value.mainActions.find((action) => action.type.toString() === activeDelegatorAction)
            : null;
        this.activeDelegatorAction = activeDelegatorAction;
        this.activeDelegatorActionConfirmButton =
            activeAction && !activeAction.disabled ? activeAction.confirmLabel || activeAction.label : null;
    }
    showDelegateesList() {
        const info = {
            wallet: this.wallet,
            delegateeLabel: this.delegateeLabel,
            delegateeLabelPlural: this.delegateeLabelPlural,
            areMultipleDelegationsSupported: this.areMultipleDelegationsSupported,
            currentDelegatees: this.delegatorDetails$.value.delegatees,
            callback: (address) => {
                this.changeDisplayedDetails(address);
            }
        };
        this.dataService.setData(src_app_services_data_data_service__WEBPACK_IMPORTED_MODULE_11__["DataServiceKey"].DETAIL, info);
        this.router
            .navigateByUrl('/delegation-list/' + src_app_services_data_data_service__WEBPACK_IMPORTED_MODULE_11__["DataServiceKey"].DETAIL, { skipLocationChange: true })
            .catch(Object(src_app_services_sentry_error_handler_sentry_error_handler__WEBPACK_IMPORTED_MODULE_14__["handleErrorSentry"])(src_app_services_sentry_error_handler_sentry_error_handler__WEBPACK_IMPORTED_MODULE_14__["ErrorCategory"].NAVIGATION));
    }
    initView() {
        this.delegateeLabel = Object(src_app_helpers_delegation__WEBPACK_IMPORTED_MODULE_8__["supportsAirGapDelegation"])(this.wallet.protocol)
            ? this.wallet.protocol.delegateeLabel
            : 'delegation-detail.default-delegatee-label';
        this.delegateeLabelPlural = Object(src_app_helpers_delegation__WEBPACK_IMPORTED_MODULE_8__["supportsAirGapDelegation"])(this.wallet.protocol)
            ? this.wallet.protocol.delegateeLabelPlural
            : 'delegation-detail.defailt-delegatee-label-plural';
        this.areMultipleDelegationsSupported = Object(src_app_helpers_delegation__WEBPACK_IMPORTED_MODULE_8__["supportsAirGapDelegation"])(this.wallet.protocol)
            ? this.wallet.protocol.supportsMultipleDelegations
            : false;
        this.subscribeObservables();
        this.operations.getCurrentDelegatees(this.wallet).then((addresses) => {
            if (addresses) {
                this.delegateeAddress$.next(addresses[0]);
            }
        });
    }
    subscribeObservables() {
        this.delegateeAddress$.subscribe((address) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (address) {
                this.updateDisplayedDetails(null);
                this.updateDisplayedRewards(null);
                this.operations.getDelegationDetails(this.wallet, [address]).then((details) => {
                    if (details && details.length > 0) {
                        this.updateDisplayedDetails(details);
                    }
                });
                this.operations.getRewardDisplayDetails(this.wallet, [address]).then((rewards) => {
                    this.hasRewardDetails = rewards !== undefined;
                    if (rewards) {
                        this.updateDisplayedRewards(rewards);
                    }
                });
            }
        }));
        this.delegateeDetails$.subscribe((details) => {
            this.delegateeAccountWidget = details
                ? new src_app_models_widgets_display_UIAccount__WEBPACK_IMPORTED_MODULE_9__["UIAccount"]({
                    name: details.name,
                    address: details.address,
                    logo: details.logo,
                    shortenAddress: true
                })
                : null;
        });
        this.delegatorDetails$.subscribe((details) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.showOverflowMenu =
                !(this.isAirGapDelegatee || this.hideAirGapOverflow) || (details && details.secondaryActions && details.secondaryActions.length > 0);
            if (details) {
                this.delegatorBalanceWidget = new src_app_models_widgets_display_UIIconText__WEBPACK_IMPORTED_MODULE_10__["UIIconText"]({
                    iconName: 'wallet-outline',
                    text: yield this.amountConverter.transform(details.balance, {
                        protocol: this.wallet.protocol,
                        maxDigits: this.wallet.protocol.decimals
                    }),
                    description: 'delegation-detail.your-balance_label'
                });
                this.setupAllActions(details);
                this.setupFormObservers();
                this.initActiveDelegatorAction(details);
            }
        }));
    }
    setupAllActions(details) {
        this.setupActions(details.mainActions || []);
        this.setupActions(details.secondaryActions || []);
    }
    setupActions(actions) {
        actions.forEach((action) => {
            this.setupFormForAction(action);
            action.form = this.delegationForms.get(action.type);
            if (action.args) {
                action.args.forEach((arg) => {
                    arg.wallet = this.wallet;
                });
            }
        });
    }
    setupFormForAction(action) {
        if (action.form) {
            this.delegationForms.set(action.type, action.form);
        }
        const form = this.delegationForms.get(action.type);
        const formArgs = {};
        if (action.args) {
            action.args.forEach((arg) => {
                formArgs[arg.id] = form ? form.value[arg.id] : null;
            });
        }
        if (!form) {
            this.delegationForms.set(action.type, this.formBuilder.group(formArgs));
        }
        else {
            Object.keys(formArgs)
                .map((key) => [key, formArgs[key]])
                .forEach(([key, value]) => form.addControl(key, value));
        }
    }
    setupFormObservers() {
        Array.from(this.delegationForms.entries()).forEach(([type, formGroup]) => {
            formGroup.valueChanges.subscribe(() => {
                if (this.activeDelegatorAction === type.toString()) {
                    setTimeout(() => {
                        this.canProceed = formGroup.valid;
                    });
                }
            });
        });
    }
    initActiveDelegatorAction(details) {
        const activeAction = details.mainActions ? details.mainActions[0] : null;
        this.onActiveActionChange(activeAction ? activeAction.type.toString() : null);
    }
    updateDisplayedDetails(details) {
        // TODO: support multiple cases
        this.delegationAlertWidgets = details ? details[0].alerts : undefined;
        this.delegateeDetails$.next(details ? details[0].delegatees[0] : null);
        this.delegatorDetails$.next(details ? details[0].delegator : null);
    }
    updateDisplayedRewards(rewardDisplay) {
        this.rewardDisplay$.next(rewardDisplay);
    }
    changeDisplayedDetails(address) {
        this.delegateeAddress$.next(address);
    }
    callAction(actions, type) {
        const action = actions.find((action) => action.type.toString() === type);
        const actionType = action ? action.type : undefined;
        if (action.disabled) {
            this.navController.back();
            return;
        }
        if (actionType) {
            this.prepareDelegationAction(actionType);
        }
        else {
            console.warn('Unknown action');
        }
    }
    prepareDelegationAction(actionType) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.loader = yield this.loadingController.create({
                message: 'Preparing transaction...'
            });
            yield this.loader.present().catch(Object(src_app_services_sentry_error_handler_sentry_error_handler__WEBPACK_IMPORTED_MODULE_14__["handleErrorSentry"])(src_app_services_sentry_error_handler_sentry_error_handler__WEBPACK_IMPORTED_MODULE_14__["ErrorCategory"].IONIC_LOADER));
            try {
                const form = this.delegationForms.get(actionType);
                const data = form ? form.value : undefined;
                const { airGapTxs, unsignedTx } = yield this.operations.prepareDelegatorAction(this.wallet, actionType, data);
                this.dismissLoader();
                this.accountProvider.startInteraction(this.wallet, unsignedTx, _airgap_coinlib_core__WEBPACK_IMPORTED_MODULE_5__["IACMessageType"].TransactionSignRequest, airGapTxs);
            }
            catch (error) {
                this.dismissLoader();
                console.warn(error);
                this.showToast(error.message);
            }
        });
    }
    dismissLoader() {
        if (this.loader) {
            this.loader.dismiss().catch(Object(src_app_services_sentry_error_handler_sentry_error_handler__WEBPACK_IMPORTED_MODULE_14__["handleErrorSentry"])(src_app_services_sentry_error_handler_sentry_error_handler__WEBPACK_IMPORTED_MODULE_14__["ErrorCategory"].IONIC_LOADER));
        }
    }
    showToast(message) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: message,
                duration: 3000,
                position: 'bottom'
            });
            toast.present().catch(Object(src_app_services_sentry_error_handler_sentry_error_handler__WEBPACK_IMPORTED_MODULE_14__["handleErrorSentry"])(src_app_services_sentry_error_handler_sentry_error_handler__WEBPACK_IMPORTED_MODULE_14__["ErrorCategory"].IONIC_TOAST));
        });
    }
}
DelegationDetailPage.ɵfac = function DelegationDetailPage_Factory(t) { return new (t || DelegationDetailPage)(_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](src_app_services_data_data_service__WEBPACK_IMPORTED_MODULE_11__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](src_app_services_operations_operations__WEBPACK_IMPORTED_MODULE_13__["OperationsProvider"]), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](src_app_services_extensions_extensions_service__WEBPACK_IMPORTED_MODULE_12__["ExtensionsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"]), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["PopoverController"]), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"]), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](_airgap_angular_core__WEBPACK_IMPORTED_MODULE_1__["AmountConverterPipe"]), _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdirectiveInject"](src_app_services_account_account_provider__WEBPACK_IMPORTED_MODULE_16__["AccountProvider"])); };
DelegationDetailPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdefineComponent"]({ type: DelegationDetailPage, selectors: [["app-delegation-detail"]], decls: 73, vars: 56, consts: [[1, "ion-no-border"], ["fixed", "true", 1, "ion-no-padding"], ["slot", "start"], ["defaultHref", "/"], ["slot", "end"], ["color", "secondary", 3, "click", 4, "ngIf"], [1, "ion-padding-horizontal"], ["size", "12"], [3, "widget", 4, "ngIf", "ngIfElse"], ["delegateeAvatarSkeleton", ""], ["class", "ion-padding-horizontal action--container", 4, "ngIf"], [1, "ion-padding-horizontal", "ion-padding-bottom"], ["size", "12", 1, "ion-no-padding"], [1, "progress--container"], [1, "progress--current"], ["size", "6", 1, "ion-no-padding"], [4, "ngIf", "ngIfElse"], ["delegateeUsageSkeleton", ""], ["size", "6", 1, "ion-no-padding", "ion-text-right"], ["delegateeUsageDetailsSkeleton", ""], [1, "ion-padding-bottom"], ["delegateeExtraSkeleton", ""], ["class", "ion-padding-horizontal", 4, "ngIf"], [4, "ngIf"], ["color", "primary"], [1, "font--weight__bold", "ion-no-margin", "ion-ion-text"], ["delegatorDetailsSkeleton", ""], ["rewardsSkeleton", ""], ["vertical", "bottom", "horizontal", "end", "slot", "fixed"], ["shape", "round", "color", "primary", 3, "disabled", "click"], ["color", "secondary", 3, "click"], ["name", "ellipsis-vertical-outline"], [3, "widget"], ["lines", "none", 1, "ion-no-padding"], ["animated", ""], ["animated", "", 2, "width", "40%", "height", "19px"], ["animated", "", 2, "width", "80%"], [1, "ion-padding-horizontal", "action--container"], ["color", "secondary", "shape", "round", "size", "small", "fill", "outline", 3, "click"], ["slot", "start", "name", "swap-vertical-outline"], [1, "ion-no-margin"], ["animated", "", 2, "width", "50%"], [1, "justify--content__end"], [4, "ngFor", "ngForOf"], ["lines", "none"], ["animated", "", 2, "width", "80%", "height", "19px"], ["animated", "", 2, "width", "40%"], [3, "widget", 4, "ngFor", "ngForOf"], ["scrollable", "true", "class", "ion-padding-horizontal", 3, "ngModel", "ngModelChange", "ionChange", 4, "ngIf"], [3, "ngClass"], ["scrollable", "true", 1, "ion-padding-horizontal", 3, "ngModel", "ngModelChange", "ionChange"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], [3, "innerHtml"], [3, "formGroup", 4, "ngIf"], [3, "widget", 4, "ngIf"], [3, "formGroup"], [3, "widget", "widgetForm"], ["lines", "none", 4, "ngIf"], ["ion-text", "", 1, "font--weight__bold", "ion-no-margin"], ["animated", "", 2, "width", "100%", "height", "19px"]], template: function DelegationDetailPage_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](0, "ion-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](1, "ion-grid", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](2, "ion-toolbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](3, "ion-buttons", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](4, "ion-back-button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](5, "ion-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](7, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](8, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](9, "ion-buttons", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](10, DelegationDetailPage_ion_button_10_Template, 2, 0, "ion-button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](11, "ion-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](12, "ion-grid", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](13, "ion-row", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](14, "ion-col", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](15, DelegationDetailPage_widget_account_15_Template, 1, 1, "widget-account", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](16, DelegationDetailPage_ng_template_16_Template, 9, 0, "ng-template", null, 9, _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](18, DelegationDetailPage_ion_row_18_Template, 7, 8, "ion-row", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](19, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](20, "ion-row", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](21, "ion-col", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](22, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](24, "titlecase");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](25, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](26, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](27, "ion-col", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](28, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelement"](29, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](30, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](31, "ion-col", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](32, "ion-row");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](33, "ion-col", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](34, DelegationDetailPage_small_34_Template, 3, 3, "small", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](35, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](36, DelegationDetailPage_ng_template_36_Template, 3, 0, "ng-template", null, 17, _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](38, "ion-col", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](39, DelegationDetailPage_small_39_Template, 3, 3, "small", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](40, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](41, DelegationDetailPage_ng_template_41_Template, 2, 0, "ng-template", null, 19, _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](43, "ion-row", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](44, "ion-col", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](45, DelegationDetailPage_ng_container_45_Template, 3, 3, "ng-container", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](46, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](47, DelegationDetailPage_ng_template_47_Template, 9, 0, "ng-template", null, 21, _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](49, DelegationDetailPage_ion_row_49_Template, 3, 1, "ion-row", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](50, DelegationDetailPage_ion_row_50_Template, 6, 8, "ion-row", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](51, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](52, "ion-row", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](53, "ion-col", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](54, "ion-text", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](55, "p", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](56);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](57, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](58, "ion-row", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](59, "ion-col", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](60, "ion-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](61, DelegationDetailPage_ng_container_61_Template, 4, 4, "ng-container", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](62, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](63, DelegationDetailPage_ng_template_63_Template, 8, 0, "ng-template", null, 26, _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](65, DelegationDetailPage_ng_container_65_Template, 10, 6, "ng-container", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](66, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplate"](67, DelegationDetailPage_ng_template_67_Template, 1, 1, "ng-template", null, 27, _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](69, "ion-fab", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementStart"](70, "ion-button", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵlistener"]("click", function DelegationDetailPage_Template_ion_button_click_70_listener() { return ctx.callMainAction(ctx.activeDelegatorAction); });
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtext"](71);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipe"](72, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵreference"](17);
        const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵreference"](37);
        const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵreference"](42);
        const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵreference"](48);
        const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵreference"](64);
        const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵreference"](68);
        let tmp_5_0 = null;
        let tmp_6_0 = null;
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind2"](7, 23, "delegation-detail.title", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpureFunction1"](54, _c0, _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](8, 26, ctx.delegateeLabel))));
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", ctx.showOverflowMenu);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", ctx.delegateeAccountWidget)("ngIfElse", _r2);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](19, 28, ctx.delegateeDetails$));
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](24, 30, _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](25, 32, (tmp_5_0 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](26, 34, ctx.delegateeDetails$)) == null ? null : tmp_5_0.status)));
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵstyleProp"]("width", (((tmp_6_0 = _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](30, 36, ctx.delegateeDetails$)) == null ? null : tmp_6_0.usageDetails == null ? null : tmp_6_0.usageDetails.usage.toNumber()) * 100).toFixed(2) + "%");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](35, 38, ctx.delegateeDetails$))("ngIfElse", _r6);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](40, 40, ctx.delegateeDetails$))("ngIfElse", _r9);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](46, 42, ctx.delegateeDetails$))("ngIfElse", _r12);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", ctx.delegationAlertWidgets);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](51, 44, ctx.delegatorDetails$));
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](57, 46, "delegation-detail.your-delegation_label"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](62, 48, ctx.delegatorDetails$))("ngIfElse", _r17);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](66, 50, ctx.rewardDisplay$))("ngIfElse", _r20);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵproperty"]("disabled", !ctx.canProceed);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵpipeBind1"](72, 52, ctx.activeDelegatorActionConfirmButton || "delegation-detail.done_button"), " ");
    } }, directives: [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonHeader"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonGrid"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonToolbar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonButtons"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonBackButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonBackButtonDelegate"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonTitle"], _angular_common__WEBPACK_IMPORTED_MODULE_18__["NgIf"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonContent"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonRow"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonCol"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonText"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonCard"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonFab"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonButton"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonIcon"], _components_widget_account_widget_account__WEBPACK_IMPORTED_MODULE_19__["WidgetAccount"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonItem"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonAvatar"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonSkeletonText"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonLabel"], _angular_common__WEBPACK_IMPORTED_MODULE_18__["NgForOf"], _components_widget_selector_widget_selector__WEBPACK_IMPORTED_MODULE_20__["WidgetSelector"], _components_widget_alert_widget_alert__WEBPACK_IMPORTED_MODULE_21__["WidgetAlert"], _angular_common__WEBPACK_IMPORTED_MODULE_18__["NgClass"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonSegment"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["SelectValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonSegmentButton"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _components_widget_icon_text_widget_icon_text__WEBPACK_IMPORTED_MODULE_22__["WidgetIconText"], _components_widget_reward_list_widget_reward_list__WEBPACK_IMPORTED_MODULE_23__["WidgetRewardList"]], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_24__["TranslatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_18__["AsyncPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_18__["TitleCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_18__["DecimalPipe"], _airgap_angular_core__WEBPACK_IMPORTED_MODULE_1__["AmountConverterPipe"]], styles: [".progress--container[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 4px;\n  background-color: rgba(0, 232, 204, 0.12);\n}\n\n.progress--current[_ngcontent-%COMP%] {\n  height: inherit;\n  background-color: var(--ion-color-primary);\n}\n\n.border--container[_ngcontent-%COMP%] {\n  border: 1px solid var(--ion-color-secondary);\n  border-radius: 50%;\n}\n\n.segment--container[_ngcontent-%COMP%] {\n  min-height: 185px;\n}\n\nion-segment[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 0;\n  height: 0;\n  display: none;\n}\n\nion-segment[_ngcontent-%COMP%]   ion-segment-button[_ngcontent-%COMP%] {\n  min-width: -moz-fit-content;\n  min-width: fit-content;\n}\n\n.action--container[_ngcontent-%COMP%] {\n  background: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2RlbGVnYXRpb24tZGV0YWlsLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0VBQ0EsV0FBQTtFQUNBLHlDQUFBO0FBQ0Y7O0FBRUE7RUFDRSxlQUFBO0VBQ0EsMENBQUE7QUFDRjs7QUFFQTtFQUNFLDRDQUFBO0VBQ0Esa0JBQUE7QUFDRjs7QUFFQTtFQUNFLGlCQUFBO0FBQ0Y7O0FBR0U7RUFDRSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGFBQUE7QUFBSjs7QUFHRTtFQUNFLDJCQUFBO0VBQUEsc0JBQUE7QUFESjs7QUFLQTtFQUNFLGdCQUFBO0FBRkYiLCJmaWxlIjoiZGVsZWdhdGlvbi1kZXRhaWwuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcm9ncmVzcy0tY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDIzMiwgMjA0LCAwLjEyKTtcbn1cblxuLnByb2dyZXNzLS1jdXJyZW50IHtcbiAgaGVpZ2h0OiBpbmhlcml0O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59XG5cbi5ib3JkZXItLWNvbnRhaW5lciB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbi5zZWdtZW50LS1jb250YWluZXIge1xuICBtaW4taGVpZ2h0OiAxODVweDtcbn1cblxuaW9uLXNlZ21lbnQge1xuICAmOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgd2lkdGg6IDA7XG4gICAgaGVpZ2h0OiAwO1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuICBpb24tc2VnbWVudC1idXR0b24ge1xuICAgIG1pbi13aWR0aDogZml0LWNvbnRlbnQ7XG4gIH1cbn1cblxuLmFjdGlvbi0tY29udGFpbmVyIHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbn1cbiJdfQ== */"] });


/***/ }),

/***/ "SY1b":
/*!*********************************************************************!*\
  !*** ./src/app/pages/delegation-detail/delegation-detail.module.ts ***!
  \*********************************************************************/
/*! exports provided: DelegationDetailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DelegationDetailPageModule", function() { return DelegationDetailPageModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _airgap_angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @airgap/angular-core */ "138U");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var ngx_moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-moment */ "QUrN");
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/components.module */ "j1ZV");
/* harmony import */ var src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/pipes/pipes.module */ "iTUp");
/* harmony import */ var _delegation_detail__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./delegation-detail */ "SV0d");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ "fXoL");












class DelegationDetailPageModule {
}
DelegationDetailPageModule.ɵfac = function DelegationDetailPageModule_Factory(t) { return new (t || DelegationDetailPageModule)(); };
DelegationDetailPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({ type: DelegationDetailPageModule });
DelegationDetailPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"],
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"],
            src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_8__["PipesModule"],
            ngx_moment__WEBPACK_IMPORTED_MODULE_6__["MomentModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([{ path: '', component: _delegation_detail__WEBPACK_IMPORTED_MODULE_9__["DelegationDetailPage"] }]),
            _airgap_angular_core__WEBPACK_IMPORTED_MODULE_3__["AirGapAngularCoreModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](DelegationDetailPageModule, { declarations: [_delegation_detail__WEBPACK_IMPORTED_MODULE_9__["DelegationDetailPage"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"],
        src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"],
        src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_8__["PipesModule"],
        ngx_moment__WEBPACK_IMPORTED_MODULE_6__["MomentModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"], _airgap_angular_core__WEBPACK_IMPORTED_MODULE_3__["AirGapAngularCoreModule"]] }); })();


/***/ })

}]);
//# sourceMappingURL=pages-delegation-detail-delegation-detail-module.js.map
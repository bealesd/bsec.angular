(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/ServicesRepo.ts":
/*!*********************************!*\
  !*** ./src/app/ServicesRepo.ts ***!
  \*********************************/
/*! exports provided: ServicesRepo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesRepo", function() { return ServicesRepo; });
var ServicesRepo = /** @class */ (function () {
    function ServicesRepo() {
        this.loadServices();
    }
    ServicesRepo.prototype.loadServices = function () {
        this.services = [];
        this.services.push({ book: "james", title: "feeding", who: "max", date: new Date(), listen: '' });
        this.services.push({ book: "james", title: "feeding", who: "max", date: new Date(), listen: '' });
        this.services.push({ book: "james", title: "feeding", who: "max", date: new Date(), listen: '' });
        this.services.push({ book: "john", title: "cure the lame", who: "mike", date: new Date(), listen: '' });
    };
    ServicesRepo.prototype.getService = function () {
        return this.services;
    };
    ServicesRepo.prototype.getServiceDescriptions = function () {
        var serviceDescriptions = new Object;
        serviceDescriptions['adults'] =
            "<h3>Morning Service 10:30 - 11:45am</h3><p>On Sunday mornings our focus is on meeting with God through praise,\n         prayer and looking together at his word the Bible, asking him to work in and through us by his Holy Spirit.\n        Our music is contemporary with a mix of new and traditional songs. The messages from God\u2019s word aim to teach,\n        challenge and empower us to live our lives for him.</p>\n        <h3>Afternoon Service 4:00 \u2013 5:30pm </h3><p>The church gathers on a Sunday afternoon in a more relaxed and informal\n         setting. We meet with God by singing worship songs, praying, hearing a message from the Bible, and reflecting on\n          the message in a short discussion time. Whatever your age, whatever your situation and wherever you are on your\n           journey of faith, you are very welcome!</p>";
        serviceDescriptions['kids'] =
            "<h3>Children Church 11:00 - 11:45am</h3><p>We love having children of all ages as part of our church.\n         During the second half of the meeting a creche is available for pre-preschoolers. \n         Children\u2019s Church groups JAM and KFC also run during this time for children in school Key Stage 1 and Key Stage 2. \n         Every other week, children of secondary school age meet as a group during part of the meeting. \n         On one Sunday of every month it is a great joy to have many of our children people providing excellent musical accompaniment to our worship.";
        return serviceDescriptions;
    };
    ;
    return ServicesRepo;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _whats_on_whats_on_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./whats-on/whats-on.component */ "./src/app/whats-on/whats-on.component.ts");
/* harmony import */ var _services_services_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/services.component */ "./src/app/services/services.component.ts");
/* harmony import */ var _pre_school_pre_school_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pre-school/pre-school.component */ "./src/app/pre-school/pre-school.component.ts");
/* harmony import */ var _youth_club_youth_club_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./youth-club/youth-club.component */ "./src/app/youth-club/youth-club.component.ts");
/* harmony import */ var _upcoming_events_upcoming_events_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./upcoming-events/upcoming-events.component */ "./src/app/upcoming-events/upcoming-events.component.ts");
/* harmony import */ var _home_groups_home_groups_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./home-groups/home-groups.component */ "./src/app/home-groups/home-groups.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _calendar_calendar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./calendar/calendar.component */ "./src/app/calendar/calendar.component.ts");
/* harmony import */ var _our_location_our_location_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./our-location/our-location.component */ "./src/app/our-location/our-location.component.ts");
/* harmony import */ var _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./contact-us/contact-us.component */ "./src/app/contact-us/contact-us.component.ts");













var routes = [
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"] },
    { path: 'home/:id', component: _home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"] },
    { path: 'whatsOn', component: _whats_on_whats_on_component__WEBPACK_IMPORTED_MODULE_3__["WhatsOnComponent"] },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'event/Services', component: _services_services_component__WEBPACK_IMPORTED_MODULE_4__["ServicesComponent"] },
    { path: 'event/services/:type', component: _services_services_component__WEBPACK_IMPORTED_MODULE_4__["ServicesComponent"] },
    { path: 'event/Pre School', component: _pre_school_pre_school_component__WEBPACK_IMPORTED_MODULE_5__["PreSchoolComponent"] },
    { path: 'event/Youth Club', component: _youth_club_youth_club_component__WEBPACK_IMPORTED_MODULE_6__["YouthClubComponent"] },
    { path: 'event/Home Groups', component: _home_groups_home_groups_component__WEBPACK_IMPORTED_MODULE_8__["HomeGroupsComponent"] },
    { path: 'event/Upcoming', component: _upcoming_events_upcoming_events_component__WEBPACK_IMPORTED_MODULE_7__["UpcomingEventsComponent"] },
    { path: 'calendar', component: _calendar_calendar_component__WEBPACK_IMPORTED_MODULE_10__["CalendarComponent"] },
    { path: 'ourLocation', component: _our_location_our_location_component__WEBPACK_IMPORTED_MODULE_11__["OurLocationComponent"] },
    { path: 'contactUs', component: _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_12__["ContactUsComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1 {\r\n    color: #369;\r\n    font-family: Arial, Helvetica, sans-serif;\r\n    font-size: 250%;\r\n  }\r\n\r\n  div {\r\n    height:100vh;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gseUNBQXlDO0lBQ3pDLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxZQUFZO0VBQ2QiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImgxIHtcclxuICAgIGNvbG9yOiAjMzY5O1xyXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDI1MCU7XHJcbiAgfVxyXG5cclxuICBkaXYge1xyXG4gICAgaGVpZ2h0OjEwMHZoO1xyXG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mat-app-background basic-container\">\n    <app-menu-bar></app-menu-bar>\n    <router-outlet></router-outlet>\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _extensions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./extensions */ "./src/app/extensions.ts");
/* harmony import */ var _extensions__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_extensions__WEBPACK_IMPORTED_MODULE_2__);



var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.createdBy = "David Beales";
    }
    AppComponent.prototype.ngAfterViewInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], AppComponent.prototype, "src", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], AppComponent.prototype, "type", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('script'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], AppComponent.prototype, "script", void 0);
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _whats_on_whats_on_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./whats-on/whats-on.component */ "./src/app/whats-on/whats-on.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _services_services_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/services.component */ "./src/app/services/services.component.ts");
/* harmony import */ var _pre_school_pre_school_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pre-school/pre-school.component */ "./src/app/pre-school/pre-school.component.ts");
/* harmony import */ var _youth_club_youth_club_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./youth-club/youth-club.component */ "./src/app/youth-club/youth-club.component.ts");
/* harmony import */ var _home_groups_home_groups_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./home-groups/home-groups.component */ "./src/app/home-groups/home-groups.component.ts");
/* harmony import */ var _menu_bar_menu_bar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./menu-bar/menu-bar.component */ "./src/app/menu-bar/menu-bar.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _calendar_calendar_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./calendar/calendar.component */ "./src/app/calendar/calendar.component.ts");
/* harmony import */ var _our_location_our_location_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./our-location/our-location.component */ "./src/app/our-location/our-location.component.ts");
/* harmony import */ var _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./contact-us/contact-us.component */ "./src/app/contact-us/contact-us.component.ts");
/* harmony import */ var _upcoming_events_upcoming_events_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./upcoming-events/upcoming-events.component */ "./src/app/upcoming-events/upcoming-events.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
















// import { FlexLayoutModule } from '@angular/flex-layout';



var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _whats_on_whats_on_component__WEBPACK_IMPORTED_MODULE_4__["WhatsOnComponent"],
                _services_services_component__WEBPACK_IMPORTED_MODULE_6__["ServicesComponent"],
                _pre_school_pre_school_component__WEBPACK_IMPORTED_MODULE_7__["PreSchoolComponent"],
                _youth_club_youth_club_component__WEBPACK_IMPORTED_MODULE_8__["YouthClubComponent"],
                _home_groups_home_groups_component__WEBPACK_IMPORTED_MODULE_9__["HomeGroupsComponent"],
                _menu_bar_menu_bar_component__WEBPACK_IMPORTED_MODULE_10__["MenuBarComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_11__["HomeComponent"],
                _calendar_calendar_component__WEBPACK_IMPORTED_MODULE_12__["CalendarComponent"],
                _our_location_our_location_component__WEBPACK_IMPORTED_MODULE_13__["OurLocationComponent"],
                _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_14__["ContactUsComponent"],
                _upcoming_events_upcoming_events_component__WEBPACK_IMPORTED_MODULE_15__["UpcomingEventsComponent"],
            ],
            imports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_17__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_17__["FormsModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_18__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_18__["MatBadgeModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_18__["MatBottomSheetModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_18__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_18__["MatButtonToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_18__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_18__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_18__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_18__["MatStepperModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_18__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_18__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_18__["MatDividerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_18__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_18__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_18__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_18__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_18__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_18__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_18__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_18__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_18__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_18__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_18__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_18__["MatRippleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_18__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_18__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_18__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_18__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_18__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_18__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_18__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_18__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_18__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_18__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_18__["MatTreeModule"],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/archive/weekly-events.ts":
/*!******************************************!*\
  !*** ./src/app/archive/weekly-events.ts ***!
  \******************************************/
/*! exports provided: WeeklyEvents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeeklyEvents", function() { return WeeklyEvents; });
var WeeklyEvents = [
    {
        name: 'Home Groups',
        description: ' Growth groups are at the heart of our community life together. We meet each week in smaller groups to study God’s word the Bible, talk about life and pray together.'
    },
    {
        name: 'Pre School',
        description: "Busy Bees is our toddler group for under 5s who live in Bradley Stoke, Little Stoke and Stoke Gifford. Currently we don't have capacity to cater for those outside of these areas."
    },
    {
        name: 'Services',
        description: 'Our morning worship and teaching meeting runs from 10.30am until around 11.45am.<br><br>Our afternoon worship and teaching meeting runs from 4:00pm until around 5:30pm.'
    },
    {
        name: 'Youth Club',
        description: 'Chili - our weekly youth club for anyone of secondary school age.<br><br>Boing - our weekly club for children in school years 3 to 6.'
    }
];


/***/ }),

/***/ "./src/app/calendar/calendar.component.css":
/*!*************************************************!*\
  !*** ./src/app/calendar/calendar.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* table {\r\n    width: 100%;\r\n  } */\r\n\r\ntable {\r\n  margin-left:auto; \r\n  margin-right:auto;\r\n}\r\n\r\ntable td {\r\n    color: #7d7d7d;\r\n    text-align: center;\r\n    padding: 10px 20px 10px 20px;\r\n    font-size: 15px;\r\n    line-height: 26px;\r\n}\r\n\r\ntable th {\r\n    color: white;\r\n            text-align: center;\r\n    background-color: rgb(46, 73, 204);\r\n}\r\n\r\ntable  tr:nth-child(n):nth-child(odd) {\r\n    background-color: rgb(226, 244, 247);\r\n}\r\n\r\ntable  tr:nth-child(n):nth-child(even) {\r\n    background-color: rgb(242, 249, 250);\r\n}\r\n\r\ntable tr:first-child th:first-child {\r\n  border-top-left-radius: 6px;\r\n}\r\n\r\ntable tr:first-child th:last-child {\r\n  border-top-right-radius: 6px;\r\n}\r\n\r\ntable tr:last-child td:first-child {\r\n  border-bottom-left-radius: 6px;\r\n}\r\n\r\ntable tr:last-child td:last-child {\r\n  border-bottom-right-radius: 6px;\r\n}\r\n\r\n.mat-form-field {\r\n    font-size: 14px;\r\n    width: 100%;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FsZW5kYXIvY2FsZW5kYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7S0FFSzs7QUFFTDtFQUNFLGdCQUFnQjtFQUNoQixpQkFBaUI7QUFDbkI7O0FBRUU7SUFDRSxjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLDRCQUE0QjtJQUM1QixlQUFlO0lBQ2YsaUJBQWlCO0FBQ3JCOztBQUVFO0lBQ0UsWUFBWTtZQUNKLGtCQUFrQjtJQUMxQixrQ0FBa0M7QUFDdEM7O0FBQ0U7SUFDRSxvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSSxvQ0FBb0M7QUFDeEM7O0FBRUE7RUFDRSwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSwrQkFBK0I7QUFDakM7O0FBRUU7SUFDRSxlQUFlO0lBQ2YsV0FBVztFQUNiIiwiZmlsZSI6InNyYy9hcHAvY2FsZW5kYXIvY2FsZW5kYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIHRhYmxlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH0gKi9cclxuXHJcbnRhYmxlIHtcclxuICBtYXJnaW4tbGVmdDphdXRvOyBcclxuICBtYXJnaW4tcmlnaHQ6YXV0bztcclxufVxyXG5cclxuICB0YWJsZSB0ZCB7XHJcbiAgICBjb2xvcjogIzdkN2Q3ZDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDEwcHggMjBweCAxMHB4IDIwcHg7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjZweDtcclxufVxyXG5cclxuICB0YWJsZSB0aCB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig0NiwgNzMsIDIwNCk7XHJcbn1cclxuICB0YWJsZSAgdHI6bnRoLWNoaWxkKG4pOm50aC1jaGlsZChvZGQpIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjYsIDI0NCwgMjQ3KTtcclxufVxyXG5cclxudGFibGUgIHRyOm50aC1jaGlsZChuKTpudGgtY2hpbGQoZXZlbikge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MiwgMjQ5LCAyNTApO1xyXG59XHJcblxyXG50YWJsZSB0cjpmaXJzdC1jaGlsZCB0aDpmaXJzdC1jaGlsZCB7XHJcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNnB4O1xyXG59XHJcblxyXG50YWJsZSB0cjpmaXJzdC1jaGlsZCB0aDpsYXN0LWNoaWxkIHtcclxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNnB4O1xyXG59XHJcblxyXG50YWJsZSB0cjpsYXN0LWNoaWxkIHRkOmZpcnN0LWNoaWxkIHtcclxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA2cHg7XHJcbn1cclxuXHJcbnRhYmxlIHRyOmxhc3QtY2hpbGQgdGQ6bGFzdC1jaGlsZCB7XHJcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDZweDtcclxufVxyXG5cclxuICAubWF0LWZvcm0tZmllbGQge1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/calendar/calendar.component.html":
/*!**************************************************!*\
  !*** ./src/app/calendar/calendar.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"divWithMargin\">\r\n\r\n  <h1>\r\n    Weekly Programme\r\n  </h1>\r\n\r\n  <mat-form-field>\r\n    <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\r\n  </mat-form-field>\r\n\r\n  <table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">\r\n\r\n    <!-- Symbol Column -->\r\n    <ng-container matColumnDef=\"day\">\r\n      <th mat-header-cell *matHeaderCellDef>\r\n        <mat-icon>calendar_today</mat-icon>\r\n      </th>\r\n      <td mat-cell *matCellDef=\"let element\"> {{element.day}} </td>\r\n    </ng-container>\r\n\r\n    <!-- Name Column -->\r\n    <ng-container matColumnDef=\"timeStart\">\r\n      <th mat-header-cell *matHeaderCellDef>\r\n        <!-- <mat-icon>access_time</mat-icon>  -->\r\n        <mat-icon>timer</mat-icon>\r\n      </th>\r\n      <td mat-cell *matCellDef=\"let element\"> {{element.timeStart.friendly}} </td>\r\n    </ng-container>\r\n\r\n    <!-- Weight Column -->\r\n    <ng-container matColumnDef=\"timeEnd\">\r\n      <th mat-header-cell *matHeaderCellDef>\r\n        <mat-icon>timer_off</mat-icon>\r\n        <!-- <mat-icon>timelapse</mat-icon>  -->\r\n\r\n      </th>\r\n      <td mat-cell *matCellDef=\"let element\"> {{element.timeEnd.friendly}} </td>\r\n    </ng-container>\r\n\r\n    <!-- Position Column -->\r\n    <ng-container matColumnDef=\"name\">\r\n      <th mat-header-cell *matHeaderCellDef>\r\n        <mat-icon>book</mat-icon>\r\n      </th>\r\n      <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\r\n    </ng-container>\r\n\r\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n  </table>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/calendar/calendar.component.ts":
/*!************************************************!*\
  !*** ./src/app/calendar/calendar.component.ts ***!
  \************************************************/
/*! exports provided: CalendarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarComponent", function() { return CalendarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _weekly_calendar_events_repo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../weekly-calendar-events-repo */ "./src/app/weekly-calendar-events-repo.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");




var CalendarComponent = /** @class */ (function () {
    function CalendarComponent() {
        this.displayedColumns = ['day', 'timeStart', 'timeEnd', 'name'];
    }
    CalendarComponent.prototype.ngOnInit = function () {
        this.events = new _weekly_calendar_events_repo__WEBPACK_IMPORTED_MODULE_2__["WeeklyCalendarEventsRepo"]().events;
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](this.events);
    };
    CalendarComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    };
    CalendarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-calendar',
            template: __webpack_require__(/*! ./calendar.component.html */ "./src/app/calendar/calendar.component.html"),
            styles: [__webpack_require__(/*! ./calendar.component.css */ "./src/app/calendar/calendar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CalendarComponent);
    return CalendarComponent;
}());



/***/ }),

/***/ "./src/app/contact-us/contact-us.component.css":
/*!*****************************************************!*\
  !*** ./src/app/contact-us/contact-us.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-container {\r\n    display: flex;\r\n    flex-direction: column;\r\n  }\r\n  \r\n  .example-container > * {\r\n    width: 60%;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdC11cy9jb250YWN0LXVzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0VBQ3hCOztFQUVBO0lBQ0UsVUFBVTtFQUNaIiwiZmlsZSI6InNyYy9hcHAvY29udGFjdC11cy9jb250YWN0LXVzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhhbXBsZS1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgfVxyXG4gIFxyXG4gIC5leGFtcGxlLWNvbnRhaW5lciA+ICoge1xyXG4gICAgd2lkdGg6IDYwJTtcclxuICB9Il19 */"

/***/ }),

/***/ "./src/app/contact-us/contact-us.component.html":
/*!******************************************************!*\
  !*** ./src/app/contact-us/contact-us.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"divWithMargin\">\n  <h1>\n    Contact Form\n  </h1>\n\n  <div class=\"example-container\">\n    <mat-form-field>\n      <input matInput placeholder=\"Enter your email\" [formControl]=\"email\" required>\n      <mat-error *ngIf=\"email.invalid\">{{getEmailErrorMessage()}}</mat-error>\n    </mat-form-field>\n\n    <mat-form-field>\n      <input matInput placeholder=\"Enter your name\" [formControl]=\"name\" required>\n      <mat-error *ngIf=\"name.invalid\">{{getNameErrorMessage()}}</mat-error>\n    </mat-form-field>\n\n    <mat-form-field>\n      <input matInput placeholder=\"Enter subject\" [formControl]=\"subject\" required>\n      <mat-error *ngIf=\"subject.invalid\">{{getSubjectErrorMessage()}}</mat-error>\n    </mat-form-field>\n\n    <mat-form-field>\n      <textarea matInput placeholder=\"Message\" [formControl]=\"message\" required></textarea>\n      <mat-error *ngIf=\"message.invalid\">{{getMessageErrorMessage()}}</mat-error>\n    </mat-form-field>\n\n\n  </div>\n<br>\n  <button mat-button>Submit</button>\n  <p>By using this form you consent to the details provided being emailed to the church.</p>\n\n\n</div>"

/***/ }),

/***/ "./src/app/contact-us/contact-us.component.ts":
/*!****************************************************!*\
  !*** ./src/app/contact-us/contact-us.component.ts ***!
  \****************************************************/
/*! exports provided: ContactUsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactUsComponent", function() { return ContactUsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");



var ContactUsComponent = /** @class */ (function () {
    function ContactUsComponent() {
        this.email = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]);
        this.name = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(4)]);
        this.subject = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(4)]);
        this.message = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(10)]);
    }
    ContactUsComponent.prototype.ngOnInit = function () {
    };
    ContactUsComponent.prototype.getEmailErrorMessage = function () {
        return this.email.hasError('required') ? 'You must enter a value' :
            this.email.hasError('email') ? 'Not a valid email' : '';
    };
    ContactUsComponent.prototype.getNameErrorMessage = function () {
        return this.name.hasError('required') ? 'You must enter a name' : '';
    };
    ContactUsComponent.prototype.getSubjectErrorMessage = function () {
        return this.subject.hasError('required') ? 'You must enter a subject' : '';
    };
    ContactUsComponent.prototype.getMessageErrorMessage = function () {
        return this.message.hasError('required') ? 'You must enter a message' : '';
    };
    ContactUsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contact-us',
            template: __webpack_require__(/*! ./contact-us.component.html */ "./src/app/contact-us/contact-us.component.html"),
            styles: [__webpack_require__(/*! ./contact-us.component.css */ "./src/app/contact-us/contact-us.component.css")]
        })
    ], ContactUsComponent);
    return ContactUsComponent;
}());



/***/ }),

/***/ "./src/app/extensions.ts":
/*!*******************************!*\
  !*** ./src/app/extensions.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

//don't redefine if it's already there
if (!String.prototype.hasOwnProperty('toFirstLetterUpperCase')) {
    String.prototype.toFirstLetterUpperCase = function () {
        var chars;
        chars = '';
        for (var index = 0; index < this.length; index++) {
            var element = this[index];
            if (index === 0)
                chars += element.toUpperCase();
            else
                chars += element;
        }
        return chars;
    };
}


/***/ }),

/***/ "./src/app/home-groups/home-groups.component.css":
/*!*******************************************************!*\
  !*** ./src/app/home-groups/home-groups.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUtZ3JvdXBzL2hvbWUtZ3JvdXBzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/home-groups/home-groups.component.html":
/*!********************************************************!*\
  !*** ./src/app/home-groups/home-groups.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"divWithMargin\">\n\n<h1>\n  Home Groups\n</h1>\n\n<p>\n  Growth groups are at the heart of our community life together.\n  We meet each week in smaller groups to study God’s word the Bible, talk about life and pray together.\n</p>\n\n<mat-divider></mat-divider>\n\n<mat-list>\n  <h3 mat-subheader>TUESDAYS</h3>\n  <mat-list-item>\n    <mat-icon mat-list-icon>group</mat-icon>\n    <h4 mat-line>Paul & Margo Shaddick</h4>\n    <p mat-line> 8PM</p>\n  </mat-list-item>\n\n  <mat-list-item>\n    <mat-icon mat-list-icon>group</mat-icon>\n    <h4 mat-line>Tim & Amy Sunderland</h4>\n    <p mat-line> 8PM</p>\n  </mat-list-item>\n\n  <mat-list-item>\n    <mat-icon mat-list-icon>group</mat-icon>\n    <h4 mat-line>Peter & Winsome Muir</h4>\n    <p mat-line> 8PM</p>\n  </mat-list-item>\n\n  <mat-list-item>\n    <mat-icon mat-list-icon>group</mat-icon>\n    <h4 mat-line>Erick & Chibesa Swere</h4>\n    <p mat-line> 8PM</p>\n  </mat-list-item>\n\n  <mat-list-item>\n    <mat-icon mat-list-icon>group</mat-icon>\n    <h4 mat-line>Dave & Jenny Pickard</h4>\n    <p mat-line> 8PM</p>\n  </mat-list-item>\n\n  <mat-divider></mat-divider>\n  \n    <h3 mat-subheader>WEDNESDAYS</h3>\n    <mat-list-item>\n      <mat-icon mat-list-icon>group</mat-icon>\n      <h4 mat-line>Peter Shelley</h4>\n      <p mat-line> 7.30PM</p>\n    </mat-list-item>\n\n</mat-list>\n\n</div>"

/***/ }),

/***/ "./src/app/home-groups/home-groups.component.ts":
/*!******************************************************!*\
  !*** ./src/app/home-groups/home-groups.component.ts ***!
  \******************************************************/
/*! exports provided: HomeGroupsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeGroupsComponent", function() { return HomeGroupsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeGroupsComponent = /** @class */ (function () {
    function HomeGroupsComponent() {
    }
    HomeGroupsComponent.prototype.ngOnInit = function () {
    };
    HomeGroupsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home-groups',
            template: __webpack_require__(/*! ./home-groups.component.html */ "./src/app/home-groups/home-groups.component.html"),
            styles: [__webpack_require__(/*! ./home-groups.component.css */ "./src/app/home-groups/home-groups.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeGroupsComponent);
    return HomeGroupsComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media only screen and (min-height: 300px){\r\n    #mainTitleDiv {\r\n        background-color: grey;\r\n        background: url('main.jpg');\r\n        background-repeat: no-repeat;\r\n        background-position: center;\r\n        background-size: cover;\r\n        height: calc(100vh - var(--navbarHeight));\r\n        line-height: calc(100vh - var(--navbarHeight));\r\n        text-align:center\r\n        }\r\n    }\r\n    \r\n    @media only screen and (max-height: 299px){\r\n        #mainTitleDiv {\r\n            background-color: grey;\r\n            background: url('main.jpg');\r\n            background-repeat: no-repeat;\r\n            background-position: center;\r\n            background-size: cover;\r\n            height: auto;\r\n            line-height: auto;\r\n            text-align:center;\r\n        }\r\n    }\r\n    \r\n    #mainTitleDiv h1 {\r\n        line-height: 1.5;\r\n        display: inline-block;\r\n        vertical-align: middle;\r\n    \r\n        margin: 0px 0px 0px 0px;\r\n        color: white;\r\n        font-size: 60px !important;\r\n    }\r\n    \r\n    @media only screen and (min-height: 300px){\r\n    #ourVisionDiv{\r\n        line-height: 100vh;\r\n        height: 100vh;\r\n        text-align: center;\r\n        }\r\n    }\r\n    \r\n    @media only screen and (max-height: 299px){\r\n        #ourVisionDiv{\r\n            line-height: auto;\r\n            height: auto;\r\n            text-align: center;\r\n        }\r\n    }\r\n    \r\n    #ourVisionDiv h1 {\r\n        line-height: 1.5;\r\n        display: inline-block;\r\n        vertical-align: middle;\r\n    \r\n        color: black;\r\n        font-family: Avenir-Book, Helvetica Neue, Helvetica, Arial !important;\r\n        font-size: 40px !important;\r\n        font-weight: 700;\r\n        letter-spacing: 1px;\r\n        text-transform: uppercase;\r\n    }\r\n    \r\n    @media only screen and (min-height: 300px){\r\n        #whoWeAreDiv{\r\n            line-height: 100vh;\r\n            height: 100vh;\r\n            text-align: center;\r\n            background-color: black;\r\n        }\r\n    }\r\n    \r\n    @media only screen and (max-height: 299px){\r\n        #whoWeAreDiv{\r\n            line-height: auto;\r\n            height: auto;\r\n            text-align: center;\r\n            background-color: black;\r\n        }\r\n    }\r\n    \r\n    #whoWeAreDiv h1 {\r\n        line-height: 1.5;\r\n        display: inline-block;\r\n        vertical-align: middle;\r\n    \r\n        font-family: Avenir-Book, Helvetica Neue, Helvetica, Arial !important;\r\n        font-size: 24px !important;\r\n        font-weight: 300;\r\n        letter-spacing: 1px;\r\n        color: white;\r\n    }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSTtRQUNJLHNCQUFzQjtRQUN0QiwyQkFBbUQ7UUFDbkQsNEJBQTRCO1FBQzVCLDJCQUEyQjtRQUMzQixzQkFBc0I7UUFDdEIseUNBQXlDO1FBQ3pDLDhDQUE4QztRQUM5QztRQUNBO0lBQ0o7O0lBRUE7UUFDSTtZQUNJLHNCQUFzQjtZQUN0QiwyQkFBbUQ7WUFDbkQsNEJBQTRCO1lBQzVCLDJCQUEyQjtZQUMzQixzQkFBc0I7WUFDdEIsWUFBWTtZQUNaLGlCQUFpQjtZQUNqQixpQkFBaUI7UUFDckI7SUFDSjs7SUFFQTtRQUNJLGdCQUFnQjtRQUNoQixxQkFBcUI7UUFDckIsc0JBQXNCOztRQUV0Qix1QkFBdUI7UUFDdkIsWUFBWTtRQUNaLDBCQUEwQjtJQUM5Qjs7SUFFQTtJQUNBO1FBQ0ksa0JBQWtCO1FBQ2xCLGFBQWE7UUFDYixrQkFBa0I7UUFDbEI7SUFDSjs7SUFFQTtRQUNJO1lBQ0ksaUJBQWlCO1lBQ2pCLFlBQVk7WUFDWixrQkFBa0I7UUFDdEI7SUFDSjs7SUFFQTtRQUNJLGdCQUFnQjtRQUNoQixxQkFBcUI7UUFDckIsc0JBQXNCOztRQUV0QixZQUFZO1FBQ1oscUVBQXFFO1FBQ3JFLDBCQUEwQjtRQUMxQixnQkFBZ0I7UUFDaEIsbUJBQW1CO1FBQ25CLHlCQUF5QjtJQUM3Qjs7SUFFQTtRQUNJO1lBQ0ksa0JBQWtCO1lBQ2xCLGFBQWE7WUFDYixrQkFBa0I7WUFDbEIsdUJBQXVCO1FBQzNCO0lBQ0o7O0lBRUE7UUFDSTtZQUNJLGlCQUFpQjtZQUNqQixZQUFZO1lBQ1osa0JBQWtCO1lBQ2xCLHVCQUF1QjtRQUMzQjtJQUNKOztJQUdBO1FBQ0ksZ0JBQWdCO1FBQ2hCLHFCQUFxQjtRQUNyQixzQkFBc0I7O1FBRXRCLHFFQUFxRTtRQUNyRSwwQkFBMEI7UUFDMUIsZ0JBQWdCO1FBQ2hCLG1CQUFtQjtRQUNuQixZQUFZO0lBQ2hCIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4taGVpZ2h0OiAzMDBweCl7XHJcbiAgICAjbWFpblRpdGxlRGl2IHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHVybChcIi4uLy4uLy4uL3NyYy9hc3NldHMvaW1nL21haW4uanBnXCIpO1xyXG4gICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAgICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gdmFyKC0tbmF2YmFySGVpZ2h0KSk7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IGNhbGMoMTAwdmggLSB2YXIoLS1uYXZiYXJIZWlnaHQpKTtcclxuICAgICAgICB0ZXh0LWFsaWduOmNlbnRlclxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LWhlaWdodDogMjk5cHgpe1xyXG4gICAgICAgICNtYWluVGl0bGVEaXYge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi8uLi9zcmMvYXNzZXRzL2ltZy9tYWluLmpwZ1wiKTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgICNtYWluVGl0bGVEaXYgaDEge1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICBcclxuICAgICAgICBtYXJnaW46IDBweCAwcHggMHB4IDBweDtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgZm9udC1zaXplOiA2MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi1oZWlnaHQ6IDMwMHB4KXtcclxuICAgICNvdXJWaXNpb25EaXZ7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEwMHZoO1xyXG4gICAgICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LWhlaWdodDogMjk5cHgpe1xyXG4gICAgICAgICNvdXJWaXNpb25EaXZ7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgICNvdXJWaXNpb25EaXYgaDEge1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICBcclxuICAgICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IEF2ZW5pci1Cb29rLCBIZWx2ZXRpY2EgTmV1ZSwgSGVsdmV0aWNhLCBBcmlhbCAhaW1wb3J0YW50O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogNDBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4taGVpZ2h0OiAzMDBweCl7XHJcbiAgICAgICAgI3dob1dlQXJlRGl2e1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMTAwdmg7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtaGVpZ2h0OiAyOTlweCl7XHJcbiAgICAgICAgI3dob1dlQXJlRGl2e1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogYXV0bztcclxuICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgXHJcbiAgICAjd2hvV2VBcmVEaXYgaDEge1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICBcclxuICAgICAgICBmb250LWZhbWlseTogQXZlbmlyLUJvb2ssIEhlbHZldGljYSBOZXVlLCBIZWx2ZXRpY2EsIEFyaWFsICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgZm9udC1zaXplOiAyNHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIH0iXX0= */"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"mainTitleDiv\">\n    <h1>\n      Welcome to BSEC!\n    </h1>\n\n  </div>\n\n  <div id=\"ourVisionDiv\">\n    <h1>\n      TOGETHER WE WANT TO KNOW GOD AND MAKE HIM KNOWN..\n    </h1>\n  </div>\n\n  <div id=\"whoWeAreDiv\">\n      <h1>\n      We are a gathering of Bible-believing Christians. We seek to follow Jesus in obedience to God’s word through the power of the Holy Spirit. We are committed to the following truths of historic biblical faith.\n    </h1>\n  </div>\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var HomeComponent = /** @class */ (function () {
    function HomeComponent(sanitizer, _Activatedroute, router) {
        this.sanitizer = sanitizer;
        this._Activatedroute = _Activatedroute;
        this.router = router;
        this.router.routeReuseStrategy.shouldReuseRoute = function () { return false; };
    }
    HomeComponent.prototype.ngOnInit = function () {
        var navbar = document.querySelectorAll('.navbar')[0];
        this.navbarHeight = navbar.offsetHeight;
        this.id = this._Activatedroute.snapshot.params['id'];
    };
    HomeComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        setTimeout(function () {
            if (_this.id === '1') {
                document.querySelectorAll('#ourVisionDiv')[0].scrollIntoView({ behavior: "smooth", block: "start" });
            }
            else if (_this.id === '2') {
                document.querySelectorAll('#whoWeAreDiv')[0].scrollIntoView({ behavior: "smooth", block: "start" });
            }
        }, 500);
    };
    Object.defineProperty(HomeComponent.prototype, "valueAsStyle", {
        get: function () {
            return this.sanitizer.bypassSecurityTrustStyle("--navbarHeight: " + this.navbarHeight + "px");
        },
        enumerable: true,
        configurable: true
    });
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("ourVisionDiv"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], HomeComponent.prototype, "MyProp", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])("attr.style"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent.prototype, "valueAsStyle", null);
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/menu-bar/menu-bar.component.css":
/*!*************************************************!*\
  !*** ./src/app/menu-bar/menu-bar.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".border-bottom {\r\n    border-bottom: solid black 1px;\r\n}\r\n\r\na {\r\n   text-decoration:none;\r\n   color: inherit;\r\n   font: inherit;\r\n}\r\n\r\ndiv{\r\n    background-color: black;\r\n    color: white;\r\n}\r\n\r\n.navbar {\r\n    position: sticky;\r\n    position: -webkit-sticky;\r\n    top: 0; /* Sets the sticky toolbar to be on top */\r\n    z-index: 1000; /* Ensure that your app's content doesn't overlap the toolbar */\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVudS1iYXIvbWVudS1iYXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLDhCQUE4QjtBQUNsQzs7QUFFQTtHQUNHLG9CQUFvQjtHQUNwQixjQUFjO0dBQ2QsYUFBYTtBQUNoQjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixZQUFZO0FBQ2hCOztBQUdBO0lBQ0ksZ0JBQWdCO0lBQ2hCLHdCQUF3QjtJQUN4QixNQUFNLEVBQUUseUNBQXlDO0lBQ2pELGFBQWEsRUFBRSwrREFBK0Q7QUFDbEYiLCJmaWxlIjoic3JjL2FwcC9tZW51LWJhci9tZW51LWJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJvcmRlci1ib3R0b20ge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogc29saWQgYmxhY2sgMXB4O1xyXG59XHJcblxyXG5hIHtcclxuICAgdGV4dC1kZWNvcmF0aW9uOm5vbmU7XHJcbiAgIGNvbG9yOiBpbmhlcml0O1xyXG4gICBmb250OiBpbmhlcml0O1xyXG59XHJcblxyXG5kaXZ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuXHJcbi5uYXZiYXIge1xyXG4gICAgcG9zaXRpb246IHN0aWNreTtcclxuICAgIHBvc2l0aW9uOiAtd2Via2l0LXN0aWNreTtcclxuICAgIHRvcDogMDsgLyogU2V0cyB0aGUgc3RpY2t5IHRvb2xiYXIgdG8gYmUgb24gdG9wICovXHJcbiAgICB6LWluZGV4OiAxMDAwOyAvKiBFbnN1cmUgdGhhdCB5b3VyIGFwcCdzIGNvbnRlbnQgZG9lc24ndCBvdmVybGFwIHRoZSB0b29sYmFyICovXHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/menu-bar/menu-bar.component.html":
/*!**************************************************!*\
  !*** ./src/app/menu-bar/menu-bar.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"isNavbarSmall === false\" class=\"navbar\">\r\n  <button mat-button [routerLink]=\"['/home']\">BSEC</button>\r\n\r\n  <!--#region Welcome   -->\r\n  <button mat-button [matMenuTriggerFor]=\"welcome\">Welcome</button>\r\n  <mat-menu #welcome=\"matMenu\">\r\n    <button mat-menu-item (click)=\"onWelcomeLinkClick(1)\">Our Vision</button>\r\n    <button mat-menu-item (click)=\"onWelcomeLinkClick(2)\">Who We Are</button>\r\n  </mat-menu>\r\n  <!--#endregion -->\r\n\r\n  <!--#region Whats On   -->\r\n  <button mat-button [matMenuTriggerFor]=\"whatsOn\">Whats On</button>\r\n  <mat-menu #whatsOn=\"matMenu\">\r\n\r\n    <button mat-menu-item (click)=\"onCalendarLinkClick()\">Weekly Events</button>\r\n    <button mat-menu-item  [routerLink]=\"['/event/Upcoming']\">Special Events</button>\r\n    <!-- <button mat-menu-item routerLink=\"/whatsOn\"> This Week</button> -->\r\n    <mat-divider></mat-divider>\r\n    <button mat-menu-item [routerLink]=\"['/event/Home Groups']\">Home Groups</button>\r\n    <button mat-menu-item [routerLink]=\"['/event/Pre School']\">Todler Group</button>\r\n\r\n    <button mat-menu-item [matMenuTriggerFor]=\"services\" [routerLink]=\"['/event/Services']\">Services</button>\r\n    <mat-menu #services=\"matMenu\">\r\n      <button mat-menu-item [routerLink]=\"['/event/services/adults']\">Adults</button>\r\n      <button mat-menu-item [routerLink]=\"['/event/services/kids']\">Kids</button>\r\n    </mat-menu>\r\n\r\n    <button mat-menu-item [routerLink]=\"['/event/Youth Club']\">Youth Clubs</button>\r\n\r\n  \r\n\r\n\r\n  </mat-menu>\r\n\r\n\r\n  <!--#endregion -->\r\n\r\n  <!--#region Find Us   -->\r\n  <button mat-button [matMenuTriggerFor]=\"findUs\">Find Us</button>\r\n  <mat-menu #findUs=\"matMenu\">\r\n    <button mat-menu-item [routerLink]=\"['/ourLocation']\">Our Location</button>\r\n    <button mat-menu-item [routerLink]=\"['/contactUs']\">Contact Us</button>\r\n  </mat-menu>\r\n  <!--#endregion -->\r\n\r\n  <!--#region Resources   -->\r\n  <button mat-button [matMenuTriggerFor]=\"resources\">Resources</button>\r\n  <mat-menu #resources=\"matMenu\">\r\n    <button mat-menu-item>Subscribe</button>\r\n    <button mat-menu-item>Audio Archive</button>\r\n  </mat-menu>\r\n  <!--#endregion -->\r\n</div>\r\n\r\n\r\n<!--#region Hamburger Navigation Bar  -->\r\n\r\n<div *ngIf=\"isNavbarSmall === true\" class=\"navbar\">\r\n  <button mat-button><a routerLink=\"/home\">BSEC</a></button>\r\n\r\n  <button mat-button [matMenuTriggerFor]=\"all\">\r\n    <mat-icon>menu</mat-icon>\r\n  </button>\r\n  <mat-menu #all=\"matMenu\">\r\n    <button mat-menu-item>Our Vision</button>\r\n    <button mat-menu-item class=\"border-bottom\">Who We Are</button>\r\n\r\n    <button mat-menu-item>Events</button>\r\n    <button mat-menu-item>\r\n      <a routerLink=\"/whatsOn\">This Week</a>\r\n    </button>\r\n\r\n    <button mat-menu-item>Adults</button>\r\n    <button mat-menu-item class=\"border-bottom\">Children</button>\r\n\r\n    <button mat-menu-item>Our Location</button>\r\n    <button mat-menu-item class=\"border-bottom\">Contact Information</button>\r\n\r\n    <button mat-menu-item>Subscribe</button>\r\n    <button mat-menu-item>Audio Archive</button>\r\n  </mat-menu>\r\n\r\n  <!--#endregion -->\r\n</div>"

/***/ }),

/***/ "./src/app/menu-bar/menu-bar.component.ts":
/*!************************************************!*\
  !*** ./src/app/menu-bar/menu-bar.component.ts ***!
  \************************************************/
/*! exports provided: MenuBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuBarComponent", function() { return MenuBarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var MenuBarComponent = /** @class */ (function () {
    function MenuBarComponent(router) {
        this.router = router;
    }
    MenuBarComponent.prototype.ngOnInit = function () {
        this.setIsNavbarSmall();
        this.onResize();
    };
    MenuBarComponent.prototype.setIsNavbarSmall = function () {
        this.isNavbarSmall = window.innerWidth < 500;
    };
    MenuBarComponent.prototype.onResize = function () {
        var _this = this;
        window.addEventListener('resize', function (event) {
            _this.setIsNavbarSmall();
        });
    };
    MenuBarComponent.prototype.onWelcomeLinkClick = function (id) {
        if (this.router.url !== "/home/" + id) {
            this.router.navigate(['/home', id]);
        }
        else {
            window.location.href = "/home/" + id;
        }
    };
    MenuBarComponent.prototype.onCalendarLinkClick = function () {
        window.location.href = "/calendar";
    };
    MenuBarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-menu-bar',
            template: __webpack_require__(/*! ./menu-bar.component.html */ "./src/app/menu-bar/menu-bar.component.html"),
            styles: [__webpack_require__(/*! ./menu-bar.component.css */ "./src/app/menu-bar/menu-bar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], MenuBarComponent);
    return MenuBarComponent;
}());



/***/ }),

/***/ "./src/app/our-location/our-location.component.css":
/*!*********************************************************!*\
  !*** ./src/app/our-location/our-location.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-card{\r\n  max-width: 250px;\r\n}\r\n\r\n.container {\r\n  position: relative;\r\n  width: 100%;\r\n  height: 0;\r\n  padding-bottom: 56.25%;\r\n  min-height: 250px;\r\n}\r\n\r\n.video {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n\r\nul{\r\n   padding-left: 0px;\r\n}\r\n\r\nli{\r\n  padding: 10px 0px 0px 0px;\r\n  text-decoration: none;\r\n  list-style: none;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3VyLWxvY2F0aW9uL291ci1sb2NhdGlvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxTQUFTO0VBQ1Qsc0JBQXNCO0VBQ3RCLGlCQUFpQjtBQUNuQjs7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sT0FBTztFQUNQLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUE7R0FDRyxpQkFBaUI7QUFDcEI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIscUJBQXFCO0VBQ3JCLGdCQUFnQjtBQUNsQiIsImZpbGUiOiJzcmMvYXBwL291ci1sb2NhdGlvbi9vdXItbG9jYXRpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLWNhcmR7XHJcbiAgbWF4LXdpZHRoOiAyNTBweDtcclxufVxyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMDtcclxuICBwYWRkaW5nLWJvdHRvbTogNTYuMjUlO1xyXG4gIG1pbi1oZWlnaHQ6IDI1MHB4O1xyXG59XHJcbi52aWRlbyB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxudWx7XHJcbiAgIHBhZGRpbmctbGVmdDogMHB4O1xyXG59XHJcblxyXG5saXtcclxuICBwYWRkaW5nOiAxMHB4IDBweCAwcHggMHB4O1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/our-location/our-location.component.html":
/*!**********************************************************!*\
  !*** ./src/app/our-location/our-location.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"divWithMargin\">\r\n  <h1>\r\n    Our Location\r\n  </h1>\r\n\r\n<mat-card class=\"example-card\">\r\n    <img mat-card-image src=\"assets/img/bsecFront.jpg\" fxLayoutAlign=\"center\">\r\n    <mat-card-content>\r\n        <ul>\r\n            <li> Bradley Stoke Evangelical Church</li>\r\n            <li> Baileys Court Road </li>\r\n            <li> Bradley Stoke</li>\r\n            <li> BS32 8BH </li>\r\n          </ul>\r\n    </mat-card-content>\r\n\r\n\r\n</mat-card>\r\n\r\n<br>\r\n\r\n\r\n\r\n  <div class=\"container\">\r\n    <iframe\r\n      src=\"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d39716.647932392334!2d-2.5471075254394515!3d51.52623150755493!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4871905ec1ccea7f%3A0x533b5aed8db2e752!2sBradley+Stoke+Evangelical+Church!5e0!3m2!1sen!2suk!4v1557158792197!5m2!1sen!2suk\"\r\n      frameborder=\"0\" allowfullscreen class=\"video\"></iframe>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/our-location/our-location.component.ts":
/*!********************************************************!*\
  !*** ./src/app/our-location/our-location.component.ts ***!
  \********************************************************/
/*! exports provided: OurLocationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OurLocationComponent", function() { return OurLocationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var OurLocationComponent = /** @class */ (function () {
    function OurLocationComponent() {
    }
    OurLocationComponent.prototype.ngOnInit = function () {
    };
    OurLocationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-our-location',
            template: __webpack_require__(/*! ./our-location.component.html */ "./src/app/our-location/our-location.component.html"),
            styles: [__webpack_require__(/*! ./our-location.component.css */ "./src/app/our-location/our-location.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], OurLocationComponent);
    return OurLocationComponent;
}());



/***/ }),

/***/ "./src/app/pre-school/pre-school.component.css":
/*!*****************************************************!*\
  !*** ./src/app/pre-school/pre-school.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* mat-grid-tile {\r\n    background-color: red;\r\n} */\r\n\r\nimg{\r\n    /* max-width:100%; */\r\n    /* max-height:100%; */\r\n    max-width:200px;\r\n    max-height:200px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJlLXNjaG9vbC9wcmUtc2Nob29sLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0dBRUc7O0FBRUg7SUFDSSxvQkFBb0I7SUFDcEIscUJBQXFCO0lBQ3JCLGVBQWU7SUFDZixnQkFBZ0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9wcmUtc2Nob29sL3ByZS1zY2hvb2wuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIG1hdC1ncmlkLXRpbGUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xyXG59ICovXHJcblxyXG5pbWd7XHJcbiAgICAvKiBtYXgtd2lkdGg6MTAwJTsgKi9cclxuICAgIC8qIG1heC1oZWlnaHQ6MTAwJTsgKi9cclxuICAgIG1heC13aWR0aDoyMDBweDtcclxuICAgIG1heC1oZWlnaHQ6MjAwcHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pre-school/pre-school.component.html":
/*!******************************************************!*\
  !*** ./src/app/pre-school/pre-school.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"divWithMargin\">\n  <h1>\n    BUSY BEES\n  </h1>\n\n  <h3>\n    Busy Bees is our toddler group for under 5s who live in Bradley Stoke, Little Stoke and Stoke Gifford\n  </h3>\n\n<p>\n  Parents and carers bring their children on Tuesdays from 10 till 11.30 during school term time.\n  If you are new and would like to come, please use this form to ensure there are places available.\n</p>\n   \n          <img src='assets/img/busy-bees-logo-400x400.jpg' alt=\"\">\n    \n\n    \n          <mat-list>\n              <h3 mat-subheader>TUESDAYS 10.00 - 11.30</h3>\n              <mat-list-item>\n                <mat-icon mat-list-icon>group</mat-icon>\n                <p>Start with crafts, painting and lots of toys to share!</p>\n              </mat-list-item>\n              <mat-list-item>\n                <mat-icon mat-list-icon>group</mat-icon>\n                <p>Enjoy drinks and a biscuit, and time to meet others and make new friends.</p>\n              </mat-list-item>\n              <mat-list-item>\n                <mat-icon mat-list-icon>group</mat-icon>\n                <p>There will be a story from the Bible and a song time.</p>\n              </mat-list-item>\n            </mat-list>\n    \n\n</div>"

/***/ }),

/***/ "./src/app/pre-school/pre-school.component.ts":
/*!****************************************************!*\
  !*** ./src/app/pre-school/pre-school.component.ts ***!
  \****************************************************/
/*! exports provided: PreSchoolComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreSchoolComponent", function() { return PreSchoolComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PreSchoolComponent = /** @class */ (function () {
    function PreSchoolComponent() {
        this.tiles = [
            { text: 'One', cols: 3, rows: 1, color: 'lightblue' },
            { text: 'Two', cols: 1, rows: 2, color: 'lightgreen' },
            { text: 'Three', cols: 1, rows: 1, color: 'lightpink' },
            { text: 'Four', cols: 2, rows: 1, color: '#DDBDF1' },
        ];
    }
    PreSchoolComponent.prototype.ngOnInit = function () {
    };
    PreSchoolComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-pre-school',
            template: __webpack_require__(/*! ./pre-school.component.html */ "./src/app/pre-school/pre-school.component.html"),
            styles: [__webpack_require__(/*! ./pre-school.component.css */ "./src/app/pre-school/pre-school.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PreSchoolComponent);
    return PreSchoolComponent;
}());



/***/ }),

/***/ "./src/app/services/services.component.css":
/*!*************************************************!*\
  !*** ./src/app/services/services.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-card-image{\r\n  max-height: 300px;\r\n  max-width: 213px;\r\n  margin-left: 10%;\r\n  /* margin-right: auto;\r\n  width: 50%;\r\n  display: block;  */\r\n}\r\n\r\n.mat-card-content{\r\n  margin-left: 10%;\r\n}\r\n\r\ntable {\r\n    width: 100%;\r\n  }\r\n\r\ntable td {\r\n    color: #7d7d7d;\r\n    text-align: center;\r\n    padding: 10px 20px 10px 20px;\r\n    font-size: 15px;\r\n    line-height: 26px;\r\n}\r\n\r\ntable th {\r\n    color: white;\r\n            text-align: center;\r\n    background-color: rgb(46, 73, 204);\r\n}\r\n\r\ntable  tr:nth-child(n+1):nth-child(odd) {\r\n    background-color: rgb(226, 244, 247);\r\n}\r\n\r\ntable  tr:nth-child(n+1):nth-child(even) {\r\n    background-color: rgb(242, 249, 250);\r\n}\r\n\r\ntable tr:first-child th:first-child {\r\n  border-top-left-radius: 6px;\r\n}\r\n\r\ntable tr:first-child th:last-child {\r\n  border-top-right-radius: 6px;\r\n}\r\n\r\ntable tr:last-child td:first-child {\r\n  border-bottom-left-radius: 6px;\r\n}\r\n\r\ntable tr:last-child td:last-child {\r\n  border-bottom-right-radius: 6px;\r\n}\r\n\r\n.mat-form-field {\r\n    font-size: 14px;\r\n    width: 100%;\r\n  }\r\n\r\na {\r\n    color: inherit;\r\n    font-family: inherit;\r\n    text-decoration: none;\r\n  }\r\n\r\na:hover{\r\n    font-weight: bolder;\r\n    font-size: 16px;\r\n  }\r\n\r\n@media only screen and (max-width: 599px){\r\n    .example-card {\r\n      max-width: 400px;\r\n    }\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VydmljZXMvc2VydmljZXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCOztvQkFFa0I7QUFDcEI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7SUFDSSxXQUFXO0VBQ2I7O0FBRUE7SUFDRSxjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLDRCQUE0QjtJQUM1QixlQUFlO0lBQ2YsaUJBQWlCO0FBQ3JCOztBQUVFO0lBQ0UsWUFBWTtZQUNKLGtCQUFrQjtJQUMxQixrQ0FBa0M7QUFDdEM7O0FBQ0U7SUFDRSxvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSSxvQ0FBb0M7QUFDeEM7O0FBRUE7RUFDRSwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSwrQkFBK0I7QUFDakM7O0FBRUU7SUFDRSxlQUFlO0lBQ2YsV0FBVztFQUNiOztBQUVBO0lBQ0UsY0FBYztJQUNkLG9CQUFvQjtJQUNwQixxQkFBcUI7RUFDdkI7O0FBRUE7SUFDRSxtQkFBbUI7SUFDbkIsZUFBZTtFQUNqQjs7QUFHQTtJQUNFO01BQ0UsZ0JBQWdCO0lBQ2xCO0VBQ0YiLCJmaWxlIjoic3JjL2FwcC9zZXJ2aWNlcy9zZXJ2aWNlcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hdC1jYXJkLWltYWdle1xyXG4gIG1heC1oZWlnaHQ6IDMwMHB4O1xyXG4gIG1heC13aWR0aDogMjEzcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDEwJTtcclxuICAvKiBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgd2lkdGg6IDUwJTtcclxuICBkaXNwbGF5OiBibG9jazsgICovXHJcbn1cclxuXHJcbi5tYXQtY2FyZC1jb250ZW50e1xyXG4gIG1hcmdpbi1sZWZ0OiAxMCU7XHJcbn1cclxuXHJcbnRhYmxlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgdGFibGUgdGQge1xyXG4gICAgY29sb3I6ICM3ZDdkN2Q7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHggMTBweCAyMHB4O1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDI2cHg7XHJcbn1cclxuXHJcbiAgdGFibGUgdGgge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNDYsIDczLCAyMDQpO1xyXG59XHJcbiAgdGFibGUgIHRyOm50aC1jaGlsZChuKzEpOm50aC1jaGlsZChvZGQpIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjYsIDI0NCwgMjQ3KTtcclxufVxyXG5cclxudGFibGUgIHRyOm50aC1jaGlsZChuKzEpOm50aC1jaGlsZChldmVuKSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQyLCAyNDksIDI1MCk7XHJcbn1cclxuXHJcbnRhYmxlIHRyOmZpcnN0LWNoaWxkIHRoOmZpcnN0LWNoaWxkIHtcclxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA2cHg7XHJcbn1cclxuXHJcbnRhYmxlIHRyOmZpcnN0LWNoaWxkIHRoOmxhc3QtY2hpbGQge1xyXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA2cHg7XHJcbn1cclxuXHJcbnRhYmxlIHRyOmxhc3QtY2hpbGQgdGQ6Zmlyc3QtY2hpbGQge1xyXG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDZweDtcclxufVxyXG5cclxudGFibGUgdHI6bGFzdC1jaGlsZCB0ZDpsYXN0LWNoaWxkIHtcclxuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNnB4O1xyXG59XHJcbiAgXHJcbiAgLm1hdC1mb3JtLWZpZWxkIHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgYSB7XHJcbiAgICBjb2xvcjogaW5oZXJpdDtcclxuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIH1cclxuXHJcbiAgYTpob3ZlcntcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgfVxyXG5cclxuICBcclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU5OXB4KXtcclxuICAgIC5leGFtcGxlLWNhcmQge1xyXG4gICAgICBtYXgtd2lkdGg6IDQwMHB4O1xyXG4gICAgfVxyXG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/services/services.component.html":
/*!**************************************************!*\
  !*** ./src/app/services/services.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"divWithMargin\">\r\n\r\n  <h1 id=\"accordionTest\">\r\n    Services\r\n  </h1>\r\n\r\n  <div *ngIf=\"!servicesByGroup\">\r\n    <div *ngFor=\"let groupName of serviceGroupNames\">\r\n      <mat-accordion class=\"example-headers-align\">\r\n        <mat-expansion-panel expanded=\"true\">\r\n          <mat-expansion-panel-header>\r\n            <mat-panel-title>\r\n              <a matLine\r\n                routerLink=\"/event/services/{{groupName.toLowerCase()}}\">{{groupName.toFirstLetterUpperCase()}}</a>\r\n            </mat-panel-title>\r\n          </mat-expansion-panel-header>\r\n\r\n          <p *ngIf=\"serviceDescriptions[groupName]\" [innerHTML]=\"serviceDescriptions[groupName]\"></p>\r\n\r\n        </mat-expansion-panel>\r\n      </mat-accordion>\r\n    </div>\r\n  </div>\r\n\r\n  <div *ngIf=\"servicesByGroup && serviceGroupName.toLowerCase() === 'adults'\">\r\n    <h2>{{serviceGroupName.toFirstLetterUpperCase()}}</h2>\r\n\r\n    <mat-form-field>\r\n      <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\r\n    </mat-form-field>\r\n\r\n    <div class=\"mat-elevation-z8\">\r\n      <table mat-table [dataSource]=\"dataSource\">\r\n\r\n        <ng-container matColumnDef=\"date\">\r\n          <th mat-header-cell *matHeaderCellDef>\r\n            <!-- date   -->\r\n            <mat-icon>calendar_today</mat-icon>\r\n          </th>\r\n          <td mat-cell *matCellDef=\"let element\"> {{element.date | date:'MM/dd/yyyy'}} </td>\r\n        </ng-container>\r\n\r\n        <ng-container matColumnDef=\"title\">\r\n          <th mat-header-cell *matHeaderCellDef>\r\n            <!-- title -->\r\n            <mat-icon>library_books</mat-icon>\r\n          </th>\r\n          <td mat-cell *matCellDef=\"let element\"> {{element.title}} </td>\r\n        </ng-container>\r\n\r\n        <ng-container matColumnDef=\"book\">\r\n          <th mat-header-cell *matHeaderCellDef>\r\n            <mat-icon>edit</mat-icon>\r\n          </th>\r\n          <td mat-cell *matCellDef=\"let element\"> {{element.book}} </td>\r\n        </ng-container>\r\n\r\n        <ng-container matColumnDef=\"who\">\r\n          <th mat-header-cell *matHeaderCellDef>\r\n            <mat-icon>person</mat-icon>\r\n          </th>\r\n          <td mat-cell *matCellDef=\"let element\"> {{element.who}} </td>\r\n        </ng-container>\r\n\r\n        <ng-container matColumnDef=\"listen\">\r\n          <th mat-header-cell *matHeaderCellDef>\r\n              <mat-icon>play_arrow</mat-icon> \r\n          </th>\r\n          <td mat-cell *matCellDef=\"let element\"> {{element.listen}} </td>\r\n        </ng-container>\r\n\r\n        <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n        <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n      </table>\r\n\r\n      <mat-paginator [pageSizeOptions]=\"[2, 4, 8]\" showFirstLastButtons></mat-paginator>\r\n    </div>\r\n  </div>\r\n\r\n  <div *ngIf=\"servicesByGroup && serviceGroupName.toLowerCase() === 'kids'\">\r\n    <h2>{{serviceGroupName.toFirstLetterUpperCase()}}</h2>\r\n    <mat-card class=\"example-card\">\r\n      <mat-card-header>\r\n        <div mat-card-avatar class=\"example-header-image\"></div>\r\n\r\n        <mat-card-title>{{subtitle}}</mat-card-title>\r\n        <mat-card-subtitle></mat-card-subtitle>\r\n      </mat-card-header>\r\n      <img mat-card-image src={{childrensTabImageUrl}} alt=\"\" fxLayoutAlign=\"center\">\r\n      <mat-card-content>\r\n        <p>\r\n          {{childrensTabContent}}\r\n        </p>\r\n      </mat-card-content>\r\n\r\n      <mat-card-actions>\r\n        <button mat-button (click)=\"updateChildren('JAM')\">JAM</button>\r\n        <button mat-button (click)=\"updateChildren('KFC')\">KFC</button>\r\n      </mat-card-actions>\r\n    </mat-card>\r\n\r\n  </div>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/services/services.component.ts":
/*!************************************************!*\
  !*** ./src/app/services/services.component.ts ***!
  \************************************************/
/*! exports provided: ServicesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesComponent", function() { return ServicesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ServicesRepo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ServicesRepo */ "./src/app/ServicesRepo.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");






var ServicesComponent = /** @class */ (function () {
    function ServicesComponent(router, route, cdr) {
        this.router = router;
        this.route = route;
        this.cdr = cdr;
        this.displayedColumns = ['date', 'title', 'book', 'who', 'listen'];
        this.router.routeReuseStrategy.shouldReuseRoute = function () { return false; };
        this.servicesByGroupRepo = new _ServicesRepo__WEBPACK_IMPORTED_MODULE_3__["ServicesRepo"]();
    }
    ServicesComponent.prototype.ngOnInit = function () {
        this.serviceGroupName = this.route.snapshot.paramMap.get('type');
        if (this.serviceGroupName !== undefined && this.serviceGroupName !== null && this.serviceGroupName !== "") {
            this.servicesByGroup = this.servicesByGroupRepo.getService();
        }
        this.serviceDescriptions = this.servicesByGroupRepo.getServiceDescriptions();
        this.serviceGroupNames = Object.keys(this.serviceDescriptions);
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](this.servicesByGroup);
        // this.cdr.detectChanges();
        this.dataSource.paginator = this.paginator;
        this.updateChildren("JAM");
    };
    ServicesComponent.prototype.ngAfterViewInit = function () {
        this.dataSource.paginator = this.paginator;
    };
    ServicesComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    };
    ServicesComponent.prototype.updateChildren = function (title) {
        if (title === 'JAM') {
            this.childrensTabImageUrl = "assets/img/Jam.jpg";
            this.childrensTabContent = "We aim to inspire our 4-7s to love and know God. We do a lots of activities each Sunday morning to make sure all the children have a variety of ways of hearing the message that God loves them and they should love him too.";
            this.subtitle = "4 - 7 year olds";
        }
        else if (title === 'KFC') {
            this.childrensTabImageUrl = "assets/img/kfc.jpg";
            this.childrensTabContent = "Activities are designed to be thought provoking and challenging \u2013 and fun!";
            this.subtitle = "7 - 11 year olds";
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"])
    ], ServicesComponent.prototype, "paginator", void 0);
    ServicesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-services',
            template: __webpack_require__(/*! ./services.component.html */ "./src/app/services/services.component.html"),
            styles: [__webpack_require__(/*! ./services.component.css */ "./src/app/services/services.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
    ], ServicesComponent);
    return ServicesComponent;
}());



/***/ }),

/***/ "./src/app/time.ts":
/*!*************************!*\
  !*** ./src/app/time.ts ***!
  \*************************/
/*! exports provided: Time */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Time", function() { return Time; });
var Time = /** @class */ (function () {
    function Time(hour, minute) {
        this.hour = hour;
        this.minute = minute;
        var friendly = ("0" + this.hour).slice(-2) + ":" + ("0" + this.minute).slice(-2);
        this.friendly = friendly === "00:00" ? "" : friendly;
    }
    return Time;
}());



/***/ }),

/***/ "./src/app/upcoming-events/upcoming-events.component.css":
/*!***************************************************************!*\
  !*** ./src/app/upcoming-events/upcoming-events.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VwY29taW5nLWV2ZW50cy91cGNvbWluZy1ldmVudHMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/upcoming-events/upcoming-events.component.html":
/*!****************************************************************!*\
  !*** ./src/app/upcoming-events/upcoming-events.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"divWithMargin\">\n  <h1>\n  Upcoming Events\n</h1>\n</div>"

/***/ }),

/***/ "./src/app/upcoming-events/upcoming-events.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/upcoming-events/upcoming-events.component.ts ***!
  \**************************************************************/
/*! exports provided: UpcomingEventsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpcomingEventsComponent", function() { return UpcomingEventsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var UpcomingEventsComponent = /** @class */ (function () {
    function UpcomingEventsComponent() {
    }
    UpcomingEventsComponent.prototype.ngOnInit = function () {
    };
    UpcomingEventsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-upcoming-events',
            template: __webpack_require__(/*! ./upcoming-events.component.html */ "./src/app/upcoming-events/upcoming-events.component.html"),
            styles: [__webpack_require__(/*! ./upcoming-events.component.css */ "./src/app/upcoming-events/upcoming-events.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], UpcomingEventsComponent);
    return UpcomingEventsComponent;
}());



/***/ }),

/***/ "./src/app/weekly-calendar-events-repo.ts":
/*!************************************************!*\
  !*** ./src/app/weekly-calendar-events-repo.ts ***!
  \************************************************/
/*! exports provided: WeeklyCalendarEventsRepo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeeklyCalendarEventsRepo", function() { return WeeklyCalendarEventsRepo; });
/* harmony import */ var _time__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./time */ "./src/app/time.ts");

var WeeklyCalendarEventsRepo = /** @class */ (function () {
    function WeeklyCalendarEventsRepo() {
        this.init();
    }
    WeeklyCalendarEventsRepo.prototype.init = function () {
        this.events = [];
        this.events.push({ name: "Prayer meeting", day: "Sunday", timeStart: new _time__WEBPACK_IMPORTED_MODULE_0__["Time"](9, 45), timeEnd: new _time__WEBPACK_IMPORTED_MODULE_0__["Time"](10, 15) });
        this.events.push({ name: "	Morning Worship", day: "Sunday", timeStart: new _time__WEBPACK_IMPORTED_MODULE_0__["Time"](10, 30), timeEnd: new _time__WEBPACK_IMPORTED_MODULE_0__["Time"](11, 45) });
        this.events.push({ name: "	Afternoon Worship", day: "Sunday", timeStart: new _time__WEBPACK_IMPORTED_MODULE_0__["Time"](16, 0), timeEnd: new _time__WEBPACK_IMPORTED_MODULE_0__["Time"](17, 30) });
        this.events.push({ name: "Busy Bees", day: "Tuesday", timeStart: new _time__WEBPACK_IMPORTED_MODULE_0__["Time"](10, 0), timeEnd: new _time__WEBPACK_IMPORTED_MODULE_0__["Time"](11, 30) });
        this.events.push({ name: "	Growth Groups", day: "Tuesday", timeStart: new _time__WEBPACK_IMPORTED_MODULE_0__["Time"](20, 0), timeEnd: new _time__WEBPACK_IMPORTED_MODULE_0__["Time"](0, 0) });
        this.events.push({ name: "	Growth Groups", day: "Wenesday", timeStart: new _time__WEBPACK_IMPORTED_MODULE_0__["Time"](19, 30), timeEnd: new _time__WEBPACK_IMPORTED_MODULE_0__["Time"](0, 0) });
        this.events.push({ name: "	Boing", day: "Thursday", timeStart: new _time__WEBPACK_IMPORTED_MODULE_0__["Time"](18, 15), timeEnd: new _time__WEBPACK_IMPORTED_MODULE_0__["Time"](19, 30) });
        this.events.push({ name: "	Chili", day: "Thursday", timeStart: new _time__WEBPACK_IMPORTED_MODULE_0__["Time"](20, 0), timeEnd: new _time__WEBPACK_IMPORTED_MODULE_0__["Time"](21, 30) });
    };
    return WeeklyCalendarEventsRepo;
}());



/***/ }),

/***/ "./src/app/whats-on/whats-on.component.css":
/*!*************************************************!*\
  !*** ./src/app/whats-on/whats-on.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-list-item.selected {\r\n    background-color: black !important;\r\n    color: white;\r\n  }\r\n\r\n  .example-headers-align .mat-expansion-panel-header-title,\r\n  .example-headers-align .mat-expansion-panel-header-description {\r\n    flex-basis: 0;\r\n  }\r\n\r\n  .example-headers-align .mat-expansion-panel-header-description {\r\n    justify-content: space-between;\r\n    align-items: center;\r\n  }\r\n\r\n  mat-form-field {\r\n    margin-right: 12px;\r\n  }\r\n\r\n  a {\r\n    color: inherit;\r\n    font-family: inherit;\r\n    text-decoration: none;\r\n  }\r\n\r\n  a:hover{\r\n    font-size: 16px;\r\n  }\r\n\r\n  #divWithMargin {\r\n  font-family: Avenir-Book, Helvetica Neue, Helvetica, Arial;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2hhdHMtb24vd2hhdHMtb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtDQUFrQztJQUNsQyxZQUFZO0VBQ2Q7O0VBRUE7O0lBRUUsYUFBYTtFQUNmOztFQUVBO0lBQ0UsOEJBQThCO0lBQzlCLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLGNBQWM7SUFDZCxvQkFBb0I7SUFDcEIscUJBQXFCO0VBQ3ZCOztFQUVBO0lBQ0UsZUFBZTtFQUNqQjs7RUFFRjtFQUNFLDBEQUEwRDtBQUM1RCIsImZpbGUiOiJzcmMvYXBwL3doYXRzLW9uL3doYXRzLW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtbGlzdC1pdGVtLnNlbGVjdGVkIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgfVxyXG5cclxuICAuZXhhbXBsZS1oZWFkZXJzLWFsaWduIC5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlci10aXRsZSxcclxuICAuZXhhbXBsZS1oZWFkZXJzLWFsaWduIC5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlci1kZXNjcmlwdGlvbiB7XHJcbiAgICBmbGV4LWJhc2lzOiAwO1xyXG4gIH1cclxuICBcclxuICAuZXhhbXBsZS1oZWFkZXJzLWFsaWduIC5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlci1kZXNjcmlwdGlvbiB7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIH1cclxuICBcclxuICBtYXQtZm9ybS1maWVsZCB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEycHg7XHJcbiAgfVxyXG5cclxuICBhIHtcclxuICAgIGNvbG9yOiBpbmhlcml0O1xyXG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgfVxyXG5cclxuICBhOmhvdmVye1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gIH1cclxuXHJcbiNkaXZXaXRoTWFyZ2luIHtcclxuICBmb250LWZhbWlseTogQXZlbmlyLUJvb2ssIEhlbHZldGljYSBOZXVlLCBIZWx2ZXRpY2EsIEFyaWFsO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/whats-on/whats-on.component.html":
/*!**************************************************!*\
  !*** ./src/app/whats-on/whats-on.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"divWithMargin\">\r\n  <h1>\r\n    This Week\r\n  </h1>\r\n\r\n  <div *ngFor=\"let event of weeklyEvents\">\r\n    <mat-accordion class=\"example-headers-align\">\r\n      <mat-expansion-panel>\r\n        <mat-expansion-panel-header>\r\n          <mat-panel-title>\r\n            <a matLine routerLink=\"/event/{{event.name}}\">{{event.name}}</a>\r\n          </mat-panel-title>\r\n          <!-- <mat-panel-description>\r\n          Details\r\n        </mat-panel-description> -->\r\n        </mat-expansion-panel-header>\r\n\r\n        <p *ngIf=\"event.description\" [innerHTML]=\"event.description\"></p>\r\n\r\n      </mat-expansion-panel>\r\n    </mat-accordion>\r\n  </div>\r\n\r\n  \r\n</div>\r\n\r\n<!-- Parents and carers bring their children on Tuesdays from 10 till 11.30 during school term time.\r\n      \r\n      Start with crafts, painting and lots of toys to share!\r\n      Enjoy drinks and a biscuit,  and time to meet others and make new friends.\r\n      There will be a story from the Bible and a song time.\r\n      If you are new and would like to come, please use this form to ensure there are places available. -->"

/***/ }),

/***/ "./src/app/whats-on/whats-on.component.ts":
/*!************************************************!*\
  !*** ./src/app/whats-on/whats-on.component.ts ***!
  \************************************************/
/*! exports provided: WhatsOnComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WhatsOnComponent", function() { return WhatsOnComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _archive_weekly_events__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../archive/weekly-events */ "./src/app/archive/weekly-events.ts");



var WhatsOnComponent = /** @class */ (function () {
    function WhatsOnComponent() {
        this.weeklyEvents = _archive_weekly_events__WEBPACK_IMPORTED_MODULE_2__["WeeklyEvents"];
        this.weeklyEvents.sort(function (eventA, eventB) {
            if (eventA.name < eventB.name)
                return -1;
            else if (eventA.name > eventB.name)
                return 1;
            else
                return 0;
        });
    }
    WhatsOnComponent.prototype.ngOnInit = function () {
    };
    WhatsOnComponent.prototype.showInfo = function (weeklyEvent) {
        this.selectedWeeklyEvent = weeklyEvent;
    };
    WhatsOnComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-whats-on',
            template: __webpack_require__(/*! ./whats-on.component.html */ "./src/app/whats-on/whats-on.component.html"),
            styles: [__webpack_require__(/*! ./whats-on.component.css */ "./src/app/whats-on/whats-on.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], WhatsOnComponent);
    return WhatsOnComponent;
}());



/***/ }),

/***/ "./src/app/youth-club/youth-club.component.css":
/*!*****************************************************!*\
  !*** ./src/app/youth-club/youth-club.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3lvdXRoLWNsdWIveW91dGgtY2x1Yi5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/youth-club/youth-club.component.html":
/*!******************************************************!*\
  !*** ./src/app/youth-club/youth-club.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"divWithMargin\">\n  <p>\n  youth-club works!\n</p>\n</div>"

/***/ }),

/***/ "./src/app/youth-club/youth-club.component.ts":
/*!****************************************************!*\
  !*** ./src/app/youth-club/youth-club.component.ts ***!
  \****************************************************/
/*! exports provided: YouthClubComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YouthClubComponent", function() { return YouthClubComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var YouthClubComponent = /** @class */ (function () {
    function YouthClubComponent() {
    }
    YouthClubComponent.prototype.ngOnInit = function () {
    };
    YouthClubComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-youth-club',
            template: __webpack_require__(/*! ./youth-club.component.html */ "./src/app/youth-club/youth-club.component.html"),
            styles: [__webpack_require__(/*! ./youth-club.component.css */ "./src/app/youth-club/youth-club.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], YouthClubComponent);
    return YouthClubComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! c:\Dev\bsec.angular\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
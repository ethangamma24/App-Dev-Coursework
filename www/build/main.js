webpackJsonp([2],{

/***/ 176:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_data__ = __webpack_require__(49);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the ItemDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ItemDetailPage = (function () {
    function ItemDetailPage(navCtrl, navParams, view, dataService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.view = view;
        this.dataService = dataService;
    }
    ItemDetailPage.prototype.ionViewDidLoad = function () {
        this.itemName = this.navParams.get('item').itemName;
        this.price = this.navParams.get('item').price;
        this.category = this.navParams.get('item').category;
        this.url = this.navParams.get('item').url;
        this.description = this.navParams.get('item').description;
        this.quantity = this.navParams.get('item').quantity;
        this.menuid = this.navParams.get('item').id;
    };
    ItemDetailPage.prototype.saveOrder = function () {
        this.dataService.setOrderItem(this.itemName, this.price, this.description, this.category, this.url, this.quantity, this.myDate, this.menuid);
        this.view.dismiss();
    };
    ItemDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-item-detail',template:/*ion-inline-start:"/home/phoenix/Documents/GitHub/App-Dev-Coursework/src/pages/item-detail/item-detail.html"*/'<ion-header>\n  <ion-navbar color="primary" >\n    <ion-title>\n      {{itemName}}\n    </ion-title>\n        <ion-buttons end>\n      <button ion-button icon-only (click)="saveOrder()"><ion-icon name="cart"></ion-icon></button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-card>\n    <ion-card-content>\n       <img src="{{url}}"  height="200" width="100" />\n       <br/>\n      {{category}}\n      ${{price}}\n      <br/>\n      <br/>\n      {{description}}\n      <br/>\n\n       <ion-item>\n    <ion-range min="1" max="15" [(ngModel)]="quantity" color="primary" pin="true" snaps="true" >\n      <ion-label range-left>1</ion-label>\n      <ion-label range-right>15</ion-label>\n    </ion-range>\n  </ion-item>\n\n  <ion-item>\n  <ion-label>Select A PickUp Time</ion-label>\n  <ion-datetime minuteValues="0,15,30,45" displayFormat="MM-DD-YY  HH:mm" [(ngModel)]="myDate">\n  </ion-datetime>\n</ion-item>\n\n   <br/>\n    \n    <p> Total: ${{price}} x {{quantity}} = $ {{price*quantity}} </p>\n\n  </ion-card-content>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"/home/phoenix/Documents/GitHub/App-Dev-Coursework/src/pages/item-detail/item-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ViewController */], __WEBPACK_IMPORTED_MODULE_2__providers_data__["a" /* Data */]])
    ], ItemDetailPage);
    return ItemDetailPage;
}());

//# sourceMappingURL=item-detail.js.map

/***/ }),

/***/ 177:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the OrderDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var OrderDetailPage = (function () {
    function OrderDetailPage(navCtrl, navParams, view) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.view = view;
    }
    OrderDetailPage.prototype.ionViewDidLoad = function () {
        this.itemName = this.navParams.get('order').itemName;
        this.price = this.navParams.get('order').price;
        this.category = this.navParams.get('order').category;
        this.url = this.navParams.get('order').url;
        this.description = this.navParams.get('order').description;
        this.quantity = this.navParams.get('order').quantity;
        this.myDate = this.navParams.get('order').myDate;
    };
    OrderDetailPage.prototype.close = function () {
        this.view.dismiss();
    };
    OrderDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-order-detail',template:/*ion-inline-start:"/home/phoenix/Documents/GitHub/App-Dev-Coursework/src/pages/order-detail/order-detail.html"*/'<ion-header>\n  <ion-navbar color="primary" >\n    <ion-title>\n      {{myDate}}\n    </ion-title>\n     \n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-card>\n    <ion-card-content>\n       <img src="{{url}}"  height="200" width="100" />\n\n      <ion-card-title>\n      {{itemName}}\n      </ion-card-title>\n      {{category}}\n      ${{price}}\n       <br/>\n       {{description}}\n    \n    <p> Total: ${{price}} x {{quantity}} = ${{price*quantity}} </p>\n\n  </ion-card-content>\n  </ion-card>\n</ion-content>'/*ion-inline-end:"/home/phoenix/Documents/GitHub/App-Dev-Coursework/src/pages/order-detail/order-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ViewController */]])
    ], OrderDetailPage);
    return OrderDetailPage;
}());

//# sourceMappingURL=order-detail.js.map

/***/ }),

/***/ 187:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 187;

/***/ }),

/***/ 228:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/item-detail/item-detail.module": [
		463,
		1
	],
	"../pages/order-detail/order-detail.module": [
		464,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 228;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 298:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SigninPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_parse__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_parse___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_parse__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_data__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__signup_signup__ = __webpack_require__(299);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__tabs_tabs__ = __webpack_require__(300);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// Providers

// https://ionicframework.com/docs/api/navigation/NavController/#setRoot
// Pages


var SigninPage = (function () {
    function SigninPage(navCtrl, data) {
        this.navCtrl = navCtrl;
        this.registerPage = __WEBPACK_IMPORTED_MODULE_4__signup_signup__["a" /* SignupPage */];
        this.password = '';
        this.username = '';
    }
    SigninPage.prototype.ionViewDidLoad = function () {
        console.log('Initiated Signin');
    };
    SigninPage.prototype.doSignin = function () {
        // let loader = this.loadCtrl.create({
        //   content: 'Signing in...'
        // });
        // loader.present();
        var self = this;
        __WEBPACK_IMPORTED_MODULE_2_parse__["Parse"].User.logIn(this.username, this.password, {
            success: function (user) {
                // loader.dismiss();
                // Do stuff after successful login.
                console.log("logged in " + user.get("username"));
                self.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__tabs_tabs__["a" /* TabsPage */]);
                // loader.dismissAll();
            },
            error: function (user, error) {
                // The login failed. Check error to see why.
            }
        });
        // this.authPvdr.signin(this.username, this.password).subscribe((success) => {
        //   this.navCtrl.setRoot(TabsPage);
        //   loader.dismissAll();
        // }, (error) => {
        //   alert('Invalid username or password');
        //   loader.dismissAll();
        // });
    };
    SigninPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-signin',template:/*ion-inline-start:"/home/phoenix/Documents/GitHub/App-Dev-Coursework/src/pages/signin/signin.html"*/'<ion-content padding-top>\n\n  <p class="logo">\n    <!-- <img src="http://placehold.it/300x200"/> -->\n    <img src="../../assets/imgs/logohead.png" />\n  </p>\n\n  <form (submit)="doSignin()">\n    <ion-list inset padding>\n\n      <ion-item>\n        <ion-label stacked>Username</ion-label>\n        <ion-input type="text" [(ngModel)]="username" name="username"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label stacked>Password</ion-label>\n        <ion-input type="password" [(ngModel)]="password" name="password"></ion-input>\n      </ion-item>\n      \n      <div padding>\n        <button ion-button color="accent" block>Login</button>\n        <p style="text-align: center">Don\'t you have an acccount? <a [navPush]="registerPage">Signup</a></p>\n      </div>\n\n    </ion-list>\n    </form>\n\n</ion-content>'/*ion-inline-end:"/home/phoenix/Documents/GitHub/App-Dev-Coursework/src/pages/signin/signin.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__providers_data__["a" /* Data */]])
    ], SigninPage);
    return SigninPage;
}());

//# sourceMappingURL=signin.js.map

/***/ }),

/***/ 299:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_parse__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_parse___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_parse__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// Providers
// import { AuthProvider } from '../../providers/auth/auth';
// Pages
//import { TabsPage } from '../tabs/tabs';
var SignupPage = (function () {
    function SignupPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.password = '';
        this.username = '';
        this.verify = '';
        this.email = '';
    }
    SignupPage.prototype.ionViewDidLoad = function () {
        console.log('Initiate Signup');
    };
    // TODO: form validation
    SignupPage.prototype.doRegister = function () {
        // let loader = this.loadCtrl.create({
        //   content: 'Signing up...'
        // });
        // loader.present();
        // this.authPvdr.signup(this.username, this.password, this.email).subscribe((success) => {
        //   this.navCtrl.setRoot(TabsPage);
        //   loader.dismissAll();
        // }, (error) => {
        //   loader.dismissAll();
        // });
        var user = new __WEBPACK_IMPORTED_MODULE_2_parse__["Parse"].User();
        user.set("username", this.username);
        user.set("password", this.password);
        user.set("email", this.email);
        // other fields can be set just like with Parse.Object
        // user.set("phone", "888-888-888");
        var self = this;
        user.signUp(null, {
            success: function (user) {
                // Hooray! Let them use the app now.
                console.log("signup success" + user.get("username"));
                self.navCtrl.pop();
            },
            error: function (user, error) {
                // Show the error message somewhere and let the user try again.
                alert("Error: " + error.code + " " + error.message);
            }
        });
        console.log("sign up");
    };
    SignupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-signup',template:/*ion-inline-start:"/home/phoenix/Documents/GitHub/App-Dev-Coursework/src/pages/signup/signup.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>Signup</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n  <form (submit)="doRegister()">\n    <ion-list padding inset scroll="false">\n\n      <ion-item>\n        <ion-label stacked>Username</ion-label>\n        <ion-input type="text" [(ngModel)]="username" name="username"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label stacked>Password</ion-label>\n        <ion-input type="password" [(ngModel)]="password" name="password"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label stacked>Verify Password</ion-label>\n        <ion-input type="password" [(ngModel)]="confirm" name="verify"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label stacked>Email</ion-label>\n        <ion-input type="email" [(ngModel)]="email" name="confirm"></ion-input>\n      </ion-item>\n\n      <div padding>\n        <button ion-button color="accent" block [disabled]="email.length == \'0\' || username.length == \'0\' || password.length == \'0\' || confirm.length == \'0\'">Register</button>\n      </div>\n\n    </ion-list>\n  </form>\n\n</ion-content>\n'/*ion-inline-end:"/home/phoenix/Documents/GitHub/App-Dev-Coursework/src/pages/signup/signup.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
    ], SignupPage);
    return SignupPage;
}());

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 300:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__my_order_my_order__ = __webpack_require__(301);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__menu_menu__ = __webpack_require__(302);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TabsPage = (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_2__menu_menu__["a" /* MenuPage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_1__my_order_my_order__["a" /* MyOrderPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/phoenix/Documents/GitHub/App-Dev-Coursework/src/pages/tabs/tabs.html"*/'<ion-tabs >\n  <ion-tab [root]="tab1Root" tabTitle="Menu" tabIcon="list-box"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="My Orders" tabIcon="filing"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/home/phoenix/Documents/GitHub/App-Dev-Coursework/src/pages/tabs/tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 301:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyOrderPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_data__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__order_detail_order_detail__ = __webpack_require__(177);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//import { AddItemPage } from '../add-item/add-item';
//import { ItemDetailPage } from '../item-detail/item-detail';


var MyOrderPage = (function () {
    function MyOrderPage(events, navParams, navCtrl, modalCtrl, dataService) {
        this.events = events;
        this.navParams = navParams;
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.dataService = dataService;
        this.orders = [];
        this.orders = this.dataService.getDataOrder();
        events.subscribe('neworder', function (neworder) {
            console.log('Welcome new neworder');
            // this.saveItem(newitem);
            console.log("Todo");
        });
    }
    MyOrderPage.prototype.ionViewDidLoad = function () {
    };
    MyOrderPage.prototype.viewOrder = function (order) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__order_detail_order_detail__["a" /* OrderDetailPage */], {
            order: order
        });
    };
    MyOrderPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-my-order',template:/*ion-inline-start:"/home/phoenix/Documents/GitHub/App-Dev-Coursework/src/pages/my-order/my-order.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>My Orders</ion-title>\n    \n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n <ion-list>\n\n  <ion-card *ngFor="let order of orders" (click)="viewOrder(order)">\n  <img src="{{order.url}}"  height="150" width="100" />\n  <ion-card-content>\n    <ion-card-title>\n      {{order.itemName}}\n      </ion-card-title>\n    <p >\n      Quantity: {{order.quantity}}\n      <br/>\n     Total: ${{order.price*order.quantity}} \n    <br/> \n    Date/Time: {{order.myDate}}\n  </p>\n  </ion-card-content>\n</ion-card> \n\n</ion-list>\n</ion-content>\n'/*ion-inline-end:"/home/phoenix/Documents/GitHub/App-Dev-Coursework/src/pages/my-order/my-order.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Events */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */], __WEBPACK_IMPORTED_MODULE_2__providers_data__["a" /* Data */]])
    ], MyOrderPage);
    return MyOrderPage;
}());

//# sourceMappingURL=my-order.js.map

/***/ }),

/***/ 302:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_data__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__add_item_add_item__ = __webpack_require__(303);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__edit_item_edit_item__ = __webpack_require__(305);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__item_detail_item_detail__ = __webpack_require__(176);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MenuPage = (function () {
    function MenuPage(navParams, navCtrl, modalCtrl, dataService) {
        this.navParams = navParams;
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.dataService = dataService;
        this.items = [];
        this.items = this.dataService.getDataMenu();
        console.log(this.items.length);
        console.log("get it");
    }
    MenuPage.prototype.ionViewDidLoad = function () {
    };
    MenuPage.prototype.addItem = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__add_item_add_item__["a" /* AddItemPage */]);
    };
    MenuPage.prototype.viewItem = function (item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__item_detail_item_detail__["a" /* ItemDetailPage */], {
            item: item
        });
    };
    MenuPage.prototype.editItem = function (item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__edit_item_edit_item__["a" /* EditItemPage */], {
            item: item
        });
    };
    MenuPage.prototype.deleteItem = function (item) {
    };
    MenuPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-menu',template:/*ion-inline-start:"/home/phoenix/Documents/GitHub/App-Dev-Coursework/src/pages/menu/menu.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>Menu</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="addItem()"><ion-icon name="add-circle"></ion-icon></button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n <ion-list>\n  <ion-card *ngFor="let item of items" (click)="viewItem(item)">\n     <ion-item-sliding #Item>\n      <ion-item>\n        <img src="{{item.url}}"  height="150" width="100" />\n        <ion-card-content>\n          <ion-card-title>\n            {{item.itemName}}\n            </ion-card-title>\n          <p >\n           {{item.category}}\n           ${{item.price}}\n          </p>\n        </ion-card-content>\n      </ion-item>\n      <ion-item-options>\n        <button ion-button (click)="editItem(item)">Edit</button>\n        <button ion-button (click)="deleteItem(item)" color="danger">Delete</button>\n      </ion-item-options>\n    </ion-item-sliding>\n  </ion-card>\n </ion-list>\n</ion-content>\n'/*ion-inline-end:"/home/phoenix/Documents/GitHub/App-Dev-Coursework/src/pages/menu/menu.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */], __WEBPACK_IMPORTED_MODULE_2__providers_data__["a" /* Data */]])
    ], MenuPage);
    return MenuPage;
}());

//# sourceMappingURL=menu.js.map

/***/ }),

/***/ 303:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddItemPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_data__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_parse__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_parse___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_parse__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_camera__ = __webpack_require__(304);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AddItemPage = (function () {
    function AddItemPage(navCtrl, view, dataService, camera) {
        this.navCtrl = navCtrl;
        this.view = view;
        this.dataService = dataService;
        this.camera = camera;
        this.quantity = 1;
    }
    AddItemPage.prototype.saveItem = function () {
        // this.dataService.setMenuItem(this.itemName, this.price, this.description, this.category, this.url, this.quantity );
        var Menu = __WEBPACK_IMPORTED_MODULE_3_parse__["Parse"].Object.extend("Menu");
        var menu = new Menu();
        var name = "photo.png";
        var parseFile = new __WEBPACK_IMPORTED_MODULE_3_parse__["Parse"].File(name, this.image);
        parseFile.save({
            success: function (file) {
                alert('File Saved! Now saving item to Parse...');
                menu.set("name", this.itemName);
                menu.set("price", parseFloat(this.price));
                menu.set("category", this.category);
                menu.set("photo", parseFile);
                menu.set("description", this.description);
                menu.save(null, {
                    success: function (menu) {
                        // Execute any logic that should take place after the object is saved.
                        alert('New object created with objectId: ' + menu.id);
                    },
                    error: function (menu, error) {
                        // Execute any logic that should take place if the save fails.
                        // error is a Parse.Error with an error code and message.
                        alert('Failed to create new object, with error code: ' + error.message);
                    }
                });
                this.view.dismiss();
            },
            error: function (file, error) {
                // Execute any logic that should take place if the save fails.
                // error is a Parse.Error with an error code and message.
                alert('Failed to save picture');
            }
        });
    };
    AddItemPage.prototype.close = function () {
        this.view.dismiss();
    };
    AddItemPage.prototype.takePicture = function () {
        var _this = this;
        console.log("Entered Successfully");
        var options = {
            quality: 100,
            destinationType: this.camera.DestinationType.DATA_URL,
            mediaType: this.camera.MediaType.PICTURE
        };
        this.camera.getPicture(options).then(function (imageData) {
            _this.image = 'data:image/jpeg;base64,' + imageData;
        }, function (err) {
            //this.displayErrorAlert(err);
            console.log(err);
        });
    };
    AddItemPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-add-item',template:/*ion-inline-start:"/home/phoenix/Documents/GitHub/App-Dev-Coursework/src/pages/add-item/add-item.html"*/'<!--\n  Generated template for the AddItemPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Add Menu Item</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="close()"><ion-icon name="close"></ion-icon></button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n	  <ion-list>\n\n    <ion-item>\n      <ion-label floating>Item Name</ion-label>\n      <ion-input type="text" [(ngModel)]="itemName"></ion-input>\n    </ion-item>\n\n     <ion-item>\n      <ion-label floating>Price (USD $) </ion-label>\n      <ion-input type="number" [(ngModel)]="price"></ion-input>\n    </ion-item>\n    <br/>\n\n    <ion-item>\n  <ion-label>Category</ion-label>\n  <ion-select interface="popover" [(ngModel)]="category">\n    <ion-option value="Dish">Dish</ion-option>\n    <ion-option value="Desert">Desert</ion-option>\n    <ion-option value="Drink">Drink</ion-option>\n  </ion-select>\n</ion-item>\n\n    <ion-item>\n      <ion-label floating>Photo (URL) </ion-label>\n      <ion-input type="text" [(ngModel)]="url"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label floating>Description</ion-label>\n      <ion-input type="text" [(ngModel)]="description"></ion-input>\n    </ion-item>\n\n  </ion-list>\n\n  <img *ngIf="image" [src]="domSanitizer.bypassSecurityTrustUrl(image)" />\n  <button ion-button (click)="takePicture()">\n    Take Photo\n  </button>\n\n  <input type="file" id="pic">\n\n  <button full ion-button color="primary" (click)="saveItem()">Save</button>\n\n</ion-content>\n'/*ion-inline-end:"/home/phoenix/Documents/GitHub/App-Dev-Coursework/src/pages/add-item/add-item.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ViewController */], __WEBPACK_IMPORTED_MODULE_2__providers_data__["a" /* Data */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_camera__["a" /* Camera */]])
    ], AddItemPage);
    return AddItemPage;
}());

//# sourceMappingURL=add-item.js.map

/***/ }),

/***/ 305:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditItemPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_data__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_parse__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_parse___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_parse__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EditItemPage = (function () {
    function EditItemPage(navCtrl, navParams, view, dataService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.view = view;
        this.dataService = dataService;
    }
    EditItemPage.prototype.ionViewDidLoad = function () {
        this.itemName = this.navParams.get('item').itemName;
        this.price = this.navParams.get('item').price;
        this.category = this.navParams.get('item').category;
        this.url = this.navParams.get('item').url;
        this.description = this.navParams.get('item').description;
        this.quantity = this.navParams.get('item').quantity;
        this.menuid = this.navParams.get('item').id;
        this.item = this.navParams.get('item');
        this.Menu = __WEBPACK_IMPORTED_MODULE_3_parse__["Parse"].Object.extend("Menu");
    };
    EditItemPage.prototype.saveItem = function () {
        //console.log(this.menuid);
        var Menu = __WEBPACK_IMPORTED_MODULE_3_parse__["Parse"].Object.extend("Menu");
        var query = new __WEBPACK_IMPORTED_MODULE_3_parse__["Parse"].Query(Menu);
        query.include('objectId');
        query.equalTo('objectId', this.menuid);
        //console.log(query);
        query.find({
            success: function (menu) {
                console.log("sucessfully called");
                console.log("why isnt this working");
                //console.log('Menu found with name: ' + menu.get("name") + ' and price: ' + menu.get("price"));
                console.log("What aboutthis one");
                console.log(menu);
                return menu;
            },
            error: function (error) {
                console.log("Error: " + error.code + " " + error.message);
            }
        }).then(function (menu) {
            console.log("entered function");
            console.log(menu);
            console.log("setting values...");
            console.log(menu.clear());
            console.log(menu);
            console.log("menu cleared");
            menu.set('name', this.itemName);
            console.log("name was set");
            menu.set('price', this.price);
            menu.set('category', this.category);
            menu.set('photoUrl', this.url);
            menu.set('description', this.description);
            console.log("saved all edits");
            menu.save(null, {
                success: function (menu) {
                    console.log('Menu updated! Name: ' + menu.get("name") + ' and new price: ' + menu.get("price"));
                },
                error: function (response, error) {
                    console.log('Error: ' + error.message);
                }
            });
        });
        this.view.dismiss();
    };
    EditItemPage.prototype.close = function () {
        this.view.dismiss();
    };
    EditItemPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-edit-item',template:/*ion-inline-start:"/home/phoenix/Documents/GitHub/App-Dev-Coursework/src/pages/edit-item/edit-item.html"*/'<!--\n  Generated template for the AddItemPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Edit Menu Item</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="close()"><ion-icon name="close"></ion-icon></button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n	  <ion-list>\n\n    <ion-item>\n      <ion-label floating>Item Name</ion-label>\n      <ion-input type="text" [(ngModel)]="itemName"></ion-input>\n    </ion-item>\n\n     <ion-item>\n      <ion-label floating>Price (USD $) </ion-label>\n      <ion-input type="number" [(ngModel)]="price"></ion-input>\n    </ion-item>\n    <br/>\n\n    <ion-item>\n  <ion-label>Category</ion-label>\n  <ion-select interface="popover" [(ngModel)]="category">\n    <ion-option value="Dish">Dish</ion-option>\n    <ion-option value="Desert">Desert</ion-option>\n    <ion-option value="Drink">Drink</ion-option>\n  </ion-select>\n</ion-item>\n\n    <ion-item>\n      <ion-label floating>Photo (URL) </ion-label>\n      <ion-input type="text" [(ngModel)]="url"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label floating>Description</ion-label>\n      <ion-input type="text" [(ngModel)]="description"></ion-input>\n    </ion-item>\n\n  </ion-list>\n\n  <button full ion-button color="primary" (click)="saveItem()">Save</button>\n\n</ion-content>\n'/*ion-inline-end:"/home/phoenix/Documents/GitHub/App-Dev-Coursework/src/pages/edit-item/edit-item.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ViewController */], __WEBPACK_IMPORTED_MODULE_2__providers_data__["a" /* Data */]])
    ], EditItemPage);
    return EditItemPage;
}());

//# sourceMappingURL=edit-item.js.map

/***/ }),

/***/ 306:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(307);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(330);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 330:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(454);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_my_order_my_order__ = __webpack_require__(301);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_order_detail_order_detail__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_menu_menu__ = __webpack_require__(302);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__ = __webpack_require__(300);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_add_item_add_item__ = __webpack_require__(303);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_edit_item_edit_item__ = __webpack_require__(305);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_item_detail_item_detail__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_signin_signin__ = __webpack_require__(298);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_signup_signup__ = __webpack_require__(299);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_status_bar__ = __webpack_require__(295);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_splash_screen__ = __webpack_require__(297);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_camera__ = __webpack_require__(304);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__providers_data__ = __webpack_require__(49);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_my_order_my_order__["a" /* MyOrderPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_order_detail_order_detail__["a" /* OrderDetailPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_menu_menu__["a" /* MenuPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_add_item_add_item__["a" /* AddItemPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_edit_item_edit_item__["a" /* EditItemPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_item_detail_item_detail__["a" /* ItemDetailPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_signin_signin__["a" /* SigninPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_signup_signup__["a" /* SignupPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/item-detail/item-detail.module#ItemDetailPageModule', name: 'ItemDetailPage', segment: 'item-detail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/order-detail/order-detail.module#OrderDetailPageModule', name: 'OrderDetailPage', segment: 'order-detail', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["a" /* IonicStorageModule */].forRoot()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_my_order_my_order__["a" /* MyOrderPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_order_detail_order_detail__["a" /* OrderDetailPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_menu_menu__["a" /* MenuPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_add_item_add_item__["a" /* AddItemPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_edit_item_edit_item__["a" /* EditItemPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_item_detail_item_detail__["a" /* ItemDetailPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_signin_signin__["a" /* SigninPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_signup_signup__["a" /* SignupPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_14__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_15__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_16__ionic_native_camera__["a" /* Camera */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_17__providers_data__["a" /* Data */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 454:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(295);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(297);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_signin_signin__ = __webpack_require__(298);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//import { TabsPage } from '../pages/tabs/tabs';

var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_signin_signin__["a" /* SigninPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/phoenix/Documents/GitHub/App-Dev-Coursework/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/home/phoenix/Documents/GitHub/App-Dev-Coursework/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 49:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Data; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_storage__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_parse__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_parse___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_parse__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(19);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var Data = (function () {
    function Data(Storage, events) {
        this.Storage = Storage;
        this.events = events;
        this.parseAppId = 'KL0q2WV3JBc805lcwMQwE2dGctmcDbF2Lj1eyTED';
        this.parseJSKey = '45osJ5IaYEvsPZA7Y3lfDcGgm8Ofzr25pAExN0bS';
        this.parseServerUrl = 'https://parseapi.back4app.com/';
        __WEBPACK_IMPORTED_MODULE_2_parse__["Parse"].initialize(this.parseAppId, this.parseJSKey);
        __WEBPACK_IMPORTED_MODULE_2_parse__["Parse"].serverURL = this.parseServerUrl;
        console.log('Initiated Parse');
        var Menu = __WEBPACK_IMPORTED_MODULE_2_parse__["Parse"].Object.extend('Menu');
        var query = new __WEBPACK_IMPORTED_MODULE_2_parse__["Parse"].Query(Menu);
        console.log(query);
        query.limit(1000);
        query.find().then(function (menus) {
            // resolve(menus);
            console.log(menus.length);
        }, function (error) {
            //reject(error);
        });
    }
    Data.prototype.setMenuItem = function (itemName, price, description, category, url, quantity) {
        //   	let item={
        //   	itemName : itemName,
        // 	price: price,
        //     description: description,
        //     category: category,
        //     url: url,
        //     quantity: quantity= 1,
        // };
        // this.saveMenuItem(item);
    };
    Data.prototype.getDataMenu = function () {
        //return this.Storage.get('items');
        // return this.items;
        var Menu = __WEBPACK_IMPORTED_MODULE_2_parse__["Parse"].Object.extend('Menu');
        var query = new __WEBPACK_IMPORTED_MODULE_2_parse__["Parse"].Query(Menu);
        query.limit(1000);
        var items = [];
        query.find().then(function (menus) {
            // resolve(menus);
            console.log(menus.length);
            for (var i = menus.length - 1; i >= 0; i--) {
                var mymenu = {
                    itemName: menus[i].get("name"),
                    price: menus[i].get("price"),
                    category: menus[i].get("category"),
                    url: menus[i].get("photoUrl"),
                    id: menus[i].id
                };
                items.push(mymenu);
            }
            console.log(items.length);
            return items;
        }, function (error) {
            // reject(error);
            console.log("error");
        });
        return items;
    };
    Data.prototype.saveMenuItem = function (item) {
        // this.items.push(item);
        //  let newData = JSON.stringify(item);
        //  this.Storage.set('items', newData);
    };
    Data.prototype.setOrderItem = function (itemName, price, description, category, url, quantity, myDate, menuid) {
        var order = {
            itemName: itemName,
            price: price,
            description: description,
            category: category,
            url: url,
            quantity: quantity,
            myDate: myDate,
            menuid: menuid
        };
        this.saveOrderItem(order);
    };
    Data.prototype.getDataOrder = function () {
        //return this.Storage.get('items');
        // return this.orders;
        var Order = __WEBPACK_IMPORTED_MODULE_2_parse__["Parse"].Object.extend('Order');
        var query = new __WEBPACK_IMPORTED_MODULE_2_parse__["Parse"].Query(Order);
        query.limit(1000);
        query.include("menu");
        var items = [];
        query.find().then(function (orders) {
            // resolve(orders);
            console.log(orders.length);
            for (var i = orders.length - 1; i >= 0; i--) {
                var mymenu = {
                    itemName: orders[i].get("menu").get("name"),
                    price: orders[i].get("menu").get("price"),
                    quantity: orders[i].get("itemqty"),
                    url: orders[i].get("menu").get("photoUrl"),
                    description: orders[i].get("menu").get("description"),
                    id: orders[i].get("menu").get("objectId"),
                    date: new Date()
                };
                items.push(mymenu);
            }
            console.log(items.length);
            return items;
        }, function (error) {
            // reject(error);
            console.log("error");
        });
        return items;
    };
    Data.prototype.saveOrderItem = function (order) {
        // this.orders.push(order);
        // let newData = JSON.stringify(order);
        // this.Storage.set('orders', newData);
        var Order = __WEBPACK_IMPORTED_MODULE_2_parse__["Parse"].Object.extend("Order");
        var o = new Order();
        console.log(order.price);
        console.log(order.quantity);
        o.set("totalamount", order.price * order.quantity);
        o.set("itemqty", parseFloat(order.quantity));
        var Menu = __WEBPACK_IMPORTED_MODULE_2_parse__["Parse"].Object.extend('Menu');
        var menu = new Menu();
        menu.id = order.menuid;
        o.set("menu", menu);
        var self = this;
        o.save(null, {
            success: function (myorder) {
                // Execute any logic that should take place after the object is saved.
                console.log('New order created with objectId: ' + myorder.id);
                var newOrder = {
                    name: order.name,
                    quantity: order.quantity
                };
                // this.view.dismiss(newItem);
                self.events.publish("neworder", newOrder);
            },
            error: function (menu, error) {
                // Execute any logic that should take place if the save fails.
                // error is a Parse.Error with an error code and message.
                alert('Failed to create new object, with error code: ' + error.message);
            }
        });
    };
    Data = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* Events */]])
    ], Data);
    return Data;
}());

//# sourceMappingURL=data.js.map

/***/ })

},[306]);
//# sourceMappingURL=main.js.map
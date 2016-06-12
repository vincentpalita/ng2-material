"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var toolbar_1 = require('@angular2-material/toolbar');
var ng2_material_1 = require('ng2-material');
var navigation_service_1 = require('../navigation.service');
var FooterComponent = (function () {
    function FooterComponent(navigation) {
        this.navigation = navigation;
    }
    FooterComponent.prototype.ngOnInit = function () { };
    FooterComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'docs-footer',
            templateUrl: 'footer.component.html',
            styleUrls: ['footer.component.css'],
            directives: [router_1.ROUTER_DIRECTIVES, toolbar_1.MdToolbar, ng2_material_1.MATERIAL_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [navigation_service_1.NavigationService])
    ], FooterComponent);
    return FooterComponent;
}());
exports.FooterComponent = FooterComponent;
//# sourceMappingURL=footer.component.js.map
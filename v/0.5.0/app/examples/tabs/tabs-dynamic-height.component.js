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
var tabs_1 = require('@angular2-material/tabs');
var ng2_material_1 = require('ng2-material');
var TabsDynamicHeightComponent = (function () {
    function TabsDynamicHeightComponent() {
    }
    TabsDynamicHeightComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'tabs-dynamic-height',
            templateUrl: 'tabs-dynamic-height.component.html',
            styleUrls: ['tabs-dynamic-height.component.css'],
            directives: [ng2_material_1.MATERIAL_DIRECTIVES, tabs_1.MD_TABS_DIRECTIVES],
            encapsulation: core_1.ViewEncapsulation.None
        }), 
        __metadata('design:paramtypes', [])
    ], TabsDynamicHeightComponent);
    return TabsDynamicHeightComponent;
}());
exports.TabsDynamicHeightComponent = TabsDynamicHeightComponent;
//# sourceMappingURL=tabs-dynamic-height.component.js.map
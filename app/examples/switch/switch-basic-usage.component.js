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
var ng2_material_1 = require('ng2-material');
var SwitchBasicUsageComponent = (function () {
    function SwitchBasicUsageComponent() {
        this.data = { cb1: true, cb4: true, cb5: false };
        this.message = 'false';
    }
    SwitchBasicUsageComponent.prototype.onChange = function (cbState) { this.message = cbState; };
    ;
    SwitchBasicUsageComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'switch-basic-usage',
            templateUrl: 'switch-basic-usage.component.html',
            styleUrls: ['switch-basic-usage.component.css'],
            directives: [ng2_material_1.MATERIAL_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [])
    ], SwitchBasicUsageComponent);
    return SwitchBasicUsageComponent;
}());
exports.SwitchBasicUsageComponent = SwitchBasicUsageComponent;
//# sourceMappingURL=switch-basic-usage.component.js.map
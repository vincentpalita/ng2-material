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
var checkbox_1 = require('@angular2-material/checkbox');
var CheckboxBasicUsageComponent = (function () {
    function CheckboxBasicUsageComponent() {
        this.cb1 = true;
        this.cb2 = false;
        this.cb3 = false;
        this.cb4 = true;
        this.cb5 = false;
    }
    CheckboxBasicUsageComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'checkbox-basic-usage',
            templateUrl: 'checkbox-basic-usage.component.html',
            styleUrls: ['checkbox-basic-usage.component.css'],
            directives: [checkbox_1.MdCheckbox]
        }), 
        __metadata('design:paramtypes', [])
    ], CheckboxBasicUsageComponent);
    return CheckboxBasicUsageComponent;
}());
exports.CheckboxBasicUsageComponent = CheckboxBasicUsageComponent;
//# sourceMappingURL=checkbox-basic-usage.component.js.map
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
var toolbar_1 = require('@angular2-material/toolbar');
var icon_1 = require('@angular2-material/icon');
var ToolbarBasicUsageComponent = (function () {
    function ToolbarBasicUsageComponent() {
    }
    ToolbarBasicUsageComponent.prototype.ngOnInit = function () { };
    ToolbarBasicUsageComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'toolbar-basic-usage',
            templateUrl: 'toolbar-basic-usage.component.html',
            styleUrls: ['toolbar-basic-usage.component.css'],
            directives: [toolbar_1.MdToolbar, icon_1.MdIcon]
        }), 
        __metadata('design:paramtypes', [])
    ], ToolbarBasicUsageComponent);
    return ToolbarBasicUsageComponent;
}());
exports.ToolbarBasicUsageComponent = ToolbarBasicUsageComponent;
//# sourceMappingURL=toolbar-basic-usage.component.js.map
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
var ng2_material_1 = require('ng2-material');
var shared_1 = require('../shared');
var IndexComponent = (function () {
    function IndexComponent(components) {
        this.components = components;
    }
    IndexComponent.prototype.ngOnInit = function () { };
    IndexComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'docs-index',
            templateUrl: 'index.component.html',
            styleUrls: ['index.component.css'],
            directives: [ng2_material_1.MATERIAL_DIRECTIVES, router_1.ROUTER_DIRECTIVES, shared_1.HighlightComponent]
        }), 
        __metadata('design:paramtypes', [shared_1.ComponentsService])
    ], IndexComponent);
    return IndexComponent;
}());
exports.IndexComponent = IndexComponent;
//# sourceMappingURL=index.component.js.map
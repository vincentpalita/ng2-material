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
var index_1 = require('../shared/highlight/index');
var ComponentsComponent = (function () {
    function ComponentsComponent(_components, _navigation) {
        this._components = _components;
        this._navigation = _navigation;
        this.value = {};
        this.next = null;
        this.previous = null;
    }
    ComponentsComponent.prototype.routerOnActivate = function (curr) {
        var _this = this;
        this.id = curr.getParam('id');
        this._components.getComponent(this.id).then(function (c) {
            _this.value = c;
            document.title = 'ng2-material – ' + c.name;
            _this._navigation.currentTitle = c.name;
            _this._components.getNext(c).then(function (next) {
                _this._navigation.nextLink = _this._navigation.componentLink(next);
            });
            _this._components.getPrevious(c).then(function (previous) {
                _this._navigation.prevLink = _this._navigation.componentLink(previous);
            });
        });
    };
    ComponentsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'docs-components',
            templateUrl: 'components.component.html',
            styleUrls: ['components.component.css'],
            directives: [
                shared_1.ExampleComponent, router_1.ROUTER_DIRECTIVES, ng2_material_1.MATERIAL_DIRECTIVES, index_1.HighlightComponent,
                index_1.HighlightContainerComponent
            ]
        }), 
        __metadata('design:paramtypes', [shared_1.ComponentsService, shared_1.NavigationService])
    ], ComponentsComponent);
    return ComponentsComponent;
}());
exports.ComponentsComponent = ComponentsComponent;
//# sourceMappingURL=components.component.js.map
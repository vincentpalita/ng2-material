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
var testing_1 = require('@angular/compiler/testing');
var core_1 = require('@angular/core');
var testing_2 = require('@angular/core/testing');
var platform_browser_1 = require('@angular/platform-browser');
var index_component_1 = require('./index.component');
testing_2.describe('Component: Index', function () {
    var builder;
    testing_2.beforeEachProviders(function () { return [index_component_1.IndexComponent]; });
    testing_2.beforeEach(testing_2.inject([testing_1.TestComponentBuilder], function (tcb) { builder = tcb; }));
    testing_2.it('should inject the component', testing_2.inject([index_component_1.IndexComponent], function (component) { testing_2.expect(component).toBeTruthy(); }));
    testing_2.it('should create the component', testing_2.inject([], function () {
        return builder.createAsync(IndexComponentTestController)
            .then(function (fixture) {
            var query = fixture.debugElement.query(platform_browser_1.By.directive(index_component_1.IndexComponent));
            testing_2.expect(query).toBeTruthy();
            testing_2.expect(query.componentInstance).toBeTruthy();
        });
    }));
});
var IndexComponentTestController = (function () {
    function IndexComponentTestController() {
    }
    IndexComponentTestController = __decorate([
        core_1.Component({
            selector: 'test',
            template: "\n    <docs-index></docs-index>\n  ",
            directives: [index_component_1.IndexComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], IndexComponentTestController);
    return IndexComponentTestController;
}());
//# sourceMappingURL=index.component.spec.js.map
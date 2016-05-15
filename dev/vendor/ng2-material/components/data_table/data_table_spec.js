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
var util_1 = require("../../platform/testing/util");
var testing_1 = require("@angular/core/testing");
var testing_2 = require("@angular/compiler/testing");
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var platform_browser_1 = require("@angular/platform-browser");
var index_1 = require("../../index");
function main() {
    var TestComponent = (function () {
        function TestComponent() {
            this.selected = [];
        }
        TestComponent = __decorate([
            core_1.Component({
                selector: 'test-app',
                directives: [common_1.CORE_DIRECTIVES, index_1.MdDataTable, index_1.MdDataTableHeaderSelectableRow, index_1.MdDataTableSelectableRow],
                template: "<md-data-table [selectable]=\"true\">\n      <thead>\n        <tr md-data-table-header-selectable-row>\n          <th>Unit price</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr md-data-table-selectable-row>\n          <td>$2.90</td>\n        </tr>\n        <tr md-data-table-selectable-row>\n          <td>$1.25</td>\n        </tr>\n      </tbody>\n    </md-data-table>"
            }), 
            __metadata('design:paramtypes', [])
        ], TestComponent);
        return TestComponent;
    }());
    util_1.componentSanityCheck('Data table', 'md-data-table', "<md-data-table></md-data-table>");
    testing_1.describe('Data table', function () {
        var builder;
        function setup(checked, disabled) {
            if (checked === void 0) { checked = false; }
            if (disabled === void 0) { disabled = false; }
            return builder.createAsync(TestComponent).then(function (fixture) {
                var debug = fixture.debugElement.query(platform_browser_1.By.css('md-data-table'));
                var comp = debug.componentInstance;
                var testComp = fixture.debugElement.componentInstance;
                testComp.selected = [];
                fixture.detectChanges();
                return {
                    fixture: fixture,
                    comp: comp,
                    debug: debug
                };
            }).catch(console.error.bind(console));
        }
        testing_1.beforeEach(testing_1.inject([testing_2.TestComponentBuilder], function (tcb) {
            builder = tcb;
        }));
        testing_1.describe('md-data-table', function () {
            testing_1.it('should initialize selected', testing_1.async(testing_1.inject([], function () {
                return setup().then(function (api) {
                    testing_1.expect(api.comp.selected.length).toEqual(0);
                    api.fixture.destroy();
                });
            })));
            testing_1.it('should toggle checked value when a click is fired on a row checkbox', testing_1.async(testing_1.inject([], function () {
                return setup(true).then(function (api) {
                    var row = api.debug.query(platform_browser_1.By.css('tbody tr:first-child'));
                    row.nativeElement.click();
                    testing_1.expect(api.comp.selected.length).toEqual(1);
                    testing_1.expect(api.comp.selected[0]).toEqual('0');
                    row.nativeElement.click();
                    testing_1.expect(api.comp.selected.length).toEqual(0);
                    api.fixture.destroy();
                });
            })));
            testing_1.it('should check all row checkbox when a click is fired on master checkbox', testing_1.async(testing_1.inject([], function () {
                return setup(true).then(function (api) {
                    var masterRow = api.debug.query(platform_browser_1.By.css('thead tr:first-child'));
                    masterRow.nativeElement.click();
                    testing_1.expect(api.comp.selected.length).toEqual(2);
                    testing_1.expect(api.comp.selected[0]).toEqual('0');
                    masterRow.nativeElement.click();
                    testing_1.expect(api.comp.selected.length).toEqual(0);
                    api.fixture.destroy();
                });
            })));
            testing_1.it('should uncheck master checkbox if a row checkbox is unchecked', testing_1.async(testing_1.inject([], function () {
                return setup(true).then(function (api) {
                    var masterRow = api.debug.query(platform_browser_1.By.css('thead tr:first-child')), row = api.debug.query(platform_browser_1.By.css('tbody tr:first-child')).nativeElement;
                    masterRow.nativeElement.click();
                    testing_1.expect(masterRow.componentInstance.isActive).toBe(true);
                    row.click();
                    testing_1.expect(api.comp.selected.length).toEqual(1);
                    testing_1.expect(api.comp.selected[0]).toEqual('1');
                    testing_1.expect(masterRow.componentInstance.isActive).toBe(false);
                    api.fixture.destroy();
                });
            })));
            testing_1.it('should fire a selectable_change event when a row checkbox change', testing_1.async(testing_1.inject([], function () {
                return setup(true).then(function (api) {
                    var row = api.debug.query(platform_browser_1.By.css('tbody tr:first-child')).nativeElement;
                    api.comp.onSelectableAll.subscribe(function (event) {
                        testing_1.expect(event.name).toBe('selectable_change');
                    });
                    row.click();
                    api.fixture.destroy();
                });
            })));
        });
    });
}
exports.main = main;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YV90YWJsZV9zcGVjLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvZGF0YV90YWJsZS9kYXRhX3RhYmxlX3NwZWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUFtQyw2QkFBNkIsQ0FBQyxDQUFBO0FBQ2pFLHdCQUE4RCx1QkFBdUIsQ0FBQyxDQUFBO0FBQ3RGLHdCQUFxRCwyQkFBMkIsQ0FBQyxDQUFBO0FBQ2pGLHFCQUFzQyxlQUFlLENBQUMsQ0FBQTtBQUN0RCx1QkFBOEIsaUJBQWlCLENBQUMsQ0FBQTtBQUNoRCxpQ0FBaUIsMkJBQTJCLENBQUMsQ0FBQTtBQUM3QyxzQkFBb0YsYUFBYSxDQUFDLENBQUE7QUFFbEc7SUEwQkU7UUFBQTtZQUNFLGFBQVEsR0FBZSxFQUFFLENBQUM7UUFDNUIsQ0FBQztRQXJCRDtZQUFDLGdCQUFTLENBQUM7Z0JBQ1QsUUFBUSxFQUFFLFVBQVU7Z0JBQ3BCLFVBQVUsRUFBRSxDQUFDLHdCQUFlLEVBQUUsbUJBQVcsRUFBRSxzQ0FBOEIsRUFBRSxnQ0FBd0IsQ0FBQztnQkFDcEcsUUFBUSxFQUFFLG1ZQWNPO2FBQ2xCLENBQUM7O3lCQUFBO1FBR0Ysb0JBQUM7SUFBRCxDQUFDLEFBRkQsSUFFQztJQUVELDJCQUFvQixDQUFDLFlBQVksRUFBRSxlQUFlLEVBQUUsaUNBQWlDLENBQUMsQ0FBQztJQUV2RixrQkFBUSxDQUFDLFlBQVksRUFBRTtRQUNyQixJQUFJLE9BQTZCLENBQUM7UUFFbEMsZUFBZSxPQUF3QixFQUFFLFFBQXlCO1lBQW5ELHVCQUF3QixHQUF4QixlQUF3QjtZQUFFLHdCQUF5QixHQUF6QixnQkFBeUI7WUFDaEUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUMsT0FBd0M7Z0JBQ3RGLElBQUksS0FBSyxHQUFHLE9BQU8sQ0FBQyxZQUFZLENBQUMsS0FBSyxD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
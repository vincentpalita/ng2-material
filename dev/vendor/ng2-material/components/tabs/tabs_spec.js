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
var testing_1 = require("@angular/core/testing");
var testing_2 = require("@angular/compiler/testing");
var core_1 = require("@angular/core");
var index_1 = require("../../index");
var common_1 = require("@angular/common");
var platform_browser_1 = require("@angular/platform-browser");
function main() {
    var TestComponent = (function () {
        function TestComponent() {
            this.selectedIndex = 2;
        }
        TestComponent = __decorate([
            core_1.Component({
                selector: 'test-app',
                directives: [common_1.CORE_DIRECTIVES, index_1.MdTabs, index_1.MdTab],
                template: "\n    <md-tabs>\n      <template md-tab label=\"Tab1\"><span>Tab1</span></template>\n      <template md-tab label=\"Tab2\"><span>Tab2</span></template>\n      <template md-tab label=\"Tab3\"><span>Tab3</span></template>\n    </md-tabs>"
            }), 
            __metadata('design:paramtypes', [])
        ], TestComponent);
        return TestComponent;
    }());
    testing_1.describe('Tabs', function () {
        var builder;
        function setup(template) {
            if (template === void 0) { template = null; }
            var prep = template === null ?
                builder.createAsync(TestComponent) :
                builder.overrideTemplate(TestComponent, template).createAsync(TestComponent);
            return prep.then(function (fixture) {
                fixture.detectChanges();
                var tabs = fixture.debugElement.query(platform_browser_1.By.css('md-tabs')).componentInstance;
                var tabButtons = fixture.debugElement.queryAll(platform_browser_1.By.css('md-tab-item')).map(function (b) { return b.nativeElement; });
                return {
                    fixture: fixture,
                    tabs: tabs,
                    tabButtons: tabButtons
                };
            }).catch(console.error.bind(console));
        }
        testing_1.beforeEach(testing_1.inject([testing_2.TestComponentBuilder], function (tcb) {
            builder = tcb;
        }));
        testing_1.describe('md-tabs', function () {
            testing_1.it('should initialize with first tab selected', testing_1.async(testing_1.inject([], function () {
                return setup().then(function (api) {
                    testing_1.expect(api.tabs.selected).toBe(0);
                    testing_1.expect(api.tabs.selectedTab).toBe(null);
                });
            })));
            testing_1.it('should update selected and selectedTab when changed by clicking on tab buttons', testing_1.async(testing_1.inject([], function () {
                return setup().then(function (api) {
                    api.tabButtons[1].click();
                    testing_1.expect(api.tabs.selected).toBe(1);
                    testing_1.expect(api.tabs.selectedTab).not.toBeNull();
                    api.tabButtons[0].click();
                    testing_1.expect(api.tabs.selected).toBe(0);
                    testing_1.expect(api.tabs.selectedTab).not.toBeNull();
                });
            })));
            testing_1.it('should update selectedTab when selected is set', testing_1.async(testing_1.inject([], function () {
                return setup().then(function (api) {
                    testing_1.expect(api.tabs.selectedTab).toBeNull();
                    api.tabs.selected = 1;
                    testing_1.expect(api.tabs.selectedTab).not.toBeNull();
                    api.tabs.selected = 0;
                    testing_1.expect(api.tabs.selectedTab).not.toBeNull();
                    api.tabs.selected = -1;
                    testing_1.expect(api.tabs.selectedTab).toBeNull();
                });
            })));
            testing_1.it('should bind [selected] to an index', testing_1.async(testing_1.inject([], function () {
                var template = "\n          <md-tabs [selected]=\"selectedIndex\">\n            <template md-tab label=\"Tab1\"><span>Tab1</span></template>\n            <template md-tab label=\"Tab2\"><span>Tab2</span></template>\n            <template md-tab label=\"Tab3\"><span>Tab3</span></template>\n          </md-tabs>";
                return setup(template).then(function (api) {
                    testing_1.expect(api.tabs.selected).toBe(2);
                });
            })));
            testing_1.it('md-tabs should ripple when tab buttons are clicked', testing_1.async(testing_1.inject([], function () {
                var template = "\n          <md-tabs [selected]=\"selectedIndex\">\n            <template md-tab label=\"Tab1\"><span>Tab1</span></template>\n          </md-tabs>";
                return setup(template).then(function (api) {
                    var save = index_1.Ink.rippleEvent;
                    var fired = false;
                    index_1.Ink.rippleEvent = function () {
                        fired = true;
                        return Promise.resolve();
                    };
                    api.tabButtons[0].click();
                    testing_1.expect(fired).toBe(true);
                    index_1.Ink.rippleEvent = save;
                });
            })));
            testing_1.it('md-tabs[md-no-ink] should not ripple when tab buttons are clicked', testing_1.async(testing_1.inject([], function () {
                var template = "\n          <md-tabs md-no-ink [selected]=\"selectedIndex\">\n            <template md-tab label=\"Tab1\"><span>Tab1</span></template>\n          </md-tabs>";
                return setup(template).then(function (api) {
                    var save = index_1.Ink.rippleEvent;
                    var fired = false;
                    index_1.Ink.rippleEvent = function () {
                        fired = true;
                        return Promise.resolve();
                    };
                    api.tabButtons[0].click();
                    testing_1.expect(fired).toBe(false);
                    index_1.Ink.rippleEvent = save;
                });
            })));
        });
    });
}
exports.main = main;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFic19zcGVjLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvdGFicy90YWJzX3NwZWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHdCQUE4RCx1QkFBdUIsQ0FBQyxDQUFBO0FBQ3RGLHdCQUFxRCwyQkFBMkIsQ0FBQyxDQUFBO0FBQ2pGLHFCQUF3QixlQUFlLENBQUMsQ0FBQTtBQUN4QyxzQkFBaUMsYUFBYSxDQUFDLENBQUE7QUFDL0MsdUJBQThCLGlCQUFpQixDQUFDLENBQUE7QUFDaEQsaUNBQWlCLDJCQUEyQixDQUFDLENBQUE7QUFFN0M7SUFpQkU7UUFBQTtZQUNFLGtCQUFhLEdBQVcsQ0FBQyxDQUFDO1FBQzVCLENBQUM7UUFaRDtZQUFDLGdCQUFTLENBQUM7Z0JBQ1QsUUFBUSxFQUFFLFVBQVU7Z0JBQ3BCLFVBQVUsRUFBRSxDQUFDLHdCQUFlLEVBQUUsY0FBTSxFQUFFLGFBQUssQ0FBQztnQkFDNUMsUUFBUSxFQUFFLDZPQUtDO2FBQ1osQ0FBQzs7eUJBQUE7UUFHRixvQkFBQztJQUFELENBQUMsQUFGRCxJQUVDO0lBRUQsa0JBQVEsQ0FBQyxNQUFNLEVBQUU7UUFDZixJQUFJLE9BQTZCLENBQUM7UUFFbEMsZUFBZSxRQUF1QjtZQUF2Qix3QkFBdUIsR0FBdkIsZUFBdUI7WUFDcEMsSUFBSSxJQUFJLEdBQUcsUUFBUSxLQUFLLElBQUk7Z0JBQzFCLE9BQU8sQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDO2dCQUNsQyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsYUFBYSxFQUFFLFFBQVEsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsQ0FBQztZQUMvRSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFDLE9BQXdDO2dCQUN4RCxPQUFPLENBQUMsYUFBYSxFQUFFLENBQUM7Z0JBQ3hCLElBQUksSUFBSSxHQUFXLE9BQU8sQ0FBQyxZQUFZLENBQUMsS0FB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
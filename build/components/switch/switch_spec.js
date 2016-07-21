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
var platform_browser_1 = require("@angular/platform-browser");
var testing_2 = require("@angular/core/testing");
var core_1 = require("@angular/core");
var switch_1 = require("./switch");
var util_1 = require("../../platform/testing/util");
var key_codes_1 = require("../../core/key_codes");
var createEvent = function () {
    var event = document.createEvent('Event');
    event.initEvent('key', true, true);
    return event;
};
function main() {
    var TestComponent = (function () {
        function TestComponent() {
            this.isChecked = false;
            this.isDisabled = false;
            this.tabIndex = "1";
        }
        TestComponent = __decorate([
            core_1.Component({
                selector: 'test-app',
                directives: [switch_1.MdSwitch],
                template: "<md-switch [(checked)]=\"isChecked\" [disabled]=\"isDisabled\" [tabindex]=\"tabIndex\"></md-switch>"
            }), 
            __metadata('design:paramtypes', [])
        ], TestComponent);
        return TestComponent;
    }());
    util_1.componentSanityCheck('Switch', 'md-switch', "<md-switch checked=\"true\"></md-switch>");
    describe('Switch', function () {
        var builder;
        function setup(checked, disabled) {
            if (checked === void 0) { checked = false; }
            if (disabled === void 0) { disabled = false; }
            return builder.createAsync(TestComponent).then(function (fixture) {
                var debug = fixture.debugElement.query(platform_browser_1.By.css('md-switch'));
                var comp = debug.componentInstance;
                var testComp = fixture.debugElement.componentInstance;
                testComp.isDisabled = disabled;
                testComp.isChecked = checked;
                fixture.detectChanges();
                return {
                    fixture: fixture,
                    comp: comp,
                    debug: debug
                };
            }).catch(console.error.bind(console));
        }
        beforeEach(testing_1.inject([testing_2.TestComponentBuilder], function (tcb) {
            builder = tcb;
        }));
        describe('md-switch', function () {
            it('should initialize unchecked', function () {
                return setup().then(function (api) {
                    expect(api.comp.checked).toBe(false);
                    api.fixture.destroy();
                });
            });
            it('should set checked from binding', function () {
                return setup(true).then(function (api) {
                    expect(api.comp.checked).toBe(true);
                });
            });
            it('should toggle checked value when clicked on', function () {
                return setup(true).then(function (api) {
                    expect(api.comp.checked).toBe(true);
                    api.debug.nativeElement.click();
                    expect(api.comp.checked).toBe(false);
                });
            });
            it('should not toggle checked value when disabled and clicked on', function () {
                return setup(true, true).then(function (api) {
                    expect(api.comp.checked).toBe(true);
                    api.debug.nativeElement.click();
                    expect(api.comp.checked).toBe(true);
                    api.fixture.destroy();
                });
            });
            describe('Keyboard', function () {
                it('should toggle when the space key is pressed', function () {
                    return setup().then(function (api) {
                        expect(api.comp.checked).toBe(false);
                        var event = createEvent();
                        event.keyCode = key_codes_1.KeyCodes.SPACE;
                        api.debug.triggerEventHandler('keydown', event);
                        expect(api.comp.checked).toBe(true);
                    });
                });
                it('should not toggle when any other key is pressed', function () {
                    return setup().then(function (api) {
                        expect(api.comp.checked).toBe(false);
                        var event = createEvent();
                        event.keyCode = key_codes_1.KeyCodes.DOWN;
                        api.debug.triggerEventHandler('keydown', event);
                        expect(api.comp.checked).toBe(false);
                    });
                });
            });
        });
    });
}
exports.main = main;
//# sourceMappingURL=switch_spec.js.map
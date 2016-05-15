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
var testing_1 = require('@angular/core/testing');
var testing_2 = require('@angular/compiler/testing');
var core_1 = require('@angular/core');
var index_1 = require('../../index');
var platform_browser_1 = require('@angular/platform-browser');
function main() {
    var defaultTemplate = "<button md-button type=\"button\" (click)=\"increment()\" [disabled]=\"isDisabled\">Go</button>";
    var TestComponent = (function () {
        function TestComponent() {
            this.clickCount = 0;
            this.isDisabled = false;
        }
        TestComponent.prototype.increment = function () {
            this.clickCount++;
        };
        TestComponent = __decorate([
            core_1.Component({
                selector: 'test-app',
                directives: [index_1.MdButton],
                template: defaultTemplate
            }), 
            __metadata('design:paramtypes', [])
        ], TestComponent);
        return TestComponent;
    }());
    var createEvent = function () {
        var event = document.createEvent('MouseEvent');
        event.initEvent('mouse', true, true);
        return event;
    };
    testing_1.describe('MdButton', function () {
        var builder;
        function setup(template) {
            if (template === void 0) { template = defaultTemplate; }
            return builder
                .overrideTemplate(TestComponent, template)
                .createAsync(TestComponent)
                .then(function (fixture) {
                fixture.detectChanges();
                return fixture;
            }).catch(console.error.bind(console));
        }
        testing_1.beforeEach(testing_1.inject([testing_2.TestComponentBuilder], function (tcb) {
            builder = tcb;
        }));
        testing_1.describe('button[md-button]', function () {
            testing_1.it('should handle a click on the button', testing_1.async(function () {
                return setup().then(function (fixture) {
                    var testComponent = fixture.debugElement.componentInstance;
                    var buttonDebugElement = fixture.debugElement.query(platform_browser_1.By.css('button'));
                    buttonDebugElement.nativeElement.click();
                    testing_1.expect(testComponent.clickCount).toBe(1);
                });
            }), 10000);
            testing_1.it('should ink ripple when clicked', testing_1.async(function () {
                return setup().then(function (fixture) {
                    var button = fixture.debugElement.children[0];
                    var save = index_1.Ink.rippleEvent;
                    var fired = false;
                    index_1.Ink.rippleEvent = function () {
                        fired = true;
                        return Promise.resolve();
                    };
                    var event = createEvent();
                    button.triggerEventHandler('mousedown', event);
                    testing_1.expect(fired).toBe(true);
                    index_1.Ink.rippleEvent = save;
                });
            }));
            testing_1.it('should not ink ripple with md-no-ink attribute', testing_1.async(testing_1.inject([], function () {
                var template = "<button md-button md-no-ink></button>";
                return setup(template).then(function (fixture) {
                    var button = fixture.debugElement.children[0];
                    var save = index_1.Ink.rippleEvent;
                    var fired = false;
                    index_1.Ink.rippleEvent = function () {
                        fired = true;
                        return Promise.resolve();
                    };
                    var event = createEvent();
                    button.triggerEventHandler('mousedown', event);
                    testing_1.expect(fired).toBe(false);
                    index_1.Ink.rippleEvent = save;
                });
            })));
            testing_1.it('should disable the button', testing_1.async(function () {
                return setup().then(function (fixture) {
                    var testAppComponent = fixture.debugElement.componentInstance;
                    var buttonDebugElement = fixture.debugElement.query(platform_browser_1.By.css('button'));
                    var buttonElement = buttonDebugElement.nativeElement;
                    testing_1.expect(buttonElement.disabled).toBe(false);
                    testAppComponent.isDisabled = true;
                    fixture.detectChanges();
                    testing_1.expect(buttonElement.disabled).toBe(true);
                    buttonElement.click();
                    testing_1.expect(testAppComponent.clickCount).toBe(0);
                });
            }), 10000);
        });
        testing_1.describe('a[md-button]', function () {
            var anchorTemplate = "<a md-button href=\"javascript:void(0);\" [disabled]=\"isDisabled\">Go</a>";
            testing_1.beforeEach(function () {
                builder = builder.overrideView(TestComponent, new core_1.ViewMetadata({ template: anchorTemplate, directives: [index_1.MdAnchor] }));
            });
            testing_1.it('should remove disabled anchors from tab order', testing_1.async(function () {
                return builder.createAsync(TestComponent).then(function (fixture) {
                    var testAppComponent = fixture.debugElement.componentInstance;
                    var anchorDebugElement = fixture.debugElement.query(platform_browser_1.By.css('a'));
                    var anchorElement = anchorDebugElement.nativeElement;
                    testing_1.expect(anchorElement.tabIndex).toBe(0);
                    testAppComponent.isDisabled = true;
                    fixture.detectChanges();
                    testing_1.expect(anchorElement.tabIndex).toBe(-1);
                });
            }), 10000);
            testing_1.it('should not preventDefault on enabled anchor clicks', testing_1.async(testing_1.inject([], function () {
                return builder.createAsync(TestComponent).then(function (fixture) {
                    var anchor = fixture.debugElement.children[0];
                    var event = createEvent();
                    var triggered = false;
                    event.preventDefault = function () { return triggered = true; };
                    anchor.triggerEventHandler('click', event);
                    testing_1.expect(triggered).toBe(false);
                });
            })));
            testing_1.it('should preventDefault for disabled anchor clicks', testing_1.async(testing_1.inject([], function () {
                return builder.createAsync(TestComponent).then(function (fixture) {
                    var anchor = fixture.debugElement.children[0];
                    var anchorComp = anchor.componentInstance;
                    var event = createEvent();
                    var triggered = false;
                    event.preventDefault = function () { return triggered = true; };
                    anchorComp.disabled = true;
                    anchor.triggerEventHandler('click', event);
                    testing_1.expect(triggered).toBe(true);
                    fixture.destroy();
                });
            })));
        });
    });
}
exports.main = main;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uX3NwZWMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9idXR0b24vYnV0dG9uX3NwZWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHdCQUE4RCx1QkFBdUIsQ0FBQyxDQUFBO0FBQ3RGLHdCQUFxRCwyQkFBMkIsQ0FBQyxDQUFBO0FBQ2pGLHFCQUFvRCxlQUFlLENBQUMsQ0FBQTtBQUNwRSxzQkFBc0MsYUFBYSxDQUFDLENBQUE7QUFDcEQsaUNBQWlCLDJCQUEyQixDQUFDLENBQUE7QUFFN0M7SUFFRSxJQUFNLGVBQWUsR0FBRyxpR0FBMkYsQ0FBQztJQVFwSDtRQUFBO1lBQ0UsZUFBVSxHQUFXLENBQUMsQ0FBQztZQUN2QixlQUFVLEdBQVksS0FBSyxDQUFDO1FBSzlCLENBQUM7UUFIQyxpQ0FBUyxHQUFUO1lBQ0UsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQ3BCLENBQUM7UUFYSDtZQUFDLGdCQUFTLENBQUM7Z0JBQ1QsUUFBUSxFQUFFLFVBQVU7Z0JBQ3BCLFVBQVUsRUFBRSxDQUFDLGdCQUFRLENBQUM7Z0JBQ3RCLFFBQVEsRUFBRSxlQUFlO2FBQzFCLENBQUM7O3lCQUFBO1FBUUYsb0JBQUM7SUFBRCxDQUFDLEFBUEQsSUFPQztJQUVELElBQUksV0FBVyxHQUFHO1FBQ2hCLElBQUksS0FBSyxHQUFHLFFBQVEsQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDL0MsS0FBSyxDQUFDLFNBQVMsQ0FBQyxPQUFPLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3JDLE1BQU0sQ0FBQyxLQUFLLENBQUM7SUFDZixDQUFDLENBQUM7SUFFRixrQkFBUSxDQUFDLFVBQVUsRUFBRTtRQUVuQixJQUFJLE9BQTZCLENBQUM7UUFFbEMsZUFBZSxRQUFrQztZQUFsQyx3QkFBa0MsR0FBbEMsMEJBQWtDO1lBQy9DLE1BQU0sQ0FBQyxPQUFPO2lCQUNY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
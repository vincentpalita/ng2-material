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
    var defaultTemplate = "<div md-ink></div>";
    var TestComponent = (function () {
        function TestComponent() {
        }
        TestComponent = __decorate([
            core_1.Component({
                selector: 'test-app',
                directives: [index_1.MdInk],
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
    testing_1.describe('MdInk', function () {
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
        testing_1.describe('[md-ink]', function () {
            testing_1.it('should ink ripple when clicked', testing_1.async(testing_1.inject([], function () {
                setup().then(function (fixture) {
                    var element = fixture.debugElement.query(platform_browser_1.By.css('[md-ink]'));
                    var save = index_1.Ink.rippleEvent;
                    var fired = false;
                    index_1.Ink.rippleEvent = function () {
                        fired = true;
                        return Promise.resolve();
                    };
                    var event = createEvent();
                    element.triggerEventHandler('mousedown', event);
                    testing_1.expect(fired).toBe(true);
                    index_1.Ink.rippleEvent = save;
                });
            })));
            testing_1.it('should not ink ripple with md-no-ink attribute', testing_1.async(testing_1.inject([], function () {
                var template = "<div md-ink md-no-ink></div>";
                setup(template).then(function (fixture) {
                    var element = fixture.debugElement.query(platform_browser_1.By.css('[md-ink]'));
                    var save = index_1.Ink.rippleEvent;
                    var fired = false;
                    index_1.Ink.rippleEvent = function () {
                        fired = true;
                        return Promise.resolve();
                    };
                    var event = createEvent();
                    element.triggerEventHandler('mousedown', event);
                    testing_1.expect(fired).toBe(false);
                    index_1.Ink.rippleEvent = save;
                });
            })));
        });
    });
}
exports.main = main;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5rX3NwZWMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9pbmsvaW5rX3NwZWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHdCQUE4RCx1QkFBdUIsQ0FBQyxDQUFBO0FBQ3RGLHdCQUFxRCwyQkFBMkIsQ0FBQyxDQUFBO0FBQ2pGLHFCQUFzQyxlQUFlLENBQUMsQ0FBQTtBQUN0RCxzQkFBeUIsYUFBYSxDQUFDLENBQUE7QUFDdkMsaUNBQWlCLDJCQUEyQixDQUFDLENBQUE7QUFFN0M7SUFFRSxJQUFNLGVBQWUsR0FBRyxvQkFBb0IsQ0FBQztJQU83QztRQUFBO1FBQ0EsQ0FBQztRQU5EO1lBQUMsZ0JBQVMsQ0FBQztnQkFDVCxRQUFRLEVBQUUsVUFBVTtnQkFDcEIsVUFBVSxFQUFFLENBQUMsYUFBSyxDQUFDO2dCQUNuQixRQUFRLEVBQUUsZUFBZTthQUMxQixDQUFDOzt5QkFBQTtRQUVGLG9CQUFDO0lBQUQsQ0FBQyxBQURELElBQ0M7SUFFRCxJQUFJLFdBQVcsR0FBRztRQUNoQixJQUFJLEtBQUssR0FBRyxRQUFRLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQy9DLEtBQUssQ0FBQyxTQUFTLENBQUMsT0FBTyxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNyQyxNQUFNLENBQUMsS0FBSyxDQUFDO0lBQ2YsQ0FBQyxDQUFDO0lBRUYsa0JBQVEsQ0FBQyxPQUFPLEVBQUU7UUFFaEIsSUFBSSxPQUE2QixDQUFDO1FBRWxDLGVBQWUsUUFBa0M7WUFBbEMsd0JBQWtDLEdBQWxDLDBCQUFrQztZQUMvQyxNQUFNLENBQUMsT0FBTztpQkFDWCxnQkFBZ0IsQ0FBQyxhQUFhLEVBQUUsUUFBUSxDQUFDO2lCQUN6QyxXQUFXLENBQUMsYUFBYSxDQUFDO2lCQUMxQixJQUFJLENBQUMsVUFBQyxPQUF3QztnQkFDN0MsT0FBTyxDQUFDLGFBQWEsRUFBRSxDQUFDO2dCQUN4QixNQUFNLENBQUMsT0FBTyxDQUFDO1lBQ2pCLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1FBQzFDLENBQUM7UUFFRCxvQkFBVSxDQUFDLGdCQUFNLENBQUMsQ0FBQyw4QkFBb0IsQ0FBQyxFQUFFLFVBQUMsR0FBRztZQUM1QyxPQUFPLEdBQUcsR0FBRyxDQUFDO1FBQ2hCLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFSixrQkFBUSxDQUFDLFVBQVUsRUFBRTtZQUNuQixZQUFFLENBQUMsZ0NBQWdDLEVBQUUsZUFBSyxDQUFDLGdCQUFNLENBQUMsRUFBRSxFQUFFO2dCQUNwRCxLQUFLLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBQyxPQUF3QztvQkFDcEQsSUFBSSxPQUFPLEdBQWlCLE9BQU8sQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLHFCQUFFLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7b0JBRTNFLElBQUksSUFBSSxHQUFHLFdBQUcsQ0FBQyxXQUFXLENBQUM7b0JBQzNCLElBQUksS0FBSyxHQUFHLEtBQUssQ0FBQztvQkFDbEIsV0FBRyxDQUFDLFdBQVcsR0FBRzt3QkFDaEIsS0FBSyxHQUFHLElBQUksQ0FBQzt3QkFDYixNQUFNLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFDO29CQUMzQixDQUFDLENBQUM7b0JBRUYsSUFBSSxLQUFLLEdBQUcsV0FBVyxFQUFFLENBQUM7b0JBQzFCLE9BQU8sQ0FBQyxtQkFBbUIsQ0FBQyxXQUFXLEVBQUUsS0FBSyxDQUFDLENBQUM7b0JBR2hELGdCQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUN6QixXQUFHLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztnQkFDekIsQ0FBQyxDQUFDLENBQUM7WUFDTCxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFFTCxZQUFFLENBQUMsZ0RBQWdELEVBQUUsZUFBSyxDQUFDLGdCQUFNLENBQUMsRUFBRSxFQUFFO2dCQUNwRSxJQUFJLFFBQVEsR0FBRyw4QkFBOEIsQ0FBQztnQkFDOUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLE9BQXdDO29CQUM1RCxJQUFJLE9BQU8sR0FBaUIsT0FBTyxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMscUJBQUUsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztvQkFDM0UsSUFBSSxJQUFJLEdBQUcsV0FBRyxDQUFDLFdBQVcsQ0FBQztvQkFDM0IsSUFBSSxLQUFLLEdBQUcsS0FBSyxDQUFDO29CQUNsQixXQUFHLENBQUMsV0FBVyxHQUFHO3dCQUNoQixLQUFLLEdBQUcsSUFBSSxDQUFDO3dCQUNiLE1BQU0sQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLENBQUM7b0JBQzNCLENBQUMsQ0FBQztvQkFFRixJQUFJLEtBQUssR0FBRyxXQUFXLEVBQUUsQ0FBQztvQkFDMUIsT0FBTyxDQUFDLG1CQUFtQixDQUFDLFdBQVcsRUFBRSxLQUFLLENBQUMsQ0FBQztvQkFFaEQsZ0JBQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7b0JBQzFCLFdBQUcsQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO2dCQUN6QixDQUFDLENBQUMsQ0FBQztZQUNMLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNQLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQyxDQUFDLENBQUM7QUFDTCxDQUFDO0FBN0VlLFlBQUksT0E2RW5CLENBQUEifQ==
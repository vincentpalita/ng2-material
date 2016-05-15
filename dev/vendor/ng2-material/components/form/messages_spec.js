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
var common_1 = require('@angular/common');
var platform_browser_1 = require('@angular/platform-browser');
var util_1 = require('../../platform/testing/util');
function main() {
    var TestComponent = (function () {
        function TestComponent() {
            this.name = 'MorTon';
        }
        TestComponent = __decorate([
            core_1.Component({
                selector: 'test-app',
                directives: [common_1.CORE_DIRECTIVES, common_1.FORM_DIRECTIVES, index_1.MdMessage, index_1.MdMessages],
                template: "\n    <form>\n      <input ngControl=\"name\" required #name=\"ngForm\"/>\n      <section [md-messages]=\"name\">\n        <div md-message=\"required\">required</div>\n      </section>\n    </form>"
            }), 
            __metadata('design:paramtypes', [])
        ], TestComponent);
        return TestComponent;
    }());
    testing_1.describe('Form Messages', function () {
        var builder;
        function setup(template) {
            if (template === void 0) { template = null; }
            var prep = template === null ?
                builder.createAsync(TestComponent) :
                builder.overrideTemplate(TestComponent, template).createAsync(TestComponent);
            return prep.then(function (fixture) {
                fixture.detectChanges();
                var container = fixture.debugElement.query(platform_browser_1.By.directive(index_1.MdMessages)).injector.get(index_1.MdMessages);
                var messages = fixture.debugElement.queryAll(platform_browser_1.By.directive(index_1.MdMessage)).map(function (b) { return b.injector.get(index_1.MdMessage); });
                return {
                    fixture: fixture,
                    container: container,
                    messages: messages
                };
            });
        }
        testing_1.beforeEach(testing_1.inject([testing_2.TestComponentBuilder], function (tcb) {
            builder = tcb;
        }));
        testing_1.describe('md-messages', function () {
            testing_1.it('should error if used outside of an NgFormControl', testing_1.async(testing_1.inject([], function () {
                return setup("<div md-messages></div>").catch(function (err) {
                    testing_1.expect(err).toBeDefined();
                });
            })));
            testing_1.it('should initialize when given model and control group are present', testing_1.async(testing_1.inject([], function () {
                return setup().then(function (api) {
                    testing_1.expect(api.container.isTouched).toBe(false);
                    api.fixture.destroy();
                });
            })));
            testing_1.it('should bind local view references #ref="ngForm"', testing_1.async(testing_1.inject([], function () {
                return setup().then(function (api) {
                    testing_1.expect(api.container.isTouched).toBe(false);
                    testing_1.expect(api.messages.length).toBe(1);
                    testing_1.expect(api.container.form).not.toBeNull();
                    testing_1.expect(api.fixture.componentInstance.name).toBe('MorTon');
                });
            })));
            testing_1.it('should re-export valid from control or form', testing_1.async(testing_1.inject([], function () {
                return setup().then(function (api) {
                    return util_1.promiseWait().then(function () {
                        var ctrl = api.container.property.control;
                        testing_1.expect(ctrl.value).toBe(null);
                        testing_1.expect(api.container.valid).toBe(false);
                        testing_1.expect(api.container.valid).toBe(ctrl.valid);
                        ctrl.updateValue('MorTon', { emitEvent: true });
                        api.fixture.detectChanges();
                        testing_1.expect(api.container.valid).toBe(true);
                    });
                });
            })));
        });
    });
}
exports.main = main;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVzc2FnZXNfc3BlYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2Zvcm0vbWVzc2FnZXNfc3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsd0JBQThELHVCQUF1QixDQUFDLENBQUE7QUFDdEYsd0JBQXFELDJCQUEyQixDQUFDLENBQUE7QUFDakYscUJBQXdCLGVBQWUsQ0FBQyxDQUFBO0FBQ3hDLHNCQUFvQyxhQUFhLENBQUMsQ0FBQTtBQUNsRCx1QkFBd0QsaUJBQWlCLENBQUMsQ0FBQTtBQUMxRSxpQ0FBaUIsMkJBQTJCLENBQUMsQ0FBQTtBQUM3QyxxQkFBMEIsNkJBQTZCLENBQUMsQ0FBQTtBQUd4RDtJQWtCRTtRQUFBO1lBQ0UsU0FBSSxHQUFXLFFBQVEsQ0FBQztRQUMxQixDQUFDO1FBYkQ7WUFBQyxnQkFBUyxDQUFDO2dCQUNULFFBQVEsRUFBRSxVQUFVO2dCQUNwQixVQUFVLEVBQUUsQ0FBQyx3QkFBZSxFQUFFLHdCQUFlLEVBQUUsaUJBQVMsRUFBRSxrQkFBVSxDQUFDO2dCQUNyRSxRQUFRLEVBQUUsdU1BTUY7YUFDVCxDQUFDOzt5QkFBQTtRQUdGLG9CQUFDO0lBQUQsQ0FBQyxBQUZELElBRUM7SUFFRCxrQkFBUSxDQUFDLGVBQWUsRUFBRTtRQUN4QixJQUFJLE9BQTZCLENBQUM7UUFFbEMsZUFBZSxRQUF1QjtZQUF2Qix3QkFBdUIsR0FBdkIsZUFBdUI7WUFDcEMsSUFBSSxJQUFJLEdBQUcsUUFBUSxLQUFLLElBQUk7Z0JBQzFCLE9BQU8sQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDO2dCQUNsQyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsYUFBYSxFQUFFLFFBQVEsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsQ0FBQztZQUMvRSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFDLE9BQXdDO2dCQUN4RCxPQUFPLENBQUMsYUFBYSxFQUFF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
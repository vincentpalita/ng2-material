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
var platform_browser_1 = require("@angular/platform-browser");
function main() {
    var TestComponent = (function () {
        function TestComponent() {
            this.hideBinding = 'hide';
            this.showBinding = 'show';
            this.sizeBinding = 50;
        }
        TestComponent = __decorate([
            core_1.Component({
                selector: 'test-app',
                directives: [index_1.MdPeekaboo],
                template: "<div md-peekaboo></div>"
            }), 
            __metadata('design:paramtypes', [])
        ], TestComponent);
        return TestComponent;
    }());
    testing_1.describe('Peekaboo', function () {
        var builder;
        function setup(template) {
            if (template === void 0) { template = null; }
            var prep = template === null ?
                builder.createAsync(TestComponent) :
                builder.overrideTemplate(TestComponent, template).createAsync(TestComponent);
            return prep.then(function (fixture) {
                fixture.detectChanges();
                var debug = fixture.debugElement.query(platform_browser_1.By.directive(index_1.MdPeekaboo));
                var component = debug.injector.get(index_1.MdPeekaboo);
                return {
                    fixture: fixture,
                    peek: component,
                    debug: debug
                };
            }).catch(console.error.bind(console));
        }
        testing_1.beforeEach(testing_1.inject([testing_2.TestComponentBuilder], function (tcb) {
            builder = tcb;
        }));
        testing_1.describe('[md-peekaboo]', function () {
            testing_1.it('should be inactive by default', testing_1.async(testing_1.inject([], function () {
                return setup().then(function (api) {
                    testing_1.expect(api.peek.active).toBe(false);
                    api.fixture.destroy();
                });
            })));
            testing_1.describe('breakAction', function () {
                testing_1.it('should be undefined by default', testing_1.async(testing_1.inject([], function () {
                    return setup().then(function (api) {
                        testing_1.expect(api.peek.breakAction).toBeUndefined();
                    });
                })));
                testing_1.it('should be set by attribute', testing_1.async(testing_1.inject([], function () {
                    return setup("<div md-peekaboo breakAction=\"show\"></div>").then(function (api) {
                        testing_1.expect(api.peek.breakAction).toBe('show');
                    });
                })));
                testing_1.it('should be set by binding', testing_1.async(testing_1.inject([], function () {
                    return setup("<div md-peekaboo [breakAction]=\"hideBinding\"></div>").then(function (api) {
                        testing_1.expect(api.peek.breakAction).toBe('hide');
                    });
                })));
            });
            ['breakXs', 'breakSm', 'breakMd', 'breakLg', 'breakXl'].forEach(function (size) {
                testing_1.describe(size, function () {
                    testing_1.it('should be -1 by default', testing_1.async(testing_1.inject([], function () {
                        return setup().then(function (api) {
                            testing_1.expect(api.peek[size]).toBe(-1);
                        });
                    })));
                    testing_1.it('should be set by attribute', testing_1.async(testing_1.inject([], function () {
                        return setup("<div md-peekaboo " + size + "=\"25\"></div>").then(function (api) {
                            testing_1.expect(api.peek[size]).toBe(25);
                        });
                    })));
                    testing_1.it('should be set by binding', testing_1.async(testing_1.inject([], function () {
                        return setup("<div md-peekaboo [" + size + "]=\"sizeBinding\"></div>").then(function (api) {
                            testing_1.expect(api.peek[size]).toBe(50);
                        });
                    })));
                    testing_1.it('should work with all breakpoint sizes', testing_1.async(testing_1.inject([], function () {
                        return setup("<div md-peekaboo [" + size + "]=\"sizeBinding\"></div>").then(function (api) {
                            index_1.MdPeekaboo.SIZES.forEach(function (s) {
                                api.peek.breakpoint = s;
                            });
                        });
                    })));
                });
            });
        });
    });
}
exports.main = main;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGVla2Fib29fc3BlYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3BlZWthYm9vL3BlZWthYm9vX3NwZWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHdCQU9PLHVCQUF1QixDQUFDLENBQUE7QUFDL0Isd0JBQXFELDJCQUEyQixDQUFDLENBQUE7QUFDakYscUJBQXNDLGVBQWUsQ0FBQyxDQUFBO0FBQ3RELHNCQUF5QixhQUFhLENBQUMsQ0FBQTtBQUN2QyxpQ0FBaUIsMkJBQTJCLENBQUMsQ0FBQTtBQUU3QztJQWFFO1FBQUE7WUFDRSxnQkFBVyxHQUFXLE1BQU0sQ0FBQztZQUM3QixnQkFBVyxHQUFXLE1BQU0sQ0FBQztZQUM3QixnQkFBVyxHQUFXLEVBQUUsQ0FBQztRQUMzQixDQUFDO1FBVEQ7WUFBQyxnQkFBUyxDQUFDO2dCQUNULFFBQVEsRUFBRSxVQUFVO2dCQUNwQixVQUFVLEVBQUUsQ0FBQyxrQkFBVSxDQUFDO2dCQUN4QixRQUFRLEVBQUUseUJBQXlCO2FBQ3BDLENBQUM7O3lCQUFBO1FBS0Ysb0JBQUM7SUFBRCxDQUFDLEFBSkQsSUFJQztJQUVELGtCQUFRLENBQUMsVUFBVSxFQUFFO1FBQ25CLElBQUksT0FBNkIsQ0FBQztRQUVsQyxlQUFlLFFBQXVCO1lBQXZCLHdCQUF1QixHQUF2QixlQUF1QjtZQUNwQyxJQUFJLElBQUksR0FBRyxRQUFRLEtBQUssSUFBSTtnQkFDMUIsT0FBTyxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUM7Z0JBQ2xDLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxhQUFhLEVBQUUsUUFBUSxDQUFDLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1lBQy9FLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQUMsT0FBd0M7Z0JBQ3hELE9BQU8sQ0FBQyxhQUFhLEVBQUUsQ0FBQztnQkFDeEIsSUFBSSxLQUFLLEdBQUcsT0FBTyxD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
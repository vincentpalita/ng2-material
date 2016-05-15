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
var util_1 = require("../../platform/testing/util");
function main() {
    var TestComponent = (function () {
        function TestComponent() {
        }
        TestComponent = __decorate([
            core_1.Component({
                selector: 'test-app',
                directives: [index_1.MdBackdrop],
                template: "<md-backdrop></md-backdrop>"
            }), 
            __metadata('design:paramtypes', [])
        ], TestComponent);
        return TestComponent;
    }());
    testing_1.describe('Backdrop', function () {
        var builder;
        function setup(show, transitionAddClass) {
            if (show === void 0) { show = false; }
            if (transitionAddClass === void 0) { transitionAddClass = true; }
            var result = null;
            return util_1.promiseWait()
                .then(function () { return builder.createAsync(TestComponent); })
                .then(function (fixture) {
                var debug = fixture.debugElement.query(platform_browser_1.By.css('md-backdrop'));
                var backdrop = debug.componentInstance;
                backdrop.transitionAddClass = transitionAddClass;
                fixture.detectChanges();
                result = {
                    fixture: fixture,
                    debug: debug,
                    backdrop: backdrop
                };
                if (show) {
                    return backdrop.show();
                }
            })
                .then(function () { return result; });
        }
        testing_1.beforeEach(testing_1.inject([testing_2.TestComponentBuilder], function (tcb) {
            builder = tcb;
        }));
        testing_1.describe('md-backdrop', function () {
            testing_1.describe('transitionClass', function () {
                testing_1.it('should be added to classList when shown', testing_1.async(testing_1.inject([], function () {
                    return setup(true).then(function (api) {
                        api.fixture.detectChanges();
                        var el = api.debug.nativeElement;
                        testing_1.expect(el.classList.contains(api.backdrop.transitionClass)).toBe(true);
                    });
                })));
                testing_1.it('should be removed from classList when hidden', testing_1.async(testing_1.inject([], function () {
                    return setup(true).then(function (api) {
                        return util_1.promiseWait().then(function () {
                            var el = api.debug.nativeElement;
                            testing_1.expect(el.classList.contains(api.backdrop.transitionClass)).toBe(true);
                            return api.backdrop
                                .hide()
                                .then(function () { return util_1.promiseWait(); })
                                .then(function () {
                                testing_1.expect(el.classList.contains(api.backdrop.transitionClass)).toBe(false);
                            });
                        });
                    });
                })));
            });
            testing_1.describe('transitionAddClass=false', function () {
                testing_1.it('should remove transitionClass when shown', testing_1.async(testing_1.inject([], function () {
                    return setup(false, false).then(function (api) {
                        var el = api.debug.nativeElement;
                        testing_1.expect(el.classList.contains(api.backdrop.transitionClass)).toBe(false);
                        el.classList.contains(api.backdrop.transitionClass);
                        return api.backdrop.show().then(function () {
                            testing_1.expect(el.classList.contains(api.backdrop.transitionClass)).toBe(false);
                        });
                    });
                })));
                testing_1.it('should add transitionClass when hidden', testing_1.async(testing_1.inject([], function () {
                    return setup(true, false).then(function (api) {
                        var el = api.debug.nativeElement;
                        testing_1.expect(el.classList.contains(api.backdrop.transitionClass)).toBe(false);
                        return api.backdrop.hide().then(function () {
                            testing_1.expect(el.classList.contains(api.backdrop.transitionClass)).toBe(true);
                        });
                    });
                })));
            });
            testing_1.describe('clickClose', function () {
                testing_1.it('should be hidden by a click when true', testing_1.async(testing_1.inject([], function () {
                    return setup(true).then(function (api) {
                        var triggered = false;
                        api.backdrop.clickClose = true;
                        api.backdrop.hide = function () {
                            triggered = true;
                            return Promise.resolve();
                        };
                        api.debug.nativeElement.click();
                        testing_1.expect(triggered).toBe(true);
                    });
                })));
                testing_1.it('should not be hidden when clickClose is false', testing_1.async(testing_1.inject([], function () {
                    return setup(true).then(function (api) {
                        var triggered = false;
                        api.backdrop.clickClose = false;
                        api.backdrop.hide = function () {
                            triggered = true;
                            return Promise.resolve();
                        };
                        api.debug.nativeElement.click();
                        testing_1.expect(triggered).toBe(false);
                    });
                })));
                testing_1.it('should not be clickable during transition animation', testing_1.async(testing_1.inject([], function () {
                    return setup().then(function (api) {
                        var triggered = false;
                        api.backdrop.clickClose = true;
                        api.backdrop.hide = function () {
                            triggered = true;
                            return Promise.resolve();
                        };
                        var promise = api.backdrop.show();
                        api.debug.nativeElement.click();
                        testing_1.expect(triggered).toBe(false);
                        return promise.then(function () {
                            testing_1.expect(triggered).toBe(false);
                            api.debug.nativeElement.click();
                            testing_1.expect(triggered).toBe(true);
                        });
                    });
                })));
            });
            testing_1.describe('show', function () {
                testing_1.it('emit events before and after being shown', testing_1.async(testing_1.inject([], function () {
                    return setup().then(function (api) {
                        var changes = [];
                        testing_1.expect(api.backdrop.visible).toBe(false);
                        api.backdrop.onShowing.subscribe(function () { return changes.push('showing'); });
                        api.backdrop.onShown.subscribe(function () { return changes.push('shown'); });
                        return api.backdrop
                            .show()
                            .then(function () { return util_1.promiseWait(); })
                            .then(function () {
                            testing_1.expect(changes.length).toBe(2);
                            testing_1.expect(changes[0]).toBe('showing');
                            testing_1.expect(changes[1]).toBe('shown');
                        });
                    });
                })));
                testing_1.it('does not emit events events if already shown', testing_1.async(testing_1.inject([], function () {
                    return setup(true).then(function (api) {
                        var changes = 0;
                        api.backdrop.onShowing.subscribe(function () { return changes++; });
                        api.backdrop.onShown.subscribe(function () { return changes++; });
                        return api.backdrop
                            .show()
                            .then(function () { return util_1.promiseWait(); })
                            .then(function () {
                            testing_1.expect(changes).toBe(0);
                        });
                    });
                })));
            });
            testing_1.describe('hide', function () {
                testing_1.it('hide emits events before and after being hidden', testing_1.async(testing_1.inject([], function () {
                    return setup(true).then(function (api) {
                        var changes = [];
                        api.backdrop.onHiding.subscribe(function () { return changes.push('hiding'); });
                        api.backdrop.onHidden.subscribe(function () { return changes.push('hidden'); });
                        return api.backdrop
                            .hide()
                            .then(function () { return util_1.promiseWait(); })
                            .then(function () {
                            testing_1.expect(changes.length).toBe(2);
                            testing_1.expect(changes[0]).toBe('hiding');
                            testing_1.expect(changes[1]).toBe('hidden');
                        });
                    });
                })));
                testing_1.it('does not emit events events if already hidden', testing_1.async(testing_1.inject([], function () {
                    return setup().then(function (api) {
                        var changes = 0;
                        testing_1.expect(api.backdrop.visible).toBe(false);
                        api.backdrop.onHiding.subscribe(function () { return changes++; });
                        api.backdrop.onHidden.subscribe(function () { return changes++; });
                        return api.backdrop
                            .hide()
                            .then(function () { return util_1.promiseWait(); })
                            .then(function () {
                            testing_1.expect(changes).toBe(0);
                        });
                    });
                })));
            });
        });
    });
}
exports.main = main;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFja2Ryb3Bfc3BlYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2JhY2tkcm9wL2JhY2tkcm9wX3NwZWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHdCQU9PLHVCQUF1QixDQUFDLENBQUE7QUFDL0Isd0JBQXFELDJCQUEyQixDQUFDLENBQUE7QUFDakYscUJBQXNDLGVBQWUsQ0FBQyxDQUFBO0FBQ3RELHNCQUF5QixhQUFhLENBQUMsQ0FBQTtBQUN2QyxpQ0FBaUIsMkJBQTJCLENBQUMsQ0FBQTtBQUM3QyxxQkFBMEIsNkJBQTZCLENBQUMsQ0FBQTtBQUV4RDtJQWFFO1FBQUE7UUFDQSxDQUFDO1FBTkQ7WUFBQyxnQkFBUyxDQUFDO2dCQUNULFFBQVEsRUFBRSxVQUFVO2dCQUNwQixVQUFVLEVBQUUsQ0FBQyxrQkFBVSxDQUFDO2dCQUN4QixRQUFRLEVBQUUsNkJBQTZCO2FBQ3hDLENBQUM7O3lCQUFBO1FBRUYsb0JBQUM7SUFBRCxDQUFDLEFBREQsSUFDQztJQUVELGtCQUFRLENBQUMsVUFBVSxFQUFFO1FBQ25CLElBQUksT0FBNkIsQ0FBQztRQUVsQyxlQUFlLElBQXFCLEVBQUUsa0JBQWtDO1lBQXpELG9CQUFxQixHQUFyQixZQUFxQjtZQUFFLGtDQUFrQyxHQUFsQyx5QkFBa0M7WUFDdEUsSUFBSSxNQUFNLEdBQXFCLElBQUksQ0FBQztZQUNwQyxNQUFNLENBQUMsa0JBQVcsRUFBRTtpQkFDakIsSUFBSSxDQUFDLGNBQU0sT0FBQSxPQUFPLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxFQUFsQyxDQUFrQyxDQUFDO2lCQUM5QyxJQUFJLENBQUMsVUFBQyxPQUF3QztnQkFDN0MsSUFBSSxLQUFLLEdBQWlCLE9BQU8sQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLHFCQUFFLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7Z0JBQzVFLElBQUksUUFBUSxHQUFlLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQztnQkFDbkQsUUFBUSxDQUFDLGtCQUFrQixHQUFHLGtCQUFrQixDQUFDO2dCQUNqRCxPQUFPLENBQUMsYUFBYSxFQUFFLENBQUM7Z0JBQ3hCLE1BQU0sR0FBRztvQkFDUCxPQUFPLEVBQUUsT0FBTztvQkFDaEIsS0FBSyxFQUFFLEtBQUs7b0JBQ1osUUFBUSxFQUFFLFFBQVE7aUJBQ25CLENBQUM7Z0JBQ0YsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztvQkFDVCxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO2dCQUN6QixDQUFDO1lBQ0gsQ0FBQyxDQUFDO2lCQUNELElBQUksQ0FBQyxjQUFNLE9BQUEsTUFBTSxFQUFOLENBQU0sQ0FBQyxDQUFDO1FBQ3hCLENBQUM7UUFFRCxvQkFBVSxDQUFDLGdCQUFNLENBQUMsQ0FBQyw4QkFBb0IsQ0FBQyxFQUFFLFVBQUMsR0FBRztZQUM1QyxPQUFPLEdBQUcsR0FBRyxDQUFDO1FBQ2hCLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFSixrQkFBUSxDQUFDLGFBQWEsRUFBRTtZQUV0QixrQkFBUSxDQUFDLGlCQUFpQixFQUFFO2dCQUMxQixZQUFFLENBQUMseUNBQXlDLEVBQUUsZUFBSyxDQUFDLGdCQUFNLENBQUMsRUFBRSxFQUFFO29CQUM3RCxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLEdBQXFCO3dCQUM1QyxHQUFHLENBQUMsT0FBTyxDQUFDLGFBQWEsRUFBRSxDQUFDO3dCQUM1QixJQUFJLEVBQUUsR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQzt3QkFDakMsZ0JBQU0sQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUN6RSxDQUFDLENBQUMsQ0FBQztnQkFDTCxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ0wsWUFBRSxDQUFDLDhDQUE4QyxFQUFFLGVBQUssQ0FBQyxnQkFBTSxDQUFDLEVBQUUsRUFBRTtvQkFDbEUsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQyxHQUFxQjt3QkFDNUMsTUFBTSxDQUFDLGtCQUFXLEVBQUUsQ0FBQyxJQUFJLENBQUM7NEJBQ3hCLElBQUksRUFBRSxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDOzRCQUNqQyxnQkFBTSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7NEJBQ3ZFLE1BQU0sQ0FBQyxHQUFHLENBQUMsUUFBUTtpQ0FDaEIsSUFBSSxFQUFFO2lDQUNOLElBQUksQ0FBQyxjQUFNLE9BQUEsa0JBQVcsRUFBRSxFQUFiLENBQWEsQ0FBQztpQ0FDekIsSUFBSSxDQUFDO2dDQUNKLGdCQUFNLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQzs0QkFDMUUsQ0FBQyxDQUFDLENBQUM7d0JBQ1AsQ0FBQyxDQUFDLENBQUM7b0JBQ0wsQ0FBQyxDQUFDLENBQUM7Z0JBQ0wsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ1AsQ0FBQyxDQUFDLENBQUM7WUFFSCxrQkFBUSxDQUFDLDBCQUEwQixFQUFFO2dCQUNuQyxZQUFFLENBQUMsMENBQTBDLEVBQUUsZUFBSyxDQUFDLGdCQUFNLENBQUMsRUFBRSxFQUFFO29CQUM5RCxNQUFNLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQyxHQUFxQjt3QkFDcEQsSUFBSSxFQUFFLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUM7d0JBQ2pDLGdCQUFNLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQzt3QkFDeEUsRUFBRSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUMsQ0FBQzt3QkFDcEQsTUFBTSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDOzRCQUM5QixnQkFBTSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7d0JBQzFFLENBQUMsQ0FBQyxDQUFDO29CQUNMLENBQUMsQ0FBQyxDQUFDO2dCQUNMLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDTCxZQUFFLENBQUMsd0NBQXdDLEVBQUUsZUFBSyxDQUFDLGdCQUFNLENBQUMsRUFBRSxFQUFFO29CQUM1RCxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQyxHQUFxQjt3QkFDbkQsSUFBSSxFQUFFLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUM7d0JBQ2pDLGdCQUFNLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQzt3QkFDeEUsTUFBTSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDOzRCQUM5QixnQkFBTSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7d0JBQ3pFLENBQUMsQ0FBQyxDQUFDO29CQUNMLENBQUMsQ0FBQyxDQUFDO2dCQUNMLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNQLENBQUMsQ0FBQyxDQUFDO1lBRUgsa0JBQVEsQ0FBQyxZQUFZLEVBQUU7Z0JBQ3JCLFlBQUUsQ0FBQyx1Q0FBdUMsRUFBRSxlQUFLLENBQUMsZ0JBQU0sQ0FBQyxFQUFFLEVBQUU7b0JBQzNELE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUMsR0FBcUI7d0JBQzVDLElBQUksU0FBUyxHQUFHLEtBQUssQ0FBQzt3QkFDdEIsR0FBRyxDQUFDLFFBQVEsQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO3dCQUMvQixHQUFHLENBQUMsUUFBUSxDQUFDLElBQUksR0FBRzs0QkFDbEIsU0FBUyxHQUFHLElBQUksQ0FBQzs0QkFDakIsTUFBTSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQzt3QkFDM0IsQ0FBQyxDQUFDO3dCQUNGLEdBQUcsQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxDQUFDO3dCQUNoQyxnQkFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFDL0IsQ0FBQyxDQUFDLENBQUM7Z0JBQ0wsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNMLFlBQUUsQ0FBQywrQ0FBK0MsRUFBRSxlQUFLLENBQUMsZ0JBQU0sQ0FBQyxFQUFFLEVBQUU7b0JBQ25FLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUMsR0FBcUI7d0JBQzVDLElBQUksU0FBUyxHQUFHLEtBQUssQ0FBQzt3QkFDdEIsR0FBRyxDQUFDLFFBQVEsQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO3dCQUNoQyxHQUFHLENBQUMsUUFBUSxDQUFDLElBQUksR0FBRzs0QkFDbEIsU0FBUyxHQUFHLElBQUksQ0FBQzs0QkFDakIsTUFBTSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQzt3QkFDM0IsQ0FBQyxDQUFDO3dCQUNGLEdBQUcsQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxDQUFDO3dCQUNoQyxnQkFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztvQkFDaEMsQ0FBQyxDQUFDLENBQUM7Z0JBQ0wsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNMLFlBQUUsQ0FBQyxxREFBcUQsRUFBRSxlQUFLLENBQUMsZ0JBQU0sQ0FBQyxFQUFFLEVBQUU7b0JBQ3pFLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBQyxHQUFxQjt3QkFDeEMsSUFBSSxTQUFTLEdBQUcsS0FBSyxDQUFDO3dCQUN0QixHQUFHLENBQUMsUUFBUSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7d0JBQy9CLEdBQUcsQ0FBQyxRQUFRLENBQUMsSUFBSSxHQUFHOzRCQUNsQixTQUFTLEdBQUcsSUFBSSxDQUFDOzRCQUNqQixNQUFNLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFDO3dCQUMzQixDQUFDLENBQUM7d0JBQ0YsSUFBSSxPQUFPLEdBQUcsR0FBRyxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQzt3QkFDbEMsR0FBRyxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLENBQUM7d0JBQzlCLGdCQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO3dCQUNoQyxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQzs0QkFDbEIsZ0JBQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7NEJBQzlCLEdBQUcsQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxDQUFDOzRCQUNoQyxnQkFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQzt3QkFDL0IsQ0FBQyxDQUFDLENBQUM7b0JBQ0wsQ0FBQyxDQUFDLENBQUM7Z0JBQ0wsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ1AsQ0FBQyxDQUFDLENBQUM7WUFDSCxrQkFBUSxDQUFDLE1BQU0sRUFBRTtnQkFDZixZQUFFLENBQUMsMENBQTBDLEVBQUUsZUFBSyxDQUFDLGdCQUFNLENBQUMsRUFBRSxFQUFFO29CQUM5RCxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQUMsR0FBcUI7d0JBQ3hDLElBQUksT0FBTyxHQUFhLEVBQUUsQ0FBQzt3QkFDM0IsZ0JBQU0sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQzt3QkFDekMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLGNBQU0sT0FBQSxPQUFPLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUF2QixDQUF1QixDQUFDLENBQUM7d0JBQ2hFLEdBQUcsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxjQUFNLE9BQUEsT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBckIsQ0FBcUIsQ0FBQyxDQUFDO3dCQUM1RCxNQUFNLENBQUMsR0FBRyxDQUFDLFFBQVE7NkJBQ2hCLElBQUksRUFBRTs2QkFDTixJQUFJLENBQUMsY0FBTSxPQUFBLGtCQUFXLEVBQUUsRUFBYixDQUFhLENBQUM7NkJBQ3pCLElBQUksQ0FBQzs0QkFDSixnQkFBTSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7NEJBQy9CLGdCQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDOzRCQUNuQyxnQkFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQzt3QkFDbkMsQ0FBQyxDQUFDLENBQUM7b0JBQ1AsQ0FBQyxDQUFDLENBQUM7Z0JBQ0wsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNMLFlBQUUsQ0FBQyw4Q0FBOEMsRUFBRSxlQUFLLENBQUMsZ0JBQU0sQ0FBQyxFQUFFLEVBQUU7b0JBQ2xFLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUMsR0FBcUI7d0JBQzVDLElBQUksT0FBTyxHQUFXLENBQUMsQ0FBQzt3QkFDeEIsR0FBRyxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLGNBQU0sT0FBQSxPQUFPLEVBQUUsRUFBVCxDQUFTLENBQUMsQ0FBQzt3QkFDbEQsR0FBRyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLGNBQU0sT0FBQSxPQUFPLEVBQUUsRUFBVCxDQUFTLENBQUMsQ0FBQzt3QkFDaEQsTUFBTSxDQUFDLEdBQUcsQ0FBQyxRQUFROzZCQUNoQixJQUFJLEVBQUU7NkJBQ04sSUFBSSxDQUFDLGNBQU0sT0FBQSxrQkFBVyxFQUFFLEVBQWIsQ0FBYSxDQUFDOzZCQUN6QixJQUFJLENBQUM7NEJBQ0osZ0JBQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQzFCLENBQUMsQ0FBQyxDQUFDO29CQUNQLENBQUMsQ0FBQyxDQUFDO2dCQUNMLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNQLENBQUMsQ0FBQyxDQUFDO1lBRUgsa0JBQVEsQ0FBQyxNQUFNLEVBQUU7Z0JBQ2YsWUFBRSxDQUFDLGlEQUFpRCxFQUFFLGVBQUssQ0FBQyxnQkFBTSxDQUFDLEVBQUUsRUFBRTtvQkFDckUsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQyxHQUFxQjt3QkFDNUMsSUFBSSxPQUFPLEdBQWEsRUFBRSxDQUFDO3dCQUMzQixHQUFHLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsY0FBTSxPQUFBLE9BQU8sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQXRCLENBQXNCLENBQUMsQ0FBQzt3QkFDOUQsR0FBRyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLGNBQU0sT0FBQSxPQUFPLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUF0QixDQUFzQixDQUFDLENBQUM7d0JBQzlELE1BQU0sQ0FBQyxHQUFHLENBQUMsUUFBUTs2QkFDaEIsSUFBSSxFQUFFOzZCQUNOLElBQUksQ0FBQyxjQUFNLE9BQUEsa0JBQVcsRUFBRSxFQUFiLENBQWEsQ0FBQzs2QkFDekIsSUFBSSxDQUFDOzRCQUNKLGdCQUFNLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQzs0QkFDL0IsZ0JBQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7NEJBQ2xDLGdCQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO3dCQUNwQyxDQUFDLENBQUMsQ0FBQztvQkFDUCxDQUFDLENBQUMsQ0FBQztnQkFDTCxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ0wsWUFBRSxDQUFDLCtDQUErQyxFQUFFLGVBQUssQ0FBQyxnQkFBTSxDQUFDLEVBQUUsRUFBRTtvQkFDbkUsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFDLEdBQXFCO3dCQUN4QyxJQUFJLE9BQU8sR0FBVyxDQUFDLENBQUM7d0JBQ3hCLGdCQUFNLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7d0JBQ3pDLEdBQUcsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxjQUFNLE9BQUEsT0FBTyxFQUFFLEVBQVQsQ0FBUyxDQUFDLENBQUM7d0JBQ2pELEdBQUcsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxjQUFNLE9BQUEsT0FBTyxFQUFFLEVBQVQsQ0FBUyxDQUFDLENBQUM7d0JBQ2pELE1BQU0sQ0FBQyxHQUFHLENBQUMsUUFBUTs2QkFDaEIsSUFBSSxFQUFFOzZCQUNOLElBQUksQ0FBQyxjQUFNLE9BQUEsa0JBQVcsRUFBRSxFQUFiLENBQWEsQ0FBQzs2QkFDekIsSUFBSSxDQUFDOzRCQUNKLGdCQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUMxQixDQUFDLENBQUMsQ0FBQztvQkFDUCxDQUFDLENBQUMsQ0FBQztnQkFDTCxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDUCxDQUFDLENBQUMsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDO0lBRUwsQ0FBQyxDQUFDLENBQUM7QUFHTCxDQUFDO0FBNU1lLFlBQUksT0E0TW5CLENBQUEifQ==
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
var core_1 = require("@angular/core");
var testing_1 = require("@angular/core/testing");
var testing_2 = require("@angular/compiler/testing");
var index_1 = require("../../index");
function promiseWait(milliseconds) {
    if (milliseconds === void 0) { milliseconds = 10; }
    return new Promise(function (resolve) {
        setTimeout(function () { return resolve(); }, milliseconds);
    });
}
exports.promiseWait = promiseWait;
function componentSanityCheck(name, selector, template) {
    var TestComponent = (function () {
        function TestComponent() {
        }
        TestComponent = __decorate([
            core_1.Component({
                selector: 'test-app',
                directives: [index_1.MATERIAL_DIRECTIVES],
                template: template
            }), 
            __metadata('design:paramtypes', [])
        ], TestComponent);
        return TestComponent;
    }());
    testing_1.describe(name, function () {
        var builder;
        function setup() {
            return builder.createAsync(TestComponent)
                .then(function (fixture) {
                fixture.detectChanges();
                return fixture;
            })
                .catch(console.error.bind(console));
        }
        testing_1.beforeEach(testing_1.inject([testing_2.TestComponentBuilder], function (tcb) {
            builder = tcb;
        }));
        testing_1.describe(selector, function () {
            testing_1.it('should instantiate component without fail', testing_1.async(testing_1.inject([], function () {
                setup()
                    .then(function () { return promiseWait(); });
            })));
            testing_1.it('should destroy component without fail', testing_1.async(testing_1.inject([], function () {
                setup()
                    .then(function (api) { return api.destroy(); })
                    .then(function () { return promiseWait(); });
            })));
        });
    });
}
exports.componentSanityCheck = componentSanityCheck;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wbGF0Zm9ybS90ZXN0aW5nL3V0aWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUF3QixlQUFlLENBQUMsQ0FBQTtBQUN4Qyx3QkFBc0QsdUJBQXVCLENBQUMsQ0FBQTtBQUM5RSx3QkFBcUQsMkJBQTJCLENBQUMsQ0FBQTtBQUNqRixzQkFBa0MsYUFBYSxDQUFDLENBQUE7QUFFaEQscUJBQTRCLFlBQXlCO0lBQXpCLDRCQUF5QixHQUF6QixpQkFBeUI7SUFDbkQsTUFBTSxDQUFDLElBQUksT0FBTyxDQUFPLFVBQUMsT0FBTztRQUMvQixVQUFVLENBQUMsY0FBTSxPQUFBLE9BQU8sRUFBRSxFQUFULENBQVMsRUFBRSxZQUFZLENBQUMsQ0FBQztJQUM1QyxDQUFDLENBQUMsQ0FBQztBQUNMLENBQUM7QUFKZSxtQkFBVyxjQUkxQixDQUFBO0FBU0QsOEJBQXFDLElBQVksRUFBRSxRQUFnQixFQUFFLFFBQWdCO0lBTW5GO1FBQUE7UUFDQSxDQUFDO1FBTkQ7WUFBQyxnQkFBUyxDQUFDO2dCQUNULFFBQVEsRUFBRSxVQUFVO2dCQUNwQixVQUFVLEVBQUUsQ0FBQywyQkFBbUIsQ0FBQztnQkFDakMsUUFBUSxFQUFFLFFBQVE7YUFDbkIsQ0FBQzs7eUJBQUE7UUFFRixvQkFBQztJQUFELENBQUMsQUFERCxJQUNDO0lBRUQsa0JBQVEsQ0FBQyxJQUFJLEVBQUU7UUFDYixJQUFJLE9BQTZCLENBQUM7UUFFbEM7WUFDRSxNQUFNLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUM7aUJBQ3RDLElBQUksQ0FBQyxVQUFDLE9BQXdDO2dCQUM3QyxPQUFPLENBQUMsYUFBYSxFQUFFLENBQUM7Z0JBQ3hCLE1BQU0sQ0FBQyxPQUFPLENBQUM7WUFDakIsQ0FBQyxDQUFDO2lCQUNELEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1FBQ3hDLENBQUM7UUFFRCxvQkFBVSxDQUFDLGdCQUFNLENBQUMsQ0FBQyw4QkFBb0IsQ0FBQyxFQUFFLFVBQUMsR0FBRztZQUM1QyxPQUFPLEdBQUcsR0FBRyxDQUFDO1FBQ2hCLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFSixrQkFBUSxDQUFDLFFBQVEsRUFBRTtZQUNqQixZQUFFLENBQUMsMkNBQTJDLEVBQUUsZUFBSyxDQUFDLGdCQUFNLENBQUMsRUFBRSxFQUFFO2dCQUMvRCxLQUFLLEVBQUU7cUJBQ0osSUFBSSxDQUFDLGNBQU0sT0FBQSxXQUFXLEVBQUUsRUFBYixDQUFhLENBQUMsQ0FBQztZQUMvQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDTCxZQUFFLENBQUMsdUNBQXVDLEVBQUUsZUFBSyxDQUFDLGdCQUFNLENBQUMsRUFBRSxFQUFFO2dCQUMzRCxLQUFLLEVBQUU7cUJBQ0osSUFBSSxDQUFDLFVBQUMsR0FBb0MsSUFBSyxPQUFBLEdBQUcsQ0FBQyxPQUFPLEVBQUUsRUFBYixDQUFhLENBQUM7cUJBQzdELElBQUksQ0FBQyxjQUFNLE9BQUEsV0FBVyxFQUFFLEVBQWIsQ0FBYSxDQUFDLENBQUM7WUFDL0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDLENBQUMsQ0FBQztBQUVMLENBQUM7QUF0Q2UsNEJBQW9CLHVCQXNDbkMsQ0FBQSJ9
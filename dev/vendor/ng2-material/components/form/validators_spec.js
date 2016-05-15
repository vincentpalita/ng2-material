"use strict";
var testing_1 = require("@angular/core/testing");
var common_1 = require("@angular/common");
var index_1 = require("../../index");
function main() {
    testing_1.describe("Validators", function () {
        testing_1.describe("MdPatternValidator", function () {
            testing_1.it("should not error when pattern is found", function () {
                var v = index_1.MdPatternValidator.inline('[a-z]+');
                testing_1.expect(v(new common_1.Control("abcd"))).toEqual(null);
            });
            testing_1.it("should error when pattern is not found", function () {
                var v = index_1.MdPatternValidator.inline('[a-z]+');
                testing_1.expect(v(new common_1.Control("1234"))).toEqual({ mdPattern: true });
            });
            testing_1.it("should error when pattern is not found", function () {
                var v = index_1.MdPatternValidator.inline('[a-z]+');
                testing_1.expect(v(new common_1.Control("1234"))).toEqual({ mdPattern: true });
            });
        });
        testing_1.describe("MdNumberRequiredValidator", function () {
            var v = index_1.MdNumberRequiredValidator.inline();
            testing_1.it("should not error when number is found", function () {
                testing_1.expect(v(new common_1.Control(2))).toEqual(null);
            });
            testing_1.it("should error when number is a string", function () {
                testing_1.expect(v(new common_1.Control("1234"))).toEqual({ mdNumberRequired: true });
            });
            testing_1.it("should error when given NaN", function () {
                testing_1.expect(v(new common_1.Control(NaN))).toEqual({ mdNumberRequired: true });
            });
            testing_1.it("should error when given nonsense values", function () {
                testing_1.expect(v(new common_1.Control(null))).toEqual({ mdNumberRequired: true });
                testing_1.expect(v(new common_1.Control(undefined))).toEqual({ mdNumberRequired: true });
                testing_1.expect(v(new common_1.Control('sunset'))).toEqual({ mdNumberRequired: true });
            });
        });
    });
}
exports.main = main;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdG9yc19zcGVjLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvZm9ybS92YWxpZGF0b3JzX3NwZWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHdCQUFtQyx1QkFBdUIsQ0FBQyxDQUFBO0FBQzNELHVCQUFzQixpQkFBaUIsQ0FBQyxDQUFBO0FBQ3hDLHNCQUE0RCxhQUFhLENBQUMsQ0FBQTtBQUUxRTtJQUVFLGtCQUFRLENBQUMsWUFBWSxFQUFFO1FBQ3JCLGtCQUFRLENBQUMsb0JBQW9CLEVBQUU7WUFDN0IsWUFBRSxDQUFDLHdDQUF3QyxFQUFFO2dCQUMzQyxJQUFJLENBQUMsR0FBRywwQkFBa0IsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQzVDLGdCQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksZ0JBQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQy9DLENBQUMsQ0FBQyxDQUFDO1lBRUgsWUFBRSxDQUFDLHdDQUF3QyxFQUFFO2dCQUMzQyxJQUFJLENBQUMsR0FBRywwQkFBa0IsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQzVDLGdCQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksZ0JBQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLEVBQUMsU0FBUyxFQUFFLElBQUksRUFBQyxDQUFDLENBQUM7WUFDNUQsQ0FBQyxDQUFDLENBQUM7WUFDSCxZQUFFLENBQUMsd0NBQXdDLEVBQUU7Z0JBQzNDLElBQUksQ0FBQyxHQUFHLDBCQUFrQixDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFDNUMsZ0JBQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxnQkFBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsRUFBQyxTQUFTLEVBQUUsSUFBSSxFQUFDLENBQUMsQ0FBQztZQUM1RCxDQUFDLENBQUMsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDO1FBQ0gsa0JBQVEsQ0FBQywyQkFBMkIsRUFBRTtZQUNwQyxJQUFJLENBQUMsR0FBRyxpQ0FBeUIsQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUMzQyxZQUFFLENBQUMsdUNBQXVDLEVBQUU7Z0JBQzFDLGdCQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksZ0JBQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzFDLENBQUMsQ0FBQyxDQUFDO1lBQ0gsWUFBRSxDQUFDLHNDQUFzQyxFQUFFO2dCQUN6QyxnQkFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLGdCQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxFQUFDLGdCQUFnQixFQUFFLElBQUksRUFBQyxDQUFDLENBQUM7WUFDbkUsQ0FBQyxDQUFDLENBQUM7WUFDSCxZQUFFLENBQUMsNkJBQTZCLEVBQUU7Z0JBQ2hDLGdCQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksZ0JBQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLEVBQUMsZ0JBQWdCLEVBQUUsSUFBSSxFQUFDLENBQUMsQ0FBQztZQUNoRSxDQUFDLENBQUMsQ0FBQztZQUNILFlBQUUsQ0FBQyx5Q0FBeUMsRUFBRTtnQkFDNUMsZ0JBQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxnQkFBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsRUFBQyxnQkFBZ0IsRUFBRSxJQUFJLEVBQUMsQ0FBQyxDQUFDO2dCQUMvRCxnQkFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLGdCQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxFQUFDLGdCQUFnQixFQUFFLElBQUksRUFBQyxDQUFDLENBQUM7Z0JBQ3BFLGdCQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksZ0JBQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLEVBQUMsZ0JBQWdCLEVBQUUsSUFBSSxFQUFDLENBQUMsQ0FBQztZQUNyRSxDQUFDLENBQUMsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQyxDQUFDLENBQUM7QUFDTCxDQUFDO0FBcENlLFlBQUksT0FvQ25CLENBQUEifQ==
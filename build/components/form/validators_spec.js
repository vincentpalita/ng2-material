"use strict";
var forms_1 = require("@angular/forms");
var index_1 = require("../../index");
function main() {
    describe("Validators", function () {
        describe("MdPatternValidator", function () {
            it("should not error when pattern is found", function () {
                var v = index_1.MdPatternValidator.inline('[a-z]+');
                expect(v(new forms_1.FormControl("abcd"))).toEqual(null);
            });
            it("should error when pattern is not found", function () {
                var v = index_1.MdPatternValidator.inline('[a-z]+');
                expect(v(new forms_1.FormControl("1234"))).toEqual({ mdPattern: true });
            });
            it("should error when pattern is not found", function () {
                var v = index_1.MdPatternValidator.inline('[a-z]+');
                expect(v(new forms_1.FormControl("1234"))).toEqual({ mdPattern: true });
            });
        });
        describe("MdNumberRequiredValidator", function () {
            var v = index_1.MdNumberRequiredValidator.inline();
            it("should not error when number is found", function () {
                expect(v(new forms_1.FormControl(2))).toEqual(null);
            });
            it("should error when number is a string", function () {
                expect(v(new forms_1.FormControl("1234"))).toEqual({ mdNumberRequired: true });
            });
            it("should error when given NaN", function () {
                expect(v(new forms_1.FormControl(NaN))).toEqual({ mdNumberRequired: true });
            });
            it("should error when given nonsense values", function () {
                expect(v(new forms_1.FormControl(null))).toEqual({ mdNumberRequired: true });
                expect(v(new forms_1.FormControl(undefined))).toEqual({ mdNumberRequired: true });
                expect(v(new forms_1.FormControl('sunset'))).toEqual({ mdNumberRequired: true });
            });
        });
    });
}
exports.main = main;
//# sourceMappingURL=validators_spec.js.map
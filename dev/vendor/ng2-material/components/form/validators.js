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
var common_1 = require("@angular/common");
var core_1 = require("@angular/core");
var util_1 = require("../../core/util/util");
var PATTERN_VALIDATOR = new core_1.Provider(common_1.NG_VALIDATORS, {
    useExisting: core_1.forwardRef(function () { return MdPatternValidator; }),
    multi: true
});
var MdPatternValidator = (function () {
    function MdPatternValidator() {
    }
    MdPatternValidator.inline = function (pattern) {
        return function validate(control) {
            if (control.value === '' || new RegExp(pattern).test(control.value)) {
                return null;
            }
            return {
                mdPattern: true
            };
        };
    };
    MdPatternValidator.prototype.validate = function (control) {
        return MdPatternValidator.inline(this.mdPattern)(control);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], MdPatternValidator.prototype, "mdPattern", void 0);
    MdPatternValidator = __decorate([
        core_1.Directive({
            selector: '[mdPattern]',
            providers: [PATTERN_VALIDATOR]
        }), 
        __metadata('design:paramtypes', [])
    ], MdPatternValidator);
    return MdPatternValidator;
}());
exports.MdPatternValidator = MdPatternValidator;
var MAXLENGTH_VALIDATOR = new core_1.Provider(common_1.NG_VALIDATORS, {
    useExisting: core_1.forwardRef(function () { return MdMaxLengthValidator; }),
    multi: true
});
var MdMaxLengthValidator = (function () {
    function MdMaxLengthValidator() {
    }
    MdMaxLengthValidator.inline = function (length) {
        return function validate(control) {
            if (!control.value || control.value.length <= length) {
                return null;
            }
            return {
                mdMaxLength: true
            };
        };
    };
    MdMaxLengthValidator.prototype.validate = function (control) {
        return MdMaxLengthValidator.inline(this.mdMaxLength)(control);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], MdMaxLengthValidator.prototype, "mdMaxLength", void 0);
    MdMaxLengthValidator = __decorate([
        core_1.Directive({ selector: '[mdMaxLength]', providers: [MAXLENGTH_VALIDATOR] }), 
        __metadata('design:paramtypes', [])
    ], MdMaxLengthValidator);
    return MdMaxLengthValidator;
}());
exports.MdMaxLengthValidator = MdMaxLengthValidator;
var MAXVALUE_VALIDATOR = new core_1.Provider(common_1.NG_VALIDATORS, {
    useExisting: core_1.forwardRef(function () { return MdMaxValueValidator; }),
    multi: true
});
var MdMaxValueValidator = (function () {
    function MdMaxValueValidator() {
    }
    MdMaxValueValidator.inline = function (length) {
        return function validate(control) {
            if (isNaN(control.value) || control.value <= length) {
                return null;
            }
            return {
                mdMax: true
            };
        };
    };
    MdMaxValueValidator.prototype.validate = function (control) {
        return MdMaxValueValidator.inline(this.mdMax)(control);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], MdMaxValueValidator.prototype, "mdMax", void 0);
    MdMaxValueValidator = __decorate([
        core_1.Directive({ selector: '[mdMax]', providers: [MAXVALUE_VALIDATOR] }), 
        __metadata('design:paramtypes', [])
    ], MdMaxValueValidator);
    return MdMaxValueValidator;
}());
exports.MdMaxValueValidator = MdMaxValueValidator;
var MINVALUE_VALIDATOR = new core_1.Provider(common_1.NG_VALIDATORS, {
    useExisting: core_1.forwardRef(function () { return MdMinValueValidator; }),
    multi: true
});
var MdMinValueValidator = (function () {
    function MdMinValueValidator() {
    }
    MdMinValueValidator.inline = function (length) {
        return function validate(control) {
            if (isNaN(control.value) || control.value >= length) {
                return null;
            }
            return {
                mdMin: true
            };
        };
    };
    MdMinValueValidator.prototype.validate = function (control) {
        return MdMinValueValidator.inline(this.mdMin)(control);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], MdMinValueValidator.prototype, "mdMin", void 0);
    MdMinValueValidator = __decorate([
        core_1.Directive({ selector: '[mdMin]', providers: [MINVALUE_VALIDATOR] }), 
        __metadata('design:paramtypes', [])
    ], MdMinValueValidator);
    return MdMinValueValidator;
}());
exports.MdMinValueValidator = MdMinValueValidator;
var NUMBER_REQUIRED_VALIDATOR = new core_1.Provider(common_1.NG_VALIDATORS, {
    useExisting: core_1.forwardRef(function () { return MdNumberRequiredValidator; }),
    multi: true
});
var MdNumberRequiredValidator = (function () {
    function MdNumberRequiredValidator() {
    }
    MdNumberRequiredValidator.inline = function () {
        return function validate(control) {
            var isNum = !isNaN(control.value) && util_1.isNumber(control.value);
            return isNum ? null : { mdNumberRequired: true };
        };
    };
    MdNumberRequiredValidator.prototype.validate = function (control) {
        return MdNumberRequiredValidator.inline()(control);
    };
    MdNumberRequiredValidator = __decorate([
        core_1.Directive({ selector: '[mdNumberRequired]', providers: [NUMBER_REQUIRED_VALIDATOR] }), 
        __metadata('design:paramtypes', [])
    ], MdNumberRequiredValidator);
    return MdNumberRequiredValidator;
}());
exports.MdNumberRequiredValidator = MdNumberRequiredValidator;
exports.INPUT_VALIDATORS = [
    MdMaxLengthValidator,
    MdPatternValidator,
    MdMaxValueValidator,
    MdMinValueValidator,
    MdNumberRequiredValidator
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdG9ycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2Zvcm0vdmFsaWRhdG9ycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsdUJBQWlFLGlCQUFpQixDQUFDLENBQUE7QUFDbkYscUJBQXFELGVBQWUsQ0FBQyxDQUFBO0FBQ3JFLHFCQUF1QixzQkFBc0IsQ0FBQyxDQUFBO0FBRTlDLElBQU0saUJBQWlCLEdBQUcsSUFBSSxlQUFRLENBQUMsc0JBQWEsRUFBRTtJQUNwRCxXQUFXLEVBQUUsaUJBQVUsQ0FBQyxjQUFNLE9BQUEsa0JBQWtCLEVBQWxCLENBQWtCLENBQUM7SUFDakQsS0FBSyxFQUFFLElBQUk7Q0FDWixDQUFDLENBQUM7QUFNSDtJQUFBO0lBcUJBLENBQUM7SUFqQlEseUJBQU0sR0FBYixVQUFjLE9BQWU7UUFDM0IsTUFBTSxDQUFDLGtCQUFrQixPQUF3QjtZQUMvQyxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxLQUFLLEVBQUUsSUFBSSxJQUFJLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDcEUsTUFBTSxDQUFDLElBQUksQ0FBQztZQUNkLENBQUM7WUFDRCxNQUFNLENBQUM7Z0JBQ0wsU0FBUyxFQUFFLElBQUk7YUFDaEIsQ0FBQztRQUNKLENBQUMsQ0FBQTtJQUNILENBQUM7SUFLRCxxQ0FBUSxHQUFSLFVBQVMsT0FBZ0I7UUFDdkIsTUFBTSxDQUFDLGtCQUFrQixDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDNUQsQ0FBQztJQUxEO1FBQUMsWUFBSyxFQUFFOzt5REFBQTtJQW5CVjtRQUFDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsYUFBYTtZQUN2QixTQUFTLEVBQUUsQ0FBQyxpQkFBaUIs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
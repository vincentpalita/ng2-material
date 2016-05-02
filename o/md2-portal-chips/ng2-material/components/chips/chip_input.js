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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = require("angular2/core");
var chips_1 = require("./chips");
var MdChipInput = (function () {
    function MdChipInput(elementRef, chips) {
        this.elementRef = elementRef;
        this.chips = chips;
        this.input = null;
        this.input = elementRef.nativeElement;
    }
    MdChipInput.prototype.focus = function () {
        if (this.input) {
            this.input.focus();
        }
    };
    MdChipInput.prototype.submitValue = function (input) {
        if (input.value !== '') {
            this.chips.add(input.value);
            input.value = null;
        }
    };
    MdChipInput.prototype.onBackspace = function (input) {
        if (input.value === '') {
            this.chips.removeLast();
        }
    };
    __decorate([
        core_1.HostListener('keyup.enter', ['$event.target']), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [HTMLInputElement]), 
        __metadata('design:returntype', void 0)
    ], MdChipInput.prototype, "submitValue", null);
    __decorate([
        core_1.HostListener('keydown.backspace', ['$event.target']), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [HTMLInputElement]), 
        __metadata('design:returntype', void 0)
    ], MdChipInput.prototype, "onBackspace", null);
    MdChipInput = __decorate([
        core_1.Directive({
            selector: 'input[md-chip-input]'
        }),
        __param(1, core_1.Inject(core_1.forwardRef(function () { return chips_1.MdChips; }))), 
        __metadata('design:paramtypes', [core_1.ElementRef, chips_1.MdChips])
    ], MdChipInput);
    return MdChipInput;
}());
exports.MdChipInput = MdChipInput;
//# sourceMappingURL=chip_input.js.map
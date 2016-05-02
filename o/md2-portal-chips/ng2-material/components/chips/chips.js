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
var core_1 = require("angular2/core");
var chip_1 = require("./chip");
var chip_input_1 = require("./chip_input");
require("rxjs/add/operator/share");
var Rx_1 = require("rxjs/Rx");
var Subject_1 = require("rxjs/Subject");
var uuid_1 = require("../../core/util/uuid");
var Observable_1 = require("rxjs/Observable");
var MdChips = (function () {
    function MdChips(cdr, app) {
        this.cdr = cdr;
        this.app = app;
        this.collection$ = new Rx_1.BehaviorSubject([]);
        this._collection = [];
        this.labels$ = this.collection$.map(function (chips) { return chips.map(function (c) { return c.label; }); });
        this.readonly$ = new Rx_1.BehaviorSubject(false);
        this.placeholder$ = new Rx_1.BehaviorSubject('');
        this.unique$ = new Rx_1.BehaviorSubject(true);
        this._unique = true;
        this.deletable$ = new Rx_1.BehaviorSubject(true);
    }
    MdChips.prototype.focusInput = function () {
        if (this.input) {
            this.input.focus();
        }
    };
    Object.defineProperty(MdChips.prototype, "collection", {
        set: function (value) {
            this._collection = value;
            this.collection$.next(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdChips.prototype, "labels", {
        set: function (chips) {
            this.collection = chips.map(function (c) { return ({ label: c, id: uuid_1.uuid() }); });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdChips.prototype, "readonly", {
        set: function (value) {
            this.readonly$.next(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdChips.prototype, "placeholder", {
        set: function (value) {
            this.placeholder$.next(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdChips.prototype, "unique", {
        set: function (value) {
            this._unique = value;
            this.unique$.next(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdChips.prototype, "deletable", {
        set: function (value) {
            this.deletable$.next(value);
        },
        enumerable: true,
        configurable: true
    });
    MdChips.prototype.add = function (chip, id) {
        if (id === void 0) { id = uuid_1.uuid(); }
        if (!this._unique || this._collection.filter(function (c) { return c.label === chip; }).length === 0) {
            this.collection = this._collection.concat([{ label: chip, id: id }]);
        }
    };
    MdChips.prototype.remove = function (chip) {
        this.collection = this._collection.filter(function (c) { return c.id !== chip.id; });
    };
    MdChips.prototype.removeLast = function () {
        this.collection = this._collection.splice(0, this._collection.length - 1);
    };
    __decorate([
        core_1.ViewChild(chip_input_1.MdChipInput), 
        __metadata('design:type', chip_input_1.MdChipInput)
    ], MdChips.prototype, "input", void 0);
    __decorate([
        core_1.HostListener('click'), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', []), 
        __metadata('design:returntype', void 0)
    ], MdChips.prototype, "focusInput", null);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Subject_1.Subject)
    ], MdChips.prototype, "collection$", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array), 
        __metadata('design:paramtypes', [Array])
    ], MdChips.prototype, "collection", null);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Observable_1.Observable)
    ], MdChips.prototype, "labels$", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array), 
        __metadata('design:paramtypes', [Array])
    ], MdChips.prototype, "labels", null);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Subject_1.Subject)
    ], MdChips.prototype, "readonly$", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean), 
        __metadata('design:paramtypes', [Boolean])
    ], MdChips.prototype, "readonly", null);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Subject_1.Subject)
    ], MdChips.prototype, "placeholder$", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String), 
        __metadata('design:paramtypes', [String])
    ], MdChips.prototype, "placeholder", null);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Subject_1.Subject)
    ], MdChips.prototype, "unique$", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean), 
        __metadata('design:paramtypes', [Boolean])
    ], MdChips.prototype, "unique", null);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Subject_1.Subject)
    ], MdChips.prototype, "deletable$", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean), 
        __metadata('design:paramtypes', [Boolean])
    ], MdChips.prototype, "deletable", null);
    MdChips = __decorate([
        core_1.Component({
            selector: 'md-chips',
            directives: [chip_1.MdChip, chip_input_1.MdChipInput],
            template: "\n  <md-chip *ngFor=\"#chip of collection$ | async\" [chip]=\"chip\"></md-chip>\n  <md-chip-input-container *ngIf=\"!(readonly$ | async)\">\n    <input md-chip-input [attr.placeholder]=\"placeholder$ | async\">\n  </md-chip-input-container>",
            changeDetection: core_1.ChangeDetectionStrategy.OnPush
        }), 
        __metadata('design:paramtypes', [core_1.ChangeDetectorRef, core_1.ApplicationRef])
    ], MdChips);
    return MdChips;
}());
exports.MdChips = MdChips;
//# sourceMappingURL=chips.js.map
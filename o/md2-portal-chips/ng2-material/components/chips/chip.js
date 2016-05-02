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
var icon_1 = require("../icon/icon");
var chips_1 = require("./chips");
var core_2 = require("@angular2-material/core");
var chip_remove_1 = require("./chip_remove");
var chip_content_1 = require("./chip_content");
var MdChip = (function () {
    function MdChip(chips) {
        this.chips = chips;
        this.chipTemplate = null;
        this.removeTemplate = null;
    }
    Object.defineProperty(MdChip.prototype, "viewChip", {
        set: function (value) {
            if (value) {
                this.chipTemplate = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdChip.prototype, "viewRemove", {
        set: function (value) {
            if (value) {
                this.removeTemplate = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdChip.prototype, "contentChip", {
        set: function (value) {
            if (value) {
                this.chipTemplate = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdChip.prototype, "contentRemove", {
        set: function (value) {
            if (value) {
                this.removeTemplate = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        core_1.ViewChild(chip_content_1.MdChipContent), 
        __metadata('design:type', core_2.TemplatePortalDirective), 
        __metadata('design:paramtypes', [core_2.TemplatePortalDirective])
    ], MdChip.prototype, "viewChip", null);
    __decorate([
        core_1.ViewChild(chip_remove_1.MdChipRemove), 
        __metadata('design:type', core_2.TemplatePortalDirective), 
        __metadata('design:paramtypes', [core_2.TemplatePortalDirective])
    ], MdChip.prototype, "viewRemove", null);
    __decorate([
        core_1.ContentChild(chip_content_1.MdChipContent), 
        __metadata('design:type', core_2.TemplatePortalDirective), 
        __metadata('design:paramtypes', [core_2.TemplatePortalDirective])
    ], MdChip.prototype, "contentChip", null);
    __decorate([
        core_1.ContentChild(chip_remove_1.MdChipRemove), 
        __metadata('design:type', core_2.TemplatePortalDirective), 
        __metadata('design:paramtypes', [core_2.TemplatePortalDirective])
    ], MdChip.prototype, "contentRemove", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], MdChip.prototype, "chip", void 0);
    MdChip = __decorate([
        core_1.Component({
            selector: 'md-chip',
            directives: [icon_1.MdIcon, chip_content_1.MdChipContent, chip_remove_1.MdChipRemove, core_2.TemplatePortalDirective, core_2.PortalHostDirective],
            template: "\n<template md-chip-content>{{chip.label}}</template>\n<template md-chip-remove>\n  <button class=\"md-chip-remove\" (click)=\"chips.remove(chip)\" type=\"button\">\n    <i md-icon>cancel</i>\n    <span class=\"md-visually-hidden\">close</span>\n  </button>\n</template>\n<div class=\"md-chip-content\" role=\"button\">\n  <template [portalHost]=\"chipTemplate\"></template>\n</div>\n<div class=\"md-chip-remove-container\" [style.display]=\"(chips.deletable$ | async) ? 'block' : 'none'\">\n  <template [portalHost]=\"removeTemplate\"></template>\n</div>",
            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
            host: {
                '[class.md-deletable]': 'chips.deletable$ | async'
            }
        }),
        __param(0, core_1.Inject(core_1.forwardRef(function () { return chips_1.MdChips; }))), 
        __metadata('design:paramtypes', [chips_1.MdChips])
    ], MdChip);
    return MdChip;
}());
exports.MdChip = MdChip;
//# sourceMappingURL=chip.js.map
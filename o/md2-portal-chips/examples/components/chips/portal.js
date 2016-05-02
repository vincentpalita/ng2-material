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
var all_1 = require("ng2-material/all");
var core_2 = require("@angular2-material/core");
var ChipsPortal = (function () {
    function ChipsPortal() {
    }
    Object.defineProperty(ChipsPortal.prototype, "programmingJoke", {
        get: function () {
            return this.templatePortals.first;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ChipsPortal.prototype, "mathJoke", {
        get: function () {
            return this.templatePortals.last;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ChipsPortal.prototype, "scienceJoke", {
        get: function () {
            return new core_2.ComponentPortal(ScienceJoke);
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        core_1.ViewChildren(core_2.TemplatePortalDirective), 
        __metadata('design:type', core_1.QueryList)
    ], ChipsPortal.prototype, "templatePortals", void 0);
    ChipsPortal = __decorate([
        core_1.Component({
            selector: 'chips-portal',
            templateUrl: 'examples/components/chips/portal.html',
            styleUrls: ['examples/components/chips/portal.css'],
            directives: [all_1.MATERIAL_DIRECTIVES, core_2.TemplatePortalDirective, core_2.PortalHostDirective]
        }), 
        __metadata('design:paramtypes', [])
    ], ChipsPortal);
    return ChipsPortal;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ChipsPortal;
var ScienceJoke = (function () {
    function ScienceJoke() {
    }
    ScienceJoke = __decorate([
        core_1.Component({
            selector: 'science-joke',
            template: "<p> 100 kilopascals go into a bar. </p>"
        }), 
        __metadata('design:paramtypes', [])
    ], ScienceJoke);
    return ScienceJoke;
}());
//# sourceMappingURL=portal.js.map
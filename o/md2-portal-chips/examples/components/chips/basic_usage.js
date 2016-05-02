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
var common_1 = require("angular2/common");
var chips_1 = require("../../../ng2-material/components/chips/chips");
var async_1 = require("angular2/src/facade/async");
var Rx_1 = require("rxjs/Rx");
var ChipsBasicUsage = (function () {
    function ChipsBasicUsage() {
        this.deletable = true;
        this.unique = true;
        this.readonly = false;
        this.placeholder = "Start typing";
        this.chipLabels$ = new Rx_1.BehaviorSubject([
            'Roberto', 'Philip J. Fry', 'Bender B. Rodriguez', 'Lord Nibbler', 'Zapp Brannigan'
        ]);
        this.chipCount$ = new Rx_1.BehaviorSubject(0);
    }
    ChipsBasicUsage.prototype.ngAfterContentInit = function () {
        var _this = this;
        async_1.TimerWrapper.setTimeout(function () {
            _this.chipCount$ = _this.chips.collection$.map(function (cl) { return cl.length; });
        }, 0);
    };
    __decorate([
        core_1.ViewChild(chips_1.MdChips), 
        __metadata('design:type', chips_1.MdChips)
    ], ChipsBasicUsage.prototype, "chips", void 0);
    ChipsBasicUsage = __decorate([
        core_1.Component({
            selector: 'chips-basic-usage',
            templateUrl: 'examples/components/chips/basic_usage.html',
            styleUrls: ['examples/components/chips/basic_usage.css'],
            directives: [all_1.MATERIAL_DIRECTIVES, common_1.FORM_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [])
    ], ChipsBasicUsage);
    return ChipsBasicUsage;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ChipsBasicUsage;
//# sourceMappingURL=basic_usage.js.map
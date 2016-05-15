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
var key_codes_1 = require("../../core/key_codes");
var util_1 = require("../../core/util/util");
var MdSwitch = (function () {
    function MdSwitch() {
        this.checkedChange = new core_1.EventEmitter(false);
        this.checked = false;
        this.disabled_ = false;
    }
    Object.defineProperty(MdSwitch.prototype, "tabindex", {
        get: function () {
            return this._tabindex;
        },
        set: function (value) {
            this._tabindex = util_1.parseTabIndexAttribute(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdSwitch.prototype, "disabled", {
        get: function () {
            return this.disabled_;
        },
        set: function (value) {
            this.disabled_ = typeof value !== 'undefined' && value !== false;
        },
        enumerable: true,
        configurable: true
    });
    MdSwitch.prototype.onKeydown = function (event) {
        if (event.keyCode === key_codes_1.KeyCodes.SPACE) {
            event.preventDefault();
            this.toggle(event);
        }
    };
    MdSwitch.prototype.toggle = function (event) {
        if (this.disabled) {
            event.stopPropagation();
            return;
        }
        this.checked = !this.checked;
        this.checkedChange.emit(this.checked);
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], MdSwitch.prototype, "checkedChange", void 0);
    __decorate([
        core_1.Input(),
        core_1.HostBinding('attr.aria-checked'), 
        __metadata('design:type', Boolean)
    ], MdSwitch.prototype, "checked", void 0);
    __decorate([
        core_1.Input('disabled'),
        core_1.HostBinding('attr.aria-disabled'), 
        __metadata('design:type', Boolean)
    ], MdSwitch.prototype, "disabled_", void 0);
    __decorate([
        core_1.Input('tabindex'), 
        __metadata('design:type', Number)
    ], MdSwitch.prototype, "_tabindex", void 0);
    __decorate([
        core_1.HostListener('keydown', ['$event']), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [KeyboardEvent]), 
        __metadata('design:returntype', void 0)
    ], MdSwitch.prototype, "onKeydown", null);
    __decorate([
        core_1.HostListener('click', ['$event']), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Object]), 
        __metadata('design:returntype', void 0)
    ], MdSwitch.prototype, "toggle", null);
    MdSwitch = __decorate([
        core_1.Component({
            selector: 'md-switch',
            inputs: ['checked', 'disabled'],
            host: {
                'role': 'checkbox'
            },
            template: "\n    <div class=\"md-switch-container\">\n      <div class=\"md-switch-bar\"></div>\n      <div class=\"md-switch-thumb-container\">\n        <div class=\"md-switch-thumb\"></div>\n      </div>\n    </div>\n    <div class=\"md-switch-label\">\n      <ng-content></ng-content>\n    </div>",
            directives: []
        }), 
        __metadata('design:paramtypes', [])
    ], MdSwitch);
    return MdSwitch;
}());
exports.MdSwitch = MdSwitch;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3dpdGNoLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvc3dpdGNoL3N3aXRjaC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQWdGLGVBQWUsQ0FBQyxDQUFBO0FBQ2hHLDBCQUF1QixzQkFBc0IsQ0FBQyxDQUFBO0FBQzlDLHFCQUFxQyxzQkFBc0IsQ0FBQyxDQUFBO0FBb0I1RDtJQUFBO1FBR0Usa0JBQWEsR0FBMEIsSUFBSSxtQkFBWSxDQUFVLEtBQUssQ0FBQyxDQUFDO1FBS3hFLFlBQU8sR0FBWSxLQUFLLENBQUM7UUFLekIsY0FBUyxHQUFZLEtBQUssQ0FBQztJQXdDN0IsQ0FBQztJQWxDQyxzQkFBSSw4QkFBUTthQUlaO1lBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDeEIsQ0FBQzthQU5ELFVBQWEsS0FBYTtZQUN4QixJQUFJLENBQUMsU0FBUyxHQUFHLDZCQUFzQixDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2pELENBQUM7OztPQUFBO0lBTUQsc0JBQUksOEJBQVE7YUFBWjtZQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQ3hCLENBQUM7YUFFRCxVQUFhLEtBQUs7WUFDaEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxPQUFPLEtBQUssS0FBSyxXQUFXLElBQUksS0FBSyxLQUFLLEtBQUssQ0FBQztRQUNuRSxDQUFDOzs7T0FKQTtJQU9ELDRCQUFTLEdBQVQsVUFBVSxLQUFvQjtRQUM1QixFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsT0FBTyxLQUFLLG9CQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUNyQyxLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7WUFDdkIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNyQixDQUFDO0lBQ0gsQ0FBQztJQUdELHlCQUFNLEdBQU4sVUFBTyxLQUFLO1FBQ1YsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7WUFDbEIsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO1lBQ3hCLE1BQU0sQ0FBQztRQUNULENBQUM7UUFFRCxJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUM3QixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDeEMsQ0FBQztJQWxERDtRQUFDLGFBQU0sRUFBRTs7bURBQUE7SUFJVDtRQUFDLFlBQUssRUFBRTtRQUNQLGtCQUFXLENBQUMsbUJBQW1CLENBQUM7OzZDQUFBO0lBSWpDO1FBQUMsWUFBSyxDQUFDLFVBQVUsQ0FBQztRQUNqQixrQkFBVyxDQUFDLG9CQUFvQixDQUFDOzsrQ0FBQTtJQUtsQztRQUFDLFlBQUssQ0FBQyxVQUFVLENBQUM7OytDQUFBO0lBa0JsQjtRQUFDLG1CQUFZLENBQUMsU0FBUyxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUM7Ozs7NkNBQUE7SUFRcEM7UUFBQyxtQkFBWSxDQUFDLE9BQU8sRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDOzs7OzBDQUFBO0lBN0RwQztRQUFDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsV0FBVztZQUNyQixNQUFNLEVBQUUsQ0FBQyxTQUFTLEVBQUUsVUFBVSxDQUFDO1lBQy9CLElBQUksRUFBRTtnQkFDSixNQUFNLEVBQUUsVUFBVTthQUNuQjtZQUNELFFBQVEsRUFBRSxrU0FTRDtZQUNULFVBQVUsRUFBRSxFQUFFO1NBQ2YsQ0FBQzs7Z0JBQUE7SUFzREYsZUFBQztBQUFELENBQUMsQUFyREQsSUFxREM7QUFyRFksZ0JBQVEsV0FxRHBCLENBQUEifQ==
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
var core_1 = require("@angular/core");
var ink_1 = require("../../core/util/ink");
var common_1 = require("@angular/common");
var MdTab = (function () {
    function MdTab(viewContainer, templateRef) {
        this.viewContainer = viewContainer;
        this.templateRef = templateRef;
        this.disabled = false;
        this._active = false;
    }
    Object.defineProperty(MdTab.prototype, "active", {
        get: function () {
            return this._active;
        },
        set: function (active) {
            if (active == this._active) {
                return;
            }
            this._active = active;
            if (active) {
                this.viewContainer.createEmbeddedView(this.templateRef);
            }
            else {
                this.viewContainer.remove(0);
            }
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], MdTab.prototype, "label", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], MdTab.prototype, "disabled", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean), 
        __metadata('design:paramtypes', [Boolean])
    ], MdTab.prototype, "active", null);
    MdTab = __decorate([
        core_1.Directive({
            selector: '[md-tab]'
        }), 
        __metadata('design:paramtypes', [core_1.ViewContainerRef, core_1.TemplateRef])
    ], MdTab);
    return MdTab;
}());
exports.MdTab = MdTab;
var MdTabs = (function () {
    function MdTabs(panes, _element) {
        var _this = this;
        this.panes = panes;
        this._element = _element;
        this.mdNoScroll = false;
        this._selected = 0;
        this.panes.changes.subscribe(function (_) {
            _this.panes.toArray().forEach(function (p, index) {
                p.active = index === _this._selected;
            });
        });
    }
    Object.defineProperty(MdTabs.prototype, "selected", {
        get: function () {
            return this._selected;
        },
        set: function (index) {
            var panes = this.panes.toArray();
            var pane = null;
            if (index >= 0 && index < panes.length) {
                pane = panes[index];
            }
            this.selectedTab = pane;
            this._selected = index;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdTabs.prototype, "selectedTab", {
        get: function () {
            var result = null;
            this.panes.toArray().forEach(function (p) {
                if (p.active) {
                    result = p;
                }
            });
            return result;
        },
        set: function (value) {
            var _this = this;
            this.panes.toArray().forEach(function (p, index) {
                p.active = p == value;
                if (p.active) {
                    _this._selected = index;
                }
            });
        },
        enumerable: true,
        configurable: true
    });
    MdTabs.prototype.onTabClick = function (pane, event) {
        if (event && ink_1.Ink.canApply(this._element.nativeElement)) {
            ink_1.Ink.rippleEvent(event.target, event);
        }
        this.selectedTab = pane;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], MdTabs.prototype, "mdNoScroll", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], MdTabs.prototype, "selected", null);
    MdTabs = __decorate([
        core_1.Component({
            selector: 'md-tabs',
            template: "\n    <md-tabs-wrapper>\n      <md-tab-data></md-tab-data>\n      <md-tabs-canvas role=\"tablist\">\n        <md-pagination-wrapper>\n          <template ngFor [ngForOf]=\"panes\" let-pane=\"$implicit\" let-index=\"i\">\n          <md-tab-item tabindex=\"-1\"\n                       class=\"md-tab\"\n                       (click)=\"onTabClick(pane,$event)\"\n                       [class.md-active]=\"selectedTab == pane\"\n                       [disabled]=\"pane.disabled\"\n                       [style.max-width]=\"maxTabWidth + 'px'\"\n                       role=\"tab\">\n            {{pane.label}}\n          </md-tab-item>\n          </template>\n          <md-ink-bar></md-ink-bar>\n        </md-pagination-wrapper>\n      </md-tabs-canvas>\n    </md-tabs-wrapper>\n    <md-tabs-content-wrapper>\n      <md-tab-content role=\"tabpanel\" class=\"md-active\"\n                      [class.md-no-scroll]=\"mdNoScroll\">\n        <ng-content></ng-content>\n      </md-tab-content>\n    </md-tabs-content-wrapper>",
            directives: [common_1.NgFor],
            properties: ['selected'],
            encapsulation: core_1.ViewEncapsulation.None
        }),
        __param(0, core_1.Query(MdTab)), 
        __metadata('design:paramtypes', [core_1.QueryList, core_1.ElementRef])
    ], MdTabs);
    return MdTabs;
}());
exports.MdTabs = MdTabs;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFicy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3RhYnMvdGFicy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUEscUJBVU8sZUFBZSxDQUFDLENBQUE7QUFDdkIsb0JBQWtCLHFCQUFxQixDQUFDLENBQUE7QUFDeEMsdUJBQW9CLGlCQUFpQixDQUFDLENBQUE7QUFpQnRDO0lBT0UsZUFBbUIsYUFBK0IsRUFDL0IsV0FBNkI7UUFEN0Isa0JBQWEsR0FBYixhQUFhLENBQWtCO1FBQy9CLGdCQUFXLEdBQVgsV0FBVyxDQUFrQjtRQUpoRCxhQUFRLEdBQVksS0FBSyxDQUFDO1FBQ2xCLFlBQU8sR0FBWSxLQUFLLENBQUM7SUFJakMsQ0FBQztJQUVRLHNCQUFJLHlCQUFNO2FBWW5CO1lBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDdEIsQ0FBQzthQWRRLFVBQVcsTUFBZTtZQUNqQyxFQUFFLENBQUMsQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7Z0JBQzNCLE1BQU0sQ0FBQztZQUNULENBQUM7WUFDRCxJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQztZQUN0QixFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO2dCQUNYLElBQUksQ0FBQyxhQUFhLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBQzFELENBQUM7WUFBQyxJQUFJLENBQUMsQ0FBQztnQkFDTixJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMvQixDQUFDO1FBQ0gsQ0FBQzs7O09BQUE7SUFwQkQ7UUFBQyxZQUFLLEVBQUU7O3dDQUFBO0lBRVI7UUFBQyxZQUFLLEVBQUU7OzJDQUFBO0lBUVI7UUFBQyxZQUFLLEVBQUU7Ozt1Q0FBQTtJQWRWO1FBQUMsZ0JBQVMsQ0FBQztZ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
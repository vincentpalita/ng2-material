"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
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
var ink_1 = require("../../core/util/ink");
var BUTTON_TEMPLATE = "<span class=\"md-button-wrapper\"><ng-content></ng-content></span>";
var MdButton = (function () {
    function MdButton(_element) {
        this._element = _element;
        this.isMouseDown = false;
        this.isKeyboardFocused = false;
    }
    MdButton.prototype.onMousedown = function (event) {
        var _this = this;
        this.isMouseDown = true;
        setTimeout(function () {
            _this.isMouseDown = false;
        }, 100);
        if (this._element && ink_1.Ink.canApply(this._element.nativeElement)) {
            ink_1.Ink.rippleEvent(this._element.nativeElement, event);
        }
    };
    MdButton.prototype.onFocus = function () {
        this.isKeyboardFocused = !this.isMouseDown;
    };
    MdButton.prototype.onBlur = function () {
        this.isKeyboardFocused = false;
    };
    MdButton = __decorate([
        core_1.Component({
            selector: '[md-button]:not(a), [md-fab]:not(a), [md-raised-button]:not(a)',
            template: BUTTON_TEMPLATE,
            encapsulation: core_1.ViewEncapsulation.None,
            host: {
                '(mousedown)': 'onMousedown($event)',
                '(focus)': 'onFocus()',
                '(blur)': 'onBlur()',
                '[class.md-button-focus]': 'isKeyboardFocused',
            },
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], MdButton);
    return MdButton;
}());
exports.MdButton = MdButton;
var MdAnchor = (function (_super) {
    __extends(MdAnchor, _super);
    function MdAnchor() {
        _super.apply(this, arguments);
    }
    Object.defineProperty(MdAnchor.prototype, "disabled", {
        get: function () {
            return this.disabled_;
        },
        set: function (value) {
            this.disabled_ = !!value && this.disabled !== false;
        },
        enumerable: true,
        configurable: true
    });
    MdAnchor.prototype.onClick = function (event) {
        if (this.disabled) {
            event.preventDefault();
        }
    };
    MdAnchor.prototype.ngOnChanges = function (_) {
        this.tabIndex = this.disabled ? -1 : 0;
    };
    Object.defineProperty(MdAnchor.prototype, "isAriaDisabled", {
        get: function () {
            return this.disabled ? 'true' : 'false';
        },
        enumerable: true,
        configurable: true
    });
    MdAnchor = __decorate([
        core_1.Component({
            selector: 'a[md-button], a[md-raised-button], a[md-fab]',
            inputs: ['disabled'],
            template: BUTTON_TEMPLATE,
            encapsulation: core_1.ViewEncapsulation.None,
            host: {
                '(click)': 'onClick($event)',
                '(mousedown)': 'onMousedown()',
                '(focus)': 'onFocus()',
                '(blur)': 'onBlur()',
                '[tabIndex]': 'tabIndex',
                '[class.md-button-focus]': 'isKeyboardFocused',
                '[attr.aria-disabled]': 'isAriaDisabled',
            },
        }), 
        __metadata('design:paramtypes', [])
    ], MdAnchor);
    return MdAnchor;
}(MdButton));
exports.MdAnchor = MdAnchor;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvYnV0dG9uL2J1dHRvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQSxxQkFBa0UsZUFBZSxDQUFDLENBQUE7QUFDbEYsb0JBQWtCLHFCQUFxQixDQUFDLENBQUE7QUFHeEMsSUFBTSxlQUFlLEdBQUcsb0VBQWtFLENBQUM7QUFlM0Y7SUFPRSxrQkFBb0IsUUFBb0I7UUFBcEIsYUFBUSxHQUFSLFFBQVEsQ0FBWTtRQUx4QyxnQkFBVyxHQUFZLEtBQUssQ0FBQztRQUc3QixzQkFBaUIsR0FBWSxLQUFLLENBQUM7SUFHbkMsQ0FBQztJQUVELDhCQUFXLEdBQVgsVUFBWSxLQUFLO1FBQWpCLGlCQWFDO1FBUkMsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7UUFDeEIsVUFBVSxDQUFDO1lBQ1QsS0FBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUE7UUFDMUIsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBRVIsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsSUFBSSxTQUFHLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQy9ELFNBQUcsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDdEQsQ0FBQztJQUNILENBQUM7SUFFRCwwQkFBTyxHQUFQO1FBQ0UsSUFBSSxDQUFDLGlCQUFpQixHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQztJQUM3QyxDQUFDO0lBRUQseUJBQU0sR0FBTjtRQUNFLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxLQUFLLENBQUM7SUFDakMsQ0FBQztJQTFDSDtRQUFDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsZ0VBQWdFO1lBQzFFLFFBQVEsRUFBRSxlQUFlO1lBQ3pCLGFBQWEsRUFBRSx3QkFBaUIsQ0FBQyxJQUFJO1lBQ3JDLElBQUksRUFBRTtnQkFDSixhQUFhLEVBQUUscUJBQXFCO2dCQUNwQyxTQUFTLEVBQUUsV0FBVztnQkFDdEIsUUFBUSxFQUFFLFVBQVU7Z0JBQ3BCLHlCQUF5QixFQUFFLG1CQUFtQjthQUMvQztTQUNGLENBQUM7O2dCQUFBO0lBaUNGLGVBQUM7QUFBRCxDQUFDLEFBaENELElBZ0NDO0FBaENZLGdCQUFRLFdBZ0NwQixDQUFBO0FBa0JEO0lBQThCLDRCQUFRO0lBQXRDO1FBQThCLDhCQUFRO0lBOEJ0QyxDQUFDO0lBMUJDLHNCQUFJLDhCQUFRO2FBQVo7WUFDRSxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUN4QixDQUFDO2FBRUQsVUFBYSxLQUFLO1lBRWhCLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsUUFBUSxLQUFLLEtBQUssQ0FBQztRQUN0RCxDQUFDOzs7T0FMQTtJQU9ELDBCQUFPLEdBQVAsVUFBUSxLQUFLO1FBRVgsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7WUFDbEIsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3pCLENBQUM7SUFDSCxDQUFDO0lBR0QsOEJBQVcsR0FBWCxVQUFZLENBQUM7UUFFWCxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3pDLENBQUM7SUFHRCxzQkFBSSxvQ0FBYzthQUFsQjtZQUNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFHLE1BQU0sR0FBRyxPQUFPLENBQUM7UUFDMUMsQ0FBQzs7O09BQUE7SUE1Q0g7UUFBQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLDhDQUE4QztZQUN4RCxNQUFNLEVBQUUsQ0FBQyxVQUFVLENBQUM7WUFDcEIsUUFBUSxFQUFFLGVBQWU7WUFDekIsYUFBYSxFQUFFLHdCQUFpQixDQUFDLElBQUk7WUFDckMsSUFBSSxFQUFFO2dCQUNKLFNBQVMsRUFBRSxpQkFBaUI7Z0JBQzVCLGFBQWEsRUFBRSxlQUFlO2dCQUM5QixTQUFTLEVBQUUsV0FBVztnQkFDdEIsUUFBUSxFQUFFLFVBQVU7Z0JBQ3BCLFlBQVksRUFBRSxVQUFVO2dCQUN4Qix5QkFBeUIsRUFBRSxtQkFBbUI7Z0JBQzlDLHNCQUFzQixFQUFFLGdCQUFnQjthQUN6QztTQUNGLENBQUM7O2dCQUFBO0lBK0JGLGVBQUM7QUFBRCxDQUFDLEFBOUJELENBQThCLFFBQVEsR0E4QnJDO0FBOUJZLGdCQUFRLFdBOEJwQixDQUFBIn0=
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
var animate_1 = require("../../core/util/animate");
var core_1 = require("@angular/core");
var viewport_1 = require("../../core/util/viewport");
var MdBackdrop = (function () {
    function MdBackdrop(element, viewport) {
        this.element = element;
        this.viewport = viewport;
        this.clickClose = false;
        this.hideScroll = true;
        this.onHiding = new core_1.EventEmitter(false);
        this.onHidden = new core_1.EventEmitter(false);
        this.onShowing = new core_1.EventEmitter();
        this.onShown = new core_1.EventEmitter();
        this.transitionClass = 'md-active';
        this.transitionAddClass = true;
        this._visible = false;
        this._transitioning = false;
        this._previousOverflow = null;
        this._body = document.body;
    }
    Object.defineProperty(MdBackdrop.prototype, "visible", {
        get: function () {
            return this._visible;
        },
        set: function (value) {
            this.toggle(value);
        },
        enumerable: true,
        configurable: true
    });
    MdBackdrop.prototype.onClick = function () {
        if (this.clickClose && !this._transitioning && this.visible) {
            this.hide();
        }
    };
    MdBackdrop.prototype.hide = function () {
        return this.toggle(false);
    };
    MdBackdrop.prototype.show = function () {
        return this.toggle(true);
    };
    MdBackdrop.prototype.toggle = function (visible) {
        var _this = this;
        if (visible === void 0) { visible = !this.visible; }
        if (visible === this._visible) {
            return Promise.resolve();
        }
        var beginEvent = visible ? this.onShowing : this.onHiding;
        var endEvent = visible ? this.onShown : this.onHidden;
        this._visible = visible;
        this._transitioning = true;
        beginEvent.emit(this);
        var action = visible ?
            (this.transitionAddClass ? animate_1.Animate.enter : animate_1.Animate.leave) :
            (this.transitionAddClass ? animate_1.Animate.leave : animate_1.Animate.enter);
        if (visible && this.hideScroll && this.element && !this._previousOverflow) {
            var style = this._body.style['overflow'];
            if (style !== 'hidden') {
                this._previousOverflow = style;
                this._body.style['overflow'] = 'hidden';
            }
        }
        else if (!visible && this.hideScroll && this.element && this._previousOverflow !== null) {
            this._body.style['overflow'] = this._previousOverflow;
            this._previousOverflow = null;
        }
        return action(this.element.nativeElement, this.transitionClass).then(function () {
            _this._transitioning = false;
            endEvent.emit(_this);
        });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], MdBackdrop.prototype, "clickClose", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], MdBackdrop.prototype, "hideScroll", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], MdBackdrop.prototype, "onHiding", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], MdBackdrop.prototype, "onHidden", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], MdBackdrop.prototype, "onShowing", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], MdBackdrop.prototype, "onShown", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], MdBackdrop.prototype, "transitionClass", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], MdBackdrop.prototype, "transitionAddClass", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], MdBackdrop.prototype, "visible", null);
    MdBackdrop = __decorate([
        core_1.Component({
            selector: 'md-backdrop',
            template: '',
            encapsulation: core_1.ViewEncapsulation.None,
            host: {
                'class': 'md-backdrop',
                '(click)': 'onClick()',
            },
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, viewport_1.ViewportHelper])
    ], MdBackdrop);
    return MdBackdrop;
}());
exports.MdBackdrop = MdBackdrop;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFja2Ryb3AuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9iYWNrZHJvcC9iYWNrZHJvcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsd0JBQXNCLHlCQUF5QixDQUFDLENBQUE7QUFDaEQscUJBQW9GLGVBQWUsQ0FBQyxDQUFBO0FBQ3BHLHlCQUE2QiwwQkFBMEIsQ0FBQyxDQUFBO0FBZ0J4RDtJQXVDRSxvQkFBbUIsT0FBbUIsRUFBUyxRQUF3QjtRQUFwRCxZQUFPLEdBQVAsT0FBTyxDQUFZO1FBQVMsYUFBUSxHQUFSLFFBQVEsQ0FBZ0I7UUFqQ3ZFLGVBQVUsR0FBWSxLQUFLLENBQUM7UUFNNUIsZUFBVSxHQUFZLElBQUksQ0FBQztRQU0zQixhQUFRLEdBQTZCLElBQUksbUJBQVksQ0FBYSxLQUFLLENBQUMsQ0FBQztRQU16RSxhQUFRLEdBQTZCLElBQUksbUJBQVksQ0FBYSxLQUFLLENBQUMsQ0FBQztRQU96RSxjQUFTLEdBQTZCLElBQUksbUJBQVksRUFBYyxDQUFDO1FBTXJFLFlBQU8sR0FBNkIsSUFBSSxtQkFBWSxFQUFjLENBQUM7UUFTNUQsb0JBQWUsR0FBVyxXQUFXLENBQUM7UUFPdEMsdUJBQWtCLEdBQUcsSUFBSSxDQUFDO1FBZXZCLGFBQVEsR0FBWSxLQUFLLENBQUM7UUFDNUIsbUJBQWMsR0FBWSxLQUFLLENBQUM7UUFDaEMsc0JBQWlCLEdBQVcsSUFBSSxDQUFDO1FBQ2pDLFVBQUssR0FBZ0IsUUFBUSxDQUFDLElBQUksQ0FBQztJQS9CM0MsQ0FBQztJQW1CRCxzQkFBSSwrQkFBTzthQUFYO1lBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDdkIsQ0FBQzthQUdELFVBQVksS0FBYztZQUN4QixJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3JCLENBQUM7OztPQUxBO0lBWUQsNEJBQU8sR0FBUDtRQUNFLEVBQUUsQ0FB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
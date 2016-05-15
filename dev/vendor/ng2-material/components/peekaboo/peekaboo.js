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
var media_1 = require("../../core/util/media");
var util_1 = require("../../core/util/util");
var viewport_1 = require("../../core/util/viewport");
var MdPeekaboo = (function () {
    function MdPeekaboo(media, element, viewport, _app) {
        var _this = this;
        this.media = media;
        this.element = element;
        this.viewport = viewport;
        this._app = _app;
        this.break = 100;
        this._active = false;
        this._breakXs = -1;
        this._breakSm = -1;
        this._breakMd = -1;
        this._breakLg = -1;
        this._breakXl = -1;
        this._breakpoint = null;
        this._scroller = null;
        this._mediaListeners = [];
        this._windowScroll = this.evaluate.bind(this);
        MdPeekaboo.SIZES.forEach(function (size) {
            _this._watchMediaQuery(size);
            if (_this.media.hasMedia(size)) {
                _this._breakpoint = size;
            }
        });
        this.evaluate();
        this._scrollTick = util_1.debounce(function () {
            if (!!_this._app.tick) {
                _this._app.tick();
            }
        }, 100, this);
    }
    MdPeekaboo.MakeNumber = function (value) {
        return typeof value === 'string' ? parseInt(value, 10) : value;
    };
    Object.defineProperty(MdPeekaboo.prototype, "active", {
        get: function () {
            return this._active;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdPeekaboo.prototype, "breakXs", {
        get: function () {
            return this._breakXs;
        },
        set: function (value) {
            this._breakXs = MdPeekaboo.MakeNumber(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdPeekaboo.prototype, "breakSm", {
        get: function () {
            return this._breakSm;
        },
        set: function (value) {
            this._breakSm = MdPeekaboo.MakeNumber(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdPeekaboo.prototype, "breakMd", {
        get: function () {
            return this._breakMd;
        },
        set: function (value) {
            this._breakMd = MdPeekaboo.MakeNumber(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdPeekaboo.prototype, "breakLg", {
        get: function () {
            return this._breakLg;
        },
        set: function (value) {
            this._breakLg = MdPeekaboo.MakeNumber(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdPeekaboo.prototype, "breakXl", {
        get: function () {
            return this._breakXl;
        },
        set: function (value) {
            this._breakXl = MdPeekaboo.MakeNumber(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdPeekaboo.prototype, "breakpoint", {
        get: function () {
            return this._breakpoint;
        },
        set: function (size) {
            this._breakpoint = size;
            this.evaluate();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdPeekaboo.prototype, "scroller", {
        get: function () {
            return this._scroller;
        },
        set: function (scroll) {
            if (this._scroller) {
                this._scroller.removeEventListener('scroll', this._windowScroll);
            }
            this._scroller = scroll;
            if (this._scroller) {
                this._scroller.addEventListener('scroll', this._windowScroll, true);
            }
        },
        enumerable: true,
        configurable: true
    });
    MdPeekaboo.prototype.ngOnDestroy = function () {
        this._mediaListeners.forEach(function (l) {
            l.destroy();
        });
        this._mediaListeners = [];
    };
    MdPeekaboo.prototype._watchMediaQuery = function (size) {
        var _this = this;
        var l = this.media.listen(media_1.Media.getQuery(size));
        l.onMatched.subscribe(function (mql) {
            _this.breakpoint = size;
        });
        this._mediaListeners.push(l);
    };
    MdPeekaboo.prototype.evaluate = function () {
        var top = this._scroller ? this._scroller.scrollTop : this.viewport.scrollTop();
        var bp = this.break;
        switch (this._breakpoint) {
            case 'xl':
                if (this._breakXl !== -1) {
                    bp = this._breakXl;
                    break;
                }
            case 'lg':
                if (this._breakLg !== -1) {
                    bp = this._breakLg;
                    break;
                }
            case 'md':
                if (this._breakMd !== -1) {
                    bp = this._breakMd;
                    break;
                }
            case 'sm':
                if (this._breakSm !== -1) {
                    bp = this._breakSm;
                    break;
                }
            case 'xs':
                if (this._breakXs !== -1) {
                    bp = this._breakXs;
                    break;
                }
        }
        if (top >= bp && !this._active) {
            this._active = true;
            this._scrollTick();
        }
        else if (top < bp && this._active) {
            this._active = false;
            this._scrollTick();
        }
        return bp;
    };
    MdPeekaboo.SIZES = ['xs', 'sm', 'md', 'lg', 'xl'];
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], MdPeekaboo.prototype, "break", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], MdPeekaboo.prototype, "breakAction", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number), 
        __metadata('design:paramtypes', [Number])
    ], MdPeekaboo.prototype, "breakXs", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number), 
        __metadata('design:paramtypes', [Number])
    ], MdPeekaboo.prototype, "breakSm", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number), 
        __metadata('design:paramtypes', [Number])
    ], MdPeekaboo.prototype, "breakMd", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number), 
        __metadata('design:paramtypes', [Number])
    ], MdPeekaboo.prototype, "breakLg", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number), 
        __metadata('design:paramtypes', [Number])
    ], MdPeekaboo.prototype, "breakXl", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object), 
        __metadata('design:paramtypes', [Object])
    ], MdPeekaboo.prototype, "scroller", null);
    MdPeekaboo = __decorate([
        core_1.Directive({
            selector: '[md-peekaboo]',
            host: {
                '[class.md-peekaboo-active]': 'active',
                '[attr.breakAction]': 'breakAction',
                '(window:scroll)': '_windowScroll($event)'
            }
        }), 
        __metadata('design:paramtypes', [media_1.Media, core_1.ElementRef, viewport_1.ViewportHelper, core_1.ApplicationRef])
    ], MdPeekaboo);
    return MdPeekaboo;
}());
exports.MdPeekaboo = MdPeekaboo;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGVla2Fib28uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9wZWVrYWJvby9wZWVrYWJvby50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQXNFLGVBQWUsQ0FBQyxDQUFBO0FBQ3RGLHNCQUFtQyx1QkFBdUIsQ0FBQyxDQUFBO0FBQzNELHFCQUF1QixzQkFBc0IsQ0FBQyxDQUFBO0FBQzlDLHlCQUE2QiwwQkFBMEIsQ0FBQyxDQUFBO0FBb0J4RDtJQTZGRSxvQkFBbUIsS0FBWSxFQUNYLE9BQW1CLEVBQ3BCLFFBQXdCLEVBQ3ZCLElBQW9CO1FBaEcxQyxpQkErS0M7UUFsRm9CLFVBQUssR0FBTCxLQUFLLENBQU87UUFDWCxZQUFPLEdBQVAsT0FBTyxDQUFZO1FBQ3BCLGFBQVEsR0FBUixRQUFRLENBQWdCO1FBQ3ZCLFNBQUksR0FBSixJQUFJLENBQWdCO1FBM0Z4QyxVQUFLLEdBQVcsR0FBRyxDQUFDO1FBU1osWUFBTyxHQUFZLEtBQUssQ0FBQztRQUt6QixhQUFRLEdBQVcsQ0FBQyxDQUFDLENBQUM7UUFTdEIsYUFBUSxHQUFXLENBQUMsQ0FBQyxDQUFDO1FBU3RCLGFBQVEsR0FBVyxDQUFDLENBQUMsQ0FBQztRQVN0QixhQUFRLEdBQVcsQ0FBQyxDQUFDLENBQUM7UUFTdEIsYUFBUSxHQUFXLENBQUMsQ0FBQyxDQUFDO1FBU3RCLGdCQUFXLEdBQVcsSUFBSSxDQUFDO1FBVzNCLGNBQVMsR0FBUSxJQUFJLENBQUM7UUFldEIsb0JBQWUsR0FBb0IsRUFBRSxDQUFDO1FBb0N0QyxrQkFBYSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBN0IvQyxVQUFVLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxVQUFDLElBQVk7WUFDcEMsS0FBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzVCLEVBQUUsQ0FBQyxDQUFD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
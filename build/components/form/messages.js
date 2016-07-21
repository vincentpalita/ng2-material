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
var forms_1 = require("@angular/forms");
var core_1 = require("@angular/core");
var shared_1 = require("@angular/forms/src/directives/shared");
var MdMessage = (function () {
    function MdMessage() {
        this.okay = true;
    }
    __decorate([
        core_1.Input('mdMessage'), 
        __metadata('design:type', String)
    ], MdMessage.prototype, "errorKey", void 0);
    MdMessage = __decorate([
        core_1.Directive({
            selector: '[mdMessage]',
            host: {
                '[style.display]': 'okay ? "none" : "inherit"'
            }
        }), 
        __metadata('design:paramtypes', [])
    ], MdMessage);
    return MdMessage;
}());
exports.MdMessage = MdMessage;
var MdMessages = (function () {
    function MdMessages(_parent) {
        this._parent = _parent;
        this._controlSubscription = null;
    }
    Object.defineProperty(MdMessages.prototype, "path", {
        get: function () {
            return shared_1.controlPath(this.property, this._parent);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdMessages.prototype, "formDirective", {
        get: function () {
            return this._parent.formDirective;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdMessages.prototype, "control", {
        get: function () {
            return this.formDirective.getControl(this);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdMessages.prototype, "valid", {
        get: function () {
            return !!this.control.valid;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdMessages.prototype, "isTouched", {
        get: function () {
            return this.control.touched;
        },
        enumerable: true,
        configurable: true
    });
    MdMessages.prototype.ngOnInit = function () {
        this._controlSubscription = this.control.statusChanges.subscribe(this._valueChanged.bind(this));
    };
    MdMessages.prototype.ngOnDestroy = function () {
        this._controlSubscription.unsubscribe();
    };
    MdMessages.prototype._valueChanged = function () {
        var errors = null;
        errors = this.control.errors;
        if (errors) {
            this.messages.toArray().forEach(function (m) {
                m.okay = !m.errorKey ? !errors : !errors.hasOwnProperty(m.errorKey);
            });
        }
        else {
            this.messages.toArray().forEach(function (m) {
                m.okay = true;
            });
        }
    };
    __decorate([
        core_1.Input('mdMessages'), 
        __metadata('design:type', String)
    ], MdMessages.prototype, "property", void 0);
    __decorate([
        core_1.ContentChildren(MdMessage), 
        __metadata('design:type', core_1.QueryList)
    ], MdMessages.prototype, "messages", void 0);
    MdMessages = __decorate([
        core_1.Directive({
            selector: '[mdMessages]',
            host: {
                'md-messages': '',
                '[style.display]': '(valid || !isTouched) ? "none" : "inherit"',
                '[class.md-valid]': 'valid && isTouched',
                '[class.md-invalid]': '!valid && isTouched'
            }
        }),
        __param(0, core_1.Host()),
        __param(0, core_1.SkipSelf()), 
        __metadata('design:paramtypes', [forms_1.ControlContainer])
    ], MdMessages);
    return MdMessages;
}());
exports.MdMessages = MdMessages;
//# sourceMappingURL=messages.js.map
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
var MdDialogTitle = (function () {
    function MdDialogTitle() {
    }
    MdDialogTitle = __decorate([
        core_1.Component({
            selector: 'md-dialog-title',
            template: "<ng-content></ng-content>",
            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
        }), 
        __metadata('design:paramtypes', [])
    ], MdDialogTitle);
    return MdDialogTitle;
}());
exports.MdDialogTitle = MdDialogTitle;
var MdDialogActions = (function () {
    function MdDialogActions() {
    }
    MdDialogActions = __decorate([
        core_1.Component({
            selector: 'md-dialog-actions',
            template: "<ng-content></ng-content>",
            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
        }), 
        __metadata('design:paramtypes', [])
    ], MdDialogActions);
    return MdDialogActions;
}());
exports.MdDialogActions = MdDialogActions;
var MdDialog = (function () {
    function MdDialog() {
        this.title = '';
        this.text = '';
        this.cancel = '';
        this.ok = '';
    }
    MdDialog.prototype.show = function () {
        return Promise.resolve(null);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], MdDialog.prototype, "title", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], MdDialog.prototype, "text", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], MdDialog.prototype, "cancel", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], MdDialog.prototype, "ok", void 0);
    MdDialog = __decorate([
        core_1.Component({
            selector: 'md-dialog',
            directives: [MdDialogTitle, MdDialogActions],
            template: "<md-dialog-title><h2 class=\"md-title\">{{ title }}</h2></md-dialog-title>\n<md-dialog-actions>\n  <button *ngIf=\"cancel != ''\" md-button type=\"button\" (click)=\"dialog.close(false)\">\n    <span>{{ cancel }}</span>\n  </button>\n  <button *ngIf=\"ok != ''\" md-button class=\"md-primary\" type=\"button\" (click)=\"dialog.close(true)\">\n    <span>{{ ok }}</span>\n  </button>\n</md-dialog-actions>\n<ng-content select=\"md-dialog-title\"></ng-content>\n<ng-content></ng-content>\n<ng-content select=\"md-dialog-actions\"></ng-content>\n"
        }), 
        __metadata('design:paramtypes', [])
    ], MdDialog);
    return MdDialog;
}());
exports.MdDialog = MdDialog;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvZGlhbG9nL2RpYWxvZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQXdELGVBQWUsQ0FBQyxDQUFBO0FBUXhFO0lBQUE7SUFDQSxDQUFDO0lBTkQ7UUFBQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLGlCQUFpQjtZQUMzQixRQUFRLEVBQUUsMkJBQTJCO1lBQ3JDLGVBQWUsRUFBRSw4QkFBdUIsQ0FBQyxNQUFNO1NBQ2hELENBQUM7O3FCQUFBO0lBRUYsb0JBQUM7QUFBRCxDQUFDLEFBREQsSUFDQztBQURZLHFCQUFhLGdCQUN6QixDQUFBO0FBT0Q7SUFBQTtJQUNBLENBQUM7SUFORDtRQUFDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsbUJBQW1CO1lBQzdCLFFBQVEsRUFBRSwyQkFBMkI7WUFDckMsZUFBZSxFQUFFLDhCQUF1QixDQUFDLE1BQU07U0FDaEQsQ0FBQzs7dUJBQUE7SUFFRixzQkFBQztBQUFELENBQUMsQUFERCxJQUNDO0FBRFksdUJBQWUsa0JBQzNCLENBQUE7QUFvQkQ7SUFBQTtRQUNXLFVBQUssR0FBVyxFQUFFLENBQUM7UUFDbkIsU0FBSSxHQUFXLEVBQUUsQ0FBQztRQUNsQixXQUFNLEdBQVcsRUFBRSxDQUFDO1FBQ3BCLE9BQUUsR0FBVyxFQUFFLENBQUM7SUFLM0IsQ0FBQztJQUhDLHVCQUFJLEdBQUo7UUFDRSxNQUFNLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMvQixDQUFDO0lBUEQ7UUFBQyxZQUFLLEVBQUU7OzJDQUFBO0lBQ1I7UUFBQyxZQUFLLEVBQUU7OzBDQUFBO0lBQ1I7UUFBQyxZQUFLLEVBQUU7OzRDQUFBO0lBQ1I7UUFBQyxZQUFLLEVBQUU7O3dDQUFBO0lBckJWO1FBQUMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxXQUFXO1lBQ3JCLFVBQVUsRUFBRSxDQUFDLGFBQWEsRUFBRSxlQUFlLENBQUM7WUFDNUMsUUFBUSxFQUFFLGdpQkFZWDtTQUNBLENBQUM7O2dCQUFBO0lBVUYsZUFBQztBQUFELENBQUMsQUFURCxJQVNDO0FBVFksZ0JBQVEsV0FTcEIsQ0FBQSJ9
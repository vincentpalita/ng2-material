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
var core_1 = require('@angular/core');
var radio_1 = require('@angular2-material/radio');
var RadioBasicUsageComponent = (function () {
    function RadioBasicUsageComponent() {
        this.data = { group1: 'Banana', group2: '2', group3: 'avatar-1' };
        this.avatarData = [
            { id: 'images/avatars/avatar1.svg', title: 'avatar 1', value: 'avatar-1' },
            { id: 'images/avatars/avatar2.svg', title: 'avatar 2', value: 'avatar-2' },
            { id: 'images/avatars/avatar3.svg', title: 'avatar 3', value: 'avatar-3' }
        ];
    }
    RadioBasicUsageComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'radio-basic-usage',
            templateUrl: 'radio-basic-usage.component.html',
            styleUrls: ['radio-basic-usage.component.css'],
            directives: [radio_1.MdRadioButton, radio_1.MdRadioGroup],
            providers: [radio_1.MdRadioDispatcher]
        }), 
        __metadata('design:paramtypes', [])
    ], RadioBasicUsageComponent);
    return RadioBasicUsageComponent;
}());
exports.RadioBasicUsageComponent = RadioBasicUsageComponent;
//# sourceMappingURL=radio-basic-usage.component.js.map
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
var ng2_material_1 = require('ng2-material');
var imagePath = 'images/avatars/avatar11.svg';
var ListBasicUsageComponent = (function () {
    function ListBasicUsageComponent() {
        this.phones = [
            { type: 'Home', number: '(555) 251-1234' }, { type: 'Cell', number: '(555) 786-9841' },
            { type: 'Office', number: '(555) 314-1592' }
        ];
        this.todos = [
            {
                face: imagePath,
                what: 'Brunch this weekend?',
                who: 'Min Li Chan',
                when: '3:08PM',
                notes: ' I\'ll be in your neighborhood doing errands'
            },
            {
                face: imagePath,
                what: 'Brunch this weekend?',
                who: 'Min Li Chan',
                when: '3:08PM',
                notes: ' I\'ll be in your neighborhood doing errands'
            },
            {
                face: imagePath,
                what: 'Brunch this weekend?',
                who: 'Min Li Chan',
                when: '3:08PM',
                notes: ' I\'ll be in your neighborhood doing errands'
            },
            {
                face: imagePath,
                what: 'Brunch this weekend?',
                who: 'Min Li Chan',
                when: '3:08PM',
                notes: ' I\'ll be in your neighborhood doing errands'
            },
            {
                face: imagePath,
                what: 'Brunch this weekend?',
                who: 'Min Li Chan',
                when: '3:08PM',
                notes: ' I\'ll be in your neighborhood doing errands'
            },
        ];
    }
    ListBasicUsageComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'list-basic-usage',
            templateUrl: 'list-basic-usage.component.html',
            styleUrls: ['list-basic-usage.component.css'],
            directives: [ng2_material_1.MATERIAL_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [])
    ], ListBasicUsageComponent);
    return ListBasicUsageComponent;
}());
exports.ListBasicUsageComponent = ListBasicUsageComponent;
//# sourceMappingURL=list-basic-usage.component.js.map
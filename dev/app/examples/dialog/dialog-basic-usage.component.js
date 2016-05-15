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
var DialogBasicUsageComponent = (function () {
    function DialogBasicUsageComponent() {
    }
    DialogBasicUsageComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'dialog-basic-usage',
            templateUrl: 'dialog-basic-usage.component.html',
            styleUrls: ['dialog-basic-usage.component.css'],
            directives: [ng2_material_1.MATERIAL_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [])
    ], DialogBasicUsageComponent);
    return DialogBasicUsageComponent;
}());
exports.DialogBasicUsageComponent = DialogBasicUsageComponent;
var DialogCustom = (function () {
    function DialogCustom() {
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], DialogCustom.prototype, "fruit", void 0);
    DialogCustom = __decorate([
        core_1.Component({
            selector: 'dialog-custom',
            template: "\n  <form>\n    <h2 class=\"md-title\">{{fruit}} (Fruit)</h2>\n    <div>\n      <p>\n        The mango is a juicy stone fruit belonging to the genus Mangifera, consisting of numerous\n        tropical fruiting trees, cultivated mostly for edible fruit. The majority of these species\n        are found in nature as wild mangoes. They all belong to the flowering plant family\n        Anacardiaceae. The mango is native to South and Southeast Asia, from where it has been\n        distributed worldwide to become one of the most cultivated fruits in the tropics.\n      </p>\n      <p>\n        The highest concentration of Mangifera genus is in the western part of Malesia (Sumatra,\n        Java and Borneo) and in Burma and India. While other Mangifera species (e.g. horse mango,\n        M. foetida) are also grown on a more localized basis, Mangifera indica&mdash;the \"common\n        mango\" or \"Indian mango\"&mdash;is the only mango tree commonly cultivated in many tropical\n        and subtropical regions.\n      </p>\n      <p>\n        It originated in Indian subcontinent (present day India and Pakistan) and Burma. It is the\n        national fruit of India, Pakistan, and the Philippines, and the national tree of\n        Bangladesh. In several cultures, its fruit and leaves are ritually used as floral\n        decorations at weddings, public celebrations, and religious ceremonies.\n      </p>\n    </div>\n    <md-dialog-actions>\n      <a md-button href=\"http://en.wikipedia.org/wiki/Mango\" target=\"_blank\">\n        <span>More on Wikipedia</span>\n      </a>\n      <span flex></span>\n      <button md-button (click)=\"dialog.close(false)\">\n        <span>Ignore</span>\n      </button>\n      <button md-button class=\"md-primary\" (click)=\"dialog.close(true)\">\n        <span>Interesting...</span>\n      </button>\n    </md-dialog-actions>\n  </form>\n  ",
            directives: [ng2_material_1.MATERIAL_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [])
    ], DialogCustom);
    return DialogCustom;
}());
//# sourceMappingURL=dialog-basic-usage.component.js.map
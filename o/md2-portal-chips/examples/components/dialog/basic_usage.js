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
var core_1 = require("angular2/core");
var all_1 = require("ng2-material/all");
var dom_adapter_1 = require("angular2/src/platform/dom/dom_adapter");
var DialogBasicUsage = (function () {
    function DialogBasicUsage(dialog, media, element) {
        this.dialog = dialog;
        this.media = media;
        this.element = element;
        this.status = '  ';
        this.customFullscreen = this.media.hasMedia('xs') || this.media.hasMedia('sm');
    }
    DialogBasicUsage.prototype.showAlert = function (ev) {
        var config = new all_1.MdDialogConfig()
            .parent(dom_adapter_1.DOM.query('#popupContainer'))
            .textContent('You can specify some description text in here')
            .title('This is an alert title')
            .ok('Got it!')
            .targetEvent(ev);
        this.dialog.open(all_1.MdDialogBasic, this.element, config);
    };
    ;
    DialogBasicUsage.prototype.showConfirm = function (ev) {
        var _this = this;
        var config = new all_1.MdDialogConfig()
            .textContent('All of the banks have agreed to forgive you your debts.')
            .clickOutsideToClose(false)
            .title('Would you like to delete your debt?')
            .ariaLabel('Lucky day')
            .ok('Please do it!')
            .cancel('Sounds like a scam')
            .targetEvent(ev);
        this.dialog.open(all_1.MdDialogBasic, this.element, config)
            .then(function (ref) {
            ref.whenClosed.then(function (result) {
                if (result) {
                    _this.status = 'You decided to get rid of your debt.';
                }
                else {
                    _this.status = 'You decided to keep your debt.';
                }
            });
        });
    };
    ;
    DialogBasicUsage.prototype.showAdvanced = function (ev) {
        var _this = this;
        var config = new CustomDialogConfig()
            .fruit("Mango")
            .clickOutsideToClose(false)
            .targetEvent(ev);
        this.dialog.open(DialogCustom, this.element, config)
            .then(function (ref) {
            ref.whenClosed.then(function (interesting) {
                if (interesting) {
                    _this.status = 'That article was interesting.';
                }
                else {
                    _this.status = 'Look for something else.';
                }
            });
        });
    };
    ;
    DialogBasicUsage.prototype.showTabDialog = function (ev) {
    };
    ;
    DialogBasicUsage = __decorate([
        core_1.Component({
            selector: 'dialog-basic-usage',
            templateUrl: 'examples/components/dialog/basic_usage.html',
            styleUrls: ['examples/components/dialog/basic_usage.css'],
            directives: [all_1.MATERIAL_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [all_1.MdDialog, all_1.Media, core_1.ElementRef])
    ], DialogBasicUsage);
    return DialogBasicUsage;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = DialogBasicUsage;
var CustomDialogConfig = (function (_super) {
    __extends(CustomDialogConfig, _super);
    function CustomDialogConfig() {
        _super.apply(this, arguments);
    }
    CustomDialogConfig.prototype.fruit = function (name) {
        this.context.fruit = name;
        return this;
    };
    return CustomDialogConfig;
}(all_1.MdDialogConfig));
var DialogCustom = (function () {
    function DialogCustom(dialog) {
        this.dialog = dialog;
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], DialogCustom.prototype, "fruit", void 0);
    DialogCustom = __decorate([
        core_1.Component({
            selector: 'dialog-custom',
            template: "\n  <form>\n    <h2 class=\"md-title\">{{fruit}} (Fruit)</h2>\n    <div>\n      <p>\n        The mango is a juicy stone fruit belonging to the genus Mangifera, consisting of numerous\n        tropical fruiting trees, cultivated mostly for edible fruit. The majority of these species\n        are found in nature as wild mangoes. They all belong to the flowering plant family\n        Anacardiaceae. The mango is native to South and Southeast Asia, from where it has been\n        distributed worldwide to become one of the most cultivated fruits in the tropics.\n      </p>\n      <p>\n        The highest concentration of Mangifera genus is in the western part of Malesia (Sumatra,\n        Java and Borneo) and in Burma and India. While other Mangifera species (e.g. horse mango,\n        M. foetida) are also grown on a more localized basis, Mangifera indica&mdash;the \"common\n        mango\" or \"Indian mango\"&mdash;is the only mango tree commonly cultivated in many tropical\n        and subtropical regions.\n      </p>\n      <p>\n        It originated in Indian subcontinent (present day India and Pakistan) and Burma. It is the\n        national fruit of India, Pakistan, and the Philippines, and the national tree of\n        Bangladesh. In several cultures, its fruit and leaves are ritually used as floral\n        decorations at weddings, public celebrations, and religious ceremonies.\n      </p>\n    </div>\n    <md-dialog-actions>\n      <a md-button href=\"http://en.wikipedia.org/wiki/Mango\" target=\"_blank\">\n        <span>More on Wikipedia</span>\n      </a>\n      <span flex></span>\n      <button md-button (click)=\"dialog.close(false)\">\n        <span>Ignore</span>\n      </button>\n      <button md-button class=\"md-primary\" (click)=\"dialog.close(true)\">\n        <span>Interesting...</span>\n      </button>\n    </md-dialog-actions>\n  </form>\n  ",
            styles: [""],
            directives: [all_1.MATERIAL_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [all_1.MdDialogRef])
    ], DialogCustom);
    return DialogCustom;
}());
//# sourceMappingURL=basic_usage.js.map
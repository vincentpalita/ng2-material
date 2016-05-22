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
var highlight_component_1 = require('./highlight.component');
var HighlightContainerComponent = (function () {
    function HighlightContainerComponent(elementRef) {
        this.elementRef = elementRef;
        this.selector = '';
    }
    HighlightContainerComponent.prototype.ngAfterViewInit = function () {
        // Find children and highlight them in place
        if (this.selector !== '' && this.elementRef) {
            var blocks = this.elementRef.nativeElement.querySelectorAll(this.selector);
            for (var i = 0; i < blocks.length; i++) {
                var codeBlock = blocks[i];
                var inputCode = codeBlock.innerText;
                var hasType = codeBlock.className.indexOf('lang-') === 0;
                var language = hasType ? codeBlock.className.replace('lang-', '') : 'html';
                var code = highlight_component_1.HighlightComponent.highlight(language, inputCode);
                codeBlock.classList.add('highlight');
                codeBlock.innerHTML = code;
            }
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], HighlightContainerComponent.prototype, "selector", void 0);
    HighlightContainerComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'docs-highlight-container',
            template: "<ng-content></ng-content>",
            styleUrls: ['highlight-container.component.css']
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], HighlightContainerComponent);
    return HighlightContainerComponent;
}());
exports.HighlightContainerComponent = HighlightContainerComponent;
//# sourceMappingURL=highlight-container.component.js.map
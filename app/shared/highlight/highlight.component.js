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
var HighlightComponent = (function () {
    function HighlightComponent(element) {
        this.element = element;
        this._text = '';
        this._type = 'typescript';
        this.rendered = null;
    }
    Object.defineProperty(HighlightComponent.prototype, "type", {
        get: function () { return this._type; },
        set: function (value) {
            this._type = value;
            this.render();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HighlightComponent.prototype, "text", {
        get: function () { return this._text; },
        set: function (value) {
            this._text = value;
            this.render();
        },
        enumerable: true,
        configurable: true
    });
    HighlightComponent.prototype.ngAfterContentInit = function () {
        // If there is no text binding, use the body of the element.
        if (this._text === '' && this.element) {
            this.text = this.element.nativeElement.innerText;
        }
    };
    HighlightComponent.prototype.render = function () {
        var lines = this._text.split('\n');
        if (this._text.trim().length === 0 || lines.length === 0) {
            return;
        }
        // Remove empty lines
        lines = lines.filter(function (line) { return line.trim().length > 0; });
        // Make it so each line starts at 0 whitespace
        var firstLineWhitespace = lines[0].match(/^\s*/)[0];
        var startingWhitespaceRegex = new RegExp('^' + firstLineWhitespace);
        lines = lines.map(function (line) {
            return line.replace(startingWhitespaceRegex, '').replace(/\s+$/, '');
        });
        this.rendered = HighlightComponent.highlight(this._type, lines.join('\n'));
    };
    HighlightComponent.highlight = function (language, code) {
        return hljs.highlight(language, code, true)
            .value.replace(/=<span class="hljs-value">""<\/span>/gi, '')
            .replace('<head>', '')
            .replace('<head/>', '');
    };
    __decorate([
        core_1.Input('type'), 
        __metadata('design:type', String)
    ], HighlightComponent.prototype, "type", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], HighlightComponent.prototype, "text", null);
    HighlightComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'docs-highlight',
            styleUrls: ['highlight.component.css'],
            template: "<pre><code class=\"highlight\" [innerHtml]=\"rendered || text\"><ng-content></ng-content></code></pre>"
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], HighlightComponent);
    return HighlightComponent;
}());
exports.HighlightComponent = HighlightComponent;
//# sourceMappingURL=highlight.component.js.map
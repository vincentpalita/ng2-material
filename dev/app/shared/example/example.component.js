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
var core_1 = require('@angular/core');
var ng2_material_1 = require('ng2-material');
var http_1 = require('@angular/http');
var toolbar_1 = require('@angular2-material/toolbar');
var index_1 = require('../../index');
var highlight_component_1 = require('../highlight/highlight.component');
var ExampleComponent = (function () {
    function ExampleComponent(http, panes, dcl) {
        this.http = http;
        this.panes = panes;
        this.dcl = dcl;
        this._model = null;
        this._reference = null;
        this._loaded = false;
        this._init = false;
        /**
         * The set of source files associated with the example
         */
        this.orderedFiles = [];
        /**
         * True to show the source code for the example
         */
        this.showSource = false;
        this.showTabs = false;
        /**
         * The selected type of source to view.
         */
        this.selected = 'html';
    }
    Object.defineProperty(ExampleComponent.prototype, "model", {
        get: function () { return this._model; },
        set: function (value) {
            this._model = value;
            this.applyModel(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ExampleComponent.prototype, "loaded", {
        get: function () { return this._loaded; },
        enumerable: true,
        configurable: true
    });
    ExampleComponent.prototype.ngAfterViewInit = function () {
        this._init = true;
        if (this._model) {
            this.applyModel(this._model);
        }
    };
    ExampleComponent.prototype.applyModel = function (model) {
        var _this = this;
        if (!this._init) {
            return;
        }
        this.orderedFiles = [];
        this._loaded = false;
        // Fetch template, styles, and source strings for display.
        if (model.template) {
            this.addFile(model.template, 'html');
        }
        if (model.styles) {
            this.addFile(model.styles, 'scss');
        }
        if (model.source) {
            this.addFile(model.source, 'typescript');
        }
        // Render the example component into the view.
        var template = "<" + model.component + "></" + model.component + ">";
        var CompiledComponent = (function () {
            function CompiledComponent() {
            }
            CompiledComponent = __decorate([
                core_1.Component({
                    selector: "md-example-" + model.component,
                    template: template,
                    directives: [ng2_material_1.MATERIAL_DIRECTIVES, index_1.DEMO_DIRECTIVES, highlight_component_1.HighlightComponent]
                }), 
                __metadata('design:paramtypes', [])
            ], CompiledComponent);
            return CompiledComponent;
        }());
        this.dcl.loadNextToLocation(CompiledComponent, this.exampleRef)
            .then(function (ref) {
            if (_this._reference) {
                _this._reference.destroy();
            }
            _this._loaded = true;
            _this._reference = ref;
        });
    };
    ExampleComponent.prototype.addFile = function (data, type) {
        var desc = { type: type, data: data };
        // this.http.get(url).subscribe((res: Response) => { desc.data = res.text(); });
        this.orderedFiles.push(desc);
    };
    ExampleComponent.prototype.toggleSource = function () {
        var _this = this;
        if (this.showSource) {
            this.showTabs = false;
            setTimeout(function () { _this.showSource = false; }, 500);
        }
        else {
            this.showSource = true;
            setTimeout(function () { _this.showTabs = true; }, 25);
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object), 
        __metadata('design:paramtypes', [Object])
    ], ExampleComponent.prototype, "model", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], ExampleComponent.prototype, "orderedFiles", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], ExampleComponent.prototype, "showSource", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], ExampleComponent.prototype, "showTabs", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], ExampleComponent.prototype, "selected", void 0);
    __decorate([
        core_1.ViewChild('example', { read: core_1.ViewContainerRef }), 
        __metadata('design:type', Object)
    ], ExampleComponent.prototype, "exampleRef", void 0);
    ExampleComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'docs-example',
            templateUrl: 'example.component.html',
            styleUrls: ['example.component.css'],
            directives: [ng2_material_1.MATERIAL_DIRECTIVES, highlight_component_1.HighlightComponent, toolbar_1.MdToolbar]
        }),
        __param(1, core_1.Query(ng2_material_1.MdTabs)), 
        __metadata('design:paramtypes', [http_1.Http, core_1.QueryList, core_1.DynamicComponentLoader])
    ], ExampleComponent);
    return ExampleComponent;
}());
exports.ExampleComponent = ExampleComponent;
//# sourceMappingURL=example.component.js.map
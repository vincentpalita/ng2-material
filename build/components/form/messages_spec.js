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
var testing_1 = require("@angular/core/testing");
var core_1 = require("@angular/core");
var index_1 = require("../../index");
var forms_1 = require("@angular/forms");
var platform_browser_1 = require("@angular/platform-browser");
function main() {
    var defaultTemplate = "<form [formGroup]=\"form\">\n      <input type=\"text\" formControlName=\"name\" name=\"name\" />\n      <section mdMessages=\"name\"> \n        <div mdMessage=\"required\">required</div>\n      </section>\n    </form>";
    var TestComponent = (function () {
        function TestComponent(fb) {
            this.form = fb.group({
                name: fb.control('MorTon', forms_1.Validators.required)
            });
        }
        TestComponent = __decorate([
            core_1.Component({
                selector: 'test-app',
                directives: [forms_1.REACTIVE_FORM_DIRECTIVES, index_1.MdMessage, index_1.MdMessages],
                template: defaultTemplate
            }), 
            __metadata('design:paramtypes', [forms_1.FormBuilder])
        ], TestComponent);
        return TestComponent;
    }());
    describe('Form Messages', function () {
        var builder;
        function setup(template) {
            if (template === void 0) { template = defaultTemplate; }
            return builder
                .overrideTemplate(TestComponent, template)
                .createAsync(TestComponent)
                .then(function (fixture) {
                fixture.detectChanges();
                var container = fixture.debugElement.query(platform_browser_1.By.directive(index_1.MdMessages)).injector.get(index_1.MdMessages);
                var messages = fixture.debugElement.queryAll(platform_browser_1.By.directive(index_1.MdMessage)).map(function (b) { return b.injector.get(index_1.MdMessage); });
                return {
                    fixture: fixture,
                    container: container,
                    messages: messages
                };
            }).catch(function () {
            });
        }
        beforeEach(function () {
            testing_1.addProviders([
                forms_1.disableDeprecatedForms(),
                forms_1.provideForms(),
                { provide: core_1.QueryList, useClass: core_1.QueryList },
                { provide: forms_1.FormBuilder, useClass: forms_1.FormBuilder }
            ]);
        });
        beforeEach(testing_1.inject([testing_1.TestComponentBuilder], function (tcb) {
            builder = tcb;
        }));
        describe('md-messages', function () {
            it('should error if used outside of an FormGroup', function () {
                return setup("<div md-messages></div>").catch(function (err) {
                    expect(err).toBeDefined();
                });
            });
            it('should initialize when given model and control group are present', function () {
                return setup().then(function (api) {
                    expect(api.container.isTouched).toBe(false);
                    api.fixture.destroy();
                });
            });
            it('should bind local view references formControlName="ref"', function () {
                return setup().then(function (api) {
                    expect(api.container.isTouched).toBe(false);
                    expect(api.messages.length).toBe(1);
                    expect(api.container.formDirective).not.toBeNull();
                    expect(api.container.control.value).toBe('MorTon');
                });
            });
            it('should add md-invalid class on [mdMessages] based on field validation state', function () {
                return setup().then(function (api) {
                    expect(api.fixture.debugElement.query(platform_browser_1.By.css('[md-messages].md-invalid'))).toBeNull();
                    api.container.control.updateValue(null, { emitEvent: true });
                    var input = api.fixture.debugElement.query(platform_browser_1.By.css('input'));
                    input.nativeElement.focus();
                    input.nativeElement.blur();
                    api.fixture.detectChanges();
                    expect(api.fixture.debugElement.query(platform_browser_1.By.css('[md-messages].md-invalid'))).not.toBeNull();
                });
            });
            it('should add md-valid class on [mdMessages] based on field validation state', function () {
                return setup().then(function (api) {
                    expect(api.fixture.debugElement.query(platform_browser_1.By.css('[md-messages].md-valid'))).toBeNull();
                    api.container.control.updateValue(null, { emitEvent: true });
                    var input = api.fixture.debugElement.query(platform_browser_1.By.css('input'));
                    input.nativeElement.focus();
                    api.container.control.updateValue('MorTon', { emitEvent: true });
                    input.nativeElement.blur();
                    api.fixture.detectChanges();
                    expect(api.fixture.debugElement.query(platform_browser_1.By.css('[md-messages].md-valid'))).not.toBeNull();
                });
            });
            it('should re-export invalid from control or form', function () {
                return setup().then(function (api) {
                    api.container.control.updateValue(null, { emitEvent: true });
                    api.fixture.detectChanges();
                    expect(api.container.control.value).toBe(null);
                    expect(api.container.valid).toBe(false);
                    expect(api.container.formDirective.valid).toBe(false);
                }).catch(function (e) { return console.log(e); });
            });
            it('should re-export valid from control or form', function () {
                return setup().then(function (api) {
                    api.container.control.updateValue('MorTon', { emitEvent: true });
                    api.fixture.detectChanges();
                    expect(api.container.control.valid).toBe(true);
                    expect(api.container.formDirective.valid).toBe(true);
                }).catch(function (e) { return console.log(e); });
            });
        });
    });
}
exports.main = main;
//# sourceMappingURL=messages_spec.js.map
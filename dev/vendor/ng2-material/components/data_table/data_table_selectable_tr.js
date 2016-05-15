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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = require("@angular/core");
require('rxjs/add/operator/share');
require('rxjs/add/operator/map');
var checkbox_1 = require("@angular2-material/checkbox");
var data_table_1 = require('./data_table');
var AbstractMdDataTableSelectableRow = (function () {
    function AbstractMdDataTableSelectableRow(table, _element) {
        this.table = table;
        this._element = _element;
        this.onChange = new core_1.EventEmitter(false);
        this.isActive = false;
        this.onChange.share();
    }
    AbstractMdDataTableSelectableRow.prototype.change = function () {
        this.isActive = !this.isActive;
        var event = {
            name: 'selectable_row_change',
            target: this,
            isActive: this.isActive,
            selectableValue: this.selectableValue
        };
        this.onChange.emit(event);
    };
    AbstractMdDataTableSelectableRow.prototype.ngAfterContentInit = function () { };
    __decorate([
        core_1.Input('selectable-value'), 
        __metadata('design:type', String)
    ], AbstractMdDataTableSelectableRow.prototype, "selectableValue", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], AbstractMdDataTableSelectableRow.prototype, "onChange", void 0);
    AbstractMdDataTableSelectableRow = __decorate([
        __param(0, core_1.Optional()),
        __param(0, core_1.Inject(core_1.forwardRef(function () { return data_table_1.MdDataTable; }))), 
        __metadata('design:paramtypes', [data_table_1.MdDataTable, core_1.ElementRef])
    ], AbstractMdDataTableSelectableRow);
    return AbstractMdDataTableSelectableRow;
}());
exports.AbstractMdDataTableSelectableRow = AbstractMdDataTableSelectableRow;
var MdDataTableHeaderSelectableRow = (function (_super) {
    __extends(MdDataTableHeaderSelectableRow, _super);
    function MdDataTableHeaderSelectableRow(table, _element) {
        _super.call(this, table, _element);
        this.table = table;
        this._element = _element;
    }
    MdDataTableHeaderSelectableRow.prototype._bindListener = function () {
        var _this = this;
        this.table.onSelectableChange
            .map(function (event) { return event.allSelected; })
            .subscribe(function (newActiveStatus) { return _this.isActive = newActiveStatus; });
    };
    MdDataTableHeaderSelectableRow.prototype.ngAfterContentInit = function () {
        if (!!this.table) {
            this._bindListener();
        }
    };
    MdDataTableHeaderSelectableRow = __decorate([
        core_1.Component({
            selector: 'tr[md-data-table-header-selectable-row]',
            template: "\n        <th class=\"md-data-check-cell\">\n            <md-checkbox #check [checked]=\"isActive\"></md-checkbox>\n        </th>\n        <ng-content></ng-content>\n    ",
            directives: [checkbox_1.MdCheckbox],
            host: {
                '[class.active]': 'isActive',
                '(click)': 'change()'
            }
        }),
        __param(0, core_1.Optional()),
        __param(0, core_1.Inject(core_1.forwardRef(function () { return data_table_1.MdDataTable; }))), 
        __metadata('design:paramtypes', [data_table_1.MdDataTable, core_1.ElementRef])
    ], MdDataTableHeaderSelectableRow);
    return MdDataTableHeaderSelectableRow;
}(AbstractMdDataTableSelectableRow));
exports.MdDataTableHeaderSelectableRow = MdDataTableHeaderSelectableRow;
var MdDataTableSelectableRow = (function (_super) {
    __extends(MdDataTableSelectableRow, _super);
    function MdDataTableSelectableRow(table, _element) {
        _super.call(this, table, _element);
        this.table = table;
        this._element = _element;
    }
    MdDataTableSelectableRow.prototype._getIndex = function (element) {
        return Array.prototype.indexOf.call(element.parentNode.children, element).toString();
    };
    MdDataTableSelectableRow.prototype._bindListener = function () {
        var _this = this;
        this.table.onSelectableChange
            .map(function (event) {
            return event.values !== undefined &&
                event.values.length &&
                (event.values.findIndex(function (value) { return value === _this.selectableValue; })) !== -1;
        })
            .subscribe(function (newActiveStatus) { return _this.isActive = newActiveStatus; });
    };
    MdDataTableSelectableRow.prototype.ngAfterContentInit = function () {
        var element = this._element.nativeElement;
        if (this.selectableValue === undefined) {
            this.selectableValue = this._getIndex(element);
        }
        if (!!this.table) {
            this._bindListener();
        }
    };
    MdDataTableSelectableRow = __decorate([
        core_1.Component({
            selector: 'tr[md-data-table-selectable-row]',
            template: "\n        <td class=\"md-data-check-cell\">\n          <md-checkbox #check [checked]=\"isActive\"></md-checkbox>\n        </td>\n        <ng-content></ng-content>\n    ",
            directives: [checkbox_1.MdCheckbox],
            host: {
                '[class.active]': 'isActive',
                '(click)': 'change()'
            }
        }),
        __param(0, core_1.Optional()),
        __param(0, core_1.Inject(core_1.forwardRef(function () { return data_table_1.MdDataTable; }))), 
        __metadata('design:paramtypes', [data_table_1.MdDataTable, core_1.ElementRef])
    ], MdDataTableSelectableRow);
    return MdDataTableSelectableRow;
}(AbstractMdDataTableSelectableRow));
exports.MdDataTableSelectableRow = MdDataTableSelectableRow;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YV90YWJsZV9zZWxlY3RhYmxlX3RyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvZGF0YV90YWJsZS9kYXRhX3RhYmxlX3NlbGVjdGFibGVfdHIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEscUJBQWlILGVBQWUsQ0FBQyxDQUFBO0FBQ2pJLFFBQU8seUJBQXlCLENBQUMsQ0FBQTtBQUNqQyxRQUFPLHVCQUF1QixDQUFDLENBQUE7QUFDL0IseUJBQXlCLDZCQUE2QixDQUFDLENBQUE7QUFDdkQsMkJBQTBCLGNBQWMsQ0FBQyxDQUFBO0FBdUJ6QztJQU9FLDBDQUVtQixLQUFrQixFQUFZLFFBQW9CO1FBQWxELFVBQUssR0FBTCxLQUFLLENBQWE7UUFBWSxhQUFRLEdBQVIsUUFBUSxDQUFZO1FBTHJFLGFBQVEsR0FBcUQsSUFBSSxtQkFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3JGLGFBQVEsR0FBWSxLQUFLLENBQUM7UUFLeEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUN4QixDQUFDO0lBS0QsaURBQU0sR0FBTjtRQUNFLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBRS9CLElBQUksS0FBSyxHQUF1QztZQUM5QyxJQUFJLEVBQUUsdUJBQXVCO1lBQzdCLE1BQU0sRUFBRSxJQUFJO1lBQ1osUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRO1lBQ3ZCLGVBQWUsRUFBRSxJQUFJLENBQUMsZUFBZTtTQUN0QyxDQUFBO1FBQ0QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDNUIsQ0FBQztJQUVELDZEQUFrQixHQUFsQixjQUFzQixDQUFDO0lBM0J2QjtRQUFDLFlBQUssQ0FBQyxrQkFBa0IsQ0FBQzs7NkVBQUE7SUFFMUI7UUFBQyxhQUFNLEVBQUU7O3NFQUFB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
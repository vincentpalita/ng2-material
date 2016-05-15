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
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
var core_1 = require('@angular/core');
require('rxjs/add/operator/share');
var data_table_selectable_tr_1 = require('./data_table_selectable_tr');
__export(require('./data_table_selectable_tr'));
var MdDataTable = (function () {
    function MdDataTable() {
        this.onSelectableAll = new core_1.EventEmitter(false);
        this.onSelectableChange = new core_1.EventEmitter(false);
        this.selected = [];
        this.onSelectableChange.share();
    }
    MdDataTable.prototype.change = function (event) {
        var outputEvent = {
            name: 'selectable_change',
            allSelected: false,
            values: []
        };
        if (event.target instanceof data_table_selectable_tr_1.MdDataTableHeaderSelectableRow === true) {
            if (event.isActive === true) {
                outputEvent.allSelected = true;
                outputEvent.values = this._getRowsValues();
            }
        }
        else {
            outputEvent.values = this.selected.slice(0);
            if (event.isActive === true) {
                outputEvent.values.push(event.selectableValue);
            }
            else {
                var index = outputEvent.values.indexOf(event.selectableValue);
                if (index !== -1) {
                    outputEvent.values.splice(index, 1);
                }
            }
        }
        this.selected = outputEvent.values;
        this.onSelectableChange.emit(outputEvent);
    };
    MdDataTable.prototype._getRowsValues = function () {
        return this._rows.toArray()
            .map(function (tr) { return tr.selectableValue; });
    };
    MdDataTable.prototype.ngAfterContentInit = function () {
        var _this = this;
        if (this.selectable === true) {
            if (!!this._masterRow) {
                this._masterRow.onChange.subscribe(this.change.bind(this));
            }
            this._rows.toArray()
                .map(function (tr) {
                tr.onChange.subscribe(_this.change.bind(_this));
            });
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], MdDataTable.prototype, "selectable", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], MdDataTable.prototype, "onSelectableAll", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], MdDataTable.prototype, "onSelectableChange", void 0);
    __decorate([
        core_1.ContentChild(data_table_selectable_tr_1.MdDataTableHeaderSelectableRow), 
        __metadata('design:type', data_table_selectable_tr_1.MdDataTableHeaderSelectableRow)
    ], MdDataTable.prototype, "_masterRow", void 0);
    __decorate([
        core_1.ContentChildren(data_table_selectable_tr_1.MdDataTableSelectableRow, true), 
        __metadata('design:type', core_1.QueryList)
    ], MdDataTable.prototype, "_rows", void 0);
    MdDataTable = __decorate([
        core_1.Component({
            selector: 'md-data-table',
            template: "<ng-content></ng-content>",
            directives: [data_table_selectable_tr_1.MdDataTableHeaderSelectableRow, data_table_selectable_tr_1.MdDataTableSelectableRow],
            host: {
                '[class.md-data-table]': 'true',
                '[class.md-data-table-selectable]': 'selectable',
            }
        }), 
        __metadata('design:paramtypes', [])
    ], MdDataTable);
    return MdDataTable;
}());
exports.MdDataTable = MdDataTable;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YV90YWJsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2RhdGFfdGFibGUvZGF0YV90YWJsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUEscUJBQWlILGVBQWUsQ0FBQyxDQUFBO0FBQ2pJLFFBQU8seUJBQXlCLENBQUMsQ0FBQTtBQUNqQyx5Q0FBMkcsNEJBQTRCLENBQUMsQ0FBQTtBQUV4SSxpQkFBYyw0QkFBNEIsQ0FBQyxFQUFBO0FBb0IzQztJQWdCRTtRQVpBLG9CQUFlLEdBQXNCLElBQUksbUJBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUU3RCx1QkFBa0IsR0FBc0IsSUFBSSxtQkFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBUWhFLGFBQVEsR0FBa0IsRUFBRSxDQUFDO1FBRzNCLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUNsQyxDQUFDO0lBRUQsNEJBQU0sR0FBTixVQUFPLEtBQXlDO1FBQzlDLElBQUksV0FBVyxHQUEwQjtZQUN2QyxJQUFJLEVBQUUsbUJBQW1CO1lBQ3pCLFdBQVcsRUFBRSxLQUFLO1lBQ2xCLE1BQU0sRUFBRSxFQUFFO1NBQ1gsQ0FBQztRQUNGLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLFlBQVkseURBQThCLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQztZQUNwRSxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsUUFBUSxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUM7Z0JBQzVCLFdBQVcsQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO2dCQUMvQixXQUFXLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztZQUM3QyxDQUFDO1FBQ0gsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ04sV0FBVyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxD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
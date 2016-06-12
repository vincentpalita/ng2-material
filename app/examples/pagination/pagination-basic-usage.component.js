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
var ng2_material_1 = require("ng2-material");
var pagination_datas_1 = require('./pagination-datas');
var PaginationBasicUsageComponent = (function () {
    function PaginationBasicUsageComponent() {
        this.materials = pagination_datas_1.tableDatas;
        this.pagination = {
            currentPage: 1,
            itemsPerPage: 5,
            totalItems: 24
        };
        this.availableLength = [5, 10, 20];
        this.pagedMaterials = [];
        this.refreshMaterials();
    }
    PaginationBasicUsageComponent.prototype.refreshMaterials = function () {
        var start = (this.pagination.currentPage - 1) * this.pagination.itemsPerPage, end = start + this.pagination.itemsPerPage;
        this.pagedMaterials = this.materials.slice(start, end);
    };
    PaginationBasicUsageComponent.prototype.detectChange = function (event) {
        if (event !== undefined && event.name === 'pagination_changed' && event.pagination !== undefined) {
            this.pagination = event.pagination;
            this.refreshMaterials();
        }
    };
    PaginationBasicUsageComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'pagination-basic-usage',
            templateUrl: 'pagination-basic-usage.component.html',
            directives: [ng2_material_1.MATERIAL_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [])
    ], PaginationBasicUsageComponent);
    return PaginationBasicUsageComponent;
}());
exports.PaginationBasicUsageComponent = PaginationBasicUsageComponent;
//# sourceMappingURL=pagination-basic-usage.component.js.map
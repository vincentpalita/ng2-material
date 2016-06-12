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
var PaginationSplitUsageComponent = (function () {
    function PaginationSplitUsageComponent(media) {
        this.media = media;
        this.pages = pagination_datas_1.bookDatas;
        this.pagination = {
            currentPage: 1,
            itemsPerPage: 2,
            totalItems: 6
        };
        this.displayedPages = [];
    }
    PaginationSplitUsageComponent.prototype.refreshPageBySize = function () {
        if (this.media.hasMedia('xs')) {
            this.pagination.itemsPerPage = 1;
            this.rangeFormat = "<span flex=\"" + this.getFlexSize() + "\" layout=\"column\" class=\"page-number\">{start}</span>";
        }
        else {
            this.pagination.itemsPerPage = 2;
            this.rangeFormat = " \n          <span flex=\"" + this.getFlexSize() + "\" layout=\"column\" class=\"page-number\">{start}</span>\n          <span flex=\"" + this.getFlexSize() + "\" layout=\"column\" class=\"page-number\">{end}</span>\n        ";
        }
        this.pagination.currentPage = 1;
        this.refreshPages();
    };
    PaginationSplitUsageComponent.prototype.getFlexSize = function () {
        return Math.round(100 / this.pagination.itemsPerPage);
    };
    PaginationSplitUsageComponent.prototype.refreshPages = function () {
        var start = (this.pagination.currentPage - 1) * this.pagination.itemsPerPage, end = start + this.pagination.itemsPerPage;
        this.displayedPages = this.pages.slice(start, end);
    };
    PaginationSplitUsageComponent.prototype.detectChange = function (event) {
        if (event !== undefined && event.name === 'pagination_changed' && event.pagination !== undefined) {
            this.pagination = event.pagination;
            this.refreshPages();
        }
    };
    PaginationSplitUsageComponent.prototype.ngOnInit = function () {
        this.mediaListener = this.media.listen(ng2_material_1.Media.getQuery('xs'));
        this.mediaListener.onMatched.subscribe(this.refreshPageBySize.bind(this));
    };
    PaginationSplitUsageComponent.prototype.ngOnDestroy = function () {
        this.mediaListener.destroy();
    };
    PaginationSplitUsageComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'pagination-split-usage',
            templateUrl: 'pagination-split-usage.component.html',
            styleUrls: ['pagination-split-usage.component.css'],
            directives: [ng2_material_1.MATERIAL_DIRECTIVES],
            encapsulation: core_1.ViewEncapsulation.None
        }), 
        __metadata('design:paramtypes', [ng2_material_1.Media])
    ], PaginationSplitUsageComponent);
    return PaginationSplitUsageComponent;
}());
exports.PaginationSplitUsageComponent = PaginationSplitUsageComponent;
//# sourceMappingURL=pagination-split-usage.component.js.map
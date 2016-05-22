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
var http_1 = require('@angular/http');
var router_1 = require('@angular/router');
var router_2 = require('@angular/router');
var sidenav_1 = require('@angular2-material/sidenav');
var toolbar_1 = require('@angular2-material/toolbar');
var ng2_material_1 = require('ng2-material');
var ng2_material_2 = require('ng2-material');
var _components_1 = require('./+components');
var _index_1 = require('./+index');
var components_service_1 = require('./shared/components.service');
var footer_component_1 = require('./shared/footer/footer.component');
var navigation_service_1 = require('./shared/navigation.service');
var site_pipe_1 = require('./site.pipe');
var SiteAppComponent = (function () {
    function SiteAppComponent(http, navigation, media, router, _components) {
        this.http = http;
        this.navigation = navigation;
        this.media = media;
        this.router = router;
        this._components = _components;
        this.fullPage = this.media.hasMedia(SiteAppComponent.SIDE_MENU_BREAKPOINT);
        this.site = 'Angular2 Material';
        this.angularVersion = null;
        this.linkTag = null;
        this.components = [];
        this._subscription = null;
    }
    SiteAppComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        var query = ng2_material_1.Media.getQuery(SiteAppComponent.SIDE_MENU_BREAKPOINT);
        this._subscription = this.media.listen(query).onMatched.subscribe(function (mql) {
            _this.menu.mode = mql.matches ? 'side' : 'over';
            _this.menu.toggle(mql.matches).catch(function () { return undefined; });
        });
    };
    Object.defineProperty(SiteAppComponent.prototype, "pushed", {
        get: function () { return this.menu && this.menu.mode === 'side'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SiteAppComponent.prototype, "over", {
        get: function () { return this.menu && this.menu.mode === 'over' && this.menu.opened; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SiteAppComponent.prototype, "sidenavWidth", {
        // TODO(jd): these two property hacks are to work around issues with the peekaboo fixed nav
        // overlapping the sidenav and toolbar.  They will not properly "fix" to the top if inside
        // md-sidenav-layout, and they will overlap the sidenav and scrollbar when outside.  So just
        // calculate left and right properties for fixed toolbars based on the media query and browser
        // scrollbar width.  :sob: :rage:
        get: function () { return this.pushed ? 281 : 0; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SiteAppComponent.prototype, "scrollWidth", {
        get: function () {
            var inner = document.createElement('p');
            inner.style.width = '100%';
            inner.style.height = '200px';
            var outer = document.createElement('div');
            outer.style.position = 'absolute';
            outer.style.top = '0px';
            outer.style.left = '0px';
            outer.style.visibility = 'hidden';
            outer.style.width = '200px';
            outer.style.height = '150px';
            outer.style.overflow = 'hidden';
            outer.appendChild(inner);
            document.body.appendChild(outer);
            var w1 = inner.offsetWidth;
            outer.style.overflow = 'scroll';
            var w2 = inner.offsetWidth;
            if (w1 == w2)
                w2 = outer.clientWidth;
            document.body.removeChild(outer);
            return (w1 - w2);
        },
        enumerable: true,
        configurable: true
    });
    ;
    SiteAppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get('version.json').subscribe(function (res) {
            var json = res.json();
            _this.version = json.version;
            _this.angularVersion = json['@angular/core'];
            _this.linkTag = _this.angularVersion.replace(/[>=^~]/g, '');
        });
        this._components.getComponents().then(function (comps) {
            _this.components = comps;
            var title = 'Angular2 Material';
            document.title = title;
            _this.navigation.currentTitle = title;
            _this.navigation.prevLink = _this.navigation.componentLink(comps[comps.length - 1]);
            _this.navigation.nextLink = _this.navigation.componentLink(comps[0]);
        });
    };
    SiteAppComponent.prototype.ngOnDestroy = function () { this._subscription.unsubscribe(); };
    SiteAppComponent.SIDE_MENU_BREAKPOINT = 'gt-md';
    __decorate([
        core_1.ViewChild(sidenav_1.MdSidenav), 
        __metadata('design:type', sidenav_1.MdSidenav)
    ], SiteAppComponent.prototype, "menu", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], SiteAppComponent.prototype, "fullPage", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], SiteAppComponent.prototype, "sidenavWidth", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], SiteAppComponent.prototype, "scrollWidth", null);
    SiteAppComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'site-app',
            templateUrl: 'site.component.html',
            styleUrls: ['site.component.css'],
            pipes: [site_pipe_1.ComponentsOrderByPipe],
            directives: [
                router_1.ROUTER_DIRECTIVES, ng2_material_1.MATERIAL_DIRECTIVES, sidenav_1.MD_SIDENAV_DIRECTIVES, ng2_material_2.MdIcon, toolbar_1.MdToolbar,
                footer_component_1.FooterComponent
            ]
        }),
        router_1.Routes([
            { path: '/', component: _index_1.IndexComponent },
            { path: '/components/:id', component: _components_1.ComponentsComponent }
        ]), 
        __metadata('design:paramtypes', [http_1.Http, navigation_service_1.NavigationService, ng2_material_1.Media, router_2.Router, components_service_1.ComponentsService])
    ], SiteAppComponent);
    return SiteAppComponent;
}());
exports.SiteAppComponent = SiteAppComponent;
//# sourceMappingURL=site.component.js.map
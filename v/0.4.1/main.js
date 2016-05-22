"use strict";
var common_1 = require('@angular/common');
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var router_1 = require('@angular/router');
var ng2_material_1 = require('ng2-material');
var index_1 = require('./app/index');
core_1.enableProdMode();
if (index_1.environment.production) {
}
platform_browser_dynamic_1.bootstrap(index_1.SiteAppComponent, router_1.ROUTER_PROVIDERS.concat(index_1.DEMO_PROVIDERS, http_1.HTTP_PROVIDERS, ng2_material_1.MATERIAL_BROWSER_PROVIDERS, [
    core_1.provide(common_1.LocationStrategy, { useClass: common_1.HashLocationStrategy })
]));
//# sourceMappingURL=main.js.map
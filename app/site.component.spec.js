"use strict";
var testing_1 = require('@angular/core/testing');
var site_component_1 = require('../app/site.component');
testing_1.beforeEachProviders(function () { return [site_component_1.SiteAppComponent]; });
testing_1.describe('App: Site', function () {
    testing_1.it('should create the app', testing_1.inject([site_component_1.SiteAppComponent], function (app) { testing_1.expect(app).toBeTruthy(); }));
    testing_1.it('should have a name', testing_1.inject([site_component_1.SiteAppComponent], function (app) {
        testing_1.expect(app.site).toEqual('Angular2 Material');
    }));
});
//# sourceMappingURL=site.component.spec.js.map